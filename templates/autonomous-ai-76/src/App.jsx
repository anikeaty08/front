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
background: '#050505',
surface: '#0a0a0a',
surface2: '#111111',
border: 'rgba(255, 255, 255, 0.08)',
accent: '#22d3ee', // Cold Cyan
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 20s linear infinite',
'spin-reverse': 'spin 25s linear infinite reverse',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20 pointer-events-none blur-[120px] bg-gradient-to-b from-cyan-500/30 to-transparent rounded-full -z-10" style={{transform: 'translate3d(-50%, -20%, 0)'}}></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="font-semibold tracking-tighter text-xl text-white flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-white flex items-center justify-center rounded-sm">
<div className="w-2 h-2 bg-background rounded-sm"></div>
</div>
                    KLOW
                </a>
<div className="hidden md:flex items-center gap-6 text-sm text-neutral-400 font-medium">
<a className="hover:text-white transition-colors" href="#">Infrastructure</a>
<a className="hover:text-white transition-colors" href="#">Swarms</a>
<a className="hover:text-white transition-colors" href="#">Web3 integration</a>
<a className="hover:text-white transition-colors" href="#">Documentation</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-neutral-400 hover:text-white font-medium transition-colors hidden sm:block" href="#">Log in</a>
<a className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2" href="#">
                    Deploy Agent
                    <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</nav>
<main className="relative pt-32 pb-24 z-10">

<section className="max-w-7xl mx-auto px-6 relative">
<div className="absolute inset-0 bg-grid-pattern -z-10 h-[800px] w-full left-0 top-0"></div>
<div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 pt-12 pb-20">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-cyan-400 mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
                    Klow Engine v2.0 Live
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] text-gradient">
                    Autonomous Workforce. <br/> Financially Aware.
                </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl font-normal leading-relaxed">
                    Deploy multi-agent swarms directly from Telegram. Native Web3 wallets enable your AI infrastructure to execute transactions, sign contracts, and operate with complete financial autonomy.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
<a className="bg-white text-black h-12 px-8 rounded-full text-sm font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#">
                        Initialize Swarm
                        <iconify-icon className="text-lg" icon="solar:programming-linear"></iconify-icon>
</a>
<a className="bg-surface2 text-white border border-white/10 h-12 px-8 rounded-full text-sm font-medium hover:bg-surface transition-colors flex items-center justify-center gap-2 w-full sm:w-auto" href="#">
                        Read Whitepaper
                    </a>
</div>
</div>

<div className="relative w-full max-w-5xl mx-auto mt-12 aspect-video rounded-2xl glass-panel p-2 overflow-hidden group">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-background/50 rounded-t-xl">
<div className="flex items-center gap-3">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<div className="text-xs text-neutral-500 font-medium tracking-wide">KLOW_CMD_CENTER // 0x7F...4A2</div>
</div>
<div className="flex items-center gap-2 text-xs text-cyan-400 font-medium bg-cyan-400/10 px-2 py-1 rounded">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
                        Swarm Active
                    </div>
</div>

<div className="relative w-full h-[calc(100%-3rem)] bg-background rounded-b-xl overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<div className="relative z-20 flex items-center justify-center animate-float">
<div className="w-24 h-24 rounded-full border border-cyan-500/30 bg-background flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.15)] relative">
<div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping" style={{animationDuration: '3s'}}></div>
<iconify-icon className="text-3xl text-cyan-400" icon="solar:cpu-linear"></iconify-icon>
</div>

<div className="absolute w-64 h-64 rounded-full border border-white/5 animate-spin-slow"></div>
<div className="absolute w-96 h-96 rounded-full border border-white/5 animate-spin-reverse"></div>

<div className="absolute w-64 h-64 animate-spin-slow">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-surface2 border border-white/20 rounded-full flex items-center justify-center group-hover:border-cyan-400/50 transition-colors">
<div className="w-1.5 h-1.5 bg-neutral-400 rounded-full group-hover:bg-cyan-400 transition-colors"></div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-surface2 border border-white/20 rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></div>
</div>
</div>
<div className="absolute w-96 h-96 animate-spin-reverse">
<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-surface2 border border-white/10 rounded-lg flex items-center justify-center shadow-lg">
<iconify-icon className="text-neutral-400 text-sm" icon="solar:wallet-linear"></iconify-icon>
</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-surface2 border border-white/10 rounded-lg flex items-center justify-center shadow-lg">
<iconify-icon className="text-neutral-400 text-sm" icon="solar:code-square-linear"></iconify-icon>
</div>
</div>
</div>

<div className="absolute left-6 top-6 bottom-6 w-48 flex flex-col justify-between pointer-events-none opacity-50">
<div className="space-y-2">
<div className="text-[10px] text-neutral-500 font-mono">SYS.MEM.ALLOC</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-cyan-400/50 w-[78%]"></div>
</div>
</div>
<div className="space-y-1">
<div className="text-[10px] text-neutral-500 font-mono">LATEST_TX</div>
<div className="text-xs text-neutral-300 font-mono truncate">0x8a9...f3c2 confirmed</div>
<div className="text-xs text-neutral-300 font-mono truncate">0x1b2...99a1 pending</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-surface2/30 mt-20">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5 text-center">
<div className="flex flex-col gap-1">
<div className="text-3xl font-semibold tracking-tight text-white">$2.4B+</div>
<div className="text-xs text-neutral-500 font-medium uppercase tracking-wider">On-chain Volume Executed</div>
</div>
<div className="flex flex-col gap-1">
<div className="text-3xl font-semibold tracking-tight text-white">10ms</div>
<div className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Agent Latency</div>
</div>
<div className="flex flex-col gap-1">
<div className="text-3xl font-semibold tracking-tight text-white">400k+</div>
<div className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Swarms Deployed</div>
</div>
<div className="flex flex-col gap-1">
<div className="text-3xl font-semibold tracking-tight text-white">100%</div>
<div className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Deterministic Accuracy</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">Engineered for absolute autonomy.</h2>
<p className="text-neutral-400 text-lg max-w-2xl">Klow provides the primitive infrastructure required to build AI agents that don't just chat, but execute, transact, and coordinate.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[24rem]">

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group flex flex-col justify-between border-white/5 hover:border-white/10 transition-colors">
<div className="absolute right-0 top-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full blur-2xl transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="z-10 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-white" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<div className="z-10 mt-auto">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Telegram Native</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Command your entire AI infrastructure through secure, end-to-end encrypted Telegram channels. No complex dashboards required.</p>
</div>

<div className="absolute right-8 top-8 w-3/4 bg-surface border border-white/5 rounded-lg p-3 opacity-50 transform translate-x-4 -translate-y-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex gap-2 items-center mb-2">
<div className="w-4 h-4 rounded-full bg-cyan-500/20 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div></div>
<div className="h-2 w-16 bg-white/10 rounded"></div>
</div>
<div className="h-2 w-full bg-white/5 rounded mb-1"></div>
<div className="h-2 w-2/3 bg-white/5 rounded"></div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group md:col-span-2 flex flex-col justify-between border-white/5 hover:border-white/10 transition-colors">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
<div className="z-10 flex justify-between items-start">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-white" icon="solar:safe-square-linear"></iconify-icon>
</div>
<div className="px-3 py-1 rounded-full border border-white/5 bg-background text-xs font-mono text-neutral-400">
                            EVM &amp; Solana Supported
                        </div>
</div>
<div className="z-10 flex flex-col md:flex-row gap-8 items-end">
<div className="flex-1">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Embedded Financial Agency</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Every agent spawned is provisioned with a dedicated, programmatic wallet. Allow your swarm to pay for API calls, execute trades, and manage yield autonomously with precise permissioning limits.</p>
</div>

<div className="w-full md:w-64 bg-background border border-white/10 rounded-xl p-4 shadow-2xl relative">
<div className="flex justify-between items-center mb-4">
<span className="text-[10px] text-neutral-500 font-mono">AGENT_WALLET_01</span>
<iconify-icon className="text-neutral-500 text-xs" icon="solar:copy-linear"></iconify-icon>
</div>
<div className="text-2xl font-semibold tracking-tight mb-1 text-white">42.508 ETH</div>
<div className="text-xs text-neutral-500 mb-4">≈ $128,400.00 USD</div>
<div className="w-full h-8 rounded bg-white/5 flex items-center justify-center text-xs font-medium text-white border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                                Approve Transaction
                            </div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group md:col-span-2 flex flex-col justify-between border-white/5 hover:border-white/10 transition-colors">
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '8px 8px'}}></div>
<div className="z-10 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-white" icon="solar:network-linear"></iconify-icon>
</div>
<div className="z-10 flex flex-col md:flex-row gap-8 items-center mt-auto">
<div className="flex-1">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Multi-Agent Swarm Logic</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Don't rely on a single point of failure. Deploy specialized agents that communicate, debate, and reach consensus before executing critical on-chain operations. Complete with built-in rollback logic.</p>
</div>

<div className="w-full md:w-1/2 h-32 relative flex items-center justify-center">
<div className="w-10 h-10 rounded-full bg-surface border border-cyan-500/30 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
<div className="w-2 h-2 rounded-full bg-cyan-400"></div>
</div>

<div className="absolute top-1/2 left-1/2 w-24 h-px bg-gradient-to-r from-cyan-500/50 to-transparent -translate-y-1/2 origin-left transform -rotate-45"></div>
<div className="absolute top-1/2 left-1/2 w-24 h-px bg-gradient-to-r from-cyan-500/50 to-transparent -translate-y-1/2 origin-left transform rotate-45"></div>
<div className="absolute top-1/2 right-1/2 w-24 h-px bg-gradient-to-l from-cyan-500/50 to-transparent -translate-y-1/2 origin-right transform -rotate-12"></div>

<div className="absolute top-4 left-10 w-6 h-6 rounded-full bg-surface border border-white/10 flex items-center justify-center"><div className="w-1 h-1 rounded-full bg-neutral-400"></div></div>
<div className="absolute bottom-4 left-10 w-6 h-6 rounded-full bg-surface border border-white/10 flex items-center justify-center"><div className="w-1 h-1 rounded-full bg-neutral-400"></div></div>
<div className="absolute top-1/2 right-10 -translate-y-1/2 w-6 h-6 rounded-full bg-surface border border-white/10 flex items-center justify-center"><div className="w-1 h-1 rounded-full bg-neutral-400"></div></div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group flex flex-col justify-between border-white/5 hover:border-white/10 transition-colors">
<div className="z-10 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-white" icon="solar:terminal-linear"></iconify-icon>
</div>
<div className="z-10 mt-auto">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Terminal Access</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Monitor real-time execution logs, adjust strict parameters, and audit historical decisions in a unified, developer-first command interface.</p>
</div>

<div className="absolute top-8 right-8 w-48 bg-[#0a0a0a] border border-white/10 rounded-md p-3 font-mono text-[9px] text-neutral-500 opacity-40 group-hover:opacity-80 transition-opacity">
<div className="text-cyan-400">&gt; klow swarm deploy --config v2</div>
<div className="mt-1">[ok] compiling agent logic...</div>
<div className="mt-1">[ok] provisioning wallets...</div>
<div className="mt-1 text-white">Swarm 0x8F2 active.</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 py-32 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">From configuration to execution in minutes.</h2>
<p className="text-neutral-400 text-lg max-w-xl mx-auto">No complex orchestration tools. Define your intent, fund the infrastructure, and deploy globally.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-surface2 border border-white/10 flex items-center justify-center mb-6 shadow-lg relative">
<div className="absolute inset-0 rounded-full border border-white/5 scale-110"></div>
<span className="text-xl font-mono text-neutral-500">01</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Define Constraints</h3>
<p className="text-sm text-neutral-400">Write instructions in natural language or strict JSON schemas. Set risk parameters and operational boundaries.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-surface2 border border-white/10 flex items-center justify-center mb-6 shadow-lg relative">
<div className="absolute inset-0 rounded-full border border-white/5 scale-110"></div>
<span className="text-xl font-mono text-neutral-500">02</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Provision Wallet</h3>
<p className="text-sm text-neutral-400">Klow automatically generates secure, programmatic wallets (EVM/SVM) for your agents to utilize for gas and transactions.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-surface2 border border-cyan-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,211,238,0.1)] relative">
<div className="absolute inset-0 rounded-full border border-cyan-400/20 scale-110 animate-pulse-slow"></div>
<span className="text-xl font-mono text-cyan-400">03</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Deploy Swarm</h3>
<p className="text-sm text-neutral-400">Initiate the swarm via Telegram command or API. Monitor execution in real-time through the command center.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 py-32 bg-surface">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Transparent compute pricing.</h2>
<p className="text-neutral-400 text-lg">Pay only for the cognitive cycles and execution latency your infrastructure requires.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-panel rounded-2xl p-8 border border-white/5 flex flex-col">
<div className="mb-8">
<div className="text-sm text-neutral-400 font-medium mb-2">Developer</div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">$0</span>
<span className="text-sm text-neutral-500">/mo base</span>
</div>
<p className="text-sm text-neutral-400 mt-4">For individuals and small teams building experimental agents.</p>
</div>
<div className="space-y-4 mb-8 flex-1">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                                Up to 5 active agents
                            </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                                Telegram basic integration
                            </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                                Standard execution latency
                            </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                                Community support
                            </div>
</div>
<a className="w-full bg-surface2 border border-white/10 text-white h-10 rounded-lg text-sm font-medium hover:bg-surface transition-colors flex items-center justify-center" href="#">
                            Start Building
                        </a>
</div>

<div className="glass-panel rounded-2xl p-8 border border-cyan-500/30 relative overflow-hidden flex flex-col">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
<div className="mb-8">
<div className="flex justify-between items-center mb-2">
<div className="text-sm text-cyan-400 font-medium">Enterprise Swarm</div>
<div className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold tracking-wider bg-cyan-500/10 text-cyan-400">Recommended</div>
</div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">Custom</span>
</div>
<p className="text-sm text-neutral-400 mt-4">For protocols and funds requiring guaranteed latency and unlimited coordination.</p>
</div>
<div className="space-y-4 mb-8 flex-1">
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon>
                                Unlimited swarm scale
                            </div>
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon>
                                Dedicated validator nodes
                            </div>
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon>
                                Multi-sig Web3 architectures
                            </div>
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon>
                                Sub-millisecond execution routing
                            </div>
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon>
                                24/7 dedicated engineering channel
                            </div>
</div>
<a className="w-full bg-white text-black h-10 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center" href="#">
                            Contact Sales
                        </a>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8 z-10 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="font-semibold tracking-tighter text-xl text-white flex items-center gap-2 mb-4" href="#">
                        KLOW
                    </a>
<p className="text-sm text-neutral-500 max-w-xs">The primitive infrastructure for autonomous, financially aware AI operations.</p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Product</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Command Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Swarm Intelligence</a></li>
<li><a className="hover:text-white transition-colors" href="#">Wallet Infrastructure</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Developers</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">GitHub</a></li>
<li><a className="hover:text-white transition-colors" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Twitter (X)</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-neutral-500">
                    © 2024 Klow AI Inc. All rights reserved.
                </div>
<div className="flex items-center gap-4 text-xs text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
