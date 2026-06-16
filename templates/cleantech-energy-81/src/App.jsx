import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Orbitron', 'sans-serif'],
},
colors: {
navy: {
950: '#020617',
900: '#0f172a',
800: '#1e293b',
},
neon: {
green: '#10b981',
teal: '#14b8a6',
blue: '#0ea5e9',
}
},
animation: {
'aurora': 'aurora 10s infinite alternate',
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 7s ease-in-out 2s infinite',
'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'scan': 'scan 4s linear infinite',
},
keyframes: {
aurora: {
'0%': { backgroundPosition: '0% 50%' },
'100%': { backgroundPosition: '100% 50%' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-15px)' },
},
'pulse-glow': {
'0%, 100%': { opacity: '1' },
'50%': { opacity: '0.5' },
},
scan: {
'0%': { top: '0%' },
'100%': { top: '100%' },
}
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
      

<div className="fixed inset-0 z-0 pointer-events-none aurora-bg animate-aurora opacity-60"></div>
<div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 z-50"></div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="bento-card rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl shadow-black/50">
<span className="font-display font-semibold tracking-tighter text-white flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div> AURORA
            </span>
<div className="hidden md:flex gap-6 text-xs font-medium text-slate-400">
<a className="hover:text-emerald-400 transition-colors" href="#features">Platform</a>
<a className="hover:text-emerald-400 transition-colors" href="#impact">Impact</a>
<a className="hover:text-emerald-400 transition-colors" href="#roadmap">Future</a>
</div>
<button className="bg-white/5 hover:bg-emerald-500 hover:text-navy-950 text-white text-xs px-4 py-1.5 rounded-full transition-all duration-300 font-semibold border border-white/10 hover:border-transparent">
                Login
            </button>
</div>
</nav>

<section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden">

<div className="absolute inset-0 bg-grid z-0 pointer-events-none transform perspective-1000"></div>

<div className="hidden xl:block absolute left-[10%] top-1/3 w-64 bento-card rounded-2xl p-4 animate-float opacity-90 border-t border-l border-white/10 z-0">
<div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
<span className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">System Health</span>
<span className="text-[10px] text-emerald-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> ONLINE</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400">Solar Array A</span>
<span className="text-white font-mono">98%</span>
</div>
<div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-emerald-500 h-full w-[98%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
<div className="flex justify-between items-center text-xs mt-2">
<span className="text-slate-400">Wind Turbine B</span>
<span className="text-white font-mono">84%</span>
</div>
<div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-cyan-500 h-full w-[84%] shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
</div>
<div className="flex justify-between items-center text-xs mt-2">
<span className="text-slate-400">Grid Load</span>
<span className="text-white font-mono">42%</span>
</div>
<div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-purple-500 h-full w-[42%] shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
</div>
</div>
</div>

<div className="hidden xl:block absolute right-[10%] bottom-1/4 w-56 bento-card rounded-2xl p-4 animate-float-delayed opacity-90 border-t border-r border-white/10 z-0">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">Active Nodes</span>
<span className="iconify text-emerald-500" data-icon="lucide:activity" data-width="14"></span>
</div>
<div className="relative h-32 w-full bg-slate-900/50 rounded-lg border border-white/5 overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 opacity-20">
<div className="bg-emerald-500/20 rounded-sm"></div><div className="bg-emerald-500/10 rounded-sm"></div><div className="bg-emerald-500/30 rounded-sm"></div><div className="bg-emerald-500/5 rounded-sm"></div>
<div className="bg-emerald-500/10 rounded-sm"></div><div className="bg-emerald-500/40 rounded-sm"></div><div className="bg-emerald-500/10 rounded-sm"></div><div className="bg-emerald-500/20 rounded-sm"></div>
<div className="bg-emerald-500/5 rounded-sm"></div><div className="bg-emerald-500/20 rounded-sm"></div><div className="bg-emerald-500/60 rounded-sm"></div><div className="bg-emerald-500/10 rounded-sm"></div>
</div>

<div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-scan top-0 opacity-50"></div>
<div className="relative z-10 flex flex-col items-center">
<span className="font-display text-2xl font-bold text-white tracking-tighter">1,420</span>
<span className="text-[9px] text-slate-500">CONNECTED</span>
</div>
</div>
</div>

<div className="space-y-8 max-w-4xl mx-auto relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/30 text-emerald-400 text-xs font-medium tracking-wide animate-float backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.2)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                NEXT GEN CLEANTECH
            </div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9] md:leading-[0.85]">
                AURORA <br/>
<span className="gradient-text text-glow relative inline-block">
                    RENEWABLES
                    
<svg className="absolute -top-6 -right-8 w-12 h-12 text-emerald-500/30 animate-spin-slow hidden md:block" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v20"></path><path d="M2 12h20"></path></svg>
</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
                Orchestrating the world's energy transition through decentralized smart-grids and AI-driven distribution.
            </p>
<div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
<button className="group relative px-8 py-4 bg-white text-navy-950 font-display font-semibold tracking-tight rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] min-w-[160px]">
<span className="relative flex items-center justify-center gap-2 z-10">
                        GET STARTED
                    </span>
</button>
<button className="group px-8 py-4 bg-white/5 border border-white/10 text-white font-display font-semibold tracking-tight rounded-full transition-all hover:bg-white/10 hover:border-white/20 min-w-[160px] flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="18"></span> DEMO
                </button>
</div>
</div>

<div className="absolute bottom-10 animate-bounce text-slate-600">
<span className="iconify" data-icon="lucide:chevrons-down" data-width="24"></span>
</div>
</section>

<section className="relative z-10 px-4 py-20 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bento-card rounded-3xl p-8 flex flex-col items-start justify-between group h-48 hover:bg-emerald-900/10">
<span className="iconify text-emerald-400 group-hover:text-emerald-300 transition-colors" data-icon="lucide:leaf" data-width="32"></span>
<div>
<h3 className="font-display text-2xl font-semibold text-white tracking-tight">Zero Emissions</h3>
<p className="text-sm text-slate-500 mt-1">Carbon-neutral infrastructure.</p>
</div>
</div>
<div className="bento-card rounded-3xl p-8 flex flex-col items-start justify-between group h-48 md:col-span-2 bg-gradient-to-br from-emerald-950/30 to-navy-900/30 border-emerald-500/20 relative overflow-hidden">

<svg className="absolute bottom-0 left-0 w-full h-24 opacity-10 pointer-events-none" preserveaspectratio="none" viewbox="0 0 400 100">
<path d="M0,80 C50,90 100,20 150,40 C200,60 250,10 300,50 C350,90 400,30 400,30 L400,100 L0,100 Z" fill="url(#grad1)"></path>
<defs><lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%"><stop offset="0%" style={{stopColor: 'rgb(16,185,129)', stopOpacity: '1'}}></stop><stop offset="100%" style={{stopColor: 'rgb(2,6,23)', stopOpacity: '1'}}></stop></lineargradient></defs>
</svg>
<div className="flex justify-between w-full relative z-10">
<span className="iconify text-cyan-400 animate-pulse" data-icon="lucide:zap" data-width="32"></span>
<span className="iconify text-slate-600" data-icon="lucide:arrow-up-right" data-width="24"></span>
</div>
<div className="relative z-10">
<h3 className="font-display text-2xl font-semibold text-white tracking-tight">Renewable Innovation</h3>
<p className="text-sm text-slate-500 mt-1">AI-driven energy grid optimization &amp; distribution.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-4 py-20 max-w-7xl mx-auto" id="features">
<h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-10 text-center">CORE TECHNOLOGY</h2>
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 auto-rows-[200px]">

<div className="bento-card rounded-3xl p-6 md:col-span-2 md:row-span-2 flex flex-col justify-between group relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all"></div>
<div className="absolute inset-0 bg-[url('https://api.iconify.design/lucide:sun.svg?color=%23fb923c&amp;width=200')] opacity-5 -right-10 -bottom-10 bg-no-repeat bg-right-bottom transition-opacity group-hover:opacity-10"></div>
<span className="iconify text-orange-400" data-icon="lucide:sun" data-width="40"></span>
<div>
<h3 className="font-display text-2xl font-semibold text-white tracking-tight">Solar Integration</h3>
<p className="text-sm text-slate-400 mt-2">Photovoltaic sphere optimization algorithms.</p>
</div>
</div>

<div className="bento-card rounded-3xl p-6 md:col-span-1 md:row-span-2 flex flex-col justify-between group">
<span className="iconify text-cyan-400 group-hover:rotate-[360deg] transition-transform duration-[3000ms] linear" data-icon="lucide:wind" data-width="40"></span>
<div>
<h3 className="font-display text-xl font-semibold text-white tracking-tight">Wind Turbine</h3>
<p className="text-xs text-slate-400 mt-1">Vortex dynamics.</p>
</div>
</div>

<div className="bento-card rounded-3xl p-6 md:col-span-1 flex flex-col justify-between group hover:border-emerald-500/50">
<span className="iconify text-emerald-400" data-icon="lucide:bar-chart-2" data-width="32"></span>
<h3 className="font-display text-lg font-semibold text-white tracking-tight">Carbon Track</h3>
</div>

<div className="bento-card rounded-3xl p-6 md:col-span-1 flex flex-col justify-between group hover:border-violet-500/50">
<span className="iconify text-violet-400" data-icon="lucide:battery-charging" data-width="32"></span>
<h3 className="font-display text-lg font-semibold text-white tracking-tight">Storage</h3>
</div>

<div className="bento-card rounded-3xl p-6 md:col-span-2 flex items-center justify-between group hover:bg-white/5 cursor-pointer">
<div className="flex items-center gap-4">
<span className="iconify text-blue-400" data-icon="lucide:network" data-width="32"></span>
<div>
<h3 className="font-display text-lg font-semibold text-white tracking-tight">Smart Grids</h3>
<p className="text-xs text-slate-400">Decentralized nodes.</p>
</div>
</div>
<span className="iconify text-slate-600 group-hover:translate-x-1 transition-transform" data-icon="lucide:chevron-right"></span>
</div>

<div className="bento-card rounded-3xl p-6 md:col-span-1 flex flex-col justify-between group hover:border-teal-500/50">
<span className="iconify text-teal-400" data-icon="lucide:waves" data-width="32"></span>
<h3 className="font-display text-lg font-semibold text-white tracking-tight">Hydrogen</h3>
</div>

<div className="bento-card rounded-3xl p-6 md:col-span-1 flex flex-col justify-between group hover:border-yellow-500/50">
<span className="iconify text-yellow-400" data-icon="lucide:zap" data-width="32"></span>
<h3 className="font-display text-lg font-semibold text-white tracking-tight">EV Infra</h3>
</div>
</div>
</section>

<section className="relative z-10 px-4 py-20 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="bento-card rounded-2xl p-6 text-center group">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors text-slate-400">
<span className="iconify" data-icon="lucide:scan-search"></span>
</div>
<h4 className="font-display text-sm font-semibold text-white">1. Assess Needs</h4>
</div>
<div className="bento-card rounded-2xl p-6 text-center group">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors text-slate-400">
<span className="iconify" data-icon="lucide:drafting-compass"></span>
</div>
<h4 className="font-display text-sm font-semibold text-white">2. Design System</h4>
</div>
<div className="bento-card rounded-2xl p-6 text-center group">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors text-slate-400">
<span className="iconify" data-icon="lucide:hammer"></span>
</div>
<h4 className="font-display text-sm font-semibold text-white">3. Install &amp; Optimize</h4>
</div>
<div className="bento-card rounded-2xl p-6 text-center group">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors text-slate-400">
<span className="iconify" data-icon="lucide:activity"></span>
</div>
<h4 className="font-display text-sm font-semibold text-white">4. Monitor Impact</h4>
</div>
</div>
</section>

<section className="relative z-10 px-4 py-20 max-w-7xl mx-auto" id="impact">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bento-card rounded-3xl p-6 flex flex-col items-center justify-center text-center py-12 border-emerald-500/30 bg-emerald-950/20">
<span className="font-display text-3xl md:text-5xl font-bold gradient-text mb-2">1GW+</span>
<span className="text-xs uppercase tracking-widest text-emerald-400/70">Generated</span>
</div>
<div className="bento-card rounded-3xl p-6 flex flex-col items-center justify-center text-center py-12">
<span className="font-display text-3xl md:text-5xl font-bold text-white mb-2">500K</span>
<span className="text-xs uppercase tracking-widest text-slate-500">Tons CO2 Saved</span>
</div>
<div className="bento-card rounded-3xl p-6 flex flex-col items-center justify-center text-center py-12">
<span className="font-display text-3xl md:text-5xl font-bold text-white mb-2">10K+</span>
<span className="text-xs uppercase tracking-widest text-slate-500">Projects</span>
</div>
<div className="bento-card rounded-3xl p-6 flex flex-col items-center justify-center text-center py-12">
<span className="font-display text-3xl md:text-5xl font-bold text-emerald-400 mb-2">High</span>
<span className="text-xs uppercase tracking-widest text-slate-500">ROI Yields</span>
</div>
</div>
</section>

<section className="relative z-10 px-4 py-20 max-w-7xl mx-auto overflow-hidden" id="roadmap">
<h2 className="font-display text-3xl font-semibold text-white tracking-tighter mb-8">SYSTEM ROADMAP</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
<div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent hidden md:block -z-10"></div>
<div className="bento-card rounded-2xl p-6 relative group hover:bg-white/5">
<div className="w-3 h-3 bg-emerald-500 rounded-full mb-4 shadow-[0_0_10px_rgba(16,185,129,0.8)] border border-emerald-300"></div>
<span className="text-xs text-emerald-400 font-mono mb-1 block">Q1 2024</span>
<h3 className="font-display text-lg font-semibold text-white">Solar Launch</h3>
</div>
<div className="bento-card rounded-2xl p-6 relative group hover:bg-white/5">
<div className="w-3 h-3 bg-slate-600 group-hover:bg-cyan-400 rounded-full mb-4 transition-colors"></div>
<span className="text-xs text-slate-400 font-mono mb-1 block">Q2 2024</span>
<h3 className="font-display text-lg font-semibold text-white">Wind Partners</h3>
</div>
<div className="bento-card rounded-2xl p-6 relative group hover:bg-white/5">
<div className="w-3 h-3 bg-slate-600 group-hover:bg-cyan-400 rounded-full mb-4 transition-colors"></div>
<span className="text-xs text-slate-400 font-mono mb-1 block">Q3 2024</span>
<h3 className="font-display text-lg font-semibold text-white">Global Scale</h3>
</div>
<div className="bento-card rounded-2xl p-6 relative group hover:bg-white/5">
<div className="w-3 h-3 bg-slate-600 group-hover:bg-cyan-400 rounded-full mb-4 transition-colors"></div>
<span className="text-xs text-slate-400 font-mono mb-1 block">Q4 2024</span>
<h3 className="font-display text-lg font-semibold text-white">Net-Zero Tools</h3>
</div>
</div>
</section>

<section className="relative z-10 px-4 py-20 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="bento-card rounded-3xl p-8 hover:bg-white/5 transition-colors">
<span className="iconify text-emerald-500 mb-4" data-icon="lucide:quote" data-width="24"></span>
<h3 className="font-display text-xl font-medium text-white mb-4 leading-snug">"Transformed Our Energy Infrastructure completely."</h3>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-blue-500"></div>
<div>
<p className="text-sm text-white font-medium">Sarah Jenkins</p>
<p className="text-xs text-slate-400">Tech Corp, CTO</p>
</div>
</div>
</div>
<div className="bento-card rounded-3xl p-8 hover:bg-white/5 transition-colors">
<span className="iconify text-emerald-500 mb-4" data-icon="lucide:quote" data-width="24"></span>
<h3 className="font-display text-xl font-medium text-white mb-4 leading-snug">"Sustainable, efficient, and surprisingly high ROI."</h3>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-pink-500"></div>
<div>
<p className="text-sm text-white font-medium">Marcus Chen</p>
<p className="text-xs text-slate-400">GreenLogistics, Ops</p>
</div>
</div>
</div>
<div className="bento-card rounded-3xl p-8 md:col-span-2 lg:col-span-1 hover:bg-white/5 transition-colors">
<span className="iconify text-emerald-500 mb-4" data-icon="lucide:quote" data-width="24"></span>
<h3 className="font-display text-xl font-medium text-white mb-4 leading-snug">"The smartest grid management tool on the market."</h3>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-red-500"></div>
<div>
<p className="text-sm text-white font-medium">Elena Rodriguez</p>
<p className="text-xs text-slate-400">Ventures, Partner</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-4 py-10 max-w-7xl mx-auto">
<div className="bento-card rounded-3xl p-8">
<p className="text-center text-xs font-mono text-emerald-500 mb-6 uppercase tracking-widest">Trusted Allies in Green Tech</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="font-display text-xl font-bold text-white flex items-center gap-2"><span className="iconify" data-icon="lucide:hexagon"></span>SIEMENS</span>
<span className="font-display text-xl font-bold text-white flex items-center gap-2"><span className="iconify" data-icon="lucide:triangle"></span>TESLA</span>
<span className="font-display text-xl font-bold text-white flex items-center gap-2"><span className="iconify" data-icon="lucide:circle"></span>ORSTED</span>
<span className="font-display text-xl font-bold text-white flex items-center gap-2"><span className="iconify" data-icon="lucide:square"></span>VESTAS</span>
</div>
</div>
</section>

<section className="relative z-10 px-4 py-20 max-w-3xl mx-auto">
<h2 className="font-display text-2xl font-semibold text-white mb-6 text-center">FAQ</h2>
<div className="space-y-4">
<details className="bento-card rounded-2xl group">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-display font-medium text-white">What is CleanTech?</span>
<span className="iconify text-slate-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 border-t border-slate-800 pt-4 mt-2">
                    Technology that reduces environmental impact through renewable energy efficiency. We focus on optimizing existing grids.
                </div>
</details>
<details className="bento-card rounded-2xl group">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-display font-medium text-white">How do we integrate?</span>
<span className="iconify text-slate-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 border-t border-slate-800 pt-4 mt-2">
                    Seamless API integration with existing energy infrastructure nodes. Our hardware sensors plug directly into standard meters.
                </div>
</details>
<details className="bento-card rounded-2xl group">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-display font-medium text-white">Is it scalable?</span>
<span className="iconify text-slate-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 border-t border-slate-800 pt-4 mt-2">
                    Modular design ensures infinite scalability for enterprise needs. From single buildings to entire cities.
                </div>
</details>
</div>
</section>

<section className="relative z-10 py-32 px-4 text-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-navy-950 pointer-events-none"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto space-y-8">
<h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tighter">JOIN THE GREEN REVOLUTION</h2>
<form className="space-y-4 max-w-sm mx-auto relative">
<input className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Enter your email" type="email"/>
<button className="w-full bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-display font-bold py-3 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all transform hover:scale-[1.02]" type="button">
                    CONTACT US
                </button>
</form>
</div>
</section>

<footer className="relative z-10 border-t border-slate-800 bg-navy-950 py-12 px-4">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-emerald-500"></div>
<span className="font-display font-bold text-xl text-white tracking-tight">AURORA</span>
</div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-emerald-400 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-slate-500 hover:text-emerald-400 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="text-slate-500 hover:text-emerald-400 transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="20"></span></a>
</div>
<div className="text-xs text-slate-600 font-mono">
                © 2024 Aurora Renewables.
            </div>
</div>
</footer>

    </>
  );
}
