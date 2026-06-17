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
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
deep: '#030405',
glass: 'rgba(255, 255, 255, 0.03)',
border: 'rgba(255, 255, 255, 0.08)',
accent: '#a3e635', /* Muted Lime/Green from chart points */
glow: '#111827',
teal: {
900: '#134e4a',
950: '#042f2e',
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
}
}
}
}



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
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] left-[20%] w-[50vw] h-[50vw] bg-teal-900/10 rounded-full blur-[120px]"></div>
<div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-slate-800/10 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-20"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-deep/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
<span className="font-display font-medium text-lg tracking-tight">InnFlow AI Solutions</span>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors" href="#contact">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Systems Operational
            </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-16">
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-8 lg:col-start-3 text-center space-y-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mx-auto">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
<span className="text-xs font-mono uppercase tracking-widest text-neutral-400">System Architecture v2.0</span>
</div>
<h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[0.9] text-glow">
                    From AI Curious <br/>
<span className="text-neutral-500">To AI Native.</span>
</h1>
<p className="text-xl sm:text-2xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
                    We architect the infrastructure for the next level of business performance. Focus on execution. Measure real outcomes.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="group relative px-8 py-4 bg-white text-black font-medium text-lg tracking-tight transition-transform active:scale-95 overflow-hidden" href="#contact">
<span className="relative z-10 flex items-center gap-2">
                            Get in touch
                            <i className="w-5 h-5" data-lucide="arrow-right"></i>
</span>
<div className="absolute inset-0 bg-neutral-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
</a>
<a className="px-8 py-4 border border-white/20 text-white hover:bg-white/5 font-medium text-lg tracking-tight transition-all" href="#contact">
                        Book a call
                    </a>
</div>

<div className="pt-12 flex justify-center opacity-40">
<div className="flex items-center gap-8 md:gap-16">
<div className="flex flex-col items-center gap-2">
<div className="w-3 h-3 border border-white rounded-full"></div>
<div className="h-16 w-px bg-gradient-to-b from-white to-transparent"></div>
<span className="text-xs font-mono text-neutral-500">AUDIT</span>
</div>
<div className="flex flex-col items-center gap-2 pt-12">
<div className="w-3 h-3 border border-teal-500 bg-teal-900 rounded-full shadow-[0_0_15px_rgba(20,184,166,0.5)]"></div>
<div className="h-16 w-px bg-gradient-to-b from-teal-500 to-transparent"></div>
<span className="text-xs font-mono text-teal-500">BUILD</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-3 h-3 border border-white rounded-full"></div>
<div className="h-16 w-px bg-gradient-to-b from-white to-transparent"></div>
<span className="text-xs font-mono text-neutral-500">SCALE</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5">
<div className="max-w-4xl mx-auto px-6">
<span className="text-teal-500 font-mono text-sm tracking-widest uppercase mb-8 block">/ The Manifesto</span>
<div className="space-y-10 text-xl md:text-2xl text-neutral-300 font-light leading-relaxed">
<p>
                    It’s time to move from <span className="text-white font-normal">AI curious to AI native</span>. At InnFlow AI Solutions, we believe the conversation around artificial intelligence has been dominated by hype, fear, and empty promises. Too many businesses have been left with pretty slides and failed prototypes, but no real progress.
                </p>
<p>
                    The challenges ahead are real. Slowing productivity, tighter competition, and rising expectations from customers and employees. The margin for inefficiency and weak performance is gone. Every company now faces a choice, speed up or fall behind.
                </p>
<p>
<span className="text-white font-normal">AI is the path forward.</span> It provides the infrastructure for a new level of business performance. Used well, AI does not replace people. It redefines how they create value. It sharpens how teams think, decide, and execute.
                </p>
<div className="pl-6 border-l-2 border-teal-900 text-white italic">
                    That’s where we come in.
                </div>
<p>
                    We are not the kind of consultancy that talks about what could happen someday. We build what works today. We design automations, copilots, and systems that reshape how teams operate. We make sure change lasts. We help people become fluent in the tools that will define their work for the next decade.
                </p>
<p>
                    We call this becoming <span className="text-white font-normal">AI first</span>. Not aware of the technology, but built on top of it.
                </p>
<p>
                    That’s why InnFlow AI Solutions exists, to help forward thinking businesses turn AI from an abstract idea into a real competitive advantage. We do not implement AI only. We build AI operating systems for the next decade of growth.
                </p>
<p className="text-white font-normal text-3xl pt-8 tracking-tight">
                    The future has arrived. It belongs to those willing to step off the sidelines and into action.
                </p>
</div>
</div>
</section>

<section className="py-32 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">Core Capabilities</h2>
<p className="text-xl text-neutral-400">Engineered for immediate impact and scalable growth.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group industrial-border bg-black p-8 hover:bg-neutral-900 transition-colors duration-500">
<div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-teal-500/50 transition-colors">
<i className="text-white w-6 h-6 stroke-[1.5]" data-lucide="zap"></i>
</div>
<h3 className="font-display text-2xl font-medium text-white mb-4">AI Automation Systems</h3>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                        End-to-end workflow automation that removes manual bottlenecks. We build self-correcting pipelines that handle complex operational tasks without human intervention.
                    </p>
</div>

<div className="group industrial-border bg-black p-8 hover:bg-neutral-900 transition-colors duration-500">
<div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-teal-500/50 transition-colors">
<i className="text-white w-6 h-6 stroke-[1.5]" data-lucide="bot"></i>
</div>
<h3 className="font-display text-2xl font-medium text-white mb-4">AI Copilots for Teams</h3>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                        Custom LLM interfaces integrated directly into your company data. Empower your workforce with instant access to institutional knowledge and reasoning capabilities.
                    </p>
</div>

<div className="group industrial-border bg-black p-8 hover:bg-neutral-900 transition-colors duration-500">
<div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-teal-500/50 transition-colors">
<i className="text-white w-6 h-6 stroke-[1.5]" data-lucide="cpu"></i>
</div>
<h3 className="font-display text-2xl font-medium text-white mb-4">Custom AI Operating Systems</h3>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                        Full-scale architectural overhaul. We design the underlying digital nervous system that allows your entire enterprise to operate as an AI-native entity.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 border-y border-white/5 relative overflow-hidden">

<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div>
<h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight text-white mb-8">
                    Why InnFlow?
                </h2>
<div className="space-y-8">
<div className="flex gap-6">
<div className="mt-1">
<i className="text-teal-500 w-6 h-6 stroke-[1.5]" data-lucide="target"></i>
</div>
<div>
<h4 className="text-xl text-white font-medium mb-2">Execution Over Theory</h4>
<p className="text-lg text-neutral-400 font-light">We don't deliver PDFs. We deliver deployed code and functioning agents.</p>
</div>
</div>
<div className="flex gap-6">
<div className="mt-1">
<i className="text-teal-500 w-6 h-6 stroke-[1.5]" data-lucide="timer"></i>
</div>
<div>
<h4 className="text-xl text-white font-medium mb-2">Speed to Value</h4>
<p className="text-lg text-neutral-400 font-light">Our modular architecture allows us to deploy initial capabilities in weeks, not months.</p>
</div>
</div>
<div className="flex gap-6">
<div className="mt-1">
<i className="text-teal-500 w-6 h-6 stroke-[1.5]" data-lucide="trending-up"></i>
</div>
<div>
<h4 className="text-xl text-white font-medium mb-2">Business Results First</h4>
<p className="text-lg text-neutral-400 font-light">We reverse engineer systems from your P&amp;L goals, ensuring ROI is baked into the code.</p>
</div>
</div>
<div className="flex gap-6">
<div className="mt-1">
<i className="text-teal-500 w-6 h-6 stroke-[1.5]" data-lucide="users"></i>
</div>
<div>
<h4 className="text-xl text-white font-medium mb-2">Team Adoption</h4>
<p className="text-lg text-neutral-400 font-light">Technology fails without culture. We train your team to think and work AI-first.</p>
</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] border border-white/10 bg-black/50 backdrop-blur-sm p-8 flex flex-col justify-between">
<div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-10"></div>
<div className="flex justify-between items-start mb-12">
<span className="font-mono text-xs text-neutral-500">SYSTEM STATUS</span>
<span className="flex items-center gap-2 text-teal-400 font-mono text-xs"><span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span> ONLINE</span>
</div>
<div className="space-y-4 font-mono text-sm text-neutral-400">
<div className="flex justify-between border-b border-white/5 pb-2">
<span>Metric_01</span>
<span className="text-white">Efficiency +400%</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span>Metric_02</span>
<span className="text-white">Error Rate &lt; 0.1%</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span>Metric_03</span>
<span className="text-white">Response Time &lt; 200ms</span>
</div>
</div>
<div className="mt-12 h-32 flex items-end gap-1">
<div className="w-full bg-neutral-800 h-[20%]"></div>
<div className="w-full bg-neutral-800 h-[35%]"></div>
<div className="w-full bg-neutral-800 h-[45%]"></div>
<div className="w-full bg-neutral-700 h-[60%]"></div>
<div className="w-full bg-teal-900 h-[75%]"></div>
<div className="w-full bg-teal-500 h-[95%] shadow-[0_0_20px_rgba(20,184,166,0.3)]"></div>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">Implementation Protocol</h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
<div className="grid md:grid-cols-3 gap-12 md:gap-8 relative z-10">

<div className="relative pt-8 md:pt-0">
<div className="md:absolute md:-top-3 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-black border border-white rounded-full flex items-center justify-center z-10 mb-4 md:mb-0">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<div className="text-center md:mt-16 px-4">
<span className="font-mono text-teal-500 text-sm mb-2 block">PHASE 01</span>
<h3 className="text-2xl text-white font-medium mb-3">Audit</h3>
<p className="text-lg text-neutral-400 font-light">We analyze your data infrastructure, workflows, and bottlenecks to identify high-impact AI opportunities.</p>
</div>
</div>

<div className="relative pt-8 md:pt-0">
<div className="md:absolute md:-top-3 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-black border border-white rounded-full flex items-center justify-center z-10 mb-4 md:mb-0 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<div className="text-center md:mt-16 px-4">
<span className="font-mono text-teal-500 text-sm mb-2 block">PHASE 02</span>
<h3 className="text-2xl text-white font-medium mb-3">Build</h3>
<p className="text-lg text-neutral-400 font-light">We develop custom agents, automations, and integration layers. Iterative testing ensures reliability.</p>
</div>
</div>

<div className="relative pt-8 md:pt-0">
<div className="md:absolute md:-top-3 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-black border border-white rounded-full flex items-center justify-center z-10 mb-4 md:mb-0">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<div className="text-center md:mt-16 px-4">
<span className="font-mono text-teal-500 text-sm mb-2 block">PHASE 03</span>
<h3 className="text-2xl text-white font-medium mb-3">Deploy &amp; Train</h3>
<p className="text-lg text-neutral-400 font-light">Full system rollout accompanied by team training. We hand over the keys to a modernized operating model.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-900/10"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="font-display text-5xl md:text-7xl font-medium tracking-tighter text-white mb-8">
                Ready to build the future?
            </h2>
<p className="text-xl md:text-2xl text-neutral-400 font-light mb-12 max-w-2xl mx-auto">
                Stop watching the revolution. Start leading it. Let’s engineer your competitive advantage.
            </p>
<button className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-medium text-xl tracking-tight overflow-hidden transition-all hover:pr-12">
<span className="relative z-10">Get in touch</span>
<i className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-300 w-5 h-5" data-lucide="arrow-right"></i>
</button>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
<p>© 2024 InnFlow AI Solutions.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Email</a>
</div>
</div>
</div>
</section>


    </>
  );
}
