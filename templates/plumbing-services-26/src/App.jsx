import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="absolute top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-900/30 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<span className="text-xl font-medium tracking-tight">RDL Plumbing Inc.</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-white hover:text-orange-400 transition-colors" href="#">Home</a>
</div>
<button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-normal transition-all flex items-center gap-2">
                (559) 362-4291
                <iconify-icon height="16" icon="solar:phone-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-[850px] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="RDL Plumbing Background" className="w-full h-full object-cover" src="https://rdlplumbing.com/wp-content/uploads/2017/08/cropped-ryans-Copy-2.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-sky-950/95 via-sky-900/90 to-sky-900/60"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<span className="text-orange-400 font-normal tracking-wide uppercase text-sm">#Military &amp; Law Enforcement Discounts</span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    Trusted Family-Owned Plumber in Hanford, CA.
                </h1>
<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-sky-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-sky-900" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-sky-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div>
<div className="flex items-center gap-2">
<span className="text-3xl font-medium text-white">4.9</span>
<div className="flex text-orange-500">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
</div>
<p className="text-slate-300 text-sm">Top rated service by our local neighbors</p>
</div>
</div>
</div>

<div className="glass-panel p-8 md:p-10 rounded-2xl text-white">
<h3 className="text-2xl font-medium tracking-tight mb-2">Request a service</h3>
<p className="text-slate-300 text-sm mb-8">Call RDL Plumbing Inc. today for fast, dependable service or book an appointment right here.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-normal text-slate-300">First name</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-normal text-slate-300">Last name</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-normal text-slate-300">Email Address</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-normal text-slate-300">Phone No</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-normal text-slate-300">Address</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="text"/>
</div>
<div className="space-y-1 relative">
<label className="text-xs font-normal text-slate-300">Choice Service</label>
<select className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm appearance-none text-white">
<option className="text-slate-900">Plumbing Repair</option>
<option className="text-slate-900">Hydro Jetting</option>
<option className="text-slate-900">Water Heater</option>
</select>
<iconify-icon className="absolute right-0 bottom-3 text-slate-300 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-1 pt-2">
<label className="text-xs font-normal text-slate-300">Write your message</label>
<textarea className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm resize-none" rows="1"></textarea>
</div>
<button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-normal py-3 rounded-full mt-4 transition-colors" type="button">
                        Request a service
                    </button>
</form>
</div>
</div>
</header>

<div className="bg-sky-950 py-6 overflow-hidden flex whitespace-nowrap">
<div className="flex items-center gap-12 text-white font-medium text-xl md:text-2xl tracking-tight animate-marquee shrink-0 min-w-full justify-center px-6">
<span>Hydro Jetting</span>
<span className="text-orange-500">•</span>
<span>Drain Cleaning</span>
<span className="text-orange-500">•</span>
<span>Water Heaters</span>
<span className="text-orange-500">•</span>
<span>Garbage Disposals</span>
<span className="text-orange-500">•</span>
<span>Sewer Line Services</span>
</div>
<div className="flex items-center gap-12 text-white font-medium text-xl md:text-2xl tracking-tight animate-marquee shrink-0 min-w-full justify-center px-6">
<span>Hydro Jetting</span>
<span className="text-orange-500">•</span>
<span>Drain Cleaning</span>
<span className="text-orange-500">•</span>
<span>Water Heaters</span>
<span className="text-orange-500">•</span>
<span>Garbage Disposals</span>
<span className="text-orange-500">•</span>
<span>Sewer Line Services</span>
</div>
</div>

<section className="py-20 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:border-r border-slate-200">
<p className="text-4xl md:text-5xl font-medium text-sky-900 mb-2">100<span className="text-orange-500 text-2xl align-top">%</span></p>
<p className="text-slate-500 text-sm font-normal">Customer satisfaction</p>
</div>
<div className="text-center md:border-r border-slate-200">
<p className="text-4xl md:text-5xl font-medium text-sky-900 mb-2">10K<span className="text-orange-500 text-2xl align-top">+</span></p>
<p className="text-slate-500 text-sm font-normal">Repairs Completed</p>
</div>
<div className="text-center md:border-r border-slate-200">
<p className="text-4xl md:text-5xl font-medium text-sky-900 mb-2">15<span className="text-orange-500 text-2xl align-top">+</span></p>
<p className="text-slate-500 text-sm font-normal">Years Experience</p>
</div>
<div className="text-center">
<p className="text-4xl md:text-5xl font-medium text-sky-900 mb-2">100<span className="text-orange-500 text-2xl align-top">%</span></p>
<p className="text-slate-500 text-sm font-normal">Family Owned &amp; Operated</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full mb-4">OUR SERVICES</span>
<h2 className="text-3xl md:text-4xl font-medium text-sky-950 tracking-tight mb-4">
                    Comprehensive Plumbing Services for Hanford, CA.
                </h2>
<p className="text-lg text-slate-500 leading-relaxed">
                    From stubborn clogs to complex sewer problems, we have the tools, expertise, and dedication to get the job done right the first time.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-normal text-sm mb-4 block">01.</span>
<div className="mb-6">
<iconify-icon className="text-sky-700" height="40" icon="solar:waterdrops-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Hydro Jetting</h3>
<p className="text-slate-500 leading-relaxed">Residential and commercial hydro jetting to blast through the toughest build-ups.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-normal text-sm mb-4 block">02.</span>
<div className="mb-6">
<iconify-icon className="text-sky-700" height="40" icon="solar:bath-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Drain Cleaning</h3>
<p className="text-slate-500 leading-relaxed">Effective drain cleaning to resolve stubborn clogs and restore optimal water flow.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-normal text-sm mb-4 block">03.</span>
<div className="mb-6">
<iconify-icon className="text-sky-700" height="40" icon="solar:settings-minimalistic-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Water Heaters</h3>
<p className="text-slate-500 leading-relaxed">Expert water heater repair and installation for consistent, reliable hot water.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-normal text-sm mb-4 block">04.</span>
<div className="mb-6">
<iconify-icon className="text-sky-700" height="40" icon="solar:home-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Sinks, Toilets &amp; Fixtures</h3>
<p className="text-slate-500 leading-relaxed">Installation and repair of garbage disposals, sinks, toilets, and modern fixtures.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-normal text-sm mb-4 block">05.</span>
<div className="mb-6">
<iconify-icon className="text-sky-700" height="40" icon="solar:ruler-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Sewer Line Services &amp; Trenching</h3>
<p className="text-slate-500 leading-relaxed">Sewer line services, pipe locating, and trenching for new water service and line replacement.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full mb-4">FAQ</span>
<h2 className="text-3xl md:text-4xl font-medium text-sky-950 tracking-tight">
                    Frequently asked questions
                </h2>
<p className="text-slate-500 mt-4 text-lg">Find clear answers to common questions about our services, pricing, and scheduling process.</p>
</div>
<div className="space-y-4">

<div className="bg-slate-100 rounded-lg p-6">
<div className="flex justify-between items-start cursor-pointer">
<h3 className="font-medium text-sky-950 text-lg">Do you offer discounts for military and law enforcement?</h3>
<iconify-icon className="text-slate-400" height="20" icon="solar:close-square-linear" width="20"></iconify-icon>
</div>
<p className="mt-3 text-slate-500 leading-relaxed font-normal">
                        Yes, at RDL Plumbing Inc. we proudly offer military and law enforcement discounts as a thank you for your service to our community and country.
                    </p>
</div>

<div className="bg-slate-100 rounded-lg p-6">
<div className="flex justify-between items-start cursor-pointer">
<h3 className="font-medium text-sky-950 text-lg">What areas do you serve?</h3>
<iconify-icon className="text-slate-400" height="20" icon="solar:close-square-linear" width="20"></iconify-icon>
</div>
<p className="mt-3 text-slate-500 leading-relaxed font-normal">
                        We proudly serve Hanford, CA, and the surrounding communities. Please give us a call to confirm if we provide service in your specific neighborhood.
                    </p>
</div>

<div className="bg-slate-100 rounded-lg p-6">
<div className="flex justify-between items-start cursor-pointer">
<h3 className="font-medium text-sky-950 text-lg">Do you perform commercial hydro jetting?</h3>
<iconify-icon className="text-slate-400" height="20" icon="solar:close-square-linear" width="20"></iconify-icon>
</div>
<p className="mt-3 text-slate-500 leading-relaxed font-normal">
                        Yes, we offer professional hydro jetting services for both residential and commercial properties to safely blast through the toughest pipe build-ups.
                    </p>
</div>

<div className="bg-slate-100 rounded-lg p-6">
<div className="flex justify-between items-start cursor-pointer">
<h3 className="font-medium text-sky-950 text-lg">Can you handle sewer line replacement?</h3>
<iconify-icon className="text-slate-400" height="20" icon="solar:close-square-linear" width="20"></iconify-icon>
</div>
<p className="mt-3 text-slate-500 leading-relaxed font-normal">
                        Absolutely. We specialize in comprehensive sewer line services, including pipe locating, trenching, expert repairs, and complete line replacements.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div>
<span className="inline-block bg-sky-100 text-sky-700 text-xs font-medium px-3 py-1 rounded-full mb-6">ABOUT US</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-sky-950 tracking-tight leading-tight mb-8">
                    Welcome to RDL Plumbing Inc.
                </h2>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
                    At RDL Plumbing Inc. we proudly offer military and law enforcement discounts as a thank you for your service. As a family-owned business we treat every customer like a neighbor. With years of experience, we understand the importance of time efficiency and strive to give you the best service in a timely manner.
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-white" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-xl text-sky-900 font-normal">Honest &amp; Reliable Service</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-white" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-xl text-sky-900 font-normal">Family-Owned &amp; Operated</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-white" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-xl text-sky-900 font-normal">Affordable Pricing</span>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-orange-500"></div>
<h3 className="text-2xl font-medium text-sky-950 mb-8 tracking-tight">Contact Information</h3>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-sky-600" height="24" icon="solar:phone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-400 mb-1">Give Us A Call</h4>
<p className="text-lg font-medium text-sky-950">(559) 362-4291</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-sky-600" height="24" icon="solar:letter-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-400 mb-1">Send An Email</h4>
<p className="text-lg font-medium text-sky-950">rdlplumbinginc@gmail.com</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-sky-600" height="24" icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-400 mb-1">Service Area</h4>
<p className="text-lg font-medium text-sky-950 leading-snug">Hanford, CA &amp;<br/>Surrounding Areas</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full mb-4">TESTIMONIALS</span>
<h2 className="text-3xl md:text-4xl font-medium text-sky-950 tracking-tight">
                    What Our Neighbors Say
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
<iconify-icon className="text-slate-200 absolute top-6 right-6" height="40" icon="solar:quote-right-bold" width="40"></iconify-icon>
<div className="flex text-orange-500 mb-6 gap-1">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 leading-relaxed mb-8 font-normal text-sm">"RDL Plumbing provided fast and excellent service. They fixed our water heater issue the same day. Highly recommend their professional team to anyone needing plumbing work!"</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-sky-200 rounded-full flex items-center justify-center text-sky-800 font-medium text-sm">JS</div>
<div>
<h4 className="font-medium text-sky-950 text-sm">John S.</h4>
<p className="text-xs text-slate-400 font-normal">Hanford, CA</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
<iconify-icon className="text-slate-200 absolute top-6 right-6" height="40" icon="solar:quote-right-bold" width="40"></iconify-icon>
<div className="flex text-orange-500 mb-6 gap-1">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 leading-relaxed mb-8 font-normal text-sm">"Very honest and reliable. They cleared our tough drain clog quickly when other companies couldn't. Love supporting a local family-owned business in our community."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-sky-200 rounded-full flex items-center justify-center text-sky-800 font-medium text-sm">MR</div>
<div>
<h4 className="font-medium text-sky-950 text-sm">Maria R.</h4>
<p className="text-xs text-slate-400 font-normal">Lemoore, CA</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
<iconify-icon className="text-slate-200 absolute top-6 right-6" height="40" icon="solar:quote-right-bold" width="40"></iconify-icon>
<div className="flex text-orange-500 mb-6 gap-1">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 leading-relaxed mb-8 font-normal text-sm">"Appreciate the military discount! They came out and handled our sewer line issues perfectly. Affordable pricing and top-tier workmanship from start to finish."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-sky-200 rounded-full flex items-center justify-center text-sky-800 font-medium text-sm">DW</div>
<div>
<h4 className="font-medium text-sky-950 text-sm">David W.</h4>
<p className="text-xs text-slate-400 font-normal">Visalia, CA</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-sky-950 text-white pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<div className="flex items-center gap-2">
<span className="text-xl font-medium tracking-tight">RDL Plumbing Inc.</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed font-normal">
                        Welcome to RDL Plumbing Inc., your trusted family-owned plumbing company serving Hanford, CA and surrounding areas.
                    </p>
</div>

<div>
<h4 className="font-medium text-white mb-6">Quick Links</h4>
<ul className="space-y-4 text-sm text-slate-400 font-normal">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Home</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-white mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm text-slate-400 font-normal">
<li className="flex items-center gap-3">
<iconify-icon height="16" icon="solar:phone-linear" width="16"></iconify-icon>
                            (559) 362-4291
                        </li>
<li className="flex items-center gap-3">
<iconify-icon height="16" icon="solar:letter-linear" width="16"></iconify-icon>
                            rdlplumbinginc@gmail.com
                        </li>
</ul>
</div>

<div>
<h4 className="font-medium text-white mb-6">Service Area</h4>
<p className="text-sm text-slate-400 leading-relaxed font-normal">
                        Proudly Serving<br/>
                        Hanford, CA &amp; Surrounding Areas
                    </p>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500 font-normal">Copyright © 2025 RDL Plumbing Inc., All Rights Reserved.</p>
<div className="flex items-center gap-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon height="16" icon="solar:global-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
