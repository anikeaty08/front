import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
body: ['Inter', 'sans-serif'],
},
colors: {
obsidian: '#050505',
charcoal: '#0F1115',
glass: 'rgba(255, 255, 255, 0.03)',
accent: '#3B82F6',
},
letterSpacing: {
tightest: '-.075em',
},
backgroundImage: {
'glow-radial': 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
}
}
}
}



        const slider = document.getElementById('savings-slider');
        const display = document.getElementById('prop-value-display');
        const stdDed = document.getElementById('standard-deduction');
        const advDed = document.getElementById('advanced-deduction');

        slider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            // Format currency
            display.innerText = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(val);
            
            // Simple logic for demo purposes (approx 27.5% vs 3.6%)
            const std = val * 0.03636; // 1/27.5
            const adv = val * 0.30; // Conservative cost seg estimate
            
            stdDed.innerText = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(std);
            advDed.innerText = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(adv);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-bg"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-obsidian/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-white rounded-sm"></div>
<span className="font-sans text-sm font-medium tracking-tight text-white">Cost Seg EZ</span>
<span className="text-xs text-neutral-500 font-light mx-2">×</span>
<span className="font-sans text-xs text-neutral-400 tracking-tight">BiggerPockets</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#compliance">Compliance</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded hover:bg-neutral-200 transition-colors" href="https://costsegez.com/blog/estimate">
                Check Eligibility
            </a>
</div>
</nav>

<section className="relative pt-40 pb-20 px-6 min-h-[90vh] flex flex-col justify-center items-center overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-glow-radial opacity-40 blur-3xl pointer-events-none"></div>
<div className="relative z-10 text-center max-w-4xl mx-auto">
<div className="reveal inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1 rounded-full mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
<span className="text-[10px] font-medium tracking-wide uppercase text-neutral-300">IRS Compliant Algorithm</span>
</div>
<h1 className="reveal delay-100 font-sans text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[0.95] mb-8">
                Preserve <span className="text-neutral-500 italic font-light">your</span> <br/> 
                real estate wealth.
            </h1>
<p className="reveal delay-200 text-lg md:text-xl text-neutral-400 font-light max-w-xl mx-auto leading-relaxed mb-12">
                Institutional-grade cost segregation engineering, automated for the modern investor. Keep your cash flow. Reduce your tax bill.
            </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group" href="https://costsegez.com/blog/estimate">
                    Start Free Analysis
                    <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white text-sm font-medium rounded hover:bg-white/5 transition-colors" href="#demo">
                    View Methodology
                </a>
</div>
</div>

<div className="mt-24 w-full max-w-5xl mx-auto relative reveal delay-300">
<div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-20 h-full w-full"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 opacity-80">

<div className="glass-card p-6 rounded-xl h-64 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="iconify text-neutral-500" data-icon="lucide:building-2" data-width="24"></span>
<span className="text-[10px] uppercase tracking-widest text-neutral-600">Asset</span>
</div>
<div>
<div className="text-2xl font-sans tracking-tight text-white mb-1">STR Portfolio</div>
<div className="text-sm text-neutral-500">Acquired 2023</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl h-64 flex flex-col justify-between border-white/20 bg-white/5 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start relative z-10">
<span className="iconify text-blue-400" data-icon="lucide:trending-up" data-width="24"></span>
<span className="text-[10px] uppercase tracking-widest text-blue-400">Savings</span>
</div>
<div className="relative z-10">
<div className="text-4xl font-sans font-medium tracking-tighter text-white mb-1">+$62,400</div>
<div className="text-sm text-neutral-400">Projected Year 1 Deduction</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-16 opacity-30">
<svg className="w-full h-full text-blue-500 fill-current" viewbox="0 0 100 20">
<path d="M0 20 L0 15 Q 20 18, 40 10 T 100 5 V 20 Z"></path>
</svg>
</div>
</div>

<div className="glass-card p-6 rounded-xl h-64 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="iconify text-neutral-500" data-icon="lucide:file-check" data-width="24"></span>
<span className="text-[10px] uppercase tracking-widest text-neutral-600">Status</span>
</div>
<div>
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
<div className="text-lg font-sans tracking-tight text-white">Audit Defensible</div>
</div>
<div className="text-sm text-neutral-500">Engineering report generated</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-white/5 py-12 bg-charcoal/30">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600 mb-8">Trusted by investors from</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-30 grayscale hover:opacity-60 transition-opacity duration-500">

<div className="flex items-center gap-2 text-lg font-semibold tracking-tight"><span className="iconify" data-icon="lucide:home"></span> Airbnb</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight"><span className="iconify" data-icon="lucide:briefcase"></span> BiggerPockets</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight"><span className="iconify" data-icon="lucide:key"></span> Turnkey</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight"><span className="iconify" data-icon="lucide:building"></span> VRBO</div>
</div>
</div>
</div>

<section className="py-32 px-6" id="process">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tighter text-white mb-6">Engineered for <br/>velocity.</h2>
<div className="h-px w-24 bg-white/20"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-4 md:row-span-2 glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity duration-700 transform group-hover:scale-110">
<span className="iconify w-64 h-64" data-icon="lucide:cpu"></span>
</div>
<div className="relative z-10 h-full flex flex-col justify-end">
<div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center mb-6 text-white">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-2xl font-sans font-medium text-white mb-2">Algorithmic Precision</h3>
<p className="text-neutral-400 font-light leading-relaxed max-w-md">
                            We don't guess. Our proprietary software analyzes every structural component of your property against IRS depreciation tables, identifying 5, 7, and 15-year property assets that traditional accountants miss.
                        </p>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 glass-card rounded-2xl p-8 flex flex-col justify-between group hover:bg-white/[0.02]">
<div className="w-full flex justify-between text-neutral-500">
<span className="text-[10px] uppercase tracking-widest">Speed</span>
<span className="iconify group-hover:text-white transition-colors" data-icon="lucide:timer"></span>
</div>
<div>
<div className="text-3xl font-sans font-medium text-white tracking-tighter mb-1">15 Mins</div>
<p className="text-xs text-neutral-500">Average turnaround time for estimate</p>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 glass-card rounded-2xl p-8 flex flex-col justify-between group hover:bg-white/[0.02]">
<div className="w-full flex justify-between text-neutral-500">
<span className="text-[10px] uppercase tracking-widest">Safety</span>
<span className="iconify group-hover:text-white transition-colors" data-icon="lucide:shield-check"></span>
</div>
<div>
<div className="text-3xl font-sans font-medium text-white tracking-tighter mb-1">100%</div>
<p className="text-xs text-neutral-500">IRS Audit Acceptance Rate</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gradient-to-b from-transparent to-charcoal/50">
<div className="max-w-3xl mx-auto">
<div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl shadow-black/50">
<div className="text-center mb-12">
<h3 className="text-2xl font-sans font-medium text-white mb-2">Estimate Your Benefit</h3>
<p className="text-neutral-500 text-sm font-light">Drag to simulate potential first-year deduction</p>
</div>

<div className="mb-12">
<div className="flex justify-between text-xs text-neutral-400 mb-4 uppercase tracking-widest font-medium">
<span>Property Value</span>
<span className="text-white" id="prop-value-display">$500,000</span>
</div>
<input className="mb-2" id="savings-slider" max="2000000" min="200000" step="50000" type="range" value="500000"/>
<div className="flex justify-between text-[10px] text-neutral-600 mt-2">
<span>$200k</span>
<span>$2m+</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
<div className="text-center border-r border-white/5 pr-4">
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2">Standard Deduction</div>
<div className="text-xl md:text-2xl font-sans font-light text-neutral-400 line-through decoration-neutral-600 decoration-1" id="standard-deduction">$13,600</div>
</div>
<div className="text-center pl-4">
<div className="text-[10px] text-blue-400 uppercase tracking-widest mb-2 font-semibold">Cost Seg Deduction</div>
<div className="text-3xl md:text-4xl font-sans font-medium text-white tracking-tighter" id="advanced-deduction">$150,000</div>
</div>
</div>
<div className="mt-8 text-center">
<a className="inline-flex items-center text-xs font-medium text-neutral-400 hover:text-white transition-colors border-b border-neutral-700 hover:border-white pb-0.5" href="https://costsegez.com/blog/estimate">
                        Get your official report
                    </a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5">
<div className="max-w-5xl mx-auto">
<div className="grid md:grid-cols-3 gap-12">

<div className="group">
<div className="text-[10px] font-mono text-neutral-600 mb-6">01 / INPUT</div>
<div className="w-full h-px bg-white/10 mb-6 group-hover:bg-white/30 transition-colors origin-left duration-500"></div>
<h4 className="text-xl text-white font-medium mb-3">Address &amp; Price</h4>
<p className="text-sm text-neutral-500 leading-relaxed font-light">
                        Simply provide the property address and purchase price. No complex documentation or site visits required initially.
                    </p>
</div>

<div className="group">
<div className="text-[10px] font-mono text-neutral-600 mb-6">02 / ANALYZE</div>
<div className="w-full h-px bg-white/10 mb-6 group-hover:bg-white/30 transition-colors origin-left duration-500"></div>
<h4 className="text-xl text-white font-medium mb-3">Engineer Review</h4>
<p className="text-sm text-neutral-500 leading-relaxed font-light">
                        Our algorithm identifies qualified assets. A licensed engineer reviews the data to ensure 100% compliance.
                    </p>
</div>

<div className="group">
<div className="text-[10px] font-mono text-neutral-600 mb-6">03 / FILE</div>
<div className="w-full h-px bg-white/10 mb-6 group-hover:bg-white/30 transition-colors origin-left duration-500"></div>
<h4 className="text-xl text-white font-medium mb-3">Tax Packet</h4>
<p className="text-sm text-neutral-500 leading-relaxed font-light">
                        Receive a comprehensive PDF report. Forward it to your CPA. File Form 3115. Realize immediate cash flow.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tighter text-white mb-8">
                Ready to accelerate?
            </h2>
<p className="text-neutral-400 font-light mb-12">
                Join 3,000+ investors who stopped overpaying the IRS.
            </p>
<a className="inline-flex items-center justify-center px-10 py-5 bg-white text-obsidian text-sm font-semibold rounded hover:bg-neutral-200 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]" href="https://costsegez.com/blog/estimate">
                Get Free Estimate
            </a>
<p className="mt-8 text-[10px] text-neutral-600 uppercase tracking-widest">
                No credit card required • IRS Compliant
            </p>
</div>
</section>

<footer className="border-t border-white/5 bg-obsidian py-16 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<div className="font-sans font-medium text-white mb-4">Cost Seg EZ</div>
<div className="text-xs text-neutral-500 max-w-xs leading-relaxed font-light">
                    Democratizing advanced tax strategies for real estate investors. Partnered with BiggerPockets for exclusive access.
                </div>
</div>
<div className="flex gap-16 text-xs text-neutral-400">
<div className="flex flex-col gap-4">
<span className="text-white font-medium">Platform</span>
<a className="hover:text-white transition-colors" href="#">Methodology</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">FAQ</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-white font-medium">Legal</span>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Disclaimer</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] text-neutral-600 uppercase tracking-wider">
<span>© 2023 Cost Seg EZ</span>
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-emerald-900 rounded-full animate-pulse"></span>
                Systems Active
            </span>
</div>
</footer>



    </>
  );
}
