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
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['Space Grotesk', 'monospace'],
cursive: ['Caveat', 'cursive'],
},
extend: {
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
},
quantum: {
gold: '#FFB800',
cyan: '#00F0FF',
pink: '#FF0055',
void: '#050505'
}
},
backgroundImage: {
'metal-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.2) 100%)',
'speaker-mesh': 'radial-gradient(circle, #222 1px, transparent 1px)'
},
animation: {
'float-slow': 'float 8s ease-in-out infinite alternate-reverse',
'float-med': 'float 5s ease-in-out infinite alternate-reverse',
'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
'spin-slow': 'spin 15s linear infinite',
'scan': 'scan 4s linear infinite',
'voltage': 'voltage 0.1s ease-in-out infinite alternate',
'equalizer': 'equalizer 1s ease-in-out infinite',
},
keyframes: {
float: {
'0%': { transform: 'translateY(0) translateZ(0)' },
'100%': { transform: 'translateY(-15px) translateZ(20px)' },
},
pulseGlow: {
'0%, 100%': { opacity: 0.6, boxShadow: '0 0 20px rgba(0, 240, 255, 0.1)' },
'50%': { opacity: 1, boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)' },
},
scan: {
'0%': { top: '0%', opacity: 0 },
'10%': { opacity: 1 },
'90%': { opacity: 1 },
'100%': { top: '100%', opacity: 0 },
},
voltage: {
'0%': { opacity: 0.8 },
'100%': { opacity: 1, textShadow: '0 0 8px #FFB800' },
},
equalizer: {
'0%, 100%': { height: '20%' },
'50%': { height: '90%' }
}
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-black"></div>
<div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-20"></div>
<div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-20"></div>
</div>

<div className="fixed inset-0 z-50 pointer-events-none p-6 flex flex-col justify-between">

<div className="flex justify-between items-start">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<iconify-icon className="text-quantum-pink animate-pulse" icon="solar:record-circle-linear"></iconify-icon>
<span className="font-mono text-[10px] tracking-[0.2em] text-quantum-pink uppercase">Rec.Enabled</span>
</div>
<div className="flex items-center gap-2 opacity-50">
<span className="font-mono text-[10px] tracking-widest text-neutral-500">SMPTE: 00:01:24:19</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="h-8 w-32 border border-neutral-800 bg-neutral-900/50 rounded flex gap-[2px] items-end p-1">
<div className="w-1 bg-green-500/50 h-[30%] animate-equalizer" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 bg-green-500/50 h-[50%] animate-equalizer" style={{animationDelay: '0.2s'}}></div>
<div className="w-1 bg-green-500/50 h-[70%] animate-equalizer" style={{animationDelay: '0.3s'}}></div>
<div className="w-1 bg-green-500/50 h-[40%] animate-equalizer" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 bg-yellow-500/50 h-[60%] animate-equalizer" style={{animationDelay: '0.4s'}}></div>
<div className="w-1 bg-yellow-500/50 h-[80%] animate-equalizer" style={{animationDelay: '0.2s'}}></div>
<div className="w-1 bg-red-500/50 h-[20%] animate-equalizer" style={{animationDelay: '0.5s'}}></div>
</div>
<iconify-icon className="text-neutral-500 text-xl" icon="solar:settings-linear"></iconify-icon>
</div>
</div>

<div className="flex justify-between items-end">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-quantum-cyan shadow-[0_0_10px_#00F0FF]"></div>
<span className="font-mono text-xs text-quantum-cyan tracking-wider">QUANTUM ENGINE V9.0</span>
</div>
<div className="flex gap-2">
<span className="text-[10px] font-mono text-neutral-600">CPU: 4%</span>
<span className="text-[10px] font-mono text-neutral-600">DSP: 12%</span>
<span className="text-[10px] font-mono text-neutral-600">TMP: 42°C</span>
</div>
</div>
</div>

<nav className="relative z-40 w-full flex justify-between items-center px-8 py-6 max-w-7xl mx-auto backdrop-blur-sm border-b border-white/5">
<div className="flex items-center gap-3">
<div className="relative w-10 h-10 flex items-center justify-center">
<div className="absolute inset-0 bg-quantum-pink/20 blur-md rounded-full"></div>
<iconify-icon className="text-2xl text-quantum-pink relative z-10" icon="solar:infinity-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-lg font-medium tracking-tight text-white">studiomachine<span className="text-quantum-pink">.love</span></span>
</div>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors" href="#">Workspace</a>
<a className="text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors" href="#">Plugins</a>
<a className="text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors" href="#">Hardware</a>
<button className="px-4 py-1.5 border border-white/10 rounded-full bg-white/5 hover:bg-white/10 hover:border-quantum-cyan/30 transition-all">
<span className="text-xs font-medium text-white">Connect I/O</span>
</button>
</div>
</nav>

<main className="flex-grow relative flex flex-col justify-center items-center perspective-[2000px] overflow-hidden py-20">

<div className="studio-scene relative w-full max-w-7xl h-[600px] flex justify-center items-center">

<div className="absolute -bottom-20 w-[200%] h-[200%] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [transform:rotateX(70deg)] pointer-events-none opacity-50"></div>

<div className="absolute left-10 md:left-20 lg:left-32 top-1/2 -translate-y-1/2 w-48 h-[500px] hidden md:flex flex-col gap-1 [transform:rotateY(25deg)_translateZ(-50px)] origin-right">

<div className="h-32 bg-neutral-900 border border-neutral-800 rounded flex flex-col p-3 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-1"><div className="w-1 h-1 bg-green-500 rounded-full shadow-[0_0_5px_lime]"></div></div>
<span className="text-[8px] font-mono text-neutral-500 mb-2">COMPRESSOR-X</span>
<div className="flex gap-2 justify-center mt-2">
<div className="w-8 h-8 rounded-full border border-neutral-700 bg-neutral-800 shadow-[inset_0_1px_2px_rgba(0,0,0,1)] relative flex items-center justify-center">
<div className="w-1 h-3 bg-white/20 rounded-full rotate-45"></div>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-700 bg-neutral-800 shadow-[inset_0_1px_2px_rgba(0,0,0,1)] relative flex items-center justify-center">
<div className="w-1 h-3 bg-quantum-pink/50 rounded-full -rotate-12"></div>
</div>
</div>

<div className="mt-auto h-8 bg-black border border-neutral-800 rounded relative overflow-hidden">
<div className="absolute top-0 bottom-0 left-0 w-2/3 bg-gradient-to-r from-green-900/40 via-yellow-900/40 to-red-900/40"></div>
<div className="absolute top-0 bottom-0 left-[60%] w-[1px] bg-white animate-pulse"></div>
</div>
</div>

<div className="flex-1 bg-neutral-900 border border-neutral-800 rounded relative overflow-hidden flex flex-col items-center justify-center">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCJgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9InJnYmEoMCwwLDAsMC41KSIvPjwvc3ZnPg==')] opacity-50"></div>

<div className="w-16 h-48 border border-neutral-700 rounded-full bg-neutral-950/80 relative overflow-hidden backdrop-blur-sm flex items-center justify-center">
<div className="absolute inset-x-0 h-[2px] bg-quantum-cyan/50 animate-scan shadow-[0_0_15px_#00F0FF]"></div>
<div className="w-2 h-full bg-quantum-cyan/10 blur-sm"></div>
</div>
<span className="mt-4 font-mono text-[9px] text-quantum-cyan tracking-widest text-center">QUANTUM<br/>CORE</span>
</div>
</div>

<div className="absolute right-10 md:right-20 lg:right-32 top-1/2 -translate-y-1/2 w-48 h-[400px] hidden md:flex flex-col [transform:rotateY(-25deg)_translateZ(-50px)] origin-left">
<div className="w-full h-full speaker-box rounded-xl p-4 flex flex-col items-center gap-6 relative border border-neutral-800">

<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-700 shadow-[inset_0_0_10px_black] relative flex items-center justify-center">
<div className="w-6 h-6 rounded-full bg-neutral-800"></div>
</div>

<div className="w-32 h-32 rounded-full speaker-cone border-[6px] border-neutral-800 flex items-center justify-center group">
<div className="w-10 h-10 rounded-full bg-neutral-900/80 shadow-lg group-hover:scale-110 transition-transform duration-100 ease-out"></div>
</div>

<div className="w-24 h-6 rounded-full bg-black shadow-[inset_0_2px_5px_rgba(255,255,255,0.1)] mt-auto"></div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 opacity-50">
<div className="w-2 h-2 bg-quantum-gold rounded-full"></div>
<span className="text-[8px] tracking-widest font-bold text-neutral-400">STUDIO.REF</span>
</div>
</div>
</div>

<div className="relative z-10 w-full max-w-2xl [transform:rotateX(5deg)] transition-transform duration-500 hover:[transform:rotateX(0deg)_scale(1.02)]">

<div className="absolute -top-32 left-1/2 -translate-x-1/2 text-center w-full animate-float-slow">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-quantum-gold/20 bg-quantum-gold/5 backdrop-blur-md mb-6">
<iconify-icon className="text-quantum-gold" icon="solar:stars-linear"></iconify-icon>
<span className="text-xs font-mono font-medium text-quantum-gold tracking-wide">AI GENERATION ACTIVE</span>
</div>
<h1 className="text-6xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-2xl">
                        Create Sound<br/>
<span className="italic font-cursive text-quantum-pink text-5xl md:text-6xl px-2">with feeling</span>
</h1>
</div>

<div className="glass-panel rounded-2xl p-1 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] mt-10">
<div className="bg-neutral-900/90 rounded-xl overflow-hidden relative min-h-[300px] border border-white/5">

<div className="h-10 border-b border-white/5 bg-black/40 flex items-center px-4 justify-between">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-[10px] font-mono text-neutral-500 flex gap-4">
<span>PROJECT: QUANTUM_LOVE_01</span>
<span>BPM: 128</span>
</div>
</div>

<div className="p-6 relative h-[260px] flex flex-col justify-center">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<div className="relative w-full h-32 flex items-center gap-[2px] opacity-80 mask-image:linear-gradient(to right, transparent, black 20%, black 80%, transparent)">

<div className="flex-1 flex items-center justify-center gap-[3px] h-full" id="waveform-container">

<div className="w-1 h-8 bg-quantum-pink/50 rounded-full animate-equalizer"></div>
<div className="w-1 h-12 bg-quantum-pink/60 rounded-full animate-equalizer" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 h-20 bg-quantum-pink/80 rounded-full animate-equalizer" style={{animationDelay: '0.2s'}}></div>
<div className="w-1 h-10 bg-quantum-pink/50 rounded-full animate-equalizer" style={{animationDelay: '0.4s'}}></div>
<div className="w-1 h-24 bg-quantum-cyan/80 rounded-full animate-equalizer" style={{animationDelay: '0.3s'}}></div>
<div className="w-1 h-16 bg-quantum-cyan/60 rounded-full animate-equalizer" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 h-8 bg-quantum-cyan/50 rounded-full animate-equalizer" style={{animationDelay: '0.5s'}}></div>
<div className="w-1 h-12 bg-quantum-gold/60 rounded-full animate-equalizer" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 h-20 bg-quantum-gold/80 rounded-full animate-equalizer" style={{animationDelay: '0.2s'}}></div>
<div className="w-1 h-10 bg-quantum-gold/50 rounded-full animate-equalizer" style={{animationDelay: '0.4s'}}></div>
<div className="w-1 h-8 bg-quantum-pink/50 rounded-full animate-equalizer"></div>
<div className="w-1 h-12 bg-quantum-pink/60 rounded-full animate-equalizer" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 h-20 bg-quantum-pink/80 rounded-full animate-equalizer" style={{animationDelay: '0.2s'}}></div>
<div className="w-1 h-10 bg-quantum-pink/50 rounded-full animate-equalizer" style={{animationDelay: '0.4s'}}></div>
<div className="w-1 h-24 bg-quantum-cyan/80 rounded-full animate-equalizer" style={{animationDelay: '0.3s'}}></div>
<div className="w-1 h-16 bg-quantum-cyan/60 rounded-full animate-equalizer" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 h-8 bg-quantum-cyan/50 rounded-full animate-equalizer" style={{animationDelay: '0.5s'}}></div>
</div>

<div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white shadow-[0_0_10px_white] z-10"></div>
</div>

<div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
<div className="flex gap-4">
<button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
<iconify-icon className="text-xl ml-1" icon="solar:play-bold"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 text-white flex items-center justify-center hover:bg-neutral-700 transition-colors">
<iconify-icon className="text-xl" icon="solar:stop-bold"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-3 bg-black/40 rounded-full px-4 py-2 border border-white/5">
<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
<span className="text-xs font-mono text-neutral-300 uppercase">Processing Audio...</span>
</div>
</div>
</div>
</div>

<div className="h-24 bg-[#111] mt-[1px] rounded-b-xl border-t border-white/5 flex items-center justify-center gap-6 px-10 relative">

<div className="h-16 w-1 fader-track relative group cursor-pointer">
<div className="absolute bottom-[60%] left-1/2 -translate-x-1/2 w-8 h-4 fader-knob rounded border border-neutral-600 group-hover:bg-neutral-700"></div>
</div>

<div className="h-16 w-1 fader-track relative group cursor-pointer">
<div className="absolute bottom-[40%] left-1/2 -translate-x-1/2 w-8 h-4 fader-knob rounded border border-neutral-600 group-hover:bg-neutral-700"></div>
</div>

<div className="h-16 w-1 fader-track relative group cursor-pointer">
<div className="absolute bottom-[75%] left-1/2 -translate-x-1/2 w-8 h-4 bg-quantum-gold border border-yellow-600 rounded shadow-[0_0_10px_rgba(255,184,0,0.5)]"></div>
</div>

<div className="h-16 w-1 fader-track relative group cursor-pointer">
<div className="absolute bottom-[50%] left-1/2 -translate-x-1/2 w-8 h-4 fader-knob rounded border border-neutral-600 group-hover:bg-neutral-700"></div>
</div>

<div className="h-16 w-1 fader-track relative group cursor-pointer">
<div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-8 h-4 fader-knob rounded border border-neutral-600 group-hover:bg-neutral-700"></div>
</div>
</div>
</div>

<div className="absolute -right-20 top-20 w-48 hidden lg:block">
<div className="glass-panel p-4 rounded-lg transform rotate-y-12 rotate-z-6 animate-float-med">
<iconify-icon className="text-neutral-400 mb-2" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-xs font-medium text-white italic leading-relaxed">
                            "We exist with love and create music by pulling on our own heart strings."
                        </p>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-neutral-950 border-t border-neutral-900 relative z-20">
<div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-quantum-gold/90 group cursor-default select-none">
<iconify-icon className="text-xl animate-voltage" icon="solar:bolt-linear"></iconify-icon>
<span className="font-cursive text-2xl tracking-wide -rotate-1 group-hover:rotate-0 transition-transform duration-300">current by AC/DC</span>
</div>
</div>
<div className="flex items-center gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:music-note-linear"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon></a>
</div>
</div>

<div className="bg-black py-1 px-4 text-[9px] font-mono text-neutral-600 flex justify-between uppercase tracking-widest border-t border-neutral-900">
<span>Server: Quantum_Node_Alpha</span>
<span>Latency: 0.04ms</span>
<span>Secure Connection</span>
</div>
</footer>

    </>
  );
}
