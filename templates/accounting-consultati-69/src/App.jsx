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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-slate-900 uppercase" href="https://devabedhossain.com/cima/">
                ShafkatAkbar
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="https://devabedhossain.com/cima/">Home</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="https://devabedhossain.com/cima/about/">About Us</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="https://devabedhossain.com/cima/our-services-2/">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="https://devabedhossain.com/cima/contact-us/">Contact</a>
</div>

<button className="md:hidden text-slate-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
<div className="mx-auto max-w-4xl px-6 text-center">
<div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 mb-8">
<span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                Accepting new clients
            </div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-900 mb-6">
                Book an Appointment
            </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
                Schedule a consultation with our experienced accounting professionals and take the first step toward financial clarity and business growth.
            </p>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[800px] opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200 via-white to-white blur-3xl pointer-events-none"></div>
</section>

<section className="py-12 border-b border-slate-50">
<div className="mx-auto max-w-3xl px-6 text-center">
<p className="text-base text-slate-600 leading-7">
                At <span className="font-semibold text-slate-900">ShafkatAkbar and Company Ltd</span>, we make it easy to get expert accounting and bookkeeping support when you need it. Whether you are a startup, small business, or growing company, our tailored consultations help you make informed financial decisions with confidence.
            </p>
<p className="mt-4 text-base text-slate-900 font-medium">
                Book your appointment today and let us understand your needs.
            </p>
</div>
</section>

<section className="py-20 bg-slate-50/50">
<div className="mx-auto max-w-6xl px-6">
<div className="grid md:grid-cols-2 gap-12 lg:gap-24">

<div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-8">Why Choose Our Consultation?</h2>
<ul className="space-y-5">
<li className="flex items-start gap-3 group">
<div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 group-hover:bg-slate-200 transition-colors">
<iconify-icon className="text-slate-900" icon="lucide:check" strokeWidth="2" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-600">Qualified and experienced accountants</span>
</li>
<li className="flex items-start gap-3 group">
<div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 group-hover:bg-slate-200 transition-colors">
<iconify-icon className="text-slate-900" icon="lucide:check" strokeWidth="2" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-600">Personalised advice tailored to your business</span>
</li>
<li className="flex items-start gap-3 group">
<div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 group-hover:bg-slate-200 transition-colors">
<iconify-icon className="text-slate-900" icon="lucide:check" strokeWidth="2" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-600">Transparent, compliant, and practical solutions</span>
</li>
<li className="flex items-start gap-3 group">
<div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 group-hover:bg-slate-200 transition-colors">
<iconify-icon className="text-slate-900" icon="lucide:check" strokeWidth="2" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-600">Flexible appointment scheduling</span>
</li>
<li className="flex items-start gap-3 group">
<div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 group-hover:bg-slate-200 transition-colors">
<iconify-icon className="text-slate-900" icon="lucide:check" strokeWidth="2" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-600">Trusted by UK businesses</span>
</li>
</ul>
</div>

<div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-8">How It Works</h2>
<div className="relative space-y-8 pl-2">

<div className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-200"></div>
<div className="relative flex gap-4">
<div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-900">1</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Select date and time</h3>
<p className="text-sm text-slate-500 mt-1">Choose a slot that fits your schedule from our live calendar.</p>
</div>
</div>
<div className="relative flex gap-4">
<div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-900">2</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Fill details</h3>
<p className="text-sm text-slate-500 mt-1">Provide your contact info so we can reach you.</p>
</div>
</div>
<div className="relative flex gap-4">
<div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-900">3</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Describe requirements</h3>
<p className="text-sm text-slate-500 mt-1">Briefly tell us what you need help with.</p>
</div>
</div>
<div className="relative flex gap-4">
<div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-900">4</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Confirmation</h3>
<p className="text-sm text-slate-500 mt-1">Receive immediate confirmation via email.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="book-now">
<div className="mx-auto max-w-4xl px-4 sm:px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Schedule Your Consultation</h2>
<p className="mt-2 text-sm text-slate-500">Select a service below to view availability.</p>
</div>

<div className="bg-white rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_8px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden">

<div className="bg-slate-50 border-b border-slate-100 p-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
<iconify-icon icon="lucide:calendar" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Initial Consultation</div>
<div className="text-xs text-slate-500">30 Minutes • Video Call</div>
</div>
</div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Step 1 of 3</div>
</div>
<div className="p-6 md:p-10 grid md:grid-cols-7 gap-8">

<div className="md:col-span-4">
<div className="flex items-center justify-between mb-6">
<span className="text-sm font-medium text-slate-900">October 2023</span>
<div className="flex gap-1">
<button className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-900 transition-colors"><iconify-icon icon="lucide:chevron-left" width="18"></iconify-icon></button>
<button className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-900 transition-colors"><iconify-icon icon="lucide:chevron-right" width="18"></iconify-icon></button>
</div>
</div>

<div className="grid grid-cols-7 text-center gap-y-4 text-xs text-slate-500 mb-2">
<span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
</div>
<div className="grid grid-cols-7 text-center gap-y-2 text-sm">
<span className="text-slate-300 py-2">29</span><span className="text-slate-300 py-2">30</span>
<button className="py-2 hover:bg-slate-50 rounded-full transition-colors">1</button>
<button className="py-2 hover:bg-slate-50 rounded-full transition-colors">2</button>
<button className="py-2 hover:bg-slate-50 rounded-full transition-colors">3</button>
<button className="py-2 text-slate-300">4</button>
<button className="py-2 text-slate-300">5</button>
<button className="py-2 hover:bg-slate-50 rounded-full transition-colors">6</button>
<button className="py-2 bg-slate-900 text-white rounded-full shadow-md">7</button>
<button className="py-2 hover:bg-slate-50 rounded-full transition-colors">8</button>
<button className="py-2 hover:bg-slate-50 rounded-full transition-colors">9</button>
<button className="py-2 hover:bg-slate-50 rounded-full transition-colors">10</button>
<button className="py-2 text-slate-300">11</button>
<button className="py-2 text-slate-300">12</button>

</div>
</div>

<div className="md:col-span-3 border-l border-slate-100 md:pl-8 flex flex-col">
<span className="text-sm font-medium text-slate-900 mb-4">Tuesday, Oct 7</span>
<div className="space-y-2 flex-1 overflow-y-auto max-h-60 pr-2">
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="timeslot" type="radio"/>
<div className="w-full border border-slate-200 rounded-lg py-2.5 px-4 text-center text-sm text-slate-600 hover:border-slate-300 transition-all">
                                    09:00 AM
                                </div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="timeslot" type="radio"/>
<div className="w-full border border-slate-200 rounded-lg py-2.5 px-4 text-center text-sm text-slate-600 hover:border-slate-300 transition-all">
                                    10:30 AM
                                </div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="timeslot" type="radio"/>
<div className="w-full border border-slate-200 rounded-lg py-2.5 px-4 text-center text-sm text-slate-600 hover:border-slate-300 transition-all">
                                    01:00 PM
                                </div>
</label>
<label className="cursor-pointer">
<input checked="" className="custom-radio sr-only" name="timeslot" type="radio"/>
<div className="w-full border border-slate-900 bg-slate-50 rounded-lg py-2.5 px-4 text-center text-sm text-slate-900 shadow-sm transition-all">
                                    03:30 PM
                                </div>
</label>
</div>
</div>
</div>

<div className="bg-slate-50/50 p-6 md:p-10 border-t border-slate-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500">First Name</label>
<input className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all placeholder:text-slate-300" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500">Last Name</label>
<input className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all placeholder:text-slate-300" placeholder="Doe" type="text"/>
</div>
<div className="md:col-span-2 space-y-1">
<label className="text-xs font-medium text-slate-500">Email Address</label>
<input className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all placeholder:text-slate-300" placeholder="jane@company.com" type="email"/>
</div>
<div className="md:col-span-2 space-y-1">
<label className="text-xs font-medium text-slate-500">Requirements</label>
<textarea className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all placeholder:text-slate-300" placeholder="Briefly describe what you need..."></textarea>
</div>
<div className="md:col-span-2 pt-2">
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-lg shadow-sm transition-all text-sm flex justify-center items-center gap-2">
                                Confirm Booking
                                <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="mt-6 flex gap-3 text-slate-400 max-w-2xl mx-auto justify-center">
<iconify-icon className="shrink-0 mt-0.5" icon="lucide:info" width="16"></iconify-icon>
<p className="text-xs text-center leading-relaxed">
                    Once your appointment is booked, you will receive a confirmation email. If you need to make any changes, please contact us in advance.
                </p>
</div>
</div>
</section>

<section className="py-20 border-t border-slate-100 bg-slate-50">
<div className="mx-auto max-w-6xl px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Consultation Areas</h2>
<p className="mt-4 text-sm text-slate-500">Our expertise covers a wide range of financial services.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-slate-900">
<iconify-icon icon="lucide:book-open" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Bookkeeping &amp; Accounting</h3>
<p className="text-xs text-slate-500 leading-relaxed">Accurate record-keeping to ensure your finances are always up to date.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-slate-900">
<iconify-icon icon="lucide:landmark" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Tax Planning &amp; Compliance</h3>
<p className="text-xs text-slate-500 leading-relaxed">Strategic planning to optimize tax efficiency while remaining compliant.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-slate-900">
<iconify-icon icon="lucide:file-spreadsheet" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">VAT Returns</h3>
<p className="text-xs text-slate-500 leading-relaxed">Timely and accurate VAT submissions to avoid penalties.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-slate-900">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Payroll Management</h3>
<p className="text-xs text-slate-500 leading-relaxed">Seamless payroll processing for you and your employees.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-slate-900">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Financial Reporting</h3>
<p className="text-xs text-slate-500 leading-relaxed">Detailed reports to give you clear visibility into performance.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-slate-900">
<iconify-icon icon="lucide:trending-up" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Business Advisory</h3>
<p className="text-xs text-slate-500 leading-relaxed">Expert guidance to support your long-term business growth.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="mx-auto max-w-3xl px-6 text-center">
<div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-slate-50 border border-slate-100 mb-6">
<iconify-icon className="text-slate-900" icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">Your Trusted Accounting Partner</h2>
<p className="text-sm text-slate-500 leading-relaxed">
                We are committed to providing accurate, reliable, and compliant accounting services that support long-term business success. Your confidentiality and financial security are always our priority.
            </p>
</div>
</section>

<section className="py-20 border-t border-slate-100">
<div className="mx-auto max-w-4xl px-6">
<div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
<div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-2">Need Immediate Assistance?</h2>
<p className="text-slate-400 text-sm mb-6 max-w-md">
                        If you have urgent queries or prefer to speak with us directly, feel free to contact our office.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-slate-900 text-sm font-medium hover:bg-slate-100 transition-colors" href="tel:07848990491">
<iconify-icon icon="lucide:phone" width="16"></iconify-icon>
                            (078) 4899-0491
                        </a>
<a className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 text-white text-sm font-medium hover:bg-slate-800 transition-colors" href="mailto:shafkatakbarco@gmail.com">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
                            Email Us
                        </a>
</div>
</div>
<div className="hidden md:block opacity-20">
<iconify-icon icon="lucide:message-square" strokeWidth="1" width="120"></iconify-icon>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="block text-sm font-semibold tracking-tight text-slate-900 uppercase">ShafkatAkbar &amp; Co.</span>
<span className="block text-xs text-slate-400 mt-1">© 2023 All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900" href="https://devabedhossain.com/cima/">Home</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900" href="https://devabedhossain.com/cima/about/">About</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900" href="https://devabedhossain.com/cima/our-services-2/">Services</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900" href="https://devabedhossain.com/cima/contact-us/">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
