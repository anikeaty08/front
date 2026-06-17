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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl tracking-tight font-medium text-slate-900 hover:text-sky-600 transition-colors flex items-center gap-2 group" href="#">
<span className="border border-slate-300 rounded p-1 group-hover:border-sky-500 transition-colors">
                    NT
                </span>
<span className="hidden sm:inline-block">NICHOLAS TUNG</span>
</a>

<div className="md:hidden text-slate-600 cursor-pointer">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-slate-600">
<a className="hover:text-sky-600 transition-colors" href="#home">Home</a>
<a className="hover:text-sky-600 transition-colors" href="#about">About Me</a>
<a className="hover:text-sky-600 transition-colors" href="#services">Services</a>
<a className="hover:text-sky-600 transition-colors" href="#case-studies">Case Studies</a>
<a className="hover:text-sky-600 transition-colors" href="#faq">FAQs</a>
<a className="px-5 py-2 rounded-full border border-slate-300 text-slate-700 hover:bg-sky-600 hover:border-sky-600 hover:text-white transition-all duration-300" href="#contact">Contact</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-sky-50" id="home">

<div className="absolute top-0 right-0 w-1/3 h-1/3 bg-sky-200/40 rounded-full blur-3xl -z-10"></div>
<div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-200/40 rounded-full blur-3xl -z-10"></div>
<div className="max-w-6xl mx-auto px-6 w-full relative z-10">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sky-100 text-xs text-sky-700 mb-8 fade-in-up shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
                    Accepting new clients for Q4 2023
                </div>
<h1 className="text-5xl md:text-7xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-8 fade-in-up delay-100">
                    Precision strategy for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-slate-600">Singapore's visionaries.</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-10 fade-in-up delay-200">
                    Helping founders and SMEs navigate complexity, optimize operations, and unlock sustainable revenue growth through data-driven consultancy.
                </p>
<div className="flex flex-col sm:flex-row items-start gap-4 fade-in-up delay-300">
<a className="group flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 transition-all duration-300 text-sm md:text-base w-full sm:w-auto shadow-lg shadow-slate-900/10" href="#contact">
                        Book a Strategy Call
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-slate-300 text-slate-700 hover:border-slate-500 hover:text-slate-900 transition-all duration-300 text-sm md:text-base w-full sm:w-auto bg-white/50 backdrop-blur-sm" href="#case-studies">
                        View Case Studies
                    </a>
</div>

<div className="mt-20 border-t border-slate-200/60 pt-8 flex flex-wrap gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-all duration-500 fade-in-up delay-300">
<span className="text-lg font-semibold tracking-tight text-slate-600 grayscale">TechAsia</span>
<span className="text-lg font-semibold tracking-tight text-slate-600 grayscale">Vanguard Holdings</span>
<span className="text-lg font-semibold tracking-tight text-slate-600 grayscale">Apex Logistics</span>
<span className="text-lg font-semibold tracking-tight text-slate-600 grayscale">Merlion Capital</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative border-t border-slate-100 bg-white" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="relative order-2 md:order-1">
<div className="aspect-[4/5] bg-sky-100 rounded-2xl overflow-hidden relative group border border-slate-100 shadow-xl shadow-sky-900/5">

<img alt="Nicholas Tung Portrait" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60"></div>

<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-sm">
<p className="text-slate-900 text-sm font-medium">Nicholas Tung</p>
<p className="text-slate-500 text-xs mt-1">Strategic Consultant, Singapore</p>
</div>
</div>
</div>

<div className="absolute -inset-4 border border-sky-100 rounded-3xl -z-10 rotate-2 bg-sky-50"></div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-sm font-medium text-sky-600 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:user-id-linear" width="18"></iconify-icon>
                        ABOUT NICHOLAS TUNG
                    </h2>
<h3 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-6">
                        Bridging the gap between ambition and execution.
                    </h3>
<div className="space-y-6 text-slate-600 leading-relaxed">
<p>
                            With over 12 years of experience in high-stakes management consulting across Singapore and Southeast Asia, I specialize in turning complex operational challenges into streamlined engines for growth.
                        </p>
<p>
                            Formerly a lead strategist at a top-tier global firm, I founded this boutique consultancy to offer SMEs and founders what big firms often cannot: agility, personalized attention, and deeply integrated partnership.
                        </p>
<p>
                            My approach is rooted in data but driven by human dynamics. I don't just hand over a slide deck and leave; I work alongside your leadership team to implement changes that stick.
                        </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
<div>
<div className="text-3xl font-medium text-slate-900 tracking-tight">12+</div>
<div className="text-sm text-slate-500 mt-1">Years Experience</div>
</div>
<div>
<div className="text-3xl font-medium text-slate-900 tracking-tight">$150M+</div>
<div className="text-sm text-slate-500 mt-1">Value Unlocked</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-sky-50" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-sm font-medium text-sky-600 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:layers-linear" width="18"></iconify-icon>
                        EXPERTISE
                    </h2>
<h3 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">
                        Comprehensive solutions for modern business.
                    </h3>
</div>
<a className="text-slate-600 hover:text-sky-600 border-b border-slate-300 hover:border-sky-600 pb-1 transition-all inline-flex items-center gap-1 text-sm" href="#contact">
                    Schedule a Consultation
                    <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-slate-100 p-8 rounded-2xl hover:border-sky-200 transition-all duration-300 group hover:shadow-xl hover:shadow-sky-200/20">
<div className="h-12 w-12 bg-sky-50 rounded-lg flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-100 group-hover:text-sky-700 transition-colors border border-sky-100">
<iconify-icon icon="solar:graph-new-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Growth Strategy</h4>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Market entry analysis, revenue modeling, and competitive positioning tailored for Singapore's dynamic ecosystem.
                    </p>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2"><iconify-icon className="text-sky-500" icon="solar:check-circle-linear"></iconify-icon> Market Expansion</li>
<li className="flex items-center gap-2"><iconify-icon className="text-sky-500" icon="solar:check-circle-linear"></iconify-icon> Product Pricing</li>
</ul>
</div>

<div className="bg-white border border-slate-100 p-8 rounded-2xl hover:border-sky-200 transition-all duration-300 group hover:shadow-xl hover:shadow-sky-200/20">
<div className="h-12 w-12 bg-sky-50 rounded-lg flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-100 group-hover:text-sky-700 transition-colors border border-sky-100">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Operational Excellence</h4>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Streamlining workflows, reducing overheads, and implementing digital transformation to maximize margin.
                    </p>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2"><iconify-icon className="text-sky-500" icon="solar:check-circle-linear"></iconify-icon> Process Audit</li>
<li className="flex items-center gap-2"><iconify-icon className="text-sky-500" icon="solar:check-circle-linear"></iconify-icon> Tech Stack Optimization</li>
</ul>
</div>

<div className="bg-white border border-slate-100 p-8 rounded-2xl hover:border-sky-200 transition-all duration-300 group hover:shadow-xl hover:shadow-sky-200/20">
<div className="h-12 w-12 bg-sky-50 rounded-lg flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-100 group-hover:text-sky-700 transition-colors border border-sky-100">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Executive Advisory</h4>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Acting as a sounding board for C-suite leaders, providing objective insights for critical decision-making.
                    </p>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2"><iconify-icon className="text-sky-500" icon="solar:check-circle-linear"></iconify-icon> Leadership Coaching</li>
<li className="flex items-center gap-2"><iconify-icon className="text-sky-500" icon="solar:check-circle-linear"></iconify-icon> Change Management</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="case-studies">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-sm font-medium text-sky-600 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:folder-with-files-linear" width="18"></iconify-icon>
                SELECTED WORKS
            </h2>
<h3 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-16">
                Proven results in complex environments.
            </h3>
<div className="space-y-8">

<div className="group border border-slate-100 bg-sky-50/50 rounded-2xl overflow-hidden hover:border-sky-200 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-sky-100/50">
<div className="grid grid-cols-1 md:grid-cols-12">

<div className="md:col-span-4 relative h-48 md:h-auto overflow-hidden">
<img alt="Fintech Data" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-sky-900/10 mix-blend-multiply"></div>
</div>

<div className="md:col-span-8 p-8 md:p-10 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-sky-600 uppercase tracking-widest">FinTech • Series B</span>
<iconify-icon className="text-slate-400 group-hover:text-sky-600 transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<h4 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight group-hover:text-sky-700 transition-colors">Market Entry Strategy for Regional Payments Firm</h4>
<p className="text-slate-500 mb-6 leading-relaxed max-w-2xl">
                                    Devised a go-to-market strategy for a payment gateway expanding into Vietnam and Thailand. Conducted regulatory feasibility studies and partner identification.
                                </p>
</div>
<div className="flex gap-8 border-t border-slate-200 pt-6 mt-2">
<div>
<p className="text-2xl font-medium text-slate-900 tracking-tight">22%</p>
<p className="text-xs text-slate-500 mt-1">Market Share (Yr 1)</p>
</div>
<div>
<p className="text-2xl font-medium text-slate-900 tracking-tight">$4.5M</p>
<p className="text-xs text-slate-500 mt-1">Initial Revenue</p>
</div>
</div>
</div>
</div>
</div>

<div className="group border border-slate-100 bg-sky-50/50 rounded-2xl overflow-hidden hover:border-sky-200 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-sky-100/50">
<div className="grid grid-cols-1 md:grid-cols-12">

<div className="md:col-span-4 relative h-48 md:h-auto overflow-hidden">
<img alt="Supply Chain" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-sky-900/10 mix-blend-multiply"></div>
</div>

<div className="md:col-span-8 p-8 md:p-10 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-sky-600 uppercase tracking-widest">Manufacturing • SME</span>
<iconify-icon className="text-slate-400 group-hover:text-sky-600 transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<h4 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight group-hover:text-sky-700 transition-colors">Digital Transformation of Legacy Supply Chain</h4>
<p className="text-slate-500 mb-6 leading-relaxed max-w-2xl">
                                    Overhauled the manual inventory processes of a 30-year-old manufacturing firm. Implemented ERP solutions and automated procurement workflows.
                                </p>
</div>
<div className="flex gap-8 border-t border-slate-200 pt-6 mt-2">
<div>
<p className="text-2xl font-medium text-slate-900 tracking-tight">40%</p>
<p className="text-xs text-slate-500 mt-1">Efficiency Gain</p>
</div>
<div>
<p className="text-2xl font-medium text-slate-900 tracking-tight">-15%</p>
<p className="text-xs text-slate-500 mt-1">OpEx Reduction</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-sky-50" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-sm font-medium text-sky-600 mb-4 flex items-center justify-center gap-2">
<iconify-icon icon="solar:question-circle-linear" width="18"></iconify-icon>
                    COMMON QUESTIONS
                </h2>
<h3 className="text-3xl font-medium text-slate-900 tracking-tight">
                    Clarity before commitment.
                </h3>
</div>
<div className="space-y-4">

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-800 font-medium hover:bg-slate-50 transition-colors">
                        What is your typical engagement model?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        I offer both project-based consulting (e.g., a 3-month strategic review) and retainer-based advisory services. For most new clients, I recommend a 2-week "Diagnostic Phase" to assess needs before committing to a longer implementation roadmap.
                    </div>
</details>

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-800 font-medium hover:bg-slate-50 transition-colors">
                        Do you work with startups or only established SMEs?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        I work with both. My sweet spot is Post-Series A startups needing to professionalize operations, and established SMEs ($10M+ revenue) looking to modernize or pivot. The common denominator is a leadership team committed to change.
                    </div>
</details>

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-800 font-medium hover:bg-slate-50 transition-colors">
                        How are your fees structured?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        Fees are project-dependent and value-based. I avoid hourly billing to ensure our incentives are aligned on outcomes, not time spent. A clear proposal with fixed deliverables and timelines is provided after the initial consultation.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-t border-slate-100 relative overflow-hidden bg-white" id="contact">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6">
                    Ready to scale your vision?
                </h2>
<p className="text-slate-500 text-lg">
                    Schedule a 30-minute discovery call to discuss your current challenges.
                </p>
</div>
<div className="bg-sky-50 border border-slate-200 p-8 md:p-12 rounded-3xl shadow-xl shadow-sky-100/50 relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Name</label>
<input className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder-slate-400 shadow-sm" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Email</label>
<input className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder-slate-400 shadow-sm" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Company &amp; Role</label>
<input className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder-slate-400 shadow-sm" placeholder="CEO at TechCorp" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Challenge</label>
<textarea className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder-slate-400 shadow-sm resize-none" placeholder="Briefly describe what you are looking to achieve..." rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-4 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10" type="button">
                        Send Inquiry
                        <iconify-icon icon="solar:plain-3-linear" width="20"></iconify-icon>
</button>
</form>
<div className="mt-8 flex items-center justify-center gap-8 border-t border-slate-200 pt-8">
<a className="flex items-center gap-2 text-slate-500 hover:text-sky-600 transition-colors text-sm" href="mailto:hello@nicholastung.com">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                        hello@nicholastung.com
                    </a>
<a className="flex items-center gap-2 text-slate-500 hover:text-sky-600 transition-colors text-sm" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="18"></iconify-icon>
                        LinkedIn Profile
                    </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-800 bg-[#0F172A] py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

<a className="text-lg tracking-tight font-medium text-slate-100 hover:text-white transition-colors flex items-center gap-2 group" href="#">
<span className="border border-slate-600 rounded p-1 group-hover:border-white transition-colors text-sm">
                    NT
                </span>
<span className="">NICHOLAS TUNG</span>
</a>

<div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#home">Home</a>
<a className="hover:text-white transition-colors" href="#about">About Me</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#case-studies">Case Studies</a>
<a className="hover:text-white transition-colors" href="#faq">FAQs</a>
<a className="px-4 py-1.5 rounded-full border border-slate-700 text-slate-300 hover:border-white hover:text-white transition-all duration-300" href="#contact">Contact</a>
</div>

<div className="text-xs text-slate-600">
                © 2023 Nicholas Tung. Singapore.
            </div>
</div>
</footer>

    </>
  );
}
