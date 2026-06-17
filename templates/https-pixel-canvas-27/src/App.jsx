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
theme: {
extend: {
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
}
}
}
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
      

<aside className="w-64 border-r border-neutral-800 bg-neutral-950 flex-col hidden md:flex z-20">
<div className="h-14 flex items-center px-6 border-b border-neutral-800/50">
<div className="font-medium tracking-tighter text-lg text-white flex items-center gap-2">
<div className="w-5 h-5 bg-white text-black flex items-center justify-center rounded-sm text-xs font-bold">P</div>
                PIXEL CANVAS
            </div>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-colors group" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:home" strokeWidth="1.5" width="18"></iconify-icon>
                Home
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-colors group" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:compass" strokeWidth="1.5" width="18"></iconify-icon>
                Explore
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-colors group" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
                Community
            </a>
<div className="pt-6 pb-2 px-3 text-xs font-medium text-neutral-600 uppercase tracking-wider">Your Space</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-neutral-900 rounded-md transition-colors" href="#">
<iconify-icon className="text-white" icon="lucide:user" strokeWidth="1.5" width="18"></iconify-icon>
                Profile
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-colors group" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:palette" strokeWidth="1.5" width="18"></iconify-icon>
                Canvas
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-colors group" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:bookmark" strokeWidth="1.5" width="18"></iconify-icon>
                Saved
            </a>
</nav>
<div className="p-4 border-t border-neutral-800">
<button className="flex items-center gap-3 w-full text-left group">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-600 border border-neutral-600 overflow-hidden relative">
<img alt="User" className="w-full h-full object-cover opacity-80" src="https://ui-avatars.com/api/?name=C+G&amp;background=random&amp;color=fff&amp;size=64"/>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-neutral-200 truncate group-hover:text-white">Christina Gentil</p>
<p className="text-xs text-neutral-500 truncate">@christinag</p>
</div>
<iconify-icon className="text-neutral-500" icon="lucide:more-vertical" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-neutral-950 overflow-y-auto relative scroll-smooth">

<div className="md:hidden h-14 border-b border-neutral-800 flex items-center justify-between px-4 bg-neutral-950 sticky top-0 z-30">
<div className="font-medium tracking-tighter text-white">PIXEL CANVAS</div>
<button className="text-neutral-400 hover:text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="h-48 md:h-64 w-full relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-neutral-950"></div>
<div className="absolute inset-0 pixel-pattern opacity-10"></div>

<div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="h-8 px-3 rounded-md bg-neutral-950/50 backdrop-blur-sm border border-neutral-800 text-xs font-medium text-white hover:bg-neutral-900 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:camera" width="14"></iconify-icon>
                    Edit Cover
                </button>
</div>
</div>

<div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">

<div className="relative -mt-16 sm:-mt-20 mb-8 flex flex-col sm:flex-row items-start gap-6">

<div className="relative group">
<div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-[4px] border-neutral-950 bg-neutral-900 overflow-hidden relative shadow-xl">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
<iconify-icon className="text-white" icon="lucide:upload" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-2 right-2 w-5 h-5 bg-emerald-500 rounded-full border-[3px] border-neutral-950" title="Online"></div>
</div>

<div className="flex-1 mt-2 sm:mt-20 min-w-0 w-full">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">Christina Gentil</h1>
<div className="flex items-center gap-2 text-neutral-500 mt-1">
<span className="text-sm font-normal">@christinag</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span className="text-sm">Digital Artist</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span className="flex items-center gap-1 text-sm">
<iconify-icon icon="lucide:map-pin" width="12"></iconify-icon>
                                    Berlin, DE
                                </span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="h-9 px-4 rounded-md border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-sm font-medium transition-colors">
                                Message
                            </button>
<button className="h-9 px-4 rounded-md bg-white text-black hover:bg-neutral-200 text-sm font-medium transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:plus" strokeWidth="2.5" width="14"></iconify-icon>
                                Follow
                            </button>
<button className="h-9 w-9 flex items-center justify-center rounded-md border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 text-neutral-400 transition-colors">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</div>
</div>
<p className="mt-4 text-neutral-400 text-sm leading-relaxed max-w-2xl">
                        Pixel purist and voxel enthusiast. Creating isometric worlds and character sprites. Open for commissions. Co-founder of <span className="text-white cursor-pointer hover:underline">@pixel_collective</span>.
                    </p>
<div className="flex items-center gap-6 mt-6 border-b border-neutral-800 pb-8">
<div className="flex items-baseline gap-1.5 hover:text-white cursor-pointer transition-colors group">
<span className="text-white font-medium">1.2k</span>
<span className="text-xs text-neutral-500 group-hover:text-neutral-400">Followers</span>
</div>
<div className="flex items-baseline gap-1.5 hover:text-white cursor-pointer transition-colors group">
<span className="text-white font-medium">482</span>
<span className="text-xs text-neutral-500 group-hover:text-neutral-400">Following</span>
</div>
<div className="flex items-baseline gap-1.5 hover:text-white cursor-pointer transition-colors group">
<span className="text-white font-medium">89</span>
<span className="text-xs text-neutral-500 group-hover:text-neutral-400">Projects</span>
</div>
<div className="flex items-baseline gap-1.5 hover:text-white cursor-pointer transition-colors group">
<iconify-icon className="text-neutral-500" icon="lucide:link" width="12"></iconify-icon>
<span className="text-xs text-neutral-400 hover:text-white hover:underline">christinagentil.design</span>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-8 border-b border-neutral-800 mb-8 overflow-x-auto no-scrollbar">
<button className="pb-3 text-sm font-medium text-white border-b-[1.5px] border-white transition-colors">Overview</button>
<button className="pb-3 text-sm font-medium text-neutral-500 hover:text-neutral-300 transition-colors">Creations</button>
<button className="pb-3 text-sm font-medium text-neutral-500 hover:text-neutral-300 transition-colors">Collections</button>
<button className="pb-3 text-sm font-medium text-neutral-500 hover:text-neutral-300 transition-colors">Liked</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative col-span-1 md:col-span-2 row-span-2 rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-neutral-700 transition-all duration-300">
<div className="absolute top-3 left-3 z-10">
<span className="px-2 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-medium text-white border border-white/10">Featured</span>
</div>

<div className="w-full h-full min-h-[320px] relative bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 pixel-pattern opacity-20"></div>

<div className="w-32 h-32 bg-indigo-500 shadow-[20px_20px_0_0_rgba(168,85,247,0.5),-20px_-20px_0_0_rgba(59,130,246,0.5)] opacity-80 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="flex justify-between items-end">
<div>
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Cyberpunk City v2</h3>
<p className="text-xs text-neutral-400">Updated 2 days ago</p>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
<iconify-icon icon="lucide:heart" width="14"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
<iconify-icon icon="lucide:share-2" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="group rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-neutral-700 hover:-translate-y-1 transition-all duration-300">
<div className="aspect-square w-full bg-[#151515] relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 pixel-pattern opacity-10"></div>
<div className="w-16 h-16 bg-emerald-500/20 border-4 border-emerald-500/40 rotate-45 group-hover:rotate-12 transition-transform duration-500"></div>
</div>
<div className="p-4">
<div className="flex justify-between items-center mb-2">
<h4 className="text-sm font-medium text-neutral-200">Emerald Isometric</h4>
<div className="flex items-center gap-1 text-neutral-500 text-xs">
<iconify-icon icon="lucide:heart" width="10"></iconify-icon>
                                242
                            </div>
</div>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded text-[10px] bg-neutral-800 text-neutral-400 border border-neutral-700/50">Isometric</span>
<span className="px-1.5 py-0.5 rounded text-[10px] bg-neutral-800 text-neutral-400 border border-neutral-700/50">Green</span>
</div>
</div>
</div>

<div className="group rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-neutral-700 hover:-translate-y-1 transition-all duration-300">
<div className="aspect-square w-full bg-[#151515] relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 pixel-pattern opacity-10"></div>
<div className="flex gap-1">
<div className="w-4 h-12 bg-rose-500/40 group-hover:h-16 transition-all duration-300"></div>
<div className="w-4 h-8 bg-orange-500/40 group-hover:h-12 transition-all duration-300 delay-75"></div>
<div className="w-4 h-16 bg-yellow-500/40 group-hover:h-10 transition-all duration-300 delay-100"></div>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-center mb-2">
<h4 className="text-sm font-medium text-neutral-200">Sunset Palette</h4>
<div className="flex items-center gap-1 text-neutral-500 text-xs">
<iconify-icon icon="lucide:heart" width="10"></iconify-icon>
                                189
                            </div>
</div>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded text-[10px] bg-neutral-800 text-neutral-400 border border-neutral-700/50">Abstract</span>
</div>
</div>
</div>

<div className="group rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-neutral-700 hover:-translate-y-1 transition-all duration-300">
<div className="aspect-square w-full bg-[#151515] relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 pixel-pattern opacity-10"></div>
<div className="w-20 h-20 rounded-full border border-dashed border-blue-500/30 group-hover:border-blue-400/60 animate-spin-slow"></div>
<iconify-icon className="text-blue-200 absolute opacity-50" icon="lucide:ghost" width="32"></iconify-icon>
</div>
<div className="p-4">
<div className="flex justify-between items-center mb-2">
<h4 className="text-sm font-medium text-neutral-200">Spirit Sprite</h4>
<div className="flex items-center gap-1 text-neutral-500 text-xs">
<iconify-icon icon="lucide:heart" width="10"></iconify-icon>
                                842
                            </div>
</div>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded text-[10px] bg-neutral-800 text-neutral-400 border border-neutral-700/50">Character</span>
<span className="px-1.5 py-0.5 rounded text-[10px] bg-neutral-800 text-neutral-400 border border-neutral-700/50">WIP</span>
</div>
</div>
</div>

<button className="group rounded-xl border border-dashed border-neutral-800 bg-transparent hover:bg-neutral-900/50 hover:border-neutral-700 transition-all duration-300 flex flex-col items-center justify-center gap-3 aspect-square h-full">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800 group-hover:scale-110 transition-transform">
<iconify-icon className="text-neutral-400" icon="lucide:plus" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-500 group-hover:text-neutral-300">New Project</span>
</button>
</div>

<div className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-6">
<div className="lg:col-span-3 rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
<h3 className="text-sm font-medium text-white mb-4">Contribution Activity</h3>
<div className="flex items-end gap-1 h-24 w-full justify-between">

<div className="w-full bg-neutral-800/50 rounded-sm h-[30%] hover:bg-neutral-700 transition-colors"></div>
<div className="w-full bg-neutral-800/50 rounded-sm h-[50%] hover:bg-neutral-700 transition-colors"></div>
<div className="w-full bg-neutral-800/50 rounded-sm h-[20%] hover:bg-neutral-700 transition-colors"></div>
<div className="w-full bg-neutral-800/50 rounded-sm h-[60%] hover:bg-neutral-700 transition-colors"></div>
<div className="w-full bg-neutral-800/50 rounded-sm h-[80%] hover:bg-neutral-700 transition-colors"></div>
<div className="w-full bg-neutral-800/50 rounded-sm h-[45%] hover:bg-neutral-700 transition-colors"></div>
<div className="w-full bg-neutral-800/50 rounded-sm h-[90%] hover:bg-neutral-700 transition-colors"></div>
<div className="w-full bg-neutral-800/50 rounded-sm h-[65%] hover:bg-neutral-700 transition-colors"></div>
<div className="w-full bg-neutral-800/50 rounded-sm h-[40%] hover:bg-neutral-700 transition-colors"></div>
<div className="w-full bg-white rounded-sm h-[75%] shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
<div className="w-full bg-neutral-800/50 rounded-sm h-[50%] hover:bg-neutral-700 transition-colors"></div>
<div className="w-full bg-neutral-800/50 rounded-sm h-[30%] hover:bg-neutral-700 transition-colors"></div>
</div>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
<h3 className="text-sm font-medium text-white mb-4">Top Tools</h3>
<div className="space-y-4">
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-400">Aseprite</span>
<span className="text-white font-medium">84%</span>
</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-indigo-500 h-full w-[84%] rounded-full"></div>
</div>
<div className="flex items-center justify-between text-sm mt-2">
<span className="text-neutral-400">Blender</span>
<span className="text-white font-medium">12%</span>
</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-orange-500 h-full w-[12%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
