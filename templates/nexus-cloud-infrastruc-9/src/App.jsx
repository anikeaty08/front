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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<div className="fixed inset-0 z-0 pointer-events-none opacity-[0.15] grid-bg"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
                    NEXUS
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Method</a>
<a className="hover:text-white transition-colors" href="#">Customers</a>
<a className="hover:text-white transition-colors" href="#">Changelog</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded hover:bg-slate-200 transition-colors" href="#">Sign up</a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8 hover:bg-indigo-500/20 transition-colors cursor-pointer">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Nexus v2.0 is now available
                <i className="w-3 h-3 ml-1" data-lucide="arrow-right"></i>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1]">
                Orchestrate your cloud <br/>
<span className="gradient-text">without the chaos.</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl mx-auto mb-10 font-light leading-relaxed">
                The developer-first platform for scaling applications. Manage deployment, networking, and security in a unified interface designed for flow.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-10 px-6 rounded-md bg-white text-black text-sm font-medium hover:bg-slate-200 transition-all flex items-center gap-2 group">
                    Start Building
                    <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-slate-600" data-lucide="chevron-right"></i>
</button>
<button className="h-10 px-6 rounded-md bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="terminal"></i>
                    Documentation
                </button>
</div>

<div className="relative max-w-4xl mx-auto rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl shadow-indigo-900/20 overflow-hidden group">
<div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="ml-auto text-xs font-mono text-slate-600">config.yml</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 h-[400px] text-left font-mono text-xs sm:text-sm">

<div className="hidden md:block col-span-3 border-r border-white/5 bg-white/[0.01] p-4">
<div className="text-slate-500 mb-2 text-[10px] uppercase tracking-widest font-semibold">Project</div>
<ul className="space-y-1">
<li className="flex items-center gap-2 text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded"><i className="w-3 h-3" data-lucide="box"></i> app.tsx</li>
<li className="flex items-center gap-2 text-slate-400 px-2 py-1"><i className="w-3 h-3" data-lucide="settings"></i> config.yml</li>
<li className="flex items-center gap-2 text-slate-400 px-2 py-1"><i className="w-3 h-3" data-lucide="database"></i> db.schema</li>
<li className="flex items-center gap-2 text-slate-400 px-2 py-1"><i className="w-3 h-3" data-lucide="globe"></i> routes.ts</li>
</ul>
</div>

<div className="col-span-12 md:col-span-9 p-6 overflow-hidden relative">
<div className="absolute top-0 right-0 p-6 pointer-events-none">
<div className="px-3 py-1 rounded bg-green-500/10 text-green-400 text-xs border border-green-500/20 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                Connected
                            </div>
</div>
<div className="leading-relaxed">
<p><span className="text-purple-400">version:</span> <span className="text-emerald-300">'2.0'</span></p>
<p className="mt-2"><span className="text-purple-400">services:</span></p>
<p className="pl-4"><span className="text-blue-400">api:</span></p>
<p className="pl-8"><span className="text-purple-400">image:</span> <span className="text-emerald-300">node:18-alpine</span></p>
<p className="pl-8"><span className="text-purple-400">replicas:</span> <span className="text-orange-300">3</span></p>
<p className="pl-8"><span className="text-purple-400">regions:</span> <span className="text-slate-500">[</span> <span className="text-emerald-300">'us-east'</span>, <span className="text-emerald-300">'eu-west'</span> <span className="text-slate-500">]</span></p>
<p className="pl-4 mt-2"><span className="text-blue-400">database:</span></p>
<p className="pl-8"><span className="text-purple-400">provider:</span> <span className="text-emerald-300">nexus-pg</span></p>
<p className="pl-8"><span className="text-purple-400">tier:</span> <span className="text-emerald-300">professional</span></p>
<p className="pl-8"><span className="text-purple-400">encryption:</span> <span className="text-orange-300">true</span></p>
<div className="mt-6 p-3 rounded border border-indigo-500/20 bg-indigo-500/5 text-indigo-200 w-fit animate-pulse">
                                &gt; Deploying to edge network...
                            </div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-xs font-medium text-slate-500 mb-8 tracking-wide uppercase">Powering the next generation of tech</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-white font-semibold text-lg tracking-tighter"><div className="w-5 h-5 bg-white rounded-full"></div>ACME CORP</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg tracking-tighter"><div className="w-5 h-5 border-2 border-white rounded"></div>STRATOS</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg tracking-tighter"><div className="w-5 h-5 bg-white transform rotate-45"></div>ECHO</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg tracking-tighter"><div className="w-5 h-5 border-2 border-white rounded-full"></div>ORBIT</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg tracking-tighter"><div className="w-5 h-5 bg-white rounded-tr-lg rounded-bl-lg"></div>VERTEX</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Designed for speed. <br/><span className="text-slate-500">Built for scale.</span></h2>
<p className="text-slate-400">Every interaction is optimized for the shortest latency and highest throughput. Experience the difference of a truly edge-first architecture.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(240px,auto)]">

<div className="group relative md:col-span-2 bg-white/[0.02] border border-white/5 rounded-2xl p-8 overflow-hidden hover:bg-white/[0.04] transition-colors duration-500">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<i className="w-32 h-32 text-white" data-lucide="zap"></i>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 mb-6">
<i className="w-5 h-5 text-white" data-lucide="activity"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Real-time Edge Latency</h3>
<p className="text-sm text-slate-400 max-w-sm">Deploy your application to 35+ regions instantly. Our intelligent routing ensures your users always hit the nearest node.</p>
</div>

<div className="mt-8 h-24 flex items-end gap-1">
<div className="w-full bg-indigo-500/20 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500/20 h-[60%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500/20 h-[30%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500/20 h-[80%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500/40 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500/60 h-[90%] rounded-t-sm relative group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-shadow"></div>
<div className="w-full bg-indigo-500/30 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500/20 h-[20%] rounded-t-sm"></div>
</div>
</div>
</div>

<div className="group relative md:col-span-1 bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] transition-colors duration-500">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 mb-6">
<i className="w-5 h-5 text-white" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Zero Trust Security</h3>
<p className="text-sm text-slate-400">Enterprise-grade encryption at rest and in transit. Automated compliance.</p>
<div className="mt-8 space-y-3">
<div className="flex items-center gap-3 text-xs text-slate-300 p-2 rounded bg-white/5 border border-white/5">
<div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                            SOC2 Compliant
                        </div>
<div className="flex items-center gap-3 text-xs text-slate-300 p-2 rounded bg-white/5 border border-white/5">
<div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                            ISO 27001 Ready
                        </div>
<div className="flex items-center gap-3 text-xs text-slate-300 p-2 rounded bg-white/5 border border-white/5">
<div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                            GDPR/CCPA
                        </div>
</div>
</div>

<div className="group relative md:col-span-1 bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] transition-colors duration-500">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 mb-6">
<i className="w-5 h-5 text-white" data-lucide="git-branch"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Branch Previews</h3>
<p className="text-sm text-slate-400">Every commit gets a live URL. Share progress with your team instantly.</p>
<div className="mt-6 relative h-20">
<div className="absolute left-0 top-0 w-full border-l-2 border-dashed border-white/10 h-full ml-2"></div>
<div className="flex items-center gap-2 mb-2">
<div className="w-4 h-4 rounded-full bg-slate-800 border border-slate-600 z-10"></div>
<span className="text-xs font-mono text-slate-500">main</span>
</div>
<div className="flex items-center gap-2 ml-4">
<i className="w-4 h-4 text-slate-600" data-lucide="corner-down-right"></i>
<div className="px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-[10px] text-indigo-300 font-mono">feat-login-ui</div>
</div>
</div>
</div>

<div className="group relative md:col-span-2 bg-gradient-to-br from-indigo-900/10 to-purple-900/10 border border-white/5 rounded-2xl p-8 overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-center h-full">
<div className="flex-1">
<h3 className="text-xl font-medium text-white mb-2">Collaborative Intelligence</h3>
<p className="text-sm text-slate-400 mb-6">Integrated AI assistance helps you debug, optimize, and refactor your infrastructure code in real-time.</p>
<button className="text-xs text-white bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full transition-colors">
                                Explore AI Features
                            </button>
</div>
<div className="flex-1 w-full">
<div className="bg-[#0F0F0F] rounded-lg border border-white/10 p-4 shadow-xl">
<div className="flex gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
<div className="bg-white/5 rounded-tr-xl rounded-br-xl rounded-bl-xl p-3 text-xs text-slate-300">
                                        I noticed high latency in the eu-central region. Should I optimize the caching strategy?
                                    </div>
</div>
<div className="flex gap-2 justify-end">
<div className="bg-indigo-600 text-white rounded-tl-xl rounded-bl-xl rounded-br-xl p-3 text-xs">
                                        Yes, please deploy the new edge config.
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Integrates with your stack</h2>
<p className="text-slate-400 mb-12">Simply connect your repository and let Nexus handle the rest.</p>
<div className="flex justify-center items-center gap-4 md:gap-8">
<div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:border-white/20 transition-colors hover:scale-105 duration-300">
<i className="w-8 h-8 text-white" data-lucide="github"></i>
</div>
<div className="w-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="w-20 h-20 rounded-2xl bg-white/[0.05] border border-white/20 flex items-center justify-center relative shadow-[0_0_30px_rgba(255,255,255,0.05)]">
<div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full"></div>
<div className="w-8 h-8 bg-white rounded-sm rotate-45 relative z-10"></div>
</div>
<div className="w-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:border-white/20 transition-colors hover:scale-105 duration-300">
<i className="w-8 h-8 text-white" data-lucide="slack"></i>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-600/5"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-6">Ready to deploy?</h2>
<p className="text-lg text-slate-400 mb-10">Join 10,000+ developers building the future of the web.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                    Start for free
                </button>
<button className="h-12 px-8 rounded-full bg-transparent border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-all">
                    Contact Sales
                </button>
</div>
<p className="mt-6 text-xs text-slate-500">No credit card required. 14-day free trial for Pro plans.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020203] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<div className="w-3 h-3 bg-white rounded-sm rotate-45"></div>
                        NEXUS
                    </a>
<p className="text-sm text-slate-500 max-w-xs">
                        Designed for developers who care about details. Built in San Francisco.
                    </p>
<div className="flex gap-4 mt-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="discord"></i></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-300 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Docs</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-300 transition-colors" href="#">About</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Customers</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Brand</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-300 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2024 Nexus Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs text-slate-500 font-mono">All systems operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
