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



        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            document.documentElement.style.setProperty('--mouse-x', x + 'px');
            document.documentElement.style.setProperty('--mouse-y', y + 'px');
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
      



<div className="fixed z-0 pointer-events-none top-0 right-0 bottom-0 left-0">
<div className="absolute inset-0 bg-[#020204]"></div>
<div className="spotlight-bg"></div>
<div className="absolute inset-0 tech-grid opacity-20"></div>

<div className="falling-lines">
<div className="falling-line" style={{left: '10%', animationDuration: '4s', animationDelay: '0s'}}></div>
<div className="falling-line" style={{left: '25%', animationDuration: '6s', animationDelay: '2s'}}></div>
<div className="falling-line" style={{left: '45%', animationDuration: '5s', animationDelay: '1.5s'}}></div>
<div className="falling-line" style={{left: '70%', animationDuration: '7s', animationDelay: '0.5s'}}></div>
<div className="falling-line" style={{left: '85%', animationDuration: '5.5s', animationDelay: '3s'}}></div>
</div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent via-white/10"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 border-b bg-[#020204]/70 backdrop-blur-xl border-white/5">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center justify-center w-6 h-6 transition-transform group-active:scale-95">
<div className="absolute inset-0 bg-purple-500 blur opacity-40 rounded-full group-hover:opacity-60 transition-opacity"></div>
<iconify-icon className="relative z-10 text-white" icon="lucide:layers" width="18"></iconify-icon>
</div>
<span className="text-sm tracking-tight font-semibold text-white">ADRINO</span>
</div>
<div className="hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-md bg-white/5 border-white/5">
<a className="px-4 py-1.5 text-xs rounded-full transition-all text-slate-300 hover:text-white hover:bg-white/5 active:scale-95" href="#">Platform</a>
<a className="px-4 py-1.5 text-xs rounded-full transition-all text-slate-300 hover:text-white hover:bg-white/5 active:scale-95" href="#">Solutions</a>
<a className="px-4 py-1.5 text-xs rounded-full transition-all text-slate-300 hover:text-white hover:bg-white/5 active:scale-95" href="#">Docs</a>
<a className="px-4 py-1.5 text-xs rounded-full transition-all text-slate-300 hover:text-white hover:bg-white/5 active:scale-95" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden lg:flex items-center gap-2 text-[11px] transition-all text-slate-400 hover:text-white active:scale-95">
<iconify-icon icon="lucide:search" width="14"></iconify-icon>
<span className="font-mono">CTRL+K</span>
</button>
<div className="h-4 w-px hidden lg:block bg-white/10"></div>
<button className="group relative text-xs font-medium bg-[#0a0a0c] border px-4 py-2 rounded-md transition-all overflow-hidden hover:border-purple-500/50 shadow-[0_0_0_1px_rgba(0,0,0,0)] hover:shadow-[0_0_0_1px_rgba(168,85,247,0.2)] text-white border-white/10 active:scale-95 active:bg-[#121215]">
<span className="btn-content-slide">
<span className="btn-text-original">Dashboard</span>
<span className="btn-text-hover text-purple-300">Login →</span>
</span>
</button>
</div>
</nav>

<main className="min-h-screen flex flex-col overflow-hidden w-full z-10 pt-32 pb-20 relative items-center">

<div className="text-center max-w-5xl z-20 mr-auto mb-16 ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-[11px] font-medium mb-8 animate-fade-in shadow-[0_0_20px_rgba(168,85,247,0.15)] text-purple-200">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-purple-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
<span>The Global Edge Infrastructure for AI</span>
</div>
<h1 className="md:text-8xl leading-[0.95] text-5xl font-medium text-white tracking-tight font-newsreader mb-8">
                Scale beyond <br/>
<span className="bg-clip-text text-transparent font-newsreader bg-gradient-to-b from-slate-200 to-slate-600">the limits.</span>
</h1>
<p className="leading-relaxed text-base max-w-2xl mx-auto mb-10 font-light md:text-base text-slate-400">
                Adrino provides the high-frequency primitive layer for the next generation of SaaS. 
                Deploy serverless functions to the edge in <span className="text-slate-200">14ms</span>.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-5">

<div className="btn-glow-border group cursor-pointer w-full md:w-auto">
<button className="relative z-10 w-full md:w-auto block px-8 py-3.5 bg-[#0a0a0c] text-sm font-semibold rounded-[5px] transition-all hover:bg-[#121215] active:bg-[#16161a] text-white">
<span className="btn-content-slide">
<span className="btn-text-original">Start Deploying</span>
<span className="btn-text-hover text-purple-300">Start Deploying</span>
</span>
</button>
</div>

<button className="group flex transition-all md:w-auto text-sm font-medium bg-[#0a0a0b] w-full border-0 rounded-md pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center justify-center hover:text-white text-slate-400 active:scale-95 active:text-slate-200">
<iconify-icon className="text-slate-500 group-hover:text-purple-400 transition-colors" icon="lucide:terminal" width="16"></iconify-icon>
<span className="border-b border-transparent group-hover:border-slate-500 transition-all">Documentation</span>
</button>
</div>
</div>

<div className="dashboard-container w-full max-w-6xl z-20 mr-auto ml-auto pr-4 pl-4 relative">
<div className="dashboard-ui relative w-full rounded-xl border bg-[#0a0a0c] overflow-hidden shadow-2xl border-white/10">

<div className="scanline"></div>

<div className="h-10 border-b bg-white/[0.02] flex items-center px-4 justify-between select-none border-white/5">
<div className="flex items-center gap-3">
<div className="flex gap-1.5 opacity-50">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="h-4 w-px mx-1 bg-white/10"></div>
<div className="flex items-center gap-2 text-[10px] px-2 py-0.5 rounded border bg-black/40 border-white/5 text-slate-400">
<iconify-icon icon="lucide:lock" width="10"></iconify-icon>
<span className="font-mono">production-cluster-01</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-6">
<div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            CONNECTED
                        </div>
</div>
</div>

<div className="flex h-[450px]">

<div className="w-14 md:w-56 border-r bg-white/[0.01] flex flex-col justify-between py-4 border-white/5">
<div className="space-y-1 px-2">
<div className="flex items-center gap-3 px-3 py-2 rounded-md border text-xs cursor-pointer bg-white/5 border-white/5 text-white active:scale-95 transition-transform">
<iconify-icon className="text-purple-400" icon="lucide:activity" width="14"></iconify-icon>
<span className="hidden md:inline font-medium">Overview</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-500 rounded-md transition-all text-xs cursor-pointer hover:text-slate-300 hover:bg-white/5 active:scale-95">
<iconify-icon icon="lucide:server" width="14"></iconify-icon>
<span className="hidden md:inline">Instances</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-500 rounded-md transition-all text-xs cursor-pointer hover:text-slate-300 hover:bg-white/5 active:scale-95">
<iconify-icon icon="lucide:database" width="14"></iconify-icon>
<span className="hidden md:inline">Storage</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-500 rounded-md transition-all text-xs cursor-pointer hover:text-slate-300 hover:bg-white/5 active:scale-95">
<iconify-icon icon="lucide:shield" width="14"></iconify-icon>
<span className="hidden md:inline">Security</span>
</div>
</div>
<div className="px-4 hidden md:block">
<div className="text-[10px] uppercase tracking-widest mb-2 font-semibold text-slate-600">Usage</div>
<div className="w-full h-1 rounded-full overflow-hidden mb-1 bg-white/5">
<div className="bg-purple-500 w-[75%] h-full rounded-full"></div>
</div>
<div className="flex justify-between text-[10px] text-slate-500">
<span>Bandwidth</span>
<span className="text-white">75%</span>
</div>
</div>
</div>

<div className="flex-1 p-6 overflow-hidden flex flex-col gap-6">

<div className="grid grid-cols-3 gap-4">
<div className="p-4 rounded-lg border bg-gradient-to-br from-white/[0.03] to-transparent border-white/5">
<div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">Active Requests</div>
<div className="text-xl font-medium font-mono text-white">2,493/s</div>
<div className="text-[10px] mt-1 flex items-center gap-1 text-emerald-400">
<iconify-icon icon="lucide:arrow-up-right" width="10"></iconify-icon> +12%
                                </div>
</div>
<div className="p-4 rounded-lg border bg-gradient-to-br from-white/[0.03] to-transparent border-white/5">
<div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">Avg Latency</div>
<div className="text-xl font-medium font-mono text-white">14.2ms</div>
<div className="text-[10px] mt-1 flex items-center gap-1 text-emerald-400">
<iconify-icon icon="lucide:arrow-down-right" width="10"></iconify-icon> -4%
                                </div>
</div>
<div className="p-4 rounded-lg border bg-gradient-to-br from-white/[0.03] to-transparent border-white/5">
<div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">Error Rate</div>
<div className="text-xl font-medium font-mono text-white">0.001%</div>
<div className="text-[10px] text-slate-500 mt-1">Stable</div>
</div>
</div>

<div className="flex-1 rounded-lg border bg-[#050505] p-4 relative overflow-hidden flex flex-col border-white/5">
<div className="flex justify-between items-center mb-4">
<div className="text-xs font-medium text-white">Traffic Analytics</div>
<div className="flex gap-1 p-0.5 rounded text-[10px] bg-white/5">
<button className="px-2 py-0.5 rounded shadow-sm bg-white/10 text-white transition-all active:scale-95">1H</button>
<button className="px-2 py-0.5 text-slate-500 hover:text-white transition-all active:scale-95">24H</button>
<button className="px-2 py-0.5 text-slate-500 hover:text-white transition-all active:scale-95">7D</button>
</div>
</div>

<div className="flex-1 flex items-end gap-1 relative z-10 w-full h-full pb-2 pl-2">

<div className="z-0 border-b border-l absolute top-0 right-0 bottom-0 left-0 border-white/5" style={{backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" preserveaspectratio="none">
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#a855f7" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#a855f7" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 200 Q 100 180 200 150 T 400 160 T 600 100 T 800 80 T 1000 40 L 1000 300 L 0 300 Z" fill="url(#gradient)" stroke="none"></path>
<path d="M0 200 Q 100 180 200 150 T 400 160 T 600 100 T 800 80 T 1000 40" fill="none" stroke="#a855f7" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>

<div className="absolute right-[20%] top-[30%] w-2 h-2 rounded-full shadow-[0_0_10px_white] bg-white group cursor-pointer">
<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#1a1a1c] border px-2 py-1 rounded text-[10px] whitespace-nowrap z-20 border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                        Peak: 4.2GB/s
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="horizon-ring"></div>
</main>

<section className="relative z-10 w-full bg-[#020204] py-32 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="flex-1 space-y-8">
<div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-purple-400">
<iconify-icon icon="lucide:code-2" width="14"></iconify-icon>
<span>Developer First</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight font-serif text-white">
                        Integrate in minutes, <br/>
                        scale to <span className="text-slate-500 font-serif">millions.</span>
</h2>
<p className="text-lg font-light leading-relaxed text-slate-400">
                        Our SDK is designed with type-safety and performance in mind. 
                        Connect your frontend to our edge network with just a few lines of code.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4 group">
<div className="mt-1 p-1 bg-emerald-500/10 rounded border border-emerald-500/20 text-emerald-400 transition-all group-hover:scale-110">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Automatic Type Inference</h4>
<p className="text-slate-500 text-sm mt-1">End-to-end type safety from database to client.</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="mt-1 p-1 bg-emerald-500/10 rounded border border-emerald-500/20 text-emerald-400 transition-all group-hover:scale-110">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Edge Caching by Default</h4>
<p className="text-slate-500 text-sm mt-1">Stale-while-revalidate strategy applied automatically.</p>
</div>
</div>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-sm border-b transition-all pb-0.5 text-white border-white hover:text-purple-300 hover:border-purple-300 hover:gap-3" href="#">
                            Read the Quickstart Guide <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="flex-1 w-full">
<div className="relative rounded-xl bg-[#08080a] border shadow-2xl overflow-hidden group border-white/10">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="flex items-center justify-between px-4 py-3 border-b bg-white/[0.02] border-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#2a2a2c] group-hover:bg-red-500/20 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-[#2a2a2c] group-hover:bg-yellow-500/20 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-[#2a2a2c] group-hover:bg-green-500/20 transition-colors"></div>
</div>
<div className="text-[10px] font-mono text-slate-500">api/edge-function.ts</div>
<div className="w-8"></div>
</div>

<div className="p-6 overflow-x-auto">
<pre className="font-mono text-xs md:text-sm leading-relaxed"><code className="language-typescript">
<span className="token-keyword">import</span> { Adrino, EdgeConfig } <span className="token-keyword">from</span> <span className="token-string">'@adrino/sdk'</span>;

<span className="token-keyword">const</span> client = <span className="token-keyword">new</span> Adrino({
  region: <span className="token-string">'global'</span>,
  apiKey: process.env.API_KEY
});

<span className="token-keyword">export default async function</span> <span className="token-function">handler</span>(req) {
  <span className="token-comment">// Automatically routed to nearest edge node</span>
  <span className="token-keyword">const</span> { data, error } = <span className="token-keyword">await</span> client.db
    .from(<span className="token-string">'users'</span>)
    .select(<span className="token-string">'*'</span>)
    .cache(<span className="token-string">'swr'</span>, 60);

  <span className="token-keyword">if</span> (error) {
    <span className="token-keyword">return</span> Response.<span className="token-function">json</span>({ error }, { status: 500 });
  }

  <span className="token-keyword">return</span> Response.<span className="token-function">json</span>({ 
    users: data, 
    meta: { region: req.geo.region } 
  });
}
                            </code></pre>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#020204] overflow-hidden">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent via-white/5"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="mb-20 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 font-serif text-white">
                    Infrastructure designed for 
                    <span className="font-serif text-purple-400">high-velocity teams.</span>
</h2>
<p className="text-lg leading-relaxed font-light text-slate-400">
                    Skip the boilerplate. Adrino provides the primitive layers you need to build scalable, resilient systems from day one.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 gap-6">

<div className="md:col-span-4 group relative overflow-hidden rounded-2xl border bg-[#050505] p-8 hover:border-purple-500/30 transition-colors duration-500 shadow-lg border-white/10">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_50%)]"></div>
<div className="relative z-10 h-full flex flex-col justify-between min-h-[280px]">
<div className="mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-white/5 text-purple-400 border-white/10">
<iconify-icon icon="lucide:globe" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Global Edge Mesh</h3>
</div>
<p className="text-sm leading-relaxed max-w-md text-slate-400">
                                Intelligent routing automatically directs traffic to the nearest healthy node. 
                                Latency is minimized through our active congestion control protocol.
                            </p>
</div>

<div className="w-full h-48 rounded-lg border relative overflow-hidden flex items-center justify-center border-white/5 bg-black/40">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.05),transparent_70%)]"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-60">
<div className="w-[200px] h-[100px] border border-dashed border-purple-500/30 rounded-full flex items-center justify-center relative animate-pulse">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_15px_#a855f7]"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-600"></div>
<div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-600"></div>
<div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-600"></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl border bg-[#050505] p-8 hover:border-emerald-500/30 transition-colors duration-500 shadow-lg border-white/10">
<div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
<iconify-icon className="rotate-12 text-white" icon="lucide:shield-check" width="160"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-white/5 text-emerald-400 border-white/10">
<iconify-icon icon="lucide:lock" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Zero Trust</h3>
</div>
<p className="text-sm leading-relaxed mb-8 text-slate-400">
                                Identity-aware proxying and mTLS encryption enabled by default.
                            </p>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-[10px] font-mono p-2.5 rounded border group-hover:bg-white/10 transition-colors bg-white/5 border-white/5 text-slate-300">
<span>Policy_Check</span>
<span className="flex items-center gap-1 text-emerald-400">
<iconify-icon icon="lucide:check" width="10"></iconify-icon> PASS
                                </span>
</div>
<div className="flex items-center justify-between text-[10px] font-mono p-2.5 rounded border group-hover:bg-white/10 transition-colors bg-white/5 border-white/5 text-slate-300">
<span>Encryption</span>
<span className="text-purple-400">AES-256</span>
</div>
<div className="flex items-center justify-between text-[10px] font-mono p-2.5 rounded border group-hover:bg-white/10 transition-colors bg-white/5 border-white/5 text-slate-300">
<span>Firewall</span>
<span className="text-emerald-400">ACTIVE</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 group relative overflow-hidden rounded-2xl border bg-[#050505] p-8 hover:border-blue-500/30 transition-colors duration-500 shadow-lg border-white/10">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-white/5 text-blue-400 border-white/10">
<iconify-icon icon="lucide:bar-chart-2" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Real-time Metrics</h3>
</div>
<p className="text-sm leading-relaxed mb-8 text-slate-400">
                            Observe every request with microsecond precision. Filter logs and trace errors.
                        </p>

<div className="flex items-end gap-1.5 h-24 w-full opacity-60 group-hover:opacity-100 transition-opacity">
<div className="w-full bg-blue-500/20 h-[40%] rounded-sm"></div>
<div className="w-full bg-blue-500/40 h-[70%] rounded-sm"></div>
<div className="w-full bg-blue-500/30 h-[50%] rounded-sm"></div>
<div className="w-full bg-blue-500/60 h-[85%] rounded-sm shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
<div className="w-full bg-blue-500/40 h-[60%] rounded-sm"></div>
<div className="w-full bg-blue-500/20 h-[45%] rounded-sm"></div>
<div className="w-full bg-blue-500/50 h-[75%] rounded-sm"></div>
<div className="w-full bg-blue-500/30 h-[55%] rounded-sm"></div>
</div>
</div>
</div>

<div className="md:col-span-3 group relative overflow-hidden rounded-2xl border bg-[#050505] p-8 hover:border-orange-500/30 transition-colors duration-500 shadow-lg border-white/10">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-white/5 text-orange-400 border-white/10">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Instant Rollbacks</h3>
</div>
<p className="text-sm leading-relaxed mb-8 text-slate-400">
                            Mistake in production? Revert to a previous immutable deployment in one click.
                        </p>
<div className="flex items-center justify-between gap-3 text-xs font-mono text-slate-500 border rounded-lg p-3 group-hover:border-white/20 transition-colors bg-black/40 border-white/10">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-slate-300">v2.4.1</span>
</div>
<div className="flex items-center gap-2 opacity-50">
<span>4m ago</span>
</div>
<button className="px-2 py-1 rounded transition-all uppercase text-[10px] tracking-wider border bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/20 text-orange-400/80 border-white/5 active:scale-95">
                                Rollback
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#020204] overflow-hidden border-t border-white/5">
<style>
            @keyframes flow-beam {
                0% { transform: translateX(-100%); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: translateX(200%); opacity: 0; }
            }
            @keyframes float-gentle {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
            }
            @keyframes scan-vertical {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(100%); }
            }
        </style>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] blur-[120px] rounded-full pointer-events-none bg-purple-900/10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="mb-24 text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-medium mb-6 backdrop-blur-sm border-white/10 bg-white/5 text-purple-300">
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-purple-400"></span>
                    ONBOARDING FLOW
                </div>
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight font-serif mb-6">
                    From localhost to global <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-500 font-serif from-purple-300">in three steps.</span>
</h2>
<p className="text-lg font-light leading-relaxed text-slate-400">
                    Connect your repository and let Adrino's engine handle the rest. 
                    Zero configuration required for most modern frameworks.
                </p>
</div>

<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px overflow-hidden bg-white/10">
<div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent" style={{animation: 'flow-beam 3s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">

<div className="group relative">

<div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0a0a0c] border items-center justify-center z-20 group-hover:border-purple-500/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-500 border-white/10">
<div className="w-2 h-2 rounded-full group-hover:bg-purple-400 transition-colors bg-slate-600"></div>
</div>
<div className="pt-8 md:pt-16 h-full">
<div className="h-full rounded-2xl border bg-[#050505] p-1 overflow-hidden hover:border-purple-500/20 transition-all duration-500 group-hover:-translate-y-1 border-white/10">
<div className="relative h-full rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent p-6 flex flex-col justify-between">
<div className="mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border group-hover:text-white group-hover:bg-white/10 transition-colors bg-white/5 text-slate-300 border-white/10">
<iconify-icon icon="lucide:git-branch" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">1. Connect</h3>
</div>
<p className="text-sm leading-relaxed text-slate-400">
                                            Link your GitHub or GitLab repository. We automatically detect your framework and build settings.
                                        </p>
</div>
<div className="relative w-full h-32 rounded-lg border overflow-hidden font-mono text-[10px] p-3 text-slate-500 shadow-inner bg-black border-white/10">
<div className="flex gap-1.5 mb-2 opacity-50">
<div className="w-2 h-2 rounded-full bg-red-500/40"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
<div className="w-2 h-2 rounded-full bg-green-500/40"></div>
</div>
<div className="space-y-1">
<div className="flex gap-2">
<span className="text-purple-400">➜</span>
<span className="text-white">git push origin main</span>
</div>
<div className="animate-pulse text-slate-600">Waiting for commit...</div>
<div className="opacity-0 group-hover:opacity-100 transition-opacity delay-300 duration-700">
<div className="flex gap-2">
<span className="text-emerald-500">✓</span>
<span className="text-slate-300">Detected Next.js project</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative">
<div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0a0a0c] border items-center justify-center z-20 group-hover:border-purple-500/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-500 delay-100 border-white/10">
<div className="w-2 h-2 rounded-full group-hover:bg-purple-400 transition-colors bg-slate-600"></div>
</div>
<div className="pt-8 md:pt-16 h-full">
<div className="h-full rounded-2xl border bg-[#050505] p-1 overflow-hidden hover:border-purple-500/20 transition-all duration-500 group-hover:-translate-y-1 delay-75 border-white/10">
<div className="relative h-full rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent p-6 flex flex-col justify-between">
<div className="mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border group-hover:text-white group-hover:bg-white/10 transition-colors bg-white/5 text-slate-300 border-white/10">
<iconify-icon icon="lucide:box-select" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">2. Provision</h3>
</div>
<p className="text-sm leading-relaxed text-slate-400">
                                            Our Rust-based builder compiles your application and optimizes assets for edge delivery in milliseconds.
                                        </p>
</div>
<div className="relative w-full h-32 rounded-lg bg-[#0a0a0c] border overflow-hidden flex items-center justify-center border-white/10">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
<div className="relative z-10 w-12 h-12 border border-purple-500/30 bg-purple-500/5 rounded flex items-center justify-center" style={{animation: 'float-gentle 4s ease-in-out infinite'}}>
<iconify-icon className="text-purple-400" icon="lucide:cpu"></iconify-icon>
<div className="absolute inset-0 border border-transparent border-t-purple-500/40 rounded-full animate-spin [animation-duration:3s]"></div>
</div>
<div className="absolute left-0 top-1/2 w-full h-px bg-white/5"></div>
<div className="absolute left-1/2 top-0 w-px h-full bg-white/5"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full blur-[2px] bg-purple-400" style={{animation: 'flow-beam 2s linear infinite'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative">
<div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0a0a0c] border items-center justify-center z-20 group-hover:border-purple-500/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-500 delay-200 border-white/10">
<div className="w-2 h-2 rounded-full group-hover:bg-purple-400 transition-colors bg-slate-600"></div>
</div>
<div className="pt-8 md:pt-16 h-full">
<div className="h-full rounded-2xl border bg-[#050505] p-1 overflow-hidden hover:border-purple-500/20 transition-all duration-500 group-hover:-translate-y-1 delay-150 border-white/10">
<div className="relative h-full rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent p-6 flex flex-col justify-between">
<div className="mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border group-hover:text-white group-hover:bg-white/10 transition-colors bg-white/5 text-slate-300 border-white/10">
<iconify-icon icon="lucide:globe-2" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">3. Globalize</h3>
</div>
<p className="text-sm leading-relaxed text-slate-400">
                                            Your site is instantly replicated to 35+ edge regions. Live, secure, and closer to your users.
                                        </p>
</div>
<div className="relative w-full h-32 rounded-lg bg-[#0a0a0c] border overflow-hidden flex items-center justify-center border-white/10">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]"></div>
<div className="absolute w-24 h-24 border rounded-full animate-[ping_3s_linear_infinite] border-white/5"></div>
<div className="absolute w-16 h-16 border rounded-full border-white/10"></div>
<div className="relative z-10 flex flex-col items-center gap-1">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)] text-emerald-400">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<span className="text-[9px] font-mono text-emerald-500/80 tracking-widest mt-1">ONLINE</span>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent h-[20%] w-full" style={{animation: 'scan-vertical 3s linear infinite'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="overflow-hidden bg-[#020204] border-white/5 border-t pt-16 pb-16 relative">
<div className="max-w-6xl mx-auto px-6 relative z-10">

<div className="relative w-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080512] shadow-2xl group">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(126,34,206,0.2),transparent_70%)]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[60%] pb-[60%] rounded-full border border-white/5 z-0 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[75%] pb-[75%] rounded-full border border-white/5 z-0 opacity-60 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[50%] w-[90%] pb-[90%] rounded-full border border-white/5 z-0 opacity-30 pointer-events-none"></div>

<div className="relative z-10 py-24 px-6 md:px-20 text-center flex flex-col items-center justify-center">

<span className="inline-block text-[10px] md:text-xs font-mono font-medium tracking-[0.2em] text-purple-300/80 uppercase mb-8">
                    Ready when you are
                </span>

<h2 className="md:text-6xl leading-[1.1] text-4xl font-medium text-white tracking-tighter font-newsreader max-w-4xl mb-6">
                    Stop managing infrastructure. 
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">Start shipping code.</span>
</h2>

<p className="text-base md:text-lg text-slate-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                    Adrino handles the complexity of global distribution, scaling, and security. 
                    Focus on building your product while we handle the rest.
                </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-[#020204] text-sm font-semibold hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
<iconify-icon className="text-purple-600" icon="lucide:sparkles" width="16"></iconify-icon>
<span>Sign up for free</span>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 backdrop-blur-sm group/btn">
<span>See Platform Demo</span>
<iconify-icon className="opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>

<div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-[11px] text-slate-500 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="opacity-50" icon="lucide:credit-card" strokeWidth="1.5" width="14"></iconify-icon>
<span>No credit card required</span>
</div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-slate-800"></div>
<div className="flex items-center gap-2">
<iconify-icon className="opacity-50" icon="lucide:history" strokeWidth="1.5" width="14"></iconify-icon>
<span>14-day free trial</span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#020204] w-full border-white/5 border-t pt-24 pb-24 relative">

<div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>
<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2"></div>
</div>

<div className="relative z-10 max-w-6xl mx-auto px-6">
<div className="relative rounded-2xl border border-white/10 bg-[#0a0a0c]/80 backdrop-blur-2xl p-8 md:p-12 overflow-hidden shadow-2xl">

<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row md:justify-between gap-12 lg:gap-20">

<div className="flex flex-col items-start md:max-w-xs">
<a className="flex items-center gap-3 mb-6 group" href="#">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-900/20 border border-purple-500/30 group-hover:border-purple-400/50 transition-colors shadow-[0_0_15px_rgba(168,85,247,0.15)]">
<iconify-icon className="text-purple-400" icon="lucide:layers" width="20"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-white group-hover:text-purple-200 transition-colors">Adrino</span>
</a>
<p className="text-sm text-slate-400 leading-relaxed mb-8">
                        Powering tomorrow's digital experiences with high-velocity edge infrastructure. Scale without limits.
                    </p>
<div className="flex gap-3">
<a className="w-9 h-9 flex items-center justify-center rounded-full border border-white/5 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="w-9 h-9 flex items-center justify-center rounded-full border border-white/5 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all" href="#">
<iconify-icon icon="lucide:github" width="16"></iconify-icon>
</a>
<a className="w-9 h-9 flex items-center justify-center rounded-full border border-white/5 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all" href="#">
<iconify-icon icon="lucide:linkedin" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-6">Product</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Features</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Pricing</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Integrations</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-6">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">About</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Careers</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Blog</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Contact</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-6">Resources</h4>
<ul className="space-y-3 text-sm">
<li className=""><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Documentation</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Community</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Support</a></li>
<li className=""><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Status</a></li>
</ul>
</div>
</div>
</div>

<div className="relative z-10 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
<p className="text-xs text-slate-500 font-medium">© 2024 Adrino Labs Inc. All rights reserved.</p>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-mono font-medium text-slate-400 tracking-wide">ALL SYSTEMS OPERATIONAL</span>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
