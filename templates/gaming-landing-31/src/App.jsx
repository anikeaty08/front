import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<nav className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-zinc-200 to-zinc-500 flex items-center justify-center text-zinc-950">
<iconify-icon height="16" icon="solar:star-fall-linear" width="16"></iconify-icon>
</div>
                    CCG
                </a>
<div className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
<a className="hover:text-zinc-50 transition-colors" href="#">Play</a>
<a className="hover:text-zinc-50 transition-colors" href="#">Matchmaking</a>
<a className="hover:text-zinc-50 transition-colors" href="#">Leaderboards</a>
<a className="hover:text-zinc-50 transition-colors" href="#">Factions</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors hidden md:block">Sign In</button>
<button className="bg-zinc-50 text-zinc-950 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-zinc-200 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
                    Quick Match
                </button>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col items-center justify-center pt-24 pb-16 px-6 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>

<div className="max-w-3xl mx-auto text-center z-10 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 font-medium mb-4">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                v2.1.4 Global Servers Online
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 leading-tight">
                Modern Warfare.<br/>Right in your browser.
            </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto font-light">
                Experience the definitive real-time strategy classic completely free. No installations, no configuration. Build your base and command your armies instantly.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="w-full sm:w-auto bg-zinc-50 text-zinc-950 font-medium px-6 py-3 rounded-md hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:gamepad-linear" width="20"></iconify-icon>
                    Initialize Engine
                </button>
<button className="w-full sm:w-auto bg-transparent border border-white/10 text-zinc-300 font-medium px-6 py-3 rounded-md hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
                    Server Browser
                </button>
</div>
</div>

<div className="w-full max-w-5xl mx-auto mt-20 z-10">
<div className="rounded-xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden shadow-2xl">

<div className="h-10 border-b border-white/5 bg-zinc-950/50 flex items-center px-4 justify-between">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
</div>
<div className="text-xs text-zinc-500 font-medium tracking-tight">ccg-web-client-alpha</div>
<div className="w-10"></div> 
</div>

<div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">

<div className="flex-1 space-y-4">
<div className="flex items-center justify-between pb-2 border-b border-white/5">
<h2 className="text-lg font-medium tracking-tight text-zinc-200">Active Deployments</h2>
<button className="text-xs text-zinc-400 hover:text-zinc-50 flex items-center gap-1">
<iconify-icon icon="solar:refresh-linear" width="14"></iconify-icon> Refresh
                            </button>
</div>
<div className="space-y-2">

<div className="group flex items-center justify-between p-3 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-200">EU West - Tournament</div>
<div className="text-xs text-zinc-500">Map: Tournament Desert • 1v1</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-xs text-zinc-400 text-right">
<div className="text-zinc-300">2/2 Players</div>
<div>In Progress (14m)</div>
</div>
<button className="opacity-0 group-hover:opacity-100 text-xs bg-white/10 text-white px-3 py-1.5 rounded transition-opacity">Spectate</button>
</div>
</div>

<div className="group flex items-center justify-between p-3 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:map-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-200">US East - Casual 3v3</div>
<div className="text-xs text-zinc-500">Map: Twilight Flame • 3v3</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-xs text-zinc-400 text-right">
<div className="text-zinc-300">5/6 Players</div>
<div>Waiting in Lobby</div>
</div>
<button className="opacity-0 group-hover:opacity-100 text-xs bg-zinc-50 text-zinc-950 font-medium px-3 py-1.5 rounded transition-opacity">Join Game</button>
</div>
</div>

<div className="group flex items-center justify-between p-3 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
<iconify-icon icon="solar:cpu-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-200">Comp Stomp - Hard AI</div>
<div className="text-xs text-zinc-500">Map: Defcon 6 • Co-op</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-xs text-zinc-400 text-right">
<div className="text-zinc-300">1/4 Players</div>
<div>Waiting in Lobby</div>
</div>
<button className="opacity-0 group-hover:opacity-100 text-xs bg-zinc-50 text-zinc-950 font-medium px-3 py-1.5 rounded transition-opacity">Join Game</button>
</div>
</div>
</div>
</div>

<div className="w-full md:w-64 flex flex-col gap-4">
<div className="pb-2 border-b border-white/5">
<h2 className="text-sm font-medium tracking-tight text-zinc-400 uppercase">Select Faction</h2>
</div>
<label className="relative flex cursor-pointer rounded-lg border border-white/5 bg-zinc-950 p-4 hover:bg-white/5 transition-colors">
<input checked="" className="peer sr-only" name="faction" type="radio"/>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-blue-900/30 flex items-center justify-center text-blue-500 mt-0.5">
<iconify-icon icon="solar:star-ring-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-200 peer-checked:text-white">USA</div>
<div className="text-xs text-zinc-500 mt-1">Air superiority, advanced technology, and lasers.</div>
</div>
</div>
<div className="absolute inset-0 rounded-lg border-2 border-transparent peer-checked:border-zinc-500/30 pointer-events-none"></div>
</label>
<label className="relative flex cursor-pointer rounded-lg border border-white/5 bg-zinc-950 p-4 hover:bg-white/5 transition-colors">
<input className="peer sr-only" name="faction" type="radio"/>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-red-900/30 flex items-center justify-center text-red-500 mt-0.5">
<iconify-icon icon="solar:danger-triangle-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-200 peer-checked:text-white">China</div>
<div className="text-xs text-zinc-500 mt-1">Heavy armor, sheer numbers, and nuclear tech.</div>
</div>
</div>
<div className="absolute inset-0 rounded-lg border-2 border-transparent peer-checked:border-zinc-500/30 pointer-events-none"></div>
</label>
<label className="relative flex cursor-pointer rounded-lg border border-white/5 bg-zinc-950 p-4 hover:bg-white/5 transition-colors">
<input className="peer sr-only" name="faction" type="radio"/>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-green-900/30 flex items-center justify-center text-green-500 mt-0.5">
<iconify-icon icon="solar:shield-warning-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-200 peer-checked:text-white">GLA</div>
<div className="text-xs text-zinc-500 mt-1">Stealth, mobility, and unconventional tactics.</div>
</div>
</div>
<div className="absolute inset-0 rounded-lg border-2 border-transparent peer-checked:border-zinc-500/30 pointer-events-none"></div>
</label>
</div>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
<div className="p-6 rounded-xl border border-white/5 bg-zinc-900/20">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 mb-4">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-200 mb-2">Zero Installation</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Powered by WebAssembly. The entire game engine runs client-side in your modern web browser with near-native performance.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-zinc-900/20">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 mb-4">
<iconify-icon icon="solar:routing-2-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-200 mb-2">Peer-to-Peer Netcode</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Experience smooth multiplayer matches utilizing WebRTC for direct, low-latency connections between commanders.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-zinc-900/20">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 mb-4">
<iconify-icon icon="solar:history-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-200 mb-2">Classic Experience</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Faithful to the original mechanics, balance, and unit stats. A community-driven effort to preserve a strategy masterpiece.</p>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-zinc-950 mt-auto">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 font-medium tracking-tighter text-zinc-400">
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
                CCG Web
            </div>
<p className="text-xs text-zinc-600 font-light text-center md:text-left max-w-lg">
                This is a fan-made project. Not affiliated with, endorsed by, or sponsored by Electronic Arts. All game assets, names, and concepts remain the property of their respective owners.
            </p>
<div className="flex gap-4 text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#"><iconify-icon icon="solar:code-circle-linear" width="20"></iconify-icon></a>
<a className="hover:text-zinc-300 transition-colors" href="#"><iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
