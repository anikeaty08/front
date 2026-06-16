import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
},
colors: {
zinc: {
50: '#fafafa',
100: '#f4f4f5',
200: '#e4e4e7',
300: '#d4d4d8',
400: '#a1a1aa',
500: '#71717a',
600: '#52525b',
700: '#3f3f46',
800: '#27272a',
900: '#18181b',
950: '#09090b',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
normal: '-0.01em',
wide: '0.02em',
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<span className="font-medium text-sm">R</span>
</div>
<span className="text-zinc-900 font-medium tracking-tight">RyanAppliances</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#areas">Areas</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#process">Process</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900" href="tel:+27210000000">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    021 123 4567
                </a>
<a className="bg-zinc-900 text-white text-xs font-medium px-4 py-2.5 rounded-full hover:bg-zinc-800 transition-colors shadow-sm shadow-zinc-200 tracking-wide" href="#book">
                    Book Repair
                </a>
</div>
</div>
</nav>

<main className="flex-grow pt-32 pb-16 md:pt-40 md:pb-24 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Available for same-day repairs in Cape Town
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-zinc-900 tracking-tight leading-[1.1] mb-6">
                Appliance repair made <br className="hidden md:block"/>
<span className="text-zinc-400">simple and reliable.</span>
</h1>
<p className="text-lg text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                We fix fridges, washing machines, ovens, and more across Cape Town. From the City Bowl to the Northern Suburbs, get your appliances running again today.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 text-white font-medium rounded-full hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-zinc-200/50 text-sm" href="#book">
                    Schedule a Technician
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-zinc-200 text-zinc-600 font-medium rounded-full hover:bg-zinc-50 transition-all flex items-center justify-center gap-2 text-sm" href="#services">
                    View Services
                </a>
</div>

<div className="mt-16 pt-8 border-t border-zinc-100">
<p className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest mb-6">Servicing Major Areas</p>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-zinc-500 font-normal">
<span>Sea Point</span>
<span className="text-zinc-200">•</span>
<span>Gardens</span>
<span className="text-zinc-200">•</span>
<span>Claremont</span>
<span className="text-zinc-200">•</span>
<span>Durbanville</span>
<span className="text-zinc-200">•</span>
<span>Table View</span>
<span className="text-zinc-200">•</span>
<span>Constantia</span>
</div>
</div>
</div>
</main>

<section className="py-24 bg-zinc-50/50 border-y border-zinc-100" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium text-zinc-900 tracking-tight mb-3">Expert Repairs</h2>
<p className="text-zinc-500 font-light">Specialized technicians for every household need.</p>
</div>
<a className="text-sm font-medium text-zinc-900 flex items-center gap-1 hover:opacity-70 transition-opacity" href="#book">
                    See full pricing
                    <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl border border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-300 transition-all duration-300 overflow-hidden flex flex-col">
<div className="h-48 overflow-hidden relative bg-zinc-100">
<img alt="Washing Machine Repair" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1626806775807-4d5477d37bff?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:washing-machine-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Washing Machines</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Top loaders, front loaders, and washer-dryer combos. We fix leaks, spin cycles, and electronic faults.</p>
</div>
</div>

<div className="group bg-white rounded-xl border border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-300 transition-all duration-300 overflow-hidden flex flex-col">
<div className="h-48 overflow-hidden relative bg-zinc-100">
<img alt="Fridge Repair" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1571175443880-49e1d58b794a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:fridge-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Fridges &amp; Freezers</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Temperature control, regassing, and compressor repairs for all major brands including Samsung and LG.</p>
</div>
</div>

<div className="group bg-white rounded-xl border border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-300 transition-all duration-300 overflow-hidden flex flex-col">
<div className="h-48 overflow-hidden relative bg-zinc-100">
<img alt="Oven Repair" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:flame-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Ovens &amp; Stoves</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Element replacements, thermostat repairs, and fan fixes for electric ovens and hobs.</p>
</div>
</div>

<div className="group bg-white rounded-xl border border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-300 transition-all duration-300 overflow-hidden flex flex-col">
<div className="h-48 overflow-hidden relative bg-zinc-100">
<img alt="Dishwasher Repair" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1585837134312-bf9d6e4be328?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:dishwasher-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Dishwashers</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Fixing drainage issues, wash quality problems, and electronic errors quickly and efficiently.</p>
</div>
</div>

<div className="group bg-white rounded-xl border border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-300 transition-all duration-300 overflow-hidden flex flex-col">
<div className="h-48 overflow-hidden relative bg-zinc-100">
<img alt="Dryer Repair" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1545173168-9f1947eebb8f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:tumble-dryer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Tumble Dryers</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Belt replacements, heating issues, and drum repairs to get your laundry dry again.</p>
</div>
</div>

<div className="group bg-white rounded-xl border border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-300 transition-all duration-300 overflow-hidden flex flex-col">
<div className="h-48 overflow-hidden relative bg-zinc-100">
<img alt="Maintenance Tools" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="w-10 h-10 rounded-lg bg-zinc-100 text-zinc-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">General Maintenance</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Preventative servicing and seals for appliances to extend their lifespan and efficiency.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-100 text-center">
<div className="p-4">
<div className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight mb-1">10+</div>
<div className="text-xs font-medium uppercase tracking-wide text-zinc-400">Years Experience</div>
</div>
<div className="p-4">
<div className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight mb-1">5k+</div>
<div className="text-xs font-medium uppercase tracking-wide text-zinc-400">Repairs Done</div>
</div>
<div className="p-4">
<div className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight mb-1">6</div>
<div className="text-xs font-medium uppercase tracking-wide text-zinc-400">Month Warranty</div>
</div>
<div className="p-4">
<div className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight mb-1">24h</div>
<div className="text-xs font-medium uppercase tracking-wide text-zinc-400">Turnaround Time</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-zinc-300" id="book">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="space-y-10">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Book a Repair</h2>
<p className="text-zinc-400 text-lg font-light leading-relaxed">Fill out the form and our team will get back to you within 30 minutes to confirm your appointment.</p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white shrink-0 border border-zinc-700">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1 text-sm">Service Area</h4>
<p className="text-sm text-zinc-400 font-light">Cape Town City Bowl, Atlantic Seaboard, Southern Suburbs, Northern Suburbs.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white shrink-0 border border-zinc-700">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1 text-sm">Working Hours</h4>
<p className="text-sm text-zinc-400 font-light">Mon - Fri: 08:00 - 17:00<br/>Sat: 09:00 - 13:00</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 shadow-2xl shadow-black/20">
<form className="space-y-5 text-zinc-900">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Name</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all placeholder:text-zinc-300" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Phone</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all placeholder:text-zinc-300" placeholder="082 123 4567" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Appliance Type</label>
<div className="relative">
<select className="w-full appearance-none bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all text-zinc-700">
<option disabled="" selected="" value="">Select an appliance...</option>
<option value="fridge">Fridge / Freezer</option>
<option value="washing_machine">Washing Machine</option>
<option value="dishwasher">Dishwasher</option>
<option value="oven">Oven / Stove</option>
<option value="dryer">Tumble Dryer</option>
<option value="other">Other</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 flex">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Suburb</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all placeholder:text-zinc-300" placeholder="e.g. Sea Point" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Issue Description</label>
<textarea className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all placeholder:text-zinc-300 resize-none" placeholder="Briefly describe the problem..." rows="3"></textarea>
</div>

<div className="flex items-start gap-3 pt-2">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only custom-checkbox" type="checkbox"/>
<div className="w-5 h-5 border border-zinc-300 rounded bg-white transition-all peer-focus:ring-2 peer-focus:ring-offset-1 peer-focus:ring-zinc-900 flex items-center justify-center text-white">
<svg className="w-3 h-3 hidden" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
<span className="text-xs text-zinc-500 leading-snug font-light">I agree to the <a className="underline underline-offset-2 hover:text-zinc-900 text-zinc-600" href="#">terms of service</a> and cancellation policy.</span>
</div>
<button className="w-full bg-zinc-900 text-white font-medium py-3.5 rounded-lg hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10 flex items-center justify-center gap-2 mt-4 text-sm group" type="button">
                            Confirm Booking
                            <span className="group-hover:translate-x-0.5 transition-transform">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</span>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 py-16">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1 pr-8">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-zinc-900 rounded text-white flex items-center justify-center">
<span className="font-bold text-xs">R</span>
</div>
<span className="font-semibold text-zinc-900 tracking-tight">RyanAppliances</span>
</div>
<p className="text-sm text-zinc-500 mb-4 font-light leading-relaxed">Professional, reliable appliance repair services across the Cape Peninsula. Same-day service available.</p>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Services</h4>
<ul className="space-y-2.5 text-sm text-zinc-500 font-light">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Fridge Repair</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Washing Machines</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Ovens &amp; Stoves</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Dishwashers</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Areas</h4>
<ul className="space-y-2.5 text-sm text-zinc-500 font-light">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Atlantic Seaboard</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">City Bowl</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Southern Suburbs</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Northern Suburbs</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Contact</h4>
<ul className="space-y-2.5 text-sm text-zinc-500 font-light">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                            021 123 4567
                        </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                            info@ryanappliances.co.za
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-400 font-light">© 2023 RyanAppliances. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
