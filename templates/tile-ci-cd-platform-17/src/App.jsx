import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black opacity-80"></div>
<div className="absolute w-full h-full bg-grid opacity-20"></div>
</div>

<nav className="fixed top-0 w-full z-50 px-6 py-6">
<div className="max-w-5xl mx-auto">
<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between">
<a className="text-lg font-bold tracking-tighter text-white hover:text-orange-500 transition-colors duration-300" href="#">
                    TILE
                </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Architecture</a>
<a className="hover:text-white transition-colors" href="#integration">Integration</a>
<a className="hover:text-white transition-colors" href="#pricing">Enterprise</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Sign In</a>
<a className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-full bg-neutral-100 px-4 font-medium text-neutral-950 transition-all hover:bg-white hover:w-28 w-24" href="#">
<span className="text-xs">Start Build</span>
<div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
<div className="relative h-full w-8 bg-white/20"></div>
</div>
</a>
</div>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-5xl mx-auto px-6 text-center mb-32">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-medium text-orange-400 mb-8 animate-float">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                v2.0: Predictive Caching is live
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                Stop waiting for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600">deployment.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Tile intelligently predicts build dependencies and caches artifacts before you even push. Reduce CI/CD wait times by up to 80%.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-12 px-8 rounded-full bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold transition-all shadow-[0_0_40px_-10px_rgba(234,88,12,0.3)] hover:shadow-[0_0_60px_-15px_rgba(234,88,12,0.5)] flex items-center gap-2">
<iconify-icon icon="solar:rocket-2-linear" width="20"></iconify-icon>
                    Optimize Repo
                </button>
<button className="h-12 px-8 rounded-full border border-neutral-800 hover:border-neutral-600 bg-neutral-900/50 text-neutral-300 text-sm font-medium transition-all flex items-center gap-2 group">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="solar:code-circle-linear" width="20"></iconify-icon>
                    View Documentation
                </button>
</div>

<div className="relative max-w-3xl mx-auto group">
<div className="absolute -inset-1 bg-gradient-to-b from-orange-500/20 to-transparent rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative rounded-xl bg-[#0F0F0F] border border-neutral-800 overflow-hidden shadow-2xl">
<div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-[#141414]">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
</div>
<div className="mx-auto text-xs font-mono text-neutral-500">tile-cli — v2.4.0</div>
</div>
<div className="p-6 text-left font-mono text-xs md:text-sm leading-7">
<div className="flex gap-3">
<span className="text-orange-500">➜</span>
<span className="text-neutral-300">tile analyze --repo=frontend-monorepo</span>
</div>
<div className="text-neutral-500 mt-2">Analying dependency graph...</div>
<div className="text-neutral-500">Detected 142 micro-services.</div>
<div className="flex gap-3 mt-4">
<span className="text-orange-500">➜</span>
<span className="text-neutral-300">tile predict --commit=HEAD</span>
</div>
<div className="mt-2 text-green-400">✔ Prediction Engine Ready</div>
<div className="grid grid-cols-2 gap-4 mt-4 p-4 rounded bg-neutral-900/50 border border-neutral-800/50">
<div>
<div className="text-neutral-500 mb-1">Estimated Build Time</div>
<div className="text-white">1m 24s <span className="text-neutral-600 line-through ml-2">14m 10s</span></div>
</div>
<div>
<div className="text-neutral-500 mb-1">Cache Hit Rate</div>
<div className="text-orange-400">98.4%</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-neutral-900 bg-neutral-950/50 py-10 mb-32">
<div className="max-w-5xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-600 mb-8 uppercase tracking-widest">Powering builds for engineering teams at</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<h3 className="text-xl font-bold tracking-tighter text-white">ACME<span className="font-light">CORP</span></h3>
<h3 className="text-xl font-bold tracking-tighter text-white">STRATOS</h3>
<h3 className="text-xl font-bold tracking-tighter text-white">ORBITAL</h3>
<h3 className="text-xl font-bold tracking-tighter text-white">NEXUS<span className="text-orange-500">LABS</span></h3>
<h3 className="text-xl font-bold tracking-tighter text-white">VERTEX</h3>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-32" id="features">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Rebuilt for speed.</h2>
<p className="text-neutral-400 max-w-xl">Legacy CI pipelines are reactive. Tile is proactive. We analyze your codebase in real-time to eliminate redundant computations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors p-8 flex flex-col justify-between">
<div className="absolute top-0 right-0 p-32 bg-orange-600/10 blur-[100px] rounded-full group-hover:bg-orange-600/20 transition-all"></div>
<div>
<div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 text-orange-500">
<iconify-icon icon="solar:graph-new-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Predictive Dependency Graph</h3>
<p className="text-sm text-neutral-400 max-w-sm leading-relaxed">Our AI engine maps your entire dependency tree, understanding exactly which modules are affected by your changes.</p>
</div>

<div className="mt-8 flex gap-2 items-end h-24 w-full">
<div className="w-full bg-neutral-800/50 rounded-t-md h-[40%] group-hover:h-[60%] transition-all duration-500 delay-75"></div>
<div className="w-full bg-neutral-800/50 rounded-t-md h-[70%] group-hover:h-[80%] transition-all duration-500 delay-100"></div>
<div className="w-full bg-orange-600 rounded-t-md h-[50%] group-hover:h-[90%] transition-all duration-500 relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-orange-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Speed</div>
</div>
<div className="w-full bg-neutral-800/50 rounded-t-md h-[30%] group-hover:h-[40%] transition-all duration-500 delay-150"></div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors p-8">
<div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 text-white group-hover:text-orange-400 transition-colors">
<iconify-icon icon="solar:database-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Global Cache</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Artifacts are shared across your team instantly. Build once, use everywhere.</p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors p-8">
<div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 text-white group-hover:text-orange-400 transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Secure by Default</h3>
<p className="text-sm text-neutral-400 leading-relaxed">End-to-end encryption for all cached artifacts and build logs.</p>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors p-8 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 text-orange-500">
<iconify-icon icon="solar:tuning-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Smart Resource Allocation</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">Dynamically scale compute resources based on PR complexity. Save money on idle runners.</p>

<div className="bg-black/40 rounded-lg p-4 border border-neutral-800">
<div className="flex justify-between text-xs text-neutral-400 mb-2">
<span>Concurrency Limit</span>
<span className="text-white font-mono" id="concurrency-val">16x</span>
</div>
<input className="w-full" max="64" min="1" oninput="document.getElementById('concurrency-val').innerText = this.value + 'x'; document.getElementById('save-val').innerText = '$' + Math.floor(this.value * 12.5)" type="range" value="16"/>
<div className="flex justify-between text-xs mt-3 pt-3 border-t border-neutral-800">
<span className="text-neutral-500">Estimated Monthly Savings</span>
<span className="text-orange-400 font-mono" id="save-val">$200</span>
</div>
</div>
</div>
<div className="w-full md:w-1/3 flex justify-center">
<div className="relative w-32 h-32 rounded-full border-4 border-neutral-800 flex items-center justify-center">
<div className="absolute inset-0 rounded-full border-4 border-orange-500 border-t-transparent animate-spin duration-[3s]"></div>
<div className="text-center">
<div className="text-2xl font-bold text-white">99.9%</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wide">Uptime</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24 border-t border-neutral-900">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
<div className="max-w-lg">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Works where you work.</h2>
<p className="text-neutral-400">Tile integrates seamlessly with your existing stack. No migration needed, just add our config file.</p>
</div>
<a className="mt-6 md:mt-0 text-orange-500 hover:text-orange-400 text-sm font-medium flex items-center gap-1 group" href="#">
                    View all 40+ integrations
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-6 rounded-lg border border-neutral-800 bg-neutral-900/10 flex flex-col items-center justify-center gap-3 hover:border-neutral-700 hover:bg-neutral-900/30 transition-all cursor-default">
<iconify-icon className="text-white" icon="solar:brand-github-linear" width="32"></iconify-icon>
<span className="text-sm text-neutral-400">GitHub Actions</span>
</div>
<div className="p-6 rounded-lg border border-neutral-800 bg-neutral-900/10 flex flex-col items-center justify-center gap-3 hover:border-neutral-700 hover:bg-neutral-900/30 transition-all cursor-default">
<iconify-icon className="text-white" icon="solar:cloud-linear" width="32"></iconify-icon>
<span className="text-sm text-neutral-400">AWS CodeBuild</span>
</div>
<div className="p-6 rounded-lg border border-neutral-800 bg-neutral-900/10 flex flex-col items-center justify-center gap-3 hover:border-neutral-700 hover:bg-neutral-900/30 transition-all cursor-default">
<iconify-icon className="text-white" icon="solar:box-linear" width="32"></iconify-icon>
<span className="text-sm text-neutral-400">Docker</span>
</div>
<div className="p-6 rounded-lg border border-neutral-800 bg-neutral-900/10 flex flex-col items-center justify-center gap-3 hover:border-neutral-700 hover:bg-neutral-900/30 transition-all cursor-default">
<iconify-icon className="text-white" icon="solar:command-linear" width="32"></iconify-icon>
<span className="text-sm text-neutral-400">Kubernetes</span>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Ready to accelerate?
            </h2>
<p className="text-neutral-400 mb-10 text-lg">
                Join 10,000+ developers shipping code faster with Tile. <br/> Start for free, scale as you grow.
            </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all" placeholder="dev@company.com" type="email"/>
<button className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition-colors" type="submit">
                    Get Access
                </button>
</form>
<p className="text-neutral-600 text-xs mt-6">No credit card required for open source projects.</p>
</section>
</main>

<footer className="border-t border-neutral-900 bg-black py-12 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div>
<a className="text-xl font-bold tracking-tighter text-white mb-4 block" href="#">TILE</a>
<p className="text-neutral-500 text-sm max-w-xs">The intelligent build optimization layer for modern engineering teams.</p>
</div>
<div className="flex gap-12 md:gap-24">
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-white uppercase tracking-wider mb-1">Product</span>
<a className="text-sm text-neutral-500 hover:text-orange-400 transition-colors" href="#">Features</a>
<a className="text-sm text-neutral-500 hover:text-orange-400 transition-colors" href="#">Integrations</a>
<a className="text-sm text-neutral-500 hover:text-orange-400 transition-colors" href="#">Pricing</a>
<a className="text-sm text-neutral-500 hover:text-orange-400 transition-colors" href="#">Changelog</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-white uppercase tracking-wider mb-1">Company</span>
<a className="text-sm text-neutral-500 hover:text-orange-400 transition-colors" href="#">About</a>
<a className="text-sm text-neutral-500 hover:text-orange-400 transition-colors" href="#">Blog</a>
<a className="text-sm text-neutral-500 hover:text-orange-400 transition-colors" href="#">Careers</a>
<a className="text-sm text-neutral-500 hover:text-orange-400 transition-colors" href="#">Contact</a>
</div>
</div>
</div>
<div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">© 2024 Tile Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-discord-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
