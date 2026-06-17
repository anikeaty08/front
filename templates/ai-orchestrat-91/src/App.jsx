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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
teal: {
450: '#14b8a6',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'glow': 'glow 2s ease-in-out infinite alternate',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
glow: {
'0%': { boxShadow: '0 0 10px rgba(20, 184, 166, 0.2)' },
'100%': { boxShadow: '0 0 25px rgba(20, 184, 166, 0.6)' },
},
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
      

<div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 rounded bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center text-white group-hover:animate-pulse">
<iconify-icon height="20" icon="solar:server-square-cloud-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-medium text-lg tracking-tight">FusionAI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Frameworks</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-400 hover:text-white hidden sm:block" href="#">Sign In</a>
<button className="bg-teal-500 hover:bg-teal-400 text-black text-sm font-semibold px-4 py-2 rounded shadow-[0_0_15px_rgba(20,184,166,0.4)] transition-all transform hover:scale-105">
                    Start Building
                </button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/20 border border-teal-500/20 text-teal-400 text-xs font-mono backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                    v2.0: Agent Computer Use &amp; Memory Live
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                    Plug &amp; Play <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-200 text-glow">
                        AI Orchestration.
                    </span>
</h1>
<p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                    Connect your enterprise to the world's best LLMs, Vector Stores, and Cognitive Agents in one line of code. The unified neural mesh for the modern stack.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="group flex items-center gap-2 bg-white text-black hover:bg-slate-200 px-6 py-3 rounded font-semibold transition-all">
                        Get API Key
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="flex items-center gap-2 glass-panel hover:bg-white/5 text-white px-6 py-3 rounded font-medium transition-all">
<iconify-icon className="text-slate-400" height="18" icon="solar:book-bookmark-linear" width="18"></iconify-icon>
                        View Documentation
                    </button>
</div>
<div className="flex items-center gap-6 pt-4 text-xs font-mono text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-linear" width="16"></iconify-icon>
                        Enterprise Secure
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:graph-up-linear" width="16"></iconify-icon>
                        Zero Latency
                    </div>
</div>
</div>

<div className="relative group animate-float">

<div className="absolute -inset-1 bg-gradient-to-tr from-teal-500/20 via-emerald-500/10 to-transparent rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
<div className="relative glass-panel rounded-xl overflow-hidden shadow-2xl bg-[#0a0a0a]/95 border border-white/10">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50 border border-green-500/50"></div>
</div>
<div className="text-xs text-slate-500 font-mono flex items-center gap-2">
<iconify-icon icon="solar:code-square-linear" width="12"></iconify-icon>
                            main.py
                        </div>
<div className="w-10"></div>
</div>

<div className="p-6 font-mono text-sm overflow-x-auto">
<div className="space-y-1.5 leading-relaxed text-slate-300">
<div className="flex"><span className="text-purple-400 mr-2">import</span><span className="text-white">fusion</span></div>
<div className="h-2"></div>
<div className="text-slate-600 italic"># Initialize Plug &amp; Play Ecosystem</div>
<div className="flex"><span className="text-teal-400">mesh</span> = fusion.Orchestrator(</div>
<div className="pl-4"><span className="text-orange-300">models</span>=[<span className="text-green-400">"gpt-4o"</span>, <span className="text-green-400">"claude-3.5-sonnet"</span>],</div>
<div className="pl-4"><span className="text-orange-300">memory</span>=<span className="text-blue-300">True</span>, <span className="text-slate-500"># Cognitive vector memory</span></div>
<div className="pl-4"><span className="text-orange-300">tools</span>=[<span className="text-green-400">"computer_use"</span>, <span className="text-green-400">"web_search"</span>]</div>
<div className="flex">)</div>
<div className="h-2"></div>
<div className="text-slate-600 italic"># Execute Agent Swarm</div>
<div className="flex"><span className="text-purple-400">await</span> <span className="text-teal-400">mesh</span>.solve(</div>
<div className="pl-4"><span className="text-orange-300">"Research competitor pricing and update DB"</span>,</div>
<div className="pl-4"><span className="text-orange-300">strategy</span>=<span className="text-green-400">"agent_to_agent"</span></div>
<div className="flex">)</div>
<div className="mt-4 pt-4 border-t border-white/10 text-emerald-400 text-xs">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                                    FusionAI Core Connected
                                </div>
<div className="pl-4 opacity-70">&gt;&gt; Routing to Claude 3.5 (Reasoning)</div>
<div className="pl-4 opacity-70">&gt;&gt; Accessing Cognitive Memory...</div>
<div className="pl-4 opacity-70">&gt;&gt; Agent Swarm Activated (3 nodes)</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
<div className="max-w-7xl mx-auto px-6 py-8">
<p className="text-center text-xs font-mono text-slate-500 mb-6 uppercase tracking-widest">Powering Next-Gen Intelligence</p>
<div className="flex justify-between items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500 gap-8 flex-wrap md:flex-nowrap">

<span className="text-lg font-semibold text-white flex items-center gap-2"><iconify-icon className="text-white" icon="solar:bolt-circle-linear"></iconify-icon> OpenAI</span>
<span className="text-lg font-semibold text-white flex items-center gap-2"><iconify-icon className="text-white" icon="solar:atom-linear"></iconify-icon> Anthropic</span>
<span className="text-lg font-semibold text-white flex items-center gap-2"><iconify-icon className="text-white" icon="solar:layers-linear"></iconify-icon> Llama 3</span>
<span className="text-lg font-semibold text-white flex items-center gap-2"><iconify-icon className="text-white" icon="solar:database-linear"></iconify-icon> Pinecone</span>
<span className="text-lg font-semibold text-white flex items-center gap-2"><iconify-icon className="text-white" icon="solar:code-square-linear"></iconify-icon> LangChain</span>
</div>
</div>
</div>

<section className="py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 space-y-4">
<h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight">The Central Nervous System</h2>
<p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    A unified interface for the fragmented AI landscape. We handle the routing, memory, and tools so you can focus on the product.
                </p>
</div>

<div className="glass-panel overflow-hidden min-h-[700px] flex border-teal-500/20 rounded-3xl p-8 relative items-center justify-center">

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
<defs>
<radialgradient cx="50%" cy="50%" fx="50%" fy="50%" id="center-glow" r="50%">
<stop offset="0%" stop-color="rgba(20, 184, 166, 0.2)"></stop>
<stop offset="100%" stop-color="rgba(20, 184, 166, 0)"></stop>
</radialgradient>
<lineargradient id="beam-v" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="rgba(20, 184, 166, 0)"></stop>
<stop offset="50%" stop-color="rgba(20, 184, 166, 0.5)"></stop>
<stop offset="100%" stop-color="rgba(20, 184, 166, 0)"></stop>
</lineargradient>
</defs>
<rect fill="url(#center-glow)" height="100%" opacity="0.3" width="100%"></rect>

<path d="M0 350 H1200" stroke="rgba(20, 184, 166, 0.1)" stroke-dasharray="4 4" strokeWidth="1"></path>
<path d="M600 0 V800" stroke="rgba(20, 184, 166, 0.1)" stroke-dasharray="4 4" strokeWidth="1"></path>

<rect fill="url(#beam-v)" height="500" opacity="0.5" width="1" x="599.5" y="100"></rect>

<path d="M300 180 C 450 180, 450 350, 600 350" fill="none" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1.5"></path>
<path d="M300 350 C 450 350, 450 350, 600 350" fill="none" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1.5"></path>
<path d="M300 520 C 450 520, 450 350, 600 350" fill="none" stroke="rgba(249, 115, 22, 0.15)" strokeWidth="1.5"></path>

<path d="M900 230 C 750 230, 750 350, 600 350" fill="none" stroke="rgba(20, 184, 166, 0.15)" strokeWidth="1.5"></path>
<path d="M900 470 C 750 470, 750 350, 600 350" fill="none" stroke="rgba(236, 72, 153, 0.15)" strokeWidth="1.5"></path>
</svg>
<div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-3 gap-8 h-full items-stretch">

<div className="flex flex-col justify-center gap-5">

<div className="glass-panel p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-purple-500/[0.02] hover:border-purple-500/20 transition-all duration-300 group cursor-default">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
<iconify-icon icon="solar:brain-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-200">LLM Aggregator</span>
</div>
<span className="text-[10px] font-mono text-purple-400/60 bg-purple-500/5 px-2 py-1 rounded border border-purple-500/10">v4.0</span>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="flex items-center gap-2 bg-white/5 rounded px-3 py-2 border border-white/5">
<iconify-icon icon="logos:openai-icon" width="14"></iconify-icon>
<span className="text-[11px] text-slate-400 font-medium">GPT-4o</span>
</div>
<div className="flex items-center gap-2 bg-white/5 rounded px-3 py-2 border border-white/5">
<iconify-icon icon="logos:claude-icon" width="14"></iconify-icon>
<span className="text-[11px] text-slate-400 font-medium">Claude 3.5</span>
</div>
<div className="flex items-center gap-2 bg-white/5 rounded px-3 py-2 border border-white/5">
<iconify-icon icon="logos:google-gemini" width="14"></iconify-icon>
<span className="text-[11px] text-slate-400 font-medium">Gemini</span>
</div>
<div className="flex items-center gap-2 bg-white/5 rounded px-3 py-2 border border-white/5">
<iconify-icon className="text-blue-400" icon="simple-icons:meta" width="14"></iconify-icon>
<span className="text-[11px] text-slate-400 font-medium">Llama 3</span>
</div>
</div>
</div>

<div className="glass-panel p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-blue-500/[0.02] hover:border-blue-500/20 transition-all duration-300 group cursor-default">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
<iconify-icon icon="solar:database-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-200">Vector Memory</span>
</div>
<div className="flex -space-x-1">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-[11px] text-slate-400 font-mono border-b border-dashed border-white/10 pb-1">
<span>RAG Pipeline</span>
<span className="text-blue-400">Active</span>
</div>
<div className="flex items-center justify-between text-[11px] text-slate-400 font-mono border-b border-dashed border-white/10 pb-1">
<span>Embeddings</span>
<span className="text-slate-500">1024 dim</span>
</div>
<div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
<span>Context Window</span>
<span className="text-slate-500">200k</span>
</div>
</div>
</div>

<div className="glass-panel p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-orange-500/[0.02] hover:border-orange-500/20 transition-all duration-300 group cursor-default">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
<iconify-icon icon="solar:widget-5-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-200">Tool Drivers</span>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-slate-400 font-mono flex items-center gap-1.5">
<iconify-icon icon="solar:global-linear" width="12"></iconify-icon> Browser
                    </span>
<span className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-slate-400 font-mono flex items-center gap-1.5">
<iconify-icon icon="solar:code-square-linear" width="12"></iconify-icon> Interpreter
                    </span>
<span className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-slate-400 font-mono flex items-center gap-1.5">
<iconify-icon icon="solar:key-linear" width="12"></iconify-icon> API Auth
                    </span>
<span className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-slate-400 font-mono flex items-center gap-1.5">
<iconify-icon icon="solar:mouse-linear" width="12"></iconify-icon> Click
                    </span>
</div>
</div>
</div>

<div className="flex flex-col items-center justify-between py-2 relative">

<div className="glass-panel px-6 py-3 rounded-full border border-white/10 bg-[#0a0a0a]/50 flex items-center gap-6 shadow-xl mb-8 relative z-20">
<div className="absolute -bottom-6 left-1/2 w-px h-6 bg-gradient-to-b from-white/10 to-transparent"></div>
<span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mr-2 border-r border-white/10 pr-4">Sources</span>
<iconify-icon className="opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" icon="logos:google-icon" width="18"></iconify-icon>
<iconify-icon className="opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" icon="logos:microsoft-icon" width="18"></iconify-icon>
<iconify-icon className="opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" icon="logos:whatsapp-icon" width="18"></iconify-icon>
<iconify-icon className="text-red-400 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" icon="simple-icons:n8n" width="20"></iconify-icon>
</div>

<div className="relative flex items-center justify-center py-8">
<div className="absolute inset-0 bg-teal-500/10 blur-[60px] rounded-full"></div>

<div className="w-40 h-40 rounded-full border border-teal-500/20 bg-[#050505] flex flex-col items-center justify-center relative shadow-[0_0_50px_rgba(20,184,166,0.1)] z-20 backdrop-blur-xl">

<div className="absolute inset-[-12px] border border-dashed border-teal-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
<div className="absolute inset-[-12px] border-t border-teal-500/30 rounded-full animate-[spin_3s_linear_infinite]"></div>
<div className="w-14 h-14 bg-gradient-to-br from-teal-500/80 to-emerald-600/80 rounded-2xl flex items-center justify-center mb-2 shadow-lg shadow-teal-500/20 border border-white/10">
<iconify-icon className="text-white" height="32" icon="solar:cpu-bolt-linear" width="32"></iconify-icon>
</div>
<span className="text-sm font-semibold text-white tracking-tight">FusionAI</span>
<span className="text-[9px] text-teal-400 font-mono mt-0.5 uppercase tracking-widest opacity-80">Orchestrator</span>
</div>
</div>

<div className="w-full max-w-sm mt-8 relative group">
<div className="absolute -top-8 left-1/2 w-px h-8 bg-gradient-to-b from-teal-500/30 to-emerald-500/50"></div>
<div className="absolute -inset-0.5 bg-gradient-to-b from-emerald-500/20 to-teal-500/10 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 bg-[#0a0a0a] relative overflow-hidden">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
<iconify-icon className="text-emerald-400" icon="solar:buildings-2-bold" width="20"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="font-semibold text-white text-sm">Your Company</h3>
<p className="text-[11px] text-emerald-400/80 mt-0.5">Powered by FusionAI</p>
</div>
<div className="text-right">
<div className="text-[10px] font-mono text-slate-500">Status</div>
<div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 justify-end">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Live
                             </div>
</div>
</div>

<div className="mt-4 bg-black/40 rounded-lg p-3 border border-white/5">
<div className="flex items-center gap-1.5 mb-2">
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
</div>
<div className="font-mono text-[9px] text-slate-400 leading-relaxed">
<span className="text-purple-400">const</span> app = <span className="text-blue-400">new</span> FusionApp();
                            app.<span className="text-yellow-400">connect</span>(wrapper);
                        </div>
</div>
</div>
</div>
</div>

<div className="flex flex-col justify-center gap-5">

<div className="glass-panel p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-teal-500/[0.02] hover:border-teal-500/20 transition-all duration-300 group cursor-default">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
<iconify-icon icon="solar:server-path-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-200">Universal Grid</span>
</div>
</div>
<div className="grid grid-cols-3 gap-2">

<div className="aspect-square rounded-lg bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-1 hover:border-teal-500/30 transition-colors">
<iconify-icon className="text-slate-400" icon="solar:layers-minimalistic-linear"></iconify-icon>
<span className="text-[9px] font-mono text-slate-500">MCP</span>
</div>

<div className="aspect-square rounded-lg bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-1 hover:border-teal-500/30 transition-colors">
<iconify-icon className="text-slate-400" icon="solar:user-circle-linear"></iconify-icon>
<span className="text-[9px] font-mono text-slate-500">AM</span>
</div>

<div className="aspect-square rounded-lg bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-1 hover:border-teal-500/30 transition-colors">
<iconify-icon className="text-slate-400" icon="solar:database-linear"></iconify-icon>
<span className="text-[9px] font-mono text-slate-500">SQL</span>
</div>

<div className="aspect-square rounded-lg bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-1 opacity-50">
<div className="w-1 h-1 rounded-full bg-slate-600"></div>
</div>
<div className="aspect-square rounded-lg bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-1 opacity-50">
<div className="w-1 h-1 rounded-full bg-slate-600"></div>
</div>
<div className="aspect-square rounded-lg bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-1 opacity-50">
<div className="w-1 h-1 rounded-full bg-slate-600"></div>
</div>
</div>
</div>

<div className="glass-panel p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-pink-500/[0.02] hover:border-pink-500/20 transition-all duration-300 group cursor-default relative overflow-hidden">
<div className="flex items-center justify-between mb-4 relative z-10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 border border-pink-500/20">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-200">Agent Swarm</span>
</div>
<span className="text-[10px] text-pink-400 font-mono">7 Nodes Active</span>
</div>

<div className="h-32 w-full relative border border-white/5 rounded-lg bg-[#050505] flex items-center justify-center overflow-hidden">
<svg className="absolute inset-0 w-full h-full" viewbox="0 0 200 100">

<line stroke="rgba(236, 72, 153, 0.2)" strokeWidth="1" x1="100" x2="50" y1="50" y2="30"></line>
<line stroke="rgba(236, 72, 153, 0.2)" strokeWidth="1" x1="100" x2="50" y1="50" y2="70"></line>
<line stroke="rgba(236, 72, 153, 0.2)" strokeWidth="1" x1="100" x2="150" y1="50" y2="30"></line>
<line stroke="rgba(236, 72, 153, 0.2)" strokeWidth="1" x1="100" x2="150" y1="50" y2="70"></line>
<line stroke="rgba(236, 72, 153, 0.1)" strokeWidth="1" x1="50" x2="50" y1="30" y2="70"></line>
<line stroke="rgba(236, 72, 153, 0.1)" strokeWidth="1" x1="150" x2="150" y1="30" y2="70"></line>


<circle className="animate-pulse" cx="100" cy="50" fill="#ec4899" r="4"></circle>

<circle cx="50" cy="30" fill="#334155" r="3"></circle>
<circle cx="50" cy="70" fill="#334155" r="3"></circle>
<circle cx="150" cy="30" fill="#334155" r="3"></circle>
<circle cx="150" cy="70" fill="#334155" r="3"></circle>
<circle cx="30" cy="50" fill="#1e293b" r="2"></circle>
<circle cx="170" cy="50" fill="#1e293b" r="2"></circle>
</svg>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-50"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pb-32 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl group transition-all duration-300 glass-panel-hover relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-teal-500/10"></div>
<div className="w-12 h-12 rounded bg-teal-500/10 flex items-center justify-center mb-6 border border-teal-500/20 text-teal-400 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:infinity-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Cognitive Memory</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                    Agents that remember. Built-in vectorization stores user preferences, long-term context, and document history automatically.
                </p>
</div>

<div className="glass-panel p-8 rounded-2xl group transition-all duration-300 glass-panel-hover relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-blue-500/10"></div>
<div className="w-12 h-12 rounded bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:connection-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Agent 2 Agent (A2A)</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                    Create swarms where specialized agents (Researcher, Coder, Critic) collaborate to solve complex tasks autonomously.
                </p>
</div>

<div className="glass-panel p-8 rounded-2xl group transition-all duration-300 glass-panel-hover relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-purple-500/10"></div>
<div className="w-12 h-12 rounded bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:laptop-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Computer Use</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                    Give agents hands. Enable them to control interfaces, click buttons, and navigate software just like a human would.
                </p>
</div>
</div>
</section>

<section className="pb-32 px-6 max-w-7xl mx-auto">
<div className="flex items-center justify-between mb-10">
<h2 className="text-3xl font-semibold text-white tracking-tight">Ecosystem</h2>
<a className="text-sm text-teal-400 hover:text-teal-300 flex items-center gap-1" href="#">View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid lg:grid-cols-2 gap-6">

<div className="bg-slate-900/40 border border-white/5 rounded-2xl p-8 hover:border-teal-500/30 transition-colors relative group">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded bg-gradient-to-br from-slate-800 to-black border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:siderbar-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-mono border border-teal-500/30 text-teal-400 px-2 py-1 rounded bg-teal-500/10">No-Code</span>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Fusion Studio</h3>
<p className="text-slate-400 text-sm mb-8 max-w-md">Visually build agent workflows. Drag and drop LLMs, connect data sources, and define tool permissions without writing code.</p>
<div className="flex items-center gap-2 text-sm font-medium text-white border-t border-white/5 pt-4">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-700 border border-black"></div>
<div className="w-6 h-6 rounded-full bg-slate-600 border border-black"></div>
</div>
<span className="text-slate-500 ml-2">Used by 4,000+ teams</span>
</div>
</div>

<div className="bg-slate-900/40 border border-white/5 rounded-2xl p-8 hover:border-teal-500/30 transition-colors relative group">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded bg-gradient-to-br from-slate-800 to-black border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-mono border border-blue-500/30 text-blue-400 px-2 py-1 rounded bg-blue-500/10">Developer</span>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Fusion SDK</h3>
<p className="text-slate-400 text-sm mb-8 max-w-md">The unified library for Python and TypeScript. Switch models, manage context window, and handle retries automatically.</p>
<div className="font-mono text-xs text-slate-500 border-t border-white/5 pt-4 flex gap-4">
<span>npm install @fusion/core</span>
<span>pip install fusion-ai</span>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center text-white">
<iconify-icon height="14" icon="solar:server-square-cloud-linear" width="14"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight">FusionAI</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Status</a>
<a className="hover:text-white transition-colors" href="#">Security</a>
</div>
<div className="flex items-center gap-4 text-slate-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:plain-linear" width="20"></iconify-icon></a> 
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:code-square-linear" width="20"></iconify-icon></a> 
</div>
</div>
<div className="max-w-7xl mx-auto mt-8 text-center text-xs text-slate-700">
            © 2024 FusionAI Inc. Building the Neural Mesh.
        </div>
</footer>

    </>
  );
}
