import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


document.write(new Date().getFullYear())
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex-shrink-0 flex items-center">
<a className="text-slate-900 font-semibold tracking-tighter text-lg leading-none uppercase" href="#">
                        Eckenrode<br/><span className="text-amber-700 text-sm tracking-tight">Hardscape and Design</span>
</a>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#work">Our Work</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center space-x-4">
<div className="hidden lg:flex items-center text-sm font-medium text-slate-900">
<iconify-icon className="mr-2 text-amber-700 text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                        440-387-9160
                    </div>
<a className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm" href="#estimate">
                        Free Estimate
                    </a>
</div>
</div>
</div>
</nav>

<div className="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0">
<img alt="Premium outdoor patio and hardscape" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=2075&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-medium text-slate-300 tracking-wide uppercase mb-6 backdrop-blur-sm">
                Avon, Ohio &amp; Surrounding Areas
            </span>
<h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-white mb-6 max-w-4xl mx-auto">
                Custom Outdoor Living Spaces Built to Last
            </h1>
<p className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                Expert fencing, patios, decks, and carpentry services. We transform ordinary backyards into premium outdoor destinations.
            </p>
<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-700 hover:bg-amber-800 shadow-sm transition-colors" href="#estimate">
                    Get a Free Estimate
                </a>
<a className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors" href="tel:4403879160">
<iconify-icon className="mr-2 text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                    Call or Text Now
                </a>
</div>
<p className="mt-6 text-sm text-slate-400 font-medium">
                440-387-9160
            </p>
</div>
</div>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Craftsmanship &amp; Services</h2>
<p className="mt-4 text-base text-slate-500 max-w-2xl mx-auto">Premium installations and designs tailored to your property.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-6 text-amber-700">
<iconify-icon height="24" icon="solar:home-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Fencing Installation</h3>
<p className="text-sm text-slate-500 leading-relaxed">Wood, privacy, and custom designs built for durability, security, and aesthetic appeal.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-6 text-amber-700">
<iconify-icon height="24" icon="solar:layers-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Patio Design &amp; Install</h3>
<p className="text-sm text-slate-500 leading-relaxed">Beautifully structured stone and paver patios that serve as the foundation of your outdoor living.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-6 text-amber-700">
<iconify-icon height="24" icon="solar:ruler-cross-pen-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Deck Building</h3>
<p className="text-sm text-slate-500 leading-relaxed">Custom wood and composite decks designed to expand your living space seamlessly into the outdoors.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-6 text-amber-700">
<iconify-icon height="24" icon="solar:armchair-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Outdoor Living Spaces</h3>
<p className="text-sm text-slate-500 leading-relaxed">Comprehensive transformations combining hardscaping, seating, and structure for the perfect retreat.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-6 text-amber-700">
<iconify-icon height="24" icon="solar:hammer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Carpentry Services</h3>
<p className="text-sm text-slate-500 leading-relaxed">Expert woodworking and structural additions, focusing on precision joints and lasting finishes.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-6 text-amber-700">
<iconify-icon height="24" icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Property Enhancements</h3>
<p className="text-sm text-slate-500 leading-relaxed">Targeted repairs and upgrades to maintain and elevate the value and beauty of your property.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
<div className="mb-12 lg:mb-0">
<span className="text-amber-700 font-semibold tracking-wide text-xs uppercase mb-3 block">Featured Service</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Expert Fencing Solutions</h2>
<p className="text-base text-slate-500 leading-relaxed mb-8">
                        A well-built fence does more than define property lines; it provides privacy, enhances security, and significantly boosts your home's curb appeal. We specialize in constructing high-quality, durable fences using premium materials and meticulous construction methods designed to withstand Ohio weather.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start">
<iconify-icon className="text-amber-700 mt-1 mr-3 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600 font-medium">Custom privacy and structural designs</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-amber-700 mt-1 mr-3 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600 font-medium">Premium wood and resilient materials</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-amber-700 mt-1 mr-3 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600 font-medium">Precision installation for longevity</span>
</li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors" href="#estimate">
                        Request a Fence Estimate
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
<img alt="High quality wood fence installation" className="w-full h-auto object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">The Eckenrode Standard</h2>
<p className="text-base text-slate-400 max-w-2xl mx-auto">We build things right the first time, bringing high-end craftsmanship to every residential project.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 border border-slate-700 text-amber-500">
<iconify-icon height="24" icon="solar:ruler-angular-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-slate-100 mb-2">Skilled Craftsmanship</h4>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 border border-slate-700 text-amber-500">
<iconify-icon height="24" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-slate-100 mb-2">Custom Approach</h4>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 border border-slate-700 text-amber-500">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-slate-100 mb-2">Reliable &amp; Professional</h4>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 border border-slate-700 text-amber-500">
<iconify-icon height="24" icon="solar:eye-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-slate-100 mb-2">Attention to Detail</h4>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 border border-slate-700 text-amber-500">
<iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-slate-100 mb-2">Local Ohio Contractor</h4>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="work">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Craftsmanship You Can See</h2>
<p className="text-base text-slate-500">Browse a selection of our recent transformations across Cuyahoga and Lorain counties.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group relative rounded-xl overflow-hidden bg-slate-100 aspect-square">
<img alt="Custom deck build" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white text-sm font-medium">Custom Deck &amp; Railing</span>
</div>
</div>
<div className="group relative rounded-xl overflow-hidden bg-slate-100 aspect-square">
<img alt="Patio and hardscaping" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white text-sm font-medium">Stone Patio Installation</span>
</div>
</div>
<div className="group relative rounded-xl overflow-hidden bg-slate-100 aspect-square md:col-span-2 lg:col-span-1">
<img alt="Privacy fence and landscaping" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white text-sm font-medium">Privacy Fence &amp; Landscape</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="estimate">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-12 lg:gap-16">

<div className="lg:col-span-5 mb-12 lg:mb-0">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Request Your Free Estimate</h2>
<p className="text-base text-slate-500 mb-8 leading-relaxed">
                        Ready to upgrade your outdoor space? Fill out the form to tell us about your project, or reach out directly. We aim to respond promptly to get your project on our schedule.
                    </p>
<div className="space-y-6">
<div className="flex items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="ml-4">
<h4 className="text-sm font-semibold text-slate-900">Location</h4>
<p className="text-sm text-slate-500 mt-1">Avon, Ohio</p>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:routing-2-linear" width="20"></iconify-icon>
</div>
<div className="ml-4">
<h4 className="text-sm font-semibold text-slate-900">Service Areas</h4>
<p className="text-sm text-slate-500 mt-1">Cuyahoga County, Lorain County, and surrounding areas.</p>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div className="ml-4">
<h4 className="text-sm font-semibold text-slate-900">Availability</h4>
<p className="text-sm text-slate-500 mt-1">Call or text for scheduling.</p>
<a className="text-sm font-medium text-amber-700 hover:text-amber-800 mt-1 inline-block" href="tel:4403879160">440-387-9160</a>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-2" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-colors" id="name" name="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2" htmlFor="phone">Phone Number</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-colors" id="phone" name="phone" placeholder="(440) 123-4567" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-2" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-colors" id="email" name="email" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2" htmlFor="date">Preferred Start Date</label>
<div className="relative">
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-colors appearance-none" id="date" name="date" type="date"/>

<iconify-icon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none sm:hidden" icon="solar:calendar-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2" htmlFor="service">Select Service</label>
<select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-colors cursor-pointer" id="service" name="service">
<option disabled="" selected="" value="">Choose a service...</option>
<option value="fencing">Fencing Installation</option>
<option value="patio">Patio Design &amp; Install</option>
<option value="deck">Deck Building</option>
<option value="carpentry">Carpentry Services</option>
<option value="other">Other / General Inquiry</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2" htmlFor="details">Project Details</label>
<textarea className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-colors resize-y" id="details" name="details" placeholder="Briefly describe what you're looking to build..." rows="4"></textarea>
</div>
<button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-colors" type="submit">
                                Get My Free Estimate
                            </button>
<p className="text-xs text-center text-slate-500 mt-4">
                                Prefer to talk? Call or text anytime for fast scheduling.
                            </p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">What Our Clients Say</h2>
<p className="mt-4 text-base text-slate-500">Real feedback from homeowners across Ohio.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
<div className="flex text-amber-500 mb-4 space-x-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-sm text-slate-700 italic mb-6 leading-relaxed">"Amazing fence work. Professional and built exactly what we wanted. Highly recommend Eckenrode."</p>
<p className="text-xs font-semibold text-slate-900 uppercase tracking-wide">– Homeowner</p>
</div>

<div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
<div className="flex text-amber-500 mb-4 space-x-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-sm text-slate-700 italic mb-6 leading-relaxed">"Our patio turned out perfect. Great attention to detail and they left the site completely clean."</p>
<p className="text-xs font-semibold text-slate-900 uppercase tracking-wide">– Client</p>
</div>

<div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
<div className="flex text-amber-500 mb-4 space-x-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-sm text-slate-700 italic mb-6 leading-relaxed">"Reliable, skilled, and easy to work with from the initial estimate to the final walk-through."</p>
<p className="text-xs font-semibold text-slate-900 uppercase tracking-wide">– Customer</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 py-20 border-t border-slate-800">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Ready to Upgrade Your Outdoor Space?</h2>
<p className="text-base text-slate-400 mb-10 max-w-2xl mx-auto">Call or text today for a free estimate and bring your vision to life.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-white hover:bg-slate-100 shadow-sm transition-colors" href="tel:4403879160">
<iconify-icon className="mr-2 text-lg text-amber-700" icon="solar:phone-calling-linear"></iconify-icon>
                    Call Now (440-387-9160)
                </a>
<a className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 transition-colors" href="#estimate">
                    Request Estimate
                </a>
</div>
</div>
</section>

<footer className="bg-slate-950 py-12 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="mb-6 md:mb-0 text-center md:text-left">
<span className="text-white font-semibold tracking-tighter text-lg leading-none uppercase block mb-1">
                        ECKENRODE
                    </span>
<span className="text-amber-700 text-xs tracking-tight uppercase block mb-4">
                        Hardscape and Design
                    </span>
<p className="text-xs text-slate-500">Custom Outdoor Living | Quality Craftsmanship | Free Estimates Available</p>
</div>
<div className="flex space-x-6 mb-6 md:mb-0">
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Home</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#estimate">Contact</a>
</div>
</div>
<div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-xs text-slate-500">
                    ©  Eckenrode Hardscape and Design. All rights reserved.
                </p>
<p className="text-xs text-slate-500 mt-2 md:mt-0 flex items-center">
<iconify-icon className="mr-1" icon="solar:phone-calling-linear"></iconify-icon> 440-387-9160
                </p>
</div>
</div>
</footer>

    </>
  );
}
