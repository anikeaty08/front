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
slate: {
850: '#151e2e',
950: '#020617', // Custom dark bg
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:infinity-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-white group-hover:opacity-80 transition-opacity">NEXUS</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-normal hover:text-white transition-colors" href="#">Login</a>
<a className="text-sm font-medium bg-white text-slate-950 px-4 py-2 rounded-full hover:bg-indigo-50 transition-colors" href="#">
                    Book Demo
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 glow-effect rounded-full blur-3xl pointer-events-none opacity-50"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Accepting New Enterprise Clients
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Automate the boring.<br/>
<span className="gradient-text">Scale the human.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                We build custom AI infrastructures that reclaim 40+ hours per week for your team. Stop drowning in data entry and start focusing on strategy.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-950 rounded-full font-medium hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
                    Start Automating
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 glass-panel rounded-full font-medium text-white hover:bg-white/5 transition-all">
                    View Case Studies
                </button>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto px-6 perspective-[2000px]">
<div className="relative rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-sm shadow-2xl overflow-hidden transform rotate-x-12 scale-95 opacity-90">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="ml-4 h-5 w-64 rounded bg-white/5 text-[10px] flex items-center px-2 text-slate-500 font-mono">nexus-ai-engine / workflows / main.ts</div>
</div>

<div className="grid grid-cols-12 h-96">

<div className="col-span-2 border-r border-white/5 p-4 hidden md:block">
<div className="space-y-4">
<div className="h-2 w-20 bg-white/10 rounded"></div>
<div className="h-2 w-16 bg-white/5 rounded"></div>
<div className="h-2 w-24 bg-white/5 rounded"></div>
<div className="h-2 w-12 bg-white/5 rounded"></div>
</div>
</div>

<div className="col-span-12 md:col-span-10 p-6 md:p-10 font-mono text-xs md:text-sm text-indigo-300">
<div className="flex items-start gap-3 mb-4">
<span className="text-slate-600">01</span>
<span><span className="text-purple-400">import</span> { Agent } <span className="text-purple-400">from</span> '@nexus/core';</span>
</div>
<div className="flex items-start gap-3 mb-4">
<span className="text-slate-600">02</span>
<span></span>
</div>
<div className="flex items-start gap-3 mb-4">
<span className="text-slate-600">03</span>
<span><span className="text-purple-400">const</span> workflow = <span className="text-purple-400">new</span> Agent({</span>
</div>
<div className="flex items-start gap-3 mb-4">
<span className="text-slate-600">04</span>
<span className="pl-4">model: <span className="text-green-400">'gpt-4-turbo'</span>,</span>
</div>
<div className="flex items-start gap-3 mb-4">
<span className="text-slate-600">05</span>
<span className="pl-4">capabilities: [<span className="text-green-400">'lead-scoring'</span>, <span className="text-green-400">'crm-sync'</span>],</span>
</div>
<div className="flex items-start gap-3 mb-4">
<span className="text-slate-600">06</span>
<span className="pl-4">trigger: <span className="text-blue-400">Events.INBOUND_EMAIL</span></span>
</div>
<div className="flex items-start gap-3 mb-4">
<span className="text-slate-600">07</span>
<span>});</span>
</div>
<div className="flex items-start gap-3">
<span className="text-slate-600">08</span>
<span className="text-slate-500">// Deploying agent infrastructure...</span>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 border-y border-white/5 bg-slate-950/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-500 mb-8">TRUSTED BY INNOVATIVE TEAMS</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale">

<div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
<div className="w-6 h-6 bg-white rounded-full"></div> ACME
                </div>
<div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
<div className="w-6 h-6 border-2 border-white rounded"></div> STRATOS
                </div>
<div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
<div className="w-6 h-6 bg-white rotate-45"></div> KINETIC
                </div>
<div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
<div className="w-6 h-6 border-2 border-white rounded-full"></div> ORBIT
                </div>
</div>
</div>
</section>

<section className="py-24 relative" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Built for scale,<br/>powered by intelligence.</h2>
<p className="text-lg text-slate-400 max-w-xl font-light">We identify bottlenecks in your workflow and deploy autonomous agents to solve them permanently.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Customer Support AI</h3>
<p className="text-slate-400 text-sm leading-relaxed">24/7 intelligent responses trained on your knowledge base. Resolve 80% of tickets instantly without human intervention.</p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Lead Qualification</h3>
<p className="text-slate-400 text-sm leading-relaxed">AI agents that engage, score, and book meetings with qualified leads. Your sales team only talks to people ready to buy.</p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:document-text-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Document Processing</h3>
<p className="text-slate-400 text-sm leading-relaxed">Extract structured data from invoices, contracts, and forms automatically. Sync directly to your CRM or ERP.</p>
</div>

<div className="md:col-span-2 glass-panel p-8 rounded-2xl relative overflow-hidden group">
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
<iconify-icon icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Predictive Analytics</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-md">Forecast trends and inventory needs with 95% accuracy using our custom ML models tailored to your historical data.</p>
</div>

<div className="absolute right-0 bottom-0 w-64 h-48 opacity-20 transform translate-x-10 translate-y-10">
<svg className="stroke-blue-400 fill-none" strokeWidth="2" viewbox="0 0 200 100">
<path d="M0 80 Q 50 80, 80 40 T 160 30 T 200 10"></path>
<path d="M0 90 Q 50 90, 80 50 T 160 40 T 200 20" opacity="0.5"></path>
</svg>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col justify-between group hover:bg-white/[0.04] transition-colors">
<div>
<div className="w-12 h-12 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400 mb-6">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Enterprise Security</h3>
</div>
<div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
<iconify-icon className="text-rose-400" icon="solar:check-circle-linear"></iconify-icon> SOC2 Compliant
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30 border-y border-white/5" id="process">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2">
<div className="inline-block px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium mb-6">
                    Our Methodology
                </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">From Audit to<br/>Autopilot in 14 days.</h2>
<div className="space-y-8 mt-10">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-indigo-500/50 bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-sm font-medium">1</div>
<div className="w-px h-full bg-indigo-500/20 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-lg font-medium text-white mb-2">Workflow Audit</h4>
<p className="text-slate-400 text-sm leading-relaxed">We map your current processes and identify high-friction points suitable for AI intervention.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-400 text-sm font-medium">2</div>
<div className="w-px h-full bg-slate-800 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-lg font-medium text-white mb-2">Custom Development</h4>
<p className="text-slate-400 text-sm leading-relaxed">Our engineers build bespoke agents using LangChain and dedicated vector databases tailored to your needs.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-400 text-sm font-medium">3</div>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-2">Integration &amp; Handoff</h4>
<p className="text-slate-400 text-sm leading-relaxed">Seamless deployment into your Slack, CRM, or web apps, followed by team training.</p>
</div>
</div>
</div>
</div>
<div className="md:w-1/2 w-full">

<div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
<div className="flex items-center justify-between mb-8">
<h3 className="text-sm font-medium text-slate-300">Agent Configuration</h3>
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-slate-800"></div>
<div className="w-3 h-3 rounded-full bg-slate-800"></div>
</div>
</div>

<div className="space-y-6">
<div>
<div className="flex justify-between text-xs text-slate-400 mb-2">
<span>Creativity Level</span>
<span className="text-indigo-400">0.7</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[70%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-slate-400 mb-2">
<span>Response Speed</span>
<span className="text-indigo-400">Instant</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[95%] rounded-full"></div>
</div>
</div>
<div className="pt-4 border-t border-slate-800">
<div className="flex items-center justify-between mb-4">
<span className="text-sm text-slate-300">Active Channels</span>
</div>
<div className="flex gap-3">
<label className="cursor-pointer relative group">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-900 text-slate-500 text-xs font-medium peer-checked:border-indigo-500 peer-checked:text-indigo-400 peer-checked:bg-indigo-500/10 transition-all flex items-center gap-2">
<iconify-icon icon="solar:letter-linear"></iconify-icon> Email
                                    </div>
</label>
<label className="cursor-pointer relative group">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-900 text-slate-500 text-xs font-medium peer-checked:border-indigo-500 peer-checked:text-indigo-400 peer-checked:bg-indigo-500/10 transition-all flex items-center gap-2">
<iconify-icon icon="solar:chat-line-linear"></iconify-icon> Slack
                                    </div>
</label>
<label className="cursor-pointer relative group">
<input className="peer sr-only" type="checkbox"/>
<div className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-900 text-slate-500 text-xs font-medium peer-checked:border-indigo-500 peer-checked:text-indigo-400 peer-checked:bg-indigo-500/10 transition-all flex items-center gap-2">
<iconify-icon icon="solar:phone-linear"></iconify-icon> Voice
                                    </div>
</label>
</div>
</div>
</div>
<button className="w-full mt-8 bg-white text-slate-950 py-3 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                        Deploy Configuration
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pricing">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to replace busy work?</h2>
<p className="text-slate-400 mb-10 font-light">Join the forward-thinking companies saving thousands of hours monthly.</p>
<div className="bg-slate-900/80 border border-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="text-left">
<h3 className="text-2xl font-medium text-white mb-2">Audit &amp; Strategy</h3>
<p className="text-slate-400 text-sm mb-6">Perfect for understanding your automation potential.</p>
<ul className="space-y-3 text-sm text-slate-300 mb-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                                Complete Workflow Analysis
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                                ROI Calculation Report
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                                Implementation Roadmap
                            </li>
</ul>
<div className="text-3xl font-medium text-white">$499 <span className="text-sm font-normal text-slate-500">/ one-time</span></div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full"></div>
<button className="relative z-10 w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2">
                            Book Strategy Call
                            <iconify-icon icon="solar:calendar-linear"></iconify-icon>
</button>
<p className="relative z-10 mt-4 text-xs text-slate-500">100% money-back guarantee if we can't find automation opportunities.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-white" icon="solar:infinity-linear" width="20"></iconify-icon>
<span className="text-lg font-medium tracking-tight text-white">NEXUS</span>
</div>
<p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                        Empowering businesses through intelligent automation. We build the future of work, today.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Platform</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Solutions</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Integration</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Docs</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-slate-600">
<p>© 2023 Nexus Automation Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
