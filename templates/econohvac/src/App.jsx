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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded bg-sky-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:wind-linear" width="20"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tighter text-slate-900">ECONO AIR</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#home">Home</a>
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#why-us">Why Us</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors" href="tel:+13615736671">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                (361) 573-6671
            </a>
<button className="md:hidden text-slate-600">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative bg-slate-900 overflow-hidden" id="home">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-medium mb-8 border border-sky-500/20">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                Proudly serving Victoria, TX &amp; the Crossroads
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-3xl mb-6">
                Keeping Victoria Cool Since Day One.
            </h1>
<p className="text-base md:text-lg text-slate-400 max-w-2xl mb-10">
                Fast, affordable, and honest HVAC service. No corporate gimmicks, just local experts working hard to keep your home comfortable year-round.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-medium text-base px-8 py-3.5 rounded-lg shadow-sm transition-all" href="tel:+13615736671">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    Call Now: (361) 573-6671
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium text-base px-8 py-3.5 rounded-lg border border-slate-700 transition-all" href="#services">
                    Our Services
                </a>
</div>
</div>
</header>

<section className="py-16 bg-white border-b border-slate-100" id="why-us">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 mb-4">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Licensed &amp; Insured</h3>
<p className="text-sm text-slate-500">Full peace of mind knowing your property is protected by professionals.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 mb-4">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Local Technicians</h3>
<p className="text-sm text-slate-500">We live where we work. Familiar faces delivering South Texas hospitality.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 mb-4">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Same-Day Service</h3>
<p className="text-sm text-slate-500">Texas heat doesn't wait. We offer rapid response to get your AC running.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 mb-4">
<iconify-icon icon="solar:wad-of-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Upfront Pricing</h3>
<p className="text-sm text-slate-500">No hidden fees or surprise charges. You approve the price before we start.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Complete Climate Control</h2>
<p className="text-base text-slate-500">From blistering summer days to chilly winter nights, we have the expertise to keep your home comfortable and efficient.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-500 mb-6">
<iconify-icon icon="solar:snowflake-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">AC Installation</h3>
<p className="text-sm text-slate-500 leading-relaxed">Energy-efficient system replacements and new installations tailored to your home's specific cooling needs.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-500 mb-6">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">AC Repair</h3>
<p className="text-sm text-slate-500 leading-relaxed">Accurate diagnostics and durable repairs for all makes and models. We find the problem and fix it right.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6">
<iconify-icon icon="solar:flame-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Heating Services</h3>
<p className="text-sm text-slate-500 leading-relaxed">Furnace and heat pump repair, maintenance, and installation to keep you warm during Texas winter fronts.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-500 mb-6">
<iconify-icon icon="solar:calendar-mark-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Maintenance &amp; Tune-Ups</h3>
<p className="text-sm text-slate-500 leading-relaxed">Preventative care to extend the life of your equipment, lower energy bills, and prevent costly breakdowns.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
<iconify-icon icon="solar:danger-triangle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Emergency Service</h3>
<p className="text-sm text-slate-500 leading-relaxed">System failed in the middle of the night? We offer rapid emergency response when you need it most.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-500 mb-6">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Indoor Air Quality</h3>
<p className="text-sm text-slate-500 leading-relaxed">Duct cleaning, filtration systems, and purifiers to ensure your family breathes clean, healthy air.</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 text-white border-t border-slate-800" id="contact">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Let's get your system running.</h2>
<p className="text-base text-slate-400 mb-10 max-w-md">Reach out for a free quote on new installations, or request service to get an expert technician to your door.</p>
<div className="space-y-8">
<a className="flex items-start gap-4 group" href="tel:+13615736671">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-400 mb-1">Call Us Directly</p>
<p className="text-lg font-semibold tracking-tight text-white">+1 (361) 573-6671</p>
</div>
</a>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-sky-400">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-400 mb-1">Headquarters</p>
<p className="text-base font-medium text-white leading-relaxed">1845 San Antonio River Rd<br/>Victoria, TX 77905</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-sky-400">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-400 mb-1">Business Hours</p>
<p className="text-base font-medium text-white">Mon - Fri: 8:00 AM - 6:00 PM<br/><span className="text-sm text-slate-400 mt-1 inline-block">Emergency service available</span></p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Name</label>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Phone</label>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors" placeholder="(361) 555-0123" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Service Needed</label>
<div className="relative">
<select className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors cursor-pointer">
<option className="text-slate-500" disabled="" selected="" value="">Select a service...</option>
<option value="repair">AC Repair</option>
<option value="install">New AC Installation</option>
<option value="heating">Heating Repair/Install</option>
<option value="maintenance">Routine Maintenance</option>
<option value="other">Other</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Message</label>
<textarea className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-none" placeholder="How can we help you today?" rows="4"></textarea>
</div>

<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center mt-0.5">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-slate-600 rounded bg-slate-900/50 peer-checked:bg-sky-500 peer-checked:border-sky-500 transition-colors group-hover:border-slate-500"></div>
<iconify-icon className="absolute inset-0 text-white opacity-0 peer-checked:opacity-100 flex items-center justify-center text-sm pointer-events-none transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-400 select-none">This is an emergency. Please contact me immediately.</span>
</label>
<button className="w-full bg-sky-500 hover:bg-sky-400 text-white font-medium text-sm px-6 py-4 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2" type="button">
                            Send Request
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>

<div className="mt-24 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-500">© 2024 Econo Air Conditioning. All rights reserved.</p>
<div className="flex items-center gap-4 text-slate-500 text-sm">
<span className="font-medium tracking-tighter text-slate-700">ECONO AIR</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span>Victoria, TX</span>
</div>
</div>
</div>
</section>

    </>
  );
}
