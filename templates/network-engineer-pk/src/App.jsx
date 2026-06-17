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
      

<div className="fixed top-0 left-0 w-[500px] h-[500px] bg-[#005073] rounded-full mix-blend-screen filter blur-[120px] opacity-10 -z-10 translate-x-[-50%] translate-y-[-50%]"></div>
<div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-[#0A0A0A] rounded-full mix-blend-overlay filter blur-[100px] opacity-20 -z-10"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-white tracking-tighter">
                    PK
                </div>
<span className="font-mono text-xs text-slate-500 uppercase tracking-widest">Sys_Status: Online</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#experience">Experience</a>
<a className="hover:text-white transition-colors" href="#stack">Stack</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
</div>
<a className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-medium text-white bg-white/5 hover:bg-white/10 transition-all flex items-center gap-2" href="#contact">
<span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                Available for Hire
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">

<div className="absolute inset-0 network-grid pointer-events-none z-0 opacity-50"></div>
<div className="relative z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#005073]/30 bg-[#005073]/10 text-[#005073] mb-8">
<span className="iconify text-sm" data-icon="lucide:shield-check"></span>
<span className="text-xs font-mono font-medium tracking-wide text-[#38bdf8]">CCIE CANDIDATE / PCNSE CERTIFIED</span>
</div>
<h1 className="relative z-10 text-4xl sm:text-5xl lg:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1] max-w-4xl mx-auto text-glow">
            Architecting Resilient <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">Enterprise Networks.</span>
</h1>
<p className="relative z-10 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Senior Network Engineer specializing in <span className="text-white font-medium">Cisco SDA</span>, Multi-Vendor Security, and Cloud Infrastructure. Delivering 99.999% uptime for Tier-1 financial and global institutions.
        </p>
<div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="group flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors" href="#contact">
                Connect on LinkedIn
                <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right"></span>
</a>
<button className="group flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-slate-300 text-sm font-medium bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all">
<span className="iconify" data-icon="lucide:file-down"></span>
                Download Technical CV
            </button>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="py-8 md:px-8 flex flex-col items-center text-center group">
<div className="mb-3 text-[#10B981]">
<span className="iconify w-6 h-6" data-icon="lucide:activity"></span>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-1 group-hover:text-[#10B981] transition-colors">Wimbledon</h3>
<p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Hybrid SDA Migration Lead</p>
</div>

<div className="py-8 md:px-8 flex flex-col items-center text-center group">
<div className="mb-3 text-[#005073]">
<span className="iconify w-6 h-6 text-[#38bdf8]" data-icon="lucide:server"></span>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-1 group-hover:text-[#38bdf8] transition-colors">NatWest Group</h3>
<p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Global Data Center Ops</p>
</div>

<div className="py-8 md:px-8 flex flex-col items-center text-center group">
<div className="mb-3 text-purple-500">
<span className="iconify w-6 h-6" data-icon="lucide:award"></span>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-1 group-hover:text-purple-400 transition-colors">PCNSE + CCNP</h3>
<p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Certified Security Expert</p>
</div>
</div>
</section>

<main className="max-w-7xl mx-auto px-6 py-24 space-y-24">

<div className="scroll-mt-24" id="stack">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-xl font-semibold text-white tracking-tight mb-2">Technical Arsenal</h2>
<p className="text-sm text-slate-500">Core competencies and infrastructure stack.</p>
</div>
<div className="hidden sm:flex gap-2 text-xs font-mono text-slate-600">
<span>// SYSTEM_CHECK: PASS</span>
<span>// LATENCY: 2ms</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-card rounded-xl p-6 lg:col-span-2 group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="flex items-start justify-between mb-6">
<div className="w-10 h-10 rounded-lg bg-[#005073]/20 flex items-center justify-center text-[#38bdf8] border border-[#005073]/30">
<span className="iconify w-5 h-5" data-icon="lucide:network"></span>
</div>
<span className="font-mono text-[10px] text-slate-500 border border-white/10 px-2 py-1 rounded">INFRA_V1.2</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Network Infrastructure</h3>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">
                        End-to-end design and deployment of enterprise fabrics. Expertise in migrating legacy 3-tier architectures to controller-based SDA overlays.
                    </p>
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
<span className="iconify text-[#10B981]" data-icon="lucide:check"></span> Cisco Catalyst 9000
                        </div>
<div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
<span className="iconify text-[#10B981]" data-icon="lucide:check"></span> Nexus 7K/9K
                        </div>
<div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
<span className="iconify text-[#10B981]" data-icon="lucide:check"></span> SDA Fabric / DNAC
                        </div>
<div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
<span className="iconify text-[#10B981]" data-icon="lucide:check"></span> Meraki SD-WAN
                        </div>
</div>
</div>

<div className="glass-card rounded-xl p-6 lg:col-span-1 group hover:border-[#10B981]/30 transition-colors">
<div className="flex items-start justify-between mb-6">
<div className="w-10 h-10 rounded-lg bg-[#10B981]/10 flex items-center justify-center text-[#10B981] border border-[#10B981]/20">
<span className="iconify w-5 h-5" data-icon="lucide:lock"></span>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-2">Security</h3>
<ul className="space-y-3 mt-4">
<li className="flex items-center justify-between text-xs text-slate-400 border-b border-white/5 pb-2">
<span>Palo Alto Panorama</span>
<span className="text-white font-mono">EXP</span>
</li>
<li className="flex items-center justify-between text-xs text-slate-400 border-b border-white/5 pb-2">
<span>Fortinet Fabric</span>
<span className="text-white font-mono">ADV</span>
</li>
<li className="flex items-center justify-between text-xs text-slate-400 pb-2">
<span>Cisco ISE/ASA</span>
<span className="text-white font-mono">PRO</span>
</li>
</ul>
</div>

<div className="glass-card rounded-xl p-6 lg:col-span-1 group">
<div className="flex items-start justify-between mb-6">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
<span className="iconify w-5 h-5" data-icon="lucide:route"></span>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-2">Protocols</h3>
<div className="flex flex-wrap gap-2 mt-4">
<span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">BGP</span>
<span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">OSPF</span>
<span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">VXLAN</span>
<span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">LISP</span>
<span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">MP-BGP</span>
</div>
</div>

<div className="glass-card rounded-xl p-6 lg:col-span-4 flex flex-col md:flex-row items-center gap-6 group hover:bg-white/[0.03] transition-colors">
<div className="w-12 h-12 shrink-0 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
<span className="iconify w-6 h-6" data-icon="lucide:cloud-cog"></span>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-white mb-1">Cloud &amp; Network Automation</h3>
<p className="text-sm text-slate-400">Bridging on-prem infrastructure with cloud native environments.</p>
</div>
<div className="flex gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 w-full md:w-auto justify-between md:justify-start">
<div className="text-center md:text-left">
<div className="text-[10px] font-mono text-slate-500 uppercase">AWS Networking</div>
<div className="text-sm text-white font-medium">TGW &amp; VPC</div>
</div>
<div className="text-center md:text-left">
<div className="text-[10px] font-mono text-slate-500 uppercase">IaC</div>
<div className="text-sm text-white font-medium">Terraform</div>
</div>
<div className="text-center md:text-left">
<div className="text-[10px] font-mono text-slate-500 uppercase">Scripting</div>
<div className="text-sm text-white font-medium">Python/Ansible</div>
</div>
</div>
</div>
</div>
</div>

<div className="scroll-mt-24" id="projects">
<h2 className="text-xl font-semibold text-white tracking-tight mb-8">Featured Project</h2>
<div className="glass-card rounded-xl p-0 overflow-hidden border border-[#10B981]/20">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 relative">

<div className="absolute inset-0 bg-gradient-to-tr from-[#10B981]/5 to-transparent pointer-events-none"></div>
<div className="flex items-center gap-3 mb-6">
<span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_10px_#10B981]"></span>
<span className="text-xs font-mono text-[#10B981] uppercase tracking-widest">Successful Completion</span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">AELTC (Wimbledon)</h3>
<p className="text-slate-400 leading-relaxed mb-8">
                            Led the critical migration of legacy switching infrastructure to a state-of-the-art Cisco SDA Fabric using LAN Automation. Ensured zero-downtime during The Championships.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-slate-400 border border-white/10">
<span className="iconify" data-icon="lucide:cpu"></span>
</div>
<div>
<div className="text-white text-sm font-medium">Underlay/Overlay Design</div>
<div className="text-xs text-slate-500 font-mono">IS-IS / LISP / VXLAN</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-slate-400 border border-white/10">
<span className="iconify" data-icon="lucide:shield"></span>
</div>
<div>
<div className="text-white text-sm font-medium">Macro/Micro Segmentation</div>
<div className="text-xs text-slate-500 font-mono">TrustSec SGTs</div>
</div>
</div>
</div>
</div>

<div className="bg-black/40 p-8 lg:p-12 flex flex-col justify-center">
<div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4 font-mono text-xs text-slate-400 shadow-2xl">
<div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
<span className="text-slate-500">terminal@dnac-controller:~</span>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
</div>
</div>
<div className="space-y-1">
<div className="flex">
<span className="text-[#10B981] mr-2">➜</span>
<span>verify fabric connectivity</span>
</div>
<div className="text-slate-500 pl-4">Scanning fabric nodes...</div>
<div className="pl-4">
<span className="text-slate-300">Edge_Node_01</span> <span className="text-[#10B981]">[REACHABLE]</span>
</div>
<div className="pl-4">
<span className="text-slate-300">Border_Node_01</span> <span className="text-[#10B981]">[REACHABLE]</span>
</div>
<div className="pl-4">
<span className="text-slate-300">Control_Plane</span> <span className="text-[#10B981]">[SYNCED]</span>
</div>
<div className="flex mt-2">
<span className="text-[#10B981] mr-2">➜</span>
<span>show isis neighbors detail</span>
</div>
<div className="text-slate-500 pl-4">
                                    System Id      Type    Interface    IP Address     State<br/>
                                    C9300-L1       L2      Gi1/0/48     192.168.10.2   UP
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/10 bg-[#050505] pt-16 pb-12" id="contact">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Ready to upgrade your infrastructure?</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<a className="min-w-[200px] py-3 rounded-lg bg-[#005073] text-white text-sm font-medium hover:bg-[#003d59] transition-all shadow-[0_0_20px_rgba(0,80,115,0.4)] hover:shadow-[0_0_30px_rgba(0,80,115,0.6)]" href="mailto:philip@example.com">
                    Initiate Contact
                </a>
<button className="min-w-[200px] py-3 rounded-lg border border-white/10 text-slate-300 text-sm font-medium hover:text-white hover:bg-white/5 transition-colors">
                    View LinkedIn Profile
                </button>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-slate-600 font-mono">
<p>© 2026 Philip Kuave. All systems nominal.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span> London, UK</span>
<span>Built with React + Tailwind</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
