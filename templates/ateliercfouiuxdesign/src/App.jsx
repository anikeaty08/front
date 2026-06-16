import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
serif: ['"Instrument Serif"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
800: '#292524',
850: '#1c1917',
900: '#0c0a09',
}
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#FDFCF8]/80 backdrop-blur-xl border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<a className="font-serif text-2xl tracking-tighter text-stone-900 hover:text-stone-600 transition-colors" href="#">
                Atelier CFO
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-stone-900 transition-colors" href="#advisory">Advisory</a>
<a className="hover:text-stone-900 transition-colors" href="#journal">Journal</a>
<a className="ml-4 px-5 py-2 bg-stone-900 text-white rounded-md text-xs uppercase tracking-widest hover:bg-stone-800 transition-all shadow-sm hover:shadow-md" href="#contact">
                    Inquire
                </a>
</div>
<button className="md:hidden text-stone-900">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 z-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
<div className="lg:col-span-8 animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white/50 backdrop-blur-sm mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
<span className="text-xs font-medium text-stone-500 uppercase tracking-widest">Accepting Q4 engagements</span>
</div>
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-stone-900 mb-8">
                        Financial <br/>
<span className="text-stone-400 italic font-light">Architecture</span>
</h1>
</div>
<div className="lg:col-span-4 pb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
<p className="text-lg text-stone-600 font-light leading-relaxed mb-8 border-l border-stone-300 pl-6">
                        We build resilient capital structures for complex enterprises and private offices. Moving beyond reporting to strategic foresight.
                    </p>
<div className="pl-6">
<a className="inline-flex items-center gap-2 text-sm font-medium border-b border-stone-900 pb-0.5 hover:text-stone-600 hover:border-stone-600 transition-all" href="#advisory">
                            Explore Services <i className="w-4 h-4" data-lucide="arrow-down-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="mt-24 pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<span className="block text-4xl font-serif text-stone-900">$500M+</span>
<span className="text-xs uppercase tracking-widest text-stone-400 mt-1">Transaction Value</span>
</div>
<div>
<span className="block text-4xl font-serif text-stone-900">12</span>
<span className="text-xs uppercase tracking-widest text-stone-400 mt-1">Years Avg Tenure</span>
</div>
<div>
<span className="block text-4xl font-serif text-stone-900">Global</span>
<span className="text-xs uppercase tracking-widest text-stone-400 mt-1">Operational Reach</span>
</div>
<div className="flex items-end justify-start md:justify-end">
<span className="text-xs text-stone-400 text-right">Licensed &amp; Insured <br/>Fiduciary Partners</span>
</div>
</div>
</div>
</header>

<section className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden" id="advisory">
<div className="absolute inset-0 z-0 bg-grid-pattern-dark opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-stone-800 pb-8">
<div>
<span className="text-stone-500 text-xs uppercase tracking-widest mb-2 block">Our Expertise</span>
<h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight">The Advisory Suite</h2>
</div>
<p className="mt-4 md:mt-0 text-stone-400 max-w-sm text-sm font-light leading-relaxed">
                    Bespoke engagements tailored to the lifecycle stage of your enterprise.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 bg-stone-850 p-8 rounded-lg border border-stone-800 hover:border-stone-700 transition-colors group">
<div className="flex justify-between items-start mb-8">
<div className="p-3 bg-stone-900 rounded-md text-stone-300 border border-stone-800 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<i className="w-5 h-5 text-stone-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-3xl mb-3 text-white">Fractional CFO</h3>
<p className="text-stone-400 font-light leading-relaxed max-w-lg mb-6">
                        Embedded executive leadership. We step into the cockpit to manage cash flow, financial modeling, board reporting, and operational efficiency without the overhead of a full-time hire.
                    </p>
<ul className="grid grid-cols-2 gap-3 text-xs text-stone-500 uppercase tracking-wide">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-600 rounded-full"></div>Series A-C Prep</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-600 rounded-full"></div>Unit Economics</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-600 rounded-full"></div>Audit Readiness</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-600 rounded-full"></div>Board Governance</li>
</ul>
</div>

<div className="bg-stone-850 p-8 rounded-lg border border-stone-800 hover:border-stone-700 transition-colors group flex flex-col justify-between">
<div>
<div className="p-3 bg-stone-900 w-fit rounded-md text-stone-300 border border-stone-800 mb-8">
<i className="w-6 h-6" data-lucide="scale" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl mb-3 text-white">M&amp;A Strategy</h3>
<p className="text-stone-400 font-light text-sm leading-relaxed mb-4">
                            Sell-side preparation and buy-side due diligence. We maximize valuation through rigorous data room organization and narrative building.
                        </p>
</div>
<div className="w-full h-px bg-stone-800 my-4"></div>
<span className="text-xs text-stone-500 uppercase tracking-wider">Deal Advisory</span>
</div>

<div className="bg-stone-850 p-8 rounded-lg border border-stone-800 hover:border-stone-700 transition-colors group">
<div className="p-3 bg-stone-900 w-fit rounded-md text-stone-300 border border-stone-800 mb-6">
<i className="w-6 h-6" data-lucide="landmark" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl mb-2 text-white">Private Office</h3>
<p className="text-stone-400 font-light text-sm leading-relaxed">
                        Wealth preservation and concierge financial management for high-net-worth founders and families.
                    </p>
</div>

<div className="md:col-span-2 bg-stone-850 p-8 rounded-lg border border-stone-800 hover:border-stone-700 transition-colors group">
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
<div className="p-3 bg-stone-900 w-fit rounded-md text-stone-300 border border-stone-800">
<i className="w-6 h-6" data-lucide="network" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-serif text-2xl mb-2 text-white">Capital Structure</h3>
<p className="text-stone-400 font-light text-sm leading-relaxed max-w-xl">
                                Optimizing the blend of debt and equity to lower cost of capital while preserving founder equity.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FDFCF8]" id="philosophy">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative">

<div className="aspect-square bg-stone-100 rounded-full flex items-center justify-center relative overflow-hidden border border-stone-200">
<div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
<div className="w-2/3 h-2/3 border border-stone-300 rounded-full flex items-center justify-center">
<div className="w-2/3 h-2/3 border border-stone-300 rounded-full flex items-center justify-center bg-stone-50">
<span className="font-serif italic text-3xl text-stone-400">?</span>
</div>
</div>
</div>
<div className="absolute -bottom-6 -right-6 bg-white p-6 border border-stone-200 shadow-xl max-w-xs rounded-sm">
<p className="font-serif text-xl italic text-stone-900 mb-2">"Speed is irrelevant if you are going in the wrong direction."</p>
<p className="text-xs uppercase tracking-widest text-stone-400">Principles</p>
</div>
</div>
<div className="space-y-8">
<span className="text-stone-500 text-xs uppercase tracking-widest mb-2 block">Philosophy</span>
<h2 className="font-serif text-5xl md:text-6xl text-stone-900 leading-[1.1] tracking-tight">
                        Clarity over <br/>complexity.
                    </h2>
<p className="text-xl font-light text-stone-600 leading-relaxed">
                        In a financial landscape obsessed with growth at all costs, we champion sustainable compounding. We translate chaotic data into serene strategy.
                    </p>
<div className="space-y-6 pt-6">
<div className="flex gap-4 items-start">
<div className="mt-1 w-5 h-5 rounded-full border border-stone-300 flex items-center justify-center shrink-0">
<div className="w-1.5 h-1.5 bg-stone-900 rounded-full"></div>
</div>
<div>
<h4 className="font-serif text-xl text-stone-900">Rigorous Governance</h4>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">Establishing controls that protect value without stifling innovation.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 w-5 h-5 rounded-full border border-stone-300 flex items-center justify-center shrink-0">
<div className="w-1.5 h-1.5 bg-stone-900 rounded-full"></div>
</div>
<div>
<h4 className="font-serif text-xl text-stone-900">Data-Led Intuition</h4>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">Using quantitative analysis to inform, not replace, strategic judgment.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-stone-200" id="journal">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight">The Ledger</h2>
<a className="group flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">
                    View Archive 
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="h-64 bg-stone-100 mb-6 relative overflow-hidden rounded-sm border border-stone-100">
<div className="absolute inset-0 bg-stone-200/50 group-hover:bg-stone-200/30 transition-colors duration-500"></div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<span className="px-2 py-1 bg-white/80 backdrop-blur-sm text-xs font-medium text-stone-600 rounded-sm">Market Analysis</span>
</div>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-2 leading-tight group-hover:underline decoration-stone-300 underline-offset-4 decoration-1">The Post-ZIRP Reality</h3>
<p className="text-stone-500 text-sm leading-relaxed line-clamp-2">Adjusting operational leverage for an era of normalized interest rates and capital scarcity.</p>
</article>

<article className="group cursor-pointer">
<div className="h-64 bg-stone-100 mb-6 relative overflow-hidden rounded-sm border border-stone-100">
<div className="absolute inset-0 bg-stone-200/50 group-hover:bg-stone-200/30 transition-colors duration-500"></div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<span className="px-2 py-1 bg-white/80 backdrop-blur-sm text-xs font-medium text-stone-600 rounded-sm">Ops</span>
</div>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-2 leading-tight group-hover:underline decoration-stone-300 underline-offset-4 decoration-1">Boardroom Dynamics</h3>
<p className="text-stone-500 text-sm leading-relaxed line-clamp-2">How to structure board meetings that drive decisions rather than just reporting history.</p>
</article>

<article className="group cursor-pointer">
<div className="h-64 bg-stone-100 mb-6 relative overflow-hidden rounded-sm border border-stone-100">
<div className="absolute inset-0 bg-stone-200/50 group-hover:bg-stone-200/30 transition-colors duration-500"></div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<span className="px-2 py-1 bg-white/80 backdrop-blur-sm text-xs font-medium text-stone-600 rounded-sm">Wealth</span>
</div>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-2 leading-tight group-hover:underline decoration-stone-300 underline-offset-4 decoration-1">The 100-Year Portfolio</h3>
<p className="text-stone-500 text-sm leading-relaxed line-clamp-2">Strategies for intergenerational wealth transfer and asset protection.</p>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-100" id="contact">
<div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-xl shadow-sm border border-stone-200 text-center">
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Partner with Atelier</h2>
<p className="text-stone-500 mb-10 max-w-lg mx-auto font-light">We accept a limited number of clients to ensure direct partner involvement in every engagement.</p>
<form className="text-left max-w-md mx-auto space-y-5">
<div>
<input className="w-full bg-stone-50 border-b border-stone-300 px-0 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 focus:bg-transparent transition-all" placeholder="Your work email" type="email"/>
</div>
<div className="relative">
<select className="w-full bg-stone-50 border-b border-stone-300 px-0 py-3 text-stone-900 focus:outline-none focus:border-stone-900 focus:bg-transparent transition-all appearance-none cursor-pointer">
<option className="text-stone-400" disabled="" selected="" value="">Interest</option>
<option>Fractional CFO</option>
<option>M&amp;A Advisory</option>
<option>Private Office</option>
</select>
<i className="absolute right-0 top-3.5 w-4 h-4 text-stone-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
<button className="w-full bg-stone-900 text-white mt-8 py-4 rounded-md font-medium tracking-wide hover:bg-stone-800 transition-colors flex justify-center items-center gap-2 group">
                    Start Conversation
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</section>

<footer className="bg-[#FDFCF8] pt-20 pb-10 px-6 border-t border-stone-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
<div className="md:col-span-4">
<a className="font-serif text-3xl tracking-tighter text-stone-900 block mb-6" href="#">
                        Atelier CFO
                    </a>
<p className="text-stone-500 font-light text-sm max-w-xs leading-relaxed">
                        Providing clarity and architectural integrity to the financial operations of the world's most ambitious enterprises.
                    </p>
</div>
<div className="md:col-span-2 md:col-start-7">
<h4 className="font-medium text-stone-900 mb-6">Firm</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Philosophy</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Team</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-medium text-stone-900 mb-6">Services</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Fractional CFO</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Capital Strategy</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Private Office</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-medium text-stone-900 mb-6">Social</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Twitter</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200">
<p className="text-xs text-stone-400">
                    © 2024 Atelier CFO Advisory.
                </p>
<div className="flex gap-6 text-xs text-stone-400 mt-4 md:mt-0">
<a className="hover:text-stone-600 transition-colors" href="#">Privacy</a>
<a className="hover:text-stone-600 transition-colors" href="#">Terms</a>
<a className="hover:text-stone-600 transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
