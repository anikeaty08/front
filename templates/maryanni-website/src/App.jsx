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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Simple SPA Router
        function showPage(pageId) {
            document.getElementById('page-home').classList.add('hidden');
            document.getElementById('page-services').classList.add('hidden');
            
            if (pageId === 'home') {
                document.getElementById('page-home').classList.remove('hidden');
            } else if (pageId === 'services') {
                document.getElementById('page-services').classList.remove('hidden');
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Scroll to Contact
        function scrollToContact() {
            showPage('home');
            setTimeout(() => {
                const contactSection = document.getElementById('contact-section');
                if(contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex items-center gap-2 cursor-pointer" onclick="showPage('home')">
<span className="text-2xl tracking-tight font-semibold text-slate-900 uppercase">MARYANNI</span>
<i className="text-indigo-600" data-lucide="triangle" strokeWidth="1.5"></i>
</div>
<div className="hidden md:flex space-x-10">
<button className="text-base font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="showPage('home')">About</button>
<button className="text-base font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="showPage('services')">Services</button>
<button className="text-base font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="scrollToContact()">Contact</button>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex text-sm font-medium text-slate-500 gap-2">
<span className="text-slate-900 cursor-pointer">EN</span>
<span>|</span>
<span className="cursor-pointer hover:text-slate-900">RU</span>
</div>
<button className="md:hidden text-slate-900">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</nav>

<main className="flex-grow pt-20">

<div className="block" id="page-home">

<section className="bg-indigo-50/50 py-24 sm:py-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 space-y-8">
<h1 className="text-5xl sm:text-6xl tracking-tight font-semibold text-slate-900 leading-tight">
                            WHO WE ARE?
                        </h1>
<p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                            Management Consultancy • Proprietary Investments • Corporate &amp; Project Finance Support. We support international entrepreneurs and corporate groups requiring structured, actionable execution rather than abstract advice.
                        </p>
<div className="flex gap-4 pt-4">
<button className="bg-indigo-600 text-white rounded-full px-8 py-3.5 text-lg font-medium hover:bg-indigo-700 transition-all shadow-sm" onclick="showPage('services')">
                                Explore Services
                            </button>
</div>
</div>
<div className="lg:w-1/2 relative w-full flex justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-purple-50 rounded-full blur-3xl opacity-50"></div>
<div className="relative grid grid-cols-2 gap-6 w-full max-w-md">
<div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3 transform translate-y-4">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<i data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-slate-700 text-center">Corporate Structuring</span>
</div>
<div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3">
<div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
<i data-lucide="pie-chart" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-slate-700 text-center">Project Finance</span>
</div>
<div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3 transform translate-y-4">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<i data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-slate-700 text-center">Regulatory Tax</span>
</div>
<div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600">
<i data-lucide="globe" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-slate-700 text-center">Market Entry</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
<p className="text-base text-slate-400 font-medium flex items-center gap-2">
<span className="text-slate-900 cursor-pointer hover:underline">Home</span>
<span className="text-slate-300">/</span>
<span>About</span>
</p>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 uppercase">Maryanni</h2>
<div className="space-y-6 text-lg text-slate-600">
<p>
                                Maryanni is a Dubai-based advisory and execution platform operating from the Meydan Free Zone. We support international entrepreneurs, corporate groups, and project owners operating across the UAE, Europe, and other key jurisdictions.
                            </p>
<p>
                                In a constantly changing and innovating global financial world, organizations must think outside the box culturally, technologically, and operationally. MARYANNI works exactly in this way. We anticipate what our clients want, provide what they need, and build strong relationships by thinking about our customers every day.
                            </p>
</div>
</div>

<div className="grid grid-cols-2 gap-8 relative">
<div className="space-y-2">
<h3 className="text-6xl tracking-tight font-light text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">1000<span className="text-5xl">+</span></h3>
<p className="text-lg font-medium text-slate-900 uppercase tracking-widest bg-indigo-100/50 inline-block px-3 py-1 rounded-md">Projects</p>
</div>
<div className="space-y-2 pt-12">
<h3 className="text-6xl tracking-tight font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">11<span className="text-5xl">+</span></h3>
<p className="text-lg font-medium text-slate-900 uppercase tracking-widest bg-blue-100/50 inline-block px-3 py-1 rounded-md">Years</p>
</div>
<div className="space-y-2">
<h3 className="text-6xl tracking-tight font-light text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">98<span className="text-5xl">%</span></h3>
<p className="text-lg font-medium text-slate-900 uppercase tracking-widest bg-emerald-100/50 inline-block px-3 py-1 rounded-md">Success Rate</p>
</div>
<div className="space-y-2 pt-12">
<h3 className="text-6xl tracking-tight font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">523</h3>
<p className="text-lg font-medium text-slate-900 uppercase tracking-widest bg-purple-100/50 inline-block px-3 py-1 rounded-md">Happy Clients</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8">
<i className="w-12 h-12 mx-auto text-indigo-600" data-lucide="target" strokeWidth="1.5"></i>
<h2 className="text-3xl tracking-tight font-semibold text-slate-900">Our Core Principle</h2>
<p className="text-xl text-slate-600 leading-relaxed">
                        Practical implementation is at the heart of what we do. We translate commercial intent and business objectives into realistic, executable frameworks that account for legal, regulatory, tax, operational, and timing constraints.
                    </p>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
<div className="text-center max-w-2xl mx-auto space-y-4">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 uppercase">Activity Profile</h2>
<p className="text-lg text-slate-600">Maryanni’s licensed activities under the Meydan Free Zone reflect our integrated, hands-on approach.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-sm">
<i data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-semibold text-slate-900">Management Consultancy</h3>
<p className="text-lg text-slate-600">Delivering strategic business advisory, planning, execution support, and operational guidance in complex environments.</p>
</div>
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-sm">
<i data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-semibold text-slate-900">Investment &amp; Management</h3>
<p className="text-lg text-slate-600">Investing in, establishing, and managing commercial enterprises on a proprietary basis with aligned structural logic.</p>
</div>
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-sm">
<i data-lucide="monitor" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-semibold text-slate-900">Computer Consultancy</h3>
<p className="text-lg text-slate-600">Providing operational and technical consultancy related to business infrastructure, IT systems, and digital frameworks.</p>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 lg:px-8 max-w-7xl mx-auto">
<div className="rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-500 p-12 lg:p-20 text-center relative overflow-hidden shadow-xl">
<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="relative z-10 space-y-8">
<h2 className="text-4xl sm:text-5xl tracking-tight font-semibold text-white uppercase">We Provide Innovative<br/>Advisory Solutions</h2>
<p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                            Transforming intent into reality with strict adherence to timing constraints, regulatory structures, and actionable frameworks.
                        </p>
<button className="bg-white text-indigo-900 rounded-full px-8 py-3.5 text-lg font-semibold hover:bg-slate-50 transition-all shadow-lg inline-flex items-center gap-2 mt-4" onclick="scrollToContact()">
                            Get a free consultation <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
<div className="flex flex-col lg:flex-row gap-12 justify-between items-end">
<h2 className="text-4xl tracking-tight font-semibold text-slate-900 uppercase">Why Us?</h2>
<p className="text-lg text-slate-600 max-w-xl">
                            We specialize in helping clients navigate complex environments, maintaining discipline in structure, documentation, and implementation to achieve measurable outcomes.
                        </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
<div className="space-y-4">
<h3 className="text-lg font-semibold text-slate-900 uppercase">Cross-Border Strategy</h3>
<p className="text-base text-slate-600">Bridging the gap across international jurisdictions with compliant setup roadmaps and aligned regulatory frameworks.</p>
<div className="pt-2 text-indigo-400"><i className="w-8 h-8" data-lucide="corner-down-right" strokeWidth="1.5"></i></div>
</div>
<div className="space-y-4">
<h3 className="text-lg font-semibold text-slate-900 uppercase">Tax Efficiency</h3>
<p className="text-base text-slate-600">Navigating UAE corporate tax readiness, reporting, and delivering optimization strategies for global ventures.</p>
<div className="pt-2 text-purple-400"><i className="w-8 h-8" data-lucide="corner-right-up" strokeWidth="1.5"></i></div>
</div>
<div className="space-y-4">
<h3 className="text-lg font-semibold text-slate-900 uppercase">Project Finance</h3>
<p className="text-base text-slate-600">Structuring projects to be financeable, evaluating collateral, and coordinating stringent due diligence processes.</p>
<div className="pt-2 text-blue-400"><i className="w-8 h-8" data-lucide="corner-down-right" strokeWidth="1.5"></i></div>
</div>
<div className="space-y-4">
<h3 className="text-lg font-semibold text-slate-900 uppercase">Proprietary Stance</h3>
<p className="text-base text-slate-600">Hands-on investment participation with explicit governance, driving value creation alongside operational support.</p>
<div className="pt-2 text-emerald-400"><i className="w-8 h-8" data-lucide="corner-right-down" strokeWidth="1.5"></i></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-2">
<i className="w-4 h-4" data-lucide="shield-alert" strokeWidth="1.5"></i> Clear Boundaries
                        </div>
<h2 className="text-3xl tracking-tight font-semibold text-slate-900">Investment &amp; Capital Stance</h2>
<p className="text-lg text-slate-600">
                            In suitable cases, we may participate directly in selected commercial projects on a proprietary basis, always under clearly documented terms, defined governance structures, and in full alignment with our licensed activities.
                        </p>
<ul className="space-y-4 pt-4">
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<span className="text-lg text-slate-700">We do <strong>not</strong> operate as an investment fund.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<span className="text-lg text-slate-700">We do <strong>not</strong> manage pooled third-party capital.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<span className="text-lg text-slate-700">We do <strong>not</strong> offer investment products to the public.</span>
</li>
</ul>
<p className="text-lg text-slate-600 pt-4">
                            Any involvement with external capital is handled selectively, on a structured and typically repayable basis, ensuring strict regulatory compliance.
                        </p>
</div>
<div className="lg:w-1/2 bg-white p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute -right-12 -top-12 w-48 h-48 bg-indigo-50 rounded-full blur-3xl"></div>
<i className="w-16 h-16 text-indigo-600 mb-8 relative z-10" data-lucide="scale" strokeWidth="1.5"></i>
<h3 className="text-2xl tracking-tight font-semibold text-slate-900 mb-4 relative z-10">Regulatory Alignment</h3>
<p className="text-lg text-slate-600 relative z-10">
                            Our activities are conducted in full compliance with UAE regulations. Relevant authorities' approvals are always obtained prior to commencing applicable operations.
                        </p>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
<div className="text-center max-w-2xl mx-auto space-y-4">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 uppercase">How We Work</h2>
<p className="text-lg text-slate-600">Our process is client-centric, structured, and delivery-focused to ensure tangible progress.</p>
</div>
<div className="grid md:grid-cols-5 gap-8">
<div className="space-y-4 relative">
<div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold text-lg z-10 relative">1</div>
<div className="hidden md:block absolute top-5 left-10 w-full h-px bg-slate-200"></div>
<h4 className="text-lg font-semibold text-slate-900">Initial Discussion</h4>
<p className="text-base text-slate-600">Clarify objectives, stakeholders, constraints, and desired outcomes.</p>
</div>
<div className="space-y-4 relative">
<div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold text-lg z-10 relative">2</div>
<div className="hidden md:block absolute top-5 left-10 w-full h-px bg-slate-200"></div>
<h4 className="text-lg font-semibold text-slate-900">Context Review</h4>
<p className="text-base text-slate-600">Analyze documents, logic, regulatory environment, and market factors.</p>
</div>
<div className="space-y-4 relative">
<div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold text-lg z-10 relative">3</div>
<div className="hidden md:block absolute top-5 left-10 w-full h-px bg-slate-200"></div>
<h4 className="text-lg font-semibold text-slate-900">Roadmap Delivery</h4>
<p className="text-base text-slate-600">Present phased options, sequencing, risks, and mitigation strategies.</p>
</div>
<div className="space-y-4 relative">
<div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold text-lg z-10 relative">4</div>
<div className="hidden md:block absolute top-5 left-10 w-full h-px bg-slate-200"></div>
<h4 className="text-lg font-semibold text-slate-900">Implementation</h4>
<p className="text-base text-slate-600">Offer coordination, documentation frameworks, and hands-on assistance.</p>
</div>
<div className="space-y-4 relative">
<div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold text-lg z-10 relative">5</div>
<h4 className="text-lg font-semibold text-slate-900">Monitoring</h4>
<p className="text-base text-slate-600">Track progress, refine approaches, and ensure ongoing compliance.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-4xl tracking-tight font-semibold">Company Details</h2>
<div className="space-y-6">
<div className="border-l-2 border-indigo-500 pl-6 space-y-2">
<p className="text-sm text-slate-400 uppercase tracking-wider font-medium">Legal Entity</p>
<p className="text-xl font-medium text-white">MARYANNI CORPORATION L.L.C-FZ</p>
<p className="text-lg text-slate-300">Meydan Free Zone</p>
</div>
<div className="border-l-2 border-indigo-500 pl-6 space-y-2">
<p className="text-sm text-slate-400 uppercase tracking-wider font-medium">Registered Address</p>
<p className="text-lg text-slate-300">Meydan Grandstand, 6th floor<br/>Meydan Road, Nad Al Sheba<br/>Dubai, U.A.E.</p>
</div>
<div className="border-l-2 border-indigo-500 pl-6 space-y-2">
<p className="text-sm text-slate-400 uppercase tracking-wider font-medium">License Details</p>
<ul className="text-lg text-slate-300 space-y-1">
<li>License Number: 2310053.01</li>
<li>Formation Number: 2310053</li>
<li>Issued: 04/07/2023 | Expiry: 03/07/2026</li>
</ul>
</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl">
<i className="w-12 h-12 text-indigo-400 mb-6" data-lucide="award" strokeWidth="1.5"></i>
<h3 className="text-2xl font-semibold mb-4">Certified &amp; Compliant</h3>
<p className="text-lg text-slate-300 leading-relaxed">
                            Engagements are confidential, tailored to your operating reality, and oriented toward measurable results. We operate with strict discretion and a commitment to ethical practices.
                        </p>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8">
<h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Core Focus Areas</h3>
<div className="flex flex-wrap justify-center gap-4">
<span className="px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-base font-medium">Free Zone Selection Guidance</span>
<span className="px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-base font-medium">Market Entry &amp; Business Expansion</span>
<span className="px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-base font-medium">Tax &amp; Regulatory Consultation</span>
<span className="px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-base font-medium">Business Structure Planning</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact-section">
<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">
<div className="text-center space-y-4">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900">Start a Conversation</h2>
<p className="text-lg text-slate-600">We welcome inquiries from international businesses, entrepreneurs, and corporate groups. All communications are handled with utmost discretion.</p>
</div>
<form className="space-y-6 bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-200">
<div className="grid sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-900">First Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all text-base" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-900">Last Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all text-base" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-900">Work Email</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all text-base" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-900">How can we help?</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all text-base resize-none" placeholder="Tell us about your project or inquiry..." rows="4"></textarea>
</div>
<div className="flex items-center gap-3 py-2">
<div className="w-5 h-5 rounded border border-slate-300 flex items-center justify-center cursor-pointer bg-slate-50 hover:bg-white" onclick="this.classList.toggle('bg-indigo-600'); this.classList.toggle('border-indigo-600'); this.querySelector('i').classList.toggle('hidden');">
<i className="w-3.5 h-3.5 text-white hidden" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-sm text-slate-600 cursor-pointer">I agree to the privacy policy and terms.</span>
</div>
<button className="w-full bg-slate-900 text-white rounded-xl px-8 py-4 text-lg font-medium hover:bg-slate-800 transition-all shadow-sm" type="button">
                            Submit Inquiry
                        </button>
</form>
</div>
</section>

<section className="border-t border-slate-200 bg-white py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
<div>
<h3 className="text-xl font-semibold text-slate-900">Direct Legal Inquiries</h3>
<p className="text-base text-slate-600 mt-1">For official or legal correspondence.</p>
</div>
<a className="inline-flex items-center gap-3 text-lg font-medium text-indigo-600 hover:text-indigo-700 transition-colors" href="mailto:legal@maryanni.com">
<i data-lucide="mail" strokeWidth="1.5"></i> legal@maryanni.com
                    </a>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-xl tracking-tight font-semibold text-slate-900 uppercase">MARYANNI</span>
<i className="text-indigo-600 w-5 h-5" data-lucide="triangle" strokeWidth="1.5"></i>
</div>
<p className="text-base text-slate-500">© 2024 MARYANNI CORPORATION L.L.C-FZ. All rights reserved.</p>
</div>
</footer>
</div>

<div className="hidden" id="page-services">

<section className="bg-white py-24 sm:py-32 border-b border-slate-100">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8">
<h1 className="text-5xl sm:text-6xl tracking-tight font-semibold text-slate-900 leading-tight">
                        WHAT WE DO
                    </h1>
<p className="text-xl text-slate-600 leading-relaxed">
                        Comprehensive advisory, structuring, and execution services designed to help you navigate multi-jurisdictional challenges and achieve actionable results.
                    </p>
</div>
</section>

<section className="py-24 bg-slate-50 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-5 space-y-6 sticky top-32">
<div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-indigo-600">
<i className="w-8 h-8" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl tracking-tight font-semibold text-slate-900">Management Consultancy</h2>
<p className="text-lg text-slate-600">
                            We provide structured, results-oriented consultancy focused on transforming objectives into actionable execution plans. Emphasizing clear responsibilities, measurable milestones, decision logic, and realistic timelines.
                        </p>
</div>
<div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
<h3 className="text-xl font-semibold text-slate-900 mb-6">Typical Deliverables Include:</h3>
<ul className="space-y-6">
<li className="flex gap-4">
<i className="w-6 h-6 text-indigo-600 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<div>
<h4 className="text-lg font-medium text-slate-900">Strategy &amp; Execution Roadmaps</h4>
<p className="text-base text-slate-600 mt-1">Comprehensive planning tailored to international challenges.</p>
</div>
</li>
<li className="flex gap-4">
<i className="w-6 h-6 text-indigo-600 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<div>
<h4 className="text-lg font-medium text-slate-900">Operating Model Design</h4>
<p className="text-base text-slate-600 mt-1">Governance design, role definitions, and accountability mechanisms.</p>
</div>
</li>
<li className="flex gap-4">
<i className="w-6 h-6 text-indigo-600 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<div>
<h4 className="text-lg font-medium text-slate-900">Commercial Alignment</h4>
<p className="text-base text-slate-600 mt-1">Planning, negotiation support, and coordination across stakeholders and jurisdictions.</p>
</div>
</li>
<li className="flex gap-4">
<i className="w-6 h-6 text-indigo-600 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<div>
<h4 className="text-lg font-medium text-slate-900">Decision Frameworks</h4>
<p className="text-base text-slate-600 mt-1">Risk assessment, timing, sequencing, and resource allocation logic.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-7 order-2 lg:order-1 bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
<h3 className="text-xl font-semibold text-slate-900 mb-6">This Commonly Involves:</h3>
<ul className="space-y-6">
<li className="flex gap-4">
<i className="w-6 h-6 text-blue-600 shrink-0" data-lucide="arrow-right-circle" strokeWidth="1.5"></i>
<div>
<h4 className="text-lg font-medium text-slate-900">Financing Stages</h4>
<p className="text-base text-slate-600 mt-1">Structuring and sequencing from inception to maturity.</p>
</div>
</li>
<li className="flex gap-4">
<i className="w-6 h-6 text-blue-600 shrink-0" data-lucide="arrow-right-circle" strokeWidth="1.5"></i>
<div>
<h4 className="text-lg font-medium text-slate-900">Commercial Responsibilities</h4>
<p className="text-base text-slate-600 mt-1">Allocating roles with strong contractual safeguards and contingencies.</p>
</div>
</li>
<li className="flex gap-4">
<i className="w-6 h-6 text-blue-600 shrink-0" data-lucide="arrow-right-circle" strokeWidth="1.5"></i>
<div>
<h4 className="text-lg font-medium text-slate-900">Valuation &amp; Due Diligence</h4>
<p className="text-base text-slate-600 mt-1">Evaluating collateral, valuation methods, and coordinating deep diligence.</p>
</div>
</li>
<li className="flex gap-4">
<i className="w-6 h-6 text-blue-600 shrink-0" data-lucide="arrow-right-circle" strokeWidth="1.5"></i>
<div>
<h4 className="text-lg font-medium text-slate-900">Stakeholder Management</h4>
<p className="text-base text-slate-600 mt-1">Managing counterparties, advisors, participants, and regulatory authorities.</p>
</div>
</li>
</ul>
</div>
<div className="lg:col-span-5 order-1 lg:order-2 space-y-6 sticky top-32">
<div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
<i className="w-8 h-8" data-lucide="candlestick-chart" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl tracking-tight font-semibold text-slate-900">Corporate &amp; Project Finance Support</h2>
<p className="text-lg text-slate-600">
                            We assist clients in designing robust financing logic and structuring projects for funding discussions, internal capital deployment, or strategic partnerships. Creating durable structures that facilitate capital access while protecting interests.
                        </p>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="w-16 h-16 rounded-2xl bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
<i className="w-8 h-8" data-lucide="diamond" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl tracking-tight font-semibold">Proprietary Investment Participation</h2>
<p className="text-lg text-slate-300">
                            We selectively participate in commercial projects that meet our internal criteria. Each participation is customized with explicit governance, commercial terms, and compliance measures to drive value creation.
                        </p>
<p className="text-lg text-slate-300">
                            Where we invest, we remain hands-on, contributing operational support, structuring expertise, and active involvement to ensure alignment, regulatory adherence, and long-term success.
                        </p>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl space-y-3">
<i className="text-indigo-400" data-lucide="file-text" strokeWidth="1.5"></i>
<h4 className="text-lg font-medium">Tailored Terms</h4>
<p className="text-base text-slate-400">Performance milestones, conditions, and repayment/exit mechanisms.</p>
</div>
<div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl space-y-3">
<i className="text-indigo-400" data-lucide="scale-3d" strokeWidth="1.5"></i>
<h4 className="text-lg font-medium">Governance</h4>
<p className="text-base text-slate-400">Defined reporting frameworks and strict dispute resolution processes.</p>
</div>
<div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl space-y-3">
<i className="text-indigo-400" data-lucide="users-2" strokeWidth="1.5"></i>
<h4 className="text-lg font-medium">Accountability</h4>
<p className="text-base text-slate-400">Clear alignment of execution roles among all project stakeholders.</p>
</div>
<div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl space-y-3">
<i className="text-indigo-400" data-lucide="banknote" strokeWidth="1.5"></i>
<h4 className="text-lg font-medium">Monetization</h4>
<p className="text-base text-slate-400">Practical monetization paths and robust value realization strategies.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-b border-slate-100 text-center">
<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-4">
<h2 className="text-4xl tracking-tight font-semibold text-slate-900 uppercase">Key Services</h2>
<p className="text-xl text-slate-600">Specialized guidance adapted to the UAE framework and cross-border reality.</p>
</div>
</section>

<section className="py-16 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase">Service 01</span>
<h3 className="text-2xl tracking-tight font-semibold text-slate-900">Free Zone Selection Guidance</h3>
<p className="text-lg text-slate-600">We guide clients in selecting the optimal UAE business setup based on business model, compliance, staffing, banking readiness, and cost structures.</p>
</div>
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
<h4 className="text-lg font-medium text-slate-900 mb-2">Outcome:</h4>
<p className="text-base text-slate-600">A defendable selection with a step-by-step setup roadmap, ensuring regulatory alignment and operational efficiency.</p>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<h4 className="text-lg font-medium text-slate-900 mb-2">Outcome:</h4>
<p className="text-base text-slate-600">A flexible, executable plan that adapts to evolving regulations and market dynamics, reducing entry barriers and accelerating growth.</p>
</div>
<div className="order-1 md:order-2 space-y-6">
<span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase">Service 02</span>
<h3 className="text-2xl tracking-tight font-semibold text-slate-900">Market Entry &amp; Business Expansion Strategy</h3>
<p className="text-lg text-slate-600">Supporting international businesses entering the UAE or expanding cross-border through prioritized entry roadmaps, stakeholder mapping, and UAE-specific operating models.</p>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase">Service 03</span>
<h3 className="text-2xl tracking-tight font-semibold text-slate-900">Tax &amp; Regulatory Consultation</h3>
<p className="text-lg text-slate-600">Practical, implementation-focused guidance on UAE and cross-border tax. Covering compliance structuring, operational substance, and corporate tax optimization.</p>
</div>
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
<h4 className="text-lg font-medium text-slate-900 mb-2">Outcome:</h4>
<p className="text-base text-slate-600">Clear guardrails for secure, low-friction execution, minimized risks, and enhanced tax efficiency.</p>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<h4 className="text-lg font-medium text-slate-900 mb-2">Outcome:</h4>
<p className="text-base text-slate-600">Structures that are not merely theoretical but fully executable, supporting future adaptability and growth.</p>
</div>
<div className="order-1 md:order-2 space-y-6">
<span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase">Service 04</span>
<h3 className="text-2xl tracking-tight font-semibold text-slate-900">Business Structure Planning</h3>
<p className="text-lg text-slate-600">Designing workable, compliant, and scalable structures. From holding/operating entity designs to governance frameworks and transfer pricing logic.</p>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center max-w-4xl space-y-6">
<h3 className="text-2xl tracking-tight font-semibold text-slate-900">Computer Consultancy &amp; Facilities Management</h3>
<p className="text-lg text-slate-600">
                        Providing operational and technical consultancy related to business infrastructure, IT systems, computer-based advisory services, digital frameworks, and management of related facilities as part of a holistic expansion plan.
                    </p>
</div>
</section>

<section className="py-20 bg-slate-900 text-white text-center">
<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-6">
<h2 className="text-4xl tracking-tight font-semibold uppercase">Typical Project Areas</h2>
<p className="text-xl text-slate-300">We engage in diverse international commercial and investment contexts across multiple industries.</p>
</div>
</section>

<section className="py-16 bg-slate-900 text-white border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-slate-800 p-8 rounded-2xl">
<h4 className="text-lg font-medium mb-3">Corporate Structuring</h4>
<p className="text-base text-slate-400">Corporate and group structuring for multinational operations aiming for high efficiency.</p>
</div>
<div className="bg-slate-800 p-8 rounded-2xl">
<h4 className="text-lg font-medium mb-3">UAE Market Entry</h4>
<p className="text-base text-slate-400">Strategic UAE market entry and cross-border expansion initiatives guided by practical reality.</p>
</div>
<div className="bg-slate-800 p-8 rounded-2xl">
<h4 className="text-lg font-medium mb-3">International Trade</h4>
<p className="text-base text-slate-400">Forming commercial ventures and robust partnerships across international jurisdictions.</p>
</div>
<div className="bg-slate-800 p-8 rounded-2xl">
<h4 className="text-lg font-medium mb-3">Asset-Backed Ops</h4>
<p className="text-base text-slate-400">Project-based opportunities with detailed financial and operational structuring.</p>
</div>
<div className="bg-slate-800 p-8 rounded-2xl">
<h4 className="text-lg font-medium mb-3">Investment HoldCos</h4>
<p className="text-base text-slate-400">Holding and investment company setups successfully incorporating proprietary elements.</p>
</div>
<div className="bg-slate-800 p-8 rounded-2xl">
<h4 className="text-lg font-medium mb-3">Infrastructure Integration</h4>
<p className="text-base text-slate-400">Operational restructuring, execution support, and integration involving digital and IT components.</p>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8">
<i className="w-12 h-12 mx-auto text-indigo-600" data-lucide="layers" strokeWidth="1.5"></i>
<h2 className="text-3xl tracking-tight font-semibold text-slate-900">End-to-End Support</h2>
<p className="text-xl text-slate-600 leading-relaxed">
                        This combination of services enables us to offer end-to-end support—from advisory and structuring to operational coordination and proprietary participation—while ensuring all engagements align with regulatory standards, tax efficiency, and practical execution.
                    </p>
</div>
</section>

<section className="py-24 bg-indigo-50/50">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8">
<h2 className="text-4xl tracking-tight font-semibold text-slate-900">Ready to build actionable frameworks?</h2>
<p className="text-xl text-slate-600">Our expertise spans industries like technology, finance, trade, and real estate, always prioritizing compliance with UAE laws and international standards.</p>
<button className="bg-indigo-600 text-white rounded-full px-10 py-4 text-lg font-medium hover:bg-indigo-700 transition-all shadow-md inline-flex items-center gap-2" onclick="scrollToContact()">
                        Discuss Your Project <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-xl tracking-tight font-semibold text-slate-900 uppercase">MARYANNI</span>
<i className="text-indigo-600 w-5 h-5" data-lucide="triangle" strokeWidth="1.5"></i>
</div>
<div className="flex gap-6 text-sm font-medium text-slate-500">
<button className="hover:text-slate-900" onclick="showPage('home')">Home</button>
<button className="hover:text-slate-900" onclick="scrollToContact()">Contact</button>
<a className="hover:text-slate-900" href="mailto:legal@maryanni.com">Legal Inquiries</a>
</div>
</div>
</footer>
</div>
</main>


    </>
  );
}
