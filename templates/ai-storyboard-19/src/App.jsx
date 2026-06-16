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
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-16 bg-black border-b border-zinc-800 flex items-center justify-between px-6 shrink-0 z-20">
<div className="flex items-center gap-2">

<div className="grid grid-cols-2 gap-0.5 w-7 h-7">
<div className="bg-zinc-100 rounded-sm"></div>
<div className="border border-zinc-100 rounded-sm"></div>
<div className="bg-zinc-100 rounded-sm"></div>
<div className="bg-zinc-100 rounded-sm"></div>
</div>
<span className="text-xl font-medium tracking-tight text-white ml-1">storyboarder<span className="text-zinc-500">.ai</span></span>
</div>

<div className="flex items-center gap-4">
<button className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors">
<iconify-icon height="18" icon="solar:bell-linear" width="18"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 border border-zinc-700"></div>
</div>
</header>
<div className="flex flex-1 overflow-hidden">

<aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col hidden lg:flex shrink-0 overflow-y-auto">
<div className="p-4 space-y-6">

<button className="w-full bg-cyan-400 hover:bg-cyan-300 text-black p-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cyan-900/20 group">
<iconify-icon className="stroke-[2.5]" height="20" icon="solar:add-circle-linear" width="20"></iconify-icon>
<span className="font-semibold text-sm">Create new</span>
</button>

<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 bg-zinc-800 text-white rounded-lg transition-colors border border-zinc-700" href="#">
<iconify-icon height="20" icon="solar:home-angle-linear" width="20"></iconify-icon>
<span className="font-medium text-sm">Home</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors" href="#">
<iconify-icon height="20" icon="solar:history-linear" width="20"></iconify-icon>
<span className="font-medium text-sm">Recent projects</span>
</a>
</div>
<div className="h-px bg-zinc-800 w-full"></div>

<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors group" href="#">
<iconify-icon className="group-hover:text-red-400 transition-colors" height="20" icon="solar:trash-bin-trash-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Trash</span>
</a>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-zinc-950 p-8 lg:p-10 relative">
<div className="max-w-7xl mx-auto space-y-10">

<div className="flex items-center justify-between">
<h1 className="text-2xl font-semibold text-white tracking-tight">Welcome back</h1>
<div className="relative w-64 md:w-80">
<div className="absolute left-3 top-2.5 text-zinc-500 flex items-center">
<iconify-icon height="16" icon="solar:magnifer-linear" width="16"></iconify-icon>
</div>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2 pl-9 pr-3 text-sm focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-600 text-zinc-200" placeholder="Search projects..." type="text"/>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-base font-medium text-zinc-400">Start a new project</h2>
<button className="text-sm text-cyan-400 hover:text-cyan-300 font-medium">View all templates</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<button className="flex flex-col items-start gap-4 bg-zinc-900 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 p-5 rounded-xl transition-all group text-left h-40">
<div className="w-10 h-10 rounded-lg bg-cyan-400/10 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-colors">
<iconify-icon height="22" icon="solar:add-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-white">Blank Project</h3>
<p className="text-sm text-zinc-500 mt-1 line-clamp-2">Start from scratch with an empty storyboard</p>
</div>
</button>

<button className="flex flex-col items-start gap-4 bg-zinc-900 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 p-5 rounded-xl transition-all group text-left h-40">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-colors">
<iconify-icon height="22" icon="solar:magic-stick-3-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-white">AI Generator</h3>
<p className="text-sm text-zinc-500 mt-1 line-clamp-2">Turn a simple prompt into a full script &amp; storyboard</p>
</div>
</button>

<button className="flex flex-col items-start gap-4 bg-zinc-900 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 p-5 rounded-xl transition-all group text-left h-40">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
<iconify-icon height="22" icon="solar:document-text-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-white">Import Script</h3>
<p className="text-sm text-zinc-500 mt-1 line-clamp-2">Upload PDF, FDX or Fountain files</p>
</div>
</button>

<button className="flex flex-col items-start gap-4 bg-zinc-900 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 p-5 rounded-xl transition-all group text-left h-40">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<iconify-icon height="22" icon="solar:list-check-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-white">Import Shotlist</h3>
<p className="text-sm text-zinc-500 mt-1 line-clamp-2">Create from Excel or CSV shotlist</p>
</div>
</button>
</div>
</div>

<div className="space-y-4">
<h2 className="text-base font-medium text-zinc-400">Recent projects</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="relative aspect-video bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 group-hover:border-zinc-600 transition-colors">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
<div className="grid grid-cols-3 h-full gap-0.5 opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-500">
<div className="bg-zinc-700"></div>
<div className="bg-zinc-600"></div>
<div className="bg-zinc-800"></div>
</div>
<div className="absolute bottom-3 right-3 z-20">
<span className="bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">12 shots</span>
</div>
<div className="absolute top-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80">
<iconify-icon className="text-white" icon="solar:menu-dots-linear"></iconify-icon>
</div>
</div>
</div>
<div className="mt-3">
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white truncate">First Light in Valles Marineris</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-zinc-500">Edited 2 hours ago</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 group-hover:border-zinc-600 transition-colors">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
<div className="grid grid-cols-3 h-full gap-0.5 opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-500">
<div className="bg-zinc-800"></div>
<div className="bg-zinc-700"></div>
<div className="bg-zinc-800"></div>
</div>
<div className="absolute bottom-3 right-3 z-20">
<span className="bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">24 shots</span>
</div>
<div className="absolute top-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80">
<iconify-icon className="text-white" icon="solar:menu-dots-linear"></iconify-icon>
</div>
</div>
</div>
<div className="mt-3">
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white truncate">Nike Commercial Pitch</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-zinc-500">Edited yesterday</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 group-hover:border-zinc-600 transition-colors">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
<div className="grid grid-cols-3 h-full gap-0.5 opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-500">
<div className="bg-zinc-600"></div>
<div className="bg-zinc-800"></div>
<div className="bg-zinc-700"></div>
</div>
<div className="absolute bottom-3 right-3 z-20">
<span className="bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">8 shots</span>
</div>
<div className="absolute top-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80">
<iconify-icon className="text-white" icon="solar:menu-dots-linear"></iconify-icon>
</div>
</div>
</div>
<div className="mt-3">
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white truncate">Short Film: The Echo</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-zinc-500">Edited 3 days ago</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 group-hover:border-zinc-600 transition-colors">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
<div className="grid grid-cols-3 h-full gap-0.5 opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-500">
<div className="bg-zinc-800"></div>
<div className="bg-zinc-800"></div>
<div className="bg-zinc-800"></div>
</div>
<div className="absolute bottom-3 right-3 z-20">
<span className="bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">Draft</span>
</div>
<div className="absolute top-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80">
<iconify-icon className="text-white" icon="solar:menu-dots-linear"></iconify-icon>
</div>
</div>
</div>
<div className="mt-3">
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white truncate">Untitled Project 04</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-zinc-500">Created last week</span>
</div>
</div>
</div>
</div>
</div>
</div>

<button className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-cyan-400 rounded-full shadow-xl shadow-cyan-900/30 flex items-center justify-center hover:scale-105 transition-transform group z-50">
<iconify-icon className="text-black" height="24" icon="solar:add-linear" width="24"></iconify-icon>
</button>
</main>
</div>

    </>
  );
}
