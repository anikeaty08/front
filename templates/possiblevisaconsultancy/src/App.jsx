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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center">
<span className="text-sm font-semibold text-white tracking-tighter">PVC</span>
</div>
<span className="hidden sm:block text-lg font-medium text-slate-900 tracking-tight">Possible Visa Consultancy</span>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-900 hover:text-orange-500 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#visa-process">Visa Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#destinations">Destinations</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#ticketing">Ticketing</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#team">Team</a>
</nav>

<div className="flex items-center">
<a className="inline-flex items-center justify-center hover:bg-slate-800 transition-all text-sm font-medium text-white bg-slate-900 border-transparent border rounded-md pt-2 pr-4 pb-2 pl-4 shadow-sm" href="#contact">
                        Contact Us
                    </a>
</div>
</div>
</div>
</header>
<main className="">

<section className="relative pt-24 pb-32 lg:pt-36 lg:pb-48 overflow-hidden bg-slate-900" id="home">

<div className="absolute inset-0 z-0">
<img alt="Airport Terminal" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white mb-6 backdrop-blur-sm">
<iconify-icon className="text-orange-400" icon="solar:star-fall-linear"></iconify-icon>
                    Your Trusted Partner for Global Visa Processing
                </span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 max-w-3xl leading-tight">
                    Seamless travel starts with the right visa.
                </h1>
<p className="text-base sm:text-lg text-slate-300 mb-10 max-w-2xl font-normal">
                    Visa Processing • Air Ticketing • Future Tour Packages. We handle the complexities so you can focus on the journey ahead.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-orange-500 hover:bg-orange-600 shadow-sm transition-all gap-2" href="#visa-process">
                        Start Your Application
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-base font-medium rounded-lg text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all" href="#contact">
                        Talk to an Expert
                    </a>
</div>
</div>
</section>

<section className="lg:py-32 bg-white pt-20 pb-20 relative" id="visa-process">
<div className="sm:px-6 lg:px-8 max-w-4xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-3">Visa Requirements Checker</h2>
<p className="text-sm sm:text-base text-slate-500">Select your destination to see specific requirements and processing details.</p>
</div>

<div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

<div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs">1</span>
                            Selection
                        </div>
<div className="h-px flex-1 bg-slate-200 mx-4 hidden sm:block"></div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-400">
<span className="flex items-center justify-center w-6 h-6 rounded-full border border-slate-300 text-slate-400 text-xs">2</span>
                            Requirements
                        </div>
</div>
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

<div className="">
<label className="block text-sm font-medium text-slate-900 mb-2">Select Your Country</label>
<div className="relative">
<div className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 cursor-not-allowed opacity-90">
<div className="flex items-center gap-2">
<span className="text-lg leading-none">🇧🇩</span>
<span>Bangladesh</span>
</div>
<iconify-icon className="text-slate-400" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<p className="text-xs text-slate-500 mt-2">Currently servicing applicants from Bangladesh only.</p>
</div>
</div>

<div className="">
<label className="block text-sm font-medium text-slate-900 mb-2">Where do you want to go?</label>

<div className="w-full flex items-center justify-between px-4 py-3 bg-white border border-orange-500 ring-1 ring-orange-500 rounded-lg text-sm text-slate-900 cursor-pointer shadow-sm">
<div className="flex items-center gap-2">
<span className="text-lg leading-none">🇺🇸</span>
<span className="font-medium">United States (USA)</span>
</div>
<svg className="text-orange-500" data-icon-set="solar" data-solar="alt-arrow-down-linear" height="14" style={{color: 'rgb(249, 115, 22)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m19 9l-7 6l-7-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>

<div className="mt-3 flex flex-wrap gap-2">
<div className="px-3 py-1.5 border border-slate-200 rounded-md text-xs font-medium text-slate-600 hover:border-slate-300 cursor-pointer transition-colors bg-white">🇬🇧 UK</div>
<div className="px-3 py-1.5 border border-slate-200 rounded-md text-xs font-medium text-slate-600 hover:border-slate-300 cursor-pointer transition-colors bg-white">🇪🇺 Schengen</div>
<div className="px-3 py-1.5 border border-slate-200 rounded-md text-xs font-medium text-slate-600 hover:border-slate-300 cursor-pointer transition-colors bg-white">🇦🇺 Australia</div>
<div className="px-3 py-1.5 border border-slate-200 rounded-md text-xs font-medium text-slate-600 hover:border-slate-300 cursor-pointer transition-colors bg-white text-slate-400">Other</div>
</div>
</div>
</div>
<hr className="border-slate-100 mb-8"/>

<div className="bg-slate-50 rounded-xl p-1 border border-slate-100">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-200 rounded-lg overflow-hidden">

<div className="bg-white p-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-md bg-orange-50 text-orange-600 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900">Visa Checklist</h3>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-orange-500 text-base mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Original Passport (6 months validity)</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-orange-500 text-base mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">DS-160 Confirmation Page</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-orange-500 text-base mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">2 Recent Photographs (2x2 inches)</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-orange-500 text-base mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Bank statements (Last 6 months)</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-orange-500 text-base mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Proof of occupation / Trade License</span>
</li>
</ul>
</div>

<div className="bg-white p-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-md bg-slate-50 text-slate-600 flex items-center justify-center border border-slate-200">
<iconify-icon className="text-lg" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900">Embassy Information</h3>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<div className="">
<p className="text-xs font-medium text-slate-900 mb-0.5">Location</p>
<p className="text-sm text-slate-600">Madani Avenue, Baridhara, Dhaka 1212, Bangladesh</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:clock-circle-linear"></iconify-icon>
<div className="">
<p className="text-xs font-medium text-slate-900 mb-0.5">Office Hours</p>
<p className="text-sm text-slate-600">Sun - Thu: 8:00 AM – 4:30 PM</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:calendar-linear"></iconify-icon>
<div className="">
<p className="text-xs font-medium text-slate-900 mb-0.5">Interview System</p>
<p className="text-sm text-slate-600">Prior appointment required via CGI Federal portal.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-slate-50 border-t border-slate-200" id="destinations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-2">Featured Destinations</h2>
<p className="text-sm sm:text-base text-slate-500 max-w-xl">Transparent pricing and expert guidance for the world's most sought-after locations.</p>
</div>
<a className="text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1" href="#">
                        View all countries <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
<div className="relative h-48 overflow-hidden">
<img alt="New York" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
<span className="text-sm leading-none">🇺🇸</span>
<span className="text-xs font-medium text-slate-900">USA</span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-4">B1/B2 Tourist Visa</h3>
<div className="space-y-3 mb-5">
<div className="flex justify-between items-center pb-3 border-b border-slate-100">
<span className="text-sm text-slate-500">Agency Fee</span>
<span className="text-sm font-medium text-slate-900">10,000 BDT</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-slate-500 flex items-center gap-1">
                                        Embassy Fee 
                                        <iconify-icon className="text-slate-400" icon="solar:info-circle-linear" title="Subject to change by embassy"></iconify-icon>
</span>
<span className="text-sm font-medium text-slate-900">$185 USD</span>
</div>
</div>
<button className="w-full py-2 px-4 bg-slate-50 hover:bg-slate-100 text-slate-900 text-sm font-medium rounded-lg border border-slate-200 transition-colors">
                                View Details
                            </button>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
<div className="relative h-48 overflow-hidden">
<img alt="London" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
<span className="text-sm leading-none">🇬🇧</span>
<span className="text-xs font-medium text-slate-900">UK</span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-4">Standard Visitor Visa</h3>
<div className="space-y-3 mb-5">
<div className="flex justify-between items-center pb-3 border-b border-slate-100">
<span className="text-sm text-slate-500">Agency Fee</span>
<span className="text-sm font-medium text-slate-900">10,000 BDT</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-slate-500">Embassy Fee</span>
<span className="text-sm font-medium text-slate-900">£115 GBP</span>
</div>
</div>
<button className="w-full py-2 px-4 bg-slate-50 hover:bg-slate-100 text-slate-900 text-sm font-medium rounded-lg border border-slate-200 transition-colors">
                                View Details
                            </button>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
<div className="relative h-48 overflow-hidden">
<img alt="Paris" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&amp;w=2020&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
<span className="text-sm leading-none">🇪🇺</span>
<span className="text-xs font-medium text-slate-900">Schengen</span>
</div>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-4">Short Stay Visa (Type C)</h3>
<div className="space-y-3 mb-5">
<div className="flex justify-between items-center pb-3 border-b border-slate-100">
<span className="text-sm text-slate-500">Agency Fee</span>
<span className="text-sm font-medium text-slate-900">10,000 BDT</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-slate-500">Embassy Fee</span>
<span className="text-sm font-medium text-slate-900">€80 EUR</span>
</div>
</div>
<button className="w-full py-2 px-4 bg-slate-50 hover:bg-slate-100 text-slate-900 text-sm font-medium rounded-lg border border-slate-200 transition-colors">
                                View Details
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden" id="ticketing">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-slate-800 blur-3xl opacity-50"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 text-white mb-6 border border-slate-700">
<iconify-icon className="text-2xl" icon="solar:plane-linear"></iconify-icon>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
                            Global Air Ticketing Services
                        </h2>
<p className="text-lg text-slate-400 mb-8 font-normal max-w-md">
                            Get the cheapest airfares from our expert team. We compare hundreds of airlines to ensure you get the best route at the best price.
                        </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-orange-500 text-lg" icon="solar:shield-check-linear"></iconify-icon>
                                Best fare guarantee
                            </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-orange-500 text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                                24/7 re-booking support
                            </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-orange-500 text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon>
                                Group booking discounts
                            </div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 flex flex-col items-center text-center hover:bg-slate-800 transition-colors">
<div className="w-16 h-16 rounded-full bg-slate-700 mb-4 overflow-hidden border-2 border-slate-600">
<img alt="Executive" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-base font-medium text-white mb-1">Rafiqul Islam</h4>
<p className="text-xs text-slate-400 mb-4">Senior Ticketing Exec.</p>
<a className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-colors flex justify-center items-center gap-2" href="tel:+8801700000001">
<iconify-icon icon="solar:phone-linear"></iconify-icon> Call Now
                            </a>
</div>
<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 flex flex-col items-center text-center hover:bg-slate-800 transition-colors">
<div className="w-16 h-16 rounded-full bg-slate-700 mb-4 overflow-hidden border-2 border-slate-600">
<img alt="Executive" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-base font-medium text-white mb-1">Farhana Rahman</h4>
<p className="text-xs text-slate-400 mb-4">Corporate Travel Mgr.</p>
<a className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-colors flex justify-center items-center gap-2" href="tel:+8801700000002">
<iconify-icon icon="solar:phone-linear"></iconify-icon> Call Now
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 bg-white pt-20 pb-20" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-3">Meet Our Experts</h2>
<p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">Dedicated professionals ensuring your travel documents are processed accurately and efficiently.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="text-center group">
<div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-5 bg-slate-100 border border-slate-200">
<img alt="CEO" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Ahmed Kabir</h3>
<p className="text-sm text-slate-500">Managing Director</p>
</div>

<div className="text-center group">
<div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-5 bg-slate-100 border border-slate-200">
<img alt="Consultant" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Sabrina Akter</h3>
<p className="text-sm text-slate-500">Lead Visa Consultant (USA/UK)</p>
</div>

<div className="text-center group">
<div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-5 bg-slate-100 border border-slate-200">
<img alt="Consultant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/><div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-400 z-10 pointer-events-none"></div><img alt="Kazi Md Emdad Ullah" className="group-hover:scale-105 transition-transform duration-500 z-20 mix-blend-multiply w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://www.aura.build/editor/2132652%20Kazi%20Md%20Emdad%20Ullah.jpg"/>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Tariq Hasan</h3>
<p className="text-sm text-slate-500">Schengen Visa Specialist</p>
</div>

<div className="text-center group">
<div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-5 bg-slate-100 border border-slate-200">
<img alt="Support" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Nusrat Jahan</h3>
<p className="text-sm text-slate-500">Client Operations</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-3">Success Stories &amp; Gallery</h2>
<p className="text-sm sm:text-base text-slate-500">A glimpse into our daily operations and happy clients.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="aspect-square rounded-xl overflow-hidden bg-slate-200 group cursor-pointer">
<img alt="Passport with Visa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="aspect-square rounded-xl overflow-hidden bg-slate-200 group cursor-pointer md:col-span-2">
<img alt="Team at office" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="aspect-square rounded-xl overflow-hidden bg-slate-200 group cursor-pointer">
<img alt="Airport" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="aspect-square rounded-xl overflow-hidden bg-slate-200 group cursor-pointer md:col-span-2">
<img alt="Happy Clients" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="aspect-square rounded-xl overflow-hidden bg-slate-200 group cursor-pointer">
<img alt="Consultation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="aspect-square rounded-xl overflow-hidden bg-slate-200 group cursor-pointer">
<img alt="Travel Docs" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#0f172a] text-slate-400 py-16 lg:py-24 border-t border-slate-800" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

<div className="lg:col-span-4">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
<span className="text-white font-semibold text-sm tracking-tighter">PVC</span>
</div>
<span className="font-medium text-lg tracking-tight text-white">Possible Visa</span>
</div>
<p className="text-sm text-slate-400 mb-6 max-w-sm">
                        Your Trusted Partner for Global Visa Processing. We provide expert guidance for visas, air ticketing, and tour packages.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-orange-500 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-orange-500 transition-colors" href="#">
<iconify-icon icon="solar:twitter-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-orange-500 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-2">
<h4 className="text-white font-medium mb-5">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#team">Our Team</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>

<div className="lg:col-span-3">
<h4 className="text-white font-medium mb-5">Contact Us</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-slate-500 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>Suite 5B, Navana Tower, 45 Gulshan Avenue, Dhaka 1212, Bangladesh</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-slate-500 shrink-0" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+8801700000000">+880 1700-000000</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-slate-500 shrink-0" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:info@possiblevisa.com">info@possiblevisa.com</a>
</li>
</ul>
</div>

<div className="lg:col-span-3">
<div className="w-full h-40 bg-slate-800 rounded-lg overflow-hidden border border-slate-700 relative">

<div className="absolute inset-0 flex items-center justify-center flex-col text-slate-500 text-xs">
<iconify-icon className="text-2xl mb-2" icon="solar:map-linear"></iconify-icon>
                            Interactive Map
                        </div>
<iframe allowfullscreen="" className="relative z-10 hover:opacity-100 transition-opacity mix-blend-screen" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.425244585149!2d90.40348705000001!3d23.7792248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7715a40c603%3A0xec01cd75f33139f5!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" style={{border: '0', filter: 'grayscale(1) invert(0.9) opacity(0.6)'}} width="100%"></iframe>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2023 Possible Visa Consultancy. All rights reserved.</p>
<div className="flex items-center gap-1">
                    Designed with <iconify-icon className="text-orange-500" icon="solar:heart-linear"></iconify-icon> for travelers
                </div>
</div>
</div>
</footer>

    </>
  );
}
