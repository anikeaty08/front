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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter text-slate-900">LEARNED.</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors" href="#courses">Courses</a>
<a className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors" href="#process">How it Works</a>
<a className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors" href="#reviews">Reviews</a>
<a className="flex items-center gap-2 text-sm font-medium text-slate-900" href="tel:1300000000">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                        1300 000 000
                    </a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500" href="#enquire">
                        Get Course Guide
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-900 p-2" type="button">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50">

<div className="absolute inset-0 z-0 opacity-40">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-100 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

<div className="lg:col-span-7 mb-12 lg:mb-0 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">New 2024 Intakes Open</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Launch your career in <span className="text-rose-600">Health &amp; Care</span> today.
                    </h1>
<p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                        Get nationally recognized qualifications in Aged Care and Disability Support. Flexible online learning with guaranteed practical placement support across Australia.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
<div className="flex items-center gap-2 text-sm text-slate-700 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Gov. Funded Spots</span>
</div>
<div className="flex items-center gap-2 text-sm text-slate-700 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Placement Guaranteed</span>
</div>
</div>

<div className="pt-6 border-t border-slate-200">
<p className="text-xs text-slate-500 uppercase tracking-widest mb-4 font-medium">Accredited &amp; Trusted By</p>
<div className="flex justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">

<div className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-1"><iconify-icon icon="solar:diploma-linear"></iconify-icon> NATIONALLY RECOGNISED</div>
<div className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> AQF</div>
</div>
</div>
</div>

<div className="lg:col-span-5" id="enquire">
<div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-rose-600"></div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Check Eligibility &amp; Download Guide</h3>
<p className="text-sm text-slate-500 mb-6">See if you qualify for funding. No obligation.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">First Name</label>
<input className="block w-full rounded-md border-slate-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm px-3 py-2 border bg-slate-50" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Last Name</label>
<input className="block w-full rounded-md border-slate-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm px-3 py-2 border bg-slate-50" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
<input className="block w-full rounded-md border-slate-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm px-3 py-2 border bg-slate-50" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Phone Number</label>
<input className="block w-full rounded-md border-slate-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm px-3 py-2 border bg-slate-50" placeholder="0400 000 000" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Select Course Interest</label>
<select className="block w-full rounded-md border-slate-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm px-3 py-2 border bg-slate-50 text-slate-600">
<option>Cert III in Individual Support (Ageing)</option>
<option>Cert IV in Ageing Support</option>
<option>Cert IV in Disability Support</option>
</select>
</div>
<button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors mt-2" type="submit">
                                Download Course Info
                            </button>
<p className="text-xs text-center text-slate-400 mt-3">
                                By clicking above, you agree to our Privacy Policy.
                            </p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Why study with Learned?</h2>
<p className="text-slate-500 text-lg font-light">We combine flexible online theory with real-world practical experience to get you job-ready faster.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-slate-200 transition-colors">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm text-rose-600">
<iconify-icon icon="solar:laptop-minimalistic-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">100% Flexible Learning</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Study at your own pace with our state-of-the-art online portal. Access course materials 24/7 from any device.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-slate-200 transition-colors">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm text-rose-600">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Placement Support</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        We don't just teach you; we help you find your placement. Our industry network spans across Australia.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-slate-200 transition-colors">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm text-rose-600">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Funding Options</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Flexible payment plans and government funding available for eligible students in VIC, NSW, and WA.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="courses">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-slate-800/20 to-transparent"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Popular Courses</h2>
<p className="text-slate-400 font-light">Start your journey in Australia's fastest-growing sectors.</p>
</div>
<a className="text-sm font-medium text-white hover:text-rose-400 flex items-center gap-1 transition-colors" href="#">
                    View all courses <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-rose-500/50 transition-all hover:-translate-y-1">
<div className="inline-block px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-medium mb-4">Most Popular</div>
<h3 className="text-xl font-medium mb-2">Cert III in Individual Support</h3>
<p className="text-slate-400 text-sm mb-6 h-10">Entry-level qualification to work in Aged Care or Disability support.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-rose-500 mt-0.5" icon="solar:clock-circle-linear"></iconify-icon>
<span>Duration: 12 Months (Self-paced)</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-rose-500 mt-0.5" icon="solar:briefcase-linear"></iconify-icon>
<span>120 Hours Work Placement</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-rose-500 mt-0.5" icon="solar:dollar-linear"></iconify-icon>
<span>Funding Available</span>
</li>
</ul>
<a className="block w-full py-2.5 rounded-lg bg-slate-700 text-center text-sm font-medium text-white group-hover:bg-rose-600 transition-colors" href="#enquire">Enquire Now</a>
</div>

<div className="group relative bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-rose-500/50 transition-all hover:-translate-y-1">
<div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-4">Upskill</div>
<h3 className="text-xl font-medium mb-2">Cert IV in Ageing Support</h3>
<p className="text-slate-400 text-sm mb-6 h-10">Step up into leadership roles or specialized care coordination.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-rose-500 mt-0.5" icon="solar:clock-circle-linear"></iconify-icon>
<span>Duration: 12 Months</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-rose-500 mt-0.5" icon="solar:briefcase-linear"></iconify-icon>
<span>Career Progression focus</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-rose-500 mt-0.5" icon="solar:monitor-camera-linear"></iconify-icon>
<span>100% Online Theory</span>
</li>
</ul>
<a className="block w-full py-2.5 rounded-lg bg-slate-700 text-center text-sm font-medium text-white group-hover:bg-rose-600 transition-colors" href="#enquire">Enquire Now</a>
</div>

<div className="group relative bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-rose-500/50 transition-all hover:-translate-y-1">
<div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-4">In Demand</div>
<h3 className="text-xl font-medium mb-2">Cert IV in Disability Support</h3>
<p className="text-slate-400 text-sm mb-6 h-10">Specialise in empowering people with disabilities.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-rose-500 mt-0.5" icon="solar:clock-circle-linear"></iconify-icon>
<span>Duration: 12 Months</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-rose-500 mt-0.5" icon="solar:heart-angle-linear"></iconify-icon>
<span>NDIS Focused Training</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-rose-500 mt-0.5" icon="solar:dollar-linear"></iconify-icon>
<span>High Earning Potential</span>
</li>
</ul>
<a className="block w-full py-2.5 rounded-lg bg-slate-700 text-center text-sm font-medium text-white group-hover:bg-rose-600 transition-colors" href="#enquire">Enquire Now</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Real Results from Real Students</h2>
<p className="text-slate-600 mb-8 font-light">Join thousands of Australians who have successfully changed careers with Learned Training.</p>
<div className="grid grid-cols-2 gap-6">
<div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
<div className="text-4xl font-semibold text-rose-600 mb-1 tracking-tight">92%</div>
<div className="text-sm text-slate-500">Employment Rate</div>
</div>
<div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
<div className="text-4xl font-semibold text-slate-900 mb-1 tracking-tight">3000+</div>
<div className="text-sm text-slate-500">Graduates</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="flex items-center gap-1 text-yellow-400 mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 italic mb-4">"The flexibility of the online course allowed me to keep working while I studied. The placement support team found me a spot at a local aged care facility within a week of asking."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium">SJ</div>
<div>
<div className="text-sm font-medium text-slate-900">Sarah Jenkins</div>
<div className="text-xs text-slate-500">Cert III Individual Support</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="flex items-center gap-1 text-yellow-400 mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 italic mb-4">"Supportive trainers and great content. I felt ready for my first day on the job. Highly recommend Learned for anyone wanting to get into disability support."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium">MT</div>
<div>
<div className="text-sm font-medium text-slate-900">Michael Tran</div>
<div className="text-xs text-slate-500">Cert IV Disability</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-100" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">How it works</h2>
<p className="mt-2 text-slate-500">From enrolment to employment in 4 simple steps.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
<div className="grid md:grid-cols-4 gap-8 relative z-10">

<div className="bg-white p-4 text-center group">
<div className="w-16 h-16 mx-auto bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center text-slate-600 mb-4 group-hover:border-rose-500 group-hover:text-rose-600 transition-colors shadow-sm">
<iconify-icon icon="solar:document-add-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">1. Enquire</h4>
<p className="text-sm text-slate-500">Fill out the form to check your eligibility for funding.</p>
</div>

<div className="bg-white p-4 text-center group">
<div className="w-16 h-16 mx-auto bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center text-slate-600 mb-4 group-hover:border-rose-500 group-hover:text-rose-600 transition-colors shadow-sm">
<iconify-icon icon="solar:book-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">2. Study Online</h4>
<p className="text-sm text-slate-500">Complete theory modules at your own pace from home.</p>
</div>

<div className="bg-white p-4 text-center group">
<div className="w-16 h-16 mx-auto bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center text-slate-600 mb-4 group-hover:border-rose-500 group-hover:text-rose-600 transition-colors shadow-sm">
<iconify-icon icon="solar:hand-shake-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">3. Placement</h4>
<p className="text-sm text-slate-500">Gain practical skills with 120 hours of work placement.</p>
</div>

<div className="bg-white p-4 text-center group">
<div className="w-16 h-16 mx-auto bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center text-slate-600 mb-4 group-hover:border-rose-500 group-hover:text-rose-600 transition-colors shadow-sm">
<iconify-icon icon="solar:diploma-verified-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">4. Qualify</h4>
<p className="text-sm text-slate-500">Receive your nationally recognised certificate.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-center text-slate-900 tracking-tight mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center p-5 cursor-pointer text-slate-900 font-medium hover:bg-slate-50 transition-colors select-none">
<span>Is government funding available?</span>
<span className="transform transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        Yes, we offer government-subsidised training for eligible students in participating states. Fill out the enquiry form to have one of our course advisors assess your eligibility.
                    </div>
</details>
<details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center p-5 cursor-pointer text-slate-900 font-medium hover:bg-slate-50 transition-colors select-none">
<span>Do I need to find my own placement?</span>
<span className="transform transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        No. Learned Training provides full placement support. We have a network of partner facilities and will help organize a placement that is convenient for you.
                    </div>
</details>
<details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center p-5 cursor-pointer text-slate-900 font-medium hover:bg-slate-50 transition-colors select-none">
<span>How long do the courses take?</span>
<span className="transform transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        Most students complete the Certificate III in 6-12 months. Since the theory is self-paced online, you can move faster or slower depending on your schedule.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">

<div className="absolute top-0 right-0 w-64 h-64 bg-rose-600 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600 rounded-full blur-[100px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Ready to start your new career?</h2>
<p className="text-slate-300 mb-8 max-w-xl mx-auto text-lg font-light">Download our free course guide today to see full unit breakdowns, career outcomes, and pricing.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-rose-600 hover:bg-rose-700 transition-all shadow-lg hover:shadow-rose-600/30" href="#enquire">
                            Download Course Guide
                        </a>
<a className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-base font-medium rounded-lg text-white hover:bg-slate-800 transition-all" href="tel:1300000000">
                            Call 1300 000 000
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<span className="text-lg font-semibold tracking-tighter text-slate-900 block mb-4">LEARNED.</span>
<p className="text-sm text-slate-500 mb-4">Empowering Australians with skills for the future. Nationally Recognised Training.</p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">Courses</h4>
<ul className="space-y-2">
<li><a className="text-sm text-slate-500 hover:text-rose-600 transition-colors" href="#">Individual Support</a></li>
<li><a className="text-sm text-slate-500 hover:text-rose-600 transition-colors" href="#">Ageing Support</a></li>
<li><a className="text-sm text-slate-500 hover:text-rose-600 transition-colors" href="#">Disability Support</a></li>
<li><a className="text-sm text-slate-500 hover:text-rose-600 transition-colors" href="#">Short Courses</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">Student Info</h4>
<ul className="space-y-2">
<li><a className="text-sm text-slate-500 hover:text-rose-600 transition-colors" href="#">Funding Eligibility</a></li>
<li><a className="text-sm text-slate-500 hover:text-rose-600 transition-colors" href="#">Student Handbook</a></li>
<li><a className="text-sm text-slate-500 hover:text-rose-600 transition-colors" href="#">Placement Info</a></li>
<li><a className="text-sm text-slate-500 hover:text-rose-600 transition-colors" href="#">FAQs</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">Contact</h4>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-slate-500">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> 1300 000 000
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-500">
<iconify-icon icon="solar:letter-linear"></iconify-icon> hello@learned.com.au
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-500">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Melbourne, VIC
                        </li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Learned Training. RTO Code: XXXXX. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-slate-600" href="#">Privacy Policy</a>
<a className="text-xs text-slate-400 hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="md:hidden fixed bottom-0 w-full bg-white border-t border-slate-200 p-4 z-50">
<a className="flex items-center justify-center w-full bg-rose-600 text-white font-medium py-3 rounded-lg shadow-lg" href="#enquire">
            Download Course Guide
        </a>
</div>

    </>
  );
}
