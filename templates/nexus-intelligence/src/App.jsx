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



        // Simple script to add slight tilt effect to the hero card on mouse move
        const card = document.querySelector('.animate-float');
        document.addEventListener('mousemove', (e) => {
            if(window.innerWidth > 768) {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
                // Only apply if card exists
                if(card) {
                    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
                }
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
      

<div className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{animationDelay: '2s'}}></div>
<div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{animationDelay: '4s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="text-gray-100 font-medium tracking-tighter text-lg group-hover:opacity-80 transition-opacity font-geist">NEXUS</span>
<span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 font-medium font-geist">BETA</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-gray-400 hover:text-white transition-colors font-geist" href="#features">Features</a>
<a className="text-gray-400 hover:text-white transition-colors font-geist" href="#integration">Integration</a>
<a className="text-gray-400 hover:text-white transition-colors font-geist" href="#pricing">Pricing</a>
<a className="text-gray-400 hover:text-white transition-colors font-geist" href="#changelog">Changelog</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-gray-400 hover:text-white transition-colors font-geist" href="#">Log in</a>
<a className="group relative px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all flex items-center gap-2" href="#">
<span className="font-geist">Get Access</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>
<main className="relative pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 mb-32 relative">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto z-10 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-xs font-medium mb-8 hover:bg-blue-500/20 transition-colors cursor-pointer font-geist">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Introducing Nexus AI v2.0
                    <iconify-icon className="opacity-60" icon="lucide:chevron-right" width="12"></iconify-icon>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-8 text-glow font-geist font-semibold">
                    Intelligence, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-600 font-geist font-semibold">reimagined.</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-geist">
                    Orchestrate complex AI workflows with a single line of code. Build, deploy, and scale intelligent agents instantly.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group font-geist">
                        Start Building
                        
                    </button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-gray-800 hover:border-gray-700 hover:bg-gray-900 transition-all text-gray-300 font-medium flex items-center justify-center gap-2 font-geist">
<iconify-icon icon="lucide:file-text" width="18"></iconify-icon>
                        Documentation
                    </button>
</div>
</div>

<div className="mt-20 relative animate-float" style={{transform: 'rotateY(-14.12deg) rotateX(13.46deg)'}}>
<div className="absolute -inset-1 bg-gradient-to-b from-blue-500/20 to-transparent rounded-xl blur-xl opacity-50"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-gray-800"></div>
<div className="w-3 h-3 rounded-full bg-gray-800"></div>
<div className="w-3 h-3 rounded-full bg-gray-800"></div>
</div>
<div className="mx-auto px-3 py-1 rounded bg-black border border-white/5 text-[10px] text-gray-500 font-mono font-geist">
                            nexus.config.ts
                        </div>
</div>
<div className="grid md:grid-cols-[280px_1fr] h-[400px] md:h-[500px]">

<div className="border-r border-white/5 p-4 hidden md:flex flex-col gap-1">
<div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider px-2 font-geist">Project</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded bg-white/5 text-gray-200 text-sm font-geist">
<iconify-icon icon="lucide:box" width="14"></iconify-icon> Overview
                            </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 text-gray-400 hover:text-gray-200 text-sm transition-colors cursor-pointer font-geist">
<iconify-icon icon="lucide:cpu" width="14"></iconify-icon> Agents
                            </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 text-gray-400 hover:text-gray-200 text-sm transition-colors cursor-pointer font-geist">
<iconify-icon icon="lucide:database" width="14"></iconify-icon> Knowledge Base
                            </div>
<div className="mt-auto">
<div className="p-3 rounded border border-white/5 bg-white/[0.02] space-y-2">
<div className="flex items-center justify-between text-xs text-gray-400">
<span className="font-geist">Usage</span>
<span className="text-white font-geist">84%</span>
</div>
<div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[84%]"></div>
</div>
</div>
</div>
</div>

<div className="p-6 md:p-8 font-mono text-sm overflow-hidden relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="space-y-1 text-gray-400">
<div className="flex gap-4">
<span className="text-gray-700 select-none font-geist">01</span>
<span className="font-geist"><span className="text-purple-400 font-geist">import</span> { Agent, Task } <span className="text-purple-400 font-geist">from</span> <span className="text-pink-400 font-geist">'@nexus/core'</span>;</span>
</div>
<div className="flex gap-4">
<span className="text-gray-700 select-none font-geist">02</span>
<span></span>
</div>
<div className="flex gap-4">
<span className="text-gray-700 select-none font-geist">03</span>
<span className="font-geist"><span className="text-purple-400 font-geist">const</span> researcher = <span className="text-purple-400 font-geist">new</span> Agent({</span>
</div>
<div className="flex gap-4">
<span className="text-gray-700 select-none font-geist">04</span>
<span className="pl-4 font-geist">role: <span className="text-pink-400 font-geist">'Research Analyst'</span>,</span>
</div>
<div className="flex gap-4">
<span className="text-gray-700 select-none font-geist">05</span>
<span className="pl-4 font-geist">model: <span className="text-pink-400 font-geist">'gpt-4-turbo'</span>,</span>
</div>
<div className="flex gap-4">
<span className="text-gray-700 select-none font-geist">06</span>
<span className="pl-4 font-geist">tools: [<span className="text-blue-400 font-geist">WebBrowser</span>, <span className="text-blue-400 font-geist">VectorDB</span>]</span>
</div>
<div className="flex gap-4">
<span className="text-gray-700 select-none font-geist">07</span>
<span className="font-geist">});</span>
</div>
<div className="flex gap-4">
<span className="text-gray-700 select-none font-geist">08</span>
<span></span>
</div>
<div className="flex gap-4">
<span className="text-gray-700 select-none font-geist">09</span>
<span><span className="text-gray-500 font-geist">// Initialize autonomous workflow</span></span>
</div>
<div className="flex gap-4">
<span className="text-gray-700 select-none font-geist">10</span>
<span className="font-geist"><span className="text-purple-400 font-geist">await</span> researcher.execute(<span className="text-pink-400 font-geist">'Analyze Q3 market trends'</span>);</span>
</div>
<div className="flex gap-4 mt-4 animate-pulse">
<span className="text-gray-700 select-none font-geist">11</span>
<span className="flex items-center gap-2 text-blue-400 font-geist">
<iconify-icon icon="lucide:terminal" width="14"></iconify-icon> 
                                        Processing query...
                                    </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 pt-10 border-t border-white/5">
<p className="text-center text-sm text-gray-500 mb-8 font-geist">Powering next-generation startups</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2"><iconify-icon icon="lucide:hexagon" width="20"></iconify-icon> <span className="font-semibold tracking-tight text-white font-geist">ACME</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="lucide:triangle" width="20"></iconify-icon> <span className="font-semibold tracking-tight text-white font-geist">VORTEX</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="lucide:circle" width="20"></iconify-icon> <span className="font-semibold tracking-tight text-white font-geist">SPHERE</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="lucide:square" width="20"></iconify-icon> <span className="font-semibold tracking-tight text-white font-geist">BLOCKS</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="lucide:star" width="20"></iconify-icon> <span className="font-semibold tracking-tight text-white font-geist">NORTH</span></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="features">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl tracking-tight text-white mb-6 font-geist font-semibold">Built for speed. <br/><span className="text-gray-500 font-geist font-semibold">Designed for scale.</span></h2>
<p className="text-gray-400 max-w-xl text-lg font-geist">Everything you need to integrate LLMs into your production environment without the headache.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 group relative rounded-2xl border border-white/10 bg-gray-900/20 overflow-hidden hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8 h-full flex flex-col relative z-10">
<div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center mb-4 border border-white/5">
<iconify-icon className="text-white" icon="lucide:zap" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight font-geist">Real-time Inference</h3>
<p className="text-gray-400 mb-8 font-geist">Low-latency streaming responses directly to your edge function.</p>
<div className="mt-auto w-full h-32 relative">

<div className="absolute bottom-0 left-0 right-0 h-24 flex items-end gap-1 px-1">
<div className="w-full bg-blue-500/20 h-[40%] rounded-t-sm group-hover:h-[60%] transition-all duration-500"></div>
<div className="w-full bg-blue-500/30 h-[70%] rounded-t-sm group-hover:h-[50%] transition-all duration-500 delay-75"></div>
<div className="w-full bg-blue-500/40 h-[50%] rounded-t-sm group-hover:h-[80%] transition-all duration-500 delay-100"></div>
<div className="w-full bg-blue-500/50 h-[80%] rounded-t-sm group-hover:h-[90%] transition-all duration-500 delay-150"></div>
<div className="w-full bg-blue-500/60 h-[60%] rounded-t-sm group-hover:h-[75%] transition-all duration-500 delay-200"></div>
<div className="w-full bg-blue-500 h-[90%] rounded-t-sm shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-gray-900/20 overflow-hidden hover:border-white/20 transition-colors">
<div className="p-8 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center mb-4 border border-white/5">
<iconify-icon className="text-white" icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight font-geist">Enterprise Security</h3>
<p className="text-gray-400 text-sm font-geist">SOC2 Type II certified. Data encryption at rest and in transit.</p>
<div className="mt-auto flex justify-center">
<iconify-icon className="text-gray-800 group-hover:text-gray-700 transition-colors" icon="lucide:lock" width="64"></iconify-icon>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-gray-900/20 overflow-hidden hover:border-white/20 transition-colors">
<div className="p-8 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center mb-4 border border-white/5">
<iconify-icon className="text-white" icon="lucide:git-branch" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight font-geist">Version Control</h3>
<p className="text-gray-400 text-sm font-geist">Track changes to prompts and models like code.</p>
<div className="mt-auto relative h-20 w-full overflow-hidden">
<div className="absolute top-4 left-0 w-full h-[1px] bg-gray-800"></div>
<div className="absolute top-4 left-[20%] w-2 h-2 bg-gray-600 rounded-full"></div>
<div className="absolute top-4 left-[50%] w-2 h-2 bg-gray-600 rounded-full"></div>
<div className="absolute top-4 left-[80%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
</div>
</div>
</div>

<div className="md:col-span-2 group relative rounded-2xl border border-white/10 bg-gray-900/20 overflow-hidden hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-tl from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8 h-full flex flex-col relative z-10">
<div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center mb-4 border border-white/5">
<iconify-icon className="text-white" icon="lucide:globe" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight font-geist">Global Edge Network</h3>
<p className="text-gray-400 font-geist">Deploy agents to 35+ regions worldwide for minimal latency.</p>
<div className="mt-auto w-full flex items-center justify-between text-xs font-mono text-gray-600 pt-8">
<div className="flex items-center gap-2 font-geist"><span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span> iad1</div>
<div className="flex items-center gap-2 font-geist"><span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span> fra1</div>
<div className="flex items-center gap-2 font-geist"><span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span> sin1</div>
<div className="flex items-center gap-2 font-geist"><span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span> hkg1</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-gray-900/10">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-3xl md:text-4xl text-white mb-1 tracking-tight font-geist font-semibold">100k+</div>
<div className="text-sm text-gray-500 font-geist">API Requests/sec</div>
</div>
<div>
<div className="text-3xl md:text-4xl text-white mb-1 tracking-tight font-geist font-semibold">99.9%</div>
<div className="text-sm text-gray-500 font-geist">Uptime SLA</div>
</div>
<div>
<div className="text-3xl md:text-4xl text-white mb-1 tracking-tight font-geist font-semibold">500+</div>
<div className="text-sm text-gray-500 font-geist">Integrations</div>
</div>
<div>
<div className="text-3xl md:text-4xl text-white mb-1 tracking-tight font-geist font-semibold">24/7</div>
<div className="text-sm text-gray-500 font-geist">Expert Support</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-32 text-center relative">
<div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent blur-3xl -z-10"></div>
<h2 className="text-4xl md:text-5xl tracking-tight text-white mb-6 font-geist font-semibold">Ready to ship?</h2>
<p className="text-gray-400 text-lg mb-10 font-geist">Join thousands of developers building the future of AI.  Start your free trial today.</p>
<form className="max-w-md mx-auto relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
<div className="relative flex items-center bg-black rounded-lg p-1 border border-white/10">
<input className="flex-1 bg-transparent border-none text-white text-sm px-4 py-2 focus:ring-0 placeholder:text-gray-600 outline-none" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors font-geist" type="button">
                        Get Started
                    </button>
</div>
</form>
<p className="mt-4 text-xs text-gray-600 font-geist">No credit card required. 14-day free trial.</p>
</section>
</main>

<footer className="border-t border-white/5 bg-[#020202] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-white font-medium tracking-tighter text-lg block mb-4 font-geist" href="#">NEXUS</a>
<p className="text-sm text-gray-500 max-w-xs mb-6 font-geist">
                        The infrastructure layer for autonomous agents. Designed for developers, built for scale.
                    </p>
<div className="flex gap-4">
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="18"></iconify-icon></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:discord" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4 font-geist">Product</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors font-geist" href="#">Agents</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Vector DB</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Observability</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4 font-geist">Resources</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors font-geist" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4 font-geist">Company</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors font-geist" href="#">About</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Legal</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 gap-4">
<div className="text-xs text-gray-600 font-geist">
                    © 2024 Nexus AI Inc. All rights reserved.
                </div>
<div className="flex gap-6 text-xs text-gray-600">
<a className="hover:text-gray-400 font-geist" href="#">Privacy Policy</a>
<a className="hover:text-gray-400 font-geist" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </>
  );
}
