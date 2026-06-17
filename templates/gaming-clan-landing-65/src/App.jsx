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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neutral-800/20 rounded-full blur-[120px]"></div>
<div className="absolute inset-0 grid-bg opacity-30"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<svg aria-hidden="true" data-height="24" data-icon="lucide:crosshair" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M22 12h-4M6 12H2m10-6V2m0 20v-4"></path></g></svg>
<span className="text-lg font-bold tracking-tighter text-white group-hover:text-orange-500 transition-colors duration-300">ZER0</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
<a className="text-white hover:text-orange-500 transition-colors" href="#">ROSTER</a>
<a className="hover:text-white transition-colors" href="#">SPAWN LOGIC</a>
<a className="hover:text-white transition-colors" href="#">SLAYER CLASSES</a>
<a className="hover:text-white transition-colors" href="#">SCRIMS</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded text-neutral-300 transition-all">
<svg aria-hidden="true" data-icon="lucide:user" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                    MEMBER LOGIN
                </button>
<button className="flex items-center gap-2 text-xs font-semibold bg-orange-600 hover:bg-orange-500 text-white px-4 py-1.5 rounded transition-all shadow-[0_0_15px_rgba(234,88,12,0.3)]">
                    JOIN SQUAD
                </button>
</div>
</div>
</nav>

<main className="flex-grow z-10 pt-32 pb-12 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/30 border border-orange-500/20 text-orange-400 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                        LOBBY STATUS: DOMINATED
                    </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-[1.1]">
                        PURE SLAYING. <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-200">ZER0 MERCY.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-md leading-relaxed">
                        The premier <strong className="">Team Deathmatch</strong> collective led by <strong className="font-medium text-white">Zer0theGamer</strong>. We ignore the objective to control the map. 100 kills is the only metric that matters.
                    </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<button className="h-12 px-6 rounded bg-white text-black font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:swords" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 17.5L3 6V3h3l11.5 11.5M13 19l6-6m-3 3l4 4m-1 1l2-2M14.5 6.5L18 3h3v3l-3.5 3.5M5 14l4 4m-2-1l-3 3m-1-1l2 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Challenge Us
                        </button>
<button className="h-12 px-6 rounded border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-400 transition-all text-neutral-300 font-medium flex items-center gap-2">
                            TDM Loadouts
                            <svg aria-hidden="true" data-icon="lucide:chevron-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="flex items-center gap-6 text-neutral-600 pt-8 border-t border-white/5">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:trophy" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path></g></svg>
<span className="text-xs font-mono font-medium text-neutral-400">#1 TDM CLAN</span>
</div>
<div className="h-4 w-px bg-white/10"></div>
<span className="text-xs font-mono">EST. 2024</span>
</div>
</div>

<div className="relative">

<div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-transparent rounded-xl blur opacity-20"></div>

<div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl">

<div className="flex bg-neutral-900/50 border-white/5 border-b pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-[#5865F2] flex items-center justify-center text-white">
<svg aria-hidden="true" data-icon="lucide:message-square" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h3 className="text-sm font-medium text-white">ZER0 B4UDIE</h3>
<p className="text-xs text-neutral-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        Kill Race Active
                                    </p>
</div>
</div>
<button className="px-3 py-1.5 bg-[#5865F2] hover:bg-[#4752C4] text-white text-xs font-medium rounded transition-colors">
                                Join
                            </button>
</div>

<div className="p-6 space-y-6">
<div className="space-y-2">
<h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">Active Comms</h4>

<div className="group flex items-center justify-between p-3 rounded bg-white/5 hover:bg-white/10 border border-white/5 hover:border-orange-500/30 transition-all cursor-pointer">
<div className="flex items-center gap-3">
<svg aria-hidden="true" data-icon="lucide:mic" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></g></svg>
<span className="text-sm text-neutral-200">TDM 6-Stack | Nuke Hunting</span>
</div>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-[#0A0A0A]"></div>
<div className="w-6 h-6 rounded-full bg-neutral-600 border border-[#0A0A0A]"></div>
<div className="w-6 h-6 rounded-full bg-orange-600 border border-[#0A0A0A] flex items-center justify-center text-[8px] font-bold text-white">FULL</div>
</div>
</div>

<div className="group flex items-center justify-between p-3 rounded bg-white/5 hover:bg-white/10 border border-white/5 hover:border-orange-500/30 transition-all cursor-pointer">
<div className="flex items-center gap-3">
<svg aria-hidden="true" data-icon="lucide:share-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="m8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98"></path></g></svg>
<span className="text-sm text-neutral-200">Clip Sharing</span>
</div>
<span className="text-xs text-neutral-500 group-hover:text-orange-400">New high score uploaded...</span>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded bg-neutral-900/50 border border-white/5">
<div className="text-xs text-neutral-500 mb-1">Total Kills</div>
<div className="text-xl font-mono font-medium text-white">4.2M+</div>
</div>
<div className="p-4 rounded bg-neutral-900/50 border border-white/5">
<div className="text-xs text-neutral-500 mb-1">Avg K/D</div>
<div className="text-xl font-mono font-medium text-orange-500">3.45</div>
</div>
</div>
<p className="text-xs text-neutral-500 text-center leading-relaxed">
                                Join to find aggressive teammates who understand spawn manipulation and map control.
                            </p>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-20">
<div className="relative rounded-2xl border border-orange-500/20 bg-gradient-to-br from-[#0a0a0a] to-[#050505] p-8 md:p-12 overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-neutral-800/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">

<div className="flex-shrink-0 flex items-center gap-5 md:w-64">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-orange-500/30 bg-neutral-900 flex items-center justify-center text-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
<svg aria-hidden="true" data-icon="lucide:skull" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m12.5 17l-.5-1l-.5 1z"></path><path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25a8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"></path><circle cx="15" cy="12" r="1"></circle><circle cx="9" cy="12" r="1"></circle></g></svg>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold text-white tracking-tight">Zer0TheGamer</span>
<span className="text-orange-500 text-xs uppercase tracking-widest font-semibold mt-1">Head Slayer</span>
<div className="flex gap-2 mt-3 text-neutral-500">
<a className="hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:youtube" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15l5-3l-5-3z"></path></g></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:twitch" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 2H3v16h5v4l4-4h5l4-4zm-10 9V7m5 4V7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
</div>

<div className="flex-1 space-y-6">
<div className="space-y-4">
<span className="text-4xl text-neutral-700 font-serif leading-none absolute -mt-4 -ml-6 opacity-30 select-none">"</span>
<h2 className="text-2xl font-semibold text-white tracking-tight">Objectives are for the weak.</h2>
<p className="text-neutral-400 leading-relaxed max-w-2xl">
                                I built ZER0 for one purpose: TDM supremacy. We don't care about flags, hardpoints, or bomb sites. We care about one thing—clearing the lobby.
                            </p>
<p className="text-neutral-400 leading-relaxed max-w-2xl">
                                If you're tired of teammates going 5-20 trying to play the objective, you're in the right place. We teach spawn trapping, streak cycling, and pure slaying mechanics. Welcome to the top of the scoreboard.
                            </p>
</div>
<div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
<span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                            CURRENTLY IN A MATCH
                        </div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-32">
<div className="relative bg-[#050505] border border-[#5865F2]/30 rounded-2xl p-12 md:p-20 overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/5 via-transparent to-[#404EED]/10 pointer-events-none"></div>

<div className="absolute -right-24 -top-32 md:-right-48 md:-top-40 opacity-10 group-hover:opacity-25 transition-all duration-1000 transform -rotate-12 scale-150 pointer-events-none blur-sm mix-blend-screen">
<svg fill="none" height="600" viewbox="0 0 127 96" width="800" xmlns="http://www.w3.org/2000/svg">
<path d="M107.7 8.07001C99.35 4.23001 90.62 1.43001 81.56 0.0100098C81.42 -0.0199902 81.28 0.0500098 81.2 0.18001C80.05 2.22001 78.78 4.90001 77.92 6.96001C68.45 5.54001 58.99 5.54001 49.69 6.96001C48.84 4.88001 47.55 2.20001 46.4 0.18001C46.32 0.0500098 46.18 -0.0199902 46.04 0.0100098C36.97 1.43001 28.24 4.23001 19.89 8.07001C19.82 8.10001 19.77 8.16001 19.74 8.22001C2.88998 33.3201 -1.70002 57.8701 0.53998 82.2601C0.55998 82.4601 0.67998 82.6401 0.84998 82.7601C11.97 91.0001 22.75 95.9801 33.39 95.9801C33.56 95.9801 33.72 95.9101 33.82 95.7801C36.37 92.2901 38.6 88.6201 40.48 84.7701C40.6 84.5301 40.48 84.2401 40.23 84.1401C36.6 82.7601 33.12 81.0801 29.81 79.1601C29.56 79.0101 29.54 78.6501 29.77 78.4701C30.49 77.9201 31.2 77.3501 31.89 76.7601C32.03 76.6401 32.22 76.6201 32.39 76.6901C53.28 86.2501 74.52 86.2501 95.14 76.6901C95.31 76.6101 95.5 76.6301 95.64 76.7601C96.33 77.3401 97.04 77.9201 97.77 78.4701C97.99 78.6501 97.97 79.0101 97.72 79.1601C94.4 81.0701 90.91 82.7601 87.28 84.1301C87.03 84.2301 86.91 84.5201 87.03 84.7601C88.92 88.6101 91.15 92.2801 93.69 95.7701C93.79 95.9001 93.96 95.9701 94.12 95.9701C104.77 95.9701 115.56 90.9901 126.68 82.7601C126.85 82.6401 126.97 82.4601 126.99 82.2601C129.76 53.6401 122.38 29.0801 107.78 8.22001C107.75 8.16001 107.7 8.10001 107.7 8.07001ZM42.45 65.6901C36.16 65.6901 30.98 59.9401 30.98 52.8801C30.98 45.8201 36.03 40.0701 42.45 40.0701C48.91 40.0701 54.1 45.8201 54.02 52.8801C54.02 59.9401 48.87 65.6901 42.45 65.6901ZM85.08 65.6901C78.79 65.6901 73.61 59.9401 73.61 52.8801C73.61 45.8201 78.66 40.0701 85.08 40.0701C91.54 40.0701 96.73 45.8201 96.65 52.8801C96.65 59.9401 91.49 65.6901 85.08 65.6901Z" fill="#5865F2"></path>
</svg>
</div>

<div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#5865F2]/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
<div className="relative z-10 flex flex-col items-start max-w-2xl">

<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5865F2] to-[#404EED] flex items-center justify-center text-white shadow-[0_0_50px_-10px_rgba(88,101,242,0.6)] mb-8 border border-white/20 group-hover:scale-105 transition-transform duration-500">
<svg aria-hidden="true" data-icon="lucide:message-square" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-tight">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">Join the</span>
<span className="text-[#5865F2] drop-shadow-[0_0_30px_rgba(88,101,242,0.4)]">War Room.</span>
</h2>
<p className="text-neutral-300 text-lg mb-10 leading-relaxed max-w-lg">
                        Access high-tier voice channels, share instant clips, and squad up with over <strong className="text-white">200 slayers and counting</strong> in our dedicated community.
                    </p>
<button className="group/btn relative overflow-hidden bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-3.5 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 shadow-[0_0_25px_-5px_rgba(88,101,242,0.6)]">
<span className="relative z-10 flex items-center gap-2">
                            Connect Discord
                            <svg aria-hidden="true" className="group-hover/btn:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
</button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-32">
<div className="flex items-end justify-between mb-10 border-b border-white/10 pb-6">
<div>
<h2 className="text-2xl font-semibold text-white tracking-tight">TDM TACTICS</h2>
<p className="text-sm text-neutral-500 mt-1">The blueprint for high-kill games.</p>
</div>
<a className="text-xs font-medium text-orange-500 hover:text-orange-400 flex items-center gap-1" href="#">
                    VIEW STRATS
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-neutral-900/30 border border-white/5 hover:border-orange-500/50 rounded-lg p-6 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-[50px] group-hover:bg-orange-500/10 transition-all"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded border border-white/10 bg-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:crosshair" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M22 12h-4M6 12H2m10-6V2m0 20v-4"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Spawn Trapping</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Learn the specific spawn points for every TDM map. Force the enemy into a corner and keep them there.
                        </p>
</div>
</div>

<div className="group relative bg-neutral-900/30 border border-white/5 hover:border-orange-500/50 rounded-lg p-6 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[50px] group-hover:bg-red-500/10 transition-all"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded border border-white/10 bg-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:flame" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Streak Cycling</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Configurations for looping UAVs and Attack Choppers. Never let the sky be clear.
                        </p>
</div>
</div>

<div className="group relative bg-neutral-900/30 border border-white/5 hover:border-orange-500/50 rounded-lg p-6 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[50px] group-hover:bg-white/10 transition-all"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded border border-white/10 bg-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:users" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Map Control</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            How to hold power positions as a solo or duo in 6v6 TDM to maximize engagements.
                        </p>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-32 mb-20">
<div className="rounded-xl border border-white/10 bg-[#050505] overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="p-6 md:col-span-1 space-y-8 bg-neutral-900/20">
<div>
<label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4 block">Playstyle</label>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-600 rounded bg-transparent peer-checked:bg-orange-500 peer-checked:border-orange-500 transition-all"></div>
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm text-neutral-300 group-hover:text-white transition-colors">Aggressive (Rusher)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-600 rounded bg-transparent peer-checked:bg-orange-500 peer-checked:border-orange-500 transition-all"></div>
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm text-neutral-300 group-hover:text-white transition-colors">Anchor (Spawn Hold)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-600 rounded bg-transparent peer-checked:bg-orange-500 peer-checked:border-orange-500 transition-all"></div>
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm text-neutral-300 group-hover:text-white transition-colors">Slayer (Roaming)</span>
</label>
</div>
</div>
<div>
<label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4 block">Kill Requirement</label>
<div className="relative w-full h-1 bg-neutral-800 rounded-full">
<div className="absolute left-0 top-0 h-full w-[80%] bg-orange-500 rounded-full"></div>
<div className="absolute left-[80%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow cursor-pointer hover:scale-125 transition-transform"></div>
</div>
<div className="flex justify-between text-xs text-neutral-500 mt-2 font-mono">
<span>30</span>
<span>50</span>
<span>100+</span>
</div>
</div>
</div>

<div className="p-8 md:col-span-3">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-xl font-semibold text-white tracking-tight">HIGH-KILL LOADOUTS</h3>
<p className="text-sm text-neutral-500">Optimized for TTK and next-gen movement.</p>
</div>
<button className="text-xs font-medium text-white bg-white/5 border border-white/10 px-3 py-1.5 rounded hover:bg-white/10 transition-colors flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:sliders-horizontal" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3m9 14H3M14 3v4m2 10v4m5-9h-9m9 7h-5m5-14h-7m-6 5v4m0-2H3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Builder
                            </button>
</div>
<div className="space-y-4">

<div className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded bg-neutral-900/40 border border-white/5 hover:border-orange-500/30 transition-all group">
<div className="flex items-center gap-4">
<div className="w-16 h-10 bg-neutral-800 rounded flex items-center justify-center text-neutral-500">
<svg aria-hidden="true" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="flex items-center gap-2">
<h4 className="text-base font-medium text-white group-hover:text-orange-400 transition-colors">JACKAL PDW - "Omni-King"</h4>
<span className="px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-500 text-[10px] font-bold uppercase tracking-wider">META</span>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mt-1">
<span className="flex items-center gap-1"><svg aria-hidden="true" data-icon="lucide:crosshair" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M22 12h-4M6 12H2m10-6V2m0 20v-4"></path></g></svg> Point Blank</span>
<span className="flex items-center gap-1"><svg aria-hidden="true" data-icon="lucide:wind" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Rapid Fire</span>
</div>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-4">
<div className="text-right hidden md:block">
<div className="text-xs text-neutral-500">Avg Kills</div>
<div className="text-sm font-mono text-white">45.0</div>
</div>
<button className="w-full md:w-auto px-4 py-2 bg-white text-black text-xs font-semibold rounded hover:bg-neutral-200 transition-colors">
                                        Equip
                                    </button>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded bg-neutral-900/40 border border-white/5 hover:border-orange-500/30 transition-all group">
<div className="flex items-center gap-4">
<div className="w-16 h-10 bg-neutral-800 rounded flex items-center justify-center text-neutral-500">
<svg aria-hidden="true" data-icon="lucide:target" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
</div>
<div>
<div className="flex items-center gap-2">
<h4 className="text-base font-medium text-white group-hover:text-orange-400 transition-colors">AMES 85 - "The Laser"</h4>
<span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-wider">ACCURACY</span>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mt-1">
<span className="flex items-center gap-1"><svg aria-hidden="true" data-icon="lucide:eye" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></g></svg> Mid-Range</span>
<span className="flex items-center gap-1">Headshot Multiplier</span>
</div>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-4">
<div className="text-right hidden md:block">
<div className="text-xs text-neutral-500">Avg Kills</div>
<div className="text-sm font-mono text-white">38.5</div>
</div>
<button className="w-full md:w-auto px-4 py-2 bg-transparent border border-white/20 text-white text-xs font-semibold rounded hover:bg-white/5 transition-colors">
                                        Equip
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-[#020202] py-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="text-xl font-bold tracking-tighter text-white">ZER0</span>
</div>
<p className="text-sm text-neutral-500 max-w-xs">
                    The only TDM community that matters. Drop nukes, not objectives.
                </p>
</div>
<div className="flex gap-12 text-sm">
<div className="flex flex-col gap-3">
<span className="font-medium text-white">Operations</span>
<a className="text-neutral-500 hover:text-orange-500 transition-colors" href="#">Find a Squad</a>
<a className="text-neutral-500 hover:text-orange-500 transition-colors" href="#">Kill Races</a>
<a className="text-neutral-500 hover:text-orange-500 transition-colors" href="#">Leaderboards</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-medium text-white">Connect</span>
<a className="text-neutral-500 hover:text-orange-500 transition-colors" href="#">Discord</a>
<a className="text-neutral-500 hover:text-orange-500 transition-colors" href="#">Twitter</a>
<a className="text-neutral-500 hover:text-orange-500 transition-colors" href="#">YouTube</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 gap-4">
<p>© 2024 ZER0 Community. TDM Forever.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span>Servers Online</span>
</div>
</div>
</footer>

    </>
  );
}
