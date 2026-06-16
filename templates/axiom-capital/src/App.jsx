import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Simple Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('reveal-visible');
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full top-0 z-50 mix-blend-difference text-white py-6 px-6 md:px-12 flex justify-between items-center bg-transparent backdrop-blur-sm">
<div className="flex items-center gap-2">

<div className="w-4 h-4 border border-white/90 rotate-45 hidden sm:block"></div>
<div className="text-sm tracking-[0.25em] font-medium uppercase text-white/90">
                Axiom
            </div>
</div>
<div className="hidden md:flex gap-8 text-xs tracking-widest uppercase text-white/70">
<a className="hover:text-white transition-colors duration-300" href="#philosophy">Philosophy</a>
<a className="hover:text-white transition-colors duration-300" href="#strategies">Strategies</a>
<a className="hover:text-white transition-colors duration-300" href="#process">Process</a>
<a className="hover:text-white transition-colors duration-300 border-b border-white/30 pb-0.5" href="#access">Investor Access</a>
</div>

<div className="md:hidden text-white/80">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-end pb-24 px-6 md:px-12 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Architectural Detail" className="w-full h-full object-cover grayscale brightness-[0.4] contrast-[1.1]" src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-90"></div>
</div>
<div className="relative z-10 w-full max-w-5xl mx-auto md:mx-0 reveal-on-scroll">
<h1 className="text-4xl md:text-6xl lg:text-7xl text-[#F5F4F2] leading-[1.1] tracking-tighter mb-8 max-w-4xl font-normal">
                We Engineer Value <br/><i className="font-light opacity-80">Where Others Can’t.</i>
</h1>
<div className="flex flex-col md:flex-row md:items-end justify-between border-t border-white/20 pt-8 mt-8">
<p className="text-[#F5F4F2]/80 max-w-lg text-sm md:text-base font-light leading-relaxed tracking-wide mb-8 md:mb-0">
                    A private real estate capital platform focused on design-led development and capital recycling in constrained markets.
                </p>
<a className="group flex items-center gap-3 text-[#F5F4F2] text-sm uppercase tracking-widest hover:opacity-70 transition-opacity" href="#access">
                    Request Investor Access
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-24 md:py-32 px-6 md:px-12 bg-[#F5F4F2]">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start reveal-on-scroll">
<div className="md:col-span-4">
<h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">The Premise</h2>
<h3 className="serif text-3xl md:text-4xl text-[#111] leading-tight font-normal tracking-tight">
                    Inevitability over <br/>speculation.
                </h3>
</div>
<div className="md:col-span-8 flex flex-col gap-8 border-l border-neutral-300 pl-8 md:pl-12">
<p className="text-neutral-700 text-lg md:text-xl font-light leading-relaxed">
                    Traditional real estate investing relies on market lift. We consider that gambling. In constrained markets, value must be manufactured, not awaited.
                </p>
<p className="text-neutral-600 text-sm md:text-base font-light leading-relaxed max-w-2xl">
                    We operate as a capital engineering platform. We identify inefficiencies in zoning and density, apply rigorous design logic to unlock income, and secure financing that respects the asset's true potential.
                </p>
<div className="pt-4">
<span className="inline-block text-xs uppercase tracking-widest border-b border-neutral-800 pb-1 text-neutral-900">Our Methodology</span>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 bg-[#111111] text-[#F5F4F2] flex items-center justify-center relative overflow-hidden" id="philosophy">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/concrete-wall.png\')'}}></div>
<div className="relative z-10 max-w-4xl text-center reveal-on-scroll">
<iconify-icon className="opacity-30 mb-8 mx-auto" icon="lucide:quote" width="32"></iconify-icon>
<h2 className="serif text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight font-normal mb-12">
                "We don’t buy assets and hope they go up in value. <br className="hidden md:block"/>
<span className="text-neutral-500">We design assets so value is inevitable."</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 border-t border-white/10 pt-12 text-left md:text-center">
<div>
<h4 className="text-xs uppercase tracking-widest text-white/60 mb-2">Income Engineering</h4>
<p className="text-sm font-light text-white/80">Income drives valuation. We maximize yield per square foot through design.</p>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest text-white/60 mb-2">Pre-Acquisition Discipline</h4>
<p className="text-sm font-light text-white/80">Underwriting is completed before the offer, not during due diligence.</p>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest text-white/60 mb-2">Return on Capital</h4>
<p className="text-sm font-light text-white/80">We prioritize velocity of capital return over theoretical paper IRRs.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-[#F5F4F2]" id="strategies">
<div className="max-w-6xl mx-auto mb-20 reveal-on-scroll">
<h2 className="serif text-4xl text-[#111] tracking-tight">Capital Strategies</h2>
<div className="h-px w-24 bg-neutral-300 mt-6"></div>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 reveal-on-scroll">

<div className="group">
<div className="mb-6 opacity-60">
<iconify-icon icon="lucide:building-2" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="serif text-2xl text-[#111] mb-4">Urban Infill &amp; <br/>Conversion Capital</h3>
<ul className="space-y-3 text-sm text-neutral-600 font-light border-t border-neutral-200 pt-4">
<li className="flex items-start gap-3"><span className="w-1 h-1 bg-neutral-400 mt-2 rounded-full"></span>Density additions</li>
<li className="flex items-start gap-3"><span className="w-1 h-1 bg-neutral-400 mt-2 rounded-full"></span>Zoning reclassification</li>
<li className="flex items-start gap-3"><span className="w-1 h-1 bg-neutral-400 mt-2 rounded-full"></span>Short-cycle execution</li>
<li className="flex items-start gap-3"><span className="w-1 h-1 bg-neutral-400 mt-2 rounded-full"></span>Event-driven exits</li>
</ul>
</div>

<div className="group">
<div className="mb-6 opacity-60">
<iconify-icon icon="lucide:layout-grid" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="serif text-2xl text-[#111] mb-4">Income-Density <br/>Development</h3>
<ul className="space-y-3 text-sm text-neutral-600 font-light border-t border-neutral-200 pt-4">
<li className="flex items-start gap-3"><span className="w-1 h-1 bg-neutral-400 mt-2 rounded-full"></span>Solving land cost via design</li>
<li className="flex items-start gap-3"><span className="w-1 h-1 bg-neutral-400 mt-2 rounded-full"></span>Workforce housing logic</li>
<li className="flex items-start gap-3"><span className="w-1 h-1 bg-neutral-400 mt-2 rounded-full"></span>Tripling income, controlled cost</li>
<li className="flex items-start gap-3"><span className="w-1 h-1 bg-neutral-400 mt-2 rounded-full"></span>Stabilization focused</li>
</ul>
</div>

<div className="group">
<div className="mb-6 opacity-60">
<iconify-icon icon="lucide:refresh-cw" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="serif text-2xl text-[#111] mb-4">Capital Recycling <br/>Platform</h3>
<ul className="space-y-3 text-sm text-neutral-600 font-light border-t border-neutral-200 pt-4">
<li className="flex items-start gap-3"><span className="w-1 h-1 bg-neutral-400 mt-2 rounded-full"></span>6–20 unit developments</li>
<li className="flex items-start gap-3"><span className="w-1 h-1 bg-neutral-400 mt-2 rounded-full"></span>Insured takeout financing</li>
<li className="flex items-start gap-3"><span className="w-1 h-1 bg-neutral-400 mt-2 rounded-full"></span>18-month capital cycles</li>
<li className="flex items-start gap-3"><span className="w-1 h-1 bg-neutral-400 mt-2 rounded-full"></span>Optional reinvestment</li>
</ul>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-white border-y border-neutral-200" id="process">
<div className="max-w-7xl mx-auto reveal-on-scroll">
<h2 className="serif text-3xl text-center mb-20 text-[#111]">The Value Loop</h2>
<div className="hidden md:flex justify-between items-center relative">

<div className="absolute top-1/2 left-0 w-full h-px bg-neutral-200 -z-10"></div>

<div className="bg-white p-4 border border-neutral-200 min-w-[140px] text-center">
<span className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">01</span>
<span className="text-sm font-medium text-neutral-800">Design Constraint</span>
</div>
<iconify-icon className="text-neutral-300" icon="lucide:arrow-right"></iconify-icon>

<div className="bg-white p-4 border border-neutral-200 min-w-[140px] text-center">
<span className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">02</span>
<span className="text-sm font-medium text-neutral-800">Income Engineering</span>
</div>
<iconify-icon className="text-neutral-300" icon="lucide:arrow-right"></iconify-icon>

<div className="bg-white p-4 border border-neutral-200 min-w-[140px] text-center">
<span className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">03</span>
<span className="text-sm font-medium text-neutral-800">NOI Expansion</span>
</div>
<iconify-icon className="text-neutral-300" icon="lucide:arrow-right"></iconify-icon>

<div className="bg-white p-4 border border-neutral-200 min-w-[140px] text-center">
<span className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">04</span>
<span className="text-sm font-medium text-neutral-800">Appraisal Repricing</span>
</div>
<iconify-icon className="text-neutral-300" icon="lucide:arrow-right"></iconify-icon>

<div className="bg-[#111] p-4 border border-[#111] min-w-[140px] text-center">
<span className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">05</span>
<span className="text-sm font-medium text-white">Capital Return</span>
</div>
</div>

<div className="md:hidden flex flex-col items-center gap-4">
<div className="bg-white px-6 py-3 border border-neutral-200 w-full text-center text-sm">Design Constraint</div>
<iconify-icon className="text-neutral-300" icon="lucide:arrow-down"></iconify-icon>
<div className="bg-white px-6 py-3 border border-neutral-200 w-full text-center text-sm">Income Engineering</div>
<iconify-icon className="text-neutral-300" icon="lucide:arrow-down"></iconify-icon>
<div className="bg-white px-6 py-3 border border-neutral-200 w-full text-center text-sm">NOI Expansion</div>
<iconify-icon className="text-neutral-300" icon="lucide:arrow-down"></iconify-icon>
<div className="bg-white px-6 py-3 border border-neutral-200 w-full text-center text-sm">Appraisal Repricing</div>
<iconify-icon className="text-neutral-300" icon="lucide:arrow-down"></iconify-icon>
<div className="bg-[#111] text-white px-6 py-3 border border-[#111] w-full text-center text-sm">Capital Return</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 bg-[#F5F4F2]">

<div className="px-6 md:px-16 py-24 md:py-32 border-b lg:border-b-0 lg:border-r border-neutral-300 reveal-on-scroll">
<h2 className="serif text-3xl mb-12 text-[#111]">Structure &amp; Alignment</h2>
<div className="space-y-8">
<div className="flex gap-4 items-baseline">
<span className="text-xs font-bold uppercase tracking-widest min-w-[80px] text-neutral-400">01</span>
<div>
<h4 className="text-lg font-medium text-neutral-900 mb-2">Capital-First Waterfalls</h4>
<p className="text-sm text-neutral-600 font-light leading-relaxed">Investors receive 100% of initial capital return before profit participation begins.</p>
</div>
</div>
<div className="flex gap-4 items-baseline">
<span className="text-xs font-bold uppercase tracking-widest min-w-[80px] text-neutral-400">02</span>
<div>
<h4 className="text-lg font-medium text-neutral-900 mb-2">Sponsor Subordination</h4>
<p className="text-sm text-neutral-600 font-light leading-relaxed">Sponsor is paid last. We only realize value when the asset performs as engineered.</p>
</div>
</div>
<div className="flex gap-4 items-baseline">
<span className="text-xs font-bold uppercase tracking-widest min-w-[80px] text-neutral-400">03</span>
<div>
<h4 className="text-lg font-medium text-neutral-900 mb-2">Transparent Fiduciary</h4>
<p className="text-sm text-neutral-600 font-light leading-relaxed">Simple structures. No hidden promote hurdles. Direct alignment of interest.</p>
</div>
</div>
</div>
</div>

<div className="px-6 md:px-16 py-24 md:py-32 bg-[#EBE9E4] reveal-on-scroll">
<h2 className="serif text-3xl mb-12 text-[#111]">Risk Discipline</h2>
<div className="space-y-8">
<div className="flex gap-4 items-center">
<iconify-icon className="text-neutral-500" icon="lucide:shield-check" width="20"></iconify-icon>
<p className="text-neutral-800 text-base font-light">Fixed or capped construction costs via vertical integration.</p>
</div>
<div className="w-full h-px bg-neutral-300"></div>
<div className="flex gap-4 items-center">
<iconify-icon className="text-neutral-500" icon="lucide:trending-down" width="20"></iconify-icon>
<p className="text-neutral-800 text-base font-light">Conservative refinance assumptions (stress-tested rates).</p>
</div>
<div className="w-full h-px bg-neutral-300"></div>
<div className="flex gap-4 items-center">
<iconify-icon className="text-neutral-500" icon="lucide:split" width="20"></iconify-icon>
<p className="text-neutral-800 text-base font-light">Dual exit planning: Built to hold, positioned to sell.</p>
</div>
<div className="w-full h-px bg-neutral-300"></div>
<div className="flex gap-4 items-center">
<iconify-icon className="text-neutral-500" icon="lucide:home" width="20"></iconify-icon>
<p className="text-neutral-800 text-base font-light">Focus on non-discretionary housing demand.</p>
</div>
</div>
</div>
</section>

<section className="relative py-32 md:py-48 px-6 md:px-12 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Concrete Structure" className="w-full h-full object-cover grayscale brightness-[0.3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 text-white reveal-on-scroll">
<div>
<h2 className="serif text-4xl mb-6">Allocation Profile</h2>
<div className="h-px w-12 bg-white/30"></div>
</div>
<div>
<p className="text-lg font-light leading-relaxed mb-8 opacity-90">
                    This platform is designed for experienced, patient, and thoughtful capital allocators who understand that real value requires time to engineer.
                </p>
<div className="space-y-4 text-sm font-light tracking-wide text-white/60">
<p className="flex items-center gap-3">
<iconify-icon className="text-white/40" icon="lucide:x"></iconify-icon> Not for daily liquidity seekers
                    </p>
<p className="flex items-center gap-3">
<iconify-icon className="text-white/40" icon="lucide:x"></iconify-icon> Not for short-term yield chasers
                    </p>
<p className="flex items-center gap-3">
<iconify-icon className="text-white/40" icon="lucide:x"></iconify-icon> Not for retail speculation
                    </p>
<p className="flex items-center gap-3 mt-6 text-white opacity-100">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Designed for generational wealth preservation
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#F5F4F2] min-h-[70vh] flex flex-col justify-center" id="access">
<div className="max-w-xl mx-auto w-full reveal-on-scroll">
<div className="text-center mb-16">
<iconify-icon className="text-neutral-400 mb-6" icon="lucide:lock" width="24"></iconify-icon>
<h2 className="serif text-3xl md:text-4xl text-[#111] mb-4">Private Access</h2>
<p className="text-neutral-500 font-light text-sm">Opportunities are offered privately. Qualification required.</p>
</div>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">First Name</label>
<input className="w-full bg-transparent border-b border-neutral-300 py-2 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors rounded-none" type="text"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Last Name</label>
<input className="w-full bg-transparent border-b border-neutral-300 py-2 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors rounded-none" type="text"/>
</div>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Email Address</label>
<input className="w-full bg-transparent border-b border-neutral-300 py-2 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors rounded-none" type="email"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Investor Type</label>
<select className="w-full bg-transparent border-b border-neutral-300 py-2 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors rounded-none appearance-none">
<option>Accredited Individual</option>
<option>Family Office</option>
<option>Institutional</option>
</select>
</div>
<div className="pt-8 text-center">
<button className="bg-[#111] text-[#F5F4F2] px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors w-full md:w-auto" type="button">
                        Request Investor Access
                    </button>
</div>
</form>
</div>
</section>

<footer className="bg-[#111] text-neutral-500 py-16 px-6 md:px-12 border-t border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-3 h-3 border border-white/80 rotate-45"></div>
<div className="text-sm tracking-[0.2em] font-medium uppercase text-white">
                        Axiom
                    </div>
</div>
<div className="text-xs font-light space-y-2 max-w-sm leading-relaxed">
<p>Alberta, Canada</p>
<p className="pt-4">Private Equity Real Estate <br/> Design-Led Development</p>
</div>
</div>
<div className="text-[10px] uppercase tracking-wider text-neutral-600 space-y-1 text-right w-full md:w-auto">
<p>© 2024 Axiom Capital. All Rights Reserved.</p>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5">
<p className="text-[10px] leading-relaxed font-light text-neutral-600 text-justify">
                Disclaimer: This website is for informational purposes only and does not constitute an offer to sell or a solicitation to buy securities. All investments are subject to eligibility and applicable securities exemptions. Past performance is not indicative of future results. All architectural imagery is for illustrative purposes only.
            </p>
</div>
</footer>

    </>
  );
}
