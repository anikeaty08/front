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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
slate: {
850: '#151b2e',
900: '#0f172a',
950: '#020617', // Deepest background
},
primary: {
500: '#6366f1', // Indigo
600: '#4f46e5',
}
},
backgroundImage: {
'glow-gradient': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen opacity-40"></div>
<div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] mix-blend-screen opacity-30"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
                    N
                </div>
<span className="text-lg font-medium tracking-tight text-white group-hover:text-indigo-100 transition-colors">NEXUS</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-light hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm font-light hover:text-white transition-colors" href="#developers">Developers</a>
<a className="text-sm font-light hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-light hover:text-white transition-colors" href="#blog">Changelog</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-light hover:text-white transition-colors" href="#">Sign In</a>
<button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs px-4 py-2 rounded-full font-medium transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                    Start Building
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>
</nav>
<main className="relative pt-32 pb-20">

<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="font-medium tracking-wide">V2.0 is now live on mainnet</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-6 max-w-4xl mx-auto leading-[1.1]">
                Scale your dApp <br/> with infinite liquidity.
            </h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                The integrated infrastructure for Web3 developers. Spin up validator nodes, index blockchain data, and manage keys with a single API.
            </p>
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                    Start Deploying
                    <span className="iconify" data-icon="lucide:zap" data-strokeWidth="2" data-width="16"></span>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-black/50 text-white border border-white/10 rounded-full font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                    Read Documentation
                    <span className="iconify" data-icon="lucide:book-open" data-strokeWidth="1.5" data-width="16"></span>
</button>
</div>

<div className="mt-20 w-full max-w-5xl relative group">

<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0B0C15] overflow-hidden shadow-2xl">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/5">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="ml-4 px-3 py-1 rounded bg-black/40 border border-white/5 text-[10px] text-slate-500 font-mono w-64 flex items-center justify-between">
<span>nexus.dev/dashboard</span>
<span className="iconify" data-icon="lucide:lock" data-width="10"></span>
</div>
</div>

<div className="flex h-[400px] md:h-[500px]">

<div className="w-16 md:w-64 border-r border-white/5 p-4 flex flex-col gap-6 bg-slate-950/50">
<div className="space-y-1">
<div className="h-8 w-full bg-indigo-500/10 rounded border border-indigo-500/20 flex items-center px-3 gap-3">
<span className="iconify text-indigo-400" data-icon="lucide:layout-dashboard" data-width="16"></span>
<span className="hidden md:block text-xs text-indigo-100 font-medium">Overview</span>
</div>
<div className="h-8 w-full hover:bg-white/5 rounded flex items-center px-3 gap-3 transition-colors cursor-pointer group/item">
<span className="iconify text-slate-500 group-hover/item:text-slate-300" data-icon="lucide:database" data-width="16"></span>
<span className="hidden md:block text-xs text-slate-500 group-hover/item:text-slate-300">Nodes</span>
</div>
<div className="h-8 w-full hover:bg-white/5 rounded flex items-center px-3 gap-3 transition-colors cursor-pointer group/item">
<span className="iconify text-slate-500 group-hover/item:text-slate-300" data-icon="lucide:key" data-width="16"></span>
<span className="hidden md:block text-xs text-slate-500 group-hover/item:text-slate-300">Keys</span>
</div>
<div className="h-8 w-full hover:bg-white/5 rounded flex items-center px-3 gap-3 transition-colors cursor-pointer group/item">
<span className="iconify text-slate-500 group-hover/item:text-slate-300" data-icon="lucide:settings" data-width="16"></span>
<span className="hidden md:block text-xs text-slate-500 group-hover/item:text-slate-300">Settings</span>
</div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 overflow-hidden relative">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
<div className="p-4 rounded-lg bg-white/5 border border-white/5">
<div className="text-xs text-slate-500 mb-1">Total Requests</div>
<div className="text-xl text-white font-mono">2,340,912</div>
<div className="text-[10px] text-emerald-400 mt-2 flex items-center gap-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="10"></span>
                                        +12.5%
                                    </div>
</div>
<div className="p-4 rounded-lg bg-white/5 border border-white/5">
<div className="text-xs text-slate-500 mb-1">Avg Latency</div>
<div className="text-xl text-white font-mono">14ms</div>
<div className="text-[10px] text-emerald-400 mt-2 flex items-center gap-1">
<span className="iconify" data-icon="lucide:activity" data-width="10"></span>
                                        -2ms
                                    </div>
</div>
<div className="p-4 rounded-lg bg-white/5 border border-white/5">
<div className="text-xs text-slate-500 mb-1">Active Nodes</div>
<div className="text-xl text-white font-mono">8/10</div>
<div className="mt-2 w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[80%]"></div>
</div>
</div>
</div>

<div className="w-full h-64 rounded-lg bg-white/[0.02] border border-white/5 p-4 relative overflow-hidden">
<div className="flex justify-between items-center mb-4">
<div className="text-xs text-slate-400">Throughput (RPS)</div>
<div className="flex gap-2">
<div className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white">1H</div>
<div className="px-2 py-0.5 rounded hover:bg-white/5 text-[10px] text-slate-500 cursor-pointer">24H</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-40 flex items-end justify-between px-4 gap-1 opacity-60">
<div className="w-full bg-gradient-to-t from-indigo-500/50 to-transparent h-[40%] rounded-t-sm"></div>
<div className="w-full bg-gradient-to-t from-indigo-500/50 to-transparent h-[60%] rounded-t-sm"></div>
<div className="w-full bg-gradient-to-t from-indigo-500/50 to-transparent h-[45%] rounded-t-sm"></div>
<div className="w-full bg-gradient-to-t from-indigo-500/50 to-transparent h-[70%] rounded-t-sm"></div>
<div className="w-full bg-gradient-to-t from-indigo-500/50 to-transparent h-[50%] rounded-t-sm"></div>
<div className="w-full bg-gradient-to-t from-indigo-500/50 to-transparent h-[85%] rounded-t-sm"></div>
<div className="w-full bg-gradient-to-t from-indigo-500/50 to-transparent h-[65%] rounded-t-sm"></div>
<div className="w-full bg-gradient-to-t from-indigo-500/50 to-transparent h-[90%] rounded-t-sm"></div>
<div className="w-full bg-gradient-to-t from-indigo-500/50 to-transparent h-[55%] rounded-t-sm"></div>
<div className="w-full bg-gradient-to-t from-indigo-500/50 to-transparent h-[40%] rounded-t-sm"></div>
<div className="w-full bg-gradient-to-t from-indigo-500/50 to-transparent h-[75%] rounded-t-sm"></div>
<div className="w-full bg-gradient-to-t from-indigo-500/50 to-transparent h-[95%] rounded-t-sm animate-pulse"></div>
</div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 pt-10 border-t border-white/5 w-full">
<p className="text-sm text-slate-500 font-medium mb-8">POWERING NEXT-GEN PROTOCOLS</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tight text-white flex items-center gap-2"><span className="w-5 h-5 bg-white rounded-full"></span> ACME</span>
<span className="text-xl font-semibold tracking-tighter text-white">QUANTA</span>
<span className="text-xl font-bold tracking-widest text-white italic">velocity</span>
<span className="text-xl font-semibold tracking-tight text-white flex items-center gap-1"><span className="block w-2 h-6 bg-white rotate-12"></span> STRATOS</span>
<span className="text-xl font-medium tracking-tight text-white border-2 border-white px-2">BLOCKS</span>
</div>
</div>
</div>
</main>

<section className="py-24 relative overflow-hidden" id="features">
<div className="absolute inset-0 bg-grid-slate-900/5 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Infrastructure without <br/> the headache.</h2>
<p className="text-lg text-slate-400 max-w-xl font-light">Built for high-throughput applications requiring zero-latency consensus and instant finality.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-500/20 transition-all duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
<span className="iconify" data-icon="lucide:globe-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl text-white font-medium mb-2">Global Edge Network</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed max-w-sm">
                            Deploy your nodes across 35+ regions worldwide. Smart routing ensures your users always connect to the lowest latency endpoint available.
                        </p>
</div>

<div className="absolute bottom-0 right-0 w-1/2 h-full opacity-30 mask-image-linear-to-l pointer-events-none">
<svg className="w-full h-full text-indigo-500 fill-current" viewbox="0 0 200 100">

<circle cx="20" cy="40" r="1.5"></circle> <circle cx="40" cy="30" r="1.5"></circle>
<circle cx="60" cy="50" r="1.5"></circle> <circle cx="90" cy="20" r="1.5"></circle>
<circle cx="110" cy="40" r="1.5"></circle> <circle cx="140" cy="60" r="1.5"></circle>
<circle cx="160" cy="30" r="1.5"></circle> <circle cx="180" cy="50" r="1.5"></circle>

<path className="animate-pulse" d="M20 40 L60 50 L110 40 L160 30" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</svg>
</div>
</div>

<div className="glass-card rounded-2xl p-8 relative group hover:border-purple-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
<span className="iconify" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl text-white font-medium mb-2">Institutional Security</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        SOC2 Type II certified. MPC wallet architecture ensures your private keys never touch the network.
                    </p>
</div>

<div className="glass-card rounded-2xl p-8 relative group hover:border-pink-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 border border-pink-500/20">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl text-white font-medium mb-2">Sub-ms Latency</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        Optimized RPC endpoints providing the fastest read/write speeds on EVM chains.
                    </p>
</div>

<div className="md:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-emerald-500/30 transition-colors flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
<span className="iconify" data-icon="lucide:code-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl text-white font-medium mb-2">Developer First API</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                            Integrate in minutes with our type-safe SDK. Supports TypeScript, Go, and Python out of the box.
                        </p>
<a className="text-sm text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group/link" href="#">
                            View Documentation 
                            <span className="iconify group-hover/link:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
</div>
<div className="flex-1 w-full max-w-md">
<div className="rounded-lg bg-[#0f111a] border border-white/10 p-4 font-mono text-xs overflow-x-auto shadow-inner">
<div className="flex gap-1.5 mb-3">
<div className="w-2 h-2 rounded-full bg-slate-600"></div>
<div className="w-2 h-2 rounded-full bg-slate-600"></div>
</div>
<div className="text-slate-300">
<span className="text-purple-400">import</span> { Nexus } <span className="text-purple-400">from</span> <span className="text-green-400">'@nexus/sdk'</span>;<br/><br/>
<span className="text-purple-400">const</span> client = <span className="text-blue-400">new</span> Nexus({<br/>
                                  apiKey: <span className="text-green-400">'nx_live_...'</span><br/>
                                });<br/><br/>
<span className="text-slate-500">// Deploy a node</span><br/>
<span className="text-purple-400">await</span> client.nodes.<span className="text-blue-400">create</span>({<br/>
                                  chain: <span className="text-green-400">'eth'</span>,<br/>
                                  network: <span className="text-green-400">'mainnet'</span><br/>
                                });
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-slate-950" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Simple, predictable pricing.</h2>
<p className="text-lg text-slate-400 font-light">Start for free, scale as you grow.</p>

<div className="flex items-center justify-center gap-4 mt-8">
<span className="text-sm text-white font-medium">Monthly</span>
<button className="w-12 h-6 rounded-full bg-white/10 border border-white/10 relative px-1 transition-colors hover:bg-white/15">
<div className="w-4 h-4 bg-indigo-500 rounded-full shadow-lg absolute top-0.5 left-0.5 transition-transform"></div>
</button>
<span className="text-sm text-slate-500">Yearly <span className="text-indigo-400 text-xs ml-1">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Hobby</h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white">$0</span>
<span className="text-sm text-slate-500">/mo</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-500" data-icon="lucide:check" data-width="16"></span>
                            100k requests / mo
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-500" data-icon="lucide:check" data-width="16"></span>
                            Community Support
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-500" data-icon="lucide:check" data-width="16"></span>
                            1 Project
                        </li>
</ul>
<button className="w-full py-2 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">Start for free</button>
</div>

<div className="p-8 rounded-2xl border border-indigo-500/30 bg-indigo-500/[0.03] flex flex-col relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                        Most Popular
                    </div>
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Pro</h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white">$49</span>
<span className="text-sm text-slate-500">/mo</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="16"></span>
                            10M requests / mo
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="16"></span>
                            Priority Support
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="16"></span>
                            Unlimited Projects
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="16"></span>
                            Advanced Analytics
                        </li>
</ul>
<button className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors shadow-lg shadow-indigo-900/20">Get Started</button>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Scale</h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white">Custom</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-500" data-icon="lucide:check" data-width="16"></span>
                            Unlimited requests
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-500" data-icon="lucide:check" data-width="16"></span>
                            Dedicated Solution Architect
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-500" data-icon="lucide:check" data-width="16"></span>
                            99.99% SLA
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-500" data-icon="lucide:check" data-width="16"></span>
                            Custom Contracts
                        </li>
</ul>
<button className="w-full py-2 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-indigo-950/20"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to ship the future?</h2>
<p className="text-slate-400 text-lg mb-10 font-light">Join 10,000+ developers building the next generation of financial applications.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-3 bg-white text-slate-950 rounded-full font-medium hover:bg-slate-200 transition-colors">Start Building Now</button>
<button className="px-8 py-3 bg-transparent border border-white/10 text-white rounded-full font-medium hover:bg-white/5 transition-colors">Talk to Sales</button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020617] py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="text-white text-sm font-medium mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Infrastructure</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Analytics</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Security</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Enterprise</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Legal</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Social</h4>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="20"></span></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:discord" data-width="20"></span></a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">N</div>
<span className="text-sm text-slate-500">© 2024 Nexus Inc. All rights reserved.</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-600">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    All Systems Operational
                </div>
</div>
</div>
</footer>

    </>
  );
}
