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
slate: {
850: '#151b2e',
900: '#0f172a',
950: '#020617',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}

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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-2/3 h-2/3 bg-indigo-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-2/3 h-2/3 bg-violet-900/10 rounded-full blur-[120px]"></div>
<div className="absolute top-[20%] right-[20%] w-1/4 h-1/4 bg-blue-900/10 rounded-full blur-[80px]"></div>
</div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-slate-950/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
<span className="iconify text-white" data-icon="lucide:scan-eye" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="text-white font-semibold tracking-tight text-lg group-hover:text-indigo-200 transition-colors">1TOUCH.IO</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Resources</a>
<a className="hover:text-white transition-colors" href="#">Company</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex text-sm font-medium text-slate-400 hover:text-white transition-colors">Log In</button>
<button className="text-sm font-medium bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm shadow-lg shadow-indigo-500/10">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
<div className="max-w-7xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8 hover:bg-indigo-500/20 transition-colors cursor-pointer animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
<span>Introducing Autonomic Data Discovery 2.0</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</div>

<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Master your data with <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-[length:200%_auto] animate-pulse">
                    AI Intelligence
                </span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Discover, classify, and secure sensitive data at petabyte scale. The only platform that builds a complete, autonomic inventory of your data universe.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="group relative px-8 py-3 bg-white text-slate-950 rounded-full font-medium text-sm hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all duration-300 w-full sm:w-auto overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
<span className="relative flex items-center justify-center gap-2">
                        Book a Demo 
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:chevron-right" data-width="16"></span>
</span>
</button>
<button className="px-8 py-3 glass-panel text-white rounded-full font-medium text-sm hover:bg-white/10 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                    Watch Explainer
                </button>
</div>

<div className="relative max-w-5xl mx-auto rounded-xl border border-white/10 bg-slate-900/50 shadow-2xl shadow-indigo-500/20 backdrop-blur-sm overflow-hidden group">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-slate-900/80">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs text-slate-500 font-mono">1touch-discovery-engine — v2.4.1</div>
<div className="w-10"></div>
</div>

<div className="p-1 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative">

<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none h-[200px] animate-[scan_3s_ease-in-out_infinite]"></div>

<div className="col-span-1 space-y-4 text-left">
<div className="p-4 rounded-lg bg-white/5 border border-white/5">
<div className="text-xs text-slate-400 mb-1">Sensitive Objects Found</div>
<div className="text-2xl font-semibold text-white tracking-tight">14,209,582</div>
<div className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span>
                                +12.5% this week
                            </div>
</div>
<div className="p-4 rounded-lg bg-white/5 border border-white/5">
<div className="text-xs text-slate-400 mb-1">Risk Score</div>
<div className="w-full bg-slate-800 h-2 rounded-full mt-2 overflow-hidden">
<div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-[72%] h-full rounded-full"></div>
</div>
<div className="flex justify-between mt-2 text-xs">
<span className="text-indigo-300">High Risk Areas</span>
<span className="text-white font-mono">72/100</span>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 bg-slate-950/50 rounded-lg border border-white/5 p-4 relative overflow-hidden flex items-center justify-center min-h-[200px]">

<div className="absolute inset-0 opacity-30">
<svg className="w-full h-full" viewbox="0 0 400 200">
<circle className="animate-pulse" cx="200" cy="100" fill="#6366f1" r="4"></circle>
<circle cx="150" cy="50" fill="#818cf8" r="3"></circle>
<circle cx="250" cy="150" fill="#818cf8" r="3"></circle>
<circle cx="100" cy="120" fill="#a78bfa" r="3"></circle>
<circle cx="300" cy="80" fill="#a78bfa" r="3"></circle>
<path d="M200 100 L150 50 M200 100 L250 150 M200 100 L100 120 M200 100 L300 80" stroke="#6366f1" stroke-opacity="0.5" strokeWidth="0.5"></path>
</svg>
</div>
<div className="relative z-10 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/40 mb-3 text-indigo-300">
<span className="iconify animate-spin" data-icon="lucide:loader-2" data-width="20" style={{animationDuration: '3s'}}></span>
</div>
<div className="text-sm font-medium text-white">Analyzing Data Lineage</div>
<div className="text-xs text-slate-500 mt-1">Classifying unstructured PII across 4 regions</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-slate-900/20">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-500 mb-8 uppercase tracking-widest">Trusted by security teams at</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<h3 className="text-xl font-bold tracking-tighter text-white">ACME<span className="font-light">CORP</span></h3>
<h3 className="text-xl font-semibold tracking-tight text-white italic">Vertex</h3>
<h3 className="text-lg font-bold tracking-widest text-white">STRATOS</h3>
<h3 className="text-xl font-bold tracking-tight text-white flex gap-1"><span className="w-6 h-6 bg-white rounded-full"></span>GLOBAL</h3>
<h3 className="text-xl font-light tracking-tight text-white border-2 border-white px-2">SECURE</h3>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Complete visibility. <span className="text-slate-500">Zero blind spots.</span></h2>
<p className="text-slate-400">Our AI-driven engine maps your data ecosystem automatically, ensuring compliance with GDPR, CCPA, and LGPD without manual intervention.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group glass-panel rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px] group-hover:bg-indigo-500/20 transition-all"></div>
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
<span className="iconify" data-icon="lucide:radar" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Autonomic Discovery</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Identify known and unknown data sources across your network using network-centric discovery techniques.
                    </p>
</div>

<div className="group glass-panel rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] group-hover:bg-purple-500/20 transition-all"></div>
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
<span className="iconify" data-icon="lucide:tag" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">AI Classification</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Automatically categorize sensitive data with high precision using advanced NLP and pattern matching.
                    </p>
</div>

<div className="group glass-panel rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-[40px] group-hover:bg-pink-500/20 transition-all"></div>
<div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 border border-pink-500/20">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">DSAR Fulfillment</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Streamline Data Subject Access Requests with automated workflows that gather data from all connected systems.
                    </p>
</div>

<div className="md:col-span-2 lg:col-span-2 group glass-panel rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-medium mb-4 border border-emerald-500/20">
<span className="iconify" data-icon="lucide:lock" data-width="12"></span> Security First
                        </div>
<h3 className="text-xl font-medium text-white mb-3">Third-Party Risk Management</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                            Monitor and manage data sharing with third-party vendors. Visualize data flow and ensure your partners maintain your security standards.
                        </p>
<a className="text-sm font-medium text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors inline-flex items-center gap-2" href="#">
                            Explore Risk Features <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="w-full md:w-1/2 h-48 bg-slate-900/50 rounded-lg border border-white/5 relative p-4 flex items-center justify-center">

<div className="relative w-32 h-32">
<div className="absolute inset-0 border border-emerald-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border border-emerald-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="iconify text-emerald-400" data-icon="lucide:shield" data-width="32"></span>
</div>
<div className="absolute -top-2 right-0 bg-slate-800 text-emerald-400 text-[10px] px-2 py-0.5 rounded border border-emerald-500/20">Secure</div>
</div>
</div>
</div>

<div className="group glass-panel rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
<span className="iconify" data-icon="lucide:network" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Data Lineage</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                            Trace the journey of your data from origin to destination.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-slate-950 to-indigo-950/20 border-y border-white/5">
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Designed for the modern <br/>Data Privacy Officer.</h2>
<div className="space-y-6">

<div className="flex gap-4">
<div className="mt-1">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 text-indigo-300">
                                1
                            </div>
</div>
<div>
<h4 className="text-white font-medium mb-2">Connect Sources</h4>
<p className="text-sm text-slate-400 leading-relaxed">Native integrations with SQL, NoSQL, Cloud Storage, and SaaS applications. Setup in minutes, not months.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-slate-400">
                                2
                            </div>
</div>
<div>
<h4 className="text-slate-300 font-medium mb-2">Scan &amp; Analyze</h4>
<p className="text-sm text-slate-500 leading-relaxed">Our AI models run locally or in your VPC to classify data without sensitive information ever leaving your perimeter.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-slate-400">
                                3
                            </div>
</div>
<div>
<h4 className="text-slate-300 font-medium mb-2">Act &amp; Remediate</h4>
<p className="text-sm text-slate-500 leading-relaxed">Generate compliance reports, execute deletion requests, and set up alerts for policy violations.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20"></div>
<div className="relative bg-slate-900 rounded-xl border border-white/10 p-6 shadow-2xl">

<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<div className="text-sm font-medium text-white">Discovery Configuration</div>
<div className="flex items-center gap-2">
<span className="text-xs text-slate-500">Auto-Remediation</span>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
</label>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<span className="iconify text-indigo-400" data-icon="lucide:database" data-width="16"></span>
<span className="text-sm text-slate-300 group-hover:text-white">Production DB (Postgres)</span>
</div>
<div className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20">Connected</div>
</div>
<div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<span className="iconify text-blue-400" data-icon="lucide:cloud" data-width="16"></span>
<span className="text-sm text-slate-300 group-hover:text-white">AWS S3 Buckets</span>
</div>
<div className="text-xs px-2 py-1 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Scanning (42%)</div>
</div>
<div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<span className="iconify text-pink-400" data-icon="lucide:mail" data-width="16"></span>
<span className="text-sm text-slate-300 group-hover:text-white">Exchange Server</span>
</div>
<div className="text-xs px-2 py-1 rounded bg-slate-700 text-slate-400 border border-slate-600">Paused</div>
</div>
</div>

<div className="mt-8">
<div className="flex justify-between text-xs text-slate-400 mb-2">
<span>Sensitivity Threshold</span>
<span>High (90%)</span>
</div>
<div className="w-full bg-slate-800 rounded-full h-1.5 cursor-pointer group">
<div className="bg-indigo-500 h-1.5 rounded-full w-[90%] relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow border-2 border-indigo-500 group-hover:scale-110 transition-transform"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center">
<div className="max-w-4xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">Ready to secure your data universe?</h2>
<p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">Join forward-thinking companies that use 1Touch.io to automate privacy compliance and reduce data risk.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-3 bg-white text-slate-950 rounded-full font-medium text-sm hover:bg-slate-200 transition-colors w-full sm:w-auto">Start Free Trial</button>
<button className="px-8 py-3 text-white border border-white/20 rounded-full font-medium text-sm hover:bg-white/10 transition-colors w-full sm:w-auto">Talk to Sales</button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-slate-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 flex items-center justify-center bg-indigo-600 rounded shadow-lg">
<span className="iconify text-white" data-icon="lucide:scan-eye" data-width="14"></span>
</div>
<span className="text-white font-semibold tracking-tight">1TOUCH.IO</span>
</div>
<p className="text-sm text-slate-500 max-w-xs mb-6">Autonomic data discovery and classification for the AI era. Secure your data, everywhere.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Platform</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Data Discovery</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Classification</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-600">© 2024 1Touch.io Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-emerald-500">All Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
