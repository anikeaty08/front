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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="JUFg0MwEcM3urKc9W7Vg"></div>

</div></div>

<nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative w-8 h-8 flex items-center justify-center bg-gray-900 rounded-lg text-white">
<i className="w-4 h-4 fill-current" data-lucide="zap"></i>
</div>
<span className="text-xl font-semibold tracking-tight group-hover:text-green-600 transition-colors">beam</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">Product</a>
<a className="hover:text-gray-900 transition-colors" href="#">Solutions</a>
<a className="hover:text-gray-900 transition-colors" href="#">Developers</a>
<a className="hover:text-gray-900 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">Log in</a>
<a className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-lg shadow-gray-200/50" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-green-50/50 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-gray-50/80 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-8 animate-fade shadow-sm hover:border-gray-300 transition-colors cursor-pointer">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-mono text-gray-600 font-medium tracking-wide uppercase">v2.4 is live</span>
<span className="h-3 w-px bg-gray-200 mx-1"></span>
<span className="text-xs text-gray-500 flex items-center">Read changelog <i className="w-3 h-3 ml-1" data-lucide="arrow-right"></i></span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-gray-900 mb-8 leading-[1.05] animate-fade delay-100">
                Self-learning AI <br className="hidden md:block"/>
                for <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">Operations</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade delay-200">
                Automate complex workflows with human-level precision. Beam's autonomous agents learn from your team and optimize processes in real-time.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade delay-300">
<button className="bg-green-600 hover:bg-green-500 text-white text-base font-medium px-8 py-3.5 rounded-xl shadow-xl shadow-green-200/50 transition-all transform hover:-translate-y-0.5 w-full sm:w-auto flex items-center justify-center gap-2">
                    Start Automating
                    <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
<button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 text-base font-medium px-8 py-3.5 rounded-xl transition-all w-full sm:w-auto flex items-center justify-center gap-2 shadow-sm">
<i className="w-5 h-5 text-gray-400" data-lucide="play-circle"></i>
                    View Demo
                </button>
</div>

<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left animate-fade delay-300">

<div className="md:col-span-1 bg-white rounded-2xl p-6 border border-gray-200 shadow-xl shadow-gray-200/40 relative group hover:border-green-200 transition-colors">
<div className="flex items-center justify-between mb-8">
<div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
<i className="w-5 h-5 text-gray-600" data-lucide="bar-chart-2"></i>
</div>
<span className="text-xs font-mono text-green-600 bg-green-50 px-2 py-1 rounded-md border border-green-100">+12.5%</span>
</div>
<div>
<p className="text-sm font-medium text-gray-500 mb-1">Weekly Efficiency</p>
<h3 className="text-3xl font-semibold tracking-tight text-gray-900">98.2%</h3>
</div>
<div className="mt-6 flex items-end gap-1 h-12 opacity-80">
<div className="w-1/6 bg-green-100 rounded-t-sm h-[40%]"></div>
<div className="w-1/6 bg-green-200 rounded-t-sm h-[60%]"></div>
<div className="w-1/6 bg-green-300 rounded-t-sm h-[50%]"></div>
<div className="w-1/6 bg-green-400 rounded-t-sm h-[80%]"></div>
<div className="w-1/6 bg-green-500 rounded-t-sm h-[90%]"></div>
<div className="w-1/6 bg-gray-100 rounded-t-sm h-[30%]"></div>
</div>
</div>

<div className="md:col-span-2 bg-white rounded-2xl p-6 border border-gray-200 shadow-xl shadow-gray-200/40 relative overflow-hidden group">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-base font-semibold text-gray-900">Task Completion</h3>
<p className="text-sm text-gray-500 mt-1">Real-time agent performance</p>
</div>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mt-2"></span>
</div>
</div>
<div className="relative h-40 w-full flex items-end justify-between gap-3 px-2">
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-50">
<div className="border-t border-dashed border-gray-100 w-full h-px"></div>
<div className="border-t border-dashed border-gray-100 w-full h-px"></div>
<div className="border-t border-dashed border-gray-100 w-full h-px"></div>
</div>
<div className="w-full bg-gray-50 rounded-t h-[45%]"></div>
<div className="w-full bg-gray-100 rounded-t h-[65%]"></div>
<div className="w-full bg-gray-100 rounded-t h-[50%]"></div>
<div className="w-full bg-green-100 rounded-t h-[85%] group-hover:bg-green-200 transition-colors"></div>
<div className="w-full bg-green-500 rounded-t h-[75%] shadow-lg shadow-green-100 relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-mono py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Now</div>
</div>
<div className="w-full bg-gray-50 rounded-t h-[60%]"></div>
<div className="w-full bg-gray-50 rounded-t h-[40%]"></div>
</div>
</div>

<div className="md:col-span-2 bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-xl shadow-gray-900/20 text-white relative overflow-hidden">
<div className="absolute -right-6 -top-6 text-gray-800 opacity-20">
<i className="w-40 h-40 stroke-1" data-lucide="cpu"></i>
</div>
<div className="flex items-center justify-between mb-6 relative z-10">
<div className="flex items-center gap-3">
<div className="bg-white/10 p-1.5 rounded-lg border border-white/10">
<i className="w-4 h-4 text-white" data-lucide="bot"></i>
</div>
<h3 className="text-base font-medium">Active Agents</h3>
</div>
<span className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-400/20">4 Online</span>
</div>
<div className="space-y-2 relative z-10">
<div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[10px] font-bold">L</div>
<span className="text-sm text-gray-200">Logistics_Router_01</span>
</div>
<span className="text-[10px] text-green-400 font-mono">Optimizing</span>
</div>
<div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-[10px] font-bold">S</div>
<span className="text-sm text-gray-200">Support_Triage_A</span>
</div>
<span className="text-[10px] text-gray-500 font-mono">Idle</span>
</div>
</div>
</div>

<div className="md:col-span-1 bg-white rounded-2xl p-6 border border-gray-200 shadow-xl shadow-gray-200/40 flex flex-col justify-between items-center text-center">
<h3 className="text-sm font-medium text-gray-500 w-full text-left">System Health</h3>
<div className="relative w-28 h-28 my-2">
<svg className="w-full h-full transform -rotate-90">
<circle cx="56" cy="56" fill="transparent" r="48" stroke="#f3f4f6" strokeWidth="6"></circle>
<circle cx="56" cy="56" fill="transparent" r="48" stroke="#22c55e" stroke-dasharray="301.59" stroke-dashoffset="15" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-bold text-gray-900">99.9%</span>
<span className="text-[10px] text-gray-400 uppercase tracking-wider">Uptime</span>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-gray-500">
<i className="w-3 h-3 text-green-500" data-lucide="check-circle-2"></i>
                        All systems operational
                    </div>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-100 bg-gray-50/50 py-12">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by forward-thinking teams</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
<div className="flex items-center gap-2 font-bold text-xl text-gray-800"><i className="fill-current w-5 h-5" data-lucide="triangle"></i> Vercel</div>
<div className="flex items-center gap-2 font-bold text-xl text-gray-800"><i className="fill-current w-5 h-5" data-lucide="hexagon"></i> Linear</div>
<div className="flex items-center gap-2 font-bold text-xl text-gray-800"><i className="fill-current w-5 h-5" data-lucide="box"></i> Stripe</div>
<div className="flex items-center gap-2 font-bold text-xl text-gray-800"><i className="fill-current w-5 h-5" data-lucide="globe"></i> Raycast</div>
<div className="flex items-center gap-2 font-bold text-xl text-gray-800"><i className="fill-current w-5 h-5" data-lucide="layers"></i> Loom</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">Orchestrate your entire business logic</h2>
<p className="text-lg text-gray-500">Build, deploy, and monitor autonomous agents that integrate directly with your existing stack.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors border border-gray-100">
<i className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" data-lucide="git-branch"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3">Adaptive Workflows</h3>
<p className="text-gray-500 leading-relaxed">Agents that don't just follow scripts—they adapt to edge cases and optimize paths over time using reinforcement learning.</p>
</div>

<div className="group">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors border border-gray-100">
<i className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3">Enterprise Security</h3>
<p className="text-gray-500 leading-relaxed">SOC 2 Type II compliant. Granular permission controls and audit logs for every action taken by an AI agent.</p>
</div>

<div className="group">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors border border-gray-100">
<i className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" data-lucide="terminal-square"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3">Developer API</h3>
<p className="text-gray-500 leading-relaxed">Full programmatic access via our SDK. Integrate agents into your CI/CD pipelines and internal tools seamlessly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-6 shadow-sm">
<span className="text-xs font-mono text-green-600 font-medium">SDK v2.0</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6">Designed for Developers</h2>
<p className="text-lg text-gray-500 mb-8 leading-relaxed">
                    Beam is built API-first. Define agent behaviors, set guardrails, and monitor execution streams directly from your codebase using our type-safe SDK.
                </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
<i className="w-3 h-3 text-green-600" data-lucide="check"></i>
</div>
<span className="text-gray-700">Type-safe TypeScript SDK</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
<i className="w-3 h-3 text-green-600" data-lucide="check"></i>
</div>
<span className="text-gray-700">Zero-latency WebSocket streaming</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
<i className="w-3 h-3 text-green-600" data-lucide="check"></i>
</div>
<span className="text-gray-700">Local simulation environment</span>
</div>
</div>
<div className="mt-10">
<a className="text-green-600 font-medium hover:text-green-700 inline-flex items-center gap-1 group" href="#">
                        Read the documentation 
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 transform blur-3xl opacity-10"></div>
<div className="relative bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl border border-gray-800">

<div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="text-xs text-gray-500 font-mono">agent.ts</div>
</div>

<div className="p-6 overflow-x-auto">
<pre className="font-mono text-xs sm:text-sm leading-relaxed"><span className="text-purple-400">import</span> { Agent, Task } <span className="text-purple-400">from</span> <span className="text-green-300">'@beam-ai/sdk'</span>;

<span className="text-gray-500">// Initialize autonomous agent</span>
<span className="text-purple-400">const</span> logisticsAgent = <span className="text-purple-400">new</span> <span className="text-blue-400">Agent</span>({
  <span className="text-red-300">role</span>: <span className="text-green-300">'logistics_manager'</span>,
  <span className="text-red-300">model</span>: <span className="text-green-300">'beam-v2-turbo'</span>,
  <span className="text-red-300">temperature</span>: <span className="text-orange-300">0.2</span>
});

<span className="text-gray-500">// Define task execution</span>
<span className="text-purple-400">await</span> logisticsAgent.<span className="text-blue-400">run</span>({
  <span className="text-red-300">trigger</span>: <span className="text-green-300">'new_order'</span>,
  <span className="text-red-300">constraints</span>: [<span className="text-green-300">'cost_optimized'</span>, <span className="text-green-300">'&lt; 24h'</span>],
  <span className="text-red-300">onStep</span>: (<span className="text-orange-300">step</span>) =&gt; {
    console.<span className="text-blue-400">log</span>(<span className="text-green-300">`Processing: ${step.id}`</span>);
  }
});
</pre>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">Ready to automate operations?</h2>
<p className="text-xl text-gray-500 mb-10">Join 4,000+ companies using Beam to build intelligent workflows.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-gray-900 hover:bg-gray-800 text-white text-lg font-medium px-8 py-3 rounded-lg shadow-xl transition-all w-full sm:w-auto">
                    Get Started for Free
                </button>
<button className="text-gray-600 hover:text-gray-900 font-medium px-8 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all w-full sm:w-auto">
                    Contact Sales
                </button>
</div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-50 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
</section>

<footer className="bg-white border-t border-gray-100 py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 flex items-center justify-center bg-gray-900 rounded-md text-white">
<i className="w-3 h-3 fill-current" data-lucide="zap"></i>
</div>
<span className="text-lg font-semibold tracking-tight">beam</span>
</div>
<p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                        The intelligent operations platform for modern teams. Automate, optimize, and scale without the overhead.
                    </p>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4">Product</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-green-600 transition-colors" href="#">Agents</a></li>
<li><a className="hover:text-green-600 transition-colors" href="#">Workflows</a></li>
<li><a className="hover:text-green-600 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-green-600 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-green-600 transition-colors" href="#">About</a></li>
<li><a className="hover:text-green-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-green-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-green-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-green-600 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-green-600 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-green-600 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
<p>© 2024 Beam Technologies Inc. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-gray-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-gray-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="hover:text-gray-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
