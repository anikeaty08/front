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
      

<header className="w-full">

<div className="bg-[#00213C] text-white py-2">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm font-light">
<div className="flex items-center gap-4 mb-2 md:mb-0">
<span className="opacity-90">Need Professional Accountant?</span>
<a className="text-[#FB8500] font-medium hover:text-white transition-colors duration-300" href="#">Book Schedule Now</a>
</div>
<div className="flex items-center gap-6">
<span className="flex items-center gap-2">
<span className="iconify" data-height="16" data-icon="lucide:phone" data-width="16"></span>
                        (078) 4899 - 0491
                    </span>
<a className="hidden md:block hover:text-[#FB8500] transition-colors" href="#">Get Consultation</a>
</div>
</div>
</div>

<div className="bg-white border-b border-[#E6EDEF] sticky top-0 z-50 shadow-sm">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<div className="flex flex-col leading-none">
<h1 className="text-xl md:text-2xl font-semibold tracking-tight text-[#002B3A]">
                        SMARTBOOK ACCOUNTANCY
                    </h1>
<span className="text-[0.65rem] md:text-xs font-medium text-[#FB8500] tracking-widest uppercase mt-1">
                        YOUR TRUSTED PARTNER
                    </span>
</div>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#0F3C54]">
<a className="hover:text-[#0B5ED7] transition-colors" href="#">HOME</a>
<a className="hover:text-[#0B5ED7] transition-colors" href="#">ABOUT US</a>
<a className="text-[#0B5ED7]" href="#">OUR SERVICES</a>
<a className="bg-[#FB8500] text-white px-6 py-3 rounded-lg hover:bg-[#F37021] transition-colors shadow-lg shadow-[#FB8500]/20" href="#">
                        CONTACT US
                    </a>
</nav>

<button className="lg:hidden text-[#00213C]">
<span className="iconify" data-height="28" data-icon="lucide:menu" data-width="28"></span>
</button>
</div>
</div>
</header>

<section className="bg-[#0F3C54] text-white py-20 relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/3 h-full bg-[#0B5ED7] opacity-10 skew-x-12 transform translate-x-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Services</h1>
<nav className="flex justify-center items-center text-sm font-light text-[#E6EDEF] gap-2">
<a className="hover:text-white transition-colors" href="#">Home</a>
<span className="iconify" data-icon="lucide:chevron-right" data-width="14"></span>
<span className="text-[#FB8500] font-medium">Services</span>
</nav>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-3xl mx-auto px-6 text-center">
<span className="text-[#FB8500] font-medium tracking-wide uppercase text-sm mb-2 block">Our Services</span>
<h2 className="text-3xl md:text-4xl font-semibold text-[#00213C] tracking-tight mb-6">What Service We Offer</h2>
<p className="text-[#0F3C54]/80 text-base leading-relaxed font-light">
                Smartbook Accountancy delivers comprehensive bookkeeping and accounting solutions designed for your business growth. We handle everything from day-to-day financial recording to strategic financial reporting, ensuring complete compliance and real-time visibility of your numbers.
            </p>
</div>
</section>

<section className="pb-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white border border-[#E6EDEF] rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(11,94,215,0.08)] hover:border-[#0B5ED7]/20 transition-all duration-300">
<div className="w-12 h-12 bg-[#19B5FE]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0B5ED7] transition-colors duration-300">
<span className="iconify text-[#0B5ED7] group-hover:text-white transition-colors" data-icon="lucide:book-open-check" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-[#00213C] mb-3 tracking-tight">Bookkeeping &amp; Cloud Accounting</h3>
<p className="text-sm text-[#0F3C54]/70 font-light leading-relaxed">
                        Stress-free self-assessment filings tailored to income sources. Ensure deadlines are met, deductions claimed, and tax bills minimised.
                    </p>
<a className="inline-flex items-center mt-6 text-sm font-medium text-[#FB8500] hover:text-[#F37021]" href="#">
                        Learn More <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="group bg-white border border-[#E6EDEF] rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(11,94,215,0.08)] hover:border-[#0B5ED7]/20 transition-all duration-300">
<div className="w-12 h-12 bg-[#19B5FE]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0B5ED7] transition-colors duration-300">
<span className="iconify text-[#0B5ED7] group-hover:text-white transition-colors" data-icon="lucide:file-bar-chart-2" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-[#00213C] mb-3 tracking-tight">VAT Returns &amp; HMRC Compliance</h3>
<p className="text-sm text-[#0F3C54]/70 font-light leading-relaxed">
                        Minimise liabilities and maximise savings with our tax planning expertise. We navigate complex regulations so you stay compliant.
                    </p>
<a className="inline-flex items-center mt-6 text-sm font-medium text-[#FB8500] hover:text-[#F37021]" href="#">
                        Learn More <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="group bg-white border border-[#E6EDEF] rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(11,94,215,0.08)] hover:border-[#0B5ED7]/20 transition-all duration-300">
<div className="w-12 h-12 bg-[#19B5FE]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0B5ED7] transition-colors duration-300">
<span className="iconify text-[#0B5ED7] group-hover:text-white transition-colors" data-icon="lucide:users" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-[#00213C] mb-3 tracking-tight">Payroll Management</h3>
<p className="text-sm text-[#0F3C54]/70 font-light leading-relaxed">
                        Simplify VAT registration, returns, and MTD compliance with our expert guidance. Avoid costly errors and reclaim what you’re owed efficiently.
                    </p>
<a className="inline-flex items-center mt-6 text-sm font-medium text-[#FB8500] hover:text-[#F37021]" href="#">
                        Learn More <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="group bg-white border border-[#E6EDEF] rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(11,94,215,0.08)] hover:border-[#0B5ED7]/20 transition-all duration-300">
<div className="w-12 h-12 bg-[#19B5FE]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0B5ED7] transition-colors duration-300">
<span className="iconify text-[#0B5ED7] group-hover:text-white transition-colors" data-icon="lucide:building-2" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-[#00213C] mb-3 tracking-tight">Statutory Accounts &amp; Corporation Tax</h3>
<p className="text-sm text-[#0F3C54]/70 font-light leading-relaxed">
                        Streamline your payroll processing with error-free, HMRC-compliant solutions. We handle everything from payslips to CIS returns, saving you time and penalties.
                    </p>
<a className="inline-flex items-center mt-6 text-sm font-medium text-[#FB8500] hover:text-[#F37021]" href="#">
                        Learn More <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="group bg-white border border-[#E6EDEF] rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(11,94,215,0.08)] hover:border-[#0B5ED7]/20 transition-all duration-300">
<div className="w-12 h-12 bg-[#19B5FE]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0B5ED7] transition-colors duration-300">
<span className="iconify text-[#0B5ED7] group-hover:text-white transition-colors" data-icon="lucide:user-check" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-[#00213C] mb-3 tracking-tight">Self-Assessment &amp; Personal Tax Returns</h3>
<p className="text-sm text-[#0F3C54]/70 font-light leading-relaxed">
                        We design tailored investment strategies aligned with your business goals and risk appetite. Our proactive approach helps grow your capital while maintaining financial stability.
                    </p>
<a className="inline-flex items-center mt-6 text-sm font-medium text-[#FB8500] hover:text-[#F37021]" href="#">
                        Learn More <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="group bg-white border border-[#E6EDEF] rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(11,94,215,0.08)] hover:border-[#0B5ED7]/20 transition-all duration-300">
<div className="w-12 h-12 bg-[#19B5FE]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0B5ED7] transition-colors duration-300">
<span className="iconify text-[#0B5ED7] group-hover:text-white transition-colors" data-icon="lucide:search-check" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-[#00213C] mb-3 tracking-tight">HMRC Tax &amp; VAT Investigations</h3>
<p className="text-sm text-[#0F3C54]/70 font-light leading-relaxed">
                        From daily bookkeeping to annual accounts, we ensure accurate, compliant financial records. Gain real-time insights into your business performance.
                    </p>
<a className="inline-flex items-center mt-6 text-sm font-medium text-[#FB8500] hover:text-[#F37021]" href="#">
                        Learn More <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#E6EDEF]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#FB8500] font-medium tracking-wide uppercase text-sm mb-2 block">Our Process</span>
<h2 className="text-3xl md:text-4xl font-semibold text-[#00213C] tracking-tight mb-6">Easy Steps To Get Your Solutions</h2>
<p className="max-w-2xl mx-auto text-[#0F3C54]/80 text-base font-light">
                    From first contact to final solution, we make expert accounting effortless in three clear steps.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="bg-white rounded-xl p-8 text-center shadow-sm relative z-10">
<div className="w-16 h-16 bg-[#0F3C54] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-semibold shadow-lg shadow-[#0F3C54]/20">
                        01
                    </div>
<h3 className="text-lg font-semibold text-[#00213C] mb-3">Make An Appointment</h3>
<p className="text-sm text-[#0F3C54]/70 font-light">
                        Book a free consultation at your convenience—online or in person—to discuss your financial needs.
                    </p>
</div>

<div className="bg-white rounded-xl p-8 text-center shadow-sm relative z-10">
<div className="w-16 h-16 bg-[#FB8500] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-semibold shadow-lg shadow-[#FB8500]/20">
                        02
                    </div>
<h3 className="text-lg font-semibold text-[#00213C] mb-3">Get Consultation</h3>
<p className="text-sm text-[#0F3C54]/70 font-light">
                        Receive tailored advice from our experts, with clear solutions for your bookkeeping or tax challenges.
                    </p>
</div>

<div className="bg-white rounded-xl p-8 text-center shadow-sm relative z-10">
<div className="w-16 h-16 bg-[#0B5ED7] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-semibold shadow-lg shadow-[#0B5ED7]/20">
                        03
                    </div>
<h3 className="text-lg font-semibold text-[#00213C] mb-3">Your Problem Solved</h3>
<p className="text-sm text-[#0F3C54]/70 font-light">
                        Watch your financial stresses disappear as we handle everything accurately and on time.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<span className="text-[#FB8500] font-medium tracking-wide uppercase text-sm mb-2 block">Testimonials</span>
<h2 className="text-3xl md:text-4xl font-semibold text-[#00213C] tracking-tight mb-6 leading-tight">We Are Trusted Over 16+ Countries Worldwide</h2>
<p className="text-[#0F3C54]/80 text-base font-light mb-8">
                        Trusted by businesses in over 16 countries worldwide, we deliver reliable accounting solutions with global expertise and local precision.
                    </p>
<a className="inline-block bg-[#00213C] text-white px-8 py-3 rounded-lg hover:bg-[#0F3C54] transition-colors shadow-lg" href="#">
                        View All Stories
                    </a>
</div>
<div className="space-y-6">

<div className="bg-[#E6EDEF]/30 border border-[#E6EDEF] p-6 rounded-xl">
<div className="flex gap-1 text-[#FB8500] mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-[#0F3C54] font-light italic mb-4">
                            “My Self-Assessment was always stressful. Smartbook made it effortless – they even identified expenses I’d missed. Highly recommend their personalised approach.”
                        </p>
<div>
<p className="font-semibold text-[#00213C] text-sm">David McAllister</p>
<p className="text-xs text-[#0F3C54]/60">IT Contractor</p>
</div>
</div>

<div className="bg-[#E6EDEF]/30 border border-[#E6EDEF] p-6 rounded-xl">
<div className="flex gap-1 text-[#FB8500] mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-[#0F3C54] font-light italic mb-4">
                            “After struggling with DIY accounting, Smartbook transformed our finances. Their payroll and VAT services are flawless. Now I actually understand my cash flow!”
                        </p>
<div>
<p className="font-semibold text-[#00213C] text-sm">Priya Shah</p>
<p className="text-xs text-[#0F3C54]/60">Owner, Bloom Cafe</p>
</div>
</div>

<div className="bg-[#E6EDEF]/30 border border-[#E6EDEF] p-6 rounded-xl">
<div className="flex gap-1 text-[#FB8500] mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-[#0F3C54] font-light italic mb-4">
                            “Smartbook Accountancy has been instrumental in our scaling journey. Their proactive tax planning saved us £18K in our first year.”
                        </p>
<div>
<p className="font-semibold text-[#00213C] text-sm">Oliver Bennett</p>
<p className="text-xs text-[#0F3C54]/60">Founder &amp; CEO, TechNova Solutions</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#0B5ED7]">
<div className="max-w-4xl mx-auto px-6 text-center text-white">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Subscribe Our Newsletter</h2>
<p className="text-white/80 font-light mb-8">Stay updated with expert financial tips—subscribe to our newsletter today!</p>
<form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
<input className="w-full px-5 py-4 rounded-lg text-[#00213C] focus:outline-none focus:ring-2 focus:ring-[#FB8500]" placeholder="Enter Your Email Address" type="email"/>
<button className="bg-[#FB8500] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#F37021] transition-colors whitespace-nowrap shadow-lg" type="submit">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-[#00213C] text-white pt-20 pb-10 border-t border-[#0F3C54]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<div className="flex flex-col leading-none">
<h3 className="text-xl font-semibold tracking-tight text-white">
                            SMARTBOOK ACCOUNTANCY
                        </h3>
<span className="text-[0.6rem] font-medium text-[#FB8500] tracking-widest uppercase mt-1">
                            YOUR TRUSTED PARTNER
                        </span>
</div>
<p className="text-[#E6EDEF]/70 text-sm font-light leading-relaxed">
                        Smartbook Accountancy: Your trusted partner for seamless bookkeeping, tax solutions, and financial clarity.
                    </p>
<a className="inline-block bg-[#FB8500] px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#F37021] transition-colors" href="#">
                        Make Appointment
                    </a>
</div>

<div>
<h4 className="text-lg font-medium mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm text-[#E6EDEF]/70 font-light">
<li><a className="hover:text-[#FB8500] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#FB8500] transition-colors" href="#">Services</a></li>
<li><a className="hover:text-[#FB8500] transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-medium mb-6">Useful Links</h4>
<ul className="space-y-3 text-sm text-[#E6EDEF]/70 font-light">
<li><a className="hover:text-[#FB8500] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#FB8500] transition-colors" href="#">Terms and Conditions</a></li>
<li><a className="hover:text-[#FB8500] transition-colors" href="#">Support</a></li>
<li><a className="hover:text-[#FB8500] transition-colors" href="#">FAQ</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-medium mb-6">Work Hours</h4>
<p className="text-sm text-[#E6EDEF]/70 font-light mb-8">
                        9 AM - 5 PM, Monday - Saturday
                    </p>
<div className="space-y-4 text-sm text-[#E6EDEF]/70 font-light">
<div className="flex gap-3 items-start">
<span className="iconify mt-1 text-[#FB8500] shrink-0" data-icon="lucide:map-pin" data-width="16"></span>
<p>Barking Enterprise Centres (G-13), 50 Wakering road, Barking IG11 8GN</p>
</div>
<div className="flex gap-3 items-center">
<span className="iconify text-[#FB8500] shrink-0" data-icon="lucide:mail" data-width="16"></span>
<a className="hover:text-white" href="mailto:info@akbarhossain.com.uk">info@akbarhossain.com.uk</a>
</div>
<div className="flex gap-3 items-center">
<span className="iconify text-[#FB8500] shrink-0" data-icon="lucide:phone" data-width="16"></span>
<a className="hover:text-white" href="tel:07848990491">(078) 4899 - 0491</a>
</div>
</div>
</div>
</div>

<div className="pt-8 border-t border-[#0F3C54] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#E6EDEF]/50 font-light">
<p>Copyright © 2025. All rights reserved.</p>
<p>Develop by Abed Hossain</p>
</div>
</div>
</footer>

    </>
  );
}
