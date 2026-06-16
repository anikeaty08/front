import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
navy: '#0A2A4A',
orange: '#E76F1D',
charcoal: '#1F1F1F',
offwhite: '#F9FAFB',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="glass-nav fixed w-full z-50 border-b border-gray-100 top-0 left-0">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:water-drops-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight text-navy uppercase">The Real McCoy</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-gray-600 hover:text-navy transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-600 hover:text-navy transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-gray-600 hover:text-navy transition-colors" href="#area">Service Area</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-navy font-medium text-sm" href="tel:+13162852355">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                        (316) 285-2355
                    </a>
<a className="bg-orange hover:bg-orange/90 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-lg shadow-orange/20 flex items-center gap-2" href="#contact">
<span>Get a Quote</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-offwhite">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/5 text-navy text-xs font-medium mb-6 border border-navy/10">
<iconify-icon icon="solar:verified-check-linear" width="14"></iconify-icon>
                        Licensed &amp; Insured in Wichita, KS
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy leading-[1.1] tracking-tight mb-6">
                        Trusted Plumbing &amp; Maintenance You Can Count On.
                    </h1>
<p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                        Locally owned and operated. We provide honest, high-quality plumbing services for residential and commercial properties in Wichita.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-navy text-white px-8 py-3.5 rounded-xl text-base font-medium hover:bg-navy/90 transition-all flex justify-center items-center gap-2 shadow-xl shadow-navy/20" href="tel:+13162852355">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                            Call (316) 285-2355
                        </a>
<a className="bg-white text-navy border border-gray-200 px-8 py-3.5 rounded-xl text-base font-medium hover:bg-gray-50 hover:border-gray-300 transition-all flex justify-center items-center" href="#contact">
                            Book Service
                        </a>
</div>

<div className="mt-10 flex items-center gap-4">
<div className="flex -space-x-2">
<div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">JP</div>
<div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">MR</div>
<div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">AL</div>
</div>
<div className="flex flex-col">
<div className="flex text-orange text-sm gap-0.5">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700">5.0 Star Rating (48 Reviews)</span>
</div>
</div>
</div>

<div className="relative h-full min-h-[400px] w-full bg-gray-200 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group">
<img alt="Professional Plumber" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-8">
<div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl inline-flex items-center gap-3 text-white">
<div className="bg-orange rounded-full p-2 text-white flex">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-white/80 uppercase tracking-wider font-semibold">Peace of Mind</p>
<p className="text-sm font-medium">Licensed &amp; Insured Professionals</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-navy tracking-tight mb-4">Complete Plumbing &amp; Maintenance</h2>
<p className="text-gray-500">From emergency repairs to routine maintenance, The Real McCoy delivers quality workmanship on every job.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-offwhite border border-gray-100 hover:border-orange hover:shadow-xl hover:shadow-orange/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy mb-2">Residential &amp; Commercial</h3>
<p className="text-sm text-gray-500 mb-4 leading-relaxed">Full-service plumbing solutions for homes and businesses. Leaks, pipes, and new installations.</p>
<a className="inline-flex items-center text-sm font-medium text-navy group-hover:text-orange transition-colors" href="#contact">
                        Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl bg-offwhite border border-gray-100 hover:border-orange hover:shadow-xl hover:shadow-orange/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:water-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy mb-2">Drain Cleaning</h3>
<p className="text-sm text-gray-500 mb-4 leading-relaxed">Expert drain cleaning and grease trap services to keep your systems flowing smoothly.</p>
<a className="inline-flex items-center text-sm font-medium text-navy group-hover:text-orange transition-colors" href="#contact">
                        Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl bg-offwhite border border-gray-100 hover:border-orange hover:shadow-xl hover:shadow-orange/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:home-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy mb-2">Property Maintenance</h3>
<p className="text-sm text-gray-500 mb-4 leading-relaxed">Comprehensive maintenance services for landlords, property managers, and homeowners.</p>
<a className="inline-flex items-center text-sm font-medium text-navy group-hover:text-orange transition-colors" href="#contact">
                        Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl bg-offwhite border border-gray-100 hover:border-orange hover:shadow-xl hover:shadow-orange/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy mb-2">Septic Services</h3>
<p className="text-sm text-gray-500 mb-4 leading-relaxed">Professional septic pumping, maintenance, and inspection services to prevent backups.</p>
<a className="inline-flex items-center text-sm font-medium text-navy group-hover:text-orange transition-colors" href="#contact">
                        Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl bg-offwhite border border-gray-100 hover:border-orange hover:shadow-xl hover:shadow-orange/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:flame-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy mb-2">Water Heaters</h3>
<p className="text-sm text-gray-500 mb-4 leading-relaxed">Repair, replacement, and installation of traditional and tankless water heater systems.</p>
<a className="inline-flex items-center text-sm font-medium text-navy group-hover:text-orange transition-colors" href="#contact">
                        Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl bg-offwhite border border-gray-100 hover:border-orange hover:shadow-xl hover:shadow-orange/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wrench-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy mb-2">Fixture Repair</h3>
<p className="text-sm text-gray-500 mb-4 leading-relaxed">Leaky faucets, running toilets, showerheads, and garbage disposal replacements.</p>
<a className="inline-flex items-center text-sm font-medium text-navy group-hover:text-orange transition-colors" href="#contact">
                        Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-navy text-white overflow-hidden relative" id="reviews">

<div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-20"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">Why Wichita Chooses<br/>The Real McCoy</h2>
<p className="text-gray-300 mb-8 text-lg">We believe in old-fashioned customer service combined with modern plumbing solutions. No hidden fees, no surprises.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-orange flex-shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-gray-200">Consistent 5-Star reputation across Google &amp; Facebook</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange flex-shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-gray-200">Fully licensed and insured for your protection</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange flex-shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-gray-200">Fast response times and flexible scheduling</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange flex-shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-gray-200">Honest, upfront estimates before work begins</span>
</li>
</ul>
<div className="mt-10 pt-10 border-t border-white/10">
<p className="text-sm text-gray-400 uppercase tracking-widest font-medium mb-4">What our customers say</p>
<blockquote className="text-xl font-medium leading-relaxed">
                            "Absolutely the best plumbing service in Wichita. They were on time, professional, and fixed our water heater issues quickly. Highly recommended!"
                        </blockquote>
<div className="mt-4 flex items-center gap-2">
<span className="font-semibold text-orange">Sarah J.</span>
<span className="text-gray-500 text-sm">• Local Customer</span>
</div>
</div>
</div>
<div className="relative">
<div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/10 transform rotate-1">
<div className="grid grid-cols-2 gap-2">

<img alt="Work 1" className="rounded-xl w-full h-48 object-cover" src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<img alt="Work 2" className="rounded-xl w-full h-48 object-cover" src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<img alt="Work 3" className="rounded-xl w-full h-48 object-cover col-span-2" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-offwhite border-b border-gray-200" id="area">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-600 text-xs font-medium mb-6">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                Local Service Area
            </div>
<h2 className="text-3xl font-semibold text-navy mb-4">Serving Wichita &amp; Surroundings</h2>
<p className="text-gray-600 max-w-2xl mx-auto mb-8">We are proud to serve our local community. Whether you are in downtown Wichita, Eastborough, Maize, or Goddard, we are just a phone call away.</p>
<div className="flex flex-wrap justify-center gap-3">
<span className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 font-medium">Wichita</span>
<span className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 font-medium">Derby</span>
<span className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 font-medium">Andover</span>
<span className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 font-medium">Bel Aire</span>
<span className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 font-medium">Goddard</span>
<span className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 font-medium">Maize</span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12 border border-gray-100 rounded-3xl overflow-hidden shadow-2xl shadow-gray-100">

<div className="lg:col-span-5 bg-navy p-10 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<h2 className="text-3xl font-semibold text-white mb-6">Get in Touch</h2>
<p className="text-gray-300 mb-8">Need a quote or emergency service? Fill out the form or give us a call directly. We respond quickly.</p>
<div className="space-y-6">
<a className="flex items-center gap-4 text-white group" href="tel:+13162852355">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-orange transition-colors">
<iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-400 uppercase font-medium">Call Us Now</p>
<p className="text-lg font-medium">+1 (316) 285-2355</p>
</div>
</a>
<div className="flex items-center gap-4 text-white">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-400 uppercase font-medium">Location</p>
<p className="text-lg font-medium">Wichita, Kansas</p>
</div>
</div>
<a className="flex items-center gap-4 text-white group" href="https://www.facebook.com/p/The-Real-McCoy-Plumbing-LLC-100057662940675/" target="_blank">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#1877F2] transition-colors">
<iconify-icon icon="brandico:facebook" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-400 uppercase font-medium">Follow Us</p>
<p className="text-lg font-medium">Facebook Page</p>
</div>
</a>
</div>
</div>
<div className="relative z-10 mt-12">
<div className="p-4 bg-white/10 rounded-xl border border-white/10">
<p className="text-sm text-gray-200 flex items-center gap-2">
<iconify-icon className="text-orange" icon="solar:clock-circle-linear"></iconify-icon>
                                Available for same-day service
                            </p>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-white p-8 lg:p-12">
<form action="#" className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-gray-700" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-all bg-gray-50 text-sm" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-700" htmlFor="phone">Phone Number</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-all bg-gray-50 text-sm" id="phone" placeholder="(316) 555-0123" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-700" htmlFor="service">Service Needed</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-all bg-gray-50 text-sm appearance-none" id="service">
<option>General Plumbing Repair</option>
<option>Drain Cleaning</option>
<option>Water Heater Service</option>
<option>Septic Service</option>
<option>Maintenance Request</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-700" htmlFor="message">Message (Optional)</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-all bg-gray-50 text-sm resize-none" id="message" placeholder="Describe your issue..." rows="4"></textarea>
</div>
<button className="w-full bg-navy hover:bg-navy/90 text-white font-medium py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex justify-center items-center gap-2" type="button">
<span>Request Service</span>
<iconify-icon icon="solar:plain-3-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-navy rounded-md flex items-center justify-center text-white">
<iconify-icon icon="solar:water-drops-linear" width="18"></iconify-icon>
</div>
<span className="font-bold text-sm tracking-tight text-navy uppercase">The Real McCoy</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed mb-4">
                        Professional, licensed, and insured plumbing services for Wichita, KS and surrounding communities.
                    </p>
<div className="flex items-center gap-1 text-orange">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-xs text-gray-500 mt-1 font-medium">5.0/5 Rating (48 Reviews)</p>
</div>
<div>
<h3 className="font-semibold text-navy mb-4">Services</h3>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-orange transition-colors" href="#">Drain Cleaning</a></li>
<li><a className="hover:text-orange transition-colors" href="#">Water Heaters</a></li>
<li><a className="hover:text-orange transition-colors" href="#">Septic Pumping</a></li>
<li><a className="hover:text-orange transition-colors" href="#">Fixture Repair</a></li>
<li><a className="hover:text-orange transition-colors" href="#">Maintenance</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold text-navy mb-4">Company</h3>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-orange transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-orange transition-colors" href="#">Reviews</a></li>
<li><a className="hover:text-orange transition-colors" href="#">Service Area</a></li>
<li><a className="hover:text-orange transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold text-navy mb-4">Contact</h3>
<ul className="space-y-3 text-sm text-gray-500">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5" icon="solar:phone-linear" width="16"></iconify-icon>
<a className="hover:text-navy transition-colors" href="tel:+13162852355">+1 (316) 285-2355</a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>Wichita, KS</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5" icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span>Mon-Fri: 8am - 6pm</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2023 The Real McCoy Plumbing LLC. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-navy transition-colors" href="https://www.facebook.com/p/The-Real-McCoy-Plumbing-LLC-100057662940675/">
<iconify-icon icon="brandico:facebook-rect" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
