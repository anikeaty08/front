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
      

<header className="absolute top-0 left-0 w-full z-50 bg-transparent">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<a className="text-2xl font-semibold tracking-tight text-[#222222] flex items-center gap-2" href="#">
<span className="iconify text-[#8e24aa]" data-icon="lucide:sparkles" data-width="24"></span>
                SCULPT<span className="font-normal text-slate-500">SPA</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#222222] hover:text-[#8e24aa] transition-colors duration-200" href="#">Treatments</a>
<a className="text-sm font-medium text-[#222222] hover:text-[#8e24aa] transition-colors duration-200" href="#">Financing</a>
<a className="text-sm font-medium text-[#222222] hover:text-[#8e24aa] transition-colors duration-200" href="#">Reviews</a>
<a className="text-sm font-medium text-[#222222] hover:text-[#8e24aa] transition-colors duration-200" href="#">Locations</a>
</nav>

<div className="hidden md:block">
<a className="bg-[#8e24aa] text-white text-sm font-medium px-6 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300" href="#book">
                    Book Consultation
                </a>
</div>

<button className="md:hidden text-[#222222]">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-white">

<div className="absolute top-0 right-0 w-1/2 h-full bg-purple-50/30 -z-10 rounded-bl-[100px]"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/50 border border-purple-100 text-[#8e24aa] text-xs font-semibold mb-6">
<span className="iconify" data-icon="lucide:check-circle" data-width="14"></span>
                    Flexible Payment Plans Available
                </div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                    Achieve your dream body, <span className="text-[#8e24aa]">stress-free.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-md">
                    Premium body sculpting and aesthetic treatments with financing options designed to fit your lifestyle and budget.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-4 bg-[#8e24aa] text-white font-medium rounded-full hover:bg-[#7b1fa2] transition-colors shadow-lg shadow-purple-900/10" href="#payment-options">
                        View Payment Plans
                    </a>
<a className="inline-flex justify-center items-center px-8 py-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-full hover:bg-slate-50 transition-colors" href="#locations">
                        Find a Location
                    </a>
</div>
<div className="mt-8 flex items-center gap-4 text-xs font-medium text-slate-500">
<div className="flex -space-x-2">
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<p>Trusted by 2,000+ clients</p>
</div>
</div>

<div className="relative">
<div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl shadow-purple-900/10">
<img alt="Consultation" className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 max-w-xs">
<div className="flex items-center gap-3">
<div className="bg-[#8e24aa]/10 p-2 rounded-lg text-[#8e24aa]">
<span className="iconify" data-icon="lucide:calendar-check" data-width="20"></span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Instant Approval</p>
<p className="text-xs text-slate-500">No impact to credit score</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="payment-options">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Choose Your Payment Plan</h2>
<p className="text-slate-500">We offer multiple ways to finance your treatments. Select the option that works best for your budget.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white rounded-[24px] p-8 border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:border-[#8e24aa]/30 hover:shadow-[0_8px_30px_rgba(142,36,170,0.1)] transition-all duration-300 flex flex-col">
<div className="h-12 mb-6 flex items-center">
<span className="text-2xl font-bold text-slate-900 flex items-center gap-2">
<span className="iconify text-[#8e24aa]" data-icon="lucide:cherry" data-width="28"></span> Cherry
                        </span>
</div>
<p className="text-slate-500 mb-8 flex-grow text-sm leading-relaxed">Split your payments into smaller, manageable monthly installments. Quick application with instant decision.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-[#8e24aa]" data-icon="lucide:check" data-width="16"></span> High approval rates
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-[#8e24aa]" data-icon="lucide:check" data-width="16"></span> No hard credit check
                        </li>
</ul>
<a className="block w-full text-center py-3 rounded-xl bg-purple-50 text-[#8e24aa] font-medium hover:bg-[#8e24aa] hover:text-white transition-all" href="#">Apply Now</a>
</div>

<div className="group bg-white rounded-[24px] p-8 border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:border-[#8e24aa]/30 hover:shadow-[0_8px_30px_rgba(142,36,170,0.1)] transition-all duration-300 flex flex-col">
<div className="h-12 mb-6 flex items-center">
<span className="text-2xl font-bold text-slate-900 flex items-center gap-2">
<span className="iconify text-[#8e24aa]" data-icon="lucide:credit-card" data-width="28"></span> CareCredit
                        </span>
</div>
<p className="text-slate-500 mb-8 flex-grow text-sm leading-relaxed">Designed for health and beauty needs. Pay over time with promotional financing options available.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-[#8e24aa]" data-icon="lucide:check" data-width="16"></span> Accepted nationwide
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-[#8e24aa]" data-icon="lucide:check" data-width="16"></span> Revolving credit line
                        </li>
</ul>
<a className="block w-full text-center py-3 rounded-xl bg-purple-50 text-[#8e24aa] font-medium hover:bg-[#8e24aa] hover:text-white transition-all" href="#">Apply Now</a>
</div>

<div className="group bg-white rounded-[24px] p-8 border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:border-[#8e24aa]/30 hover:shadow-[0_8px_30px_rgba(142,36,170,0.1)] transition-all duration-300 flex flex-col">
<div className="h-12 mb-6 flex items-center">
<span className="text-2xl font-bold text-slate-900 flex items-center gap-2">
<span className="iconify text-[#8e24aa]" data-icon="lucide:home" data-width="28"></span> In-House
                        </span>
</div>
<p className="text-slate-500 mb-8 flex-grow text-sm leading-relaxed">Direct financing through our clinic for select packages. Simple terms with no third-party banks.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-[#8e24aa]" data-icon="lucide:check" data-width="16"></span> 0% Interest options
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-[#8e24aa]" data-icon="lucide:check" data-width="16"></span> Customized plans
                        </li>
</ul>
<a className="block w-full text-center py-3 rounded-xl bg-purple-50 text-[#8e24aa] font-medium hover:bg-[#8e24aa] hover:text-white transition-all" href="#">Contact Us</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100">
<div className="grid lg:grid-cols-2">
<div className="relative h-64 lg:h-auto">
<img alt="Consultation Room" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
</div>
<div className="p-10 lg:p-16 flex flex-col justify-center">
<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-[#8e24aa] mb-6">
<span className="iconify" data-icon="lucide:smartphone" data-width="24"></span>
</div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Get Started with Cherry</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                            Treat yourself now and pay later. Cherry allows you to break large expenses into smaller, manageable payments. 
                            Approval takes 30 seconds and does not affect your credit score.
                        </p>
<div className="grid sm:grid-cols-2 gap-6 mb-10">
<div>
<h4 className="font-medium text-slate-900 mb-1">Fast Pre-Approval</h4>
<p className="text-sm text-slate-500">Know your budget instantly.</p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">Flexible Terms</h4>
<p className="text-sm text-slate-500">3, 6, 12, or 24 months.</p>
</div>
</div>
<a className="inline-flex w-fit items-center gap-2 bg-[#8e24aa] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7b1fa2] transition-colors" href="#">
                            Check Eligibility
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Patient Experiences</h2>
<p className="text-slate-500">Read what our clients have to say about their journey and results.</p>
</div>
<div className="flex gap-1 text-[#8e24aa]">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="20"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="20"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="20"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="20"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="20"></span>
<span className="text-slate-900 font-semibold ml-2">5.0</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-[24px]">
<div className="flex gap-1 text-[#8e24aa] mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"The financing options made it so easy for me to finally get the treatment I wanted. The staff walked me through everything."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-[#8e24aa] font-bold text-sm">JS</div>
<div>
<p className="text-sm font-semibold text-slate-900">Jessica S.</p>
<p className="text-xs text-slate-500">Body Contouring</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-[24px]">
<div className="flex gap-1 text-[#8e24aa] mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"Incredibly professional team. Using Cherry for payment was seamless and took less than a minute to approve."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-[#8e24aa] font-bold text-sm">MR</div>
<div>
<p className="text-sm font-semibold text-slate-900">Michael R.</p>
<p className="text-xs text-slate-500">Skin Tightening</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-[24px]">
<div className="flex gap-1 text-[#8e24aa] mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"I love my results! The facility is beautiful and the fact that I could pay over time helped me budget effectively."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-[#8e24aa] font-bold text-sm">AL</div>
<div>
<p className="text-sm font-semibold text-slate-900">Amanda L.</p>
<p className="text-xs text-slate-500">Laser Treatment</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-white rounded-2xl border border-slate-100 overflow-hidden open:shadow-lg open:shadow-purple-900/5 transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900 hover:text-[#8e24aa] transition-colors">
<span>How do I apply for financing?</span>
<span className="transition group-open:rotate-180">
<span className="iconify text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 pt-0 leading-relaxed text-sm">
                        You can apply online through our website links or in-person at our clinic. The application process typically takes just a few minutes and provides an instant decision.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-slate-100 overflow-hidden open:shadow-lg open:shadow-purple-900/5 transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900 hover:text-[#8e24aa] transition-colors">
<span>Does checking my eligibility affect my credit score?</span>
<span className="transition group-open:rotate-180">
<span className="iconify text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 pt-0 leading-relaxed text-sm">
                        For Cherry and many of our partners, checking your eligibility involves a "soft check" which does not impact your credit score.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-slate-100 overflow-hidden open:shadow-lg open:shadow-purple-900/5 transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900 hover:text-[#8e24aa] transition-colors">
<span>Can I prepay my balance early?</span>
<span className="transition group-open:rotate-180">
<span className="iconify text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 pt-0 leading-relaxed text-sm">
                        Yes! Most of our financing plans allow you to pay off your balance early with no prepayment penalties.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-slate-100 overflow-hidden open:shadow-lg open:shadow-purple-900/5 transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900 hover:text-[#8e24aa] transition-colors">
<span>What treatments are covered?</span>
<span className="transition group-open:rotate-180">
<span className="iconify text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 pt-0 leading-relaxed text-sm">
                        Financing covers a wide range of services including body sculpting, injectables, lasers, and skincare packages.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-purple-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Why Finance With Us?</h2>
<p className="text-slate-500">We make aesthetic treatments accessible and affordable.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm">
<div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-[#8e24aa] mb-4">
<span className="iconify" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Instant Decisions</h3>
<p className="text-sm text-slate-500">No waiting days for approval. Find out in seconds.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm">
<div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-[#8e24aa] mb-4">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Secure Process</h3>
<p className="text-sm text-slate-500">Your data is encrypted and protected at all times.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm">
<div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-[#8e24aa] mb-4">
<span className="iconify" data-icon="lucide:percent" data-width="24"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">0% Interest APR</h3>
<p className="text-sm text-slate-500">Available for qualifying patients on select plans.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm">
<div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-[#8e24aa] mb-4">
<span className="iconify" data-icon="lucide:calendar-clock" data-width="24"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Flexible Terms</h3>
<p className="text-sm text-slate-500">Choose the timeline that fits your monthly budget.</p>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
<h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Important Information</h4>
<p className="text-xs text-slate-500 leading-relaxed">
                    Subject to credit approval. Interest rates and terms may vary based on creditworthiness. Down payment may be required. 0% APR options are subject to qualification. Services must be rendered at Sculpt &amp; Aesthetic locations. Please consult with our financial coordinator for full details regarding terms and conditions.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="relative bg-[#8e24aa] rounded-[32px] overflow-hidden px-8 py-20 lg:px-20 text-center">

<div className="absolute inset-0 bg-gradient-to-tr from-purple-900 to-transparent opacity-50"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tight mb-6">Ready to transform your look?</h2>
<p className="text-purple-100 text-lg mb-10">Book your consultation today and discuss the payment plan that works best for you.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex justify-center items-center px-8 py-4 bg-white text-[#8e24aa] font-semibold rounded-full hover:bg-purple-50 transition-colors" href="#">
                            Book Now
                        </a>
<a className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-purple-300 text-white font-semibold rounded-full hover:bg-white/10 transition-colors" href="#">
                            Contact Us
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="locations">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Visit Our Clinics</h2>
<p className="text-slate-500">Conveniently located to serve you better.</p>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row">
<div className="md:w-1/2 bg-slate-200 min-h-[240px] relative">

<div className="absolute inset-0 flex items-center justify-center bg-slate-200">
<span className="text-slate-400 font-medium flex items-center gap-2">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span> Map View
                             </span>
</div>
</div>
<div className="p-8 md:w-1/2 flex flex-col justify-center">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Downtown Clinic</h3>
<p className="text-slate-500 text-sm mb-4">123 Aesthetic Blvd, Suite 100<br/>Metropolis, NY 10012</p>
<div className="space-y-2 mb-6 text-sm text-slate-600">
<p>Mon-Fri: 9am - 7pm</p>
<p>Sat: 10am - 4pm</p>
</div>
<button className="text-[#8e24aa] font-medium text-sm flex items-center gap-2 hover:underline">
                            Get Directions <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>

<div className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row">
<div className="md:w-1/2 bg-slate-200 min-h-[240px] relative">

<div className="absolute inset-0 flex items-center justify-center bg-slate-200">
<span className="text-slate-400 font-medium flex items-center gap-2">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span> Map View
                            </span>
</div>
</div>
<div className="p-8 md:w-1/2 flex flex-col justify-center">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Westside Center</h3>
<p className="text-slate-500 text-sm mb-4">456 Beauty Lane, Suite 4B<br/>Metropolis, NY 10014</p>
<div className="space-y-2 mb-6 text-sm text-slate-600">
<p>Mon-Fri: 10am - 8pm</p>
<p>Sun: Closed</p>
</div>
<button className="text-[#8e24aa] font-medium text-sm flex items-center gap-2 hover:underline">
                            Get Directions <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2 mb-6" href="#">
<span className="iconify text-[#8e24aa]" data-icon="lucide:sparkles" data-width="24"></span>
                        SCULPT<span className="font-normal text-gray-400">SPA</span>
</a>
<p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
                        Redefining body aesthetics with advanced technology and flexible payment solutions. Your confidence is our priority.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8e24aa] transition-colors text-white" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8e24aa] transition-colors text-white" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="18"></span>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8e24aa] transition-colors text-white" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
</div>
</div>
<div>
<h4 className="font-semibold mb-6">Explore</h4>
<ul className="space-y-4 text-sm text-gray-400">
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">Treatments</a></li>
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">Financing</a></li>
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">Before &amp; After</a></li>
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">Reviews</a></li>
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-6">Newsletter</h4>
<p className="text-sm text-gray-400 mb-4">Subscribe for latest offers and updates.</p>
<form className="flex flex-col gap-3">
<input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#8e24aa]" placeholder="Your email" type="email"/>
<button className="bg-[#8e24aa] text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-[#7b1fa2] transition-colors">
                            Subscribe
                        </button>
</form>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
<p>© 2024 Sculpt &amp; Aesthetic. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
