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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#02040a]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg tracking-tighter font-medium flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-sm"></div>
                SYNTHETIX
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-200" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors duration-200" href="#company">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:text-white transition-colors" href="#">Log in</a>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" href="#">
                    Contact Sales
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cyan-400 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                System Operational
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-8 leading-[1.1]">
                Invisible infrastructure for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-500">ambitious companies.</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                We manage your servers, workstations, and security protocols so you can focus on shipping code. Enterprise-grade maintenance, zero downtime.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-md bg-white text-black text-sm font-medium hover:bg-slate-200 transition-all flex items-center gap-2 group">
                    Start Maintenance Plan
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="h-10 px-6 rounded-md bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all">
                    View Service Level Agreement
                </button>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-6xl mx-auto px-6 py-10">
<p className="text-center text-xs font-medium text-slate-500 mb-8 uppercase tracking-widest">Trusted by engineering teams at</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tighter text-white">ACME<span className="text-cyan-500">CORP</span></span>
<span className="text-xl font-semibold tracking-tight text-white flex gap-1"><div className="w-6 h-6 bg-white rounded-full"></div> STRATA</span>
<span className="text-xl font-medium tracking-tighter text-white italic">Vertex.io</span>
<span className="text-xl font-bold tracking-tight text-white">NEXUS</span>
<span className="text-xl font-semibold tracking-tight text-white">KINETIC</span>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Complete System Oversight</h2>
<p className="text-slate-400 max-w-xl">From bare metal servers to employee workstations, we provide a unified maintenance layer.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 row-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
<iconify-icon className="text-blue-500" icon="lucide:server" width="200"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 text-blue-400">
<iconify-icon icon="lucide:database" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Server Management</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                                24/7 monitoring of CPU, memory, and disk health. Automated patch management and kernel updates for Linux and Windows environments without disrupting uptime.
                            </p>
</div>
<div className="mt-8 flex gap-4 text-xs font-mono text-slate-500">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div> Uptime 99.99%
                            </div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div> Latency &lt; 12ms
                            </div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 relative group hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20 text-purple-400">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Cybersecurity</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
                        Real-time threat detection, firewall configuration, and automated penetration testing schedules.
                    </p>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs text-slate-500 border-t border-white/5 pt-3">
<span>Threats Blocked</span>
<span className="text-white">14.2k</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-500 border-t border-white/5 pt-3">
<span>Compliance</span>
<span className="text-green-400">SOC2 Ready</span>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 group hover:bg-white/[0.03] transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20 text-emerald-400">
<iconify-icon icon="lucide:monitor" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Fleet Maintenance</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Remote MDM for employee laptops. Hardware procurement, onboarding setup, and secure offboarding wiping.
                    </p>
</div>

<div className="glass-card rounded-2xl p-8 group hover:bg-white/[0.03] transition-colors">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20 text-orange-400">
<iconify-icon icon="lucide:life-buoy" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Helpdesk Support</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Direct Slack integration for support tickets. 15-minute response time guarantee for critical blockers.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#02040a]">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                        Data-driven maintenance.
                    </h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                        We don't just fix things when they break. We use predictive telemetry to identify hardware failures before they happen.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 text-cyan-500">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Predictive Analysis</h4>
<p className="text-sm text-slate-500">AI-driven monitoring alerts us to drive degradation weeks in advance.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-cyan-500">
<iconify-icon icon="lucide:lock" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Zero-Trust Architecture</h4>
<p className="text-sm text-slate-500">Strict identity verification for every user and device accessing your network.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-cyan-500">
<iconify-icon icon="lucide:refresh-cw" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Automated Backups</h4>
<p className="text-sm text-slate-500">Immutable snapshots stored across three geographically distinct regions.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-20"></div>
<div className="relative rounded-lg bg-[#0A0C14] border border-white/10 p-6 shadow-2xl">

<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs font-mono text-slate-500">synthetix-cli — v2.4.0</div>
</div>

<div className="font-mono text-xs md:text-sm space-y-2">
<div className="flex gap-2">
<span className="text-cyan-500">➜</span>
<span className="text-slate-300">~ status --all</span>
</div>
<div className="text-slate-500 pt-2">Scanning infrastructure nodes...</div>
<div className="grid grid-cols-4 gap-4 py-2 text-slate-400">
<div>ID</div>
<div>REGION</div>
<div>LOAD</div>
<div>STATUS</div>
</div>
<div className="grid grid-cols-4 gap-4 border-l-2 border-green-500 pl-2 bg-green-500/5 py-1">
<div className="text-white">srv-01</div>
<div>us-east-1</div>
<div>24%</div>
<div className="text-green-400">ACTIVE</div>
</div>
<div className="grid grid-cols-4 gap-4 border-l-2 border-green-500 pl-2 py-1">
<div className="text-white">srv-02</div>
<div>eu-west-3</div>
<div>41%</div>
<div className="text-green-400">ACTIVE</div>
</div>
<div className="grid grid-cols-4 gap-4 border-l-2 border-yellow-500 pl-2 py-1 bg-yellow-500/5">
<div className="text-white">db-primary</div>
<div>us-west-2</div>
<div>89%</div>
<div className="text-yellow-400">WARN</div>
</div>
<div className="text-slate-500 pt-2">
<span className="text-yellow-500">!</span> Optimization routine auto-triggered for db-primary...
                            </div>
<div className="text-slate-500">
<span className="text-green-500">✓</span> Load balanced.
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                Ready to stabilize your stack?
            </h2>
<p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                Join high-growth companies outsourcing their IT headaches to Synthetix. 
                Simple monthly pricing, no hidden hourly fees.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<input className="h-10 px-4 w-full sm:w-64 rounded-md bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm" placeholder="enter@email.com" type="email"/>
<button className="h-10 px-6 w-full sm:w-auto rounded-md bg-white text-black text-sm font-medium hover:bg-slate-200 transition-colors whitespace-nowrap">
                    Get an Audit
                </button>
</div>
<p className="text-xs text-slate-600 mt-6">No credit card required for initial consultation.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#02040a] pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-white text-sm font-semibold tracking-tight flex items-center gap-2 mb-4" href="#">
<div className="w-4 h-4 bg-slate-700 rounded-sm"></div>
                        SYNTHETIX
                    </a>
<p className="text-slate-500 text-xs leading-relaxed max-w-xs">
                        Designing the standard for modern IT outsourcing. Operational excellence as a service.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Product</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Server Maintenance</a></li>
<li><a className="hover:text-white transition-colors" href="#">MDM Solutions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security Audits</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">SLA</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2024 Synthetix Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:github" width="16"></iconify-icon>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
