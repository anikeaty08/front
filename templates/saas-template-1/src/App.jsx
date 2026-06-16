import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Intersection Observer for fade-in elements
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        // Add class for animation manual trigger if needed
        document.querySelectorAll('.animate-up').forEach((el) => {
            // Reset for observation
            el.style.opacity = '0'; 
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-emerald-500 rounded-sm"></div>
<span className="text-sm font-semibold tracking-tight text-white">VaultSync</span>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-[11px] font-mono text-zinc-400 hover:text-white transition-colors" href="#platform">PLATFORM</a>
<a className="text-[11px] font-mono text-zinc-400 hover:text-white transition-colors" href="#workflow">WORKFLOW</a>
<a className="text-[11px] font-mono text-zinc-400 hover:text-white transition-colors" href="#compliance">COMPLIANCE</a>
</nav>
<a className="text-[11px] font-mono bg-white text-black px-4 py-1.5 rounded hover:bg-zinc-200 transition-colors" href="#contact">
                BOOK_DEMO
            </a>
</div>
</header>

<main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

<section className="mb-20 flex flex-col md:flex-row justify-between items-end gap-12 animate-up" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s, transform 0.6s'}}>
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-2 py-1 rounded mb-6">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
<span className="text-[10px] font-mono text-zinc-400 uppercase">SOC2 Type II Ready</span>
</div>
<h1 className="md:text-7xl leading-[0.95] text-5xl font-medium text-white tracking-tighter font-space-grotesk mb-6">
                    Instant trust for<br/>
<span className="text-zinc-500">modern enterprise.</span>
</h1>
<p className="text-base text-zinc-400 max-w-lg leading-relaxed font-light">
                    Eliminate sales objections with security-first infrastructure. We provide the compliance messaging and technical credibility you need to close deals faster.
                </p>
</div>
<div className="hidden md:flex flex-col gap-4 items-end animate-up delay-100" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s, transform 0.6s'}}>
<div className="flex items-center gap-3">
<span className="text-[10px] font-mono text-zinc-500 uppercase">Encryption</span>
<div className="custom-toggle active" onclick="this.classList.toggle('active')"></div>
</div>
<div className="flex items-center gap-3">
<span className="text-[10px] font-mono text-zinc-500 uppercase">SSO / SAML</span>
<div className="custom-toggle active" onclick="this.classList.toggle('active')"></div>
</div>
<div className="flex items-center gap-3">
<span className="text-[10px] font-mono text-zinc-500 uppercase">Audit Logs</span>
<div className="custom-toggle active" onclick="this.classList.toggle('active')"></div>
</div>
</div>
</section>

<section className="border-y animate-up delay-200 border-white/5 mb-24 pt-8 pb-8" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s, transform 0.6s'}}>
<p className="text-center text-[10px] font-mono text-zinc-600 uppercase mb-6 tracking-widest">Trusted by security teams at</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale">
<div className="flex items-center gap-2 text-zinc-300 font-semibold tracking-tight text-lg"><iconify-icon icon="solar:asteroid-bold-duotone"></iconify-icon> Nebula</div>
<div className="flex items-center gap-2 text-zinc-300 font-semibold tracking-tight text-lg"><iconify-icon icon="solar:black-hole-line-duotone"></iconify-icon> VOID</div>
<div className="flex items-center gap-2 text-zinc-300 font-semibold tracking-tight text-lg"><iconify-icon icon="solar:atom-line-duotone"></iconify-icon> KINETIC</div>
<div className="flex items-center gap-2 text-zinc-300 font-semibold tracking-tight text-lg"><iconify-icon icon="solar:infinity-line-duotone"></iconify-icon> LOOPS</div>
<div className="flex items-center gap-2 text-zinc-300 font-semibold tracking-tight text-lg"><iconify-icon icon="solar:shield-star-line-duotone"></iconify-icon> FORTRESS</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px] mb-24 animate-up delay-200" id="platform" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s, transform 0.6s'}}>

<div className="md:col-span-2 row-span-1 tech-card rounded-xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-linear" width="120"></iconify-icon>
</div>
<div className="h-full flex flex-col justify-between relative z-10">
<div>
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] font-mono border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 rounded text-emerald-400">SECURITY UI</span>
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:lock-password-linear"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-2">Zero-Trust Architecture</h3>
<p className="text-sm text-zinc-400 max-w-sm">Deploy security-focused UI patterns that build confidence. Multi-factor authentication flows and session management out of the box.</p>
</div>

<div className="flex items-end gap-1 h-12 w-32 mt-auto">
<div className="w-2 bg-emerald-900 h-[40%] rounded-sm"></div>
<div className="w-2 bg-emerald-800 h-[60%] rounded-sm"></div>
<div className="w-2 bg-emerald-700 h-[50%] rounded-sm"></div>
<div className="w-2 bg-emerald-600 h-[80%] rounded-sm"></div>
<div className="w-2 bg-white h-[100%] rounded-sm"></div>
</div>
</div>
</div>

<div className="tech-card rounded-xl p-8 flex flex-col justify-between group">
<div className="w-10 h-10 bg-white/5 border border-white/10 rounded flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:file-check-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-white font-medium tracking-tight mb-2">Compliance Ready</h3>
<p className="text-xs text-zinc-400 leading-relaxed">
                        Automated evidence collection for SOC2, HIPAA, and GDPR. Reduce vendor risk assessment time by 40%.
                    </p>
</div>
</div>

<div className="tech-card rounded-xl p-6 md:col-span-1 flex flex-col justify-center overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
<div className="font-mono text-[10px] text-zinc-500 leading-6 opacity-60">
<div className="flex"><span className="text-purple-400">import</span> { <span className="text-blue-400">Vault</span> } <span className="text-purple-400">from</span> <span className="text-yellow-300">'@vaultsync/sdk'</span>;</div>
<div className="mt-2"><span className="text-zinc-300">const</span> <span className="text-blue-400">session</span> = <span className="text-purple-400">await</span> Vault.verify({</div>
<div className="pl-4"><span className="text-blue-400">policy</span>: <span className="text-green-400">'strict_mfa'</span>,</div>
<div className="pl-4"><span className="text-blue-400">audit</span>: <span className="text-green-400">true</span></div>
<div>});</div>
<div className="flex mt-2"><span className="text-zinc-600">// Identity verified</span></div>
</div>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-lg text-white font-medium tracking-tight">Developer API</h3>
</div>
</div>

<div className="md:col-span-2 tech-card rounded-xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="h-full flex flex-col justify-between relative z-10">
<div className="flex justify-between items-start">
<span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-zinc-400">RESULTS</span>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-2">Increased Enterprise Demos</h3>
<p className="text-sm text-zinc-400 max-w-md">By implementing our technical credibility sections, clients see a drastic reduction in sales cycle friction.</p>
</div>
<div className="text-right hidden md:block">
<div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">Objections</div>
<div className="text-xl text-white font-mono">-65%</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-24 animate-up delay-300" id="workflow" style={{opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.6s, transform 0.6s'}}>
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="md:w-1/3 md:sticky md:top-24">
<h2 className="text-sm font-mono text-zinc-500 uppercase mb-4">Integration</h2>
<h3 className="text-3xl text-white font-medium tracking-tight mb-4">Drop-in Reliability</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Our SDK is designed to live alongside your existing auth stack. We handle the heavy lifting of audit logging and encryption key management.
                    </p>
<div className="mt-8 flex flex-col gap-2">
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Typescript Ready
                         </div>
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> &lt;10ms Latency
                         </div>
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> 99.99% Uptime
                         </div>
</div>
</div>
<div className="md:w-2/3 border-l border-dashed border-zinc-800 pl-8 md:pl-12 space-y-12 relative">

<div className="relative group">
<div className="absolute -left-[39px] md:-left-[55px] top-0 w-3 h-3 bg-zinc-900 border border-zinc-700 rounded-full group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-colors"></div>
<div className="mb-4">
<span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">STEP 01</span>
</div>
<h4 className="text-lg text-white font-medium mb-2">Install the VaultSync Agent</h4>
<p className="text-sm text-zinc-500 mb-4 max-w-sm">Run our binary or install via npm to initialize the secure tunnel.</p>
<div className="bg-[#121215] border border-white/10 rounded-lg p-4 font-mono text-xs text-zinc-400">
<span className="select-none text-zinc-600 mr-2">$</span>npm install @vaultsync/core
                        </div>
</div>

<div className="relative group">
<div className="absolute -left-[39px] md:-left-[55px] top-0 w-3 h-3 bg-zinc-900 border border-zinc-700 rounded-full group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-colors"></div>
<div className="mb-4">
<span className="text-xs font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded">STEP 02</span>
</div>
<h4 className="text-lg text-white font-medium mb-2">Configure Policies</h4>
<p className="text-sm text-zinc-500 mb-4 max-w-sm">Define data retention rules and encryption standards in your dashboard.</p>
</div>

<div className="relative group">
<div className="absolute -left-[39px] md:-left-[55px] top-0 w-3 h-3 bg-zinc-900 border border-zinc-700 rounded-full group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-colors"></div>
<div className="mb-4">
<span className="text-xs font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded">STEP 03</span>
</div>
<h4 className="text-lg text-white font-medium mb-2">Automated Compliance</h4>
<p className="text-sm text-zinc-500 max-w-sm">We automatically generate evidence reports and sync them to your Vanta or Drata account.</p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden mb-24 animate-up delay-300" style={{opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.6s, transform 0.6s'}}>
<div className="bg-[#09090b] p-6 text-center group hover:bg-[#121215] transition-colors">
<div className="text-2xl text-white font-mono font-medium mb-1 group-hover:text-emerald-400 transition-colors">240ms</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider">Global Latency</div>
</div>
<div className="bg-[#09090b] p-6 text-center group hover:bg-[#121215] transition-colors">
<div className="text-2xl text-white font-mono font-medium mb-1 group-hover:text-emerald-400 transition-colors">50TB+</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider">Data Secured</div>
</div>
<div className="bg-[#09090b] p-6 text-center group hover:bg-[#121215] transition-colors">
<div className="text-2xl text-white font-mono font-medium mb-1 group-hover:text-emerald-400 transition-colors">99.9%</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider">Uptime SLA</div>
</div>
<div className="bg-[#09090b] p-6 text-center group hover:bg-[#121215] transition-colors">
<div className="text-2xl text-white font-mono font-medium mb-1 group-hover:text-emerald-400 transition-colors">24/7</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider">Support</div>
</div>
</section>

<section className="border-t border-white/10 pt-16 mb-24 animate-up delay-400" id="compliance" style={{opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.6s, transform 0.6s'}}>
<div className="flex flex-col md:flex-row gap-12">
<div className="w-full md:w-1/3">
<h2 className="text-sm font-mono text-zinc-500 uppercase mb-4">Technical Credibility</h2>
<p className="text-white text-xl tracking-tight leading-snug">
                        Security is not a feature, it's the foundation. We prove it at every layer of the stack.
                    </p>
</div>
<div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
<div className="group">
<div className="text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:lock-keyhole-linear"></iconify-icon>
<span className="font-medium">End-to-End Encryption</span>
</div>
<p className="text-sm text-zinc-500">AES-256 encryption for data at rest and TLS 1.3 for data in transit.</p>
</div>
<div className="group">
<div className="text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:user-id-linear"></iconify-icon>
<span className="font-medium">Identity Management</span>
</div>
<p className="text-sm text-zinc-500">Granular role-based access control (RBAC) and SSO integration.</p>
</div>
<div className="group">
<div className="text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:document-text-linear"></iconify-icon>
<span className="font-medium">Immutable Audit Logs</span>
</div>
<p className="text-sm text-zinc-500">Complete traceability of every action for forensic analysis.</p>
</div>
<div className="group">
<div className="text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:radar-2-linear"></iconify-icon>
<span className="font-medium">Threat Intelligence</span>
</div>
<p className="text-sm text-zinc-500">Real-time monitoring and automated incident response protocols.</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#121215] border border-white/5 rounded-2xl p-8 md:p-12 relative overflow-hidden animate-up delay-400" id="contact" style={{opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.6s, transform 0.6s'}}>

<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
</div>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
<div className="max-w-md">
<h2 className="text-3xl text-white font-medium tracking-tight mb-4">Secure your infrastructure</h2>
<p className="text-zinc-400 text-sm mb-8">
                        Ready to build trust with enterprise buyers? Schedule a technical demo with our engineering team.
                    </p>
<a className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded text-sm font-medium hover:bg-zinc-200 transition-colors" href="mailto:security@vaultsync.com">
                        security@vaultsync.com <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-4 text-right">
<div className="flex items-center gap-2 justify-end text-zinc-400 text-sm">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-linear" width="14"></iconify-icon> Systems Operational
                    </div>
<div className="flex gap-4 justify-end">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:twitter" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:github" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:linkedin" width="20"></iconify-icon></a>
</div>
<div className="text-[10px] font-mono text-zinc-600 uppercase mt-4">
                        © 2025 VaultSync Security.
                    </div>
</div>
</div>
</footer>
</main>


    </>
  );
}
