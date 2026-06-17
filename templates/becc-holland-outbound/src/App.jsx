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
<nav aria-label="Main menu" className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a aria-label="Back to home" className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-emerald-500/10 overflow-hidden group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-all duration-300 bg-emerald-500/10 w-9 h-9 border-emerald-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon aria-hidden="true" className="text-emerald-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:text-bold-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-sm">Flip the Script</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-zinc-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-black bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#demo">
                    Fix My Outbound
                    <iconify-icon aria-hidden="true" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main>

<section className="overflow-hidden min-h-screen pt-44 pb-20 relative flex flex-col justify-center">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-emerald-600/10 blur-[150px] rounded-[100%] pointer-events-none mix-blend-screen z-0 animate-wave"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div className="z-10 text-center max-w-5xl mx-auto px-6 relative w-full">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-300 text-xs uppercase font-medium tracking-wide mb-8 hover:border-emerald-500/40 transition-colors cursor-default shadow-[0_0_20px_rgba(16,185,129,0.1)] backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-signal"></span>
                    Messaging Architecture &amp; Training
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.05] mb-6">
                    Your Outbound Isn’t Underperforming.<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">It’s Misaligned.</span>
</h1>
<p className="text-lg md:text-xl font-normal text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                    Most outbound fails because it starts with your product. Becc Holland shows teams how to start with the buyer’s problem instead.
                </p>

<div className="relative w-full max-w-4xl mx-auto aspect-video bg-[#09090b] border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/5 group cursor-pointer flex items-center justify-center mb-16 transition-all hover:border-white/20 hover:ring-white/10">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-50 transition-opacity duration-500"></div>
<div className="w-24 h-24 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-white z-20 backdrop-blur-md group-hover:scale-110 group-hover:bg-emerald-500/40 transition-all duration-300 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
<iconify-icon className="ml-2" icon="solar:play-bold" width="40"></iconify-icon>
</div>
<div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/10">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs text-white font-medium tracking-wide">Watch: Why Your Outbound Isn’t Getting Replies</span>
</div>
</div>

<div className="max-w-3xl mx-auto text-left bg-zinc-900/30 border border-white/5 rounded-2xl p-8 backdrop-blur-sm mb-12 text-base text-zinc-300 leading-relaxed space-y-6">
<p>If your team is sending outbound and not getting responses, this isn’t a volume problem. <strong>It’s a messaging problem.</strong></p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<p className="text-white font-medium mb-3">Most teams:</p>
<ul className="space-y-2">
<li className="flex items-start gap-2"><iconify-icon className="text-red-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="18"></iconify-icon> <span>personalize instead of becoming relevant</span></li>
<li className="flex items-start gap-2"><iconify-icon className="text-red-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="18"></iconify-icon> <span>talk about themselves instead of the buyer</span></li>
<li className="flex items-start gap-2"><iconify-icon className="text-red-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="18"></iconify-icon> <span>rely on templates instead of understanding problems</span></li>
</ul>
</div>
<div>
<p className="text-white font-medium mb-3">In this video, Becc breaks down:</p>
<ul className="space-y-2">
<li className="flex items-start gap-2"><iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon> <span>why outbound fails even when activity is high</span></li>
<li className="flex items-start gap-2"><iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon> <span>what top-performing reps do differently</span></li>
<li className="flex items-start gap-2"><iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon> <span>how messaging changes when you focus on problems</span></li>
</ul>
</div>
</div>
</div>
<div className="flex w-full items-center justify-center">
<a className="group relative inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-emerald-500 px-10 text-base font-medium text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)]" href="#demo">
                        Fix My Outbound
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#020202] relative z-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<p className="text-xs text-zinc-500 uppercase tracking-wide font-medium mb-8">Teams rebuilding outbound with Flip the Script</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-semibold text-white"><iconify-icon icon="solar:globus-linear" width="24"></iconify-icon> EnterpriseCorp</div>
<div className="flex items-center gap-2 text-xl font-semibold text-white"><iconify-icon icon="solar:layers-linear" width="24"></iconify-icon> ScaleTech</div>
<div className="flex items-center gap-2 text-xl font-semibold text-white"><iconify-icon icon="solar:box-linear" width="24"></iconify-icon> HyperGrowth</div>
<div className="flex items-center gap-2 text-xl font-semibold text-white"><iconify-icon icon="solar:cpu-linear" width="24"></iconify-icon> DataSystems</div>
<div className="flex items-center gap-2 text-xl font-semibold text-white hidden md:flex"><iconify-icon icon="solar:cloud-linear" width="24"></iconify-icon> CloudSync</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative z-20" id="problem">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500 mb-8 border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8 leading-tight">
                    Outbound Doesn’t Fail Because of Effort
                </h2>
<p className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto font-medium">
                    It fails because of how teams think about messaging.
                </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5">
<p className="text-white font-medium mb-4 text-lg">Most teams believe:</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-zinc-400">
<iconify-icon className="text-zinc-600 shrink-0 mt-0.5" icon="solar:minus-circle-linear" width="20"></iconify-icon>
<span>personalization = relevance</span>
</li>
<li className="flex items-start gap-3 text-zinc-400">
<iconify-icon className="text-zinc-600 shrink-0 mt-0.5" icon="solar:minus-circle-linear" width="20"></iconify-icon>
<span>volume = results</span>
</li>
<li className="flex items-start gap-3 text-zinc-400">
<iconify-icon className="text-zinc-600 shrink-0 mt-0.5" icon="solar:minus-circle-linear" width="20"></iconify-icon>
<span>templates = efficiency</span>
</li>
</ul>
</div>
<div className="p-8 rounded-2xl bg-red-900/10 border border-red-500/10">
<p className="text-white font-medium mb-4 text-lg">What actually happens:</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-zinc-400">
<iconify-icon className="text-red-400 shrink-0 mt-0.5" icon="solar:arrow-right-linear" width="20"></iconify-icon>
<span>prospects ignore messages instantly</span>
</li>
<li className="flex items-start gap-3 text-zinc-400">
<iconify-icon className="text-red-400 shrink-0 mt-0.5" icon="solar:arrow-right-linear" width="20"></iconify-icon>
<span>SDRs lose confidence</span>
</li>
<li className="flex items-start gap-3 text-zinc-400">
<iconify-icon className="text-red-400 shrink-0 mt-0.5" icon="solar:arrow-right-linear" width="20"></iconify-icon>
<span>pipeline becomes unpredictable</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 border-y border-white/5 bg-[#020202] relative z-20">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 mb-8 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
<iconify-icon icon="solar:lightbulb-bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8 leading-tight">
                    The Problem Isn’t Outbound.<br/>It’s Where You Start.
                </h2>
<p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-12">
                    Outbound built around your product will always struggle. Outbound built around the buyer’s problem creates conversations.
                </p>
<div className="max-w-2xl mx-auto bg-zinc-900/40 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
<p className="text-sm text-zinc-500 uppercase tracking-widest font-mono mb-6">This is the shift</p>
<div className="flex flex-col gap-6 text-left">
<div className="flex items-center gap-4 p-4 rounded-xl bg-black/50 border border-white/5 opacity-60">
<span className="text-xs font-mono text-zinc-500 w-12">From →</span>
<span className="text-base text-zinc-400">"Here’s what we do"</span>
</div>
<div className="flex items-center gap-4 p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
<span className="text-xs font-mono text-emerald-400 w-12 font-medium">To →</span>
<span className="text-lg text-white font-medium">"Here’s what you’re already dealing with"</span>
</div>
</div>
<p className="text-emerald-400 font-medium mt-8 text-lg">That’s where replies happen.</p>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] border-b border-white/5" id="process">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
<span className="text-emerald-500">Flip the Script</span> Mechanism
                    </h2>
<p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Outbound should not begin with your solution. It should begin with a problem the buyer already recognizes. This is how teams fix outbound messaging.
                    </p>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-emerald-500 transition-colors">
<span className="font-mono text-sm font-semibold">1</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-emerald-400 font-mono text-xs uppercase tracking-wide mb-3 block">Step 01</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Break current assumptions</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                Stop leading with features and fabricated personalization. We tear down the templates that cause buyers to delete your emails before reading them.
                            </p>
</div>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium">Ditch the "Me" Focus</h4>
</div>
<p className="text-zinc-500 text-xs leading-relaxed">Remove product-first language that signals you are just another vendor pitching.</p>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:eye-broken-linear" width="18"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium">Audit the Inbox</h4>
</div>
<p className="text-zinc-500 text-xs leading-relaxed">Analyze what actually makes a buyer stop scrolling and pay attention to a cold message.</p>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-emerald-500 transition-colors">
<span className="font-mono text-sm font-semibold">2</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-emerald-400 font-mono text-xs uppercase tracking-wide mb-3 block">Step 02</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Identify real buyer problems</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                Begin with a problem the buyer already recognizes, a pattern they’ve already experienced, or a situation they already understand.
                            </p>
</div>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:target-linear" width="18"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium">Problem Mapping</h4>
</div>
<p className="text-zinc-500 text-xs leading-relaxed">Map the exact friction points your buyer experiences in their daily operations.</p>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:chat-round-line-linear" width="18"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium">Buyer Vocabulary</h4>
</div>
<p className="text-zinc-500 text-xs leading-relaxed">Learn to describe the problem using the exact words and context your buyers use internally.</p>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-12 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-emerald-500 transition-colors">
<span className="font-mono text-sm font-semibold">3</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-emerald-400 font-mono text-xs uppercase tracking-wide mb-3 block">Step 03</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Build repeatable patterns</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                This is what makes a message feel relevant without needing heavy manual personalization. Create scalable architectures that work.
                            </p>
</div>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:copy-linear" width="18"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium">Messaging Frameworks</h4>
</div>
<p className="text-zinc-500 text-xs leading-relaxed">Develop structures that reps can rely on, ensuring consistency and relevance across the team.</p>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:chart-square-linear" width="18"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium">Scalable Execution</h4>
</div>
<p className="text-zinc-500 text-xs leading-relaxed">Deploy the new messaging system across your tech stack to generate predictable responses.</p>
</div>
</div>
</div>
</div>
<div className="mt-16 flex justify-center">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-white px-8 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#demo">
                        Improve My Messaging
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#020202] border-b border-white/5 relative overflow-hidden">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl group">
<div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors z-10"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-8 text-center">
<iconify-icon className="text-emerald-400 mb-4 opacity-80" icon="solar:users-group-two-rounded-linear" width="48"></iconify-icon>
<p className="text-sm text-zinc-300 font-mono tracking-wide uppercase bg-black/50 px-4 py-2 rounded-lg backdrop-blur-md border border-white/10">Teams applying problem-first messaging</p>
</div>
</div>

<div className="flex flex-col justify-center">
<div className="flex text-emerald-500 gap-1 mb-6">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6 leading-tight">
                            "Sales teams use Flip the Script to rethink how outbound is written and why buyers respond."
                        </h3>
<p className="text-zinc-400 text-lg leading-relaxed mb-8">
                            It’s not just about changing a subject line. It’s a fundamental shift in architecture that turns SDRs into trusted advisors rather than feature-pitchers.
                        </p>
<div className="flex items-center gap-4 pt-6 border-t border-white/10">
<div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-white font-medium">Proven Results</div>
<div className="text-zinc-500 text-sm">Across B2B SaaS organizations</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-b border-white/5 relative" id="included">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">What's Included</h2>
<p className="text-zinc-400 text-base max-w-xl mx-auto">Everything you need to rebuild your outbound engine.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between group overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Problem-Based Messaging Frameworks</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-md">Detailed, fill-in-the-blank architectures that force reps to focus on buyer friction rather than product features. Scalable and repeatable.</p>
</div>
</div>
<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col group overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:presentation-graph-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Outbound Strategy Training</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-4">Comprehensive methodology to align your entire GTM team on the new problem-first approach.</p>
</div>
<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:user-speak-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-2">SDR Messaging Coaching</h3>
<p className="text-zinc-400 text-base leading-relaxed">Direct feedback and iteration cycles to ensure reps master the frameworks in the real world.</p>
</div>
</div>
<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-2">Flip the Script Workshops</h3>
<p className="text-zinc-400 text-base leading-relaxed">Interactive sessions to break down old habits and build new messaging muscles collectively.</p>
</div>
</div>
<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:settings-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-2">Sales Messaging Systems</h3>
<p className="text-zinc-400 text-base leading-relaxed">Integration of the new architecture into your sales engagement tools for seamless execution.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-b border-white/5 relative overflow-hidden" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="flex flex-col justify-center order-2 md:order-1">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-6">
                            Hi, I’m Becc Holland.
                        </h2>
<div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
<p>I work with teams that are doing outbound but not getting replies.</p>
<p>The issue isn’t effort. It’s how messaging is built.</p>
<p className="text-white font-medium border-l-2 border-emerald-500 pl-4 py-1">
                                Flip the Script helps teams understand what actually makes a buyer respond — and how to repeat it.
                            </p>
</div>
</div>

<div className="relative aspect-[3/4] md:aspect-square rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl order-1 md:order-2 group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center opacity-60 mix-blend-luminosity group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 z-20">
<div className="text-white font-medium text-xl">Becc Holland</div>
<div className="text-emerald-400 text-sm">Founder, Flip the Script</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#020202] border-b border-white/5 relative" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">
<details className="group rounded-2xl bg-zinc-900/40 border border-white/5 overflow-hidden open:bg-zinc-900/80 open:border-white/10 transition-colors cursor-pointer">
<summary className="flex justify-between items-center p-6 text-white font-medium outline-none">
                            Who is this for?
                            <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                            Outbound teams not getting replies. If your reps are putting in the activity but the pipeline isn't reflecting it, this is for you.
                        </div>
</details>
<details className="group rounded-2xl bg-zinc-900/40 border border-white/5 overflow-hidden open:bg-zinc-900/80 open:border-white/10 transition-colors cursor-pointer">
<summary className="flex justify-between items-center p-6 text-white font-medium outline-none">
                            Does this replace personalization?
                            <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                            It replaces ineffective personalization with relevance. We stop looking for random facts about a prospect and start looking for business problems they are likely facing.
                        </div>
</details>
<details className="group rounded-2xl bg-zinc-900/40 border border-white/5 overflow-hidden open:bg-zinc-900/80 open:border-white/10 transition-colors cursor-pointer">
<summary className="flex justify-between items-center p-6 text-white font-medium outline-none">
                            Is this training or consulting?
                            <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                            Both. We provide the strategic architecture (consulting) and ensure your team knows exactly how to execute it daily (training).
                        </div>
</details>
<details className="group rounded-2xl bg-zinc-900/40 border border-white/5 overflow-hidden open:bg-zinc-900/80 open:border-white/10 transition-colors cursor-pointer">
<summary className="flex justify-between items-center p-6 text-white font-medium outline-none">
                            Does this work for experienced SDRs?
                            <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                            Yes — especially teams already doing outbound. They already know the pain of bad response rates, making them the most receptive to a system that actually works.
                        </div>
</details>
<details className="group rounded-2xl bg-zinc-900/40 border border-white/5 overflow-hidden open:bg-zinc-900/80 open:border-white/10 transition-colors cursor-pointer" open="">
<summary className="flex justify-between items-center p-6 text-white font-medium outline-none">
                            How do we start?
                            <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                            Book a call below. We'll discuss your current outbound motion and see if a problem-first approach is the right fix.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-black" id="demo">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-start">

<div className="flex flex-col justify-center h-full pt-4 lg:pt-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-300 text-xs uppercase font-medium tracking-wide mb-6 w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-signal"></span>
                            Take Action
                        </div>
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                            Start Getting Replies<br/>From Outbound.
                        </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                            Book a call to see how your messaging can be rebuilt around what buyers actually care about.
                        </p>
<div className="hidden lg:block space-y-4">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
<iconify-icon aria-hidden="true" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Evaluate current messaging</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
<iconify-icon aria-hidden="true" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Identify friction points</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
<iconify-icon aria-hidden="true" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Map a path to relevance</span>
</div>
</div>
</div>

<div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5">
<div className="cal-inline-container flex items-center justify-center flex-col gap-4" id="my-cal-inline-15min" style={{width: '100%', height: '100%', overflow: 'scroll'}}>

<iconify-icon className="text-emerald-500/50" icon="solar:calendar-date-bold-duotone" width="48"></iconify-icon>
<p className="text-zinc-500 text-sm font-medium">Booking Calendar Embed Area</p>
<button className="mt-4 px-6 py-2 bg-emerald-500 text-black text-sm font-medium rounded-full hover:bg-emerald-400 transition-colors">Book My Call</button>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-12 pb-8 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<a className="flex items-center gap-2 text-white font-medium tracking-tight text-base group" href="/">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shadow-lg relative overflow-hidden group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-emerald-500 transition-colors duration-300" icon="solar:text-bold-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
                    Flip the Script
                </a>
<div className="text-zinc-600 text-xs">
                    © 2024 Flip the Script. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
