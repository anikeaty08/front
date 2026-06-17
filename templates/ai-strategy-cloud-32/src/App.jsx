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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
background: '#030305', // Deeper black/slate mix
surface: '#0E0F12',
accent: '#3B82F6',
},
backgroundImage: {
'glass-gradient': 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
},
animation: {
'slow-spin': 'spin 15s linear infinite',
'beam': 'beam 3s ease-in-out infinite',
'float': 'float 6s ease-in-out infinite',
'marquee': 'marquee 25s linear infinite',
'pulse-glow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
beam: {
'0%': { transform: 'translateY(-100%)', opacity: '0' },
'20%': { opacity: '1' },
'80%': { opacity: '1' },
'100%': { transform: 'translateY(100%)', opacity: '0' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
'pulse-glow': {
'0%, 100%': { opacity: '0.4' },
'50%': { opacity: '0.8' },
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 rounded-[100%] blur-[120px] opacity-40 mix-blend-screen"></div>
<div className="absolute inset-0 bg-grid-pattern"></div>
</div>

<header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
<div className="rounded-full bg-surface/80 backdrop-blur-md border border-white/10 px-6 h-14 flex items-center justify-between shadow-2xl shadow-black/50">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
<iconify-icon className="text-white text-lg" icon="lucide:layers"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-sm">RISE</span>
</a>

<nav className="hidden md:flex items-center gap-1">
<a className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#">Strategy</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#">Platform</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#">Enterprise</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Sign in</a>
<a className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-blue-50 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" href="#contact">
                    Start Building
                </a>
</div>
</div>
</header>
<main className="relative z-10 pt-40 pb-20">

<section className="relative max-w-7xl mx-auto px-6 mb-40">
<div className="flex flex-col items-center text-center">

<div className="group relative inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 cursor-pointer overflow-hidden transition-all hover:border-white/20 hover:bg-white/10">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"></span>
<span className="text-[11px] font-medium text-slate-300 tracking-wide uppercase">Introducing RISE Engine 2.0</span>
<iconify-icon className="text-slate-500 group-hover:text-white transition-colors text-xs" icon="lucide:arrow-right"></iconify-icon>
</div>

<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-8 max-w-4xl mx-auto leading-[0.95] relative">
<span className="text-gradient-white">AI Strategy for</span><br/>
<span className="relative inline-block">
<span className="absolute -inset-1 rounded-lg bg-blue-500/20 blur-xl"></span>
<span className="text-gradient-blue relative">Cloud Scale</span>
</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light tracking-tight">
                    From discovery to deployment, we build secure, scalable AI systems that deliver measurable ROI. The operating system for modern intelligence.
                </p>

<div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
<button className="h-12 px-8 rounded-full bg-[#EEEEEE] text-black font-semibold text-sm hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center gap-2">
                        Schedule Consultation
                        <iconify-icon icon="lucide:chevron-right" width="14"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full text-slate-300 font-medium text-sm btn-fancy hover:text-white transition-all">
                        View Documentation
                    </button>
</div>

<div className="relative w-full max-w-5xl mx-auto group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0C]/90 backdrop-blur-xl overflow-hidden shadow-2xl">

<div className="h-8 border-b border-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
</div>

<div className="grid md:grid-cols-3 divide-x divide-white/5 h-[400px]">

<div className="p-6 flex flex-col justify-between bg-white/[0.01]">
<div className="space-y-4">
<div className="h-2 w-20 bg-white/10 rounded"></div>
<div className="h-8 w-32 bg-white/5 rounded"></div>
<div className="space-y-2">
<div className="h-2 w-full bg-white/5 rounded"></div>
<div className="h-2 w-2/3 bg-white/5 rounded"></div>
</div>
</div>
<div className="mt-auto">
<div className="flex items-end gap-2 mb-2">
<span className="text-3xl text-white font-mono">98.4%</span>
<span className="text-xs text-green-500 mb-1">▲ 2.4%</span>
</div>
<div className="h-24 w-full flex items-end gap-1">
<div className="w-full bg-blue-500/20 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-blue-500/30 h-[60%] rounded-t-sm"></div>
<div className="w-full bg-blue-500/40 h-[30%] rounded-t-sm"></div>
<div className="w-full bg-blue-500/50 h-[80%] rounded-t-sm"></div>
<div className="w-full bg-blue-500/80 h-[95%] rounded-t-sm animate-pulse"></div>
</div>
</div>
</div>

<div className="md:col-span-2 p-6 font-mono text-xs bg-[#050507]">
<div className="flex items-center justify-between mb-4 text-slate-500">
<span>model_config.py</span>
<span>TypeScript</span>
</div>
<div className="space-y-1.5 opacity-80">
<div><span className="code-token-keyword">import</span> { RiseClient } <span className="code-token-keyword">from</span> <span className="code-token-string">'@rise/sdk'</span>;</div>
<div className="h-2"></div>
<div><span className="code-token-comment">// Initialize secure context</span></div>
<div><span className="code-token-keyword">const</span> client = <span className="code-token-keyword">new</span> RiseClient({</div>
<div className="pl-4">apiKey: process.env.RISE_KEY,</div>
<div className="pl-4">region: <span className="code-token-string">'us-east-1'</span>,</div>
<div className="pl-4">encryption: <span className="code-token-keyword">true</span></div>
<div>});</div>
<div className="h-2"></div>
<div><span className="code-token-keyword">await</span> client.deploy({</div>
<div className="pl-4">model: <span className="code-token-string">'llama-3-70b-instruct'</span>,</div>
<div className="pl-4">replicas: <span className="text-blue-400">3</span>,</div>
<div className="pl-4">strategy: <span className="code-token-string">'rolling_update'</span></div>
<div>});</div>
<div className="h-2"></div>
<div className="text-green-500">&gt;&gt; Deployment successful (420ms)</div>
<div className="w-2 h-4 bg-blue-500/50 animate-pulse inline-block align-middle"></div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full max-w-5xl mt-20 overflow-hidden relative border-t border-white/5 pt-10">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030305] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030305] to-transparent z-10"></div>
<div className="flex w-max animate-marquee gap-24 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<span className="text-xl font-bold tracking-tight text-white">ACME Corp</span>
<span className="text-xl font-serif italic text-white">Vertex</span>
<span className="text-xl font-bold tracking-tighter text-white">STRIPE</span>
<span className="text-xl font-medium tracking-wide text-white">Vercel</span>
<span className="text-xl font-bold text-white">Linear</span>
<span className="text-xl font-bold tracking-tight text-white">ACME Corp</span>
<span className="text-xl font-serif italic text-white">Vertex</span>
<span className="text-xl font-bold tracking-tighter text-white">STRIPE</span>
<span className="text-xl font-medium tracking-wide text-white">Vercel</span>
<span className="text-xl font-bold text-white">Linear</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Engineered for Impact</h2>
<p className="text-slate-400 text-lg max-w-xl">Comprehensive AI solutions built on modern infrastructure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 gap-6 grid-rows-2 h-auto md:h-[600px]">

<div className="md:col-span-4 md:row-span-2 glass-card rounded-3xl p-10 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/20 transition-colors duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-inner">
<iconify-icon icon="lucide:cpu" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3">End-to-End Architecture</h3>
<p className="text-slate-400 leading-relaxed max-w-md">We don't just advise; we build. Our team handles the entire lifecycle from data ingestion strategy to model training and production deployment on AWS.</p>
</div>

<div className="mt-8 relative h-48 w-full border border-white/10 bg-black/40 rounded-lg overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-50"></div>

<div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
<div className="absolute top-1/2 left-2/4 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
<div className="absolute top-1/2 left-3/4 w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>

<svg className="absolute inset-0 w-full h-full" style={{opacity: '0.4'}}>
<path d="M 25% 50% L 50% 50% L 75% 50%" fill="none" stroke="white" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
</div>
</div>
</div>

<div className="md:col-span-2 glass-card rounded-3xl p-8 flex flex-col relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">SOC2 Compliant</h3>
<p className="text-slate-400 text-sm">Enterprise-grade security standards with private VPC peering.</p>
<div className="absolute bottom-4 right-4 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="lucide:lock" width="48"></iconify-icon>
</div>
</div>

<div className="md:col-span-2 glass-card rounded-3xl p-8 flex flex-col relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">&lt; 24ms Latency</h3>
<p className="text-slate-400 text-sm">Optimized inference engines on H100 clusters.</p>
<div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[85%] relative">
<div className="absolute right-0 top-0 bottom-0 w-2 bg-white blur-[2px]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-24">
<div className="inline-block px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-mono mb-6">WORKFLOW</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Scientific Methodology</h2>
<p className="text-slate-400 text-lg">A rigorous approach to AI adoption, minimizing risk.</p>
</div>
<div className="relative">

<div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-beam"></div>
</div>

<div className="relative grid md:grid-cols-2 gap-12 mb-24 group">
<div className="pl-12 md:pl-0 md:text-right md:pr-12">
<h3 className="text-2xl font-medium text-white mb-3 group-hover:text-blue-400 transition-colors">Strategy &amp; Audit</h3>
<p className="text-slate-400 leading-relaxed">We audit your data landscape, identify high-value use cases, and define success metrics before writing code.</p>
</div>

<div className="absolute left-0 md:left-1/2 w-10 h-10 -translate-x-0 md:-translate-x-1/2 rounded-full bg-[#030305] border border-white/20 z-10 flex items-center justify-center shadow-[0_0_0_8px_#030305]">
<div className="w-3 h-3 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-300"></div>
</div>
<div className="pl-12 md:pl-12 opacity-50 group-hover:opacity-100 transition-opacity">
<div className="font-mono text-xs text-blue-300 bg-white/5 p-4 rounded border border-white/5 border-l-2 border-l-blue-500">
                                &gt; analyzing_schema...
                                &gt; 3 potential vectors found
                                &gt; calculating_roi_projection...
                            </div>
</div>
</div>

<div className="relative grid md:grid-cols-2 gap-12 mb-24 group">
<div className="pl-12 md:pl-0 md:pr-12 order-last md:order-first opacity-50 group-hover:opacity-100 transition-opacity">
<div className="rounded-lg overflow-hidden border border-white/10 relative h-24 bg-slate-900/50">
<div className="absolute inset-0 flex items-center justify-center gap-1">
<div className="w-1 bg-blue-500/50 h-8 animate-float" style={{animationDelay: '0s'}}></div>
<div className="w-1 bg-blue-500/50 h-12 animate-float" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 bg-blue-500/50 h-6 animate-float" style={{animationDelay: '0.2s'}}></div>
<div className="w-1 bg-blue-500/50 h-10 animate-float" style={{animationDelay: '0.3s'}}></div>
</div>
</div>
</div>

<div className="absolute left-0 md:left-1/2 w-10 h-10 -translate-x-0 md:-translate-x-1/2 rounded-full bg-[#030305] border border-white/20 z-10 flex items-center justify-center shadow-[0_0_0_8px_#030305]">
<div className="w-3 h-3 rounded-full bg-purple-500 group-hover:scale-125 transition-transform duration-300"></div>
</div>
<div className="pl-12 md:pl-12">
<h3 className="text-2xl font-medium text-white mb-3 group-hover:text-purple-400 transition-colors">Prototyping</h3>
<p className="text-slate-400 leading-relaxed">Rapid development of proof-of-concept models. We iterate quickly to validate hypothesis and ensure technical feasibility.</p>
</div>
</div>

<div className="relative grid md:grid-cols-2 gap-12 group">
<div className="pl-12 md:pl-0 md:text-right md:pr-12">
<h3 className="text-2xl font-medium text-white mb-3 group-hover:text-emerald-400 transition-colors">Scale to Production</h3>
<p className="text-slate-400 leading-relaxed">Deploying to scalable cloud infrastructure with automated CI/CD pipelines, monitoring, and fallback mechanisms.</p>
</div>

<div className="absolute left-0 md:left-1/2 w-10 h-10 -translate-x-0 md:-translate-x-1/2 rounded-full bg-[#030305] border border-white/20 z-10 flex items-center justify-center shadow-[0_0_0_8px_#030305]">
<div className="w-3 h-3 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform duration-300"></div>
</div>
<div className="pl-12 md:pl-12 opacity-50 group-hover:opacity-100 transition-opacity">
<div className="flex items-center gap-3">
<div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded border border-emerald-500/20">Active</div>
<div className="text-xs text-slate-500 font-mono">us-east-1a</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
<div className="py-12 px-6 text-center group cursor-default">
<div className="text-4xl md:text-5xl font-semibold text-white mb-2 group-hover:scale-110 transition-transform duration-300">40%</div>
<div className="text-xs text-slate-500 font-mono uppercase tracking-widest group-hover:text-blue-400 transition-colors">Cost Reduction</div>
</div>
<div className="py-12 px-6 text-center group cursor-default">
<div className="text-4xl md:text-5xl font-semibold text-white mb-2 group-hover:scale-110 transition-transform duration-300">2.5x</div>
<div className="text-xs text-slate-500 font-mono uppercase tracking-widest group-hover:text-purple-400 transition-colors">Faster Ship Time</div>
</div>
<div className="py-12 px-6 text-center group cursor-default">
<div className="text-4xl md:text-5xl font-semibold text-white mb-2 group-hover:scale-110 transition-transform duration-300">99.9</div>
<div className="text-xs text-slate-500 font-mono uppercase tracking-widest group-hover:text-emerald-400 transition-colors">Uptime SLA</div>
</div>
<div className="py-12 px-6 text-center group cursor-default">
<div className="text-4xl md:text-5xl font-semibold text-white mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
<div className="text-xs text-slate-500 font-mono uppercase tracking-widest group-hover:text-orange-400 transition-colors">Enterprises</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Internal Tools</h2>
<p className="text-slate-400">Accelerators we use to ship faster.</p>
</div>
<a className="text-sm text-white border-b border-white/20 pb-0.5 hover:border-white transition-colors" href="#">View all resources</a>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative rounded-2xl bg-[#08080A] border border-white/5 p-8 overflow-hidden hover:border-white/10 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-blue-400 shadow-lg">
<iconify-icon icon="lucide:bot" width="24"></iconify-icon>
</div>
<span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-slate-400">v2.1</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Agent Studio</h3>
<p className="text-slate-400 text-sm mb-8 leading-relaxed">A visual orchestration layer for chaining LLM prompts and tools. Reduces development time for complex agents by weeks.</p>
<div className="mt-auto flex items-center gap-2 text-sm font-medium text-white group-hover:translate-x-2 transition-transform">
                            Request Access <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-[#08080A] border border-white/5 p-8 overflow-hidden hover:border-white/10 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-purple-400 shadow-lg">
<iconify-icon icon="lucide:cloud-lightning" width="24"></iconify-icon>
</div>
<span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-slate-400">BETA</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Cloud Launch Kit</h3>
<p className="text-slate-400 text-sm mb-8 leading-relaxed">Opinionated Terraform blueprints for AWS AI infrastructure. Includes VPCs, load balancers, and GPU instance scaling out of the box.</p>
<div className="mt-auto flex items-center gap-2 text-sm font-medium text-white group-hover:translate-x-2 transition-transform">
                            View Documentation <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<footer className="relative mt-20 pt-32 pb-16 overflow-hidden border-t border-white/5">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter mb-8">Ready to transform?</h2>
<p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">Join forward-thinking companies leveraging RISE for their intelligence roadmap.</p>
<div className="flex flex-col items-center gap-6">
<form className="flex w-full max-w-sm items-center gap-2 bg-white/5 border border-white/10 rounded-full p-1.5 focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/50 transition-all">
<input className="flex-1 bg-transparent border-none text-white text-sm px-4 focus:ring-0 placeholder:text-slate-600 outline-none h-full" placeholder="work@email.com" type="email"/>
<button className="bg-white text-black text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-slate-200 transition-colors">
                            Get Started
                        </button>
</form>
<p className="text-xs text-slate-600">No credit card required for consultation.</p>
</div>
<div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
<span className="text-[10px] font-bold text-white">R</span>
</div>
<span className="text-sm text-slate-500">© 2024 RISE Inc.</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
