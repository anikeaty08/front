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
slate: {
850: '#151e2e',
950: '#020617',
},
cyan: {
400: '#22d3ee',
500: '#06b6d4',
},
blue: {
600: '#2563eb',
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
},
animation: {
'blob': 'blob 7s infinite',
'scan': 'scan 4s linear infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg group-hover:scale-105 transition duration-300">
<iconify-icon className="text-white text-xl" icon="solar:shield-star-linear"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-white group-hover:text-cyan-400 transition-colors">SENTINEL<span className="opacity-50 font-light">AI</span></span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#capabilities">Platform</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#trust">Enterprise</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Log in</a>
<a className="group relative px-5 py-2.5 bg-slate-100/5 hover:bg-slate-100/10 border border-slate-100/10 rounded-full text-sm font-medium text-white transition-all overflow-hidden" href="#demo">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
<span className="relative flex items-center gap-2">
                        Get a Demo
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.03] z-0 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] opacity-40 animate-blob z-0"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] opacity-30 z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium tracking-wide mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                    AI-POWERED SOC AUTOMATION v2.0
                </div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500 mb-6 leading-[1.1] text-glow">
                    Autonomous Cyber <br/> Defense, Powered by AI
                </h1>

<p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed font-light">
                    Reduce alert fatigue and accelerate response times. Sentinel automates 80% of Tier 1 analyst tasks with enterprise-grade precision and speed.
                </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2" href="#demo">
                        Start Free Trial
                        <iconify-icon icon="solar:rocket-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-700 hover:border-slate-500 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2 hover:bg-slate-800" href="#capabilities">
                        Explore Platform
                        <iconify-icon icon="solar:layers-linear" width="20"></iconify-icon>
</a>
</div>

<div className="mt-16 w-full relative">
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20 h-full w-full"></div>
<div className="glass-panel rounded-t-2xl border-b-0 p-1 mx-auto max-w-5xl shadow-2xl shadow-cyan-900/20 transform perspective-1000 rotate-x-12 translate-y-12 opacity-80">
<div className="bg-slate-900 rounded-t-xl overflow-hidden h-64 md:h-96 relative border border-slate-800">

<div className="h-10 border-b border-slate-800 flex items-center px-4 gap-2 bg-slate-900/50">
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="ml-4 h-4 w-64 bg-slate-800 rounded-full"></div>
</div>

<div className="p-6 grid grid-cols-3 gap-4">
<div className="col-span-2 space-y-3">
<div className="h-24 rounded-lg bg-slate-800/50 border border-slate-700/50 p-4 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
<div className="flex items-center justify-between mb-2">
<div className="w-24 h-3 bg-red-900/30 rounded"></div>
<div className="px-2 py-0.5 text-[10px] text-red-400 bg-red-950 border border-red-900/50 rounded">CRITICAL</div>
</div>
<div className="w-3/4 h-2 bg-slate-700 rounded mb-2"></div>
<div className="w-1/2 h-2 bg-slate-700 rounded"></div>
</div>
<div className="h-24 rounded-lg bg-slate-800/30 border border-slate-700/30 p-4">
<div className="flex items-center justify-between mb-2">
<div className="w-24 h-3 bg-slate-700 rounded"></div>
<div className="px-2 py-0.5 text-[10px] text-green-400 bg-green-950 border border-green-900/50 rounded">RESOLVED</div>
</div>
<div className="w-3/4 h-2 bg-slate-700/50 rounded mb-2"></div>
<div className="w-1/2 h-2 bg-slate-700/50 rounded"></div>
</div>
</div>
<div className="col-span-1 rounded-lg bg-slate-800/20 border border-slate-700/30 p-4 flex flex-col items-center justify-center text-center">
<div className="w-16 h-16 rounded-full border-4 border-cyan-500/20 border-t-cyan-500 flex items-center justify-center animate-spin mb-4"></div>
<div className="text-xs text-slate-400">AI Analyzing...</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-slate-950/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">Trusted by security teams at</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"><iconify-icon icon="solar:atom-linear"></iconify-icon> NEBULA</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"><iconify-icon icon="solar:box-linear"></iconify-icon> STACK</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"><iconify-icon icon="solar:infinity-linear"></iconify-icon> LOOP</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"><iconify-icon icon="solar:mountains-linear"></iconify-icon> APEX</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"><iconify-icon icon="solar:planet-linear"></iconify-icon> ORBIT</div>
</div>
</div>
</section>

<section className="py-32 relative" id="capabilities">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Complete Visibility.<br/><span className="text-slate-500">Total Control.</span></h2>
<p className="text-slate-400 text-lg font-light">
                    Our platform unifies your security stack, using advanced LLMs to correlate signals and execute remediation without human intervention.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative p-8 rounded-2xl glass-panel hover:bg-slate-800/50 transition duration-500 hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition duration-300 border border-white/5">
<iconify-icon icon="solar:radar-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">AI Threat Detection</h3>
<p className="text-sm text-slate-400 leading-relaxed">Real-time correlation across logs, endpoints, and cloud infrastructure to identify zero-day threats.</p>
</div>

<div className="group relative p-8 rounded-2xl glass-panel hover:bg-slate-800/50 transition duration-500 hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition duration-300 border border-white/5">
<iconify-icon icon="solar:tuning-square-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">SOAR Automation</h3>
<p className="text-sm text-slate-400 leading-relaxed">Automated triage, containment, and remediation playbooks that execute in milliseconds.</p>
</div>

<div className="group relative p-8 rounded-2xl glass-panel hover:bg-slate-800/50 transition duration-500 hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition duration-300 border border-white/5">
<iconify-icon icon="solar:user-id-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Autonomous Agents</h3>
<p className="text-sm text-slate-400 leading-relaxed">24/7 AI agents that actively hunt threats and validate security posture continuously.</p>
</div>

<div className="group relative p-8 rounded-2xl glass-panel hover:bg-slate-800/50 transition duration-500 hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition duration-300 border border-white/5">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Risk Monitoring</h3>
<p className="text-sm text-slate-400 leading-relaxed">Persistent visibility into your attack surface with proactive mitigation recommendations.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30 border-y border-white/5" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-cyan-400 font-medium tracking-wide uppercase text-xs mb-2 block">The Pipeline</span>
<h2 className="text-3xl md:text-4xl font-medium text-white">From Signal to Resolution</h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800">
<div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-[shimmer_3s_infinite]"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

<div className="relative group">
<div className="w-24 h-24 mx-auto glass-panel rounded-full flex items-center justify-center border border-slate-700 mb-6 group-hover:border-cyan-500/50 transition-colors shadow-lg shadow-black/50">
<iconify-icon className="text-3xl text-slate-300 group-hover:text-cyan-400 transition-colors" icon="solar:cloud-upload-linear"></iconify-icon>
</div>
<div className="text-center px-2">
<h4 className="text-white font-medium mb-2">1. Ingest Telemetry</h4>
<p className="text-sm text-slate-500">Seamless integration with 500+ security tools, clouds, and endpoints.</p>
</div>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto glass-panel rounded-full flex items-center justify-center border border-slate-700 mb-6 group-hover:border-cyan-500/50 transition-colors shadow-lg shadow-black/50">
<iconify-icon className="text-3xl text-slate-300 group-hover:text-cyan-400 transition-colors" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<div className="text-center px-2">
<h4 className="text-white font-medium mb-2">2. AI Analysis</h4>
<p className="text-sm text-slate-500">Neural networks correlate events to reduce false positives by 90%.</p>
</div>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto glass-panel rounded-full flex items-center justify-center border border-slate-700 mb-6 group-hover:border-cyan-500/50 transition-colors shadow-lg shadow-black/50">
<iconify-icon className="text-3xl text-slate-300 group-hover:text-cyan-400 transition-colors" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="text-center px-2">
<h4 className="text-white font-medium mb-2">3. Auto-Remediation</h4>
<p className="text-sm text-slate-500">Playbooks execute blocks, isolations, and resets instantly.</p>
</div>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto glass-panel rounded-full flex items-center justify-center border border-slate-700 mb-6 group-hover:border-cyan-500/50 transition-colors shadow-lg shadow-black/50">
<iconify-icon className="text-3xl text-slate-300 group-hover:text-cyan-400 transition-colors" icon="solar:document-add-linear"></iconify-icon>
</div>
<div className="text-center px-2">
<h4 className="text-white font-medium mb-2">4. Enrichment</h4>
<p className="text-sm text-slate-500">Analysts receive context-rich reports for final validation.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<h2 className="text-4xl font-medium tracking-tight text-white">Built for the Modern SOC</h2>
<p className="text-slate-400 text-lg font-light leading-relaxed">
                        Whether you are an MSSP managing fifty clients or an enterprise CISO securing critical infrastructure, Sentinel scales to your needs.
                    </p>
<div className="space-y-4">

<div className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition cursor-pointer">
<div className="flex items-center gap-4">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
<iconify-icon icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">SOC Automation</h4>
<p className="text-sm text-slate-500 mt-1">Reduce MTTR from hours to minutes.</p>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition cursor-pointer">
<div className="flex items-center gap-4">
<div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
<iconify-icon icon="solar:cloud-check-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Cloud Security</h4>
<p className="text-sm text-slate-500 mt-1">Unified posture management for AWS, Azure, GCP.</p>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition cursor-pointer">
<div className="flex items-center gap-4">
<div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">MSSP Operations</h4>
<p className="text-sm text-slate-500 mt-1">Multi-tenant architecture with high-margin efficiency.</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-20"></div>
<div className="relative glass-panel rounded-2xl p-1 overflow-hidden border border-slate-700">
<div className="bg-slate-950 rounded-xl overflow-hidden">

<div className="p-4 border-b border-slate-800 flex justify-between items-center">
<span className="text-xs font-mono text-slate-500">DASHBOARD_V2.1</span>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs text-green-500">LIVE</span>
</div>
</div>
<div className="p-8 space-y-6">

<div className="flex items-end gap-2 h-32 w-full justify-between">
<div className="w-full bg-slate-800 rounded-t h-[40%] hover:bg-cyan-500/50 transition-colors duration-500"></div>
<div className="w-full bg-slate-800 rounded-t h-[70%] hover:bg-cyan-500/50 transition-colors duration-500"></div>
<div className="w-full bg-slate-800 rounded-t h-[50%] hover:bg-cyan-500/50 transition-colors duration-500"></div>
<div className="w-full bg-slate-800 rounded-t h-[90%] hover:bg-cyan-500/50 transition-colors duration-500"></div>
<div className="w-full bg-slate-800 rounded-t h-[60%] hover:bg-cyan-500/50 transition-colors duration-500"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-slate-900 rounded border border-slate-800">
<div className="text-2xl font-mono text-white">99.9%</div>
<div className="text-xs text-slate-500 uppercase">Uptime</div>
</div>
<div className="p-4 bg-slate-900 rounded border border-slate-800">
<div className="text-2xl font-mono text-cyan-400">0ms</div>
<div className="text-xs text-slate-500 uppercase">Latency</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-950" id="trust">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
<div className="p-6">
<h3 className="text-5xl lg:text-6xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-2">70%</h3>
<p className="text-slate-400 text-sm font-medium uppercase tracking-wide">Reduction in Alert Noise</p>
</div>
<div className="p-6">
<h3 className="text-5xl lg:text-6xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-2">5x</h3>
<p className="text-slate-400 text-sm font-medium uppercase tracking-wide">Faster Incident Response</p>
</div>
<div className="p-6">
<h3 className="text-5xl lg:text-6xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-2">24/7</h3>
<p className="text-slate-400 text-sm font-medium uppercase tracking-wide">Autonomous Defense</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-cyan-900/5"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-white mb-8">
                Secure Faster. <br/>
<span className="text-slate-500">Respond Smarter.</span>
</h2>
<p className="text-xl text-slate-400 font-light mb-12">
                Join 500+ security teams modernizing their SOC with Sentinel AI.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6">
<a className="group relative px-8 py-4 bg-white text-slate-950 rounded-full font-semibold text-lg transition-transform hover:scale-105 flex items-center gap-2" href="#demo">
                    Book a Security Demo
                    <iconify-icon className="text-slate-950" icon="solar:calendar-linear"></iconify-icon>
</a>
<a className="text-slate-300 hover:text-white font-medium flex items-center gap-2 transition-colors" href="#">
                    View Documentation
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-white/10 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-600 rounded flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:shield-star-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-white">SENTINEL AI</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
                        Next-generation security automation platform built for the AI era. Defending enterprises at machine speed.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100" icon="logos:linkedin-icon" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100" icon="logos:twitter" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100" icon="logos:github-icon" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Platform</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Threat Detection</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">SOAR</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Careers</a> <span className="text-xs bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded ml-1">Hiring</span></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2024 Sentinel AI Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span>Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
