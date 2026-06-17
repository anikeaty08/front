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



        lucide.createIcons();
    
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
      

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
<div className="bg-noise absolute inset-0 mix-blend-overlay"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 rounded-md bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-white" data-lucide="bot"></i>
</div>
<span className="text-white font-medium tracking-tight text-lg">SYNTH</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#services">Solutions</a>
<a className="hover:text-white transition-colors" href="#process">Methodology</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Log in</a>
<button className="text-sm font-medium bg-white text-zinc-950 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2">
                    Book Discovery
                    <i className="w-3.5 h-3.5 opacity-60" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-24">
<div className="max-w-4xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/5 border border-purple-500/10 text-xs font-medium text-purple-300 mb-8 hover:bg-purple-500/10 transition-colors cursor-pointer ring-1 ring-inset ring-purple-500/20">
<span className="flex h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.5)]"></span>
                Now onboarding for Q3 2024
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
                Replace manual work with <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-200 to-purple-400">intelligent agents.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                We build custom AI infrastructure that autonomously handles support, lead generation, and operations. Reclaim 1,000+ hours annually.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">
                    Automate Your Business
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900/50 border border-zinc-800 text-zinc-300 font-medium rounded-full hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                    View Case Studies
                </button>
</div>

<div className="relative max-w-3xl mx-auto">
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20 h-full"></div>
<div className="glass-panel rounded-xl p-1 border border-white/10 shadow-2xl overflow-hidden">
<div className="bg-zinc-900/80 rounded-lg p-6 md:p-10 font-mono text-xs md:text-sm text-left relative overflow-hidden">

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-800 -translate-y-1/2"></div>
<div className="relative z-10 flex justify-between items-center gap-4">

<div className="flex flex-col gap-2 items-center">
<div className="w-12 h-12 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center">
<i className="w-5 h-5 text-zinc-400" data-lucide="mail"></i>
</div>
<span className="text-zinc-500 uppercase tracking-widest text-[10px]">Trigger</span>
</div>
<i className="w-4 h-4 text-zinc-600" data-lucide="arrow-right"></i>

<div className="flex flex-col gap-2 items-center">
<div className="w-16 h-16 rounded-xl bg-purple-900/20 border border-purple-500/30 flex items-center justify-center relative shadow-[0_0_30px_rgba(168,85,247,0.15)]">
<div className="absolute inset-0 rounded-xl bg-purple-500/10 animate-pulse"></div>
<i className="w-6 h-6 text-purple-400 relative z-10" data-lucide="sparkles"></i>
</div>
<span className="text-purple-400 uppercase tracking-widest text-[10px]">AI Agent</span>
</div>
<i className="w-4 h-4 text-zinc-600" data-lucide="arrow-right"></i>

<div className="flex flex-col gap-2 items-center">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-lg bg-blue-900/20 border border-blue-500/20 flex items-center justify-center z-20">
<i className="w-4 h-4 text-blue-400" data-lucide="database"></i>
</div>
<div className="w-10 h-10 rounded-lg bg-green-900/20 border border-green-500/20 flex items-center justify-center z-10">
<i className="w-4 h-4 text-green-400" data-lucide="message-square"></i>
</div>
</div>
<span className="text-zinc-500 uppercase tracking-widest text-[10px]">Action</span>
</div>
</div>

<div className="mt-8 p-4 bg-black/50 rounded border border-white/5 text-zinc-500">
<p><span className="text-purple-400">async function</span> <span className="text-yellow-200">processLead</span>(data) {</p>
<p className="pl-4">const analysis = <span className="text-purple-400">await</span> ai.analyze(data.content);</p>
<p className="pl-4">if (analysis.sentiment &gt; 0.8) {</p>
<p className="pl-8"><span className="text-purple-400">return</span> crm.createDeal({ priority: <span className="text-green-400">'high'</span> });</p>
<p className="pl-4">}</p>
<p>}</p>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-12 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-8 text-center md:text-left">
<div>
<div className="text-3xl font-medium text-white mb-1">500k+</div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Tasks Automated</div>
</div>
<div>
<div className="text-3xl font-medium text-white mb-1">24/7</div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">System Uptime</div>
</div>
<div>
<div className="text-3xl font-medium text-white mb-1">40%</div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Avg Cost Reduction</div>
</div>
<div>
<div className="text-3xl font-medium text-white mb-1">15ms</div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Response Latency</div>
</div>
</div>
</section>

<section className="py-24" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 md:flex md:items-end md:justify-between">
<div className="max-w-xl">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Scalable AI Infrastructure</h2>
<p className="text-zinc-400">We don't just wrap ChatGPT. We engineer robust, multi-agent systems that integrate deeply with your existing tech stack.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors mt-4 md:mt-0" href="#">
                    See full capabilities <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300 md:col-span-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-32 h-32 text-purple-500" data-lucide="message-circle"></i>
</div>
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-zinc-200" data-lucide="users"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Intelligent Support Agents</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                        Deploy chatbots that understand context, history, and tone. Resolve 60% of tickets instantly without human intervention. Trained on your knowledge base, updated in real-time.
                    </p>
<div className="mt-8 flex gap-2">
<span className="px-2 py-1 rounded border border-white/10 bg-white/5 text-[10px] text-zinc-400">Intercom</span>
<span className="px-2 py-1 rounded border border-white/10 bg-white/5 text-[10px] text-zinc-400">Zendesk</span>
<span className="px-2 py-1 rounded border border-white/10 bg-white/5 text-[10px] text-zinc-400">Slack</span>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-zinc-200" data-lucide="workflow"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Workflow Ops</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Connect disparate apps. Automate invoicing, onboarding, and data entry with 99.9% accuracy.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-zinc-200" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Predictive Analytics</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Turn raw data into actionable insights. Forecast trends and visualize metrics automatically.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300 md:col-span-2">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-zinc-200" data-lucide="mic"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Voice &amp; Phone Agents</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
                                Human-like voice assistants for inbound/outbound calls. Qualify leads and book appointments while you sleep.
                            </p>
</div>
<div className="flex items-center gap-2 p-3 bg-black/40 rounded-lg border border-white/5">
<div className="space-y-1.5 w-32">
<div className="h-1.5 bg-zinc-700 rounded-full w-full animate-pulse"></div>
<div className="h-1.5 bg-zinc-700 rounded-full w-2/3 animate-pulse"></div>
<div className="h-1.5 bg-zinc-700 rounded-full w-3/4 animate-pulse"></div>
</div>
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-purple-400 fill-current" data-lucide="play"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-y border-white/5" id="process">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-white mb-16 text-center">Implementation process</h2>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-zinc-800 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

<div className="group">
<div className="w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-full flex items-center justify-center text-sm font-medium text-white mb-6 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-colors mx-auto md:mx-0 shadow-[0_0_0_8px_rgba(9,9,11,1)]">1</div>
<h4 className="text-lg font-medium text-white mb-2 text-center md:text-left">Audit</h4>
<p className="text-xs text-zinc-500 leading-relaxed text-center md:text-left">We analyze your current workflows to identify high-impact automation opportunities.</p>
</div>

<div className="group">
<div className="w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-full flex items-center justify-center text-sm font-medium text-white mb-6 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-colors mx-auto md:mx-0 shadow-[0_0_0_8px_rgba(9,9,11,1)]">2</div>
<h4 className="text-lg font-medium text-white mb-2 text-center md:text-left">Build</h4>
<p className="text-xs text-zinc-500 leading-relaxed text-center md:text-left">Custom development of agents and integration pipelines using best-in-class LLMs.</p>
</div>

<div className="group">
<div className="w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-full flex items-center justify-center text-sm font-medium text-white mb-6 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-colors mx-auto md:mx-0 shadow-[0_0_0_8px_rgba(9,9,11,1)]">3</div>
<h4 className="text-lg font-medium text-white mb-2 text-center md:text-left">Deploy</h4>
<p className="text-xs text-zinc-500 leading-relaxed text-center md:text-left">Rigorous testing followed by a seamless rollout with team training.</p>
</div>

<div className="group">
<div className="w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-full flex items-center justify-center text-sm font-medium text-white mb-6 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-colors mx-auto md:mx-0 shadow-[0_0_0_8px_rgba(9,9,11,1)]">4</div>
<h4 className="text-lg font-medium text-white mb-2 text-center md:text-left">Optimize</h4>
<p className="text-xs text-zinc-500 leading-relaxed text-center md:text-left">Continuous monitoring and refining of prompts to ensure maximum efficiency.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8">Ready to evolve?</h2>
<p className="text-zinc-400 mb-10 max-w-xl mx-auto">
                Stop wasting human potential on robotic tasks. Schedule a discovery call to see how much time we can save you.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-4 bg-white text-zinc-950 rounded-full font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#">
                    Book a Consultation
                    <i className="w-4 h-4" data-lucide="calendar"></i>
</a>
</div>
<div className="mt-16 pt-16 border-t border-white/5">
<p className="text-xs font-medium text-zinc-600 mb-6">TRUSTED BY FORWARD-THINKING TEAMS</p>
<div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale mix-blend-screen">

<span className="text-lg font-bold tracking-tight text-white">LUMA</span>
<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-1"><div className="w-3 h-3 bg-white rounded-full"></div> CIRCLE</span>
<span className="text-lg font-bold tracking-tighter text-white">NEXUS</span>
<span className="text-lg font-medium tracking-widest text-white">AVANT</span>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 border-t border-white/5 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-sm bg-zinc-800 flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="bot"></i>
</div>
<span className="text-white text-sm font-medium tracking-tight">SYNTH AI</span>
</div>
<div className="flex gap-8 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Email</a>
</div>
<p className="text-xs text-zinc-700">© 2024 Synth Automation Agency.</p>
</div>
</footer>


    </>
  );
}
