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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:round-alt-arrow-up-linear" width="18"></iconify-icon>
</div>
<span className="font-semibold text-sm tracking-tight text-slate-900">Empathy Admissions</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="hover:text-purple-600 transition-colors text-sm font-medium text-slate-500" href="#philosophy">Philosophy</a><a className="text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors" href="#reviews">Reviews</a>
<a className="px-5 py-2.5 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 transition-all hover:shadow-lg hover:shadow-purple-600/20" href="#contact">
                    Free Consultation
                </a>
</div>

<div className="md:hidden">
<label className="cursor-pointer p-2 text-slate-600 hover:text-purple-600" htmlFor="mobile-menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</label>
</div>
</div>
</nav>

<input className="hidden" id="mobile-menu-toggle" type="checkbox"/>
<div className="hidden fixed top-20 left-0 w-full bg-white border-b border-slate-200 p-6 z-40 md:hidden shadow-xl" id="mobile-menu">
<div className="flex flex-col gap-6">
<a className="text-sm font-medium text-slate-600" href="#about">About</a>
<a className="text-sm font-medium text-slate-600" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600" href="#philosophy">Philosophy</a>
<a className="text-sm font-medium text-slate-600" href="#reviews">Reviews</a>
<a className="text-sm font-bold text-purple-600" href="#contact">Contact Us</a>
</div>
</div>

<section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden bg-grid">

<div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-purple-50/50 to-transparent -z-10"></div>
<div className="absolute -top-[20%] left-[20%] w-[600px] h-[600px] bg-purple-200/20 blur-[100px] rounded-full -z-10"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-100 bg-purple-50/80 backdrop-blur-sm mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
<span className="text-xs font-medium text-purple-700">Accepting students for 2024-2025</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                College admissions <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">reimagined.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
                A strategic, holistic approach to the application process. We replace anxiety with clarity and help high-achievers find their best-fit future.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/20 transition-all flex items-center justify-center gap-2" href="#contact">
                    Start your journey
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center justify-center" href="#services">
                    Explore services
                </a>
</div>
</div>
</section>

<div className="border-y border-slate-200 bg-slate-50/50">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
<div className="p-8 text-center">
<div className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">100%</div>
<div className="text-xs font-medium text-slate-500">Custom Strategy</div>
</div>
<div className="p-8 text-center">
<div className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">Top 20</div>
<div className="text-xs font-medium text-slate-500">School Placements</div>
</div>
<div className="p-8 text-center">
<div className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">24/7</div>
<div className="text-xs font-medium text-slate-500">Support Access</div>
</div>
<div className="p-8 text-center">
<div className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">500+</div>
<div className="text-xs font-medium text-slate-500">Essays Edited</div>
</div>
</div>
</div>

<section className="py-24 bg-white" id="philosophy">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">The methodology</h2>
<p className="text-slate-500 max-w-lg text-lg">We don't just fill out forms. We build narratives that resonate deeply with admissions officers.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Empathy First</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        The college process shouldn't destroy mental health. By prioritizing well-being, we turn a stressful time into a period of genuine self-discovery.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Data Driven</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Strategic guidance tailored to academic profiles and extracurricular strengths, ensuring a balanced, realistic, and ambitious college list.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Narrative Craft</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        We extract the authentic voice. Through deep drafting, essays transform from simple assignments into compelling personal stories that stand out.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-y border-slate-200" id="about">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
<div className="w-full md:w-1/2 relative">

<div className="aspect-[4/3] rounded-2xl bg-white border border-slate-200 relative overflow-hidden flex items-center justify-center shadow-lg group">
<div className="bg-slate-50 opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 text-center pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex group-hover:text-purple-600 group-hover:scale-105 transition-all duration-500 text-slate-300 bg-white w-24 h-24 border-slate-100 border rounded-full mr-auto mb-6 ml-auto shadow-sm items-center justify-center">
</div>
<p className="text-lg font-semibold text-slate-900">Founder Name</p>
<p className="text-xs text-purple-600 font-medium mt-1 uppercase tracking-wider">Lead Strategist</p>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<div className="inline-block px-3 py-1 mb-6 border border-purple-200 rounded-full bg-purple-50">
<span className="text-xs font-semibold text-purple-700 uppercase tracking-wider">About The Firm</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-8 leading-tight">Your champion  in the arena.</h2>
<p className="text-slate-500 mb-8 leading-relaxed text-lg font-normal">
                   Founded on the belief that every student deserves expert strategy in their corner. Empathy Admissions bridges the gap between ambition and reality with a precise, personalized execution plan.
               </p>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl bg-white hover:border-purple-200 transition-colors shadow-sm">
<div className="p-2 bg-purple-50 rounded-lg text-purple-600">
<iconify-icon icon="solar:medal-ribbon-star-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-bold text-slate-900">Certified Educational Planner</h4>
<p className="text-xs text-slate-500">Highest industry credential</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl bg-white hover:border-purple-200 transition-colors shadow-sm">
<div className="p-2 bg-purple-50 rounded-lg text-purple-600">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-bold text-slate-900">Member of IECA &amp; NACAC</h4>
<p className="text-xs text-slate-500">Adhering to strict ethical standards</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start mb-16">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Execution plans</h2>
<p className="text-slate-500 text-lg">From 9th grade planning to senior year applications, we offer flexible support tailored to your family's needs.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors mt-4 group" href="#contact">
                    View Pricing <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group p-10 bg-white rounded-2xl border border-slate-200 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5 transition-all relative overflow-hidden">
<div className="inline-block px-3 py-1 mb-6 rounded-md bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider">
                        Most Popular
                    </div>
<h3 className="text-2xl font-bold text-slate-900 mb-4">Comprehensive Package</h3>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">
                        Full guidance from junior year through acceptance. Includes list building, essay coaching, interview prep, and negotiation.
                    </p>
<div className="space-y-4 mb-10">
<div className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-5 h-5 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div> 
                            Unlimited meetings
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-5 h-5 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div> 
                            Custom timeline management
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-5 h-5 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div> 
                            Essay editing &amp; feedback
                        </div>
</div>
<button className="w-full py-3.5 border border-slate-200 text-slate-900 rounded-lg hover:bg-slate-50 transition-all font-semibold text-sm">
                        Inquire Details
                    </button>
</div>

<div className="group p-10 bg-white rounded-2xl border border-slate-200 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5 transition-all relative overflow-hidden">
<div className="inline-block px-3 py-1 mb-6 rounded-md bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">
                        Flexible
                    </div>
<h3 className="text-2xl font-bold text-slate-900 mb-4">Hourly Consulting</h3>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">
                        Flexible support for specific needs. Perfect for younger students starting early, or seniors needing final reviews.
                    </p>
<div className="space-y-4 mb-10">
<div className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-5 h-5 rounded-full bg-slate-50 text-slate-400 group-hover:text-purple-600 group-hover:bg-purple-50 transition-colors flex items-center justify-center shrink-0">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div> 
                            Course selection advice
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-5 h-5 rounded-full bg-slate-50 text-slate-400 group-hover:text-purple-600 group-hover:bg-purple-50 transition-colors flex items-center justify-center shrink-0">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div> 
                            Summer program applications
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-5 h-5 rounded-full bg-slate-50 text-slate-400 group-hover:text-purple-600 group-hover:bg-purple-50 transition-colors flex items-center justify-center shrink-0">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div> 
                            Final application review
                        </div>
</div>
<button className="w-full py-3.5 border border-slate-200 text-slate-900 rounded-lg hover:bg-slate-50 transition-all font-semibold text-sm">
                        Book Session
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
<div className="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md transition-all">
<h4 className="font-bold text-slate-900 mb-2 text-sm">Essay Bootcamp</h4>
<p className="text-xs text-slate-500 leading-relaxed">Intensive summer workshops to finalize the Common App essay before school starts.</p>
</div>
<div className="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md transition-all">
<h4 className="font-bold text-slate-900 mb-2 text-sm">List Building</h4>
<p className="text-xs text-slate-500 leading-relaxed">Curating a balanced list of Reach, Target, and Safety schools based on data.</p>
</div>
<div className="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md transition-all">
<h4 className="font-bold text-slate-900 mb-2 text-sm">Transfers</h4>
<p className="text-xs text-slate-500 leading-relaxed">Specialized guidance for students looking to transfer institutions effectively.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-t border-slate-200" id="reviews">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-16 text-center">Results speak.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow relative">
<div className="absolute -top-3 left-8 bg-white px-2 text-purple-600">
<iconify-icon icon="solar:quote-up-bold" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed pt-2">"The process felt overwhelming until we started working with Empathy Admissions. The calm, structured approach made all the difference for our daughter."</p>
<div className="flex items-center gap-3 border-t border-slate-100 pt-4">
<div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">P</div>
<div>
<p className="text-xs font-bold text-slate-900">Parent</p>
<p className="text-[10px] text-slate-500">Class of 2023</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow relative">
<div className="absolute -top-3 left-8 bg-white px-2 text-purple-600">
<iconify-icon icon="solar:quote-up-bold" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed pt-2">"I never thought I could write an essay that felt so 'me'. Thank you for pushing me to dig deeper and find my real story."</p>
<div className="flex items-center gap-3 border-t border-slate-100 pt-4">
<div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">S</div>
<div>
<p className="text-xs font-bold text-slate-900">Student</p>
<p className="text-[10px] text-slate-500">NYU Stern</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow relative">
<div className="absolute -top-3 left-8 bg-white px-2 text-purple-600">
<iconify-icon icon="solar:quote-up-bold" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed pt-2">"Honest, kind, and incredibly knowledgeable. We got into our top choice school, but more importantly, we survived senior year."</p>
<div className="flex items-center gap-3 border-t border-slate-100 pt-4">
<div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">P</div>
<div>
<p className="text-xs font-bold text-slate-900">Parent</p>
<p className="text-[10px] text-slate-500">Class of 2024</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-white" id="contact">
<div className="max-w-3xl mx-auto">
<div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xl shadow-slate-200/50">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Initiate consultation</h2>
<p className="text-slate-500 text-sm">Schedule a complimentary 20-minute strategy session.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 ml-1">Student Name</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 ml-1">Parent Name</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none" placeholder="John Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 ml-1">Email Address</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none" placeholder="name@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 ml-1">Graduation Year</label>
<div className="relative">
<select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none appearance-none cursor-pointer">
<option>2025</option>
<option>2026</option>
<option>2027</option>
<option>2028</option>
<option>Transfer / Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 ml-1">How can we help?</label>
<textarea className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none resize-none" placeholder="Tell us a bit about your student..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-purple-600 text-white rounded-lg font-semibold text-sm hover:bg-purple-700 transition-all hover:shadow-lg hover:shadow-purple-600/20 flex items-center justify-center gap-2 mt-4" type="button">
                        Submit Request
                        <iconify-icon className="-mt-0.5" icon="solar:plain-3-linear"></iconify-icon>
</button>
<p className="text-[10px] text-center text-slate-400 mt-4">
                        Data is secure. We respect your privacy.
                    </p>
</form>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:round-alt-arrow-up-linear" width="18"></iconify-icon>
</div>
<span className="font-bold text-sm tracking-tight text-slate-900">Empathy Admissions</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                        Navigating the complex world of college admissions with strategy, integrity, and heart.
                    </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-16">
<div>
<h4 className="font-semibold text-slate-900 text-xs mb-6 uppercase tracking-wider">Site</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-purple-600 transition-colors" href="#">Home</a></li>
<li><a className="text-xs text-slate-500 hover:text-purple-600 transition-colors" href="#about">About</a></li>
<li><a className="text-xs text-slate-500 hover:text-purple-600 transition-colors" href="#services">Services</a></li>
<li><a className="text-xs text-slate-500 hover:text-purple-600 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-xs mb-6 uppercase tracking-wider">Resources</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-purple-600 transition-colors" href="#">Blog</a></li>
<li><a className="text-xs text-slate-500 hover:text-purple-600 transition-colors" href="#">College List</a></li>
<li><a className="text-xs text-slate-500 hover:text-purple-600 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-xs mb-6 uppercase tracking-wider">Social</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-purple-600 transition-colors" href="#">LinkedIn</a></li>
<li><a className="text-xs text-slate-500 hover:text-purple-600 transition-colors" href="#">Instagram</a></li>
<li><a className="text-xs text-slate-500 hover:text-purple-600 transition-colors" href="#">Twitter</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-400">© 2024 Empathy Admissions. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-[10px] text-slate-400 hover:text-slate-600 transition-colors" href="#">Privacy Policy</a>
<a className="text-[10px] text-slate-400 hover:text-slate-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
