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



        document.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("progressBar").style.width = scrolled + "%";
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
      

<div className="fixed inset-0 z-0 pointer-events-none opacity-20" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="fixed inset-0 z-0 pointer-events-none" style={{background: 'radial-gradient(ellipse at center, transparent 40%, #060606 100%)'}}></div>
<div className="fixed inset-0 z-[9000] pointer-events-none opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=\\'0 0 256 256\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'n\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.9\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23n)\\'/%3E%3C/svg%3E\')', backgroundRepeat: 'repeat', backgroundSize: '180px'}}></div>

<div className="fixed top-0 left-0 h-[2px] bg-[#c8ff00] z-[9999] shadow-[0_0_12px_rgba(200,255,0,0.6)] transition-all duration-75" id="progressBar" style={{width: '0%'}}></div>

<nav className="fixed top-0 inset-x-0 z-[100] flex items-center justify-between px-6 md:px-12 py-5 bg-[#060606]/70 backdrop-blur-xl border-b border-white/[0.04]">
<a className="font-['Syne',sans-serif] text-lg font-bold tracking-tighter" href="#">
            FUIN<span className="text-[#c8ff00]">.</span>
</a>
<div className="hidden md:flex items-center gap-10">
<a className="text-xs font-medium text-[#777] hover:text-[#f0f0f0] transition-colors" href="#about">Manifesto</a>
<a className="text-xs font-medium text-[#777] hover:text-[#f0f0f0] transition-colors" href="#primitives">Primitives</a>
<a className="text-xs font-medium text-[#777] hover:text-[#f0f0f0] transition-colors" href="#actors">Actors</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-semibold text-[#c8ff00] hover:opacity-70 transition-opacity" href="#docs">
            Read Docs 
            <iconify-icon className="text-sm" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<button className="md:hidden flex flex-col justify-center gap-1.5 w-6 h-6">
<span className="w-full h-[1px] bg-white block"></span>
<span className="w-full h-[1px] bg-white block"></span>
</button>
</nav>

<section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-20">
<div className="inline-flex items-center gap-2 text-[0.65rem] font-medium tracking-[0.2em] uppercase text-[#c8ff00] mb-8 px-5 py-2.5 rounded-full bg-white/[0.02] border border-[#c8ff00]/20 backdrop-blur-md">
            Solana IAM Protocol
        </div>
<h1 className="font-['Syne',sans-serif] text-6xl md:text-8xl lg:text-[11rem] leading-none font-bold tracking-tighter drop-shadow-[0_0_60px_rgba(200,255,0,0.08)] mb-8 uppercase">
            Fuin
        </h1>
<p className="text-base md:text-lg text-[#888] font-normal max-w-2xl leading-relaxed mb-12">
            A programmable Identity Access Management layer and restrictive wallet protocol. Cryptographic seals for AI agents and new users, operating in a secure sandbox without sacrificing custody.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="font-['Syne',sans-serif] flex items-center justify-center gap-2 px-8 py-4 bg-[#c8ff00] text-[#060606] rounded-full text-sm font-semibold tracking-wide hover:shadow-[0_0_24px_rgba(200,255,0,0.25)] hover:-translate-y-0.5 transition-all duration-300" href="#docs">
                Explore Protocol 
                <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="font-['Syne',sans-serif] flex items-center justify-center px-8 py-4 bg-white/[0.02] text-[#f0f0f0] border border-white/10 rounded-full text-sm font-semibold tracking-wide backdrop-blur-md hover:border-[#c8ff00] hover:text-[#c8ff00] hover:bg-white/[0.04] transition-all duration-300" href="#sandbox">
                Launch Sandbox
            </a>
</div>
</section>

<section className="relative z-10 py-32 md:py-48 px-6 flex justify-center items-center" id="about">
<div className="max-w-4xl text-center">
<p className="font-['Syne',sans-serif] text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#e0e0e0] leading-[1.3] text-balance">
                Derived from <span className="text-[#c8ff00]">Fuinjutsu</span> — we place cryptographic seals on digital assets. We give autonomous agents and new users a restrictive environment to operate in, guided by strict owner-defined constraints.
            </p>
</div>
</section>

<section className="relative z-10 py-24 md:py-32 px-6 max-w-[1200px] mx-auto" id="primitives">
<div className="flex items-center gap-4 text-xs font-medium tracking-[0.2em] uppercase text-[#c8ff00] mb-6">
<div className="w-6 h-[1px] bg-[#c8ff00] shadow-[0_0_8px_rgba(200,255,0,0.6)]"></div>
            Core Architecture
        </div>
<h2 className="font-['Syne',sans-serif] text-4xl md:text-5xl font-bold tracking-tight mb-16 text-white">
            Protocol Primitives
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

<div className="group relative p-8 md:p-10 rounded-2xl bg-white/[0.015] border border-white/[0.04] hover:border-[#c8ff00]/40 transition-colors duration-500 overflow-hidden">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{background: 'radial-gradient(circle at 80% 20%, rgba(200,255,0,0.06), transparent 50%)'}}></div>
<span className="font-['Syne',sans-serif] text-xs font-bold text-[#c8ff00]/40 tracking-widest mb-8 block">01</span>
<iconify-icon className="text-[2rem] text-[#c8ff00] mb-6 block" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-['Syne',sans-serif] text-xl font-semibold tracking-tight mb-3 text-white">On-chain Policy Engine</h3>
<p className="text-sm font-light text-[#888] leading-relaxed">Comprehensive Spending, Program, Time, and Risk modules. Utilizes a Bitmask Delegate Capability Model (CAN_SWAP | CAN_STAKE) to strictly define bounds.</p>
</div>

<div className="group relative p-8 md:p-10 rounded-2xl bg-white/[0.015] border border-white/[0.04] hover:border-[#c8ff00]/40 transition-colors duration-500 overflow-hidden">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{background: 'radial-gradient(circle at 80% 20%, rgba(200,255,0,0.06), transparent 50%)'}}></div>
<span className="font-['Syne',sans-serif] text-xs font-bold text-[#c8ff00]/40 tracking-widest mb-8 block">02</span>
<iconify-icon className="text-[2rem] text-[#c8ff00] mb-6 block" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-['Syne',sans-serif] text-xl font-semibold tracking-tight mb-3 text-white">Meta-Transactions</h3>
<p className="text-sm font-light text-[#888] leading-relaxed">ERC-4337 style intents on Solana. Users sign Intents while Relayers submit the transactions and pay the gas, abstracting away network complexities.</p>
</div>

<div className="group relative p-8 md:p-10 rounded-2xl bg-white/[0.015] border border-white/[0.04] hover:border-[#c8ff00]/40 transition-colors duration-500 overflow-hidden">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{background: 'radial-gradient(circle at 80% 20%, rgba(200,255,0,0.06), transparent 50%)'}}></div>
<span className="font-['Syne',sans-serif] text-xs font-bold text-[#c8ff00]/40 tracking-widest mb-8 block">03</span>
<iconify-icon className="text-[2rem] text-[#c8ff00] mb-6 block" icon="solar:gas-station-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-['Syne',sans-serif] text-xl font-semibold tracking-tight mb-3 text-white">GasTank PDA</h3>
<p className="text-sm font-light text-[#888] leading-relaxed">A dedicated Program Derived Address funded by the Guardian. The protocol automatically refunds Relayers upon successful execution of verified intents.</p>
</div>

<div className="group relative p-8 md:p-10 rounded-2xl bg-white/[0.015] border border-white/[0.04] hover:border-[#c8ff00]/40 transition-colors duration-500 overflow-hidden">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{background: 'radial-gradient(circle at 80% 20%, rgba(200,255,0,0.06), transparent 50%)'}}></div>
<span className="font-['Syne',sans-serif] text-xs font-bold text-[#c8ff00]/40 tracking-widest mb-8 block">04</span>
<iconify-icon className="text-[2rem] text-[#c8ff00] mb-6 block" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-['Syne',sans-serif] text-xl font-semibold tracking-tight mb-3 text-white">Deterministic Routing</h3>
<p className="text-sm font-light text-[#888] leading-relaxed">Agents are restricted to predefined Route enums (e.g., JupiterSwap, MeteoraLP) with nonce-based replay protection to completely prevent hallucination-led exploits.</p>
</div>
</div>
</section>

<section className="relative z-10 py-24 md:py-32 px-6 max-w-[1200px] mx-auto" id="actors">
<div className="flex items-center gap-4 text-xs font-medium tracking-[0.2em] uppercase text-[#c8ff00] mb-6">
<div className="w-6 h-[1px] bg-[#c8ff00] shadow-[0_0_8px_rgba(200,255,0,0.6)]"></div>
            Network Participants
        </div>
<h2 className="font-['Syne',sans-serif] text-4xl md:text-5xl font-bold tracking-tight mb-16 text-white">
            System Actors
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[320px] md:auto-rows-[340px] gap-4 md:gap-6">

<a className="group relative rounded-2xl overflow-hidden block border border-white/[0.04]" href="#">
<img alt="Guardian" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 transition-transform duration-[1.5s] ease-out group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10">
<span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#c8ff00] mb-3">The Owner</span>
<h3 className="font-['Syne',sans-serif] text-2xl md:text-3xl font-semibold tracking-tight text-white flex items-center justify-between mb-2">
                        Guardian
                        <iconify-icon className="text-2xl text-[#c8ff00] opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</h3>
<p className="text-xs text-[#aaa] font-light max-w-sm">Creates vaults, sets strict policies, deposits gas, and retains ultimate control to freeze or rotate keys.</p>
</div>
</a>

<a className="group relative rounded-2xl overflow-hidden block border border-white/[0.04]" href="#">
<img alt="Junior" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 transition-transform duration-[1.5s] ease-out group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10">
<span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#c8ff00] mb-3">The Beginner</span>
<h3 className="font-['Syne',sans-serif] text-2xl md:text-3xl font-semibold tracking-tight text-white flex items-center justify-between mb-2">
                        Junior
                        <iconify-icon className="text-2xl text-[#c8ff00] opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</h3>
<p className="text-xs text-[#aaa] font-light max-w-sm">A human operator acting under daily allowances, spending limits, and strict program whitelists.</p>
</div>
</a>

<a className="group relative rounded-2xl overflow-hidden block border border-white/[0.04]" href="#">
<img alt="Agent" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 transition-all duration-[1.5s] ease-out group-hover:scale-105 group-hover:grayscale-0" loading="lazy" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10">
<span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#c8ff00] mb-3">The Autonomous Bot</span>
<h3 className="font-['Syne',sans-serif] text-2xl md:text-3xl font-semibold tracking-tight text-white flex items-center justify-between mb-2">
                        Agent
                        <iconify-icon className="text-2xl text-[#c8ff00] opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</h3>
<p className="text-xs text-[#aaa] font-light max-w-sm">An AI operator cryptographically locked to predefined audited routes to prevent exploits driven by hallucination.</p>
</div>
</a>

<a className="group relative rounded-2xl overflow-hidden block border border-white/[0.04]" href="#">
<img alt="Relayer" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 transition-all duration-[1.5s] ease-out group-hover:scale-105 group-hover:grayscale-0" loading="lazy" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10">
<span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#c8ff00] mb-3">The Courier</span>
<h3 className="font-['Syne',sans-serif] text-2xl md:text-3xl font-semibold tracking-tight text-white flex items-center justify-between mb-2">
                        Relayer
                        <iconify-icon className="text-2xl text-[#c8ff00] opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</h3>
<p className="text-xs text-[#aaa] font-light max-w-sm">A non-custodial entity that packages and submits intents to the network, automatically receiving gas refunds.</p>
</div>
</a>
</div>
</section>

<section className="relative z-10 py-24 border-y border-white/[0.04] bg-white/[0.005]">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
<div>
<span className="font-['Syne',sans-serif] text-2xl md:text-4xl font-bold tracking-tight text-[#c8ff00] drop-shadow-[0_0_24px_rgba(200,255,0,0.15)] block mb-3">ACTIVE</span>
<span className="text-[0.65rem] font-semibold tracking-[0.15em] text-[#777] uppercase">Vault Initialized</span>
</div>
<div>
<span className="font-['Syne',sans-serif] text-2xl md:text-4xl font-bold tracking-tight text-[#c8ff00] drop-shadow-[0_0_24px_rgba(200,255,0,0.15)] block mb-3">SESSIONED</span>
<span className="text-[0.65rem] font-semibold tracking-[0.15em] text-[#777] uppercase">Keys Delegated</span>
</div>
<div>
<span className="font-['Syne',sans-serif] text-2xl md:text-4xl font-bold tracking-tight text-[#c8ff00] drop-shadow-[0_0_24px_rgba(200,255,0,0.15)] block mb-3">EXECUTING</span>
<span className="text-[0.65rem] font-semibold tracking-[0.15em] text-[#777] uppercase">Intent Processing</span>
</div>
<div>
<span className="font-['Syne',sans-serif] text-2xl md:text-4xl font-bold tracking-tight text-[#ef4444] drop-shadow-[0_0_24px_rgba(239,68,68,0.15)] block mb-3">FROZEN</span>
<span className="text-[0.65rem] font-semibold tracking-[0.15em] text-[#777] uppercase">Emergency Halt</span>
</div>
</div>
</section>

<section className="relative z-10 py-24 md:py-32 px-6 max-w-[1200px] mx-auto">
<div className="flex items-center gap-4 text-xs font-medium tracking-[0.2em] uppercase text-[#c8ff00] mb-6">
<div className="w-6 h-[1px] bg-[#c8ff00] shadow-[0_0_8px_rgba(200,255,0,0.6)]"></div>
            Transaction Lifecycle
        </div>
<h2 className="font-['Syne',sans-serif] text-4xl md:text-5xl font-bold tracking-tight mb-16 text-white">
            How It Works
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
<div className="pl-6 border-l-2 border-white/[0.04] hover:border-[#c8ff00]/60 transition-colors duration-500">
<span className="font-['Syne',sans-serif] text-[2.5rem] font-bold text-[#c8ff00]/20 block mb-4 leading-none">01</span>
<h3 className="font-['Syne',sans-serif] text-lg font-semibold tracking-tight mb-3 text-white">Policy Engine</h3>
<p className="text-sm font-light text-[#888] leading-relaxed">The Guardian creates a vault and sets boundaries, such as a strict $20/day limit for the designated Agent.</p>
</div>
<div className="pl-6 border-l-2 border-white/[0.04] hover:border-[#c8ff00]/60 transition-colors duration-500">
<span className="font-['Syne',sans-serif] text-[2.5rem] font-bold text-[#c8ff00]/20 block mb-4 leading-none">02</span>
<h3 className="font-['Syne',sans-serif] text-lg font-semibold tracking-tight mb-3 text-white">Intent Creation</h3>
<p className="text-sm font-light text-[#888] leading-relaxed">The Agent receives a session key via the Bitmask Capability Model and signs an intent to execute a specific action (e.g., swapping 1 SOL for USDC).</p>
</div>
<div className="pl-6 border-l-2 border-white/[0.04] hover:border-[#c8ff00]/60 transition-colors duration-500">
<span className="font-['Syne',sans-serif] text-[2.5rem] font-bold text-[#c8ff00]/20 block mb-4 leading-none">03</span>
<h3 className="font-['Syne',sans-serif] text-lg font-semibold tracking-tight mb-3 text-white">Validation Routing</h3>
<p className="text-sm font-light text-[#888] leading-relaxed">A Relayer submits the intent to the FuinRouter. The router verifies Ed25519 signatures, checks Pyth/Switchboard oracle prices, and enforces bitmask caps.</p>
</div>
<div className="pl-6 border-l-2 border-white/[0.04] hover:border-[#c8ff00]/60 transition-colors duration-500">
<span className="font-['Syne',sans-serif] text-[2.5rem] font-bold text-[#c8ff00]/20 block mb-4 leading-none">04</span>
<h3 className="font-['Syne',sans-serif] text-lg font-semibold tracking-tight mb-3 text-white">Execution</h3>
<p className="text-sm font-light text-[#888] leading-relaxed">A CPI is executed to the allowlisted program (e.g., Jupiter). The GasTank refunds the Relayer, and Helius webhooks notify the Agent of success.</p>
</div>
</div>
</section>

<section className="relative z-10 py-32 md:py-48 px-6 flex flex-col items-center justify-center text-center" id="docs">
<div className="flex items-center justify-center gap-4 text-xs font-medium tracking-[0.2em] uppercase text-[#c8ff00] mb-8">
<div className="w-6 h-[1px] bg-[#c8ff00]"></div>
            Start Building
            <div className="w-6 h-[1px] bg-[#c8ff00]"></div>
</div>
<h2 className="font-['Syne',sans-serif] text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-white">
            Secure your<br/>
<span className="italic text-[#c8ff00] font-medium pr-3 drop-shadow-[0_0_30px_rgba(200,255,0,0.15)]">autonomous</span> future.
        </h2>
<p className="text-base text-[#888] font-light mb-12 max-w-md">
            Integrate Fuin into your AI products and DApps to offer users a fail-safe, non-custodial sandbox environment.
        </p>
<a className="font-['Syne',sans-serif] inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#c8ff00]/50 text-[#c8ff00] text-sm font-semibold tracking-wide hover:bg-[#c8ff00] hover:border-[#c8ff00] hover:text-[#060606] hover:shadow-[0_0_32px_rgba(200,255,0,0.25)] transition-all duration-300" href="#">
            Read Documentation
            <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</section>

<footer className="relative z-10 bg-[#060606] border-t border-white/[0.04] pt-24 pb-12 px-6">
<div className="max-w-[1200px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8 mb-24">
<div>
<a className="font-['Syne',sans-serif] text-xl font-bold tracking-tighter block mb-3 text-white uppercase" href="#">
                        FUIN<span className="text-[#c8ff00]">.</span>
</a>
<p className="text-xs text-[#666] font-medium tracking-wide">Programmable IAM on Solana</p>
</div>
<div className="flex flex-wrap gap-16 md:gap-32">
<div className="flex flex-col gap-5">
<span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#555]">Protocol</span>
<a className="text-sm font-medium text-[#888] hover:text-[#c8ff00] transition-colors" href="#about">Manifesto</a>
<a className="text-sm font-medium text-[#888] hover:text-[#c8ff00] transition-colors" href="#primitives">Architecture</a>
<a className="text-sm font-medium text-[#888] hover:text-[#c8ff00] transition-colors" href="#actors">Actors</a>
<a className="text-sm font-medium text-[#888] hover:text-[#c8ff00] transition-colors" href="#docs">Documentation</a>
</div>
<div className="flex flex-col gap-5">
<span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#555]">Connect</span>
<a className="text-sm font-medium text-[#888] hover:text-[#c8ff00] transition-colors" href="#">Twitter / X</a>
<a className="text-sm font-medium text-[#888] hover:text-[#c8ff00] transition-colors" href="#">Discord</a>
<a className="text-sm font-medium text-[#888] hover:text-[#c8ff00] transition-colors" href="#">GitHub</a>
<a className="text-sm font-medium text-[#888] hover:text-[#c8ff00] transition-colors" href="#">Blog</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#555]">
<span>© 2024 Fuin Protocol</span>
<span className="flex items-center gap-2">Built on Solana <div className="w-1.5 h-1.5 rounded-full bg-[#c8ff00]/50"></div></span>
</div>
</div>
</footer>



    </>
  );
}
