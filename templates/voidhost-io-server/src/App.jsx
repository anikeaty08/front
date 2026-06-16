import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
cyan: '#22d3ee',
blue: '#3b82f6',
indigo: '#6366f1',
dark: '#050507'
}
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid h-[80vh]"></div>

<div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] opacity-40 mix-blend-screen"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] opacity-30"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] opacity-20"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-brand-dark/70 backdrop-blur-xl supports-[backdrop-filter]:bg-brand-dark/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-indigo-600 opacity-20 group-hover:opacity-30 transition-opacity"></div>
<iconify-icon className="text-cyan-400 relative z-10" icon="solar:cpu-bolt-linear" width="20"></iconify-icon>
</div>
<span className="text-slate-200 font-semibold tracking-tight text-lg group-hover:text-white transition-colors">VOIDHOST</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#">Performance</a>
<a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#">Locations</a>
<a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#">Pricing</a>
<a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#">DDoS</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    Login
                </button>
<button className="relative px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:brightness-110 transition-all shadow-[0_0_15px_-3px_rgba(6,182,212,0.4)] overflow-hidden group">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative z-10 flex items-center gap-1.5">
                        Deploy Now
                        <iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</span>
</button>
</div>
</div>
</nav>

<main className="relative z-10 flex-grow pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 mb-24 text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/30 text-xs font-medium text-cyan-400 mb-8 backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
</span>
                Ryzen 9 7950X Nodes Now Live
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight mb-8 leading-[1.1]">
                Extreme
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 glow-text">Performance.</span><br/>
                Zero Compromise.
            </h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Next-generation game server hosting powered by extreme overclocked hardware, custom NVMe storage, and 1Tbps+ DDoS protection.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
<iconify-icon icon="solar:rocket-2-bold" width="20"></iconify-icon>
                    Start Hosting
                </button>
<button className="w-full sm:w-auto px-8 py-4 border border-white/10 bg-white/5 text-white rounded-lg font-medium hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center gap-2 group">
<iconify-icon className="text-slate-400 group-hover:text-cyan-400 transition-colors" icon="solar:chart-square-linear" width="20"></iconify-icon>
                    View Benchmarks
                </button>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/5 py-8 bg-white/[0.01]">
<div className="flex flex-col items-center">
<div className="text-2xl font-semibold text-white mb-1">99.99%</div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Uptime SLA</div>
</div>
<div className="flex flex-col items-center">
<div className="text-2xl font-semibold text-white mb-1">5.7GHz+</div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Clock Speed</div>
</div>
<div className="flex flex-col items-center">
<div className="text-2xl font-semibold text-white mb-1">&lt;15ms</div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Global Latency</div>
</div>
<div className="flex flex-col items-center">
<div className="text-2xl font-semibold text-white mb-1">Instant</div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Activation</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 relative">

<div className="absolute -left-12 top-20 w-[1px] h-64 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent hidden xl:block"></div>
<div className="absolute -right-12 top-40 w-[1px] h-64 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent hidden xl:block"></div>
<div className="text-center mb-16">
<h2 className="text-3xl text-white font-semibold tracking-tight mb-3">Control without limits</h2>
<p className="text-slate-400 text-sm">Our custom-built panel handles the heavy lifting.</p>
</div>

<div className="rounded-xl border border-white/10 bg-[#0B0B0F] shadow-2xl overflow-hidden ring-1 ring-white/5 relative group">

<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50"></div>

<div className="h-14 border-b border-white/5 flex items-center justify-between px-5 bg-white/[0.02]">
<div className="flex items-center gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
</div>
<div className="h-5 w-[1px] bg-white/5"></div>
<div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/5">
<iconify-icon className="text-cyan-400" icon="solar:server-square-bold"></iconify-icon>
<span className="text-xs font-medium text-slate-200">void-smp-01</span>
<span className="text-[10px] text-slate-500 ml-1">PORT: 25565</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
<iconify-icon className="text-indigo-400" icon="solar:cpu-linear"></iconify-icon>
<span>12% Load</span>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
<iconify-icon className="text-indigo-400" icon="solar:database-linear"></iconify-icon>
<span>4.2GB / 12GB</span>
</div>
<div className="flex items-center gap-2 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 shadow-[0_0_10px_-3px_rgba(16,185,129,0.3)]">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
                            Running
                        </div>
</div>
</div>
<div className="flex flex-col md:flex-row h-[600px]">

<div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/5 bg-[#0e0e11] p-4 flex flex-col gap-1">
<div className="flex items-center gap-3 px-3 py-3 mb-4 rounded-lg bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/10">
<img alt="icon" className="w-8 h-8 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<div className="text-xs font-semibold text-white">Fabric 1.20.4</div>
<div className="text-[10px] text-cyan-400">Latest Build</div>
</div>
</div>
<div className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2 px-3 mt-2">Server Control</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors group" href="#">
<iconify-icon className="group-hover:text-cyan-400 transition-colors" icon="solar:terminal-linear" width="18"></iconify-icon>
                            Console
                        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors group" href="#">
<iconify-icon className="group-hover:text-cyan-400 transition-colors" icon="solar:folder-with-files-linear" width="18"></iconify-icon>
                            File Manager
                        </a>
<div className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mt-6 mb-2 px-3">Configuration</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm bg-gradient-to-r from-cyan-500/10 to-transparent text-cyan-300 border-l-2 border-cyan-500" href="#">
<iconify-icon icon="solar:box-minimalistic-bold" width="18"></iconify-icon>
                            Mod Manager
                        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors group" href="#">
<iconify-icon className="group-hover:text-cyan-400 transition-colors" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                            Players
                        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors group" href="#">
<iconify-icon className="group-hover:text-cyan-400 transition-colors" icon="solar:settings-linear" width="18"></iconify-icon>
                            Settings
                        </a>
</div>

<div className="flex-1 flex flex-col min-w-0 bg-[#0A0A0B]">

<div className="p-6 border-b border-white/5">
<div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center mb-6">
<div>
<h3 className="text-xl font-medium text-white tracking-tight flex items-center gap-2">
                                        Mod Installer
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">v2.0</span>
</h3>
</div>
<div className="relative group w-full sm:w-auto">
<iconify-icon className="absolute left-3 top-2.5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full sm:w-72 pl-10 pr-4 py-2 bg-black/40 border border-white/10 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="Search 2,000+ modpacks..." type="text"/>
</div>
</div>
<div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg w-fit">
<button className="px-4 py-1.5 rounded-md text-sm font-medium bg-slate-800 text-white shadow-sm ring-1 ring-white/10">Modpacks</button>
<button className="px-4 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-white transition-colors">Plugins</button>
<button className="px-4 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-white transition-colors">Versions</button>
</div>
</div>

<div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-grid">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

<div className="group relative p-4 rounded-xl border border-white/5 bg-[#0f0f13] hover:border-cyan-500/30 transition-all overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 flex items-center justify-center border border-cyan-500/20 text-cyan-400 shadow-[0_0_15px_-5px_rgba(34,211,238,0.3)]">
<iconify-icon icon="solar:atom-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">All The Mods 9</h4>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] text-slate-400">Fabric</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span className="text-[10px] text-slate-400">1.20.1</span>
</div>
</div>
</div>
<button className="px-3 py-1.5 rounded bg-cyan-500/10 text-cyan-400 text-xs font-medium border border-cyan-500/20 hover:bg-cyan-500 hover:text-black transition-all">Install</button>
</div>
<p className="relative z-10 text-xs text-slate-400 line-clamp-2">The ultimate kitchen-sink modpack featuring over 400 mods, quests, and optimized performance.</p>
</div>

<div className="group relative p-4 rounded-xl border border-white/5 bg-[#0f0f13] hover:border-indigo-500/30 transition-all overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-900/40 to-indigo-800/20 flex items-center justify-center border border-indigo-500/20 text-indigo-400 shadow-[0_0_15px_-5px_rgba(99,102,241,0.3)]">
<iconify-icon icon="solar:flame-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">RLCraft</h4>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] text-slate-400">Forge</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span className="text-[10px] text-slate-400">1.12.2</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded bg-slate-800 text-slate-300 border border-white/5">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                                                Installed
                                             </span>
</div>
</div>
<p className="relative z-10 text-xs text-slate-400 line-clamp-2">Realism, dragons, and extreme difficulty. Do you have what it takes to survive?</p>
</div>

<div className="group relative p-4 rounded-xl border border-white/5 bg-[#0f0f13] hover:border-violet-500/30 transition-all overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-900/40 to-violet-800/20 flex items-center justify-center border border-violet-500/20 text-violet-400 shadow-[0_0_15px_-5px_rgba(139,92,246,0.3)]">
<iconify-icon icon="solar:ufo-3-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white group-hover:text-violet-300 transition-colors">Vault Hunters</h4>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] text-slate-400">Forge</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span className="text-[10px] text-slate-400">1.18.2</span>
</div>
</div>
</div>
<button className="px-3 py-1.5 rounded bg-white/5 text-white text-xs font-medium border border-white/10 hover:bg-white/10 transition-all">Install</button>
</div>
<p className="relative z-10 text-xs text-slate-400 line-clamp-2">An RPG based modpack focused on looting vaults, leveling up gear and fighting bosses.</p>
</div>

<div className="group relative p-4 rounded-xl border border-white/5 bg-[#0f0f13] hover:border-emerald-500/30 transition-all overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 flex items-center justify-center border border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_-5px_rgba(16,185,129,0.3)]">
<iconify-icon icon="solar:leaf-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white group-hover:text-emerald-300 transition-colors">Better MC</h4>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] text-slate-400">Fabric</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span className="text-[10px] text-slate-400">1.20.1</span>
</div>
</div>
</div>
<button className="px-3 py-1.5 rounded bg-white/5 text-white text-xs font-medium border border-white/10 hover:bg-white/10 transition-all">Install</button>
</div>
<p className="relative z-10 text-xs text-slate-400 line-clamp-2">Adds over 250+ mods, new biomes, dimensions and bosses to Minecraft.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-32">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<div>
<h3 className="text-3xl font-semibold text-white mb-2 tracking-tight">Engineered for Speed</h3>
<p className="text-slate-400">We don't oversell. We overdeliver.</p>
</div>
<a className="text-cyan-400 text-sm font-medium hover:text-cyan-300 flex items-center gap-1" href="#">
                    View full specs
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="gradient-border rounded-xl p-6 h-full hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 mb-6 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 ring-1 ring-indigo-500/20">
<iconify-icon icon="solar:shield-check-bold" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-white mb-3">Path.net Protection</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                        Multi-terabit DDoS mitigation that filters traffic at the edge. Your server stays online, no matter the attack size.
                    </p>
</div>

<div className="gradient-border rounded-xl p-6 h-full hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 mb-6 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 ring-1 ring-cyan-500/20">
<iconify-icon icon="solar:ssd-square-bold" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-white mb-3">Gen4 NVMe Storage</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                        Read/Write speeds up to 7000MB/s. Chunk loading is instantaneous, ensuring a lag-free experience for players.
                    </p>
</div>

<div className="gradient-border rounded-xl p-6 h-full hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 mb-6 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 ring-1 ring-blue-500/20">
<iconify-icon icon="solar:global-bold" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-white mb-3">Low Latency Network</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                        Premium bandwidth carriers including GTT, NTT, and Telia ensuring the lowest possible ping for your players.
                    </p>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-12 bg-black relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded flex items-center justify-center bg-white/10">
<iconify-icon className="text-slate-400" icon="solar:cpu-bolt-linear" width="16"></iconify-icon>
</div>
<span className="text-slate-300 font-semibold tracking-tight">VOIDHOST</span>
</div>
<div className="flex gap-8 text-sm text-slate-500 font-medium">
<a className="hover:text-cyan-400 transition-colors" href="#">SLA</a>
<a className="hover:text-cyan-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-cyan-400 transition-colors" href="#">Status</a>
<a className="hover:text-cyan-400 transition-colors" href="#">API</a>
</div>
<div className="text-sm text-slate-600">
                © 2024 VoidHost Networks.
            </div>
</div>
</footer>

    </>
  );
}
