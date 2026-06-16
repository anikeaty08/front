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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
bg: '#080808',
surface: '#111111',
surfaceHighlight: '#1A1A1A',
border: '#27272a', // zinc-800
primary: '#ffffff',
secondary: '#a1a1aa', // zinc-400
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // FAQ Toggle Logic
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('svg');
            
            // Close other open FAQs
            const allContents = document.querySelectorAll('.pb-6');
            allContents.forEach(c => {
                if (c !== content && !c.classList.contains('hidden')) {
                    c.classList.add('hidden');
                    // Reset icon of other buttons (assuming previous sibling is the button)
                    const otherBtn = c.previousElementSibling;
                    const otherIcon = otherBtn.querySelector('svg');
                    // Reset to plus icon logic if needed, or just rotation
                    otherIcon.style.transform = 'rotate(0deg)'; 
                }
            });

            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(45deg)'; // Rotate plus to x
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#080808]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2.5">

<div className="w-5 h-5 bg-white rounded-sm"></div>
<span className="text-sm font-semibold tracking-tight text-white">ShadowKey</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#how-it-works">Methodology</a>
<a className="hover:text-white transition-colors" href="#comparison">Comparison</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">Log In</a>

<button className="btn-base bg-white text-black h-9 px-5 rounded-full text-xs font-semibold hover:bg-zinc-200 active:scale-95">
                    Launch App
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden">
<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-[11px] font-medium tracking-wide uppercase mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                The 2026 Privacy Standard
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white max-w-4xl mx-auto mb-8 leading-[1]">
                Invisible Wealth.<br/>
<span className="text-zinc-600">Total Sovereignty.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                The first institutional-grade privacy wallet. Receive with stealth addresses, yield automatically, and spend without leaving a trace.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">

<button className="w-full sm:w-auto btn-base bg-white text-black h-11 px-8 rounded-full text-sm font-semibold hover:bg-zinc-200 active:scale-95 flex items-center justify-center gap-2">
                    Get Started
                </button>

<button className="w-full sm:w-auto btn-base bg-transparent border border-zinc-800 text-zinc-300 h-11 px-8 rounded-full text-sm font-medium hover:text-white hover:border-zinc-600 active:scale-95 flex items-center justify-center gap-2">
                    View Documentation
                </button>
</div>

<div className="mt-24 flex flex-col items-center gap-6">
<p className="text-[10px] text-zinc-600 uppercase tracking-widest font-semibold">Technical Integrations</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-30 grayscale">

<span className="font-semibold text-lg tracking-tight font-sans">RAILGUN</span>
<span className="font-semibold text-lg tracking-tight font-sans">ARBITRUM</span>
<span className="font-semibold text-lg tracking-tight font-sans">BASE</span>
<span className="font-semibold text-lg tracking-tight font-sans">UNISWAP</span>
<span className="font-semibold text-lg tracking-tight font-sans">AAVE</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-surface/30">
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">
                    The Transparency Trap
                </h2>
<div className="space-y-6 text-zinc-400 leading-7 font-light">
<p>
                        Blockchains are public ledgers. Every salary payment, trade, and transfer creates a permanent, searchable history linked to your identity.
                    </p>
<p>
                        Existing solutions are fragmented. Mixers are non-compliant, and first-generation stealth wallets fail to protect your outgoing transactions.
                    </p>
<p className="text-white font-medium">
                        ShadowKey provides end-to-end anonymity through advanced cryptography, not obscurity.
                    </p>
</div>
</div>

<div className="relative border border-white/5 bg-black rounded-xl p-8 shadow-2xl">

<div className="absolute left-8 top-16 bottom-16 w-px border-l border-dashed border-zinc-800"></div>
<div className="space-y-8 relative">

<div className="flex items-start gap-4 opacity-50">
<div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 z-10 border border-black mt-1">
<i className="w-3 h-3 text-zinc-500" data-lucide="eye"></i>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium text-zinc-300">Standard Wallet</span>
<span className="text-xs font-mono text-zinc-600">PUBLIC</span>
</div>
<div className="h-2 bg-zinc-900 rounded-full w-full overflow-hidden">
<div className="h-full bg-zinc-800 w-3/4"></div>
</div>
<div className="mt-2 flex gap-2 text-[10px] font-mono text-zinc-600">
<span>0x71C...9A2</span>
<span>→</span>
<span>History Exposed</span>
</div>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 z-10 border border-black mt-1">
<i className="w-3 h-3 text-black" data-lucide="shield"></i>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium text-white">ShadowKey Protocol</span>
<span className="text-xs font-mono text-white">ENCRYPTED</span>
</div>
<div className="h-2 bg-zinc-900 rounded-full w-full overflow-hidden">
<div className="h-full bg-white w-full"></div>
</div>
<div className="mt-2 flex gap-2 text-[10px] font-mono text-zinc-500">
<span>Stealth Addr</span>
<span>→</span>
<span>ZK Proof</span>
<span>→</span>
<span>Untraceable</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Core Capabilities</h2>
<p className="text-zinc-400 max-w-2xl font-light">Built on battle-tested cryptographic primitives. Audited and open source.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="feature-card p-8 rounded-xl border border-white/5 bg-transparent transition-colors group">
<i className="w-6 h-6 text-white mb-6 stroke-1" data-lucide="hash"></i>
<h3 className="text-base font-medium text-white mb-3">ERC-5564 Stealth Addresses</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Automatically generates unique addresses for every incoming transaction. Your master public key remains static, but your on-chain footprint changes constantly.
                    </p>
</div>

<div className="feature-card p-8 rounded-xl border border-white/5 bg-transparent transition-colors group">
<i className="w-6 h-6 text-white mb-6 stroke-1" data-lucide="venetian-mask"></i>
<h3 className="text-base font-medium text-white mb-3">Zero-Knowledge Shielding</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Native Railgun integration allows for shielded outflows. Prove you own funds without revealing which funds, effectively breaking the transaction graph.
                    </p>
</div>

<div className="feature-card p-8 rounded-xl border border-white/5 bg-transparent transition-colors group">
<i className="w-6 h-6 text-white mb-6 stroke-1" data-lucide="coins"></i>
<h3 className="text-base font-medium text-white mb-3">Auto-Yield Optimization</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Idle stablecoins are routed to Aave V3 on L2s. Earn market rates on your private balance without manual bridging or staking transactions.
                    </p>
</div>

<div className="feature-card p-8 rounded-xl border border-white/5 bg-transparent transition-colors group">
<i className="w-6 h-6 text-white mb-6 stroke-1" data-lucide="arrow-left-right"></i>
<h3 className="text-base font-medium text-white mb-3">Private Fiat Ramps</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Direct IBAN/ACH integration via regulated partners. On-ramp directly into privacy pools with minimal KYC friction for amounts under $1k/day.
                    </p>
</div>

<div className="feature-card p-8 rounded-xl border border-white/5 bg-transparent transition-colors group">
<i className="w-6 h-6 text-white mb-6 stroke-1" data-lucide="layers"></i>
<h3 className="text-base font-medium text-white mb-3">Account Abstraction</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Built on ERC-4337. Pay gas in USDC, batch transactions, and recover accounts via social guardians. No seed phrases required.
                    </p>
</div>

<div className="feature-card p-8 rounded-xl border border-white/5 bg-transparent transition-colors group">
<i className="w-6 h-6 text-white mb-6 stroke-1" data-lucide="key"></i>
<h3 className="text-base font-medium text-white mb-3">Air-Gapped Signatures</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        For institutional security, sign transactions offline using our open-source CLI tool on an air-gapped machine.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5" id="how-it-works">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12">

<div className="group">
<div className="text-xs font-mono text-zinc-500 mb-6 border-l border-zinc-800 pl-3 group-hover:border-white transition-colors h-8 flex items-center">
                        PHASE 01
                    </div>
<h3 className="text-lg font-medium text-white mb-3">Identity Abstraction</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Claim a <span className="text-zinc-200">shadowkey.eth</span> handle. This is your public face. Behind the scenes, we generate a new derivation path for every interaction.
                    </p>
</div>

<div className="group">
<div className="text-xs font-mono text-zinc-500 mb-6 border-l border-zinc-800 pl-3 group-hover:border-white transition-colors h-8 flex items-center">
                        PHASE 02
                    </div>
<h3 className="text-lg font-medium text-white mb-3">Shielded Receipt</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Funds arrive in unique addresses controlled only by your master key. To the outside observer, these addresses are unconnected.
                    </p>
</div>

<div className="group">
<div className="text-xs font-mono text-zinc-500 mb-6 border-l border-zinc-800 pl-3 group-hover:border-white transition-colors h-8 flex items-center">
                        PHASE 03
                    </div>
<h3 className="text-lg font-medium text-white mb-3">Private Utilization</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Execute swaps, bridge to L1, or off-ramp. Our relayer network ensures the gas payment doesn't link back to your funded wallet.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface/30" id="comparison">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-16 text-center">Protocol Comparison</h2>
<div className="w-full">

<div className="grid grid-cols-3 border-b border-zinc-800 pb-4 mb-4">
<div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Feature</div>
<div className="text-center text-xs font-mono text-zinc-500 uppercase tracking-wider">Fluidkey</div>
<div className="text-center text-xs font-mono text-white uppercase tracking-wider font-semibold">ShadowKey</div>
</div>

<div className="grid grid-cols-3 py-5 border-b border-zinc-800/50 items-center">
<div className="text-sm text-zinc-300 font-medium">Inbound Privacy (Stealth)</div>
<div className="flex justify-center"><i className="w-4 h-4 text-zinc-500" data-lucide="check"></i></div>
<div className="flex justify-center"><i className="w-4 h-4 text-white" data-lucide="check"></i></div>
</div>

<div className="grid grid-cols-3 py-5 border-b border-zinc-800/50 items-center">
<div className="text-sm text-zinc-300 font-medium">Outbound Privacy (ZK)</div>
<div className="flex justify-center"><i className="w-4 h-4 text-zinc-700" data-lucide="minus"></i></div>
<div className="flex justify-center"><i className="w-4 h-4 text-white" data-lucide="check"></i></div>
</div>

<div className="grid grid-cols-3 py-5 border-b border-zinc-800/50 items-center">
<div className="text-sm text-zinc-300 font-medium">Yield Integration</div>
<div className="flex justify-center"><i className="w-4 h-4 text-zinc-700" data-lucide="minus"></i></div>
<div className="flex justify-center"><i className="w-4 h-4 text-white" data-lucide="check"></i></div>
</div>

<div className="grid grid-cols-3 py-5 border-b border-zinc-800/50 items-center">
<div className="text-sm text-zinc-300 font-medium">Gas Abstraction</div>
<div className="flex justify-center"><i className="w-4 h-4 text-zinc-500" data-lucide="check"></i></div>
<div className="flex justify-center"><i className="w-4 h-4 text-white" data-lucide="check"></i></div>
</div>

<div className="grid grid-cols-3 py-5 items-center">
<div className="text-sm text-zinc-300 font-medium">Compliance Proofs</div>
<div className="flex justify-center"><i className="w-4 h-4 text-zinc-700" data-lucide="minus"></i></div>
<div className="flex justify-center"><i className="w-4 h-4 text-white" data-lucide="check"></i></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-2 font-mono">$600M+</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">Volume Secured</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-2 font-mono">15k+</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">Verified Users</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-2 font-mono">100%</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">Uptime</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-2 font-mono">&lt;$0.01</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">Avg Gas Cost</div>
</div>
</div>
</section>

<section className="py-32" id="faq">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-12 text-center">Common Questions</h2>
<div className="space-y-0">

<div className="border-b border-zinc-800">
<button className="w-full flex items-center justify-between py-6 text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-zinc-300 text-sm font-medium group-hover:text-white transition-colors">Is ShadowKey custodial?</span>
<i className="w-4 h-4 text-zinc-500 transition-transform duration-300 group-hover:text-white" data-lucide="plus"></i>
</button>
<div className="hidden pb-6 text-zinc-500 text-sm leading-relaxed">
                        No. ShadowKey is a non-custodial smart contract wallet. You retain full control of your private keys. The protocol cannot access your funds.
                    </div>
</div>

<div className="border-b border-zinc-800">
<button className="w-full flex items-center justify-between py-6 text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-zinc-300 text-sm font-medium group-hover:text-white transition-colors">How are transactions shielded?</span>
<i className="w-4 h-4 text-zinc-500 transition-transform duration-300 group-hover:text-white" data-lucide="plus"></i>
</button>
<div className="hidden pb-6 text-zinc-500 text-sm leading-relaxed">
                        We utilize Railgun's Zero-Knowledge proof system. When you "shield" assets, they enter a ZK pool. Transfers within this pool are mathematically untraceable, breaking the link between sender and receiver on the public ledger.
                    </div>
</div>

<div className="border-b border-zinc-800">
<button className="w-full flex items-center justify-between py-6 text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-zinc-300 text-sm font-medium group-hover:text-white transition-colors">Is this compliant with regulations?</span>
<i className="w-4 h-4 text-zinc-500 transition-transform duration-300 group-hover:text-white" data-lucide="plus"></i>
</button>
<div className="hidden pb-6 text-zinc-500 text-sm leading-relaxed">
                        Yes. ShadowKey includes optional View Keys that allow you to share your transaction history with auditors or tax authorities if required, without exposing your data to the public.
                    </div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-[#050505]">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-zinc-800 rounded-sm"></div>
<span className="text-zinc-600 text-xs font-mono">© 2026 ShadowKey Labs.</span>
</div>
<div className="flex gap-8 text-xs font-medium text-zinc-600">
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Twitter</a>
<a className="hover:text-zinc-300 transition-colors" href="#">GitHub</a>
</div>
</div>
</footer>



    </>
  );
}
