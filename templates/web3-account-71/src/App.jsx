import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Simple Interaction Observer for scroll animations
document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
});
// Tab Switcher Logic for Section 4
function switchTab(tier) {
// Reset buttons
document.querySelectorAll('.tab-btn').forEach(btn => {
btn.classList.remove('text-white', 'bg-white/10');
btn.classList.add('text-neutral-500');
});
// Active button
document.getElementById(`btn-${tier}`).classList.add('text-white', 'bg-white/10');
document.getElementById(`btn-${tier}`).classList.remove('text-neutral-500');
// Hide all content
document.querySelectorAll('.code-content').forEach(el => el.classList.add('hidden'));
// Show selected content
document.getElementById(`code-${tier}`).classList.remove('hidden');
}
// Tab Switcher for Use Cases
function switchUseCase(type) {
document.querySelectorAll('.use-case-tab').forEach(btn => {
btn.classList.remove('border-white/20', 'text-white');
btn.classList.add('border-transparent', 'text-neutral-500');
});
document.getElementById(`tab-${type}`).classList.add('border-white/20', 'text-white');
document.getElementById(`tab-${type}`).classList.remove('border-transparent', 'text-neutral-500');
document.getElementById('case-dev').classList.toggle('hidden');
document.getElementById('case-ent').classList.toggle('hidden');
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-20%] left-[20%] w-[60vw] h-[60vw] bg-indigo-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] bg-blue-900/5 rounded-full blur-[100px]"></div>
</div>

<div className="fixed inset-0 pointer-events-none z-0 mx-auto max-w-7xl grid-lines hidden md:block border-r border-l border-white/[0.03]"></div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center animate-up">
<div className="flex items-center gap-8 px-6 py-2.5 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
<span className="text-sm font-semibold tracking-tight text-white flex items-center gap-2">
<div className="w-3 h-3 bg-white rounded-sm"></div>
                AbstractApex
            </span>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#developers">Developers</a>
</div>
<a className="text-xs font-medium text-white bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors" href="https://docs.abstractapex.xyz">
                Documentation
            </a>
</div>
</nav>
<main className="relative z-10">

<section className="max-w-7xl mx-auto px-6 pt-16 pb-32 relative">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
<div className="animate-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Now supporting EIP-7702
                </div>
<h1 className="animate-up delay-100 text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                    Write intent once. Run across <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">EOA → 7702 → UserOps.</span>
</h1>
<p className="animate-up delay-200 text-lg md:text-xl text-neutral-400 font-light max-w-2xl leading-relaxed tracking-tight mb-10">
                    AbstractApex compiles actions into the optimal execution format per user, wallet, and chain—then upgrades users automatically when policies require it.
                </p>
<div className="animate-up delay-300 flex flex-col sm:flex-row gap-4 w-full justify-center">
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                        Read the Quick Start
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                        Open Interactive Demo
                        <iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="animate-up delay-500 relative max-w-3xl mx-auto mt-12 p-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
<div className="bg-[#080808] rounded-2xl border border-white/5 p-8 relative overflow-hidden">

<div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">

<div className="w-full md:w-1/4 p-4 rounded-xl border border-white/10 bg-[#0C0C0C] flex flex-col items-center gap-3">
<div className="p-2 bg-white/5 rounded-lg text-white"><iconify-icon icon="solar:code-file-linear" width="24"></iconify-icon></div>
<span className="text-xs font-mono text-neutral-400">intent.json</span>
</div>

<div className="hidden md:flex flex-col justify-center items-center h-24 w-12 opacity-50">
<svg fill="none" height="100%" viewbox="0 0 50 100" width="100%">
<path d="M0 50 L50 10" stroke="#333" strokeWidth="1"></path>
<path d="M0 50 L50 50" stroke="#333" strokeWidth="1"></path>
<path d="M0 50 L50 90" stroke="#333" strokeWidth="1"></path>
</svg>
</div>

<div className="w-full md:w-1/3 space-y-3">
<div className="flex items-center gap-3 p-3 rounded-lg border border-indigo-500/20 bg-indigo-500/5">
<iconify-icon className="text-indigo-400" icon="solar:bolt-linear"></iconify-icon>
<span className="text-xs font-medium text-indigo-200">7702 Batch Tx</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/5">
<iconify-icon className="text-neutral-400" icon="solar:user-id-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-300">ERC-4337 UserOp</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/5">
<iconify-icon className="text-neutral-400" icon="solar:layers-minimalistic-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-300">7579 + Hooks</span>
</div>
</div>

<div className="hidden md:flex flex-col justify-center items-center h-24 w-12 opacity-50">
<svg fill="none" height="100%" viewbox="0 0 50 100" width="100%">
<path d="M0 10 L50 50" stroke="#333" strokeWidth="1"></path>
<path d="M0 50 L50 50" stroke="#333" strokeWidth="1"></path>
<path d="M0 90 L50 50" stroke="#333" strokeWidth="1"></path>
</svg>
</div>

<div className="w-full md:w-1/4 p-4 rounded-xl border border-white/10 bg-[#0C0C0C] flex flex-col items-center gap-3 shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]">
<div className="p-2 bg-green-500/10 rounded-lg text-green-400"><iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon></div>
<span className="text-xs font-mono text-white">1 API: execute()</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
                            Wallet UX depends on <br/>
<span className="text-neutral-500">chain + wallet quirks.</span>
</h2>
<div className="space-y-6 mt-10">
<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Fragmented Logic</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Teams rewrite execution logic for EOAs vs UserOps repeatedly, creating tech debt.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Migration friction</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Migrating users is hard, so products delay AA adoption and lose UX benefits.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Bespoke Glue Code</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Compliance, AI agents, and gas abstraction require custom brittle integration per chain.</p>
</div>
</div>
</div>
</div>

<div className="reveal-on-scroll relative">
<div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl blur-lg opacity-20"></div>
<div className="bg-[#0A0A0A] rounded-xl border border-white/10 p-6 font-mono text-xs overflow-hidden">
<div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<span className="text-neutral-500 ml-auto">legacy_handler.ts</span>
</div>
<div className="text-neutral-400 space-y-1">
<p><span className="token keyword">if</span> (wallet.type === <span className="token string">'EOA'</span>) {</p>
<p className="pl-4"><span className="token keyword">if</span> (chain.id === 1) { <span className="token comment">// mainnet gas logic</span> ... }</p>
<p className="pl-4"><span className="token keyword">else if</span> (chain.supports7702) { ... }</p>
<p className="pl-4"><span className="token keyword">else</span> { <span className="token function">fallback()</span> }</p>
<p>}</p>
<p><span className="token keyword">else if</span> (wallet.isSmartAccount) {</p>
<p className="pl-4"><span className="token keyword">if</span> (entrypoint === <span className="token string">'v0.6'</span>) { ... }</p>
<p className="pl-4"><span className="token keyword">if</span> (module.isInstalled) { ... }</p>
<p>}</p>
</div>

<div className="absolute bottom-6 right-6 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-lg backdrop-blur-md shadow-lg flex items-center gap-2 animate-pulse">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
<span className="font-sans font-medium">Graph Resolved</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal-on-scroll p-8 rounded-2xl bg-[#0C0C0C] border border-white/5 hover:border-white/10 transition-all group">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">1. Define Action Intent</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Describe <em>what</em> needs to happen, not <em>how</em>. AbstractApex parses the intent into a declarative schema.</p>
</div>

<div className="reveal-on-scroll p-8 rounded-2xl bg-[#0C0C0C] border border-white/5 hover:border-white/10 transition-all group delay-100">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:transfer-horizontal-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">2. Negotiate Capabilities</h3>
<p className="text-sm text-neutral-400 leading-relaxed">The engine checks the wallet's current state. Is it an EOA? Does it support batching? Are modules installed?</p>
</div>

<div className="reveal-on-scroll p-8 rounded-2xl bg-[#0C0C0C] border border-white/5 hover:border-white/10 transition-all group delay-200">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">3. Execute &amp; Upgrade</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Transactions are constructed in the most advanced format available. If policies require it, the account is upgraded JIT.</p>
</div>
</div>
</section>

<section className="py-32 bg-[#080808] border-y border-white/5" id="how-it-works">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">The Unified Action Graph</h2>
<p className="text-neutral-400">One snippet to rule them all.</p>
</div>

<div className="reveal-on-scroll rounded-xl border border-white/10 bg-[#050505] overflow-hidden shadow-2xl">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0C0C0C]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
</div>

<div className="flex gap-1 bg-black/50 p-1 rounded-lg">
<button className="tab-btn px-4 py-1 text-xs font-medium text-white bg-white/10 rounded-md transition-colors" id="btn-t0" onclick="switchTab('t0')">EOA / Tier 0</button>
<button className="tab-btn px-4 py-1 text-xs font-medium text-neutral-500 hover:text-white rounded-md transition-colors" id="btn-t1" onclick="switchTab('t1')">Smart Account</button>
<button className="tab-btn px-4 py-1 text-xs font-medium text-neutral-500 hover:text-white rounded-md transition-colors" id="btn-t3" onclick="switchTab('t3')">Modular</button>
</div>
<div className="w-8"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="p-6 border-b md:border-b-0 md:border-r border-white/5">
<p className="text-xs text-neutral-500 font-mono mb-4 uppercase tracking-widest">Input: Intent</p>
<pre className="font-mono text-xs leading-relaxed text-neutral-300">
<span className="token keyword">const</span> intent = <span className="token keyword">await</span> apex.<span className="token function">create</span>({
  actions: [
    { to: usdc, data: approve },
    { to: vault, data: deposit }
  ],
  policy: {
    gasSponsorship: <span className="token boolean">true</span>,
    spendingLimit: <span className="token string">"100 USDC"</span>
  }
});
</pre>
</div>

<div className="p-6 bg-[#080808]">
<p className="text-xs text-neutral-500 font-mono mb-4 uppercase tracking-widest">Compiled Output</p>

<div className="code-content font-mono text-xs leading-relaxed text-blue-200" id="code-t0">
<span className="token comment">// Fallback: Standard EOA execution</span>
<span className="token keyword">return</span> {
  type: <span className="token string">"eip-1559"</span>,
  <span className="token comment">// Must execute individually :(</span>
  batch: <span className="token boolean">false</span>, 
  steps: [
    { to: usdc, data: approve }, 
    { to: vault, data: deposit }
  ]
};
                            </div>

<div className="code-content hidden font-mono text-xs leading-relaxed text-purple-200" id="code-t1">
<span className="token comment">// Upgrade: EIP-7702 Batch Authorization</span>
<span className="token keyword">return</span> {
  type: <span className="token string">"eip-7702"</span>,
  batch: <span className="token boolean">true</span>,
  auth: {
    contract: <span className="token string">"0xKernel..."</span>,
    signature: <span className="token string">"0x..."</span>
  },
  calls: [approve, deposit] 
};
                            </div>

<div className="code-content hidden font-mono text-xs leading-relaxed text-green-200" id="code-t3">
<span className="token comment">// Advanced: ERC-7579 + Policy Validator</span>
<span className="token keyword">return</span> {
  type: <span className="token string">"user_op"</span>,
  entryPoint: <span className="token string">"v0.7"</span>,
  account: <span className="token string">"0xModular..."</span>,
  callData: <span className="token function">encodeBatch</span>([approve, deposit]),
  signature: <span className="token function">signWithPasskey</span>(cred)
};
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32" id="features">
<div className="flex flex-col md:flex-row gap-16">

<div className="w-full md:w-1/3 md:sticky md:top-32 h-fit">
<h2 className="text-3xl font-medium text-white mb-4 tracking-tight">The Upgrade Lifecycle</h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-8">
                        Most users start as EOAs. AbstractApex upgrades them silently as their needs grow, preserving the address while unlocking capabilities.
                    </p>
<a className="text-white text-sm border-b border-white/30 pb-0.5 hover:border-white transition-colors" href="#">Explore the architecture</a>
</div>

<div className="w-full md:w-2/3 space-y-8">

<div className="reveal-on-scroll p-8 rounded-2xl bg-[#0C0C0C] border border-white/5 relative overflow-hidden">
<div className="absolute right-0 top-0 p-4 opacity-10 text-6xl font-bold text-white">0</div>
<h3 className="text-lg font-medium text-white mb-2">Tier 0: EIP-7702 Superpowers</h3>
<p className="text-sm text-neutral-400 mb-4">Temporarily upgrade an EOA to a smart contract for a single transaction. Batch actions and sponsor gas without permanent migration.</p>
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-[10px] text-white font-mono border border-white/5">CAPABILITY_BATCH_CALL</div>
</div>

<div className="reveal-on-scroll p-8 rounded-2xl bg-[#0C0C0C] border border-white/5 relative overflow-hidden">
<div className="absolute right-0 top-0 p-4 opacity-10 text-6xl font-bold text-white">1</div>
<h3 className="text-lg font-medium text-white mb-2">Tier 1: UserOps Foundation</h3>
<p className="text-sm text-neutral-400 mb-4">Permanent deployment of an ERC-4337 account. Enables session keys, social recovery, and non-blocking interactions.</p>
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-[10px] text-white font-mono border border-white/5">CAPABILITY_PAYMASTER</div>
</div>

<div className="reveal-on-scroll p-8 rounded-2xl bg-[#0C0C0C] border border-white/5 relative overflow-hidden">
<div className="absolute right-0 top-0 p-4 opacity-10 text-6xl font-bold text-white">2</div>
<h3 className="text-lg font-medium text-white mb-2">Tier 2: Modules + Registry</h3>
<p className="text-sm text-neutral-400 mb-4">Install specific plugins from the registry. Spend limits, recurring payments, and DeFi automations.</p>
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-[10px] text-white font-mono border border-white/5">CAPABILITY_MODULE_INSTALL</div>
</div>

<div className="reveal-on-scroll p-8 rounded-2xl bg-gradient-to-br from-[#0C0C0C] to-[#151515] border border-white/10 relative overflow-hidden shadow-lg">
<div className="absolute right-0 top-0 p-4 opacity-10 text-6xl font-bold text-white">3</div>
<h3 className="text-lg font-medium text-white mb-2">Tier 3: Attested Services</h3>
<p className="text-sm text-neutral-400 mb-4">Enterprise-grade compliance. Attested execution, policy-based AI spending, and unified gas vaults.</p>
<div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-mono border border-indigo-500/20">CAPABILITY_POLICY_ROOT</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#080808]">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight">Why AbstractApex Wins</h2>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/10">
<th className="py-4 pl-4 font-normal text-neutral-500 text-sm">Capabilities</th>
<th className="py-4 text-center font-medium text-white text-sm">AbstractApex</th>
<th className="py-4 text-center font-normal text-neutral-500 text-sm">Traditional AA SDKs</th>
<th className="py-4 pr-4 text-center font-normal text-neutral-500 text-sm">WalletConnect/Wagmi</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
<td className="py-4 pl-4 text-neutral-300">Start from EOA without migration</td>
<td className="py-4 text-center text-white"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon></td>
<td className="py-4 text-center text-neutral-600"><iconify-icon icon="solar:close-circle-linear"></iconify-icon></td>
<td className="py-4 text-center text-neutral-600"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
<td className="py-4 pl-4 text-neutral-300">Vendor-agnostic (Safe / Kernel / Biconomy)</td>
<td className="py-4 text-center text-white"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon></td>
<td className="py-4 text-center text-neutral-600"><iconify-icon icon="solar:close-circle-linear"></iconify-icon></td>
<td className="py-4 text-center text-neutral-600"><iconify-icon icon="solar:minus-circle-linear"></iconify-icon></td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
<td className="py-4 pl-4 text-neutral-300">Bundler Failover Routing</td>
<td className="py-4 text-center text-white"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon></td>
<td className="py-4 text-center text-neutral-600"><iconify-icon icon="solar:close-circle-linear"></iconify-icon></td>
<td className="py-4 text-center text-neutral-600"><iconify-icon icon="solar:close-circle-linear"></iconify-icon></td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
<td className="py-4 pl-4 text-neutral-300">Compliance via Signed Attestations</td>
<td className="py-4 text-center text-white"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon></td>
<td className="py-4 text-center text-neutral-600"><iconify-icon icon="solar:close-circle-linear"></iconify-icon></td>
<td className="py-4 text-center text-neutral-600"><iconify-icon icon="solar:close-circle-linear"></iconify-icon></td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32">
<div className="flex justify-center gap-4 mb-16">
<button className="use-case-tab text-sm font-medium px-6 py-2 border-b-2 border-white/20 text-white transition-all" id="tab-dev" onclick="switchUseCase('dev')">Developers</button>
<button className="use-case-tab text-sm font-medium px-6 py-2 border-b-2 border-transparent text-neutral-500 transition-all hover:text-white" id="tab-ent" onclick="switchUseCase('ent')">Enterprises</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-up" id="case-dev">
<div className="p-6 rounded-2xl bg-[#0C0C0C] border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">Consumer Onboarding</h3>
<p className="text-sm text-neutral-400">Sponsor and batch transactions for EOAs immediately using EIP-7702 without forcing a contract deployment.</p>
</div>
<div className="p-6 rounded-2xl bg-[#0C0C0C] border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:shield-keyhole-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">DeFi Power Users</h3>
<p className="text-sm text-neutral-400">Enable passkeys, social recovery, and session keys for high-frequency traders.</p>
</div>
<div className="p-6 rounded-2xl bg-[#0C0C0C] border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:magic-stick-3-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">Agentic UX</h3>
<p className="text-sm text-neutral-400">Policy-based spending for AI agents using Lit Protocol and Programmable Key Pairs.</p>
</div>
</div>

<div className="hidden grid grid-cols-1 md:grid-cols-3 gap-6 animate-up" id="case-ent">
<div className="p-6 rounded-2xl bg-[#0C0C0C] border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:document-add-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">Compliance Shield</h3>
<p className="text-sm text-neutral-400">Enforce KYC/AML checks at the transaction construction level before execution.</p>
</div>
<div className="p-6 rounded-2xl bg-[#0C0C0C] border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:wallet-money-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">Unified Gas Vault</h3>
<p className="text-sm text-neutral-400">Manage gas across 50+ chains from a single ledger and settlement account.</p>
</div>
<div className="p-6 rounded-2xl bg-[#0C0C0C] border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:clipboard-check-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">Audit Trails</h3>
<p className="text-sm text-neutral-400">Complete historical provenance of every policy change and upgraded capability.</p>
</div>
</div>
</section>

<section className="py-32 border-y border-white/5 bg-[#080808]" id="developers">
<div className="max-w-4xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Built for builders.</h2>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> Works natively with viem
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> ERC-4337 v0.6/v0.7 routing
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> Bring your own bundler/paymaster
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> Preview simulation before execute
                            </li>
</ul>
<div className="mt-8 flex gap-4">
<a className="text-white text-sm font-medium border-b border-white hover:border-transparent transition-colors" href="#">Open Documentation</a>
<a className="text-neutral-500 text-sm font-medium hover:text-white transition-colors" href="#">View Reference Integrations</a>
</div>
</div>
<div className="w-full md:w-1/2">
<div className="rounded-xl border border-white/10 bg-[#050505] p-4 shadow-2xl">
<div className="flex gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
<div className="font-mono text-sm">
<div className="flex items-center gap-2 text-neutral-400">
<span className="text-green-400">➜</span>
<span>~</span>
<span className="text-white">npm install @abstractapex/sdk</span>
</div>
<div className="text-neutral-500 mt-2 text-xs">
                                     added 1 package in 0.4s
                                 </div>
<div className="flex items-center gap-2 text-neutral-400 mt-4 animate-pulse">
<span className="text-green-400">➜</span>
<span>~</span>
<span className="w-2 h-4 bg-white/50 inline-block"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="p-6 border-l border-white/10">
<h4 className="text-white font-medium mb-2 text-sm">Graceful Degradation</h4>
<p className="text-xs text-neutral-500">Capability probing ensures the transaction always executes, even if advanced features are unavailable.</p>
</div>
<div className="p-6 border-l border-white/10">
<h4 className="text-white font-medium mb-2 text-sm">Health Checks</h4>
<p className="text-xs text-neutral-500">Real-time bundler monitoring with automated failover routing across 3+ providers.</p>
</div>
<div className="p-6 border-l border-white/10">
<h4 className="text-white font-medium mb-2 text-sm">Replay Protection</h4>
<p className="text-xs text-neutral-500">Attestation verification with expiry and nonce tracking to prevent signature reuse.</p>
</div>
<div className="p-6 border-l border-white/10">
<h4 className="text-white font-medium mb-2 text-sm">Sovereign Escape</h4>
<p className="text-xs text-neutral-500">Timelock escape hatches ensure users can always force-exit their assets directly on-chain.</p>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-[#050505] border-t border-white/5">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 text-center max-w-3xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">
                    Onboard with EIP-7702 today. <br/>
<span className="text-neutral-500">Upgrade when it matters.</span>
</h2>
<p className="text-lg text-neutral-400 font-light mb-10">
                    AbstractApex compiles intents into the best execution format for the user’s current capabilities.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors w-full sm:w-auto">
                        Get API Keys
                    </button>
<button className="h-12 px-8 rounded-full bg-transparent border border-white/10 text-white font-medium hover:bg-white/5 transition-colors w-full sm:w-auto">
                        Contact Sales
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
<div>
<span className="text-lg font-semibold text-white tracking-tight block mb-6">AbstractApex</span>
<p className="text-xs text-neutral-500">
                        © 2024 AbstractApex Inc.<br/>
                        All rights reserved.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Compiler API</a></li>
<li><a className="hover:text-white transition-colors" href="#">Module Registry</a></li>
<li><a className="hover:text-white transition-colors" href="#">Policy Engine</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">GitHub</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
</div>
</footer>

    </>
  );
}
