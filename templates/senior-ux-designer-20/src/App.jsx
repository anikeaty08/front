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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute blur-lg hue-rotate-90 brightness-125 opacity-70" data-alpha-mask="70" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 70%, transparent)'}}><div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: '1440px', height: '900px'}}></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md border-white/5 bg-zinc-950/80" style={{}}>
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="hover:opacity-80 transition-opacity text-lg font-medium tracking-tight text-zinc-100" href="#" style={{}}>Stephen Ogbodo</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="transition-colors hover:text-white" href="#work">Case Studies</a>
<a className="transition-colors hover:text-white" href="#systems">Systems</a>
<a className="transition-colors hover:text-white" href="#philosophy">Philosophy</a>
<a className="transition-colors hover:text-white" href="#about">About</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium border px-3 py-1.5 rounded transition-all bg-white/5 hover:bg-white/10 border-white/10 text-white" href="mailto:stephenogbodo21@gmail.com" style={{}}>
<iconify-icon className="" icon="lucide:mail" strokeWidth="1.5" width="14"></iconify-icon>
<span className="">Connect</span>
</a>
</div>
</nav>
<main className="pt-32 pr-6 pb-24 pl-6">

<section className="max-w-6xl mx-auto mb-32">
<div className="flex flex-col gap-6 max-w-4xl gap-x-6 gap-y-6">

<div className="mb-2">
<img alt="Stephen Ogbodo" className="w-20 h-20 rounded-full border object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-500 shadow-2xl border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d1878bc-8e61-4e79-9e27-2db00828f6db_320w.webp"/>
</div>
<div className="inline-flex uppercase text-xs font-medium text-zinc-500 tracking-widest gap-x-2 gap-y-2 items-center" style={{}}>Senior UI/UX &amp; Product Designer</div>
<h1 className="leading-[1.1] md:text-3xl text-5xl font-medium text-white tracking-tighter" style={{maskImage: 'linear-gradient(260deg, transparent, black 25%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(260deg, transparent, black 25%, black 100%, transparent)'}}>Designing execution‑aware, scalable digital products at the intersection of FinTech, SaaS, AI, and Web3.</h1>
<p className="text-lg leading-relaxed max-w-2xl md:text-base text-zinc-400" style={{}}>I am a Senior UI/UX &amp; Product Designer with 7+ years of experience building and scaling user‑centered digital products. My strength lies in translating complex systems into clear, execution‑ready interfaces that drive measurable outcomes.</p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="group flex items-center gap-2 px-5 py-3 rounded text-sm font-medium transition-all bg-zinc-100 text-zinc-950 hover:bg-white" href="#work" style={{}}>
                        View Selected Work
                        <iconify-icon className="group-hover:translate-y-0.5 transition-transform" icon="lucide:arrow-down" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<div className="flex items-center gap-6 px-4 text-zinc-500" style={{}}>
<iconify-icon icon="lucide:figma" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="" icon="lucide:framer" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-mono border px-2 py-1 rounded text-zinc-500 border-zinc-800" style={{}}>Execution-Aware Design</span>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mr-auto mb-32 ml-auto space-y-24" id="work">
<div className="border-b pb-4 mb-12 flex justify-between items-end border-white/5">
<h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest" style={{}}>Selected Deep Dives</h2>
<span className="text-xs font-mono text-zinc-600" style={{}}>2017 — 2024</span>
</div>

<article className="group grid md:grid-cols-12 gap-x-12 gap-y-12 items-start">
<div className="md:col-span-4 flex flex-col gap-6 sticky top-32">
<div className="">
<div className="flex items-center gap-2 text-xs font-mono mb-2 text-indigo-400" style={{}}>
<span className="">FINTECH</span>
<span>•</span>
<span className="">SAAS</span>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-2 text-white">Smart Money Trading</h3>
<p className="leading-relaxed text-zinc-400" style={{}}>
                            Designing an execution‑aware trading interface that answers critical questions on entry, timing, and risk validation.
                        </p>
</div>
<div className="grid grid-cols-2 gap-4 text-sm border-t pt-6 border-white/5">
<div className="">
<span className="block text-zinc-500 text-xs mb-1" style={{}}>Role</span>
<span className="text-zinc-300" style={{}}>Product Designer</span>
</div>
<div className="">
<span className="block text-zinc-500 text-xs mb-1" style={{}}>Impact</span>
<span className="text-zinc-300" style={{}}>Reduced Over-trading</span>
</div>
<div className="">
<span className="block text-zinc-500 text-xs mb-1" style={{}}>Focus</span>
<span className="text-zinc-300" style={{}}>Transparency &amp; Trust</span>
</div>
<div className="">
<span className="block text-xs text-zinc-500 mb-1">Strategy</span>
<span className="text-zinc-300" style={{}}>Prop-firm Grade</span>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm transition-colors mt-2 text-white hover:text-indigo-400" href="#" style={{}}>
                        Read Case Study <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<div className="md:col-span-8 space-y-6">

<div className="border rounded-lg overflow-hidden p-8 md:p-12 relative group-hover:border-zinc-700 transition-colors bg-zinc-900 border-white/5" style={{}}>
<div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-zinc-900/0 to-zinc-900/0 opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="w-full border rounded-md p-4 mb-4 shadow-xl relative z-10 bg-zinc-950 border-zinc-800" style={{}}>
<div className="flex justify-between items-center mb-6">
<div className="flex gap-2 items-center">
<div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 font-bold text-xs">BTC</div>
<div className="text-sm font-medium text-white">Bitcoin / USD</div>
<div className="text-xs px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-mono">LONG</div>
</div>
<div className="flex gap-2 text-xs font-mono text-zinc-500">
<span>H4</span>
<span className="text-zinc-300">H1</span>
<span>M15</span>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="border border-zinc-800 rounded p-3 bg-zinc-900/50">
<div className="text-[10px] text-zinc-500 uppercase tracking-wide mb-1">Execution Score</div>
<div className="flex items-end gap-2">
<div className="text-xl font-mono text-white">92/100</div>
<div className="text-xs text-emerald-400 mb-1">High Probability</div>
</div>
<div className="w-full h-1 bg-zinc-800 rounded-full mt-2 overflow-hidden">
<div className="h-full w-[92%] bg-emerald-500"></div>
</div>
</div>
<div className="border border-zinc-800 rounded p-3 bg-zinc-900/50">
<div className="text-[10px] text-zinc-500 uppercase tracking-wide mb-1">Time to Entry</div>
<div className="text-xl font-mono text-white">~45m</div>
<div className="text-xs text-zinc-500 mt-1">Waiting for retest at 64k</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-zinc-800 flex justify-between items-center">
<div className="text-xs text-zinc-400">Setup expires in <span className="text-zinc-200">2h 14m</span></div>
<button className="px-3 py-1.5 bg-indigo-600 text-white text-xs rounded hover:bg-indigo-500 transition-colors">Execute Trade</button>
</div>
</div>

<div className="w-full border rounded-md p-3 shadow-xl relative z-10 bg-zinc-950 border-zinc-800 mt-[-10px] mx-auto w-[95%] opacity-90 scale-95" style={{}}>
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-500">Historical Accuracy (Last 30d)</span>
<span className="text-white font-mono">87.4%</span>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 text-sm">
<div className="">
<h4 className="font-medium mb-2 text-white">The Problem</h4>
<p className="text-zinc-500 leading-relaxed" style={{}}>
                                Most trading platforms provide price levels without answering critical execution questions such as when to enter, how long to wait, or when a setup is invalid.
                            </p>
</div>
<div className="">
<h4 className="font-medium mb-2 text-white">Strategic Solution</h4>
<p className="leading-relaxed text-zinc-500">
                                I designed an execution‑aware interface that combines time‑to‑entry estimation, confidence scoring, and automated setup expiry to drive better decision making.
                            </p>
</div>
</div>
</div>
</article>

<article className="group grid md:grid-cols-12 gap-12 gap-x-12 gap-y-12 items-start">
<div className="md:col-span-4 flex flex-col gap-6 sticky top-32">
<div className="">
<div className="flex gap-2 text-xs text-purple-400 font-mono mb-2 gap-x-2 gap-y-2 items-center">
<span>WEB3</span>
<span>•</span>
<span className="">EDUCATION</span>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-2 text-white">Legacy Wallet &amp; Academy</h3>
<p className="leading-relaxed text-zinc-400" style={{}}>
                            Making Web3 accessible. A secure, user-friendly ecosystem including a wallet and education platform for mass adoption.
                        </p>
</div>
<div className="grid grid-cols-2 gap-4 text-sm border-t pt-6 border-white/5">
<div className="">
<span className="block text-zinc-500 text-xs mb-1" style={{}}>Role</span>
<span className="text-zinc-300" style={{}}>Lead UI/UX Designer</span>
</div>
<div className="">
<span className="block text-zinc-500 text-xs mb-1" style={{}}>Growth</span>
<span className="text-zinc-300" style={{}}>1M+ Downloads</span>
</div>
<div>
<span className="block text-zinc-500 text-xs mb-1" style={{}}>Quality</span>
<span className="text-zinc-300" style={{}}>4.8★ App Rating</span>
</div>
<div className="">
<span className="block text-zinc-500 text-xs mb-1" style={{}}>Platform</span>
<span className="text-zinc-300" style={{}}>Mobile App</span>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm transition-colors mt-2 text-white hover:text-purple-400" href="#" style={{}}>
                        Read Case Study <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<div className="md:col-span-8 space-y-6">

<div className="border rounded-lg overflow-hidden p-8 md:p-12 relative group-hover:border-zinc-700 transition-colors flex items-center justify-center bg-zinc-900 border-white/5" style={{}}>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] opacity-50 from-purple-900/10 via-zinc-900/0 to-zinc-900/0" style={{}}></div>

<div className="w-64 border rounded-3xl shadow-2xl relative z-10 overflow-hidden bg-zinc-950 border-zinc-800" style={{}}>

<div className="p-5 border-b backdrop-blur border-zinc-800 bg-zinc-950/80" style={{}}>
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-[10px]">L</div>
<span className="text-xs font-medium text-white">Legacy</span>
</div>
<iconify-icon className="text-zinc-400" icon="lucide:scan-line" width="16"></iconify-icon>
</div>
<div className="text-center mb-2">
<div className="text-xs text-zinc-500 mb-1" style={{}}>Total Balance</div>
<div className="text-2xl font-medium tracking-tight text-white">$12,450.00</div>
</div>
<div className="flex justify-center gap-4 mt-4">
<div className="flex flex-col items-center gap-1">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white border border-zinc-700"><iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon></div>
<span className="text-[10px] text-zinc-500">Send</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white border border-zinc-700"><iconify-icon icon="lucide:arrow-down-left" width="16"></iconify-icon></div>
<span className="text-[10px] text-zinc-500">Receive</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white border border-zinc-700"><iconify-icon icon="lucide:graduation-cap" width="16"></iconify-icon></div>
<span className="text-[10px] text-zinc-500">Learn</span>
</div>
</div>
</div>

<div className="p-4 bg-zinc-900/50">
<div className="text-[10px] uppercase tracking-wider font-medium text-zinc-600 mb-3" style={{}}>Academy Progress</div>
<div className="p-3 rounded border flex justify-between items-center bg-zinc-950 border-zinc-800" style={{}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center text-purple-400">
<iconify-icon icon="lucide:shield-check" width="14"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-200" style={{}}>Wallet Security 101</div>
<div className="text-[10px] text-zinc-500">Lesson 3/5</div>
</div>
</div>
<div className="w-4 h-4 rounded-full border border-zinc-700"></div>
</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 text-sm">
<div className="">
<h4 className="font-medium mb-2 text-white">The Challenge</h4>
<p className="text-zinc-500 leading-relaxed" style={{}}>
                                Onboarding and managing blockchain products is often intimidating for non‑technical users, leading to high drop-off rates and security risks.
                            </p>
</div>
<div>
<h4 className="font-medium mb-2 text-white">Design Strategy</h4>
<p className="text-zinc-500 leading-relaxed" style={{}}>
                                I led the design of a cross-product system that simplified onboarding flows (reducing drop-offs by 60%) and integrated educational content directly into the wallet experience.
                            </p>
</div>
</div>
</div>
</article>
</section>

<section className="max-w-6xl mx-auto mb-32 border-t pt-24 border-white/5" id="systems">
<div className="grid md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<h2 className="text-2xl font-medium tracking-tight mb-4 text-white">Systems at Scale</h2>
<p className="leading-relaxed mb-6 text-zinc-400" style={{}}>
                        I build and maintain scalable design systems used across multiple products and teams. My focus is on velocity, consistency, and clean developer handoff.
                    </p>
<ul className="space-y-4 text-sm text-zinc-500" style={{}}>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-zinc-300" icon="lucide:check-circle" style={{}} width="16"></iconify-icon>
<span className="">Tokenized color, typography, and spacing systems</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-zinc-300" icon="lucide:check-circle" style={{}} width="16"></iconify-icon>
<span className="">Reusable components &amp; variants</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-zinc-300" icon="lucide:check-circle" style={{}} width="16"></iconify-icon>
<span className="">Developer‑aligned naming conventions</span>
</li>
</ul>
</div>
<div className="md:col-span-8 border rounded-lg p-8 bg-zinc-900/50 border-white/5" style={{}}>

<div className="flex justify-between items-center mb-8 border-b pb-4 border-white/5">
<div className="flex gap-4">
<div className="text-xs font-mono text-zinc-500" style={{}}>legacy-ui-v2.0</div>
<div className="text-xs font-mono text-zinc-500" style={{}}>Updated 2h ago</div>
</div>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500" style={{}}></div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

<div className="space-y-2">
<div className="text-[10px] uppercase font-bold tracking-widest text-zinc-600" style={{}}>Primitives</div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded border bg-zinc-50 border-white/10" style={{}}></div>
<div className="w-8 h-8 rounded bg-zinc-500 border border-white/10" style={{}}></div>
<div className="w-8 h-8 rounded border bg-zinc-900 border-white/10" style={{}}></div>
</div>
<div className="text-xs font-mono text-zinc-500" style={{}}>--color-surface</div>
</div>

<div className="space-y-3 col-span-2">
<div className="text-[10px] uppercase font-bold tracking-widest text-zinc-600" style={{}}>Components</div>
<div className="flex items-center gap-4">

<label className="flex items-center cursor-pointer relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 bg-zinc-700" style={{}}></div>
</label>

<button className="px-3 py-1.5 text-xs font-medium rounded transition-colors bg-zinc-100 text-zinc-900 hover:bg-white" style={{}}>
                                    Action
                                </button>

<div className="h-8 border rounded px-2 flex items-center text-xs w-24 border-zinc-700 bg-zinc-800/50 text-zinc-400" style={{}}>
                                    Input...
                                </div>
</div>
</div>

<div className="space-y-2">
<div className="text-[10px] uppercase font-bold tracking-widest text-zinc-600" style={{}}>Type</div>
<div className="space-y-1">
<div className="text-xl font-medium tracking-tight text-white">Aa</div>
<div className="text-xs text-zinc-500 font-mono" style={{}}>Inter Tight</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto mb-32" id="philosophy">
<h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-12" style={{}}>Design Philosophy</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-lg border transition-colors border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50" style={{}}>
<iconify-icon className="mb-4 text-indigo-400" icon="lucide:layout-template" style={{}} width="24"></iconify-icon>
<h3 className="font-medium mb-3 text-white">Clarity over Decoration</h3>
<p className="text-sm text-zinc-500 leading-relaxed" style={{}}>
                        Interfaces should explain themselves. Good design reduces uncertainty and guides the user naturally.
                    </p>
</div>

<div className="p-6 rounded-lg border transition-colors border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50" style={{}}>
<iconify-icon className="mb-4 text-purple-400" icon="lucide:zap" style={{}} width="24"></iconify-icon>
<h3 className="font-medium mb-3 text-white">Execution Awareness</h3>
<p className="text-sm text-zinc-500 leading-relaxed" style={{}}>
                        Design must support real‑world decision making. I build products that are context-aware and actionable.
                    </p>
</div>

<div className="p-6 rounded-lg border transition-colors border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50" style={{}}>
<iconify-icon className="mb-4 text-emerald-400" icon="lucide:shield-check" width="24"></iconify-icon>
<h3 className="font-medium mb-3 text-white">Trust &amp; Transparency</h3>
<p className="text-sm text-zinc-500 leading-relaxed" style={{}}>
                        Critical in FinTech and Web3. Systems should be transparent about data sources, security, and status.
                    </p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto mb-32 border-t pt-24 border-white/5" id="about">
<div className="flex flex-col md:flex-row gap-16">
<div className="md:w-1/3">
<h2 className="text-2xl font-medium tracking-tight mb-4 text-white">Experience</h2>
<p className="text-sm text-zinc-400 mb-6" style={{}}>
                        7+ years of building products in FinTech, Web3, EdTech, and Healthcare.
                    </p>
<div className="text-xs text-zinc-500 leading-relaxed">
                        I collaborate closely with PMs to align design with business goals and partner with engineers for clean handoffs.
                    </div>
</div>
<div className="md:w-2/3 space-y-12">

<div className="relative pl-8 border-l border-zinc-800" style={{}}>
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border bg-zinc-700 border-zinc-900" style={{}}></div>
<h3 className="text-lg font-medium text-white">Lead UI/UX Designer</h3>
<div className="text-sm text-zinc-500 mb-2" style={{}}>Legacy Network • Web3 &amp; EdTech</div>
<p className="text-sm leading-relaxed text-zinc-400" style={{}}>
                            Designed and scaled a cross‑product design system. Simplified onboarding flows reducing drop‑offs by 60%. Improved wallet security UX resulting in 1M+ downloads.
                        </p>
</div>

<div className="relative pl-8 border-l border-zinc-800" style={{}}>
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border bg-zinc-800 border-zinc-900" style={{}}></div>
<h3 className="text-lg font-medium text-white">Product Designer</h3>
<div className="text-sm text-zinc-500 mb-2" style={{}}>Genesys Tech Hub • Healthcare SaaS</div>
<p className="text-sm leading-relaxed text-zinc-400" style={{}}>
                            Designed the Natalie EMR System. Reduced record‑keeping time by 40% and streamlined onboarding, saving 10+ training hours per employee.
                        </p>
</div>

<div className="relative pl-8 border-l border-zinc-800" style={{}}>
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border bg-zinc-800 border-zinc-900" style={{}}></div>
<h3 className="text-lg font-medium text-white">UI/UX Designer</h3>
<div className="text-sm text-zinc-500 mb-2" style={{}}>Zummit Africa • Logistics B2B</div>
<p className="text-sm leading-relaxed text-zinc-400" style={{}}>
                            Redesigned mobile‑first workflows for a logistics operations platform. Improved task completion time by 15% and led WCAG‑compliant accessibility improvements.
                        </p>
</div>
</div>
</div>
</section>

<footer className="max-w-6xl mx-auto border-t pt-12 pb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-white/5">
<div className="">
<div className="font-medium tracking-tight text-lg mb-1 text-white">Let's build the future.</div>
<div className="text-zinc-500 text-sm" style={{}}>Based in Enugu, Nigeria (Remote‑friendly).</div>
</div>
<div className="flex gap-6">
<a className="transition-colors text-sm text-zinc-400 hover:text-white" href="https://linkedin.com/in/stephen-ogbodo-90a84816a" style={{}}>LinkedIn</a>
<a className="transition-colors text-sm text-zinc-400 hover:text-white" href="https://behance.net/stephenogbodo21" style={{}}>Behance</a>
<a className="transition-colors text-sm text-zinc-400 hover:text-white" href="mailto:stephenogbodo21@gmail.com" style={{}}>Email</a>
</div>
</footer>
</main>

    </>
  );
}
