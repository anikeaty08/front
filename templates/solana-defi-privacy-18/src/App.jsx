import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
navy: {
900: '#0A2342',
800: '#0f2d52',
700: '#1E3A5F',
},
gold: {
400: '#F0B429',
500: '#D69E1E',
},
slate: {
850: '#15202B',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-[#F0B429] to-[#b5861e] flex items-center justify-center text-[#0A2342]">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-white">SOLSEAL</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-white transition-colors" href="#privacy-swaps">Swaps</a>
<a className="hover:text-white transition-colors" href="#institutional">Institutional</a>
<a className="hover:text-white transition-colors" href="#security">Security</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-white px-4 py-2 rounded border border-white/20 hover:bg-white/5 transition-colors" href="#">
                    Launch App
                    <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<button className="gold-gradient text-[#0A2342] px-5 py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity">
                    Request Access
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern opacity-20 z-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[#1E3A5F] opacity-20 blur-[120px] rounded-full z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#F0B429] mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-[#F0B429] animate-pulse"></span>
                Hidden Balances • Not Just Mixer Obfuscation • Regulatory Compliant
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight">
                True Privacy for <br/>
<span className="text-gradient">Solana DeFi</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Encrypted balance vaults for confidential swaps and institutional yields. The privacy layer for the high-performance economy.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto gold-gradient text-[#0A2342] px-8 py-3.5 rounded text-sm font-semibold hover:shadow-[0_0_20px_rgba(240,180,41,0.3)] transition-all flex items-center justify-center gap-2" href="#">
                    Try Privacy Swaps
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded text-sm font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2" href="#institutional">
                    Institutional Access
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#081b33]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Not a Mixer. A Private Bank Vault.</h2>
<p className="text-slate-400 max-w-2xl mx-auto">Traditional privacy tools only obscure the path. SolSeal encrypts the asset itself.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

<div className="p-8 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3 mb-6 text-slate-400">
<iconify-icon icon="solar:round-transfer-horizontal-linear" width="24"></iconify-icon>
<h3 className="text-lg font-medium">Traditional Mixers</h3>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-400">
<iconify-icon className="text-red-400/80" icon="solar:eye-linear"></iconify-icon>
<span className="text-sm">Visible deposit amounts</span>
</li>
<li className="flex items-center gap-3 text-slate-400">
<iconify-icon className="text-red-400/80" icon="solar:eye-linear"></iconify-icon>
<span className="text-sm">Visible withdrawal amounts</span>
</li>
<li className="flex items-center gap-3 text-slate-400">
<iconify-icon className="text-slate-500" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-sm">No persistent encrypted balances</span>
</li>
<li className="flex items-center gap-3 text-slate-400">
<iconify-icon className="text-slate-500" icon="solar:wallet-linear"></iconify-icon>
<span className="text-sm">Locked to specific wallet address</span>
</li>
</ul>
</div>

<div className="p-8 rounded-xl border border-[#F0B429]/30 bg-[#F0B429]/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon className="text-[#F0B429]" icon="solar:shield-check-bold" width="100"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-6 text-white">
<iconify-icon className="text-[#F0B429]" icon="solar:safe-square-linear" width="24"></iconify-icon>
<h3 className="text-lg font-medium">SolSeal Encrypted Vaults</h3>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-[#F0B429]" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm font-medium">Hidden deposit &amp; withdrawal amounts</span>
</li>
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-[#F0B429]" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm font-medium">Hidden internal balances</span>
</li>
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-[#F0B429]" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm font-medium">Hidden internal transfers</span>
</li>
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-[#F0B429]" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm font-medium">Secret key ownership (Any wallet access)</span>
</li>
</ul>
</div>
</div>
<div className="mt-12 text-center">
<div className="inline-block p-4 bg-[#0A2342] border border-white/10 rounded-lg max-w-2xl">
<p className="text-sm text-slate-300">
<span className="text-[#F0B429] font-medium">Key Insight:</span> SolSeal provides permanently encrypted balances. Outsiders cannot see amounts — ever. Not at deposit, not during use, not at withdrawal.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="how-it-works">
<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-16 text-center">Your Private Bank Vault on Solana</h2>
<div className="grid md:grid-cols-4 gap-6">

<div className="glass-card p-6 rounded-xl hover:border-[#F0B429]/50 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-[#1E3A5F] flex items-center justify-center text-white font-semibold mb-4 group-hover:text-[#F0B429] transition-colors">1</div>
<h4 className="text-white font-medium mb-2">Deposit to Encrypt</h4>
<p className="text-slate-400 text-xs leading-relaxed">
                        SOL/USDC enters vault and becomes ciphertext. Amount instantly becomes invisible to blockchain observers.
                    </p>
</div>

<div className="glass-card p-6 rounded-xl hover:border-[#F0B429]/50 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-[#1E3A5F] flex items-center justify-center text-white font-semibold mb-4 group-hover:text-[#F0B429] transition-colors">2</div>
<h4 className="text-white font-medium mb-2">Operate Privately</h4>
<p className="text-slate-400 text-xs leading-relaxed">
                        Swap, send, or earn yield. ElGamal homomorphic encryption allows operations on encrypted data without revealing values.
                    </p>
</div>

<div className="glass-card p-6 rounded-xl hover:border-[#F0B429]/50 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-[#1E3A5F] flex items-center justify-center text-white font-semibold mb-4 group-hover:text-[#F0B429] transition-colors">3</div>
<h4 className="text-white font-medium mb-2">Key-Based Access</h4>
<p className="text-slate-400 text-xs leading-relaxed">
                        Your vault is controlled by a secret key, not a wallet address. Share keys for treasury management or multisig access.
                    </p>
</div>

<div className="glass-card p-6 rounded-xl hover:border-[#F0B429]/50 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-[#1E3A5F] flex items-center justify-center text-white font-semibold mb-4 group-hover:text-[#F0B429] transition-colors">4</div>
<h4 className="text-white font-medium mb-2">Withdraw Anytime</h4>
<p className="text-slate-400 text-xs leading-relaxed">
                        Zero-knowledge proofs verify withdrawal validity without exposing amounts. No "exit nodes" leaking data.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#051120]" id="privacy-swaps">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-[#F0B429] font-medium text-xs tracking-widest uppercase mb-2 block">One Infrastructure • Two Applications</span>
<h2 className="text-3xl font-semibold text-white">Privacy Infrastructure for Everyone</h2>
</div>
<div className="grid md:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden bg-[#0A2342]">

<div className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-colors relative group">
<div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-[10px] font-bold text-green-400 border border-green-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                        LIVE NOW
                    </div>
<div className="mb-6 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:refresh-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">Privacy Swaps</h3>
<p className="text-slate-400 mb-8 h-12">Trade without exposing your positions or amounts to front-runners and trackers.</p>
<div className="space-y-4 mb-10">
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-slate-300">Swap tokens with hidden amounts</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-slate-300">Internal transfers between vaults</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-slate-300">Avoid MEV and front-running</span>
</div>
</div>
<a className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-[#F0B429] hover:border-[#F0B429] transition-colors text-sm font-medium" href="#">
                        Launch Swap App <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="p-10 md:p-12 hover:bg-white/[0.02] transition-colors relative" id="institutional">
<div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F0B429]/10 text-[10px] font-bold text-[#F0B429] border border-[#F0B429]/20">
                        INSTITUTIONAL
                    </div>
<div className="mb-6 w-12 h-12 rounded-full bg-[#F0B429]/10 flex items-center justify-center text-[#F0B429]">
<iconify-icon icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">Privacy Yield</h3>
<p className="text-slate-400 mb-8 h-12">Earn DeFi yields from Kamino &amp; Jupiter without exposing your treasury positions.</p>
<div className="space-y-4 mb-10">
<div className="flex items-start gap-3">
<iconify-icon className="text-[#F0B429] mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-slate-300">Access 8-15% APY with encrypted balances</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#F0B429] mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-slate-300">Regulatory viewing keys for audits</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#F0B429] mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-slate-300">AML/OFAC Compliance Screening</span>
</div>
</div>
<button className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-[#F0B429] hover:border-[#F0B429] transition-colors text-sm font-medium">
                        Request Access <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="mt-8 text-center">
<p className="text-xs text-slate-500 uppercase tracking-wider">Same encrypted vault technology. Different applications.</p>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-[#081b33]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-semibold mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    PROOF OF TECHNOLOGY
                </div>
<h2 className="text-3xl font-semibold text-white mb-6">Privacy Swaps: Live on Mainnet</h2>
<p className="text-slate-400 mb-8 max-w-lg">
                    The infrastructure is already proving itself. Users are trading with hidden amounts today. Institutions get this same battle-tested cryptography with added compliance layers.
                </p>
<div className="grid grid-cols-3 gap-8 mb-8">
<div>
<div className="text-2xl font-bold text-white">100%</div>
<div className="text-xs text-slate-500">Uptime</div>
</div>
<div>
<div className="text-2xl font-bold text-white">O(1)</div>
<div className="text-xs text-slate-500">Balance Discovery</div>
</div>
<div>
<div className="text-2xl font-bold text-white">0</div>
<div className="text-xs text-slate-500">Relayers</div>
</div>
</div>
<a className="text-sm font-semibold text-[#F0B429] hover:text-white transition-colors" href="#">
                    Try Privacy Swaps Now →
                </a>
</div>
<div className="flex-1 w-full">
<div className="glass-card p-6 rounded-xl border-l-4 border-l-blue-500 relative">
<iconify-icon className="text-blue-500/50 absolute top-6 right-6 text-4xl" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-slate-300 italic mb-4 relative z-10">
                        "Finally, real privacy on Solana. Not just mixing deposits and withdrawals — actual hidden balances that stay hidden while you use them."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div className="text-sm">
<div className="text-white font-medium">@SolanaWhale</div>
<div className="text-slate-500 text-xs">Beta User</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="institutional-yield">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Institutional-Grade Privacy for Yields</h2>
<p className="text-slate-400">SolSeal privacy pools deploy encrypted capital to established Solana protocols.</p>
</div>

<div className="bg-[#0f2d52] border border-white/5 rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
<div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 relative z-10">
<div className="text-center w-full md:w-1/4">
<div className="bg-[#1E3A5F] border border-white/10 p-5 rounded-xl mb-4">
<iconify-icon className="text-white text-3xl mb-2" icon="solar:safe-square-linear"></iconify-icon>
<div className="text-white font-medium text-sm">Encrypted Vault</div>
</div>
<div className="text-[10px] text-slate-400 uppercase tracking-widest">Your Capital</div>
</div>
<div className="hidden md:flex flex-col items-center text-slate-500">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
<div className="text-center w-full md:w-1/3 relative">
<div className="absolute -inset-1 bg-gradient-to-r from-[#F0B429]/20 to-[#F0B429]/5 blur-lg rounded-xl"></div>
<div className="bg-[#0A2342] border border-[#F0B429]/50 p-5 rounded-xl relative shadow-xl">
<div className="text-[#F0B429] font-semibold text-sm">Privacy Pool</div>
<div className="text-[10px] text-slate-400 mt-1">Aggregation Layer</div>
</div>
</div>
<div className="hidden md:flex flex-col items-center text-slate-500">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
<div className="text-center w-full md:w-1/4">
<div className="bg-[#1E3A5F] border border-white/10 p-5 rounded-xl mb-4">
<div className="flex justify-center gap-2 text-slate-300 mb-2">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<div className="text-white font-medium text-sm">Yield Protocol</div>
</div>
<div className="text-[10px] text-slate-400 uppercase tracking-widest">Kamino / Jupiter</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6 mb-16">

<div className="glass-card p-6 rounded-xl">
<div className="flex justify-between items-start mb-4">
<h3 className="text-white font-semibold">Kamino</h3>
<span className="text-[#F0B429] text-sm font-bold">8-12% APY</span>
</div>
<p className="text-slate-400 text-xs mb-4">Lending &amp; Liquidity markets. $3.7B+ TVL.</p>
<div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-slate-400"></div>
</div>
</div>

<div className="glass-card p-6 rounded-xl">
<div className="flex justify-between items-start mb-4">
<h3 className="text-white font-semibold">Marinade</h3>
<span className="text-[#F0B429] text-sm font-bold">6-8% APY</span>
</div>
<p className="text-slate-400 text-xs mb-4">Liquid Staking SOL. $2.2B+ TVL.</p>
<div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-slate-400"></div>
</div>
</div>

<div className="glass-card p-6 rounded-xl">
<div className="flex justify-between items-start mb-4">
<h3 className="text-white font-semibold">Jupiter</h3>
<span className="text-[#F0B429] text-sm font-bold">10-15% APY</span>
</div>
<p className="text-slate-400 text-xs mb-4">Perpetual LP Yields. $1.65B+ TVL.</p>
<div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
<div className="w-4/5 h-full bg-slate-400"></div>
</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8">
<div className="p-6 border border-white/5 rounded-xl bg-[#0A2342]">
<div className="text-xs text-[#F0B429] font-medium uppercase tracking-wider mb-2">Corporate Treasury</div>
<div className="text-white font-bold text-lg mb-2">$200M Reserve</div>
<p className="text-slate-400 text-sm">Earn yield on operational cash without signaling positions to M&amp;A targets or competitors.</p>
</div>
<div className="p-6 border border-white/5 rounded-xl bg-[#0A2342]">
<div className="text-xs text-[#F0B429] font-medium uppercase tracking-wider mb-2">Market Maker</div>
<div className="text-white font-bold text-lg mb-2">$500M Vol/Day</div>
<p className="text-slate-400 text-sm">Execute strategies without front-running losses. Protect order flow info from MEV bots.</p>
</div>
<div className="p-6 border border-white/5 rounded-xl bg-[#0A2342]">
<div className="text-xs text-[#F0B429] font-medium uppercase tracking-wider mb-2">Quant Fund</div>
<div className="text-white font-bold text-lg mb-2">Alpha Guard</div>
<p className="text-slate-400 text-sm">Keep proprietary strategies hidden. Prevent copy-trading and maintain edge duration.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#081b33]" id="security">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-semibold text-white mb-8">Battle-Tested Infrastructure</h2>
<ul className="space-y-6">
<li className="flex gap-4">
<div className="w-10 h-10 rounded bg-[#1E3A5F] flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">ElGamal Encryption</h4>
<p className="text-sm text-slate-400 mt-1">Homomorphic properties allow interest calculation directly on encrypted balances without decryption.</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-10 h-10 rounded bg-[#1E3A5F] flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Groth16 ZK Proofs</h4>
<p className="text-sm text-slate-400 mt-1">Constant-size proofs (~200 bytes) ensure maximum efficiency and 400ms finality on Solana.</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-10 h-10 rounded bg-[#1E3A5F] flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:key-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Secret Key Ownership</h4>
<p className="text-sm text-slate-400 mt-1">Wallet-independent access. Your key decrypts your balance from any interface.</p>
</div>
</li>
</ul>
</div>

<div>
<h2 className="text-2xl font-semibold text-white mb-8">Privacy with Auditability</h2>
<div className="glass-card p-8 rounded-xl border-l-4 border-l-[#F0B429]">
<p className="text-white font-medium mb-4">Built for the GENIUS &amp; CLARITY Acts</p>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            We separate market privacy from regulatory transparency. SolSeal allows for selective disclosure of transaction history to authorized parties.
                        </p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 p-3 rounded text-xs text-slate-300 flex items-center gap-2">
<iconify-icon className="text-[#F0B429]" icon="solar:eye-linear"></iconify-icon> Viewing Keys
                            </div>
<div className="bg-white/5 p-3 rounded text-xs text-slate-300 flex items-center gap-2">
<iconify-icon className="text-[#F0B429]" icon="solar:file-check-linear"></iconify-icon> AML Screening
                            </div>
</div>
</div>
<div className="mt-6 flex gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1"><iconify-icon className="text-green-500" icon="solar:shield-check-linear"></iconify-icon> Audited by Trail of Bits</span>
<span className="flex items-center gap-1"><iconify-icon className="text-green-500" icon="solar:shield-check-linear"></iconify-icon> Audited by Zellic</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-white mb-10 text-center">True Privacy, Not Obfuscation</h2>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-500">
<th className="py-4 px-4 font-medium">Feature</th>
<th className="py-4 px-4 font-medium text-red-400/80">Traditional Mixers</th>
<th className="py-4 px-4 font-medium text-[#F0B429]">SolSeal Vaults</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-white/5 hover:bg-white/[0.02]">
<td className="py-4 px-4 text-slate-300">Deposit Amounts Visible?</td>
<td className="py-4 px-4 text-red-400/80"><iconify-icon className="inline mr-1" icon="solar:check-circle-linear"></iconify-icon> Yes</td>
<td className="py-4 px-4 text-[#F0B429]"><iconify-icon className="inline mr-1" icon="solar:close-circle-linear"></iconify-icon> Encrypted</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02]">
<td className="py-4 px-4 text-slate-300">Withdrawal Amounts Visible?</td>
<td className="py-4 px-4 text-red-400/80"><iconify-icon className="inline mr-1" icon="solar:check-circle-linear"></iconify-icon> Yes</td>
<td className="py-4 px-4 text-[#F0B429]"><iconify-icon className="inline mr-1" icon="solar:close-circle-linear"></iconify-icon> Encrypted</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02]">
<td className="py-4 px-4 text-slate-300">Internal Balances?</td>
<td className="py-4 px-4 text-slate-500">N/A (No balances)</td>
<td className="py-4 px-4 text-[#F0B429]"><iconify-icon className="inline mr-1" icon="solar:close-circle-linear"></iconify-icon> Encrypted</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02]">
<td className="py-4 px-4 text-slate-300">Persistent Privacy?</td>
<td className="py-4 px-4 text-slate-500">Only during mix</td>
<td className="py-4 px-4 text-[#F0B429]"><iconify-icon className="inline mr-1" icon="solar:check-circle-linear"></iconify-icon> Always Encrypted</td>
</tr>
<tr className="hover:bg-white/[0.02]">
<td className="py-4 px-4 text-slate-300">Can Share Ownership?</td>
<td className="py-4 px-4 text-slate-500"><iconify-icon className="inline mr-1" icon="solar:close-circle-linear"></iconify-icon> No</td>
<td className="py-4 px-4 text-[#F0B429]"><iconify-icon className="inline mr-1" icon="solar:check-circle-linear"></iconify-icon> Yes (Key Sharing)</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-white mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-8">
<div>
<h4 className="text-white font-medium mb-2">How is this different from Tornado Cash?</h4>
<p className="text-slate-400 text-sm leading-relaxed">
                    Mixers obscure the link between deposit and withdrawal, but amounts remain visible. SolSeal encrypts balances—observers never see amounts at any stage. Additionally, SolSeal has compliance built-in via viewing keys and AML screening.
                </p>
</div>
<div>
<h4 className="text-white font-medium mb-2">Can I use the same SolSeal vault from different wallets?</h4>
<p className="text-slate-400 text-sm leading-relaxed">
                    Yes. Your vault is controlled by a secret key, not a specific wallet address. You can access your encrypted balance from any Solana wallet as long as you possess the key.
                </p>
</div>
<div>
<h4 className="text-white font-medium mb-2">Where do the yields come from?</h4>
<p className="text-slate-400 text-sm leading-relaxed">
                    Established Solana protocols like Kamino, Marinade, and Jupiter. SolSeal provides privacy infrastructure—we do not generate yield ourselves. The yield sources are proven DeFi protocols with billions in TVL.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#0A2342] to-[#05152a] px-6">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

<div className="text-center md:text-left md:pr-12 md:border-r border-white/10">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Start Using Privacy Swaps</h2>
<p className="text-slate-400 mb-8">Trade with encrypted balances on Solana mainnet today. No waiting list.</p>
<a className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/20 text-white w-full md:w-auto px-8 py-3 rounded font-medium hover:bg-white/10 transition-colors" href="#">
                    Launch Swap App <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div>
<div className="glass-card p-8 rounded-xl border border-[#F0B429]/20">
<h3 className="text-xl font-semibold text-white mb-2">Request Institutional Access</h3>
<p className="text-sm text-slate-400 mb-6">Join the waitlist for compliant privacy yield infrastructure.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-[#15202B] border border-slate-700 rounded p-3 text-sm text-white focus:outline-none focus:border-[#F0B429]" placeholder="Name" type="text"/>
<input className="w-full bg-[#15202B] border border-slate-700 rounded p-3 text-sm text-white focus:outline-none focus:border-[#F0B429]" placeholder="Institution" type="text"/>
</div>
<input className="w-full bg-[#15202B] border border-slate-700 rounded p-3 text-sm text-white focus:outline-none focus:border-[#F0B429]" placeholder="Work Email" type="email"/>
<button className="w-full gold-gradient text-[#0A2342] font-semibold py-3 rounded hover:opacity-90 transition-opacity" type="button">
                            Request Early Access
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#051120]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-[#F0B429] to-[#b5861e] flex items-center justify-center text-[#0A2342]">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-white">SOLSEAL</span>
</div>
<p className="text-slate-500 text-sm max-w-xs">
                    Privacy Infrastructure Built on Solana.
                </p>
<div className="flex gap-4 mt-6 text-slate-400">
<a className="hover:text-white" href="#"><iconify-icon icon="line-md:twitter-x"></iconify-icon></a>
<a className="hover:text-white" href="#"><iconify-icon icon="line-md:github"></iconify-icon></a>
<a className="hover:text-white" href="#"><iconify-icon icon="line-md:discord"></iconify-icon></a>
</div>
</div>
<div className="flex gap-16 text-sm">
<div>
<h5 className="text-white font-medium mb-4">Product</h5>
<ul className="space-y-2 text-slate-400">
<li><a className="hover:text-[#F0B429]" href="#">Privacy Swaps</a></li>
<li><a className="hover:text-[#F0B429]" href="#">Privacy Yield</a></li>
<li><a className="hover:text-[#F0B429]" href="#">How It Works</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4">Resources</h5>
<ul className="space-y-2 text-slate-400">
<li><a className="hover:text-[#F0B429]" href="#">Whitepaper</a></li>
<li><a className="hover:text-[#F0B429]" href="#">Audits</a></li>
<li><a className="hover:text-[#F0B429]" href="#">Docs</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4">Legal</h5>
<ul className="space-y-2 text-slate-400">
<li><a className="hover:text-[#F0B429]" href="#">Terms</a></li>
<li><a className="hover:text-[#F0B429]" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center md:text-left text-xs text-slate-600">
            © 2026 SolSeal Protocol. All rights reserved.
        </div>
</footer>

    </>
  );
}
