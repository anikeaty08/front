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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300">
<div className="glass-panel mx-auto max-w-7xl mt-4 mx-4 md:mx-auto rounded-full px-6 py-3 flex items-center justify-between shadow-sm">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-[#31543A] flex items-center justify-center text-white group-hover:bg-[#3F8A84] transition-colors">
<span className="font-serif text-lg italic">S</span>
</div>
<span className="font-sans text-sm tracking-widest font-medium uppercase text-[#31543A]">Sustain</span>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium uppercase tracking-wide text-[#2A2A2A] hover:text-[#3F8A84] transition-colors" href="#about">About</a>
<a className="text-xs font-medium uppercase tracking-wide text-[#2A2A2A] hover:text-[#3F8A84] transition-colors" href="#audiences">Audiences</a>
<a className="text-xs font-medium uppercase tracking-wide text-[#2A2A2A] hover:text-[#3F8A84] transition-colors" href="#services">Services</a>
<a className="text-xs font-medium uppercase tracking-wide text-[#2A2A2A] hover:text-[#3F8A84] transition-colors" href="#impact">Impact</a>
<a className="text-xs font-medium uppercase tracking-wide text-[#2A2A2A] hover:text-[#3F8A84] transition-colors" href="#pricing">Pricing</a>
<a className="text-xs font-medium uppercase tracking-wide text-[#2A2A2A] hover:text-[#3F8A84] transition-colors" href="#resources">Resources</a>
</div>

<a className="hidden md:flex items-center gap-2 bg-[#31543A] hover:bg-[#3F8A84] text-white px-5 py-2 rounded-full text-xs font-medium transition-all transform hover:scale-105" href="#contact">
<span>Book Consult</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>

<button className="md:hidden text-[#31543A]">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-gray-100">

<div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
<div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#6CA8C2] rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#E4B756] rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>
<div className="bg-grid-pattern absolute inset-0"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-[#31543A] text-xs font-medium mb-8 animate-fade-in-up shadow-sm">
<span className="w-2 h-2 rounded-full bg-[#3F8A84]"></span>
<span>System Design for Education &amp; Wellbeing</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#31543A] mb-8 leading-[1.05]">
                Systems that <span className="italic font-light text-[#3F8A84]">heal</span> <br/>
                instead of deplete.
            </h1>
<p className="text-lg md:text-xl text-[#2A2A2A]/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                We bridge the gap between educational policy and human reality. Empowering School Boards and First Nations to build capacity and sustain staff energy.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-[#31543A] text-white rounded-full font-medium transition-all hover:bg-[#2A2A2A] hover:shadow-lg flex items-center justify-center gap-2" href="#services">
                    Start Exploring
                    <iconify-icon icon="solar:map-arrow-down-linear"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-24 border-b border-gray-100 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<span className="section-label text-[#E4B756]">01 — Profile</span>
<h2 className="text-3xl md:text-4xl text-[#31543A] mt-2">About Felicia Marie Ochs</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-[#31543A] hover:opacity-70 transition-opacity" href="#">
                    Read Full Bio <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 relative">
<div className="aspect-[3/4] rounded-2xl bg-[#E8EAE9] overflow-hidden relative">

<div className="absolute inset-0 flex flex-col items-center justify-center text-[#31543A]/30">
<iconify-icon icon="solar:user-circle-linear" width="64"></iconify-icon>
</div>
</div>
</div>
<div className="lg:col-span-7 space-y-8">
<p className="text-xl md:text-2xl font-serif text-[#31543A] leading-relaxed">
                        "My work focuses on removing the friction between what schools <span className="italic text-[#3F8A84]">want</span> to do and what they are <span className="italic text-[#3F8A84]">equipped</span> to do. I bring a lens of trauma-informed leadership and Indigenous governance to complex systems."
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
<div>
<h4 className="text-sm font-bold text-[#2A2A2A] uppercase tracking-wide mb-2">Experience</h4>
<p className="text-sm text-gray-500 font-light">Former Director of Education (Woodland Cree), EdCan Network Advisor, J.W. McConnell Foundation Fellow.</p>
</div>
<div>
<h4 className="text-sm font-bold text-[#2A2A2A] uppercase tracking-wide mb-2">Expertise</h4>
<p className="text-sm text-gray-500 font-light">System Coherence, Indigenous Partnerships, Mental Health Strategy, Staff Wellbeing.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F9FAFA] border-b border-gray-100" id="audiences">
<div className="max-w-7xl mx-auto px-6">
<span className="section-label text-[#6CA8C2]">02 — Who We Serve</span>
<h2 className="text-3xl md:text-5xl text-[#31543A] mt-2 mb-12">Tailored Pathways</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 text-[#31543A] transform group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:buildings-2-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-[#E8EAE9] flex items-center justify-center text-[#31543A] mb-6">
<iconify-icon icon="solar:city-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-[#31543A] mb-4">For School Boards</h3>
<p className="text-gray-500 mb-8 font-light leading-relaxed">
                            We help public and catholic school divisions operationalize mental health policies and staff wellbeing frameworks. Move from "initiative fatigue" to systemic coherence.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-[#2A2A2A]">
<iconify-icon className="text-[#3F8A84] mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Staff Wellbeing Audits &amp; Strategy</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#2A2A2A]">
<iconify-icon className="text-[#3F8A84] mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Mental Health Grant Reporting</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#2A2A2A]">
<iconify-icon className="text-[#3F8A84] mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Policy Alignment</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#31543A] border-b border-[#31543A] pb-1 hover:opacity-70 transition-opacity" href="#contact">
                            Board Solutions
                        </a>
</div>
</div>

<div className="group bg-[#31543A] p-10 rounded-3xl border border-[#31543A] shadow-sm hover:shadow-md transition-all relative overflow-hidden text-white">
<div className="absolute top-0 right-0 p-8 opacity-10 text-white transform group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:bonfire-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:mountains-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-white mb-4">For First Nations</h3>
<p className="text-white/70 mb-8 font-light leading-relaxed">
                            Supporting Nations in reclaiming jurisdiction over education. We provide technical expertise in structural setup, funding negotiations, and land-based curriculum frameworks.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-white/90">
<iconify-icon className="text-[#E4B756] mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Education Authority Setup</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/90">
<iconify-icon className="text-[#E4B756] mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Treaty-Based Funding Agreements</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/90">
<iconify-icon className="text-[#E4B756] mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Cultural Integration Strategy</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white border-b border-white pb-1 hover:opacity-70 transition-opacity" href="#contact">
                            Nation Partnership
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-gray-100 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
<div className="max-w-xl">
<span className="section-label text-[#E4B756]">03 — Services</span>
<h2 className="text-3xl md:text-5xl text-[#31543A] mt-2 mb-4">Core Offerings</h2>
<p className="text-gray-500 font-light">Holistic consulting across the entire education ecosystem.</p>
</div>
<a className="px-6 py-3 rounded-full border border-[#31543A]/20 text-[#31543A] text-sm font-medium hover:bg-[#31543A] hover:text-white transition-all whitespace-nowrap" href="#pricing">
                    View Pricing Models
                </a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group block p-8 bg-[#F9FAFA] rounded-2xl hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-[#31543A]/10 text-[#31543A] flex items-center justify-center mb-6">
<iconify-icon icon="solar:black-hole-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#2A2A2A] mb-2">System Strategy</h3>
<p className="text-sm text-gray-500 font-light mb-4">Governance modernization, fractional leadership, and strategic planning for districts.</p>
</div>

<div className="group block p-8 bg-[#F9FAFA] rounded-2xl hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-[#3F8A84]/10 text-[#3F8A84] flex items-center justify-center mb-6">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#2A2A2A] mb-2">School Wellbeing</h3>
<p className="text-sm text-gray-500 font-light mb-4">Staff wellness audits, mental health pathways, and resiliency projects for teachers.</p>
</div>

<div className="group block p-8 bg-[#F9FAFA] rounded-2xl hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-[#E4B756]/10 text-[#E4B756] flex items-center justify-center mb-6">
<iconify-icon icon="solar:diploma-verified-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Grant &amp; Policy Support</h3>
<p className="text-sm text-gray-500 font-light mb-4">Writing winning grant proposals and designing policies that align with provincial standards.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#31543A] text-white relative overflow-hidden" id="impact">

<div className="absolute left-0 bottom-0 w-1/2 h-full bg-[#3F8A84] opacity-10 blur-3xl transform -translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<span className="section-label text-[#E4B756]">04 — Case Studies</span>
<h2 className="text-3xl md:text-5xl font-serif mb-16 leading-tight">Tangible Change</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="border-l border-white/20 pl-6 hover:border-[#E4B756] transition-colors">
<div className="text-[#E4B756] text-4xl font-serif mb-4">+$1.2M</div>
<h4 className="text-lg font-medium mb-2">Funding Secured</h4>
<p className="text-sm text-white/60 font-light leading-relaxed">
                        Secured Jordan's Principle funding for a Northern Cree Nation to establish land-based mental health supports.
                    </p>
</div>

<div className="border-l border-white/20 pl-6 hover:border-[#6CA8C2] transition-colors">
<div className="text-[#6CA8C2] text-4xl font-serif mb-4">-40%</div>
<h4 className="text-lg font-medium mb-2">Burnout Reduction</h4>
<p className="text-sm text-white/60 font-light leading-relaxed">
                        Implemented a "Coherence Framework" for a metro school board, reducing reported staff decision fatigue significantly over 12 months.
                    </p>
</div>

<div className="border-l border-white/20 pl-6 hover:border-[#C89A8F] transition-colors">
<div className="text-[#C89A8F] text-4xl font-serif mb-4">New</div>
<h4 className="text-lg font-medium mb-2">Education Authority</h4>
<p className="text-sm text-white/60 font-light leading-relaxed">
                        Guided the transition of a First Nation from federal oversight to full local control of their education system.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-gray-100 bg-[#E8EAE9]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="section-label text-[#C89A8F]">05 — Engagement</span>
<h2 className="text-3xl md:text-4xl text-[#31543A] mt-2 mb-4">Transparent Partnership Models</h2>
<p className="text-gray-500 max-w-xl mx-auto font-light">Whether you need a diagnostic or a long-term leader.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">

<div className="bg-white p-8 md:rounded-l-2xl border-r border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-xl text-[#31543A]">Diagnostic</h3>
<iconify-icon className="text-[#E4B756] group-hover:scale-110 transition-transform" icon="solar:bolt-linear"></iconify-icon>
</div>
<p className="text-sm text-gray-500 mb-6 min-h-[40px]">Strategic assessment &amp; roadmap. 4-6 weeks.</p>
<p className="text-lg font-medium text-[#2A2A2A]">$20k - $35k</p>
</div>

<div className="bg-white p-8 border-r border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-xl text-[#31543A]">Implementation</h3>
<iconify-icon className="text-[#3F8A84] group-hover:scale-110 transition-transform" icon="solar:layers-linear"></iconify-icon>
</div>
<p className="text-sm text-gray-500 mb-6 min-h-[40px]">Coaching, PD series, and policy installation. 3-6 months.</p>
<p className="text-lg font-medium text-[#2A2A2A]">$60k - $120k</p>
</div>

<div className="bg-white p-8 md:rounded-r-2xl hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-xl text-[#31543A]">Transformation</h3>
<iconify-icon className="text-[#6CA8C2] group-hover:scale-110 transition-transform" icon="solar:infinity-linear"></iconify-icon>
</div>
<p className="text-sm text-gray-500 mb-6 min-h-[40px]">Deep integration &amp; fractional leadership. 12+ months.</p>
<p className="text-lg font-medium text-[#2A2A2A]">$180k+</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="resources">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 bg-[#F2F4F3] rounded-3xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#C89A8F] rounded-full mix-blend-multiply opacity-20 blur-2xl"></div>
<div className="relative z-10">
<iconify-icon className="text-[#31543A] mb-6" icon="solar:document-text-linear" width="48"></iconify-icon>
<h3 className="text-2xl font-serif text-[#31543A] mb-4">Well Schools Scorecard</h3>
<p className="text-sm text-gray-600 mb-8 leading-relaxed">
                            A free diagnostic tool to help you assess the "wellness temperature" and cultural safety of your school building.
                        </p>
<form className="space-y-3" onsubmit="event.preventDefault();">
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#31543A]" placeholder="Email address" type="email"/>
<button className="w-full bg-[#31543A] text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-[#2A2A2A] transition-colors">
                                Download PDF
                            </button>
</form>
</div>
</div>
<div className="order-1 md:order-2">
<span className="section-label text-[#3F8A84]">06 — Resources</span>
<h2 className="text-3xl md:text-5xl text-[#31543A] mt-2 mb-6">Tools for the Work</h2>
<p className="text-gray-500 font-light mb-8">
                        We believe in open-source systems change. Access our library of frameworks, policy templates, and grant guides.
                    </p>
<div className="space-y-4">
<a className="flex items-center gap-4 group" href="#">
<div className="w-10 h-10 rounded-full bg-[#F2F4F3] flex items-center justify-center text-[#2A2A2A] group-hover:bg-[#E4B756] transition-colors">
<iconify-icon icon="solar:file-download-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#2A2A2A] group-hover:underline">Mental Health Grant Reporting Template</span>
</a>
<a className="flex items-center gap-4 group" href="#">
<div className="w-10 h-10 rounded-full bg-[#F2F4F3] flex items-center justify-center text-[#2A2A2A] group-hover:bg-[#E4B756] transition-colors">
<iconify-icon icon="solar:file-download-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#2A2A2A] group-hover:underline">Indigenous Governance Framework</span>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#2A2A2A] text-white pt-24 pb-12" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-12">

<div className="col-span-1 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-full bg-[#31543A] flex items-center justify-center text-white">
<span className="font-serif italic text-lg">S</span>
</div>
<span className="font-sans text-lg tracking-widest font-medium uppercase">Sustain</span>
</div>
<h2 className="text-3xl font-serif mb-6 max-w-sm">Ready to build a healthier system?</h2>
<a className="inline-block px-8 py-4 bg-white text-[#2A2A2A] rounded-full font-medium hover:bg-[#E4B756] transition-colors" href="mailto:hello@sustaineducation.ca">
                        Book a Discovery Call
                    </a>
</div>

<div>
<h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-6">Explore</h4>
<ul className="space-y-4 text-sm text-white/80">
<li><a className="hover:text-[#E4B756] transition-colors" href="#about">About</a></li>
<li><a className="hover:text-[#E4B756] transition-colors" href="#audiences">Audiences</a></li>
<li><a className="hover:text-[#E4B756] transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-[#E4B756] transition-colors" href="#impact">Impact</a></li>
<li><a className="hover:text-[#E4B756] transition-colors" href="#resources">Resources</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-6">Connect</h4>
<ul className="space-y-4 text-sm text-white/80">
<li className="flex items-center gap-2">
<iconify-icon className="text-[#E4B756]" icon="solar:letter-linear"></iconify-icon>
                            felicia.ochs@gmail.com
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#E4B756]" icon="solar:phone-linear"></iconify-icon>
                            780-910-8211
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#E4B756]" icon="solar:map-point-linear"></iconify-icon>
                            Treaty 8, Alberta
                        </li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
<p>© 2024 SUSTAIN Education Consulting.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</footer>

<style>
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
        }
    </style>

    </>
  );
}
