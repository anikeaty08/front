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
navy: '#0a2f4e',
teal: '#1a6b8f',
success: '#2ecc71',
ice: '#d0e1ea',
},
backgroundImage: {
'premium-gradient': 'linear-gradient(to bottom right, #0a2f4e, #1a6b8f)',
'subtle-glow': 'radial-gradient(circle at center, rgba(26, 107, 143, 0.4) 0%, transparent 70%)',
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
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
      

<nav className="fixed top-0 w-full z-50 border-b border-ice/10 bg-navy/90 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 tracking-tight font-semibold text-lg text-white">
<div className="w-4 h-4 bg-gradient-to-tr from-teal to-success rounded-sm opacity-90"></div>
                SMART BLOCK ISLAND
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-ice/70">
<a className="hover:text-white transition-colors" href="#solution">Solutions</a>
<a className="hover:text-white transition-colors" href="#platform">Platform</a>
<a className="hover:text-white transition-colors" href="#security">Security</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-ice/70 hover:text-white transition-colors uppercase tracking-wider" href="#">Log In</a>
<a className="bg-ice/10 hover:bg-ice/20 border border-ice/20 text-white text-xs font-medium px-5 py-2.5 rounded-sm transition-all duration-300 backdrop-blur-sm" href="#">
                    Partnerships
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 bg-premium-gradient overflow-hidden">

<div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-teal/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-navy/50 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">

<div className="space-y-8 max-w-2xl reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-success/30 bg-success/5 text-success text-xs font-medium tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span>
                    Institutional Infrastructure
                </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-[1.1]">
                    Business Ownership, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-ice to-teal">Tokenized.</span>
</h1>
<p className="text-lg md:text-xl text-ice/70 leading-relaxed font-light max-w-lg">
                    The new standard for equity management. Create a single, immutable source of truth for your corporate structure.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="group bg-success hover:bg-[#27ae60] text-navy font-semibold text-sm px-8 py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(46,204,113,0.4)]">
                        Tokenize Your Business
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2" width="18"></iconify-icon>
</button>
<button className="bg-transparent hover:bg-white/5 border border-ice/20 text-ice font-medium text-sm px-8 py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-2">
                        For Partnerships
                    </button>
</div>
</div>

<div className="relative h-[500px] w-full flex items-center justify-center reveal delay-200">

<div className="w-32 h-32 border border-ice/30 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-sm absolute z-20 flex items-center justify-center shadow-2xl assemble-item">
<iconify-icon className="text-white text-4xl" icon="solar:smart-home-angle-linear"></iconify-icon>
</div>

<div className="absolute w-64 h-64 border border-ice/10 rounded-full animate-[spin_20s_linear_infinite] opacity-50 z-10"></div>
<div className="absolute w-96 h-96 border border-ice/5 rounded-full animate-[spin_30s_linear_infinite_reverse] opacity-30 z-0"></div>

<div className="absolute top-10 right-10 w-40 h-16 glass-panel rounded-sm flex items-center gap-3 px-4 assemble-item delay-100 shadow-lg">
<div className="w-8 h-8 rounded bg-teal/20 flex items-center justify-center text-success">
<iconify-icon icon="solar:chart-2-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-ice/50 uppercase tracking-widest">Equity</span>
<span className="text-sm font-medium text-white">100% Verified</span>
</div>
</div>
<div className="absolute bottom-20 left-0 w-48 h-14 glass-panel rounded-sm flex items-center gap-3 px-4 assemble-item delay-300 shadow-lg">
<div className="w-8 h-8 rounded bg-teal/20 flex items-center justify-center text-ice">
<iconify-icon icon="solar:user-id-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-ice/50 uppercase tracking-widest">Holder</span>
<span className="text-sm font-medium text-white">0x71...3A9</span>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-success/50 to-transparent absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-45"></div>
<div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-success/50 to-transparent absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -rotate-45"></div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#051a2e] relative border-y border-white/5">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<h2 className="text-3xl md:text-5xl font-medium text-ice/90 tracking-tight leading-tight mb-8">
                Business ownership has been <br/><span className="text-white font-semibold">trapped for centuries.</span>
</h2>
<p className="text-lg text-ice/60 leading-relaxed font-light mx-auto max-w-2xl">
                Paper certificates. Siloed spreadsheets. Fragmented legal data. The current infrastructure of equity is opaque, slow, and prone to error. We are replacing the analog friction with digital certainty.
            </p>
</div>
</section>

<section className="py-32 bg-navy relative overflow-hidden" id="solution">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

<div className="reveal">
<div className="text-success text-xs font-semibold tracking-widest uppercase mb-4">The Architecture</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                    Ownership clarity with a <br/>single source of truth.
                </h2>
<p className="text-ice/70 text-base leading-relaxed mb-8">
                    Smart Block Island unifies legal entity structure with on-chain verification. No more reconciliation errors. The token is the asset, and the ledger is the final authority.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-ice/90">
<iconify-icon className="text-success text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Real-time cap table updates
                    </li>
<li className="flex items-center gap-3 text-sm text-ice/90">
<iconify-icon className="text-success text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Programmatic compliance
                    </li>
<li className="flex items-center gap-3 text-sm text-ice/90">
<iconify-icon className="text-success text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Instant transfer settlement
                    </li>
</ul>
</div>

<div className="relative h-96 w-full glass-panel rounded-lg p-8 flex flex-col items-center justify-center reveal delay-200">

<div className="w-48 h-12 border border-success/30 bg-success/5 rounded-sm flex items-center justify-center mb-12 relative z-10">
<span className="text-success text-xs font-semibold tracking-wider uppercase">Source of Truth</span>

<div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-success/50 to-ice/20"></div>
</div>

<div className="w-full h-px bg-ice/10 relative mb-12">
<div className="absolute left-1/4 -top-1 w-2 h-2 bg-ice/50 rounded-full"></div>
<div className="absolute left-1/2 -top-1 w-2 h-2 bg-ice/50 rounded-full"></div>
<div className="absolute left-3/4 -top-1 w-2 h-2 bg-ice/50 rounded-full"></div>

<div className="absolute left-1/4 top-0 w-px h-12 bg-ice/10"></div>
<div className="absolute left-1/2 top-0 w-px h-12 bg-ice/10"></div>
<div className="absolute left-3/4 top-0 w-px h-12 bg-ice/10"></div>
</div>

<div className="flex justify-between w-full px-4">
<div className="w-24 h-8 border border-ice/20 rounded-sm flex items-center justify-center text-[10px] text-ice/60 uppercase">Legal</div>
<div className="w-24 h-8 border border-ice/20 rounded-sm flex items-center justify-center text-[10px] text-ice/60 uppercase">Finance</div>
<div className="w-24 h-8 border border-ice/20 rounded-sm flex items-center justify-center text-[10px] text-ice/60 uppercase">Ops</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-premium-gradient relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-24">

<div className="w-full md:w-1/2 relative h-[400px] reveal">

<div className="absolute inset-0 bg-teal/20 blur-[80px] rounded-full"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 border border-white/10 rounded-xl bg-navy/40 backdrop-blur-xl overflow-hidden shadow-2xl">

<div className="h-14 border-b border-white/5 flex items-center justify-between px-6">
<div className="w-20 h-2 bg-white/10 rounded-full"></div>
<div className="w-2 h-2 bg-success rounded-full"></div>
</div>

<div className="p-6 space-y-4">

<div className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-success/30 transition-colors group cursor-pointer">
<div className="flex justify-between items-start mb-2">
<div className="w-8 h-8 rounded-sm bg-gradient-to-br from-teal to-navy flex items-center justify-center text-white">
<span className="text-xs font-bold">SB</span>
</div>
<iconify-icon className="text-success text-lg opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="text-sm font-medium text-white">Smart Block Equity</div>
<div className="text-xs text-ice/50">Series A • Class Preferred</div>
</div>
<div className="p-4 rounded-lg border border-white/5 opacity-50">
<div className="flex justify-between items-start mb-2">
<div className="w-8 h-8 rounded-sm bg-white/5"></div>
</div>
<div className="w-24 h-3 bg-white/10 rounded-full mb-2"></div>
<div className="w-16 h-2 bg-white/5 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 reveal delay-100">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                        Ownership in your wallet.
                    </h2>
<p className="text-ice/70 text-lg leading-relaxed">
                        Custody is sovereignty. By tokenizing equity, we enable direct ownership without intermediaries holding the keys. View, verify, and manage your stake from a secure, personal environment.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-navy border-t border-white/5" id="platform">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Simplified Cap Table Management</h2>
<p className="text-ice/60">From chaotic spreadsheets to structured precision.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/10 rounded-lg overflow-hidden reveal delay-200">

<div className="bg-[#08243c] p-12 relative overflow-hidden group">
<div className="absolute top-4 left-4 text-xs text-red-400 font-mono uppercase tracking-widest">Legacy</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full p-8 opacity-40 group-hover:opacity-20 transition-opacity duration-700">
<div className="absolute top-20 left-10 w-24 h-12 border border-white/20 rotate-12"></div>
<div className="absolute top-40 right-20 w-32 h-16 border border-white/20 -rotate-6"></div>
<div className="absolute bottom-20 left-1/3 w-20 h-20 border border-white/20 rotate-45 rounded-full"></div>
<div className="absolute top-10 right-10 w-px h-40 bg-white/20 rotate-12"></div>
</div>
<div className="relative z-10 flex h-full items-center justify-center">
<p className="text-ice/40 font-mono text-sm">Disparate Data Silos</p>
</div>
</div>

<div className="bg-navy p-12 relative overflow-hidden group">
<div className="absolute top-4 left-4 text-xs text-success font-mono uppercase tracking-widest">Smart Block</div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
<div className="relative z-10 h-full flex flex-col justify-center gap-4">
<div className="flex items-center gap-4 border-b border-white/10 pb-2">
<div className="w-2 h-2 bg-success rounded-full"></div>
<div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-success/50 w-3/4"></div>
</div>
</div>
<div className="flex items-center gap-4 border-b border-white/10 pb-2">
<div className="w-2 h-2 bg-teal rounded-full"></div>
<div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-teal/50 w-1/2"></div>
</div>
</div>
<div className="flex items-center gap-4 border-b border-white/10 pb-2">
<div className="w-2 h-2 bg-ice rounded-full"></div>
<div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-ice/50 w-1/4"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a2f4e]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left border-t border-white/5 pt-12">
<div className="reveal">
<h3 className="text-4xl font-light text-white mb-2">100%</h3>
<p className="text-sm text-ice/60 uppercase tracking-widest font-medium mb-4">Reconciliation</p>
<p className="text-ice/70 text-sm leading-relaxed">Automated ledger balancing eliminates human error and dispute costs.</p>
</div>
<div className="reveal delay-100">
<h3 className="text-4xl font-light text-white mb-2">T+0</h3>
<p className="text-sm text-ice/60 uppercase tracking-widest font-medium mb-4">Settlement</p>
<p className="text-ice/70 text-sm leading-relaxed">Transfers execute instantly upon smart contract approval logic.</p>
</div>
<div className="reveal delay-200">
<h3 className="text-4xl font-light text-white mb-2">24/7</h3>
<p className="text-sm text-ice/60 uppercase tracking-widest font-medium mb-4">Availability</p>
<p className="text-ice/70 text-sm leading-relaxed">Always-on infrastructure. Ownership data is accessible anytime, anywhere.</p>
</div>
</div>
</section>

<section className="py-32 bg-premium-gradient relative overflow-hidden">
<div className="max-w-5xl mx-auto px-6 text-center relative z-10 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-16">Built for Complex Ownership</h2>
<div className="relative h-[400px] w-full mx-auto flex items-center justify-center">

<div className="w-24 h-24 rounded-full border border-ice/20 bg-navy/50 backdrop-blur-md z-20 flex items-center justify-center shadow-[0_0_30px_rgba(26,107,143,0.3)]">
<div className="w-3 h-3 bg-white rounded-full"></div>
</div>

<div className="absolute w-full max-w-lg h-px bg-gradient-to-r from-transparent via-ice/20 to-transparent"></div>
<div className="absolute h-full max-h-lg w-px bg-gradient-to-b from-transparent via-ice/20 to-transparent"></div>

<div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-4 h-4 border border-ice/50 bg-navy rounded-full"></div>
<div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-4 h-4 border border-ice/50 bg-navy rounded-full"></div>
<div className="absolute left-1/2 top-[10%] -translate-x-1/2 w-4 h-4 border border-ice/50 bg-navy rounded-full"></div>
<div className="absolute left-1/2 bottom-[10%] -translate-x-1/2 w-4 h-4 border border-ice/50 bg-navy rounded-full"></div>

<div className="absolute w-[70%] h-[70%] border border-ice/10 rounded-full scale-75"></div>
</div>
<p className="mt-12 text-ice/60 font-light max-w-xl mx-auto">
                Whether supporting SPVs, funds, or multi-jurisdictional entities, our structural graph handles limitless complexity with perfect symmetry.
            </p>
</div>
</section>

<section className="py-32 bg-navy border-t border-white/5" id="security">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative h-80 flex items-center justify-center reveal">

<div className="absolute w-48 h-64 bg-white/5 border border-white/10 rounded-sm -rotate-6 transform translate-x-4"></div>
<div className="absolute w-48 h-64 bg-white/5 border border-white/10 rounded-sm rotate-3 transform -translate-x-2"></div>
<div className="absolute w-48 h-64 bg-[#0a2f4e] border border-success/20 rounded-sm z-10 flex flex-col p-6 shadow-2xl">
<div className="flex items-center gap-2 mb-8">
<iconify-icon className="text-success" icon="solar:lock-password-linear"></iconify-icon>
<span className="text-[10px] text-success uppercase tracking-wider">Encrypted</span>
</div>
<div className="space-y-3">
<div className="h-1 w-full bg-white/10 rounded-full"></div>
<div className="h-1 w-2/3 bg-white/10 rounded-full"></div>
<div className="h-1 w-full bg-white/10 rounded-full"></div>
<div className="h-1 w-1/2 bg-white/10 rounded-full"></div>
</div>
<div className="mt-auto pt-4 border-t border-white/5">
<div className="text-[9px] font-mono text-ice/40 truncate">
                            Hash: 8f434346648f6b96df89dda901c5176b10a6d83961dd
                        </div>
</div>
</div>
</div>
<div className="order-1 md:order-2 reveal delay-100">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                    Ownership-Grade <br/>Document Security
                </h2>
<p className="text-ice/70 text-lg leading-relaxed">
                    Documents are not just stored; they are cryptographically anchored to the asset. Smart Block Island ensures that legal agreements travel with the ownership token, immutable and verified.
                </p>
</div>
</div>
</section>

<section className="py-32 bg-[#08243c]">
<div className="max-w-5xl mx-auto px-6 reveal">
<div className="text-xs text-teal font-semibold tracking-widest uppercase mb-12">Designed For</div>
<div className="space-y-12">
<div className="group border-b border-white/10 pb-8 hover:border-white/30 transition-colors cursor-default">
<h3 className="text-2xl md:text-3xl text-white font-medium mb-2 group-hover:text-success transition-colors">Business Owners &amp; Founders</h3>
<p className="text-ice/50 font-light">Seeking absolute clarity on equity distribution.</p>
</div>
<div className="group border-b border-white/10 pb-8 hover:border-white/30 transition-colors cursor-default">
<h3 className="text-2xl md:text-3xl text-white font-medium mb-2 group-hover:text-success transition-colors">CFOs &amp; Financial Teams</h3>
<p className="text-ice/50 font-light">Requiring automated reconciliation and audit-ready data.</p>
</div>
<div className="group border-b border-white/10 pb-8 hover:border-white/30 transition-colors cursor-default">
<h3 className="text-2xl md:text-3xl text-white font-medium mb-2 group-hover:text-success transition-colors">Legal Counsel</h3>
<p className="text-ice/50 font-light">Demanding structural integrity and compliance enforcement.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-navy border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight text-center mb-20 reveal">One Platform. Future-Ready Ownership.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 border border-white/10 rounded-sm bg-white/5 reveal delay-100">
<div className="w-12 h-12 border-2 border-white rounded-sm mb-6 flex items-center justify-center">
<div className="w-6 h-6 bg-white rounded-xs"></div>
</div>
<h4 className="text-white font-medium text-lg mb-2">Structure</h4>
<p className="text-sm text-ice/60">The foundational layer. Defining entities and issuance.</p>
</div>

<div className="p-8 border border-white/10 rounded-sm reveal delay-200">
<div className="w-12 h-12 border-2 border-white/50 rounded-sm mb-6"></div>
<h4 className="text-white font-medium text-lg mb-2">Ledger</h4>
<p className="text-sm text-ice/60">Immutable record keeping and transfer execution.</p>
</div>

<div className="p-8 border border-dashed border-white/20 rounded-sm reveal delay-300">
<div className="w-12 h-12 border-2 border-dotted border-white/30 rounded-sm mb-6 flex items-center justify-center">
<div className="w-1 h-1 bg-white/30 rounded-full"></div>
</div>
<h4 className="text-white/70 font-medium text-lg mb-2">Intelligence</h4>
<p className="text-sm text-ice/60">Predictive modeling and automated governance.</p>
</div>
</div>
</div>
</section>

<section className="py-40 bg-premium-gradient relative overflow-hidden flex items-center justify-center">

<div className="absolute w-[600px] h-[600px] bg-teal/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 text-center max-w-3xl px-6 reveal">
<h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
                Ownership, <span className="text-success">Unlocked.</span>
</h2>
<p className="text-lg text-ice/80 mb-12 font-light">
                Join the institutional shift to tokenized corporate infrastructure.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<button className="bg-success text-navy font-bold text-base px-10 py-5 rounded-sm hover:bg-[#27ae60] transition-all duration-300 shadow-lg hover:shadow-success/20 hover:-translate-y-1">
                    Tokenize Your Business
                </button>
<a className="text-white font-medium text-sm hover:text-success transition-colors border-b border-transparent hover:border-success pb-1" href="#">
                    Contact Institutional Sales
                </a>
</div>
</div>
</section>

<footer className="bg-navy border-t border-white/10 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white/80 font-semibold tracking-tight">
<div className="w-3 h-3 bg-gradient-to-tr from-teal to-success rounded-sm opacity-80"></div>
                SMART BLOCK ISLAND
            </div>
<div className="text-xs text-ice/40">
                © 2023 Smart Block Island. All rights reserved. Institutional Grade.
            </div>
</div>
</footer>



    </>
  );
}
