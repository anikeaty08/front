import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-brand-yellow sticky top-0 z-50 shadow-sm">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="flex items-center gap-2 text-slate-900" href="#">
<i className="w-6 h-6" data-lucide="fan" strokeWidth="1.5"></i>
<span className="font-semibold text-xl tracking-tight hidden sm:block">Fred's HVAC</span>
</a>
<nav className="hidden md:flex items-center gap-8 font-medium text-lg text-slate-900">
<a className="hover:opacity-70 transition-opacity" href="#services">Services</a>
<a className="hover:opacity-70 transition-opacity" href="#about">About</a>
<a className="hover:opacity-70 transition-opacity" href="#contact">Contact</a>
</nav>
<a className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full font-semibold text-lg hover:bg-slate-800 transition-colors shadow-md" href="tel:9562379510">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
<span className="hidden sm:inline">(956) 237-9510</span>
<span className="sm:hidden">Call</span>
</a>
</div>
</header>

<section className="bg-brand-yellow relative pt-16 pb-32 md:pt-24 md:pb-48 px-6 overflow-hidden">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">

<div className="w-full md:w-[55%] text-slate-900">
<h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-tight mb-6">
                    Fast, Friendly and Affordable HVAC Services
                </h1>
<p className="text-lg md:text-xl font-medium opacity-90 mb-8 max-w-lg leading-relaxed">
                    Keeping Laredo comfortable year-round with expert air conditioning repair, installation, and heating solutions.
                </p>
<div className="flex flex-wrap items-center gap-4">
<a className="bg-slate-900 text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2" href="tel:9562379510">
                        Book Now
                        <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="w-full md:w-[45%] flex justify-center md:justify-end relative">
<div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-[10px] border-[#FCFAEE] shadow-2xl bg-white z-10">
<img alt="HVAC Technician" className="w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-white/20 z-0"></div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
<svg className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px]" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.52,192,107.95,235.32,99.8,278.43,80.7,321.39,56.44Z" fill="#FCFAEE"></path>
</svg>
</div>
</section>

<section className="py-20 md:py-32 px-6" id="services">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">

<div className="w-full md:w-1/2 relative flex justify-center">
<div className="absolute inset-0 bg-brand-yellow blur-3xl opacity-20 w-64 h-64 rounded-full mx-auto top-1/2 -translate-y-1/2"></div>
<div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-8 border-white shadow-xl overflow-hidden z-10">
<img alt="AC Repair Laredo TX" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                    Expert AC Repair &amp; Installation
                </h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Don't sweat the Texas heat. Our licensed technicians provide fast, efficient air conditioning repair and installation services across Laredo to restore your comfort and lower energy bills.
                </p>
<div className="flex items-center gap-6">
<a className="bg-brand-yellow text-slate-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-colors shadow-sm inline-block" href="tel:9562379510">
                        Call for Repair
                    </a>
<div className="flex items-center gap-2 text-slate-900 font-medium text-lg">
<i className="w-6 h-6 text-brand-yellow" data-lucide="shield-check" strokeWidth="1.5"></i>
                        Licensed &amp; Insured
                    </div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 bg-white">
<div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">

<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                    Comprehensive HVAC Solutions
                </h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    From routine maintenance to complete heating system overhauls, Fred's Air Conditioning and Heating delivers reliable solutions tailored to your property.
                </p>
<ul className="space-y-6 mb-10">
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="text-slate-900 w-4 h-4" data-lucide="wrench" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-semibold text-xl text-slate-900 mb-1 tracking-tight">HVAC Maintenance</h3>
<p className="text-lg text-slate-600">Preventative care to extend the life of your unit.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="text-slate-900 w-4 h-4" data-lucide="thermometer-sun" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-semibold text-xl text-slate-900 mb-1 tracking-tight">Heating Services</h3>
<p className="text-lg text-slate-600">Keep warm during chilly Laredo winter nights.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="text-slate-900 w-4 h-4" data-lucide="wind" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-semibold text-xl text-slate-900 mb-1 tracking-tight">Indoor Air Quality</h3>
<p className="text-lg text-slate-600">Breathe easier with our purification solutions.</p>
</div>
</li>
</ul>
</div>

<div className="w-full md:w-1/2 relative flex justify-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[360px] sm:h-[360px] rounded-full border border-brand-yellow/50 z-0"></div>
<div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white">
<img alt="Air Conditioning Service Laredo TX" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg z-20 flex items-center gap-3">
<div className="bg-brand-yellow p-2 rounded-full text-slate-900">
<i className="w-5 h-5 fill-slate-900" data-lucide="star" strokeWidth="1.5"></i>
</div>
<div>
<div className="font-semibold text-slate-900 tracking-tight">Top Rated</div>
<div className="text-slate-500 text-sm">in Laredo, TX</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6" id="about">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">

<div className="w-full md:w-1/2 flex justify-center relative">
<div className="relative w-72 h-72 sm:w-96 sm:h-96">
<div className="absolute top-0 left-0 w-full h-full bg-brand-yellow rounded-full"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[110%] z-10 overflow-hidden rounded-b-full">
<img alt="Local HVAC Expert" className="w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                    Your Local Laredo HVAC Experts
                </h2>
<p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    At Fred's Air Conditioning and Heating, we put our customers first. Serving the 78043 area and surrounding communities, we pride ourselves on honest pricing, transparent communication, and doing the job right the first time.
                </p>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Whether it's a minor repair or a major installation, our local team treats your home with the respect it deserves.
                </p>
<a className="bg-brand-yellow text-slate-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-colors shadow-sm inline-flex items-center gap-2" href="tel:9562379510">
<i className="w-5 h-5" data-lucide="phone-call" strokeWidth="1.5"></i>
                    (956) 237-9510
                </a>
</div>
</div>
</section>

<section className="pb-20 md:pb-32 px-6" id="contact">
<div className="max-w-6xl mx-auto">
<div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">

<div className="w-full lg:w-5/12 bg-slate-900 p-10 md:p-16 flex flex-col relative overflow-hidden text-white">
<div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl"></div>
<div className="relative z-10 flex-grow">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Get a Free Estimate</h2>
<p className="text-slate-400 text-lg mb-12">Fill out the form and our team will get back to you within 24 hours to schedule your service.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="bg-brand-yellow/10 p-3 rounded-xl mt-1">
<i className="w-6 h-6 text-brand-yellow" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-slate-400 text-sm font-medium mb-1">Call us directly</p>
<a className="text-xl font-semibold hover:text-brand-yellow transition-colors" href="tel:9562379510">(956) 237-9510</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-brand-yellow/10 p-3 rounded-xl mt-1">
<i className="w-6 h-6 text-brand-yellow" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-slate-400 text-sm font-medium mb-1">Service Area</p>
<p className="text-xl font-semibold">Laredo, TX 78043<br/><span className="text-base text-slate-400 font-normal">and surrounding areas</span></p>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-7/12 p-10 md:p-16">
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="first-name">First name</label>
<input className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-slate-50" id="first-name" name="first-name" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="last-name">Last name</label>
<input className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-slate-50" id="last-name" name="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="email">Email address</label>
<input className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-slate-50" id="email" name="email" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="phone">Phone number</label>
<input className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-slate-50" id="phone" name="phone" placeholder="(956) 000-0000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="service">Service Needed</label>
<div className="relative">
<select className="w-full rounded-xl border border-slate-200 pl-4 pr-10 py-3 text-base text-slate-900 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-slate-50 appearance-none" id="service" name="service">
<option disabled="" selected="" value="">Select a service...</option>
<option value="ac-repair">AC Repair</option>
<option value="ac-install">AC Installation</option>
<option value="heating">Heating Services</option>
<option value="maintenance">Routine Maintenance</option>
<option value="other">Other</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
<i className="h-4 w-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="message">Message</label>
<textarea className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-slate-50 resize-none" id="message" name="message" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-semibold text-lg py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-md flex justify-center items-center gap-2 mt-4" type="submit">
                            Send Request
                            <i className="w-5 h-5" data-lucide="send" strokeWidth="1.5"></i>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#111827] pt-20 pb-10 px-6 border-t-[12px] border-brand-yellow">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<a className="flex items-center gap-2 text-white mb-6" href="#">
<i className="w-8 h-8 text-brand-yellow" data-lucide="fan" strokeWidth="1.5"></i>
<span className="font-semibold text-2xl tracking-tight">Fred's HVAC</span>
</a>
<p className="text-lg text-slate-400 leading-relaxed mb-6">
                        Laredo's most trusted choice for residential and commercial heating and cooling services.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-yellow hover:text-slate-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-yellow hover:text-slate-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div>
<h4 className="text-white font-semibold text-xl mb-6 tracking-tight">Services</h4>
<ul className="space-y-4">
<li><a className="text-lg text-slate-400 hover:text-brand-yellow transition-colors" href="#">AC Repair</a></li>
<li><a className="text-lg text-slate-400 hover:text-brand-yellow transition-colors" href="#">AC Installation</a></li>
<li><a className="text-lg text-slate-400 hover:text-brand-yellow transition-colors" href="#">Heating Services</a></li>
<li><a className="text-lg text-slate-400 hover:text-brand-yellow transition-colors" href="#">HVAC Maintenance</a></li>
</ul>
</div>

<div className="lg:col-span-2">
<h4 className="text-white font-semibold text-xl mb-6 tracking-tight">Contact Info</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6">
<div className="space-y-4">
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-brand-yellow shrink-0 mt-1" data-lucide="map-pin" strokeWidth="1.5"></i>
<p className="text-lg text-slate-400">
                                    5208 Brewster Dr<br/>
                                    Laredo, TX 78043
                                </p>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-brand-yellow shrink-0" data-lucide="phone" strokeWidth="1.5"></i>
<a className="text-lg text-slate-400 hover:text-white transition-colors" href="tel:9562379510">(956) 237-9510</a>
</div>
</div>

<div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 shadow-sm">
<div className="flex items-center gap-3 mb-5">
<div className="bg-brand-yellow/10 p-2 rounded-lg">
<i className="w-5 h-5 text-brand-yellow" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h4 className="text-white font-semibold tracking-tight text-lg m-0">Hours of Operation</h4>
</div>
<ul className="space-y-3">
<li className="flex justify-between items-center text-slate-400 border-b border-slate-700/50 pb-3">
<span className="text-base">Monday - Friday</span>
<span className="text-white font-medium text-base">8:00 AM - 6:00 PM</span>
</li>
<li className="flex justify-between items-center text-slate-400 border-b border-slate-700/50 pb-3">
<span className="text-base">Saturday</span>
<span className="text-white font-medium text-base">9:00 AM - 2:00 PM</span>
</li>
<li className="flex justify-between items-center text-slate-400">
<span className="text-base">Sunday</span>
<span className="text-brand-yellow font-medium text-base">Closed</span>
</li>
</ul>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-500 text-lg">© 2024 Fred's Air Conditioning and Heating. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white text-lg transition-colors" href="#">Privacy Policy</a>
<a className="text-slate-500 hover:text-white text-lg transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
