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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const counter = document.getElementById("streamCount");
            let baseValue = 24105892;
            
            // Slowly tick up the stream count for realism
            setInterval(() => {
                // Randomly add 1 to 5 streams every few seconds
                const increment = Math.floor(Math.random() * 5) + 1;
                baseValue += increment;
                // Format with commas
                counter.innerText = baseValue.toLocaleString('en-US');
            }, 3500);
        });
    
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
      

<nav className="w-full border-b border-zinc-800/40 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="text-white font-medium tracking-tighter text-sm flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                STUDIO
            </div>
<div className="flex gap-5 text-zinc-500">
<button className="hover:text-white transition-colors duration-300 flex"><iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon></button>
<button className="hover:text-white transition-colors duration-300 flex"><iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon></button>
</div>
</div>
</nav>

<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1">

<header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 relative">

<div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="flex items-center gap-6 relative z-10">

<div className="w-24 h-24 rounded-full bg-[#0f1219] border border-zinc-800 flex items-center justify-center relative group overflow-hidden shadow-xl">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
<span className="text-2xl tracking-tighter font-medium text-zinc-400">NS</span>
<div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] pointer-events-none"></div>
</div>
<div>
<div className="flex items-center gap-3 mb-1.5">
<h1 className="text-3xl tracking-tight font-medium text-white">NorthSideBaby</h1>
<span className="px-2.5 py-0.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-xs font-medium flex items-center gap-1.5 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.6)]"></span>
                            Active Artist
                        </span>
</div>
<p className="text-zinc-500 text-sm flex items-center gap-2 font-medium">
<iconify-icon icon="solar:music-library-2-linear" strokeWidth="1.5" width="16"></iconify-icon> Hip-Hop / Rap
                    </p>
</div>
</div>

<div className="relative group w-full md:w-auto z-10">

<div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
<div className="relative glass-panel rounded-2xl p-6 min-w-[280px]">
<h2 className="text-zinc-400 text-xs font-medium mb-2 uppercase tracking-widest flex items-center justify-between">
                        Balance
                        <iconify-icon className="text-zinc-500" icon="solar:wallet-money-linear" strokeWidth="1.5" width="18"></iconify-icon>
</h2>
<div className="text-4xl tracking-tight font-medium text-white mb-1">$1,012.00</div>
<p className="text-xs text-zinc-500">Available account balance</p>
</div>
</div>
</header>

<section className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
<div className="lg:col-span-2 glass-panel rounded-2xl p-6 overflow-hidden relative group flex flex-col justify-between">
<div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full pointer-events-none"></div>
<h3 className="text-zinc-400 text-xs font-medium uppercase tracking-widest mb-6 flex items-center gap-2">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="16"></iconify-icon> Lifetime Streams
                </h3>
<div className="flex justify-between items-end relative z-10">
<div className="flex items-center gap-4">
<div className="text-3xl tracking-tight font-medium text-white stream-counter" id="streamCount">24,105,892</div>

<div className="flex items-end h-5 gap-[2px] opacity-70 pb-1">
<div className="wave-bar h-2"></div>
<div className="wave-bar h-4"></div>
<div className="wave-bar h-3"></div>
<div className="wave-bar h-5"></div>
<div className="wave-bar h-2"></div>
</div>
</div>

<div className="w-40 h-12 relative opacity-40 group-hover:opacity-70 transition-opacity duration-500">
<svg className="w-full h-full stroke-blue-400 fill-none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 100 30">
<path d="M0,28 L10,24 L20,26 L30,15 L40,18 L50,8 L60,12 L70,5 L80,10 L90,2 L100,6" style={{filter: 'drop-shadow(0 4px 6px rgba(96,165,250,0.3))'}}></path>
</svg>
</div>
</div>
</div>
<div className="glass-panel rounded-2xl p-6 flex flex-col justify-between">
<h3 className="text-zinc-400 text-xs font-medium uppercase tracking-widest mb-6">Monthly Listeners</h3>
<div>
<div className="text-2xl tracking-tight font-medium text-white mb-1">842,105</div>
<div className="text-xs text-purple-400 flex items-center gap-1 font-medium bg-purple-500/10 inline-flex px-2 py-1 rounded-md">
<iconify-icon icon="solar:trend-up-linear" strokeWidth="1.5" width="14"></iconify-icon> +12.4% vs last month
                     </div>
</div>
</div>
</section>

<section className="mb-24 relative">
<h2 className="text-xl tracking-tight font-medium text-white mb-6">Music</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


<div className="group flex items-center gap-4 p-3 pr-5 rounded-xl bg-[#0f1219]/30 border border-zinc-800/40 hover:bg-[#0f1219]/80 hover:border-zinc-700/60 transition-all duration-300">
<div className="w-14 h-14 rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden relative shrink-0">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-700/20 to-black/80"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
<iconify-icon className="text-white drop-shadow-md" icon="solar:play-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-zinc-200 truncate group-hover:text-white transition-colors">Ghost Town</h4>
<p className="text-xs text-zinc-500 truncate mt-0.5 font-medium">Oct 12, 2025 • 3:12</p>
</div>
<div className="text-right shrink-0">
<div className="text-xs font-medium text-zinc-300">4.2M</div>
<div className="text-[10px] text-zinc-600 uppercase tracking-wider mt-0.5">streams</div>
</div>
</div>

<div className="group flex items-center gap-4 p-3 pr-5 rounded-xl bg-[#0f1219]/30 border border-zinc-800/40 hover:bg-[#0f1219]/80 hover:border-zinc-700/60 transition-all duration-300">
<div className="w-14 h-14 rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden relative shrink-0">
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black/80"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
<iconify-icon className="text-white drop-shadow-md" icon="solar:play-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-zinc-200 truncate group-hover:text-white transition-colors">Neon Dreams</h4>
<p className="text-xs text-zinc-500 truncate mt-0.5 font-medium">Sep 05, 2025 • 2:58</p>
</div>
<div className="text-right shrink-0">
<div className="text-xs font-medium text-zinc-300">3.8M</div>
<div className="text-[10px] text-zinc-600 uppercase tracking-wider mt-0.5">streams</div>
</div>
</div>

<div className="group flex items-center gap-4 p-3 pr-5 rounded-xl bg-[#0f1219]/30 border border-zinc-800/40 hover:bg-[#0f1219]/80 hover:border-zinc-700/60 transition-all duration-300">
<div className="w-14 h-14 rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden relative shrink-0">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black/80"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
<iconify-icon className="text-white drop-shadow-md" icon="solar:play-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-zinc-200 truncate group-hover:text-white transition-colors">Late Night Drive</h4>
<p className="text-xs text-zinc-500 truncate mt-0.5 font-medium">Jul 22, 2025 • 3:45</p>
</div>
<div className="text-right shrink-0">
<div className="text-xs font-medium text-zinc-300">5.1M</div>
<div className="text-[10px] text-zinc-600 uppercase tracking-wider mt-0.5">streams</div>
</div>
</div>

<div className="group flex items-center gap-4 p-3 pr-5 rounded-xl bg-[#0f1219]/30 border border-zinc-800/40 hover:bg-[#0f1219]/80 hover:border-zinc-700/60 transition-all duration-300">
<div className="w-14 h-14 rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden relative shrink-0">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-700/20 to-black/80"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
<iconify-icon className="text-white drop-shadow-md" icon="solar:play-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-zinc-200 truncate group-hover:text-white transition-colors">Static</h4>
<p className="text-xs text-zinc-500 truncate mt-0.5 font-medium">May 14, 2025 • 2:30</p>
</div>
<div className="text-right shrink-0">
<div className="text-xs font-medium text-zinc-300">2.9M</div>
<div className="text-[10px] text-zinc-600 uppercase tracking-wider mt-0.5">streams</div>
</div>
</div>

<div className="group flex items-center gap-4 p-3 pr-5 rounded-xl bg-[#0f1219]/30 border border-zinc-800/40 hover:bg-[#0f1219]/80 hover:border-zinc-700/60 transition-all duration-300">
<div className="w-14 h-14 rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden relative shrink-0">
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black/80"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
<iconify-icon className="text-white drop-shadow-md" icon="solar:play-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-zinc-200 truncate group-hover:text-white transition-colors">Rogue</h4>
<p className="text-xs text-zinc-500 truncate mt-0.5 font-medium">Mar 30, 2025 • 3:05</p>
</div>
<div className="text-right shrink-0">
<div className="text-xs font-medium text-zinc-300">6.4M</div>
<div className="text-[10px] text-zinc-600 uppercase tracking-wider mt-0.5">streams</div>
</div>
</div>

<div className="group flex items-center gap-4 p-3 pr-5 rounded-xl bg-[#0f1219]/30 border border-zinc-800/40 hover:bg-[#0f1219]/80 hover:border-zinc-700/60 transition-all duration-300">
<div className="w-14 h-14 rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden relative shrink-0">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black/80"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
<iconify-icon className="text-white drop-shadow-md" icon="solar:play-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-zinc-200 truncate group-hover:text-white transition-colors">Visions</h4>
<p className="text-xs text-zinc-500 truncate mt-0.5 font-medium">Jan 18, 2025 • 4:10</p>
</div>
<div className="text-right shrink-0">
<div className="text-xs font-medium text-zinc-300">1.8M</div>
<div className="text-[10px] text-zinc-600 uppercase tracking-wider mt-0.5">streams</div>
</div>
</div>
</div>
</section>

<section>
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
<h2 className="text-xl tracking-tight font-medium text-white">Reserved Beats</h2>

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-950/20 border border-red-900/30 text-red-400 text-xs font-medium animate-urgency-glow">
<iconify-icon icon="solar:danger-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Reservation Expires Today — March 29, 2026
                </div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-blue-900/40 bg-[#0f1219]/80 p-8 mb-8 group glass-panel">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-8">
<div className="max-w-xl">
<div className="inline-block px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase tracking-widest font-medium mb-4">Limited Offer</div>
<h3 className="text-2xl tracking-tight font-medium text-white mb-2 group-hover:text-blue-100 transition-colors">Contemporary Rap Beat Bundle</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-lg">Three modern rap instrumentals reserved for licensing. Includes uncompressed WAV trackouts and unlimited commercial streaming rights.</p>
</div>
<div className="text-left md:text-right shrink-0 w-full md:w-auto p-4 md:p-0 bg-black/20 md:bg-transparent rounded-xl md:rounded-none border md:border-none border-zinc-800/50">
<div className="text-sm text-zinc-500 line-through mb-1 font-medium">$3,250.00</div>
<div className="text-3xl tracking-tight font-medium text-white mb-5 flex items-center md:justify-end gap-3">
                            $2,015.00
                            <span className="text-xs bg-white text-black px-2 py-0.5 rounded font-medium tracking-tight h-fit">-38%</span>
</div>
<button className="w-full md:w-auto px-6 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 text-sm font-medium transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                            Claim Bundle
                        </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel rounded-2xl overflow-hidden hover:border-purple-500/30 hover:bg-[#0f1219]/80 transition-all duration-500 group flex flex-col relative">

<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="p-6 flex-1 relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black"></div>
<iconify-icon className="text-zinc-400 relative z-10 group-hover:text-purple-400 transition-colors duration-500" icon="solar:record-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<span className="text-[10px] font-medium px-2 py-1 rounded-md bg-red-950/30 border border-red-900/30 text-red-400 flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon> Expires Today
                            </span>
</div>
<h4 className="text-base font-medium text-white mb-1">Midnight Skyline</h4>
<p className="text-xs text-purple-400/80 mb-6 font-medium">Producer: Aura Productions</p>
<div className="grid grid-cols-2 gap-3 mb-8">
<div className="bg-black/30 rounded-lg p-2.5 text-center border border-zinc-800/50">
<div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">BPM</div>
<div className="text-sm font-medium text-zinc-200">142</div>
</div>
<div className="bg-black/30 rounded-lg p-2.5 text-center border border-zinc-800/50">
<div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Key</div>
<div className="text-sm font-medium text-zinc-200">F Minor</div>
</div>
</div>
<div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">License Price</div>
<div className="text-xl tracking-tight font-medium text-white">$750.00</div>
</div>
</div>
<div className="p-3 border-t border-zinc-800/50 bg-black/40 flex gap-3 relative z-10 backdrop-blur-md">
<button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-800/50 hover:bg-zinc-700/80 text-zinc-300 text-xs font-medium transition-colors waveform-react group/btn">
<iconify-icon className="group-hover/btn:text-white transition-colors" icon="solar:play-linear" strokeWidth="1.5" width="16"></iconify-icon> Preview
                        </button>
<button className="flex-1 py-2.5 rounded-lg bg-zinc-200 hover:bg-white text-zinc-950 text-xs font-medium transition-colors">
                            Purchase
                        </button>
</div>
</div>

<div className="glass-panel rounded-2xl overflow-hidden hover:border-blue-500/30 hover:bg-[#0f1219]/80 transition-all duration-500 group flex flex-col relative">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="p-6 flex-1 relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black"></div>
<iconify-icon className="text-zinc-400 relative z-10 group-hover:text-blue-400 transition-colors duration-500" icon="solar:record-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<span className="text-[10px] font-medium px-2 py-1 rounded-md bg-red-950/30 border border-red-900/30 text-red-400 flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon> Expires Today
                            </span>
</div>
<h4 className="text-base font-medium text-white mb-1">Neon District</h4>
<p className="text-xs text-blue-400/80 mb-6 font-medium">Producer: Aura Productions</p>
<div className="grid grid-cols-2 gap-3 mb-8">
<div className="bg-black/30 rounded-lg p-2.5 text-center border border-zinc-800/50">
<div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">BPM</div>
<div className="text-sm font-medium text-zinc-200">128</div>
</div>
<div className="bg-black/30 rounded-lg p-2.5 text-center border border-zinc-800/50">
<div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Key</div>
<div className="text-sm font-medium text-zinc-200">C# Minor</div>
</div>
</div>
<div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">License Price</div>
<div className="text-xl tracking-tight font-medium text-white">$800.00</div>
</div>
</div>
<div className="p-3 border-t border-zinc-800/50 bg-black/40 flex gap-3 relative z-10 backdrop-blur-md">
<button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-800/50 hover:bg-zinc-700/80 text-zinc-300 text-xs font-medium transition-colors waveform-react group/btn">
<iconify-icon className="group-hover/btn:text-white transition-colors" icon="solar:play-linear" strokeWidth="1.5" width="16"></iconify-icon> Preview
                        </button>
<button className="flex-1 py-2.5 rounded-lg bg-zinc-200 hover:bg-white text-zinc-950 text-xs font-medium transition-colors">
                            Purchase
                        </button>
</div>
</div>

<div className="glass-panel rounded-2xl overflow-hidden hover:border-purple-500/30 hover:bg-[#0f1219]/80 transition-all duration-500 group flex flex-col relative">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="p-6 flex-1 relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black"></div>
<iconify-icon className="text-zinc-400 relative z-10 group-hover:text-purple-400 transition-colors duration-500" icon="solar:record-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<span className="text-[10px] font-medium px-2 py-1 rounded-md bg-red-950/30 border border-red-900/30 text-red-400 flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon> Expires Today
                            </span>
</div>
<h4 className="text-base font-medium text-white mb-1">Velvet Bounce</h4>
<p className="text-xs text-purple-400/80 mb-6 font-medium">Producer: Aura Productions</p>
<div className="grid grid-cols-2 gap-3 mb-8">
<div className="bg-black/30 rounded-lg p-2.5 text-center border border-zinc-800/50">
<div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">BPM</div>
<div className="text-sm font-medium text-zinc-200">98</div>
</div>
<div className="bg-black/30 rounded-lg p-2.5 text-center border border-zinc-800/50">
<div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Key</div>
<div className="text-sm font-medium text-zinc-200">G Major</div>
</div>
</div>
<div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">License Price</div>
<div className="text-xl tracking-tight font-medium text-white">$650.00</div>
</div>
</div>
<div className="p-3 border-t border-zinc-800/50 bg-black/40 flex gap-3 relative z-10 backdrop-blur-md">
<button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-800/50 hover:bg-zinc-700/80 text-zinc-300 text-xs font-medium transition-colors waveform-react group/btn">
<iconify-icon className="group-hover/btn:text-white transition-colors" icon="solar:play-linear" strokeWidth="1.5" width="16"></iconify-icon> Preview
                        </button>
<button className="flex-1 py-2.5 rounded-lg bg-zinc-200 hover:bg-white text-zinc-950 text-xs font-medium transition-colors">
                            Purchase
                        </button>
</div>
</div>
</div>
</section>
</main>



    </>
  );
}
