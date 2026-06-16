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
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      

<nav className="w-16 md:w-20 border-r border-zinc-800/50 flex flex-col items-center py-6 bg-zinc-950/50 z-20 flex-shrink-0">

<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-400 flex items-center justify-center text-zinc-950 font-bold tracking-tighter text-lg mb-8 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            H
        </div>

<div className="flex flex-col gap-6 w-full items-center">
<button className="relative group">
<div className="absolute inset-0 bg-white/5 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="relative h-10 w-10 rounded-xl bg-zinc-800/40 text-white flex items-center justify-center border border-zinc-700/50 shadow-sm">
<iconify-icon height="22" icon="solar:chat-round-line-linear" width="22"></iconify-icon>
</div>
<div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-zinc-800 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition whitespace-nowrap border border-zinc-700">Chat</div>
</button>
<button className="relative group text-zinc-500 hover:text-zinc-300 transition-colors">
<div className="h-10 w-10 flex items-center justify-center">
<iconify-icon height="24" icon="solar:gamepad-linear" width="24"></iconify-icon>
</div>
<div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-zinc-800 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition whitespace-nowrap border border-zinc-700">Arcade</div>
</button>
<button className="relative group text-zinc-500 hover:text-zinc-300 transition-colors">
<div className="h-10 w-10 flex items-center justify-center">
<iconify-icon height="24" icon="solar:music-library-linear" width="24"></iconify-icon>
</div>
</button>
<button className="relative group text-zinc-500 hover:text-zinc-300 transition-colors">
<div className="h-10 w-10 flex items-center justify-center">
<iconify-icon height="24" icon="solar:gallery-wide-linear" width="24"></iconify-icon>
</div>
</button>
</div>

<div className="mt-auto flex flex-col gap-6 items-center">
<button className="h-8 w-8 rounded-full overflow-hidden border border-zinc-700/50 hover:border-zinc-500 transition-colors">
<img alt="Profile" className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</button>
<button className="text-zinc-600 hover:text-zinc-400">
<iconify-icon height="22" icon="solar:settings-linear" width="22"></iconify-icon>
</button>
</div>
</nav>

<main className="flex-1 flex flex-col relative bg-zinc-950">

<header className="h-16 border-b border-zinc-800/50 flex items-center justify-between px-6 glass absolute top-0 w-full z-10">
<div className="flex items-center gap-3">
<h1 className="text-base font-medium text-zinc-100 tracking-tight flex items-center gap-2">
                    The Basement
                    <iconify-icon className="text-zinc-500" icon="solar:lock-keyhole-linear" width="14"></iconify-icon>
</h1>
<div className="h-4 w-px bg-zinc-800 mx-1"></div>
<div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/50 px-2 py-1 rounded-md border border-zinc-800/50">
<iconify-icon className="text-indigo-400" icon="solar:pin-linear" width="12"></iconify-icon>
<span className="truncate max-w-[150px] md:max-w-xs">Movie night starts at 9PM 🍿</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium cursor-pointer hover:bg-red-500/20 transition">
<iconify-icon icon="solar:flame-linear" width="14"></iconify-icon>
                    Roast Mode: ON
                </div>
<button className="md:hidden text-zinc-400">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto px-4 md:px-6 pt-20 pb-4 space-y-6 scroll-smooth">

<div className="flex justify-center my-8">
<div className="text-xs text-zinc-500 flex items-center gap-2 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800/50">
<iconify-icon icon="solar:hourglass-linear" width="14"></iconify-icon>
                    A time capsule from 2023 unlocked yesterday
                </div>
</div>

<div className="flex gap-4 group">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold shadow-lg shadow-indigo-500/20">
                    AI
                </div>
<div className="flex flex-col gap-1 max-w-2xl">
<div className="flex items-baseline gap-2">
<span className="text-indigo-400 font-medium text-xs">Aura Bot</span>
<span className="text-[10px] text-zinc-600">Bot • 10:42 AM</span>
</div>
<div className="bg-zinc-900/40 border border-zinc-800/60 p-4 rounded-2xl rounded-tl-none text-zinc-300 text-sm leading-relaxed">
<p className="mb-3">Good morning everyone! ☀️ Here is today's quick poll to start the chaos.</p>

<div className="bg-zinc-950 border border-zinc-800 rounded-xl p-3 space-y-2 max-w-sm">
<h4 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Would You Rather</h4>
<button className="w-full text-left px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all text-xs flex justify-between group/poll">
<span>Fight 100 duck-sized horses</span>
<span className="text-zinc-600 group-hover/poll:text-zinc-400">12%</span>
</button>
<button className="w-full text-left px-3 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-200 text-xs flex justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-500/10 w-[88%] z-0"></div>
<span className="relative z-10">Fight 1 horse-sized duck</span>
<span className="relative z-10 font-medium">88%</span>
</button>
<div className="pt-1 flex -space-x-1.5 overflow-hidden">
<img alt="" className="inline-block h-4 w-4 rounded-full ring-2 ring-zinc-950 grayscale opacity-50" src="https://i.pravatar.cc/150?u=1" />
<img alt="" className="inline-block h-4 w-4 rounded-full ring-2 ring-zinc-950 grayscale opacity-50" src="https://i.pravatar.cc/150?u=2"/>
<img alt="" className="inline-block h-4 w-4 rounded-full ring-2 ring-zinc-950 grayscale opacity-50" src="https://i.pravatar.cc/150?u=3"/>
</img></div>
</div>
</div>
</div>
</div>

<div className="flex gap-4 group">
<img alt="" className="h-8 w-8 rounded-full bg-zinc-800 object-cover flex-shrink-0" src="https://i.pravatar.cc/150?u=8"/>
<div className="flex flex-col gap-1 max-w-2xl">
<div className="flex items-baseline gap-2">
<span className="text-zinc-200 font-medium text-xs">sarah_v</span>
<span className="text-[10px] text-zinc-600">11:02 AM</span>
</div>
<div className="text-zinc-300 text-sm leading-relaxed">
                        I'm definitely taking the giant duck. You can outsmart it.
                    </div>

<div className="flex gap-1 pt-0.5">
<button className="bg-zinc-900 border border-zinc-800 rounded-full px-1.5 py-0.5 text-[10px] text-zinc-400 hover:bg-zinc-800 flex gap-1 items-center">
                            🦆 2
                        </button>
</div>
</div>
</div>

<div className="flex gap-4 group">
<img alt="" className="h-8 w-8 rounded-full bg-zinc-800 object-cover flex-shrink-0" src="https://i.pravatar.cc/150?u=12"/>
<div className="flex flex-col gap-1 max-w-2xl">
<div className="flex items-baseline gap-2">
<span className="text-zinc-200 font-medium text-xs">dave_codes</span>
<span className="text-[10px] text-zinc-600">11:05 AM</span>
</div>
<div className="text-zinc-300 text-sm leading-relaxed">
                        Anyone up for a quick round of Valorant later? I need to decompress.
                    </div>
</div>
</div>

<div className="flex items-center gap-4 py-2 opacity-60">
<div className="h-px bg-zinc-800 flex-1"></div>
<div className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">New Session Started</div>
<div className="h-px bg-zinc-800 flex-1"></div>
</div>

<div className="flex flex-row-reverse gap-4 group">
<img alt="" className="h-8 w-8 rounded-full bg-zinc-800 object-cover flex-shrink-0" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="flex flex-col gap-1 max-w-2xl items-end">
<div className="flex items-baseline gap-2">
<span className="text-[10px] text-zinc-600">11:08 AM</span>
</div>
<div className="bg-indigo-600/10 border border-indigo-500/20 px-3 py-2 rounded-2xl rounded-tr-none text-indigo-100 text-sm leading-relaxed">
                        I'm down for Valo. Btw, check out this track I found.
                    </div>

<div className="mt-1 bg-zinc-900 border border-zinc-800 p-2 rounded-xl flex items-center gap-3 w-64 shadow-sm hover:border-zinc-700 transition-colors cursor-pointer group/music">
<div className="h-10 w-10 rounded bg-zinc-800 relative overflow-hidden">
<img alt="Album" className="object-cover h-full w-full opacity-80 group-hover/music:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover/music:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:play-bold" width="16"></iconify-icon>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-zinc-200 truncate">Midnight City</div>
<div className="text-[10px] text-zinc-500 truncate">M83 • Hurry Up, We're Dreaming</div>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 md:px-6 pb-6 pt-2 bg-gradient-to-t from-zinc-950 via-zinc-950 to-transparent">
<div className="relative flex items-end gap-2 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 focus-within:border-zinc-700 rounded-2xl p-2 transition-colors shadow-lg shadow-black/20">
<button className="h-9 w-9 flex items-center justify-center rounded-xl text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors flex-shrink-0">
<iconify-icon icon="solar:add-circle-linear" width="22"></iconify-icon>
</button>
<div className="flex-1 py-2 min-h-[40px]">
<textarea className="w-full bg-transparent border-none focus:ring-0 text-sm text-zinc-200 placeholder-zinc-600 resize-none h-5 max-h-32 overflow-y-auto" placeholder="Type something..." rows="1"></textarea>
</div>
<div className="flex items-center gap-1 pb-1">
<button className="h-8 w-8 flex items-center justify-center rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors" title="Emojis">
<iconify-icon icon="solar:smile-circle-linear" width="20"></iconify-icon>
</button>
<button className="h-8 w-8 flex items-center justify-center rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors" title="GIFs">
<iconify-icon icon="solar:sticker-smile-circle-linear" width="20"></iconify-icon>
</button>
<div className="h-4 w-px bg-zinc-800 mx-1"></div>
<button className="h-8 w-8 flex items-center justify-center rounded-lg text-zinc-100 bg-zinc-800 hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
<iconify-icon icon="solar:microphone-3-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="text-[10px] text-center text-zinc-700 mt-2 font-medium tracking-wide">
                PRESS ENTER TO SEND
            </div>
</div>
</main>

<aside className="w-80 border-l border-zinc-800/50 hidden lg:flex flex-col bg-zinc-950/30 z-20">

<div className="p-6 border-b border-zinc-800/50">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Voice • Lounge</h3>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
</div>
<div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-1 flex flex-col gap-1">

<div className="flex items-center gap-3 p-2 rounded-xl bg-zinc-800/40 border border-zinc-700/30 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
<div className="relative">
<img alt="" className="h-8 w-8 rounded-full border-2 border-emerald-500/30" src="https://i.pravatar.cc/150?u=5"/>
<div className="absolute -bottom-1 -right-1 bg-zinc-900 rounded-full p-0.5 border border-zinc-800">
<iconify-icon className="text-emerald-500 text-[10px]" icon="solar:microphone-3-bold"></iconify-icon>
</div>
</div>
<div>
<div className="text-xs font-medium text-zinc-200">Marcus</div>
<div className="text-[10px] text-emerald-400/80 font-medium">Speaking...</div>
</div>
<div className="ml-auto flex gap-0.5 items-end h-3">
<div className="w-0.5 bg-emerald-500 h-2 animate-pulse"></div>
<div className="w-0.5 bg-emerald-500 h-3 animate-pulse" style={{animationDelay: '75ms'}}></div>
<div className="w-0.5 bg-emerald-500 h-1 animate-pulse" style={{animationDelay: '150ms'}}></div>
</div>
</div>

<div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-800/20 transition-colors">
<div className="relative">
<img alt="" className="h-8 w-8 rounded-full opacity-60 grayscale" src="https://i.pravatar.cc/150?u=9"/>
<div className="absolute -bottom-1 -right-1 bg-zinc-900 rounded-full p-0.5 border border-zinc-800">
<iconify-icon className="text-zinc-600 text-[10px]" icon="solar:microphone-off-linear"></iconify-icon>
</div>
</div>
<div>
<div className="text-xs font-medium text-zinc-500">Jessica</div>
<div className="text-[10px] text-zinc-600">Muted</div>
</div>
</div>
<button className="mt-1 w-full py-2 text-xs font-medium text-zinc-400 bg-zinc-800/50 hover:bg-emerald-500/10 hover:text-emerald-400 border border-transparent hover:border-emerald-500/20 rounded-lg transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:login-2-linear" width="14"></iconify-icon>
                    Join Room
                </button>
</div>
</div>

<div className="flex-1 p-6 overflow-y-auto">
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">The Squad (4)</h3>
<div className="space-y-4">

<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative">
<img alt="" className="h-9 w-9 rounded-full bg-zinc-800 object-cover" src="https://i.pravatar.cc/150?u=8"/>
<div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-zinc-950"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">sarah_v</span>
</div>
<div className="text-[11px] text-zinc-500 truncate flex items-center gap-1.5">
<iconify-icon icon="solar:gamepad-linear" width="10"></iconify-icon>
                            Playing Valorant
                        </div>
</div>
</div>

<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative">
<img alt="" className="h-9 w-9 rounded-full bg-zinc-800 object-cover" src="https://i.pravatar.cc/150?u=12"/>
<div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-amber-500 border-2 border-zinc-950"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">dave_codes</span>
</div>
<div className="text-[11px] text-zinc-500 truncate flex items-center gap-1.5">
<iconify-icon icon="solar:code-linear" width="10"></iconify-icon>
                            Working late 💀
                        </div>
</div>
</div>

<div className="flex items-center gap-3 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
<div className="relative">
<img alt="" className="h-9 w-9 rounded-full bg-zinc-800 object-cover grayscale" src="https://i.pravatar.cc/150?u=22"/>
<div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-zinc-600 border-2 border-zinc-950"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-zinc-300">Alex</span>
</div>
<div className="text-[11px] text-zinc-500 truncate">
                            Last seen 2h ago
                        </div>
</div>
</div>
</div>

<div className="mt-8 pt-6 border-t border-zinc-800/50">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Group Goal</h3>
<iconify-icon className="text-indigo-400" icon="solar:dumbbell-linear" width="14"></iconify-icon>
</div>
<div className="bg-zinc-900 rounded-xl p-3 border border-zinc-800">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-300">Gym Streak (Dec)</span>
<span className="text-indigo-400 font-medium">12/20</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[60%] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-800/50 bg-zinc-900/20 backdrop-blur-sm">
<div className="flex gap-3 items-center">
<div className="h-10 w-10 rounded-lg bg-zinc-800 bg-[url('https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&amp;w=150&amp;auto=format&amp;fit=crop')] bg-cover bg-center shadow-md relative group overflow-hidden">
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:pause-bold" width="14"></iconify-icon>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-white truncate">Lo-Fi Study Beats</div>
<div className="text-[10px] text-zinc-500 truncate">Sync: 4 Listeners 🎧</div>
</div>
<button className="text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="solar:skip-next-linear" width="20"></iconify-icon>
</button>
</div>
<div className="mt-2.5 flex items-center gap-2">
<span className="text-[9px] text-zinc-600 font-mono">1:12</span>
<div className="flex-1 h-1 bg-zinc-800 rounded-full relative cursor-pointer group">
<div className="absolute w-[45%] h-full bg-zinc-400 rounded-full group-hover:bg-zinc-200 transition-colors"></div>
</div>
<span className="text-[9px] text-zinc-600 font-mono">3:45</span>
</div>
</div>
</aside>

    </>
  );
}
