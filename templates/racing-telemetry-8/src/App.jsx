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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<svg className="text-purple-500 transition-transform group-hover:scale-110 duration-300" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 22L8.5 4H14.5C17.5 4 19.5 5.5 19.5 8.5C19.5 11.5 17.5 13 14.5 13H10L8 22H4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</a>

<div className="flex items-center gap-3">
<button className="flex items-center justify-center h-9 px-3 rounded-lg border border-white/10 text-sm font-medium text-gray-400 hover:text-white hover:border-white/20 transition-all bg-white/5">
                    PT
                </button>
<button className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all bg-white/5">
<i className="w-4 h-4" data-lucide="moon"></i>
</button>
</div>
</div>
</nav>

<main className="pt-32 pb-20 px-6 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
                    New Challenge Active
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                    Shave seconds off your <span className="gradient-text">best lap.</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
                    Upload telemetry, analyze cornering speeds, and compete against friends or global legends. The ultimate tool for track day enthusiasts.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                        Start Tracking
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                        Watch Demo
                    </button>
</div>
<div className="pt-8 flex items-center gap-6 text-gray-500">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-gray-700"></div>
<div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-gray-600"></div>
<div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-gray-500"></div>
<div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-purple-600 flex items-center justify-center text-white text-xs font-medium">+2k</div>
</div>
<p className="text-base">Racers joined this month</p>
</div>
</div>

<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20"></div>
<div className="relative glass-panel rounded-xl overflow-hidden shadow-2xl">

<div className="border-b border-white/10 px-6 py-4 flex items-center justify-between bg-black/40">
<div className="flex items-center gap-3">
<span className="text-white font-medium text-lg">Interlagos Circuit</span>
<span className="text-xs px-2 py-0.5 rounded border border-white/10 text-gray-400">Track Day</span>
</div>
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
</div>

<div className="p-2">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-xs text-gray-500 border-b border-white/5">
<th className="px-4 py-3 font-medium">Rank</th>
<th className="px-4 py-3 font-medium">Driver</th>
<th className="px-4 py-3 font-medium hidden sm:table-cell">Vehicle</th>
<th className="px-4 py-3 font-medium text-right">Time</th>
<th className="px-4 py-3 font-medium text-right">Gap</th>
</tr>
</thead>
<tbody className="text-sm">

<tr className="group hover:bg-white/5 transition-colors">
<td className="px-4 py-4 text-yellow-500 font-medium">1</td>
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-medium text-xs border border-purple-500/30">AS</div>
<span className="text-gray-200 group-hover:text-white">Ayrton S.</span>
</div>
</td>
<td className="px-4 py-4 text-gray-400 hidden sm:table-cell">McLaren MP4/4</td>
<td className="px-4 py-4 text-right font-mono text-white">1:12.405</td>
<td className="px-4 py-4 text-right text-purple-400 text-xs">-</td>
</tr>

<tr className="group hover:bg-white/5 transition-colors">
<td className="px-4 py-4 text-gray-400 font-medium">2</td>
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-medium text-xs border border-blue-500/30">MV</div>
<span className="text-gray-200 group-hover:text-white">Max V.</span>
</div>
</td>
<td className="px-4 py-4 text-gray-400 hidden sm:table-cell">Red Bull RB19</td>
<td className="px-4 py-4 text-right font-mono text-white">1:12.550</td>
<td className="px-4 py-4 text-right text-red-400 text-xs font-mono">+0.145</td>
</tr>

<tr className="bg-purple-500/10 border-l-2 border-purple-500">
<td className="px-4 py-4 text-purple-400 font-medium">3</td>
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-medium text-xs border border-white/20">YOU</div>
<span className="text-white font-medium">Your Session</span>
</div>
</td>
<td className="px-4 py-4 text-gray-300 hidden sm:table-cell">Porsche 911 GT3</td>
<td className="px-4 py-4 text-right font-mono text-white">1:13.102</td>
<td className="px-4 py-4 text-right text-red-400 text-xs font-mono">+0.697</td>
</tr>

<tr className="group hover:bg-white/5 transition-colors opacity-60">
<td className="px-4 py-4 text-gray-500 font-medium">4</td>
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-medium text-xs border border-green-500/30">LH</div>
<span className="text-gray-200 group-hover:text-white">Lewis H.</span>
</div>
</td>
<td className="px-4 py-4 text-gray-400 hidden sm:table-cell">Mercedes W12</td>
<td className="px-4 py-4 text-right font-mono text-white">1:13.450</td>
<td className="px-4 py-4 text-right text-red-400 text-xs font-mono">+1.045</td>
</tr>
</tbody>
</table>
</div>

<div className="border-t border-white/10 px-6 py-4 bg-white/[0.02] flex justify-between items-center">
<div className="text-xs text-gray-500">Data refreshed just now</div>
<div className="flex gap-4 text-xs text-gray-400">
<span className="hover:text-purple-400 cursor-pointer transition-colors">View Telemetry</span>
<span className="hover:text-purple-400 cursor-pointer transition-colors">Compare Sectors</span>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 px-6 border-t border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Analyze every corner</h2>
<p className="text-lg text-gray-400 max-w-2xl mx-auto">Stop guessing where you lost time. Our advanced telemetry engine breaks down your performance sector by sector.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl glass-panel group hover:bg-white/5 transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="upload-cloud"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Instant Uploads</h3>
<p className="text-base text-gray-400 leading-relaxed">
                        Drag and drop your data logs from major sims or real-world GPS trackers. We support CSV, Motec, and more.
                    </p>
</div>

<div className="p-8 rounded-2xl glass-panel group hover:bg-white/5 transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Telemetry Comparison</h3>
<p className="text-base text-gray-400 leading-relaxed">
                        Overlay your speed, throttle, and brake traces against your best lap or the global leaderboard record holder.
                    </p>
</div>

<div className="p-8 rounded-2xl glass-panel group hover:bg-white/5 transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Team Sessions</h3>
<p className="text-base text-gray-400 leading-relaxed">
                        Create private lobbies for your racing team. Share setups and compare times in a closed environment.
                    </p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<svg className="text-purple-500" fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 22L8.5 4H14.5C17.5 4 19.5 5.5 19.5 8.5C19.5 11.5 17.5 13 14.5 13H10L8 22H4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
<span className="text-gray-400 text-sm">© 2024 Dá-lhe!</span>
</div>
<div className="flex gap-6 text-sm text-gray-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>


    </>
  );
}
