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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative w-6 h-6 bg-white rounded-md flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-20 group-hover:opacity-40 transition-opacity"></div>
<span className="text-black font-bold text-xs">S</span>
</div>
<span className="text-sm font-semibold tracking-tight text-white">SYNAPSE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Developers</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">Log in</a>
<button className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2">
                    Start Building
                    <iconify-icon height="14" icon="lucide:arrow-right" strokeWidth="2" width="14"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0 bg-grid-pattern opacity-40"></div>
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8 hover:bg-white/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Synapse v2.0 is now available
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 text-white leading-[1.1]">
                Data movement infrastructure <br className="hidden md:block"/>
                for the <span className="text-gradient-blue">real-time enterprise.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Sync distinct databases, warehouses, and streams with sub-millisecond latency. 
                The standard for modern ETL pipelines.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-all flex items-center gap-2 w-full md:w-auto justify-center">
                    Deploy Pipeline
                    <iconify-icon icon="lucide:zap" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full bg-black border border-zinc-800 text-zinc-300 text-sm font-medium hover:bg-zinc-900 hover:text-white transition-all flex items-center gap-2 w-full md:w-auto justify-center group">
                    Read Documentation
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:chevron-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="relative z-10 max-w-4xl mx-auto mt-20 px-6">
<div className="glass-card rounded-xl overflow-hidden shadow-2xl shadow-indigo-500/10">
<div className="flex items-center px-4 py-3 border-b border-white/5 bg-zinc-900/50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="mx-auto text-xs font-mono text-zinc-500">pipeline.config.ts</div>
</div>
<div className="p-6 bg-zinc-950/80 font-mono text-sm overflow-x-auto">
<div className="flex gap-4">
<div className="text-zinc-600 select-none text-right">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9</div>
<div className="text-zinc-300">
<span className="text-purple-400">import</span> { Source, Destination, Pipeline } <span className="text-purple-400">from</span> <span className="text-green-400">'@synapse/sdk'</span>;<br/><br/>
<span className="text-purple-400">const</span> postgres = <span className="text-blue-400">new</span> Source.Postgres(process.env.DB_URL);<br/>
<span className="text-purple-400">const</span> snowflake = <span className="text-blue-400">new</span> Destination.Snowflake(config);<br/><br/>
<span className="text-zinc-500">// Initialize real-time sync with 99.99% uptime SLA</span><br/>
<span className="text-purple-400">await</span> Pipeline.create({<br/>
                                  source: postgres,<br/>
                                  destination: snowflake,<br/>
                                  strategy: <span className="text-green-400">'CDC_LOG_BASED'</span><br/>
                            });
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-zinc-950/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-500 mb-8 uppercase tracking-widest">Trusting the infrastructure</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tighter text-white">ACME<span className="font-light text-zinc-500">CORP</span></span>
<span className="text-xl font-semibold tracking-tight text-white flex items-center gap-1"><div className="w-4 h-4 bg-white rounded-full"></div>GOLOBAL</span>
<span className="text-xl font-bold tracking-tight text-white italic">Stratos.</span>
<span className="text-xl font-semibold tracking-tight text-white">VORTEX</span>
<span className="text-xl font-medium tracking-tight text-white flex gap-1">
<span className="block w-2 h-6 bg-zinc-600 skew-x-12"></span>
<span className="block w-2 h-6 bg-zinc-400 skew-x-12"></span>
                    LAYER
                </span>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Engineered for massive scale.</h2>
<p className="text-zinc-400">Synapse processes billions of events daily with zero downtime updates and schema evolution handled automatically.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 text-indigo-400">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Real-time Observability</h3>
<p className="text-sm text-zinc-400 max-w-md">Monitor throughput, latency, and error rates in real-time with our built-in dashboarding tools. Granular visibility into every single byte.</p>
</div>

<div className="h-32 w-full bg-zinc-900/50 rounded-lg border border-white/5 relative overflow-hidden flex items-center gap-1 px-4">

<div className="h-8 w-1 bg-indigo-500/40 rounded-full animate-pulse" style={{height: '40%'}}></div>
<div className="h-8 w-1 bg-indigo-500/60 rounded-full animate-pulse" style={{animationDelay: '0.1s', height: '70%'}}></div>
<div className="h-8 w-1 bg-indigo-500/80 rounded-full animate-pulse" style={{animationDelay: '0.2s', height: '50%'}}></div>
<div className="h-8 w-1 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.3s', height: '90%'}}></div>
<div className="h-8 w-1 bg-indigo-500/70 rounded-full animate-pulse" style={{animationDelay: '0.4s', height: '60%'}}></div>

<svg className="absolute bottom-0 left-0 w-full h-full opacity-30" preserveaspectratio="none">
<path d="M0 100 C 40 80, 80 80, 120 40 C 160 10, 200 60, 240 50 C 300 40, 400 20, 500 10" fill="none" stroke="#818cf8" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 text-purple-400">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">SOC2 Type II</h3>
<p className="text-sm text-zinc-400 mb-6">Enterprise-grade security by default. End-to-end encryption for data in flight and at rest.</p>
<div className="flex items-center gap-2 text-xs text-green-400 bg-green-400/10 w-fit px-2 py-1 rounded border border-green-400/20">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
                        Audit Logs Enabled
                    </div>
</div>

<div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 text-blue-400">
<iconify-icon icon="lucide:workflow" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Visual Mapping</h3>
<p className="text-sm text-zinc-400">Drag-and-drop schema mapping with intelligent type inference.</p>
</div>

<div className="md:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 text-emerald-400">
<iconify-icon icon="lucide:database" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Universal Connectivity</h3>
<p className="text-sm text-zinc-400">Pre-built connectors for Postgres, MySQL, Snowflake, BigQuery, Kafka, and 100+ SaaS applications.</p>
</div>

<div className="flex-1 w-full grid grid-cols-4 gap-4 opacity-70">
<div className="aspect-square rounded bg-zinc-900 border border-white/10 flex items-center justify-center"><iconify-icon className="text-zinc-500" icon="lucide:database"></iconify-icon></div>
<div className="aspect-square rounded bg-zinc-900 border border-white/10 flex items-center justify-center"><iconify-icon className="text-zinc-500" icon="lucide:server"></iconify-icon></div>
<div className="aspect-square rounded bg-zinc-900 border border-white/10 flex items-center justify-center"><iconify-icon className="text-zinc-500" icon="lucide:cloud"></iconify-icon></div>
<div className="aspect-square rounded bg-zinc-900 border border-white/10 flex items-center justify-center"><iconify-icon className="text-zinc-500" icon="lucide:hard-drive"></iconify-icon></div>
<div className="aspect-square rounded bg-zinc-900 border border-white/10 flex items-center justify-center"><iconify-icon className="text-zinc-500" icon="lucide:file-json"></iconify-icon></div>
<div className="aspect-square rounded bg-zinc-900 border border-white/10 flex items-center justify-center"><iconify-icon className="text-zinc-500" icon="lucide:globe"></iconify-icon></div>
<div className="aspect-square rounded bg-zinc-900 border border-white/10 flex items-center justify-center"><iconify-icon className="text-zinc-500" icon="lucide:box"></iconify-icon></div>
<div className="aspect-square rounded bg-zinc-800/50 border border-indigo-500/50 flex items-center justify-center text-white text-xs font-semibold">+99</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/5">
<div>
<div className="text-3xl md:text-4xl font-semibold text-white mb-1 tracking-tight">10ms</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Avg Latency</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-white mb-1 tracking-tight">5PB+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Data Moved Daily</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-white mb-1 tracking-tight">99.99%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Uptime SLA</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-white mb-1 tracking-tight">200+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Connectors</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                Ready to stop building <br /> custom pipelines?
            </br></h2>
<p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
                Join engineering teams at high-growth companies who trust Synapse for mission-critical data movement.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-200"></div>
<button className="relative h-12 px-8 bg-black rounded-full flex items-center justify-center text-white font-medium text-sm hover:bg-zinc-900 transition-colors w-full sm:w-auto">
                        Start for free
                    </button>
</div>
<button className="h-12 px-8 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-colors w-full sm:w-auto">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
<div className="col-span-2 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-zinc-800 rounded flex items-center justify-center text-white text-[10px] font-bold">S</div>
<span className="text-sm font-semibold text-white tracking-tight">SYNAPSE</span>
</div>
<p className="text-xs text-zinc-500 max-w-xs">
                        The data movement platform for the next generation of data-intensive applications.
                    </p>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Product</h4>
<a className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors" href="#">Connectors</a>
<a className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors" href="#">Security</a>
<a className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors" href="#">Pricing</a>
<a className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors" href="#">Changelog</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Resources</h4>
<a className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors" href="#">Documentation</a>
<a className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors" href="#">API Reference</a>
<a className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors" href="#">Community</a>
<a className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors" href="#">Blog</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Company</h4>
<a className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors" href="#">About</a>
<a className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors" href="#">Careers</a>
<a className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors" href="#">Legal</a>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<div className="text-xs text-zinc-600">
                    © 2024 Synapse Data Inc. All rights reserved.
                </div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
