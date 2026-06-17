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



        // Initialize Lucide icons with custom properties
        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
                AETHER
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors duration-200" href="#workflow">Workflow</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#">
                    Book a demo
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="absolute top-20 left-1/3 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8 hover:bg-white/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Aether v2.0 is now live
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 max-w-4xl mx-auto leading-[1.1]">
                Scale operations with <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">autonomous agents.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Build, deploy, and manage AI workforces that operate 24/7. Replace repetitive cognitive tasks with intelligent, self-healing automation pipelines.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-all flex items-center gap-2">
                    Start automating
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="h-12 px-8 rounded-full border border-neutral-800 text-neutral-300 font-medium hover:bg-neutral-900 transition-all hover:text-white flex items-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                    View workflow
                </button>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32">
<div className="glass-panel rounded-2xl p-1 md:p-2 glow border border-indigo-500/20">
<div className="bg-[#0A0A0A] rounded-xl overflow-hidden border border-white/5 relative aspect-[16/9] md:aspect-[2/1] flex flex-col">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-neutral-900/20">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="mx-auto text-[10px] font-mono text-neutral-500 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="lock"></i> aether.app/workflow/sales-bot
                    </div>
</div>

<div className="flex-1 relative bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]">

<div className="absolute top-10 left-10 md:top-16 md:left-24 w-48 bg-neutral-900 border border-neutral-800 rounded-lg p-3 shadow-xl">
<div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
<div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
<i className="w-3 h-3" data-lucide="mail"></i>
</div>
<span className="text-xs font-medium text-white">Inbound Lead</span>
</div>
<div className="space-y-2">
<div className="h-1.5 w-3/4 bg-neutral-800 rounded"></div>
<div className="h-1.5 w-1/2 bg-neutral-800 rounded"></div>
</div>
<div className="absolute -right-1 top-1/2 w-2 h-2 bg-blue-500 rounded-full border-2 border-neutral-900 translate-x-1/2"></div>
</div>

<svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
<path className="hidden md:block" d="M 300 100 C 350 100, 350 180, 400 180" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"></path>
</svg>

<div className="absolute top-28 left-40 md:top-36 md:left-[400px] w-48 bg-neutral-900 border border-indigo-500/50 rounded-lg p-3 shadow-2xl shadow-indigo-500/10">
<div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
<div className="w-6 h-6 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<i className="w-3 h-3" data-lucide="sparkles"></i>
</div>
<span className="text-xs font-medium text-white">AI Analysis</span>
</div>
<div className="flex flex-col gap-2 mt-2">
<div className="flex items-center justify-between bg-black/40 p-1.5 rounded border border-white/5">
<span className="text-[10px] text-neutral-400">Sentiment</span>
<span className="text-[10px] text-green-400 font-mono">Positive</span>
</div>
<div className="flex items-center justify-between bg-black/40 p-1.5 rounded border border-white/5">
<span className="text-[10px] text-neutral-400">Intent</span>
<span className="text-[10px] text-indigo-400 font-mono">Purchase</span>
</div>
</div>
<div className="absolute -left-1 top-1/2 w-2 h-2 bg-neutral-600 rounded-full border-2 border-neutral-900 -translate-x-1/2"></div>
<div className="absolute -right-1 top-1/2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-neutral-900 translate-x-1/2"></div>
</div>

<svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
<path className="hidden md:block" d="M 600 180 C 650 180, 650 100, 700 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"></path>
</svg>

<div className="absolute top-10 left-80 md:top-16 md:left-[700px] w-48 bg-neutral-900 border border-neutral-800 rounded-lg p-3 shadow-xl">
<div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
<div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<i className="w-3 h-3" data-lucide="check-circle"></i>
</div>
<span className="text-xs font-medium text-white">CRM Update</span>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-neutral-800 rounded"></div>
<div className="h-1.5 w-2/3 bg-neutral-800 rounded"></div>
</div>
<div className="absolute -left-1 top-1/2 w-2 h-2 bg-neutral-600 rounded-full border-2 border-neutral-900 -translate-x-1/2"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-500 tracking-widest uppercase mb-8">Trusted by next-gen startups</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-semibold tracking-tighter text-white">ACME<span className="font-light">CORP</span></span>
<span className="text-xl font-bold italic text-white tracking-tight">VORTEX</span>
<span className="text-xl font-medium tracking-tight text-white flex items-center gap-1"><div className="w-3 h-3 bg-white rounded-full"></div>sphere</span>
<span className="text-xl font-semibold tracking-tighter text-white">LAYER<span className="text-neutral-500">0</span></span>
<span className="text-xl font-bold tracking-tighter text-white">BLOCKS</span>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">Designed for precision.</h2>
<p className="text-lg text-neutral-400 max-w-2xl font-light">
                    Our infrastructure is purpose-built to handle complex logic branches, reducing hallucinations and ensuring enterprise-grade reliability.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-white/10 hover:bg-neutral-900/50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Real-time Execution</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Latency under 50ms for decision making nodes. Connect to live data streams without bottlenecks.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-white/10 hover:bg-neutral-900/50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="workflow"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Visual Builder</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Drag-and-drop interface for non-technical teams. Logic gates, loops, and API calls visualized.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-white/10 hover:bg-neutral-900/50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Enterprise Guardrails</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        SOC2 compliant. Custom safety layers prevent unauthorized actions or data leakage.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-white/10 hover:bg-neutral-900/50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="database"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Context Memory</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Long-term vector memory allows agents to remember customer details across sessions.
                    </p>
</div>

<div className="md:col-span-2 group p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-white/10 hover:bg-neutral-900/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-32 h-32" data-lucide="cpu"></i>
</div>
<div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="blocks"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Seamless Integrations</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
                        One-click connections to Slack, Salesforce, Notion, Linear, and 500+ other tools. No webhooks required.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-4">Simple pricing.</h2>
<p className="text-neutral-400">Start free, scale as you grow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="rounded-2xl border border-white/5 bg-neutral-900/20 p-8 flex flex-col">
<div className="mb-4">
<span className="text-sm font-medium text-neutral-400">Starter</span>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white">$0</span>
<span className="text-neutral-500">/mo</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-neutral-500 mt-0.5" data-lucide="check"></i> 1 Active Agent
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-neutral-500 mt-0.5" data-lucide="check"></i> 500 Actions/mo
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-neutral-500 mt-0.5" data-lucide="check"></i> Community Support
                        </li>
</ul>
<a className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-white text-center hover:bg-white/10 transition-colors" href="#">
                        Get Started
                    </a>
</div>

<div className="relative rounded-2xl border border-indigo-500/50 bg-neutral-900/40 p-8 flex flex-col shadow-2xl shadow-indigo-900/20">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-medium px-3 py-1 rounded-full tracking-wide uppercase">Most Popular</div>
<div className="mb-4">
<span className="text-sm font-medium text-indigo-400">Pro</span>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white">$49</span>
<span className="text-neutral-500">/mo</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-white">
<i className="w-4 h-4 text-indigo-400 mt-0.5" data-lucide="check"></i> 10 Active Agents
                        </li>
<li className="flex items-start gap-3 text-sm text-white">
<i className="w-4 h-4 text-indigo-400 mt-0.5" data-lucide="check"></i> 50,000 Actions/mo
                        </li>
<li className="flex items-start gap-3 text-sm text-white">
<i className="w-4 h-4 text-indigo-400 mt-0.5" data-lucide="check"></i> GPT-4 &amp; Claude 3 Opus
                        </li>
<li className="flex items-start gap-3 text-sm text-white">
<i className="w-4 h-4 text-indigo-400 mt-0.5" data-lucide="check"></i> Priority Support
                        </li>
</ul>
<a className="w-full py-2.5 rounded-lg bg-indigo-600 text-sm font-medium text-white text-center hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/25" href="#">
                        Start Trial
                    </a>
</div>

<div className="rounded-2xl border border-white/5 bg-neutral-900/20 p-8 flex flex-col">
<div className="mb-4">
<span className="text-sm font-medium text-neutral-400">Enterprise</span>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white">Custom</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-neutral-500 mt-0.5" data-lucide="check"></i> Unlimited Agents
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-neutral-500 mt-0.5" data-lucide="check"></i> Self-hosted Option
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-neutral-500 mt-0.5" data-lucide="check"></i> SSO &amp; Audit Logs
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-neutral-500 mt-0.5" data-lucide="check"></i> Dedicated Solution Architect
                        </li>
</ul>
<a className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-white text-center hover:bg-white/10 transition-colors" href="#">
                        Contact Sales
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 text-center px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">Ready to automate the boring stuff?</h2>
<p className="text-neutral-400 mb-10 text-lg">Join 4,000+ companies building the future of work with Aether.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<input className="h-12 px-4 rounded-lg bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-full sm:w-80" placeholder="Enter your email" type="email"/>
<button className="h-12 px-8 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition-colors whitespace-nowrap">
                    Get Access
                </button>
</div>
<p className="mt-4 text-xs text-neutral-600">No credit card required. 14-day free trial.</p>
</div>
</section>

<footer className="border-t border-white/10 bg-neutral-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
                        AETHER
                    </a>
<p className="text-sm text-neutral-500 max-w-xs">
                        The operating system for the automated economy. Built for speed, scale, and security.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Agents</a></li>
<li><a className="hover:text-white transition-colors" href="#">Workflows</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-4">
<div className="text-xs text-neutral-600">
                    © 2024 Aether Inc. All rights reserved.
                </div>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
