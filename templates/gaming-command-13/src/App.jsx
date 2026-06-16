import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
background: '#080808',
surface: '#0F0F0F',
surfaceHighlight: '#1A1A1A',
border: '#1F1F1F',
psBlue: '#00439C',
accent: '#ffffff',
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
      

<nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
<iconify-icon icon="solar:gamepad-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
                    NEXUS
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-light">
<a className="text-white hover:text-zinc-200 transition-colors" href="#">Library</a>
<a className="hover:text-white transition-colors" href="#">Room Control</a>
<a className="hover:text-white transition-colors" href="#">Network</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
<span className="text-xs text-zinc-500">System Online</span>
</div>
</div>
</div>
</nav>

<main className="flex-grow max-w-7xl mx-auto w-full px-6 py-10">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-8 flex flex-col gap-8">

<div className="relative rounded-2xl overflow-hidden border border-border h-80 group">
<div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40 z-0"></div>

<div className="absolute inset-0 z-0 opacity-30" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
<div className="relative z-20 h-full flex flex-col justify-end p-8">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold bg-white text-black">Resume Activity</span>
<span className="text-xs text-zinc-400 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 2h 14m played
                            </span>
</div>
<h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight">Spider-Man 2</h1>
<p className="mt-2 text-zinc-400 font-light max-w-md line-clamp-2">
                            Swing, jump, and utilize the new Web Wings to travel across Marvel's New York.
                        </p>
<div className="mt-6 flex gap-3">
<button className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:play-bold" width="16"></iconify-icon>
<span>Play Game</span>
</button>
<button className="p-2.5 border border-white/20 rounded-full hover:bg-white/10 text-white transition-colors backdrop-blur-sm">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium text-white tracking-tight">Library</h2>
<div className="flex gap-2 text-zinc-500">
<button className="hover:text-white transition-colors"><iconify-icon icon="solar:sort-from-top-to-bottom-linear" width="18"></iconify-icon></button>
<button className="hover:text-white transition-colors"><iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="game-card group relative aspect-[3/4] rounded-xl bg-zinc-900 border border-border overflow-hidden cursor-pointer transition-transform duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
<div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 play-overlay transition-opacity duration-300 backdrop-blur-sm">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black">
<iconify-icon icon="solar:gamepad-linear" width="24"></iconify-icon>
</div>
</div>

<div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-700">
<iconify-icon icon="solar:swords-linear" width="48"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 w-full p-4">
<h3 className="text-white text-sm font-medium">Elden Ring</h3>
<p className="text-[10px] text-zinc-500 mt-0.5">FromSoftware</p>
</div>
</div>

<div className="game-card group relative aspect-[3/4] rounded-xl bg-zinc-900 border border-border overflow-hidden cursor-pointer transition-transform duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
<div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 play-overlay transition-opacity duration-300 backdrop-blur-sm">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black">
<iconify-icon icon="solar:gamepad-linear" width="24"></iconify-icon>
</div>
</div>
<div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-700">
<iconify-icon icon="solar:flag-linear" width="48"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 w-full p-4">
<h3 className="text-white text-sm font-medium">God of War</h3>
<p className="text-[10px] text-zinc-500 mt-0.5">Santa Monica</p>
</div>
</div>

<div className="game-card group relative aspect-[3/4] rounded-xl bg-zinc-900 border border-border overflow-hidden cursor-pointer transition-transform duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
<div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 play-overlay transition-opacity duration-300 backdrop-blur-sm">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black">
<iconify-icon icon="solar:gamepad-linear" width="24"></iconify-icon>
</div>
</div>
<div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-700">
<iconify-icon icon="solar:wheel-angle-linear" width="48"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 w-full p-4">
<h3 className="text-white text-sm font-medium">Gran Turismo 7</h3>
<p className="text-[10px] text-zinc-500 mt-0.5">Polyphony</p>
</div>
</div>

<div className="game-card group relative aspect-[3/4] rounded-xl bg-zinc-900 border border-border overflow-hidden cursor-pointer transition-transform duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
<div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 play-overlay transition-opacity duration-300 backdrop-blur-sm">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black">
<iconify-icon icon="solar:gamepad-linear" width="24"></iconify-icon>
</div>
</div>
<div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-700">
<iconify-icon icon="solar:ghost-linear" width="48"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 w-full p-4">
<h3 className="text-white text-sm font-medium">Cyberpunk</h3>
<p className="text-[10px] text-zinc-500 mt-0.5">CD Projekt Red</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="border border-border rounded-xl p-5 bg-surface/50">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
<h3 className="text-sm font-medium text-white">Ambient Lighting</h3>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-500"></div>
</label>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs text-zinc-500 mb-2">
<span>Brightness</span>
<span>75%</span>
</div>
<input className="w-full" max="100" min="0" type="range" value="75"/>
</div>
<div className="flex gap-2">
<div className="h-6 w-6 rounded bg-purple-600 border border-white/20 cursor-pointer"></div>
<div className="h-6 w-6 rounded bg-blue-600 border border-white/20 cursor-pointer ring-2 ring-white ring-offset-2 ring-offset-black"></div>
<div className="h-6 w-6 rounded bg-red-600 border border-white/20 cursor-pointer"></div>
<div className="h-6 w-6 rounded bg-emerald-600 border border-white/20 cursor-pointer"></div>
</div>
</div>
</div>
<div className="border border-border rounded-xl p-5 bg-surface/50">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-500" icon="solar:snowflake-linear"></iconify-icon>
<h3 className="text-sm font-medium text-white">Climate</h3>
</div>
<span className="text-xs text-zinc-500">Auto Mode</span>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-3xl font-light text-white tracking-tighter">22°C</div>
<div className="text-xs text-zinc-500 mt-1">Room Temp</div>
</div>
<div className="flex flex-col gap-2">
<button className="w-8 h-8 rounded border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 text-white">
<iconify-icon icon="solar:alt-arrow-up-linear"></iconify-icon>
</button>
<button className="w-8 h-8 rounded border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 text-white">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="border border-border rounded-xl bg-surface p-6 shadow-2xl shadow-black/50">
<div className="text-center mb-6">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg">Player Login</h3>
<p className="text-xs text-zinc-500 mt-1">Access your saved games &amp; preferences</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wide text-zinc-500 font-semibold">Email ID</label>
<div className="relative">
<input className="w-full bg-black/50 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" placeholder="user@example.com" type="email"/>
<iconify-icon className="absolute right-3 top-3 text-zinc-600" icon="solar:letter-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wide text-zinc-500 font-semibold">Password</label>
<div className="relative">
<input className="w-full bg-black/50 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" placeholder="••••••••" type="password"/>
<iconify-icon className="absolute right-3 top-3 text-zinc-600" icon="solar:lock-password-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between text-xs mt-1">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-3.5 h-3.5 rounded border border-zinc-700 bg-transparent group-hover:border-zinc-500 flex items-center justify-center">

</div>
<span className="text-zinc-500 group-hover:text-zinc-400">Remember me</span>
</label>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Forgot?</a>
</div>
<button className="w-full bg-white text-black font-semibold rounded-lg py-2.5 text-sm hover:bg-zinc-200 transition-all mt-2 flex items-center justify-center gap-2">
<span>Sign In</span>
<iconify-icon icon="solar:login-2-linear"></iconify-icon>
</button>
</form>
<div className="mt-6 pt-6 border-t border-zinc-800 text-center">
<p className="text-xs text-zinc-600">Don't have an account? <a className="text-white hover:underline" href="#">Create ID</a></p>
</div>
</div>

<div className="border border-border rounded-xl p-5 bg-surface/50">
<h4 className="text-sm font-medium text-zinc-300 mb-4">Environment Stats</h4>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-zinc-800/50">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:wi-fi-router-linear"></iconify-icon>
<div className="text-xs text-zinc-300">Ping</div>
</div>
<div className="text-xs font-mono text-emerald-500">12ms</div>
</div>
<div className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-zinc-800/50">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:battery-charge-linear"></iconify-icon>
<div className="text-xs text-zinc-300">Controller</div>
</div>
<div className="text-xs font-mono text-white">85%</div>
</div>
<div className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-zinc-800/50">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:soundwave-linear"></iconify-icon>
<div className="text-xs text-zinc-300">Audio</div>
</div>
<div className="text-xs font-mono text-white">Headset</div>
</div>
</div>
</div>

<div className="border border-border rounded-xl overflow-hidden relative h-40 group cursor-pointer">

<div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
<div className="text-center">
<iconify-icon className="text-red-500 animate-pulse mb-1" icon="solar:videocamera-record-linear" width="20"></iconify-icon>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest">Live Cam</div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
<div>
<div className="text-xs text-white font-medium">Gaming Room</div>
<div className="text-[10px] text-zinc-500">Camera 01 • Rec</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-border mt-auto py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-zinc-600">
                © 2023 Nexus Gaming. All rights reserved.
            </div>
<div className="flex gap-4">
<iconify-icon className="text-zinc-600 hover:text-white transition-colors cursor-pointer" icon="solar:brand-playstation-linear" width="18"></iconify-icon>
<iconify-icon className="text-zinc-600 hover:text-white transition-colors cursor-pointer" icon="solar:brand-twitch-linear" width="18"></iconify-icon>
<iconify-icon className="text-zinc-600 hover:text-white transition-colors cursor-pointer" icon="solar:brand-discord-linear" width="18"></iconify-icon>
</div>
</div>
</footer>

    </>
  );
}
