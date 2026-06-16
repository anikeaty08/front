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
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
navy: {
primary: '#233b77',
deep: '#1a2b56',
dark: '#0e1525',
},
gold: {
accent: '#fece0a',
dim: '#b39207',
},
bg: {
main: '#030304',
}
},
animation: {
'pulse-fast': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'power-pulse': 'powerPulse 3s ease-in-out infinite',
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
powerPulse: {
'0%, 100%': { boxShadow: '0 0 20px 0px rgba(254, 206, 10, 0.4)' },
'50%': { boxShadow: '0 0 50px 15px rgba(254, 206, 10, 0.8)' },
},
shimmer: {
'from': { backgroundPosition: '0 0' },
'to': { backgroundPosition: '-200% 0' }
}
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="watermark">ANTEGEN</div>
<div className="fixed inset-0 bg-grid-tech"></div>
<div className="glow-foundation"></div>
<div className="glow-core"></div>

<nav className="fixed top-0 w-full z-50 h-20 border-b border-white/5 bg-[#030304]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
<a className="flex items-center gap-2 group" href="/">
<div className="w-6 h-6 hexagon-shape bg-gold-accent flex items-center justify-center">
<div className="w-2 h-2 bg-navy-primary rounded-full"></div>
</div>
<span className="font-mono text-xs font-bold tracking-widest text-neutral-400 group-hover:text-white transition-colors">ANTEGEN_SYS</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-mono text-neutral-400 hover:text-gold-accent transition-colors uppercase tracking-widest" href="#">Workbench</a>
<a className="text-xs font-mono text-neutral-400 hover:text-gold-accent transition-colors uppercase tracking-widest" href="#">Audit Logs</a>
<a className="text-xs font-mono text-neutral-400 hover:text-gold-accent transition-colors uppercase tracking-widest" href="#">Docs</a>
</div>
<button className="px-5 py-2 border border-gold-accent/30 text-gold-accent text-xs font-mono hover:bg-gold-accent hover:text-navy-primary transition-all uppercase tracking-widest font-bold shadow-[0_0_15px_rgba(254,206,10,0.1)] hover:shadow-[0_0_20px_rgba(254,206,10,0.4)]">
                Launch_Console
            </button>
</div>
</nav>
<main className="flex-grow flex flex-col w-full relative z-10 pt-32">

<section className="flex flex-col text-center z-10 pt-10 pr-6 pb-24 pl-6 relative items-center">

<div className="mb-8 inline-flex items-center gap-3 px-4 py-1.5 border border-navy-primary/60 bg-navy-dark/80 backdrop-blur-sm rounded-sm">
<div className="w-1.5 h-1.5 bg-gold-accent rounded-full animate-pulse"></div>
<span className="text-[10px] font-mono font-bold text-gold-accent tracking-widest uppercase">
                    Human-in-the-Loop Architecture
                </span>
</div>

<div className="relative mb-8">
<h1 className="font-display font-bold text-7xl sm:text-8xl md:text-9xl tracking-tighter leading-[0.8] text-white select-none">
                AnteGen<span className="relative inline-block mx-1">.<div className="absolute inset-0 bg-gold-accent rounded-full power-dot -z-10 opacity-100 blur-md"></div></span><span className="text-gold-accent drop-shadow-[0_0_15px_rgba(254,206,10,0.5)]">AI</span>
</h1>
</div>

<div className="relative flex flex-col items-center gap-6 mb-12 max-w-4xl mx-auto">
<h2 className="md:text-5xl leading-tight text-3xl font-medium text-white tracking-tight font-display">
                Compliance Intelligence -
                <span className="text-white border-b border-gold-accent/50 pb-0.5">Anchored in Evidence.</span>
</h2>
<h3 className="text-lg md:text-2xl font-display text-neutral-400 tracking-tight">
                Map, Review, and Authorize in Days—Not Months.
                <span className="text-neutral-500 text-base md:text-xl">AnteGen.AI prepares the evidence; your experts remain in total control.</span>
</h3>
<p className="max-w-3xl text-center text-neutral-300 text-sm md:text-lg leading-relaxed font-sans border-l-2 border-gold-accent/30 pl-4 md:border-none md:pl-0 mt-4">
                Automate the heavy lifting of FedRAMP, SOC 2, and ISO compliance. Our AI maps your documentation to controls while
                providing a complete "Human-in-the-Loop" audit trail to accept, reject, or amend every finding.
                </p>
</div>
</section>

<section className="z-20 mb-32 pr-6 pl-6 relative">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-10">
<h2 className="font-display font-semibold text-3xl md:text-4xl text-white tracking-tight">
                Compliance you can prove. Not just claim.
              </h2>
<p className="mt-3 text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                AnteGen evaluates compliance the way auditors do — by tracing every claim to its source, correlating authoritative artifacts,
                and exposing gaps before they become findings.
              </p>
</div>

<div className="hidden md:block absolute top-[140px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-navy-primary/0 via-gold-accent/35 to-navy-primary/0 z-0"></div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

<div className="glass-card p-8 flex flex-col items-center text-center group hover:bg-white/[0.02] transition-colors relative overflow-hidden">
<div className="w-24 h-24 hexagon-shape bg-navy-dark/70 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(254,206,10,0.12)] group-hover:scale-110 transition-transform duration-500 z-10 relative">
<i className="w-8 h-8 text-gold-accent" data-lucide="link"></i>
</div>
<div className="absolute top-8 w-24 h-24 hexagon-shape bg-gold-accent/10 pointer-events-none scale-110 opacity-60"></div>
<h3 className="font-display font-semibold text-xl text-white mb-2 tracking-tight">
                  Evidence-Bound Traceability
                </h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
                  Every assessment ties back to verbatim source text with stable anchors, so reviewers can verify fast.
                </p>
<div className="mt-6 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-500">
<span className="inline-flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-gold-accent"></span>
                    Paragraph-level proof
                  </span>
</div>
</div>

<div className="glass-card p-8 flex flex-col items-center text-center group hover:bg-white/[0.02] transition-colors relative overflow-hidden">
<div className="w-24 h-24 hexagon-shape bg-navy-dark/70 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(254,206,10,0.12)] group-hover:scale-110 transition-transform duration-500 z-10 relative">
<i className="w-8 h-8 text-gold-accent" data-lucide="shuffle"></i>
</div>
<div className="absolute top-8 w-24 h-24 hexagon-shape bg-gold-accent/10 pointer-events-none scale-110 opacity-60"></div>
<h3 className="font-display font-semibold text-xl text-white mb-2 tracking-tight">
                  Cross-Artifact Correlation
                </h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
                  Compare authoritative artifacts (SSP, FIPS-199, evidence) to detect conflicts and missing proof early.
                </p>
<div className="mt-6 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-500">
<span className="inline-flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-gold-accent"></span>
                    Conflict detection
                  </span>
</div>
</div>

<div className="glass-card p-8 flex flex-col items-center text-center group hover:bg-white/[0.02] transition-colors relative overflow-hidden">
<div className="w-24 h-24 hexagon-shape bg-navy-dark/70 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(254,206,10,0.12)] group-hover:scale-110 transition-transform duration-500 z-10 relative">
<i className="w-8 h-8 text-gold-accent" data-lucide="stamp"></i>
</div>
<div className="absolute top-8 w-24 h-24 hexagon-shape bg-gold-accent/10 pointer-events-none scale-110 opacity-60"></div>
<h3 className="font-display font-semibold text-xl text-white mb-2 tracking-tight">
                  Decision Ledger &amp; Exportable Package
                </h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
                  Human approvals and overrides are captured with rationale — export a defensible, auditor-ready report anytime.
                </p>
<div className="mt-6 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-500">
<span className="inline-flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-gold-accent"></span>
                    Human-in-the-loop
                  </span>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full pb-32 px-6 z-20">
<div className="max-w-7xl mx-auto mb-8 flex items-center gap-3">
<div className="h-[1px] w-8 bg-gold-accent"></div>
<h2 className="text-sm font-mono uppercase tracking-widest text-gold-accent">Strategic Differentiator: The Decision Moat</h2>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="glass-card rounded-xl p-10 relative overflow-hidden group hover:border-gold-accent/30 transition-colors duration-500 flex flex-col justify-between h-full">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
<i className="w-48 h-48 text-white transform rotate-12" data-lucide="scroll-text"></i>
</div>
<div>
<div className="flex items-center gap-3 mb-6">
<span className="px-2 py-1 bg-gold-accent/10 border border-gold-accent/20 text-[10px] font-mono font-bold text-gold-accent uppercase tracking-widest rounded-sm">Accountability</span>
</div>
<h3 className="font-display font-bold text-3xl text-white mb-4 tracking-tight">Immutable Audit Log</h3>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-neutral-400 text-sm">Every accept, reject, and amendment is captured in an immutable narrative timeline.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-neutral-400 text-sm">Ensure total accountability during agency or third-party audits with timestamped decisions.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-neutral-400 text-sm">Never lose the "Why" behind a compliance decision.</span>
</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
<div>
<div className="text-2xl font-mono text-white mb-1">100%</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wider">Traceability</div>
</div>
<div>
<div className="text-2xl font-mono text-white mb-1">Time</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wider">Stamped Actions</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-10 relative overflow-hidden group hover:border-white/30 transition-colors duration-500 flex flex-col justify-between h-full">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
<i className="w-48 h-48 text-white transform -rotate-6" data-lucide="shield-check"></i>
</div>
<div>
<div className="flex items-center gap-3 mb-6">
<span className="px-2 py-1 bg-navy-primary/30 border border-navy-primary/50 text-[10px] font-mono font-bold text-blue-200 uppercase tracking-widest rounded-sm">Context</span>
</div>
<h3 className="font-display font-bold text-3xl text-white mb-4 tracking-tight">Intent over Artifacts</h3>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-neutral-400 text-sm">AnteGen.AI doesn't just store files; it stores compliance intent.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-neutral-400 text-sm">Detect ambiguous phrasing before the auditor does using AI-powered QC.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-neutral-400 text-sm">Link policies to specific controls with granular paragraph-level mapping.</span>
</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
<div>
<div className="text-2xl font-mono text-white mb-1">QC</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wider">Automated Checks</div>
</div>
<div>
<div className="text-2xl font-mono text-white mb-1">AI</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wider">Context Engine</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/10 bg-black/40 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-8">
<h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Live Traceability Ledger</h4>
<div className="flex gap-2 items-center">
<span className="font-mono text-xs text-neutral-600">AUDIT TRAIL:</span>
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="font-mono text-xs text-emerald-500">ACTIVE</span>
</div>
</div>
<div className="w-full border border-white/10 rounded-lg overflow-hidden bg-[#050507]">
<div className="grid grid-cols-12 gap-0 border-b border-white/10 bg-white/[0.02] py-3 px-4">
<div className="col-span-1 text-[10px] font-mono text-neutral-500 uppercase">Ctrl ID</div>
<div className="col-span-6 text-[10px] font-mono text-neutral-500 uppercase">Rationale (Human-Editable)</div>
<div className="col-span-2 text-[10px] font-mono text-neutral-500 uppercase">Status</div>
<div className="col-span-3 text-[10px] font-mono text-neutral-500 uppercase text-right">Reviewer Action</div>
</div>

<div className="grid grid-cols-12 gap-0 border-b border-white/5 py-4 px-4 items-center hover:bg-white/[0.01] transition-colors group cursor-default">
<div className="col-span-1 font-mono text-xs text-gold-accent">AC-02</div>
<div className="col-span-6 font-sans text-xs text-neutral-300 pr-4">
<div className="relative group/edit cursor-text">
<span className="flex items-center gap-2">
                                    Mapped "Automated System Account Management" to IAM Policy <i className="w-3 h-3 text-neutral-600 group-hover/edit:text-neutral-400" data-lucide="pencil"></i>
</span>
</div>
</div>
<div className="col-span-2">
<span className="font-mono text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">HUMAN-VERIFIED</span>
</div>
<div className="col-span-3 text-right flex items-center justify-end gap-2">
<div className="text-[10px] text-neutral-500 font-mono">2m ago</div>
<div className="w-6 h-6 rounded-full bg-neutral-700 flex items-center justify-center border border-white/10 text-[10px] text-white font-mono">JD</div>
</div>
</div>

<div className="grid grid-cols-12 gap-0 border-b border-white/5 py-4 px-4 items-center hover:bg-white/[0.01] transition-colors group cursor-default bg-gold-accent/[0.02]">
<div className="col-span-1 font-mono text-xs text-neutral-400">AU-06</div>
<div className="col-span-6 font-sans text-xs text-neutral-300 pr-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-neutral-400 italic">
<i className="w-3 h-3 text-gold-accent" data-lucide="sparkles"></i>
                                    AI Rationale (89% Confidence)
                                </div>
<div className="p-2 border border-white/10 rounded bg-black/20 text-neutral-400">
                                    Evidence found in "Data Transmission Policy" Section 4.1...
                                </div>
</div>
</div>
<div className="col-span-2">
<span className="font-mono text-[9px] font-semibold text-gold-accent bg-gold-accent/10 px-2 py-1 rounded border border-gold-accent/20">AI-SUGGESTED</span>
</div>
<div className="col-span-3 text-right flex items-center justify-end gap-2">
<button className="px-2 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-400 text-[10px] rounded transition-colors">Accept</button>
<button className="px-2 py-1 bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-400 text-[10px] rounded transition-colors">Edit</button>
</div>
</div>

<div className="grid grid-cols-12 gap-0 py-4 px-4 items-center hover:bg-white/[0.01] transition-colors group cursor-default">
<div className="col-span-1 font-mono text-xs text-white">SC-08</div>
<div className="col-span-6 font-sans text-xs text-neutral-300 pr-4">
<div className="relative group/edit cursor-text">
<span className="flex items-center gap-2">
<span className="text-blue-300 font-semibold">[Edited]</span> Transmission integrity protected by TLS 1.3... <i className="w-3 h-3 text-neutral-600 group-hover/edit:text-neutral-400" data-lucide="pencil"></i>
</span>
</div>
</div>
<div className="col-span-2">
<span className="font-mono text-[9px] font-semibold text-blue-300 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">EXPERT-AMENDED</span>
</div>
<div className="col-span-3 text-right flex items-center justify-end gap-2">
<div className="text-[10px] text-neutral-500 font-mono">1h ago</div>
<div className="w-6 h-6 rounded-full bg-navy-primary flex items-center justify-center border border-white/10 text-[10px] text-white font-mono">AS</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-black py-10 px-6 mt-auto">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-[pulse_3s_ease-in-out_infinite]"></div>
<span className="text-white font-display font-bold tracking-tight">AnteGen.AI</span>
</div>
<span className="text-neutral-600 font-mono text-[10px] pl-4">© 2024 EXECUTIVE PROOF ENVIRONMENT</span>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white text-xs transition-colors" href="#">Privacy</a>
<a className="text-neutral-500 hover:text-white text-xs transition-colors" href="#">Terms</a>
<a className="text-neutral-500 hover:text-white text-xs transition-colors" href="#">Security</a>
</div>
</div>
</footer>


    </>
  );
}
