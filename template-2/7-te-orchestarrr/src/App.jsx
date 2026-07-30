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
      

<div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

<div className="hidden md:flex fixed top-32 left-10 opacity-10 pointer-events-none -z-10 flex-col items-center gap-2">
<div className="w-16 h-16 border-2 border-white flex items-center justify-center rounded-sm">
<span className="text-3xl font-bold font-mono text-white">A</span>
</div>
<span className="text-xs font-mono tracking-widest text-white">SITE</span>
</div>
<div className="hidden md:flex fixed bottom-32 right-10 opacity-10 pointer-events-none -z-10 flex-col items-center gap-2">
<div className="w-16 h-16 border-2 border-white flex items-center justify-center rounded-sm">
<span className="text-3xl font-bold font-mono text-white">B</span>
</div>
<span className="text-xs font-mono tracking-widest text-white">SITE</span>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<span className="text-lg font-medium tracking-tighter uppercase">VII.</span>
<div className="h-4 w-[1px] bg-white/20 mx-2"></div>
<span className="text-xs font-mono text-zinc-500 tracking-wider">EST. 2024</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-white transition-colors" href="#roster">Das Orchester</a>
<a className="hover:text-white transition-colors" href="#stats">Performance</a>
<a className="hover:text-white transition-colors" href="#contact">Rekrutierung</a>
</div>
<div>
<button className="h-9 px-4 rounded-md bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
<span>Server Beitreten</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="flex-grow pt-32 pb-20 relative bg-grid overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-30 mix-blend-screen">
<div className="relative w-[350px] h-[350px] md:w-[600px] md:h-[600px]">

<div className="absolute inset-0 rounded-full border-[0.5px] border-white/10"></div>
<div className="absolute inset-[15%] rounded-full border-[0.5px] border-white/5"></div>
<div className="absolute inset-[30%] rounded-full border-[0.5px] border-white/10 border-dashed"></div>

<div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5"></div>
<div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/5"></div>

<div className="absolute inset-0 rounded-full overflow-hidden">
<div className="w-1/2 h-1/2 absolute top-0 left-0 origin-bottom-right animate-[spin_4s_linear_infinite] bg-gradient-to-br from-transparent via-emerald-500/10 to-emerald-500/30 border-r border-emerald-500/50 shadow-[2px_0_8px_rgba(16,185,129,0.5)]"></div>
</div>

<div className="absolute top-[25%] left-[65%] w-1.5 h-1.5 md:w-2 md:h-2 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.8)] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
<div className="absolute top-[70%] left-[30%] w-1.5 h-1.5 md:w-2 md:h-2 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.8)] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" style={{animationDelay: `0.5s`}}></div>
<div className="absolute top-[45%] left-[40%] w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full"></div>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#050505]/80 text-xs font-mono text-zinc-300 mb-8 backdrop-blur-sm shadow-xl">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Saison 1 Aktive Phase
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-6 leading-tight max-w-4xl mx-auto">
                Taktische <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">Präzision.</span><br />
                Tödliche Harmonie.
            </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed bg-[#050505]/50 backdrop-blur-sm py-2 rounded-lg">
                Wir sind <strong className="text-zinc-200 font-medium">Die 7.</strong> – Ein Counter-Strike Roster, das wie ein perfekt abgestimmtes Orchester agiert. Jeder Spieler ein Instrument, jeder Execute eine Symphonie der Zerstörung.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto h-11 px-6 rounded-md bg-zinc-800 border border-zinc-700 text-white text-sm font-medium hover:bg-zinc-700 hover:border-zinc-600 transition-all flex items-center justify-center gap-2 shadow-sm">
<iconify-icon icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon>
                    Aktuelle Matches
                </button>
<button className="w-full sm:w-auto h-11 px-6 rounded-md bg-[#050505]/80 backdrop-blur-md border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                    Unser Discord
                </button>
</div>
</div>
</main>

<section className="py-24 border-t border-white/5 bg-[#0a0a0a]/50 relative" id="roster">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl text-white font-medium tracking-tighter mb-4">Das Orchester</h2>
<p className="text-sm text-zinc-500 max-w-xl">Die Mitglieder der 7. zeichnen sich durch absolute Beherrschung ihres virtuellen Instruments aus. Keine Misstöne, nur Headshots.</p>
</div>

<div className="flex items-center gap-4 text-xs font-mono text-zinc-600 border border-white/5 bg-[#050505] py-2 px-4 rounded-md">
<div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> SERVER_LIVE</div>
<div className="w-[1px] h-3 bg-white/10"></div>
<div>TICKRATE: 128</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group relative p-6 rounded-xl border border-white/5 bg-[#050505] hover:border-emerald-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-8 relative z-10 mt-2 mx-2">
<div>
<div className="text-xs font-mono text-zinc-500 mb-3">01 / IGL & SUPPORT</div>
<div className="flex items-center gap-3 mb-3">
<img alt="Meme Avatar" className="w-10 h-10 rounded bg-[#0a0a0a] border border-white/10 shadow-sm opacity-80 group-hover:opacity-100 transition-opacity" src="https://api.dicebear.com/8.x/pixel-art/svg?seed=GeigeCS" />
<h3 className="text-2xl text-white font-medium tracking-tight">Geige</h3>
</div>
<p className="text-xs text-zinc-400 italic border-l-2 border-white/10 pl-2 py-0.5 group-hover:border-emerald-500/50 group-hover:text-zinc-300 transition-colors leading-relaxed">"Wirft Smokes, die dem Gegner optimale Deckung geben."</p>
</div>
<div className="w-10 h-10 shrink-0 ml-2 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:bg-emerald-400/10 transition-all">
<iconify-icon className="text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex gap-4 text-xs font-mono text-zinc-600 relative z-10 mx-2">
<div className="flex flex-col gap-1"><span className="text-zinc-400">HS%</span> 48.2</div>
<div className="flex flex-col gap-1"><span className="text-zinc-400">ADR</span> 72.4</div>
<div className="flex flex-col gap-1"><span className="text-zinc-400">RWS</span> 11.1</div>
</div>
</div>

<div className="group relative p-6 rounded-xl border border-white/5 bg-[#050505] hover:border-emerald-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-8 relative z-10 mt-2 mx-2">
<div>
<div className="text-xs font-mono text-zinc-500 mb-3">02 / ENTRY FRAGGER</div>
<div className="flex items-center gap-3 mb-3">
<img alt="Meme Avatar" className="w-10 h-10 rounded bg-[#0a0a0a] border border-white/10 shadow-sm opacity-80 group-hover:opacity-100 transition-opacity" src="https://api.dicebear.com/8.x/pixel-art/svg?seed=RushB" />
<h3 className="text-2xl text-white font-medium tracking-tight">Oboe</h3>
</div>
<p className="text-xs text-zinc-400 italic border-l-2 border-white/10 pl-2 py-0.5 group-hover:border-emerald-500/50 group-hover:text-zinc-300 transition-colors leading-relaxed">"Rush B! (Flasht das eigene Team und stirbt im Türrahmen)"</p>
</div>
<div className="w-10 h-10 shrink-0 ml-2 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:bg-emerald-400/10 transition-all">
<iconify-icon className="text-xl" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex gap-4 text-xs font-mono text-zinc-600 relative z-10 mx-2">
<div className="flex flex-col gap-1"><span className="text-zinc-400">HS%</span> 62.1</div>
<div className="flex flex-col gap-1"><span className="text-zinc-400">ADR</span> 89.5</div>
<div className="flex flex-col gap-1"><span className="text-zinc-400">RWS</span> 14.3</div>
</div>
</div>

<div className="group relative p-6 rounded-xl border border-white/5 bg-[#050505] hover:border-emerald-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-8 relative z-10 mt-2 mx-2">
<div>
<div className="text-xs font-mono text-zinc-500 mb-3">03 / MAIN AWP</div>
<div className="flex items-center gap-3 mb-3">
<img alt="Meme Avatar" className="w-10 h-10 rounded bg-[#0a0a0a] border border-white/10 shadow-sm opacity-80 group-hover:opacity-100 transition-opacity" src="https://api.dicebear.com/8.x/pixel-art/svg?seed=DropAWP" />
<h3 className="text-2xl text-white font-medium tracking-tight">Fagott</h3>
</div>
<p className="text-xs text-zinc-400 italic border-l-2 border-white/10 pl-2 py-0.5 group-hover:border-emerald-500/50 group-hover:text-zinc-300 transition-colors leading-relaxed">"Drop AWP pls. (Pusht Mitte und verliert sie in 3 Sek.)"</p>
</div>
<div className="w-10 h-10 shrink-0 ml-2 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:bg-emerald-400/10 transition-all">
<iconify-icon className="text-xl" icon="solar:sniper-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex gap-4 text-xs font-mono text-zinc-600 relative z-10 mx-2">
<div className="flex flex-col gap-1"><span className="text-zinc-400">HS%</span> 31.4</div>
<div className="flex flex-col gap-1"><span className="text-zinc-400">ADR</span> 81.2</div>
<div className="flex flex-col gap-1"><span className="text-zinc-400">RWS</span> 13.8</div>
</div>
</div>

<div className="group relative p-6 rounded-xl border border-white/5 bg-[#050505] hover:border-emerald-500/30 transition-all duration-500 overflow-hidden lg:col-start-2 lg:translate-x-[-50%]">
<div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-8 relative z-10 mt-2 mx-2">
<div>
<div className="text-xs font-mono text-zinc-500 mb-3">04 / LURKER</div>
<div className="flex items-center gap-3 mb-3">
<img alt="Meme Avatar" className="w-10 h-10 rounded bg-[#0a0a0a] border border-white/10 shadow-sm opacity-80 group-hover:opacity-100 transition-opacity" src="https://api.dicebear.com/8.x/pixel-art/svg?seed=Baiter123" />
<h3 className="text-2xl text-white font-medium tracking-tight">Tomborin</h3>
</div>
<p className="text-xs text-zinc-400 italic border-l-2 border-white/10 pl-2 py-0.5 group-hover:border-emerald-500/50 group-hover:text-zinc-300 transition-colors leading-relaxed">"Keine Sorge, ich flankiere! (Chillt noch in der T-Base)"</p>
</div>
<div className="w-10 h-10 shrink-0 ml-2 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:bg-emerald-400/10 transition-all">
<iconify-icon className="text-xl" icon="solar:ghost-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex gap-4 text-xs font-mono text-zinc-600 relative z-10 mx-2">
<div className="flex flex-col gap-1"><span className="text-zinc-400">HS%</span> 55.0</div>
<div className="flex flex-col gap-1"><span className="text-zinc-400">ADR</span> 76.8</div>
<div className="flex flex-col gap-1"><span className="text-zinc-400">RWS</span> 12.0</div>
</div>
</div>

<div className="group relative p-6 rounded-xl border border-white/5 bg-[#050505] hover:border-emerald-500/30 transition-all duration-500 overflow-hidden lg:col-start-3 lg:translate-x-[-50%]">
<div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/20 transition-colors group-hover:border-emerald-500/50"></div>
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-8 relative z-10 mt-2 mx-2">
<div>
<div className="text-xs font-mono text-zinc-500 mb-3">05 / ANCHOR</div>
<div className="flex items-center gap-3 mb-3">
<img alt="Meme Avatar" className="w-10 h-10 rounded bg-[#0a0a0a] border border-white/10 shadow-sm opacity-80 group-hover:opacity-100 transition-opacity" src="https://api.dicebear.com/8.x/pixel-art/svg?seed=NoKit" />
<h3 className="text-2xl text-white font-medium tracking-tight">Flöte</h3>
</div>
<p className="text-xs text-zinc-400 italic border-l-2 border-white/10 pl-2 py-0.5 group-hover:border-emerald-500/50 group-hover:text-zinc-300 transition-colors leading-relaxed">"Hat $16k auf der Bank. Kauft trotzdem kein Defuse-Kit."</p>
</div>
<div className="w-10 h-10 shrink-0 ml-2 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:bg-emerald-400/10 transition-all">
<iconify-icon className="text-xl" icon="solar:shield-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex gap-4 text-xs font-mono text-zinc-600 relative z-10 mx-2">
<div className="flex flex-col gap-1"><span className="text-zinc-400">HS%</span> 51.2</div>
<div className="flex flex-col gap-1"><span className="text-zinc-400">ADR</span> 70.1</div>
<div className="flex flex-col gap-1"><span className="text-zinc-400">RWS</span> 10.5</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden" id="stats">

<div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/5"></div>
<div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/5"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 relative">
<div className="absolute inset-0 border border-emerald-500/20 rounded-lg animate-pulse"></div>
<iconify-icon className="text-2xl" icon="solar:music-note-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3">Taktische Symphonie</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Unsere Executes sind einstudiert wie Partituren. Jeder Flash, jeder Smoke sitzt auf die Millisekunde genau.</p>
</div>
<div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon className="text-2xl" icon="solar:crosshair-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3">Kompromisslose Präzision</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Aiming ist unser Rhythmus. Wir verlassen uns auf striktes Crosshair-Placement und mechanische Perfektion.</p>
</div>
<div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon className="text-2xl" icon="solar:radar-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3">Der 7. Sinn</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Game Sense, der über das Normale hinausgeht. Wir lesen die Rotations der Gegner, bevor sie passieren.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#050505] py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 text-white">
<span className="text-lg font-medium tracking-tighter uppercase">VII.</span>
<span className="text-zinc-600 text-sm">© 2024 Die Siebten. All rights reserved.</span>
</div>
<div className="flex items-center gap-4 text-zinc-500">
<a className="hover:text-white transition-colors p-2" href="#">
<iconify-icon className="text-xl" icon="solar:map-arrow-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="hover:text-white transition-colors p-2" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
