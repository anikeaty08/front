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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white text-zinc-950">
<iconify-icon height="1.2em" icon="solar:record-circle-linear" width="1.2em"></iconify-icon>
</div>
<span className="font-medium text-base tracking-tight">Talk4Now</span>
</div>
<div className="flex items-center gap-6">
<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#">Explore</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Games</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Leaderboard</a>
</nav>
<div className="w-px h-4 bg-white/10 hidden md:block"></div>
<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-zinc-100 transition-colors flex">
<iconify-icon height="1.4em" icon="solar:bell-linear" width="1.4em"></iconify-icon>
</button>
<button className="w-7 h-7 rounded-full overflow-hidden ring-1 ring-white/10 hover:ring-white/30 transition-all">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=33"/>
</button>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-6 py-12 space-y-10">

<div className="flex flex-col gap-6">
<div>
<h1 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-50">Voice Rooms</h1>
<p className="text-zinc-400 text-sm mt-1">Practice languages with native speakers worldwide.</p>
</div>

<div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
<div className="flex flex-1 items-center gap-3">

<div className="relative w-full max-w-sm">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-500">
<iconify-icon height="1.2em" icon="solar:magnifer-linear" width="1.2em"></iconify-icon>
</div>
<input className="w-full bg-white/5 border border-white/5 rounded-lg pl-9 pr-4 py-2 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all" placeholder="Search rooms..." type="text"/>
</div>

<div className="hidden lg:flex items-center gap-2">
<button className="flex items-center gap-2 bg-transparent border border-white/5 hover:bg-white/5 rounded-lg px-3 py-2 text-sm text-zinc-300 font-medium transition-colors">
                            Language <iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="flex items-center gap-2 bg-transparent border border-white/5 hover:bg-white/5 rounded-lg px-3 py-2 text-sm text-zinc-300 font-medium transition-colors">
                            Topic <iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center gap-4 overflow-x-auto hide-scrollbar">

<div className="flex items-center gap-4 text-sm text-zinc-500 shrink-0 pr-2">
<span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> 12 Live</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:widget-linear"></iconify-icon> 5 Rooms</span>
</div>
<div className="w-px h-4 bg-white/10 shrink-0"></div>

<button className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors shrink-0 px-2">
                        Upgrade
                    </button>
<button className="flex items-center gap-2 bg-white text-zinc-950 hover:bg-zinc-200 rounded-lg px-4 py-2 text-sm font-medium transition-colors shrink-0">
<iconify-icon height="1.2em" icon="solar:add-circle-linear" width="1.2em"></iconify-icon> Create Room
                    </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 flex flex-col hover:bg-zinc-900/80 hover:border-white/10 transition-colors group">
<div className="flex items-start justify-between mb-4">
<div className="flex flex-wrap gap-2">
<span className="bg-white/5 text-zinc-300 px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5">
<span>🇬🇧</span> English
                        </span>
<span className="border border-white/10 text-zinc-400 px-2.5 py-1 rounded-md text-xs font-medium">
                            Advanced
                        </span>
</div>
<div className="flex items-center gap-1.5 text-zinc-500 text-xs shrink-0 mt-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 15m
                    </div>
</div>
<div className="mb-6">
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-0.5">lonely</h3>
<p className="text-sm text-zinc-500">General conversation</p>
</div>
<div className="grid grid-cols-5 gap-3 mb-6 mt-auto">

<div className="flex flex-col items-center gap-2">
<div className="relative">
<img alt="avatar" className="w-10 h-10 rounded-full object-cover ring-2 ring-zinc-950" src="https://i.pravatar.cc/100?img=47"/>
<div className="absolute -bottom-1 -right-1 bg-white text-zinc-950 rounded-full w-4 h-4 flex items-center justify-center shadow-sm">
<iconify-icon height="10" icon="solar:crown-linear" width="10"></iconify-icon>
</div>
</div>
</div>

<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
</div>
<button className="w-full py-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-500 text-sm font-medium cursor-not-allowed">
                    Room Full
                </button>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 flex flex-col hover:bg-zinc-900/80 hover:border-white/10 transition-colors group">
<div className="flex items-start justify-between mb-4">
<div className="flex flex-wrap gap-2">
<span className="bg-white/5 text-zinc-300 px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5">
<span>🇺🇸</span> English
                        </span>
<span className="border border-white/10 text-zinc-400 px-2.5 py-1 rounded-md text-xs font-medium">
                            Intermediate
                        </span>
</div>
<div className="flex items-center gap-1.5 text-zinc-500 text-xs shrink-0 mt-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 5h
                    </div>
</div>
<div className="mb-6">
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-0.5">fake people</h3>
<p className="text-sm text-zinc-500">General conversation</p>
</div>
<div className="grid grid-cols-5 gap-3 mb-6 mt-auto">

<div className="flex flex-col items-center gap-2">
<div className="relative">
<img alt="avatar" className="w-10 h-10 rounded-full object-cover ring-2 ring-zinc-950" src="https://i.pravatar.cc/100?img=11"/>
<div className="absolute -bottom-1 -right-1 bg-white text-zinc-950 rounded-full w-4 h-4 flex items-center justify-center shadow-sm">
<iconify-icon height="10" icon="solar:crown-linear" width="10"></iconify-icon>
</div>
</div>
</div>

<div className="flex flex-col items-center gap-2">
<img alt="avatar" className="w-10 h-10 rounded-full object-cover ring-2 ring-zinc-950" src="https://i.pravatar.cc/100?img=12"/>
</div>

<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
</div>
<button className="w-full py-2 rounded-lg bg-transparent border border-white/10 text-zinc-300 text-sm font-medium hover:bg-white/5 transition-colors">
                    Join Room
                </button>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 flex flex-col hover:bg-zinc-900/80 hover:border-white/10 transition-colors group relative overflow-hidden ring-1 ring-white/5">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="flex items-start justify-between mb-4 relative z-10">
<div className="flex flex-wrap gap-2">
<span className="flex items-center justify-center bg-red-500/10 text-red-400 px-2 py-1 rounded-md text-xs font-medium">
<iconify-icon icon="solar:mic-off-linear"></iconify-icon>
</span>
<span className="bg-white/5 text-zinc-300 px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5">
<span>🇬🇧</span> English
                        </span>
<span className="border border-white/10 text-zinc-400 px-2.5 py-1 rounded-md text-xs font-medium">
                            Native
                        </span>
</div>
<div className="flex items-center gap-1.5 text-zinc-500 text-xs shrink-0 mt-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 8h
                    </div>
</div>
<div className="mb-6 relative z-10">
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-0.5 flex items-center gap-2">
                        Chat &amp; Chill | AFK
                    </h3>
<p className="text-sm text-zinc-500">General conversation</p>
</div>
<div className="grid grid-cols-5 gap-3 mb-4 mt-auto relative z-10">

<div className="flex flex-col items-center gap-2">
<div className="relative">
<img alt="avatar" className="w-10 h-10 rounded-full object-cover ring-2 ring-zinc-950" src="https://i.pravatar.cc/100?img=15"/>
<div className="absolute -bottom-1 -right-1 bg-white text-zinc-950 rounded-full w-4 h-4 flex items-center justify-center shadow-sm">
<iconify-icon height="10" icon="solar:crown-linear" width="10"></iconify-icon>
</div>
</div>
</div>

<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
</div>
<button className="w-full py-2 rounded-lg bg-transparent border border-white/10 text-zinc-300 text-sm font-medium hover:bg-white/5 transition-colors relative z-10">
                    Join Room
                </button>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 flex flex-col hover:bg-zinc-900/80 hover:border-white/10 transition-colors group">
<div className="flex items-start justify-between mb-4">
<div className="flex flex-wrap gap-2">
<span className="bg-white/5 text-zinc-300 px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5">
<span>🇺🇸</span> English
                        </span>
<span className="border border-white/10 text-zinc-400 px-2.5 py-1 rounded-md text-xs font-medium">
                            Beginner
                        </span>
</div>
<div className="flex items-center gap-1.5 text-zinc-500 text-xs shrink-0 mt-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 8h
                    </div>
</div>
<div className="mb-6">
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-0.5">Practice Room</h3>
<p className="text-sm text-zinc-500">General conversation</p>
</div>
<div className="grid grid-cols-5 gap-3 mb-6 mt-auto">

<div className="flex flex-col items-center gap-2">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center text-xs font-medium">
                                LT
                            </div>
<div className="absolute -bottom-1 -right-1 bg-white text-zinc-950 rounded-full w-4 h-4 flex items-center justify-center shadow-sm">
<iconify-icon height="10" icon="solar:crown-linear" width="10"></iconify-icon>
</div>
</div>
</div>

<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
</div>
<button className="w-full py-2 rounded-lg bg-transparent border border-white/10 text-zinc-300 text-sm font-medium hover:bg-white/5 transition-colors">
                    Join Room
                </button>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 flex flex-col hover:bg-zinc-900/80 hover:border-white/10 transition-colors group">
<div className="flex items-start justify-between mb-4">
<div className="flex flex-wrap gap-2">
<span className="bg-white/5 text-zinc-300 px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5">
<span>🇬🇧</span> English
                        </span>
<span className="bg-white/5 text-zinc-300 px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5">
<span>🇵🇰</span> Urdu
                        </span>
<span className="border border-white/10 text-zinc-400 px-2.5 py-1 rounded-md text-xs font-medium">
                            Beginner
                        </span>
</div>
<div className="flex items-center gap-1.5 text-zinc-500 text-xs shrink-0 mt-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 9d
                    </div>
</div>
<div className="mb-6">
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-0.5">Pakistan</h3>
<p className="text-sm text-zinc-500">Beginner friendly</p>
</div>
<div className="grid grid-cols-5 gap-3 mb-6 mt-auto">

<div className="flex flex-col items-center gap-2">
<div className="relative">
<img alt="avatar" className="w-10 h-10 rounded-full object-cover ring-2 ring-zinc-950" src="https://i.pravatar.cc/100?img=32"/>
<div className="absolute -bottom-1 -right-1 bg-white text-zinc-950 rounded-full w-4 h-4 flex items-center justify-center shadow-sm">
<iconify-icon height="10" icon="solar:crown-linear" width="10"></iconify-icon>
</div>
</div>
</div>

<div className="flex flex-col items-center gap-2">
<img alt="avatar" className="w-10 h-10 rounded-full object-cover ring-2 ring-zinc-950" src="https://i.pravatar.cc/100?img=35"/>
</div>

<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
<div className="flex justify-center"><div className="w-10 h-10 rounded-full border border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]"><iconify-icon className="text-zinc-700" icon="solar:microphone-2-linear"></iconify-icon></div></div>
</div>
<button className="w-full py-2 rounded-lg bg-transparent border border-white/10 text-zinc-300 text-sm font-medium hover:bg-white/5 transition-colors">
                    Join Room
                </button>
</div>
</div>
</main>

    </>
  );
}
