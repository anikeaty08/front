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
      

<header className="fixed w-full z-50 bg-[#0F1B2B]/95 backdrop-blur-sm border-b border-[#6E6E6E]/20 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-24">

<div className="flex-shrink-0">
<a className="text-[#F4F1EC] text-lg tracking-tight font-medium uppercase group" href="#">
                        Curran Building<span className="text-[#6E6E6E] mx-1 group-hover:text-[#C9743A] transition-colors">/</span>Solutions
                    </a>
</div>

<nav className="hidden md:flex items-center space-x-10">
<a className="text-sm font-light text-[#F4F1EC]/80 hover:text-[#C9743A] transition-colors tracking-wide" href="#about">About</a>
<a className="text-sm font-light text-[#F4F1EC]/80 hover:text-[#C9743A] transition-colors tracking-wide" href="#services">Services</a>
<a className="text-sm font-light text-[#F4F1EC]/80 hover:text-[#C9743A] transition-colors tracking-wide" href="#products">Steel Lintels</a>
<a className="text-sm font-light text-[#F4F1EC]/80 hover:text-[#C9743A] transition-colors tracking-wide" href="#grants">Grants</a>
<a className="bg-[#C9743A] hover:bg-[#b06330] text-white text-xs font-medium uppercase tracking-widest px-6 py-3 rounded-sm transition-all duration-300 shadow-lg shadow-[#000000]/20" href="#contact">
                        Contact Us
                    </a>
</nav>

<div className="md:hidden flex items-center">
<label className="cursor-pointer text-[#F4F1EC] hover:text-[#C9743A] p-2 transition-colors" htmlFor="mobile-menu-toggle">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</label>
</div>
</div>
</div>

<input className="hidden peer" id="mobile-menu-toggle" type="checkbox"/>
<div className="hidden md:hidden bg-[#0F1B2B] border-t border-[#6E6E6E]/20 absolute w-full left-0 top-24 shadow-2xl" id="mobile-menu">
<div className="px-8 py-8 space-y-6 flex flex-col items-start">
<a className="text-[#F4F1EC] text-lg font-light hover:text-[#C9743A] tracking-wide" href="#about">About Us</a>
<a className="text-[#F4F1EC] text-lg font-light hover:text-[#C9743A] tracking-wide" href="#services">Services</a>
<a className="text-[#F4F1EC] text-lg font-light hover:text-[#C9743A] tracking-wide" href="#products">Products</a>
<a className="text-[#F4F1EC] text-lg font-light hover:text-[#C9743A] tracking-wide" href="#grants">Grant Services</a>
<a className="text-[#C9743A] font-medium text-lg tracking-wide mt-4" href="#contact">Contact Us</a>
</div>
</div>
</header>

<section className="relative h-screen min-h-[600px] flex items-center bg-[#0F1B2B] overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Corporate Architecture" className="w-full h-full object-cover opacity-10 grayscale mix-blend-overlay" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F1B2B] via-[#0F1B2B]/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full fade-enter">
<div className="max-w-4xl">
<div className="flex items-center gap-3 mb-8">
<div className="h-px w-12 bg-[#6E6E6E]"></div>
<span className="text-[#C9743A] text-xs font-medium uppercase tracking-[0.2em]">Established Excellence</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium text-[#F4F1EC] tracking-tighter mb-8 leading-[1.1]">
                    Engineering trust.<br/>
<span className="text-[#6E6E6E]">Building legacies.</span>
</h1>
<p className="text-lg lg:text-xl text-[#F4F1EC]/70 mb-12 max-w-2xl font-light leading-relaxed">
                    A family-run authority in construction solutions. We provide certified engineering consultancy, structural products, and grant expertise to Ireland’s most demanding projects.
                </p>
<div className="flex flex-col sm:flex-row gap-6">
<a className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-xs font-medium uppercase tracking-widest text-white bg-[#C9743A] hover:bg-[#b06330] transition-all rounded-sm shadow-xl hover:shadow-[#C9743A]/20" href="#services">
                        Explore Services
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 border border-[#6E6E6E]/50 text-xs font-medium uppercase tracking-widest text-[#F4F1EC] hover:bg-[#F4F1EC]/5 transition-all rounded-sm" href="#contact">
                        Make an Enquiry
                    </a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F4F1EC]" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

<div className="lg:col-span-7">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-[#0F1B2B] mb-8">
                        Merging family values with<br/>corporate precision.
                    </h2>
<div className="space-y-8 text-[#6E6E6E] text-base lg:text-lg font-light leading-loose">
<p>
                            Curran Building Solutions stands as a pillar of reliability in the Irish construction sector. Led by Éadaoin, Jonathan, and Declan, our leadership team combines decades of on-site experience with rigorous professional engineering standards.
                        </p>
<p>
                            We bridge the gap between technical complexity and practical execution. Whether serving large-scale contractors or private homeowners, our mission remains constant: to deliver clarity, compliance, and quality without compromise.
                        </p>
</div>
<div className="mt-12 pt-12 border-t border-[#0F1B2B]/10 grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<span className="block text-3xl font-medium text-[#0F1B2B] mb-1">30+</span>
<span className="text-xs uppercase tracking-wider text-[#6E6E6E]">Years Experience</span>
</div>
<div>
<span className="block text-3xl font-medium text-[#0F1B2B] mb-1">100%</span>
<span className="text-xs uppercase tracking-wider text-[#6E6E6E]">Certified Compliant</span>
</div>
<div>
<span className="block text-3xl font-medium text-[#0F1B2B] mb-1">Nationwide</span>
<span className="text-xs uppercase tracking-wider text-[#6E6E6E]">Service Coverage</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative mt-8 lg:mt-0">
<div className="aspect-[3/4] overflow-hidden rounded-sm bg-[#0F1B2B]">
<img alt="Construction Management" className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?q=80&amp;w=1997&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-[#0F1B2B]/5" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-[#0F1B2B] mb-4">Engineering Consultancy</h2>
<p className="text-[#6E6E6E] font-light leading-relaxed">Comprehensive, regulated support for construction projects. From initial surveys to final mortgage sign-offs, we ensure every detail meets industry standards.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-[#C9743A] text-sm font-medium hover:text-[#0F1B2B] transition-colors group" href="#contact">
                    View Service Details 
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0F1B2B]/10 border border-[#0F1B2B]/10">


<div className="bg-white p-10 hover:bg-[#F4F1EC]/30 transition-colors group">
<span className="iconify text-[#6E6E6E] group-hover:text-[#C9743A] transition-colors mb-6" data-icon="lucide:hard-hat" data-strokeWidth="1.5" data-width="28"></span>
<h3 className="text-lg font-medium text-[#0F1B2B] mb-3">Project Management</h3>
<p className="text-sm text-[#6E6E6E] font-light leading-relaxed">Strategic oversight ensuring strict adherence to timelines, budgets, and quality protocols.</p>
</div>

<div className="bg-white p-10 hover:bg-[#F4F1EC]/30 transition-colors group">
<span className="iconify text-[#6E6E6E] group-hover:text-[#C9743A] transition-colors mb-6" data-icon="lucide:ruler" data-strokeWidth="1.5" data-width="28"></span>
<h3 className="text-lg font-medium text-[#0F1B2B] mb-3">Quantity Surveying</h3>
<p className="text-sm text-[#6E6E6E] font-light leading-relaxed">Precise cost estimation and budget management to maximize value engineering.</p>
</div>

<div className="bg-white p-10 hover:bg-[#F4F1EC]/30 transition-colors group">
<span className="iconify text-[#6E6E6E] group-hover:text-[#C9743A] transition-colors mb-6" data-icon="lucide:file-check-2" data-strokeWidth="1.5" data-width="28"></span>
<h3 className="text-lg font-medium text-[#0F1B2B] mb-3">Health &amp; Safety</h3>
<p className="text-sm text-[#6E6E6E] font-light leading-relaxed">Rigorous site inspections, risk assessments, and compliance documentation.</p>
</div>

<div className="bg-white p-10 hover:bg-[#F4F1EC]/30 transition-colors group">
<span className="iconify text-[#6E6E6E] group-hover:text-[#C9743A] transition-colors mb-6" data-icon="lucide:clipboard-check" data-strokeWidth="1.5" data-width="28"></span>
<h3 className="text-lg font-medium text-[#0F1B2B] mb-3">Snagging &amp; Defects</h3>
<p className="text-sm text-[#6E6E6E] font-light leading-relaxed">Detailed forensic inspections to identify defects prior to handover.</p>
</div>

<div className="bg-white p-10 hover:bg-[#F4F1EC]/30 transition-colors group">
<span className="iconify text-[#6E6E6E] group-hover:text-[#C9743A] transition-colors mb-6" data-icon="lucide:pen-tool" data-strokeWidth="1.5" data-width="28"></span>
<h3 className="text-lg font-medium text-[#0F1B2B] mb-3">Mortgage Sign-Off</h3>
<p className="text-sm text-[#6E6E6E] font-light leading-relaxed">Professional certification for lenders, facilitating fund release at key stages.</p>
</div>

<div className="bg-white p-10 hover:bg-[#F4F1EC]/30 transition-colors group">
<span className="iconify text-[#6E6E6E] group-hover:text-[#C9743A] transition-colors mb-6" data-icon="lucide:home" data-strokeWidth="1.5" data-width="28"></span>
<h3 className="text-lg font-medium text-[#0F1B2B] mb-3">Condition Surveys</h3>
<p className="text-sm text-[#6E6E6E] font-light leading-relaxed">Structural assessments determining the stability and maintenance needs of existing assets.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F4F1EC]" id="products">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1">
<div className="grid grid-cols-2 gap-4">
<div className="bg-white h-56 w-full flex items-center justify-center border border-[#0F1B2B]/5 p-6 shadow-sm">
<span className="iconify text-[#6E6E6E]/30" data-icon="lucide:image" data-strokeWidth="1" data-width="40"></span>
</div>
<div className="bg-[#0F1B2B] h-56 w-full flex items-center justify-center p-6 shadow-md translate-y-8">
<span className="iconify text-white/20" data-icon="lucide:layers" data-strokeWidth="1" data-width="40"></span>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-[#0F1B2B] mb-6">Certified Steel Lintels &amp;<br/>Building Materials</h2>
<p className="text-[#6E6E6E] mb-10 font-light leading-relaxed text-lg">
                        We supply high-performance, fully certified steel lintels designed for absolute structural integrity. Engineered for contractors demanding compliance and reliability.
                    </p>
<ul className="space-y-6 border-l border-[#0F1B2B]/10 pl-8">
<li className="relative">
<h4 className="text-lg font-medium text-[#0F1B2B]">Steel Lintels</h4>
<p className="text-sm text-[#6E6E6E] mt-1 font-light">Standard and custom heavy-duty lintels, certified for residential and commercial loads.</p>
</li>
<li className="relative">
<h4 className="text-lg font-medium text-[#0F1B2B]">Wall Ties</h4>
<p className="text-sm text-[#6E6E6E] mt-1 font-light">Critical structural components for cavity wall stability.</p>
</li>
<li className="relative">
<h4 className="text-lg font-medium text-[#0F1B2B]">Plastering Supplies</h4>
<p className="text-sm text-[#6E6E6E] mt-1 font-light">Professional grade beads, mesh, and accessories.</p>
</li>
</ul>
<div className="mt-12">
<a className="inline-block text-[#C9743A] text-sm font-medium uppercase tracking-wider hover:text-[#0F1B2B] transition-colors border-b border-[#C9743A] pb-1 hover:border-[#0F1B2B]" href="#contact">
                            Enquire about stock &amp; specifications
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0F1B2B] text-[#F4F1EC] relative overflow-hidden" id="grants">

<div className="absolute right-0 top-0 w-1/3 h-full bg-[#6E6E6E]/5 skew-x-12 transform origin-top-right"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
<div className="lg:w-1/2">
<div className="inline-block px-3 py-1 border border-[#6E6E6E]/30 rounded-full mb-6">
<span className="text-[#C9743A] text-xs font-medium uppercase tracking-widest">Specialist Service</span>
</div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6 text-white">Vacant &amp; Derelict<br/>Property Grants</h2>
<p className="text-[#F4F1EC]/70 text-lg font-light leading-relaxed mb-8">
                        We provide end-to-end professional assistance for the Vacant Property Refurbishment Grant. From initial structural reports to application submission, we guide homeowners through the complexities of state funding.
                    </p>
<a className="inline-flex items-center justify-center px-6 py-3 bg-[#F4F1EC] text-[#0F1B2B] text-xs font-medium uppercase tracking-widest hover:bg-[#C9743A] hover:text-white transition-all rounded-sm" href="#contact">
                        Check Eligibility
                    </a>
</div>
<div className="lg:w-1/2 grid grid-cols-2 gap-6">
<div className="space-y-2">
<div className="h-px bg-[#6E6E6E]/50 w-full mb-4"></div>
<h4 className="text-white font-medium">Initial Inspection</h4>
<p className="text-sm text-[#F4F1EC]/60 font-light">Comprehensive site review to determine grant viability.</p>
</div>
<div className="space-y-2">
<div className="h-px bg-[#6E6E6E]/50 w-full mb-4"></div>
<h4 className="text-white font-medium">Engineering Reports</h4>
<p className="text-sm text-[#F4F1EC]/60 font-light">Certified documentation required by local councils.</p>
</div>
<div className="space-y-2">
<div className="h-px bg-[#6E6E6E]/50 w-full mb-4"></div>
<h4 className="text-white font-medium">Application Support</h4>
<p className="text-sm text-[#F4F1EC]/60 font-light">Guidance through the paperwork and submission process.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-[#0F1B2B]/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#0F1B2B]/10">
<div className="p-8 text-center md:text-left">
<span className="iconify text-[#0F1B2B] mb-4" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="32"></span>
<h3 className="text-lg font-medium text-[#0F1B2B] mb-2">Trusted &amp; Reliable</h3>
<p className="text-sm text-[#6E6E6E] font-light">A family-run entity prioritizing transparency and long-term client relationships.</p>
</div>
<div className="p-8 text-center md:text-left">
<span className="iconify text-[#0F1B2B] mb-4" data-icon="lucide:award" data-strokeWidth="1.5" data-width="32"></span>
<h3 className="text-lg font-medium text-[#0F1B2B] mb-2">Technical Expertise</h3>
<p className="text-sm text-[#6E6E6E] font-light">Deep engineering knowledge ensures every product and service meets strict standards.</p>
</div>
<div className="p-8 text-center md:text-left">
<span className="iconify text-[#0F1B2B] mb-4" data-icon="lucide:users-2" data-strokeWidth="1.5" data-width="32"></span>
<h3 className="text-lg font-medium text-[#0F1B2B] mb-2">Client-Centric</h3>
<p className="text-sm text-[#6E6E6E] font-light">Tailored support for both commercial contractors and private homeowners.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F4F1EC]" id="contact">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-[#0F1B2B] mb-4">Start Your Enquiry</h2>
<p className="text-[#6E6E6E] font-light">Please fill out the form below to discuss your project, grant application, or material requirements.</p>
</div>
<form action="#" className="space-y-8 bg-white p-10 lg:p-12 shadow-sm border border-[#0F1B2B]/5 rounded-sm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="block text-xs font-medium text-[#0F1B2B] uppercase tracking-wider" htmlFor="name">Full Name</label>
<input className="w-full bg-[#F4F1EC]/50 border-b border-[#6E6E6E]/20 px-0 py-3 text-[#0F1B2B] focus:outline-none focus:border-[#C9743A] transition-colors placeholder-[#6E6E6E]/40 rounded-none" id="name" placeholder="e.g. John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-[#0F1B2B] uppercase tracking-wider" htmlFor="email">Email Address</label>
<input className="w-full bg-[#F4F1EC]/50 border-b border-[#6E6E6E]/20 px-0 py-3 text-[#0F1B2B] focus:outline-none focus:border-[#C9743A] transition-colors placeholder-[#6E6E6E]/40 rounded-none" id="email" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-[#0F1B2B] uppercase tracking-wider" htmlFor="interest">Area of Interest</label>
<div className="relative">
<select className="w-full bg-[#F4F1EC]/50 border-b border-[#6E6E6E]/20 px-0 py-3 text-[#0F1B2B] focus:outline-none focus:border-[#C9743A] appearance-none rounded-none cursor-pointer" id="interest">
<option>Engineering Consultancy</option>
<option>Steel Lintels &amp; Materials</option>
<option>Grant Services (Vacant Property)</option>
<option>Health &amp; Safety Compliance</option>
<option>General Enquiry</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-[#6E6E6E]">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-[#0F1B2B] uppercase tracking-wider" htmlFor="message">Message Details</label>
<textarea className="w-full bg-[#F4F1EC]/50 border-b border-[#6E6E6E]/20 px-0 py-3 text-[#0F1B2B] focus:outline-none focus:border-[#C9743A] transition-colors placeholder-[#6E6E6E]/40 rounded-none resize-none" id="message" placeholder="Describe your project requirements..." rows="4"></textarea>
</div>
<button className="w-full bg-[#0F1B2B] hover:bg-[#C9743A] text-white font-medium uppercase tracking-widest text-xs py-4 transition-colors duration-300" type="submit">
                    Send Message
                </button>
</form>
</div>
</section>

<footer className="bg-[#0F1B2B] text-[#F4F1EC] pt-24 pb-12 mt-auto border-t border-[#6E6E6E]/20">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-xl tracking-tight font-medium uppercase block mb-6 text-white" href="#">
                        Curran Building<span className="text-[#6E6E6E] mx-1">/</span>Solutions
                    </a>
<p className="text-[#6E6E6E] text-sm font-light leading-relaxed max-w-sm mb-8">
                        Professional engineering, certified products, and trusted construction guidance. Committed to excellence in the Irish built environment.
                    </p>
<div className="flex space-x-6">
<a className="text-[#6E6E6E] hover:text-[#C9743A] transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-strokeWidth="1.5" data-width="20"></span>
</a>
<a className="text-[#6E6E6E] hover:text-[#C9743A] transition-colors" href="#">
<span className="iconify" data-icon="lucide:facebook" data-strokeWidth="1.5" data-width="20"></span>
</a>
</div>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-[#F4F1EC] mb-6">Expertise</h4>
<ul className="space-y-4 text-sm font-light text-[#6E6E6E]">
<li><a className="hover:text-white transition-colors" href="#">Engineering</a></li>
<li><a className="hover:text-white transition-colors" href="#">Project Management</a></li>
<li><a className="hover:text-white transition-colors" href="#">Quantity Surveying</a></li>
<li><a className="hover:text-white transition-colors" href="#">Vacant Property Grants</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-[#F4F1EC] mb-6">Contact</h4>
<ul className="space-y-4 text-sm font-light text-[#6E6E6E]">
<li className="flex items-start gap-3">
<span className="iconify text-[#C9743A] mt-0.5" data-icon="lucide:mail" data-width="16"></span>
                            info@curranbuildingsolutions.ie
                        </li>
<li className="flex items-start gap-3">
<span className="iconify text-[#C9743A] mt-0.5" data-icon="lucide:phone" data-width="16"></span>
                            +353 (0) XX XXX XXXX
                        </li>
<li className="flex items-start gap-3">
<span className="iconify text-[#C9743A] mt-0.5" data-icon="lucide:map-pin" data-width="16"></span>
                            Ireland
                        </li>
</ul>
</div>
</div>
<div className="border-t border-[#6E6E6E]/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#6E6E6E] font-light">
<p>© 2023 Curran Building Solutions. All rights reserved.</p>
<div className="flex gap-8 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
