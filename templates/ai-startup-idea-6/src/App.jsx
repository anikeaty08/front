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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="glow-blob bg-[#A259FF] w-[500px] h-[500px] rounded-full top-[-100px] left-[-100px]"></div>
<div className="glow-blob bg-[#00D1FF] w-[600px] h-[600px] rounded-full bottom-[-100px] right-[-100px]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
</div>

<nav className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D1FF] to-[#A259FF] flex items-center justify-center text-[#0A0F1F]">
<iconify-icon icon="lucide:cpu" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-white">SIMULATE<span className="text-[#00D1FF]">.AI</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">How it works</a>
<a className="hover:text-white transition-colors" href="#">Demo</a>
</div>
<div>
<button className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-white/10 transition-all text-white">
                Login
            </button>
</div>
</nav>

<section className="relative z-10 pt-20 pb-32 px-6 flex flex-col items-center text-center max-w-5xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#A259FF]/30 bg-[#A259FF]/10 text-[#A259FF] text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A259FF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#A259FF]"></span>
</span>
            Now powered by Real-Time Industry Data
        </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-white">
            Test Your Startup Idea <br/>
<span className="text-gradient-brand">Instantly with Simulation</span>
</h1>
<p className="text-lg text-gray-400 max-w-2xl mb-12 leading-relaxed">
            Paste your idea and get real-world feasibility insights, improvements, and industry-backed analysis using our advanced AI environment simulation.
        </p>

<div className="w-full max-w-3xl relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-[#00D1FF] via-[#A259FF] to-[#00D1FF] rounded-2xl opacity-30 group-hover:opacity-60 blur-lg transition duration-500"></div>
<div className="relative flex items-center bg-[#0A0F1F]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
<div className="pl-4 text-gray-500">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 h-14 px-4 text-lg outline-none" placeholder="Describe your idea... e.g. 'A platform for students to find last-minute tutors.'" type="text"/>
<button className="hidden md:flex items-center gap-2 bg-[#F2F4F7] text-[#0A0F1F] px-6 py-3 rounded-xl font-semibold hover:bg-white transition-transform hover:scale-105 active:scale-95">
<span>Analyze</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="2" width="18"></iconify-icon>
</button>
</div>
<div className="absolute top-full left-0 w-full mt-6 flex justify-between items-center opacity-40 px-4 text-xs font-mono text-[#00D1FF]">
<div className="flex gap-2 items-center">
<iconify-icon icon="lucide:activity" width="14"></iconify-icon>
<span>Market fit simulating...</span>
</div>
<div className="flex gap-2 items-center">
<iconify-icon icon="lucide:database" width="14"></iconify-icon>
<span>14M+ Data points</span>
</div>
<div className="flex gap-2 items-center">
<iconify-icon icon="lucide:globe" width="14"></iconify-icon>
<span>Global trends active</span>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Deep Intelligence</h2>
<p className="text-gray-400">Everything you need to validate before you build.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="glass-panel glass-panel-hover p-6 rounded-2xl transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center text-[#00D1FF] mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Practicality Analysis</h3>
<p className="text-sm text-gray-400 leading-relaxed">AI assesses logistical and operational feasibility based on current tech limitations.</p>
</div>
<div className="glass-panel glass-panel-hover p-6 rounded-2xl transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-[#A259FF]/10 flex items-center justify-center text-[#A259FF] mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:target" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Industry Fit Check</h3>
<p className="text-sm text-gray-400 leading-relaxed">Simulates your product in specific market sectors to predict adoption rates.</p>
</div>
<div className="glass-panel glass-panel-hover p-6 rounded-2xl transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Data-Driven Insights</h3>
<p className="text-sm text-gray-400 leading-relaxed">Authentic insights harvested from real-time financial databases and trend reports.</p>
</div>
<div className="glass-panel glass-panel-hover p-6 rounded-2xl transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:hammer" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Optimization</h3>
<p className="text-sm text-gray-400 leading-relaxed">Actionable suggestions to pivot features for higher probability of success.</p>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-[#0A0F1F] overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Comprehensive Result Formats</h2>
<p className="text-gray-400">Deep structured data to guide your decisions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

<div className="glass-panel p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-center">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-[#00D1FF]" icon="lucide:quote" width="24"></iconify-icon>
<h3 className="text-lg font-medium">Executive Verdict</h3>
</div>
<div className="p-6 bg-[#00D1FF]/5 rounded-xl border border-[#00D1FF]/10 backdrop-blur-sm">
<p className="text-base text-gray-200 leading-relaxed font-normal">
                            "While the concept shows promise in the <span className="text-white font-medium border-b border-[#00D1FF] pb-0.5">gig-economy sector</span>, current saturation requires a unique value proposition. We recommend pivoting to a B2B model initially to secure liquidity before opening to the general public."
                        </p>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-[#A259FF]" icon="lucide:share-2" width="24"></iconify-icon>
<h3 className="text-lg font-medium">Market Segmentation</h3>
</div>

<div className="flex-1 flex flex-col justify-center gap-4">

<div className="flex items-center gap-4">
<div className="w-24 text-right text-xs text-gray-500 font-mono">Total Market</div>
<div className="flex-1 h-8 rounded-lg bg-gray-800 border border-gray-700 relative overflow-hidden flex items-center">
<div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#A259FF]/20 to-transparent"></div>
<span className="ml-3 text-xs text-[#A259FF] font-medium">Global (100%)</span>
</div>
</div>

<div className="flex justify-center pl-24 -my-2 opacity-30">
<iconify-icon className="text-white" icon="lucide:arrow-down" width="16"></iconify-icon>
</div>

<div className="flex items-center gap-4">
<div className="w-24 text-right text-xs text-gray-500 font-mono">Serviceable</div>
<div className="flex-1 h-8 rounded-lg bg-gray-800 border border-gray-700 relative overflow-hidden flex items-center max-w-[80%]">
<div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#00D1FF]/20 to-transparent"></div>
<span className="ml-3 text-xs text-[#00D1FF] font-medium">North America (45%)</span>
</div>
</div>

<div className="flex justify-start pl-[140px] -my-2 opacity-30">
<iconify-icon className="text-white" icon="lucide:arrow-down" width="16"></iconify-icon>
</div>

<div className="flex items-center gap-4">
<div className="w-24 text-right text-xs text-gray-500 font-mono">Target</div>
<div className="flex-1 h-8 rounded-lg bg-gray-800 border border-gray-700 relative overflow-hidden flex items-center max-w-[50%]">
<div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-emerald-500/20 to-transparent"></div>
<span className="ml-3 text-xs text-emerald-400 font-medium">Urban Centers (12%)</span>
</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-emerald-400" icon="lucide:crosshair" width="24"></iconify-icon>
<h3 className="text-lg font-medium">Competitor Matrix</h3>
</div>
<div className="relative border-l border-b border-gray-700 h-48 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent">

<span className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-gray-500 uppercase tracking-widest">Price</span>
<span className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-[10px] text-gray-500 uppercase tracking-widest">Innovation</span>

<div className="absolute bottom-4 left-4 w-3 h-3 bg-gray-600 rounded-full hover:scale-150 transition-transform cursor-help" title="Legacy Inc"></div>
<div className="absolute top-8 right-1/3 w-3 h-3 bg-gray-600 rounded-full hover:scale-150 transition-transform cursor-help" title="Startup X"></div>
<div className="absolute top-1/2 left-1/2 w-3 h-3 bg-gray-600 rounded-full hover:scale-150 transition-transform cursor-help" title="Big Corp"></div>

<div className="absolute top-4 right-4 flex items-center gap-2">
<div className="w-4 h-4 bg-[#00D1FF] rounded-full animate-pulse shadow-[0_0_15px_#00D1FF]"></div>
<span className="text-xs font-bold text-[#00D1FF] bg-[#00D1FF]/10 px-1.5 py-0.5 rounded">YOU</span>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-orange-400" icon="lucide:layers" width="24"></iconify-icon>
<h3 className="text-lg font-medium">Recommended Stack</h3>
</div>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
<div className="w-10 h-10 rounded-lg bg-[#61DAFB]/10 flex items-center justify-center text-[#61DAFB] shrink-0">
<iconify-icon icon="lucide:app-window" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="text-sm font-medium text-white">Frontend</span>
<span className="text-xs text-emerald-400">High Match</span>
</div>
<div className="text-xs text-gray-500">React Native for cross-platform speed.</div>
</div>
</div>
<div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
<div className="w-10 h-10 rounded-lg bg-[#339933]/10 flex items-center justify-center text-[#339933] shrink-0">
<iconify-icon icon="lucide:server" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="text-sm font-medium text-white">Backend</span>
<span className="text-xs text-orange-400">Moderate Cost</span>
</div>
<div className="text-xs text-gray-500">Node.js + Supabase for real-time scale.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 bg-gradient-to-b from-[#0A0F1F] to-[#0f152a]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight">The Workspace</h2>
</div>

<div className="relative rounded-2xl border border-white/10 bg-[#0A0F1F] shadow-2xl overflow-hidden group">

<div className="absolute -inset-1 bg-gradient-to-r from-[#00D1FF] to-[#A259FF] rounded-2xl opacity-20 blur-xl"></div>

<div className="relative bg-white/5 border-b border-white/5 px-4 py-3 flex items-center gap-2">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
</div>
<div className="mx-auto bg-black/20 px-4 py-1 rounded-md text-xs text-gray-500 font-mono w-64 text-center">simulate.ai/project/fintech-v2</div>
</div>

<div className="relative bg-[#0b1021] flex h-[600px] overflow-hidden">

<div className="w-64 border-r border-white/5 flex flex-col hidden md:flex bg-[#050810]">
<div className="p-6">
<div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Project</div>
<div className="flex items-center gap-3 text-white font-medium mb-1">
<div className="w-6 h-6 rounded bg-[#00D1FF] flex items-center justify-center text-black text-xs">F</div>
                                FinTech App
                            </div>
</div>
<div className="flex-1 px-4 space-y-1">
<div className="flex items-center gap-3 px-3 py-2 bg-white/5 text-white rounded-lg text-sm">
<iconify-icon icon="lucide:layout-dashboard" width="16"></iconify-icon> Dashboard
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors">
<iconify-icon icon="lucide:bar-chart-2" width="16"></iconify-icon> Financials
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors">
<iconify-icon icon="lucide:users" width="16"></iconify-icon> Audience
                            </div>
</div>
<div className="p-4 border-t border-white/5">
<div className="bg-gradient-to-r from-[#00D1FF]/20 to-[#A259FF]/20 p-3 rounded-lg border border-[#00D1FF]/20">
<div className="text-xs text-[#00D1FF] font-medium mb-1">Credits Remaining</div>
<div className="w-full bg-black/50 h-1.5 rounded-full overflow-hidden">
<div className="bg-[#00D1FF] w-3/4 h-full"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-auto p-8 flex flex-col gap-6">

<div className="flex justify-between items-center">
<div>
<h2 className="text-xl font-semibold text-white">Full Simulation Report</h2>
<p className="text-xs text-gray-500">Analysis completed in 1.4s</p>
</div>
<button className="text-xs bg-[#00D1FF] text-[#0A0F1F] font-semibold px-3 py-1.5 rounded">Export PDF</button>
</div>

<div className="p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
<div className="flex items-center gap-2 mb-2 text-[#00D1FF]">
<iconify-icon icon="lucide:sparkles" width="16"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">AI Executive Summary</span>
</div>
<p className="text-sm text-gray-300 leading-relaxed">
                                The simulation suggests a strong fit for the current market cycle. While the initial customer acquisition cost is projected to be high ($45 avg), the <span className="text-white">viral loop coefficient of 1.2</span> indicates sustainable organic growth after month 4. We recommend prioritizing mobile-first features to capture the commuter demographic identified in the deep-dive.
                            </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full min-h-[250px]">

<div className="bg-[#0f152a] border border-white/5 rounded-xl p-5 flex flex-col items-center justify-center relative">
<h3 className="absolute top-5 left-5 text-xs font-medium text-gray-400">Budget Allocation</h3>
<div className="relative w-32 h-32 mt-4">
<svg className="transform -rotate-90" viewbox="0 0 100 100">

<circle cx="50" cy="50" fill="transparent" r="40" stroke="#A259FF" stroke-dasharray="126 251" strokeWidth="20"></circle>

<circle cx="50" cy="50" fill="transparent" r="40" stroke="#00D1FF" stroke-dasharray="75 251" stroke-dashoffset="-126" strokeWidth="20"></circle>

<circle cx="50" cy="50" fill="transparent" r="40" stroke="#334155" stroke-dasharray="50 251" stroke-dashoffset="-201" strokeWidth="20"></circle>
</svg>
</div>
<div className="flex gap-4 mt-6 text-[10px] text-gray-400">
<div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#A259FF]"></span> Marketing</div>
<div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#00D1FF]"></span> Dev</div>
<div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-700"></span> Ops</div>
</div>
</div>

<div className="bg-[#0f152a] border border-white/5 rounded-xl p-5 flex flex-col">
<h3 className="text-xs font-medium text-gray-400 mb-4">Viral Growth Loop</h3>
<div className="flex-1 flex flex-col items-center justify-center gap-2 relative">

<div className="flex items-center gap-2 w-full justify-center">
<div className="w-16 h-8 rounded bg-[#00D1FF]/10 border border-[#00D1FF] flex items-center justify-center text-[10px] text-[#00D1FF]">User</div>
</div>
<div className="h-4 w-px bg-gray-700"></div>
<div className="flex items-center gap-8 w-full justify-center">
<div className="w-16 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-gray-400">Invite</div>
<div className="w-16 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-gray-400">Share</div>
</div>
<div className="h-4 w-px bg-gray-700"></div>
<div className="flex items-center gap-2 w-full justify-center">
<div className="w-20 h-8 rounded bg-[#A259FF]/10 border border-[#A259FF] flex items-center justify-center text-[10px] text-[#A259FF]">+ New User</div>
</div>

<div className="absolute right-4 top-1/2 -translate-y-1/2">
<iconify-icon className="text-gray-600 opacity-20 rotate-90" icon="lucide:refresh-cw" width="64"></iconify-icon>
</div>
</div>
</div>

<div className="bg-[#0f152a] border border-white/5 rounded-xl p-5 flex flex-col">
<h3 className="text-xs font-medium text-gray-400 mb-4">Risk Heatmap</h3>
<div className="flex-1 grid grid-cols-2 gap-2">

<div className="bg-red-500/20 border border-red-500/30 rounded flex flex-col justify-center items-center p-2 text-center">
<span className="text-[10px] text-red-300">Legal</span>
<span className="text-xs font-bold text-red-400">High</span>
</div>
<div className="bg-emerald-500/10 border border-emerald-500/20 rounded flex flex-col justify-center items-center p-2 text-center">
<span className="text-[10px] text-emerald-300">Tech</span>
<span className="text-xs font-bold text-emerald-400">Low</span>
</div>
<div className="bg-orange-500/10 border border-orange-500/20 rounded flex flex-col justify-center items-center p-2 text-center">
<span className="text-[10px] text-orange-300">Market</span>
<span className="text-xs font-bold text-orange-400">Med</span>
</div>
<div className="bg-blue-500/10 border border-blue-500/20 rounded flex flex-col justify-center items-center p-2 text-center">
<span className="text-[10px] text-blue-300">Team</span>
<span className="text-xs font-bold text-blue-400">Low</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#050810] py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-[#00D1FF] to-[#A259FF] flex items-center justify-center text-[#0A0F1F]">
<iconify-icon icon="lucide:cpu" strokeWidth="2" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-white">SIMULATE.AI</span>
</div>
<div className="flex gap-8 text-sm text-gray-500">
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
<div className="text-xs text-gray-600">
                © 2024 StartupSim Inc. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
