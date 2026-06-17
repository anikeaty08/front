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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Montserrat', 'sans-serif'],
},
colors: {
darkBlue: '#00213C',
deepBlue: '#0F3C54',
royalBlue: '#0B5ED7',
skyBlue: '#19B5FE',
primaryOrange: '#FB8500',
deepOrange: '#F37021',
lightSilver: '#E6EDEF',
mediumGrey: '#BFC5C8',
},
boxShadow: {
'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
}
}
}
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
      

<div className="bg-darkBlue text-white py-3 text-xs md:text-sm border-b border-white/10">
<div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
<span className="font-medium tracking-wide">Need Professional Accountant? Book Schedule Now</span>
<div className="flex items-center gap-4">
<a className="hover:text-primaryOrange transition-colors duration-300" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="16"></span>
</a>
<a className="hover:text-primaryOrange transition-colors duration-300" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="16"></span>
</a>
<a className="hover:text-primaryOrange transition-colors duration-300" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="16"></span>
</a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-lightSilver shadow-sm">
<div className="container mx-auto px-6 py-4 flex flex-col lg:flex-row justify-between items-center gap-4">

<div className="flex flex-col leading-none text-center lg:text-left">
<h1 className="text-2xl font-semibold tracking-tight text-darkBlue">
                    SMARTBOOK <span className="text-primaryOrange">ACCOUNTANCY</span>
</h1>
<span className="text-xs font-medium tracking-[0.2em] text-mediumGrey uppercase mt-1">Your Trusted Partner</span>
</div>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-darkBlue">
<a className="text-primaryOrange hover:text-deepOrange transition-colors" href="#">HOME</a>
<a className="hover:text-royalBlue transition-colors" href="#about">ABOUT US</a>
<a className="hover:text-royalBlue transition-colors" href="#services">OUR SERVICES</a>
<a className="hover:text-royalBlue transition-colors" href="#contact">CONTACT US</a>
</nav>

<div className="flex items-center gap-4">
<div className="hidden xl:flex flex-col text-right">
<span className="text-xs text-mediumGrey font-medium">Call Us Anytime</span>
<span className="text-sm font-semibold text-darkBlue">(078) 4899 - 0491</span>
</div>
<button className="bg-primaryOrange hover:bg-deepOrange text-white text-sm font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/20 flex items-center gap-2">
                    Get Consultation
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</header>

<section className="relative bg-darkBlue text-white py-20 lg:py-32 overflow-hidden">

<div className="absolute inset-0 opacity-10">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="#19B5FE"></path>
</svg>
</div>
<div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-tight">
                    Precision Bookkeeping for Stress-Free Growth To Evolve Your CAS Practice
                </h1>
<p className="text-mediumGrey text-lg leading-relaxed max-w-xl font-light">
                    Expert bookkeeping and accounting services that save you time, eliminate stress, and empower smarter decisions — so you can focus on growth.
                </p>
<div className="pt-4">
<button className="bg-primaryOrange hover:bg-deepOrange text-white text-base font-medium py-4 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/30">
                        Contact Us
                    </button>
</div>
</div>

<div className="hidden lg:block relative">
<div className="bg-deepBlue rounded-2xl p-8 shadow-2xl border border-white/10 max-w-md ml-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-primaryOrange/20 flex items-center justify-center text-primaryOrange">
<span className="iconify" data-icon="lucide:trending-up" data-width="24"></span>
</div>
<div>
<p className="text-sm text-mediumGrey">Monthly Growth</p>
<p className="text-2xl font-semibold text-white">+128%</p>
</div>
</div>
<div className="space-y-3">
<div className="h-2 bg-white/10 rounded-full w-full"><div className="h-full bg-skyBlue rounded-full" style={{width: '75%'}}></div></div>
<div className="h-2 bg-white/10 rounded-full w-full"><div className="h-full bg-primaryOrange rounded-full" style={{width: '60%'}}></div></div>
<div className="h-2 bg-white/10 rounded-full w-full"><div className="h-full bg-royalBlue rounded-full" style={{width: '85%'}}></div></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-lightSilver" id="about">
<div className="container mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div className="space-y-8">
<div>
<span className="text-primaryOrange font-semibold tracking-wide uppercase text-xs mb-2 block">About Smart book Accountancy</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-darkBlue">Welcome to Smartbook Accountancy</h2>
</div>
<div className="space-y-6 text-slate-600 font-light leading-relaxed">
<p>
                            At Smartbook Accountancy, we believe numbers tell a story — and we’re here to help write yours. Founded with a vision to simplify financial management for UK businesses, we’ve grown into a trusted partner for entrepreneurs, startups, and established companies alike.
                        </p>
<p>
                            Our tailored approach removes the complexity from your finances, giving you more time to focus on what matters most — running your business.
                        </p>
</div>
<ul className="grid sm:grid-cols-2 gap-4">
<li className="flex items-center gap-3">
<span className="iconify text-primaryOrange" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-darkBlue font-medium text-sm">Business-first approach</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-primaryOrange" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-darkBlue font-medium text-sm">Future-ready solutions</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-primaryOrange" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-darkBlue font-medium text-sm">Uncompromising integrity</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-primaryOrange" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-darkBlue font-medium text-sm">Proactive partnership</span>
</li>
</ul>
<button className="bg-darkBlue hover:bg-deepBlue text-white text-sm font-medium py-3 px-8 rounded-lg transition-colors shadow-lg">
                        More About Us
                    </button>

<div className="bg-white p-6 rounded-xl border-l-4 border-primaryOrange shadow-soft mt-8">
<p className="italic text-slate-600 mb-4 text-sm">
                            “Akbar Hossain M Com, MBA, ACA is dependable. He is the most efficient accountant I know – quick and effective. And a great help for specialists in business accounting and finance.”
                        </p>
<div className="flex items-center justify-between">
<span className="font-semibold text-darkBlue text-sm">Oliver Bennett</span>
<div className="text-right">
<span className="block text-sm font-serif italic text-darkBlue">Akbar Hossain</span>
<span className="text-xs text-mediumGrey uppercase tracking-wide">CEO Smart book Accountancy</span>
</div>
</div>
</div>
</div>

<div className="grid gap-6">
<div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:border-royalBlue/30 transition-colors">
<div className="w-12 h-12 bg-skyBlue/10 rounded-lg flex items-center justify-center text-skyBlue mb-4">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-darkBlue mb-2">Advanced Analytics</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            Actionable financial insights and drive smarter business moves
                        </p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:border-royalBlue/30 transition-colors translate-x-0 lg:translate-x-8">
<div className="w-12 h-12 bg-royalBlue/10 rounded-lg flex items-center justify-center text-royalBlue mb-4">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-darkBlue mb-2">Certified Company</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            Highest industry standards and ethical practices
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="container mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative bg-lightSilver rounded-2xl p-8 lg:h-[500px] flex items-center justify-center">
<div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primaryOrange w-full max-w-sm">
<h3 className="text-xl font-semibold text-darkBlue mb-6 tracking-tight">Efficiency Metrics</h3>
<div className="space-y-6">
<div>
<div className="flex justify-between mb-2 text-sm font-medium">
<span>Saving You Time</span>
<span className="text-primaryOrange">68%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-primaryOrange h-2 rounded-full transition-all duration-1000" style={{width: '68%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2 text-sm font-medium">
<span>Trusted Company</span>
<span className="text-primaryOrange">71%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-deepBlue h-2 rounded-full transition-all duration-1000" style={{width: '71%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-8">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-darkBlue leading-tight">
                        We Provide Perfect Solution For All Bookkeeping and Accountancy Services
                    </h2>
<p className="text-slate-600 font-light leading-relaxed">
                        Our team of qualified accounting professionals combines technical expertise with real-world business understanding. We don’t just process your finances; we analyze them to uncover opportunities, identify savings, and support your growth journey.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-primaryOrange"></div>
<span className="text-darkBlue font-medium">Constant Improvement</span>
</div>
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-primaryOrange"></div>
<span className="text-darkBlue font-medium">Commitment to Customers</span>
</div>
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-primaryOrange"></div>
<span className="text-darkBlue font-medium">Best Quality You Can Get</span>
</div>
</div>
<div className="bg-royalBlue/5 border border-royalBlue/20 p-6 rounded-lg">
<p className="text-royalBlue font-medium text-lg tracking-tight">
                            You Focus on Your Growth, We’ll Manage Your Numbers
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-lightSilver" id="services">
<div className="container mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-primaryOrange font-semibold tracking-wide uppercase text-xs mb-2 block">Our Expertise</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-darkBlue mb-6">What Service We Offer</h2>
<p className="text-slate-600 font-light">
                    Smartbook Accountancy delivers comprehensive bookkeeping and accounting solutions designed for your business growth. We handle everything from day-to-day financial recording to strategic financial reporting, ensuring complete compliance and real-time visibility of your numbers.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-lightSilver rounded-lg flex items-center justify-center text-darkBlue group-hover:bg-primaryOrange group-hover:text-white transition-colors mb-6">
<span className="iconify" data-icon="lucide:book-open" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-darkBlue mb-3 group-hover:text-primaryOrange transition-colors">Bookkeeping &amp; Cloud Accounting</h3>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-lightSilver rounded-lg flex items-center justify-center text-darkBlue group-hover:bg-primaryOrange group-hover:text-white transition-colors mb-6">
<span className="iconify" data-icon="lucide:file-bar-chart" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-darkBlue mb-3 group-hover:text-primaryOrange transition-colors">VAT Returns &amp; HMRC Compliance</h3>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-lightSilver rounded-lg flex items-center justify-center text-darkBlue group-hover:bg-primaryOrange group-hover:text-white transition-colors mb-6">
<span className="iconify" data-icon="lucide:users" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-darkBlue mb-3 group-hover:text-primaryOrange transition-colors">Payroll Management</h3>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-lightSilver rounded-lg flex items-center justify-center text-darkBlue group-hover:bg-primaryOrange group-hover:text-white transition-colors mb-6">
<span className="iconify" data-icon="lucide:landmark" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-darkBlue mb-3 group-hover:text-primaryOrange transition-colors">Statutory Accounts &amp; Corporation Tax</h3>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-lightSilver rounded-lg flex items-center justify-center text-darkBlue group-hover:bg-primaryOrange group-hover:text-white transition-colors mb-6">
<span className="iconify" data-icon="lucide:user-check" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-darkBlue mb-3 group-hover:text-primaryOrange transition-colors">Self-Assessment &amp; Personal Tax Returns</h3>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-lightSilver rounded-lg flex items-center justify-center text-darkBlue group-hover:bg-primaryOrange group-hover:text-white transition-colors mb-6">
<span className="iconify" data-icon="lucide:search" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-darkBlue mb-3 group-hover:text-primaryOrange transition-colors">HMRC Tax &amp; VAT Investigations</h3>
</div>
</div>
<div className="text-center mt-12">
<button className="bg-transparent border-2 border-primaryOrange text-primaryOrange hover:bg-primaryOrange hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300">
                    All Services
                </button>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-darkBlue">
                    2,000+ Business Company Doing by Smart book Accountancy
                </h2>
<div className="space-y-6">
<div className="flex gap-4">
<span className="iconify text-royalBlue flex-shrink-0 mt-1" data-icon="lucide:check-circle" data-width="20"></span>
<div>
<h4 className="font-semibold text-darkBlue">Proven Track Record</h4>
<p className="text-sm text-slate-500 font-light mt-1">95%+ success rate with HMRC submissions</p>
</div>
</div>
<div className="flex gap-4">
<span className="iconify text-royalBlue flex-shrink-0 mt-1" data-icon="lucide:check-circle" data-width="20"></span>
<div>
<h4 className="font-semibold text-darkBlue">Transparent &amp; Competitive Pricing</h4>
<p className="text-sm text-slate-500 font-light mt-1">High-quality service without hidden costs</p>
</div>
</div>
<div className="flex gap-4">
<span className="iconify text-royalBlue flex-shrink-0 mt-1" data-icon="lucide:check-circle" data-width="20"></span>
<div>
<h4 className="font-semibold text-darkBlue">Full GDPR Compliance</h4>
<p className="text-sm text-slate-500 font-light mt-1">Ensuring your data is managed with strict confidentiality</p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-3 pt-4">
<span className="px-4 py-2 bg-lightSilver text-darkBlue text-xs font-medium rounded-full">Professional Bookkeeper</span>
<span className="px-4 py-2 bg-lightSilver text-darkBlue text-xs font-medium rounded-full">Free Consultations</span>
<span className="px-4 py-2 bg-lightSilver text-darkBlue text-xs font-medium rounded-full">Saving You Time</span>
<span className="px-4 py-2 bg-lightSilver text-darkBlue text-xs font-medium rounded-full">Best Quality Service</span>
</div>
</div>

<div className="relative h-[400px] bg-darkBlue rounded-2xl overflow-hidden flex items-center justify-center p-8 text-center">
<div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 max-w-xs">
<span className="iconify text-primaryOrange w-12 h-12 mx-auto mb-4" data-icon="lucide:shield-check"></span>
<h3 className="text-white text-xl font-semibold">Your Financial Security</h3>
<p className="text-white/60 text-sm mt-2">Is our top priority.</p>
</div>
</div>
</div>
</section>

<section className="bg-deepBlue text-white py-16">
<div className="container mx-auto px-6">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-white/10">
<div className="p-4">
<span className="block text-4xl lg:text-5xl font-semibold mb-2 tracking-tight">2,245+</span>
<span className="text-skyBlue text-sm font-medium">Happy Clients</span>
</div>
<div className="p-4">
<span className="block text-4xl lg:text-5xl font-semibold mb-2 tracking-tight">3,452+</span>
<span className="text-skyBlue text-sm font-medium">Cases Completed</span>
</div>
<div className="p-4">
<span className="block text-4xl lg:text-5xl font-semibold mb-2 tracking-tight">25+</span>
<span className="text-skyBlue text-sm font-medium">Years Of Experience</span>
</div>
<div className="p-4">
<span className="block text-4xl lg:text-5xl font-semibold mb-2 tracking-tight">120+</span>
<span className="text-skyBlue text-sm font-medium">Professional Team</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<span className="text-primaryOrange font-semibold tracking-wide uppercase text-xs mb-2 block">How It Works</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-darkBlue">Easy Steps To Get Your Solutions</h2>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-lightSilver z-0"></div>

<div className="relative z-10 text-center">
<div className="w-24 h-24 bg-white border-4 border-lightSilver rounded-full flex items-center justify-center mx-auto mb-6 text-primaryOrange">
<span className="iconify" data-icon="lucide:calendar-plus" data-width="32"></span>
</div>
<h3 className="text-xl font-semibold text-darkBlue mb-2">Make An Appointment</h3>
<p className="text-slate-500 text-sm">Schedule a time that works for you.</p>
</div>

<div className="relative z-10 text-center">
<div className="w-24 h-24 bg-white border-4 border-primaryOrange rounded-full flex items-center justify-center mx-auto mb-6 text-primaryOrange shadow-lg shadow-orange-500/20">
<span className="iconify" data-icon="lucide:message-square-text" data-width="32"></span>
</div>
<h3 className="text-xl font-semibold text-darkBlue mb-2">Get Consultation</h3>
<p className="text-slate-500 text-sm">Discuss your needs with our experts.</p>
</div>

<div className="relative z-10 text-center">
<div className="w-24 h-24 bg-white border-4 border-lightSilver rounded-full flex items-center justify-center mx-auto mb-6 text-primaryOrange">
<span className="iconify" data-icon="lucide:check-circle" data-width="32"></span>
</div>
<h3 className="text-xl font-semibold text-darkBlue mb-2">Your Problem Solved</h3>
<p className="text-slate-500 text-sm">We handle the rest for your growth.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-lightSilver">
<div className="container mx-auto px-6">
<div className="max-w-4xl mx-auto bg-white rounded-2xl p-10 lg:p-16 shadow-soft text-center relative overflow-hidden">

<div className="absolute top-4 left-4 text-gray-100">
<span className="iconify" data-icon="lucide:quote" data-width="120"></span>
</div>
<div className="relative z-10">
<div className="flex justify-center mb-6 text-primaryOrange">
<span className="fill-current" data-icon="lucide:star" data-width="20"></span>
<span className="fill-current" data-icon="lucide:star" data-width="20"></span>
<span className="fill-current" data-icon="lucide:star" data-width="20"></span>
<span className="fill-current" data-icon="lucide:star" data-width="20"></span>
<span className="fill-current" data-icon="lucide:star" data-width="20"></span>
</div>
<blockquote className="text-xl lg:text-2xl font-medium text-darkBlue mb-8 leading-relaxed">
                        “Smartbook Accountancy has been instrumental in our scaling journey. Their proactive tax planning saved us £78K in our first year. Truly a growth partner!”
                    </blockquote>
<cite className="not-italic font-semibold text-primaryOrange tracking-wide uppercase text-sm">
                        — David McAllister
                    </cite>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-darkBlue mb-12 border-l-4 border-primaryOrange pl-4">Latest Blog &amp; Articles</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<article className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
<div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
<span className="iconify" data-icon="lucide:image" data-width="32"></span>
</div>
<div className="p-6">
<div className="flex items-center gap-2 text-xs text-mediumGrey mb-3">
<span className="iconify" data-icon="lucide:calendar" data-width="14"></span>
                            December 22, 2024
                        </div>
<h3 className="text-lg font-semibold text-darkBlue mb-3">Hello world!</h3>
<p className="text-slate-500 text-sm mb-4 line-clamp-3">
                            Welcome to WordPress. This is your first post. Edit or delete it, then start writing!
                        </p>
<a className="inline-flex items-center text-sm font-medium text-royalBlue hover:text-deepBlue" href="#">
                            Read More <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</article>
</div>
</div>
</section>

<section className="bg-darkBlue py-16">
<div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<h2 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight">
                Still Confused About Our Features? Get A Consultation
            </h2>
<button className="bg-primaryOrange hover:bg-deepOrange text-white font-medium py-4 px-10 rounded-lg transition-colors whitespace-nowrap shadow-lg shadow-orange-500/20">
                Contact Us
            </button>
</div>
</section>

<footer className="bg-darkBlue text-white border-t border-white/10 pt-16 pb-8" id="contact">
<div className="container mx-auto px-6">
<div className="grid lg:grid-cols-4 gap-12 mb-12">

<div className="lg:col-span-1">
<h3 className="text-xl font-semibold text-white mb-4">SMARTBOOK <span className="text-primaryOrange">ACCOUNTANCY</span></h3>
<p className="text-mediumGrey text-sm leading-relaxed mb-6">
                        Your trusted partner for growth, compliance, and financial clarity.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primaryOrange transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primaryOrange transition-colors" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="18"></span>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primaryOrange transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
</div>
</div>

<div>
<h4 className="font-semibold text-lg mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm text-mediumGrey">
<li><a className="hover:text-primaryOrange transition-colors" href="#">Home</a></li>
<li><a className="hover:text-primaryOrange transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-primaryOrange transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-primaryOrange transition-colors" href="#contact">Contact</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-lg mb-6">Services</h4>
<ul className="space-y-3 text-sm text-mediumGrey">
<li><a className="hover:text-primaryOrange transition-colors" href="#">Bookkeeping</a></li>
<li><a className="hover:text-primaryOrange transition-colors" href="#">Payroll</a></li>
<li><a className="hover:text-primaryOrange transition-colors" href="#">VAT Returns</a></li>
<li><a className="hover:text-primaryOrange transition-colors" href="#">Tax Planning</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-lg mb-6">Subscribe Our Newsletter</h4>
<form className="space-y-4">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primaryOrange transition-colors" placeholder="Email Address" type="email"/>
<button className="w-full bg-primaryOrange hover:bg-deepOrange text-white font-medium py-3 rounded-lg transition-colors text-sm" type="button">
                            Subscribe
                        </button>
</form>
</div>
</div>
<div className="border-t border-white/10 pt-8 text-center text-sm text-mediumGrey">
<p>© 2024 ShafkatAkbar &amp; Company Ltd. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
