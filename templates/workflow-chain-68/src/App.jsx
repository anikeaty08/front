import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-64 border-r border-white/5 flex flex-col justify-between bg-[#080808]">
<div className="p-4">
<div className="flex items-center gap-3 mb-8 px-2">
<div className="w-6 h-6 bg-white text-black flex items-center justify-center rounded text-xs font-bold tracking-tighter">
                    A
                </div>
<span className="text-sm font-medium text-zinc-100 tracking-tight">AutoChain</span>
</div>
<div className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 text-xs font-medium text-zinc-100 bg-white/5 rounded-md border border-white/5" href="#">
<i className="w-4 h-4 text-zinc-400" data-lucide="layers"></i>
                    Active Runs
                </a>
<a className="flex items-center gap-3 px-2 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors rounded-md hover:bg-white/5" href="#">
<i className="w-4 h-4" data-lucide="git-branch"></i>
                    Workflows
                </a>
<a className="flex items-center gap-3 px-2 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors rounded-md hover:bg-white/5" href="#">
<i className="w-4 h-4" data-lucide="database"></i>
                    Knowledge Base
                </a>
<a className="flex items-center gap-3 px-2 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors rounded-md hover:bg-white/5" href="#">
<i className="w-4 h-4" data-lucide="settings"></i>
                    Settings
                </a>
</div>
<div className="mt-8">
<div className="text-[10px] font-medium uppercase tracking-widest text-zinc-600 mb-2 px-2">Recent Chains</div>
<div className="space-y-px">
<div className="flex items-center justify-between px-2 py-2 hover:bg-white/5 rounded cursor-pointer group">
<div className="flex items-center gap-2 overflow-hidden">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
<span className="text-xs truncate group-hover:text-zinc-300 transition-colors">Q4 Financial Report</span>
</div>
<span className="text-[10px] text-zinc-600">2m</span>
</div>
<div className="flex items-center justify-between px-2 py-2 hover:bg-white/5 rounded cursor-pointer group">
<div className="flex items-center gap-2 overflow-hidden">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<span className="text-xs truncate group-hover:text-zinc-300 transition-colors">Competitor Analysis</span>
</div>
<span className="text-[10px] text-zinc-600">1h</span>
</div>
<div className="flex items-center justify-between px-2 py-2 hover:bg-white/5 rounded cursor-pointer group">
<div className="flex items-center gap-2 overflow-hidden">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<span className="text-xs truncate group-hover:text-zinc-300 transition-colors">Email Summarization</span>
</div>
<span className="text-[10px] text-zinc-600">4h</span>
</div>
</div>
</div>
</div>
<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-zinc-400" data-lucide="user"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">Pro Team</span>
<span className="text-[10px] text-zinc-500">Usage: 84%</span>
</div>
</div>
</div>
</nav>

<main className="flex-1 flex flex-col min-w-0 bg-[#050505]">

<header className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#050505]/50 backdrop-blur-md z-10">
<div className="flex items-center gap-4">
<span className="text-xs font-medium text-zinc-500">Workflows</span>
<span className="text-zinc-700 text-xs">/</span>
<span className="text-sm font-medium text-zinc-100 tracking-tight">Financial Report Generator</span>
<span className="px-1.5 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-[10px] font-medium tracking-wide">RUNNING</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 rounded bg-zinc-900 border border-white/10 hover:border-white/20 transition-colors cursor-pointer">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-300">Live Mode</span>
</div>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</header>
<div className="flex-1 flex overflow-hidden">

<div className="w-1/3 border-r border-white/5 p-6 overflow-y-auto flex flex-col gap-6">
<div>
<h2 className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-3">Natural Input</h2>
<div className="glass-panel rounded-lg p-4">
<div className="flex items-start gap-3">
<div className="mt-1">
<div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center border border-white/5">
<i className="w-3 h-3 text-zinc-400" data-lucide="message-square"></i>
</div>
</div>
<div className="flex-1">
<p className="text-sm text-zinc-200 leading-relaxed">
                                    "Analyze the last 3 quarters of revenue data for TechCorp, compare it with market trends, and generate a concise executive summary highlighting risks."
                                </p>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
<span className="text-[10px] text-zinc-500">Model: GPT-4o</span>
<span className="text-[10px] text-zinc-500">Tokens: 42</span>
</div>
</div>
</div>
<div className="flex-1 relative">
<div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-800 via-zinc-800 to-transparent"></div>
<h2 className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4 pl-8">Invisible Prompting Chain</h2>
<div className="space-y-4 pl-8">

<div className="relative">
<div className="absolute -left-[25px] top-2 w-3 h-3 rounded-full bg-zinc-900 border border-emerald-500/50 flex items-center justify-center">
<div className="w-1 h-1 rounded-full bg-emerald-500"></div>
</div>
<div className="p-3 rounded bg-zinc-900/50 border border-white/5 flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-300">Intent Classification</span>
<i className="w-3 h-3 text-emerald-500" data-lucide="check"></i>
</div>
<div className="text-[10px] font-mono text-zinc-600 bg-black/30 p-1.5 rounded border border-white/5">
                                    Category: Financial_Analysis
                                    <br/>Action: Compare_Quarterly
                                </div>
</div>
</div>

<div className="relative">
<div className="absolute -left-[25px] top-2 w-3 h-3 rounded-full bg-zinc-900 border border-emerald-500/50 flex items-center justify-center">
<div className="w-1 h-1 rounded-full bg-emerald-500"></div>
</div>
<div className="p-3 rounded bg-zinc-900/50 border border-white/5 flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-300">Context Retrieval</span>
<i className="w-3 h-3 text-emerald-500" data-lucide="check"></i>
</div>
<div className="flex gap-2">
<span className="px-1.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-[10px] text-indigo-400">Q1 Data</span>
<span className="px-1.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-[10px] text-indigo-400">Q2 Data</span>
<span className="px-1.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-[10px] text-indigo-400">Q3 Data</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -left-[25px] top-2 w-3 h-3 rounded-full bg-zinc-900 border border-blue-500 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.3)]">
<div className="w-1 h-1 rounded-full bg-blue-500 animate-ping"></div>
</div>
<div className="p-3 rounded bg-zinc-900/50 border border-blue-500/30 flex flex-col gap-2 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-500/5 loading-shimmer"></div>
<div className="flex items-center justify-between relative z-10">
<span className="text-xs font-medium text-blue-200">Reasoning Engine</span>
<i className="w-3 h-3 text-blue-400 animate-spin" data-lucide="loader-2"></i>
</div>
<p className="text-[10px] text-zinc-500 relative z-10">Identifying correlation between market dip and Q2 revenue...</p>
</div>
</div>

<div className="relative opacity-40">
<div className="absolute -left-[25px] top-2 w-3 h-3 rounded-full bg-zinc-900 border border-zinc-700"></div>
<div className="p-3 rounded bg-zinc-900/30 border border-white/5 flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-500">Output Synthesis</span>
<i className="w-3 h-3 text-zinc-700" data-lucide="circle"></i>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-[#080808] flex flex-col relative">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#27272a 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: '0.2'}}></div>

<div className="h-12 border-b border-white/5 flex items-center px-6 justify-between z-10 bg-[#080808]/80 backdrop-blur-sm">
<div className="flex items-center gap-6">
<div className="flex flex-col">
<span className="text-[10px] text-zinc-500 uppercase tracking-wide">Confidence</span>
<span className="text-xs text-zinc-300 font-mono">98.2%</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-zinc-500 uppercase tracking-wide">Latency</span>
<span className="text-xs text-zinc-300 font-mono">840ms</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-zinc-500 uppercase tracking-wide">Steps</span>
<span className="text-xs text-zinc-300 font-mono">3/4</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-zinc-500">Processing</span>
<div className="w-24 h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[75%] rounded-full relative">
<div className="absolute inset-0 bg-white/20 loading-shimmer"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex items-center justify-center relative z-0">
<div className="relative w-[400px] h-[300px]">

<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: '0'}}>
<path d="M200,40 L200,100" fill="none" stroke="#3f3f46" strokeWidth="1"></path>
<path d="M200,100 L100,180" fill="none" stroke="#3f3f46" strokeWidth="1"></path>
<path d="M200,100 L300,180" fill="none" stroke="#3f3f46" strokeWidth="1"></path>
<path className="animate-pulse" d="M100,220 L180,280" fill="none" stroke="#3f3f46" stroke-dasharray="4 4" strokeWidth="1"></path>
<path className="animate-pulse" d="M300,220 L220,280" fill="none" stroke="#3f3f46" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>


<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-10 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center z-10 shadow-lg">
<span className="text-xs font-medium text-zinc-300">Start Trigger</span>
</div>

<div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-10 h-10 bg-zinc-900 border border-zinc-600 rounded-full flex items-center justify-center z-10">
<i className="w-4 h-4 text-zinc-400" data-lucide="git-commit"></i>
</div>

<div className="absolute top-[180px] left-[60px] w-36 p-2 bg-zinc-900 border border-zinc-700 rounded-lg z-10 flex items-center gap-2 shadow-lg">
<div className="w-6 h-6 bg-purple-500/10 border border-purple-500/20 rounded flex items-center justify-center">
<i className="w-3 h-3 text-purple-400" data-lucide="bar-chart-2"></i>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-medium text-zinc-300">Data Analysis</span>
<span className="text-[9px] text-zinc-500">Processing...</span>
</div>
</div>
<div className="absolute top-[180px] right-[60px] w-36 p-2 bg-zinc-900 border border-zinc-700 rounded-lg z-10 flex items-center gap-2 shadow-lg">
<div className="w-6 h-6 bg-orange-500/10 border border-orange-500/20 rounded flex items-center justify-center">
<i className="w-3 h-3 text-orange-400" data-lucide="globe"></i>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-medium text-zinc-300">Market Trends</span>
<span className="text-[9px] text-zinc-500">Processing...</span>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-black border border-dashed border-zinc-600 rounded-full flex items-center justify-center z-10">
<i className="w-5 h-5 text-zinc-600" data-lucide="file-text"></i>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 p-1 rounded-full bg-zinc-900/80 backdrop-blur border border-white/10">
<button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
<i className="w-3.5 h-3.5 fill-current" data-lucide="play"></i>
</button>
<button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
<i className="w-3.5 h-3.5 fill-current" data-lucide="pause"></i>
</button>
<div className="w-px h-4 bg-white/10 self-center mx-1"></div>
<button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
<i className="w-3.5 h-3.5" data-lucide="zoom-in"></i>
</button>
</div>
</div>

<div className="w-1/3 border-l border-white/5 flex flex-col bg-[#050505]">
<div className="p-4 border-b border-white/5 flex items-center justify-between">
<h2 className="text-xs font-medium uppercase tracking-widest text-zinc-500">Generated Output</h2>
<div className="flex gap-2">
<button className="p-1.5 hover:bg-white/5 rounded transition-colors">
<i className="w-3.5 h-3.5 text-zinc-500" data-lucide="copy"></i>
</button>
<button className="p-1.5 hover:bg-white/5 rounded transition-colors">
<i className="w-3.5 h-3.5 text-zinc-500" data-lucide="share"></i>
</button>
</div>
</div>
<div className="flex-1 p-6 overflow-y-auto font-serif">
<div className="space-y-6 opacity-70 select-none pointer-events-none blur-[2px] transition-all duration-500">
<div>
<h1 className="text-xl font-medium text-zinc-200 mb-2 font-sans tracking-tight">Executive Summary</h1>
<p className="text-sm text-zinc-400 leading-relaxed">
                                Despite a 12% revenue increase in Q1 driven by SaaS expansion, Q2 demonstrated a significant contraction correlated with semiconductor shortages.
                            </p>
</div>
<div className="p-3 rounded bg-zinc-900 border border-white/5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-sans text-zinc-500">Key Metrics</span>
<i className="w-3 h-3 text-emerald-500" data-lucide="trending-up"></i>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<span className="block text-[10px] text-zinc-600 font-sans">Revenue Q3</span>
<span className="block text-sm text-zinc-300 font-sans font-medium">$4.2M</span>
</div>
<div>
<span className="block text-[10px] text-zinc-600 font-sans">YoY Growth</span>
<span className="block text-sm text-emerald-400 font-sans font-medium">+8.4%</span>
</div>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-200 mb-2 font-sans">Risk Assessment</h3>
<ul className="space-y-2">
<li className="flex gap-2 items-start text-sm text-zinc-400">
<span className="w-1 h-1 rounded-full bg-zinc-600 mt-2"></span>
                                    Supply chain volatility remains the primary bottleneck for Q4 projections.
                                </li>
<li className="flex gap-2 items-start text-sm text-zinc-400">
<span className="w-1 h-1 rounded-full bg-zinc-600 mt-2"></span>
                                    Market consolidation by competitors requires aggressive R&amp;D spending.
                                </li>
</ul>
</div>
</div>

<div className="mt-6 flex items-center gap-3 animate-pulse">
<div className="w-1.5 h-4 bg-blue-500/80"></div>
<span className="text-sm text-zinc-500 font-mono">Synthesizing final paragraphs...</span>
</div>
</div>
<div className="p-4 border-t border-white/5 bg-zinc-900/20">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-8 h-4 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-indigo-600"></div>
<span className="ml-2 text-xs font-medium text-zinc-500">Verbose</span>
</label>
</div>
<button className="px-3 py-1.5 bg-white text-black text-xs font-medium rounded hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            Download PDF
                        </button>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
