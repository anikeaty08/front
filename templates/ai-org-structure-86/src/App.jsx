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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#030304',
surface: '#0A0A0B',
surfaceHighlight: '#161618',
border: '#27272A',
primary: '#EEEEF0',
secondary: '#88888F',
accent: '#D4D4D8',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'grid-pattern': "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)",
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center text-black">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-sm text-white group-hover:text-white/80 transition-colors">STRUCT</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-secondary hover:text-white transition-colors font-normal" href="#">Product</a>
<a className="text-sm text-secondary hover:text-white transition-colors font-normal" href="#">Workflows</a>
<a className="text-sm text-secondary hover:text-white transition-colors font-normal" href="#">Changelog</a>
<a className="text-sm text-secondary hover:text-white transition-colors font-normal" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-secondary hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-black px-3 py-1.5 rounded text-xs font-medium hover:bg-neutral-200 transition-colors" href="#">Get Started</a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20">
<div className="max-w-7xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 hover:bg-white/10 transition-colors cursor-pointer group">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs text-secondary font-medium group-hover:text-white transition-colors">v2.0 AI Workflow Engine is live</span>
<iconify-icon className="text-secondary group-hover:text-white transition-colors" icon="lucide:arrow-right" strokeWidth="1.5" width="12"></iconify-icon>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-6 max-w-4xl mx-auto leading-[1.1]">
                Structure scale.<br/>Automate growth.
            </h1>
<p className="text-secondary text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                Generate dynamic organizational charts and actionable roadmaps from a single prompt. Align vision with execution instantly.
            </p>

<div className="max-w-xl mx-auto relative mb-24 flex flex-col items-center gap-5">

<div className="inline-flex p-1 bg-surfaceHighlight/50 border border-white/10 rounded-full backdrop-blur-md">
<button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/5 text-xs font-medium text-white shadow-sm transition-all hover:bg-white/15">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="13"></iconify-icon>
<span>Prompt</span>
</button>
<button className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-secondary hover:text-white transition-colors">
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="13"></iconify-icon>
<span>Website</span>
</button>
</div>

<div className="w-full relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/50 to-purple-500/50 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
<div className="relative flex items-center bg-surfaceHighlight rounded-lg p-1.5 border border-white/10 shadow-2xl">
<div className="pl-3 pr-2 text-secondary flex items-center justify-center">
<iconify-icon icon="lucide:wand-2" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none focus:ring-0 text-sm text-white placeholder-neutral-500 h-10 outline-none" placeholder="Describe your team structure or goal..." type="text"/>
<button className="bg-white text-black px-4 h-9 rounded text-xs font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                            Generate
                            <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>

<div className="absolute -bottom-8 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-[10px] text-neutral-500">Or press <kbd className="font-mono px-1.5 py-0.5 bg-white/5 rounded border border-white/10 text-white/50 text-[9px]">⌘ K</kbd> to open command palette</span>
</div>
</div>
</div>

<div className="relative max-w-5xl mx-auto">

<div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-[60px] opacity-60"></div>
<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-[60px] opacity-60"></div>
<div className="bg-[#050505] rounded-xl overflow-hidden border border-white/10 shadow-2xl animate-float">

<div className="h-10 border-b border-white/5 flex items-center px-4 justify-between bg-white/[0.02]">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"></div>
</div>
<div className="text-[10px] text-neutral-600 font-mono tracking-wide">workflow_01.json</div>
</div>

<div className="relative h-[500px] w-full bg-[#030303] bg-grid overflow-hidden selection:bg-transparent">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="lineGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#333" stop-opacity="0.1"></stop>
<stop offset="50%" stop-color="#444" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#333" stop-opacity="0.1"></stop>
</lineargradient>
</defs>

<path d="M512 90 L512 140" fill="none" stroke="#333" stroke-dasharray="4 4" strokeWidth="1"></path>
<path d="M512 140 L280 180" fill="none" stroke="#333" stroke-dasharray="4 4" strokeWidth="1"></path>
<path d="M512 140 L744 180" fill="none" stroke="#333" stroke-dasharray="4 4" strokeWidth="1"></path>
<path d="M280 180 L280 210" fill="none" stroke="#333" stroke-dasharray="4 4" strokeWidth="1"></path>
<path d="M744 180 L744 210" fill="none" stroke="#333" stroke-dasharray="4 4" strokeWidth="1"></path>


<path d="M280 255 L160 360" fill="none" stroke="#222" strokeWidth="1"></path>
<path d="M280 255 L380 360" fill="none" stroke="#222" strokeWidth="1"></path>

<path d="M744 255 L644 360" fill="none" stroke="#222" strokeWidth="1"></path>
<path d="M744 255 L840 330" fill="none" stroke="#222" strokeWidth="1"></path>
</svg>

<div className="absolute top-[50px] left-1/2 -translate-x-1/2 z-20">
<div className="h-10 pl-3 pr-4 flex items-center gap-2.5 bg-[#0e0e10] border border-white/10 rounded-lg shadow-2xl hover:border-white/20 transition-all cursor-default">
<iconify-icon className="text-[#6366f1]" icon="lucide:crown" strokeWidth="2" width="14"></iconify-icon>
<span className="text-xs text-zinc-300 font-medium tracking-wide">Executive Branch</span>
</div>
</div>


<div className="absolute top-[210px] left-[280px] -translate-x-1/2 z-20">
<div className="h-11 pl-3 pr-5 flex items-center gap-3 bg-[#0e0e10] border border-white/10 rounded-lg shadow-xl hover:border-white/20 transition-all group cursor-pointer">
<div className="relative w-2 h-2">
<div className="absolute inset-0 bg-emerald-500 rounded-full opacity-70 animate-pulse"></div>
<div className="absolute inset-0 bg-emerald-500 rounded-full blur-[2px]"></div>
</div>
<span className="text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors font-medium">Product Eng</span>
</div>
</div>

<div className="absolute top-[210px] right-[280px] translate-x-1/2 z-20">
<div className="h-11 pl-3 pr-5 flex items-center gap-3 bg-[#0e0e10] border border-white/10 rounded-lg shadow-xl hover:border-white/20 transition-all group cursor-pointer">
<div className="relative w-2 h-2">
<div className="absolute inset-0 bg-blue-500 rounded-full opacity-70 animate-pulse"></div>
<div className="absolute inset-0 bg-blue-500 rounded-full blur-[2px]"></div>
</div>
<span className="text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors font-medium">Marketing</span>
</div>
</div>


<div className="absolute top-[360px] left-[160px] -translate-x-1/2 z-10">
<div className="w-32 h-14 bg-[#0A0A0B] border border-white/5 rounded-lg p-3 flex flex-col justify-center gap-2 opacity-60">
<div className="h-1.5 w-16 bg-white/10 rounded-full"></div>
<div className="h-1.5 w-10 bg-white/5 rounded-full"></div>
</div>
</div>
<div className="absolute top-[360px] left-[380px] -translate-x-1/2 z-10">
<div className="w-32 h-14 bg-[#0A0A0B] border border-white/5 rounded-lg p-3 flex flex-col justify-center gap-2 opacity-60">
<div className="h-1.5 w-12 bg-white/10 rounded-full"></div>
<div className="h-1.5 w-20 bg-white/5 rounded-full"></div>
</div>
</div>

<div className="absolute top-[360px] right-[380px] translate-x-1/2 z-10">
<div className="w-32 h-14 bg-[#0A0A0B] border border-white/5 rounded-lg p-3 flex flex-col justify-center gap-2 opacity-60">
<div className="h-1.5 w-16 bg-white/10 rounded-full"></div>
<div className="h-1.5 w-20 bg-white/5 rounded-full"></div>
</div>
</div>

<div className="absolute bottom-10 right-10 z-30">
<div className="w-72 bg-[#0A0A0B]/90 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-[0_20px_50px_-12px_rgba(0,0,0,1)]">

<div className="flex justify-between items-center mb-5">
<span className="text-[10px] tracking-[0.2em] text-zinc-500 font-semibold uppercase">Timeline</span>
<span className="text-[10px] text-emerald-500 font-medium tracking-wide">On Track</span>
</div>

<div className="mb-4">
<div className="flex justify-between mb-2">
<span className="text-[11px] text-zinc-300 font-medium">Q3 Hiring</span>
<span className="text-[10px] text-zinc-500 font-mono">75%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-zinc-300 w-3/4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
</div>
</div>

<div>
<div className="flex justify-between mb-2">
<span className="text-[11px] text-zinc-300 font-medium">Infra Scale</span>
<span className="text-[10px] text-zinc-500 font-mono">30%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-zinc-600 w-[30%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Orchestrate efficiency.</h2>
<p className="text-secondary text-lg font-light max-w-xl">Powerful primitives to model your organization's future, from personnel dependencies to resource allocation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-surfaceHighlight border border-white/5 rounded-xl p-6 overflow-hidden hover:border-white/10 transition-colors h-[400px] flex flex-col justify-between">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="lucide:network" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Intelligent Hierarchy</h3>
<p className="text-sm text-secondary leading-relaxed">Auto-suggest reporting lines and team structures based on industry standard topologies.</p>
</div>

<div className="relative w-full h-32 bg-black/40 rounded-lg border border-white/5 p-4 flex items-center justify-center gap-4">
<div className="w-8 h-8 rounded bg-white/10 border border-white/10 flex items-center justify-center">
<span className="text-[10px] text-secondary">A</span>
</div>
<iconify-icon className="text-neutral-700" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
<div className="w-8 h-8 rounded bg-white/10 border border-white/10 flex items-center justify-center">
<span className="text-[10px] text-secondary">B</span>
</div>
<iconify-icon className="text-neutral-700" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
<div className="w-8 h-8 rounded bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.2)]">
<span className="text-[10px] text-indigo-300">C</span>
</div>
</div>
</div>

<div className="group relative bg-surfaceHighlight border border-white/5 rounded-xl p-6 overflow-hidden hover:border-white/10 transition-colors h-[400px] flex flex-col justify-between">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="lucide:calendar" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Dynamic Timeline</h3>
<p className="text-sm text-secondary leading-relaxed">Adjust project velocity and instantly see the impact on delivery dates and resource availability.</p>
</div>

<div className="relative w-full h-32 bg-black/40 rounded-lg border border-white/5 p-6 flex flex-col justify-center gap-2">
<div className="flex justify-between text-[10px] text-secondary font-mono mb-2">
<span>VELOCITY</span>
<span className="text-white">1.5x</span>
</div>
<input max="100" min="1" type="range" value="75"/>
<div className="flex justify-between mt-2">
<div className="h-1 w-2 bg-white/10 rounded"></div>
<div className="h-1 w-2 bg-white/10 rounded"></div>
<div className="h-1 w-2 bg-white/10 rounded"></div>
<div className="h-1 w-2 bg-white/10 rounded"></div>
<div className="h-1 w-2 bg-white/10 rounded"></div>
</div>
</div>
</div>

<div className="group relative bg-surfaceHighlight border border-white/5 rounded-xl p-6 overflow-hidden hover:border-white/10 transition-colors h-[400px] flex flex-col justify-between">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="lucide:refresh-ccw" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Real-time Sync</h3>
<p className="text-sm text-secondary leading-relaxed">Changes in structure propagate to the roadmap immediately. No more disconnected spreadsheets.</p>
</div>

<div className="relative w-full h-32 bg-black/40 rounded-lg border border-white/5 p-6 flex items-center justify-between">
<div className="flex flex-col gap-1">
<span className="text-xs text-white font-medium">Auto-Sync</span>
<span className="text-[10px] text-secondary">Update dependencies</span>
</div>

<div className="w-10 h-6 bg-white rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-4 h-4 bg-black rounded-full shadow-sm"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-surface/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-secondary font-medium mb-10 tracking-wide uppercase">Trusted by forward-thinking teams</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale mix-blend-screen">
<span className="text-xl font-bold tracking-tight text-white">ACME<span className="font-light text-secondary">CORP</span></span>
<span className="text-xl font-semibold tracking-tighter text-white">KROMA</span>
<span className="text-xl font-bold tracking-tight text-white flex items-center gap-1"><div className="w-3 h-3 bg-white rotate-45"></div>VORTEX</span>
<span className="text-xl font-medium tracking-tight text-white">Oculus.ai</span>
<span className="text-xl font-bold tracking-tighter text-white">STRIPE<span className="text-base font-light">LESS</span></span>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-radial from-indigo-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">Ready to structure your success?</h2>
<p className="text-secondary text-lg font-light mb-10">Join 10,000+ managers building better organizations today.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 h-12 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                    Start Building Free
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 h-12 bg-transparent border border-white/20 text-white text-sm font-medium rounded hover:bg-white/5 transition-colors">
                    Read Documentation
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-4 h-4 bg-white/10 rounded-sm flex items-center justify-center text-white">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="2.5" width="10"></iconify-icon>
</div>
<span className="text-sm font-medium text-white tracking-tight">STRUCT</span>
</div>
<p className="text-xs text-secondary max-w-xs">
                    Design system for organizational architecture. <br/>
                    © 2024 Struct Inc.
                </p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-white">Product</span>
<a className="text-xs text-secondary hover:text-white transition-colors" href="#">Generator</a>
<a className="text-xs text-secondary hover:text-white transition-colors" href="#">Roadmaps</a>
<a className="text-xs text-secondary hover:text-white transition-colors" href="#">Templates</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-white">Company</span>
<a className="text-xs text-secondary hover:text-white transition-colors" href="#">Blog</a>
<a className="text-xs text-secondary hover:text-white transition-colors" href="#">Careers</a>
<a className="text-xs text-secondary hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-white">Legal</span>
<a className="text-xs text-secondary hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-secondary hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
