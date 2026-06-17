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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse" href="#">
<iconify-icon className="text-slate-900" height="24" icon="solar:lock-password-linear" width="24"></iconify-icon>
<span className="self-center text-xl font-medium tracking-tight text-slate-900">Baw Baw Self Storage</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<a className="text-slate-900 bg-slate-100 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-100 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors inline-flex items-center gap-2" href="tel:0356159000">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span className="hidden sm:inline">Call</span> 03 5615 9000
                </a>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-900 md:p-0 transition-colors" href="#features">Features</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-900 md:p-0 transition-colors" href="#pricing">Sizes &amp; Prices</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-900 md:p-0 transition-colors" href="#faq">FAQ</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-900 md:p-0 transition-colors" href="#contact-section">Contact</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-sm text-slate-700 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span>Now accepting new leases in Drouin</span>
</div>
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Your key to secure self storage in Gippsland.
                    </h1>
<p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                        Family and independently owned facility with 46 units. Fully sealed yard, electronic gate access, and 24-hour CCTV monitoring.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-6 py-3 text-base font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 transition-all gap-2" href="#pricing">
                            View Available Units
                            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center px-6 py-3 text-base font-medium text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 focus:ring-4 focus:ring-slate-100 transition-all" href="#contact-section">
                            Contact Us
                        </a>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-video lg:aspect-square bg-slate-100 group">

<img alt="Baw Baw Self Storage Facility" className="object-cover w-full h-full transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="font-medium text-lg flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon> Secure Premises
                        </p>
<p className="text-slate-200 text-sm mt-1">20 Weerong Rd, Drouin</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Why choose Baw Baw?</h2>
<p className="text-lg text-slate-600">We provide a modern, secure facility designed with the customer in mind.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 text-indigo-600">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Secure &amp; Monitored</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                        Electronic gate with swipe card access, 24-hour CCTV surveillance, and night time lighting for your peace of mind.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 text-indigo-600">
<iconify-icon icon="solar:clock-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">24/7 Access</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                        You hold the key. Access your goods 24 hours a day, 7 days a week with your own lock and personal swipe card.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 text-indigo-600">
<iconify-icon icon="solar:calendar-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Flexible Leasing</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                        No start-up bond required. We offer both short term and long term leasing options starting from just 1 month.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-4">Simple, transparent pricing</h2>
<p className="text-lg text-slate-600">No hidden bonds. Just a one-off $50.00 administration fee.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="flex flex-col p-6 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 transition-colors group">
<div className="mb-4">
<span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Small</span>
<h3 className="text-2xl font-medium text-slate-900 tracking-tight mt-1">4.5m x 2m</h3>
<p className="text-slate-500 mt-1">~9 Square Meters</p>
</div>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-medium tracking-tight text-slate-900">$135</span>
<span className="text-slate-500 ml-2">/month</span>
</div>
<ul className="mb-8 space-y-3 text-slate-600">
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Personal Storage
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Fits small furniture
                        </li>
</ul>
<a className="mt-auto w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-900 font-medium rounded-lg text-center border border-slate-200 transition-colors" href="#contact-section">Enquire Now</a>
</div>

<div className="flex flex-col p-6 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 transition-colors relative ring-2 ring-transparent hover:ring-indigo-100">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full uppercase tracking-wide shadow-sm">Popular</div>
<div className="mb-4">
<span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Standard</span>
<h3 className="text-2xl font-medium text-slate-900 tracking-tight mt-1">3m x 3m</h3>
<p className="text-slate-500 mt-1">9 Square Meters</p>
</div>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-medium tracking-tight text-slate-900">$135</span>
<span className="text-slate-500 ml-2">/month</span>
</div>
<ul className="mb-8 space-y-3 text-slate-600">
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Standard bedroom
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Boxes &amp; Archive
                        </li>
</ul>
<a className="mt-auto w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-center transition-colors shadow-lg shadow-slate-900/10" href="#contact-section">Enquire Now</a>
</div>

<div className="flex flex-col p-6 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 transition-colors">
<div className="mb-4">
<span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Medium</span>
<h3 className="text-2xl font-medium text-slate-900 tracking-tight mt-1">4.5m x 3m</h3>
<p className="text-slate-500 mt-1">13.5 Square Meters</p>
</div>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-medium tracking-tight text-slate-900">$160</span>
<span className="text-slate-500 ml-2">/month</span>
</div>
<ul className="mb-8 space-y-3 text-slate-600">
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon> 1-2 Bedroom house
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Business Stock
                        </li>
</ul>
<a className="mt-auto w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-900 font-medium rounded-lg text-center border border-slate-200 transition-colors" href="#contact-section">Enquire Now</a>
</div>

<div className="flex flex-col p-6 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 transition-colors">
<div className="mb-4">
<span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Large</span>
<h3 className="text-2xl font-medium text-slate-900 tracking-tight mt-1">6m x 3m</h3>
<p className="text-slate-500 mt-1">18 Square Meters</p>
</div>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-medium tracking-tight text-slate-900">$190</span>
<span className="text-slate-500 ml-2">/month</span>
</div>
<ul className="mb-8 space-y-3 text-slate-600">
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Large furniture
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Vehicle / Trailer
                        </li>
</ul>
<a className="mt-auto w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-900 font-medium rounded-lg text-center border border-slate-200 transition-colors" href="#contact-section">Enquire Now</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12">

<div>
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-slate-900" icon="solar:file-check-linear" width="28"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight text-slate-900">Insurance Policy</h3>
</div>
<p className="text-lg text-slate-600 mb-4 leading-relaxed">
                        Whilst the Storage Units themselves are insured, any contents on the property are not.
                    </p>
<div className="p-4 bg-blue-50 border border-blue-100 rounded-lg text-blue-900">
<p className="text-base">It is the responsibility of the party leasing the unit to speak to an individual insurance provider to ensure your personal goods are insured.</p>
</div>
</div>

<div>
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-amber-600" icon="solar:danger-triangle-linear" width="28"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight text-slate-900">Restricted Goods</h3>
</div>
<p className="text-lg text-slate-600 mb-4 leading-relaxed">
                        To ensure the safety of all customers and the environment, we strictly prohibit the storage of the following items:
                    </p>
<ul className="grid grid-cols-2 gap-3">
<li className="flex items-center gap-2 text-slate-700 bg-white p-3 border border-slate-200 rounded-md">
<iconify-icon className="text-red-500" icon="solar:close-circle-linear" width="20"></iconify-icon> Illegal Goods
                        </li>
<li className="flex items-center gap-2 text-slate-700 bg-white p-3 border border-slate-200 rounded-md">
<iconify-icon className="text-red-500" icon="solar:close-circle-linear" width="20"></iconify-icon> Explosives
                        </li>
<li className="flex items-center gap-2 text-slate-700 bg-white p-3 border border-slate-200 rounded-md">
<iconify-icon className="text-red-500" icon="solar:close-circle-linear" width="20"></iconify-icon> Perishables
                        </li>
<li className="flex items-center gap-2 text-slate-700 bg-white p-3 border border-slate-200 rounded-md">
<iconify-icon className="text-red-500" icon="solar:close-circle-linear" width="20"></iconify-icon> Dangerous items
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 text-center mb-16">Trusted by locals in Drouin</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-1 mb-4 text-amber-400">
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
</div>
<p className="text-lg text-slate-600 mb-6">"Fantastic facility. The electronic gate makes it super easy to get in and out, and the yard is always clean."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-medium text-sm">SM</div>
<div>
<p className="text-slate-900 font-medium">Sarah M.</p>
<p className="text-sm text-slate-500">Personal Storage</p>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-1 mb-4 text-amber-400">
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
</div>
<p className="text-lg text-slate-600 mb-6">"Stored my business excess stock here for 6 months. Very secure and the Ray White team were helpful."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-medium text-sm">JD</div>
<div>
<p className="text-slate-900 font-medium">James D.</p>
<p className="text-sm text-slate-500">Business Storage</p>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-1 mb-4 text-amber-400">
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
</div>
<p className="text-lg text-slate-600 mb-6">"Simple pricing, no bond was a huge plus. Perfect for moving house."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-medium text-sm">LW</div>
<div>
<p className="text-slate-900 font-medium">Lisa W.</p>
<p className="text-sm text-slate-500">Short Term</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-8">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white p-6 rounded-lg border border-slate-200 open:ring-2 open:ring-slate-100 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900 text-lg">
<span>Is there a start-up bond?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 mt-4 leading-relaxed group-open:animate-fadeIn">
                        No, there is no start-up bond. However, we do charge a one-off $50.00 administration fee when you sign your lease.
                    </div>
</details>
<details className="group bg-white p-6 rounded-lg border border-slate-200 open:ring-2 open:ring-slate-100 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900 text-lg">
<span>When do I pay my rent?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 mt-4 leading-relaxed group-open:animate-fadeIn">
                        The date of the month you start your lease on will become your recurring monthly payment date.
                    </div>
</details>
<details className="group bg-white p-6 rounded-lg border border-slate-200 open:ring-2 open:ring-slate-100 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900 text-lg">
<span>Can I lease short term?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 mt-4 leading-relaxed group-open:animate-fadeIn">
                        Yes, we welcome both short term and long term leasing. The minimum storage lease is 1 month.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="contact-section">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="flex flex-col justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-sm text-indigo-700 mb-6 self-start">
<span className="relative flex h-2 w-2">
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span>Enquiries</span>
</div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-6">Get in touch with our team</h2>
<p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        Have questions about unit sizes, availability, or pricing? Fill out the form and our managing agents at Ray White will get back to you shortly.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="p-3 bg-slate-100 rounded-lg text-slate-900">
<iconify-icon height="24" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">Phone</h4>
<p className="text-slate-500 text-sm mb-2">Mon-Fri from 9am to 5pm</p>
<a className="text-slate-900 hover:text-indigo-600 font-medium transition-colors" href="tel:0356159000">03 5615 9000</a>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="p-3 bg-slate-100 rounded-lg text-slate-900">
<iconify-icon height="24" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">Email</h4>
<p className="text-slate-500 text-sm mb-2">Send us your query anytime</p>
<a className="text-slate-900 hover:text-indigo-600 font-medium transition-colors" href="mailto:admin.drouin@raywhite.com">admin.drouin@raywhite.com</a>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="p-3 bg-slate-100 rounded-lg text-slate-900">
<iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">Office</h4>
<p className="text-slate-500 text-sm mb-2">Ray White Drouin</p>
<span className="text-slate-900 font-medium">75 Princes Way, Drouin VIC</span>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 lg:p-10 rounded-2xl border border-slate-200 shadow-sm">
<form action="#" className="space-y-5" method="POST">
<div className="grid md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="first-name">First name</label>
<input className="block w-full rounded-lg border-slate-200 bg-white py-2.5 px-4 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:leading-6 border shadow-sm" id="first-name" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="last-name">Last name</label>
<input className="block w-full rounded-lg border-slate-200 bg-white py-2.5 px-4 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:leading-6 border shadow-sm" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">Email address</label>
<input className="block w-full rounded-lg border-slate-200 bg-white py-2.5 px-4 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:leading-6 border shadow-sm" id="email" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="phone">Phone number</label>
<input className="block w-full rounded-lg border-slate-200 bg-white py-2.5 px-4 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:leading-6 border shadow-sm" id="phone" placeholder="0400 000 000" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="size">Interested Unit Size</label>
<div className="relative">
<select className="block w-full appearance-none rounded-lg border-slate-200 bg-white py-2.5 px-4 text-slate-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:leading-6 border shadow-sm" id="size">
<option>Small (4.5m x 2m)</option>
<option>Standard (3m x 3m)</option>
<option>Medium (4.5m x 3m)</option>
<option>Large (6m x 3m)</option>
<option>Not sure yet</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="message">Message</label>
<textarea className="block w-full rounded-lg border-slate-200 bg-white py-2.5 px-4 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:leading-6 border shadow-sm" id="message" placeholder="Tell us about what you need to store..." rows="4"></textarea>
</div>
<button className="block w-full rounded-lg bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition-all" type="submit">
                            Send Enquiry
                        </button>
<p className="text-xs text-slate-500 text-center mt-4">
                            By submitting this form, you agree to our privacy policy.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 mb-12">
<div>
<div className="flex items-center space-x-2 mb-6">
<iconify-icon className="text-slate-900" icon="solar:lock-password-linear" width="24"></iconify-icon>
<span className="text-xl font-medium tracking-tight text-slate-900">Baw Baw Self Storage</span>
</div>
<p className="text-lg text-slate-600 mb-8 max-w-md">
                        Your choice for Self Storage in Drouin and Gippsland. Managed professionally by Ray White Drouin.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<iconify-icon className="text-slate-400 mt-1" icon="solar:map-point-linear" width="24"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900">Facility Address</h4>
<p className="text-slate-600">20 Weerong Rd, Drouin VIC 3818</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-slate-400 mt-1" icon="solar:buildings-2-linear" width="24"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900">Managing Agents</h4>
<p className="text-slate-600">Ray White Drouin<br/>75 Princes Way, Drouin</p>
</div>
</div>
</div>
</div>

<div className="h-80 w-full bg-slate-200 rounded-xl overflow-hidden border border-slate-300 relative">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.9168434685145!2d145.83681407662053!3d-38.13600997202115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b29cf16b32b8f8d%3A0x8929e5a1b3c9598!2s20%20Weerong%20Rd%2C%20Drouin%20VIC%203818%2C%20Australia!5e0!3m2!1sen!2sus!4v1709664583214!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
<div className="border-t border-slate-200 pt-8 text-center text-slate-500 text-sm">
<p>© 2024 Baw Baw Self Storage. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
