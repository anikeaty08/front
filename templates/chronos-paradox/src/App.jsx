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



        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        slate: {
                            850: '#0f172a',
                            950: '#02040a',
                        },
                        cyan: {
                            400: '#22d3ee',
                            500: '#06b6d4',
                            900: '#164e63',
                        }
                    },
                    letterSpacing: {
                        'tighter': '-0.04em',
                        'tightest': '-0.06em',
                    }
                }
            }
        }
    
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
      






<div className="fixed inset-0 pointer-events-none bg-grid z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-md bg-slate-950/70">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-white" icon="solar:infinity-linear" width="20"></iconify-icon>
<span className="text-sm font-medium tracking-widest uppercase text-white">Chronos Collective</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#mission">Mission</a>
<a className="hover:text-white transition-colors" href="#timeline">Timeline</a>
<a className="hover:text-white transition-colors" href="#terminal">Access Terminal</a>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-mono text-slate-500">SYS.ONLINE</span>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-4xl mx-auto px-6 text-center mb-32">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 text-xs font-medium mb-8">
<iconify-icon icon="solar:danger-triangle-linear" width="14"></iconify-icon>
<span>Temporal Rift Detected</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-600 mb-6 pb-2 glitch-text">
                The Chronos<br/>Paradox
            </h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-xl mx-auto leading-relaxed mb-10">
                Time is unraveling. The fabric of reality is tearing apart at the seams. 
                We are recruiting operatives to mend the timeline before the collapse.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="group relative px-6 py-3 bg-white text-black text-sm font-medium rounded-md hover:bg-slate-200 transition-all overflow-hidden">
<span className="relative z-10 flex items-center gap-2">
                        Initiate Protocol
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</button>
<button className="px-6 py-3 border border-slate-800 text-slate-300 text-sm font-medium rounded-md hover:border-slate-600 hover:bg-slate-900 transition-all flex items-center gap-2">
<iconify-icon icon="solar:document-add-linear" width="16"></iconify-icon>
                    Read Manifesto
                </button>
</div>

<div className="mt-16 flex items-center justify-center gap-4 md:gap-8 font-mono text-slate-500 text-xs uppercase tracking-widest">
<div className="text-center">
<span className="block text-3xl md:text-5xl text-white font-light tracking-tight mb-2">00</span>
                    Days
                </div>
<span className="text-2xl text-slate-700">:</span>
<div className="text-center">
<span className="block text-3xl md:text-5xl text-white font-light tracking-tight mb-2">14</span>
                    Hours
                </div>
<span className="text-2xl text-slate-700">:</span>
<div className="text-center">
<span className="block text-3xl md:text-5xl text-white font-light tracking-tight mb-2">59</span>
                    Mins
                </div>
<span className="text-2xl text-slate-700">:</span>
<div className="text-center">
<span className="block text-3xl md:text-5xl text-red-500 font-light tracking-tight mb-2 animate-pulse">42</span>
                    Secs
                </div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32" id="mission">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:border-cyan-900/50 transition-colors">
<iconify-icon className="text-slate-300" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">The Collective</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        A shadowy organization claiming to manipulate 4D space. Their experiments in 2025 have left us with fractured hours.
                    </p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:border-red-900/50 transition-colors">
<iconify-icon className="text-slate-300" icon="solar:black-hole-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Temporal Rifts</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Anomalies are appearing globally. Cityscapes glitching, landmarks vanishing. We need eyes on the ground.
                    </p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:border-emerald-900/50 transition-colors">
<iconify-icon className="text-slate-300" icon="solar:key-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Global Collaboration</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Physical clues, digital ciphers, and audio anomalies. No single operative can solve this. Unite to survive.
                    </p>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 mb-32" id="timeline">
<h2 className="text-2xl font-semibold tracking-tighter text-white mb-12 text-center">Operation Roadmap</h2>
<div className="relative border-l border-slate-800 ml-3 md:ml-0 space-y-12">

<div className="relative pl-8 md:pl-12">
<div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
<span className="text-xs font-mono text-cyan-500 mb-1 block">PHASE 1: ACTIVE</span>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">The Call to Action</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        The countdown begins at <span className="text-white font-mono">chronoscollective.org</span>. 
                        Decode the hidden cipher in the source code.
                        <br/><span className="italic opacity-60">"Seven loops back, but the first never leaves."</span>
</p>
</div>

<div className="relative pl-8 md:pl-12 opacity-80">
<div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-900"></div>
<span className="text-xs font-mono text-slate-500 mb-1 block">PHASE 2: LOCKED</span>
<h3 className="text-lg font-medium text-slate-300 tracking-tight mb-2">The Investigation</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Physical assets distributed. USB drives intercepted. Listen backward to move forward. 
                        Coordinates hidden within mismatched clock hands.
                    </p>
</div>

<div className="relative pl-8 md:pl-12 opacity-60">
<div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-900"></div>
<span className="text-xs font-mono text-slate-600 mb-1 block">PHASE 3: PENDING</span>
<h3 className="text-lg font-medium text-slate-400 tracking-tight mb-2">Temporal Rifts</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                        Live anomalies. Branching paths: [MEND] or [LEAP]. Your choice dictates the timeline's stability.
                    </p>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-32">
<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-black overflow-hidden relative">

<div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-3xl rounded-full pointer-events-none"></div>
<div className="grid md:grid-cols-2">
<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5">
<div className="flex items-center gap-2 text-red-400 mb-6">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
<span className="text-xs font-mono uppercase tracking-widest">Priority Asset #7</span>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">The Clock That Stands Still</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8">
                            We have intercepted a postcard dated June 23, 1908. The ink is jagged. The message is clear yet impossible.
                        </p>
<div className="bg-black/40 rounded-lg p-6 border border-white/5 font-serif text-slate-300 italic relative">
<iconify-icon className="absolute -top-3 -left-3 bg-slate-950 text-slate-600" icon="solar:quote-up-square-linear" width="24"></iconify-icon>
                            "Find the clock that stands still. Its shadow holds the key."
                        </div>
<div className="mt-8 flex gap-3 text-xs font-mono text-slate-500">
<span className="px-2 py-1 bg-white/5 rounded">LAT: [REDACTED]</span>
<span className="px-2 py-1 bg-white/5 rounded">LON: [REDACTED]</span>
</div>
</div>
<div className="p-8 md:p-12 flex flex-col justify-center items-center bg-[url('https://images.unsplash.com/photo-1508610582064-24c7e63b6552?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center bg-blend-overlay bg-black/80 relative group cursor-pointer">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-white opacity-60 mb-3 group-hover:scale-110 transition-transform duration-300" icon="solar:magnifier-linear" width="48"></iconify-icon>
<span className="block text-sm font-medium text-white tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                Inspect Evidence
                            </span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 mb-20" id="terminal">
<div className="bg-black rounded-lg border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs md:text-sm">
<div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
<span className="text-slate-400">chronos_terminal_v0.9.exe</span>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
</div>
</div>
<div className="p-6 h-64 overflow-y-auto text-slate-300">
<div className="mb-2">
<span className="text-emerald-500">root@chronos:~#</span> initialize_sequence
                    </div>
<div className="mb-4 text-slate-500">
                        &gt; Connecting to global node...<br/>
                        &gt; Handshake established.<br/>
                        &gt; WARNING: Timeline instability at 87%.
                    </div>
<div className="mb-2">
<span className="text-emerald-500">root@chronos:~#</span> decrypt_message
                    </div>
<div className="mb-4 text-slate-300">
                        Input Access Code required. Hint: Found in the source.
                    </div>
<div className="flex items-center gap-2 mt-8 border-b border-slate-700 pb-1">
<span className="text-emerald-500">&gt;</span>
<input className="bg-transparent border-none outline-none text-white w-full placeholder-slate-700 uppercase tracking-widest focus:ring-0" placeholder="ENTER KEYWORD" type="text"/>
<button className="text-slate-500 hover:text-white transition-colors">
<iconify-icon icon="solar:plain-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-slate-950 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-slate-600 text-xs">
                © 2025 The Chronos Collective. <span className="mx-2">|</span> Operative #7 missing.
            </div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:code-scan-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
