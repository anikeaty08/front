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



        // Initialize Lucide Icons
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
      

<header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2">

<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-yellow-400">
<i className="h-6 w-6" data-lucide="car" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-neutral-900">Carolina Junk Cars</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-lg font-medium text-neutral-600">
<a className="hover:text-neutral-900 transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-neutral-900 transition-colors" href="#faqs">FAQs</a>
<a className="hover:text-neutral-900 transition-colors" href="#about">About</a>
<a className="hover:text-neutral-900 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-neutral-900 transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex h-11 items-center justify-center rounded-lg bg-yellow-400 px-6 text-lg font-medium text-neutral-900 transition-colors hover:bg-yellow-500" href="#offer-form">
                    Get My Offer
                </a>
<button className="md:hidden p-2 text-neutral-600">
<i className="h-6 w-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>
<main>

<section className="relative overflow-hidden bg-neutral-50 pt-16 pb-24 lg:pt-24 lg:pb-32">

<div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200/50 blur-3xl w-[800px] h-[800px] pointer-events-none"></div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">

<div className="max-w-2xl">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
                            Cash for Your Junk Cars South Carolina Made Simple
                        </h1>
<p className="mt-6 text-xl text-neutral-600 leading-relaxed">
                            At Carolina Junk Car Buyers, we make it easy to get an offer for your car and schedule free pickup across the Lowcountry and South Carolina. No hidden fees and no pressure to accept.
                        </p>

<div className="mt-10 flex flex-wrap gap-y-4 gap-x-8 text-lg font-medium text-neutral-700">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-yellow-500" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                                Local &amp; Trusted
                            </div>
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-yellow-500" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                                Same-day Pickup Available
                            </div>
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-yellow-500" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                                Hundreds of Cars Bought
                            </div>
</div>
</div>

<div className="relative lg:ml-auto w-full max-w-md">
<div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl sm:p-8">
<div className="mb-6 flex items-center justify-between border-b border-neutral-100 pb-4">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Get Your Offer</h2>
<span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">Fast &amp; Free</span>
</div>
<form className="space-y-4" id="offer-form">
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3.5 text-lg text-neutral-900 transition-colors focus:border-neutral-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 cursor-pointer">
<option disabled="" selected="" value="">Year</option>
<option>2024</option>
<option>2023</option>
<option>2022</option>
<option>2010 &amp; Older</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
<i className="h-5 w-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3.5 text-lg text-neutral-900 transition-colors focus:border-neutral-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 cursor-pointer">
<option disabled="" selected="" value="">Make</option>
<option>Toyota</option>
<option>Honda</option>
<option>Ford</option>
<option>Chevrolet</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
<i className="h-5 w-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3.5 text-lg text-neutral-900 transition-colors focus:border-neutral-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 cursor-pointer">
<option disabled="" selected="" value="">Model</option>
<option>Camry</option>
<option>Civic</option>
<option>F-150</option>
<option>Silverado</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
<i className="h-5 w-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3.5 text-lg text-neutral-900 transition-colors focus:border-neutral-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 cursor-pointer">
<option disabled="" selected="" value="">Trim / Submodel (Optional)</option>
<option>LE</option>
<option>SE</option>
<option>XLE</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
<i className="h-5 w-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div>
<input className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3.5 text-lg text-neutral-900 placeholder:text-neutral-500 transition-colors focus:border-neutral-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900" placeholder="ZIP Code" type="text"/>
</div>
<button className="mt-2 w-full rounded-xl bg-yellow-400 py-4 text-xl font-medium text-neutral-900 transition-all hover:bg-yellow-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2" type="button">
                                    Get Your Offer
                                </button>
</form>
<p className="mt-4 text-center text-sm text-neutral-500 flex items-center justify-center gap-1.5">
<i className="h-4 w-4" data-lucide="lock" strokeWidth="1.5"></i> Safe &amp; Secure
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="how-it-works">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Our Simple 3-Step Process</h2>
<div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">

<div className="flex flex-col items-center">
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600 mb-6">
<i className="h-8 w-8" data-lucide="mouse-pointer-click" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3">Step 1: Get Your Offer</h3>
<p className="text-lg text-neutral-600">Share a few details about your car and we will provide a competitive offer.</p>
</div>

<div className="flex flex-col items-center">
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600 mb-6">
<i className="h-8 w-8" data-lucide="truck" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3">Step 2: We Handle Pickup</h3>
<p className="text-lg text-neutral-600">If you move forward, we will schedule a pickup at your location at a time that works for you.</p>
</div>

<div className="flex flex-col items-center">
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600 mb-6">
<i className="h-8 w-8" data-lucide="banknote" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3">Step 3: Get Paid</h3>
<p className="text-lg text-neutral-600">Once everything is confirmed, you will receive payment when your vehicle is picked up.</p>
</div>
</div>
<div className="mt-16 flex flex-col items-center">
<p className="text-lg text-neutral-600 mb-6">Want the full breakdown? Learn more about how it works.</p>
<a className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-neutral-200 bg-white px-8 text-lg font-medium text-neutral-900 transition-colors hover:border-neutral-900 hover:bg-neutral-50" href="#how-it-works-page">
                        Learn More About the Process
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Why Sell Your Car</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
<div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
<div className="h-12 w-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-6">
<i className="h-6 w-6" data-lucide="wallet" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3">Turn Your Car Into Cash</h3>
<p className="text-lg text-neutral-600">Get paid for a vehicle you no longer use instead of letting it sit and lose value.</p>
</div>
<div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
<div className="h-12 w-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-6">
<i className="h-6 w-6" data-lucide="wrench" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3">Skip Repairs and Extra Costs</h3>
<p className="text-lg text-neutral-600">Avoid spending money on repairs, maintenance, or storage for a car you don’t need.</p>
</div>
<div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
<div className="h-12 w-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-6">
<i className="h-6 w-6" data-lucide="expand" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3">Free Up Space</h3>
<p className="text-lg text-neutral-600">Clear out your driveway, garage, or property by getting rid of an unwanted vehicle.</p>
</div>
<div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
<div className="h-12 w-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-6">
<i className="h-6 w-6" data-lucide="smile" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3">No Hassle, No Pressure</h3>
<p className="text-lg text-neutral-600">Sell your car on your terms with a simple process and no obligation to accept an offer.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">Why Choose Carolina Junk Car Buyers</h2>
<p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                            We keep the process simple and flexible so you can sell your car without the usual hassle. You get a simple, reliable way to sell your car without the stress or uncertainty.
                        </p>
<a className="inline-flex h-12 items-center justify-center rounded-lg bg-yellow-400 px-8 text-lg font-medium text-neutral-900 transition-colors hover:bg-yellow-500" href="#offer-form">
                            Start Your Offer
                        </a>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 mt-1 h-6 w-6 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400">
<i className="h-4 w-4" data-lucide="check" strokeWidth="2"></i>
</div>
<p className="text-lg text-neutral-300">We buy cars locally and connect you with buyers across multiple areas</p>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 mt-1 h-6 w-6 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400">
<i className="h-4 w-4" data-lucide="check" strokeWidth="2"></i>
</div>
<p className="text-lg text-neutral-300">We work with vehicles in all conditions, even if they don’t run</p>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 mt-1 h-6 w-6 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400">
<i className="h-4 w-4" data-lucide="check" strokeWidth="2"></i>
</div>
<p className="text-lg text-neutral-300">No hidden fees or surprise charges</p>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 mt-1 h-6 w-6 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400">
<i className="h-4 w-4" data-lucide="check" strokeWidth="2"></i>
</div>
<p className="text-lg text-neutral-300">Straightforward process from start to finish</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faqs">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">FAQs</h2>
</div>
<div className="space-y-4">

<details className="group rounded-2xl border border-neutral-200 bg-neutral-50 open:bg-white open:ring-1 open:ring-neutral-200 open:shadow-sm transition-all duration-200">
<summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-xl font-medium tracking-tight text-neutral-900">
                            How much can I get for my junk car?
                            <span className="ml-6 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-neutral-200/50 text-neutral-500 group-open:bg-neutral-900 group-open:text-white transition-colors">
<i className="h-4 w-4 group-open:hidden" data-lucide="plus" strokeWidth="2"></i>
<i className="h-4 w-4 hidden group-open:block" data-lucide="minus" strokeWidth="2"></i>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-neutral-600">
                            Your offer depends on your car’s condition, make, model, and location, but we aim to provide a fair and competitive price.
                        </div>
</details>

<details className="group rounded-2xl border border-neutral-200 bg-neutral-50 open:bg-white open:ring-1 open:ring-neutral-200 open:shadow-sm transition-all duration-200">
<summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-xl font-medium tracking-tight text-neutral-900">
                            How does the process work?
                            <span className="ml-6 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-neutral-200/50 text-neutral-500 group-open:bg-neutral-900 group-open:text-white transition-colors">
<i className="h-4 w-4 group-open:hidden" data-lucide="plus" strokeWidth="2"></i>
<i className="h-4 w-4 hidden group-open:block" data-lucide="minus" strokeWidth="2"></i>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-neutral-600">
                            Simply enter your car details, receive an offer, and schedule a pickup if you decide to move forward.
                        </div>
</details>

<details className="group rounded-2xl border border-neutral-200 bg-neutral-50 open:bg-white open:ring-1 open:ring-neutral-200 open:shadow-sm transition-all duration-200">
<summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-xl font-medium tracking-tight text-neutral-900">
                            How fast can I get paid?
                            <span className="ml-6 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-neutral-200/50 text-neutral-500 group-open:bg-neutral-900 group-open:text-white transition-colors">
<i className="h-4 w-4 group-open:hidden" data-lucide="plus" strokeWidth="2"></i>
<i className="h-4 w-4 hidden group-open:block" data-lucide="minus" strokeWidth="2"></i>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-neutral-600">
                            In most cases, you’ll receive payment when your vehicle is picked up.
                        </div>
</details>

<details className="group rounded-2xl border border-neutral-200 bg-neutral-50 open:bg-white open:ring-1 open:ring-neutral-200 open:shadow-sm transition-all duration-200">
<summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-xl font-medium tracking-tight text-neutral-900">
                            Do you buy cars that don’t run or are damaged?
                            <span className="ml-6 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-neutral-200/50 text-neutral-500 group-open:bg-neutral-900 group-open:text-white transition-colors">
<i className="h-4 w-4 group-open:hidden" data-lucide="plus" strokeWidth="2"></i>
<i className="h-4 w-4 hidden group-open:block" data-lucide="minus" strokeWidth="2"></i>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-neutral-600">
                            Yes, we buy vehicles in all conditions, including non-running and heavily damaged cars.
                        </div>
</details>

<details className="group rounded-2xl border border-neutral-200 bg-neutral-50 open:bg-white open:ring-1 open:ring-neutral-200 open:shadow-sm transition-all duration-200">
<summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-xl font-medium tracking-tight text-neutral-900">
                            Do I need to bring my car anywhere?
                            <span className="ml-6 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-neutral-200/50 text-neutral-500 group-open:bg-neutral-900 group-open:text-white transition-colors">
<i className="h-4 w-4 group-open:hidden" data-lucide="plus" strokeWidth="2"></i>
<i className="h-4 w-4 hidden group-open:block" data-lucide="minus" strokeWidth="2"></i>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-neutral-600">
                            No, we handle the pickup for you, so you don’t need to go anywhere.
                        </div>
</details>
</div>
<div className="mt-12 text-center flex flex-col items-center">
<p className="text-lg text-neutral-600 mb-6">Have More Questions? Visit Our FAQs</p>
<a className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-neutral-200 bg-white px-8 text-lg font-medium text-neutral-900 transition-colors hover:border-neutral-900 hover:bg-neutral-50" href="#faqs-page">
                        Visit FAQs
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-yellow-400">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">Ready to Sell Your Car?</h2>
<p className="text-xl text-neutral-900/80 mb-10 max-w-2xl mx-auto">
                    Tell us about your car and we’ll reach out with your offer shortly. Schedule pickup when it works for you. No pressure to accept.
                </p>
<a className="inline-flex h-14 items-center justify-center rounded-xl bg-neutral-900 px-10 text-xl font-medium text-white transition-all hover:bg-neutral-800 hover:scale-105 hover:shadow-xl" href="#offer-form">
                    Get Your Offer
                </a>
</div>
</section>
</main>

<footer className="bg-white border-t border-neutral-200 pt-16 pb-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-neutral-100 pb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-yellow-400">
<i className="h-6 w-6" data-lucide="car" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-neutral-900">Carolina Junk Cars</span>
</div>
<p className="text-lg text-neutral-500 max-w-sm">
                        Making it simple to sell your junk car in South Carolina. Fast offers, free pickup, and easy payments.
                    </p>
</div>
<div>
<h3 className="text-lg font-semibold text-neutral-900 mb-4 tracking-tight">Support</h3>
<ul className="space-y-3">
<li><a className="text-lg text-neutral-600 hover:text-neutral-900 transition-colors" href="#offer-form">Get My Offer</a></li>
<li><a className="text-lg text-neutral-600 hover:text-neutral-900 transition-colors" href="#faqs">FAQs</a></li>
<li><a className="text-lg text-neutral-600 hover:text-neutral-900 transition-colors" href="#how-it-works">How It Works</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold text-neutral-900 mb-4 tracking-tight">More</h3>
<ul className="space-y-3">
<li><a className="text-lg text-neutral-600 hover:text-neutral-900 transition-colors" href="#contact">Contact</a></li>
<li><a className="text-lg text-neutral-600 hover:text-neutral-900 transition-colors" href="#about">About</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
<p>© 2024 Carolina Junk Car Buyers. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
