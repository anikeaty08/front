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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-[#0f2445]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-white tracking-[0.2em] text-sm font-medium uppercase hover:opacity-80 transition-opacity" href="#home">
                Nicholas Tung
            </a>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-xs font-medium text-slate-300 hover:text-white uppercase tracking-wider transition-colors" href="#home">Home</a>
<a className="text-xs font-medium text-slate-300 hover:text-white uppercase tracking-wider transition-colors" href="#about">About</a>
<a className="text-xs font-medium text-slate-300 hover:text-white uppercase tracking-wider transition-colors" href="#services">Services</a>
<a className="text-xs font-medium text-slate-300 hover:text-white uppercase tracking-wider transition-colors" href="#cases">Case Studies</a>
<a className="text-xs font-medium text-slate-300 hover:text-white uppercase tracking-wider transition-colors" href="#faq">FAQ</a>
<a className="px-5 py-2 bg-white text-[#0f2445] text-xs font-medium rounded-full hover:bg-slate-100 transition-colors uppercase tracking-wide" href="#contact">
                    Book Consultation
                </a>
</div>

<button className="md:hidden text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="hidden md:hidden bg-[#0f2445] border-t border-white/10 p-6 absolute w-full left-0" id="mobile-menu">
<div className="flex flex-col space-y-4">
<a className="text-sm font-medium text-slate-300 uppercase" href="#home">Home</a>
<a className="text-sm font-medium text-slate-300 uppercase" href="#about">About</a>
<a className="text-sm font-medium text-slate-300 uppercase" href="#services">Services</a>
<a className="text-sm font-medium text-slate-300 uppercase" href="#cases">Case Studies</a>
<a className="text-sm font-medium text-slate-300 uppercase" href="#faq">FAQ</a>
<a className="text-sm font-medium text-white uppercase" href="#contact">Contact</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center bg-[#0f2445] pt-20" id="home">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"></div>
</div>
<div className="relative max-w-5xl mx-auto px-6 text-center z-10">
<div className="inline-flex items-center space-x-2 border border-blue-400/30 rounded-full px-3 py-1 mb-8 bg-blue-900/30 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
<span className="text-blue-200 text-xs font-medium tracking-wide uppercase">Based in Singapore • Serving Global SMEs</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                Strategic clarity for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">visionary leaders.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                I help founders and senior executives navigate complexity, optimize operations, and unlock sustainable growth through data-driven management consultancy.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-[#0f2445] text-sm font-medium rounded hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group" href="#contact">
                    Schedule a Consultation
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-600 text-white text-sm font-medium rounded hover:bg-white/5 transition-all" href="#cases">
                    View Case Studies
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#f8f9fa] border-b border-slate-200" id="about">
<div className="max-w-4xl mx-auto px-6">
<div className="relative">
<span className="text-[#0f2445] text-xs font-medium tracking-[0.2em] uppercase mb-6 block">About Nicholas Tung</span>
<div className="clearfix">

<div className="float-left mr-8 mb-4 w-48 md:w-56 relative group">
<div className="rounded-lg overflow-hidden shadow-xl border border-white/50">

<img alt="Nicholas Tung" className="w-full h-auto object-cover aspect-[3/4] hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-3 -right-3 w-full h-full border border-[#0f2445]/10 rounded-lg -z-10"></div>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-[#0f2445] tracking-tight mb-6">
                        Bridging the gap between <br/>ambition and execution.
                    </h2>
<div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
<p>
                            With over a decade of experience in the Singaporean and Southeast Asian markets, I specialize in helping SMEs transition from founder-led chaos to structured, scalable organizations.
                        </p>
<p>
                            My approach isn't about lengthy slide decks; it's about actionable operational frameworks. I have partnered with logistics firms, fintech startups, and family-owned conglomerates to modernize their governance and optimize cash flow.
                        </p>
<p>
                            I believe that true consultancy offers more than advice—it offers partnership. I work alongside your leadership team to implement change that sticks.
                        </p>
<div className="pt-2 flex items-center gap-4">
<img alt="LinkedIn" className="w-6 opacity-60 grayscale hover:grayscale-0 transition-all cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"/>
<span className="h-px w-12 bg-slate-300"></span>
<span className="text-sm text-slate-500 italic">MBA, National University of Singapore</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0f2445]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-blue-300 text-xs font-medium tracking-[0.2em] uppercase mb-3 block">Services</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Core Consultancy Pillars</h2>
<p className="mt-4 text-slate-400 font-light">Tailored interventions designed to solve specific bottlenecks in growing organizations.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded border border-white/10 hover:bg-white/5 transition-colors cursor-default">
<div className="w-12 h-12 bg-blue-500/20 rounded flex items-center justify-center mb-6 text-blue-300 group-hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Operational Excellence</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                        Streamlining workflows, reducing waste, and implementing digital transformation strategies to increase margins without sacrificing quality.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-300">
<i className="w-3 h-3 text-blue-400 stroke-[1.5]" data-lucide="check-circle-2"></i> Process Mapping
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<i className="w-3 h-3 text-blue-400 stroke-[1.5]" data-lucide="check-circle-2"></i> Cost Reduction
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<i className="w-3 h-3 text-blue-400 stroke-[1.5]" data-lucide="check-circle-2"></i> Tech Stack Audit
                        </li>
</ul>
</div>

<div className="group p-8 rounded border border-white/10 hover:bg-white/5 transition-colors cursor-default">
<div className="w-12 h-12 bg-blue-500/20 rounded flex items-center justify-center mb-6 text-blue-300 group-hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="users"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Organizational Design</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                        Structuring teams for agility. Defining clear KPIs, leadership succession planning, and creating a performance-driven culture.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-300">
<i className="w-3 h-3 text-blue-400 stroke-[1.5]" data-lucide="check-circle-2"></i> KPI Frameworks
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<i className="w-3 h-3 text-blue-400 stroke-[1.5]" data-lucide="check-circle-2"></i> Talent Strategy
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<i className="w-3 h-3 text-blue-400 stroke-[1.5]" data-lucide="check-circle-2"></i> Change Management
                        </li>
</ul>
</div>

<div className="group p-8 rounded border border-white/10 hover:bg-white/5 transition-colors cursor-default">
<div className="w-12 h-12 bg-blue-500/20 rounded flex items-center justify-center mb-6 text-blue-300 group-hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="globe"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Market Expansion</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                        Feasibility studies and go-to-market strategies for Singaporean companies looking to enter Vietnam, Indonesia, and Malaysia.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-300">
<i className="w-3 h-3 text-blue-400 stroke-[1.5]" data-lucide="check-circle-2"></i> Market Entry
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<i className="w-3 h-3 text-blue-400 stroke-[1.5]" data-lucide="check-circle-2"></i> Partnership Sourcing
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<i className="w-3 h-3 text-blue-400 stroke-[1.5]" data-lucide="check-circle-2"></i> Regulatory Advisory
                        </li>
</ul>
</div>

<div className="group p-8 rounded border border-white/10 hover:bg-white/5 transition-colors cursor-default">
<div className="w-12 h-12 bg-blue-500/20 rounded flex items-center justify-center mb-6 text-blue-300 group-hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Digital Transformation</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                        Modernizing legacy systems and implementing CRM/ERP solutions to automate high-volume workflows and reduce manual dependencies.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-300">
<i className="w-3 h-3 text-blue-400 stroke-[1.5]" data-lucide="check-circle-2"></i> ERP Implementation
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<i className="w-3 h-3 text-blue-400 stroke-[1.5]" data-lucide="check-circle-2"></i> Automation
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<i className="w-3 h-3 text-blue-400 stroke-[1.5]" data-lucide="check-circle-2"></i> Data Analytics
                        </li>
</ul>
</div>

<div className="group p-8 rounded border border-white/10 hover:bg-white/5 transition-colors cursor-default">
<div className="w-12 h-12 bg-blue-500/20 rounded flex items-center justify-center mb-6 text-blue-300 group-hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="shield-alert"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Crisis Management</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                        Strategic interventions for companies facing severe cash flow crunches, leadership disputes, or sudden regulatory shifts.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-300">
<i className="w-3 h-3 text-blue-400 stroke-[1.5]" data-lucide="check-circle-2"></i> Cash Flow Rescue
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<i className="w-3 h-3 text-blue-400 stroke-[1.5]" data-lucide="check-circle-2"></i> Risk Assessment
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<i className="w-3 h-3 text-blue-400 stroke-[1.5]" data-lucide="check-circle-2"></i> Conflict Resolution
                        </li>
</ul>
</div>

<div className="group p-8 rounded border border-white/10 hover:bg-white/5 transition-colors cursor-default">
<div className="w-12 h-12 bg-blue-500/20 rounded flex items-center justify-center mb-6 text-blue-300 group-hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="pie-chart"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Financial Governance</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                        Implementing robust financial controls, cash flow forecasting, and unit economics analysis to secure long-term profitability.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-300">
<i className="w-3 h-3 text-blue-400 stroke-[1.5]" data-lucide="check-circle-2"></i> Unit Economics
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<i className="w-3 h-3 text-blue-400 stroke-[1.5]" data-lucide="check-circle-2"></i> Budget Planning
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<i className="w-3 h-3 text-blue-400 stroke-[1.5]" data-lucide="check-circle-2"></i> Audit Prep
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f8f9fa] border-b border-slate-200" id="cases">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<span className="text-[#0f2445] text-xs font-medium tracking-[0.2em] uppercase mb-3 block">Case Studies</span>
<h2 className="text-3xl md:text-4xl font-medium text-[#0f2445] tracking-tight">Proven impact across industries.</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-[#0f2445] font-medium border-b border-[#0f2445] pb-1 hover:opacity-70 transition-opacity" href="#contact">
                    See full portfolio <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
<div className="space-y-16">

<div className="group grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<div className="text-blue-600 text-xs font-medium uppercase tracking-wide mb-2">Fintech Series B</div>
<h3 className="text-2xl font-medium text-[#0f2445] mb-4 group-hover:text-blue-700 transition-colors">Scaling Operations for a Regional Payment Gateway</h3>
<p className="text-slate-600 font-light mb-6 leading-relaxed">
                            The client was facing severe bottlenecks in merchant onboarding which stalled growth. We re-engineered the compliance workflow and integrated automated KYC checks.
                        </p>
<div className="grid grid-cols-2 gap-6 border-t border-slate-200 pt-6">
<div>
<div className="text-2xl font-medium text-[#0f2445]">-45%</div>
<div className="text-xs text-slate-500 uppercase mt-1">Onboarding Time</div>
</div>
<div>
<div className="text-2xl font-medium text-[#0f2445]">3.5x</div>
<div className="text-xs text-slate-500 uppercase mt-1">Merchant Volume</div>
</div>
</div>
</div>
<div className="order-1 md:order-2 overflow-hidden rounded-lg">
<img alt="Fintech" className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="group grid md:grid-cols-2 gap-12 items-center">
<div className="overflow-hidden rounded-lg">
<img alt="Manufacturing" className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-blue-600 text-xs font-medium uppercase tracking-wide mb-2">Manufacturing &amp; Supply Chain</div>
<h3 className="text-2xl font-medium text-[#0f2445] mb-4 group-hover:text-blue-700 transition-colors">Legacy Restructuring for a Family Conglomerate</h3>
<p className="text-slate-600 font-light mb-6 leading-relaxed">
                            A 40-year-old precision engineering firm needed to modernize. We implemented an ERP system and restructured the middle-management layer to professionalize governance.
                        </p>
<div className="grid grid-cols-2 gap-6 border-t border-slate-200 pt-6">
<div>
<div className="text-2xl font-medium text-[#0f2445]">+22%</div>
<div className="text-xs text-slate-500 uppercase mt-1">Net Margin</div>
</div>
<div>
<div className="text-2xl font-medium text-[#0f2445]">$4M</div>
<div className="text-xs text-slate-500 uppercase mt-1">Cost Savings</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0f2445]" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-blue-300 text-xs font-medium tracking-[0.2em] uppercase mb-3 block">FAQs</span>
<h2 className="text-3xl font-medium text-white tracking-tight">Engagement Models</h2>
</div>
<div className="space-y-4">

<details className="group border-b border-white/10 pb-4 cursor-pointer">
<summary className="flex justify-between items-center text-lg font-medium text-white p-2">
<span>How do you structure your fees?</span>
<span className="transform group-open:rotate-45 transition-transform text-blue-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="plus"></i>
</span>
</summary>
<div className="p-2 text-slate-400 font-light leading-relaxed mt-2 text-sm">
                        I operate on both project-based retainers and performance-linked models. For strategic advisory, a monthly retainer is common. For operational turnarounds, I often structure fees based on milestones achieved.
                    </div>
</details>

<details className="group border-b border-white/10 pb-4 cursor-pointer">
<summary className="flex justify-between items-center text-lg font-medium text-white p-2">
<span>Do you work with early-stage startups?</span>
<span className="transform group-open:rotate-45 transition-transform text-blue-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="plus"></i>
</span>
</summary>
<div className="p-2 text-slate-400 font-light leading-relaxed mt-2 text-sm">
                        Selectively. My expertise is best suited for Post-Series A companies or SMEs with at least $3M in annual revenue, where there are established processes that need optimization and scaling.
                    </div>
</details>

<details className="group border-b border-white/10 pb-4 cursor-pointer">
<summary className="flex justify-between items-center text-lg font-medium text-white p-2">
<span>What is the typical engagement duration?</span>
<span className="transform group-open:rotate-45 transition-transform text-blue-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="plus"></i>
</span>
</summary>
<div className="p-2 text-slate-400 font-light leading-relaxed mt-2 text-sm">
                        Operational audits can take 2-4 weeks. Full-scale transformation projects typically run between 3 to 9 months, depending on the complexity of the organizational change required.
                    </div>
</details>

<details className="group border-b border-white/10 pb-4 cursor-pointer">
<summary className="flex justify-between items-center text-lg font-medium text-white p-2">
<span>Do you accept international clients?</span>
<span className="transform group-open:rotate-45 transition-transform text-blue-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="plus"></i>
</span>
</summary>
<div className="p-2 text-slate-400 font-light leading-relaxed mt-2 text-sm">
                        Yes. While I am based in Singapore, I frequently advise companies across Vietnam, Malaysia, and Indonesia, as well as remote advisory for global firms looking to enter APAC.
                    </div>
</details>

<details className="group border-b border-white/10 pb-4 cursor-pointer">
<summary className="flex justify-between items-center text-lg font-medium text-white p-2">
<span>What industries do you specialize in?</span>
<span className="transform group-open:rotate-45 transition-transform text-blue-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="plus"></i>
</span>
</summary>
<div className="p-2 text-slate-400 font-light leading-relaxed mt-2 text-sm">
                        My deep expertise lies in Logistics, Fintech, Precision Manufacturing, and Professional Services. However, the frameworks of operational excellence are industry-agnostic.
                    </div>
</details>

<details className="group border-b border-white/10 pb-4 cursor-pointer">
<summary className="flex justify-between items-center text-lg font-medium text-white p-2">
<span>Can you assist with succession planning?</span>
<span className="transform group-open:rotate-45 transition-transform text-blue-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="plus"></i>
</span>
</summary>
<div className="p-2 text-slate-400 font-light leading-relaxed mt-2 text-sm">
                        Absolutely. A significant portion of my work involves helping family-owned SMEs professionalize their management layer to prepare for the next generation of leadership or a potential exit.
                    </div>
</details>

<details className="group border-b border-white/10 pb-4 cursor-pointer">
<summary className="flex justify-between items-center text-lg font-medium text-white p-2">
<span>How quickly can we start?</span>
<span className="transform group-open:rotate-45 transition-transform text-blue-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="plus"></i>
</span>
</summary>
<div className="p-2 text-slate-400 font-light leading-relaxed mt-2 text-sm">
                        Once we have a preliminary discovery call, I can usually deploy a diagnostic team or begin the initial audit within 10 business days.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-[#f8f9fa]" id="contact">
<div className="max-w-xl mx-auto px-6">
<div className="text-center mb-10">
<span className="text-[#0f2445] text-xs font-medium tracking-[0.2em] uppercase mb-3 block">Get in Touch</span>
<h2 className="text-3xl font-medium text-[#0f2445] tracking-tight">Schedule a Strategy Call</h2>
<p className="mt-4 text-slate-500 font-light">Tell me about your business challenge. I usually respond within 24 hours.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wider">First Name</label>
<input className="w-full bg-transparent border-b border-slate-300 py-3 text-[#0f2445] focus:outline-none focus:border-[#0f2445] transition-colors" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wider">Last Name</label>
<input className="w-full bg-transparent border-b border-slate-300 py-3 text-[#0f2445] focus:outline-none focus:border-[#0f2445] transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wider">Work Email</label>
<input className="w-full bg-transparent border-b border-slate-300 py-3 text-[#0f2445] focus:outline-none focus:border-[#0f2445] transition-colors" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wider">Inquiry Type</label>
<div className="relative">
<select className="w-full bg-transparent border-b border-slate-300 py-3 text-[#0f2445] focus:outline-none focus:border-[#0f2445] transition-colors appearance-none cursor-pointer">
<option>General Inquiry</option>
<option>Operational Consulting</option>
<option>Market Expansion</option>
<option>Speaking Engagement</option>
</select>
<div className="absolute right-0 top-4 pointer-events-none text-slate-500">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wider">Message</label>
<textarea className="w-full bg-transparent border-b border-slate-300 py-3 text-[#0f2445] focus:outline-none focus:border-[#0f2445] transition-colors resize-none" placeholder="Briefly describe your company's current bottleneck..." rows="3"></textarea>
</div>
<button className="w-full bg-[#0f2445] text-white font-medium text-sm py-4 rounded mt-4 hover:bg-blue-900 transition-colors flex items-center justify-center gap-2" type="button">
                    Send Request
                    <i className="w-4 h-4 stroke-[1.5]" data-lucide="mail"></i>
</button>
</form>
</div>
</section>

<footer className="bg-[#0f2445] border-t border-white/10 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<a className="text-white tracking-[0.2em] text-sm font-medium uppercase" href="#home">
                Nicholas Tung
            </a>

<div className="flex flex-wrap justify-center gap-6 md:gap-8">
<a className="text-xs font-medium text-slate-400 hover:text-white uppercase tracking-wider transition-colors" href="#home">Home</a>
<a className="text-xs font-medium text-slate-400 hover:text-white uppercase tracking-wider transition-colors" href="#about">About</a>
<a className="text-xs font-medium text-slate-400 hover:text-white uppercase tracking-wider transition-colors" href="#services">Services</a>
<a className="text-xs font-medium text-slate-400 hover:text-white uppercase tracking-wider transition-colors" href="#cases">Case Studies</a>
<a className="text-xs font-medium text-slate-400 hover:text-white uppercase tracking-wider transition-colors" href="#faq">FAQ</a>
<a className="text-xs font-medium text-slate-400 hover:text-white uppercase tracking-wider transition-colors" href="#contact">Contact</a>
</div>
<div className="text-slate-500 text-xs">
                © 2023 Nicholas Tung Consulting.
            </div>
</div>
</footer>


    </>
  );
}
