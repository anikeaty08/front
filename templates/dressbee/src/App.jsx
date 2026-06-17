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
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-lg">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-4 h-4 bg-teal-500 rounded-sm rotate-45 flex items-center justify-center">
<div className="w-2 h-2 bg-slate-950 rounded-[1px]"></div>
</div>
                    DRESSBEE
                </a>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#services">Architecture</a>
<a className="hover:text-white transition-colors" href="#intelligence">Intelligence</a>
<a className="hover:text-white transition-colors" href="#about">The Hive</a>
<a className="hover:text-white transition-colors" href="#case-studies">Deployments</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-sm font-medium hover:text-white transition-colors" href="#">Sign In</a>
<a className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-950 shadow-sm hover:bg-slate-100 transition-colors" href="#">
                    Get Assessment
                </a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center text-center px-6">
<div className="absolute inset-0 tech-grid -z-10 pointer-events-none mt-16"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-medium tracking-widest uppercase mb-8">
<iconify-icon height="16" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Defending your digital hive
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter max-w-4xl leading-[1.1]">
                Zero-trust security for <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">decentralized networks.</span>
</h1>
<p className="mt-6 text-lg md:text-xl max-w-2xl text-slate-400 leading-relaxed font-normal">
                Dressbee secures your infrastructure with advanced behavioral analysis, continuous monitoring, and immutable endpoint shielding. We protect the collective.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-teal-500 px-6 py-3 text-sm font-medium text-slate-950 hover:bg-teal-400 transition-colors glow-effect" href="#">
                    Deploy Protection
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors" href="#">
                    View Documentation
                </a>
</div>
</section>

<section className="border-y border-white/5 bg-slate-950/50 py-10">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium tracking-widest uppercase text-slate-500 mb-8">Securing infrastructure for forward-thinking nodes</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale contrast-200">
<div className="flex items-center justify-center font-semibold tracking-tighter text-xl text-white">ACME CORP</div>
<div className="flex items-center justify-center font-semibold tracking-tighter text-xl text-white">QUANTUM</div>
<div className="flex items-center justify-center font-semibold tracking-tighter text-xl text-white">NEXUS</div>
<div className="flex items-center justify-center font-semibold tracking-tighter text-xl text-white">SYMBIOTE</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 max-w-2xl">
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">Architectural Defense Pillars</h2>
<p className="text-base text-slate-400">Our security model relies on overlapping layers of defense, ensuring that a breach at one point is contained and neutralized instantly.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-teal-500/30 transition-colors relative overflow-hidden flex flex-col">
<div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center mb-6 text-teal-400">
<iconify-icon height="24" icon="solar:network-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-3">Network Mesh Defense</h3>
<p className="text-sm text-slate-400 mb-8 flex-grow">Proactive shielding of complex network architectures. We map dependencies and enforce strict cryptographic boundaries between microservices.</p>
<a className="inline-flex items-center text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors mt-auto group-hover:gap-2 duration-300" href="#">
                            Explore Mesh <iconify-icon className="ml-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-teal-500/30 transition-colors relative overflow-hidden flex flex-col">
<div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center mb-6 text-teal-400">
<iconify-icon height="24" icon="solar:cpu-bolt-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-3">Endpoint Hex-Security</h3>
<p className="text-sm text-slate-400 mb-8 flex-grow">Immutable protection for every device accessing your hive. Autonomous agents detect anomalies and sever compromised connections instantly.</p>
<a className="inline-flex items-center text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors mt-auto group-hover:gap-2 duration-300" href="#">
                            Secure Endpoints <iconify-icon className="ml-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-teal-500/30 transition-colors relative overflow-hidden flex flex-col">
<div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center mb-6 text-teal-400">
<iconify-icon height="24" icon="solar:radar-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-3">Threat Intelligence</h3>
<p className="text-sm text-slate-400 mb-8 flex-grow">Real-time ingestion and analysis of emerging global cyber threats. Predictive models update your defense matrix before attacks manifest.</p>
<a className="inline-flex items-center text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors mt-auto group-hover:gap-2 duration-300" href="#">
                            View Intelligence <iconify-icon className="ml-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-slate-950 overflow-hidden relative" id="about">
<div className="absolute inset-0 opacity-20 pointer-events-none">

<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="43.4" id="hexagons" patterntransform="scale(2)" patternunits="userSpaceOnUse" width="50">
<path d="M25 0 L50 14.4 L50 43.4 L25 57.8 L0 43.4 L0 14.4 Z" fill="none" stroke="#334155" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#hexagons)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 text-teal-400 text-xs font-medium tracking-widest uppercase mb-4">
<iconify-icon height="16" icon="solar:widget-linear" width="16"></iconify-icon>
                        The Hive Metaphor
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6 leading-tight">Collective intelligence.<br/>Perfect structure.</h2>
<p className="text-base text-slate-400 mb-6 leading-relaxed">
                        In nature, a hive relies on decentralized awareness and immediate response to survive. A threat to one sector triggers a synchronized defense across the entire colony.
                    </p>
<p className="text-base text-slate-400 mb-8 leading-relaxed">
                        Dressbee mimics this biological perfection. We don't just build walls; we deploy a living, breathing security architecture. Every node, endpoint, and server acts as a sensor and a shield, ensuring your entire digital ecosystem is aware, resilient, and impenetrable.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-teal-500 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span><strong className="text-white font-medium">Decentralized telemetry:</strong> No single point of failure.</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-teal-500 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span><strong className="text-white font-medium">Automated isolation:</strong> Compromised units are quarantined in milliseconds.</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-teal-500 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span><strong className="text-white font-medium">Continuous adaptation:</strong> The system learns from every interaction.</span>
</li>
</ul>
</div>

<div className="relative h-[400px] lg:h-[500px] w-full bg-slate-900/50 border border-white/5 rounded-2xl flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 to-transparent"></div>

<div className="relative w-full h-full">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-slate-950 border border-teal-500/50 rounded-lg rotate-45 flex items-center justify-center z-20 shadow-[0_0_30px_-5px_rgba(45,212,191,0.4)]">
<div className="w-6 h-6 bg-teal-500 rounded-sm -rotate-45"></div>
</div>

<svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">

<line stroke="#2dd4bf" stroke-dasharray="4 4" stroke-opacity="0.2" strokeWidth="1" x1="50%" x2="20%" y1="50%" y2="20%"></line>
<line stroke="#2dd4bf" stroke-dasharray="4 4" stroke-opacity="0.2" strokeWidth="1" x1="50%" x2="80%" y1="50%" y2="30%"></line>
<line stroke="#2dd4bf" stroke-dasharray="4 4" stroke-opacity="0.2" strokeWidth="1" x1="50%" x2="70%" y1="50%" y2="80%"></line>
<line stroke="#2dd4bf" stroke-opacity="0.5" strokeWidth="1" x1="50%" x2="30%" y1="50%" y2="70%"></line> 

<line stroke="#fff" stroke-opacity="0.05" strokeWidth="1" x1="20%" x2="30%" y1="20%" y2="10%"></line>
<line stroke="#fff" stroke-opacity="0.05" strokeWidth="1" x1="80%" x2="90%" y1="30%" y2="50%"></line>
</svg>

<div className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900 border border-white/10 rounded-md rotate-45 z-10"></div>
<div className="absolute top-[30%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900 border border-white/10 rounded-md rotate-45 z-10"></div>
<div className="absolute top-[80%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-slate-900 border border-white/10 rounded-md rotate-45 z-10"></div>

<div className="absolute top-[70%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-slate-950 border border-teal-500/30 rounded-md rotate-45 z-10 flex items-center justify-center">
<div className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_10px_rgba(45,212,191,1)]"></div>
</div>

<div className="absolute top-[60%] left-[40%] w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_10px_rgba(45,212,191,1)]"></div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-900/10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-6">Ready to secure your hive?</h2>
<p className="text-base md:text-lg text-slate-400 mb-10">Integrate Dressbee's threat intelligence and continuous monitoring into your infrastructure within minutes. Zero downtime. Total visibility.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-sm font-medium text-slate-950 hover:bg-slate-200 transition-colors shadow-lg shadow-white/5" href="#">
                        Start Free Assessment
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-white/10 bg-transparent px-8 py-3.5 text-sm font-medium text-white hover:bg-white/5 transition-colors" href="#">
                        Contact Security Team
                    </a>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-slate-950 py-12 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
                    DRESSBEE
                </a>
<p className="text-sm text-slate-500 max-w-sm">
                    Defending digital ecosystems with next-generation behavioral analysis and decentralized security architecture.
                </p>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-teal-400 transition-colors" href="#">Mesh Defense</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#">Endpoint Security</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#">Threat Intel</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#">API Documentation</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-teal-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#">Security Blog</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
<p>© 2024 Dressbee Security. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">System Status</a>
</div>
</div>
</footer>

    </>
  );
}
