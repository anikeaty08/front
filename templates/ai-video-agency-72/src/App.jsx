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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-4 h-4 bg-white rounded-full"></div>
                SYNTH
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#agents">The Crew</a>
<a className="hover:text-white transition-colors duration-200" href="#process">Workflow</a>
<a className="hover:text-white transition-colors duration-200" href="#showcase">Showcase</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="text-xs font-medium text-neutral-400 hover:text-white transition-colors">Log In</button>
<button className="bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-neutral-200 transition-colors">
                    Start Production
                </button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 grid-bg z-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Now rendering Version 2.0 Agents
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-500">
                The fully autonomous <br/> video production studio.
            </h1>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Replace your entire production crew with intelligent personas. From script to final render, our AI Director, Cinematographer, and Editor work in unison to create cinema-grade content 24/7.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-neutral-200 transition-all flex items-center gap-2">
                    Hire the Agents
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="px-6 py-3 rounded-full text-sm font-medium text-neutral-300 border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                    Watch Demo
                </button>
</div>
</div>
</header>

<section className="relative z-10 -mt-10 mb-24 max-w-5xl mx-auto px-6">
<div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-indigo-900/20">

<div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="ml-4 flex items-center gap-4 text-xs text-neutral-500 font-mono">
<span>project_titan_v4.mp4</span>
<span className="text-green-400 flex items-center gap-1">
<iconify-icon icon="solar:cpu-linear" width="12"></iconify-icon> Processing
                    </span>
</div>
</div>

<div className="grid grid-cols-12 h-[400px] md:h-[500px]">

<div className="col-span-4 md:col-span-3 border-r border-white/10 p-4 flex flex-col gap-4 bg-black/40">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2">Active Crew</p>

<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
<div className="relative">
<img alt="Director" className="w-8 h-8 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&amp;w=150&amp;h=150"/>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-white">Marcus</span>
<iconify-icon className="text-indigo-400" icon="solar:clapperboard-edit-linear" width="12"></iconify-icon>
</div>
<div className="text-[10px] text-neutral-400 mt-0.5 truncate">Reviewing Scene 4</div>
<div className="w-full h-1 bg-neutral-800 rounded-full mt-2 overflow-hidden">
<div className="h-full bg-indigo-500 w-3/4 shimmer"></div>
</div>
</div>
</div>

<div className="flex items-start gap-3 p-3 rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
<div className="relative">
<img alt="Writer" className="w-8 h-8 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&amp;w=150&amp;h=150"/>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-neutral-500 border-2 border-black rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-white">Sarah</span>
<iconify-icon className="text-emerald-400" icon="solar:pen-new-square-linear" width="12"></iconify-icon>
</div>
<div className="text-[10px] text-neutral-400 mt-0.5">Idle</div>
</div>
</div>

<div className="flex items-start gap-3 p-3 rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
<div className="relative">
<img alt="Editor" className="w-8 h-8 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&amp;w=150&amp;h=150"/>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-white">Yuki</span>
<iconify-icon className="text-orange-400" icon="solar:scissors-square-linear" width="12"></iconify-icon>
</div>
<div className="text-[10px] text-neutral-400 mt-0.5 truncate">Color Grading...</div>
<div className="w-full h-1 bg-neutral-800 rounded-full mt-2 overflow-hidden">
<div className="h-full bg-orange-500 w-1/2 shimmer"></div>
</div>
</div>
</div>
</div>

<div className="col-span-8 md:col-span-9 bg-[#050505] relative flex items-center justify-center">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40"></div>

<div className="absolute bottom-0 left-0 right-0 h-32 bg-[#0a0a0a] border-t border-white/10 p-4">
<div className="flex justify-between text-[10px] text-neutral-500 mb-2 font-mono">
<span>00:00:00</span>
<span>00:00:15</span>
<span>00:00:30</span>
</div>
<div className="relative h-16 w-full bg-neutral-900 rounded border border-white/5 overflow-hidden">

<div className="absolute top-1 left-0 h-4 bg-indigo-900/40 w-[40%] border-l border-indigo-500/50 rounded-sm ml-4"></div>
<div className="absolute top-6 left-0 h-4 bg-blue-900/40 w-[60%] border-l border-blue-500/50 rounded-sm ml-12"></div>
<div className="absolute top-11 left-0 h-4 bg-purple-900/40 w-[30%] border-l border-purple-500/50 rounded-sm ml-24"></div>

<div className="absolute top-0 bottom-0 left-[30%] w-[1px] bg-red-500 z-10 flex flex-col items-center">
<div className="w-2 h-2 -mt-1 bg-red-500 rotate-45"></div>
</div>
</div>
</div>

<div className="absolute top-6 right-6 flex flex-col gap-2">
<div className="glass px-3 py-1.5 rounded-md text-xs font-mono text-neutral-300 border border-white/10 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                            Rendering 4K
                         </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="agents">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Meet the Personas</h2>
<p className="text-neutral-400 max-w-xl">Each agent has a distinct personality and specialized skillset, communicating via a semantic bus to ensure creative consistency.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-neutral-900/50 relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="relative">
<img alt="Marcus" className="w-14 h-14 rounded-xl object-cover avatar-ring grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&amp;w=150&amp;h=150"/>
<div className="absolute -bottom-1 -right-1 bg-[#050505] p-1 rounded-full border border-white/10">
<iconify-icon className="text-indigo-400 block" icon="solar:clapperboard-edit-linear" width="14"></iconify-icon>
</div>
</div>
<div className="px-2.5 py-1 rounded-full bg-white/5 text-[10px] font-medium text-neutral-400 border border-white/5">Lead</div>
</div>
<h3 className="text-lg font-medium text-white mb-1">Marcus</h3>
<p className="text-xs text-indigo-400 font-medium mb-3 tracking-wide uppercase">The Director</p>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">Analyzes your prompt for tone, pacing, and visual style. Orchestrates the other agents and makes final creative decisions.</p>
</div>

<div className="group p-6 rounded-xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-neutral-900/50 relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="relative">
<img alt="Sarah" className="w-14 h-14 rounded-xl object-cover avatar-ring grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&amp;w=150&amp;h=150"/>
<div className="absolute -bottom-1 -right-1 bg-[#050505] p-1 rounded-full border border-white/10">
<iconify-icon className="text-emerald-400 block" icon="solar:document-add-linear" width="14"></iconify-icon>
</div>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-1">Sarah</h3>
<p className="text-xs text-emerald-400 font-medium mb-3 tracking-wide uppercase">Screenwriter</p>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">Generates compelling scripts, voiceovers, and dialogue optimized for audience retention and clarity.</p>
</div>

<div className="group p-6 rounded-xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-neutral-900/50 relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="relative">
<img alt="David" className="w-14 h-14 rounded-xl object-cover avatar-ring grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&amp;w=150&amp;h=150"/>
<div className="absolute -bottom-1 -right-1 bg-[#050505] p-1 rounded-full border border-white/10">
<iconify-icon className="text-blue-400 block" icon="solar:camera-linear" width="14"></iconify-icon>
</div>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-1">David</h3>
<p className="text-xs text-blue-400 font-medium mb-3 tracking-wide uppercase">Cinematographer</p>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">Handles composition, lighting, and camera movement. Generates photorealistic scenes with consistent depth and physics.</p>
</div>

<div className="group p-6 rounded-xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-neutral-900/50 relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="relative">
<img alt="Yuki" className="w-14 h-14 rounded-xl object-cover avatar-ring grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&amp;w=150&amp;h=150"/>
<div className="absolute -bottom-1 -right-1 bg-[#050505] p-1 rounded-full border border-white/10">
<iconify-icon className="text-orange-400 block" icon="solar:scissors-square-linear" width="14"></iconify-icon>
</div>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-1">Yuki</h3>
<p className="text-xs text-orange-400 font-medium mb-3 tracking-wide uppercase">Lead Editor</p>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">Assembles the footage, applies transitions, and ensures the video matches the beat of the audio track.</p>
</div>

<div className="group p-6 rounded-xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-neutral-900/50 relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="relative">
<img alt="Alex" className="w-14 h-14 rounded-xl object-cover avatar-ring grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&amp;w=150&amp;h=150"/>
<div className="absolute -bottom-1 -right-1 bg-[#050505] p-1 rounded-full border border-white/10">
<iconify-icon className="text-pink-400 block" icon="solar:music-note-linear" width="14"></iconify-icon>
</div>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-1">Alex</h3>
<p className="text-xs text-pink-400 font-medium mb-3 tracking-wide uppercase">Audio Engineer</p>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">Scores original music, generates sound effects (SFX), and masters voiceovers for broadcast quality.</p>
</div>

<div className="group p-6 rounded-xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-neutral-900/50 relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="relative">
<img alt="Elena" className="w-14 h-14 rounded-xl object-cover avatar-ring grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?fit=crop&amp;w=150&amp;h=150"/>
<div className="absolute -bottom-1 -right-1 bg-[#050505] p-1 rounded-full border border-white/10">
<iconify-icon className="text-purple-400 block" icon="solar:calendar-mark-linear" width="14"></iconify-icon>
</div>
</div>
<div className="px-2.5 py-1 rounded-full bg-white/5 text-[10px] font-medium text-neutral-400 border border-white/5">Admin</div>
</div>
<h3 className="text-lg font-medium text-white mb-1">Elena</h3>
<p className="text-xs text-purple-400 font-medium mb-3 tracking-wide uppercase">Executive Producer</p>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">Manages the timeline, resource allocation, and quality assurance check before final delivery.</p>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">24/7</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Operation Time</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">4K</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Max Resolution</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">100+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Visual Styles</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">10x</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Faster Delivery</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="process">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="w-full lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Total control without the micromanagement.</h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                    Set your parameters and let the agents handle the nuance. Adjust creativity levels, pacing, and visual fidelity with simple controls.
                </p>
<ul className="space-y-6">
<li className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Semantic Understanding</h4>
<p className="text-sm text-neutral-500 mt-1">Our agents understand subtext, not just keywords.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Real-time Iteration</h4>
<p className="text-sm text-neutral-500 mt-1">Provide feedback during the render process to adjust trajectory.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Multi-format Export</h4>
<p className="text-sm text-neutral-500 mt-1">Automatically reframe for Vertical, Horizontal and Square formats.</p>
</div>
</li>
</ul>
</div>

<div className="w-full lg:w-1/2">
<div className="glass rounded-2xl p-8 border border-white/10 max-w-md mx-auto">
<div className="flex items-center justify-between mb-8">
<h3 className="text-white font-medium">Production Settings</h3>
<iconify-icon className="text-neutral-500" icon="solar:settings-linear" width="20"></iconify-icon>
</div>

<div className="mb-8">
<div className="flex justify-between text-xs text-neutral-400 mb-2">
<span>Creativity Level</span>
<span className="text-white">High</span>
</div>
<div className="h-2 bg-neutral-800 rounded-full relative">
<div className="absolute top-0 left-0 h-full w-3/4 bg-indigo-500 rounded-full"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-3/4 w-4 h-4 bg-white rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between text-[10px] text-neutral-600 mt-2">
<span>Conservative</span>
<span>Experimental</span>
</div>
</div>

<div className="mb-8">
<div className="flex justify-between text-xs text-neutral-400 mb-2">
<span>Pacing</span>
<span className="text-white">Dynamic</span>
</div>
<div className="h-2 bg-neutral-800 rounded-full relative">
<div className="absolute top-0 left-0 h-full w-1/2 bg-indigo-500 rounded-full"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-1/2 w-4 h-4 bg-white rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:mic-linear"></iconify-icon>
<span className="text-sm text-neutral-300">AI Voiceover</span>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:bg-white" id="toggle1" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-700 cursor-pointer" htmlFor="toggle1"></label>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:letter-linear"></iconify-icon>
<span className="text-sm text-neutral-300">Auto-Subtitles</span>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:bg-white" id="toggle2" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-indigo-600 cursor-pointer" htmlFor="toggle2"></label>
</div>
</div>
</div>
<button className="w-full mt-8 bg-white text-black font-medium text-sm py-3 rounded-lg hover:bg-neutral-200 transition-colors">
                        Apply Settings
                    </button>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 to-transparent"></div>
<div className="relative max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to scale your production?</h2>
<p className="text-neutral-400 mb-10 text-lg">Join forward-thinking agencies producing thousands of minutes of content daily with SYNTH.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors">
                    Start Free Trial
                </button>
<button className="px-8 py-3 text-neutral-300 border border-white/10 rounded-full text-sm font-medium hover:bg-white/5 transition-colors">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<div className="w-4 h-4 bg-white rounded-full"></div>
                        SYNTH
                    </a>
<p className="text-sm text-neutral-500 max-w-xs">Pioneering the future of generative media with autonomous agent workflows.</p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Agents</a></li>
<li><a className="hover:text-white transition-colors" href="#">Workflow</a></li>
<li><a className="hover:text-white transition-colors" href="#">API</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-4">
<p className="text-xs text-neutral-600">© 2024 SYNTH Inc. All rights reserved.</p>
<div className="flex gap-4 text-neutral-500">
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="solar:brand-twitter-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="solar:brand-github-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="solar:brand-discord-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
