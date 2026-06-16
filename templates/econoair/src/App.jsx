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
      

<header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex-shrink-0">
<a className="flex items-center gap-2" href="#">
<iconify-icon className="text-blue-600 text-2xl" icon="solar:snowflake-linear"></iconify-icon>
<span className="text-lg font-semibold tracking-tighter text-slate-900 uppercase">Econo Air</span>
</a>
</div>

<nav className="hidden md:flex gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#testimonials">Reviews</a>
</nav>

<div className="flex items-center gap-4">
<div className="hidden sm:block text-right mr-2">
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest">24/7 Emergency Service</p>
<a className="text-base font-semibold tracking-tight text-slate-900 hover:text-blue-600 transition-colors" href="tel:3615736671">(361) 573-6671</a>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" href="tel:3615736671">
<iconify-icon className="text-base" icon="solar:phone-linear"></iconify-icon>
<span className="hidden sm:inline">Call Now</span>
</a>
<button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500" type="button">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</header>
<main>

<section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32 overflow-hidden bg-slate-950">

<div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
<img alt="HVAC Technician" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
</div>
<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium mb-8">
<span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                    Serving Victoria, TX &amp; Surrounding Areas
                </div>
<h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
                    Reliable Air Conditioning &amp; <br className="hidden sm:block"/> Heating Services
                </h1>
<p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-300 mb-10 font-normal">
                    Fast service, affordable pricing, and trusted reliability for your home or business. Don't let the Texas heat beat you—we're here to restore your comfort.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-500 transition-colors" href="tel:3615736671">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
                        (361) 573-6671
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-6 py-3 text-base font-medium text-white hover:bg-white/20 border border-white/10 transition-colors backdrop-blur-sm" href="#contact">
                        Request a Free Estimate
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4 lg:gap-8 max-w-4xl mx-auto text-slate-300">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-blue-400" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-sm font-medium">Licensed &amp; Insured</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-blue-400" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-sm font-medium">24/7 Availability</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-blue-400" icon="solar:wallet-linear"></iconify-icon>
<span className="text-sm font-medium">Upfront Pricing</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-blue-400" icon="solar:star-linear"></iconify-icon>
<span className="text-sm font-medium">Local Experts</span>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-28 bg-white" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Complete HVAC Solutions</h2>
<p className="text-base sm:text-lg text-slate-500">From emergency repairs to complete system replacements, we have the expertise to keep your indoor climate perfect year-round.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<iconify-icon className="text-2xl text-blue-600 group-hover:text-white transition-colors" icon="solar:settings-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">AC Repair</h3>
<p className="text-sm text-slate-500 mb-6">Fast, accurate diagnostics and repairs. We fix all makes and models to restore your cooling quickly and efficiently.</p>
<ul className="text-sm text-slate-600 space-y-2 mb-6">
<li className="flex items-start gap-2"><iconify-icon className="text-blue-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Strange noises or smells</li>
<li className="flex items-start gap-2"><iconify-icon className="text-blue-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Weak airflow</li>
<li className="flex items-start gap-2"><iconify-icon className="text-blue-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Warm air blowing</li>
</ul>
</div>

<div className="group relative rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<iconify-icon className="text-2xl text-blue-600 group-hover:text-white transition-colors" icon="solar:box-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">AC Installation</h3>
<p className="text-sm text-slate-500 mb-6">Upgrade to a high-efficiency system. We help you choose the right unit for your home size and budget to lower energy bills.</p>
<ul className="text-sm text-slate-600 space-y-2 mb-6">
<li className="flex items-start gap-2"><iconify-icon className="text-blue-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Free replacement estimates</li>
<li className="flex items-start gap-2"><iconify-icon className="text-blue-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Energy-efficient models</li>
<li className="flex items-start gap-2"><iconify-icon className="text-blue-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Professional sizing</li>
</ul>
</div>

<div className="group relative rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<iconify-icon className="text-2xl text-blue-600 group-hover:text-white transition-colors" icon="solar:checklist-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Maintenance</h3>
<p className="text-sm text-slate-500 mb-6">Prevent costly breakdowns and extend the lifespan of your equipment with our comprehensive tune-ups and maintenance plans.</p>
<ul className="text-sm text-slate-600 space-y-2 mb-6">
<li className="flex items-start gap-2"><iconify-icon className="text-blue-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Spring/Fall tune-ups</li>
<li className="flex items-start gap-2"><iconify-icon className="text-blue-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Filter replacement</li>
<li className="flex items-start gap-2"><iconify-icon className="text-blue-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Performance checks</li>
</ul>
</div>

<div className="group relative rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<iconify-icon className="text-2xl text-blue-600 group-hover:text-white transition-colors" icon="solar:fire-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Heating Services</h3>
<p className="text-sm text-slate-500 mb-6">Stay warm during those rare Texas cold snaps. We service furnaces, heat pumps, and dual-fuel systems.</p>
<ul className="text-sm text-slate-600 space-y-2 mb-6">
<li className="flex items-start gap-2"><iconify-icon className="text-blue-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Furnace repair</li>
<li className="flex items-start gap-2"><iconify-icon className="text-blue-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Heat pump installation</li>
<li className="flex items-start gap-2"><iconify-icon className="text-blue-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Safety inspections</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-28 bg-slate-50 border-y border-slate-200" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
<img alt="Econo Air Conditioning Team" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>

<div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-4 rounded-xl bg-white p-6 shadow-lg border border-slate-100">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
<iconify-icon className="text-2xl" icon="solar:cup-star-linear"></iconify-icon>
</div>
<div>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">15+</p>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Years Experience</p>
</div>
</div>
</div>
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Your Trusted Local HVAC Experts in Victoria, TX</h2>
<div className="space-y-4 text-base text-slate-600 mb-8">
<p>At Econo Air Conditioning, we understand that a broken AC in Texas is more than an inconvenience—it's an emergency. That's why we built our business on the principles of rapid response, honest diagnostics, and fair pricing.</p>
<p>We are a locally owned and operated business deeply rooted in the Victoria community. We treat every home we enter with the same respect as our own, ensuring that the job is done right the first time, without cutting corners.</p>
<p>Whether you need a simple thermostat fix, routine maintenance, or a completely new energy-efficient system, our licensed technicians have the knowledge and tools to provide a seamless, stress-free experience.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
<iconify-icon className="text-xl" icon="solar:hand-shake-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">Honest Pricing</span>
</div>
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">Family Owned</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-28 bg-white" id="testimonials">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">What Our Neighbors Say</h2>
<p className="text-base sm:text-lg text-slate-500">Don't just take our word for it. See why homeowners across Victoria trust Econo Air Conditioning.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
<div className="flex gap-1 text-blue-500 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 italic">"Our AC went out in the middle of July. Econo Air sent a technician out within hours. He found the issue quickly, explained the cost upfront, and had us cooling down before dinner. Outstanding service!"</p>
<p className="text-sm font-semibold text-slate-900">— Sarah M., Victoria, TX</p>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
<div className="flex gap-1 text-blue-500 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 italic">"I got three quotes for a new installation. Econo wasn't just the most affordable, but they were the most professional. The installation crew was clean, polite, and walked me through the new thermostat."</p>
<p className="text-sm font-semibold text-slate-900">— David T., Inez</p>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
<div className="flex gap-1 text-blue-500 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 italic">"I use them for my bi-annual maintenance. They never try to upsell me on things I don't need. It's refreshing to find a company with actual integrity. Highly recommend them to anyone in the area."</p>
<p className="text-sm font-semibold text-slate-900">— Robert K., Victoria, TX</p>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-28 bg-slate-900 text-white" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">Ready to Restore Your Comfort?</h2>
<p className="text-base text-slate-400 mb-10">Whether it's an emergency repair or a routine checkup, our team is ready to help. Contact us today for fast, reliable service.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
<iconify-icon className="text-2xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-400 mb-1">Call Us 24/7</p>
<a className="text-2xl font-semibold tracking-tight text-white hover:text-blue-400 transition-colors" href="tel:3615736671">(361) 573-6671</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
<iconify-icon className="text-2xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-400 mb-1">Location</p>
<p className="text-base text-white">1845 San Antonio River Rd<br/>Victoria, TX 77905</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-400 mb-1">Hours</p>
<p className="text-base text-white">Mon - Fri: 8:00 AM - 6:00 PM<br/><span className="text-sm text-slate-400">24/7 Emergency Service Available</span></p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 sm:p-10 shadow-2xl">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Request Service</h3>
<form action="#" className="space-y-4" method="POST">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="first-name">First Name</label>
<input className="block w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm outline-none transition-shadow bg-slate-50 focus:bg-white" id="first-name" name="first-name" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="last-name">Last Name</label>
<input className="block w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm outline-none transition-shadow bg-slate-50 focus:bg-white" id="last-name" name="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="phone">Phone Number</label>
<input className="block w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm outline-none transition-shadow bg-slate-50 focus:bg-white" id="phone" name="phone" placeholder="(361) 555-0123" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="service">Service Needed</label>
<div className="relative">
<select className="block w-full appearance-none rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm outline-none bg-slate-50 focus:bg-white pr-10" id="service" name="service">
<option>AC Repair</option>
<option>AC Installation/Replacement</option>
<option>Routine Maintenance</option>
<option>Heating Service</option>
<option>Other / Not Sure</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="message">Message (Optional)</label>
<textarea className="block w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm outline-none transition-shadow bg-slate-50 focus:bg-white resize-none" id="message" name="message" placeholder="Briefly describe your issue..." rows="3"></textarea>
</div>
<button className="w-full flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors mt-2" type="submit">
                                Send Request
                                <iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon>
</button>
<p className="text-xs text-slate-500 text-center mt-3">We typically respond within 15 minutes during business hours.</p>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-950 border-t border-slate-800 py-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400 text-xl" icon="solar:snowflake-linear"></iconify-icon>
<span className="text-base font-semibold tracking-tighter text-slate-300 uppercase">Econo Air</span>
</div>
<p className="text-sm text-slate-500 text-center md:text-left">
                © 2024 Econo Air Conditioning. All rights reserved. <br className="sm:hidden" /> Lic #TACLB000000C (Placeholder)
            </br></p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-slate-300 transition-colors" href="#">
<span className="sr-only">Facebook</span>
<iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
