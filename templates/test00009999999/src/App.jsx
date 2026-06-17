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
      

<div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-black to-black"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-white" href="#">AIOT</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#developers">Developers</a>
<a className="hover:text-white transition-colors" href="#network">Network</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Documentation</a>
<button className="h-9 px-4 rounded-md bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">
                    Get SDK
                </button>
</div>
</div>
</nav>
<main className="flex-grow pt-32 pb-24">

<section className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center mb-32 relative">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 mb-8 backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-neutral-400 shadow-[0_0_8px_rgba(163,163,163,0.8)]"></span>
                APOS SDK is now in Public Beta
            </div>
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white max-w-5xl mb-8 leading-[1.1]">
                The Agentic Payment Operating System
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
                Empower your AI agents with self-sovereign identity, cross-chain autonomous wallets, and strict programmatic guardrails. Code once, let your agents transact anywhere.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto h-12 px-6 rounded-lg bg-white text-black text-base font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:terminal-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                    npm install @aiot/apos
                </button>
<button className="w-full sm:w-auto h-12 px-6 rounded-lg bg-transparent border border-white/20 text-white text-base font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                    Read Documentation
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="features">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Core Architecture</h2>
<p className="text-base text-neutral-400 max-w-2xl">Everything an autonomous agent needs to interact with Web3 and TradFi, bundled into a single, cohesive SDK.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col h-full overflow-hidden">
<div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:user-id-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Identity Initialization</h3>
<p className="text-sm text-neutral-400 mb-6 flex-grow leading-relaxed">
                        Deploying an agent establishes its core digital identity via an ERC-8004 NFT, tracking reputation natively. Publicly verifiable mapping is secured through the ERC-8160 Primary Agent Registry.
                    </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-xs font-mono px-2 py-1 rounded bg-black/50 border border-white/10 text-neutral-300">ERC-8004</span>
<span className="text-xs font-mono px-2 py-1 rounded bg-black/50 border border-white/10 text-neutral-300">ERC-8160</span>
</div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col h-full overflow-hidden">
<div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Sovereign Interoperability</h3>
<p className="text-sm text-neutral-400 mb-6 flex-grow leading-relaxed">
                        Agents receive an ERC-6551 Token Bound Account attached to their identity. Powered by ERC-4337 for gasless execution and ERC-7683 for native cross-chain intent routing.
                    </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-xs font-mono px-2 py-1 rounded bg-black/50 border border-white/10 text-neutral-300">ERC-6551</span>
<span className="text-xs font-mono px-2 py-1 rounded bg-black/50 border border-white/10 text-neutral-300">ERC-4337</span>
<span className="text-xs font-mono px-2 py-1 rounded bg-black/50 border border-white/10 text-neutral-300">ERC-7683</span>
</div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col h-full overflow-hidden">
<div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:shield-keyhole-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Security &amp; Guardrails</h3>
<p className="text-sm text-neutral-400 mb-6 flex-grow leading-relaxed">
                        Enforce strict spending limits via ERC-8118. APOS provides a TEE (Trusted Execution Environment) credential vault, allowing agents to fetch Web2 API keys off-chain securely.
                    </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-xs font-mono px-2 py-1 rounded bg-black/50 border border-white/10 text-neutral-300">ERC-8118</span>
<span className="text-xs font-mono px-2 py-1 rounded bg-black/50 border border-white/10 text-neutral-300">TEE Enclave</span>
</div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col h-full overflow-hidden">
<div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Autonomous Asset Mgmt</h3>
<p className="text-sm text-neutral-400 mb-6 flex-grow leading-relaxed">
                        JIT Auto-Swaps resolve currency mismatches milliseconds before payment. Idle capital is swept into ERC-4626 yield-bearing protocols, allowing agents to self-fund their compute.
                    </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-xs font-mono px-2 py-1 rounded bg-black/50 border border-white/10 text-neutral-300">JIT Routing</span>
<span className="text-xs font-mono px-2 py-1 rounded bg-black/50 border border-white/10 text-neutral-300">ERC-4626</span>
</div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col h-full overflow-hidden">
<div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:shop-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Real-World Commerce</h3>
<p className="text-sm text-neutral-400 mb-6 flex-grow leading-relaxed">
                        Native X402 integration via <code>apos.fetch()</code> automatically clears HTTP 402 paywalls. Provision programmable virtual debit cards with granular policy limits for TradFi services.
                    </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-xs font-mono px-2 py-1 rounded bg-black/50 border border-white/10 text-neutral-300">X402 API</span>
<span className="text-xs font-mono px-2 py-1 rounded bg-black/50 border border-white/10 text-neutral-300">TradFi Cards</span>
</div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col h-full overflow-hidden">
<div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:network-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">A2A Networking</h3>
<p className="text-sm text-neutral-400 mb-6 flex-grow leading-relaxed">
                        Enter the Agentic Economy. Agents can query the registry, negotiate prices, hire sub-agents, and escrow funds autonomously using built-in negotiation protocols.
                    </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-xs font-mono px-2 py-1 rounded bg-black/50 border border-white/10 text-neutral-300">Marketplace</span>
<span className="text-xs font-mono px-2 py-1 rounded bg-black/50 border border-white/10 text-neutral-300">Escrow Contracts</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24" id="developers">
<div className="flex flex-col lg:flex-row gap-12 items-center">
<div className="lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Developer Experience</h2>
<p className="text-base text-neutral-400 mb-8 leading-relaxed">
                        The APOS SDK abstracts away the complexities of smart wallets, cross-chain bridging, and cryptography. Write your agent's logic in JavaScript/TypeScript, and let the operating system handle the economy.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-neutral-300">Type-safe APIs with comprehensive JSDoc.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-neutral-300">Zero-config TEE enclave integration.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-neutral-300">Automatic gas abstraction via Paymasters.</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-neutral-300 transition-colors" href="#">
                        View Full API Reference
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
<div className="lg:w-1/2 w-full">

<div className="rounded-xl border border-white/10 bg-black shadow-2xl overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>

<div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="flex space-x-2">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
</div>
<div className="ml-4 text-xs font-mono text-neutral-500">agent-logic.ts</div>
</div>

<div className="p-6 overflow-x-auto">
<pre className="text-xs sm:text-sm font-mono leading-relaxed"><code className="language-typescript">
<span className="text-neutral-500">// Initialize APOS with network config</span>
<span className="text-neutral-400">import</span> { APOS } <span className="text-neutral-400">from</span> <span className="text-green-400">'@aiot/apos-sdk'</span>;

<span className="text-neutral-500">// 1. Deploy Agent (ERC-8004 &amp; 6551 Wallet)</span>
<span className="text-neutral-400">const</span> agent <span className="text-neutral-400">= await</span> APOS.<span className="text-blue-300">deploy</span>({
  name: <span className="text-green-400">'ResearchBot_v1'</span>,
  policies: { maxSpendPerDay: <span className="text-green-400">'50 USDC'</span> }
});

<span className="text-neutral-500">// 2. Secure Web2 API Keys via TEE Vault</span>
<span className="text-neutral-400">const</span> openAiKey <span className="text-neutral-400">= await</span> agent.vault.<span className="text-blue-300">getSecret</span>(<span className="text-green-400">'OPENAI_KEY'</span>);

<span className="text-neutral-500">// 3. X402 Web Payment (Auto-clears 402 errors)</span>
<span className="text-neutral-400">const</span> dataset <span className="text-neutral-400">= await</span> agent.<span className="text-blue-300">fetch</span>(<span className="text-green-400">'https://data.premium.io'</span>, {
  method: <span className="text-green-400">'GET'</span>,
  autoPay: <span className="text-orange-300">true</span>, 
  budget: <span className="text-green-400">'2.5 USDC'</span>
});

<span className="text-neutral-500">// 4. A2A Network: Hire a Sub-Agent</span>
<span className="text-neutral-400">const</span> contract <span className="text-neutral-400">= await</span> agent.<span className="text-blue-300">hire</span>(<span className="text-green-400">'0xScrapingAgent...'</span>, {
  task: <span className="text-green-400">'parse_html'</span>,
  escrow: <span className="text-green-400">'10 USDC'</span>
});
                            </code></pre>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<a className="text-lg font-semibold tracking-tighter text-white block mb-4" href="#">AIOT</a>
<p className="text-sm text-neutral-500 max-w-xs">
                    Building the financial infrastructure for the autonomous agent economy.
                </p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-3 text-sm">
<span className="font-medium text-white mb-2">Product</span>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">APOS SDK</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Agent Registry</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">TEE Vaults</a>
</div>
<div className="flex flex-col gap-3 text-sm">
<span className="font-medium text-white mb-2">Resources</span>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Documentation</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Github</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">ERCs Overview</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
<p>© 2024 AIOT Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-neutral-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
