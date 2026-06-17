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
display: ['Outfit', 'sans-serif'],
},
colors: {
brand: {
neon: '#00FF88',
emerald: '#0F3F2E',
cyan: '#00E5FF',
dark: '#0B0F0D',
darker: '#111315',
text: '#E6F0EB',
muted: '#8FA39B',
}
},
spacing: {
'120': '120px', // Section padding
},
maxWidth: {
'content': '1140px',
},
backgroundImage: {
'card-gradient': 'linear-gradient(180deg, rgba(20,25,22,0.65) 0%, rgba(15,20,17,0.75) 100%)',
}
}
}
}

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
      

<div className="bg-noise"></div>
<div className="bg-grid"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#0B0F0D]/80 backdrop-blur-md">
<div className="max-w-content mx-auto px-6 h-20 flex items-center justify-between">
<div className="font-display font-semibold text-xl tracking-tighter text-brand-text">
                AGNT<span className="text-brand-neon">.OS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-brand-muted font-medium">
<a className="hover:text-brand-neon transition-colors" href="#">Solutions</a>
<a className="hover:text-brand-neon transition-colors" href="#">Platform</a>
<a className="hover:text-brand-neon transition-colors" href="#">Enterprise</a>
<a className="hover:text-brand-neon transition-colors" href="#">Pricing</a>
</div>
<button className="hidden md:block px-5 py-2 text-xs font-medium tracking-wide uppercase border border-brand-neon/30 text-brand-neon rounded hover:bg-brand-neon/10 transition-all">
                Get Access
            </button>
</div>
</nav>

<section className="relative pt-48 pb-32 px-6 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-neon/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-content mx-auto relative z-10 flex flex-col items-center text-center">
<div className="mb-8 px-4 py-1 rounded-full border border-brand-neon/20 bg-brand-neon/5 backdrop-blur-sm">
<span className="text-xs font-medium text-brand-neon tracking-wide uppercase">Genesis v2.0 is live</span>
</div>
<h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-ultra-tight text-brand-text mb-8">
                AI Agents That<br/>
<span className="relative inline-block">
<span className="relative z-10">Think. Act. Execute.</span>
<span className="absolute bottom-2 left-0 w-full h-3 bg-brand-neon/20 blur-md -rotate-1"></span>
</span>
</h1>
<p className="text-lg md:text-xl text-brand-muted max-w-2xl leading-relaxed mb-12">
                The enterprise-grade engineering studio for autonomous workforce. Build, orchestrate, and deploy agents that reason like humans and execute like machines.
            </p>
<div className="flex flex-col md:flex-row gap-6 items-center">
<button className="group relative px-8 py-4 bg-brand-neon text-black font-semibold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(0,255,136,0.4)]">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative flex items-center gap-2">
                        Start Building
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</span>
</button>
<button className="px-8 py-4 border border-brand-neon text-brand-neon font-medium rounded-lg hover:bg-brand-neon/5 transition-all">
                    Book Demo
                </button>
</div>
</div>
</section>

<section className="border-y border-white/5 py-10 bg-white/[0.01]">
<div className="max-w-content mx-auto px-6">
<div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xl font-bold tracking-tight hover:text-brand-neon transition-colors cursor-default">ACME CORP</div>
<div className="text-xl font-bold tracking-tight hover:text-brand-neon transition-colors cursor-default">QUANTA</div>
<div className="text-xl font-bold tracking-tight hover:text-brand-neon transition-colors cursor-default">VERIDIAN</div>
<div className="text-xl font-bold tracking-tight hover:text-brand-neon transition-colors cursor-default">NEXUS AI</div>
<div className="text-xl font-bold tracking-tight hover:text-brand-neon transition-colors cursor-default">STRATOS</div>
</div>
</div>
</section>

<section className="py-120 px-6">
<div className="max-w-content mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">100+ Enterprise Agent Blueprints</h2>
<p className="text-brand-muted text-lg max-w-2xl mx-auto">
                    Pre-trained neural architectures ready for deployment. Customize logic, integrate APIs, and scale instantly.
                </p>
</div>

<div className="flex flex-wrap justify-center gap-2 mb-20">
<button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-brand-text text-sm hover:border-brand-neon/50 transition-all">All</button>
<button className="px-6 py-2 rounded-full border border-brand-neon text-brand-neon bg-brand-neon/10 text-sm shadow-[0_0_15px_rgba(0,255,136,0.2)]">Banking</button>
<button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-brand-muted text-sm hover:text-brand-text hover:border-white/20 transition-all">Insurance</button>
<button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-brand-muted text-sm hover:text-brand-text hover:border-white/20 transition-all">HR Ops</button>
<button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-brand-muted text-sm hover:text-brand-text hover:border-white/20 transition-all">Marketing</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">


<div className="col-span-1 md:col-span-7 glass-card rounded-[20px] p-8 flex flex-col justify-between h-[320px] group cursor-pointer">
<div className="flex justify-between items-start">
<span className="px-3 py-1 rounded-full border border-brand-neon/30 text-brand-neon text-xs uppercase tracking-wider">Finance</span>
<iconify-icon className="text-brand-muted group-hover:text-brand-neon transition-colors" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div>
<div className="w-12 h-12 rounded-full bg-brand-emerald flex items-center justify-center mb-6 text-brand-neon">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium mb-2 group-hover:text-brand-neon transition-colors">Fraud Detection Sentinel</h3>
<p className="text-brand-muted text-sm line-clamp-2">Real-time transaction monitoring with 99.9% accuracy using predictive anomaly detection.</p>
</div>
<div className="w-full h-px bg-gradient-to-r from-brand-neon/50 to-transparent mt-4"></div>
</div>

<div className="col-span-1 md:col-span-5 glass-card rounded-[20px] p-8 flex flex-col justify-between h-[320px] group cursor-pointer">
<div className="flex justify-between items-start">
<span className="px-3 py-1 rounded-full border border-brand-neon/30 text-brand-neon text-xs uppercase tracking-wider">Support</span>
<iconify-icon className="text-brand-muted group-hover:text-brand-neon transition-colors" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div>
<div className="w-12 h-12 rounded-full bg-brand-emerald flex items-center justify-center mb-6 text-brand-neon">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium mb-2 group-hover:text-brand-neon transition-colors">L1 Triaging Unit</h3>
<p className="text-brand-muted text-sm">Autonomous ticket resolution and routing.</p>
</div>
<div className="w-full h-px bg-gradient-to-r from-brand-neon/50 to-transparent mt-4"></div>
</div>


<div className="col-span-1 md:col-span-4 glass-card rounded-[20px] p-8 flex flex-col justify-between h-[280px] group cursor-pointer">
<div className="flex justify-between items-start">
<span className="px-3 py-1 rounded-full border border-brand-neon/30 text-brand-neon text-xs uppercase tracking-wider">Sales</span>
<iconify-icon className="text-brand-muted group-hover:text-brand-neon transition-colors" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium mb-2 group-hover:text-brand-neon transition-colors">Lead Qualifier</h3>
<p className="text-brand-muted text-sm">Enriches data and scores intent signals.</p>
</div>
<div className="w-full h-px bg-gradient-to-r from-brand-neon/50 to-transparent"></div>
</div>

<div className="col-span-1 md:col-span-4 glass-card rounded-[20px] p-8 flex flex-col justify-between h-[280px] group cursor-pointer">
<div className="flex justify-between items-start">
<span className="px-3 py-1 rounded-full border border-brand-neon/30 text-brand-neon text-xs uppercase tracking-wider">Legal</span>
<iconify-icon className="text-brand-muted group-hover:text-brand-neon transition-colors" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium mb-2 group-hover:text-brand-neon transition-colors">Contract Auditor</h3>
<p className="text-brand-muted text-sm">Scans PDFs for compliance risks.</p>
</div>
<div className="w-full h-px bg-gradient-to-r from-brand-neon/50 to-transparent"></div>
</div>

<div className="col-span-1 md:col-span-4 glass-card rounded-[20px] p-8 flex flex-col justify-between h-[280px] group cursor-pointer">
<div className="flex justify-between items-start">
<span className="px-3 py-1 rounded-full border border-brand-neon/30 text-brand-neon text-xs uppercase tracking-wider">DevOps</span>
<iconify-icon className="text-brand-muted group-hover:text-brand-neon transition-colors" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium mb-2 group-hover:text-brand-neon transition-colors">Log Analyzer</h3>
<p className="text-brand-muted text-sm">Pattern matching for incident response.</p>
</div>
<div className="w-full h-px bg-gradient-to-r from-brand-neon/50 to-transparent"></div>
</div>


<div className="col-span-1 md:col-span-8 glass-card rounded-[20px] p-8 flex flex-col justify-between h-[300px] group cursor-pointer">
<div className="flex justify-between items-start">
<span className="px-3 py-1 rounded-full border border-brand-neon/30 text-brand-neon text-xs uppercase tracking-wider">Research</span>
<iconify-icon className="text-brand-muted group-hover:text-brand-neon transition-colors" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="flex items-end gap-6">
<div className="flex-1">
<h3 className="text-2xl font-medium mb-2 group-hover:text-brand-neon transition-colors">Market Intelligence Scout</h3>
<p className="text-brand-muted text-sm max-w-md">Aggregates competitor data, news sentiment, and quarterly reports into actionable strategy briefs.</p>
</div>
<div className="hidden md:block w-32 h-16 bg-gradient-to-t from-brand-neon/10 to-transparent rounded-t-lg border-x border-t border-brand-neon/20"></div>
</div>
<div className="w-full h-px bg-gradient-to-r from-brand-neon/50 to-transparent"></div>
</div>

<div className="col-span-1 md:col-span-4 glass-card rounded-[20px] p-8 flex flex-col justify-between h-[300px] group cursor-pointer">
<div className="flex justify-between items-start">
<span className="px-3 py-1 rounded-full border border-brand-neon/30 text-brand-neon text-xs uppercase tracking-wider">HR</span>
<iconify-icon className="text-brand-muted group-hover:text-brand-neon transition-colors" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium mb-2 group-hover:text-brand-neon transition-colors">Talent Screener</h3>
<p className="text-brand-muted text-sm">Resume parsing and initial outreach.</p>
</div>
<div className="w-full h-px bg-gradient-to-r from-brand-neon/50 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-120 px-6 relative">
<div className="absolute inset-0 bg-grid opacity-20"></div>
<div className="max-w-content mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

<div>
<h2 className="text-3xl md:text-4xl font-semibold mb-12 flex items-center gap-3">
<span className="w-2 h-8 bg-brand-neon rounded-full"></span>
                        Orchestration Platform
                    </h2>
<div className="space-y-12">
<div className="flex gap-6 group">
<div className="flex-shrink-0 w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-brand-neon/50 transition-colors">
<iconify-icon className="text-brand-muted group-hover:text-brand-neon" icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium mb-2 text-brand-text">Multi-Agent Swarms</h4>
<p className="text-brand-muted leading-relaxed">Coordinate multiple agents to solve complex, multi-step problems with shared memory states.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="flex-shrink-0 w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-brand-neon/50 transition-colors">
<iconify-icon className="text-brand-muted group-hover:text-brand-neon" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium mb-2 text-brand-text">Enterprise Guardrails</h4>
<p className="text-brand-muted leading-relaxed">Deterministic outputs, PII redaction, and policy enforcement at the model layer.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="flex-shrink-0 w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-brand-neon/50 transition-colors">
<iconify-icon className="text-brand-muted group-hover:text-brand-neon" icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium mb-2 text-brand-text">Self-Hosted Runtime</h4>
<p className="text-brand-muted leading-relaxed">Deploy within your VPC. Zero data egress. Full audit logging and compliance.</p>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-3xl md:text-4xl font-semibold mb-12 flex items-center gap-3">
<span className="w-2 h-8 bg-white/20 rounded-full"></span>
                        Engineering Studio
                    </h2>
<div className="space-y-12">
<div className="flex gap-6 group">
<div className="flex-shrink-0 w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-brand-neon/50 transition-colors">
<iconify-icon className="text-brand-muted group-hover:text-brand-neon" icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium mb-2 text-brand-text">Visual Logic Builder</h4>
<p className="text-brand-muted leading-relaxed">Low-code node editor for defining agent cognitive paths, tool usage, and failovers.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="flex-shrink-0 w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-brand-neon/50 transition-colors">
<iconify-icon className="text-brand-muted group-hover:text-brand-neon" icon="solar:bug-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium mb-2 text-brand-text">Step-by-Step Debugger</h4>
<p className="text-brand-muted leading-relaxed">Inspect internal monologue (Chain of Thought), variable states, and API calls in real-time.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="flex-shrink-0 w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-brand-neon/50 transition-colors">
<iconify-icon className="text-brand-muted group-hover:text-brand-neon" icon="solar:tuning-square-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium mb-2 text-brand-text">Eval &amp; Testing Suite</h4>
<p className="text-brand-muted leading-relaxed">Automated regression testing for agent behavior against thousands of edge cases.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-120 px-6 bg-brand-darker relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-neon/20 to-transparent"></div>
<div className="max-w-content mx-auto">
<h2 className="text-center text-4xl font-semibold mb-20">Deployment Lifecycle</h2>
<div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">

<div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 hidden md:block -translate-y-1/2 z-0"></div>

<div className="relative z-10 w-full md:w-auto">
<div className="glass-card px-8 py-6 rounded-2xl flex flex-col items-center text-center w-full md:w-48 h-full">
<div className="w-8 h-8 rounded-full bg-brand-neon text-black font-bold flex items-center justify-center text-sm mb-4">1</div>
<h4 className="text-lg font-medium text-brand-text mb-1">Discover</h4>
<p className="text-xs text-brand-muted">Process Mining</p>
</div>
</div>
<div className="relative z-10 w-full md:w-auto">
<div className="glass-card px-8 py-6 rounded-2xl flex flex-col items-center text-center w-full md:w-48 h-full">
<div className="w-8 h-8 rounded-full bg-brand-emerald border border-brand-neon text-brand-neon font-bold flex items-center justify-center text-sm mb-4">2</div>
<h4 className="text-lg font-medium text-brand-text mb-1">Design</h4>
<p className="text-xs text-brand-muted">Architecture</p>
</div>
</div>
<div className="relative z-10 w-full md:w-auto">
<div className="glass-card px-8 py-6 rounded-2xl flex flex-col items-center text-center w-full md:w-48 h-full">
<div className="w-8 h-8 rounded-full bg-brand-emerald border border-brand-neon text-brand-neon font-bold flex items-center justify-center text-sm mb-4">3</div>
<h4 className="text-lg font-medium text-brand-text mb-1">Integrate</h4>
<p className="text-xs text-brand-muted">API Linking</p>
</div>
</div>
<div className="relative z-10 w-full md:w-auto">
<div className="glass-card px-8 py-6 rounded-2xl flex flex-col items-center text-center w-full md:w-48 h-full">
<div className="w-8 h-8 rounded-full bg-brand-emerald border border-brand-neon text-brand-neon font-bold flex items-center justify-center text-sm mb-4">4</div>
<h4 className="text-lg font-medium text-brand-text mb-1">Deploy</h4>
<p className="text-xs text-brand-muted">Production</p>
</div>
</div>
<div className="relative z-10 w-full md:w-auto">
<div className="glass-card px-8 py-6 rounded-2xl flex flex-col items-center text-center w-full md:w-48 h-full">
<div className="w-8 h-8 rounded-full bg-brand-emerald border border-brand-neon text-brand-neon font-bold flex items-center justify-center text-sm mb-4">5</div>
<h4 className="text-lg font-medium text-brand-text mb-1">Optimize</h4>
<p className="text-xs text-brand-muted">Self-Learning</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-120 px-6">
<div className="max-w-content mx-auto">
<h2 className="text-4xl font-semibold mb-16">Applied Intelligence</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-card p-10 rounded-[20px] h-full flex flex-col">
<iconify-icon className="text-brand-neon mb-6" icon="solar:buildings-2-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-medium mb-3">Enterprise Search</h3>
<p className="text-brand-muted text-base mb-8 flex-grow">Connect agents to internal wikis, Slack, and Drive. Employees ask questions and get cited, synthesized answers instantly.</p>
<a className="text-sm font-medium text-brand-neon flex items-center gap-2 hover:gap-3 transition-all" href="#">Read Case Study <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="glass-card p-10 rounded-[20px] h-full flex flex-col">
<iconify-icon className="text-brand-neon mb-6" icon="solar:code-file-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-medium mb-3">Legacy Migration</h3>
<p className="text-brand-muted text-base mb-8 flex-grow">Agents scan COBOL/Java monoliths, document business logic, and generate modern microservices code.</p>
<a className="text-sm font-medium text-brand-neon flex items-center gap-2 hover:gap-3 transition-all" href="#">Read Case Study <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="glass-card p-10 rounded-[20px] h-full flex flex-col">
<iconify-icon className="text-brand-neon mb-6" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-medium mb-3">Customer Onboarding</h3>
<p className="text-brand-muted text-base mb-8 flex-grow">Automate KYC checks, account provisioning, and welcome emails with a single orchestrator agent.</p>
<a className="text-sm font-medium text-brand-neon flex items-center gap-2 hover:gap-3 transition-all" href="#">Read Case Study <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="py-120 px-6 bg-white/[0.01]">
<div className="max-w-content mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
<div>
<div className="text-5xl md:text-6xl font-light text-brand-neon text-glow mb-2">85%</div>
<div className="text-brand-muted text-sm font-medium uppercase tracking-wider">Cost Reduction</div>
</div>
<div>
<div className="text-5xl md:text-6xl font-light text-brand-neon text-glow mb-2">24/7</div>
<div className="text-brand-muted text-sm font-medium uppercase tracking-wider">Uptime &amp; Ops</div>
</div>
<div>
<div className="text-5xl md:text-6xl font-light text-brand-neon text-glow mb-2">10x</div>
<div className="text-brand-muted text-sm font-medium uppercase tracking-wider">Workflow Speed</div>
</div>
<div>
<div className="text-5xl md:text-6xl font-light text-brand-neon text-glow mb-2">0ms</div>
<div className="text-brand-muted text-sm font-medium uppercase tracking-wider">Human Latency</div>
</div>
</div>
</div>
</section>

<section className="py-120 px-6 relative">
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold mb-8 tracking-tight">Ready to deploy your <br/> <span className="text-brand-neon">Digital Workforce?</span></h2>
<p className="text-xl text-brand-muted mb-12">Join the Fortune 500 companies building the future with AGNT.OS.</p>
<button className="px-10 py-5 bg-brand-neon text-black text-lg font-semibold rounded-lg shadow-[0_0_50px_rgba(0,255,136,0.3)] hover:shadow-[0_0_80px_rgba(0,255,136,0.5)] transition-all transform hover:-translate-y-1">
                Start Free Trial
            </button>
</div>

<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-neon rounded-full opacity-40 blur-[1px]"></div>
<div className="absolute top-3/4 left-1/3 w-1 h-1 bg-brand-neon rounded-full opacity-30 blur-[1px]"></div>
<div className="absolute top-1/2 right-1/4 w-3 h-3 bg-brand-neon rounded-full opacity-20 blur-[2px]"></div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#0B0F0D] pt-20 pb-10 px-6">
<div className="max-w-content mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<div className="font-display font-bold text-2xl tracking-tighter text-brand-text mb-6">
                    AGNT<span className="text-brand-neon">.OS</span>
</div>
<p className="text-brand-muted text-sm max-w-xs">
                    San Francisco, CA<br/>
                    © 2026 AGNT Technologies Inc.
                </p>
</div>
<div className="flex gap-16">
<div>
<h5 className="text-white font-medium mb-4">Product</h5>
<ul className="space-y-3 text-sm text-brand-muted">
<li><a className="hover:text-brand-neon transition-colors" href="#">Agents</a></li>
<li><a className="hover:text-brand-neon transition-colors" href="#">Studio</a></li>
<li><a className="hover:text-brand-neon transition-colors" href="#">Observability</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4">Company</h5>
<ul className="space-y-3 text-sm text-brand-muted">
<li><a className="hover:text-brand-neon transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand-neon transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-neon transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
</footer>

    </>
  );
}
