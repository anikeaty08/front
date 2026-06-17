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
<nav aria-label="Menu principal" className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-blue-500/10 overflow-hidden group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300 bg-blue-500/10 w-9 h-9 border-blue-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon aria-hidden="true" className="text-blue-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-sm">Predictable Revenue</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-blue-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-white bg-blue-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_0_20px_rgba(59,130,246,0.2)]" href="#cta">
                    Fix My Pipeline
                    <iconify-icon aria-hidden="true" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main>

<section className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative">

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="pipeline-line" style={{top: '15%', animationDelay: '0s'}}></div>
<div className="pipeline-line" style={{top: '35%', animationDelay: '4s', height: '2px', width: '400px'}}></div>
<div className="pipeline-line" style={{top: '65%', animationDelay: '2s'}}></div>
<div className="pipeline-line" style={{top: '85%', animationDelay: '6s', width: '200px'}}></div>
<div className="pipeline-line-vert" style={{left: '20%', animationDelay: '1s'}}></div>
<div className="pipeline-line-vert" style={{left: '50%', animationDelay: '5s', width: '2px'}}></div>
<div className="pipeline-line-vert" style={{left: '80%', animationDelay: '3s'}}></div>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div className="z-10 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-300 text-xs uppercase font-medium tracking-wide mb-8 shadow-[0_0_20px_rgba(59,130,246,0.1)] backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-signal"></span>
                    Predictable Pipeline Systems · Operator-level
                </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold text-white tracking-tight mb-8">
                    Your Pipeline Isn’t Predictable.<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">It’s Reactive.</span>
</h1>
<p className="leading-relaxed text-lg font-normal text-zinc-400 max-w-2xl mr-auto mb-12 ml-auto">
                    Most outbound teams generate pipeline, but not consistently. Collin Stewart helps teams build systems that make pipeline repeatable.
                </p>

<div className="relative w-full max-w-4xl mx-auto mb-10 aspect-video bg-[#050505] border border-white/10 rounded-3xl flex flex-col items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)] group cursor-pointer hover:border-blue-500/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="w-20 h-20 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
<iconify-icon icon="solar:play-bold" width="32"></iconify-icon>
</div>
<p className="text-zinc-300 font-medium tracking-wide">VIDEO PLACEHOLDER</p>
<p className="text-sm text-zinc-500 mt-2 font-mono">Watch: Why Pipeline Isn’t Predictable</p>
</div>

<div className="max-w-3xl mx-auto text-left bg-zinc-900/40 border border-white/5 rounded-2xl p-8 md:p-10 mb-12 backdrop-blur-sm">
<p className="text-lg text-white font-medium mb-6">If your pipeline fluctuates month to month, the issue isn’t effort. It’s structure.</p>
<p className="text-zinc-400 mb-6">Most teams:</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-zinc-400">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
                            Rely on individual rep performance
                        </li>
<li className="flex items-start gap-3 text-zinc-400">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
                            Lack consistent outbound systems
                        </li>
<li className="flex items-start gap-3 text-zinc-400">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
                            Scale activity without process
                        </li>
<li className="flex items-start gap-3 text-zinc-400">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
                            Don’t have predictable pipeline inputs
                        </li>
</ul>
<p className="text-zinc-400 mb-4">In this video, Collin breaks down:</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
                            Why pipeline feels inconsistent
                        </li>
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
                            How top teams create repeatable outbound
                        </li>
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
                            What makes pipeline predictable
                        </li>
</ul>
</div>
<div className="flex flex-col mb-10 items-center justify-center">
<a className="group relative inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-blue-600 px-10 text-base font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] ring-1 ring-white/10" href="#cta">
                        Fix My Pipeline
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-16 border-y border-white/5 bg-[#020202] relative z-20">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs text-zinc-500 mb-8 uppercase tracking-widest font-mono">Teams building predictable pipeline systems</p>
<div className="w-full h-28 bg-zinc-900/50 border border-white/5 rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden group">
<div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
<span className="text-zinc-500 font-medium tracking-widest z-10">IMAGE PLACEHOLDER (LOGOS)</span>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative z-20" id="problem">
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-500 mb-8 border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="md:text-5xl leading-tight text-4xl font-semibold text-white tracking-tight mb-16">
                    Why Pipeline Isn’t Consistent
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
<div className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-5">
<iconify-icon icon="solar:user-cross-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Reliance on individuals</h3>
<p className="text-zinc-400">Performance varies by rep. When your pipeline depends solely on heroics, consistency is impossible.</p>
</div>
<div className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-5">
<iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">No structured outbound system</h3>
<p className="text-zinc-400">Activities aren’t repeatable. Every day feels like starting from scratch without a defined playbook.</p>
</div>
<div className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-5">
<iconify-icon icon="solar:graph-down-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Pipeline lacks predictability</h3>
<p className="text-zinc-400">Results fluctuate month to month. Forecasting becomes a guessing game rather than a math equation.</p>
</div>
<div className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-5">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Scaling breaks performance</h3>
<p className="text-zinc-400">More reps don’t equal more pipeline. Without systems, adding headcount just multiplies the chaos.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black border-y border-white/5" id="process">
<div className="max-w-6xl mx-auto px-6">

<div className="text-center mb-24 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8 leading-tight">
                        The Problem Isn’t Effort.<br/>
<span className="text-blue-500">It’s Repeatability.</span>
</h2>
<p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                        More outreach won’t fix this. More hires won’t fix this.
                    </p>
<p className="text-zinc-300 text-lg leading-relaxed font-medium">
                        Pipeline becomes predictable when:<br/>
                        systems are clear, processes are repeatable, and inputs are consistent.
                    </p>
</div>

<div className="mb-16">
<h3 className="text-2xl text-white font-semibold tracking-tight mb-4">Predictable Pipeline Systems</h3>
<p className="text-zinc-400 text-base max-w-2xl">
                        Top teams don’t rely on luck. They rely on structured outbound, defined inputs, and repeatable processes. This is what turns activity into predictable pipeline.
                    </p>
</div>

<div className="mt-12">

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#000000] group-hover:border-blue-500 transition-colors">
<span className="font-mono text-sm">01</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-blue-500 font-mono text-xs uppercase tracking-wide mb-3 block">Step 1</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Analyze current outbound structure</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                    We dive deep into your existing activities, rep performance, and data inputs to identify exactly where the breakdowns occur in your pipeline generation.
                                </p>
</div>
<div className="lg:col-span-7 bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/50 hover:border-white/10 transition-colors flex items-center justify-center min-h-[200px]">
<div className="text-zinc-500 font-mono text-sm tracking-widest">IMAGE PLACEHOLDER: Audit Framework</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#000000] group-hover:border-blue-500 transition-colors">
<span className="font-mono text-sm">02</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-blue-500 font-mono text-xs uppercase tracking-wide mb-3 block">Step 2</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Build repeatable pipeline systems</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                    We implement structural frameworks tailored to your team. Clear inputs, defined targeting, and operational playbooks that take the guesswork out of outbound.
                                </p>
</div>
<div className="lg:col-span-7 bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/50 hover:border-white/10 transition-colors flex items-center justify-center min-h-[200px]">
<div className="text-zinc-500 font-mono text-sm tracking-widest">IMAGE PLACEHOLDER: Outbound System Architecture</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-12 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#000000] group-hover:border-blue-500 transition-colors">
<span className="font-mono text-sm">03</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-blue-500 font-mono text-xs uppercase tracking-wide mb-3 block">Step 3</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Improve consistency and scale</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                    Once the foundation is set, we refine and scale. Reps execute consistently, pipeline becomes predictable, and adding headcount actually multiplies results.
                                </p>
</div>
<div className="lg:col-span-7 bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/50 hover:border-white/10 transition-colors flex items-center justify-center min-h-[200px]">
<div className="text-zinc-500 font-mono text-sm tracking-widest">IMAGE PLACEHOLDER: Growth &amp; Scale Chart</div>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-blue-600 px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02] shadow-[0_0_30px_rgba(59,130,246,0.2)]" href="#cta">
                        Improve My Pipeline System
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-b border-white/5">
<div className="max-w-5xl mx-auto px-6 text-center">
<p className="text-lg text-zinc-300 mb-10 max-w-2xl mx-auto">
                    Revenue teams use Predictable Revenue frameworks to build more consistent and scalable pipeline systems.
                </p>
<div className="w-full h-80 bg-zinc-900/40 border border-white/5 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden group hover:border-white/10 transition-colors">
<span className="text-zinc-500 font-medium tracking-widest z-10">IMAGE PLACEHOLDER (Teams improving outbound consistency)</span>
</div>
</div>
</section>

<section className="py-32 bg-black border-b border-white/5 relative" id="included">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">What’s Included</h2>
<p className="text-zinc-400 text-lg">The core components of a predictable pipeline engine.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(280px,auto)]">
<div className="sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col group overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:settings-bold" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-4">Outbound System Design</h3>
<p className="text-zinc-400 text-base leading-relaxed">End-to-end mapping of your outbound activities to ensure consistent inputs generate predictable outputs.</p>
</div>
<div className="sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col group overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:users-group-two-rounded-bold" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-4">SDR Team Structuring</h3>
<p className="text-zinc-400 text-base leading-relaxed">Align your SDRs with the right roles, clear metrics, and processes that reduce variance between reps.</p>
</div>
<div className="sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col group overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:target-bold" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-4">Pipeline Strategy</h3>
<p className="text-zinc-400 text-base leading-relaxed">A repeatable playbook for targeting, messaging, and scaling pipeline generation efforts sustainably.</p>
</div>
<div className="sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col group overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:chart-square-bold" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-4">Revenue Systems &amp; Advisory</h3>
<p className="text-zinc-400 text-base leading-relaxed">Sales leadership advisory to build the underlying systems that support long-term revenue growth.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative border-b border-white/5" id="about">
<div className="max-w-4xl mx-auto px-6">
<div className="p-8 md:p-12 rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 flex flex-col md:flex-row gap-10 items-center shadow-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>
<div className="w-48 h-48 md:w-64 md:h-64 shrink-0 bg-zinc-900 border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden relative z-10 shadow-lg shadow-black/50">
<span className="text-zinc-600 font-mono text-sm tracking-widest text-center px-4">IMAGE PLACEHOLDER<br/>(Collin Stewart)</span>
</div>
<div className="relative z-10 flex-1 text-center md:text-left">
<div className="text-blue-500 font-mono text-xs uppercase tracking-wide mb-3">About</div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Hi, I’m Collin Stewart.</h2>
<div className="space-y-4 text-lg text-zinc-400 leading-relaxed">
<p>I work with companies that want predictable pipeline but struggle with inconsistency.</p>
<p>The issue isn’t effort — it’s how outbound is structured.</p>
<p className="text-zinc-300 font-medium">My focus is helping teams build systems that generate pipeline consistently.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5">
<h3 className="text-lg font-medium text-white mb-2">Who is this for?</h3>
<p className="text-zinc-400">Revenue leaders and outbound teams.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5">
<h3 className="text-lg font-medium text-white mb-2">Is this consulting or training?</h3>
<p className="text-zinc-400">Both — focused on systems and execution.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5">
<h3 className="text-lg font-medium text-white mb-2">Does this work for scaling teams?</h3>
<p className="text-zinc-400">Yes, especially teams growing outbound.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5">
<h3 className="text-lg font-medium text-white mb-2">What makes this different?</h3>
<p className="text-zinc-400">Focus on predictable systems, not activity.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5">
<h3 className="text-lg font-medium text-white mb-2">How do we start?</h3>
<p className="text-zinc-400">Book a call using the calendar below.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden border-t border-white/5" id="cta">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl flex flex-col lg:flex-row items-center">

<div className="w-full lg:w-1/2 p-10 lg:p-16 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-300 text-xs uppercase font-medium tracking-wide mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-signal"></span>
                        Next Steps
                    </div>
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                        Build Predictable Pipeline
                    </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-sm mx-auto lg:mx-0">
                        Book a call to improve how your team generates pipeline consistently.
                    </p>
<a className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-blue-600 px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(59,130,246,0.3)]" href="#cta">
                        Book My Call
                    </a>
</div>

<div className="w-full lg:w-1/2 p-6 lg:p-10 lg:pl-0 h-[400px] lg:h-[600px]">
<div className="w-full h-full bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 flex flex-col items-center justify-center relative group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent"></div>
<iconify-icon className="text-blue-500/50 mb-4" icon="solar:calendar-date-bold-duotone" width="48"></iconify-icon>
<span className="text-zinc-500 font-mono tracking-widest text-sm z-10">CALENDLY PLACEHOLDER</span>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-16 pb-10 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 text-center md:text-left">
<a className="flex items-center gap-3 text-white font-semibold tracking-tight text-lg group" href="/">
<div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg relative overflow-hidden group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-blue-500 transition-colors duration-300" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
                    Predictable Revenue
                </a>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="https://www.linkedin.com/in/collinstewart" target="_blank">LinkedIn</a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="https://www.youtube.com/@PredictableRevenue" target="_blank">YouTube</a>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex justify-center md:justify-start">
<div className="text-zinc-600 text-xs">
                    © 2024 Predictable Revenue. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
