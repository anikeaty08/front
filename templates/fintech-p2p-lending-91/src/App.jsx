import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
DEFAULT: '#d2fb41',
dark: '#c1eb30'
},
dark: '#0a0a0a'
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="absolute top-0 left-0 w-full z-50 text-white/90 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto right-0">
<div className="flex items-center gap-2">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10" stroke="#d2fb41" stroke-dasharray="45 15" strokeWidth="4"></circle>
<circle cx="12" cy="12" fill="#d2fb41" r="4"></circle>
</svg>
<span className="font-medium tracking-tight text-lg text-white">LENDER MARKET</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="hover:text-white transition-colors" href="#">About Us</a>
<a className="hover:text-white transition-colors" href="#">Loan Listings</a>
<a className="hover:text-white transition-colors" href="#">Loan Originators</a>
<a className="hover:text-white transition-colors" href="#">News &amp; Blog</a>
<a className="hover:text-white transition-colors" href="#">Contact Us</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-white transition-colors px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium bg-brand text-gray-900 px-5 py-2 rounded-full hover:bg-brand-dark transition-colors" href="#">Sign up</a>
</div>
</nav>

<section className="relative h-[80vh] min-h-[600px] flex items-center bg-gray-900 overflow-hidden">
<img alt="Hero background" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<h1 className="text-5xl md:text-7xl text-white font-medium tracking-tight leading-[1.1] max-w-3xl">
                Invest in Loans.<br/>
                Earn Up to 18% Returns.
            </h1>
<p className="mt-6 text-lg text-gray-300 max-w-xl font-normal leading-relaxed">
                Across Europe, 17,000+ investors have found a smarter way to earn—investing in secured consumer loans that offer both safety and steady passive income opportunities.
            </p>
<div className="mt-10">
<a className="inline-flex items-center justify-center bg-brand text-gray-900 px-8 py-3.5 rounded-full font-medium hover:bg-brand-dark transition-colors text-base" href="#">
                    Start Investing Now
                </a>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-b border-gray-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">Invest Lender Market</p>
</div>
<div className="grid lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-3">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Estimate Your Future Returns</p>
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-6 leading-snug">Use the calculator to estimate how much you could earn based on your investment amount, and expected return rate.</h2>
</div>

<div className="lg:col-span-5 relative">
<div className="bg-brand rounded-3xl p-6 shadow-sm">

<div className="bg-white rounded-2xl p-6 mb-6 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
<i className="w-5 h-5 text-gray-600" data-lucide="lock" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs text-gray-500 font-normal">Future value in 5 years</p>
<p className="text-2xl font-medium tracking-tight text-gray-900">€18,449.54</p>
</div>
</div>
</div>

<div className="space-y-4 mb-8 px-2">
<div className="flex justify-between items-center border-b border-black/10 pb-3">
<span className="text-sm font-normal text-gray-800">Earned return</span>
<span className="text-base font-medium text-gray-900">€9,949.54</span>
</div>
<div className="flex justify-between items-center border-b border-black/10 pb-3">
<span className="text-sm font-normal text-gray-800">Average annual return rate</span>
<span className="text-base font-medium text-gray-900">15.6%</span>
</div>
<div className="flex justify-between items-center border-b border-black/10 pb-3">
<span className="text-sm font-normal text-gray-800">Investment Term</span>
<span className="text-base font-medium text-gray-900">36 months</span>
</div>

<div className="pt-4 pb-2">
<div className="flex justify-between items-center mb-3">
<span className="text-sm font-normal text-gray-800">Initial investment</span>
<span className="text-base font-medium text-gray-900">€8,500.00</span>
</div>
<div className="relative h-1.5 bg-black/10 rounded-full w-full">
<div className="absolute top-0 left-0 h-full bg-gray-900 rounded-full w-[45%]"></div>
<div className="absolute top-1/2 left-[45%] -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 rounded-full border-2 border-brand shadow-sm"></div>
</div>
</div>
</div>
<button className="w-full bg-gray-900 text-white rounded-full py-4 text-sm font-medium hover:bg-gray-800 transition-colors">
                            Start Investing
                        </button>
</div>
</div>

<div className="lg:col-span-4 space-y-8 pt-8 lg:pt-0 pl-0 lg:pl-8">
<div className="flex gap-4">
<i className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-base text-gray-600 font-normal leading-relaxed">Displays the total estimated value of your investment over time (e.g. €18,449.54 in 5 years).</p>
</div>
<div className="flex gap-4">
<i className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-base text-gray-600 font-normal leading-relaxed">Shows how much you'll earn beyond your initial investment (e.g. €9,949.54 profit).</p>
</div>
<div className="flex gap-4">
<i className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-base text-gray-600 font-normal leading-relaxed">Enables easy input of the starting investment amount (e.g. €8,500.00).</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<p className="text-sm font-medium text-gray-500 uppercase tracking-widest">High Returns, Low Risk</p>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Complement Your Portfolio With High-Yield Returns</p>
<h2 className="text-4xl font-medium tracking-tight text-gray-900 mb-6 leading-tight">Diversify your investments with Lendermarket and earn high-yield returns. Take advantage of secured P2P loans and a buyback guarantee to maximise your portfolio's growth.</h2>
<div className="flex flex-wrap items-center gap-4 mt-8 mb-6">
<a className="inline-flex items-center justify-center bg-brand text-gray-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-brand-dark transition-colors" href="#">
                            Create Account
                        </a>
<a className="inline-flex items-center justify-center bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors" href="#">
                            Learn More
                        </a>
</div>
<p className="text-sm text-gray-500 font-normal">Buyback Guarantee Protects Your Investments</p>
</div>
<div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[500px]">
<img alt="Investor looking at phone" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

<div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white w-48 shadow-xl">
<p className="text-xs font-normal text-white/80 mb-1">This Month Return</p>
<p className="text-2xl font-medium tracking-tight">+€1,247</p>
</div>
<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white w-48 shadow-xl">
<p className="text-xs font-normal text-white/80 mb-1">Average Return</p>
<p className="text-2xl font-medium tracking-tight">15.6%</p>
</div>
<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white w-48 shadow-xl">
<p className="text-xs font-normal text-white/80 mb-1">Active Users</p>
<p className="text-2xl font-medium tracking-tight">17K+</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-right mb-16 border-b border-gray-200 pb-4">
<p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Diversify Across Wide Variety of Loan Listings</p>
</div>
<div className="grid lg:grid-cols-12 gap-8 items-stretch">

<div className="lg:col-span-4 flex flex-col">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Trusted Loan Originators</p>
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-8 leading-snug">Invest in consumer loans from trusted, well-established loan originators, carefully vetted for reliability and performance.</h2>
<div className="bg-brand rounded-3xl p-8 mt-auto relative overflow-hidden">

<div className="absolute top-0 left-8 right-8 h-1 bg-gray-900 rounded-b-md"></div>
<div className="flex items-start justify-between mb-6 pt-4">
<h3 className="text-2xl font-medium tracking-tight text-gray-900">Creditstar Group</h3>
<span className="bg-black/10 text-gray-900 text-xs px-2.5 py-1 rounded-full font-medium">15.6%</span>
</div>
<p className="text-sm text-gray-800 font-normal mb-8 leading-relaxed">
                            Creditstar Group, a leading provider of consumer financial services in Europe, offers unsecured online consumer loans with flexible repayment terms and a commitment to responsible lending practices.
                        </p>
<div className="flex items-center justify-center my-6">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
<div className="w-4 h-4 bg-brand rounded-full"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-8">
<div>
<p className="text-3xl font-medium tracking-tight text-gray-900">14%</p>
<p className="text-xs text-gray-700 font-normal mt-1">Average Interest Rate</p>
</div>
<div>
<p className="text-3xl font-medium tracking-tight text-gray-900">5%</p>
<p className="text-xs text-gray-700 font-normal mt-1">Skin In The Game</p>
</div>
</div>
<button className="w-full bg-white text-gray-900 rounded-full py-3.5 text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
                            Browse loan listings
                        </button>
</div>
</div>

<div className="lg:col-span-8 relative rounded-3xl overflow-hidden bg-gray-900 min-h-[500px]">
<img alt="Cityscape" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transform rotate-45">
<div className="w-4 h-4 bg-gray-900 rounded-sm transform -rotate-45"></div>
</div>
<span className="text-3xl font-medium tracking-tight text-white">creditstar</span>
</div>
<div className="flex items-end justify-between">
<p className="text-white text-5xl font-normal tracking-tight"><span className="opacity-50">02</span>/08</p>
<div className="flex flex-col gap-3">
<div className="bg-white rounded-2xl p-4 flex items-center gap-4 min-w-[240px] shadow-lg">
<div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center text-brand-dark shrink-0">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs text-gray-500 font-normal">Registered Customer</p>
<p className="text-xl font-medium tracking-tight text-gray-900">1.4 million</p>
</div>
</div>
<div className="bg-brand rounded-2xl p-4 flex items-center gap-4 min-w-[240px] shadow-lg">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-900 shrink-0">
<i className="w-6 h-6" data-lucide="euro" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs text-gray-800 font-normal">Total Assets Creditstar</p>
<p className="text-xl font-medium tracking-tight text-gray-900">€ 367.0 M+</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 border-b border-gray-100 pb-4">
<p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Invest Smarter, Earn More</p>
</div>
<div className="grid lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-4 sticky top-24">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Why Choose Lendermarket?</p>
<h2 className="text-3xl font-medium tracking-tight text-gray-900 leading-snug">Our platform offers unique advantages for smart investors seeking better returns</h2>
</div>
<div className="lg:col-span-8 grid md:grid-cols-2 gap-x-12 gap-y-16">

<div>
<div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-gray-900" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">Up to 18% Annual Returns</h3>
<p className="text-base text-gray-600 font-normal leading-relaxed">
                            Outperform traditional savings accounts, stocks, bonds by accessing secured consumer loans with attractive yields, flexible terms, and automated investing — all backed by a buyback guarantee.
                        </p>
</div>

<div>
<div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-gray-900" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">Auto-Invest Tool</h3>
<p className="text-base text-gray-600 font-normal leading-relaxed">
                            Save time and reduce manual effort by using automated investing strategies that help you stay consistently diversified, optimize returns, and reinvest earnings effortlessly.
                        </p>
</div>

<div>
<div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-gray-900" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">EU-Based and Regulated</h3>
<p className="text-base text-gray-600 font-normal leading-relaxed">
                            Lendermarket is fully licensed under the European Crowdfunding Service Provider Regulation (ECSPR) by the Central Bank of Ireland, investor protection, and a secure investing environment.
                        </p>
</div>

<div>
<div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-gray-900" data-lucide="euro" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">Zero Investor Fees</h3>
<p className="text-base text-gray-600 font-normal leading-relaxed">
                            Enjoy full transparency with no setup costs, service charges, or withdrawal fees—so you can keep more of your earnings and maximize your investment returns without hidden deductions.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0d0d0d] text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 border-b border-white/10 pb-4">
<p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Live Platform Statistics</p>
</div>
<div className="mb-12">
<p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">Trusted By Thousands Of Investors</p>
<h2 className="text-3xl font-medium tracking-tight text-white leading-snug max-w-2xl">Real-time performance metrics that demonstrate our platform's growth and reliability.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex items-start gap-4 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-full border border-brand/30 flex items-center justify-center text-brand shrink-0">
<i className="w-5 h-5" data-lucide="euro" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs text-gray-400 font-normal mb-1">Total Financed</p>
<p className="text-2xl font-medium tracking-tight">€45,000,000</p>
</div>
</div>

<div className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex items-start gap-4 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0">
<i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs text-gray-400 font-normal mb-1">Active Investors</p>
<p className="text-2xl font-medium tracking-tight">17,000+</p>
</div>
</div>

<div className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex items-start gap-4 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0">
<i className="w-5 h-5" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs text-gray-400 font-normal mb-1">Interest Paid</p>
<p className="text-2xl font-medium tracking-tight">€6,000,000+</p>
</div>
</div>

<div className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex items-start gap-4 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-full border border-brand/30 flex items-center justify-center text-brand shrink-0">
<i className="w-5 h-5" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs text-gray-400 font-normal mb-1">Average Return</p>
<p className="text-2xl font-medium tracking-tight">15.6%</p>
</div>
</div>

<div className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex items-start gap-4 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0">
<i className="w-5 h-5" data-lucide="building" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs text-gray-400 font-normal mb-1">Loan Originators</p>
<p className="text-2xl font-medium tracking-tight">10+</p>
</div>
</div>

<div className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex items-start gap-4 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0">
<i className="w-5 h-5" data-lucide="wallet" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs text-gray-400 font-normal mb-1">Earned by investors</p>
<p className="text-2xl font-medium tracking-tight">33,000,000</p>
</div>
</div>

<div className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex items-start gap-4 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-full border border-brand/30 flex items-center justify-center text-brand shrink-0">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs text-gray-400 font-normal mb-1">Registered users</p>
<p className="text-2xl font-medium tracking-tight">20,000+</p>
</div>
</div>

<div className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex items-start gap-4 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-full border border-brand/30 flex items-center justify-center text-brand shrink-0">
<i className="w-5 h-5" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs text-gray-400 font-normal mb-1">Total Countries</p>
<p className="text-2xl font-medium tracking-tight">8+</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-b border-gray-200 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 border-b border-gray-200 pb-4">
<p className="text-sm font-medium text-gray-500 uppercase tracking-widest">500+ Reviews On Trustpilot</p>
</div>
<div className="flex flex-col lg:flex-row gap-16 items-start">

<div className="lg:w-1/3 shrink-0">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">What Our Investors Say</p>
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-8 leading-snug">Real feedback from investors who are earning passive income on our platform</h2>
<div className="flex items-center gap-2 mb-12">
<div className="flex gap-1 text-brand">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star-half" strokeWidth="1"></i>
</div>
<span className="text-sm text-gray-600 font-normal">4.3 stars</span>
</div>

<div className="w-full h-1 bg-gray-200 rounded-full relative">
<div className="absolute left-0 top-0 h-full w-1/3 bg-gray-900 rounded-full"></div>
</div>
</div>

<div className="lg:w-2/3 w-full flex gap-6 overflow-x-auto hide-scrollbar pb-8 -mb-8 snap-x">

<div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm min-w-[320px] max-w-[380px] shrink-0 snap-start flex flex-col">
<div className="flex items-center gap-4 mb-6">
<img alt="Marcus" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<p className="text-base font-medium text-gray-900">Marcus Brown</p>
<p className="text-xs text-gray-500 font-normal">Netherlands</p>
</div>
</div>
<div className="flex justify-center mb-6">
<div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center">
<i className="w-3 h-3 text-gray-900" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
<p className="text-base text-gray-600 font-normal leading-relaxed flex-grow">
                            Lendermarket's Auto-Invest feature took the guesswork out of investing. My funds across various loan originators, helping me stay consistent.<br/><br/>
                            The Auto-Invest feature diversify easily across different loan originators. I've earned consistent returns for over 12 months now.
                        </p>
<div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-50">
<span className="bg-brand/20 text-gray-900 text-xs px-3 py-1 rounded-full font-medium">16.2% avg return</span>
<div className="flex gap-0.5 text-brand">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm min-w-[320px] max-w-[380px] shrink-0 snap-start flex flex-col">
<div className="flex items-center gap-4 mb-6">
<img alt="Marco" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<p className="text-base font-medium text-gray-900">Marco Carlos</p>
<p className="text-xs text-gray-500 font-normal">Germany</p>
</div>
</div>
<div className="flex justify-center mb-6">
<div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center">
<i className="w-3 h-3 text-gray-900" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
<p className="text-base text-gray-600 font-normal leading-relaxed flex-grow">
                            Much better returns than my savings account. The monthly interest payments are reliable and the dashboard makes tracking easy.<br/><br/>
                            The interest payments arrive the platform's dashboard makes it simple to monitor my investments and see how my returns are growing.
                        </p>
<div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-50">
<span className="bg-brand/20 text-gray-900 text-xs px-3 py-1 rounded-full font-medium">16.2% avg return</span>
<div className="flex gap-0.5 text-brand">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 text-gray-200 fill-current" data-lucide="star" strokeWidth="1"></i>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm min-w-[320px] max-w-[380px] shrink-0 snap-start flex flex-col">
<div className="flex items-center gap-4 mb-6">
<img alt="Sarah" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<p className="text-base font-medium text-gray-900">David Smith</p>
<p className="text-xs text-gray-500 font-normal">UK</p>
</div>
</div>
<div className="flex justify-center mb-6">
<div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center">
<i className="w-3 h-3 text-gray-900" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
<p className="text-base text-gray-600 font-normal leading-relaxed flex-grow">
                            Lendermarket's Auto-Invest feature took the guesswork out of investing. My funds across various loan originators, helping me stay consistent.
                        </p>
<div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-50">
<span className="bg-brand/20 text-gray-900 text-xs px-3 py-1 rounded-full font-medium">16.2% avg return</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-b border-gray-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 border-b border-gray-200 pb-4">
<p className="text-sm font-medium text-gray-500 uppercase tracking-widest">€33M+ Earned by Investors</p>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Double Your Money In Less Than 5 Years</p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6 leading-snug">Our platform connects you directly to a diverse portfolio of high-yield consumer loans. With returns that outperform savings accounts and stock markets, Lendermarket helps you grow your wealth faster — securely and efficiently.</h2>
<div className="flex flex-wrap items-center gap-4 mt-8 mb-4">
<a className="inline-flex items-center justify-center bg-brand text-gray-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-brand-dark transition-colors" href="#">
                            Start Investing
                        </a>
<a className="inline-flex items-center justify-center bg-transparent border border-gray-300 text-gray-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors" href="#">
                            Learn More
                        </a>
</div>
<p className="text-sm text-gray-500 font-normal">Grow your wealth faster by investing in high-yield consumer loans.</p>
</div>
<div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-sm">
<img alt="Two people discussing" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-brand rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-64 h-64 bg-white/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-white/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6 leading-tight">Join thousands of investors growing their wealth with secure and consistent loan returns.</h2>
<p className="text-lg text-gray-800 font-normal mb-10">Start earning up to 18% annually with our regulated European investment platform.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 transition-colors shadow-sm" href="#">
                            Get Started
                        </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-gray-900/20 text-gray-900 px-8 py-4 rounded-full text-base font-medium hover:bg-black/5 transition-colors" href="#">
                            Start Investing
                        </a>
</div>
<p className="text-sm text-gray-700 font-normal mt-6">Join 17,000+ investors • Takes less than 2 minutes to sign up</p>
</div>
</div>
</div>
</section>

<footer className="bg-gray-100 pt-20 pb-10 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<h4 className="text-sm font-medium text-gray-900 mb-6">Address</h4>
<div className="space-y-4 text-sm text-gray-600 font-normal leading-relaxed">
<p><strong className="font-medium text-gray-900">Germany:</strong> Quartier Potsdamer Platz, Haus 2, Potsdamer Platz 10, 10785 Berlin.</p>
<p><strong className="font-medium text-gray-900">Spain:</strong> Paseo de la Castellana 141, 5ª planta, 28046 Madrid.</p>
<p><strong className="font-medium text-gray-900">France:</strong> Tour CB21, 16 Place de l'Iris, La Défense, 92400, Courbevoie, Paris.</p>
<p><strong className="font-medium text-gray-900">Estonia:</strong> Mayeri Ärikvartal, Paldiski maantee 29, 10612 Tallinn.</p>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-6">Company</h4>
<ul className="space-y-3 text-sm text-gray-600 font-normal">
<li><a className="hover:text-gray-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">My Investments</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">News &amp; Blog</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-6">Product</h4>
<ul className="space-y-3 text-sm text-gray-600 font-normal">
<li><a className="hover:text-gray-900 transition-colors" href="#">How It Works</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Auto-Invest</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Loan Listings</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Loan Originators</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-6">Investing</h4>
<ul className="space-y-3 text-sm text-gray-600 font-normal">
<li><a className="hover:text-gray-900 transition-colors" href="#">Investor Hub</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Refer a Friend</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Affiliate Program</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">For Loan Originators</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Lendermarket Risk Rating</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-6">Connect</h4>
<ul className="space-y-3 text-sm text-gray-600 font-normal">
<li><a className="hover:text-gray-900 transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i> X.com</a></li>
<li><a className="hover:text-gray-900 transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i> Instagram</a></li>
<li><a className="hover:text-gray-900 transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i> Facebook</a></li>
<li><a className="hover:text-gray-900 transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i> LinkedIn</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 gap-6">
<div className="flex items-center gap-2">
<svg fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10" stroke="#c1eb30" stroke-dasharray="45 15" strokeWidth="4"></circle>
<circle cx="12" cy="12" fill="#c1eb30" r="4"></circle>
</svg>
<span className="font-medium tracking-tight text-base text-gray-900">LENDER MARKET</span>
</div>
<div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-normal">
<a className="hover:text-gray-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-gray-900 transition-colors" href="#">Terms of Use</a>
<a className="hover:text-gray-900 transition-colors" href="#">Cookie Consent</a>
</div>
<div className="text-sm text-gray-500 font-normal text-center md:text-right">
                    © 2025 Lendermarket Ltd. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
