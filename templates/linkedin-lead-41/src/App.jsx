import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Cost of Inaction Logic
        const dealSize = document.getElementById('deal-size');
        const dealSizeVal = document.getElementById('deal-size-val');
        const lostDeals = document.getElementById('lost-deals');
        const lostDealsVal = document.getElementById('lost-deals-val');
        const lossTotal = document.getElementById('loss-total');

        function updateInaction() {
            const size = parseInt(dealSize.value);
            const deals = parseInt(lostDeals.value);
            dealSizeVal.innerText = size.toLocaleString();
            lostDealsVal.innerText = deals;
            // Loss over 60 days (2 months)
            const total = (size * deals) * 2;
            lossTotal.innerText = total.toLocaleString();
        }

        dealSize.addEventListener('input', updateInaction);
        lostDeals.addEventListener('input', updateInaction);

        // ROI Logic
        const ltv = document.getElementById('ltv');
        const ltvVal = document.getElementById('ltv-val');
        const roiRev = document.getElementById('roi-rev');
        const roiPercent = document.getElementById('roi-percent');

        function updateROI() {
            const val = parseInt(ltv.value);
            ltvVal.innerText = val.toLocaleString();
            
            const cost = 3000; // 10 calls * 300
            const revenue = val * 2; // 2 closes
            const profit = revenue - cost;
            const percentage = Math.round((profit / cost) * 100);

            roiRev.innerText = revenue.toLocaleString();
            roiPercent.innerText = percentage;
        }

        ltv.addEventListener('input', updateROI);
        
        // Init
        updateInaction();
        updateROI();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex-shrink-0 flex items-center gap-2">
<span className="text-lg font-bold text-[#1a365d] tracking-tight" style={{}}>Authority Pen</span>
</div>
<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-gray-600 hover:text-[#38b2ac] transition" href="#how-it-works">Process</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#38b2ac] transition" href="#whats-included">Included</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#38b2ac] transition" href="#calculator">ROI</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#38b2ac] transition" href="#comparison">Comparison</a>
</div>
<div className="">
<a className="inline-flex items-center justify-center hover:bg-[#319795] transition shadow-[#38b2ac]/20 text-sm font-semibold text-white bg-[#38b2ac] border-transparent border rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-lg" href="#eligibility">Claim Your LinkedIn Lead Strategy </a>
</div>
</div>
</div>
</nav>

<section className="lg:pt-24 lg:pb-20 overflow-hidden pt-16 pb-16 relative">
<div className="sm:px-6 lg:px-8 text-center max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative">

<div className="animate-enter inline-flex uppercase text-xs font-bold text-[#2c7a7b] tracking-wide bg-[#e6fffa] border-[#81e6d9]/50 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="w-2 h-2 rounded-full bg-[#38b2ac] animate-pulse"></span>
                Performance-Based Partnership
            </div>

<h1 className="animate-enter delay-100 sm:text-5xl lg:text-6xl leading-[1.15] text-4xl font-extrabold text-[#1a365d] tracking-tight max-w-5xl mr-auto ml-auto">
                Scale Your LinkedIn Pipeline by <span className="text-[#38b2ac]">8-10 Qualified Calls</span> in 60 Days or You Pay $0
            </h1>

<p className="animate-enter delay-200 mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
                Performance-based LinkedIn demand generation for <span className="font-semibold text-[#1a365d]" style={{}}>founders</span> who want predictable pipeline without writing a single post.
            </p>

<div className="animate-enter delay-300 flex flex-col sm:flex-row gap-4 mt-10 gap-x-4 gap-y-4 items-center justify-center">
<a className="sm:w-auto inline-flex items-center justify-center hover:bg-[#319795] transition transform hover:-translate-y-1 shadow-[#38b2ac]/30 text-base font-bold text-white bg-[#38b2ac] w-full border-transparent border rounded-lg pt-4 pr-8 pb-4 pl-8 shadow-xl" href="#eligibility">Start Generating Qualified Leads Now <svg className="lucide lucide-arrow-right ml-2 h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
<div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
<iconify-icon className="text-[#38b2ac] text-lg" icon="solar:shield-check-linear"></iconify-icon>
                    Risk-Free Guarantee
                </div>
</div>

<div className="animate-enter delay-300 mt-16 max-w-4xl mx-auto">
<div className="group overflow-hidden aspect-video bg-gray-900 border-white border-4 rounded-2xl relative shadow-2xl">
<div className="absolute inset-0 bg-cover bg-center opacity-60" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/90 via-[#1a365d]/40 to-transparent flex flex-col items-center justify-center p-6">
<button className="group/btn relative flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/30 text-white transition-all duration-300 hover:scale-110 hover:bg-[#38b2ac] hover:border-transparent mb-6">
<iconify-icon className="text-4xl ml-1 fill-current" icon="solar:play-linear"></iconify-icon>
<div className="animate-ping opacity-75 border-white/30 border rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
</button>
<h3 className="text-white text-xl sm:text-2xl font-bold max-w-lg leading-snug">
                            "Stop relying on referrals. Here is the exact system."
                        </h3>
</div>
</div>
</div>
</div>

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#f7fafc] to-white rounded-full blur-3xl opacity-50"></div>
<div className="absolute top-1/4 right-0 w-64 h-64 bg-[#e6fffa] rounded-full blur-3xl opacity-60"></div>
<div className="absolute bottom-0 left-0 w-80 h-80 bg-[#edf2f7] rounded-full blur-3xl opacity-60"></div>
</div>
</section>

<section className="py-20 bg-white relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-3xl font-bold text-[#1a365d] tracking-tight mb-4">Is Your Pipeline Stuck in "Feast or Famine" Mode?</h2>
<p className="text-lg text-gray-600">Are you struggling with these common bottlenecks that kill growth?</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#38b2ac]/30 hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#38b2ac] transition-colors duration-300">
<iconify-icon className="text-3xl text-[#ff6b6b] group-hover:text-white transition-colors duration-300" icon="solar:graph-down-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1a365d] mb-3">The Referral Trap</h3>
<p className="text-gray-600 leading-relaxed text-sm">
                        You rely heavily on word-of-mouth. When it rains, it pours. But when it dries up, you have no control lever to pull to generate new business.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#38b2ac]/30 hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#38b2ac] transition-colors duration-300">
<iconify-icon className="text-3xl text-[#ff6b6b] group-hover:text-white transition-colors duration-300" icon="solar:sad-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1a365d] mb-3">The Content Hamster Wheel</h3>
<p className="text-gray-600 leading-relaxed text-sm">
                        You spend hours writing LinkedIn posts that get likes but no leads. You're building an audience, but not a bank account.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#38b2ac]/30 hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#38b2ac] transition-colors duration-300">
<iconify-icon className="text-3xl text-[#ff6b6b] group-hover:text-white transition-colors duration-300" icon="solar:bill-cross-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1a365d] mb-3">The Retainer Burn</h3>
<p className="text-gray-600 leading-relaxed text-sm">
                        You've been burned by agencies charging $3k-$5k/mo retainers for "brand awareness" with zero guarantee of actual qualified booked calls.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#f7fafc] pt-20 pb-20" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-bold text-[#1a365d]">Three Steps to Predictable Revenue</h2>
<p className="mt-4 text-lg text-gray-600">We handle the heavy lifting. You handle the closing.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="step-connector bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative group hover:shadow-lg transition duration-300 z-10">
<div className="absolute -top-6 left-8 w-12 h-12 bg-[#1a365d] text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg ring-4 ring-[#f7fafc]">1</div>
<div className="mt-6 mb-4 text-[#38b2ac]">
<iconify-icon className="text-5xl" icon="solar:microphone-3-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1a365d] mb-3">Strategic Downloads</h3>
<p className="text-gray-600 leading-relaxed">
                        We conduct 2-3 hour weekly interviews to extract your frameworks, stories, and authentic voice. No homework for you.
                    </p>
</div>

<div className="step-connector bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative group hover:shadow-lg transition duration-300 z-10">
<div className="absolute -top-6 left-8 w-12 h-12 bg-[#1a365d] text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg ring-4 ring-[#f7fafc]">2</div>
<div className="mt-6 mb-4 text-[#38b2ac]">
<iconify-icon className="text-5xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1a365d] mb-3">Authority Content &amp; Outreach</h3>
<p className="text-gray-600 leading-relaxed">
                        I create high-authority posts and execute targeted relationship building with your ideal prospects using your profile.
                    </p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative group hover:shadow-lg transition duration-300 z-10">
<div className="absolute -top-6 left-8 w-12 h-12 bg-[#38b2ac] text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg ring-4 ring-[#f7fafc]">3</div>
<div className="mt-6 mb-4 text-[#38b2ac]">
<iconify-icon className="text-5xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1a365d] mb-3">Qualified Calls Delivered</h3>
<p className="text-gray-600 leading-relaxed">
                        You simply show up to pre-sold conversations with decision-makers who fit your exact ICP and are ready to buy.
                    </p>
</div>
</div>

<div className="text-center">
<a className="inline-flex items-center justify-center hover:bg-gray-50 hover:border-[#38b2ac] transition hover:shadow-md text-sm font-semibold text-[#1a365d] bg-white border-gray-200 border rounded-lg pt-3 pr-6 pb-3 pl-6 shadow-sm" href="#eligibility">
                    Start Your Process
                    <iconify-icon className="ml-2 text-lg text-[#38b2ac]" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-[#1a365d] text-white">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl font-bold mb-8">This is <span className="text-[#ff6b6b]">NOT</span> for everyone.</h2>
<p className="text-xl text-blue-100 mb-12">We are extremely selective because we guarantee results. You must be:</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
<div className="bg-white/10 backdrop-blur rounded-lg p-5 flex items-start gap-4 border border-white/10 hover:bg-white/15 transition">
<iconify-icon className="text-[#38b2ac] text-2xl flex-shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-lg font-medium">Generating $30K+ monthly revenue consistently</span>
</div>
<div className="bg-white/10 backdrop-blur rounded-lg p-5 flex items-start gap-4 border border-white/10 hover:bg-white/15 transition">
<iconify-icon className="text-[#38b2ac] text-2xl flex-shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-lg font-medium">Selling services with $5K+ price points</span>
</div>
<div className="bg-white/10 backdrop-blur rounded-lg p-5 flex items-start gap-4 border border-white/10 hover:bg-white/15 transition">
<iconify-icon className="text-[#38b2ac] text-2xl flex-shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-medium text-lg">Ready to commit 2-3 hours weekly for strategy</span>
</div>
<div className="bg-white/10 backdrop-blur rounded-lg p-5 flex items-start gap-4 border border-white/10 hover:bg-white/15 transition">
<iconify-icon className="text-[#38b2ac] text-2xl flex-shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-medium text-lg">Able to handle an influx of 8-10 qualified prospects</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="calculator">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="bg-[#f7fafc] rounded-2xl p-8 border border-gray-200 shadow-sm">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-[#ff6b6b] text-2xl" icon="solar:danger-circle-linear"></iconify-icon>
<h3 className="text-xl font-bold text-[#1a365d]">Cost of Inaction</h3>
</div>
<p className="text-sm text-gray-500 mb-8">How much revenue are you losing each month without predictable pipeline?</p>
<div className="space-y-6">
<div>
<label className="flex justify-between text-sm font-semibold text-[#1a365d] mb-2">
                                Average Deal Size
                                <span className="text-[#38b2ac]">$<span id="deal-size-val">10,000</span></span>
</label>
<input id="deal-size" max="100000" min="5000" step="5000" type="range" value="10000"/>
</div>
<div>
<label className="flex justify-between text-sm font-semibold text-[#1a365d] mb-2">
                                Deals Lost to Competitors (Monthly)
                                <span className="text-[#38b2ac]"><span id="lost-deals-val">2</span></span>
</label>
<input id="lost-deals" max="20" min="1" step="1" type="range" value="2"/>
</div>
</div>
<div className="mt-8 pt-8 border-t border-gray-200">
<p className="text-center text-gray-600 font-medium">You're potentially losing</p>
<p className="text-center text-4xl font-extrabold text-[#ff6b6b] mt-2">$<span id="loss-total">40,000</span></p>
<p className="text-center text-sm text-gray-400 mt-1">every 60 days</p>
</div>
</div>

<div className="bg-[#1a365d] rounded-2xl p-8 border border-[#1a365d] shadow-xl text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-40 h-40 bg-[#38b2ac] rounded-full blur-[80px] opacity-20"></div>
<div className="flex items-center gap-2 mb-6 relative z-10">
<iconify-icon className="text-[#38b2ac] text-2xl" icon="solar:wallet-money-linear"></iconify-icon>
<h3 className="text-xl font-bold text-white">Potential ROI</h3>
</div>
<p className="text-sm text-blue-200 mb-8 relative z-10">Based on closing just 2 of the 10 guaranteed qualified calls.</p>
<div className="space-y-6 relative z-10">
<div>
<label className="flex justify-between text-sm font-semibold text-white mb-2">
                                Your Average Client Value (LTV)
                                <span className="text-[#38b2ac]">$<span id="ltv-val">15,000</span></span>
</label>
<input id="ltv" max="100000" min="5000" step="1000" type="range" value="15000"/>

<style>
                                #ltv::-webkit-slider-runnable-track { background: rgba(255,255,255,0.2); }
                            </style>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/10 relative z-10">
<div className="flex justify-between items-end mb-2">
<span className="text-blue-200 text-sm">Investment (10 calls @ $300)</span>
<span className="font-mono">$3,000</span>
</div>
<div className="flex justify-between items-end mb-6">
<span className="text-blue-200 text-sm">Revenue (2 closes)</span>
<span className="font-mono text-[#38b2ac] font-bold">$<span id="roi-rev">30,000</span></span>
</div>
<div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm border border-white/10">
<p className="text-sm font-medium text-white">Your Return on Investment</p>
<p className="text-4xl font-extrabold text-[#38b2ac] mt-1"><span id="roi-percent">900</span>%</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#f7fafc]" id="comparison">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-[#1a365d]">Us vs Traditional Agencies</h2>
</div>
<div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-12">
<div className="grid grid-cols-3 bg-[#1a365d] text-white p-4 sm:p-6 text-sm sm:text-base font-bold">
<div className="col-span-1">Feature</div>
<div className="col-span-1 text-[#81e6d9] text-center" style={{}}>Authority Pen</div>
<div className="col-span-1 text-center text-gray-400">Typical Agency</div>
</div>
<div className="divide-y divide-gray-100 text-sm sm:text-base">
<div className="grid grid-cols-3 sm:p-6 hover:bg-gray-50 transition pt-4 pr-4 pb-4 pl-4">
<div className="font-medium text-[#1a365d]">Pricing Model</div>
<div className="text-center font-semibold text-[#38b2ac]">Pay per call ($300)</div>
<div className="text-center text-gray-500">Monthly Retainer</div>
</div>
<div className="grid grid-cols-3 p-4 sm:p-6 hover:bg-gray-50 transition">
<div className="font-medium text-[#1a365d]">Content Creation</div>
<div className="text-center font-semibold text-[#38b2ac]">Personal Strategic Download</div>
<div className="text-gray-500 text-center" style={{}}>Junior Writers / Templates</div>
</div>
<div className="grid grid-cols-3 p-4 sm:p-6 hover:bg-gray-50 transition">
<div className="font-medium text-[#1a365d]">Outreach Strategy</div>
<div className="text-center font-semibold text-[#38b2ac]">Targeted Relationship Building</div>
<div className="text-center text-gray-500">Spray-and-pray</div>
</div>
<div className="grid grid-cols-3 p-4 sm:p-6 hover:bg-gray-50 transition">
<div className="font-medium text-[#1a365d]">Risk</div>
<div className="text-center font-semibold text-[#38b2ac]">100% On Us (Pay on Delivery)</div>
<div className="text-center text-gray-500">100% On You</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="whats-included">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-bold text-[#1a365d] tracking-tight">The Complete Authority Ecosystem</h2>
<p className="mt-4 text-lg text-gray-600">Everything we do to guarantee your 8-10 qualified calls.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
<div className="w-12 h-12 bg-[#e6fffa] rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#38b2ac]" icon="solar:user-id-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1a365d] mb-6">Profile Optimisation</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">Complete LinkedIn profile rewrite positioned for your ideal clients</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">Professional headline that makes prospects want to learn more</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">About section that reads like a sales page for your services</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">Strategic keyword placement for maximum visibility</span>
</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
<div className="w-12 h-12 bg-[#e6fffa] rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#38b2ac]" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1a365d] mb-6">Content Creation</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">5 strategic posts per week written in your authentic voice</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">Content calendar planned 30 days in advance</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">Industry-specific topics that attract your ideal prospects</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">Engagement monitoring and response management</span>
</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
<div className="w-12 h-12 bg-[#e6fffa] rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#38b2ac]" icon="solar:magnet-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1a365d] mb-6">Lead Generation</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">100+ personalized connection requests monthly to qualified prospects</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">Custom outreach messages tailored to each prospect</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">Follow-up sequences that turn connections into conversations</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">Lead qualification using proven frameworks</span>
</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300 lg:col-start-1 lg:ml-auto">

<div className="w-12 h-12 bg-[#e6fffa] rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#38b2ac]" icon="solar:hand-shake-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1a365d] mb-6">Sales Conversion</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">Prospect research to identify buying signals</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">Conversation management that moves prospects toward booking calls</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">Calendar integration for seamless call scheduling</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">Pre-call briefings on each qualified prospect</span>
</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300 lg:col-start-2 lg:mr-auto lg:col-span-2 lg:w-[calc(50%-1rem)]">
<div className="w-12 h-12 bg-[#e6fffa] rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#38b2ac]" icon="solar:chart-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1a365d] mb-6">Reporting &amp; Optimisation</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">Weekly performance dashboards tracking all key metrics</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">Monthly strategy calls to optimize based on results</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">Real-time notifications when prospects want to book calls</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#38b2ac] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-600">Continuous testing and improvement of messaging</span>
</li>
</ul>
</div>
</div>

<div className="text-center mt-12">
<a className="group inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-bold text-white transition-all transform bg-[#38b2ac] rounded-lg shadow-xl shadow-[#38b2ac]/30 hover:bg-[#319795] hover:-translate-y-1" href="#eligibility">
    See if you qualify for the system
    <iconify-icon className="ml-2 text-xl transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold text-[#1a365d] text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">

<div className="bg-gray-50 rounded-lg shadow-sm border border-gray-100 overflow-hidden">
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span className="text-[#1a365d]">How do you guarantee 8-10 qualified calls?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-[#38b2ac]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-gray-600 px-6 pb-6 text-sm leading-relaxed">
                            Through our Authority Extraction methodology and targeted outreach to your exact ICP. If we don't deliver, you pay nothing. We only succeed if you succeed.
                        </div>
</details>
</div>

<div className="bg-gray-50 rounded-lg shadow-sm border border-gray-100 overflow-hidden">
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span className="text-[#1a365d]">What makes this different from other LinkedIn agencies?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-[#38b2ac]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-gray-600 px-6 pb-6 text-sm leading-relaxed">
                            I personally conduct every Strategic Download to capture your authentic voice, and you only pay for results • $300 per qualified call that shows up. No junior copywriters, no monthly burn.
                        </div>
</details>
</div>

<div className="bg-gray-50 rounded-lg shadow-sm border border-gray-100 overflow-hidden">
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span className="text-[#1a365d]">How much time do I need to invest?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-[#38b2ac]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-gray-600 px-6 pb-6 text-sm leading-relaxed">
                            Just 2-3 hours weekly for Strategic Downloads. I handle all content creation, posting, and outreach.
                        </div>
</details>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-gray-100">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="relative mx-auto lg:mx-0">
<div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#38b2ac] shadow-2xl relative z-10">

<div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
<iconify-icon className="text-6xl" icon="solar:user-linear"></iconify-icon>
</div>
</div>

<div className="absolute top-10 -left-6 w-24 h-24 bg-[#ff6b6b]/10 rounded-full blur-xl z-0"></div>
<div className="absolute bottom-4 -right-6 w-32 h-32 bg-[#38b2ac]/20 rounded-full blur-xl z-0"></div>

<div className="-bottom-6 -translate-x-1/2 z-20 flex gap-3 bg-white w-max border-gray-100 border rounded-xl pt-3 pr-6 pb-3 pl-6 absolute left-1/2 shadow-lg items-center">
<div className="bg-[#e6fffa] p-2 rounded-lg text-[#38b2ac]">
<iconify-icon className="text-xl" icon="solar:chart-2-linear"></iconify-icon>
</div>
<div className="">
<p className="uppercase text-xs font-medium text-gray-500">Methodology</p>
<p className="text-[#1a365d] font-bold">100% Performance</p>
</div>
</div>
</div>
<div className="">
<h2 className="text-sm font-bold text-[#ff6b6b] uppercase tracking-wider mb-2">The Expert Behind The System</h2>
<h3 className="text-3xl font-bold text-[#1a365d] mb-6">Meet Khadijah Akintoye</h3>
<div className="space-y-4 text-gray-600 text-lg leading-relaxed">
<p className="">I run a LinkedIn ghostwriting and lead generation system designed to turn authority-driven content and targeted outreach into consistent sales conversations. Unlike typical agencies that rely on cookie-cutter templates, I personally conduct every strategy session to ensure your authentic voice comes through.</p>
<p className="">My system is designed to help founders break free from the referral roller coaster and build a systematic LinkedIn pipeline that runs consistently in the background.</p>
<p className="font-medium text-[#1a365d] italic border-l-4 border-[#38b2ac] pl-4 mt-4">
                            "Authenticity doesn't mean doing it yourself. It means having a system that captures your genius."
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1a365d] relative overflow-hidden text-center px-4" id="eligibility">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="relative z-10 max-w-4xl mx-auto">
<h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Scale Your Pipeline?</h2>
<p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Stop wasting time on content that doesn't convert. Book a call to see if you qualify.</p>

<div className="mt-10 bg-white rounded-xl overflow-hidden shadow-2xl mx-auto max-w-4xl ring-4 ring-white/10">
<div className="calendly-inline-widget" data-processed="true" data-url="https://calendly.com/khadijahakintoye123/ghostwriting-audit" style={{position: 'relative', height: '700px'}}><div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div><div className="calendly-bounce3"></div></div><iframe className="" frameborder="0" height="100%" src="https://calendly.com/khadijahakintoye123/ghostwriting-audit?embed_domain=&amp;embed_type=Inline" title="Select a Date &amp; Time - Calendly" width="100%"></iframe></div>

</div>
<p className="mt-8 text-sm text-[#81e6d9] font-medium opacity-90">Completely risk-free. We don't get paid until you book your first qualified meeting.</p>
</div>
</section>

<footer className="bg-white py-12 border-t border-gray-100 mb-16 lg:mb-0">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
<div className="bg-[#f0fff4] border border-[#c6f6d5] rounded-xl p-6 max-w-2xl w-full text-center mb-10">
<div className="flex items-center justify-center gap-2 mb-2 text-[#2f855a] font-bold uppercase tracking-wide text-xs">
<iconify-icon icon="solar:shield-check-bold"></iconify-icon> Zero Risk Guarantee
                </div>
<p className="text-[#1a365d] text-sm leading-relaxed">
                    No setup fees, no retainers, no management costs. You only pay $300 per qualified call that shows up.
                </p>
</div>
<div className="flex items-center gap-2 mb-6">
<span className="font-bold text-[#1a365d]">Authority Pen</span>
</div>
<p className="text-sm text-gray-400" style={{}}>© 2024 Khadijah Akintoye. All rights reserved.</p>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-200 lg:hidden z-50 flex items-center justify-between shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
<div className="">
<p className="text-xs text-gray-500 font-medium">Pay only on results</p>
<p className="text-sm font-bold text-[#1a365d]">8-10 Qualified Calls Guaranteed</p>
</div>
<a className="text-sm font-bold text-white bg-[#38b2ac] rounded-lg pt-2.5 pr-6 pb-2.5 pl-6 shadow-lg" href="#eligibility">Book Your Authority Session Today</a>
</div>



    </>
  );
}
