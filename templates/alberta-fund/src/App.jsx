import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
navy: '#0A2342',
gold: '#C4A663',
goldHover: '#b09455',
light: '#F1F1F1',
white: '#FFFFFF'
}
},
fontFamily: {
sans: ['Montserrat', 'sans-serif'],
serif: ['Lora', 'serif'],
},
boxShadow: {
'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
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
      

<nav className="fixed top-0 w-full z-50 bg-brand-navy/95 backdrop-blur-sm border-b border-white/10 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 bg-brand-gold rounded-sm flex items-center justify-center text-brand-navy transform group-hover:rotate-3 transition-transform">
<i className="w-6 h-6" data-lucide="building-2"></i>
</div>
<div className="flex flex-col">
<span className="text-white font-bold tracking-tight text-lg leading-none">ALBERTA INFILL</span>
<span className="text-brand-gold text-xs tracking-widest uppercase mt-1">Real Estate Fund</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
<a className="hover:text-brand-gold transition-colors" href="#thesis">The Thesis</a>
<a className="hover:text-brand-gold transition-colors" href="#tiers">Investor Tiers</a>
<a className="hover:text-brand-gold transition-colors" href="#process">Our Process</a>
<a className="hover:text-brand-gold transition-colors" href="#why-us">Why Us</a>
<a className="hover:text-brand-gold transition-colors" href="#resources">Resources</a>
<a className="bg-brand-gold text-brand-navy px-6 py-2.5 rounded hover:bg-brand-goldHover transition-colors font-semibold" href="#contact">
                    Schedule a Consultation
                </a>
</div>

<button className="lg:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Modern Infill Apartment at Dusk" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight fade-in-up">
                Pension-Style Returns from Alberta's Infill Boom – <span className="text-brand-gold">Without the Regulatory Complexity</span>
</h1>
<p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 font-light leading-relaxed fade-in-up delay-100">
                Harnessing the power of CMHC-leveraged, short-cycle infill developments to deliver predictable returns and rapid capital recycling.
            </p>
<div className="flex flex-col items-center gap-4 fade-in-up delay-200">
<a className="bg-brand-gold text-brand-navy px-8 py-4 rounded font-bold text-lg hover:bg-brand-goldHover transition-all transform hover:-translate-y-1 shadow-lg flex items-center gap-2" href="#tiers">
                    Explore Investor Tiers <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<button className="text-white border-b border-brand-gold/50 hover:border-brand-gold hover:text-brand-gold transition-colors text-sm mt-2 pb-1" onclick="alert('Download form would open here.')">
                    Download Investor Kit
                </button>
</div>
</div>
</section>

<section className="py-24 bg-brand-light" id="thesis">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-brand-gold font-bold tracking-widest uppercase text-sm font-sans-custom">Market Opportunity</span>
<h2 className="text-3xl md:text-4xl font-bold mt-3 text-brand-navy">Why Alberta's Infill Market is Primed for Growth</h2>
<div className="w-20 h-1 bg-brand-gold mx-auto mt-6"></div>
</div>
<div className="grid md:grid-cols-3 gap-10">

<div className="bg-white p-8 rounded shadow-soft hover:shadow-xl transition-shadow border-t-4 border-brand-gold group">
<div className="w-14 h-14 bg-brand-navy/5 rounded-full flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
<i className="w-7 h-7" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-bold mb-4">Urban Growth &amp; Demand</h3>
<p className="text-gray-600 leading-relaxed">
                        Alberta is leading Canada in rental demand growth. Our focus on Edmonton and Calgary's urban cores allows us to capitalize on this trend, developing high-demand properties in areas with sustained rental absorption and low vacancy rates.
                    </p>
</div>

<div className="bg-white p-8 rounded shadow-soft hover:shadow-xl transition-shadow border-t-4 border-brand-gold group">
<div className="w-14 h-14 bg-brand-navy/5 rounded-full flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
<i className="w-7 h-7" data-lucide="layout-grid"></i>
</div>
<h3 className="text-xl font-bold mb-4">The 'Missing Middle' Advantage</h3>
<p className="text-gray-600 leading-relaxed">
                        We operate in the strategic niche of 6-20 unit projects. This segment is too small for large institutional REITs and too complex for individual investors, creating a unique market opportunity with limited competition and significant upside.
                    </p>
</div>

<div className="bg-white p-8 rounded shadow-soft hover:shadow-xl transition-shadow border-t-4 border-brand-gold group">
<div className="w-14 h-14 bg-brand-navy/5 rounded-full flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
<i className="w-7 h-7" data-lucide="landmark"></i>
</div>
<h3 className="text-xl font-bold mb-4">The CMHC Leverage Engine</h3>
<p className="text-gray-600 leading-relaxed">
                        Our model is powered by CMHC's MLI Select program. This allows us to secure 95% loan-to-cost refinancing and 50-year amortizations—creating unparalleled leverage and de-risking our projects in a way conventional financing cannot match.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="tiers">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Find Your Fit: Tailored Investment Structures</h2>
<p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">Select the tier that aligns with your capital deployment strategy.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="border border-gray-200 rounded-lg p-8 hover:border-brand-gold hover:shadow-2xl transition-all duration-300 relative group bg-gray-50/50">
<div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-brand-gold transition-colors"></div>
<h3 className="text-2xl font-bold text-brand-navy mb-2">Tier 1: The Income Builder</h3>
<p className="text-sm text-gray-500 mb-6 font-sans-custom uppercase tracking-wide">Ideal For: Income-focused professionals, retirees</p>
<div className="mb-8 pb-8 border-b border-gray-200">
<p className="text-4xl font-bold text-brand-navy font-sans-custom">&lt;$1M<span className="text-lg text-gray-400 font-normal ml-1">Capital</span></p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-gold mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-gray-700"><strong>8-12% Yield</strong> (Return of Capital)</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-gold mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-gray-700">Structure: Note or MIC</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-gold mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-gray-700">Fixed income priority</span>
</li>
</ul>
<a className="block w-full text-center border-2 border-brand-navy text-brand-navy py-3 rounded font-bold hover:bg-brand-navy hover:text-white transition-colors" href="#contact">Learn More</a>
</div>

<div className="border border-gray-200 rounded-lg p-8 hover:border-brand-gold hover:shadow-2xl transition-all duration-300 relative group bg-brand-navy text-white transform md:-translate-y-4 shadow-xl">
<div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>
<div className="absolute top-4 right-4">
<span className="bg-brand-gold text-brand-navy text-xs font-bold px-2 py-1 rounded uppercase">Most Popular</span>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Tier 2: The Growth Engine</h3>
<p className="text-sm text-gray-300 mb-6 font-sans-custom uppercase tracking-wide">Ideal For: High-Net-Worth Individuals, Family Offices</p>
<div className="mb-8 pb-8 border-b border-white/20">
<p className="text-4xl font-bold text-brand-gold font-sans-custom">$1M - $5M<span className="text-lg text-gray-300 font-normal ml-1">Capital</span></p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-gold mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-gray-100"><strong>14-18% IRR</strong></span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-gold mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-gray-100">Structure: Limited Partnership (LP) Units</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-gold mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-gray-100">Equity upside participation</span>
</li>
</ul>
<a className="block w-full text-center bg-brand-gold text-brand-navy py-3 rounded font-bold hover:bg-white hover:text-brand-navy transition-colors" href="#contact">Explore Details</a>
</div>

<div className="border border-gray-200 rounded-lg p-8 hover:border-brand-gold hover:shadow-2xl transition-all duration-300 relative group bg-gray-50/50">
<div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-brand-gold transition-colors"></div>
<h3 className="text-2xl font-bold text-brand-navy mb-2">Tier 3: Strategic Partner</h3>
<p className="text-sm text-gray-500 mb-6 font-sans-custom uppercase tracking-wide">Ideal For: Institutions, Syndicates, Co-GP Partners</p>
<div className="mb-8 pb-8 border-b border-gray-200">
<p className="text-4xl font-bold text-brand-navy font-sans-custom">$5M+<span className="text-lg text-gray-400 font-normal ml-1">Capital</span></p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-gold mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-gray-700"><strong>18-22% IRR</strong> + Co-GP Rights</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-gold mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-gray-700">Structure: Joint Venture (JV) or Co-GP</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-gold mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-gray-700">Maximum control &amp; alignment</span>
</li>
</ul>
<a className="block w-full text-center border-2 border-brand-navy text-brand-navy py-3 rounded font-bold hover:bg-brand-navy hover:text-white transition-colors" href="#contact">Inquire</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-light" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-brand-gold font-bold tracking-widest uppercase text-sm font-sans-custom">Timeline</span>
<h2 className="text-3xl md:text-4xl font-bold mt-3 text-brand-navy">From Capital to Cash Flow: Our 18-Month Investment Cycle</h2>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gray-300 -z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow relative z-10 group">
<div className="w-20 h-20 bg-brand-navy text-white rounded-full flex flex-col items-center justify-center mx-auto mb-6 border-4 border-brand-light group-hover:bg-brand-gold transition-colors">
<span className="text-xs font-light opacity-70">Months</span>
<span className="text-lg font-bold">0-2</span>
</div>
<h3 className="text-lg font-bold text-center mb-3">Acquisition &amp; Permitting</h3>
<p className="text-sm text-gray-600 text-center leading-relaxed">
                            We identify and secure prime infill land and advance all necessary permits.
                        </p>
</div>

<div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow relative z-10 group">
<div className="w-20 h-20 bg-brand-navy text-white rounded-full flex flex-col items-center justify-center mx-auto mb-6 border-4 border-brand-light group-hover:bg-brand-gold transition-colors">
<span className="text-xs font-light opacity-70">Months</span>
<span className="text-lg font-bold">3-10</span>
</div>
<h3 className="text-lg font-bold text-center mb-3">Construction</h3>
<p className="text-sm text-gray-600 text-center leading-relaxed">
                            Our builder-aligned partners execute the build on a fixed-cost basis, mitigating cost overrun risks.
                        </p>
</div>

<div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow relative z-10 group">
<div className="w-20 h-20 bg-brand-navy text-white rounded-full flex flex-col items-center justify-center mx-auto mb-6 border-4 border-brand-light group-hover:bg-brand-gold transition-colors">
<span className="text-xs font-light opacity-70">Months</span>
<span className="text-lg font-bold">11-14</span>
</div>
<h3 className="text-lg font-bold text-center mb-3">Lease-Up &amp; Refinance</h3>
<p className="text-sm text-gray-600 text-center leading-relaxed">
                            We stabilize the asset through lease-up and secure long-term, low-cost debt through CMHC refinancing.
                        </p>
</div>

<div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow relative z-10 group">
<div className="w-20 h-20 bg-brand-navy text-white rounded-full flex flex-col items-center justify-center mx-auto mb-6 border-4 border-brand-light group-hover:bg-brand-gold transition-colors">
<span className="text-xs font-light opacity-70">Months</span>
<span className="text-lg font-bold">15-18</span>
</div>
<h3 className="text-lg font-bold text-center mb-3">Capital Return</h3>
<p className="text-sm text-gray-600 text-center leading-relaxed">
                            Original investor capital is returned. Investors can then exit or redeploy into the next project to compound their returns.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="why-us">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Smarter Than a REIT, Simpler Than Direct Ownership</h2>
</div>
<div className="grid md:grid-cols-3 gap-10">

<div className="p-8 bg-gray-50 border border-gray-100 rounded hover:bg-white hover:shadow-lg transition-all duration-300">
<h3 className="text-xl font-bold text-brand-navy mb-4 pb-4 border-b border-brand-gold/30">vs. Public REITs</h3>
<p className="text-gray-700">
                        Benefit from our short-cycle model that recycles capital in 18 months, not the 7-10 year hold of traditional REITs. Our targeted approach offers the potential for higher, non-market-correlated returns.
                    </p>
</div>

<div className="p-8 bg-brand-navy text-white rounded shadow-xl transform md:-translate-y-2 border border-brand-navy">
<h3 className="text-xl font-bold text-brand-gold mb-4 pb-4 border-b border-white/20">vs. Syndicated Mortgages</h3>
<p className="text-gray-200">
                        As an equity partner, your interests are fully aligned with ours. We offer superior control, security, and transparency compared to the high-risk, debt-based nature of syndicated mortgages.
                    </p>
</div>

<div className="p-8 bg-gray-50 border border-gray-100 rounded hover:bg-white hover:shadow-lg transition-all duration-300">
<h3 className="text-xl font-bold text-brand-navy mb-4 pb-4 border-b border-brand-gold/30">vs. Direct Ownership</h3>
<p className="text-gray-700">
                        Achieve diversification across multiple projects without the headaches of being a landlord. We provide professional management, economies of scale, and freedom from day-to-day responsibilities.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-light" id="resources">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Your Questions, Answered</h2>
</div>
<div className="space-y-4">

<details className="group bg-white rounded-lg shadow-sm p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-lg font-semibold text-brand-navy">Why not just invest in a REIT?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-brand-gold" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-gray-600 mt-4 leading-relaxed group-open:animate-fadeIn">
                        While REITs offer liquidity, our fund provides the potential for higher returns by operating in a less efficient market niche. Our short 18-month cycle also means your capital is not locked up for a decade.
                    </p>
</details>

<details className="group bg-white rounded-lg shadow-sm p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-lg font-semibold text-brand-navy">What happens if a project doesn't appraise at the expected value?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-brand-gold" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-gray-600 mt-4 leading-relaxed group-open:animate-fadeIn">
                        We mitigate this risk through conservative underwriting and a dual-track valuation model. Furthermore, our CMHC-backed financing provides a significant buffer against appraisal fluctuations.
                    </p>
</details>

<details className="group bg-white rounded-lg shadow-sm p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-lg font-semibold text-brand-navy">Can I use my RRSP or other registered funds?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-brand-gold" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-gray-600 mt-4 leading-relaxed group-open:animate-fadeIn">
                        Our fund is structured for accredited investors, and while direct RRSP eligibility is complex, we can work with your financial advisor to explore options for investment through corporate entities or trusts.
                    </p>
</details>

<details className="group bg-white rounded-lg shadow-sm p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-lg font-semibold text-brand-navy">What are the liquidity options if I need to exit early?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-brand-gold" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-gray-600 mt-4 leading-relaxed group-open:animate-fadeIn">
                        The fund is designed around a structured 18-month capital return event. While early redemptions are not guaranteed, we facilitate secondary sales to other investors in the fund where possible.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 bg-brand-navy text-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-4xl font-bold mb-6 text-white">Ready to Build Your Portfolio?</h2>
<p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">
                        Take the next step towards secured, high-yield real estate exposure. Schedule a consultation with our investment team to discuss which tier fits your strategy.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-brand-gold">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<span className="text-lg">info@albertainfill.fund</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-brand-gold">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<span className="text-lg">+1 (587) 555-1234</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-brand-gold">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<span className="text-lg">Calgary, AB</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded shadow-2xl">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-semibold text-brand-navy mb-1">First Name</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-brand-navy mb-1">Last Name</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-brand-navy mb-1">Email</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-semibold text-brand-navy mb-1">Phone</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div>
<label className="block text-sm font-semibold text-brand-navy mb-1">Investment Tier of Interest</label>
<select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors appearance-none">
<option>Tier 1: Income Builder</option>
<option selected="">Tier 2: Growth Engine</option>
<option>Tier 3: Strategic Partner</option>
</select>
</div>
<button className="w-full bg-brand-gold text-brand-navy font-bold py-4 rounded text-lg hover:bg-brand-goldHover transition-colors mt-4" type="submit">
                            Schedule a Consultation
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-brand-navy text-gray-400 py-12 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm text-center md:text-left">
<p>© 2026 Alberta Infill Real Estate Fund. All rights reserved.</p>
</div>
<div className="flex gap-8 text-sm">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Use</a>
<a className="hover:text-white transition-colors" href="#">Disclaimer</a>
</div>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
