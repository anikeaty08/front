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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
                    NEXUS
                </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#">Products</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Developers</a>
<a className="hover:text-white transition-colors" href="#">Enterprise</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:text-white transition-colors" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" href="#">Start Building</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] hero-glow pointer-events-none opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<a className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 hover:border-white/20 transition-colors mb-8 group" href="#">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Nexus Global Edge is now live
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 max-w-4xl mx-auto leading-[1.1]">
                Infrastructure for <br/>
<span className="text-gradient">internet scale.</span>
</h1>
<p className="text-lg md:text-xl font-light text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Deploy globally in seconds. Our distributed edge network brings computation close to your users, ensuring low latency and infinite scalability.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors w-full sm:w-auto">
                    Start Deploying
                </button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
<iconify-icon icon="lucide:terminal" width="18"></iconify-icon>
                    Documentation
                </button>
</div>

<div className="max-w-4xl mx-auto glass-panel rounded-xl overflow-hidden shadow-2xl shadow-indigo-500/10">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0a0a0a]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="ml-4 text-xs font-mono text-slate-500">nexus-cli — deploy</div>
</div>
<div className="p-6 bg-[#030303] text-left font-mono text-sm md:text-base overflow-x-auto">
<div className="flex gap-4">
<span className="text-slate-600 select-none">1</span>
<span className="text-pink-400">~</span>
<span>nexus init <span className="text-slate-500">--template global-edge</span></span>
</div>
<div className="flex gap-4">
<span className="text-slate-600 select-none">2</span>
<span className="text-emerald-400">✔</span>
<span className="text-slate-300">Project initialized successfully</span>
</div>
<div className="flex gap-4">
<span className="text-slate-600 select-none">3</span>
<span className="text-pink-400">~</span>
<span>nexus deploy</span>
</div>
<div className="flex gap-4">
<span className="text-slate-600 select-none">4</span>
<span className="text-emerald-400">✔</span>
<span className="text-slate-300">Deploying to <span className="text-indigo-400">35 regions</span>...</span>
</div>
<div className="flex gap-4 mt-2">
<span className="text-slate-600 select-none">5</span>
<div className="flex flex-col gap-1 w-full max-w-md">
<div className="flex justify-between text-xs text-slate-500 uppercase tracking-widest">
<span>Build</span>
<span>45ms</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-full bg-indigo-500 rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-slate-500 uppercase tracking-widest mt-2">
<span>Propagation</span>
<span>120ms</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-[92%] bg-emerald-500 rounded-full"></div>
</div>
</div>
</div>
<div className="flex gap-4 mt-4">
<span className="text-slate-600 select-none">6</span>
<span className="text-blue-400">➜</span>
<span className="text-white">Production: <a className="underline decoration-indigo-500/50 hover:decoration-indigo-500" href="#">https://app.nexus.global</a></span>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-20 border-t border-white/5 pt-10">
<p className="text-center text-xs font-medium text-slate-600 mb-8 uppercase tracking-widest">Trusted by engineering teams at</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale">

<span className="text-xl font-bold tracking-tighter text-white">ACME</span>
<span className="text-xl font-bold tracking-tighter text-white">LAYER</span>
<span className="text-xl font-bold tracking-tighter text-white">CIRCULAR</span>
<span className="text-xl font-bold tracking-tighter text-white">BOLT</span>
<span className="text-xl font-bold tracking-tighter text-white">FEATHER</span>
</div>
</div>
</section>

<section className="py-24 bg-black relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Complete toolkit for the web.</h2>
<p className="text-slate-400 text-lg max-w-2xl">Everything you need to build fast, reliable, and secure applications.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
<iconify-icon className="text-indigo-500" icon="lucide:activity" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="lucide:bar-chart-2" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Real-time Analytics</h3>
<p className="text-sm text-slate-400 max-w-sm">
                            Gain insights into your traffic with privacy-friendly analytics. Track visitors, page views, and performance metrics without compromising user data.
                        </p>

<div className="mt-8 flex items-end gap-1 h-24 w-full max-w-md opacity-70">
<div className="flex-1 bg-indigo-500/20 h-[40%] rounded-t-sm hover:bg-indigo-500/40 transition-colors"></div>
<div className="flex-1 bg-indigo-500/20 h-[60%] rounded-t-sm hover:bg-indigo-500/40 transition-colors"></div>
<div className="flex-1 bg-indigo-500/20 h-[30%] rounded-t-sm hover:bg-indigo-500/40 transition-colors"></div>
<div className="flex-1 bg-indigo-500/20 h-[80%] rounded-t-sm hover:bg-indigo-500/40 transition-colors"></div>
<div className="flex-1 bg-indigo-500/20 h-[55%] rounded-t-sm hover:bg-indigo-500/40 transition-colors"></div>
<div className="flex-1 bg-indigo-500/20 h-[90%] rounded-t-sm hover:bg-indigo-500/40 transition-colors"></div>
<div className="flex-1 bg-indigo-500/20 h-[70%] rounded-t-sm hover:bg-indigo-500/40 transition-colors"></div>
<div className="flex-1 bg-indigo-500/20 h-[45%] rounded-t-sm hover:bg-indigo-500/40 transition-colors"></div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">DDoS Protection</h3>
<p className="text-sm text-slate-400 mb-6">
                        Enterprise-grade security baked into every deployment. We mitigate attacks automatically.
                    </p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-xs text-slate-300">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle" width="16"></iconify-icon>
                            L3/L4 Mitigation
                         </div>
<div className="flex items-center gap-3 text-xs text-slate-300">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle" width="16"></iconify-icon>
                            Custom Rulesets
                         </div>
<div className="flex items-center gap-3 text-xs text-slate-300">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle" width="16"></iconify-icon>
                            Bot Management
                         </div>
</div>
</div>

<div className="md:col-span-3 glass-panel rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 group">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="lucide:globe-2" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Edge Functions</h3>
<p className="text-sm text-slate-400 max-w-lg mb-6">
                            Run server-side code closer to your users. With zero cold starts and instant deployment, your API endpoints are faster than ever.
                        </p>
<a className="text-sm text-white font-medium hover:text-indigo-400 transition-colors inline-flex items-center gap-1" href="#">
                            Explore Edge Functions 
                            <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>

<div className="flex-1 w-full flex justify-center items-center relative h-48">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<div className="relative w-full h-full border border-white/10 rounded-xl bg-[#0a0a0a] p-4 font-mono text-xs text-slate-500">
<div className="flex justify-between items-center mb-2 pb-2 border-b border-white/5">
<span>region</span>
<span>latency</span>
</div>
<div className="flex justify-between items-center mb-1">
<span className="text-indigo-300">iad1 (US East)</span>
<span className="text-emerald-400">4ms</span>
</div>
<div className="flex justify-between items-center mb-1">
<span className="text-indigo-300">lhr1 (London)</span>
<span className="text-emerald-400">12ms</span>
</div>
<div className="flex justify-between items-center mb-1">
<span className="text-indigo-300">hnd1 (Tokyo)</span>
<span className="text-emerald-400">28ms</span>
</div>
<div className="flex justify-between items-center mb-1">
<span className="text-indigo-300">syd1 (Sydney)</span>
<span className="text-emerald-400">32ms</span>
</div>
<div className="flex justify-between items-center">
<span className="text-indigo-300">fra1 (Frankfurt)</span>
<span className="text-emerald-400">8ms</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#080808]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-2">Global by default.</h2>
<p className="text-slate-400 max-w-md">Our network spans the entire globe, ensuring your content is always just a few milliseconds away.</p>
</div>
<a className="text-white text-sm font-medium border-b border-white/30 hover:border-white transition-colors pb-1" href="#">View Network Map</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">99.99<span className="text-slate-600">%</span></div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Uptime Guarantee</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">150<span className="text-slate-600">+</span></div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Edge Locations</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">50<span className="text-slate-600">ms</span></div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Global Latency</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">24<span className="text-slate-600">/7</span></div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Expert Support</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white">Scale without limits</h2>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs font-bold">JD</div>
<div>
<div className="text-white font-medium text-sm">John Doe</div>
<div className="text-slate-500 text-xs">CTO at Streamline</div>
</div>
</div>
<p className="text-slate-300 leading-relaxed font-light">
                    "Nexus completely changed how we deploy. We went from managing Kubernetes clusters to simply pushing code. The global latency improvements were instant."
                </p>
</div>
<div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs font-bold">AS</div>
<div>
<div className="text-white font-medium text-sm">Alice Smith</div>
<div className="text-slate-500 text-xs">VP Engineering at Orbit</div>
</div>
</div>
<p className="text-slate-300 leading-relaxed font-light">
                    "The edge functions are incredibly fast. We moved our entire authentication logic to the edge and saw a 40% reduction in login times globally."
                </p>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to ship?</h2>
<p className="text-lg text-slate-400 mb-10 font-light">
                Join thousands of developers building the future of the web. <br className="hidden md:block"/>
                Start for free, scale as you grow.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors w-full sm:w-auto">
                    Start Building Free
                </button>
<button className="h-12 px-8 rounded-full bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 transition-colors w-full sm:w-auto">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 pt-16 pb-8 bg-[#030303]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
                    NEXUS
                </a>
<p className="text-sm text-slate-500 mb-4 max-w-xs">
                    The global platform for modern developers. Design, build, and ship everywhere.
                </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:github" width="18"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Infrastructure</a></li>
<li><a className="hover:text-white transition-colors" href="#">Edge Functions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Storage</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Guides</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2024 Nexus Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs text-slate-500">All systems operational</span>
</div>
</div>
</footer>

    </>
  );
}
