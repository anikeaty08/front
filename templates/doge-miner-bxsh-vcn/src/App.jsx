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
      

<header className="border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white font-semibold tracking-tighter text-lg select-none" href="#">DM</a>
<nav className="hidden md:flex gap-6 text-sm font-medium">
<a className="text-neutral-100 transition-colors" href="#">Arcade</a>
<a className="hover:text-neutral-200 transition-colors" href="#">Leaderboard</a>
<a className="hover:text-neutral-200 transition-colors" href="#">Settings</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-neutral-800/80 rounded-md transition-colors text-neutral-500 hover:text-white flex items-center">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800 text-white hover:border-neutral-600 transition-colors">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-grow flex flex-col items-center py-10 px-4 sm:px-6 w-full">
<div className="w-full max-w-6xl">

<div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-neutral-900 border border-neutral-800 text-neutral-300">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Online
                        </span>
<span className="text-xs font-medium text-neutral-500">v1.0.4</span>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-white mb-1">Doge Miner</h1>
<p className="text-sm text-neutral-500">To the moon! Click the Doge to mine Dogecoin and build your empire.</p>
</div>
<div className="flex gap-3">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm font-medium text-emerald-500 cursor-help" title="Strict sandbox enabled: Popups and redirects are blocked">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="16"></iconify-icon> Adblock On
                    </div>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-sm font-medium hover:bg-neutral-800 transition-colors text-neutral-200">
<iconify-icon icon="solar:share-linear" strokeWidth="1.5" width="16"></iconify-icon> Share
                    </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-sm font-medium text-yellow-500 hover:bg-yellow-500/20 transition-colors">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon> Save
                    </button>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/5 flex flex-col">

<div className="bg-black/20 border-b border-neutral-800/80 px-4 py-2.5 flex items-center justify-between select-none">
<div className="flex items-center gap-2 w-1/3">
<div className="w-3 h-3 rounded-full bg-neutral-700/80 border border-neutral-600/30 hover:bg-red-500/80 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700/80 border border-neutral-600/30 hover:bg-yellow-500/80 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700/80 border border-neutral-600/30 hover:bg-green-500/80 transition-colors"></div>
</div>
<div className="flex-grow flex justify-center w-1/3">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-400 bg-neutral-950/50 px-4 py-1.5 rounded-md border border-neutral-800/80 max-w-sm w-full justify-center relative">
<iconify-icon className="text-neutral-500" icon="solar:lock-keyhole-linear" strokeWidth="1.5" width="12"></iconify-icon>
                            dogeminer.se
                            <iconify-icon className="text-emerald-500 absolute right-3" icon="solar:shield-check-linear" strokeWidth="1.5" title="Ads blocked" width="12"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-end gap-3 w-1/3 text-neutral-500">
<button className="hover:text-white transition-colors flex items-center">
<iconify-icon icon="solar:refresh-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="hover:text-white transition-colors flex items-center" title="Fullscreen">
<iconify-icon icon="solar:maximize-square-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="relative w-full aspect-video sm:aspect-auto sm:h-[680px] bg-neutral-950">

<div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-600 z-0 pointer-events-none">
<iconify-icon className="mb-3 animate-pulse text-yellow-500/30" icon="solar:moon-stars-linear" strokeWidth="1.5" width="42"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Initializing Spacecraft...</span>
</div>

<iframe allowfullscreen="" className="relative z-10 w-full h-full border-0 bg-transparent" sandbox="allow-scripts allow-same-origin" src="https://dogeminer.se/" title="Doge Miner Game">
</iframe>
</div>
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="col-span-1 md:col-span-2 p-6 rounded-xl border border-neutral-800/80 bg-neutral-900/40">
<h2 className="text-lg font-medium tracking-tight text-white mb-3 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:info-circle-linear" strokeWidth="1.5" width="20"></iconify-icon> 
                        About this game
                    </h2>
<p className="text-sm text-neutral-400 leading-relaxed">
                        The objective of this game is to click on the Doge to mine Dogecoin. As you accumulate more currency, you can purchase upgrades like Mining Shibes, Kennels, and Kitten Workers to increase your passive income. Your ultimate goal is to save enough Dogecoin to fly to the moon. Much wow.
                    </p>
</div>
<div className="p-6 rounded-xl border border-neutral-800/80 bg-neutral-900/40">
<h2 className="text-lg font-medium tracking-tight text-white mb-4">Controls</h2>
<ul className="space-y-4 text-sm text-neutral-400">
<li className="flex items-center justify-between">
<span className="flex items-center gap-2">
<iconify-icon icon="solar:mouse-minimalistic-linear" strokeWidth="1.5" width="16"></iconify-icon> Mine
                            </span>
<kbd className="px-2 py-1 rounded bg-neutral-800 border border-neutral-700 text-xs font-medium text-neutral-200 shadow-sm">Left Click</kbd>
</li>
<li className="flex items-center justify-between">
<span className="flex items-center gap-2">
<iconify-icon icon="solar:cursor-square-linear" strokeWidth="1.5" width="16"></iconify-icon> Collect Drops
                            </span>
<kbd className="px-2 py-1 rounded bg-neutral-800 border border-neutral-700 text-xs font-medium text-neutral-200 shadow-sm">Hover</kbd>
</li>
</ul>
</div>
</div>
</div>
</main>

<footer className="mt-auto border-t border-neutral-800/60 py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-neutral-600">
<p>Embed interface design demo. Not affiliated with original creators.</p>
<div className="flex gap-4">
<a className="hover:text-neutral-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
