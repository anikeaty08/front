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
hox: {
base: '#030303',
surface: '#0A0A0A',
border: '#1F1F1F',
accent: '#00F6B1', // Neon teal
accentHover: '#00E9A6',
dim: '#888888',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
backgroundImage: {
'glow-radial': 'radial-gradient(circle at center, rgba(0, 246, 177, 0.15) 0%, rgba(3, 3, 3, 0) 70%)',
'grid-pattern': 'linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)',
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-lg">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-[#00F6B1] flex items-center justify-center">
<div className="w-3 h-3 bg-black rounded-full"></div>
</div>
<span className="text-lg font-semibold tracking-tight text-white">HOX</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-medium">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#security">Security</a>
<a className="hover:text-white transition-colors" href="#product">Protocol</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm text-neutral-400 hover:text-white transition-colors" href="#">Log In</a>
<a className="bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-medium px-4 py-2 rounded-full transition-all" href="#">
                    Get Access
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-glow-radial opacity-60 pointer-events-none"></div>
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#00F6B1]/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00F6B1]/20 bg-[#00F6B1]/5 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F6B1] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F6B1]"></span>
</span>
<span className="text-[10px] uppercase tracking-widest font-medium text-[#00F6B1]">Protocol V2.0 Live</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 leading-[0.95]">
                The Operating System <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">For Digital Capital.</span>
</h1>

<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Secure, intuitive, and engineered for high-frequency execution. 
                HOX unifies cold-storage security with live-market liquidity.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="group relative px-8 py-4 bg-[#00F6B1] text-black font-semibold rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_-5px_rgba(0,246,177,0.5)]" href="#">
<span className="relative z-10 flex items-center gap-2">
                        Start Trading Now
                        <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</a>
<a className="px-8 py-4 text-white border border-neutral-700 rounded-full hover:bg-neutral-900 transition-colors font-medium flex items-center gap-2" href="#">
<i className="w-4 h-4 text-neutral-400" data-lucide="shield-check"></i>
                    View Security Audit
                </a>
</div>

<div className="flex items-center justify-center gap-2 text-neutral-500 text-sm mb-12">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-800 border border-black"></div>
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-black"></div>
<div className="w-6 h-6 rounded-full bg-neutral-600 border border-black"></div>
</div>
<span>Trusted by 32k+ active wallets</span>
</div>

<div className="relative w-full max-w-4xl mx-auto mt-8 perspective-1000 group">

<div className="relative w-full aspect-[16/9] md:aspect-[21/9] glass-panel rounded-2xl md:rounded-[2rem] overflow-hidden border-t border-white/10 shadow-2xl shadow-[#00F6B1]/5 transition-transform duration-700 ease-out transform group-hover:rotate-x-2">

<div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-b from-white/5 to-transparent">

<div className="flex justify-between items-center border-b border-white/5 pb-4">
<div className="flex gap-4">
<div className="w-24 h-6 bg-white/10 rounded-md"></div>
<div className="w-16 h-6 bg-white/5 rounded-md"></div>
</div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50"><i className="w-4 h-4" data-lucide="bell"></i></div>
</div>
</div>

<div className="grid grid-cols-3 gap-6 h-full mt-6">

<div className="col-span-2 space-y-4">
<div className="h-24 rounded-xl border border-white/5 bg-gradient-to-r from-[#00F6B1]/10 to-transparent p-4 flex items-center justify-between">
<div>
<div className="text-xs text-[#00F6B1] mb-1">Total Balance</div>
<div className="text-3xl font-light text-white">$124,592.41</div>
</div>
<div className="h-10 w-24 bg-[#00F6B1]/20 rounded-lg"></div>
</div>
<div className="h-32 rounded-xl border border-white/5 bg-black/40 flex items-end p-4 gap-2">

<div className="w-full bg-white/5 rounded-sm h-[40%]"></div>
<div className="w-full bg-white/5 rounded-sm h-[60%]"></div>
<div className="w-full bg-white/10 rounded-sm h-[50%]"></div>
<div className="w-full bg-white/10 rounded-sm h-[75%]"></div>
<div className="w-full bg-[#00F6B1]/50 rounded-sm h-[90%] shadow-[0_0_10px_#00F6B1]"></div>
</div>
</div>

<div className="col-span-1 space-y-4">
<div className="h-full rounded-xl border border-white/5 bg-black/40 p-4">
<div className="w-12 h-12 rounded-full bg-white/5 mb-4"></div>
<div className="w-full h-2 bg-white/10 rounded-full mb-2"></div>
<div className="w-2/3 h-2 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 left-10 right-10 h-20 bg-[#00F6B1] blur-[80px] opacity-20 -z-10"></div>
</div>
</div>
</section>

<section className="py-24 relative bg-neutral-950" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">Engineered for <span className="text-[#00F6B1]">precision.</span></h2>
<p className="text-neutral-400 max-w-lg">A comprehensive suite of tools designed to maximize your efficiency within the decentralized economy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative glass-panel rounded-3xl p-8 hover:border-[#00F6B1]/30 transition-colors duration-500 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#00F6B1]/5 blur-3xl -mr-10 -mt-10 group-hover:bg-[#00F6B1]/10 transition-all"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-[#00F6B1] border border-white/5">
<i data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl text-white font-medium mb-2">Military-Grade Encryption</h3>
<p className="text-sm text-neutral-400 leading-relaxed">AES-256 hardware-backed storage ensures your keys never leave your device.</p>
</div>

<div className="group relative glass-panel rounded-3xl p-8 hover:border-[#00F6B1]/30 transition-colors duration-500">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-[#00F6B1] border border-white/5">
<i data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl text-white font-medium mb-2">Native Multi-Chain</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Seamlessly operate across Ethereum, Solana, and Bitcoin without bridging friction.</p>
</div>

<div className="md:row-span-2 group relative glass-panel rounded-3xl p-8 hover:border-[#00F6B1]/30 transition-colors duration-500 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

<div className="absolute bottom-0 left-0 right-0 h-48 opacity-20">
<div className="grid grid-cols-6 gap-2 h-full px-6 items-end pb-8">
<div className="h-12 bg-[#00F6B1] rounded-t-sm"></div>
<div className="h-24 bg-[#00F6B1] rounded-t-sm"></div>
<div className="h-16 bg-[#00F6B1] rounded-t-sm"></div>
<div className="h-32 bg-[#00F6B1] rounded-t-sm"></div>
<div className="h-20 bg-[#00F6B1] rounded-t-sm"></div>
<div className="h-28 bg-[#00F6B1] rounded-t-sm"></div>
</div>
</div>
<div className="relative z-20">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-[#00F6B1] border border-white/5">
<i data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl text-white font-medium mb-2">Smart Portfolio Intelligence</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">Real-time P&amp;L analysis, tax harvesting suggestions, and whale tracking alerts integrated directly into your dashboard.</p>
<a className="inline-flex items-center text-[#00F6B1] text-sm font-medium hover:underline" href="#">View Analytics <i className="w-3 h-3 ml-1" data-lucide="arrow-up-right"></i></a>
</div>
</div>

<div className="group relative glass-panel rounded-3xl p-8 hover:border-[#00F6B1]/30 transition-colors duration-500">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-[#00F6B1] border border-white/5">
<i data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl text-white font-medium mb-2">Flash Settlements</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Execute transactions in milliseconds. Optimized gas estimation ensures zero failures.</p>
</div>

<div className="group relative glass-panel rounded-3xl p-8 hover:border-[#00F6B1]/30 transition-colors duration-500">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-[#00F6B1] border border-white/5">
<i data-lucide="fingerprint" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl text-white font-medium mb-2">Biometric Sentinel</h3>
<p className="text-sm text-neutral-400 leading-relaxed">FaceID and TouchID integration with programmable spending limits for added safety.</p>
</div>

<div className="md:col-span-2 group relative glass-panel rounded-3xl p-8 hover:border-[#00F6B1]/30 transition-colors duration-500 flex items-center gap-8">
<div className="hidden md:block w-32 h-32 rounded-full border border-white/5 bg-black flex-shrink-0 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-[#00F6B1]/10 rounded-full animate-pulse"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-8 h-8 text-[#00F6B1]" data-lucide="message-square"></i>
</div>
</div>
<div>
<div className="md:hidden w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-[#00F6B1] border border-white/5">
<i data-lucide="headphones" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl text-white font-medium mb-2">24/7 Priority Concierge</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-md">Access a dedicated team of crypto experts anytime. Whether it's a stuck transaction or a protocol question, we resolve issues in minutes, not days.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#030303] relative overflow-hidden">

<div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#00F6B1]/50 to-transparent"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="space-y-24">

<div className="flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 text-right md:text-left order-2 md:order-1">
<h3 className="text-2xl md:text-3xl font-medium text-white mb-4">Total Asset Autonomy</h3>
<p className="text-neutral-400 leading-relaxed mb-6">
                            Traditional exchanges hold your keys. HOX gives them back. Our non-custodial architecture ensures that <span className="text-[#00F6B1]">you are the only one with access to your funds</span>. No black boxes, no frozen withdrawals.
                        </p>
<div className="flex items-center gap-4 text-sm text-[#00F6B1] font-medium">
<span>0% Counterparty Risk</span>
<div className="w-1 h-1 bg-white rounded-full"></div>
<span>Audited Smart Contracts</span>
</div>
</div>
<div className="flex-1 order-1 md:order-2 flex justify-center">

<div className="w-full max-w-xs aspect-square rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center relative">
<div className="absolute inset-4 border border-[#00F6B1]/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
<i className="w-16 h-16 text-[#00F6B1]" data-lucide="lock"></i>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 flex justify-center order-1">

<div className="w-full max-w-xs aspect-video glass-panel rounded-2xl flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute w-24 h-24 bg-[#00F6B1] blur-[50px] opacity-20"></div>
<div className="flex gap-4">
<div className="w-2 h-12 bg-white/20 rounded-full"></div>
<div className="w-2 h-20 bg-[#00F6B1] rounded-full shadow-[0_0_15px_#00F6B1]"></div>
<div className="w-2 h-16 bg-white/20 rounded-full"></div>
</div>
</div>
</div>
<div className="flex-1 order-2">
<h3 className="text-2xl md:text-3xl font-medium text-white mb-4">Latency Zero</h3>
<p className="text-neutral-400 leading-relaxed mb-6">
                            In crypto, speed is profit. Our custom node infrastructure routes your transactions through the fastest path on the mempool.
                            <span className="text-white block mt-2">Experience confirmations that feel instant.</span>
</p>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#00F6B1]" data-lucide="check"></i> &lt;50ms Node Response</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#00F6B1]" data-lucide="check"></i> MEV Protection Enabled</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 text-right md:text-left order-2 md:order-1">
<h3 className="text-2xl md:text-3xl font-medium text-white mb-4">Universal Compatibility</h3>
<p className="text-neutral-400 leading-relaxed mb-6">
                            HOX isn't just a wallet; it's a portal. Connect to any dApp via WalletConnect, manage NFTs, and stake assets directly from the dashboard.
                            <span className="text-[#00F6B1]">One interface for the entire Web3 ecosystem.</span>
</p>
</div>
<div className="flex-1 order-1 md:order-2 flex justify-center">
<div className="w-full max-w-xs p-6 glass-panel rounded-2xl border border-white/10">
<div className="flex justify-between mb-4">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="w-8 h-8 rounded-full bg-white/10"></div>
</div>
<div className="h-2 w-full bg-white/5 rounded-full mb-2"></div>
<div className="h-2 w-2/3 bg-white/5 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-neutral-900" id="product">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<div className="sticky top-32">
<h2 className="text-4xl font-medium text-white mb-6 tracking-tight">What is HOX?</h2>
<p className="text-neutral-400 mb-8">
                            A next-generation protocol interface built for the sovereign individual.
                        </p>
<a className="text-[#00F6B1] hover:text-white transition-colors flex items-center gap-2 text-sm font-medium" href="#">
                            Read the Whitepaper <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="md:col-span-8 space-y-12">
<div className="border-l border-neutral-800 pl-8">
<h3 className="text-xl text-white font-medium mb-3">Core Philosophy</h3>
<p className="text-neutral-400 leading-relaxed">
                            We believe that financial tools should be invisible. HOX abstracts away the complexities of gas fees, chain switching, and contract approvals, leaving you with a pure, uninterrupted connection to the market. We are not a bank; we are software that empowers you to be your own bank.
                        </p>
</div>
<div className="border-l border-neutral-800 pl-8">
<h3 className="text-xl text-white font-medium mb-3">Security Architecture</h3>
<p className="text-neutral-400 leading-relaxed">
                            Built on a Zero-Knowledge (ZK) foundation, HOX validates your identity without ever storing your biometric data. Transactions are signed locally on your device within the Secure Enclave, ensuring that even if our servers are compromised, your funds remain untouchable.
                        </p>
</div>
<div className="border-l border-[#00F6B1] pl-8">
<h3 className="text-xl text-white font-medium mb-3">Why it's faster</h3>
<p className="text-neutral-400 leading-relaxed">
                            HOX utilizes a proprietary predictive node network. Before you even finish swiping to confirm, our nodes have already pre-propagated the transaction path, resulting in settlement times up to 40% faster than standard RPC endpoints.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[#00F6B1]/5 skew-y-3 transform origin-top-left -z-10"></div>
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white mb-6">Transparent Value</h2>
<p className="text-neutral-400">Professional tools at protocol-level cost.</p>
</div>
<div className="glass-panel rounded-3xl p-1 border border-neutral-800">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-neutral-800 flex flex-col justify-between">
<div>
<h3 className="text-2xl text-white font-medium mb-2">Standard</h3>
<div className="text-4xl font-medium text-white mb-6">$0 <span className="text-lg text-neutral-500 font-normal">/ month</span></div>
<ul className="space-y-4 text-sm text-neutral-400">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> Unlimited Wallets</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> Basic Portfolio Tracking</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> Standard Gas Fees</li>
</ul>
</div>
<a className="mt-8 block w-full py-3 rounded-lg border border-neutral-700 text-center text-white hover:bg-neutral-800 transition-colors text-sm font-medium" href="#">Get Started</a>
</div>
<div className="p-8 md:p-12 bg-white/5 relative overflow-hidden flex flex-col justify-between">
<div className="absolute top-0 right-0 px-3 py-1 bg-[#00F6B1] text-black text-xs font-bold uppercase tracking-wider rounded-bl-xl">Pro</div>
<div>
<h3 className="text-2xl text-white font-medium mb-2">HOX Pro</h3>
<div className="text-4xl font-medium text-[#00F6B1] mb-6">$19 <span className="text-lg text-neutral-500 font-normal">/ month</span></div>
<ul className="space-y-4 text-sm text-neutral-300">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#00F6B1]" data-lucide="check"></i> Priority Gas Nodes</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#00F6B1]" data-lucide="check"></i> Advanced Tax Reports</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#00F6B1]" data-lucide="check"></i> 24/7 Concierge Support</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#00F6B1]" data-lucide="check"></i> Early Access to Features</li>
</ul>
</div>
<a className="mt-8 block w-full py-3 rounded-lg bg-[#00F6B1] text-center text-black hover:bg-[#00E9A6] transition-colors text-sm font-semibold shadow-[0_0_20px_rgba(0,246,177,0.3)]" href="#">Upgrade Now</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white mb-12 tracking-tight">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group border-b border-neutral-800 pb-4">
<summary className="flex items-center justify-between cursor-pointer list-none py-2 text-lg text-neutral-300 group-hover:text-white transition-colors">
                        Is HOX a custodial wallet?
                        <span className="transition-transform group-open:rotate-180"><i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i></span>
</summary>
<p className="text-neutral-500 mt-2 text-sm leading-relaxed">
                        No. HOX is 100% non-custodial. We do not have access to your private keys or funds. You are the sole owner of your digital assets at all times.
                    </p>
</details>

<details className="group border-b border-neutral-800 pb-4">
<summary className="flex items-center justify-between cursor-pointer list-none py-2 text-lg text-neutral-300 group-hover:text-white transition-colors">
                        Which networks are supported?
                        <span className="transition-transform group-open:rotate-180"><i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i></span>
</summary>
<p className="text-neutral-500 mt-2 text-sm leading-relaxed">
                        We currently support Bitcoin, Ethereum, Solana, Polygon, Arbitrum, and Optimism. New Layer-2 networks are added monthly based on community governance votes.
                    </p>
</details>

<details className="group border-b border-neutral-800 pb-4">
<summary className="flex items-center justify-between cursor-pointer list-none py-2 text-lg text-neutral-300 group-hover:text-white transition-colors">
                        How is my data stored?
                        <span className="transition-transform group-open:rotate-180"><i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i></span>
</summary>
<p className="text-neutral-500 mt-2 text-sm leading-relaxed">
                        Your private data (transaction history, labels) is encrypted locally on your device using AES-256. It is never uploaded to any cloud server in plain text.
                    </p>
</details>

<details className="group border-b border-neutral-800 pb-4">
<summary className="flex items-center justify-between cursor-pointer list-none py-2 text-lg text-neutral-300 group-hover:text-white transition-colors">
                        Are there fees for sending crypto?
                        <span className="transition-transform group-open:rotate-180"><i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i></span>
</summary>
<p className="text-neutral-500 mt-2 text-sm leading-relaxed">
                        HOX does not charge network fees; these are determined by the blockchain. However, HOX takes a small 0.5% convenience fee only on in-app token swaps.
                    </p>
</details>

<details className="group border-b border-neutral-800 pb-4">
<summary className="flex items-center justify-between cursor-pointer list-none py-2 text-lg text-neutral-300 group-hover:text-white transition-colors">
                        Can I use HOX if I'm a beginner?
                        <span className="transition-transform group-open:rotate-180"><i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i></span>
</summary>
<p className="text-neutral-500 mt-2 text-sm leading-relaxed">
                        Absolutely. We offer a "Lite Mode" which hides complex charts and technical data, focusing strictly on simple send/receive functionality and balance viewing.
                    </p>
</details>

<details className="group border-b border-neutral-800 pb-4">
<summary className="flex items-center justify-between cursor-pointer list-none py-2 text-lg text-neutral-300 group-hover:text-white transition-colors">
                        Does it work with Hardware Wallets?
                        <span className="transition-transform group-open:rotate-180"><i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i></span>
</summary>
<p className="text-neutral-500 mt-2 text-sm leading-relaxed">
                        Yes. HOX integrates seamlessly with Ledger and Trezor devices, allowing you to use our interface while keeping your keys offline.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-[600px] h-[400px] bg-[#00F6B1] blur-[150px] opacity-10 rounded-full"></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl md:text-7xl font-semibold text-white mb-6 tracking-tighter">Ready to upgrade?</h2>
<p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">Join the ecosystem trusted by institutions and whales alike.</p>
<div className="flex flex-col items-center gap-4">
<a className="hox-glow-box px-10 py-5 bg-[#00F6B1] text-black text-lg font-bold rounded-full hover:scale-105 transition-transform duration-300" href="#">
                    Download HOX
                </a>
<span className="text-sm text-neutral-500 mt-4">Available on iOS, Android &amp; Desktop</span>
</div>
</div>
</section>

<footer className="border-t border-neutral-900 bg-[#020202] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-20">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-xl font-bold tracking-tight text-white">HOX</span>
</div>
<p className="text-neutral-500 text-sm max-w-xs">
                        The definitive operating system for digital capital. Secure, fast, and built for the future.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-[#00F6B1] transition-colors" href="#">Download</a></li>
<li><a className="hover:text-[#00F6B1] transition-colors" href="#">HOX Pro</a></li>
<li><a className="hover:text-[#00F6B1] transition-colors" href="#">Hardware</a></li>
<li><a className="hover:text-[#00F6B1] transition-colors" href="#">API</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-[#00F6B1] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#00F6B1] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#00F6B1] transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-[#00F6B1] transition-colors" href="#">Press Kit</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-[#00F6B1] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#00F6B1] transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-[#00F6B1] transition-colors" href="#">Security Audit</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-900 text-xs text-neutral-600">
<div>© 2024 HOX Protocol Inc. All rights reserved.</div>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="discord"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
