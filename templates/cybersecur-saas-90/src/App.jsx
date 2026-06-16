import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-glow-top"></div>
<div className="fixed inset-0 bg-grid z-0 opacity-40 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="font-medium tracking-tight text-sm flex items-center gap-2 z-10">
<div className="w-5 h-5 rounded-[5px] bg-gradient-to-b from-white to-white/70 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.2)]">
<iconify-icon className="text-black text-xs" icon="solar:shield-keyhole-bold"></iconify-icon>
</div>
                SECURECODE
            </div>
<div className="hidden md:flex gap-8 text-xs font-medium text-white/50 z-10">
<a className="hover:text-white transition-colors" href="#platform">Platform Architecture</a>
<a className="hover:text-white transition-colors" href="#pipeline">Security Pipeline</a>
<a className="hover:text-white transition-colors" href="#outcomes">Data Outcomes</a>
</div>
<div className="flex items-center gap-4 z-10">
<button className="text-xs font-medium bg-white text-black px-4 py-1.5 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                    Initialize
                </button>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
<div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
<a className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/50 backdrop-blur-md hover:bg-white/5 transition-colors mb-10 group relative overflow-hidden" href="#">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
</span>
<span className="text-xs font-medium text-white/80 group-hover:text-white transition-colors">Engine 2.0 Live Architecture <span className="text-white/40 ml-1">→</span></span>
</a>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-tight text-gradient mb-6 max-w-4xl mx-auto">
                Visualizing security native<br/>to your infrastructure.
            </h1>
<p className="text-sm md:text-base text-white/50 font-normal max-w-xl mx-auto mb-16 leading-relaxed">
                Continuous mapping, discrete scanning, and intelligent nodes resolving vulnerabilities before deployment.
            </p>

<div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center mt-10">

<div className="relative z-20 animate-float">
<div className="w-64 md:w-80 premium-card rounded-2xl p-4 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
<div className="flex items-center justify-between border-b border-white/5 pb-3 mb-3">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
<span className="text-xs font-mono text-white/80">Main Branch Scanned</span>
</div>
<span className="text-xs font-mono text-white/40">12ms</span>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-white/80 w-[100%]"></div></div>
<div className="h-1.5 w-[80%] bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-white/60 w-[100%]"></div></div>
<div className="h-1.5 w-[90%] bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-white/40 w-[100%]"></div></div>
</div>
<div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center">
<span className="text-xs text-white/50">Vulnerabilities</span>
<span className="text-xs font-mono text-white bg-white/10 px-2 py-0.5 rounded-md">0 detected</span>
</div>
</div>
</div>

<div className="absolute left-[5%] md:left-[15%] top-[10%] z-10 animate-float-delayed hidden sm:block">
<div className="premium-card rounded-xl p-3 border border-white/10 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
<iconify-icon className="text-white/80" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">Dependency Graph</div>
<div className="text-xs font-mono text-green-400">Secure</div>
</div>
</div>
</div>

<div className="absolute right-[5%] md:right-[15%] bottom-[20%] z-30 animate-float hidden sm:block" style={{animationDelay: '1s'}}>
<div className="premium-card rounded-xl p-3 border border-white/10 flex flex-col gap-2 w-48">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-white">AI Provenance</span>
<iconify-icon className="text-white/40 text-xs" icon="solar:cpu-linear"></iconify-icon>
</div>
<div className="flex gap-1">
<div className="h-1 flex-1 bg-green-400/80 rounded-full"></div>
<div className="h-1 flex-1 bg-green-400/80 rounded-full"></div>
<div className="h-1 flex-1 bg-green-400/80 rounded-full"></div>
<div className="h-1 flex-1 bg-white/20 rounded-full"></div>
</div>
<div className="text-xs font-mono text-white/40 mt-1">Trust Score: 98%</div>
</div>
</div>

<div className="absolute top-1/2 left-1/4 w-1/4 h-px bg-gradient-to-r from-transparent to-white/20 hidden sm:block"></div>
<div className="absolute top-1/2 right-1/4 w-1/4 h-px bg-gradient-to-l from-transparent to-white/20 hidden sm:block"></div>
<div className="absolute top-1/4 left-1/3 w-px h-1/4 bg-gradient-to-b from-transparent to-white/20 hidden sm:block"></div>

<div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-white/5 flex items-center justify-center animate-pulse-slow z-0">
<div className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full border border-white/10"></div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-black/40 backdrop-blur-xl relative z-20">
<div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">

<div className="p-6 md:p-10 flex flex-col gap-4 group">
<div className="flex justify-between items-end">
<div className="text-2xl md:text-3xl font-medium tracking-tighter text-white">68%</div>
<div className="flex items-end gap-1 h-6">
<div className="w-1.5 bg-white/10 h-[30%] rounded-t-sm group-hover:h-[40%] transition-all"></div>
<div className="w-1.5 bg-white/20 h-[50%] rounded-t-sm group-hover:h-[60%] transition-all"></div>
<div className="w-1.5 bg-white/40 h-[70%] rounded-t-sm group-hover:h-[80%] transition-all"></div>
<div className="w-1.5 bg-white h-[100%] rounded-t-sm"></div>
</div>
</div>
<div className="text-xs font-medium text-white/40 tracking-wide">Threat Reduction</div>
</div>

<div className="p-6 md:p-10 flex flex-col gap-4 group">
<div className="flex justify-between items-end">
<div className="text-2xl md:text-3xl font-medium tracking-tighter text-white">10x</div>
<div className="relative w-12 h-6 flex items-center">
<div className="absolute w-full h-px bg-white/20"></div>
<div className="absolute right-0 w-8 h-px bg-white shadow-[0_0_5px_white] translate-x-2 group-hover:translate-x-0 transition-transform"></div>
</div>
</div>
<div className="text-xs font-medium text-white/40 tracking-wide">Remediation Speed</div>
</div>

<div className="p-6 md:p-10 flex flex-col gap-4 group">
<div className="flex justify-between items-end">
<div className="text-2xl md:text-3xl font-medium tracking-tighter text-white">Zero</div>
<div className="flex items-center gap-1">
<div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors"></div>
<div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white/60 transition-colors"></div>
<div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]"></div>
</div>
</div>
<div className="text-xs font-medium text-white/40 tracking-wide">Context Switching</div>
</div>

<div className="p-6 md:p-10 flex flex-col gap-4 group">
<div className="flex justify-between items-end">
<div className="text-2xl md:text-3xl font-medium tracking-tighter text-white">99.9%</div>

<div className="w-6 h-6 rounded-full border-2 border-white/20 border-t-white border-r-white transform rotate-45 group-hover:rotate-[225deg] transition-all duration-700"></div>
</div>
<div className="text-xs font-medium text-white/40 tracking-wide">Signal to Noise</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10" id="pipeline">
<div className="max-w-6xl mx-auto">
<div className="mb-20 text-center flex flex-col items-center">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 mb-6">
<iconify-icon className="text-white text-lg" icon="solar:routing-linear"></iconify-icon>
</div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-gradient mb-4">Autonomous Pipeline Architecture</h2>
</div>

<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-[40%] left-[10%] right-[10%] h-px bg-white/10 z-0"></div>
<div className="hidden md:block absolute top-[40%] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white to-transparent z-0 opacity-50 w-1/3 animate-[scanline_3s_linear_infinite] origin-left" style={{animationName: 'slide', animationDuration: '3s', animationIterationCount: 'infinite'}}>
<style>
                        @keyframes slide {
                            0% { transform: translateX(-100%); }
                            100% { transform: translateX(300%); }
                        }
                    </style>
</div>

<div className="premium-card p-6 rounded-2xl relative z-10 flex flex-col h-full items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.05)] relative z-20">
<iconify-icon className="text-white text-2xl" icon="solar:scanner-linear"></iconify-icon>
</div>

<div className="w-full bg-black/50 border border-white/5 rounded-lg p-3 mb-6">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-mono text-white/40">Discovery</span>
<span className="w-2 h-2 rounded-full bg-blue-400/50 animate-pulse"></span>
</div>
<div className="space-y-1">
<div className="h-1 bg-white/10 w-full rounded-full"></div>
<div className="h-1 bg-white/10 w-4/5 rounded-full"></div>
<div className="h-1 bg-white/10 w-5/6 rounded-full"></div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-2">1. Deep Mapping</h3>
<p className="text-xs text-white/40 leading-relaxed">Full codebase and asset visibility across all environments.</p>
</div>

<div className="premium-card p-6 rounded-2xl relative z-10 flex flex-col h-full items-center text-center mt-0 md:mt-12">
<div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.05)] relative z-20">
<iconify-icon className="text-white text-2xl" icon="solar:code-scan-linear"></iconify-icon>
</div>

<div className="w-full bg-black/50 border border-white/5 rounded-lg p-3 mb-6 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[2px] bg-white/40 animate-scan shadow-[0_0_8px_white]"></div>
<div className="flex flex-col gap-1.5 text-left">
<div className="text-xs font-mono text-white/30">&gt; analyze PR</div>
<div className="text-xs font-mono text-white/70">finding issue...</div>
<div className="text-xs font-mono text-green-400">auto-remediated</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-2">2. Inline Neutralization</h3>
<p className="text-xs text-white/40 leading-relaxed">Security implemented natively via PR annotations &amp; IDE.</p>
</div>

<div className="premium-card p-6 rounded-2xl relative z-10 flex flex-col h-full items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.05)] relative z-20">
<iconify-icon className="text-white text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>

<div className="w-full bg-black/50 border border-white/5 rounded-lg p-3 mb-6 flex items-end justify-center gap-2 h-20">
<div className="w-3 bg-white/20 h-[40%] rounded-t-sm"></div>
<div className="w-3 bg-white/30 h-[60%] rounded-t-sm"></div>
<div className="w-3 bg-white/50 h-[80%] rounded-t-sm"></div>
<div className="w-3 bg-white h-[100%] rounded-t-sm relative">
<div className="absolute -top-4 -left-1 text-xs font-mono text-white">A+</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-2">3. Posture Trust</h3>
<p className="text-xs text-white/40 leading-relaxed">Audit-ready scoring translating technicals to business metrics.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="platform">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.015] rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-white mb-4">Five Layers of Defense</h2>
<p className="text-sm text-white/50 font-normal max-w-lg">A discrete intelligence stack securing your supply chain from local environment to cloud deployment.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="premium-card rounded-2xl md:col-span-2 group flex flex-col">
<div className="p-8 pb-0">
<div className="flex justify-between items-start mb-6">
<h4 className="text-sm font-medium text-white">Repository Intelligence</h4>
<span className="text-xs font-mono text-white/30 group-hover:text-white/60 transition-colors">01</span>
</div>
<p className="text-xs text-white/40 font-normal max-w-sm mb-8">Deep contextual mapping across all source control environments. Analyzing architecture, not just syntax.</p>
</div>

<div className="relative flex-grow min-h-[200px] bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center p-8 overflow-hidden rounded-b-2xl">

<div className="flex flex-col items-center relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<iconify-icon className="text-white/80" icon="solar:folder-bold-duotone"></iconify-icon>
</div>
<div className="w-px h-6 bg-white/20"></div>
<div className="w-64 h-px bg-white/20"></div>
<div className="flex justify-between w-64 pt-6 relative">
<div className="absolute top-0 left-0 w-px h-6 bg-white/20"></div>
<div className="absolute top-0 left-1/2 w-px h-6 bg-white/20"></div>
<div className="absolute top-0 right-0 w-px h-6 bg-white/20"></div>
<div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center"><iconify-icon className="text-white/40 text-xs" icon="solar:document-text-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center"><iconify-icon className="text-white/40 text-xs" icon="solar:code-file-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded bg-white/10 border border-white/30 flex items-center justify-center relative">
<div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></div>
<iconify-icon className="text-white text-xs" icon="solar:key-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="premium-card rounded-2xl group flex flex-col">
<div className="p-8 pb-0">
<div className="flex justify-between items-start mb-6">
<h4 className="text-sm font-medium text-white">ScanOps Engine</h4>
<span className="text-xs font-mono text-white/30">02</span>
</div>
</div>

<div className="relative flex-grow min-h-[200px] flex items-center justify-center p-6 mt-4">
<div className="w-full h-full border border-white/5 rounded-xl bg-black/60 relative overflow-hidden flex flex-col p-4 gap-2">
<div className="w-full h-2 bg-white/5 rounded-full"></div>
<div className="w-3/4 h-2 bg-white/5 rounded-full"></div>
<div className="w-5/6 h-2 bg-white/5 rounded-full"></div>
<div className="w-1/2 h-2 bg-white/5 rounded-full"></div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-1/2 animate-scan"></div>
</div>
</div>
</div>

<div className="premium-card rounded-2xl group flex flex-col">
<div className="p-8 pb-0">
<div className="flex justify-between items-start mb-6">
<h4 className="text-sm font-medium text-white">Secret Detection</h4>
<span className="text-xs font-mono text-white/30">03</span>
</div>
</div>

<div className="relative flex-grow min-h-[160px] flex items-center justify-center p-6">
<div className="bg-black/80 border border-white/10 rounded-lg p-4 w-full font-mono text-xs text-white/40 leading-loose">
<div>const AWS_KEY = </div>
<div className="inline-block bg-red-500/20 border border-red-500/50 text-red-300 px-1 rounded relative group-hover:bg-red-500/40 transition-colors">
                                'AKIAIOSFODNN7EXAMPLE'
                                
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-red-500 text-white text-[10px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Blocked Commit</div>
</div>
<div>;</div>
</div>
</div>
</div>

<div className="premium-card rounded-2xl group flex flex-col">
<div className="p-8 pb-0">
<div className="flex justify-between items-start mb-6">
<h4 className="text-sm font-medium text-white">AI Provenance</h4>
<span className="text-xs font-mono text-white/30">04</span>
</div>
</div>

<div className="relative flex-grow min-h-[160px] flex items-center justify-center p-6">
<div className="flex items-center gap-3 relative w-full justify-center">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center z-10"><iconify-icon className="text-white/50" icon="solar:cpu-linear"></iconify-icon></div>
<div className="flex-grow h-px bg-gradient-to-r from-white/20 to-white/60 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border border-white/30 flex items-center justify-center">
<iconify-icon className="text-[8px] text-white" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-white/10 border border-white/30 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)] z-10"><iconify-icon className="text-white" icon="solar:code-circle-linear"></iconify-icon></div>
</div>
</div>
</div>

<div className="premium-card rounded-2xl group flex flex-col">
<div className="p-8 pb-0">
<div className="flex justify-between items-start mb-6">
<h4 className="text-sm font-medium text-white">SBOM Supply Chain</h4>
<span className="text-xs font-mono text-white/30">05</span>
</div>
</div>

<div className="relative flex-grow min-h-[160px] flex items-center justify-center p-6 mt-4">

<div className="relative w-32 h-24 transform-gpu hover:scale-105 transition-transform duration-500">
<div className="absolute bottom-0 w-full h-12 bg-white/5 border border-white/10 rounded-xl transform -translate-y-0 rotate-[-10deg] skew-x-[20deg]"></div>
<div className="absolute bottom-4 w-full h-12 bg-white/10 border border-white/20 rounded-xl transform -translate-y-2 rotate-[-10deg] skew-x-[20deg] backdrop-blur-sm"></div>
<div className="absolute bottom-8 w-full h-12 bg-white/15 border border-white/30 rounded-xl transform -translate-y-4 rotate-[-10deg] skew-x-[20deg] backdrop-blur-md flex items-center justify-center">
<span className="text-[10px] font-mono text-white/80 absolute transform skew-x-[-20deg] rotate-[10deg]">v2.4.1</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/5 overflow-hidden bg-black/30">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
<h2 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-12 flex items-center gap-4 before:h-px before:w-12 before:bg-white/10 after:h-px after:w-12 after:bg-white/10">Enterprise Topology</h2>
<div className="relative w-full max-w-lg mx-auto flex flex-wrap justify-center gap-3">
<div className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-xs font-medium text-white/60 hover:bg-white/[0.08] hover:text-white transition-all cursor-default shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">Security Architects</div>
<div className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-xs font-medium text-white/60 hover:bg-white/[0.08] hover:text-white transition-all cursor-default shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">DevSecOps</div>
<div className="px-5 py-2 rounded-full border border-white/20 bg-white/[0.05] text-xs font-medium text-white hover:bg-white/[0.1] transition-all cursor-default shadow-[0_0_15px_rgba(255,255,255,0.05)]">CISO Dashboards</div>
<div className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-xs font-medium text-white/60 hover:bg-white/[0.08] hover:text-white transition-all cursor-default shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">CTOs</div>
<div className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-xs font-medium text-white/60 hover:bg-white/[0.08] hover:text-white transition-all cursor-default shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">FinTech Core Teams</div>
<div className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-xs font-medium text-white/60 hover:bg-white/[0.08] hover:text-white transition-all cursor-default shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">AI Startups</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-y border-white/5 relative bg-black/60" id="outcomes">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-white mb-4">Metric Outcomes</h2>
<p className="text-sm text-white/50 font-normal max-w-md">Translating continuous technical analysis into definitive business value.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="premium-card p-6 rounded-2xl flex flex-col justify-between h-48 group">
<div className="flex justify-between items-start">
<div className="text-xs font-medium text-white/60">Breach Probability</div>
<iconify-icon className="text-white/30 text-lg group-hover:text-white/80 transition-colors" icon="solar:graph-down-linear"></iconify-icon>
</div>
<div>
<div className="text-2xl font-medium text-white mb-1">-84%</div>

<div className="w-full h-6 relative mt-2 opacity-50">
<div className="absolute bottom-0 left-0 w-1/4 h-full border-t border-white/40"></div>
<div className="absolute bottom-0 left-1/4 w-1/4 h-3/4 border-t border-white/40 border-l"></div>
<div className="absolute bottom-0 left-2/4 w-1/4 h-1/2 border-t border-white/40 border-l"></div>
<div className="absolute bottom-0 left-3/4 w-1/4 h-1/4 border-t border-white border-l shadow-[0_-5px_10px_rgba(255,255,255,0.2)]"></div>
</div>
</div>
</div>

<div className="premium-card p-6 rounded-2xl flex flex-col justify-between h-48 group">
<div className="flex justify-between items-start">
<div className="text-xs font-medium text-white/60">Remediation Speed</div>
<iconify-icon className="text-white/30 text-lg group-hover:text-white/80 transition-colors" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-2xl font-medium text-white mb-1"><span className="text-sm text-white/50 mr-1">TTR</span>1.2h</div>
<div className="w-full bg-white/5 h-1.5 rounded-full mt-4 overflow-hidden relative">
<div className="absolute top-0 left-0 h-full w-[15%] bg-white rounded-full"></div>
</div>
<div className="text-[10px] text-white/30 mt-1 text-right">Industry Avg: 12h</div>
</div>
</div>

<div className="premium-card p-6 rounded-2xl flex flex-col justify-between h-48 group">
<div className="flex justify-between items-start">
<div className="text-xs font-medium text-white/60">Audit Readiness</div>
<iconify-icon className="text-white/30 text-lg group-hover:text-white/80 transition-colors" icon="solar:shield-check-bold-duotone"></iconify-icon>
</div>
<div>
<div className="text-2xl font-medium text-white mb-1">SOC2</div>
<div className="flex gap-1 mt-3">
<div className="flex-1 h-1 rounded-full bg-green-400/80"></div>
<div className="flex-1 h-1 rounded-full bg-green-400/80"></div>
<div className="flex-1 h-1 rounded-full bg-green-400/80"></div>
<div className="flex-1 h-1 rounded-full bg-green-400/80"></div>
<div className="flex-1 h-1 rounded-full bg-green-400/80"></div>
</div>
</div>
</div>

<div className="premium-card p-6 rounded-2xl flex flex-col justify-between h-48 group">
<div className="flex justify-between items-start">
<div className="text-xs font-medium text-white/60">AI Governance</div>
<iconify-icon className="text-white/30 text-lg group-hover:text-white/80 transition-colors" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<div>
<div className="text-2xl font-medium text-white mb-1">Active</div>
<div className="flex items-center gap-2 mt-3">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</div>
<span className="text-[10px] font-mono text-white/40">Monitoring IP Exposure</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-2xl mx-auto text-center relative z-10 flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
<iconify-icon className="text-white text-2xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                Ship faster. Ship safer.
            </h2>
<p className="text-sm text-white/40 mb-10 font-normal">
                Join industry leaders securing their infrastructure with visual intelligence.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
<button className="bg-white text-black px-8 py-3 rounded-full font-medium text-xs hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Initialize Deployment
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-medium tracking-tight text-xs flex items-center gap-2 text-white/50">
<div className="w-4 h-4 rounded-[4px] bg-white/20 flex items-center justify-center">
<iconify-icon className="text-black text-[10px]" icon="solar:shield-keyhole-bold"></iconify-icon>
</div>
                SECURECODE
            </div>
<div className="flex gap-8 text-xs text-white/30 font-normal">
<a className="hover:text-white transition-colors" href="#">Documentation</a>
<a className="hover:text-white transition-colors" href="#">Architecture</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
<div className="text-[10px] text-white/20 font-mono">
                SYS.STAT: ONLINE
            </div>
</div>
</footer>

    </>
  );
}
