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
colors: {
neutral: {
850: '#1f1f1f',
925: '#0f0f0f',
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="size-6 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-md flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:bot" data-width="16"></span>
</div>
<span className="text-sm font-medium text-white tracking-tight group-hover:opacity-80 transition-opacity">AUTOMATA</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#integrations">Integrations</a>
<a className="hover:text-white transition-colors" href="#customers">Customers</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-black text-xs font-medium px-3 py-1.5 rounded-full hover:bg-neutral-200 transition-colors" href="#">
                    Start Building
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-[100%] blur-[100px] pointer-events-none"></div>
<div className="absolute inset-0 bg-grid -z-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-indigo-200">New: Multi-agent Orchestration</span>
<span className="iconify text-neutral-500" data-icon="lucide:arrow-right" data-width="12"></span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
                Scale your workflow with <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">autonomous agents.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Build, deploy, and manage AI workforces without writing a single line of code. Connect your stack and let the agents handle the rest.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-all flex items-center gap-2 group">
                    Start for free
                    <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
<button className="h-10 px-6 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm font-medium hover:bg-neutral-800 transition-all flex items-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                    Watch demo
                </button>
</div>

<div className="mt-20 relative mx-auto max-w-5xl group perspective">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="relative rounded-xl bg-neutral-925 border border-white/10 overflow-hidden shadow-2xl">

<div className="h-10 bg-black/50 border-b border-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="size-2.5 rounded-full bg-neutral-700"></div>
<div className="size-2.5 rounded-full bg-neutral-700"></div>
<div className="size-2.5 rounded-full bg-neutral-700"></div>
</div>
<div className="ml-4 h-5 w-64 bg-neutral-800/50 rounded-md"></div>
</div>

<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="col-span-1 space-y-4">
<div className="flex items-center gap-3 text-white text-sm font-medium">
<span className="iconify text-indigo-400" data-icon="lucide:workflow" data-width="18"></span>
                                Active Workflows
                            </div>
<div className="space-y-2">
<div className="p-3 bg-white/5 border border-white/5 rounded-lg flex items-center justify-between cursor-pointer hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<div className="size-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
<span className="text-xs text-neutral-300">Data Enrichment</span>
</div>
<span className="text-[10px] text-neutral-500">2m ago</span>
</div>
<div className="p-3 bg-transparent border border-transparent rounded-lg flex items-center justify-between cursor-pointer hover:bg-white/5 transition opacity-50">
<div className="flex items-center gap-3">
<div className="size-2 rounded-full bg-neutral-600"></div>
<span className="text-xs text-neutral-300">Lead Scoring</span>
</div>
<span className="text-[10px] text-neutral-500">Paused</span>
</div>
</div>

<div className="mt-8 pt-8 border-t border-white/5">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">Auto-Scaling</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
</label>
</div>
</div>
</div>

<div className="col-span-2 relative h-64 bg-neutral-900/50 rounded-lg border border-white/5 p-6 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center gap-8">
<div className="flex flex-col items-center gap-2">
<div className="size-10 bg-neutral-800 rounded-lg border border-white/10 flex items-center justify-center text-white z-10">
<span className="iconify" data-icon="lucide:webhook" data-width="20"></span>
</div>
<span className="text-[10px] font-mono text-neutral-500">Trigger</span>
</div>
<div className="h-[1px] w-12 bg-neutral-700 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-1/2 bg-indigo-500 animate-slide-right"></div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="size-12 bg-indigo-500/10 rounded-lg border border-indigo-500/50 flex items-center justify-center text-indigo-400 z-10 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="24"></span>
</div>
<span className="text-[10px] font-mono text-indigo-400">Process</span>
</div>
<div className="h-[1px] w-12 bg-neutral-700"></div>
<div className="flex flex-col items-center gap-2">
<div className="size-10 bg-neutral-800 rounded-lg border border-white/10 flex items-center justify-center text-white z-10">
<span className="iconify" data-icon="lucide:mail-check" data-width="20"></span>
</div>
<span className="text-[10px] font-mono text-neutral-500">Action</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-neutral-600 mb-8 uppercase tracking-widest">Powering next-gen teams at</p>
<div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tighter text-white">ACME<span className="font-light">CORP</span></span>
<span className="text-xl font-semibold tracking-tight text-white italic">Vertex</span>
<span className="text-xl font-bold tracking-widest text-white">NEXUS</span>
<span className="text-xl font-medium tracking-tight text-white flex items-center gap-1"><span className="block size-4 bg-white rounded-full"></span>Sphere</span>
<span className="text-xl font-bold tracking-tight text-white">KINETIC</span>
</div>
</div>
</section>

<section className="py-32 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Built for autonomy.</h2>
<p className="text-lg text-neutral-500 max-w-xl">Every component you need to build reliable, scalable, and secure AI agents.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 min-h-[400px] shine-border rounded-2xl bg-neutral-900/20 overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="p-8 relative z-10 h-full flex flex-col justify-between">
<div>
<div className="size-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center mb-6 text-white">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Real-time Execution</h3>
<p className="text-sm text-neutral-500 max-w-sm">Events are processed in milliseconds. Our edge network ensures your agents react instantly to data changes.</p>
</div>

<div className="mt-8 w-full h-32 relative">
<div className="absolute bottom-0 left-0 right-0 h-[1px] bg-neutral-800"></div>
<div className="flex items-end justify-between h-full gap-2 px-4 pb-[1px]">
<div className="w-full bg-indigo-500/20 h-[40%] rounded-t-sm border-t border-indigo-500/50"></div>
<div className="w-full bg-indigo-500/20 h-[60%] rounded-t-sm border-t border-indigo-500/50"></div>
<div className="w-full bg-indigo-500/20 h-[30%] rounded-t-sm border-t border-indigo-500/50"></div>
<div className="w-full bg-indigo-500/40 h-[80%] rounded-t-sm border-t border-indigo-500"></div>
<div className="w-full bg-indigo-500/20 h-[50%] rounded-t-sm border-t border-indigo-500/50"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 min-h-[400px] shine-border rounded-2xl bg-neutral-900/20 overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="p-8 relative z-10">
<div className="size-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center mb-6 text-white">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Enterprise Security</h3>
<p className="text-sm text-neutral-500 mb-8">SOC2 Type II certified. Your data is encrypted at rest and in transit.</p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-xs text-neutral-400 p-2 rounded bg-neutral-950/50 border border-white/5">
<span className="iconify text-green-500" data-icon="lucide:check-circle" data-width="14"></span>
                                End-to-end Encryption
                            </div>
<div className="flex items-center gap-3 text-xs text-neutral-400 p-2 rounded bg-neutral-950/50 border border-white/5">
<span className="iconify text-green-500" data-icon="lucide:check-circle" data-width="14"></span>
                                Role-based Access
                            </div>
<div className="flex items-center gap-3 text-xs text-neutral-400 p-2 rounded bg-neutral-950/50 border border-white/5">
<span className="iconify text-green-500" data-icon="lucide:check-circle" data-width="14"></span>
                                Audit Logs
                            </div>
</div>
</div>
</div>

<div className="md:col-span-1 shine-border rounded-2xl bg-neutral-900/20 overflow-hidden relative group h-64">
<div className="p-8 relative z-10">
<div className="size-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center mb-6 text-white">
<span className="iconify" data-icon="lucide:blocks" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Pre-built Integrations</h3>
<p className="text-sm text-neutral-500">Connect to Linear, Slack, Notion and 50+ other tools.</p>
</div>
</div>

<div className="md:col-span-2 shine-border rounded-2xl bg-neutral-900/20 overflow-hidden relative group h-64">
<div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-indigo-500/5 to-transparent"></div>
<div className="p-8 relative z-10 grid grid-cols-2">
<div>
<div className="size-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center mb-6 text-white">
<span className="iconify" data-icon="lucide:code-2" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Developer First</h3>
<p className="text-sm text-neutral-500">Full API access and SDKs for Python and TypeScript.</p>
</div>
<div className="relative font-mono text-[10px] text-neutral-400 bg-black/40 rounded-lg p-4 border border-white/5 shadow-inner">
<div className="flex gap-1 mb-2">
<div className="size-2 rounded-full bg-red-500/50"></div>
<div className="size-2 rounded-full bg-yellow-500/50"></div>
<div className="size-2 rounded-full bg-green-500/50"></div>
</div>
<p><span className="text-purple-400">const</span> agent = <span className="text-purple-400">new</span> Agent({</p>
<p className="pl-4">model: <span className="text-green-400">'gpt-4'</span>,</p>
<p className="pl-4">tools: [webSearch],</p>
<p className="pl-4">memory: <span className="text-blue-400">true</span></p>
<p>});</p>
<p className="mt-2 text-neutral-600">// Ready to deploy</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Simple pricing.</h2>
<p className="text-neutral-500">Start for free, scale as you grow.</p>
</div>

<div className="flex items-center gap-3 bg-neutral-900/50 p-1 rounded-full border border-white/10">
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-black bg-white shadow-sm transition-all">Monthly</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white transition-all">Yearly</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-neutral-900/10 border border-white/5 flex flex-col hover:bg-neutral-900/20 transition duration-300">
<div className="mb-8">
<h3 className="text-base font-medium text-white mb-2">Hobby</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">$0</span>
<span className="text-neutral-500">/mo</span>
</div>
<p className="text-xs text-neutral-500 mt-4">Perfect for side projects and learning.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500" data-icon="lucide:check" data-width="16"></span>
                            3 Active Agents
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500" data-icon="lucide:check" data-width="16"></span>
                            1,000 runs/month
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500" data-icon="lucide:check" data-width="16"></span>
                            Community Support
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-neutral-800 text-white text-sm font-medium hover:bg-neutral-700 border border-white/5 transition">
                        Get Started
                    </button>
</div>

<div className="relative p-8 rounded-2xl bg-neutral-900/40 border border-indigo-500/30 flex flex-col shadow-[0_0_40px_rgba(79,70,229,0.1)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-500 rounded-full text-[10px] font-bold text-white tracking-wide uppercase">Most Popular</div>
<div className="mb-8">
<h3 className="text-base font-medium text-indigo-400 mb-2">Pro</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">$29</span>
<span className="text-neutral-500">/mo</span>
</div>
<p className="text-xs text-neutral-500 mt-4">For power users and small teams.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="16"></span>
                            Unlimited Agents
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="16"></span>
                            50,000 runs/month
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="16"></span>
                            Priority Support
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="16"></span>
                            API Access
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition shadow-lg shadow-indigo-500/20">
                        Start Free Trial
                    </button>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/10 border border-white/5 flex flex-col hover:bg-neutral-900/20 transition duration-300">
<div className="mb-8">
<h3 className="text-base font-medium text-white mb-2">Enterprise</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">Custom</span>
</div>
<p className="text-xs text-neutral-500 mt-4">For organizations with custom needs.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500" data-icon="lucide:check" data-width="16"></span>
                            Unlimited runs
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500" data-icon="lucide:check" data-width="16"></span>
                            Dedicated Infrastructure
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500" data-icon="lucide:check" data-width="16"></span>
                            SSO &amp; Audit Logs
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-neutral-800 text-white text-sm font-medium hover:bg-neutral-700 border border-white/5 transition">
                        Contact Sales
                    </button>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8">Ready to automate the future?</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-all">
                    Start building now
                </button>
<button className="h-12 px-8 rounded-full bg-transparent border border-neutral-800 text-white text-sm font-medium hover:bg-neutral-800 transition-all">
                    Read documentation
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="size-5 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:bot" data-width="12"></span>
</div>
<span className="text-sm font-medium text-white tracking-tight">AUTOMATA</span>
</div>
<p className="text-xs text-neutral-500 max-w-xs">
                    Empowering the next generation of automation with intelligent agents.
                </p>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">Product</h4>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Agents</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Workflows</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Integrations</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Changelog</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">Resources</h4>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Documentation</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">API Reference</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Community</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Blog</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">Company</h4>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">About</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Careers</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Legal</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[10px] text-neutral-600">© 2024 Automata Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-600 hover:text-white transition" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-neutral-600 hover:text-white transition" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
<a className="text-neutral-600 hover:text-white transition" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
</div>
</div>
</footer>

    </>
  );
}
