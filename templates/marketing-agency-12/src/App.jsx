import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-[#FF6600] rounded-lg flex items-center justify-center text-white">
<iconify-icon height="20" icon="solar:graph-up-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-[#333333] group-hover:text-[#003399] transition-colors">
                    STEP INSIDE
                </span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#333333] hover:text-[#003399] transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-[#333333] hover:text-[#003399] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-[#333333] hover:text-[#003399] transition-colors" href="#case-studies">Case Studies</a>
<a className="text-sm font-medium text-[#333333] hover:text-[#003399] transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-[#333333] hover:text-[#003399] transition-colors" href="#blog">Blog</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#FF6600] hover:bg-[#e65c00] rounded-lg transition-all shadow-sm hover:shadow-md" href="#contact">
                    Book a Call
                </a>
<button className="md:hidden text-[#333333]">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</header>


<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="gradient-orb w-96 h-96 bg-[#003399] rounded-full top-0 right-0 -mr-20 -mt-20"></div>
<div className="gradient-orb w-72 h-72 bg-[#FF6600] rounded-full bottom-0 left-0 -ml-20 mb-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003399]/5 border border-[#003399]/10 text-[#003399] text-xs font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-[#FF6600]"></span>
                    Accepting New Clients for Q4
                </div>
<h1 className="text-5xl md:text-7xl font-semibold text-[#333333] leading-[1.1] tracking-tighter mb-6">
                    Step Inside the Future of Your <span className="text-[#003399]">Business Growth.</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed font-normal max-w-lg">
                    We don't just manage ads; we build digital empires. Partner with us to scale your revenue through data-backed marketing strategies.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-3.5 text-base font-medium text-white bg-[#003399] hover:bg-[#002277] rounded-lg transition-all shadow-lg shadow-[#003399]/20 flex items-center justify-center gap-2">
                        View Our Work
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="px-8 py-3.5 text-base font-medium text-white bg-[#FF6600] hover:bg-[#e65c00] rounded-lg transition-all shadow-lg shadow-[#FF6600]/20">
                        Let's Talk
                    </button>
</div>
</div>

<div className="relative h-[500px] w-full hidden lg:block">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 rotate-[-6deg] z-10">
<div className="flex items-center justify-between mb-6">
<div className="h-8 w-32 bg-gray-100 rounded-md"></div>
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="h-24 bg-[#003399]/5 rounded-lg border border-[#003399]/10 p-4">
<div className="text-[#003399] text-xs font-medium mb-1">Revenue</div>
<div className="text-2xl font-semibold text-[#333333] tracking-tight">$124k</div>
</div>
<div className="h-24 bg-[#FF6600]/5 rounded-lg border border-[#FF6600]/10 p-4">
<div className="text-[#FF6600] text-xs font-medium mb-1">ROI</div>
<div className="text-2xl font-semibold text-[#333333] tracking-tight">450%</div>
</div>
<div className="h-24 bg-gray-50 rounded-lg border border-gray-100 p-4">
<div className="text-gray-500 text-xs font-medium mb-1">Users</div>
<div className="text-2xl font-semibold text-[#333333] tracking-tight">8.5k</div>
</div>
</div>
<div className="h-40 w-full bg-gradient-to-t from-gray-50 to-white border border-gray-100 rounded-lg relative overflow-hidden flex items-end px-4 pb-0 gap-2">

<div className="w-full bg-[#003399]/80 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-[#003399]/60 h-[60%] rounded-t-sm"></div>
<div className="w-full bg-[#FF6600] h-[85%] rounded-t-sm shadow-[0_0_15px_rgba(255,102,0,0.5)]"></div>
<div className="w-full bg-[#003399]/60 h-[55%] rounded-t-sm"></div>
<div className="w-full bg-[#003399]/80 h-[70%] rounded-t-sm"></div>
</div>
</div>

<div className="absolute top-10 right-0 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-bounce z-20">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#003399] flex items-center justify-center text-white">
<iconify-icon icon="solar:chart-2-bold" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-gray-500">Conversion Rate</div>
<div className="text-sm font-semibold text-[#333333]">+12.4%</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-100 bg-gray-50/50 py-8">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-6">Trusted by Industry Leaders Worldwide</p>
<div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-bold text-[#333333] tracking-tight">
<iconify-icon className="text-[#003399]" icon="solar:atom-linear"></iconify-icon> TechInnovations
                </div>
<div className="flex items-center gap-2 text-xl font-bold text-[#333333] tracking-tight">
<iconify-icon className="text-[#FF6600]" icon="solar:bag-heart-linear"></iconify-icon> GlobalRetail
                </div>
<div className="flex items-center gap-2 text-xl font-bold text-[#333333] tracking-tight">
<iconify-icon className="text-[#003399]" icon="solar:wallet-money-linear"></iconify-icon> Financify
                </div>
<div className="flex items-center gap-2 text-xl font-bold text-[#333333] tracking-tight">
<iconify-icon className="text-[#333333]" icon="solar:buildings-linear"></iconify-icon> EstateCorp
                </div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
<div className="p-4">
<div className="text-4xl md:text-5xl font-semibold text-[#003399] tracking-tighter mb-2">$10M+</div>
<div className="text-sm text-[#333333] font-medium">Ad Spend Managed</div>
</div>
<div className="p-4">
<div className="text-4xl md:text-5xl font-semibold text-[#003399] tracking-tighter mb-2">250%</div>
<div className="text-sm text-[#333333] font-medium">Average ROI</div>
</div>
<div className="p-4">
<div className="text-4xl md:text-5xl font-semibold text-[#003399] tracking-tighter mb-2">150+</div>
<div className="text-sm text-[#333333] font-medium">Projects Delivered</div>
</div>
<div className="p-4 border-none">
<div className="text-4xl md:text-5xl font-semibold text-[#003399] tracking-tighter mb-2">24/7</div>
<div className="text-sm text-[#333333] font-medium">Expert Support</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-[#333333] tracking-tighter mb-4">
                    Our Services: Your Path to <span className="text-[#003399]">Digital Dominance.</span>
</h2>
<p className="text-gray-500 font-light">
                    Explore our comprehensive suite of digital marketing solutions designed to accelerate your growth.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#003399]/5 rounded-lg flex items-center justify-center text-[#003399] mb-6 group-hover:bg-[#003399] group-hover:text-white transition-colors">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#003399] mb-3 tracking-tight">Performance Marketing</h3>
<p className="text-sm text-[#333333] leading-relaxed mb-6 opacity-80">
                        Targeted campaigns that drive high-intent traffic and maximize your return on ad spend.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-[#FF6600] group-hover:translate-x-1 transition-transform" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#003399]/5 rounded-lg flex items-center justify-center text-[#003399] mb-6 group-hover:bg-[#003399] group-hover:text-white transition-colors">
<iconify-icon icon="solar:laptop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#003399] mb-3 tracking-tight">Web Experience</h3>
<p className="text-sm text-[#333333] leading-relaxed mb-6 opacity-80">
                        Designing conversion-focused websites that captivate visitors and drive action.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-[#FF6600] group-hover:translate-x-1 transition-transform" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#003399]/5 rounded-lg flex items-center justify-center text-[#003399] mb-6 group-hover:bg-[#003399] group-hover:text-white transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#003399] mb-3 tracking-tight">Content Strategy</h3>
<p className="text-sm text-[#333333] leading-relaxed mb-6 opacity-80">
                        Compelling narratives that build authority, trust, and lasting customer relationships.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-[#FF6600] group-hover:translate-x-1 transition-transform" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#003399]/5 rounded-lg flex items-center justify-center text-[#003399] mb-6 group-hover:bg-[#003399] group-hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#003399] mb-3 tracking-tight">SEO Mastery</h3>
<p className="text-sm text-[#333333] leading-relaxed mb-6 opacity-80">
                        Technical and on-page optimization to ensure you dominate search engine results.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-[#FF6600] group-hover:translate-x-1 transition-transform" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-[#333333] tracking-tighter mb-4 max-w-xl">
                    Our Proven 4-Step Process for <span className="text-[#FF6600]">Your Success.</span>
</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-[#003399] to-gray-200 z-0"></div>

<div className="relative z-10 bg-white md:bg-transparent pt-4 md:pt-0">
<div className="w-12 h-12 rounded-full bg-[#003399] text-white flex items-center justify-center text-xl font-semibold mb-6 shadow-lg shadow-[#003399]/20">1</div>
<h4 className="text-lg font-semibold text-[#003399] mb-3">Discovery &amp; Audit</h4>
<p className="text-sm text-[#333333] opacity-80 leading-relaxed">
                        We dive deep into your brand, market, and goals to uncover opportunities.
                    </p>
</div>

<div className="relative z-10 bg-white md:bg-transparent pt-4 md:pt-0">
<div className="w-12 h-12 rounded-full bg-white border border-[#003399] text-[#003399] flex items-center justify-center text-xl font-semibold mb-6">2</div>
<h4 className="text-lg font-semibold text-[#003399] mb-3">Strategy &amp; Planning</h4>
<p className="text-sm text-[#333333] opacity-80 leading-relaxed">
                        Crafting a bespoke digital roadmap tailored for maximum impact.
                    </p>
</div>

<div className="relative z-10 bg-white md:bg-transparent pt-4 md:pt-0">
<div className="w-12 h-12 rounded-full bg-white border border-[#003399] text-[#003399] flex items-center justify-center text-xl font-semibold mb-6">3</div>
<h4 className="text-lg font-semibold text-[#003399] mb-3">Execution &amp; Optimization</h4>
<p className="text-sm text-[#333333] opacity-80 leading-relaxed">
                        Deploying campaigns, building assets, and continuously refining for performance.
                    </p>
</div>

<div className="relative z-10 bg-white md:bg-transparent pt-4 md:pt-0">
<div className="w-12 h-12 rounded-full bg-[#FF6600] text-white flex items-center justify-center text-xl font-semibold mb-6 shadow-lg shadow-[#FF6600]/20">4</div>
<h4 className="text-lg font-semibold text-[#003399] mb-3">Growth &amp; Scaling</h4>
<p className="text-sm text-[#333333] opacity-80 leading-relaxed">
                        Amplifying results, identifying new avenues, and driving sustainable expansion.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#333333] text-white overflow-hidden" id="case-studies">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<div className="text-[#FF6600] font-medium text-sm mb-4 flex items-center gap-2">
<span className="w-8 h-px bg-[#FF6600]"></span> CLIENT SPOTLIGHT
                    </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6">Real Results, Real Growth. See Our Impact.</h2>
<div className="space-y-6 mb-8">
<div>
<h3 className="text-lg font-medium text-white mb-1">Client</h3>
<p className="text-gray-400 font-light">E-Commerce Retailer X</p>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">Challenge</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed max-w-md">Stagnant online sales and high customer acquisition costs despite significant ad spend.</p>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
<div>
<div className="text-3xl font-semibold text-[#FF6600] tracking-tight">300%</div>
<div className="text-xs text-gray-400 mt-1">Revenue Increase</div>
</div>
<div>
<div className="text-3xl font-semibold text-[#FF6600] tracking-tight">5x</div>
<div className="text-xs text-gray-400 mt-1">ROAS</div>
</div>
</div>
</div>
<button className="px-6 py-3 text-sm font-medium text-white bg-[#FF6600] hover:bg-[#e65c00] rounded-lg transition-all shadow-lg shadow-[#FF6600]/20 inline-flex items-center gap-2">
                        View Full Case Study
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="order-1 lg:order-2 relative">
<div className="relative bg-white/5 border border-white/10 rounded-xl p-2 backdrop-blur-sm shadow-2xl transform lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-500">

<div className="h-8 bg-white/10 rounded-t-lg flex items-center px-4 gap-2 mb-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>

<div className="bg-gray-100 rounded-lg overflow-hidden h-[350px] relative">

<div className="p-6">
<div className="flex justify-between items-center mb-6">
<div className="h-6 w-32 bg-white rounded shadow-sm"></div>
<div className="h-8 w-24 bg-[#003399] rounded text-white text-xs flex items-center justify-center">Export Report</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="h-20 bg-white rounded shadow-sm p-3">
<div className="h-3 w-12 bg-gray-200 mb-2 rounded"></div>
<div className="h-6 w-20 bg-[#003399] rounded"></div>
</div>
<div className="h-20 bg-white rounded shadow-sm p-3">
<div className="h-3 w-12 bg-gray-200 mb-2 rounded"></div>
<div className="h-6 w-20 bg-[#FF6600] rounded"></div>
</div>
<div className="h-20 bg-white rounded shadow-sm p-3">
<div className="h-3 w-12 bg-gray-200 mb-2 rounded"></div>
<div className="h-6 w-20 bg-gray-300 rounded"></div>
</div>
</div>
<div className="h-40 bg-white rounded shadow-sm p-4 flex items-end gap-2">
<div className="w-full h-[20%] bg-gray-200 rounded-t"></div>
<div className="w-full h-[35%] bg-gray-200 rounded-t"></div>
<div className="w-full h-[50%] bg-gray-200 rounded-t"></div>
<div className="w-full h-[75%] bg-[#003399] rounded-t"></div>
<div className="w-full h-[90%] bg-[#FF6600] rounded-t"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
<div>
<iconify-icon className="text-[#003399] text-3xl mb-4" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-[#333333] leading-relaxed italic">"Step Inside Agency completely transformed our online presence. Their data-driven approach cut through the noise."</p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200"></div>
<div>
<div className="text-sm font-semibold text-[#003399]">Sarah Jenkins</div>
<div className="text-xs text-gray-500">CMO, TechFlow</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
<div>
<iconify-icon className="text-[#003399] text-3xl mb-4" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-[#333333] leading-relaxed italic">"The ROI we've seen in just three months is unprecedented. Highly recommend their performance marketing team."</p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200"></div>
<div>
<div className="text-sm font-semibold text-[#003399]">Michael Ross</div>
<div className="text-xs text-gray-500">Founder, GearUp</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
<div>
<iconify-icon className="text-[#003399] text-3xl mb-4" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-[#333333] leading-relaxed italic">"Professional, transparent, and results-oriented. They truly stepped inside our business and understood our needs."</p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200"></div>
<div>
<div className="text-sm font-semibold text-[#003399]">Elena Rodriguez</div>
<div className="text-xs text-gray-500">Director, LuxeHomes</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-[#333333] tracking-tighter mb-6">Ready to Elevate Your Digital Presence?</h2>
<p className="text-lg text-gray-500 mb-10 font-light">Let's build a strategy that drives measurable results for your business. No fluff, just growth.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-4 text-base font-medium text-white bg-[#FF6600] hover:bg-[#e65c00] rounded-lg transition-all shadow-xl shadow-[#FF6600]/20 w-full sm:w-auto">
                    Get Started Today
                </button>
<button className="px-8 py-4 text-base font-medium text-[#333333] bg-white border border-gray-200 hover:bg-gray-50 rounded-lg transition-all w-full sm:w-auto">
                    View Pricing
                </button>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold text-[#333333] tracking-tighter mb-2">Let's Build Something Great Together.</h2>
<p className="text-gray-500 mb-8 font-light">Reach out to us for a free consultation.</p>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#003399] focus:ring-1 focus:ring-[#003399] outline-none transition-all placeholder:text-gray-400 text-sm" placeholder="Full Name" type="text"/>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#003399] focus:ring-1 focus:ring-[#003399] outline-none transition-all placeholder:text-gray-400 text-sm" placeholder="Email Address" type="email"/>
</div>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#003399] focus:ring-1 focus:ring-[#003399] outline-none transition-all placeholder:text-gray-400 text-sm" placeholder="Phone Number" type="tel"/>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#003399] focus:ring-1 focus:ring-[#003399] outline-none transition-all placeholder:text-gray-400 text-sm" placeholder="Company Name" type="text"/>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#003399] focus:ring-1 focus:ring-[#003399] outline-none transition-all placeholder:text-gray-400 text-sm" placeholder="Your Message" rows="4"></textarea>
<button className="w-full py-3.5 text-base font-medium text-white bg-[#FF6600] hover:bg-[#e65c00] rounded-lg transition-all shadow-md">
                            Send Message
                        </button>
</form>
</div>

<div className="bg-[#003399] rounded-2xl p-10 text-white relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-xl font-semibold mb-8">Contact Information</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-[#FF6600] text-xl mt-1" icon="solar:map-point-linear"></iconify-icon>
<div>
<div className="font-medium text-white">Our Office</div>
<div className="text-white/70 text-sm font-light">123 Digital Growth Avenue<br/>New York, NY 10001</div>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#FF6600] text-xl mt-1" icon="solar:phone-linear"></iconify-icon>
<div>
<div className="font-medium text-white">Phone</div>
<a className="text-white/70 text-sm font-light hover:text-white transition-colors" href="tel:+1234567890">+1 (555) 123-4567</a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#FF6600] text-xl mt-1" icon="solar:letter-linear"></iconify-icon>
<div>
<div className="font-medium text-white">Email</div>
<a className="text-white/70 text-sm font-light hover:text-white transition-colors" href="mailto:hello@stepinside.agency">hello@stepinside.agency</a>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/10">
<div className="font-medium mb-2">Business Hours</div>
<p className="text-white/70 text-sm font-light">Mon - Fri: 9:00 AM - 6:00 PM EST</p>
</div>
</div>

<div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FF6600] rounded-full blur-[80px] opacity-20 translate-y-1/2 translate-x-1/2"></div>
</div>
</div>
</div>
</section>

<footer className="bg-[#333333] text-white pt-20 pb-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-[#FF6600] rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter">STEP INSIDE</span>
</a>
<p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                        Building digital empires through data-driven strategies and creative excellence.
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-[#FF6600] transition-colors" href="#"><iconify-icon icon="mdi:facebook" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-[#FF6600] transition-colors" href="#"><iconify-icon icon="mdi:linkedin" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-[#FF6600] transition-colors" href="#"><iconify-icon icon="mdi:instagram" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-[#FF6600] transition-colors" href="#"><iconify-icon icon="mdi:twitter" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-base font-semibold mb-6">Quick Links</h4>
<ul className="space-y-4">
<li><a className="text-gray-400 hover:text-white text-sm transition-colors font-light" href="#">Home</a></li>
<li><a className="text-gray-400 hover:text-white text-sm transition-colors font-light" href="#services">Services</a></li>
<li><a className="text-gray-400 hover:text-white text-sm transition-colors font-light" href="#case-studies">Case Studies</a></li>
<li><a className="text-gray-400 hover:text-white text-sm transition-colors font-light" href="#about">About Us</a></li>
</ul>
</div>

<div>
<h4 className="text-base font-semibold mb-6">Resources</h4>
<ul className="space-y-4">
<li><a className="text-gray-400 hover:text-white text-sm transition-colors font-light" href="#blog">Blog</a></li>
<li><a className="text-gray-400 hover:text-white text-sm transition-colors font-light" href="#">Privacy Policy</a></li>
<li><a className="text-gray-400 hover:text-white text-sm transition-colors font-light" href="#">Terms of Service</a></li>
</ul>
</div>

<div>
<h4 className="text-base font-semibold mb-6">Get in Touch</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-gray-400 text-sm font-light">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
                            123 Digital Growth Ave,<br/>NY, USA
                        </li>
<li className="flex items-center gap-3 text-gray-400 text-sm font-light">
<iconify-icon className="shrink-0" icon="solar:phone-linear"></iconify-icon>
                            +1 (555) 123-4567
                        </li>
<li className="flex items-center gap-3 text-gray-400 text-sm font-light">
<iconify-icon className="shrink-0" icon="solar:letter-linear"></iconify-icon>
                            hello@stepinside.agency
                        </li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-gray-500 text-xs font-light">© 2023 Step Inside Agency. All rights reserved.</p>
<div className="text-gray-500 text-xs font-light">Designed for Growth.</div>
</div>
</div>
</footer>

    </>
  );
}
