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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-orange-600 rounded-sm transform -skew-x-12"></div>
<span className="text-white text-lg font-semibold tracking-tighter uppercase">Apex<span className="text-slate-500">Racing</span></span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-white hover:text-orange-500 transition-colors" href="#">Home</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#garage">Garage</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#leaderboard">Leaderboard</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#seasons">Seasons</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-xs font-medium text-slate-400 hover:text-white" href="#">Sign In</a>
<button className="bg-white text-slate-950 px-4 py-2 rounded text-xs font-semibold hover:bg-slate-200 transition-colors tracking-tight">
                    Play Now
                </button>
</div>

<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 z-0 bg-grid opacity-20"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-orange-400 mb-8">
<span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
                Season 4: Neon Nights is Live
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-tight mb-6">
                DRIVE THE <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">UNFORGIVING.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Experience hyper-realistic physics and 8K visuals. Customize every piston, compete in global leagues, and dominate the asphalt.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded font-medium transition-all flex items-center justify-center gap-2 group">
<span>Start Engine</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3 border border-white/10 hover:bg-white/5 text-white rounded font-medium transition-colors backdrop-blur-sm">
                    View Trailer
                </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-white/5 pt-10 max-w-4xl mx-auto">
<div className="text-center">
<p className="text-3xl font-semibold text-white tracking-tight">120+</p>
<p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Licensed Cars</p>
</div>
<div className="text-center">
<p className="text-3xl font-semibold text-white tracking-tight">60fps</p>
<p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Cross-Platform</p>
</div>
<div className="text-center">
<p className="text-3xl font-semibold text-white tracking-tight">50M+</p>
<p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Racers</p>
</div>
<div className="text-center">
<p className="text-3xl font-semibold text-white tracking-tight">0.01s</p>
<p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Latency</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/50 border-y border-white/5" id="garage">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-2">THE GARAGE</h2>
<p className="text-slate-400 text-sm max-w-md">Fine-tune your machine. Every adjustment impacts handling, acceleration, and top speed on the track.</p>
</div>

<div className="flex bg-slate-950 p-1 rounded-lg border border-white/10">
<button className="px-4 py-1.5 text-xs font-medium text-white bg-white/10 rounded shadow-sm">Street</button>
<button className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors">Sport</button>
<button className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors">Super</button>
<button className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors">Hyper</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 relative group overflow-hidden rounded-xl border border-white/10 bg-slate-950">
<div className="absolute top-4 left-4 z-10 flex gap-2">
<span className="px-2 py-1 bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[10px] font-bold uppercase tracking-wider rounded">Class S</span>
<span className="px-2 py-1 bg-white/5 text-slate-300 border border-white/10 text-[10px] font-bold uppercase tracking-wider rounded">AWD</span>
</div>

<div className="h-64 md:h-96 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-slate-950 flex items-center justify-center">
<iconify-icon className="text-slate-800 opacity-50 text-9xl scale-150 transform group-hover:scale-125 transition-transform duration-700" icon="lucide:car-front"></iconify-icon>
<div className="absolute inset-0 flex items-center justify-center">
<h3 className="text-6xl md:text-8xl font-bold text-white/5 uppercase tracking-tighter select-none">Spectre GT</h3>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-950 to-transparent">
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-semibold text-white tracking-tight">Spectre GT-R</h3>
<p className="text-sm text-slate-400">Manufactured in Germany</p>
</div>
<div className="text-right">
<p className="text-2xl font-mono text-orange-500">342 <span className="text-xs text-slate-500 font-sans">KM/H</span></p>
</div>
</div>
</div>
</div>

<div className="bg-slate-950 border border-white/10 rounded-xl p-6 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<h4 className="text-sm font-medium text-white uppercase tracking-wider">Performance Tuning</h4>
<iconify-icon className="text-slate-400" icon="lucide:settings-2"></iconify-icon>
</div>

<div className="space-y-6">

<div>
<div className="flex justify-between mb-2">
<label className="text-xs text-slate-400 font-medium">Downforce</label>
<span className="text-xs text-white font-mono">1.2G</span>
</div>
<input max="100" min="0" type="range" value="65"/>
</div>

<div>
<div className="flex justify-between mb-2">
<label className="text-xs text-slate-400 font-medium">Final Drive</label>
<span className="text-xs text-white font-mono">3.42</span>
</div>
<input max="100" min="0" type="range" value="40"/>
</div>

<div>
<div className="flex justify-between mb-2">
<label className="text-xs text-slate-400 font-medium">Suspension Stiffness</label>
<span className="text-xs text-white font-mono">Race</span>
</div>
<input max="100" min="0" type="range" value="85"/>
</div>

<div>
<div className="flex justify-between mb-2">
<label className="text-xs text-slate-400 font-medium">Brake Bias (F/R)</label>
<span className="text-xs text-white font-mono">60/40</span>
</div>
<input max="100" min="0" type="range" value="60"/>
</div>
</div>
</div>

<div className="mt-8 pt-6 border-t border-white/5">
<div className="flex justify-between items-center mb-4">
<span className="text-xs text-slate-400">Tuning Cost</span>
<span className="text-sm font-semibold text-white">$4,250</span>
</div>
<button className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:wrench" width="14"></iconify-icon>
                             Apply Configuration
                         </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-4">ENGINEERED FOR SPEED</h2>
<p className="text-slate-400 max-w-xl mx-auto">Built on a proprietary engine designed exclusively for high-fidelity motorsport simulation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-white/5 bg-slate-900/30 hover:border-orange-500/30 transition-colors group">
<div className="h-10 w-10 rounded bg-slate-800 flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Ray-Traced Lighting</h3>
<p className="text-sm text-slate-400 leading-relaxed">Dynamic weather and time-of-day systems powered by real-time global illumination.</p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-slate-900/30 hover:border-orange-500/30 transition-colors group">
<div className="h-10 w-10 rounded bg-slate-800 flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:activity" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Telemetry Data</h3>
<p className="text-sm text-slate-400 leading-relaxed">Analyze your laps with professional-grade telemetry graphs and heatmaps.</p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-slate-900/30 hover:border-orange-500/30 transition-colors group">
<div className="h-10 w-10 rounded bg-slate-800 flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:users" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Club Leagues</h3>
<p className="text-sm text-slate-400 leading-relaxed">Form racing teams, manage sponsorships, and compete for the seasonal cup.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-t border-white/5" id="leaderboard">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
<h2 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="lucide:trophy"></iconify-icon>
                    GLOBAL RANKINGS
                </h2>
<div className="flex items-center gap-2 text-xs font-medium">
<span className="text-slate-400">Track:</span>
<span className="text-white bg-slate-800 px-2 py-1 rounded">Tokyo Expressway</span>
</div>
</div>
<div className="overflow-x-auto rounded-lg border border-white/5">
<table className="w-full text-left text-sm text-slate-400">
<thead className="bg-slate-900 text-xs uppercase font-medium text-slate-200">
<tr>
<th className="px-6 py-4 tracking-wider" scope="col">Rank</th>
<th className="px-6 py-4 tracking-wider" scope="col">Driver</th>
<th className="px-6 py-4 tracking-wider" scope="col">Car</th>
<th className="px-6 py-4 tracking-wider text-right" scope="col">Time</th>
<th className="px-6 py-4 tracking-wider text-right" scope="col">Gap</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 bg-slate-950/50">
<tr className="hover:bg-white/5 transition-colors group cursor-pointer">
<td className="px-6 py-4 font-mono text-orange-500 font-semibold">01</td>
<td className="px-6 py-4 text-white font-medium flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px]">A</span>
                                Alex_Drift
                            </td>
<td className="px-6 py-4">Spectre GT-R</td>
<td className="px-6 py-4 text-right text-white font-mono">1:42.392</td>
<td className="px-6 py-4 text-right font-mono text-emerald-500">-</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group cursor-pointer">
<td className="px-6 py-4 font-mono">02</td>
<td className="px-6 py-4 text-white font-medium flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-[10px]">S</span>
                                SarahV8
                            </td>
<td className="px-6 py-4">Phantom X</td>
<td className="px-6 py-4 text-right text-white font-mono">1:42.501</td>
<td className="px-6 py-4 text-right font-mono text-rose-500">+0.109</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group cursor-pointer">
<td className="px-6 py-4 font-mono">03</td>
<td className="px-6 py-4 text-white font-medium flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">M</span>
                                MaxSpeed
                            </td>
<td className="px-6 py-4">Vortex S</td>
<td className="px-6 py-4 text-right text-white font-mono">1:42.844</td>
<td className="px-6 py-4 text-right font-mono text-rose-500">+0.452</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group cursor-pointer">
<td className="px-6 py-4 font-mono">04</td>
<td className="px-6 py-4 text-white font-medium flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px]">K</span>
                                K_Block
                            </td>
<td className="px-6 py-4">Hoonigan</td>
<td className="px-6 py-4 text-right text-white font-mono">1:43.102</td>
<td className="px-6 py-4 text-right font-mono text-rose-500">+0.710</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-6 text-center">
<button className="text-xs font-medium text-slate-500 hover:text-white transition-colors flex items-center justify-center gap-1 mx-auto">
                    View Full Leaderboard
                    <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-orange-600/5"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-6">READY TO RACE?</h2>
<p className="text-slate-400 mb-8 max-w-lg mx-auto">Join 50 million players. Download the client now and get the Starter Pack including the "Nebula" paint job.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-slate-950 hover:bg-slate-200 rounded font-semibold transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:download" width="18"></iconify-icon>
                    Download for PC
                </button>
<div className="flex gap-2">
<button className="w-12 h-12 flex items-center justify-center rounded border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
<iconify-icon icon="lucide:gamepad-2" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 flex items-center justify-center rounded border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
<iconify-icon icon="lucide:smartphone" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="h-4 w-4 bg-slate-700 rounded-sm transform -skew-x-12"></div>
<span className="text-white text-sm font-semibold tracking-tight uppercase">ApexRacing</span>
</div>
<div className="flex gap-6 text-xs font-medium text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
<a className="hover:text-white transition-colors" href="#">Press</a>
</div>
<div className="flex gap-4 text-slate-500">
<a className="hover:text-orange-500 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="hover:text-orange-500 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
<a className="hover:text-orange-500 transition-colors" href="#"><iconify-icon icon="lucide:youtube" width="16"></iconify-icon></a>
<a className="hover:text-orange-500 transition-colors" href="#"><iconify-icon icon="lucide:twitch" width="16"></iconify-icon></a>
</div>
</div>
<div className="text-center mt-8 text-[10px] text-slate-600">
            © 2023 Apex Racing Ltd. All rights reserved.
        </div>
</footer>

    </>
  );
}
