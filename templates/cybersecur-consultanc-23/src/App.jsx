import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-semibold tracking-tighter uppercase flex items-center gap-2" href="#">
<div className="w-2 h-2 bg-white rounded-full"></div>
                PROTOCOL
            </a>
<div className="hidden md:flex gap-8 text-xs font-medium text-neutral-400 tracking-tight">
<a className="hover:text-white transition-colors" href="#expertise">EXPERTISE</a>
<a className="hover:text-white transition-colors" href="#methodology">METHODOLOGY</a>
<a className="hover:text-white transition-colors" href="#contact">CONTACT</a>
</div>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded hover:bg-neutral-200 transition-colors tracking-tight" href="#contact">
                SECURE ACCESS
            </a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">

<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl hero-glow pointer-events-none z-0"></div>
<div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-medium tracking-wider uppercase text-neutral-300">Systems Operational</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-500">
                Silence the noise.<br/>Secure the signal.
            </h1>
<p className="text-neutral-400 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
                Advanced threat mitigation and infrastructure hardening for high-value targets. We operate in the shadows to keep your data in the light.
            </p>
<div className="pt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
<button className="group relative px-6 py-3 bg-white text-black text-sm font-medium rounded overflow-hidden transition-all hover:pr-8">
<span className="relative z-10 flex items-center gap-2">
                        Initiate Audit
                        <iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" width="16"></iconify-icon>
</span>
</button>
<button className="px-6 py-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                    View Credentials
                </button>
</div>
</div>

<div className="absolute bottom-10 left-6 md:left-10 opacity-30 hidden md:block">
<div className="font-mono text-[10px] text-neutral-500 flex flex-col gap-1">
<div className="flex gap-2">
<span className="text-emerald-500">➜</span>
<span>~ init_protocol --secure</span>
</div>
<div className="pl-4">Loading modules... [OK]</div>
<div className="pl-4">Establishing handshake... [OK]</div>
<div className="pl-4 animate-blink">_</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 bg-[#050505]" id="expertise">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-2">Operational Capabilities</h2>
<p className="text-neutral-500 text-sm max-w-sm">Comprehensive security architecture designed to withstand state-level actors.</p>
</div>
<div className="h-px bg-white/10 flex-grow mb-2 hidden md:block ml-10"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">

<div className="group relative bg-[#0a0a0a] p-8 hover:bg-[#0f0f0f] transition-colors duration-300">
<div className="mb-6 text-neutral-400 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Penetration Testing</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                        Simulating sophisticated cyberattacks to identify vulnerabilities before they are exploited by malicious entities.
                    </p>
</div>

<div className="group relative bg-[#0a0a0a] p-8 hover:bg-[#0f0f0f] transition-colors duration-300">
<div className="mb-6 text-neutral-400 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:lock" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Zero-Trust Architecture</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                        Implementing rigorous identity verification and least-privilege access controls across your entire infrastructure.
                    </p>
</div>

<div className="group relative bg-[#0a0a0a] p-8 hover:bg-[#0f0f0f] transition-colors duration-300">
<div className="mb-6 text-neutral-400 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:eye" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Threat Intelligence</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                        Proactive monitoring of the dark web and emerging threat vectors specific to your industry vertical.
                    </p>
</div>

<div className="group relative bg-[#0a0a0a] p-8 hover:bg-[#0f0f0f] transition-colors duration-300">
<div className="mb-6 text-neutral-400 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:file-code" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Code Auditing</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                        Line-by-line static and dynamic analysis of your application source code to ensure sanitary execution.
                    </p>
</div>

<div className="group relative bg-[#0a0a0a] p-8 hover:bg-[#0f0f0f] transition-colors duration-300">
<div className="mb-6 text-neutral-400 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:server" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Infrastructure Hardening</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                        Securing cloud and on-premise servers against DDoS, injection attacks, and unauthorized lateral movement.
                    </p>
</div>

<div className="group relative bg-[#0a0a0a] p-8 hover:bg-[#0f0f0f] transition-colors duration-300">
<div className="mb-6 text-neutral-400 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:fingerprint" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Forensics &amp; Recovery</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                        Rapid response teams available 24/7 to contain breaches, analyze intrusion paths, and restore data integrity.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-[#080808]">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12">
<div className="flex flex-col gap-2">
<span className="text-4xl font-medium tracking-tight text-white">0</span>
<span className="text-xs uppercase tracking-widest text-neutral-500">Breaches Post-Audit</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl font-medium tracking-tight text-white">$4B+</span>
<span className="text-xs uppercase tracking-widest text-neutral-500">Assets Secured</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl font-medium tracking-tight text-white">100%</span>
<span className="text-xs uppercase tracking-widest text-neutral-500">Uptime Maintained</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl font-medium tracking-tight text-white">24/7</span>
<span className="text-xs uppercase tracking-widest text-neutral-500">Active Monitoring</span>
</div>
</div>
<div className="mt-16 pt-16 border-t border-white/5 flex flex-wrap justify-center md:justify-between gap-8 opacity-40 grayscale">

<span className="text-lg font-semibold tracking-tighter">ACME CORP</span>
<span className="text-lg font-semibold tracking-tighter">VENTURE</span>
<span className="text-lg font-semibold tracking-tighter">ORBITAL</span>
<span className="text-lg font-semibold tracking-tighter">HYPERION</span>
<span className="text-lg font-semibold tracking-tighter">SYNTHESIS</span>
</div>
</div>
</section>

<section className="py-32 px-6" id="methodology">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight">
                    Security is not a product.<br/>It is a process.
                </h2>
<div className="space-y-6 text-neutral-400 font-light text-sm md:text-base leading-relaxed">
<p>
                        We do not believe in generic firewalls or out-of-the-box antivirus solutions. Real security requires a bespoke understanding of your operational architecture and the specific threat landscape you inhabit.
                    </p>
<p>
                        Our approach is adversarial by design. We attack your systems with the same ferocity as real-world actors, exposing weaknesses that automated scans miss. By the time we are done, your infrastructure is not just secure; it is resilient.
                    </p>
</div>
<div className="flex gap-4 pt-4">
<div className="flex flex-col gap-1">
<div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-white w-3/4 rounded-full"></div>
</div>
<span className="text-[10px] text-neutral-500 uppercase tracking-wider">Detection Speed</span>
</div>
<div className="flex flex-col gap-1">
<div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-white w-[95%] rounded-full"></div>
</div>
<span className="text-[10px] text-neutral-500 uppercase tracking-wider">Patch Efficiency</span>
</div>
</div>
</div>

<div className="relative h-[400px] w-full bg-[#0a0a0a] border border-white/5 rounded-lg overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 rounded-full border border-white/5 scale-[0.8]"></div>
<div className="absolute inset-0 rounded-full border border-white/5 scale-[0.6]"></div>
<div className="absolute inset-0 rounded-full border border-white/5 scale-[0.4]"></div>
<div className="absolute top-1/2 left-1/2 w-1/2 h-px bg-gradient-to-r from-transparent to-white/20 origin-left animate-[spin_4s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<iconify-icon className="text-white/20" icon="lucide:shield" width="48"></iconify-icon>
</div>

<div className="absolute top-1/4 left-1/4 w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></div>
<div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-red-500 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="contact">
<div className="max-w-xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-2xl font-medium tracking-tight mb-2">Secure Communication Channel</h2>
<p className="text-neutral-500 text-sm">Encrypted end-to-end. We respond within 2 hours.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider pl-1">Identifier</label>
<input className="w-full bg-[#0a0a0a] border border-neutral-800 text-white text-sm px-4 py-3 rounded focus:outline-none focus:border-white/40 focus:bg-[#0f0f0f] transition-all placeholder:text-neutral-700" placeholder="Name or Alias" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider pl-1">Signal</label>
<input className="w-full bg-[#0a0a0a] border border-neutral-800 text-white text-sm px-4 py-3 rounded focus:outline-none focus:border-white/40 focus:bg-[#0f0f0f] transition-all placeholder:text-neutral-700" placeholder="email@domain.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider pl-1">Priority Level</label>
<div className="relative w-full h-12 bg-[#0a0a0a] border border-neutral-800 rounded flex items-center p-1">

<input className="w-full h-full opacity-0 absolute z-20 cursor-pointer" max="3" min="1" type="range" value="1"/>
<div className="w-1/3 h-full bg-neutral-800 rounded flex items-center justify-center text-xs text-white z-10 pointer-events-none transition-all" style={{width: '33%'}}>
                            Low
                        </div>
<div className="absolute left-1 top-1 bottom-1 w-[32%] bg-neutral-700 rounded transition-all"></div>

<div className="absolute inset-0 flex justify-between items-center px-6 text-xs text-neutral-500 pointer-events-none">
<span className="text-white">Standard</span>
<span>Urgent</span>
<span>Critical</span>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider pl-1">Payload</label>
<textarea className="w-full bg-[#0a0a0a] border border-neutral-800 text-white text-sm px-4 py-3 rounded focus:outline-none focus:border-white/40 focus:bg-[#0f0f0f] transition-all placeholder:text-neutral-700 resize-none" placeholder="Briefing details..." rows="4"></textarea>
</div>

<div className="flex items-center gap-3 py-2">
<label className="relative inline-flex items-center cursor-pointer group">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-400 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white peer-checked:after:bg-black"></div>
<span className="ml-3 text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">Request NDA prior to discussion</span>
</label>
</div>
<button className="w-full py-4 bg-white text-black text-sm font-semibold rounded hover:bg-neutral-200 transition-colors mt-4" type="button">
                    Transmit Securely
                </button>
</form>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#050505]">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-neutral-800 rounded-full"></div>
<span className="text-xs text-neutral-500 tracking-tight">© 2024 PROTOCOL SECURITY</span>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:github" width="16"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="text-center mt-8">
<p className="text-[10px] text-neutral-700 font-mono">ENCRYPTED // 256-BIT // AES</p>
</div>
</footer>

    </>
  );
}
