import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.15, // Trigger when 15% of the element is visible
                rootMargin: "0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                    }
                });
            }, observerOptions);

            const sections = document.querySelectorAll('.reveal-section');
            sections.forEach(section => {
                observer.observe(section);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 left-0 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
<div className="max-w-[1792px] mx-auto px-6 h-[80px] flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
<iconify-icon icon="lucide:car-front" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="font-heading font-bold text-2xl tracking-tight text-neutral-900">GIGI<span className="text-red-500">.</span></span>
</a>

<div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
<a className="text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-red-500 transition-colors" href="#">Home</a>
<a className="text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-red-500 transition-colors" href="#inventory">Inventory</a>
<a className="text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-red-500 transition-colors" href="#financing">Financing</a>
<a className="text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-red-500 transition-colors" href="#imports">Import</a>
</div>

<div className="hidden lg:flex items-center gap-4">
<a className="px-6 py-3 bg-neutral-900 text-white font-semibold rounded-lg text-xs tracking-widest uppercase hover:bg-red-500 transition-colors duration-300" href="#contact">
                    Contact Us
                </a>
</div>

<button className="lg:hidden text-neutral-900 hover:text-red-500 transition-colors">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</nav>

<header className="relative h-screen min-h-[700px] w-full overflow-hidden bg-neutral-900">

<div className="absolute inset-0 z-0">

<img alt="Range Rover Sport" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-90"></div>
</div>

<div className="absolute inset-0 z-10 flex items-end justify-start pointer-events-none pb-24 md:pb-32">
<div className="w-full px-6 md:px-20 pointer-events-auto">
<div className="max-w-[1792px] mx-auto">
<div className="max-w-2xl">
<div className="hero-animate">
<span className="inline-flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                Est. 2018 • Nairobi
                            </span>
</div>
<h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[0.9] text-white mb-8 hero-animate delay-100">
                            Drive Your<br/>
<span className="text-red-500">Dream</span> Today.
                        </h1>
<p className="text-neutral-300 font-light text-sm md:text-base leading-relaxed mb-10 max-w-lg hero-animate delay-200">
                            Premium imports, verified trade-ins, and bespoke financing. Experience the future of luxury car ownership in Kenya.
                        </p>
<div className="flex flex-col sm:flex-row items-start gap-5 hero-animate delay-300">
<a className="inline-flex items-center justify-center px-10 py-5 bg-red-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-all border border-red-600 w-full sm:w-auto" href="#inventory">
                                View Inventory
                            </a>
<a className="inline-flex items-center justify-center px-10 py-5 bg-transparent text-white text-xs font-bold uppercase tracking-widest border border-white hover:bg-white hover:text-neutral-900 transition-all w-full sm:w-auto" href="#financing">
                                Check Rates
                            </a>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="bg-red-600 text-white py-4 overflow-hidden border-y border-red-700">
<div className="flex whitespace-nowrap gap-12 text-xs font-bold uppercase tracking-[0.15em]">

<span className="flex items-center gap-3"><iconify-icon icon="lucide:check-circle" width="14"></iconify-icon> Verified Imports</span>
<span className="flex items-center gap-3"><iconify-icon icon="lucide:zap" width="14"></iconify-icon> Fast Financing</span>
<span className="flex items-center gap-3"><iconify-icon icon="lucide:shield-check" width="14"></iconify-icon> 6 Month Warranty</span>
<span className="flex items-center gap-3"><iconify-icon icon="lucide:globe" width="14"></iconify-icon> Global Sourcing</span>
<span className="flex items-center gap-3"><iconify-icon icon="lucide:check-circle" width="14"></iconify-icon> Verified Imports</span>
<span className="flex items-center gap-3"><iconify-icon icon="lucide:zap" width="14"></iconify-icon> Fast Financing</span>
<span className="flex items-center gap-3"><iconify-icon icon="lucide:shield-check" width="14"></iconify-icon> 6 Month Warranty</span>
<span className="flex items-center gap-3"><iconify-icon icon="lucide:globe" width="14"></iconify-icon> Global Sourcing</span>
<span className="flex items-center gap-3"><iconify-icon icon="lucide:check-circle" width="14"></iconify-icon> Verified Imports</span>
<span className="flex items-center gap-3"><iconify-icon icon="lucide:zap" width="14"></iconify-icon> Fast Financing</span>
</div>
</div>

<section className="py-24 px-6 md:px-12 lg:px-20 bg-white border-b border-neutral-200 reveal-section" id="inventory">
<div className="max-w-[1792px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="font-heading font-semibold text-3xl md:text-5xl text-neutral-900 tracking-tight mb-4">Latest Arrivals</h2>
<p className="text-neutral-500 max-w-md text-sm md:text-base">Fresh from the port. Handpicked for quality and performance.</p>
</div>
<a className="group flex items-center gap-2 text-red-600 font-bold hover:text-red-700 transition-colors uppercase tracking-wider text-xs" href="#">
                    View Full Inventory <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-neutral-50 rounded-none overflow-hidden border border-neutral-200 hover:shadow-xl hover:border-red-200 transition-all duration-300">
<div className="relative aspect-[16/10] overflow-hidden">
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-neutral-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 z-10">New</span>
<img alt="Porsche" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-heading font-semibold text-xl text-neutral-900">Porsche 911 Carrera</h3>
<span className="text-xs font-bold text-neutral-400 border border-neutral-200 px-2 py-1">2021</span>
</div>
<p className="text-xs text-neutral-500 mb-6 font-mono">3.0L Twin-Turbo • PDK • 12k km</p>
<div className="flex items-center justify-between border-t border-neutral-200 pt-4">
<span className="font-bold text-lg text-neutral-900">KES 16.5M</span>
<button className="text-xs font-bold uppercase tracking-widest text-neutral-900 hover:text-red-600 transition-colors">
                                + Details
                            </button>
</div>
</div>
</div>

<div className="group bg-neutral-50 rounded-none overflow-hidden border border-neutral-200 hover:shadow-xl hover:border-red-200 transition-all duration-300">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Range Rover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-heading font-semibold text-xl text-neutral-900">Range Rover Sport</h3>
<span className="text-xs font-bold text-neutral-400 border border-neutral-200 px-2 py-1">2022</span>
</div>
<p className="text-xs text-neutral-500 mb-6 font-mono">HSE Dynamic • Diesel • 8k km</p>
<div className="flex items-center justify-between border-t border-neutral-200 pt-4">
<span className="font-bold text-lg text-neutral-900">KES 14.2M</span>
<button className="text-xs font-bold uppercase tracking-widest text-neutral-900 hover:text-red-600 transition-colors">
                                + Details
                            </button>
</div>
</div>
</div>

<div className="group bg-neutral-50 rounded-none overflow-hidden border border-neutral-200 hover:shadow-xl hover:border-red-200 transition-all duration-300">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Mercedes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-heading font-semibold text-xl text-neutral-900">Mercedes GLE 450</h3>
<span className="text-xs font-bold text-neutral-400 border border-neutral-200 px-2 py-1">2023</span>
</div>
<p className="text-xs text-neutral-500 mb-6 font-mono">AMG Line • Petrol • 2k km</p>
<div className="flex items-center justify-between border-t border-neutral-200 pt-4">
<span className="font-bold text-lg text-neutral-900">KES 12.8M</span>
<button className="text-xs font-bold uppercase tracking-widest text-neutral-900 hover:text-red-600 transition-colors">
                                + Details
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-20 bg-neutral-100 reveal-section" id="financing">
<div className="max-w-[1792px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="bg-white p-8 md:p-12 shadow-2xl border border-neutral-200">
<div className="flex items-center justify-between mb-8">
<h3 className="font-heading font-semibold text-xl text-neutral-900">Loan Calculator</h3>
<iconify-icon className="text-red-600" icon="lucide:calculator" width="24"></iconify-icon>
</div>
<div className="space-y-8">
<div>
<div className="flex justify-between mb-2">
<label className="block text-xs font-bold uppercase text-neutral-500">Vehicle Price</label>
<span className="font-mono font-bold text-neutral-900 text-sm">KES 5,000,000</span>
</div>
<input className="w-full" max="20000000" min="1000000" type="range" value="5000000"/>
</div>
<div>
<div className="flex justify-between mb-2">
<label className="block text-xs font-bold uppercase text-neutral-500">Down Payment</label>
<span className="font-mono font-bold text-neutral-900 text-sm">20%</span>
</div>
<input className="w-full" max="80" min="10" type="range" value="20"/>
</div>
<div>
<label className="block text-xs font-bold uppercase text-neutral-500 mb-3">Duration</label>
<div className="grid grid-cols-4 gap-2">
<button className="py-3 text-xs font-bold border border-neutral-200 bg-neutral-50 text-neutral-600 hover:bg-neutral-100">12M</button>
<button className="py-3 text-xs font-bold border border-red-500 bg-red-600 text-white shadow-md">24M</button>
<button className="py-3 text-xs font-bold border border-neutral-200 bg-neutral-50 text-neutral-600 hover:bg-neutral-100">36M</button>
<button className="py-3 text-xs font-bold border border-neutral-200 bg-neutral-50 text-neutral-600 hover:bg-neutral-100">48M</button>
</div>
</div>
<div className="pt-8 border-t border-neutral-100">
<div className="flex justify-between items-center mb-6">
<span className="text-sm text-neutral-500 font-medium">Est. Monthly Payment</span>
<span className="font-heading font-bold text-2xl text-neutral-900">KES 185,400</span>
</div>
<button className="w-full py-4 bg-neutral-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-red-600 transition-colors">Apply for Financing</button>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-block px-3 py-1 bg-red-100 text-red-600 text-[10px] font-bold mb-4 uppercase tracking-widest">Financial Services</div>
<h2 className="font-heading font-semibold text-4xl md:text-5xl text-neutral-900 tracking-tight mb-6">Drive Now, <br/>Pay Later.</h2>
<p className="text-neutral-600 text-lg mb-8 leading-relaxed font-light">
                    We partner with leading banks to offer up to 80% asset financing with competitive interest rates. Get approved in as little as 48 hours with our streamlined process.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-4">
<iconify-icon className="text-red-500" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-neutral-700 text-sm">Competitive Interest Rates from 13%</span>
</li>
<li className="flex items-center gap-4">
<iconify-icon className="text-red-500" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-neutral-700 text-sm">Flexible Repayment Terms up to 60 Months</span>
</li>
<li className="flex items-center gap-4">
<iconify-icon className="text-red-500" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-neutral-700 text-sm">Islamic Banking Options Available</span>
</li>
</ul>
<a className="text-red-600 font-bold border-b border-red-600 pb-1 hover:text-red-700 transition-colors inline-flex items-center gap-2 text-xs uppercase tracking-widest" href="#financing-page">
                    Learn More <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-20 bg-neutral-900 text-white relative overflow-hidden reveal-section" id="trade-in">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="max-w-4xl mx-auto relative z-10 text-center">
<h2 className="font-heading font-semibold text-4xl md:text-5xl tracking-tight mb-6">Trade-In Your Vehicle</h2>
<p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-12 font-light">
                Upgrade your ride hassle-free. We offer competitive market rates for your current vehicle as part of your purchase.
            </p>
<div className="grid md:grid-cols-3 gap-8 mb-16">
<div className="bg-neutral-800/30 p-8 border border-neutral-700 backdrop-blur-sm hover:bg-neutral-800/50 transition-colors">
<div className="w-12 h-12 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mx-auto mb-6">
<iconify-icon icon="lucide:camera" width="24"></iconify-icon>
</div>
<h4 className="font-bold text-sm uppercase tracking-wider mb-2">1. Send Photos</h4>
<p className="text-xs text-neutral-500 leading-6">Upload images of your car via our portal or WhatsApp.</p>
</div>
<div className="bg-neutral-800/30 p-8 border border-neutral-700 backdrop-blur-sm hover:bg-neutral-800/50 transition-colors">
<div className="w-12 h-12 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mx-auto mb-6">
<iconify-icon icon="lucide:clipboard-check" width="24"></iconify-icon>
</div>
<h4 className="font-bold text-sm uppercase tracking-wider mb-2">2. Free Inspection</h4>
<p className="text-xs text-neutral-500 leading-6">Bring it in for a physical check-up by our experts.</p>
</div>
<div className="bg-neutral-800/30 p-8 border border-neutral-700 backdrop-blur-sm hover:bg-neutral-800/50 transition-colors">
<div className="w-12 h-12 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mx-auto mb-6">
<iconify-icon icon="lucide:refresh-ccw" width="24"></iconify-icon>
</div>
<h4 className="font-bold text-sm uppercase tracking-wider mb-2">3. Instant Offer</h4>
<p className="text-xs text-neutral-500 leading-6">Get a valuation to offset your new car's price.</p>
</div>
</div>
<a className="inline-flex items-center gap-3 bg-white text-neutral-900 px-10 py-4 font-bold text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all" href="#valuation-page">
                Get a Free Valuation
            </a>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-20 bg-white border-b border-neutral-200 reveal-section" id="imports">
<div className="max-w-[1792px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1">
<img alt="Shipping" className="relative z-10 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="order-1 lg:order-2">
<h2 className="font-heading font-semibold text-4xl md:text-5xl text-neutral-900 tracking-tight mb-6">Import Direct <br/>from Japan &amp; UK</h2>
<p className="text-neutral-600 text-lg mb-10 leading-relaxed font-light">
                    Access global inventory. Save up to 20% by importing directly through us. We handle sourcing, inspection, shipping, clearing, and registration.
                </p>
<div className="space-y-8">
<div className="flex gap-5">
<div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shrink-0">1</div>
<div>
<h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wider">Vehicle Sourcing</h4>
<p className="text-xs text-neutral-500 mt-2 leading-relaxed">We search auction houses in Japan, UK, and Australia for the best units.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shrink-0">2</div>
<div>
<h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wider">Inspection &amp; Shipping</h4>
<p className="text-xs text-neutral-500 mt-2 leading-relaxed">QISJ inspection and insured shipping to Mombasa port.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shrink-0">3</div>
<div>
<h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wider">Clearing &amp; Registration</h4>
<p className="text-xs text-neutral-500 mt-2 leading-relaxed">We handle KRA duties, number plate registration and delivery.</p>
</div>
</div>
</div>
<div className="mt-12">
<a className="px-8 py-4 border border-neutral-900 font-bold hover:bg-neutral-900 hover:text-white transition-colors uppercase tracking-widest text-xs" href="#import-page">
                        Start Import Process
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-20 bg-neutral-50 reveal-section" id="blogs">
<div className="max-w-[1792px] mx-auto">
<div className="flex justify-between items-center mb-16">
<h2 className="font-heading font-semibold text-3xl md:text-5xl text-neutral-900 tracking-tight">Automotive Insights</h2>
<a className="hidden md:inline-block text-neutral-500 hover:text-red-600 transition-colors font-bold text-xs uppercase tracking-widest" href="#blog-page">Read All Articles</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group">
<div className="overflow-hidden h-56">
<img alt="Car Maintenance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<span className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-3 block">Maintenance</span>
<h3 className="font-heading font-bold text-lg text-neutral-900 mb-4 leading-snug group-hover:text-red-600 transition-colors">5 Signs Your Suspension Needs Checking</h3>
<p className="text-xs text-neutral-500 mb-6 line-clamp-2 leading-relaxed">Kenyan roads can be tough. Here is how to know if your shocks are worn out before it's too late.</p>
<a className="text-xs font-bold text-neutral-900 border-b border-neutral-200 pb-1 hover:text-red-600 hover:border-red-600 transition-all uppercase tracking-wider" href="#">Read More</a>
</div>
</article>

<article className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group">
<div className="overflow-hidden h-56">
<img alt="Finance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<span className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-3 block">Finance</span>
<h3 className="font-heading font-bold text-lg text-neutral-900 mb-4 leading-snug group-hover:text-red-600 transition-colors">Understanding Asset Financing in 2024</h3>
<p className="text-xs text-neutral-500 mb-6 line-clamp-2 leading-relaxed">A comprehensive guide to interest rates, deposit requirements, and bank approvals for car loans.</p>
<a className="text-xs font-bold text-neutral-900 border-b border-neutral-200 pb-1 hover:text-red-600 hover:border-red-600 transition-all uppercase tracking-wider" href="#">Read More</a>
</div>
</article>

<article className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group">
<div className="overflow-hidden h-56">
<img alt="Electric Cars" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<span className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-3 block">Trends</span>
<h3 className="font-heading font-bold text-lg text-neutral-900 mb-4 leading-snug group-hover:text-red-600 transition-colors">Is It Time to Switch to Hybrid?</h3>
<p className="text-xs text-neutral-500 mb-6 line-clamp-2 leading-relaxed">With fuel prices fluctuating, we analyze the cost-benefit of hybrid SUVs in the Kenyan market.</p>
<a className="text-xs font-bold text-neutral-900 border-b border-neutral-200 pb-1 hover:text-red-600 hover:border-red-600 transition-all uppercase tracking-wider" href="#">Read More</a>
</div>
</article>
</div>
<div className="mt-8 text-center md:hidden">
<a className="text-neutral-500 hover:text-red-600 transition-colors font-bold text-xs uppercase tracking-widest" href="#blog-page">Read All Articles</a>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-white pt-24 pb-12 border-t border-neutral-800" id="contact">
<div className="max-w-[1792px] mx-auto px-6 md:px-12 lg:px-20">
<div className="grid md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-8" href="#">
<iconify-icon className="text-red-500" icon="lucide:car-front" width="24"></iconify-icon>
<span className="font-heading font-bold text-2xl tracking-tight text-white">GIGI<span className="text-red-500">.</span></span>
</a>
<p className="text-neutral-400 text-xs leading-6 max-w-sm mb-10 font-light">
                        Your trusted partner for premium automotive solutions. From sourcing specific imports to offering flexible financing, we make driving your dream car a reality.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-red-500 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-red-500 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-red-500 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-white">Company</h4>
<ul className="space-y-4 text-xs text-neutral-400">
<li><a className="hover:text-red-500 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#inventory">Inventory</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#imports">Import Services</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#blogs">Car Reviews</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-white">Contact</h4>
<ul className="space-y-4 text-xs text-neutral-400">
<li className="flex items-start gap-3">
<span>Kiambu Road, Next to AAR Hospital<br/>Nairobi, Kenya</span>
</li>
<li className="flex items-center gap-3">
<span>+254 700 000 000</span>
</li>
<li className="flex items-center gap-3">
<span>sales@gigimotors.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-500 text-[10px] uppercase tracking-widest">© 2024 Gigi Motors Ltd. All rights reserved.</p>
<div className="flex gap-6 text-[10px] uppercase tracking-widest text-neutral-500">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
