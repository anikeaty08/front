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



        // Initialize Lucide Icons with 1.5 stroke width
        lucide.createIcons({
            strokeWidth: 1.5
        });

        // Mobile Menu Toggle Script
        document.addEventListener('DOMContentLoaded', () => {
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            if (btn && menu) {
                // Toggle menu on button click
                btn.addEventListener('click', () => {
                    menu.classList.toggle('hidden');
                });

                // Close menu when a link is clicked
                mobileLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        menu.classList.add('hidden');
                    });
                });
            }
        });
    
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
      

<div className="hidden lg:flex justify-between items-center bg-[#f4f4f5] py-2 px-8 text-sm text-gray-600 font-medium">
<div className="flex space-x-6 items-center">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-gray-400" data-lucide="clock"></i>
<span>Monday-Saturday <span className="text-[#B3192B] font-semibold">8AM-6PM</span></span>
</div>
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-gray-400" data-lucide="mail"></i>
<span>contact@econoairvictoria.com</span>
</div>
</div>
<div className="flex items-center space-x-6">
<a className="flex items-center space-x-2 text-gray-900 font-bold hover:text-[#B3192B] transition-colors" href="tel:3615736671">
<i className="w-4 h-4 text-[#B3192B]" data-lucide="phone"></i>
<span className="text-lg">(361) 573-6671</span>
</a>
<div className="flex space-x-4">
<a className="text-gray-400 hover:text-gray-900" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="text-gray-400 hover:text-gray-900" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex-shrink-0 flex items-center space-x-2 cursor-pointer" href="#home">
<div className="w-10 h-10 bg-[#0B1E36] rounded-sm flex items-center justify-center text-white">
<i className="w-6 h-6" data-lucide="wind"></i>
</div>
<div className="flex flex-col uppercase tracking-tight">
<span className="text-xl font-bold leading-none text-gray-900">ECONO AIR</span>
<span className="text-sm font-semibold leading-none text-gray-500">CONDITIONING</span>
</div>
</a>

<nav className="hidden md:flex space-x-8">
<a className="text-gray-900 text-sm font-semibold uppercase tracking-wide hover:text-[#B3192B] transition-colors" href="#home">Home</a>
<a className="text-gray-900 text-sm font-semibold uppercase tracking-wide hover:text-[#B3192B] transition-colors" href="#services">Services</a>
<a className="text-gray-900 text-sm font-semibold uppercase tracking-wide hover:text-[#B3192B] transition-colors" href="#about">About Us</a>
<a className="text-gray-900 text-sm font-semibold uppercase tracking-wide hover:text-[#B3192B] transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden md:flex">
<a className="bg-[#B3192B] hover:bg-[#8a1321] text-white px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all shadow-md hover:shadow-lg" href="tel:3615736671">
                        Get A Quote
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-gray-600 hover:text-gray-900 focus:outline-none" id="mobile-menu-btn">
<i className="w-8 h-8" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-md z-40" id="mobile-menu">
<nav className="flex flex-col px-6 py-6 space-y-5">
<a className="mobile-link text-gray-900 text-base font-semibold uppercase tracking-wide hover:text-[#B3192B] transition-colors" href="#home">Home</a>
<a className="mobile-link text-gray-900 text-base font-semibold uppercase tracking-wide hover:text-[#B3192B] transition-colors" href="#services">Services</a>
<a className="mobile-link text-gray-900 text-base font-semibold uppercase tracking-wide hover:text-[#B3192B] transition-colors" href="#about">About Us</a>
<a className="mobile-link text-gray-900 text-base font-semibold uppercase tracking-wide hover:text-[#B3192B] transition-colors" href="#contact">Contact</a>
<a className="bg-[#B3192B] hover:bg-[#8a1321] text-white px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide text-center transition-all shadow-md mt-2" href="tel:3615736671">
                    Get A Quote
                </a>
</nav>
</div>
</header>

<section className="relative bg-gray-50 overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="HVAC Home" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent w-full lg:w-3/4"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24 flex flex-col lg:flex-row items-center">

<div className="w-full lg:w-[55%] pr-0 lg:pr-12 mb-12 lg:mb-0">
<span className="text-[#0B1E36] font-bold text-sm uppercase tracking-widest mb-4 block">Bringing you more than just air</span>
<h1 className="text-5xl lg:text-7xl font-bold text-gray-900 uppercase tracking-tight leading-[1.1] mb-6">
                    Quality HVAC<br/>Services in<br/>Victoria TX
                </h1>
<p className="text-lg text-gray-700 mb-8 max-w-xl font-medium">
                    Econo Air Conditioning offers premium heating and cooling solutions. Whether you need a rapid emergency repair, maintenance, or a full system replacement, our local Victoria experts are ready to serve you.
                </p>
<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
<a className="bg-[#B3192B] hover:bg-[#8a1321] text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide text-center transition-all shadow-md" href="#services">
                        Our Services
                    </a>
<a className="bg-white border-2 border-[#0B1E36] text-[#0B1E36] hover:bg-[#0B1E36] hover:text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide text-center transition-all flex items-center justify-center space-x-2" href="tel:3615736671">
<i className="w-4 h-4" data-lucide="phone"></i>
<span>Call (361) 573-6671</span>
</a>
</div>
</div>

<div className="w-full lg:w-[45%] lg:pl-10">
<div className="bg-[#B2E6EA] p-8 lg:p-10 rounded-2xl shadow-xl border border-teal-100 relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-bl-full pointer-events-none"></div>
<h2 className="text-2xl font-bold text-[#0B1E36] uppercase tracking-tight mb-2 relative z-10">Schedule Service Today</h2>
<p className="text-sm text-[#0B1E36]/80 mb-6 font-medium relative z-10">Take the first step towards a comfortable home with a complimentary estimate.</p>
<form className="space-y-4 relative z-10">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<input className="w-full px-4 py-3 bg-white/90 border-0 rounded-md focus:ring-2 focus:ring-[#0B1E36] outline-none text-gray-800 placeholder-gray-500 font-medium" placeholder="Name" type="text"/>
<input className="w-full px-4 py-3 bg-white/90 border-0 rounded-md focus:ring-2 focus:ring-[#0B1E36] outline-none text-gray-800 placeholder-gray-500 font-medium" placeholder="Phone" type="tel"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<input className="w-full px-4 py-3 bg-white/90 border-0 rounded-md focus:ring-2 focus:ring-[#0B1E36] outline-none text-gray-800 placeholder-gray-500 font-medium" placeholder="Email Address" type="email"/>
<div className="relative">
<select className="w-full px-4 py-3 bg-white/90 border-0 rounded-md focus:ring-2 focus:ring-[#0B1E36] outline-none text-gray-600 font-medium appearance-none cursor-pointer">
<option disabled="" selected="" value="">Choose Service</option>
<option value="repair">AC Repair</option>
<option value="install">Installation</option>
<option value="maintenance">Maintenance</option>
<option value="heating">Heating</option>
</select>
<i className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<button className="w-full bg-[#0B1E36] hover:bg-gray-900 text-white font-bold text-lg py-4 rounded-md uppercase tracking-wide transition-colors mt-4 shadow-md" type="submit">
                            Submit Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<div className="bg-white border-b border-gray-100 py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
<div className="flex items-center space-x-4 pt-4 md:pt-0 md:px-6">
<div className="flex-shrink-0 w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
<i className="w-7 h-7 text-[#B3192B]" data-lucide="users"></i>
</div>
<div>
<h3 className="text-lg font-bold text-gray-900 tracking-tight">Supporting Local Pros</h3>
<p className="text-sm text-gray-600 mt-1 font-medium">Your trusted HVAC experts right here in Victoria, TX.</p>
</div>
</div>
<div className="flex items-center space-x-4 pt-4 md:pt-0 md:px-6">
<div className="flex-shrink-0 w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
<i className="w-7 h-7 text-[#B3192B]" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-lg font-bold text-gray-900 tracking-tight">Quality Guaranteed</h3>
<p className="text-sm text-gray-600 mt-1 font-medium">Exceptional AC repair services you can rely on completely.</p>
</div>
</div>
<div className="flex items-center space-x-4 pt-4 md:pt-0 md:px-6">
<div className="flex-shrink-0 w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
<i className="w-7 h-7 text-[#B3192B]" data-lucide="credit-card"></i>
</div>
<div>
<h3 className="text-lg font-bold text-gray-900 tracking-tight">Affordable Pricing</h3>
<p className="text-sm text-gray-600 mt-1 font-medium">Top-notch cooling solutions that fit your budget.</p>
</div>
</div>
</div>
</div>
</div>

<section className="py-20 lg:py-32 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/2 relative">

<div className="absolute -bottom-6 -left-6 w-32 h-32 text-gray-200">
<svg height="100%" viewbox="0 0 100 100" width="100%">
<pattern height="10" id="lines" patternunits="userSpaceOnUse" width="10">
<path d="M 10 0 L 0 10" fill="none" stroke="currentColor" strokeWidth="2"></path>
</pattern>
<rect fill="url(#lines)" height="100%" width="100%"></rect>
</svg>
</div>
<img alt="HVAC Technician working" className="rounded-lg shadow-2xl relative z-10 w-full h-auto object-cover" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>

<div className="w-full lg:w-1/2">
<span className="text-[#0B1E36] font-bold text-sm uppercase tracking-widest mb-2 block">About Econo Air Conditioning</span>
<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 uppercase tracking-tight leading-[1.1] mb-6">
                        Trusted by Victoria TX Homeowners
                    </h2>
<p className="text-lg text-gray-600 mb-6 font-medium leading-relaxed">
                        With years of specialization in the HVAC industry, Econo Air Conditioning has built a reputation for delivering top-quality services in Victoria and surrounding areas. Our seasoned technicians handle everything from complex installations to emergency AC repairs, ensuring confidence and precision in every job.
                    </p>
<p className="text-lg text-gray-600 mb-8 font-medium leading-relaxed">
                        Our commitment to excellence is reflected in the lasting relationships we have developed with our clients. We stay up-to-date with the latest industry advancements and technologies to ensure state-of-the-art methods and equipment. Count on us for the highest standard of heating &amp; air conditioning services.
                    </p>
<a className="inline-block bg-[#0B1E36] hover:bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide transition-all" href="#services">
                        Learn More
                    </a>
</div>
</div>
</div>
</section>

<section className="bg-[#B3192B] relative py-20 lg:py-24 mt-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
<div className="w-full lg:w-[60%] text-white">
<span className="font-bold text-sm uppercase tracking-widest mb-2 block text-red-200">About Econo Air Conditioning</span>
<h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[1.1] mb-8">
                        Providing Reliable Heating &amp;<br/>Air Conditioning Services
                    </h2>
<ul className="space-y-4">
<li className="flex items-center space-x-3 text-lg font-medium">
<i className="w-6 h-6 text-white" data-lucide="check-circle-2"></i>
<span>5 Star Ratings Company</span>
</li>
<li className="flex items-center space-x-3 text-lg font-medium">
<i className="w-6 h-6 text-white" data-lucide="check-circle-2"></i>
<span>Thousands of happy clients in Victoria</span>
</li>
<li className="flex items-center space-x-3 text-lg font-medium">
<i className="w-6 h-6 text-white" data-lucide="check-circle-2"></i>
<span>Guaranteed work &amp; honest pricing</span>
</li>
</ul>
</div>

<div className="w-full lg:w-[40%]">
<div className="bg-white rounded-2xl p-6 shadow-2xl transform lg:-translate-y-12">
<div className="flex items-center space-x-2 mb-4 border-b border-gray-100 pb-4">
<div className="w-8 h-8 bg-[#0B1E36] rounded-sm flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="wind"></i>
</div>
<span className="text-lg font-bold text-gray-900 uppercase tracking-tight">Econo Air</span>
</div>
<a className="flex items-center space-x-3 text-[#B3192B] hover:text-[#8a1321] transition-colors mb-6 group" href="tel:3615736671">
<div className="bg-red-50 p-3 rounded-full group-hover:bg-red-100 transition-colors">
<i className="w-6 h-6" data-lucide="phone-call"></i>
</div>
<span className="text-2xl font-bold tracking-tight">(361) 573-6671</span>
</a>
<img alt="Friendly Technician" className="w-full h-48 object-cover rounded-lg" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-gray-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="flex justify-center mb-4">
<i className="w-10 h-10 text-[#0B1E36]" data-lucide="thermometer-snowflake"></i>
</div>
<span className="text-[#B3192B] font-bold text-sm uppercase tracking-widest mb-2 block">Services</span>
<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 uppercase tracking-tight leading-[1.1] mb-6">
                Our Residential HVAC Services
            </h2>
<p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium mb-16">
                We provide a wide range of residential HVAC solutions, ensuring reliable, efficient, and high-quality service. Discover how we can meet your heating, cooling, and ventilation needs in Victoria, TX.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

<a className="group relative h-96 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-all duration-300" href="#">
<img alt="AC Repair" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
<div>
<h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-1">Air Conditioning</h3>
<p className="text-gray-300 font-medium">Repair &amp; Service</p>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white group-hover:bg-[#B3192B] group-hover:border-[#B3192B] transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>
</a>

<a className="group relative h-96 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-all duration-300" href="#">
<img alt="HVAC Maintenance" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
<div>
<h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-1">HVAC System</h3>
<p className="text-gray-300 font-medium">Maintenance</p>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white group-hover:bg-[#B3192B] group-hover:border-[#B3192B] transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>
</a>

<a className="group relative h-96 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-all duration-300" href="#">
<img alt="Heating Installation" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
<div>
<h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-1">Heating &amp; Cooling</h3>
<p className="text-gray-300 font-medium">Installation</p>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white group-hover:bg-[#B3192B] group-hover:border-[#B3192B] transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>
</a>
</div>
<div className="mt-12">
<a className="inline-flex items-center space-x-2 text-[#B3192B] font-bold text-lg hover:text-[#8a1321] uppercase tracking-wide" href="#services">
<span>View All Services</span>
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</a>
</div>
</div>
</section>

<section className="relative py-24 bg-gray-900">

<div className="absolute inset-0 z-0 opacity-40">
<img alt="House Exterior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden">

<div className="w-full lg:w-1/2 bg-white/95 p-12 lg:p-16 flex flex-col justify-center">
<span className="text-[#0B1E36] font-bold text-sm uppercase tracking-widest mb-2 block">Works</span>
<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 uppercase tracking-tight leading-[1.1] mb-6">
                        How It Works
                    </h2>
<p className="text-lg text-gray-600 font-medium leading-relaxed">
                        Our process is designed to make your HVAC service experience seamless and hassle-free. From the initial consultation to the final installation or repair, we ensure clear communication, timely service, and exceptional results every step of the way.
                    </p>
</div>

<div className="w-full lg:w-1/2 bg-[#B3192B] p-12 lg:p-16 flex flex-col justify-center text-white space-y-10">
<div className="flex items-start space-x-6">
<div className="flex-shrink-0 w-16 h-16 rounded-full bg-white text-[#B3192B] flex items-center justify-center text-2xl font-bold shadow-inner">
                            01
                        </div>
<div>
<h3 className="text-2xl font-bold uppercase tracking-tight mb-2">Request A Consultation</h3>
<p className="text-red-100 font-medium text-lg leading-relaxed">Schedule a no-obligation meeting to discuss your HVAC needs with our local experts.</p>
</div>
</div>
<div className="flex items-start space-x-6">
<div className="flex-shrink-0 w-16 h-16 rounded-full bg-white text-[#B3192B] flex items-center justify-center text-2xl font-bold shadow-inner">
                            02
                        </div>
<div>
<h3 className="text-2xl font-bold uppercase tracking-tight mb-2">Get Recommendations &amp; Estimate</h3>
<p className="text-red-100 font-medium text-lg leading-relaxed">Our team will provide personalized recommendations and a detailed estimate based on your specific requirements.</p>
</div>
</div>
<div className="flex items-start space-x-6">
<div className="flex-shrink-0 w-16 h-16 rounded-full bg-white text-[#B3192B] flex items-center justify-center text-2xl font-bold shadow-inner">
                            03
                        </div>
<div>
<h3 className="text-2xl font-bold uppercase tracking-tight mb-2">We Deliver &amp; Install</h3>
<p className="text-red-100 font-medium text-lg leading-relaxed">Sit back and relax as our experienced HVAC technicians handle the seamless delivery and installation of your systems.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0B1E36] py-16 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row items-center justify-between">
<div className="w-full md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
<h2 className="text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight leading-tight">
                        Need to get your AC repaired<br/>or replaced? Call Today!
                    </h2>
</div>
<div className="w-full md:w-1/3 flex justify-center md:justify-end">
<a className="border-2 border-white hover:bg-white hover:text-[#0B1E36] text-white px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wide transition-all flex items-center space-x-3" href="tel:3615736671">
<i className="w-6 h-6" data-lucide="phone-call"></i>
<span>(361) 573-6671</span>
</a>
</div>
</div>
</div>

<div className="absolute -right-20 -bottom-40 opacity-10 pointer-events-none">
<i className="w-96 h-96 text-white animate-spin-slow" data-lucide="fan" style={{animationDuration: '20s'}}></i>
</div>
</section>

<section className="bg-[#27272a] py-12 border-b border-gray-700" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-white text-center md:text-left">
<h3 className="text-2xl font-bold uppercase tracking-tight">Ready for reliable comfort?</h3>
<p className="text-gray-400 font-medium mt-1">Contact Econo Air Conditioning for fast service in Victoria.</p>
</div>
<div className="flex w-full md:w-auto max-w-md">
<input className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-l-md text-white focus:outline-none focus:border-gray-400 font-medium" placeholder="Enter your email" type="email"/>
<button className="bg-[#B3192B] hover:bg-[#8a1321] text-white px-6 py-3 rounded-r-md font-bold uppercase tracking-wide transition-colors">
                        Contact Us
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-[#18181b] pt-20 pb-10 text-gray-400 font-medium">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="col-span-1">
<div className="flex items-center space-x-2 mb-6">
<div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center text-[#18181b]">
<i className="w-6 h-6" data-lucide="wind"></i>
</div>
<div className="flex flex-col uppercase tracking-tight">
<span className="text-xl font-bold leading-none text-white">ECONO AIR</span>
<span className="text-sm font-semibold leading-none text-gray-500">CONDITIONING</span>
</div>
</div>
<p className="text-lg leading-relaxed mb-6">Your local, trusted professionals for all heating and cooling needs in Victoria, TX and surrounding areas.</p>
</div>

<div>
<h4 className="text-white text-lg font-bold uppercase tracking-wide mb-6">Menu</h4>
<ul className="space-y-4">
<li><a className="hover:text-white transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-lg font-bold uppercase tracking-wide mb-6">Services</h4>
<ul className="space-y-4">
<li><a className="hover:text-white transition-colors" href="#services">Air Conditioning Repair</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Air Conditioning Maintenance</a></li>
<li><a className="hover:text-white transition-colors" href="#services">AC Installation</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Furnace Repair</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Heating Maintenance</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-lg font-bold uppercase tracking-wide mb-6">Contact Info</h4>
<ul className="space-y-4 text-lg">
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" data-lucide="map-pin"></i>
<span>1845 San Antonio River Rd,<br/>Victoria, TX 77905</span>
</li>
<li className="flex items-center space-x-3">
<i className="w-5 h-5 text-gray-500 flex-shrink-0" data-lucide="phone"></i>
<a className="text-white font-bold hover:text-[#B3192B]" href="tel:3615736671">(361) 573-6671</a>
</li>
<li className="flex items-center space-x-3">
<i className="w-5 h-5 text-gray-500 flex-shrink-0" data-lucide="mail"></i>
<a className="hover:text-white" href="mailto:contact@econoairvictoria.com">contact@econoairvictoria.com</a>
</li>
<li className="flex items-center space-x-3 pt-2">
<i className="w-5 h-5 text-gray-500 flex-shrink-0" data-lucide="clock"></i>
<span>Mon-Sat: 8AM-6PM<br/>Sunday: Closed</span>
</li>
</ul>
<div className="flex space-x-4 mt-6">
<a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#B3192B] text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#B3192B] text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
<p>© 2024 Econo Air Conditioning. All Rights Reserved.</p>
<div className="flex space-x-4 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
