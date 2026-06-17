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



        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
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
      

<div className="blob bg-indigo-600 w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
<div className="blob bg-violet-600 w-[30rem] h-[30rem] rounded-full bottom-0 right-0 translate-x-1/3 translate-y-1/3"></div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-violet-400 rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-slate-950 rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tight text-lg">Cognit</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Methodology</a>
<a className="hover:text-white transition-colors" href="#">Agents</a>
<a className="hover:text-white transition-colors" href="#">Research</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Sign in</a>
<button className="bg-white text-slate-950 hover:bg-slate-200 px-4 py-2 rounded-full text-xs font-semibold transition-all">
                    Request Access
                </button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            Cognit 2.0: Agentic Behavioral Analysis is live
        </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-8 max-w-5xl leading-[1.1]">
            Unlock the patterns of <br/>
<span className="bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent">human cognition.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 font-light leading-relaxed">
            Deploy autonomous AI agents to analyze sessions, predict behavioral outcomes, and synthesize clinical notes with unprecedented accuracy.
        </p>
<div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
<button className="w-full md:w-auto bg-white text-slate-950 h-12 px-8 rounded-full font-semibold text-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                Start Analysis
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="w-full md:w-auto glass text-white h-12 px-8 rounded-full font-medium text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                View Research
            </button>
</div>

<div className="mt-20 w-full relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="relative glass rounded-xl border border-white/10 overflow-hidden aspect-[16/9] md:aspect-[21/9] flex items-center justify-center bg-slate-950/50">

<div className="grid grid-cols-12 gap-4 p-8 w-full h-full opacity-90">

<div className="col-span-3 border-r border-white/5 flex flex-col gap-4 hidden md:flex">
<div className="h-8 w-8 rounded-full bg-white/10 mb-4"></div>
<div className="h-2 w-24 bg-white/10 rounded-full"></div>
<div className="h-2 w-16 bg-white/10 rounded-full"></div>
<div className="mt-auto space-y-2">
<div className="h-10 w-full rounded bg-white/5 border border-white/5"></div>
<div className="h-10 w-full rounded bg-transparent border border-white/5"></div>
</div>
</div>

<div className="col-span-12 md:col-span-6 flex flex-col justify-end pb-4">
<div className="flex flex-col gap-3 mb-6">
<div className="self-start glass px-4 py-3 rounded-2xl rounded-tl-none max-w-[80%]">
<p className="text-xs text-slate-400">Patient • 10:42 AM</p>
<p className="text-sm text-slate-200 mt-1">I feel like I'm constantly running out of time, even when I have nothing to do.</p>
</div>
<div className="self-end bg-indigo-600/20 border border-indigo-500/20 px-4 py-3 rounded-2xl rounded-tr-none max-w-[80%]">
<div className="flex items-center gap-2 mb-1">
<i className="w-3 h-3 text-indigo-400" data-lucide="sparkles"></i>
<p className="text-xs text-indigo-300">Cognit Agent Analysis</p>
</div>
<p className="text-sm text-slate-200">Detected high-anxiety markers related to chronophobia. Suggesting cognitive reframing module B-4.</p>
</div>
</div>
<div className="h-12 w-full rounded-full bg-white/5 border border-white/10 flex items-center px-4 justify-between">
<div className="h-2 w-32 bg-white/10 rounded-full"></div>
<div className="h-6 w-6 rounded-full bg-indigo-500/50"></div>
</div>
</div>

<div className="col-span-3 border-l border-white/5 pl-4 hidden md:flex flex-col gap-4">
<div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Live Vitals</div>
<div className="glass p-3 rounded-lg">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-slate-400">Stress</span>
<span className="text-xs text-red-400">High</span>
</div>
<div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
<div className="bg-red-500 h-full w-[78%]"></div>
</div>
</div>
<div className="glass p-3 rounded-lg">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-slate-400">Coherence</span>
<span className="text-xs text-emerald-400">Stable</span>
</div>
<div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-[92%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 w-full pt-8 border-t border-white/5">
<p className="text-center text-sm text-slate-500 mb-8">Trusted by leading research institutes and clinics</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-semibold tracking-tighter text-white">NEURA</span>
<span className="text-lg font-semibold tracking-tighter text-white">MINDSET.AI</span>
<span className="text-lg font-semibold tracking-tighter text-white">CORTEX</span>
<span className="text-lg font-semibold tracking-tighter text-white">SYNAPSE</span>
<span className="text-lg font-semibold tracking-tighter text-white">FLOWSTATE</span>
</div>
</div>
</main>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Intelligence at the edge of psychology.</h2>
<p className="text-slate-400 max-w-2xl text-lg">Our multi-agent system doesn't just record; it understands context, emotion, and underlying cognitive patterns.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 row-span-2 glass rounded-3xl p-8 md:p-12 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] group-hover:bg-indigo-500/30 transition-all duration-700"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10">
<i className="text-indigo-400" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-3">Semantic Pattern Recognition</h3>
<p className="text-slate-400 leading-relaxed max-w-md">Cognit identifies recurring linguistic structures that indicate specific cognitive distortions. It maps patient progress over years of data in milliseconds.</p>
</div>
<div className="mt-12 bg-slate-900/50 border border-white/5 rounded-xl p-4 flex gap-4 items-center">
<div className="flex-1 space-y-2">
<div className="h-2 bg-white/10 rounded w-3/4"></div>
<div className="h-2 bg-white/10 rounded w-1/2"></div>
</div>
<div className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">Accuracy 99.4%</div>
</div>
</div>
</div>

<div className="glass rounded-3xl p-8 relative overflow-hidden group md:row-span-2">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-violet-500/10 to-transparent"></div>
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10">
<i className="text-emerald-400" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">HIPAA Compliant Core</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-8">End-to-end encryption with local-first processing options. Your patient data never trains our public models.</p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
<span>SOC2 Type II Certified</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
<span>Zero-knowledge storage</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
<span>Biometric access control</span>
</div>
</div>
</div>

<div className="glass rounded-3xl p-8 relative overflow-hidden group md:col-span-3 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10">
<i className="text-amber-400" data-lucide="zap"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-3">Real-time Sentiment Flux</h3>
<p className="text-slate-400 leading-relaxed">Visualize emotional trajectory during sessions. Identify triggers and breakthroughs as they happen with our live dashboard.</p>
</div>
<div className="flex-1 w-full h-32 md:h-full relative">

<div className="absolute inset-0 flex items-end justify-between gap-1 px-4 pb-4">
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[40%] hover:h-[60%] transition-all duration-500"></div>
<div className="w-full bg-indigo-500/30 rounded-t-sm h-[60%] hover:h-[80%] transition-all duration-500"></div>
<div className="w-full bg-indigo-500/40 rounded-t-sm h-[30%] hover:h-[50%] transition-all duration-500"></div>
<div className="w-full bg-indigo-500/50 rounded-t-sm h-[75%] hover:h-[90%] transition-all duration-500"></div>
<div className="w-full bg-indigo-500/60 rounded-t-sm h-[55%] hover:h-[70%] transition-all duration-500"></div>
<div className="w-full bg-indigo-500/80 rounded-t-sm h-[85%] hover:h-[100%] transition-all duration-500"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="flex-1">
<h4 className="text-indigo-400 font-medium tracking-wide text-sm uppercase mb-4">The Workflow</h4>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Focus on the patient,<br/>not the paperwork.</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Cognit listens in the background (with consent), transcribing and analyzing. By the time the session ends, your SOAP notes, billing codes, and patient homework are ready for review.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 text-white font-mono text-sm">1</div>
<div>
<h5 className="text-white font-medium mb-1">Session Recording</h5>
<p className="text-slate-500 text-sm">Secure, high-fidelity audio capture with noise cancellation.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 text-white font-mono text-sm">2</div>
<div>
<h5 className="text-white font-medium mb-1">Agent Processing</h5>
<p className="text-slate-500 text-sm">Multiple AI agents analyze for sentiment, risk, and clinical progress.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 text-white font-mono text-sm">3</div>
<div>
<h5 className="text-white font-medium mb-1">Auto-Documentation</h5>
<p className="text-slate-500 text-sm">One-click export to your EHR system in standard formats.</p>
</div>
</li>
</ul>
</div>
<div className="flex-1 w-full">
<div className="relative rounded-2xl border border-white/10 bg-slate-950 p-6 shadow-2xl">
<div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-amber-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
<span className="ml-auto text-xs text-slate-500 font-mono">generated_notes.pdf</span>
</div>
<div className="space-y-4 font-mono text-sm">
<div className="flex gap-4">
<span className="text-indigo-400 w-16 shrink-0">Subject:</span>
<span className="text-slate-300">Session #42 - Anxiety Management</span>
</div>
<div className="flex gap-4">
<span className="text-indigo-400 w-16 shrink-0">Summary:</span>
<span className="text-slate-400">Patient demonstrated improved coping mechanisms regarding workplace stress. Mentioned use of "grounding techniques" successfully 3 times.</span>
</div>
<div className="flex gap-4">
<span className="text-indigo-400 w-16 shrink-0">Risk:</span>
<span className="text-emerald-400">Low (Stable)</span>
</div>
<div className="flex gap-4">
<span className="text-indigo-400 w-16 shrink-0">Plan:</span>
<span className="text-slate-400">Continue CBT framework. Assign daily mood logging via Cognit App.</span>
</div>
<div className="h-px bg-white/5 my-4"></div>
<div className="flex justify-end">
<button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded text-xs transition-colors">Approve &amp; Sign</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Simple, transparent pricing.</h2>
<p className="text-slate-400">Start for free, scale as your practice grows.</p>

<div className="mt-8 flex items-center justify-center gap-4">
<span className="text-sm text-slate-300">Monthly</span>
<div className="w-12 h-6 bg-slate-800 rounded-full p-1 relative cursor-pointer border border-white/10">
<div className="w-4 h-4 bg-indigo-500 rounded-full shadow-md translate-x-6 transition-transform"></div>
</div>
<span className="text-sm text-white font-medium">Yearly <span className="text-indigo-400 text-xs ml-1">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass p-8 rounded-2xl border border-white/5 flex flex-col hover:border-white/10 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Researcher</h3>
<div className="text-4xl font-semibold text-white mb-6">$0<span className="text-sm text-slate-500 font-normal">/mo</span></div>
<p className="text-slate-400 text-sm mb-8">Perfect for students and individual research.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-slate-500" data-lucide="check"></i>
                        5 hours audio analysis
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-slate-500" data-lucide="check"></i>
                        Basic sentiment plotting
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-slate-500" data-lucide="check"></i>
                        Community support
                    </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium">Get Started</button>
</div>

<div className="p-8 rounded-2xl bg-indigo-600/10 border border-indigo-500/50 flex flex-col relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide">MOST POPULAR</div>
<h3 className="text-lg font-medium text-white mb-2">Practitioner</h3>
<div className="text-4xl font-semibold text-white mb-6">$49<span className="text-sm text-slate-500 font-normal">/mo</span></div>
<p className="text-indigo-200 text-sm mb-8">Automate your private practice workflow.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
                        Unlimited analysis
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
                        Auto-SOAP Notes
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
                        EHR Integration
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
                        Priority Support
                    </li>
</ul>
<button className="w-full py-3 rounded-lg bg-indigo-500 text-white hover:bg-indigo-400 transition-colors text-sm font-medium shadow-lg shadow-indigo-500/25">Start Free Trial</button>
</div>

<div className="glass p-8 rounded-2xl border border-white/5 flex flex-col hover:border-white/10 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Clinic</h3>
<div className="text-4xl font-semibold text-white mb-6">$199<span className="text-sm text-slate-500 font-normal">/mo</span></div>
<p className="text-slate-400 text-sm mb-8">For multi-provider organizations.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-slate-500" data-lucide="check"></i>
                        Up to 10 practitioners
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-slate-500" data-lucide="check"></i>
                        Advanced Admin Dashboard
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-slate-500" data-lucide="check"></i>
                        Dedicated Success Manager
                    </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium">Contact Sales</button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-gradient-to-tr from-indigo-500 to-violet-400 rounded-full"></div>
<span className="text-white font-medium tracking-tight">Cognit</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed">
                        Pioneering the intersection of artificial intelligence and human psychology.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">HIPAA Compliance</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
<p className="text-slate-600 text-xs">© 2024 Cognit AI Inc. All rights reserved.</p>
<div className="flex gap-4">
<i className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" data-lucide="github"></i>
<i className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
