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
darkMode: 'class', // Forced dark mode via HTML class
theme: {
fontFamily: {
sans: ['Space Grotesk', 'sans-serif'],
mono: ['Space Mono', 'monospace'],
},
extend: {
colors: {
brand: {
50: '#fbf5f2',
100: '#f5e6de',
200: '#ebd0c2',
300: '#deb29c',
400: '#cf8f72',
500: '#bf6a45', // Rusty Light Brown (Primary)
600: '#a35234',
700: '#86412b',
800: '#6d3626',
900: '#592e22',
950: '#1a0d0a', // Deep rusty black
},
accent: {
500: '#bf6a45', // Matching rust for consistency
400: '#d48666',
},
slate: {
800: '#1e1e1e',
850: '#171717',
900: '#111111',
950: '#0a0a0a',
}
},
letterSpacing: {
tighter: '-0.05em',
tight: '-0.03em',
widest: '0.1em',
},
animation: {
'blob': 'blob 10s infinite',
'scanline': 'scanline 8s linear infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        function togglePricing() {
            const toggle = document.getElementById('pricing-toggle');
            const monthlyPrices = document.querySelectorAll('.price-monthly');
            const annualPrices = document.querySelectorAll('.price-annual');
            
            if (toggle.checked) {
                monthlyPrices.forEach(el => el.classList.add('hidden'));
                annualPrices.forEach(el => el.classList.remove('hidden'));
            } else {
                monthlyPrices.forEach(el => el.classList.remove('hidden'));
                annualPrices.forEach(el => el.classList.add('hidden'));
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
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

<div className="absolute inset-0 bg-grain opacity-20 z-10 mix-blend-overlay"></div>

<div className="scanlines fixed inset-0 z-20 opacity-20 pointer-events-none"></div>

<div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-900/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-800/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-brand-900/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
<div className="w-10 h-10 rounded bg-brand-500/10 border border-brand-500/50 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(191,106,69,0.3)]">
<iconify-icon icon="lucide:terminal" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tight text-white font-mono uppercase">Twyft_</span>
</div>

<div className="hidden md:flex space-x-10">
<a className="text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-brand-400 transition-colors" href="#features">Features</a>
<a className="text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-brand-400 transition-colors" href="#how-it-works">How it Works</a>
<a className="text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-brand-400 transition-colors" href="#pricing">Pricing</a>
</div>

<div className="flex items-center space-x-6">
<a className="hidden md:block text-sm font-mono text-slate-400 hover:text-brand-400" href="#">LOG_IN</a>
<a className="inline-flex items-center justify-center px-5 py-2 border border-brand-500 text-xs font-mono font-bold uppercase tracking-wide rounded text-brand-500 hover:bg-brand-500 hover:text-slate-950 shadow-[0_0_10px_rgba(191,106,69,0.1)] hover:shadow-[0_0_20px_rgba(191,106,69,0.4)] transition-all focus:outline-none" href="#">
                        Init_System
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 overflow-hidden z-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900 border border-brand-500/30 mb-10 animate-fade-in-up backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
<span className="text-xs font-mono text-brand-300 tracking-widest uppercase">System v2.0 Online</span>
</div>

<h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter text-white mb-8 max-w-5xl mx-auto leading-[0.9] text-glow">
                Webinars for the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600">Next Generation</span>
</h1>

<p className="text-lg sm:text-xl font-mono text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                &gt; Initializing breakout rooms...<br/>
                &gt; Loading AI voice agents...<br/>
                Scale your events with automated lead qualification.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
<a className="group w-full sm:w-auto px-8 py-4 bg-brand-500 text-slate-950 rounded font-bold font-mono text-sm tracking-wide uppercase shadow-[0_0_20px_rgba(191,106,69,0.3)] hover:bg-brand-400 hover:shadow-[0_0_30px_rgba(191,106,69,0.5)] transition-all flex items-center justify-center gap-2" href="#">
                    Start_Engine
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="2" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-slate-900/50 text-brand-300 border border-slate-700 hover:border-brand-500/50 rounded font-mono text-sm font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 backdrop-blur-md" href="#">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="18"></iconify-icon>
                    View_Demo_Tape
                </a>
</div>

<div className="relative max-w-5xl mx-auto rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-800 bg-slate-900 overflow-hidden aspect-video group animate-float">

<div className="h-10 bg-slate-950 flex items-center px-4 justify-between border-b border-slate-800">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></div>
</div>
<div className="text-[10px] font-mono text-slate-600">LOCALHOST:8080</div>
<div className="w-4"></div>
</div>

<div className="relative h-full w-full bg-slate-900/80 flex items-center justify-center bg-[radial-gradient(#2a1b15_1px,transparent_1px)] [background-size:16px_16px]">
<div className="text-center">
<div className="inline-flex p-4 rounded-full border border-slate-800 bg-slate-950 mb-4 text-brand-500 shadow-[0_0_20px_rgba(191,106,69,0.15)]">
<iconify-icon icon="lucide:monitor-play" strokeWidth="1" width="48"></iconify-icon>
</div>
<p className="text-brand-500/50 font-mono text-xs animate-pulse">NO_SIGNAL_INPUT_DETECTED</p>
</div>

<div className="absolute bottom-8 right-8 w-72 bg-slate-950/90 rounded border border-brand-500/30 p-4 backdrop-blur-xl shadow-2xl">
<div className="flex items-center gap-3 mb-3 border-b border-slate-800 pb-2">
<div className="w-6 h-6 rounded bg-brand-500/20 flex items-center justify-center text-brand-500">
<iconify-icon icon="lucide:bot" strokeWidth="2" width="14"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold text-white font-mono">AI_AGENT.exe</p>
</div>
</div>
<div className="space-y-3 font-mono">
<div className="p-2 bg-slate-900 rounded border border-slate-800 text-[10px] text-brand-200">
                                &gt; Analyzing user intent...<br/>User appears interested in enterprise scale.
                            </div>
<div className="flex justify-end">
<div className="p-2 bg-brand-900/30 border border-brand-500/30 rounded text-[10px] text-brand-400">
                                    Affirmative. Log lead.
                                </div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16 border-t border-slate-800/50 pt-10">
<div className="flex flex-col items-center p-4">
<div className="text-brand-500 mb-3">
<iconify-icon icon="lucide:cpu" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="font-bold text-white font-mono text-sm mb-1 uppercase tracking-wider">Unlimited_Scale</h3>
<p className="text-xs text-slate-500 font-mono">10 to 100k nodes.</p>
</div>
<div className="flex flex-col items-center p-4 border-l border-r border-slate-800/50">
<div className="text-brand-500 mb-3">
<iconify-icon icon="lucide:scan-face" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="font-bold text-white font-mono text-sm mb-1 uppercase tracking-wider">Auto_Qualify</h3>
<p className="text-xs text-slate-500 font-mono">Real-time processing.</p>
</div>
<div className="flex flex-col items-center p-4">
<div className="text-brand-500 mb-3">
<iconify-icon icon="lucide:network" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="font-bold text-white font-mono text-sm mb-1 uppercase tracking-wider">Net_Breakouts</h3>
<p className="text-xs text-slate-500 font-mono">Instant partitioning.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-y border-slate-800 bg-slate-950/50" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">System Modules</h2>
<p className="text-slate-400 font-mono text-sm">Core components installed for maximum efficiency.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 bg-slate-900/50 backdrop-blur-sm rounded border border-slate-800 hover:border-brand-500 transition-all hover:bg-slate-900 hover:shadow-[0_0_15px_rgba(191,106,69,0.1)]">
<div className="w-12 h-12 rounded bg-slate-950 border border-slate-800 text-brand-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-white mb-2 font-mono">Breakout_Rooms</h3>
<p className="text-sm text-slate-400 mb-4 leading-relaxed font-mono">Dynamic segmentation of attendees for isolated processing and networking.</p>
</div>

<div className="group p-6 bg-slate-900/50 backdrop-blur-sm rounded border border-slate-800 hover:border-brand-500 transition-all hover:bg-slate-900 hover:shadow-[0_0_15px_rgba(191,106,69,0.1)]">
<div className="w-12 h-12 rounded bg-slate-950 border border-slate-800 text-brand-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:mic-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-white mb-2 font-mono">Voice_Agents</h3>
<p className="text-sm text-slate-400 mb-4 leading-relaxed font-mono">Automated conversational entities for Q&amp;A and polling protocols.</p>
</div>

<div className="group p-6 bg-slate-900/50 backdrop-blur-sm rounded border border-slate-800 hover:border-brand-500 transition-all hover:bg-slate-900 hover:shadow-[0_0_15px_rgba(191,106,69,0.1)]">
<div className="w-12 h-12 rounded bg-slate-950 border border-slate-800 text-brand-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:video" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-white mb-2 font-mono">Live_Stream</h3>
<p className="text-sm text-slate-400 mb-4 leading-relaxed font-mono">Low-latency HD transmission via LiveKit with interactive overlays.</p>
</div>

<div className="group p-6 bg-slate-900/50 backdrop-blur-sm rounded border border-slate-800 hover:border-brand-500 transition-all hover:bg-slate-900 hover:shadow-[0_0_15px_rgba(191,106,69,0.1)]">
<div className="w-12 h-12 rounded bg-slate-950 border border-slate-800 text-brand-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:database" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-white mb-2 font-mono">Data_Sync</h3>
<p className="text-sm text-slate-400 mb-4 leading-relaxed font-mono">Direct pipeline to external CRMs for instant lead capture and storage.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-white mb-20">Execution Protocol</h2>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-slate-800 via-brand-500/50 to-slate-800 -z-10 border-t border-dashed border-slate-700"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-slate-950 border-4 border-slate-900 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center mb-6 relative z-10 group-hover:border-brand-500/30 transition-colors">
<div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-brand-500 text-2xl font-mono font-bold">01</div>
</div>
<h3 className="text-lg font-bold text-white mb-2 font-mono uppercase">Setup_Event</h3>
<p className="text-slate-500 text-sm max-w-xs font-mono">Configure parameters and initiate invite sequence.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-slate-950 border-4 border-slate-900 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center mb-6 relative z-10 group-hover:border-brand-500/30 transition-colors">
<div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-brand-500 text-2xl font-mono font-bold">02</div>
</div>
<h3 className="text-lg font-bold text-white mb-2 font-mono uppercase">Activate_AI</h3>
<p className="text-slate-500 text-sm max-w-xs font-mono">Deploy voice agents to interact with nodes.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-slate-950 border-4 border-slate-900 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center mb-6 relative z-10 group-hover:border-brand-500/30 transition-colors">
<div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-brand-500 text-2xl font-mono font-bold">03</div>
</div>
<h3 className="text-lg font-bold text-white mb-2 font-mono uppercase">Extract_Data</h3>
<p className="text-slate-500 text-sm max-w-xs font-mono">Analyze telemetry and export lead data.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-slate-900/30 border-t border-slate-800" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Access Levels</h2>
<p className="text-slate-400 mb-8 font-mono">Select your clearance tier.</p>

<div className="flex items-center justify-center gap-4">
<span className="text-xs font-mono uppercase text-slate-400">Monthly</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="pricing-toggle" onclick="togglePricing()" type="checkbox"/>
<div className="w-12 h-6 bg-slate-800 peer-focus:outline-none border border-slate-600 rounded-none peer-checked:bg-brand-500 peer-checked:border-brand-400 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
</label>
<span className="text-xs font-mono uppercase text-white">Annual <span className="text-[10px] text-brand-500 border border-brand-500/50 px-1 ml-1">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<div className="bg-slate-950 p-8 rounded border border-slate-800 flex flex-col hover:border-slate-600 transition-colors">
<h3 className="text-lg font-bold text-white mb-2 font-mono uppercase">Guest</h3>
<div className="mb-6">
<span className="text-4xl font-bold text-white">$0</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center text-xs font-mono text-slate-400">
<iconify-icon className="text-brand-500 mr-2" icon="lucide:check" width="14"></iconify-icon>
                            Basic Protocols
                        </li>
<li className="flex items-center text-xs font-mono text-slate-400">
<iconify-icon className="text-brand-500 mr-2" icon="lucide:check" width="14"></iconify-icon>
                            250 Leads
                        </li>
<li className="flex items-center text-xs font-mono text-slate-700">
<iconify-icon className="mr-2" icon="lucide:x" width="14"></iconify-icon>
                            No Breakouts
                        </li>
</ul>
<a className="w-full block text-center py-3 border border-slate-700 text-slate-300 font-mono text-xs uppercase hover:bg-slate-800 hover:text-white transition-colors" href="#">Select_Tier</a>
</div>

<div className="bg-slate-950 p-8 rounded border border-slate-800 flex flex-col hover:border-brand-500/50 transition-colors">
<h3 className="text-lg font-bold text-white mb-2 font-mono uppercase">User</h3>
<div className="mb-6 h-10 flex items-baseline">
<span className="text-4xl font-bold text-white price-monthly">$29</span>
<span className="text-4xl font-bold text-white price-annual hidden">$24</span>
<span className="text-xs text-slate-500 ml-1 font-mono">/mo</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center text-xs font-mono text-slate-400">
<iconify-icon className="text-brand-500 mr-2" icon="lucide:check" width="14"></iconify-icon>
                            Unrestricted Events
                        </li>
<li className="flex items-center text-xs font-mono text-slate-400">
<iconify-icon className="text-brand-500 mr-2" icon="lucide:check" width="14"></iconify-icon>
                            5 Breakout Zones
                        </li>
</ul>
<a className="w-full block text-center py-3 bg-slate-800 text-white font-mono text-xs uppercase hover:bg-slate-700 transition-colors" href="#">Select_Tier</a>
</div>

<div className="bg-slate-900 p-8 rounded border-2 border-brand-500 shadow-[0_0_30px_rgba(191,106,69,0.15)] relative flex flex-col transform scale-105 z-20">
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-500 text-slate-950 text-[10px] font-bold font-mono px-3 py-1 uppercase tracking-wider border border-brand-400">Recommended</div>
<h3 className="text-lg font-bold text-white mb-2 font-mono uppercase">Admin</h3>
<div className="mb-6 h-10 flex items-baseline">
<span className="text-4xl font-bold text-white price-monthly text-glow">$99</span>
<span className="text-4xl font-bold text-white price-annual hidden text-glow">$79</span>
<span className="text-xs text-slate-500 ml-1 font-mono">/mo</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center text-xs font-mono text-slate-300">
<iconify-icon className="text-brand-500 mr-2" icon="lucide:check" width="14"></iconify-icon>
                            Everything in User
                        </li>
<li className="flex items-center text-xs font-mono text-slate-300">
<iconify-icon className="text-brand-500 mr-2" icon="lucide:check" width="14"></iconify-icon>
                            Advanced AI Agents
                        </li>
<li className="flex items-center text-xs font-mono text-slate-300">
<iconify-icon className="text-brand-500 mr-2" icon="lucide:check" width="14"></iconify-icon>
                            Unlimited Zones
                        </li>
</ul>
<a className="w-full block text-center py-3 bg-brand-500 text-slate-950 font-bold font-mono text-xs uppercase hover:bg-brand-400 transition-colors shadow-lg" href="#">Upgrade_Now</a>
</div>

<div className="bg-slate-950 p-8 rounded border border-slate-800 flex flex-col hover:border-slate-600 transition-colors">
<h3 className="text-lg font-bold text-white mb-2 font-mono uppercase">Root</h3>
<div className="mb-6 h-10 flex items-baseline">
<span className="text-3xl font-bold text-white">Custom</span>
</div>
<p className="text-xs font-mono text-slate-500 mb-6">Dedicated resources for scaling.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center text-xs font-mono text-slate-400">
<iconify-icon className="text-brand-500 mr-2" icon="lucide:check" width="14"></iconify-icon>
                            Full Customization
                        </li>
<li className="flex items-center text-xs font-mono text-slate-400">
<iconify-icon className="text-brand-500 mr-2" icon="lucide:check" width="14"></iconify-icon>
                            SLA &amp; SSO
                        </li>
</ul>
<a className="w-full block text-center py-3 border border-slate-700 text-slate-300 font-mono text-xs uppercase hover:bg-slate-800 hover:text-white transition-colors" href="#">Contact_Sysadmin</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-white mb-16">User Logs</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded hover:border-brand-500/30 transition-all">
<div className="flex text-brand-500 mb-4 gap-1">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-slate-300 mb-6 font-mono text-sm">"The AI agents qualify prospects while I focus on presenting. Optimization increased by 400%."</p>
<div>
<p className="font-bold text-white text-sm font-mono uppercase">Sarah_J</p>
<p className="text-[10px] text-brand-400 font-mono">CEO @ TechStart</p>
</div>
</div>

<div className="p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded hover:border-brand-500/30 transition-all">
<div className="flex text-brand-500 mb-4 gap-1">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-slate-300 mb-6 font-mono text-sm">"Switching breakout nodes takes milliseconds. The architecture is solid."</p>
<div>
<p className="font-bold text-white text-sm font-mono uppercase">David_C</p>
<p className="text-[10px] text-brand-400 font-mono">DevOps @ EduGlobal</p>
</div>
</div>

<div className="p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded hover:border-brand-500/30 transition-all">
<div className="flex text-brand-500 mb-4 gap-1">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-slate-300 mb-6 font-mono text-sm">"The telemetry data helps us close deals immediately. Essential for our stack."</p>
<div>
<p className="font-bold text-white text-sm font-mono uppercase">Elena_R</p>
<p className="text-[10px] text-brand-400 font-mono">Sales_Lead @ GrowthFast</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 relative z-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-brand-500/20 flex items-center justify-center text-brand-500 border border-brand-500/50">
<iconify-icon icon="lucide:terminal" strokeWidth="2" width="14"></iconify-icon>
</div>
<span className="text-lg font-bold text-white font-mono tracking-tighter">TWYFT_</span>
</div>
<p className="text-xs text-slate-500 max-w-xs mb-6 font-mono">
                        // Intelligent platform for scaling webinars.<br/>
                        // System Status: Operational
                    </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-brand-500 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-brand-500 transition-colors" href="#">
<iconify-icon icon="lucide:github" width="18"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-bold text-white mb-4 text-xs font-mono uppercase tracking-wider">Module</h4>
<ul className="space-y-2 text-xs text-slate-500 font-mono">
<li><a className="hover:text-brand-500 hover:underline decoration-brand-500/50 underline-offset-4" href="#">Features</a></li>
<li><a className="hover:text-brand-500 hover:underline decoration-brand-500/50 underline-offset-4" href="#">Pricing</a></li>
<li><a className="hover:text-brand-500 hover:underline decoration-brand-500/50 underline-offset-4" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-white mb-4 text-xs font-mono uppercase tracking-wider">Docs</h4>
<ul className="space-y-2 text-xs text-slate-500 font-mono">
<li><a className="hover:text-brand-500 hover:underline decoration-brand-500/50 underline-offset-4" href="#">API Reference</a></li>
<li><a className="hover:text-brand-500 hover:underline decoration-brand-500/50 underline-offset-4" href="#">Community</a></li>
<li><a className="hover:text-brand-500 hover:underline decoration-brand-500/50 underline-offset-4" href="#">Support</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-white mb-4 text-xs font-mono uppercase tracking-wider">Corp</h4>
<ul className="space-y-2 text-xs text-slate-500 font-mono">
<li><a className="hover:text-brand-500 hover:underline decoration-brand-500/50 underline-offset-4" href="#">About</a></li>
<li><a className="hover:text-brand-500 hover:underline decoration-brand-500/50 underline-offset-4" href="#">Careers</a></li>
<li><a className="hover:text-brand-500 hover:underline decoration-brand-500/50 underline-offset-4" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600 font-mono">© 2026 Twyft Inc. All systems functional.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-600 hover:text-slate-400 font-mono" href="#">Privacy</a>
<a className="text-xs text-slate-600 hover:text-slate-400 font-mono" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
