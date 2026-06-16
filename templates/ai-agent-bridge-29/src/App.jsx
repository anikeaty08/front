import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="scanline"></div>
<div className="fixed inset-0 grid-bg pointer-events-none -z-10"></div>

<header className="h-16 border-b border-[#222] bg-black/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-40">
<a className="flex items-center gap-2 group cursor-pointer text-white hover:opacity-80 transition-opacity" href="#">
<div className="w-8 h-8 bg-[#ff3333] flex items-center justify-center border border-[#ff3333] group-hover:bg-transparent transition-colors">
<iconify-icon className="text-white group-hover:text-[#ff3333]" icon="solar:shield-warning-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col leading-none">
<span className="font-display font-semibold text-lg tracking-tight">CLAWKED</span>
<span className="text-[9px] text-[#666] font-mono tracking-widest">PRIVACY LAYER</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-8 text-xs font-mono font-medium text-[#888]">
<a className="hover:text-white transition-colors" href="#features">CAPABILITIES</a>
<a className="hover:text-white transition-colors" href="#how-it-works">FLOW</a>
<a className="hover:text-white transition-colors" href="#api">INTEGRATION</a>
<a className="text-[#ff3333] hover:underline" href="https://docs.ceaser.org" target="_blank">DOCS ↗</a>
</nav>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 text-[10px] text-[#444] border border-[#222] px-2 py-1 rounded bg-[#111]">
<span className="w-1.5 h-1.5 rounded-full bg-[#ff3333] animate-pulse"></span>
<span>GATEWAY ACTIVE</span>
</div>
<a className="bg-white hover:bg-[#ff3333] text-black hover:text-white px-4 py-2 text-xs font-semibold font-mono transition-colors flex items-center gap-2" href="#">
<iconify-icon icon="solar:wallet-linear" width="14"></iconify-icon>
                CONNECT
             </a>
</div>
</header>
<main className="flex-1">

<section className="relative pt-24 pb-20 px-6 border-b border-[#222]">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 border border-[#333] bg-[#333]/10 px-3 py-1 text-[10px] text-[#ff3333] font-mono mb-2">
<iconify-icon icon="solar:code-circle-linear"></iconify-icon>
                        Open Claw Ecosystem V1 Ready
                    </div>
<h1 className="text-5xl md:text-7xl font-display font-semibold text-white leading-[0.9] tracking-tighter">
                        THE PRIVACY LAYER FOR<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3333] to-[#ff8800]">OPEN CLAW</span>.
                    </h1>
<p className="text-lg text-[#888] max-w-lg leading-relaxed font-light">
                        Your agents are already working. Now make them invisible. Dedicated anonymity for payments, DeFi, and inter-agent communication via the x402 protocol.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="bg-[#ff3333] text-white px-6 py-3.5 text-sm font-semibold font-mono hover:bg-[#d61f1f] transition-colors flex items-center justify-center gap-2" href="#api">
                            Documentation
                            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<div className="bg-transparent border border-[#333] text-white px-6 py-3.5 text-sm font-semibold font-mono hover:border-white transition-colors flex items-center justify-center gap-3 cursor-pointer group"><iconify-icon className="text-[#666] group-hover:text-white transition-colors" icon="solar:copy-linear"></iconify-icon>
                             npm i @openclaw/clawked</div>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-[#ff3333] to-[#ff8800] opacity-20 blur group-hover:opacity-40 transition duration-500"></div>
<div className="relative bg-[#0a0a0a] border border-[#333] shadow-2xl overflow-hidden">
<div className="flex items-center justify-between px-4 py-2 bg-[#111] border-b border-[#333]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#ff3333]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#ff8800]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
</div>
<div className="text-[10px] text-[#666] font-mono">agent-cli — open-claw</div>
</div>
<div className="p-6 font-mono text-xs md:text-sm space-y-4"><div className="flex gap-2">
<span className="text-[#ff3333]">➜</span>
<span className="text-[#00e5ff]">~</span>
<span className="text-white">openclaw pay --service aws --privacy x402</span>
</div>
<div className="text-[#666] pl-4">
                                [✔] Accessing Clawked privacy pool...<br/>
                                [✔] Obfuscating source wallet...<br/>
                                [✔] Routing via Universal Bridge...
                            </div>
<div className="flex gap-2 pt-2">
<span className="text-[#ff3333]">➜</span>
<span className="text-[#00e5ff]">~</span>
<span className="text-white">clawked swap --pair ETH/USDC --anom true</span>
</div>
<div className="text-[#666] pl-4">
                                [✔] Generating ZK proof for swap...<br/>
                                [✔] Submitting to relayer...<br/>
</div>
<div className="text-[#ff3333] pl-4">
                                [SUCCESS] Trade executed. Trace: NONE.<br/>
                                Tx Hash: <span className="text-white underline decoration-dashed">0x9c3...2f1</span>
</div>
<div className="flex gap-2 pt-2">
<span className="text-[#ff3333]">➜</span>
<span className="text-[#00e5ff]">~</span>
<span className="blink">_</span>
</div></div>
</div>
</div>
</div>
</section>

<div className="border-b border-[#222] bg-black overflow-hidden">
<div className="flex divide-x divide-[#222]">
<div className="flex-1 py-4 px-6 flex flex-col items-center md:items-start">
<span className="text-[10px] text-[#666] uppercase tracking-widest mb-1">Privatized Volume</span>
<span className="text-xl md:text-2xl font-display font-semibold text-white">$42,891,020</span>
</div>
<div className="flex-1 py-4 px-6 flex flex-col items-center md:items-start">
<span className="text-[10px] text-[#666] uppercase tracking-widest mb-1">Active Agents</span>
<span className="text-xl md:text-2xl font-display font-semibold text-white">14,209</span>
</div>
<div className="flex-1 py-4 px-6 flex flex-col items-center md:items-start">
<span className="text-[10px] text-[#666] uppercase tracking-widest mb-1">Agent Fee/TXO </span>
<span className="text-xl md:text-2xl font-display font-semibold text-[#ff3333]">0.25%</span>
</div>
<div className="hidden md:flex flex-1 py-4 px-6 flex-col items-center md:items-start">
<span className="text-[10px] uppercase text-[#666] tracking-widest mb-1">Revenue utlitsation </span>
<span className="md:text-2xl text-xl font-semibold text-white font-display">75% Buybacks</span>
</div>
</div>
</div>

<section className="py-20 px-6 bg-[#080808]">
<div className="max-w-6xl mx-auto mb-16 text-center md:text-left">
<h2 className="text-3xl font-display font-semibold text-white mb-4">THE MISSING LINK</h2>
<p className="text-[#888] max-w-2xl leading-relaxed">
                    Open Claw solved connectivity. But without privacy, your agents are targets. Payments leak identity, trades are copy-traded, and communications are exposed. <span className="text-white">Clawked is the universal privacy adapter.</span>
</p>
</div>

<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#222] border border-[#222]">

<div className="bg-[#0a0a0a] p-8 group hover:bg-[#111] transition-colors relative overflow-hidden">
<div className="w-10 h-10 rounded bg-[#ff3333]/10 flex items-center justify-center text-[#ff3333] mb-6">
<iconify-icon icon="solar:card-transfer-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">x402 Payment Rails</h3>
<p className="text-sm text-[#888] leading-relaxed">
                        Agents pay for Web2 services through the x402 protocol without exposing wallet identity or transaction history.
                    </p>
</div>

<div className="bg-[#0a0a0a] p-8 group hover:bg-[#111] transition-colors relative overflow-hidden">
<div className="w-10 h-10 rounded bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff] mb-6">
<iconify-icon icon="solar:refresh-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Privacy Swaps</h3>
<p className="text-sm text-[#888] leading-relaxed">
                        Anonymous token swaps and portfolio rebalancing for traders with zero on-chain traceability.
                    </p>
</div>

<div className="bg-[#0a0a0a] p-8 group hover:bg-[#111] transition-colors relative overflow-hidden">
<div className="w-10 h-10 rounded bg-[#ff8800]/10 flex items-center justify-center text-[#ff8800] mb-6">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">ACP — Virtuals</h3>
<p className="text-sm text-[#888] leading-relaxed">
                        Native integration with the Agent Communication Protocol on Virtuals. Communicate and transact privately.
                    </p>
</div>

<div className="bg-[#0a0a0a] p-8 group hover:bg-[#111] transition-colors relative overflow-hidden">
<div className="w-10 h-10 rounded bg-[#ff3333]/10 flex items-center justify-center text-[#ff3333] mb-6">
<iconify-icon icon="solar:incognito-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Identity Shield</h3>
<p className="text-sm text-[#888] leading-relaxed">
                        Interact with external Web2 systems and APIs without revealing personal identity, location, or origin IP.
                    </p>
</div>

<div className="bg-[#0a0a0a] p-8 group hover:bg-[#111] transition-colors relative overflow-hidden">
<div className="w-10 h-10 rounded bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff] mb-6">
<iconify-icon icon="solar:wallet-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Autonomous Wallet</h3>
<p className="text-sm text-[#888] leading-relaxed">
                        Independent treasury management. Agents hold funds and pay for resources independently with privacy preserved.
                    </p>
</div>

<div className="bg-[#0a0a0a] p-8 group hover:bg-[#111] transition-colors relative overflow-hidden">
<div className="w-10 h-10 rounded bg-[#ff8800]/10 flex items-center justify-center text-[#ff8800] mb-6">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Universal Bridge</h3>
<p className="text-sm text-[#888] leading-relaxed">
                        Standardized protocol connecting any EVM chain to any REST API securely.
                    </p>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-[#222] bg-[#050505] relative overflow-hidden" id="how-it-works">

<div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
<div>
<h2 className="text-3xl font-display font-semibold text-white mb-4">THE CLAWKED PIPELINE</h2>
<p className="text-[#666] max-w-xl">From Open Claw agent to executed task, we break the link to ensure total operational security.</p>
</div>
<a className="text-xs font-mono text-[#ff3333] hover:underline flex items-center gap-1 group" href="https://docs.ceaser.org/arch">
                        VIEW SPECS <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="relative">

<div className="hidden md:block absolute top-[40px] left-0 right-0 h-px arch-line z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="relative z-10 group">
<div className="w-20 h-20 bg-[#0a0a0a] border border-[#333] rounded-full flex items-center justify-center mx-auto mb-8 relative group-hover:border-[#ff3333] transition-colors">
<div className="absolute inset-0 bg-[#ff3333]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white group-hover:text-[#ff3333] transition-colors" icon="solar:user-id-linear" width="32"></iconify-icon>
<div className="absolute -bottom-2 bg-[#111] border border-[#333] px-2 py-0.5 text-[9px] text-[#888] rounded">AGENT</div>
</div>
<div className="bg-[#111] border border-[#222] p-6 relative hover:border-[#333] transition-colors">
<h4 className="text-white font-semibold mb-2 flex items-center gap-2">
<span className="text-[#ff3333]">01.</span> Request
                                </h4>
<ul className="space-y-2 text-xs text-[#888] font-mono list-disc list-inside">
<li>Agent initiates task</li>
<li>Calls x402 payment rail</li>
<li>Shields identity</li>
</ul>
</div>
</div>

<div className="relative z-10 group">
<div className="w-20 h-20 bg-[#0a0a0a] border border-[#333] rounded-full flex items-center justify-center mx-auto mb-8 relative group-hover:border-[#00e5ff] transition-colors">
<div className="absolute inset-0 bg-[#00e5ff]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white group-hover:text-[#00e5ff] transition-colors" icon="solar:shield-check-linear" width="32"></iconify-icon>
<div className="absolute -bottom-2 bg-[#111] border border-[#333] px-2 py-0.5 text-[9px] text-[#888] rounded">CLAWKED</div>
</div>
<div className="bg-[#111] border border-[#222] p-6 relative hover:border-[#333] transition-colors">
<h4 className="text-white font-semibold mb-2 flex items-center gap-2">
<span className="text-[#00e5ff]">02.</span> Obfuscation
                                </h4>
<ul className="space-y-2 text-xs text-[#888] font-mono list-disc list-inside">
<li>ZK Proof generation</li>
<li>Mixes funds/data</li>
<li>Routes via ACP/Bridge</li>
</ul>
</div>
</div>

<div className="relative z-10 group">
<div className="w-20 h-20 bg-[#0a0a0a] border border-[#333] rounded-full flex items-center justify-center mx-auto mb-8 relative group-hover:border-[#ff8800] transition-colors">
<div className="absolute inset-0 bg-[#ff8800]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white group-hover:text-[#ff8800] transition-colors" icon="solar:server-square-linear" width="32"></iconify-icon>
<div className="absolute -bottom-2 bg-[#111] border border-[#333] px-2 py-0.5 text-[9px] text-[#888] rounded">TARGET</div>
</div>
<div className="bg-[#111] border border-[#222] p-6 relative hover:border-[#333] transition-colors">
<h4 className="text-white font-semibold mb-2 flex items-center gap-2">
<span className="text-[#ff8800]">03.</span> Execution
                                </h4>
<ul className="space-y-2 text-xs text-[#888] font-mono list-disc list-inside">
<li>API/DeFi call executes</li>
<li>Origin untraceable</li>
<li>Result returned securely</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#050505]" id="api">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl font-display font-semibold text-white mb-6">INTEGRATION SDK</h2>
<p className="text-[#888] mb-8 text-sm leading-relaxed">
                        Add the privacy layer to your Open Claw agents in minutes. Our SDK handles the x402 compliance and ACP routing automatically.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center shrink-0 text-[#ff3333] text-xs font-mono">1</div>
<div>
<h4 className="text-white font-semibold text-sm">Install Package</h4>
<p className="text-xs text-[#666] mt-1">npm install @openclaw/clawked</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center shrink-0 text-[#ff3333] text-xs font-mono">2</div>
<div>
<h4 className="text-white font-semibold text-sm">Configure Agent</h4>
<p className="text-xs text-[#666] mt-1">Set privacy mode to 'strict' in your agent config.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center shrink-0 text-[#ff3333] text-xs font-mono">3</div>
<div>
<h4 className="text-white font-semibold text-sm">Deploy</h4>
<p className="text-xs text-[#666] mt-1">Your agent now routes all sensitive ops through Clawked.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="text-white border-b border-[#ff3333] pb-0.5 hover:text-[#ff3333] text-sm font-mono" href="https://docs.ceaser.org">Read Full Documentation -&gt;</a>
</div>
</div>

<div className="rounded-lg border border-[#333] bg-[#0a0a0a] overflow-hidden shadow-2xl">
<div className="flex items-center gap-4 px-4 py-3 bg-[#111] border-b border-[#333]">
<span className="text-[10px] text-[#ff3333] font-mono">agent.js</span>
<div className="ml-auto flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-[#333]"></div>
<div className="w-2 h-2 rounded-full bg-[#333]"></div>
</div>
</div>
<div className="p-6 overflow-x-auto">
<pre className="font-mono text-xs leading-relaxed"><span className="text-[#888]">// Import Clawked Privacy Layer</span>
<span className="text-[#c792ea]">import</span> { <span className="token-num">ClawkedAgent</span> } <span className="text-[#c792ea]">from</span> <span className="token-str">'@openclaw/clawked'</span>;

<span className="text-[#888]">// Initialize anonymous agent</span>
<span className="text-[#c792ea]">const</span> agent = <span className="text-[#c792ea]">new</span> <span className="token-num">ClawkedAgent</span>({
  <span className="token-key">network</span>: <span className="token-str">"virtuals"</span>,
  <span className="token-key">privacy</span>: <span className="token-str">"x402"</span>,
  <span className="token-key">mode</span>: <span className="token-str">"autonomous"</span>
});

<span className="text-[#888]">// Execute private swap via ACP</span>
<span className="text-[#c792ea]">await</span> agent.<span className="token-num">trade</span>({
  <span className="token-key">pair</span>: <span className="token-str">"ETH/USDC"</span>,
  <span className="token-key">amount</span>: <span className="token-num">1000</span>,
  <span className="token-key">strategy</span>: <span className="token-str">"dark_pool"</span>
});

<span className="text-[#888]">// Output:</span>
<span className="text-[#666]">/*
 &gt; Privacy Swap Initiated
 &gt; Proof Generated: 0x9f1a...
 &gt; Status: SETTLED (Untraceable)
*/</span></pre>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-[#222]">
<div className="max-w-4xl mx-auto text-center px-6">
<h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6 uppercase tracking-tight">GO DARK. STAY AGENTIC.</h2>
<p className="text-[#888] mb-8">Join the ecosystem of autonomous agents using x402 privacy.</p>
<div className="flex justify-center gap-4">
<button className="bg-white text-black px-8 py-3 font-semibold font-mono text-sm hover:bg-[#ff3333] hover:text-white transition-colors">INIT GATEWAY</button>
<button className="border border-[#333] text-white px-8 py-3 font-semibold font-mono text-sm hover:border-white transition-colors">GITHUB</button>
</div>
</div>
</section>
</main>

<footer className="border-t border-[#222] bg-[#050505] py-12 px-6 text-xs font-mono">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
<div className="space-y-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#ff3333]" icon="solar:shield-warning-linear"></iconify-icon>
<span className="font-semibold text-white">CLAWKED</span>
</div>
<p className="text-[#666] max-w-xs">The privacy layer for Open Claw. Secure infrastructure for the autonomous economy.</p>
</div>
<div className="flex gap-16">
<div className="space-y-3">
<h4 className="text-white font-semibold">Protocol</h4>
<a className="block text-[#666] hover:text-[#ff3333]" href="#">x402 Specs</a>
<a className="block text-[#666] hover:text-[#ff3333]" href="#">ACP Integration</a>
<a className="block text-[#666] hover:text-[#ff3333]" href="#">Audits</a>
</div>
<div className="space-y-3">
<h4 className="text-white font-semibold">Developers</h4>
<a className="block text-[#666] hover:text-[#ff3333]" href="https://docs.ceaser.org">Documentation</a>
<a className="block text-[#666] hover:text-[#ff3333]" href="#">Github</a>
<a className="block text-[#666] hover:text-[#ff3333]" href="#">SDK</a>
</div>
<div className="space-y-3">
<h4 className="text-white font-semibold">Legal</h4>
<a className="block text-[#666] hover:text-[#ff3333]" href="#">Terms</a>
<a className="block text-[#666] hover:text-[#ff3333]" href="#">Privacy</a>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-[#222] flex justify-between text-[#444]">
<span>© 2024 CLAWKED</span>
<span>SYSTEM STATUS: <span className="text-[#ff3333]">OPERATIONAL</span></span>
</div>
</footer>

    </>
  );
}
