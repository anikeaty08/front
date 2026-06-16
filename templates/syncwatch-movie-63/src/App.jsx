import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
zinc: {
850: '#1f1f22',
925: '#121214',
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-16 lg:w-64 border-r border-zinc-800/50 flex flex-col justify-between bg-zinc-950 flex-shrink-0 z-20">
<div>

<div className="h-16 flex items-center px-4 lg:px-6">
<div className="flex items-center gap-2 text-white">
<span className="iconify text-indigo-500" data-icon="lucide:film" data-width="20"></span>
<span className="hidden lg:block font-semibold tracking-tight text-lg">SYNC</span>
</div>
</div>

<nav className="flex flex-col gap-1 px-3 mt-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-zinc-900/50 text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:home" data-width="18"></span>
<span className="hidden lg:block text-sm font-medium">Home</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/30 transition-colors" href="#">
<span className="iconify" data-icon="lucide:compass" data-width="18"></span>
<span className="hidden lg:block text-sm font-medium">Browse</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/30 transition-colors" href="#">
<span className="iconify" data-icon="lucide:heart" data-width="18"></span>
<span className="hidden lg:block text-sm font-medium">Favorites</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/30 transition-colors" href="#">
<span className="iconify" data-icon="lucide:users" data-width="18"></span>
<span className="hidden lg:block text-sm font-medium">Friends</span>
</a>
</nav>

<div className="hidden lg:block mt-8 px-6">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Live Parties</h3>
<div className="flex flex-col gap-3">
<div className="group flex items-center gap-3 cursor-pointer">
<div className="relative w-8 h-8 rounded-full overflow-hidden border border-zinc-700">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">Sci-Fi Night</span>
<span className="text-xs text-zinc-600">3 watching • Interstellar</span>
</div>
</div>
<div className="group flex items-center gap-3 cursor-pointer">
<div className="relative w-8 h-8 rounded-full overflow-hidden border border-zinc-700">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">Anime Club</span>
<span className="text-xs text-zinc-600">5 watching • Akira</span>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-800/50">
<button className="flex items-center gap-3 w-full group">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xs font-medium">
                    JD
                </div>
<div className="hidden lg:flex flex-col items-start">
<span className="text-xs font-medium text-zinc-200 group-hover:text-white">John Doe</span>
<span className="text-xs text-zinc-600">Online</span>
</div>
<span className="iconify ml-auto hidden lg:block text-zinc-600 group-hover:text-zinc-400" data-icon="lucide:settings" data-width="16"></span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative bg-zinc-925">

<header className="h-16 flex items-center justify-between px-6 border-b border-zinc-800/50 bg-zinc-950/50 backdrop-blur-sm z-10">
<div className="relative w-64">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
<span className="iconify" data-icon="lucide:search" data-width="16"></span>
</span>
<input className="w-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm rounded-md py-1.5 pl-9 pr-3 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 placeholder:text-zinc-600 transition-all" placeholder="Search movies, series..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="relative text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:bell" data-width="18"></span>
<span className="absolute top-0 right-0 w-2 h-2 bg-indigo-500 rounded-full border-2 border-zinc-950 translate-x-1/3 -translate-y-1/3"></span>
</button>
<div className="h-4 w-px bg-zinc-800"></div>
<button className="bg-white text-black text-xs font-medium px-3 py-1.5 rounded-md hover:bg-zinc-200 transition-colors">
                    + New Party
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 scroll-smooth">

<div className="w-full max-w-6xl mx-auto">
<div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black border border-zinc-800 group">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&amp;w=2525&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

<div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="glass-panel px-3 py-1 rounded-md flex items-center gap-2">
<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
<span className="text-xs font-medium text-white tracking-wide">LIVE</span>
</div>
<button className="text-white/70 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:maximize" data-width="20"></span>
</button>
</div>



<div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

<div className="flex items-center gap-3 mb-4 group/progress">
<span className="text-xs text-zinc-300 font-mono">24:12</span>
<div className="relative flex-1 h-1 bg-zinc-700/50 rounded-full cursor-pointer overflow-hidden">
<div className="absolute top-0 left-0 h-full w-[35%] bg-indigo-500 rounded-full"></div>
<div className="absolute top-0 left-0 h-full w-[35%] bg-indigo-400 blur-[2px]"></div>
</div>
<span className="text-xs text-zinc-400 font-mono">1:42:10</span>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<button className="text-white hover:text-indigo-400 transition-colors">
<span className="iconify" data-icon="lucide:pause" data-width="22" style={{fill: 'white'}}></span>
</button>
<button className="text-zinc-300 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:skip-back" data-width="20"></span>
</button>
<button className="text-zinc-300 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:skip-forward" data-width="20"></span>
</button>
<div className="flex items-center gap-2 group/vol">
<button className="text-zinc-300 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:volume-2" data-width="20"></span>
</button>
<input className="w-20 opacity-0 group-hover/vol:opacity-100 transition-opacity duration-200" type="range"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2">
<span className="iconify" data-icon="lucide:message-square" data-width="20"></span>
</button>
<button className="text-zinc-300 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:settings-2" data-width="20"></span>
</button>
</div>
</div>
</div>
</div>

<div className="mt-6 flex items-start justify-between">
<div>
<h1 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight mb-2">Blade Runner 2049</h1>
<div className="flex items-center gap-3 text-sm text-zinc-400 mb-4">
<span className="px-1.5 py-0.5 border border-zinc-700 rounded text-xs text-zinc-300">4K</span>
<span>2017</span>
<span className="w-1 h-1 rounded-full bg-zinc-600"></span>
<span>2h 44m</span>
<span className="w-1 h-1 rounded-full bg-zinc-600"></span>
<span className="text-indigo-400">Sci-Fi / Thriller</span>
</div>
<p className="max-w-2xl text-zinc-400 text-sm leading-relaxed">
                            Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.
                        </p>
</div>

<div className="flex items-center gap-3">
<button className="h-9 w-9 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-all">
<span className="iconify" data-icon="lucide:plus" data-width="18"></span>
</button>
<button className="h-9 w-9 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-all">
<span className="iconify" data-icon="lucide:share-2" data-width="18"></span>
</button>
</div>
</div>

<div className="mt-12 mb-8">
<h2 className="text-sm font-medium text-white mb-4">Similar to this</h2>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

<div className="group relative cursor-pointer">
<div className="aspect-[2/3] rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="mt-2">
<h3 className="text-xs font-medium text-zinc-200 group-hover:text-white">Dune</h3>
<p className="text-[10px] text-zinc-500">2021</p>
</div>
</div>

<div className="group relative cursor-pointer">
<div className="aspect-[2/3] rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="mt-2">
<h3 className="text-xs font-medium text-zinc-200 group-hover:text-white">Arrival</h3>
<p className="text-[10px] text-zinc-500">2016</p>
</div>
</div>

<div className="group relative cursor-pointer">
<div className="aspect-[2/3] rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="mt-2">
<h3 className="text-xs font-medium text-zinc-200 group-hover:text-white">Ex Machina</h3>
<p className="text-[10px] text-zinc-500">2014</p>
</div>
</div>

<div className="group relative cursor-pointer hidden md:block">
<div className="aspect-[2/3] rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="mt-2">
<h3 className="text-xs font-medium text-zinc-200 group-hover:text-white">Oblivion</h3>
<p className="text-[10px] text-zinc-500">2013</p>
</div>
</div>

<div className="group relative cursor-pointer hidden lg:block">
<div className="aspect-[2/3] rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="mt-2">
<h3 className="text-xs font-medium text-zinc-200 group-hover:text-white">Interstellar</h3>
<p className="text-[10px] text-zinc-500">2014</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden xl:flex w-80 flex-col bg-zinc-950 border-l border-zinc-800/50 relative z-20">

<div className="h-16 flex items-center justify-between px-5 border-b border-zinc-800/50">
<span className="text-sm font-medium text-white">Party Room</span>
<div className="flex items-center gap-2">
<button className="text-zinc-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:link" data-width="16"></span>
</button>
<button className="text-zinc-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</div>
</div>

<div className="p-5 border-b border-zinc-800/50">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Watching (4)</span>
</div>
<div className="flex items-center -space-x-3 overflow-hidden py-2">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-zinc-950 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=64&amp;h=64" />
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-zinc-950 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" />
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-zinc-950 object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&amp;fit=crop&amp;w=64&amp;h=64" />
<div className="h-8 w-8 rounded-full ring-2 ring-zinc-950 bg-zinc-800 flex items-center justify-center text-[10px] font-medium text-zinc-400">+1</div>
<button className="ml-6 h-8 w-8 rounded-full border border-dashed border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-500 transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
</button>
</img></img></img></div>
</div>

<div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">

<div className="flex items-center gap-4">
<div className="h-px bg-zinc-800 flex-1"></div>
<span className="text-[10px] text-zinc-600 font-medium">Today</span>
<div className="h-px bg-zinc-800 flex-1"></div>
</div>

<div className="flex gap-3 items-start">
<img className="w-7 h-7 rounded-full mt-0.5 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="flex flex-col gap-1">
<div className="flex items-baseline gap-2">
<span className="text-xs font-medium text-zinc-300">Alex</span>
<span className="text-[10px] text-zinc-600">10:23 PM</span>
</div>
<p className="text-sm text-zinc-400 leading-snug">The cinematography in this scene is absolutely stunning.</p>
</div>
</div>

<div className="flex gap-3 items-start">
<img className="w-7 h-7 rounded-full mt-0.5 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="flex flex-col gap-1">
<div className="flex items-baseline gap-2">
<span className="text-xs font-medium text-zinc-300">Sarah</span>
<span className="text-[10px] text-zinc-600">10:24 PM</span>
</div>
<p className="text-sm text-zinc-400 leading-snug">Wait, did you see that detail in the background?</p>
</div>
</div>

<div className="flex gap-3 items-start flex-row-reverse">
<div className="w-7 h-7 rounded-full mt-0.5 bg-indigo-600 flex items-center justify-center text-[10px] text-white font-bold">JD</div>
<div className="flex flex-col gap-1 items-end">
<div className="flex items-baseline gap-2 flex-row-reverse">
<span className="text-[10px] text-zinc-600">10:25 PM</span>
</div>
<p className="text-sm text-white bg-indigo-600/10 border border-indigo-500/20 px-3 py-2 rounded-2xl rounded-tr-sm leading-snug">Yeah, Deakins is a genius.</p>
</div>
</div>

<div className="flex gap-3 items-start">
<img className="w-7 h-7 rounded-full mt-0.5 object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="flex flex-col gap-1">
<div className="flex items-baseline gap-2">
<span className="text-xs font-medium text-zinc-300">Mike</span>
<span className="text-[10px] text-zinc-600">10:28 PM</span>
</div>
<p className="text-sm text-zinc-400 leading-snug">Can we pause for a sec? Grab popcorn.</p>
</div>
</div>
</div>

<div className="p-4 bg-zinc-950">
<div className="relative">
<input className="w-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm rounded-lg py-2.5 pl-4 pr-10 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 placeholder:text-zinc-600 transition-all" placeholder="Say something..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-zinc-500 hover:text-indigo-400 transition-colors">
<span className="iconify" data-icon="lucide:send" data-width="16"></span>
</button>
</div>
<div className="flex justify-between items-center mt-2 px-1">
<div className="flex gap-2">
<button className="text-zinc-600 hover:text-zinc-400 transition-colors"><span className="iconify" data-icon="lucide:smile" data-width="16"></span></button>
<button className="text-zinc-600 hover:text-zinc-400 transition-colors"><span className="iconify" data-icon="lucide:mic" data-width="16"></span></button>
</div>
<span className="text-[10px] text-zinc-700">Press Enter to send</span>
</div>
</div>
</aside>

    </>
  );
}
