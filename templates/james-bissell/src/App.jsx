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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Spotlight effect for cards
        const cards = document.querySelectorAll('.spotlight-card');
        cards.forEach(card => {
            card.onmousemove = e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            };
        });
    
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
      

<header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
<nav className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-blue-500/10 overflow-hidden group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300 bg-blue-500/10 w-9 h-9 border-blue-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon className="text-blue-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-sm">James Bissell</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-zinc-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-black bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#demo">
                    Fix Alignment
                    <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main className="">

<section className="overflow-hidden min-h-[95vh] flex flex-col pt-44 pb-20 relative items-center justify-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div className="bg-system-grid"></div>
<div className="z-10 text-center max-w-5xl w-full mx-auto px-6 relative flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-300 text-xs uppercase font-medium tracking-wide mb-8 hover:border-blue-500/40 transition-colors cursor-default shadow-[0_0_20px_rgba(59,130,246,0.1)] backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-signal"></span>
                    Sales Performance Infrastructure
                </div>
<h1 className="leading-[1.05] text-4xl font-semibold text-white tracking-tight mb-8 max-w-4xl mx-auto md:text-6xl lg:text-8xl">
                    Your Sales Problem Isn’t Talent.<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">It’s Alignment.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-3xl mx-auto mb-16">
                    Most teams don’t struggle because of effort. They struggle because systems, enablement, and execution don’t connect. <span className="text-white font-medium">James Bissell helps fix that.</span>
</p>

<div className="w-full max-w-4xl mx-auto mb-16">

<div className="relative w-full aspect-video media-placeholder border border-white/10 rounded-2xl flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)] group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="z-10 flex flex-col items-center gap-4">
<div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 cursor-pointer shadow-[0_0_30px_rgba(59,130,246,0.2)]">
<iconify-icon icon="solar:play-bold" width="32"></iconify-icon>
</div>
<span className="text-white font-semibold text-lg tracking-tight">Watch: Why Sales Teams Stay Misaligned</span>
<span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Video Placeholder</span>
</div>
</div>
</div>

<div className="max-w-2xl mx-auto text-left w-full">
<div className="p-8 rounded-2xl bg-[#09090b] border border-white/5 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50"></div>
<p className="text-lg text-white font-medium mb-6">
                            If your team is working hard but results aren’t improving, the issue isn’t activity. <br/><span className="text-blue-400">It’s alignment.</span>
</p>
<p className="text-zinc-400 text-base mb-4">Most organizations:</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-zinc-400 text-base">
<iconify-icon className="text-zinc-600 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Separate strategy from execution</span>
</li>
<li className="flex items-start gap-3 text-zinc-400 text-base">
<iconify-icon className="text-zinc-600 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Treat enablement as training instead of infrastructure</span>
</li>
<li className="flex items-start gap-3 text-zinc-400 text-base">
<iconify-icon className="text-zinc-600 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Lack connection between teams and systems</span>
</li>
<li className="flex items-start gap-3 text-zinc-400 text-base">
<iconify-icon className="text-zinc-600 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Create friction instead of flow</span>
</li>
</ul>
<p className="text-zinc-400 text-base mb-4">In this video, James breaks down:</p>
<ul className="space-y-3 mb-10">
<li className="flex items-start gap-3 text-white text-base font-medium">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Why revenue teams stay misaligned</span>
</li>
<li className="flex items-start gap-3 text-white text-base font-medium">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>What effective enablement actually looks like</span>
</li>
<li className="flex items-start gap-3 text-white text-base font-medium">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>How systems drive consistent performance</span>
</li>
</ul>
<a className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-blue-600 px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(59,130,246,0.3)] w-full sm:w-auto" href="#demo">
                            Fix My Sales Alignment
                            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#030303] relative z-20">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8">Revenue teams improving alignment and performance</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-8 w-32 bg-zinc-800 rounded flex items-center justify-center text-xs font-mono text-zinc-500">LOGO</div>
<div className="h-8 w-32 bg-zinc-800 rounded flex items-center justify-center text-xs font-mono text-zinc-500">LOGO</div>
<div className="h-8 w-32 bg-zinc-800 rounded flex items-center justify-center text-xs font-mono text-zinc-500">LOGO</div>
<div className="h-8 w-32 bg-zinc-800 rounded flex items-center justify-center text-xs font-mono text-zinc-500">LOGO</div>
<div className="h-8 w-32 bg-zinc-800 rounded flex items-center justify-center text-xs font-mono text-zinc-500 hidden sm:flex">LOGO</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020202] relative z-20" id="problem">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 text-zinc-400 mb-8 border border-white/10">
<iconify-icon icon="solar:minus-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="md:text-5xl leading-tight text-4xl font-semibold text-white tracking-tight">
                        Why Revenue Teams Underperform
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-8 rounded-[2rem] bg-[#09090b] border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 mb-6">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Misalignment between teams</h3>
<p className="text-zinc-400 text-base leading-relaxed">Sales, marketing, and enablement operate separately, creating silos that prevent predictable revenue generation.</p>
</div>

<div className="p-8 rounded-[2rem] bg-[#09090b] border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 mb-6">
<iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Enablement lacks structure</h3>
<p className="text-zinc-400 text-base leading-relaxed">Training exists, but systems don’t support execution. Information is delivered but rarely applied consistently in the field.</p>
</div>

<div className="p-8 rounded-[2rem] bg-[#09090b] border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 mb-6">
<iconify-icon icon="solar:branching-paths-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">No consistent process</h3>
<p className="text-zinc-400 text-base leading-relaxed">Teams rely on individual effort instead of systems. Success becomes dependent on heroics rather than repeatable plays.</p>
</div>

<div className="p-8 rounded-[2rem] bg-[#09090b] border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 mb-6">
<iconify-icon icon="solar:graph-down-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Performance varies</h3>
<p className="text-zinc-400 text-base leading-relaxed">Without alignment, results become unpredictable. Forecasting is a guess, and scaling feels impossible.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#050505] relative z-20 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8 leading-tight">
                    The Problem Isn’t Effort.<br/>
<span className="text-blue-500">It’s Infrastructure.</span>
</h2>
<div className="space-y-4 text-xl text-zinc-400 font-light mb-12">
<p>More hiring won't fix this.</p>
<p>More training won't fix this.</p>
</div>
<div className="p-8 md:p-10 rounded-3xl bg-zinc-900/50 border border-white/10 inline-block text-left backdrop-blur-md">
<p className="text-white font-medium mb-6 text-lg">Performance improves when:</p>
<ul className="space-y-4">
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
</div>
<span className="text-zinc-300 text-lg">Systems are aligned</span>
</li>
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
<iconify-icon icon="solar:check-read-linear" width="18"></iconify-icon>
</div>
<span className="text-zinc-300 text-lg">Processes are consistent</span>
</li>
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
<iconify-icon icon="solar:rocket-linear" width="18"></iconify-icon>
</div>
<span className="text-zinc-300 text-lg">Execution is supported</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-32 bg-black relative" id="mechanism">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Revenue Enablement Systems</h2>
<p className="text-zinc-400 text-lg leading-relaxed">
                        Top-performing teams don’t rely on individuals.<br/>
                        They rely on <span className="text-white">aligned systems</span>, <span className="text-white">structured enablement</span>, and <span className="text-white">clear execution pathways</span>.<br/><br/>
                        This is what turns <span className="text-blue-400 font-medium">Activity → into predictable revenue.</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between group overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon icon="solar:map-arrow-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Sales Enablement Strategy</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-md">Moving beyond ad-hoc training to build a comprehensive infrastructure that supports sellers at every stage of the revenue cycle, ensuring they have the exact knowledge and tools needed to win.</p>
</div>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col group overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50">
<iconify-icon icon="solar:routing-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Revenue Operations Alignment</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-4">Connecting marketing, sales, and CS through unified data and shared definitions. Removing operational friction so teams execute as one engine.</p>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon icon="solar:hierarchy-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-2">Sales Process Design</h3>
<p className="text-zinc-400 text-base leading-relaxed">Mapping buyer journeys to seller actions. Creating repeatable, measurable processes that eliminate guesswork.</p>
</div>
</div>

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden gap-6">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Performance Systems &amp; Advisory</h3>
<p className="text-zinc-400 text-base leading-relaxed">Implementing dashboards and leading indicators to track health, coupled with high-level leadership advisory to keep strategy and execution locked in sync.</p>
</div>
<div className="flex flex-col gap-2 opacity-80 w-full md:w-auto">
<div className="px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl text-sm font-medium text-white flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="solar:verified-check-linear"></iconify-icon> Leadership Advisory
                            </div>
<div className="px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl text-sm font-medium text-white flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="solar:verified-check-linear"></iconify-icon> Performance Systems
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#030303]">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="mb-12">
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">Teams improving revenue performance through enablement</span>
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                        Organizations work with James Bissell to improve alignment, enablement, and sales performance.
                    </h2>
</div>

<div className="w-full aspect-[21/9] media-placeholder border border-white/10 rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-blue-500/5"></div>
<div className="z-10 flex flex-col items-center gap-3 text-zinc-500">
<iconify-icon icon="solar:gallery-wide-linear" width="48"></iconify-icon>
<span className="font-mono text-sm uppercase tracking-widest">Image Placeholder</span>
<span className="text-xs">Team Performance Showcase</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] border-b border-white/5" id="process">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        How James Improves Revenue Performance
                    </h2>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-blue-500 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-1">
<div>
<span className="text-blue-400 font-mono text-xs uppercase tracking-wide mb-3 block">Step 01</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Identify misalignment</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                We start by diagnosing where strategy breaks down before execution. Analyzing the gaps between marketing promises, enablement materials, and what sellers actually do in front of buyers.
                            </p>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-zinc-300 text-sm"><iconify-icon className="text-blue-500 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Sales process audits</li>
<li className="flex items-start gap-3 text-zinc-300 text-sm"><iconify-icon className="text-blue-500 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Tech stack utilization review</li>
<li className="flex items-start gap-3 text-zinc-300 text-sm"><iconify-icon className="text-blue-500 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Cross-functional friction analysis</li>
</ul>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-blue-500 transition-colors">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-1">
<div>
<span className="text-blue-400 font-mono text-xs uppercase tracking-wide mb-3 block">Step 02</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Build structured enablement</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                Moving from random acts of training to a formal enablement infrastructure. We build playbooks, operationalize the sales methodology, and align tools to support the process naturally.
                            </p>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-zinc-300 text-sm"><iconify-icon className="text-blue-500 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Custom playbook creation</li>
<li className="flex items-start gap-3 text-zinc-300 text-sm"><iconify-icon className="text-blue-500 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Methodology operationalization</li>
<li className="flex items-start gap-3 text-zinc-300 text-sm"><iconify-icon className="text-blue-500 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> System &amp; tool alignment</li>
</ul>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-12 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-blue-500 transition-colors">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-1">
<div>
<span className="text-blue-400 font-mono text-xs uppercase tracking-wide mb-3 block">Step 03</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Improve execution</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                Rolling out the system to the organization. We establish feedback loops, coach leadership on driving adoption, and measure the impact on revenue velocity to ensure continuous improvement.
                            </p>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-zinc-300 text-sm"><iconify-icon className="text-blue-500 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Leadership coaching &amp; advisory</li>
<li className="flex items-start gap-3 text-zinc-300 text-sm"><iconify-icon className="text-blue-500 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Adoption tracking metrics</li>
<li className="flex items-start gap-3 text-zinc-300 text-sm"><iconify-icon className="text-blue-500 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Revenue velocity optimization</li>
</ul>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-white px-8 text-base font-semibold text-black transition-all duration-300 hover:bg-zinc-200 shadow-[0_0_30px_rgba(255,255,255,0.1)]" href="#demo">
                        Improve My Revenue System
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-black border-b border-white/5" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

<div className="w-full aspect-[4/5] media-placeholder rounded-3xl border border-white/10 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent opacity-50"></div>
<div className="z-10 flex flex-col items-center gap-2 text-zinc-500 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="solar:user-circle-linear" width="48"></iconify-icon>
<span className="font-mono text-sm uppercase tracking-widest mt-2">Image Placeholder</span>
<span className="text-xs">James Bissell Portrait</span>
</div>
</div>

<div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8">Hi, I’m James Bissell.</h2>
<div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
<p>I work with organizations that want better results but are held back by misalignment.</p>
<p>The issue isn’t effort — it’s how systems and teams connect.</p>
<p className="text-white font-medium border-l-2 border-blue-500 pl-4 py-1 bg-gradient-to-r from-blue-500/10 to-transparent">My focus is helping companies build enablement systems that actually drive performance.</p>
<p>When strategy, operations, and field execution speak the same language, revenue becomes predictable, scaling becomes manageable, and teams finally perform to their actual potential.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#030303] border-b border-white/5 relative z-20">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">

<div className="p-6 rounded-2xl bg-[#09090b] border border-white/5">
<h3 className="text-lg font-medium text-white mb-2">Who is this for?</h3>
<p className="text-zinc-400 text-base">Revenue leaders and sales teams looking to build scalable infrastructure.</p>
</div>

<div className="p-6 rounded-2xl bg-[#09090b] border border-white/5">
<h3 className="text-lg font-medium text-white mb-2">Is this enablement or consulting?</h3>
<p className="text-zinc-400 text-base">Both — focused on creating operational systems and ensuring execution in the field.</p>
</div>

<div className="p-6 rounded-2xl bg-[#09090b] border border-white/5">
<h3 className="text-lg font-medium text-white mb-2">Does this work for scaling teams?</h3>
<p className="text-zinc-400 text-base">Yes, especially teams growing quickly that need repeatable processes to maintain performance.</p>
</div>

<div className="p-6 rounded-2xl bg-[#09090b] border border-white/5">
<h3 className="text-lg font-medium text-white mb-2">What makes this different?</h3>
<p className="text-zinc-400 text-base">We don't just do training. We focus on total alignment and the underlying infrastructure that supports revenue.</p>
</div>

<div className="p-6 rounded-2xl bg-[#09090b] border border-white/5">
<h3 className="text-lg font-medium text-white mb-2">How do we start?</h3>
<p className="text-zinc-400 text-base">Book a call using the calendar below to discuss your current alignment challenges.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-black" id="demo">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-start">

<div className="flex flex-col justify-center h-full pt-4 lg:pt-12">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                            Align Your<br/>Revenue Engine.
                        </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                            Book a call to improve how your teams, systems, and execution work together. Stop relying on effort alone and start building performance infrastructure.
                        </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Discuss your alignment gaps</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Explore enablement systems</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Map a path to execution</span>
</div>
</div>
</div>

<div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 flex flex-col items-center justify-center">
<div className="text-zinc-500 flex flex-col items-center gap-3">
<iconify-icon icon="solar:calendar-linear" width="40"></iconify-icon>
<span className="font-mono text-sm uppercase tracking-widest">Calendly Placeholder</span>
<button className="mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-medium text-white transition-colors hover:bg-blue-500">
                                Book My Call
                            </button>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-20 pb-10 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 pr-8">
<a className="flex items-center gap-3 text-white font-semibold tracking-tight text-lg mb-6 group" href="/">
<div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-blue-500/5 relative overflow-hidden group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-blue-500 transition-colors duration-300" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
                        James Bissell
                    </a>
<p className="text-zinc-500 mb-6 leading-relaxed max-w-xs">
                        The Revenue Enabler. Building sales enablement, revenue operations alignment, and sales performance infrastructure.
                    </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Expertise</h4>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#mechanism">Enablement Strategy</a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#mechanism">RevOps Alignment</a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#mechanism">Process Design</a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#mechanism">Performance Systems</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Resources</h4>
<a className="text-zinc-500 hover:text-blue-400 transition-colors flex items-center gap-2" href="https://www.youtube.com/@TheRevenueEnabler/" rel="noopener" target="_blank">YouTube <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon></a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors flex items-center gap-2" href="https://www.linkedin.com/in/james-bissell1" rel="noopener" target="_blank">LinkedIn <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon></a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors flex items-center gap-2" href="https://www.therevenueenabler.com/" rel="noopener" target="_blank">Website <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon></a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Company</h4>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#about">About James</a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#demo">Contact</a>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-600 text-xs">
                    © 2024 The Revenue Enabler. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
