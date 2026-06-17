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



        lucide.createIcons();

        // Intersection Observer for "Framer-like" reveal on scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: Stop observing once revealed
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded flex items-center justify-center text-black shadow-[0_0_15px_rgba(52,211,153,0.5)]">
<i className="w-3.5 h-3.5" data-lucide="cpu"></i>
</div>
<span className="text-sm font-semibold tracking-tight text-white">ZERO1.OS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Developers</a>
<a className="hover:text-white transition-colors" href="#">Ecosystem</a>
<a className="hover:text-white transition-colors" href="#">Whitepaper</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex text-xs font-medium text-zinc-400 hover:text-white transition-colors gap-2 items-center">
<i className="w-4 h-4" data-lucide="github"></i> Star on GitHub
                </button>
<button className="bg-zinc-100 hover:bg-white text-black px-4 py-2 rounded text-xs font-semibold transition-all transform active:scale-95">
                    Launch App
                </button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 max-w-7xl mx-auto px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-[-1] pointer-events-none"></div>
<div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10 reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/30 text-emerald-400 text-xs font-medium mb-8 hover:bg-emerald-900/20 transition-colors cursor-pointer">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                V2.0 Mainnet Beta is Live
                <i className="w-3 h-3 ml-1" data-lucide="chevron-right"></i>
</div>
<h1 className="text-5xl md:text-8xl font-medium text-white tracking-tighter mb-8 leading-[1] text-glow">
                The operating system<br/>
                for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-500">decentralized robotics</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mb-12">
                Zero1 enables autonomous agents to coordinate, transact, and execute tasks on Solana. A permissionless layer for the machine economy.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
<button className="group w-full sm:w-auto h-12 px-8 rounded bg-gradient-to-b from-white to-zinc-200 text-black font-medium text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-2">
                    Start Building 
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<div className="flex items-center gap-4 px-6 py-3 rounded border border-zinc-800 bg-zinc-900/50 text-zinc-400 font-mono text-xs backdrop-blur-sm hover:bg-zinc-900 transition-colors cursor-pointer">
<span>$ npm install @zero1/sdk</span>
<i className="w-3 h-3 hover:text-white transition-colors" data-lucide="copy"></i>
</div>
</div>
</div>

<div className="relative w-full max-w-5xl mx-auto reveal delay-200">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 rounded-xl blur-lg opacity-50"></div>
<div className="relative border border-zinc-800 rounded-xl bg-[#09090b] shadow-2xl overflow-hidden">

<div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="ml-2 text-xs text-zinc-500 font-mono">fleet_monitor.tsx</div>
</div>
<div className="text-xs text-emerald-500 flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                        Connected to Solana Mainnet
                    </div>
</div>

<div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="hidden md:flex flex-col gap-4 text-sm text-zinc-500 border-r border-zinc-800 pr-6">
<div className="text-white font-medium">Overview</div>
<div className="hover:text-emerald-400 cursor-pointer transition-colors">Active Agents</div>
<div className="hover:text-emerald-400 cursor-pointer transition-colors">Transaction Logs</div>
<div className="hover:text-emerald-400 cursor-pointer transition-colors">Wallet Manager</div>
<div className="hover:text-emerald-400 cursor-pointer transition-colors">Neural Config</div>
<div className="mt-auto p-3 rounded bg-zinc-900/50 border border-zinc-800">
<div className="text-xs text-zinc-400 mb-1">Network Load</div>
<div className="h-1 w-full bg-zinc-800 rounded overflow-hidden">
<div className="h-full w-[65%] bg-emerald-500"></div>
</div>
</div>
</div>

<div className="col-span-3 space-y-6">
<div className="grid grid-cols-3 gap-4">
<div className="p-4 rounded bg-zinc-900/30 border border-zinc-800">
<div className="text-xs text-zinc-500 mb-1 uppercase tracking-wider">Total Volume</div>
<div className="text-xl text-white font-mono">$42.8M</div>
</div>
<div className="p-4 rounded bg-zinc-900/30 border border-zinc-800">
<div className="text-xs text-zinc-500 mb-1 uppercase tracking-wider">Tasks/Sec</div>
<div className="text-xl text-white font-mono">8,291</div>
</div>
<div className="p-4 rounded bg-zinc-900/30 border border-zinc-800">
<div className="text-xs text-zinc-500 mb-1 uppercase tracking-wider">Active Bots</div>
<div className="text-xl text-emerald-400 font-mono">124</div>
</div>
</div>

<div className="relative h-48 rounded bg-zinc-900/30 border border-zinc-800 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>

<div className="absolute top-1/3 left-1/4 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]"></div>
<div className="absolute top-2/3 left-2/3 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]"></div>
<div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_white] animate-pulse"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none">
<line stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" x1="25%" x2="50%" y1="33%" y2="50%"></line>
<line stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" x1="66%" x2="50%" y1="66%" y2="50%"></line>
</svg>
<div className="absolute bottom-2 right-2 font-mono text-[10px] text-emerald-500/50">LIVE FEED</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-10 border-y border-white/5 bg-black/40">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-600 mb-6 uppercase tracking-widest">Trusted by autonomous fleets at</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 grayscale opacity-50 hover:opacity-100 transition-opacity duration-500">

<div className="flex items-center gap-2 font-semibold text-lg text-white"><div className="w-5 h-5 bg-white rounded-full"></div> ACME AI</div>
<div className="flex items-center gap-2 font-semibold text-lg text-white"><div className="w-5 h-5 border-2 border-white transform rotate-45"></div> NEURAL</div>
<div className="flex items-center gap-2 font-semibold text-lg text-white"><div className="w-5 h-5 bg-white rounded-sm"></div> STARK</div>
<div className="flex items-center gap-2 font-semibold text-lg text-white"><div className="w-5 h-5 border border-white rounded-full"></div> ORBIT</div>
<div className="flex items-center gap-2 font-semibold text-lg text-white"><div className="w-5 h-5 bg-gradient-to-tr from-zinc-500 to-white"></div> SOLANA</div>
</div>
</div>
</section>

<section className="py-32 max-w-7xl mx-auto px-6">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-4">Infrastructure for the <span className="text-emerald-400">Machine Age</span></h2>
<p className="text-zinc-400 max-w-2xl text-lg">A complete stack to deploy, manage, and monetize robotic agents with cryptographic guarantees.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[800px]">

<div className="md:col-span-2 md:row-span-2 glass-panel rounded-3xl p-10 relative overflow-hidden group reveal delay-100">
<div className="relative z-10">
<div className="w-12 h-12 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="text-emerald-400 w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-4">Sub-second Latency</h3>
<p className="text-zinc-400 leading-relaxed max-w-md">
                        Built for real-time robotics. Achieve 400ms finality for agent coordination. Sync swarm states instantly across the network without centralized bottlenecks.
                    </p>
</div>

<div className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-gradient-to-t from-emerald-500/10 to-transparent z-0"></div>
<div className="absolute bottom-0 right-0 w-full h-2/3 border-t border-zinc-800 bg-zinc-900/20 backdrop-blur-sm flex flex-col p-6 gap-2 translate-y-20 group-hover:translate-y-10 transition-transform duration-700">
<div className="flex justify-between text-xs font-mono text-zinc-500">
<span>PING</span>
<span className="text-emerald-400">12ms</span>
</div>
<div className="w-full h-1 bg-zinc-800 rounded overflow-hidden">
<div className="h-full w-[90%] bg-emerald-500"></div>
</div>
<div className="flex justify-between text-xs font-mono text-zinc-500 mt-2">
<span>TPS</span>
<span className="text-emerald-400">4,500</span>
</div>
<div className="w-full h-1 bg-zinc-800 rounded overflow-hidden">
<div className="h-full w-[60%] bg-emerald-500"></div>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 relative overflow-hidden group reveal delay-200">
<div className="w-10 h-10 bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center mb-4">
<i className="text-white w-5 h-5" data-lucide="shield"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Secure Enclaves</h3>
<p className="text-sm text-zinc-400">TEE-enabled execution environments ensuring code integrity for autonomous agents.</p>
<div className="absolute top-4 right-4 opacity-20 group-hover:opacity-50 transition-opacity">
<i className="w-24 h-24 text-emerald-900" data-lucide="lock"></i>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 relative overflow-hidden group reveal delay-300">
<div className="w-10 h-10 bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center mb-4">
<i className="text-white w-5 h-5" data-lucide="coins"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Machine Payments</h3>
<p className="text-sm text-zinc-400">Native micropayments via SPL tokens. Robots can earn, spend, and hold assets.</p>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-y border-white/5 relative">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 reveal">
<div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono mb-6">
<span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    SDK REFERENCE
                </div>
<h2 className="text-4xl font-medium text-white tracking-tighter mb-6">Speak the language<br/>of machines.</h2>
<p className="text-zinc-400 mb-8 leading-relaxed text-lg">
                    Our Rust and Python SDKs handle the complexity of blockchain interactions, letting you focus on robot logic. Authenticate hardware, sign transactions, and stream data with a few lines of code.
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 p-4 rounded-lg border border-zinc-800 bg-black/50">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-white"><i className="w-4 h-4" data-lucide="terminal"></i></div>
<div>
<div className="text-white font-medium text-sm">Standardized Identity</div>
<div className="text-zinc-500 text-xs">DID implementation for every hardware unit.</div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg border border-zinc-800 bg-black/50">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-white"><i className="w-4 h-4" data-lucide="key"></i></div>
<div>
<div className="text-white font-medium text-sm">Access Control</div>
<div className="text-zinc-500 text-xs">Granular permissions for fleet management.</div>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 w-full reveal delay-200">
<div className="rounded-xl overflow-hidden bg-[#0D0D0D] border border-zinc-800 shadow-2xl shadow-black">
<div className="flex items-center justify-between px-4 py-3 bg-zinc-900/50 border-b border-zinc-800">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs text-zinc-500 font-mono">agent_init.rs</div>
</div>
<div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
<div className="text-zinc-500 italic mb-4">// Initialize a new autonomous agent on Solana</div>
<div><span className="text-purple-400">use</span> zero1_sdk::prelude::*;</div>
<div><span className="text-purple-400">use</span> solana_program::pubkey::Pubkey;</div>
<br/>
<div><span className="text-blue-400">async fn</span> <span className="text-yellow-300">main</span>() -&gt; Result&lt;()&gt; {</div>
<div className="pl-4 border-l border-zinc-800 ml-1 my-1">
<div className="text-zinc-500">// Connect to mainnet cluster</div>
<div><span className="text-blue-400">let</span> client = Client::new(<span className="text-green-400">"https://api.mainnet-beta.solana.com"</span>);</div>
<br/>
<div className="text-zinc-500">// Load hardware wallet security enclave</div>
<div><span className="text-blue-400">let</span> agent = Agent::from_enclave(path).await?;</div>
<br/>
<div><span className="text-blue-400">let</span> task = Task::new({</div>
<div className="pl-4">
<div>target: <span className="text-orange-300">Pubkey</span>::new_unique(),</div>
<div>action: Action::Optimize,</div>
<div>bounty: <span className="text-purple-400">500_000</span>, <span className="text-zinc-500">// lamports</span></div>
</div>
<div>});</div>
<br/>
<div className="text-zinc-500">// Execute on-chain transaction</div>
<div><span className="text-blue-400">let</span> signature = agent.sign_and_send(task).await?;</div>
<div>println!(<span className="text-green-400">"Task executed: {:?}"</span>, signature);</div>
</div>
<div>}</div>
<div className="mt-4 flex items-center gap-2 text-emerald-400 animate-pulse">
<span>&gt;</span>
<span className="w-2 h-4 bg-emerald-400"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
<div className="text-center reveal">
<div className="text-4xl font-semibold text-white mb-2">12.4k</div>
<div className="text-sm text-zinc-500 uppercase tracking-wider">Active Nodes</div>
</div>
<div className="text-center reveal delay-100">
<div className="text-4xl font-semibold text-white mb-2">$140M</div>
<div className="text-sm text-zinc-500 uppercase tracking-wider">TVL</div>
</div>
<div className="text-center reveal delay-200">
<div className="text-4xl font-semibold text-white mb-2">24M+</div>
<div className="text-sm text-zinc-500 uppercase tracking-wider">Transactions</div>
</div>
<div className="text-center reveal delay-300">
<div className="text-4xl font-semibold text-white mb-2">99.9%</div>
<div className="text-sm text-zinc-500 uppercase tracking-wider">Uptime</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-emerald-900/10"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_60%)]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-6">Ready to deploy?</h2>
<p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
                Join thousands of developers building the future of decentralized physical infrastructure.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-14 px-8 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-200">
                    Start Building Now
                </button>
<button className="h-14 px-8 rounded-full border border-zinc-700 bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="py-16 bg-black border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center text-black">
<i className="w-3.5 h-3.5" data-lucide="cpu"></i>
</div>
<span className="text-sm font-semibold text-white">ZERO1.OS</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed">
                        The decentralized operating system for robotics. Empowering machines with ownership and identity.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Protocol</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Network</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Tokenomics</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Governance</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Developers</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">GitHub</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Whitepaper</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Audit Reports</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Connect</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Discord</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Telegram</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Blog</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-zinc-600">© 2024 Zero1 Foundation. All rights reserved.</div>
<div className="flex items-center gap-2 text-xs text-zinc-600">
<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    All Systems Operational
                </div>
</div>
</div>
</footer>



    </>
  );
}
