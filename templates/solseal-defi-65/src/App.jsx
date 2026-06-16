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
950: '#050a14',
900: '#0A2342',
800: '#112d52',
700: '#1E3A5F',
},
gold: {
400: '#F0B429',
500: '#D69E1E',
},
slate: {
850: '#1e293b',
},
solana: {
green: '#14F195',
purple: '#9945FF',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



      // Mobile Menu Toggle
      const btn = document.getElementById('mobile-menu-btn');
      const menu = document.getElementById('mobile-menu');

      btn.addEventListener('click', () => {
          menu.classList.toggle('hidden');
      });

      // Scroll Reveal Animation
      function reveal() {
          var reveals = document.querySelectorAll(".reveal");
          for (var i = 0; i < reveals.length; i++) {
              var windowHeight = window.innerHeight;
              var elementTop = reveals[i].getBoundingClientRect().top;
              var elementVisible = 150;
              if (elementTop < windowHeight - elementVisible) {
                  reveals[i].classList.add("active");
              }
          }
      }
      window.addEventListener("scroll", reveal);
      // Trigger once on load
      reveal();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-navy-700/20 rounded-full blur-[120px]"></div>
<div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full blur-[100px] bg-solana-purple/20"></div>
<div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full blur-[80px] bg-solana-green/10"></div>
</div>

<nav className="fixed w-full z-50 glass-nav transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0 cursor-pointer group">
<span className="text-xl font-semibold tracking-tight text-white group-hover:text-gold-400 transition-colors duration-300">
              SOLSEAL
            </span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#solution">
              Solution
            </a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#compliance">
              Compliance
            </a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#security">
              Security
            </a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#whitepaper">
              Resources
            </a>
<button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-5 py-2 rounded text-xs font-medium transition-all duration-200 backdrop-blur-sm">
              Read Whitepaper
            </button>
<button className="bg-gold-400 hover:bg-white hover:text-navy-900 text-navy-950 px-5 py-2 rounded text-xs font-semibold transition-all duration-200 transform hover:scale-[1.02]">
              Request Access
            </button>
</div>

<div className="md:hidden">
<button className="text-slate-300 hover:text-white focus:outline-none" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden glass-nav border-t border-white/5 absolute w-full" id="mobile-menu">
<div className="px-6 pt-4 pb-6 space-y-4">
<a className="block text-sm font-medium text-slate-300 hover:text-white" href="#solution">
            Solution
          </a>
<a className="block text-sm font-medium text-slate-300 hover:text-white" href="#compliance">
            Compliance
          </a>
<a className="block text-sm font-medium text-slate-300 hover:text-white" href="#security">
            Security
          </a>
<div className="pt-4 flex flex-col space-y-3">
<button className="w-full bg-white/5 text-white border border-white/10 px-5 py-3 rounded text-sm font-medium">
              Read Whitepaper
            </button>
<button className="w-full bg-gold-400 text-navy-950 px-5 py-3 rounded text-sm font-semibold">
              Request Access
            </button>
</div>
</div>
</div>
</nav>

<section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800/50 border border-white/10 mb-8 animate-fade-in-up reveal active">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-solana-green"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-solana-green"></span>
</span>
<span className="text-xs font-medium tracking-wide uppercase text-solana-green">
            Live on Solana Mainnet Beta
          </span>
</div>

<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-[1.1] mb-6 max-w-4xl mx-auto reveal active delay-100">
          Institutional Privacy Yield
          <br className="hidden md:block"/>
          on
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-purple to-solana-green">
            Solana
          </span>
</h1>

<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed reveal active delay-200">
          Earn DeFi yields with confidential balances, front-running protection,
          and complete regulatory auditability for corporate treasuries.
        </p>

<div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-sm font-medium text-slate-300 reveal active delay-300">
<div className="flex items-center gap-2">
<iconify-icon className="text-gold-400" icon="solar:chart-2-linear"></iconify-icon>
            $130B+ DeFi Market
          </div>
<div className="w-1 h-1 bg-slate-700 rounded-full my-auto hidden md:block"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-gold-400" icon="solar:wallet-money-linear"></iconify-icon>
            8-15% APY
          </div>
<div className="w-1 h-1 bg-slate-700 rounded-full my-auto hidden md:block"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-solana-green" icon="solar:bolt-linear"></iconify-icon>
            Sub-Second Finality
          </div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal active delay-400">
<button className="w-full sm:w-auto bg-gold-400 hover:bg-white text-navy-950 px-8 py-4 rounded text-sm font-semibold transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(240,180,41,0.2)]">
            Request Access
          </button>
<button className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded text-sm font-medium transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon>
            Read Whitepaper
          </button>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-navy-950/50 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16 reveal">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">
            The Transparency Problem
          </h2>
<p className="text-slate-400 max-w-2xl">
            Public blockchains expose institutional strategies and treasury
            positions, creating critical vulnerabilities for large-scale capital
            deployment.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-card p-8 rounded-xl reveal delay-100 group hover:bg-white/5 transition-colors">
<div className="w-12 h-12 rounded-lg bg-navy-800 flex items-center justify-center mb-6 text-gold-400 border border-white/10 group-hover:border-gold-400/50 transition-colors">
<iconify-icon height="24" icon="solar:graph-down-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Front-Running Losses
            </h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
              Institutional orders suffer 0.1-3% slippage due to MEV extraction
              and predatory bots monitoring public mempools.
            </p>
</div>

<div className="glass-card p-8 rounded-xl reveal delay-200 group hover:bg-white/5 transition-colors">
<div className="w-12 h-12 rounded-lg bg-navy-800 flex items-center justify-center mb-6 text-gold-400 border border-white/10 group-hover:border-gold-400/50 transition-colors">
<iconify-icon height="24" icon="solar:eye-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Competitive Intelligence
            </h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
              Public ledger transparency leaks proprietary trading strategies
              and position adjustments to competitors in real-time.
            </p>
</div>

<div className="glass-card p-8 rounded-xl reveal delay-300 group hover:bg-white/5 transition-colors">
<div className="w-12 h-12 rounded-lg bg-navy-800 flex items-center justify-center mb-6 text-gold-400 border border-white/10 group-hover:border-gold-400/50 transition-colors">
<iconify-icon height="24" icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Treasury Exposure
            </h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
              Visible wallet balances weaken negotiation leverage and paint
              targets for market manipulation during rebalancing.
            </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24" id="solution">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">
              Auditable Privacy Infrastructure
            </h2>
<p className="text-slate-400 mb-8 leading-relaxed">
              SolSeal provides a compliant shield for institutional capital. By
              encrypting state while maintaining the mathematical integrity of
              the ledger, we enable privacy without compromising auditability.
            </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 text-gold-400">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">
                    Confidential Balances
                  </h4>
<p className="text-slate-500 text-sm mt-1">
                    Earn 8-15% APY on encrypted assets hidden from public view.
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 text-gold-400">
<iconify-icon icon="solar:lock-keyhole-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">
                    Regulatory Compliance
                  </h4>
<p className="text-slate-500 text-sm mt-1">
                    Generate selective viewing keys for auditors and regulators
                    on demand.
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 text-gold-400">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">
                    Strategy Privacy
                  </h4>
<p className="text-slate-500 text-sm mt-1">
                    Execute complex DeFi strategies without signaling intent to
                    the market.
                  </p>
</div>
</div>
</div>
</div>
<div className="glass-card p-8 rounded-2xl border border-white/10 relative reveal delay-200">
<div className="absolute top-0 right-0 p-4 opacity-20">
<iconify-icon height="120" icon="solar:server-square-linear" width="120"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-6 border-b border-white/10 pb-4">
              Technical Foundation
            </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Encryption
                </span>
<p className="text-sm text-white font-medium">
                  ElGamal Homomorphic
                </p>
</div>
<div className="space-y-2">
<span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Zero-Knowledge
                </span>
<p className="text-sm text-white font-medium">Groth16 Proofs</p>
</div>
<div className="space-y-2">
<span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Performance
                </span>
<p className="text-sm text-white font-medium">
                  400ms Finality (
                  <span className="text-solana-green">Solana</span>
                  )
                </p>
</div>
<div className="space-y-2">
<span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Integrations
                </span>
<p className="text-sm text-white font-medium">
                  Kamino, Marinade, Jupiter
                </p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10">
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full animate-pulse bg-solana-green"></div>
<span className="text-xs font-mono text-slate-400">
                  System Operational • Mainnet Beta
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-navy-800/30">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-semibold text-white tracking-tight">
            Built for Institutional Operations
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-navy-900 border border-white/5 rounded-xl p-8 hover:border-gold-400/30 transition-all duration-300 reveal">
<iconify-icon className="text-slate-300 mb-6" icon="solar:buildings-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-3">
              Treasury Management
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Earn competitive yields on idle stablecoin assets without exposing
              cash positions to public scrutiny.
            </p>
</div>

<div className="bg-navy-900 border border-white/5 rounded-xl p-8 hover:border-gold-400/30 transition-all duration-300 reveal delay-100">
<iconify-icon className="text-slate-300 mb-6" icon="solar:chart-square-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-3">
              Large Position Mgmt
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Eliminate front-running slippage on $50M+ trades through encrypted
              mempool execution.
            </p>
</div>

<div className="bg-navy-900 border border-white/5 rounded-xl p-8 hover:border-gold-400/30 transition-all duration-300 reveal delay-200">
<iconify-icon className="text-slate-300 mb-6" icon="solar:lock-password-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-3">
              Proprietary Trading
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Protect your alpha. Execute proprietary strategies confidentially
              while retaining full custody.
            </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 overflow-hidden" id="compliance">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-12">
<div className="md:w-1/3 reveal">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">
              Regulatory Clarity for Compliant Privacy
            </h2>
<p className="text-slate-400 mb-8 text-sm leading-relaxed">
              SolSeal is engineered for the post-Tornado Cash regulatory
              landscape. We prioritize auditability and selective disclosure,
              ensuring institutions stay compliant with evolving frameworks.
            </p>
<div className="glass-card p-6 rounded-lg border-l-4 border-l-gold-400 bg-gold-400/5">
<iconify-icon className="text-gold-400 mb-4 opacity-50" icon="solar:quote-up-square-linear" width="24"></iconify-icon>
<blockquote className="text-sm text-slate-200 italic mb-4">
                "Technological solutions that allow for privacy while enabling
                regulatory oversight through selective disclosure are the path
                forward for institutional DeFi."
              </blockquote>
<cite className="text-xs font-semibold text-white not-italic block">
                – SEC Chair Atkins, 2025
              </cite>
</div>
</div>
<div className="md:w-2/3 relative reveal delay-200">

<div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
<div className="space-y-8 pl-12">

<div className="relative">
<div className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-navy-900 border-2 border-gold-400 shadow-[0_0_10px_rgba(240,180,41,0.5)]"></div>
<h4 className="text-white font-medium text-sm">
                  GENIUS Act (July 2025)
                </h4>
<p className="text-slate-500 text-sm mt-1">
                  Federal stablecoin framework establishing privacy standards
                  for issuers.
                </p>
</div>

<div className="relative">
<div className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-navy-900 border-2 border-slate-600"></div>
<h4 className="text-white font-medium text-sm">
                  CLARITY Act (July 2025)
                </h4>
<p className="text-slate-500 text-sm mt-1">
                  Safe harbor provisions for DeFi protocols implementing viewing
                  keys.
                </p>
</div>

<div className="relative">
<div className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-navy-900 border-2 border-slate-600"></div>
<h4 className="text-white font-medium text-sm">SEC Endorsement</h4>
<p className="text-slate-500 text-sm mt-1">
                  Explicit guidance supporting ZK proofs for client data
                  protection.
                </p>
</div>

<div className="relative">
<div className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-navy-900 border-2 border-slate-600"></div>
<h4 className="text-white font-medium text-sm">
                  Precedent Rulings
                </h4>
<p className="text-slate-500 text-sm mt-1">
                  Legal distinction established between "anonymity" (unlawful)
                  and "privacy" (lawful).
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-navy-950 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">
            Production-Ready Infrastructure
          </h2>
<p className="text-slate-400">
            Cryptographic primitives verified for high-value settlement.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors reveal">
<div className="text-gold-400 mb-4">
<iconify-icon icon="solar:key-minimalistic-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2 text-sm">Viewing Keys</h3>
<p className="text-slate-400 text-xs leading-relaxed">
              Granular permissioning allows institutions to share transaction
              history specifically with auditors or regulators.
            </p>
</div>
<div className="p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors reveal delay-100">
<div className="text-gold-400 mb-4">
<iconify-icon icon="solar:shield-user-linear" width="28"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2 text-sm">
              Compliance Oracles
            </h3>
<p className="text-slate-400 text-xs leading-relaxed">
              Integrated pre-transaction screening via Chainalysis and TRM Labs
              to prevent illicit fund interaction.
            </p>
</div>
<div className="p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors reveal delay-200">
<div className="text-gold-400 mb-4">
<iconify-icon icon="solar:graph-new-up-linear" width="28"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2 text-sm">
              Homomorphic Yield
            </h3>
<p className="text-slate-400 text-xs leading-relaxed">
              Smart contracts calculate and compound interest directly on
              encrypted balances without decrypting.
            </p>
</div>
<div className="p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors reveal delay-300">
<div className="text-gold-400 mb-4">
<iconify-icon icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2 text-sm">
              Delegation Tokens
            </h3>
<p className="text-slate-400 text-xs leading-relaxed">
              Privacy-preserving pool shares that maintain composability with
              the broader Solana DeFi ecosystem.
            </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-12 reveal">
          Built on Institutional-Grade Infrastructure
        </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 reveal delay-100">
<div className="p-4">
<div className="text-3xl font-light text-white mb-1">$35B+</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">
              Solana DeFi TVL
            </div>
</div>
<div className="p-4">
<div className="text-3xl font-light text-white mb-1">400ms</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">
              Block Finality
            </div>
</div>
<div className="p-4">
<div className="text-3xl font-light text-white mb-1">$0.001</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">
              Avg Transaction Cost
            </div>
</div>
<div className="p-4">
<div className="text-3xl font-light text-white mb-1">100%</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">
              Uptime (Since Feb '24)
            </div>
</div>
</div>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 reveal delay-200">
<span className="text-xl font-bold tracking-tighter text-white">
            KAMINO
          </span>
<span className="text-xl font-bold tracking-tighter text-white">
            MARINADE
          </span>
<span className="text-xl font-bold tracking-tighter text-white">
            JUPITER
          </span>
<span className="text-xl font-bold tracking-tighter text-white">
            PYTH
          </span>
</div>
</div>
</section>

<section className="relative z-10 py-20 bg-navy-800/20" id="security">
<div className="max-w-3xl mx-auto px-6 lg:px-8 text-center reveal">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-6 text-gold-400">
<iconify-icon icon="solar:shield-star-linear" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-white mb-8">
          Security First Architecture
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
<div className="flex items-center gap-3 p-3 bg-navy-900/50 border border-white/5 rounded">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-300">
              Audited by Trail of Bits &amp; Zellic
            </span>
</div>
<div className="flex items-center gap-3 p-3 bg-navy-900/50 border border-white/5 rounded">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-300">
              Battle-tested Groth16 ZK-SNARKs
            </span>
</div>
<div className="flex items-center gap-3 p-3 bg-navy-900/50 border border-white/5 rounded">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-300">
              Threshold Decryption Governance
            </span>
</div>
<div className="flex items-center gap-3 p-3 bg-navy-900/50 border border-white/5 rounded">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-300">
              $2M Immunefi Bug Bounty Program
            </span>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-10 text-center reveal">
          Who This Serves
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-card p-6 rounded-xl reveal delay-100">
<div className="text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">
              Corporate Treasury
            </div>
<div className="text-lg font-medium text-white mb-2">
              $200M USDC Allocation
            </div>
<p className="text-sm text-slate-400">
              Earning 10% APY confidentially while maintaining liquid access for
              operational expenses.
            </p>
</div>

<div className="glass-card p-6 rounded-xl reveal delay-200">
<div className="text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">
              Trading Firm
            </div>
<div className="text-lg font-medium text-white mb-2">
              $500M Annual Volume
            </div>
<p className="text-sm text-slate-400">
              Executing large block trades and arbitrage strategies without
              suffering front-running losses.
            </p>
</div>

<div className="glass-card p-6 rounded-xl reveal delay-300">
<div className="text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">
              Fund Management
            </div>
<div className="text-lg font-medium text-white mb-2">
              Alpha Protection
            </div>
<p className="text-sm text-slate-400">
              Deploying proprietary yield farming strategies while shielding
              positions from competitor monitoring.
            </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-gradient-to-b from-navy-900 to-navy-950 border-t border-white/5" id="whitepaper">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal">
<iconify-icon className="text-slate-400 mb-6" icon="solar:file-check-linear" width="48"></iconify-icon>
<h2 className="text-2xl font-semibold text-white mb-4">
          Read the Technical Documentation
        </h2>
<p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Dive deep into the cryptography, compliance architecture, and audit
          reports underpinning the SolSeal protocol.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-navy-950 hover:bg-slate-200 px-6 py-3 rounded text-sm font-semibold transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:download-linear" width="18"></iconify-icon>
            Download Whitepaper (PDF)
          </button>
<button className="bg-transparent text-white border border-white/20 hover:bg-white/5 px-6 py-3 rounded text-sm font-medium transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:code-square-linear" width="18"></iconify-icon>
            View Developer Docs
          </button>
</div>
</div>
</section>

<section className="relative z-10 py-24">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<div className="glass-card p-8 md:p-12 rounded-2xl text-center border-t-4 border-t-gold-400 reveal">
<h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Ready for Institutional Privacy Yield?
          </h2>
<p className="text-slate-400 mb-8">
            Join the closed beta for qualified institutional partners.
          </p>
<form className="space-y-4 text-left max-w-md mx-auto" onsubmit="event.preventDefault(); alert('Request received. Our institutional team will contact you shortly.');">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1 uppercase">
                Work Email
              </label>
<input className="w-full bg-navy-950 border border-white/10 rounded p-3 text-white text-sm focus:border-gold-400 focus:outline-none transition-colors" placeholder="name@institution.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1 uppercase">
                Institution Name
              </label>
<input className="w-full bg-navy-950 border border-white/10 rounded p-3 text-white text-sm focus:border-gold-400 focus:outline-none transition-colors" placeholder="e.g. Acme Capital" type="text"/>
</div>
<button className="w-full bg-gold-400 hover:bg-gold-500 text-navy-950 font-semibold py-3 rounded text-sm transition-colors mt-2" type="submit">
              Request Early Access
            </button>
<p className="text-[10px] text-slate-500 text-center mt-3 flex items-center justify-center gap-1">
<iconify-icon icon="solar:lock-linear"></iconify-icon>
              Your information is encrypted and never shared.
            </p>
</form>
</div>
</div>
</section>

<footer className="relative z-10 bg-navy-950 border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-xl font-semibold tracking-tight text-white block mb-6">
              SOLSEAL
            </span>
<p className="text-xs text-slate-500 leading-relaxed">
              The privacy infrastructure standard for institutional DeFi on
              Solana.
            </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li>
<a className="hover:text-gold-400 transition-colors" href="#">
                  About
                </a>
</li>
<li>
<a className="hover:text-gold-400 transition-colors" href="#">
                  Technology
                </a>
</li>
<li>
<a className="hover:text-gold-400 transition-colors" href="#">
                  Security
                </a>
</li>
<li>
<a className="hover:text-gold-400 transition-colors" href="#">
                  Integrations
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li>
<a className="hover:text-gold-400 transition-colors" href="#">
                  Whitepaper
                </a>
</li>
<li>
<a className="hover:text-gold-400 transition-colors" href="#">
                  Documentation
                </a>
</li>
<li>
<a className="hover:text-gold-400 transition-colors" href="#">
                  Audit Reports
                </a>
</li>
<li>
<a className="hover:text-gold-400 transition-colors" href="#">
                  Compliance Guide
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Connect</h4>
<div className="flex space-x-4 mb-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="mdi:twitter" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="mdi:github" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="mdi:discord" width="20"></iconify-icon>
</a>
</div>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="mailto:institutions@solseal.com">
              contact@solseal.com
            </a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">
            © 2026 SolSeal Protocol • Built on
            <span className="text-solana-purple font-medium">Solana</span>
</p>
<div className="flex gap-6">
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
