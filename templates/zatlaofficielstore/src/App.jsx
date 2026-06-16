import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
background: '#050505',
surface: '#0A0A0A',
border: '#1A1A1A',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
<span className="iconify text-black" data-icon="lucide:zap" data-width="12"></span>
</div>
<span className="text-sm font-semibold text-white tracking-tight">ZATLA</span>
</div>

<div className="hidden md:flex items-center gap-6 text-xs font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Methodology</a>
<a className="hover:text-white transition-colors" href="#">Customers</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>

<div className="flex items-center gap-3">
<button className="text-xs font-medium hover:text-white transition-colors">Log in</button>
<button className="h-7 px-3 bg-white text-black text-xs font-medium rounded-full hover:bg-gray-200 transition-colors">
                    Sign up
                </button>
</div>
</div>
</nav>

<main className="flex-1 flex flex-col pt-32 pb-20 relative overflow-hidden">

<div className="absolute inset-0 bg-grid pointer-events-none z-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] glow-radial opacity-50 z-0 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-float">
<span className="flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
<span className="text-[10px] uppercase tracking-wider font-medium text-gray-300">Zatla 2.0 is now available</span>
<span className="iconify text-gray-500" data-icon="lucide:arrow-right" data-width="12"></span>
</div>

<h1 className="text-5xl md:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter mb-6 leading-[1.1]">
                Scale without <br/> limits.
            </h1>

<p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mb-10">
                Zatla provides the infrastructure primitives for the next generation of high-scale applications. Deploy globally in seconds.
            </p>

<div className="flex items-center gap-4 mb-20">
<button className="h-10 px-6 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-all flex items-center gap-2">
                    Start Building
                    <span className="iconify" data-icon="lucide:chevron-right" data-width="14"></span>
</button>
<button className="h-10 px-6 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
<span className="iconify" data-icon="lucide:terminal" data-width="14"></span>
                    Documentation
                </button>
</div>

<div className="w-full max-w-3xl border border-white/10 rounded-lg bg-[#0A0A0A] shadow-2xl overflow-hidden relative group">

<div className="h-8 border-b border-white/5 flex items-center px-3 gap-2 bg-[#0F0F0F]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
<div className="flex-1 text-center text-[10px] text-gray-600 font-mono">zatla.config.ts</div>
</div>

<div className="p-6 text-left font-mono text-xs md:text-sm text-gray-400 overflow-x-auto">
<div className="flex gap-4">
<div className="text-gray-700 select-none flex flex-col text-right">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
</div>
<div className="flex flex-col">
<span><span className="text-purple-400">import</span> { defineConfig } <span className="text-purple-400">from</span> <span className="text-green-400">'@zatla/sdk'</span>;</span>
<span> </span>
<span><span className="text-purple-400">export default</span> defineConfig({</span>
<span>  project: <span className="text-green-400">'hyper-scale-v1'</span>,</span>
<span>  region: <span className="text-blue-400">['us-east', 'eu-west', 'asia-ne']</span>,</span>
<span>  edge: <span className="text-yellow-400">true</span>,</span>
<span>  database: {</span>
<span>    type: <span className="text-green-400">'postgres'</span>,</span>
<span>    replicas: <span className="text-orange-400">5</span></span>
<span>  }</span>
<span>});</span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
</div>
</div>
</main>

<section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Designed for velocity</h2>
<p className="text-sm text-gray-500 max-w-md">Every aspect of the platform is optimized for speed, security, and developer experience.</p>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
<span className="iconify" data-icon="lucide:arrow-left" data-width="14"></span>
</button>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="group relative p-6 rounded-xl border border-white/10 bg-surface overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
<span className="iconify" data-icon="lucide:globe-2" data-width="64"></span>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/5 mb-6">
<span className="iconify text-white" data-icon="lucide:zap" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-semibold text-white mb-1">Global Edge Network</h3>
<p className="text-xs text-gray-500 leading-relaxed">Deploy your code to 35+ regions worldwide instantly. Minimal latency, maximum availability.</p>
</div>
</div>
</div>

<div className="group relative p-6 rounded-xl border border-white/10 bg-surface overflow-hidden hover:border-white/20 transition-all duration-300 md:col-span-2">
<div className="flex flex-col md:flex-row h-full gap-6">
<div className="flex-1 flex flex-col justify-between z-10">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/5 mb-6">
<span className="iconify text-white" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-semibold text-white mb-1">Enterprise Grade Security</h3>
<p className="text-xs text-gray-500 leading-relaxed max-w-sm">SOC2 Type II certified. Automated DDOS protection, WAF, and granular access controls built-in by default.</p>
</div>
</div>

<div className="flex-1 h-32 md:h-auto bg-black/50 rounded border border-white/5 relative overflow-hidden flex items-center justify-center">
<div className="flex items-center gap-1">
<div className="h-8 w-1.5 bg-green-500 rounded-sm animate-pulse"></div>
<div className="h-12 w-1.5 bg-green-500/80 rounded-sm animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div className="h-6 w-1.5 bg-green-500/60 rounded-sm animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div className="h-16 w-1.5 bg-green-500/40 rounded-sm animate-pulse" style={{animationDelay: '0.3s'}}></div>
<div className="h-10 w-1.5 bg-green-500/20 rounded-sm animate-pulse" style={{animationDelay: '0.4s'}}></div>
</div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-20"></div>
</div>
</div>
</div>

<div className="group relative p-6 rounded-xl border border-white/10 bg-surface overflow-hidden hover:border-white/20 transition-all duration-300 md:col-span-2">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<div className="relative z-10 flex flex-col justify-between h-full">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/5 mb-6">
<span className="iconify text-white" data-icon="lucide:bar-chart-2" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-semibold text-white mb-1">Real-time Analytics</h3>
<p className="text-xs text-gray-500 leading-relaxed max-w-lg">
                            Instant insights into your application performance. Track requests, latency, and errors with millisecond precision without impacting performance.
                        </p>
</div>
</div>
</div>

<div className="group relative p-6 rounded-xl border border-white/10 bg-surface overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/5 mb-6">
<span className="iconify text-white" data-icon="lucide:workflow" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-semibold text-white mb-1">CI/CD Pipeline</h3>
<p className="text-xs text-gray-500 leading-relaxed">Zero-config deployments. Just push to git and we handle the rest.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-background py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-white/90 rounded-sm flex items-center justify-center">
<span className="iconify text-black" data-icon="lucide:zap" data-width="10"></span>
</div>
<span className="text-sm font-semibold text-white tracking-tight">ZATLA</span>
</div>
<p className="text-xs text-gray-600 max-w-xs">
                    Building the foundation for the next generation of internet scale applications.
                </p>
<div className="flex gap-4 mt-2">
<a className="text-gray-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:disc" data-width="16"></span></a> 
</div>
</div>
<div className="flex gap-12 text-xs text-gray-500">
<div className="flex flex-col gap-3">
<span className="text-white font-medium">Product</span>
<a className="hover:text-white transition-colors" href="#">Infrastructure</a>
<a className="hover:text-white transition-colors" href="#">Previews</a>
<a className="hover:text-white transition-colors" href="#">Analytics</a>
<a className="hover:text-white transition-colors" href="#">Enterprise</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-medium">Resources</span>
<a className="hover:text-white transition-colors" href="#">Docs</a>
<a className="hover:text-white transition-colors" href="#">Community</a>
<a className="hover:text-white transition-colors" href="#">Templates</a>
<a className="hover:text-white transition-colors" href="#">Status</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-medium">Company</span>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
<a className="hover:text-white transition-colors" href="#">Careers</a>
<a className="hover:text-white transition-colors" href="#">Legal</a>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-700">
<span>© 2024 Zatla Inc. All rights reserved.</span>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<span>All systems normal</span>
</div>
</div>
</footer>

    </>
  );
}
