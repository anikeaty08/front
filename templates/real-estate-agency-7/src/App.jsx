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
},
letterSpacing: {
tighter: '-.04em',
tight: '-.02em',
},
colors: {
brand: {
purple: '#7a5aed',
}
},
boxShadow: {
'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
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
      

<nav className="absolute top-0 w-full z-40">
<div className="max-w-7xl mx-auto px-4 lg:px-8 h-24 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2.5" href="#">
<div className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="lucide:layout-grid" width="18"></iconify-icon>
</div>
                ESTATE.WEB
            </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-white/80">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-slate-950 transition-all duration-200 bg-white rounded-full hover:bg-slate-200" href="#contact">
                Book a Call
            </a>
<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" width="28"></iconify-icon>
</button>
</div>
</nav>

<section className="relative h-[85vh] flex flex-col justify-center items-center overflow-hidden pb-20">

<div className="absolute inset-0 z-0">
<img alt="Modern Luxury Real Estate" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-[#7a5aed]/90 via-[#7a5aed]/40 to-transparent mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-4 text-center mt-10">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-white mb-8 leading-[0.9] text-balance drop-shadow-sm">
                The new standard <br/> for <span className="text-white/70">real estate.</span>
</h1>
<p className="text-lg md:text-2xl text-white/90 font-light max-w-3xl mx-auto mb-12 leading-relaxed text-balance">
                We craft high-performance digital ecosystems for the world's most ambitious agents and brokers.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="group w-full sm:w-auto px-10 py-4 bg-white text-slate-950 text-base font-medium rounded-full hover:bg-slate-100 transition-all flex items-center justify-center gap-2" href="#contact">
                    Start Project
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-base font-medium rounded-full hover:bg-white/20 transition-all" href="#work">
                    View Work
                </a>
</div>
</div>
</section>

<div className="bg-slate-50 relative z-20">

<section className="relative -mt-24 md:-mt-32 max-w-[1400px] mx-auto px-4 lg:px-8 mb-24" id="services">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-lg border border-white/60 shadow-glass hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-[#7a5aed] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:layout-template" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Custom IDX</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">Direct MLS syncing with custom map overlays and rapid search filters.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-lg border border-white/60 shadow-glass hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-[#7a5aed] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Local SEO</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">Dominate neighborhood searches with hyper-local content structures.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-lg border border-white/60 shadow-glass hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-[#7a5aed] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:smartphone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Mobile First</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">Flawless experiences for the 70% of buyers browsing on phones.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-lg border border-white/60 shadow-glass hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-[#7a5aed] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Lead Funnels</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">High-converting valuation pages and exclusive listing access portals.</p>
</div>
</div>
</section>

<section className="pb-32 px-4 lg:px-8 max-w-7xl mx-auto pt-10" id="pricing">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tighter mb-4">Transparent Pricing</h2>
<p className="text-base text-slate-500 font-normal max-w-xl">Choose the package that fits your agency's growth stage perfectly.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col hover:border-slate-300 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Essential</h3>
<p className="text-xs text-slate-500 mt-1">For solo agents starting out.</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-medium text-slate-900 tracking-tight">$199</span>
<span className="text-slate-500 text-sm">/mo</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-600 flex-1">
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-900 text-xs" icon="lucide:check"></iconify-icon>
                            Modern Template Design
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-900 text-xs" icon="lucide:check"></iconify-icon>
                            Standard IDX Feed
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-900 text-xs" icon="lucide:check"></iconify-icon>
                            Mobile Optimization
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-900 text-xs" icon="lucide:check"></iconify-icon>
                            Basic Lead Capture
                        </li>
</ul>
<a className="w-full block text-center py-2.5 rounded-lg border border-slate-200 text-slate-900 font-medium text-xs hover:bg-slate-50 transition-colors" href="#contact">
                        Get Started
                    </a>
</div>

<div className="bg-slate-900 p-8 rounded-xl border border-slate-800 shadow-xl flex flex-col relative md:-mt-6 md:mb-6 z-10">
<div className="mb-4">
<h3 className="text-lg font-medium text-white tracking-tight">Growth</h3>
<p className="text-xs text-slate-400 mt-1">For scaling teams &amp; top producers.</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white tracking-tight">$499</span>
<span className="text-slate-400 text-sm">/mo</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-300 flex-1">
<li className="flex items-center gap-3">
<iconify-icon className="text-white text-xs" icon="lucide:check"></iconify-icon>
                            Custom Brand Identity
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white text-xs" icon="lucide:check"></iconify-icon>
                            Advanced Map Search
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white text-xs" icon="lucide:check"></iconify-icon>
                            Neighborhood Guides SEO
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white text-xs" icon="lucide:check"></iconify-icon>
                            CRM Integration
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white text-xs" icon="lucide:check"></iconify-icon>
                            Priority Support
                        </li>
</ul>
<a className="w-full block text-center py-2.5 rounded-lg bg-[#7a5aed] text-white border border-transparent font-medium text-xs hover:bg-[#684bd3] transition-colors" href="#contact">
                        Start Growth Plan
                    </a>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col hover:border-slate-300 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Brokerage</h3>
<p className="text-xs text-slate-500 mt-1">Complete solution for firms.</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-medium text-slate-900 tracking-tight">$999</span>
<span className="text-slate-500 text-sm">/mo</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-600 flex-1">
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-900 text-xs" icon="lucide:check"></iconify-icon>
                            Multi-Agent Roster
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-900 text-xs" icon="lucide:check"></iconify-icon>
                            Intranet Portal
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-900 text-xs" icon="lucide:check"></iconify-icon>
                            Automated Valuation Models
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-900 text-xs" icon="lucide:check"></iconify-icon>
                            Market Trend Reports
                        </li>
</ul>
<a className="w-full block text-center py-2.5 rounded-lg border border-slate-200 text-slate-900 font-medium text-xs hover:bg-slate-50 transition-colors" href="#contact">
                        Contact Sales
                    </a>
</div>
</div>
</section>
</div>

<section className="py-32 bg-white relative overflow-hidden" id="contact">
<div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
<h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">Start Your Project</h2>
<h3 className="text-5xl md:text-7xl lg:text-8xl font-medium text-slate-900 tracking-tighter mb-16 text-balance">
                Ready to dominate <br/> your market?
            </h3>
<div className="flex flex-col items-center gap-8 mb-16">
<a className="text-3xl md:text-5xl font-light text-slate-900 hover:text-[#7a5aed] transition-colors tracking-tighter underline decoration-slate-200 decoration-1 underline-offset-[12px] hover:decoration-[#7a5aed]/30" href="mailto:hello@estateweb.io">
                    hello@estateweb.io
                </a>
</div>
</div>
</section>

<footer className="bg-white text-slate-900 py-12 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 font-medium tracking-tight text-sm">
<div className="w-5 h-5 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:layout-grid" width="12"></iconify-icon>
</div>
                ESTATE.WEB
            </div>
<div className="text-xs text-slate-400">
                © 2024 Estate Web Solutions. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
