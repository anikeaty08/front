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
},
colors: {
zinc: {
850: '#1f1f22',
925: '#101012',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-md flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full mix-blend-multiply"></div>
</div>
<span className="text-zinc-100 font-medium tracking-tighter text-sm">NEXUS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium">
<a className="hover:text-zinc-100 transition-colors" href="#">Platform</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Integrations</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Resources</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium hover:text-zinc-100 transition-colors" href="#">Sign in</a>
<a className="group relative px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-950 text-xs font-medium hover:bg-zinc-200 transition-all flex items-center gap-1" href="#">
<span>Start Building</span>
<span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-zinc-950/0 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
<span className="text-xs font-medium text-zinc-300">New: Multi-Agent Orchestration</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 tracking-tight mb-6 leading-[1.1]">
                Workflow automation <br/> for the intelligence age.
            </h1>
<p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Build autonomous agents that connect your data to LLMs. Design complex logic visually, test in real-time, and deploy scalable workflows without infrastructure headaches.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-lg bg-zinc-100 text-zinc-950 text-sm font-medium hover:bg-white transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<span className="iconify" data-icon="lucide:zap" data-width="14"></span>
                    Start Automating
                </button>
<button className="h-10 px-6 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm font-medium hover:bg-zinc-900 transition-colors flex items-center gap-2 hover:border-zinc-700">
<span className="iconify" data-icon="lucide:play-circle" data-width="14"></span>
                    Watch Demo
                </button>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32 relative">

<div className="absolute -left-4 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent opacity-50"></div>
<div className="absolute -right-4 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent opacity-50"></div>
<div className="rounded-xl border border-white/10 bg-zinc-900/30 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/50 relative group">

<div className="h-10 border-b border-white/5 bg-zinc-900/80 flex items-center justify-between px-4">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
</div>
<div className="text-xs font-medium text-zinc-500 flex items-center gap-2">
<span className="iconify" data-icon="lucide:lock" data-width="10"></span>
                    nexus-engine.app
                </div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] font-medium text-emerald-500 uppercase tracking-wide">Live</span>
</div>
</div>
</div>

<div className="h-[500px] flex relative bg-zinc-950 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]">

<div className="w-16 border-r border-white/5 flex flex-col items-center py-4 gap-4 bg-zinc-925/80 backdrop-blur-sm z-10">
<button className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
<span className="iconify" data-icon="lucide:mouse-pointer-2" data-width="18"></span>
</button>
<button className="p-2 rounded-lg text-zinc-500 hover:text-zinc-300 transition-colors">
<span className="iconify" data-icon="lucide:box" data-width="18"></span>
</button>
<button className="p-2 rounded-lg text-zinc-500 hover:text-zinc-300 transition-colors">
<span className="iconify" data-icon="lucide:workflow" data-width="18"></span>
</button>
<div className="w-8 h-px bg-zinc-800 my-2"></div>
<button className="p-2 rounded-lg text-zinc-500 hover:text-zinc-300 transition-colors">
<span className="iconify" data-icon="lucide:settings-2" data-width="18"></span>
</button>
</div>

<div className="flex-1 relative overflow-hidden">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
<path className="animate-[dash_20s_linear_infinite]" d="M 220 120 C 270 120, 270 200, 320 200" fill="none" stroke="#3f3f46" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path d="M 220 120 C 270 120, 270 280, 320 280" fill="none" stroke="#3f3f46" strokeWidth="1.5"></path>
<path d="M 520 200 C 560 200, 560 240, 600 240" fill="none" stroke="#3f3f46" strokeWidth="1.5"></path>
<path d="M 520 280 C 560 280, 560 240, 600 240" fill="none" stroke="#3f3f46" strokeWidth="1.5"></path>
</svg>

<div className="absolute top-[80px] left-[50px] w-44 bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl shadow-black/40 p-3 z-10 group/node cursor-pointer">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-orange-500/20 text-orange-500 flex items-center justify-center border border-orange-500/20">
<span className="iconify" data-icon="lucide:webhook" data-width="12"></span>
</div>
<span className="text-xs font-medium text-zinc-200">Webhook</span>
</div>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
</div>
<div className="text-[10px] text-zinc-500 font-medium">customer.created</div>
</div>

<div className="absolute top-[160px] left-[320px] w-52 bg-zinc-900 border border-indigo-500/50 ring-1 ring-indigo-500/20 rounded-xl shadow-xl shadow-indigo-900/10 p-3 z-10">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
<span className="iconify" data-icon="lucide:sparkles" data-width="12"></span>
</div>
<span className="text-xs font-medium text-zinc-200">Sentiment Analysis</span>
</div>
</div>
<div className="space-y-1.5">
<div className="h-1.5 w-3/4 bg-zinc-800 rounded-full"></div>
<div className="h-1.5 w-1/2 bg-zinc-800 rounded-full"></div>
</div>
<div className="mt-3 flex gap-2">
<div className="px-2 py-0.5 rounded bg-zinc-800 text-[9px] text-zinc-400 font-medium border border-zinc-700">gpt-4-turbo</div>
</div>
</div>

<div className="absolute top-[260px] left-[320px] w-44 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl shadow-black/40 p-3 z-10 opacity-60 hover:opacity-100 transition-opacity">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-blue-500/20 text-blue-500 flex items-center justify-center border border-blue-500/20">
<span className="iconify" data-icon="lucide:database" data-width="12"></span>
</div>
<span className="text-xs font-medium text-zinc-200">Enrich Data</span>
</div>
</div>
<div className="text-[10px] text-zinc-500 font-medium">Postgres: Users</div>
</div>

<div className="absolute top-[210px] left-[600px] w-44 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl shadow-black/40 p-3 z-10">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-500 flex items-center justify-center border border-emerald-500/20">
<span className="iconify" data-icon="lucide:slack" data-width="12"></span>
</div>
<span className="text-xs font-medium text-zinc-200">Slack Notify</span>
</div>
</div>
<div className="text-[10px] text-zinc-500 font-medium">#new-signups</div>
</div>
</div>

<div className="w-64 border-l border-white/5 bg-zinc-925/90 backdrop-blur-sm p-4 flex flex-col gap-4">
<div className="flex items-center justify-between">
<h3 className="text-xs font-medium text-zinc-100">Properties</h3>
<span className="iconify text-zinc-500" data-icon="lucide:more-horizontal" data-width="14"></span>
</div>

<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Model</label>
<div className="relative">
<select className="w-full h-8 bg-zinc-900 border border-zinc-800 rounded-md text-xs text-zinc-300 px-2 appearance-none outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all">
<option>GPT-4 Turbo</option>
<option>Claude 3 Opus</option>
<option>Mistral Large</option>
</select>
<span className="iconify absolute right-2 top-2.5 text-zinc-500 pointer-events-none" data-icon="lucide:chevron-down" data-width="12"></span>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Temperature</label>
<div className="flex items-center gap-3">
<div className="h-1 flex-1 bg-zinc-800 rounded-full relative group cursor-pointer">
<div className="absolute left-0 top-0 h-full w-2/3 bg-indigo-500 rounded-full"></div>
<div className="absolute left-2/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
</div>
<span className="text-xs text-zinc-400 font-mono">0.7</span>
</div>
</div>
<div className="h-px w-full bg-zinc-800"></div>
<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Stream Response</label>

<button className="w-8 h-4 bg-indigo-500/20 rounded-full relative border border-indigo-500/30 transition-colors">
<span className="absolute right-0.5 top-0.5 w-2.5 h-2.5 bg-indigo-400 rounded-full shadow-sm"></span>
</button>
</div>
</div>
<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">JSON Mode</label>

<button className="w-8 h-4 bg-zinc-800 rounded-full relative border border-zinc-700 transition-colors">
<span className="absolute left-0.5 top-0.5 w-2.5 h-2.5 bg-zinc-500 rounded-full shadow-sm"></span>
</button>
</div>
</div>
</div>
<div className="mt-auto">
<button className="w-full py-2 bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-medium rounded-md transition-colors shadow-lg shadow-indigo-900/20">
                            Deploy Changes
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20">
<div className="mb-12">
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Designed for developers</h2>
<p className="text-sm text-zinc-500">Everything you need to build production-grade agents.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-6 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4 text-zinc-100">
<span className="iconify" data-icon="lucide:git-branch" data-width="20"></span>
</div>
<h3 className="text-sm font-medium text-zinc-100 mb-2">Version Control</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Rollback to any previous state of your workflow instantly. Branch, merge, and review changes like code.</p>
</div>

<div className="group p-6 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4 text-zinc-100">
<span className="iconify" data-icon="lucide:terminal" data-width="20"></span>
</div>
<h3 className="text-sm font-medium text-zinc-100 mb-2">API-First Design</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Every workflow is automatically exposed as a secure API endpoint. Trigger via curl, Python, or Node.js SDK.</p>
</div>

<div className="group p-6 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4 text-zinc-100">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-sm font-medium text-zinc-100 mb-2">Enterprise Security</h3>
<p className="text-xs text-zinc-500 leading-relaxed">SOC2 compliant infrastructure, PII redaction built-in, and private VPC deployment options available.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">
<div className="relative rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden">
<div className="grid md:grid-cols-2">
<div className="p-10 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 mb-6">
<span className="px-2 py-1 rounded bg-zinc-800 text-[10px] font-mono text-zinc-300 border border-zinc-700">$ npm install nexus-cli</span>
</div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Code or No-Code. <br/>Your choice.</h2>
<p className="text-sm text-zinc-400 font-light mb-8 leading-relaxed max-w-sm">
                        Prefer your IDE? Define workflows in Typescript and push to Nexus. Our bi-directional sync keeps the visual editor up to date.
                    </p>
<a className="text-sm font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors" href="#">
                        Read the docs <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
</div>
<div className="bg-zinc-950 p-6 md:p-10 border-l border-white/5 font-mono text-xs">
<div className="flex gap-1.5 mb-4">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
</div>
<div className="space-y-2 text-zinc-500">
<p><span className="text-purple-400">import</span> { Workflow, Agent } <span className="text-purple-400">from</span> <span className="text-green-400">'@nexus/sdk'</span>;</p>
<p> </p>
<p><span className="text-purple-400">const</span> agent = <span className="text-purple-400">new</span> Agent({</p>
<p className="pl-4">model: <span className="text-green-400">'gpt-4-turbo'</span>,</p>
<p className="pl-4">tools: [Search, Calculator]</p>
<p>});</p>
<p> </p>
<p><span className="text-zinc-600">// Deploy workflow</span></p>
<p>await Workflow.create({</p>
<p className="pl-4">trigger: <span className="text-green-400">'webhook'</span>,</p>
<p className="pl-4">steps: [agent.run()]</p>
<p>});</p>
<p> </p>
<p className="text-emerald-500">&gt; Workflow deployed successfully (34ms)</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="text-sm font-medium text-zinc-100 mb-4">Product</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Workflows</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Agents</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Enterprise</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-100 mb-4">Developers</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-100 mb-4">Company</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">About</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-100 mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-zinc-800 rounded-sm"></div>
<span className="text-xs text-zinc-600">© 2024 Nexus Inc.</span>
</div>
<div className="flex gap-4">
<a className="text-zinc-600 hover:text-zinc-400 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="16"></span>
</a>
<a className="text-zinc-600 hover:text-zinc-400 transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="16"></span>
</a>
<a className="text-zinc-600 hover:text-zinc-400 transition-colors" href="#">
<span className="iconify" data-icon="lucide:discord" data-width="16"></span>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
