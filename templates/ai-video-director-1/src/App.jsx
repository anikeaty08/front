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
extend: {
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
background: '#0A0A0A',
surface: '#121212',
surfaceHighlight: '#1A1A1A',
border: '#262626',
accent: {
blue: '#3B82F6',
cyan: '#06B6D4',
red: '#EF4444',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'scan': 'scan 8s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
scan: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(100%)' }
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-4 h-4 bg-white/10 rounded-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<span className="text-sm font-semibold tracking-tighter text-white">PRORUNNER</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Product</a>
<a className="hover:text-white transition-colors" href="#">Workflows</a>
<a className="hover:text-white transition-colors" href="#">Showcase</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Sign In</a>
<button className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded hover:bg-neutral-200 transition-colors">
                    Get Access
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex flex-col justify-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] neural-gradient opacity-50 pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 mb-8 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse"></span>
                v2.0 Neural Engine Live
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6 leading-[0.9]">
                The Director <br/> <span className="text-neutral-500">Engine.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                You already have AI tools. What you lack is an AI that remembers. 
                Stop generating video. Start directing cinema.
            </p>
<div className="flex items-center justify-center gap-4 mb-20">
<button className="group relative px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition-all overflow-hidden">
<span className="relative z-10 flex items-center gap-2">
                        Start Creating 
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</button>
<button className="px-6 py-3 bg-transparent border border-white/10 text-neutral-300 text-sm font-medium rounded hover:bg-white/5 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="16"></iconify-icon>
                    Watch Workflow
                </button>
</div>

<div className="relative w-full aspect-video md:aspect-[21/9] rounded-lg border border-white/10 bg-[#0F0F0F] shadow-2xl overflow-hidden group">

<div className="h-8 border-b border-white/5 flex items-center justify-between px-4 bg-[#141414]">
<div className="flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<div className="font-mono text-[10px] text-neutral-500 tracking-widest">SEQ_01_FINAL_CUT</div>
</div>
<div className="flex items-center gap-2 text-neutral-500">
<iconify-icon icon="lucide:wifi" width="12"></iconify-icon>
<span className="text-[10px] font-mono text-accent-blue">NEURAL LINK ACTIVE</span>
</div>
</div>

<div className="flex h-[calc(100%-2rem)]">

<div className="w-48 border-r border-white/5 bg-[#121212] hidden md:flex flex-col p-3 gap-3">
<div className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider mb-1">Cast</div>
<div className="flex items-center gap-2 p-2 rounded bg-white/5 border border-white/5 cursor-pointer hover:border-accent-blue/50 transition-colors">
<div className="w-6 h-6 rounded bg-neutral-700 flex items-center justify-center text-[10px]">JM</div>
<span className="text-xs text-neutral-300">Jack M.</span>
<div className="w-1.5 h-1.5 rounded-full bg-green-500 ml-auto"></div>
</div>
<div className="flex items-center gap-2 p-2 rounded border border-transparent hover:bg-white/5 cursor-pointer transition-colors">
<div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center text-[10px]">S</div>
<span className="text-xs text-neutral-500">Sarah</span>
</div>
<div className="mt-4 text-[10px] font-medium text-neutral-500 uppercase tracking-wider mb-1">Context</div>
<div className="h-16 rounded border border-white/5 border-dashed flex items-center justify-center text-neutral-600 text-[10px]">
                            Drop Script
                        </div>
</div>

<div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden">

<div className="absolute top-4 right-4 flex items-center gap-2 z-20">
<div className="w-2 h-2 rounded-full bg-accent-red animate-pulse"></div>
<span className="font-mono text-xs text-accent-red">REC</span>
</div>
<div className="absolute bottom-4 left-4 font-mono text-xs text-white z-20">
                            00:01:24:12
                        </div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
<path d="M 100 200 Q 400 50 700 300 T 1200 200" fill="none" stroke="#3B82F6" stroke-dasharray="5,5" strokeWidth="1">
<animate attributename="stroke-dashoffset" dur="2s" from="100" repeatcount="indefinite" to="0"></animate>
</path>
<circle cx="100" cy="200" fill="#3B82F6" r="3"></circle>
<circle cx="700" cy="300" fill="#3B82F6" r="3"></circle>
<circle cx="1200" cy="200" fill="#3B82F6" r="3"></circle>
</svg>

<div className="relative w-64 h-40 border border-accent-blue/30 bg-accent-blue/5 rounded flex items-center justify-center backdrop-blur-sm">
<iconify-icon className="text-accent-blue opacity-50" icon="lucide:focus" width="32"></iconify-icon>

<div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-accent-blue"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-accent-blue"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-accent-blue"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-accent-blue"></div>
</div>
</div>

<div className="w-64 border-l border-white/5 bg-[#121212] hidden lg:flex flex-col p-4 gap-4">
<div>
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-medium text-neutral-400">STABILITY</span>
<span className="text-[10px] font-mono text-accent-cyan">98%</span>
</div>
<div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="w-[98%] h-full bg-accent-cyan"></div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-medium text-neutral-400">CONTINUITY</span>
<span className="text-[10px] font-mono text-accent-blue">LOCKED</span>
</div>

<div className="flex items-center gap-2">
<div className="w-8 h-4 bg-accent-blue rounded-full relative">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
<span className="text-[10px] text-neutral-500">Character Lock</span>
</div>
</div>
<div className="mt-auto border-t border-white/5 pt-4">
<div className="grid grid-cols-3 gap-2">
<div className="aspect-square bg-neutral-800 rounded border border-white/5 hover:border-white/20 transition-colors"></div>
<div className="aspect-square bg-neutral-800 rounded border border-white/5 hover:border-white/20 transition-colors"></div>
<div className="aspect-square bg-neutral-800 rounded border border-white/5 hover:border-white/20 transition-colors"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-16 bg-[#0F0F0F] border-t border-white/5 flex flex-col">
<div className="h-4 border-b border-white/5 timeline-grid w-full opacity-20"></div>
<div className="flex-1 relative px-4 py-2 flex items-center gap-1">

<div className="h-6 w-32 bg-indigo-900/40 border border-indigo-500/30 rounded-sm relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-500/10"></div>
</div>
<div className="h-6 w-48 bg-teal-900/40 border border-teal-500/30 rounded-sm relative overflow-hidden">
<div className="absolute inset-0 bg-teal-500/10"></div>
</div>
<div className="h-6 w-24 bg-rose-900/40 border border-rose-500/30 rounded-sm relative overflow-hidden">
<div className="absolute inset-0 bg-rose-500/10"></div>
</div>

<div className="absolute left-1/3 top-0 bottom-0 w-px bg-accent-red z-30 flex flex-col items-center">
<div className="w-3 h-3 -mt-1.5 bg-accent-red transform rotate-45"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-surface">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16">
<div className="md:w-1/3">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Generation is a commodity. Direction is the asset.</h2>
<p className="text-neutral-400 leading-relaxed text-sm">
                        Most AI video tools are slot machines. You pull the lever (prompt) and hope for a match. ProRunner is a cockpit. You define the variables, and the engine adheres to your laws of physics.
                    </p>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-600" icon="lucide:x"></iconify-icon>
                            No flickering faces
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-600" icon="lucide:x"></iconify-icon>
                            No forgotten outfits
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-600" icon="lucide:x"></iconify-icon>
                            No random camera angles
                        </li>
</ul>
</div>
<div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="p-6 rounded-lg border border-white/5 bg-[#0A0A0A] relative overflow-hidden opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="absolute top-4 left-4 text-[10px] font-mono text-neutral-500 uppercase">Legacy Gen AI</div>
<div className="mt-8 grid grid-cols-2 gap-2">
<div className="aspect-video bg-neutral-800 rounded"></div>
<div className="aspect-video bg-neutral-800 rounded"></div>
<div className="aspect-video bg-neutral-800 rounded"></div>
<div className="aspect-video bg-neutral-800 rounded"></div>
</div>
<p className="mt-4 text-xs text-neutral-500">Inconsistent characters, random lighting, hallucinogenic physics.</p>
</div>

<div className="p-6 rounded-lg border border-accent-blue/20 bg-[#0A0A0A] relative overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.05)]">
<div className="absolute top-4 left-4 text-[10px] font-mono text-accent-blue uppercase">ProRunner Context Engine</div>
<div className="mt-8 grid grid-cols-2 gap-2">
<div className="aspect-video bg-neutral-800 rounded border border-accent-blue/30 relative overflow-hidden group">
<img alt="Consistent Character" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-video bg-neutral-800 rounded border border-accent-blue/30 relative overflow-hidden group">
<img alt="Consistent Character Close" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity scale-110" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-video bg-neutral-800 rounded border border-accent-blue/30 relative overflow-hidden group">
<img alt="Consistent Character BW" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-video bg-neutral-800 rounded border border-accent-blue/30 relative overflow-hidden group">
<img alt="Consistent Character Sepia" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=300&amp;auto=format&amp;fit=crop" style={{filter: 'sepia(1)'}}/>
</div>
</div>
<div className="flex items-center gap-2 mt-4">
<iconify-icon className="text-accent-blue" icon="lucide:lock" width="12"></iconify-icon>
<p className="text-xs text-neutral-300">Character Seed: <span className="font-mono text-neutral-500">x892-A</span> (Persisted)</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0A0A0A]">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white">Full Stack Cinema.</h2>
<p className="text-neutral-500 mt-2">A complete production studio in your browser.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">

<div className="bg-[#0F0F0F] p-8 group hover:bg-[#121212] transition-colors relative">
<div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center mb-6 bg-[#0A0A0A] text-neutral-400 group-hover:text-white group-hover:border-white/20 transition-colors">
<iconify-icon icon="lucide:users" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">The Green Room</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Generate casts, train Loras on specific faces, or upload your own 3D models.
                    </p>
<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
<iconify-icon className="text-white" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>

<div className="bg-[#0F0F0F] p-8 group hover:bg-[#121212] transition-colors relative">
<div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center mb-6 bg-[#0A0A0A] text-neutral-400 group-hover:text-white group-hover:border-white/20 transition-colors">
<iconify-icon icon="lucide:file-text" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Context Scripting</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Paste your screenplay. The engine parses scene headers, dialogue, and mood automatically.
                    </p>
<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
<iconify-icon className="text-white" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>

<div className="bg-[#0F0F0F] p-8 group hover:bg-[#121212] transition-colors relative">
<div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center mb-6 bg-[#0A0A0A] text-neutral-400 group-hover:text-white group-hover:border-white/20 transition-colors">
<iconify-icon icon="lucide:sliders" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Neural Composition</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Control camera movement, focal length, and lighting with NLE-style keyframes.
                    </p>
<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
<iconify-icon className="text-white" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-[200vh] bg-[#0A0A0A]">
<div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden border-t border-b border-white/5 bg-[#050505]">
<div className="absolute top-12 left-0 w-full text-center z-20">
<span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur text-xs text-neutral-400">
                    Scroll to scrub timeline
                </span>
</div>

<div className="max-w-[1920px] mx-auto w-full px-6 relative">

<div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent-red/80 z-40 h-[600px] -translate-y-1/2 mt-[300px]">
<div className="absolute -top-1 -left-1.5 w-3 h-3 bg-accent-red transform rotate-45"></div>
<div className="absolute top-4 left-2 text-[10px] font-mono text-accent-red whitespace-nowrap bg-black/80 px-1 rounded">
                        00:02:45:12
                     </div>
</div>

<div className="relative h-96 w-[200%] -ml-[50%] flex flex-col gap-4 animate-scan opacity-80" style={{animationDuration: '15s', animationDirection: 'alternate'}}>

<div className="h-24 w-full flex gap-1">
<div className="flex-1 bg-neutral-900 border border-white/5 rounded-md relative overflow-hidden group">
<div className="absolute inset-0 flex items-center justify-center text-neutral-700 text-6xl font-black opacity-10">SCENE 1</div>
<div className="absolute bottom-2 left-2 text-[10px] font-mono text-neutral-500">EXT. CITY - NIGHT</div>
</div>
<div className="flex-1 bg-neutral-800 border border-white/5 rounded-md relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-neutral-700 text-6xl font-black opacity-10">SCENE 2</div>
<div className="absolute bottom-2 left-2 text-[10px] font-mono text-neutral-500">INT. LAB - DAY</div>

<div className="absolute top-1/2 w-full h-px bg-blue-500/20"></div>
<div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-blue-500 rotate-45 transform -translate-y-1/2"></div>
<div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-500 rotate-45 transform -translate-y-1/2"></div>
</div>
<div className="flex-1 bg-neutral-900 border border-white/5 rounded-md relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-neutral-700 text-6xl font-black opacity-10">SCENE 3</div>
</div>
</div>

<div className="h-16 w-full flex gap-1">
<div className="flex-1 bg-teal-900/20 border border-teal-500/20 rounded-md relative overflow-hidden">

<div className="absolute inset-0 flex items-center gap-px opacity-40">
<div className="w-1 h-4 bg-teal-500"></div><div className="w-1 h-8 bg-teal-500"></div><div className="w-1 h-3 bg-teal-500"></div>
<div className="w-1 h-6 bg-teal-500"></div><div className="w-1 h-2 bg-teal-500"></div><div className="w-1 h-10 bg-teal-500"></div>

<div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQwIj48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIyMCIgeT0iMTAiIGZpbGw9IiMwMGI1ZDQiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')]"></div>
</div>
</div>
</div>

<div className="h-32 w-full relative">

<div className="absolute top-1/2 left-[20%] w-3 h-3 bg-white rounded-full shadow-[0_0_15px_white]"></div>
<div className="absolute top-1/2 left-[50%] w-3 h-3 bg-white rounded-full shadow-[0_0_15px_white]"></div>
<div className="absolute top-1/2 left-[80%] w-3 h-3 bg-white rounded-full shadow-[0_0_15px_white]"></div>

<svg className="absolute inset-0 w-full h-full" style={{overflow: 'visible'}}>
<path d="M 0 64 L 2000 64" fill="none" stroke="url(#gradient-line)" strokeWidth="2"></path>
<defs>
<lineargradient id="gradient-line" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#3B82F6" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#3B82F6" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#3B82F6" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</div>
<div className="absolute bottom-12 w-full text-center z-20">
<h3 className="text-2xl font-semibold tracking-tight text-white">The Neural Timeline™</h3>
<p className="text-neutral-500 text-sm mt-2">Adjust clips. Keep the context. Just like a real editor.</p>
</div>
</div>
</section>

<section className="py-32 bg-[#0A0A0A]">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12">Directed by ProRunner</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-[9/16] rounded-lg bg-neutral-800 border border-white/5 relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-3 left-3 text-[10px] font-medium text-white">Fashion Week</div>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="lucide:play-circle" width="20"></iconify-icon>
</div>
</div>
<div className="aspect-[9/16] rounded-lg bg-neutral-800 border border-white/5 relative overflow-hidden group cursor-pointer translate-y-8">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-3 left-3 text-[10px] font-medium text-white">Tech Reveal</div>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="lucide:play-circle" width="20"></iconify-icon>
</div>
</div>
<div className="aspect-[9/16] rounded-lg bg-neutral-800 border border-white/5 relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-3 left-3 text-[10px] font-medium text-white">Music Video</div>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="lucide:play-circle" width="20"></iconify-icon>
</div>
</div>
<div className="aspect-[9/16] rounded-lg bg-neutral-800 border border-white/5 relative overflow-hidden group cursor-pointer translate-y-8">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-3 left-3 text-[10px] font-medium text-white">Docu-Series</div>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="lucide:play-circle" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="p-8 rounded-xl border border-white/10 bg-[#0F0F0F] flex flex-col">
<h3 className="text-lg font-medium text-white">Creator</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">$29</span>
<span className="text-sm text-neutral-500">/mo</span>
</div>
<ul className="mt-8 space-y-3 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="lucide:check" width="16"></iconify-icon>
                            10 Active Characters
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="lucide:check" width="16"></iconify-icon>
                            5 Minutes Gen/Month
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="lucide:check" width="16"></iconify-icon>
                            1080p Export
                        </li>
</ul>
<button className="mt-8 w-full py-2 rounded bg-neutral-800 text-white text-sm font-medium hover:bg-neutral-700 transition-colors border border-white/5">
                        Start Free Trial
                    </button>
</div>

<div className="p-8 rounded-xl border border-accent-blue/50 bg-[#0F0F0F] flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 px-3 py-1 bg-accent-blue text-[10px] font-bold text-white rounded-bl-lg">PRO</div>
<h3 className="text-lg font-medium text-white">Studio</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">$99</span>
<span className="text-sm text-neutral-500">/mo</span>
</div>
<ul className="mt-8 space-y-3 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-accent-blue" icon="lucide:check" width="16"></iconify-icon>
                            Unlimited Characters
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-accent-blue" icon="lucide:check" width="16"></iconify-icon>
                            30 Minutes Gen/Month
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-accent-blue" icon="lucide:check" width="16"></iconify-icon>
                            4K HDR Export &amp; RAW
                        </li>
</ul>
<button className="mt-8 w-full py-2 rounded bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">
                        Get Studio
                    </button>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-[#111]"></div>
<div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                Stop generating. <br/>Start directing.
            </h2>
<p className="text-neutral-400 mb-10 text-lg">
                Join the filmmakers who have moved beyond the slot machine.
            </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-blue/50 transition-colors placeholder:text-neutral-600" placeholder="director@studio.com" type="email"/>
<button className="px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition-colors whitespace-nowrap" type="button">
                    Join Waitlist
                </button>
</form>
<p className="mt-4 text-[10px] text-neutral-600">No credit card required for early access.</p>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-white/10 rounded-sm flex items-center justify-center">
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
<span className="text-xs font-semibold tracking-tighter text-neutral-300">PRORUNNER</span>
</div>
<div className="flex gap-6 text-[10px] text-neutral-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Discord</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
