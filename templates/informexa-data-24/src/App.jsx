import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative">
<div className="absolute inset-0 bg-cyan-600 blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="relative bg-gradient-to-br from-cyan-600 to-green-600 p-1.5 rounded-lg shadow-lg border border-white/10 group-hover:scale-105 transition-transform duration-300">
<i className="w-4 h-4 text-white stroke-[2]" data-lucide="database"></i>
</div>
</div>
<span className="text-base font-medium text-white tracking-tight group-hover:text-cyan-100 transition-colors">Informexa</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors relative group" href="#product">
                    Product
                    <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors relative group" href="#solutions">
                    Solutions
                    <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors relative group" href="#developers">
                    Developers
                    <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors relative group" href="#pricing">
                    Pricing
                    <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-slate-300 hover:text-white transition-colors" href="#">Log in</a>
<button className="group relative px-4 py-2 rounded-full overflow-hidden bg-white text-black transition-all hover:bg-slate-200">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
<span className="relative text-xs font-medium">Start Free</span>
</button>
</div>
</div>
</nav>

<main className="relative md:pt-48 md:pb-32 pt-32 pb-24 overflow-hidden border-b border-white/5">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-grid-flow"></div>
</div>

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none animate-blob"></div>
<div className="absolute top-[10%] left-[30%] w-[300px] h-[300px] bg-green-600/10 rounded-full blur-[80px] pointer-events-none animate-blob" style={{animationDelay: '2s'}}></div>
<div className="relative max-w-5xl mx-auto px-6 text-center z-10">

<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm mb-8 hover:bg-cyan-500/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-xs font-medium text-cyan-300">v2.4 Release: Neural Query Engine</span>
</div>

<h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-8 leading-[1.1] drop-shadow-2xl">
                Data intelligence <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-green-400 to-cyan-500 animate-gradient-x">at lightspeed</span>
</h1>

<p className="reveal text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Ingest, process, and visualize petabytes of data with sub-millisecond latency. The infrastructure layer for modern data engineering teams.
            </p>

<div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group px-8 py-3.5 rounded-full bg-white text-black font-medium hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                    Deploy Pipeline
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="group px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all duration-200 flex items-center gap-2 backdrop-blur-sm">
                    Read Documentation
                </button>
</div>
</div>

<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute top-[40%] left-[20%] w-1 h-1 bg-white/20 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
<div className="absolute top-[60%] right-[20%] w-1.5 h-1.5 bg-cyan-500/20 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
<div className="absolute top-[30%] right-[30%] w-1 h-1 bg-green-500/20 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
</div>
</main>

<section className="py-12 border-b border-white/5 bg-[#020202]">
<div className="max-w-7xl mx-auto px-6">
<p className="reveal text-center text-xs font-medium text-slate-500 mb-8 uppercase tracking-widest">Trusted by data teams at</p>
<div className="reveal grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<div className="group cursor-default transition-all duration-300 hover:scale-110">
<div className="text-xl font-semibold text-white tracking-tighter text-center group-hover:text-cyan-400 transition-colors">ACME<span className="text-cyan-500">.corp</span></div>
</div>
<div className="group cursor-default transition-all duration-300 hover:scale-110">
<div className="text-xl font-bold text-white tracking-tight text-center italic group-hover:text-blue-400 transition-colors">Globex</div>
</div>
<div className="group cursor-default transition-all duration-300 hover:scale-110">
<div className="text-xl font-medium text-white tracking-widest text-center group-hover:text-amber-400 transition-colors">SOYIENT</div>
</div>
<div className="group cursor-default transition-all duration-300 hover:scale-110">
<div className="text-xl font-semibold text-white tracking-tight text-center group-hover:text-purple-400 transition-colors">UMBRELLA</div>
</div>
<div className="group cursor-default transition-all duration-300 hover:scale-110">
<div className="text-xl font-bold text-white tracking-tighter text-center group-hover:text-yellow-400 transition-colors">MASSIVE</div>
</div>
<div className="group cursor-default transition-all duration-300 hover:scale-110">
<div className="text-xl font-medium text-white tracking-tight text-center group-hover:text-green-400 transition-colors">Hooli</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505]" id="product">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Everything you need to scale</h2>
<p className="text-lg text-slate-400 font-light">Stop stitching together disparate tools. Informexa provides a unified control plane for your entire data lifecycle.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="reveal md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 shadow-lg hover:shadow-cyan-900/5">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div>
<div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
<i className="w-5 h-5 text-cyan-500" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Real-time Ingestion</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed max-w-md">
                                Stream events directly from your application to our edge network. Data is processed, normalized, and indexed in under 50ms.
                            </p>
</div>

<div className="mt-8 relative h-32 w-full border-t border-white/10 bg-black/20 rounded-lg overflow-hidden flex items-end gap-1 px-4 pt-4">
<div className="w-1 bg-cyan-500/50 rounded-t-full h-[40%] animate-[pulse_2s_ease-in-out_infinite]"></div>
<div className="w-1 bg-green-500/50 rounded-t-full h-[70%] animate-[pulse_2s_ease-in-out_infinite_0.1s]"></div>
<div className="w-1 bg-cyan-500/50 rounded-t-full h-[30%] animate-[pulse_2s_ease-in-out_infinite_0.2s]"></div>
<div className="w-1 bg-green-500/50 rounded-t-full h-[60%] animate-[pulse_2s_ease-in-out_infinite_0.3s]"></div>
<div className="w-1 bg-cyan-500/50 rounded-t-full h-[50%] animate-[pulse_2s_ease-in-out_infinite_0.4s]"></div>
<div className="w-1 bg-green-500/50 rounded-t-full h-[80%] animate-[pulse_2s_ease-in-out_infinite_0.5s]"></div>
<div className="w-1 bg-cyan-500/50 rounded-t-full h-[45%] animate-[pulse_2s_ease-in-out_infinite_0.6s]"></div>
<div className="w-1 bg-green-500/50 rounded-t-full h-[65%] animate-[pulse_2s_ease-in-out_infinite_0.7s]"></div>

<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
</div>
</div>
</div>

<div className="reveal md:row-span-2 group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8 h-full flex flex-col relative z-10">
<div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-300">
<i className="w-5 h-5 text-green-500" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Enterprise Security</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-8">
                            SOC2 Type II certified. End-to-end encryption with customer-managed keys (CMK) and granular role-based access control.
                        </p>
<div className="flex-1 w-full bg-[#0A0A0A] rounded-xl border border-white/5 p-4 space-y-3 group-hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 text-xs text-slate-400 border-b border-white/5 pb-2 group-hover:text-slate-300 transition-colors">
<i className="w-3 h-3 text-amber-500" data-lucide="lock"></i>
<span>AES-256 Encryption</span>
<span className="ml-auto text-amber-500 flex items-center gap-1">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
</span>
                                    Active
                                </span>
</div>
<div className="flex items-center gap-3 text-xs text-slate-400 border-b border-white/5 pb-2 group-hover:text-slate-300 transition-colors">
<i className="w-3 h-3 text-amber-500" data-lucide="globe"></i>
<span>Data Residency (EU)</span>
<span className="ml-auto text-amber-500">Active</span>
</div>
<div className="flex items-center gap-3 text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
<i className="w-3 h-3 text-amber-500" data-lucide="users"></i>
<span>SSO Enforcement</span>
<span className="ml-auto text-amber-500">Active</span>
</div>
</div>
</div>
</div>

<div className="reveal group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500">
<div className="p-8">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
<i className="w-5 h-5 text-blue-400" data-lucide="code-2"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Typed SDKs</h3>
<p className="text-sm text-slate-400 font-light">
                            First-class TypeScript support with auto-generated types based on your schema.
                        </p>
</div>
</div>

<div className="reveal group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500">
<div className="p-8">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
<i className="w-5 h-5 text-purple-400" data-lucide="git-branch"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Branching</h3>
<p className="text-sm text-slate-400 font-light">
                            Create zero-copy clones of your production database for safe testing and staging.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden bg-[#030303]" id="developers">
<div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-gradient-to-b from-green-600/10 to-transparent rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
<div className="reveal lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 mb-6">
<span className="text-xs font-medium text-green-300">Developer First</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Built for your IDE</h2>
<p className="text-lg text-slate-400 font-light mb-8 leading-relaxed">
                    Our CLI and SDKs are designed to get out of your way. Define your infrastructure as code, push to git, and let Informexa handle the provisioning.
                </p>
<div className="space-y-4">
<div className="flex gap-4 group">
<div className="flex-none pt-1 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" data-lucide="terminal"></i>
</div>
<div>
<h4 className="text-white font-medium text-sm group-hover:text-green-400 transition-colors">CLI Magic</h4>
<p className="text-sm text-slate-500 mt-1">Deploy changes instantly with `infx deploy`.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="flex-none pt-1 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" data-lucide="webhook"></i>
</div>
<div>
<h4 className="text-white font-medium text-sm group-hover:text-green-400 transition-colors">Webhooks &amp; Events</h4>
<p className="text-sm text-slate-500 mt-1">Trigger serverless functions on database changes.</p>
</div>
</div>
</div>
</div>
<div className="reveal lg:w-1/2 w-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)]">
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] p-1 shadow-2xl">
<div className="absolute top-0 left-0 right-0 h-10 bg-[#0F0F0F] rounded-t-lg border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-cyan-500/20 hover:bg-cyan-500/40 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 hover:bg-yellow-500/40 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-amber-500/20 hover:bg-amber-500/40 transition-colors"></div>
<div className="ml-auto text-xs text-slate-500 font-mono">pipeline.ts</div>
</div>
<div className="p-6 pt-12 overflow-x-auto">
<pre className="font-mono text-xs md:text-sm leading-relaxed"><span className="text-purple-400">import</span> <span className="text-white">{ Pipeline, Source }</span> <span className="text-purple-400">from</span> <span className="text-amber-400">'@informexa/sdk'</span>;

<span className="text-slate-500">// Initialize high-throughput pipeline</span>
<span className="text-purple-400">const</span> <span className="text-blue-400">analyticsStream</span> = <span className="text-purple-400">new</span> <span className="text-yellow-300">Pipeline</span>({
  <span className="text-blue-300">id</span>: <span className="text-amber-400">'clickstream-v1'</span>,
  <span className="text-blue-300">region</span>: <span className="text-amber-400">'us-east-1'</span>,
  <span className="text-blue-300">scaling</span>: { <span className="text-blue-300">min</span>: <span className="text-green-400">1</span>, <span className="text-blue-300">max</span>: <span className="text-green-400">100</span> }
});

<span className="text-blue-400">analyticsStream</span>.<span className="text-yellow-300">on</span>(<span className="text-amber-400">'ingest'</span>, <span className="text-purple-400">async</span> (<span className="text-green-400">event</span>) =&gt; {
  <span className="text-purple-400">if</span> (event.risk &gt; <span className="text-green-400">0.9</span>) {
    <span className="text-purple-400">await</span> <span className="text-yellow-300">blockUser</span>(event.userId);
  }
  <span className="text-slate-500">// Automatic schema inference</span>
  <span className="text-purple-400">return</span> <span className="text-yellow-300">normalize</span>(event);
});</pre>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#020202]">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="reveal text-3xl md:text-4xl font-medium text-white tracking-tight mb-16">Global Edge Network</h2>
<div className="reveal relative w-full aspect-[2/1] md:aspect-[3/1] bg-white/[0.02] rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center shadow-inner group">

<div className="absolute inset-0 opacity-20 transition-opacity duration-1000 group-hover:opacity-30" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none">
<path className="opacity-50" d="M200,150 Q400,50 600,150 T1000,150" fill="none" stroke="url(#lineGradient)" strokeWidth="2"></path>
<path className="opacity-50 blur-sm" d="M200,150 Q400,50 600,150 T1000,150" fill="none" stroke="url(#lineGradient)" strokeWidth="2"></path>
<defs>
<lineargradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(239, 68, 68, 0)"></stop>
<stop offset="50%" stop-color="rgba(239, 68, 68, 1)">
<animate attributename="offset" duration="2s" repeatcount="indefinite" values="0;1"></animate>
</stop>
<stop offset="100%" stop-color="rgba(239, 68, 68, 0)"></stop>
</lineargradient>
</defs>
</svg>

<div className="absolute left-[20%] top-[60%] flex flex-col items-center gap-2 group/node">
<div className="w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,1)] animate-pulse group-hover/node:scale-150 transition-transform"></div>
<span className="text-[10px] text-slate-500 font-mono opacity-0 group-hover/node:opacity-100 transition-opacity absolute top-6">SFO</span>
</div>
<div className="absolute left-[50%] top-[40%] flex flex-col items-center gap-2 group/node">
<div className="w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,1)] animate-pulse delay-75 group-hover/node:scale-150 transition-transform"></div>
<span className="text-[10px] text-slate-500 font-mono opacity-0 group-hover/node:opacity-100 transition-opacity absolute top-6">LHR</span>
</div>
<div className="absolute left-[80%] top-[55%] flex flex-col items-center gap-2 group/node">
<div className="w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,1)] animate-pulse delay-150 group-hover/node:scale-150 transition-transform"></div>
<span className="text-[10px] text-slate-500 font-mono opacity-0 group-hover/node:opacity-100 transition-opacity absolute top-6">SIN</span>
</div>
<div className="relative z-10 bg-[#050505]/80 backdrop-blur border border-white/10 px-6 py-3 rounded-full flex items-center gap-4 hover:border-white/20 transition-colors">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-amber-500 animate-[pulse_1.5s_infinite]"></div>
<span className="text-xs text-white font-medium">System Normal</span>
</div>
<div className="w-px h-4 bg-white/10"></div>
<span className="text-xs text-slate-400">Avg Latency: <span className="text-white font-mono">24ms</span></span>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Connects with everything</h2>
<p className="text-slate-400 font-light">Pre-built connectors for the modern data stack. Setup takes minutes, not weeks.</p>
</div>
<a className="group text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors" href="#">
                    View all 150+ integrations 
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="reveal group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all hover:-translate-y-1">
<div className="w-10 h-10 rounded bg-white flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-blue-500/20 transition-shadow">
<div className="w-6 h-6 bg-blue-500 rounded-full"></div>
</div>
<div>
<h4 className="text-white text-sm font-medium group-hover:text-blue-200 transition-colors">Snowflake</h4>
<p className="text-xs text-slate-500">Warehouse</p>
</div>
</div>

<div className="reveal group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all hover:-translate-y-1">
<div className="w-10 h-10 rounded bg-white flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-yellow-500/20 transition-shadow">
<div className="w-6 h-6 bg-yellow-500 rounded-sm"></div>
</div>
<div>
<h4 className="text-white text-sm font-medium group-hover:text-yellow-200 transition-colors">BigQuery</h4>
<p className="text-xs text-slate-500">Warehouse</p>
</div>
</div>

<div className="reveal group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all hover:-translate-y-1">
<div className="w-10 h-10 rounded bg-white flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-indigo-500/20 transition-shadow">
<div className="w-6 h-6 bg-indigo-500 rounded-sm"></div>
</div>
<div>
<h4 className="text-white text-sm font-medium group-hover:text-indigo-200 transition-colors">Postgres</h4>
<p className="text-xs text-slate-500">Database</p>
</div>
</div>

<div className="reveal group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all hover:-translate-y-1">
<div className="w-10 h-10 rounded bg-white flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-amber-500/20 transition-shadow">
<div className="w-6 h-6 bg-amber-500 rounded-full"></div>
</div>
<div>
<h4 className="text-white text-sm font-medium group-hover:text-amber-200 transition-colors">MongoDB</h4>
<p className="text-xs text-slate-500">NoSQL</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="text-center max-w-4xl mr-auto ml-auto pr-6 pl-6">
<div className="reveal mb-8 flex justify-center">
<i className="w-10 h-10 text-cyan-500/50" data-lucide="quote"></i>
</div>
<h3 className="reveal text-2xl md:text-4xl font-medium text-white tracking-tight leading-normal mb-8">
                "Informexa transformed how we handle customer data. What used to take our engineering team three weeks now happens automatically in real-time. It's simply magic."
            </h3>
<div className="reveal flex flex-col items-center gap-2">
<div className="bg-slate-700 w-12 h-12 rounded-full mb-2 ring-2 ring-white/10 ring-offset-2 ring-offset-[#030303]"></div>
<div className="text-white font-medium">Sarah Chen</div>
<div className="text-sm text-slate-500">CTO at TechFlow Inc.</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#030303]">
<div className="reveal max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="border-l border-white/10 pl-6 hover:border-cyan-500/50 transition-colors duration-500 cursor-default">
<div className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight hover:text-cyan-400 transition-colors">10B+</div>
<div className="text-sm text-slate-500">Events Processed Daily</div>
</div>
<div className="border-l border-white/10 pl-6 hover:border-cyan-500/50 transition-colors duration-500 cursor-default">
<div className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight hover:text-cyan-400 transition-colors">99.99%</div>
<div className="text-sm text-slate-500">Uptime SLA</div>
</div>
<div className="border-l border-white/10 pl-6 hover:border-cyan-500/50 transition-colors duration-500 cursor-default">
<div className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight hover:text-cyan-400 transition-colors">&lt;50ms</div>
<div className="text-sm text-slate-500">Query Latency</div>
</div>
<div className="border-l border-white/10 pl-6 hover:border-cyan-500/50 transition-colors duration-500 cursor-default">
<div className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight hover:text-cyan-400 transition-colors">24/7</div>
<div className="text-sm text-slate-500">Dedicated Support</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050505]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Transparent Pricing</h2>
<p className="text-slate-400 font-light">Start small and scale as you grow. No hidden ingestion fees.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="reveal p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col hover:bg-white/[0.04] transition-all duration-300">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="text-3xl font-bold text-white mb-6">$0<span className="text-sm font-normal text-slate-500">/mo</span></div>
<p className="text-sm text-slate-400 mb-8">Perfect for side projects and prototypes.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300"><i className="w-4 h-4 text-slate-500" data-lucide="check"></i> 1M events/month</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><i className="w-4 h-4 text-slate-500" data-lucide="check"></i> 3 Team members</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><i className="w-4 h-4 text-slate-500" data-lucide="check"></i> Community Support</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors">Start Free</button>
</div>

<div className="reveal p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-cyan-900/10 to-transparent flex flex-col relative transform hover:scale-105 transition-all duration-300 shadow-xl">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wide shadow-lg shadow-cyan-600/50">Most Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Pro</h3>
<div className="text-3xl font-bold text-white mb-6">$299<span className="text-sm font-normal text-slate-500">/mo</span></div>
<p className="text-sm text-slate-400 mb-8">For scaling startups and data teams.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white"><i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> 50M events/month</li>
<li className="flex items-center gap-3 text-sm text-white"><i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> Unlimited seats</li>
<li className="flex items-center gap-3 text-sm text-white"><i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> Priority Email Support</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-cyan-600 text-white text-sm font-medium hover:bg-cyan-700 transition-colors shadow-lg shadow-cyan-900/20">Get Started</button>
</div>

<div className="reveal p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col hover:bg-white/[0.04] transition-all duration-300">
<h3 className="text-lg font-medium text-white mb-2">Enterprise</h3>
<div className="text-3xl font-bold text-white mb-6">Custom</div>
<p className="text-sm text-slate-400 mb-8">Dedicated infrastructure and strict compliance.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300"><i className="w-4 h-4 text-slate-500" data-lucide="check"></i> Unlimited volume</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><i className="w-4 h-4 text-slate-500" data-lucide="check"></i> Dedicated Success Manager</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><i className="w-4 h-4 text-slate-500" data-lucide="check"></i> SSO &amp; SAML</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="reveal text-3xl font-medium text-white tracking-tight mb-12 text-center">Frequently asked questions</h2>
<div className="reveal space-y-6">

<div className="group">
<h3 className="text-lg font-medium text-white mb-2 cursor-pointer flex justify-between items-center group-hover:text-cyan-400 transition-colors">
                        Is my data secure?
                        <i className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors group-hover:rotate-90 duration-300" data-lucide="plus"></i>
</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed h-0 overflow-hidden group-hover:h-auto group-hover:mb-4 transition-all duration-500 opacity-0 group-hover:opacity-100">Yes, we are SOC2 Type II compliant and encrypt all data at rest and in transit using AES-256. You retain full ownership of your data.</p>
</div>
<div className="h-px bg-white/5 w-full"></div>

<div className="group">
<h3 className="text-lg font-medium text-white mb-2 cursor-pointer flex justify-between items-center group-hover:text-cyan-400 transition-colors">
                        Can I deploy on-premise?
                        <i className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors group-hover:rotate-90 duration-300" data-lucide="plus"></i>
</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed h-0 overflow-hidden group-hover:h-auto group-hover:mb-4 transition-all duration-500 opacity-0 group-hover:opacity-100">Yes, our Enterprise plan supports on-premise deployments via Docker containers or Kubernetes Helm charts.</p>
</div>
<div className="h-px bg-white/5 w-full"></div>

<div className="group">
<h3 className="text-lg font-medium text-white mb-2 cursor-pointer flex justify-between items-center group-hover:text-cyan-400 transition-colors">
                        Do you offer migration support?
                        <i className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors group-hover:rotate-90 duration-300" data-lucide="plus"></i>
</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed h-0 overflow-hidden group-hover:h-auto group-hover:mb-4 transition-all duration-500 opacity-0 group-hover:opacity-100">Absolutely. Our solutions engineering team will help you migrate your existing pipelines from Airflow, dbt, or legacy systems.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-cyan-600/20 to-green-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
<div className="reveal max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to scale your intelligence?</h2>
<p className="text-lg text-slate-400 font-light mb-10 max-w-2xl mx-auto">Join forward-thinking enterprises using Informexa to turn data chaos into clarity.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-slate-200 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto shadow-lg shadow-white/10">
                    Get Started Now
                </button>
<button className="group px-8 py-4 rounded-full bg-black border border-white/10 text-white font-medium hover:bg-white/5 hover:border-white/20 active:scale-95 transition-all w-full sm:w-auto">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-16 bg-[#020202]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4 group cursor-default">
<div className="bg-gradient-to-br from-cyan-600 to-green-600 p-1 rounded-md group-hover:rotate-3 transition-transform">
<i className="w-3 h-3 text-white" data-lucide="database"></i>
</div>
<span className="text-white font-medium">Informexa</span>
</div>
<p className="text-sm text-slate-500 max-w-xs font-light">The intelligent data backbone for the modern enterprise. Scale without limits.</p>
</div>
<div className="">
<h4 className="text-white font-medium text-sm mb-4">Product</h4>
<ul className="space-y-3">
<li className=""><a className="text-sm text-slate-500 hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Pipelines</a></li>
<li className=""><a className="text-sm text-slate-500 hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Connectors</a></li>
<li className=""><a className="text-sm text-slate-500 hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Observability</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium text-sm mb-4">Resources</h4>
<ul className="space-y-3">
<li className=""><a className="text-sm text-slate-500 hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Documentation</a></li>
<li className=""><a className="text-sm text-slate-500 hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">API Reference</a></li>
<li className=""><a className="text-sm text-slate-500 hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">About</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Careers</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2023 Informexa Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-600 hover:text-white transition-colors hover:scale-110 transform" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-slate-600 hover:text-white transition-colors hover:scale-110 transform" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-slate-600 hover:text-white transition-colors hover:scale-110 transform" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>


    </>
  );
}
