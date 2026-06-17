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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-white text-black flex items-center justify-center font-semibold tracking-tighter">K</div>
<span className="text-lg font-medium tracking-tight text-white group-hover:text-neutral-200 transition-colors">Kora.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#testimonials">Stories</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#pricing">
                    Start Automating
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="glow-effect" style={{top: '40%', width: '600px', height: '600px', opacity: '0.6'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-blue-400 mb-8 animate-fade-in-up">
<span className="iconify" data-icon="lucide:sparkles" data-width="14"></span>
<span>Now integrating with GPT-4 Turbo</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-[1.1]">
                Scale operations with <br/>
<span className="gradient-blue-text">intelligent automation.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Kora Business replaces manual grunt work with autonomous agents and robust pipelines. We build the infrastructure so you can focus on strategy.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2 group" href="#pricing">
                    View Pricing
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white font-medium rounded-full transition-all flex items-center justify-center gap-2" href="#process">
                    How it works
                </a>
</div>

<div className="mt-20 relative mx-auto max-w-5xl">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-20 blur-lg"></div>
<div className="relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-neutral-900">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
</div>
<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="col-span-1 space-y-6">
<div className="bg-neutral-800/30 rounded-lg p-4 border border-white/5">
<div className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Hours Saved</div>
<div className="text-3xl font-medium text-white flex items-baseline gap-2">
                                    128.5
                                    <span className="text-xs text-green-500 flex items-center">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span> 12%
                                    </span>
</div>
</div>
<div className="bg-neutral-800/30 rounded-lg p-4 border border-white/5">
<div className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Active Agents</div>
<div className="text-3xl font-medium text-white">8</div>
</div>
</div>

<div className="col-span-2 bg-neutral-800/20 rounded-lg border border-white/5 p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Running</span>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center border border-white/10">
<span className="iconify text-neutral-400" data-icon="lucide:mail" data-width="16"></span>
</div>
<div className="h-px bg-neutral-800 flex-1"></div>
<div className="w-8 h-8 rounded bg-blue-600/20 flex items-center justify-center border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
<span className="iconify text-blue-400" data-icon="lucide:brain-circuit" data-width="16"></span>
</div>
<div className="h-px bg-neutral-800 flex-1"></div>
<div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center border border-white/10">
<span className="iconify text-neutral-400" data-icon="lucide:database" data-width="16"></span>
</div>
</div>
<div className="font-mono text-xs text-neutral-500 mt-4">
                                    &gt; New lead detected from source: organic_search<br/>
                                    &gt; AI Agent enriching profile... [Success]<br/>
                                    &gt; CRM updated. Personalized sequence initiated.
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-neutral-900/30 py-10">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-neutral-500 mb-8 font-medium">Powering automation for next-gen companies</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale">

<span className="text-lg font-semibold tracking-tight text-white">Acme Inc.</span>
<span className="text-lg font-semibold tracking-tight text-white">GlobalBank</span>
<span className="text-lg font-semibold tracking-tight text-white">NEXUS</span>
<span className="text-lg font-semibold tracking-tight text-white">Starlight</span>
<span className="text-lg font-semibold tracking-tight text-white">Umbrella</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Architecture for efficiency</h2>
<p className="text-neutral-400 text-lg font-light">
                    We don't just connect apps. We design self-healing, intelligent ecosystems that grow with your business revenue.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-900/20 flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-300 transition-colors">
<span className="iconify" data-icon="lucide:workflow" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Custom Workflows</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Tailored logic built on Enterprise-grade platforms. We handle complex conditionals, loops, and error handling seamlessly.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-purple-900/20 flex items-center justify-center mb-6 text-purple-400 group-hover:text-purple-300 transition-colors">
<span className="iconify" data-icon="lucide:bot" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">AI Integration</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Deploy LLMs to draft emails, analyze sentiment, summarize meetings, and make decisions without human input.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-900/20 flex items-center justify-center mb-6 text-emerald-400 group-hover:text-emerald-300 transition-colors">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Audit &amp; Security</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Rigorous testing and security protocols ensure your data remains protected while moving between applications.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-y border-white/5 relative" id="pricing">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Simple, transparent pricing</h2>
<p className="text-neutral-400 font-light">Choose the level of automation your business needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="flex flex-col p-8 rounded-2xl bg-neutral-950 border border-neutral-800">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Starter</h3>
<p className="text-sm text-neutral-500 mt-1">Automation-only fundamentals</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">$1,500</span>
<span className="text-sm text-neutral-500">/mo</span>
</div>
<a className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors text-center mb-8" href="#">
                        Get Started
                    </a>
<ul className="space-y-3 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>Standard Workflows (Zapier/Make)</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>CRM &amp; Email Integration</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>Weekly Maintenance</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>Email Support</span>
</li>
</ul>
</div>

<div className="flex flex-col p-8 rounded-2xl bg-neutral-900 border border-blue-500/30 relative shadow-2xl shadow-blue-900/10 scale-100 md:scale-105 z-10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                        Recommended
                    </div>
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Professional</h3>
<p className="text-sm text-blue-200/60 mt-1">AI-powered growth engine</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white">$3,500</span>
<span className="text-sm text-neutral-400">/mo</span>
</div>
<a className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors text-center mb-8 shadow-lg shadow-blue-900/20" href="#">
                        Start Scale
                    </a>
<ul className="space-y-3 flex-1">
<li className="flex items-start gap-3 text-sm text-white">
<span className="iconify text-blue-400 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span><strong>Everything in Starter</strong></span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-blue-400 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>LLM/AI Agent Integration</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-blue-400 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>Custom Dashboard Access</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-blue-400 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>Priority Slack Support</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-blue-400 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>10 Hours Development/mo</span>
</li>
</ul>
</div>

<div className="flex flex-col p-8 rounded-2xl bg-neutral-950 border border-neutral-800">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Enterprise</h3>
<p className="text-sm text-neutral-500 mt-1">Full operational suite</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">Custom</span>
</div>
<a className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors text-center mb-8" href="#">
                        Contact Sales
                    </a>
<ul className="space-y-3 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span><strong>Everything in Professional</strong></span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>Comprehensive System Audits</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>24/7 Uptime Monitoring</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>Custom Reporting &amp; BI</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>Dedicated Solutions Architect</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5">
<div className="flex gap-1 text-blue-500 mb-6">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<blockquote className="text-lg text-neutral-200 mb-6 font-light leading-relaxed">
                        "Kora transformed our sales process. We went from manually copying data to a fully autonomous system that qualifies and books meetings. The AI integration alone pays for the subscription."
                    </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-600"></div>
<div>
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-neutral-500">COO, TechFlow</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5">
<div className="flex gap-1 text-blue-500 mb-6">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<blockquote className="text-lg text-neutral-200 mb-6 font-light leading-relaxed">
                        "The audit revealed bottlenecks we didn't know existed. Kora's team rebuilt our entire fulfillment logic in two weeks. It's clean, documented, and incredibly reliable."
                    </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-600"></div>
<div>
<div className="text-sm font-medium text-white">David Miller</div>
<div className="text-xs text-neutral-500">Founder, ScaleUp Agency</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to reclaim your time?</h2>
<p className="text-lg text-neutral-400 mb-10 font-light">Join forward-thinking companies automating their future with Kora.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black hover:bg-neutral-200 font-medium rounded-full transition-colors" href="#pricing">
                    Get Started Now
                </a>
<a className="w-full sm:w-auto px-8 py-3 bg-neutral-900 border border-white/10 hover:border-white/20 text-white font-medium rounded-full transition-colors" href="mailto:hello@kora.business">
                    Talk to an Expert
                </a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-neutral-800 text-white flex items-center justify-center text-xs font-semibold">K</div>
<span className="text-md font-medium tracking-tight text-white">Kora.</span>
</a>
<p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
                        Designing the future of work through intelligent automation and AI integration.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600">© 2024 Kora Business. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="16"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="16"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="16"></span>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
