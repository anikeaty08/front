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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
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
      
<header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm backdrop-blur-md bg-white/90">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="block" href="/">
<img alt="Besupport Lending Corp. Logo" className="w-auto h-10 object-contain" src="https://www.alliedfusionbpo.com/wp-content/uploads/2026/04/Untitled-design.png"/>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="hover:text-[#E6A329] transition-colors text-base font-medium text-slate-700" href="/home">Home</a>
<a className="hover:text-[#E6A329] transition-colors text-base font-medium text-slate-700" href="/#about">About Us</a>
<a className="hover:text-[#E6A329] transition-colors text-base font-medium text-slate-700" href="/#services">Services</a>
<a className="hover:text-[#E6A329] transition-colors text-base font-medium text-slate-700" href="/privacy-policy">Privacy Policy</a>
<a className="hover:text-[#E6A329] transition-colors text-base font-medium text-slate-700" href="/#contact">Contact Us</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center hover:bg-[#d49422] transition-colors duration-200 text-lg font-medium text-[#0B2A5B] bg-[#E6A329] rounded-md pt-2.5 pr-6 pb-2.5 pl-6" href="/#services">
                Learn More
            </a>
<button className="md:hidden text-[#0B2A5B] p-2">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>
<section className="relative bg-[#0B2A5B] overflow-hidden" id="home">
<div className="absolute inset-0">
<img alt="Corporate Office" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0B2A5B]/95 to-[#0B2A5B]/70"></div>
</div>
<div className="z-10 md:py-32 lg:py-40 flex flex-col text-center max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative items-center">
<span className="inline-flex items-center gap-2 text-sm font-medium text-[#E6A329] bg-white/10 border-white/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm"><i className="w-4 h-4" data-lucide="building-2" strokeWidth="1.5"></i> Pay-Day and Salary Loan Programs</span>
<h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 max-w-4xl leading-tight">
                Besupport Lending Corporation (BLC) <br className="hidden md:block"/>
<span className="text-[#E6A329]">Short-Term Employee Lending</span>
</h1>
<p className="text-lg md:text-xl font-normal text-gray-300 mb-10 max-w-2xl leading-relaxed">
                We are more than just a lender—we are your partner in building a secure and prosperous future.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center bg-[#E6A329] text-[#0B2A5B] px-8 py-3.5 rounded-md font-medium text-lg hover:bg-[#d49422] transition-colors duration-200" href="#about">
                    Learn More
                </a>
<a className="inline-flex items-center justify-center bg-transparent border border-white/30 text-white px-8 py-3.5 rounded-md font-medium text-lg hover:bg-white/10 transition-colors duration-200" href="#services">
                    View Services
                </a>
</div>
</div>
</section>
<section className="py-24 bg-[#F8F9FA]" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div>
<h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-[#0B2A5B] mb-6">About BLC</h2>
<p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Besupport Lending Corporation (BLC) is a Philippine-based lending company committed to providing accessible and responsible financial services to individuals. BLC aims to support clients by offering lending solutions that are transparent, structured, and designed to promote financial stability.
                        </p>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm">
<i className="w-5 h-5 text-[#E6A329]" data-lucide="target" strokeWidth="1.5"></i>
<span className="text-lg font-medium text-[#0B2A5B]">Target Clients: Employed individuals &amp; Professionals</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
<div className="w-10 h-10 rounded-full bg-[#0B2A5B]/5 flex items-center justify-center mb-4">
<i className="w-5 h-5 text-[#0B2A5B]" data-lucide="flag" strokeWidth="1.5"></i>
</div>
<h3 className="font-heading text-xl font-medium tracking-tight text-[#0B2A5B] mb-3">Our Mission</h3>
<p className="text-lg text-gray-600 leading-relaxed">To provide fair, transparent, and accessible lending solutions while promoting responsible financial management.</p>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
<div className="w-10 h-10 rounded-full bg-[#E6A329]/10 flex items-center justify-center mb-4">
<i className="w-5 h-5 text-[#E6A329]" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<h3 className="font-heading text-xl font-medium tracking-tight text-[#0B2A5B] mb-3">Our Vision</h3>
<p className="text-lg text-gray-600 leading-relaxed">To be a trusted lending company recognized for integrity, reliability, and customer-centered financial services.</p>
</div>
</div>
</div>
<div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
<img alt="Professionals in modern office" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2064&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-[#0B2A5B] mb-4">Our Core Values</h2>
<p className="text-lg text-gray-500 max-w-2xl mx-auto">The principles that guide our every decision and interaction.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
<div className="p-6 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 group">
<i className="w-8 h-8 text-[#0B2A5B] mb-5 group-hover:text-[#E6A329] transition-colors" data-lucide="shield-check" strokeWidth="1.5"></i>
<h3 className="font-heading text-xl font-medium tracking-tight text-[#0B2A5B] mb-3">Integrity</h3>
<p className="text-lg text-gray-600 leading-relaxed">We do what's right always. Honesty in every transaction, transparency in every decision, and trust you can count on.</p>
</div>
<div className="p-6 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 group">
<i className="w-8 h-8 text-[#0B2A5B] mb-5 group-hover:text-[#E6A329] transition-colors" data-lucide="users" strokeWidth="1.5"></i>
<h3 className="font-heading text-xl font-medium tracking-tight text-[#0B2A5B] mb-3">Accessibility</h3>
<p className="text-lg text-gray-600 leading-relaxed">Financial solutions within reach. We strive to make lending easy, inclusive, and accessible for everyone we serve.</p>
</div>
<div className="p-6 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 group">
<i className="w-8 h-8 text-[#0B2A5B] mb-5 group-hover:text-[#E6A329] transition-colors" data-lucide="clipboard-check" strokeWidth="1.5"></i>
<h3 className="font-heading text-xl font-medium tracking-tight text-[#0B2A5B] mb-3">Accountability</h3>
<p className="text-lg text-gray-600 leading-relaxed">We own what we promise. Standing by our word, delivering on commitments, and ensuring every client feels secure and supported.</p>
</div>
<div className="p-6 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 group">
<i className="w-8 h-8 text-[#0B2A5B] mb-5 group-hover:text-[#E6A329] transition-colors" data-lucide="heart-handshake" strokeWidth="1.5"></i>
<h3 className="font-heading text-xl font-medium tracking-tight text-[#0B2A5B] mb-3">Service Excellence</h3>
<p className="text-lg text-gray-600 leading-relaxed">Your success is our priority. Listening with care, responding with speed, and delivering solutions that make every client feel valued.</p>
</div>
<div className="p-6 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 group lg:col-span-1 md:col-span-2 lg:col-start-auto md:col-start-1">
<i className="w-8 h-8 text-[#0B2A5B] mb-5 group-hover:text-[#E6A329] transition-colors" data-lucide="lock" strokeWidth="1.5"></i>
<h3 className="font-heading text-xl font-medium tracking-tight text-[#0B2A5B] mb-3">Trust</h3>
<p className="text-lg text-gray-600 leading-relaxed">The foundation of every relationship. Being reliable, keeping our word, and ensuring clients feel secure in every step of their financial journey.</p>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#F8F9FA] border-y border-gray-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-7 space-y-10">
<div>
<h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-[#0B2A5B] mb-4">Our Services &amp; Loan Details</h2>
<p className="text-lg text-gray-600 leading-relaxed">
                            BLC provides short-term and medium-term loan solutions designed to meet personal financial needs with straightforward terms and competitive rates.
                        </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 relative overflow-hidden">
<div className="font-heading text-4xl font-medium tracking-tight text-[#0B2A5B] mb-2">4%</div>
<h4 className="text-lg font-medium text-gray-900 mb-2">Processing Fee</h4>
<p className="text-lg text-gray-500">Applied to your loan amount.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
<div className="font-heading text-4xl font-medium tracking-tight text-[#E6A329] mb-2">2%</div>
<h4 className="text-lg font-medium text-gray-900 mb-2">Monthly Interest Rate</h4>
<p className="text-lg text-gray-500">Fixed rate applied to your loan amount.</p>
</div>
</div>
<div className="bg-[#0B2A5B]/5 border border-[#0B2A5B]/10 rounded-xl p-5 flex items-start gap-4">
<i className="w-6 h-6 text-[#0B2A5B] shrink-0 mt-0.5" data-lucide="info" strokeWidth="1.5"></i>
<p className="text-[#0B2A5B] text-lg">
<strong>Note:</strong> Both the processing fee and interest are deducted upfront directly from the disbursed amount.
                        </p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
<h3 className="font-heading text-xl font-medium tracking-tight text-[#0B2A5B] mb-6 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="file-text" strokeWidth="1.5"></i> Terms &amp; Conditions
                        </h3>
<ul className="space-y-4 text-lg text-gray-600">
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-[#E6A329] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="">Loans are repaid on the next salary day via payroll deduction.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-[#E6A329] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="">No monthly amortization or long-term loan schedules.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-[#E6A329] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="">Loan terms, amounts, and approval are subject to evaluation.</span>
</li>
</ul>
</div>
</div>
<div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:mx-0 mt-8 lg:mt-0">
<div className="absolute -inset-1 bg-gradient-to-r from-[#0B2A5B] to-[#E6A329] rounded-3xl blur opacity-20"></div>
<div className="relative bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
<div className="bg-[#0B2A5B] px-8 py-6 text-center">
<h3 className="font-heading text-2xl font-medium tracking-tight text-white flex items-center justify-center gap-2">
<i className="w-6 h-6 text-[#E6A329]" data-lucide="calculator" strokeWidth="1.5"></i>
                                Sample Computation
                            </h3>
</div>
<div className="p-8 space-y-5">
<div className="flex justify-between items-center pb-4 border-b border-gray-100">
<span className="text-lg text-gray-500">Loan Term</span>
<span className="text-lg font-medium text-gray-900">30 Days</span>
</div>
<div className="flex justify-between items-center pb-4 border-b border-gray-100">
<span className="text-lg text-gray-500">Loan Amount</span>
<span className="text-lg font-medium text-gray-900">PHP 10,000.00</span>
</div>
<div className="flex justify-between items-center pb-4 border-b border-gray-100">
<span className="text-lg text-gray-500">Processing Fee <span className="text-sm text-gray-400">(4%)</span></span>
<span className="text-lg font-medium text-red-500">- PHP 400.00</span>
</div>
<div className="flex justify-between items-center pb-4 border-b border-gray-100">
<span className="text-lg text-gray-500">Interest Rate <span className="text-sm text-gray-400">(2%)</span></span>
<span className="text-lg font-medium text-red-500">- PHP 200.00</span>
</div>
<div className="flex justify-between items-center py-2">
<span className="text-lg font-medium text-gray-900">Received Amt</span>
<span className="text-lg font-medium text-gray-900">PHP 9,400.00</span>
</div>
<div className="mt-6 pt-6 border-t-2 border-dashed border-gray-200 bg-gray-50 -mx-8 px-8 pb-2">
<div className="flex justify-between items-center">
<span className="font-heading text-xl font-medium text-[#0B2A5B]">Payment per<br/>Pay Cycle</span>
<span className="font-heading text-2xl font-semibold text-[#E6A329] tracking-tight">PHP 5,000.00</span>
</div>
<p className="text-xs text-gray-400 mt-3 text-right leading-relaxed">
                                    *Assuming 2 pay cycles in 30 days.<br/>
                                    Processing and interest fees are deducted directly from the disbursed amount.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-[#0B2A5B] mb-4">The Partnership Workflow</h2>
<p className="text-lg text-gray-500 max-w-2xl mx-auto">A seamless integration with Company HR and Payroll systems.</p>
</div>
<div className="relative">
<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-gray-200 via-[#E6A329]/50 to-gray-200 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 shadow-md flex items-center justify-center mb-6 group-hover:border-[#0B2A5B] transition-colors duration-300">
<span className="font-heading text-3xl font-medium text-[#0B2A5B]">1</span>
</div>
<h4 className="font-heading text-xl font-medium tracking-tight text-[#0B2A5B] mb-3">Determine Eligibility</h4>
<p className="text-lg text-gray-600">Determine employee eligibility based on upcoming salary.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 shadow-md flex items-center justify-center mb-6 group-hover:border-[#0B2A5B] transition-colors duration-300">
<span className="font-heading text-3xl font-medium text-[#0B2A5B]">2</span>
</div>
<h4 className="font-heading text-xl font-medium tracking-tight text-[#0B2A5B] mb-3">Confirm Amount</h4>
<p className="text-lg text-gray-600">Confirm the allowable loan amount per individual employee.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 shadow-md flex items-center justify-center mb-6 group-hover:border-[#0B2A5B] transition-colors duration-300">
<span className="font-heading text-3xl font-medium text-[#0B2A5B]">3</span>
</div>
<h4 className="font-heading text-xl font-medium tracking-tight text-[#0B2A5B] mb-3">Facilitate Deduction</h4>
<p className="text-lg text-gray-600">Facilitate accurate payroll deduction on the next salary date.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 shadow-md flex items-center justify-center mb-6 group-hover:border-[#0B2A5B] transition-colors duration-300">
<span className="font-heading text-3xl font-medium text-[#0B2A5B]">4</span>
</div>
<h4 className="font-heading text-xl font-medium tracking-tight text-[#0B2A5B] mb-3">Coordinate &amp; Track</h4>
<p className="text-lg text-gray-600">Coordinate with BLC for loan release and repayment tracking.</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#F8F9FA] border-t border-gray-200" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-[#0B2A5B] mb-4">Contact Us</h2>
<p className="text-lg text-gray-500 max-w-2xl mx-auto">Have questions about our lending programs? Reach out to our team today.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="space-y-8">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
<h3 className="font-heading text-2xl font-medium tracking-tight text-[#0B2A5B] mb-6">Get in Touch</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-[#0B2A5B]/5 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-[#E6A329]" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div className="">
<h4 className="text-lg font-medium text-gray-900 mb-1">Email Address</h4>
<p className="text-gray-600">besupportlending@gmail.com</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-[#0B2A5B]/5 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-[#E6A329]" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-medium text-gray-900 mb-1">Office Location</h4>
<p className="text-gray-600">Philippines</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-[#0B2A5B]/5 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-[#E6A329]" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-medium text-gray-900 mb-1">Business Hours</h4>
<p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200">
<form action="https://formsubmit.co/chellouarbuis@gmail.com" className="space-y-6" method="POST">
<input name="_subject" type="hidden" value="New Inquiry from BLC Website!"/>
<input name="_template" type="hidden" value="table"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-gray-700" htmlFor="firstName">First Name <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B2A5B] focus:border-[#0B2A5B] outline-none transition-all" id="firstName" name="First Name" placeholder="John" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-700" htmlFor="lastName">Last Name <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B2A5B] focus:border-[#0B2A5B] outline-none transition-all" id="lastName" name="Last Name" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-700" htmlFor="email">Email Address <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B2A5B] focus:border-[#0B2A5B] outline-none transition-all" id="email" name="Email" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-700" htmlFor="company">Company Name (Optional)</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B2A5B] focus:border-[#0B2A5B] outline-none transition-all" id="company" name="Company" placeholder="Your Company" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-700" htmlFor="message">Message <span className="text-red-500">*</span></label>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B2A5B] focus:border-[#0B2A5B] outline-none transition-all resize-none" id="message" name="Message" placeholder="How can we help you?" required="" rows="4"></textarea>
</div>
<div className="flex items-start gap-3 pt-2 pb-2">
<input className="mt-1.5 w-4 h-4 text-[#0B2A5B] border-gray-300 rounded focus:ring-[#0B2A5B] cursor-pointer" id="consent" name="Consent" required="" type="checkbox"/>
<label className="text-sm text-gray-600 leading-relaxed cursor-pointer" htmlFor="consent">
                                By voluntarily giving my personal data, I consent to the collection, processing, and use of my personal data and I abide by BLC's Privacy Policy and Terms and Conditions. <span className="text-red-500">*</span>
</label>
</div>
<button className="w-full bg-[#0B2A5B] text-white font-medium text-lg px-8 py-4 rounded-lg hover:bg-[#153b7a] transition-colors duration-300 flex items-center justify-center gap-2" type="submit">
                            Send Message
                            <i className="w-5 h-5" data-lucide="send" strokeWidth="2"></i>
</button>
</form>
</div>
</div>
</div>
</section>
<footer className="bg-[#0f2445] pt-16 pb-8 border-t border-[#1a3668]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
<div className="lg:col-span-5">
<a className="block mb-6" href="/">
<img alt="Besupport Lending Corp. Logo" className="h-8 w-auto object-contain" src="https://www.alliedfusionbpo.com/wp-content/uploads/2026/04/Untitled-design.png"/>
</a>
<p className="text-lg text-gray-400 mb-6 max-w-md">
                        Besupport Lending Corporation (BLC)<br/>
                        Industry: Lending Services<br/>
                        Country of Operation: Philippines
                    </p>
</div>
<div className="lg:col-span-3">
<h4 className="font-heading text-lg font-medium text-white mb-6 tracking-tight">Company</h4>
<ul className="space-y-3">
<li className=""><a className="text-lg text-gray-400 hover:text-white transition-colors" href="#about">About Us</a></li>
<li className=""><a className="text-lg text-gray-400 hover:text-white transition-colors" href="#services">Services</a></li>
<li className=""><a className="text-lg text-gray-400 hover:text-white transition-colors" href="/privacy-policy">Privacy Policy</a></li>
<li className=""><a className="text-lg text-gray-400 hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div className="lg:col-span-4">
<h4 className="font-heading text-lg font-medium text-white mb-6 tracking-tight">Legal &amp; Compliance</h4>
<div className="space-y-4">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-gray-400 shrink-0 mt-1" data-lucide="file-check-2" strokeWidth="1.5"></i>
<p className="text-sm text-gray-400 leading-relaxed">
                                SEC registration number: 2025040197833-59.
                            </p>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-gray-400 shrink-0 mt-1" data-lucide="shield-alert" strokeWidth="1.5"></i>
<p className="text-sm text-gray-400 leading-relaxed">
                                BLC complies with the Data Privacy Act of 2012. All loan approvals are subject to evaluation and applicable laws.
                            </p>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-gray-500">© 2026 Besupport Lending Corporation. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors text-sm text-gray-500" href="/privacy-policy">Privacy Policy</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
