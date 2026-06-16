import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
background: '#030305',
surface: '#0E0E11',
border: 'rgba(255, 255, 255, 0.06)',
primary: '#6366f1',
secondary: '#a855f7',
accent: '#ec4899',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'glass': 'linear-gradient(180deg, rgba(20, 20, 23, 0.7) 0%, rgba(20, 20, 23, 0.4) 100%)',
'glass-surface': 'linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)'
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      

<aside className="w-64 border-r border-border flex flex-col justify-between bg-surface/50 h-full relative z-20 backdrop-blur-xl">
<div>

<div className="h-16 flex items-center px-6 border-b border-border/50">
<div className="flex items-center gap-2.5 text-white">
<div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold shadow-lg shadow-indigo-500/20">
<iconify-icon className="text-white" icon="solar:infinity-bold"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-base">BrandCrafter</span>
</div>
</div>

<nav className="p-3 space-y-1 mt-4">
<div className="px-3 mb-2 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Create</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-white border border-white/5 shadow-sm group transition-all relative overflow-hidden" href="#">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-indigo-400" icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
<span className="font-medium relative z-10">Studio Generator</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-slate-200 transition-all text-slate-400 group" href="#">
<iconify-icon className="group-hover:text-indigo-400 transition-colors" icon="solar:gallery-linear" width="18"></iconify-icon>
<span className="font-medium">My Assets</span>
</a>
<div className="px-3 mb-2 mt-6 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Manage</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-slate-200 transition-all text-slate-400 group" href="#">
<iconify-icon className="group-hover:text-indigo-400 transition-colors" icon="solar:folder-with-files-linear" width="18"></iconify-icon>
<span className="font-medium">All Campaigns</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-slate-200 transition-all text-slate-400 group" href="#">
<iconify-icon className="group-hover:text-indigo-400 transition-colors" icon="solar:chart-square-linear" width="18"></iconify-icon>
<span className="font-medium">Analytics</span>
</a>
</nav>
</div>

<div className="p-4 border-t border-border/50 bg-black/20">
<div className="flex items-center justify-between p-2 rounded-lg border border-border bg-surface/50 mb-3">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-slate-300">System Normal</span>
</div>
<iconify-icon className="text-slate-500" icon="solar:shield-star-linear" width="16"></iconify-icon>
</div>
<button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-white/5 transition-all text-left">
<img alt="User" className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700" src="https://api.dicebear.com/7.x/notionists/svg?seed=Admin"/>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-slate-200 truncate">Admin Account</div>
<div className="text-[10px] text-slate-500 truncate uppercase tracking-wider">Super User</div>
</div>
<iconify-icon className="text-slate-600" icon="solar:settings-minimalistic-linear"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden bg-background">

<div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

<header className="h-16 border-b border-border flex items-center justify-between px-8 bg-background/50 backdrop-blur-md sticky top-0 z-30">
<div className="flex items-center gap-3">
<h1 className="text-slate-100 font-semibold tracking-tight text-lg">New Campaign</h1>
<div className="h-4 w-[1px] bg-slate-700"></div>
<span className="text-xs text-slate-500 font-medium">Draft #8821</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
<iconify-icon className="text-indigo-400" icon="solar:bolt-linear"></iconify-icon>
<span className="text-xs font-medium text-indigo-300">2,400 Credits</span>
</div>
<button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all">
<iconify-icon icon="solar:bell-linear" width="16"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 relative z-10">
<div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">

<div className="lg:col-span-4 space-y-6 flex flex-col h-full overflow-visible">

<div className="glass-panel p-5 rounded-xl space-y-3">
<div className="flex justify-between items-center">
<label className="text-sm font-medium text-slate-200">Campaign Prompt</label>
<button className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
<iconify-icon icon="solar:magic-stick-linear"></iconify-icon> Enhance
                            </button>
</div>
<textarea className="w-full h-32 bg-surface/50 border border-white/10 rounded-lg p-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none" placeholder="Describe your product and campaign goal... e.g. 'Launch a new ergonomic office chair with a focus on remote workers, sleek design, and back health.'"></textarea>

<div className="border border-dashed border-slate-700 rounded-lg p-3 hover:bg-white/5 transition-colors cursor-pointer group flex items-center justify-center gap-3">
<iconify-icon className="text-slate-500 group-hover:text-indigo-400" icon="solar:paperclip-linear"></iconify-icon>
<span className="text-xs text-slate-500 group-hover:text-slate-300">Attach product images or brand assets</span>
</div>
</div>

<div className="glass-panel p-5 rounded-xl space-y-3">
<label className="text-sm font-medium text-slate-200 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:gallery-wide-linear"></iconify-icon> Output Format
                        </label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer relative">
<input checked="" className="radio-card sr-only" name="format" type="radio"/>
<div className="p-3 rounded-lg border border-white/10 bg-surface/30 hover:bg-white/5 transition-all flex flex-col items-center gap-2 text-center group h-full">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:gallery-linear" width="18"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-300">Image</span>

<div className="check-icon absolute top-2 right-2 text-indigo-400 opacity-0 transform scale-75 transition-all">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
</div>
</label>
<label className="cursor-pointer relative">
<input className="radio-card sr-only" name="format" type="radio"/>
<div className="p-3 rounded-lg border border-white/10 bg-surface/30 hover:bg-white/5 transition-all flex flex-col items-center gap-2 text-center group h-full">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:videocamera-record-linear" width="18"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-300">Video</span>
<div className="check-icon absolute top-2 right-2 text-indigo-400 opacity-0 transform scale-75 transition-all">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
</div>
</label>
</div>
</div>

<div className="glass-panel p-5 rounded-xl space-y-3">
<label className="text-sm font-medium text-slate-200 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:text-square-linear"></iconify-icon> Caption Tone
                        </label>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input checked="" className="tone-radio sr-only" name="tone" type="radio"/>
<span className="px-3 py-1.5 rounded-full border border-white/10 text-xs text-slate-400 hover:bg-white/5 hover:border-slate-500 transition-all select-none">Professional</span>
</label>
<label className="cursor-pointer">
<input className="tone-radio sr-only" name="tone" type="radio"/>
<span className="px-3 py-1.5 rounded-full border border-white/10 text-xs text-slate-400 hover:bg-white/5 hover:border-slate-500 transition-all select-none">Fun &amp; Witty</span>
</label>
<label className="cursor-pointer">
<input className="tone-radio sr-only" name="tone" type="radio"/>
<span className="px-3 py-1.5 rounded-full border border-white/10 text-xs text-slate-400 hover:bg-white/5 hover:border-slate-500 transition-all select-none">Urgent</span>
</label>
<label className="cursor-pointer">
<input className="tone-radio sr-only" name="tone" type="radio"/>
<span className="px-3 py-1.5 rounded-full border border-white/10 text-xs text-slate-400 hover:bg-white/5 hover:border-slate-500 transition-all select-none">Minimalist</span>
</label>
</div>
</div>

<div className="glass-panel p-5 rounded-xl space-y-3 flex-1">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-slate-200 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:smartphone-linear"></iconify-icon> Target Platform
                            </label>
<span className="text-[10px] text-slate-500 uppercase tracking-wide">Optional</span>
</div>
<div className="grid grid-cols-5 gap-2">

<label className="cursor-pointer col-span-1" title="Universal / Generic">
<input checked="" className="platform-radio sr-only" name="platform" type="radio"/>
<div className="aspect-square rounded-lg border border-white/10 bg-surface/30 flex items-center justify-center text-slate-400 hover:bg-white/5 transition-all">
<iconify-icon icon="solar:planet-linear" width="20"></iconify-icon>
</div>
</label>

<label className="cursor-pointer col-span-1" title="Instagram">
<input className="platform-radio sr-only" name="platform" type="radio"/>
<div className="aspect-square rounded-lg border border-white/10 bg-surface/30 flex items-center justify-center text-slate-400 hover:bg-white/5 transition-all">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</div>
</label>

<label className="cursor-pointer col-span-1" title="LinkedIn">
<input className="platform-radio sr-only" name="platform" type="radio"/>
<div className="aspect-square rounded-lg border border-white/10 bg-surface/30 flex items-center justify-center text-slate-400 hover:bg-white/5 transition-all">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</div>
</label>

<label className="cursor-pointer col-span-1" title="Twitter / X">
<input className="platform-radio sr-only" name="platform" type="radio"/>
<div className="aspect-square rounded-lg border border-white/10 bg-surface/30 flex items-center justify-center text-slate-400 hover:bg-white/5 transition-all">
<iconify-icon icon="solar:mention-circle-linear" width="20"></iconify-icon>
</div>
</label>

<label className="cursor-pointer col-span-1" title="Facebook">
<input className="platform-radio sr-only" name="platform" type="radio"/>
<div className="aspect-square rounded-lg border border-white/10 bg-surface/30 flex items-center justify-center text-slate-400 hover:bg-white/5 transition-all">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</div>
</label>
</div>
<p className="text-[11px] text-slate-500 pt-2 leading-relaxed">
                            Selecting a platform optimizes aspect ratio, hashtag density, and caption length automatically. "Universal" generates high-quality generic assets.
                        </p>
</div>

<button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2 group relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<iconify-icon className="animate-pulse-slow" icon="solar:stars-minimalistic-bold" width="20"></iconify-icon>
<span className="relative z-10">Generate Campaign</span>
</button>
</div>

<div className="lg:col-span-8 flex flex-col h-full rounded-2xl border border-white/5 relative overflow-hidden bg-[#0a0a0c]">

<div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-white/[0.02]">
<span className="text-xs font-medium text-slate-500">Live Preview</span>
<div className="flex items-center gap-3">
<button className="text-slate-500 hover:text-white transition-colors" title="Device View">
<iconify-icon icon="solar:smartphone-linear" width="16"></iconify-icon>
</button>
<button className="text-slate-500 hover:text-white transition-colors" title="Desktop View">
<iconify-icon icon="solar:monitor-linear" width="16"></iconify-icon>
</button>
<div className="h-3 w-[1px] bg-slate-700"></div>
<button className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5">
<iconify-icon icon="solar:download-linear"></iconify-icon> Export
                            </button>
</div>
</div>

<div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-b from-transparent to-black/40 relative">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="w-full max-w-2xl bg-surface border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative group">

<div className="md:w-3/5 bg-slate-800 relative aspect-[4/3] md:aspect-auto min-h-[300px] overflow-hidden">

<img alt="Generated Content" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&amp;w=2158&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-4 left-4 px-2 py-1 bg-black/50 backdrop-blur-md rounded border border-white/10 text-[10px] text-white font-medium flex items-center gap-1.5">
<iconify-icon className="text-indigo-400" icon="solar:magic-stick-3-bold"></iconify-icon>
                                    AI Generated
                                </div>
</div>

<div className="md:w-2/5 p-6 flex flex-col bg-surface border-l border-white/5">

<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-600"></div>
<div className="flex flex-col">
<div className="h-2.5 w-24 bg-slate-700 rounded mb-1.5"></div>
<div className="h-2 w-16 bg-slate-800 rounded"></div>
</div>
<iconify-icon className="ml-auto text-slate-600" icon="solar:menu-dots-linear"></iconify-icon>
</div>

<div className="space-y-2 mb-6">
<div className="text-sm text-slate-300 leading-relaxed">
                                        Elevate your workspace with ergonomic excellence. <span className="text-indigo-400">#OfficeLife</span> <span className="text-indigo-400">#Design</span>
</div>
<div className="text-xs text-slate-500 mt-2">
                                        Experience comfort redefined. Our latest collection brings the perfect balance of form and function to your daily workflow.
                                    </div>
</div>

<div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-slate-500">
<div className="flex gap-3">
<iconify-icon className="hover:text-pink-500 transition-colors cursor-pointer" icon="solar:heart-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-blue-400 transition-colors cursor-pointer" icon="solar:chat-round-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-green-400 transition-colors cursor-pointer" icon="solar:plain-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="hover:text-white transition-colors cursor-pointer" icon="solar:bookmark-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="h-1 w-full bg-slate-900 absolute bottom-0 left-0">

<div className="h-full w-1/3 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0"></div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
