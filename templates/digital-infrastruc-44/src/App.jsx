import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mouse Move Effect for Cards
        document.addEventListener('mousemove', (e) => {
            document.documentElement.style.setProperty('--cursor-x', e.clientX + 'px');
            document.documentElement.style.setProperty('--cursor-y', e.clientY + 'px');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid opacity-60"></div>
<div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020202]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-white flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-white">Aware.</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#infrastructure">Infrastructure</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#automation">Automation</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#results">Results</a>
</div>

<a className="group relative px-4 py-2 bg-white/5 border border-white/10 rounded text-xs font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2" href="#consultation">
<span>Book Audit</span>
<iconify-icon className="text-zinc-400 group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 max-w-7xl mx-auto px-6">
<div className="max-w-4xl">

<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-blue-500/20 bg-blue-500/5 mb-8">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
</span>
<span className="text-[10px] font-mono font-medium text-blue-400 uppercase tracking-wide">System Capacity Available</span>
</div>

<h1 className="text-5xl sm:text-7xl font-medium tracking-tighter text-white leading-[0.95] mb-8">
                Digital infrastructure for the <br className="hidden md:block"/>
<span className="text-zinc-500">autonomous enterprise.</span>
</h1>

<p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl leading-relaxed mb-10">
                We replace fragile legacy systems with robust, API-first architecture. 
                Aware helps mid-market and enterprise organizations automate workflows 
                and scale their digital presence without linear headcount growth.
            </p>

<div className="flex flex-col sm:flex-row gap-4">
<a className="h-12 px-8 rounded bg-white text-black text-sm font-semibold tracking-tight hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#consultation">
                    Start Infrastructure Audit
                </a>
<a className="h-12 px-8 rounded border border-white/10 bg-white/5 text-zinc-300 text-sm font-medium tracking-tight hover:bg-white/10 transition-colors flex items-center justify-center gap-2" href="#results">
                    View Performance Metrics
                </a>
</div>

<div className="mt-20 pt-8 border-t border-white/5">
<p className="text-[10px] font-mono text-zinc-600 uppercase mb-4 tracking-widest">Integrating with</p>
<div className="flex flex-wrap gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon icon="lucide:server" width="20"></iconify-icon>
<iconify-icon icon="lucide:database" width="20"></iconify-icon>
<iconify-icon icon="lucide:cpu" width="20"></iconify-icon>
<iconify-icon icon="lucide:cloud" width="20"></iconify-icon>
<iconify-icon icon="lucide:shield" width="20"></iconify-icon>
<iconify-icon icon="lucide:code-2" width="20"></iconify-icon>
</div>
</div>
</div>
</main>

<section className="relative z-10 py-24 border-t border-white/5 bg-[#030303]" id="infrastructure">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Core Capabilities</h2>
<p className="text-zinc-400 text-sm max-w-md">Engineering-grade solutions for complex business problems.</p>
</div>
<div className="hidden md:block w-px h-12 bg-white/10"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="card-glow md:col-span-2 rounded-xl p-8 flex flex-col justify-between group">
<div className="w-10 h-10 rounded border border-white/10 bg-zinc-900/50 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-all">
<iconify-icon icon="lucide:network" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Digital Infrastructure</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-lg">
                            We migrate monolithic legacy sites to headless, edge-cached architecture. The result is 99.99% uptime, sub-100ms load times, and bank-grade security.
                        </p>
</div>
<div className="flex gap-2">
<span className="text-[10px] font-mono border border-white/5 bg-white/5 px-2 py-1 rounded text-zinc-500">Next.js</span>
<span className="text-[10px] font-mono border border-white/5 bg-white/5 px-2 py-1 rounded text-zinc-500">Vercel Enterprise</span>
</div>
</div>

<div className="card-glow rounded-xl p-8 flex flex-col justify-between group">
<div className="w-10 h-10 rounded border border-white/10 bg-zinc-900/50 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all">
<iconify-icon icon="lucide:workflow" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Workflow Automation</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Connecting your CRM, ERP, and Marketing tools into a unified, self-driving ecosystem.
                        </p>
</div>
</div>

<div className="card-glow rounded-xl p-8 flex flex-col justify-between group">
<div className="w-10 h-10 rounded border border-white/10 bg-zinc-900/50 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-all">
<iconify-icon icon="lucide:monitor-smartphone" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Web Platforms</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            High-conversion interfaces designed for decision-makers, not just users.
                        </p>
</div>
</div>

<div className="card-glow md:col-span-2 rounded-xl p-8 relative overflow-hidden group">
<div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-blue-900/5 to-transparent pointer-events-none"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded border border-white/10 bg-zinc-900/50 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-all">
<iconify-icon icon="lucide:bar-chart-2" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Revenue Operations (RevOps)</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                                Full visibility into your digital ROI. We implement server-side tracking and unified data warehouses so you trust your metrics.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-4">
<div className="sticky top-32">
<h2 className="text-[10px] font-mono uppercase tracking-widest text-blue-500 mb-4">The Methodology</h2>
<h3 className="text-3xl font-medium text-white tracking-tight mb-6">Built to scale,<br/>not just launch.</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8">
                            We don't do "handoffs." We integrate deeply with your team to build systems that evolve with your business needs.
                        </p>
<a className="text-xs font-mono text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors" href="#consultation">READ DOCUMENTATION -&gt;</a>
</div>
</div>
<div className="lg:col-span-8 space-y-12 relative">

<div className="absolute left-[19px] top-4 bottom-4 w-px bg-white/10 md:left-[23px]"></div>

<div className="relative pl-16 group">
<div className="absolute left-0 top-1 w-10 h-10 md:w-12 md:h-12 rounded bg-[#0a0a0a] border border-white/10 flex items-center justify-center z-10 text-zinc-500 group-hover:border-white/30 group-hover:text-white transition-all">
<span className="font-mono text-xs">01</span>
</div>
<h4 className="text-lg font-medium text-white mb-2">Technical Audit &amp; Architecture</h4>
<p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
                            We map your current tech stack, identify redundancy, and blueprint a headless architecture that separates your data from your frontend.
                        </p>
</div>

<div className="relative pl-16 group">
<div className="absolute left-0 top-1 w-10 h-10 md:w-12 md:h-12 rounded bg-[#0a0a0a] border border-white/10 flex items-center justify-center z-10 text-zinc-500 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all">
<span className="font-mono text-xs">02</span>
</div>
<h4 className="text-lg font-medium text-white mb-2">Development &amp; Integration</h4>
<p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
                            Component-driven development using React/Next.js. We build a design system, not just pages, ensuring consistency at scale.
                        </p>
</div>

<div className="relative pl-16 group">
<div className="absolute left-0 top-1 w-10 h-10 md:w-12 md:h-12 rounded bg-[#0a0a0a] border border-white/10 flex items-center justify-center z-10 text-zinc-500 group-hover:border-white/30 group-hover:text-white transition-all">
<span className="font-mono text-xs">03</span>
</div>
<h4 className="text-lg font-medium text-white mb-2">Automated Deployment Pipelines</h4>
<p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
                            Setting up CI/CD workflows. Your team pushes content; our systems handle testing, optimization, and global distribution instantly.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#030303]" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-2xl font-medium text-white tracking-tight">Performance Metrics</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
<div className="bg-[#050505] p-8 hover:bg-[#0a0a0a] transition-colors">
<div className="text-[10px] font-mono uppercase text-zinc-500 mb-2">Lead Velocity</div>
<div className="text-3xl font-medium text-white tracking-tighter">2.5<span className="text-zinc-600">x</span></div>
</div>
<div className="bg-[#050505] p-8 hover:bg-[#0a0a0a] transition-colors">
<div className="text-[10px] font-mono uppercase text-zinc-500 mb-2">OpEx Reduction</div>
<div className="text-3xl font-medium text-white tracking-tighter">30<span className="text-zinc-600">%</span></div>
</div>
<div className="bg-[#050505] p-8 hover:bg-[#0a0a0a] transition-colors">
<div className="text-[10px] font-mono uppercase text-zinc-500 mb-2">Page Load</div>
<div className="text-3xl font-medium text-white tracking-tighter">&lt;100<span className="text-zinc-600">ms</span></div>
</div>
<div className="bg-[#050505] p-8 hover:bg-[#0a0a0a] transition-colors">
<div className="text-[10px] font-mono uppercase text-zinc-500 mb-2">Uptime</div>
<div className="text-3xl font-medium text-white tracking-tighter">99.9<span className="text-zinc-600">%</span></div>
</div>
</div>

<div className="mt-12 p-1 rounded-xl bg-gradient-to-r from-white/5 to-transparent">
<div className="bg-black rounded-lg border border-white/5 p-8 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="flex gap-2 mb-4">
<span className="text-[10px] font-mono border border-blue-900 bg-blue-900/10 text-blue-400 px-2 py-1 rounded">FinTech</span>
</div>
<h4 className="text-xl font-medium text-white mb-2">Scaling Venture Capital Operations</h4>
<p className="text-sm text-zinc-400 max-w-xl">
                            We automated the deal-flow pipeline for a Tier-1 VC firm, reducing manual data entry by 15 hours per week per associate.
                        </p>
</div>
<div className="flex-shrink-0">
<a className="text-xs text-white border border-white/10 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors" href="#">Read Case Study</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden" id="consultation">
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-6">
                        Engineered for growth.
                    </h2>
<p className="text-sm text-zinc-400 leading-relaxed mb-8">
                        We engage with a limited number of enterprise partners annually to ensure deep focus and high-impact delivery.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-0.5" icon="lucide:check-circle" width="16"></iconify-icon>
<span className="text-xs text-zinc-300">Detailed infrastructure audit</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-0.5" icon="lucide:check-circle" width="16"></iconify-icon>
<span className="text-xs text-zinc-300">Custom automation roadmap</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-0.5" icon="lucide:check-circle" width="16"></iconify-icon>
<span className="text-xs text-zinc-300">Fixed-cost project scope</span>
</li>
</ul>
<div className="p-4 bg-white/5 border border-white/10 rounded text-xs text-zinc-400 font-mono">
<span className="text-blue-400">root@aware:~$</span> ping efficiency<br/>
                        64 bytes from business: icmp_seq=1 ttl=128 time=14.2 ms<br/>
                        --- system optimization verified ---
                    </div>
</div>

<div className="bg-[#080808] border border-white/10 rounded-xl p-8 shadow-2xl">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">First Name</label>
<input className="w-full bg-[#030303] border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all" type="text"/>
</div>
<div>
<label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">Last Name</label>
<input className="w-full bg-[#030303] border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all" type="text"/>
</div>
</div>
<div>
<label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">Work Email</label>
<input className="w-full bg-[#030303] border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all" type="email"/>
</div>
<div>
<label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">Infrastructure Need</label>
<select className="w-full bg-[#030303] border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all">
<option>Platform Migration</option>
<option>Workflow Automation</option>
<option>New Digital Product</option>
<option>Technical Audit</option>
</select>
</div>
<button className="w-full bg-white text-black py-3 rounded text-xs font-bold tracking-wide hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 mt-2" type="button">
                            REQUEST CONSULTATION
                        </button>
<p className="text-[10px] text-zinc-600 text-center pt-2">Zero-obligation technical assessment.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-black py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded bg-white flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<span className="text-sm font-semibold text-white">Aware.</span>
</div>
<div className="flex gap-8">
<a className="text-[10px] font-mono uppercase text-zinc-500 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-[10px] font-mono uppercase text-zinc-500 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-[10px] font-mono uppercase text-zinc-500 hover:text-white transition-colors" href="#">GitHub</a>
</div>
<div className="text-[10px] text-zinc-600 font-mono">
                © 2024 Aware Infrastructure. All systems nominal.
            </div>
</div>
</footer>


    </>
  );
}
