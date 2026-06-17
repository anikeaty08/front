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
<nav aria-label="Main menu" className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a aria-label="Collin Cadmus Home" className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-blue-500/10 overflow-hidden group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300 bg-blue-500/10 w-9 h-9 border-blue-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon aria-hidden="true" className="text-blue-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-sm">Collin Cadmus</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-blue-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-white bg-blue-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_0_20px_rgba(59,130,246,0.2)]" href="#cta">
                    Fix My Sales Team
                    <iconify-icon aria-hidden="true" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main className="">

<section className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative">

<div className="system-lines"></div>
<div className="flow-line left-[20%]" style={{animationDuration: '4s', animationDelay: '0s'}}></div>
<div className="flow-line left-[50%]" style={{animationDuration: '6s', animationDelay: '1.5s'}}></div>
<div className="flow-line left-[80%]" style={{animationDuration: '5s', animationDelay: '3s'}}></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div className="z-10 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-300 text-xs uppercase font-medium tracking-wide mb-8 hover:border-blue-500/40 transition-colors cursor-default shadow-[0_0_20px_rgba(59,130,246,0.1)] backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-signal"></span>
                    Systems &amp; Structure · Operator-Level
                </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold text-white tracking-tight mb-8">
                    Your Sales Team Isn't Underperforming.<br/> <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">It's Misbuilt.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-16 ml-auto">
                    Most sales problems aren't about effort — they're about structure. Collin Cadmus helps teams fix the systems behind pipeline and performance.
                </p>

<div className="w-full aspect-video bg-[#050505] border border-white/10 rounded-[2rem] flex flex-col items-center justify-center mb-8 shadow-[0_0_80px_rgba(59,130,246,0.1)] relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent mix-blend-overlay"></div>
<div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white mb-4 shadow-[0_0_30px_rgba(59,130,246,0.4)] group-hover:scale-110 transition-transform duration-300 cursor-pointer">
<iconify-icon className="ml-1" icon="solar:play-bold" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Video Placeholder</span>
<div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-sm font-medium text-white flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        Watch: Why Sales Teams Break as They Scale
                    </div>
</div>

<div className="max-w-3xl mx-auto text-left mb-16 space-y-8 bg-[#09090b]/80 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl relative">
<p className="text-xl md:text-2xl text-white font-medium tracking-tight leading-snug">
                        If your team is growing but results aren't improving, the issue isn't effort. <span className="text-blue-400">It's structure.</span>
</p>
<div className="space-y-4">
<p className="text-zinc-400 text-base">Most teams:</p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-zinc-300">Hire before defining roles</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-zinc-300">Scale headcount without fixing process</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-zinc-300">Build pipeline without clear ownership</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-zinc-300">Rely on activity instead of systems</span>
</li>
</ul>
</div>
<div className="pt-6 border-t border-white/5 space-y-4">
<p className="text-zinc-400 text-base">In this video, Collin breaks down:</p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-blue-400" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-zinc-300">Why sales teams struggle as they grow</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-blue-400" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-zinc-300">What strong sales systems actually look like</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-blue-400" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-zinc-300">How to fix the structure behind performance</span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col items-center justify-center">
<a className="group relative inline-flex h-14 items-center justify-center gap-3 rounded-full bg-blue-600 px-10 text-lg font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] hover:bg-blue-500 ring-1 ring-white/10" href="#cta">
                        Fix My Sales Team
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#020202] relative z-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8 text-center">Teams building stronger sales systems</p>
<div className="w-full h-24 bg-zinc-900/50 border border-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden max-w-4xl mx-auto">
<span className="text-zinc-600 font-mono text-sm tracking-widest uppercase">Image Placeholder (Logos)</span>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative z-20" id="problem">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 text-zinc-400 mb-8 border border-white/10 shadow-lg">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="md:text-5xl leading-tight text-4xl font-semibold text-white tracking-tight">
                        Why Sales Teams Break As They Scale
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 hover:bg-zinc-900/80 transition-colors">
<div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300 mb-6 border border-white/5">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Hiring without structure</h3>
<p className="text-zinc-400 leading-relaxed text-sm">New reps join unclear systems. Without a defined playbook and structured onboarding, scaling headcount simply scales confusion.</p>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 hover:bg-zinc-900/80 transition-colors">
<div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300 mb-6 border border-white/5">
<iconify-icon icon="solar:funnel-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Pipeline lacks ownership</h3>
<p className="text-zinc-400 leading-relaxed text-sm">No clear accountability for results. When SDRs, AEs, and Marketing point fingers, the system is broken at its core.</p>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 hover:bg-zinc-900/80 transition-colors">
<div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300 mb-6 border border-white/5">
<iconify-icon icon="solar:chart-line-down-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Managers manage activity</h3>
<p className="text-zinc-400 leading-relaxed text-sm">Instead of improving systems, managers track call volumes. Activity metrics don't fix broken conversion rates.</p>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 hover:bg-zinc-900/80 transition-colors">
<div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300 mb-6 border border-white/5">
<iconify-icon icon="solar:network-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Growth creates complexity</h3>
<p className="text-zinc-400 leading-relaxed text-sm">Without process, performance drops. What worked for 3 reps completely shatters when applied to 30 reps without operational rigor.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#020202] relative z-20">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-8">
                    The Problem Isn't Your Team. <br/><span className="text-blue-500">It's Your System.</span>
</h2>
<div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
<p>Better reps won't fix this.</p>
<p>More calls won't fix this.</p>
<p className="pt-6 border-t border-white/5 font-medium text-white">Sales performance improves when:</p>
<ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-2">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Structure is clear</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Roles are defined</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Systems are consistent</li>
</ul>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] border-b border-white/5" id="process">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-24">
<span className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4 block">The Mechanism</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        Sales System Design
                    </h2>
<p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Top teams don't rely on effort. They rely on defined roles, clear pipeline ownership, and repeatable systems. This is what turns <span className="text-white font-medium">Growth → into scalable revenue</span>.
                    </p>
</div>
<div className="max-w-3xl mx-auto">
<h3 className="text-2xl font-semibold text-white mb-12 tracking-tight text-center">How Collin Fixes Sales Teams</h3>

<div className="relative pl-8 md:pl-16 pb-16 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-blue-500 transition-colors">
<span className="font-mono text-sm">01</span>
</div>
<div className="pt-2">
<h4 className="text-xl text-white font-semibold mb-3 tracking-tight">Identify structural gaps</h4>
<p className="text-zinc-400 text-base leading-relaxed">
                                Deep dive into current operations, metrics, and team alignment to find exactly where the pipeline is breaking down and why efforts aren't converting to revenue.
                            </p>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-16 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-blue-500 transition-colors">
<span className="font-mono text-sm">02</span>
</div>
<div className="pt-2">
<h4 className="text-xl text-white font-semibold mb-3 tracking-tight">Redesign roles and systems</h4>
<p className="text-zinc-400 text-base leading-relaxed">
                                Establish clear boundaries for SDRs, AEs, and management. Build repeatable playbooks, define strict pipeline ownership, and align compensation with desired behaviors.
                            </p>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-4 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-blue-500 transition-colors">
<span className="font-mono text-sm">03</span>
</div>
<div className="pt-2">
<h4 className="text-xl text-white font-semibold mb-3 tracking-tight">Improve execution and accountability</h4>
<p className="text-zinc-400 text-base leading-relaxed">
                                Transition management from tracking raw activity to coaching through systems. Implement rigorous pipeline reviews and forecasting models that create predictable performance.
                            </p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-black transition-all duration-300 hover:bg-zinc-200" href="#cta">
                            Improve My Sales System
                        </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-b border-white/5 relative">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="w-full aspect-[21/9] bg-zinc-900 border border-white/10 rounded-3xl flex items-center justify-center mb-8 relative overflow-hidden">
<span className="text-zinc-600 font-mono text-sm tracking-widest uppercase">Image Placeholder (Teams/Proof)</span>
</div>
<p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Teams improving structure and performance</p>
<p className="text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
                    Sales teams work with Collin Cadmus to improve how they structure, scale, and manage sales performance.
                </p>
</div>
</section>

<section className="py-24 bg-[#050505] border-b border-white/5 relative" id="included">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">What's Included</h2>
<p className="text-zinc-400 text-lg">Comprehensive systems design for revenue organizations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between group overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:structure-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Sales System Design &amp; Pipeline Strategy</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-md">End-to-end architecture of your sales motion. We map the buyer journey, define clear stages, and establish strict pipeline ownership to ensure predictable revenue generation.</p>
</div>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col group overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Hiring &amp; Role Structuring</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-4">Stop guessing who to hire next. Define exact profiles, build rigorous interview processes, and structure roles so every rep knows exactly what they own.</p>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:user-speak-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-2">Leadership Advisory</h3>
<p className="text-zinc-400 text-base leading-relaxed">Direct support for founders and sales leaders. Move from managing activity to leading through systems, strategy, and high-leverage coaching.</p>
</div>
</div>

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col md:flex-row items-center justify-between overflow-hidden gap-6">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Revenue Growth Frameworks</h3>
<p className="text-zinc-400 text-base leading-relaxed">Implement scalable models for forecasting, compensation, and territory design. Ensure your backend structures support hyper-growth without breaking.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-b border-white/5 relative" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="aspect-square bg-zinc-900 border border-white/10 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden shadow-2xl">
<span className="text-zinc-600 font-mono text-sm tracking-widest uppercase">Image Placeholder (Collin)</span>
</div>
<div className="space-y-6">
<h2 className="text-3xl font-semibold text-white tracking-tight">Hi, I'm Collin Cadmus.</h2>
<div className="space-y-4 text-lg text-zinc-400 leading-relaxed">
<p>I work with companies that are growing but struggling to scale sales performance.</p>
<p>The issue isn't effort — it's how the system is built.</p>
<p>My focus is helping teams create structure so performance becomes consistent.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-b border-white/5 relative">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-16 text-center">Frequently Asked Questions</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
<div>
<h4 className="text-lg font-medium text-white mb-2">Who is this for?</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Founders and sales leaders scaling teams who need stronger systems and structural alignment to maintain performance.</p>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-2">Is this consulting or training?</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Both — focused strictly on systems and execution. We design the playbooks, then ensure leadership and reps can execute them.</p>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-2">Does this work for early-stage teams?</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Yes, especially teams preparing to scale. Building the right structure at 3 reps prevents disaster at 30 reps.</p>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-2">What makes this different?</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Focus on structure, not just activity. We don't just tell your reps to "make more calls" — we fix the system that makes calls convert.</p>
</div>
<div className="md:col-span-2 pt-6 border-t border-white/5">
<h4 className="text-lg font-medium text-white mb-2">How do we start?</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Book a call below to discuss your current structure and identify immediate gaps in your sales system.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-[#020202]" id="cta">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-start">

<div className="flex flex-col justify-center h-full pt-4 lg:pt-12">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                            Build a Sales Team That Scales
                        </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                            Book a call to fix the systems behind your sales performance.
                        </p>
<div className="mt-auto">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20 text-sm font-medium">
<iconify-icon icon="solar:calendar-date-linear" width="18"></iconify-icon>
                                Select a time on the calendar
                            </div>
</div>
</div>

<div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 flex items-center justify-center">
<div className="text-center p-8">
<iconify-icon className="text-zinc-700 mb-4 block mx-auto" icon="solar:calendar-mark-linear" width="48"></iconify-icon>
<span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Calendly Placeholder</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-20 pb-10 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
<a className="flex items-center gap-3 text-white font-semibold tracking-tight text-lg group" href="/">
<div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-blue-500/5 relative overflow-hidden group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-blue-500 transition-colors duration-300" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
                    Collin Cadmus
                </a>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">YouTube</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-600 text-xs">
                    © 2024 Collin Cadmus. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
