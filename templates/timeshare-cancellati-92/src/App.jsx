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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="block" href="#">
<img alt="Timeshare Cancellation Now" className="h-10 w-auto object-contain" src="https://timesharecancellationnow.com/_assets/media/797d69bb7dcdcd0e280033bfe3279376.jpg"/>
</a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#how-it-works">How It Works</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-600">
<iconify-icon className="text-blue-600" icon="solar:phone-linear"></iconify-icon>
<span className="">1-888-710-9510</span>
</div>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors" href="#consultation">
                        Free Consultation
                    </a>
</div>
</div>
</div>
</header>
<main className="flex-grow pt-16">

<section className="relative bg-slate-900 overflow-hidden">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-30" loop="" muted="" playsinline="">
<source src="https://timesharecancellationnow.com/_assets/video/8897f6191def9b1ba47bff44cb98c4f2.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium mb-6">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                            Trusted Cancellation Experts
                        </div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                            Cancel Your Timeshare the Right Way
                        </h1>
<p className="text-lg text-slate-300 mb-8 font-normal leading-relaxed">
                            Helping timeshare owners legally exit unwanted contracts and eliminate expensive maintenance fees for good.
                        </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3 text-slate-200">
<iconify-icon className="text-blue-400 text-xl mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Free, no-obligation consultation</span>
</li>
<li className="flex items-start gap-3 text-slate-200">
<iconify-icon className="text-blue-400 text-xl mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Stop paying rising maintenance fees</span>
</li>
<li className="flex items-start gap-3 text-slate-200">
<iconify-icon className="text-blue-400 text-xl mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Professional, legal support team</span>
</li>
</ul>
<a className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 transition-all w-full sm:w-auto" href="#consultation">
                            Get Your Free Consultation
                        </a>
</div>

<div className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
<div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
<div className="px-6 py-8 sm:p-10">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">See If You Qualify</h3>
<p className="text-sm text-slate-500 mb-6">Fill out the form below to check your eligibility for contract cancellation.</p>
<form action="#" className="space-y-4" method="POST">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="sr-only" htmlFor="first-name">First Name</label>
<input className="block w-full rounded-lg border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm transition-all" id="first-name" name="first-name" placeholder="First Name" required="" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="last-name">Last Name</label>
<input className="block w-full rounded-lg border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm transition-all" id="last-name" name="last-name" placeholder="Last Name" required="" type="text"/>
</div>
</div>
<div>
<label className="sr-only" htmlFor="email">Email</label>
<input className="block w-full rounded-lg border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm transition-all" id="email" name="email" placeholder="Email Address" required="" type="email"/>
</div>
<div>
<label className="sr-only" htmlFor="phone">Phone</label>
<input className="block w-full rounded-lg border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm transition-all" id="phone" name="phone" placeholder="Phone Number" required="" type="tel"/>
</div>
<div>
<label className="sr-only" htmlFor="resort">Resort Name</label>
<input className="block w-full rounded-lg border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm transition-all" id="resort" name="resort" placeholder="Resort Name or Developer" required="" type="text"/>
</div>
<button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-colors mt-2" type="submit">
                                        Check My Eligibility
                                    </button>
</form>
<div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
<span>Your information is secure and confidential.</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 border-b border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-10">
<p className="text-sm font-medium text-slate-600 leading-relaxed">
                        We have helped thousands of owners legally navigate the complex process of timeshare cancellation. Our team provides professional, secure, and permanent solutions.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
<div className="flex flex-col items-center pt-6 md:pt-0">
<div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center border border-slate-100 mb-4 text-blue-600">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900">High Client Satisfaction</h4>
<p className="mt-1 text-xs text-slate-500">Proven track record of success</p>
</div>
<div className="flex flex-col items-center pt-6 md:pt-0">
<div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center border border-slate-100 mb-4 text-blue-600">
<iconify-icon className="text-2xl" icon="solar:diploma-verified-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900">Professional Consultation</h4>
<p className="mt-1 text-xs text-slate-500">Expert legal and exit strategies</p>
</div>
<div className="flex flex-col items-center pt-6 md:pt-0">
<div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center border border-slate-100 mb-4 text-blue-600">
<iconify-icon className="text-2xl" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900">Secure &amp; Confidential</h4>
<p className="mt-1 text-xs text-slate-500">Your privacy is our priority</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        Is Your Timeshare Becoming a Financial Burden?
                    </h2>
<p className="text-base text-slate-600">
                        Many owners find themselves trapped in agreements that no longer serve them. You are not alone if you are experiencing these common issues.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 transition-shadow hover:shadow-md">
<div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6">
<iconify-icon className="text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Increasing Fees</h3>
<p className="text-sm text-slate-600">Maintenance fees and special assessments that continuously rise year after year without justification.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 transition-shadow hover:shadow-md">
<div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-6">
<iconify-icon className="text-xl" icon="solar:calendar-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Limited Availability</h3>
<p className="text-sm text-slate-600">Never being able to book the dates or locations you actually want, making the timeshare useless.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 transition-shadow hover:shadow-md">
<div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center text-slate-600 mb-6">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Long-term Contracts</h3>
<p className="text-sm text-slate-600">Feeling trapped in lifelong agreements that are nearly impossible to break without professional help.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 transition-shadow hover:shadow-md">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
<iconify-icon className="text-xl" icon="solar:sale-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Difficulty Reselling</h3>
<p className="text-sm text-slate-600">Discovering there is zero resale value and secondary markets are flooded or nonexistent.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors" href="#consultation">
                        See If You Qualify For Exit
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="how-it-works">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        How Our Process Works
                    </h2>
<p className="text-base text-slate-600">
                        We have streamlined the cancellation process into four clear steps to provide you with peace of mind.
                    </p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white rounded-full shadow-md border border-slate-100 flex items-center justify-center text-blue-600 mb-6 relative">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
<div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 text-white rounded-full text-xs font-medium flex items-center justify-center ring-2 ring-white">1</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Free Consultation</h3>
<p className="text-sm text-slate-600">Speak with an advisor to discuss your situation and determine eligibility.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white rounded-full shadow-md border border-slate-100 flex items-center justify-center text-blue-600 mb-6 relative">
<iconify-icon className="text-2xl" icon="solar:document-linear"></iconify-icon>
<div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 text-white rounded-full text-xs font-medium flex items-center justify-center ring-2 ring-white">2</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Contract Review</h3>
<p className="text-sm text-slate-600">Our experts analyze your agreement to find the best legal exit strategy.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white rounded-full shadow-md border border-slate-100 flex items-center justify-center text-blue-600 mb-6 relative">
<iconify-icon className="text-2xl" icon="solar:scissors-linear"></iconify-icon>
<div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 text-white rounded-full text-xs font-medium flex items-center justify-center ring-2 ring-white">3</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Cancellation Process</h3>
<p className="text-sm text-slate-600">We handle all communications and legal negotiations with the developer.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white rounded-full shadow-md border border-slate-100 flex items-center justify-center text-blue-600 mb-6 relative">
<iconify-icon className="text-2xl" icon="solar:check-circle-linear"></iconify-icon>
<div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 text-white rounded-full text-xs font-medium flex items-center justify-center ring-2 ring-white">4</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Resolution</h3>
<p className="text-sm text-slate-600">Receive final confirmation that you are permanently free from your contract.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        Trusted by Timeshare Owners
                    </h2>
<p className="text-base text-slate-600">
                        Don't just take our word for it. Hear from clients who have successfully reclaimed their financial freedom.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</div>
<blockquote className="text-sm text-slate-700 leading-relaxed flex-grow mb-6">
                            "After years of paying maintenance fees that kept doubling, this service helped me finally exit my timeshare contract. The process was clearly explained and handled professionally."
                        </blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium text-sm">MR</div>
<div>
<p className="text-sm font-semibold text-slate-900">Michael R.</p>
<p className="text-xs text-slate-500">Former Owner</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</div>
<blockquote className="text-sm text-slate-700 leading-relaxed flex-grow mb-6">
                            "I thought I was stuck with my timeshare forever. The team here was incredibly responsive and guided me through every step. I am officially free and couldn't be happier."
                        </blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium text-sm">SL</div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah L.</p>
<p className="text-xs text-slate-500">Former Owner</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</div>
<blockquote className="text-sm text-slate-700 leading-relaxed flex-grow mb-6">
                            "Highly recommend. They are honest about the process and timeline. It wasn't overnight, but they delivered on their promise. A huge weight has been lifted off our shoulders."
                        </blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium text-sm">DT</div>
<div>
<p className="text-sm font-semibold text-slate-900">David &amp; Maria T.</p>
<p className="text-xs text-slate-500">Former Owners</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-blue-900 py-24 overflow-hidden">

<div className="absolute inset-0 z-0 mix-blend-overlay opacity-20">
<img alt="Resort" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                    Stop Paying for a Timeshare You No Longer Want
                </h2>
<p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
                    Speak with a specialist today and explore your cancellation options. The sooner you start, the sooner you can stop paying maintenance fees.
                </p>
<a className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-blue-900 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-900 focus:ring-white transition-colors" href="#consultation">
                    Schedule My Free Consultation
                </a>
</div>
</section>

<section className="bg-slate-50 pt-24 pb-24" id="consultation">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        Start Your Free Consultation Today
                    </h2>
<p className="text-base text-slate-600">
                        Provide your details below and one of our cancellation experts will reach out to you within 24 hours.
                    </p>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-10">
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="form-first-name">First Name</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm transition-all" id="form-first-name" name="first-name" required="" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="form-last-name">Last Name</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm transition-all" id="form-last-name" name="last-name" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="form-email">Email Address</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm transition-all" id="form-email" name="email" required="" type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="form-phone">Phone Number</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm transition-all" id="form-phone" name="phone" required="" type="tel"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="form-resort">Resort Name or Developer</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm transition-all" id="form-resort" name="resort" required="" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="message">Additional Information (Optional)</label>
<textarea className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm transition-all" id="message" name="message" rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors" type="submit">
                                Submit My Request
                            </button>
</div>
<p className="text-center text-xs text-slate-500 mt-4">
                            By submitting this form, you agree to our Terms of Service and Privacy Policy.
                        </p>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-slate-900 border-t border-slate-800" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="col-span-1 md:col-span-2">
<div className="mb-4">
<img alt="Timeshare Cancellation Now Logo" className="h-10 w-auto object-contain rounded-sm" src="https://timesharecancellationnow.com/_assets/media/797d69bb7dcdcd0e280033bfe3279376.jpg"/>
</div>
<p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
                        Dedicated to helping timeshare owners legally exit unwanted contracts and achieve financial freedom from rising maintenance fees.
                    </p>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="sr-only">Facebook</span>
<iconify-icon className="text-xl" icon="solar:round-facebook-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="sr-only">Twitter</span>
<iconify-icon className="text-xl" icon="solar:twitter-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="sr-only">LinkedIn</span>
<iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon>
</a>
</div>
</div>

<div className="">
<h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact Us</h3>
<ul className="space-y-3">
<li className="flex gap-2 text-sm text-slate-400 gap-x-2 gap-y-2 items-center">1-888-710-9510</li>
<li className="flex gap-2 text-sm text-slate-400 gap-x-2 gap-y-2 items-center">info@timesharecancellationnow.com</li>
<li className="flex gap-2 text-sm text-slate-400 gap-x-2 gap-y-2 items-start">
<iconify-icon className="text-slate-500 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span className="">4000 Hollywood Blvd Suite 555-2

Hollywood fl

33021</span>
</li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Legal</h3>
<ul className="space-y-3">
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Disclaimer</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">
                    © 2024 Timeshare Cancellation Now. All rights reserved.
                </p>
<p className="text-xs text-slate-500 max-w-2xl text-center md:text-right">
                    This website is for informational purposes only and does not constitute legal advice. Individual results may vary based on specific contract terms and developer policies.
                </p>
</div>
</div>
</footer>

    </>
  );
}
