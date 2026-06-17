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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:cpu" data-width="18" strokeWidth="1.5"></span>
</div>
<span className="font-medium tracking-tight text-lg text-white group-hover:text-zinc-200 transition-colors">NEXUS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Workflow</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="shimmer relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-zinc-900 px-4 text-xs font-medium text-white transition-colors hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-950" href="#">
<span className="mr-2">Get Started</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 grid-bg [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/20 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Nexus AI Engine v2.0 is live
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
                Scale your operations with <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500">intelligent automation.</span>
</h1>
<p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                We build autonomous workflows that connect your apps, process data, and execute tasks. Replace repetitive work with precision engineering.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2">
                    Start Building
                    <span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
<button className="h-12 px-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium hover:bg-zinc-800 hover:text-white transition-colors flex items-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                    Watch Demo
                </button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto px-6">
<div className="relative rounded-xl border border-white/10 bg-zinc-900/50 backdrop-blur shadow-2xl overflow-hidden">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-zinc-900/80">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 h-[400px] md:h-[500px]">

<div className="hidden md:block md:col-span-3 border-r border-white/5 bg-zinc-900/30 p-4">
<div className="space-y-1">
<div className="px-3 py-2 rounded bg-indigo-500/10 text-indigo-300 text-xs font-medium flex items-center gap-2">
<span className="iconify" data-icon="lucide:layout-dashboard" data-width="14"></span>
                                Workflows
                            </div>
<div className="px-3 py-2 rounded text-zinc-500 hover:text-zinc-300 text-xs font-medium flex items-center gap-2 cursor-pointer transition-colors">
<span className="iconify" data-icon="lucide:message-square" data-width="14"></span>
                                Agents
                            </div>
<div className="px-3 py-2 rounded text-zinc-500 hover:text-zinc-300 text-xs font-medium flex items-center gap-2 cursor-pointer transition-colors">
<span className="iconify" data-icon="lucide:database" data-width="14"></span>
                                Data Sources
                            </div>
</div>
<div className="mt-8">
<h4 className="px-3 text-[10px] uppercase tracking-wider text-zinc-600 font-semibold mb-2">Active Jobs</h4>
<div className="space-y-2 px-3">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    Sync CRM Data
                                </div>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse delay-75"></span>
                                    Analyze Emails
                                </div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-9 p-6 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-zinc-950 to-zinc-950">

<div className="absolute top-12 left-12 w-48 bg-zinc-900 border border-zinc-700 rounded-lg p-3 shadow-lg z-10">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="p-1 rounded bg-orange-500/10 text-orange-400">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
</div>
<span className="text-xs font-medium text-zinc-200">Email Trigger</span>
</div>
<span className="w-2 h-2 rounded-full bg-green-500"></span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded overflow-hidden">
<div className="h-full w-full bg-zinc-600"></div>
</div>
<div className="mt-2 text-[10px] text-zinc-500 font-mono">Input: New Inquiry</div>
</div>

<svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
<path className="animate-[dash_20s_linear_infinite]" d="M 255 80 C 350 80, 350 180, 450 180" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4" strokeWidth="2"></path>
<circle cx="450" cy="180" fill="#6366f1" r="3"></circle>
</svg>

<div className="absolute top-36 left-[400px] w-52 bg-zinc-900 border border-indigo-500/30 rounded-lg p-3 shadow-lg z-10 shadow-indigo-500/10">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="p-1 rounded bg-indigo-500/10 text-indigo-400">
<span className="iconify" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<span className="text-xs font-medium text-zinc-200">AI Analysis</span>
</div>
<span className="iconify text-indigo-400 animate-spin" data-icon="lucide:loader-2" data-width="12"></span>
</div>
<div className="space-y-1.5">
<div className="h-1.5 w-3/4 bg-zinc-800 rounded"></div>
<div className="h-1.5 w-full bg-zinc-800 rounded"></div>
</div>
<div className="mt-3 flex justify-between items-center">
<span className="text-[10px] text-zinc-500 font-mono">Model: GPT-4o</span>
<span className="text-[10px] text-indigo-400 font-mono">Processing...</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-zinc-900/30">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8">Trusted by next-gen teams</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">

<span className="text-xl font-bold tracking-tighter text-white">ACME<span className="font-light">CORP</span></span>
<span className="text-xl font-semibold tracking-tight text-white flex items-center gap-1"><span className="w-4 h-4 rounded-full bg-zinc-600"></span>Stratos</span>
<span className="text-xl font-bold italic tracking-tight text-white">Hyperion</span>
<span className="text-xl font-medium tracking-wide text-white flex items-center gap-1"><span className="block w-4 h-4 rotate-45 border border-white"></span>VORTEX</span>
<span className="text-xl font-semibold tracking-tighter text-white">pulse.ai</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Architecture for autonomy</h2>
<p className="text-zinc-400">Everything you need to build, deploy, and monitor autonomous agents without touching infrastructure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-8 hover:bg-zinc-900/60 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center mb-4 text-indigo-400">
<span className="iconify" data-icon="lucide:git-merge" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Visual Workflow Builder</h3>
<p className="text-sm text-zinc-400 max-w-md">Drag, drop, and connect nodes to create complex logic. Visualize your data flow in real-time with our infinite canvas engine.</p>
</div>

<div className="w-full h-48 rounded-lg border border-white/5 bg-zinc-950/50 relative overflow-hidden">
<div className="absolute top-4 left-4 right-4 flex gap-3">
<div className="h-20 w-32 rounded border border-zinc-800 bg-zinc-900/80 p-2">
<div className="h-1.5 w-12 bg-zinc-700 rounded mb-2"></div>
<div className="h-1 w-full bg-zinc-800 rounded"></div>
</div>
<div className="h-px w-10 bg-zinc-700 self-center"></div>
<div className="h-20 w-32 rounded border border-indigo-500/30 bg-indigo-500/5 p-2 shadow-[0_0_15px_-3px_rgba(99,102,241,0.2)]">
<div className="h-1.5 w-16 bg-indigo-500/40 rounded mb-2"></div>
<div className="h-1 w-full bg-zinc-800 rounded mb-1"></div>
<div className="h-1 w-2/3 bg-zinc-800 rounded"></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-8 hover:bg-zinc-900/60 transition-all duration-300">
<div className="absolute top-0 right-0 p-32 bg-purple-500/10 blur-[60px] rounded-full pointer-events-none"></div>
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center mb-4 text-purple-400">
<span className="iconify" data-icon="lucide:webhook" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Universal API</h3>
<p className="text-sm text-zinc-400 mb-8">Connect to 5,000+ apps instantly with our unified API layer.</p>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded border border-white/5 bg-zinc-950/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-400">
<span className="iconify" data-icon="lucide:database" data-width="16"></span>
</div>
<div className="text-xs">
<div className="text-zinc-200 font-medium">PostgreSQL</div>
<div className="text-zinc-500">Database</div>
</div>
</div>

<div className="w-8 h-4 bg-green-500 rounded-full relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded border border-white/5 bg-zinc-950/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-orange-500/10 flex items-center justify-center text-orange-400">
<span className="iconify" data-icon="lucide:slack" data-width="16"></span>
</div>
<div className="text-xs">
<div className="text-zinc-200 font-medium">Slack</div>
<div className="text-zinc-500">Messaging</div>
</div>
</div>
<div className="w-8 h-4 bg-zinc-700 rounded-full relative cursor-pointer">
<div className="absolute left-0.5 top-0.5 w-3 h-3 bg-zinc-400 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-8 hover:bg-zinc-900/60 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center mb-4 text-emerald-400">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Enterprise Grade</h3>
<p className="text-sm text-zinc-400">SOC2 Type II certified. Your data is encrypted at rest and in transit.</p>
<div className="mt-8 flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 p-2 rounded w-fit">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="14"></span>
                        99.99% Uptime SLA
                    </div>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-8 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center mb-4 text-pink-400">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Custom LLM Training</h3>
<p className="text-sm text-zinc-400">Fine-tune models on your company data. Create agents that speak your language and understand your specific domain requirements.</p>
</div>
<div className="flex-1 w-full">

<div className="rounded-lg bg-zinc-950 border border-zinc-800 p-4 font-mono text-xs overflow-hidden">
<div className="flex gap-1.5 mb-3 opacity-50">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
</div>
<div className="space-y-1 text-zinc-400">
<p><span className="text-pink-400">const</span> agent = <span className="text-indigo-400">new</span> Agent({</p>
<p className="pl-4">model: <span className="text-emerald-400">'nexus-gpt-4'</span>,</p>
<p className="pl-4">context: <span className="text-emerald-400">'./company-wiki'</span>,</p>
<p className="pl-4">temperature: <span className="text-blue-400">0.7</span></p>
<p>});</p>
<p className="text-zinc-600">// Deploying to edge...</p>
<p className="text-emerald-500 flex items-center gap-1">
<span className="iconify" data-icon="lucide:check" data-width="10"></span> Success
                                 </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-600/5"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to automate the future?</h2>
<p className="text-lg text-zinc-400 mb-10">Join 10,000+ developers building with Nexus today. <br className="hidden md:block"/> Start for free, scale as you grow.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-12 px-8 rounded-full bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center min-w-[160px]" href="#">
                    Get Started Free
                </a>
<a className="h-12 px-8 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center min-w-[160px]" href="#">
                    Contact Sales
                </a>
</div>
<div className="mt-12 flex items-center justify-center gap-8 text-xs text-zinc-500 font-medium">
<div className="flex items-center gap-2">
<span className="iconify text-zinc-400" data-icon="lucide:check" data-width="14"></span>
                    No credit card required
                </div>
<div className="flex items-center gap-2">
<span className="iconify text-zinc-400" data-icon="lucide:check" data-width="14"></span>
                    14-day free trial
                </div>
</div>
</div>
</section>

<footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-12 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4 text-white">
<span className="iconify" data-icon="lucide:cpu" data-width="20"></span>
<span className="font-semibold tracking-tight">NEXUS</span>
</div>
<p className="text-zinc-500 mb-4">The operating system for the automated enterprise.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="18"></span></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
</div>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Product</h4>
<ul className="space-y-2 text-zinc-400">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Workflows</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Enterprise</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-2 text-zinc-400">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-2 text-zinc-400">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs">
<p>© 2024 Nexus Automation Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span>All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
