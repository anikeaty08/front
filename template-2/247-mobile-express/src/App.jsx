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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<a className="font-semibold tracking-tighter text-xl text-gray-900" href="#">247EXPRESS</a>
</div>
<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#reviews">Reviews</a>
</nav>
<div className="flex items-center">
<a className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-sm" href="#book">
                        Book a Wash
                    </a>
</div>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-900">

<div className="absolute inset-0 z-0">
<img alt="Car Detailing" className="w-full h-full object-cover object-center opacity-40" src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=2000" />
<div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-6 lg:pr-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
<span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
<span className="text-xs font-medium text-gray-200">Serving Dallas–Fort Worth</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
                        Mobile Car Detailing in Dallas–Fort Worth
                    </h1>
<p className="text-lg text-gray-300 mb-8 max-w-lg">
                        Professional car detailing brought to your home or office. Fast. Clean. Shine. Experience premium care without the commute.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-medium text-white shadow-sm hover:bg-blue-500 transition-all" href="#book">
                            Book a Wash
                        </a>
<a className="inline-flex justify-center items-center rounded-xl bg-white/10 px-6 py-3.5 text-sm font-medium text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all" href="#contact">
                            Request a Call Back
                        </a>
</div>
</div>

<div className="lg:col-span-5 lg:col-start-8" id="book">
<div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-1">Book Your Detail</h3>
<p className="text-sm text-gray-500 mb-6">Fill out the details below to secure your spot.</p>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="service">Select Wash / Service</label>
<select className="block w-full rounded-xl border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors border" id="service">
<option disabled selected value="">Choose a package...</option>
<option>Exterior Wash</option>
<option>Interior Cleaning</option>
<option>Full Detail</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="email">Email Address</label>
<input className="block w-full rounded-xl border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors border" id="email" placeholder="you@example.com" type="email" />
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="phone">Phone Number</label>
<input className="block w-full rounded-xl border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors border" id="phone" placeholder="(555) 000-0000" type="tel" />
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="time">Preferred Time Slot</label>
<select className="block w-full rounded-xl border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors border" id="time">
<option disabled selected value="">Select time...</option>
<option>Morning (8AM - 12PM)</option>
<option>Afternoon (12PM - 4PM)</option>
<option>Evening (4PM - 7PM)</option>
</select>
</div>
<button className="mt-2 w-full rounded-xl bg-gray-900 px-4 py-3.5 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-colors" type="button">
                                Submit Request
                            </button>
<p className="text-xs text-center text-gray-500 mt-4 flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon> Secure booking. No upfront payment.
                            </p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Feel the Experience</h2>
<p className="text-base text-gray-500">
                    Skip the waiting room. We bring the highest quality detailing equipment directly to your driveway or office lot, saving you time without compromising on the shine.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:waterdrops-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">Rinse Technology</h3>
<p className="text-sm text-gray-500 leading-relaxed">Advanced low-water, safe cleaning formulas that lift dirt away without scratching your paint.</p>
</div>

<div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:record-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">Glistening Wheels</h3>
<p className="text-sm text-gray-500 leading-relaxed">Deep wheel and tire cleaning to remove brake dust and road grime, finished with a premium shine.</p>
</div>

<div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">Professional Tools</h3>
<p className="text-sm text-gray-500 leading-relaxed">Equipped with industry-leading vacuums, extractors, and polishers for a true showroom finish.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-200/50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">Premium Washing Services</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col h-full group">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:car-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 tracking-tight">Exterior Wash</h3>
</div>
<p className="text-sm text-gray-500 mb-6 flex-grow">Hand wash, microfiber dry, streak-free windows, and protective spray wax application.</p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700" href="#book">
                        Book Service <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col h-full group">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:armchair-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 tracking-tight">Interior Cleaning</h3>
</div>
<p className="text-sm text-gray-500 mb-6 flex-grow">Deep vacuum, surface wipe down, UV protection on plastics, and fresh scent application.</p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700" href="#book">
                        Book Service <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col h-full group relative overflow-hidden">
<div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-medium px-2 py-1 rounded-bl-lg uppercase tracking-wider">Popular</div>
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 tracking-tight">Full Detail</h3>
</div>
<p className="text-sm text-gray-500 mb-6 flex-grow">The ultimate reset. Includes comprehensive exterior wash and meticulous interior deep clean.</p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700" href="#book">
                        Book Service <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col h-full group">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 tracking-tight">Tire Shine</h3>
</div>
<p className="text-sm text-gray-500 mb-6 flex-grow">High-gloss, no-sling tire dressing that protects rubber and keeps wheels looking brand new.</p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700" href="#book">
                        Book Service <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col h-full group">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:full-screen-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 tracking-tight">Glass Treatment</h3>
</div>
<p className="text-sm text-gray-500 mb-6 flex-grow">Hydrophobic coating applied to all exterior glass to repel rain and improve driving visibility.</p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700" href="#book">
                        Book Service <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col h-full group">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 tracking-tight">Water Beading Protection</h3>
</div>
<p className="text-sm text-gray-500 mb-6 flex-grow">Ceramic-infused sealant that provides months of durable protection and extreme water beading.</p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700" href="#book">
                        Book Service <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">How It Works</h2>
<p className="text-sm text-gray-500">Three simple steps to a spotless vehicle.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gray-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 text-gray-900 relative">
<div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center border-2 border-white">1</div>
<iconify-icon className="text-2xl" icon="solar:cursor-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2 tracking-tight">Select Your Package</h3>
<p className="text-sm text-gray-500">Choose from our exterior, interior, or full detailing services online.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 text-gray-900 relative">
<div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center border-2 border-white">2</div>
<iconify-icon className="text-2xl" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2 tracking-tight">Choose Your Time Slot</h3>
<p className="text-sm text-gray-500">Pick a convenient time for us to arrive at your home or workplace.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 text-gray-900 relative">
<div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center border-2 border-white">3</div>
<iconify-icon className="text-2xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2 tracking-tight">We Detail Where Parked</h3>
<p className="text-sm text-gray-500">Our fully equipped van arrives and transforms your car on the spot.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-200/50" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center pb-16 border-b border-gray-200 mb-16">
<div>
<div className="text-4xl font-semibold tracking-tight text-gray-900 mb-1">2+</div>
<div className="text-xs font-medium text-gray-500 uppercase tracking-widest">Years Experience</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-gray-900 mb-1">1200+</div>
<div className="text-xs font-medium text-gray-500 uppercase tracking-widest">Happy Customers</div>
</div>
<div className="col-span-2 md:col-span-1">
<div className="text-4xl font-semibold tracking-tight text-gray-900 mb-1">15+</div>
<div className="text-xs font-medium text-gray-500 uppercase tracking-widest">Trained Staff</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-600 mb-6 line-clamp-4">"Incredible service. They showed up at my office in downtown Dallas and washed my car while I worked. By the time I left for the day, it looked fresh off the lot."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">MJ</div>
<div className="text-xs font-medium text-gray-900">Michael J. <span className="text-gray-400 font-normal ml-1">Dallas, TX</span></div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-600 mb-6 line-clamp-4">"Booking was super easy online. The team arrived perfectly on time and got stains out of my seats that I thought were permanent. Highly recommend for anyone in DFW."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">SA</div>
<div className="text-xs font-medium text-gray-900">Sarah A. <span className="text-gray-400 font-normal ml-1">Fort Worth, TX</span></div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-600 mb-6 line-clamp-4">"The convenience factor is unmatched. Having my SUV detailed in my own driveway on a Saturday morning without losing my weekend is amazing."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">DR</div>
<div className="text-xs font-medium text-gray-900">David R. <span className="text-gray-400 font-normal ml-1">Plano, TX</span></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gray-900 relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: `url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`}}></div>
<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Get Your Car Detailed Without Leaving Home
            </h2>
<p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                Join thousands of busy professionals in Dallas–Fort Worth who trust us to keep their vehicles pristine.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex justify-center items-center rounded-xl bg-blue-600 px-8 py-4 text-sm font-medium text-white shadow-sm hover:bg-blue-500 transition-all" href="#book">
                    Book Now
                </a>
<a className="inline-flex justify-center items-center rounded-xl bg-white/10 px-8 py-4 text-sm font-medium text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all" href="#contact">
                    Request a Call Back
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-12 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="font-semibold tracking-tighter text-xl text-gray-900">247EXPRESS</span>
<p className="text-xs text-gray-500 font-medium">Proudly serving Dallas–Fort Worth</p>
</div>
<nav className="flex flex-wrap justify-center gap-6">
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Home</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">About</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#services">Services</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Blog</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#contact">Contact</a>
</nav>
<div className="text-xs text-gray-400">
                © 2023 247Express Mobile Detailing.
            </div>
</div>
</footer>

    </>
  );
}
