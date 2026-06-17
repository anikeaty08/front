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
      

<div className="bg-canvas">
<div className="orb orb-1"></div>
<div className="orb orb-2"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-[#0B0B0B]/50 backdrop-blur-md border-b border-white/[0.05]">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-white font-medium tracking-tighter text-lg select-none">AS.</div>
<div className="flex gap-6 text-sm font-medium tracking-wide">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-white transition-colors" href="#experience">Experience</a>
</div>
</div>
</nav>
<main className="flex-grow pt-32 pb-24 px-6 relative z-10">
<div className="max-w-6xl mx-auto space-y-32">

<section className="flex flex-col items-center justify-center text-center space-y-8 min-h-[50vh] reveal-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-medium tracking-wide text-[#007AFF] uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#007AFF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#007AFF]"></span>
</span>
                    AI Specialist &amp; Data Analyst
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter max-w-4xl leading-tight">
                    Building intelligent systems for the <span className="text-shimmer">modern web.</span>
</h1>
<p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                    Transforming raw data into actionable insights and designing autonomous agents that drive next-generation user experiences.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
<button className="px-6 py-3 rounded-lg bg-[#007AFF] hover:bg-[#005bb5] text-white font-medium text-sm transition-all shadow-[0_0_20px_rgba(0,122,255,0.3)] w-full sm:w-auto">
                        View Projects
                    </button>
<button className="px-6 py-3 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-medium text-sm backdrop-blur-sm transition-all w-full sm:w-auto">
                        Contact Me
                    </button>
</div>
</section>

<section className="space-y-8 reveal-up" id="work" style={{animationDelay: '0.2s'}}>
<div className="space-y-2">
<h2 className="text-2xl md:text-3xl text-white font-medium tracking-tight">Featured Work</h2>
<p className="text-sm">Highlighting recent deployments and architectural designs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[350px]">

<div className="md:col-span-2 row-span-1 md:row-span-2 group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl p-8 hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-500 flex flex-col justify-between">
<div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex justify-between items-start">
<div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white text-2xl">
<iconify-icon icon="solar:smart-speaker-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium tracking-wide bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-white">2024</span>
</div>
<div className="relative z-10 space-y-3 mt-12 md:mt-0">
<h3 className="text-2xl text-white font-medium tracking-tight">AI Real Estate Chatbots</h3>
<p className="text-sm leading-relaxed max-w-md">
                                Engineered fine-tuned LLMs integrated with modern web interfaces to automate property inquiries, schedule viewings, and provide dynamic market valuations with zero human intervention.
                            </p>
<div className="pt-4 flex items-center gap-2 text-xs font-medium text-[#007AFF] group-hover:gap-3 transition-all">
                                Explore Architecture <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="md:col-span-1 row-span-1 group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl p-8 hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-500 flex flex-col justify-between">
<div className="relative z-10 w-10 h-10 rounded-lg bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center text-[#007AFF] text-xl">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10 space-y-2 mt-8">
<h3 className="text-xl text-white font-medium tracking-tight">Data Dashboards</h3>
<p className="text-sm leading-relaxed">
                                Real-time analytical interfaces parsing complex datasets into minimalist, high-performance visualizations.
                            </p>
</div>
</div>

<div className="md:col-span-1 row-span-1 group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl p-8 hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-500 flex flex-col justify-between">
<div className="relative z-10 w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-white text-xl">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10 space-y-2 mt-8">
<h3 className="text-xl text-white font-medium tracking-tight">Modern Web Dev</h3>
<p className="text-sm leading-relaxed">
                                Scalable, edge-rendered frontends bridging the gap between raw data pipelines and end-user aesthetics.
                            </p>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-up" style={{animationDelay: '0.3s'}}>

<section className="space-y-6" id="expertise">
<div className="space-y-2">
<h2 className="text-2xl text-white font-medium tracking-tight">Core Stack</h2>
<p className="text-sm">Tools I use daily to build digital products.</p>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm hover:bg-white/[0.05] transition-colors">
<div className="text-[#007AFF] text-2xl flex"><iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon></div>
<span className="text-sm font-medium text-white">Python</span>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm hover:bg-white/[0.05] transition-colors">
<div className="text-white text-2xl flex"><iconify-icon icon="solar:robot-linear" strokeWidth="1.5"></iconify-icon></div>
<span className="text-sm font-medium text-white">Botpress</span>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm hover:bg-white/[0.05] transition-colors">
<div className="text-white text-2xl flex"><iconify-icon icon="solar:pen-new-round-linear" strokeWidth="1.5"></iconify-icon></div>
<span className="text-sm font-medium text-white">Framer</span>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm hover:bg-white/[0.05] transition-colors">
<div className="text-[#007AFF] text-2xl flex"><iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon></div>
<span className="text-sm font-medium text-white">Tailwind CSS</span>
</div>
</div>
</section>

<section className="space-y-6" id="experience">
<div className="space-y-2">
<h2 className="text-2xl text-white font-medium tracking-tight">Experience</h2>
<p className="text-sm">My professional journey so far.</p>
</div>
<div className="rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl p-8">
<div className="relative border-l border-white/10 ml-2 space-y-8 pl-6">

<div className="relative group">
<div className="absolute w-2.5 h-2.5 rounded-full bg-[#007AFF] -left-[1.95rem] top-1.5 shadow-[0_0_12px_rgba(0,122,255,0.6)]"></div>
<div className="flex flex-col space-y-1">
<h4 className="text-base text-white font-medium tracking-tight">AI Solutions Architect</h4>
<div className="text-xs font-medium text-[#007AFF]">Nexus Tech · 2022 - Present</div>
<p className="text-sm pt-2 leading-relaxed">Spearheading the development of LLM-based customer service agents, reducing response latency by 85%.</p>
</div>
</div>

<div className="relative group">
<div className="absolute w-2.5 h-2.5 rounded-full bg-white/20 border border-white/30 -left-[1.95rem] top-1.5 group-hover:bg-white/40 transition-colors"></div>
<div className="flex flex-col space-y-1">
<h4 className="text-base text-white font-medium tracking-tight">Data Analyst</h4>
<div className="text-xs font-medium text-gray-500">FinTech Flow · 2020 - 2022</div>
<p className="text-sm pt-2 leading-relaxed">Built predictive financial models utilizing Python and visualized streams via custom React dashboards.</p>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</main>

<footer className="border-t border-white/[0.05] mt-12 py-8 relative z-10 bg-[#0B0B0B]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
<div className="text-white tracking-tighter">AS.</div>
<div>© 2024 AI Specialist. All rights reserved.</div>
</div>
</footer>

    </>
  );
}
