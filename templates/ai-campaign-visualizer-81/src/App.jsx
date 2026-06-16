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
      

<aside className="w-16 lg:w-64 h-full border-r border-white/5 flex flex-col justify-between bg-black/40 hidden md:flex">
<div>

<div className="h-16 flex items-center px-6 border-b border-white/5">
<span className="text-lg font-medium tracking-tighter text-white">VISUAL<span className="text-white/40">CORE</span></span>
</div>

<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-white/5 text-white" href="#">
<iconify-icon icon="solar:gallery-wide-linear" width="20"></iconify-icon>
<span className="hidden lg:block">Generations</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:text-neutral-300 hover:bg-white/5 transition-colors" href="#">
<iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
<span className="hidden lg:block">Campaigns</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:text-neutral-300 hover:bg-white/5 transition-colors" href="#">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
<span className="hidden lg:block">Enhance</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:text-neutral-300 hover:bg-white/5 transition-colors" href="#">
<iconify-icon icon="solar:database-linear" width="20"></iconify-icon>
<span className="hidden lg:block">Assets</span>
</a>
</nav>
</div>

<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3 px-3 py-2 text-neutral-400 cursor-pointer hover:text-white transition-colors">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-600 border border-white/10"></div>
<span className="hidden lg:block text-xs font-medium tracking-wide">Studio Admin</span>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative">

<header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-black/20 backdrop-blur-sm z-20">
<div className="flex items-center gap-4 text-neutral-500">
<span className="text-neutral-300">Project Alpha</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span>Campaign V2</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="bg-white/10 text-white px-2 py-0.5 rounded text-xs border border-white/5">Draft</span>
</div>
<div className="flex items-center gap-3">
<button className="h-8 px-4 rounded border border-white/10 text-xs text-neutral-300 hover:bg-white/5 transition-colors">
                    Export
                </button>
<button className="h-8 px-4 rounded bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
                    Render Final
                </button>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="w-80 border-r border-white/5 bg-neutral-950/50 flex flex-col overflow-y-auto z-10">
<div className="p-6 space-y-8">

<div className="space-y-3">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Subject</label>
<iconify-icon className="text-neutral-600 hover:text-neutral-300 cursor-pointer" icon="solar:pen-new-square-linear" width="16"></iconify-icon>
</div>
<input className="w-full input-base px-3 py-2.5 rounded text-white placeholder-neutral-600 text-sm" placeholder="Product Name" type="text" value="Obsidian Elite Headphones"/>
</div>

<div className="space-y-3">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Prompt Logic</label>
<div className="input-base p-3 rounded space-y-3">
<div className="flex gap-2 text-xs text-neutral-500 border-b border-white/5 pb-2">
<span className="text-indigo-400">#HighContrast</span>
<span className="text-indigo-400">#Premium</span>
<span className="text-indigo-400">#Macro</span>
</div>
<textarea className="w-full bg-transparent border-none focus:ring-0 text-neutral-300 text-sm leading-relaxed resize-none h-32 outline-none p-0" spellcheck="false">Create a cinematic, hyper-realistic promotional image. Modern, premium, high-contrast lighting. Clean composition with strong focal point. Subtle luxury aesthetic. Shallow depth of field. Sharp focus on primary subject.</textarea>
</div>
</div>

<div className="space-y-6">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Atmosphere</label>
<div className="space-y-3">
<div className="flex justify-between text-xs text-neutral-400">
<span>Lighting Intensity</span>
<span>85%</span>
</div>
<input max="100" min="0" type="range" value="85"/>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs text-neutral-400">
<span>Depth of Field</span>
<span>f/1.8</span>
</div>
<input max="100" min="0" type="range" value="20"/>
</div>
<div className="flex items-center justify-between py-2">
<span className="text-neutral-400 text-sm">Studio Reflections</span>

<div className="relative inline-block w-8 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-black border border-neutral-600 appearance-none cursor-pointer transition-all duration-300 checked:bg-white checked:translate-x-4 checked:border-white" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-neutral-800 cursor-pointer border border-transparent" htmlFor="toggle"></label>
</input></div>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Format</label>
<div className="grid grid-cols-3 gap-2">
<button className="flex flex-col items-center justify-center gap-1 py-2 rounded bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 hover:border-white/20 transition-all">
<span className="w-3 h-4 border border-current rounded-[1px]"></span>
<span className="text-[10px]">9:16</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 py-2 rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-200">
<span className="w-4 h-4 border border-current rounded-[1px]"></span>
<span className="text-[10px]">1:1</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 py-2 rounded bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 hover:border-white/20 transition-all">
<span className="w-5 h-3 border border-current rounded-[1px]"></span>
<span className="text-[10px]">16:9</span>
</button>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-gradient-to-br from-[#0a0a0a] to-[#000000] relative flex items-center justify-center p-12">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="relative group max-w-2xl w-full aspect-square shadow-2xl shadow-black/80 rounded-sm overflow-hidden border border-white/5">

<img alt="High end dark product shot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-12">

<div className="w-full border-b border-dashed border-white/20 h-16 flex items-end pb-2">
<span className="text-[10px] text-white/40 uppercase tracking-widest">Logo Safe Area</span>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>

<div className="w-full border-t border-dashed border-white/20 h-24 pt-2">
<span className="text-[10px] text-white/40 uppercase tracking-widest">Headline / CTA Area</span>
</div>
</div>

<div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<button className="bg-black/50 backdrop-blur text-white p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors">
<iconify-icon icon="solar:maximize-square-linear" width="18"></iconify-icon>
</button>
<button className="bg-black/50 backdrop-blur text-white p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors">
<iconify-icon icon="solar:download-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-neutral-900/90 border border-white/10 px-4 py-2 rounded-full flex items-center gap-3 backdrop-blur-md shadow-xl">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs text-neutral-300 tracking-wide">Render Complete <span className="text-neutral-600 px-1">|</span> 0.4s</span>
</div>
</div>
</div>
</main>

<div className="pointer-events-none fixed inset-0 z-50 flex flex-col justify-between">
<div className="h-32 bg-gradient-to-b from-black/20 to-transparent"></div>
<div className="h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>

    </>
  );
}
