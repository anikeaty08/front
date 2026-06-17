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
      

<div className="bg-gray-100 py-2 border-b border-gray-200 hidden lg:block">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm font-medium text-gray-600">
<div className="flex space-x-6">
<div className="flex items-center space-x-2">
<i className="icon-sm" data-lucide="clock" strokeWidth="1.5"></i>
<span>Monday-Saturday <span className="text-red-700">8AM-6PM</span></span>
</div>
<div className="flex items-center space-x-2 hover:text-red-700 transition-colors">
<i className="icon-sm" data-lucide="mail" strokeWidth="1.5"></i>
<a href="mailto:bryan@airwellusa.com">bryan@airwellusa.com</a>
</div>
</div>
<div className="flex items-center space-x-6">
<div className="flex space-x-3 text-gray-400">
<a aria-label="Facebook" className="hover:text-slate-900 transition-colors" href="#"><i className="icon-sm" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a aria-label="LinkedIn" className="hover:text-slate-900 transition-colors" href="#"><i className="icon-sm" data-lucide="linkedin" strokeWidth="1.5"></i></a>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20 sm:h-24">

<div className="flex-shrink-0 flex items-center space-x-3">
<div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center text-white">
<i className="icon-md" data-lucide="wind" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<a className="text-xl sm:text-2xl font-semibold tracking-tight uppercase text-slate-900 leading-none" href="#">Air Well</a>
<span className="text-xs font-medium tracking-widest text-red-700 uppercase leading-none mt-1">A/C &amp; Heating</span>
</div>
</div>

<nav className="hidden lg:flex items-center space-x-8">
<a className="text-sm font-medium uppercase text-slate-900 hover:text-red-700 transition-colors" href="#">Home</a>
<a className="text-sm font-medium uppercase text-gray-500 hover:text-red-700 transition-colors" href="#services">HVAC Services</a>
<a className="text-sm font-medium uppercase text-gray-500 hover:text-red-700 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium uppercase text-gray-500 hover:text-red-700 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center space-x-4">

<a className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-700 border border-red-100" href="tel:8324419580">
<i className="icon-sm" data-lucide="phone" strokeWidth="2"></i>
</a>
<a className="hidden sm:inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full text-sm font-semibold uppercase tracking-tight text-white bg-red-700 hover:bg-red-800 transition-colors shadow-sm" href="tel:8324419580">
<i className="w-4 h-4 mr-2" data-lucide="phone" strokeWidth="2"></i> (832) 441-9580
                    </a>
<button aria-label="Menu" className="lg:hidden p-2 text-gray-500 hover:text-slate-900 focus:outline-none" type="button">
<i className="icon-md" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative bg-white pt-12 pb-0 lg:pt-20 lg:pb-0 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12 items-start relative z-10">

<div className="lg:col-span-7 pt-4 pb-12 lg:pb-24">
<p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">Bringing you more than just air</p>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight uppercase text-slate-900 leading-[1.1] mb-6">
                        Quality HVAC <br/>Services in Houston
                    </h1>
<p className="text-lg text-gray-600 mb-8 max-w-xl">
                        We offer premium HVAC services and make sure your air conditioning &amp; heating systems are running at their absolute best. Whether you need residential HVAC maintenance, emergency repairs, or a new installation, our Houston experts are here to serve you.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent rounded-full text-sm font-medium uppercase text-white bg-red-700 hover:bg-red-800 transition-colors shadow-md" href="#services">
                            Our Services
                        </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-slate-900 rounded-full text-sm font-medium uppercase text-slate-900 hover:bg-slate-900 hover:text-white transition-colors" href="tel:8324419580">
                            Call (832) 441-9580
                        </a>
</div>
</div>

<div className="lg:col-span-5 relative mt-8 lg:mt-0 lg:-mr-8">
<div className="bg-cyan-50 rounded-2xl p-6 sm:p-8 shadow-xl relative z-20 border border-cyan-100">
<h2 className="text-xl font-semibold tracking-tight uppercase text-slate-900 mb-2">Schedule Your HVAC Service Today</h2>
<p className="text-gray-600 text-base mb-6">Take the first step towards enhancing your comfort with a complimentary estimate from our skilled professionals.</p>
<form action="#" className="space-y-4" method="POST">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="sr-only" htmlFor="name">Name</label>
<input className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-base focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-shadow placeholder-gray-400" id="name" name="name" placeholder="Name" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="phone">Phone</label>
<input className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-base focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-shadow placeholder-gray-400" id="phone" name="phone" placeholder="Phone" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="sr-only" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-base focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-shadow placeholder-gray-400" id="email" name="email" placeholder="Email Address" type="email"/>
</div>
<div className="relative">
<label className="sr-only" htmlFor="service">Choose Services</label>
<select className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-base text-gray-500 appearance-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-shadow cursor-pointer" id="service" name="service">
<option disabled="" selected="" value="">Choose Services</option>
<option value="repair">A/C Repair</option>
<option value="install">A/C Installation</option>
<option value="heating">Heating Repair</option>
<option value="maintenance">Maintenance</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
<i className="icon-sm" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
<button className="w-full bg-slate-900 text-white font-medium uppercase py-4 rounded hover:bg-slate-800 transition-colors mt-2 shadow-md" type="submit">
                                Submit
                            </button>
</form>
</div>
</div>
</div>
</div>

<div className="w-full h-64 sm:h-80 lg:h-[400px] w-full relative -mt-16 lg:-mt-32 z-0">
<img alt="Beautiful modern home exterior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>

<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
</div>
</section>

<div className="bg-white border-b border-gray-100 py-8 relative z-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-gray-100">
<div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 pt-4 md:pt-0">
<div className="bg-red-50 p-3 rounded-full text-red-700 flex-shrink-0">
<i className="icon-md" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-1">Supporting Local Pros</h3>
<p className="text-sm text-gray-500 leading-relaxed">Your trusted Houston HVAC experts right in your community.</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 pt-4 md:pt-0 md:pl-8">
<div className="bg-slate-50 p-3 rounded-full text-slate-900 flex-shrink-0">
<i className="icon-md" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-1">Quality Work Guaranteed</h3>
<p className="text-sm text-gray-500 leading-relaxed">Exceptional HVAC services you can rely on, backed by warranty.</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 pt-4 md:pt-0 md:pl-8">
<div className="bg-red-50 p-3 rounded-full text-red-700 flex-shrink-0">
<i className="icon-md" data-lucide="credit-card" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-1">Affordable Pricing</h3>
<p className="text-sm text-gray-500 leading-relaxed">Top-notch Houston A/C solutions that fit your budget.</p>
</div>
</div>
</div>
</div>
</div>

<section className="py-16 lg:py-24 bg-white overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="relative">

<div className="absolute -inset-4 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] rounded-2xl z-0"></div>
<img alt="HVAC Technician working on outdoor unit" className="relative z-10 w-full h-auto object-cover rounded-xl shadow-lg border border-gray-100" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl z-20 border border-gray-50 flex items-center space-x-3 hidden sm:flex">
<div className="bg-red-700 w-12 h-12 rounded-full flex items-center justify-center text-white">
<span className="font-semibold text-lg">15+</span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 leading-tight">Years of<br/>Experience</p>
</div>
</div>
</div>

<div>
<p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">About Air Well A/C &amp; Heating</p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight uppercase text-slate-900 leading-[1.1] mb-6">
                        Trusted By Thousands<br/>Of Home Owners
                    </h2>
<div className="space-y-5 text-lg text-gray-600 mb-8">
<p>
                            With years of specialization in the HVAC industry, Air Well A/C &amp; Heating has built a reputation for delivering top-quality services in Houston, TX and surrounding areas. Our seasoned technicians handle everything from complex installations to emergency repairs, ensuring confidence and precision in every job.
                        </p>
<p>
                            Our commitment to excellence is reflected in the lasting relationships we have developed with our clients. We stay up-to-date with the latest industry advancements to ensure state-of-the-art methods and equipment. Count on us for the highest standard of heating &amp; air conditioning services.
                        </p>
</div>
<a className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent rounded-full text-sm font-medium uppercase text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md" href="#about">
                        Learn More
                    </a>
</div>
</div>
</div>
</section>

<section className="bg-red-700 py-16 lg:py-24 relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-red-800 skew-x-12 translate-x-1/4 opacity-50 z-0"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 text-white">
<p className="text-sm font-medium text-red-200 uppercase tracking-widest mb-3">Air Well A/C &amp; Heating</p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight uppercase leading-[1.1] mb-8">
                        Providing Reliable Heating &amp; Air Conditioning Services
                    </h2>
<ul className="space-y-4 mb-8">
<li className="flex items-center space-x-3 text-lg">
<i className="icon-md text-white" data-lucide="check-circle-2" strokeWidth="2"></i>
<span className="font-medium">5 Star Ratings Company</span>
</li>
<li className="flex items-center space-x-3 text-lg">
<i className="icon-md text-white" data-lucide="check-circle-2" strokeWidth="2"></i>
<span className="font-medium">Thousands of happy clients in Houston</span>
</li>
<li className="flex items-center space-x-3 text-lg">
<i className="icon-md text-white" data-lucide="check-circle-2" strokeWidth="2"></i>
<span className="font-medium">Guaranteed work on every project</span>
</li>
</ul>
<a className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white rounded-full text-sm font-medium uppercase text-white hover:bg-white hover:text-red-700 transition-colors" href="tel:8324419580">
                        Call Now: (832) 441-9580
                    </a>
</div>
<div className="lg:col-span-5 hidden lg:block">

<div className="bg-white rounded-2xl shadow-2xl p-6 relative w-full max-w-sm ml-auto transform lg:translate-x-12 border border-gray-100">
<div className="flex items-center justify-center space-x-2 mb-4">
<i className="icon-md text-slate-900" data-lucide="wind" strokeWidth="1.5"></i>
<span className="text-lg font-semibold uppercase tracking-tight text-slate-900">Air Well A/C</span>
</div>
<div className="text-center mb-4">
<a className="text-xl font-bold text-red-700 hover:text-red-800 transition-colors flex items-center justify-center space-x-2" href="tel:8324419580">
<i className="icon-sm" data-lucide="phone-call" strokeWidth="2"></i>
<span>(832) 441-9580</span>
</a>
</div>
<img alt="Friendly HVAC Technician" className="w-full h-48 object-cover rounded-xl" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-gray-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="mx-auto w-12 h-12 flex items-center justify-center text-slate-900 mb-4">
<i className="icon-lg" data-lucide="snowflake" strokeWidth="1.5"></i>
</div>
<p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">Services</p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight uppercase text-slate-900 leading-[1.1] mb-6">
                    Our Residential HVAC Services
                </h2>
<p className="text-lg text-gray-600">
                    We provide a wide range of Residential HVAC solutions in Houston, ensuring reliable, efficient, and high-quality service. Discover how we can meet your heating, cooling, and ventilation needs. From air conditioning repair to complete installations, we've got you covered.
                </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-80 cursor-pointer">
<img alt="A/C Repair Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
<div>
<h3 className="text-2xl font-semibold text-white uppercase tracking-tight mb-1">A/C Repair</h3>
<p className="text-gray-300 text-sm font-medium">Fast diagnostics &amp; fixes</p>
</div>
<div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center text-white transform group-hover:-translate-y-1 transition-transform">
<i className="icon-sm" data-lucide="arrow-right" strokeWidth="2"></i>
</div>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-80 cursor-pointer">
<img alt="Air Conditioning Maintenance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1590496794008-383c8070b257?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
<div>
<h3 className="text-2xl font-semibold text-white uppercase tracking-tight mb-1">Maintenance</h3>
<p className="text-gray-300 text-sm font-medium">Preventative tune-ups</p>
</div>
<div className="w-10 h-10 rounded-full bg-transparent border-2 border-white flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-colors">
<i className="icon-sm" data-lucide="arrow-right" strokeWidth="2"></i>
</div>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-80 cursor-pointer md:col-span-2 lg:col-span-1">
<img alt="HVAC Installation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
<div>
<h3 className="text-2xl font-semibold text-white uppercase tracking-tight mb-1">Installation</h3>
<p className="text-gray-300 text-sm font-medium">New system setups</p>
</div>
<div className="w-10 h-10 rounded-full bg-transparent border-2 border-white flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-colors">
<i className="icon-sm" data-lucide="arrow-right" strokeWidth="2"></i>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center text-red-700 font-semibold uppercase tracking-tight hover:text-red-800 transition-colors" href="#contact">
                    View All Services <i className="icon-sm ml-1" data-lucide="chevron-right" strokeWidth="2"></i>
</a>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

<div className="flex flex-col justify-between">
<div className="mb-10">
<p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">Works</p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight uppercase text-slate-900 leading-[1.1] mb-6">
                            How It Works
                        </h2>
<p className="text-lg text-gray-600">
                            Our process is designed to make your HVAC service experience seamless and hassle-free in Houston. From the initial consultation to the final installation or repair, we ensure clear communication, timely service, and exceptional results every step of the way.
                        </p>
</div>
<img alt="Beautiful residential home" className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-md border border-gray-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="flex flex-col space-y-6 justify-center">

<div className="flex">
<div className="flex-shrink-0 relative z-10">
<div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg border-4 border-white">
                                01
                            </div>
</div>
<div className="bg-red-800 text-white p-6 sm:p-8 rounded-r-xl rounded-bl-xl w-full -ml-8 pl-12 shadow-md">
<h3 className="text-xl font-semibold uppercase tracking-tight mb-2">Request A Free Consultation</h3>
<p className="text-red-100 text-base">Schedule a no-obligation meeting to discuss your A/C or heating needs with our local experts.</p>
</div>
</div>

<div className="flex">
<div className="flex-shrink-0 relative z-10">
<div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg border-4 border-white">
                                02
                            </div>
</div>
<div className="bg-red-800 text-white p-6 sm:p-8 rounded-r-xl rounded-bl-xl w-full -ml-8 pl-12 shadow-md">
<h3 className="text-xl font-semibold uppercase tracking-tight mb-2">Get Recommendations &amp; Estimate</h3>
<p className="text-red-100 text-base">Our team will provide personalized recommendations and a detailed, transparent estimate.</p>
</div>
</div>

<div className="flex">
<div className="flex-shrink-0 relative z-10">
<div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg border-4 border-white">
                                03
                            </div>
</div>
<div className="bg-red-800 text-white p-6 sm:p-8 rounded-r-xl rounded-bl-xl w-full -ml-8 pl-12 shadow-md">
<h3 className="text-xl font-semibold uppercase tracking-tight mb-2">We Deliver And Install</h3>
<p className="text-red-100 text-base">Sit back and relax as our experienced HVAC technicians handle the swift repair or installation.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 py-12 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row items-center justify-between">
<div className="text-center md:text-left mb-6 md:mb-0">
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight uppercase text-white leading-tight mb-4 max-w-2xl">
                        Need to get your AC repaired or replaced? Call today!
                    </h2>
<a className="inline-flex items-center justify-center px-8 py-3 border-2 border-white rounded-full text-sm font-medium uppercase text-white hover:bg-white hover:text-slate-900 transition-colors" href="tel:8324419580">
                        Call (832) 441-9580
                    </a>
</div>
</div>
</div>

<i className="absolute -right-10 -bottom-10 w-64 h-64 text-slate-800 opacity-50 z-0 rotate-12" data-lucide="wrench" strokeWidth="1"></i>
</section>

<section className="py-16 lg:py-24 bg-gray-50 border-y border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-4 text-center lg:text-left">
<p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">Testimonials</p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight uppercase text-slate-900 leading-[1.1] mb-6">
                        Hear It From Our Clients
                    </h2>
<p className="text-lg text-gray-600 mb-8">
                        Discover what our satisfied customers in Houston have to say about their experiences with our HVAC services.
                    </p>
<div className="inline-flex flex-col items-center lg:items-start space-y-2 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<div className="flex space-x-1 text-yellow-400">
<i className="fill-current icon-sm" data-lucide="star" strokeWidth="1"></i>
<i className="fill-current icon-sm" data-lucide="star" strokeWidth="1"></i>
<i className="fill-current icon-sm" data-lucide="star" strokeWidth="1"></i>
<i className="fill-current icon-sm" data-lucide="star" strokeWidth="1"></i>
<i className="fill-current icon-sm" data-lucide="star" strokeWidth="1"></i>
</div>
<p className="text-sm font-medium text-slate-900">5 Star Customer Rating</p>
<p className="text-xs text-gray-500">Read Google Reviews</p>
</div>
</div>
<div className="lg:col-span-8">
<div className="grid sm:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
<i className="absolute top-8 right-8 text-gray-100 w-12 h-12" data-lucide="quote" strokeWidth="1"></i>
<div className="flex items-center space-x-4 mb-6">
<div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-semibold">
                                    JS
                                </div>
<div>
<h4 className="font-semibold text-slate-900 text-sm">John Smith</h4>
<p className="text-xs text-gray-500">Houston, TX</p>
<div className="flex text-yellow-400 mt-1">
<i className="fill-current w-3 h-3" data-lucide="star" strokeWidth="1"></i>
<i className="fill-current w-3 h-3" data-lucide="star" strokeWidth="1"></i>
<i className="fill-current w-3 h-3" data-lucide="star" strokeWidth="1"></i>
<i className="fill-current w-3 h-3" data-lucide="star" strokeWidth="1"></i>
<i className="fill-current w-3 h-3" data-lucide="star" strokeWidth="1"></i>
</div>
</div>
</div>
<h5 className="text-lg font-semibold uppercase tracking-tight text-slate-900 mb-3">Simply Amazing</h5>
<p className="text-gray-600 text-base leading-relaxed">
                                "I had the pleasure of working with Air Well when my AC went out in July. They were responsive, on time, and very professional. The technician explained everything clearly and got us back to cooling quickly. Highly recommend!"
                            </p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
<i className="absolute top-8 right-8 text-gray-100 w-12 h-12" data-lucide="quote" strokeWidth="1"></i>
<div className="flex items-center space-x-4 mb-6">
<div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white font-semibold">
                                    MD
                                </div>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Maria Dominguez</h4>
<p className="text-xs text-gray-500">Houston, TX</p>
<div className="flex text-yellow-400 mt-1">
<i className="fill-current w-3 h-3" data-lucide="star" strokeWidth="1"></i>
<i className="fill-current w-3 h-3" data-lucide="star" strokeWidth="1"></i>
<i className="fill-current w-3 h-3" data-lucide="star" strokeWidth="1"></i>
<i className="fill-current w-3 h-3" data-lucide="star" strokeWidth="1"></i>
<i className="fill-current w-3 h-3" data-lucide="star" strokeWidth="1"></i>
</div>
</div>
</div>
<h5 className="text-lg font-semibold uppercase tracking-tight text-slate-900 mb-3">Honest &amp; Fair</h5>
<p className="text-gray-600 text-base leading-relaxed">
                                "These guys are true professionals. They didn't try to upsell me on a new unit when a repair was all that was needed. Very honest, fair pricing, and left the work area cleaner than they found it."
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col lg:flex-row min-h-[500px]">

<div className="lg:w-1/2 relative min-h-[300px]">
<img alt="HVAC Gauge Manifold" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>

<div className="lg:w-1/2 bg-red-800 text-white p-12 lg:p-20 flex flex-col justify-center">
<p className="text-sm font-medium text-red-200 uppercase tracking-widest mb-3">Top Rated</p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight uppercase leading-[1.1] mb-4">
                Top Rated Heating And Air Conditioning Service
            </h2>
<h3 className="text-xl font-medium text-red-100 mb-6">Dedicated to Honesty and Trust in Houston</h3>
<p className="text-lg text-red-50 mb-10 leading-relaxed max-w-xl">
                Experience the best in heating and air conditioning service with our top-rated local team. Committed to honesty and trust, we deliver exceptional HVAC solutions tailored to your home's needs.
            </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent rounded-full text-sm font-medium uppercase text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md" href="#contact">
                    Get Started
                </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 border border-white rounded-full text-sm font-medium uppercase text-white hover:bg-white hover:text-red-800 transition-colors" href="tel:8324419580">
                    Get A Free Estimate
                </a>
</div>
</div>
</section>

<div className="bg-gray-900 py-8 border-b border-gray-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-center md:text-left">
<h3 className="text-xl font-semibold text-white uppercase tracking-tight mb-1">Newsletter</h3>
<p className="text-gray-400 text-sm">Enter your email to receive helpful money saving tips and promotions.</p>
</div>
<form className="flex w-full md:w-auto max-w-md">
<label className="sr-only" htmlFor="newsletter-email">Email address</label>
<input className="w-full md:w-64 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l text-white focus:outline-none focus:border-gray-500 placeholder-gray-500" id="newsletter-email" placeholder="Email Address" type="email"/>
<button className="bg-red-700 text-white px-6 py-3 rounded-r uppercase text-sm font-semibold hover:bg-red-600 transition-colors whitespace-nowrap" type="submit">
                        Subscribe
                    </button>
</form>
</div>
</div>
</div>

<footer className="bg-[#111] pt-16 pb-8 text-gray-300" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div>
<div className="flex items-center space-x-3 mb-6">
<div className="w-10 h-10 border-2 border-white rounded flex items-center justify-center text-white">
<i className="icon-md" data-lucide="wind" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-xl font-semibold tracking-tight uppercase text-white leading-none">Air Well</span>
<span className="text-xs font-medium tracking-widest text-red-500 uppercase leading-none mt-1">A/C &amp; Heating</span>
</div>
</div>
<p className="text-sm text-gray-400 leading-relaxed mb-6">
                        Houston's premier choice for reliable, efficient, and affordable heating and cooling solutions. Dedicated to your comfort all year round.
                    </p>
</div>

<div>
<h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">Menu</h4>
<ul className="space-y-3">
<li><a className="text-sm hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">Services</h4>
<ul className="space-y-3">
<li><a className="text-sm hover:text-white transition-colors" href="#">A/C Repair Houston</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">A/C Installation</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Heating Repair</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Furnace Maintenance</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">HVAC Tune-Ups</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">Contact Info</h4>
<ul className="space-y-4">
<li className="flex items-start space-x-3">
<i className="icon-sm text-red-500 flex-shrink-0 mt-0.5" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="text-sm">13859 Crosshaven Dr,<br/>Houston, TX 77015</span>
</li>
<li className="flex items-center space-x-3">
<i className="icon-sm text-red-500 flex-shrink-0" data-lucide="phone" strokeWidth="1.5"></i>
<a className="text-sm hover:text-white transition-colors" href="tel:8324419580">(832) 441-9580</a>
</li>
<li className="flex items-center space-x-3">
<i className="icon-sm text-red-500 flex-shrink-0" data-lucide="mail" strokeWidth="1.5"></i>
<a className="text-sm hover:text-white transition-colors" href="mailto:bryan@airwellusa.com">bryan@airwellusa.com</a>
</li>
<li className="pt-2 text-sm text-gray-500">
                            Monday - Saturday: 8AM - 6PM<br/>Sunday: Closed
                        </li>
</ul>
<div className="flex space-x-4 mt-6">
<a className="text-gray-400 hover:text-white transition-colors" href="#"><i className="icon-sm" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><i className="icon-sm" data-lucide="linkedin" strokeWidth="1.5"></i></a>
</div>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
<p>© 2023 Air Well A/C &amp; Heating. All Rights Reserved.</p>
<div className="flex space-x-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
