import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
neutral: {
950: '#0a0a0a',
900: '#171717',
800: '#262626',
400: '#a3a3a3',
300: '#d4d4d4',
50: '#fafafa',
}
}
}
}
}



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
      

<nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="text-neutral-50 font-semibold tracking-tighter text-lg flex items-center gap-2" href="#">
<iconify-icon className="text-blue-500 text-xl" icon="solar:steering-wheel-linear"></iconify-icon>
                MSBH
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-neutral-50 transition-colors" href="#services">Services</a>
<a className="hover:text-neutral-50 transition-colors" href="#pricing">Packages</a>
<a className="hover:text-neutral-50 transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-neutral-50 transition-colors" href="tel:6135013722">
<iconify-icon className="text-neutral-400" icon="solar:phone-linear"></iconify-icon>
                    613-501-3722
                </a>
<a className="bg-white/10 hover:bg-white/15 text-neutral-50 text-sm font-medium px-4 py-2 rounded-full transition-all ring-1 ring-inset ring-white/10" href="#contact">
                    Book Now
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden min-h-[90vh] flex items-center">

<div className="absolute inset-0 -z-10">
<img alt="Luxury car being detailed" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/60 to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-6 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    Ottawa's Premier Mobile Service
                </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-neutral-50 tracking-tight leading-[1.1] mb-6">
                    Premium Mobile Car Detailing in Ottawa <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-50">We Come To You.</span>
</h1>
<p className="text-base sm:text-lg text-neutral-400 mb-10 max-w-2xl leading-relaxed">
                    Experience showroom-quality results without leaving your home or office. From deep interior cleaning to ceramic coating, we bring professional automotive care directly to your doorstep.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neutral-50 text-neutral-950 hover:bg-neutral-200 text-sm font-medium px-6 py-3 rounded-full transition-all" href="tel:6135013722">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                        Call Now: 613-501-3722
                    </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-neutral-50 text-sm font-medium px-6 py-3 rounded-full transition-all ring-1 ring-inset ring-white/10 backdrop-blur-sm" href="#contact">
                        Book Your Appointment
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-neutral-400 font-medium border-t border-white/10 pt-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500 text-base" icon="solar:calendar-linear"></iconify-icon>
                        Open 7 Days a Week (8AM–8PM)
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500 text-base" icon="solar:map-point-linear"></iconify-icon>
                        Serving all of Ottawa
                    </div>
<div className="flex items-center gap-2">
<div className="flex -space-x-1">
<iconify-icon className="text-neutral-50" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-50" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-50" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-50" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-50" icon="solar:star-bold"></iconify-icon>
</div>
<span className="ml-1 text-neutral-50">5.0</span> Rated
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold text-neutral-50 tracking-tight mb-4">Complete Automotive Care</h2>
<p className="text-neutral-400 text-base">Expert mobile car detailing tailored to restore and protect your vehicle's value. We bring the shop to your driveway.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl hover:bg-neutral-900 transition-colors group">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:border-blue-500/50 transition-colors">
<iconify-icon className="text-2xl text-neutral-300 group-hover:text-blue-400 transition-colors" icon="solar:sofa-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-50 tracking-tight mb-2">Interior Detailing</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Deep cleaning, stubborn stain removal, odor elimination, and surface conditioning to restore a like-new interior feel.</p>
</div>

<div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl hover:bg-neutral-900 transition-colors group">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:border-blue-500/50 transition-colors">
<iconify-icon className="text-2xl text-neutral-300 group-hover:text-blue-400 transition-colors" icon="solar:dropper-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-50 tracking-tight mb-2">Exterior Detailing</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Meticulous hand wash, clay bar treatment, wax application, and paint enhancement for a flawless, high-gloss finish.</p>
</div>

<div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl hover:bg-neutral-900 transition-colors group">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:border-blue-500/50 transition-colors">
<iconify-icon className="text-2xl text-neutral-300 group-hover:text-blue-400 transition-colors" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-50 tracking-tight mb-2">Ceramic Coating</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Long-term paint protection offering enhanced shine, hydrophobic properties, and significantly easier ongoing maintenance.</p>
</div>

<div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl hover:bg-neutral-900 transition-colors group">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:border-blue-500/50 transition-colors">
<iconify-icon className="text-2xl text-neutral-300 group-hover:text-blue-400 transition-colors" icon="solar:history-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-50 tracking-tight mb-2">Maintenance Packages</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Regularly scheduled details to keep your vehicle consistently clean, protected, and looking its absolute best year-round.</p>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 border-y border-white/5 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold text-neutral-50 tracking-tight mb-6">Why Ottawa Chooses MSBH</h2>
<p className="text-base text-neutral-400 mb-8 leading-relaxed">
                        We understand that your time is valuable. That's why we engineered our mobile car detailing service to be as seamless and convenient as possible, without compromising on premium results.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<div>
<strong className="block text-sm font-medium text-neutral-50">We Come To You Anywhere</strong>
<span className="text-sm text-neutral-400">Home, office, or apartment building across the Ottawa region.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<div>
<strong className="block text-sm font-medium text-neutral-50">Flexible Scheduling</strong>
<span className="text-sm text-neutral-400">Open 7 days a week from 8:00 AM to 8:00 PM to fit your busy life.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<div>
<strong className="block text-sm font-medium text-neutral-50">Premium Products Only</strong>
<span className="text-sm text-neutral-400">We use professional-grade, pH-neutral chemicals and clean microfiber towels.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<div>
<strong className="block text-sm font-medium text-neutral-50">Obsessive Attention to Detail</strong>
<span className="text-sm text-neutral-400">We don't cut corners. Every crevice, vent, and panel is meticulously cleaned.</span>
</div>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent blur-3xl rounded-full"></div>
<div className="relative rounded-2xl border border-white/10 overflow-hidden bg-neutral-900 aspect-square sm:aspect-[4/3] lg:aspect-square">
<img alt="Professional car detailing close up" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center justify-between">
<div>
<p className="text-xs text-neutral-400 font-medium mb-1">Mobile Fleet</p>
<p className="text-sm text-neutral-50 font-medium">Fully Equipped &amp; Independent</p>
</div>
<iconify-icon className="text-blue-400 text-2xl" icon="solar:bolt-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-neutral-900/30 border-y border-white/5" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold text-neutral-50 tracking-tight mb-12 text-center">Trusted by Ottawa Car Owners</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-white/5 border border-white/5">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-neutral-50 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-50 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-50 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-50 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-50 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 mb-6 leading-relaxed">"Incredible service. I booked them while I was working from home, and they transformed my SUV right in my driveway. The interior looks and smells brand new. Highly recommend for anyone in Ottawa looking for convenience."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-400">MD</div>
<div className="text-sm font-medium text-neutral-50">Mark D.</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/5">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-neutral-50 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-50 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-50 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-50 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-50 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 mb-6 leading-relaxed">"Got the ceramic coating package. The attention to detail was top-notch, and the paint has never looked glossier. They arrived exactly on time and were super professional throughout the whole process."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-400">SL</div>
<div className="text-sm font-medium text-neutral-50">Sarah L.</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/5">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-neutral-50 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-50 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-50 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-50 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-50 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 mb-6 leading-relaxed">"Lifesavers! My car was a mess after a long winter. The mobile aspect is a game changer. I didn't have to arrange rides to drop off my car. The standard detail package covered everything I needed."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-400">JC</div>
<div className="text-sm font-medium text-neutral-50">James C.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 relative" id="pricing">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950 -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold text-neutral-50 tracking-tight mb-4">Simple, Transparent Packages</h2>
<p className="text-neutral-400 text-base">Choose the level of detail your vehicle needs. All packages include our mobile service directly to your location.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 flex flex-col">
<h3 className="text-lg font-medium text-neutral-50 mb-2">Basic Detail</h3>
<p className="text-sm text-neutral-400 mb-6 min-h-[40px]">Essential refresh for regularly maintained vehicles.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Exterior Hand Wash
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Wheel &amp; Tire Clean
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Interior Vacuum
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Window Cleaning
                        </li>
</ul>
<a className="w-full block text-center py-2.5 rounded-lg border border-white/10 text-sm font-medium text-neutral-300 hover:bg-white/5 transition-colors" href="#contact">Book Basic</a>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 flex flex-col">
<h3 className="text-lg font-medium text-neutral-50 mb-2">Standard Detail</h3>
<p className="text-sm text-neutral-400 mb-6 min-h-[40px]">Deep clean to restore that fresh feeling inside and out.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Everything in Basic
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Spray Wax Application
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Interior Wipe Down &amp; UV
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Door Jambs Cleaned
                        </li>
</ul>
<a className="w-full block text-center py-2.5 rounded-lg border border-white/10 text-sm font-medium text-neutral-300 hover:bg-white/5 transition-colors" href="#contact">Book Standard</a>
</div>

<div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6 flex flex-col relative ring-1 ring-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.1)] transform lg:-translate-y-2">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-neutral-50 text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">Most Popular</div>
<h3 className="text-lg font-medium text-neutral-50 mb-2">Premium Detail</h3>
<p className="text-sm text-neutral-400 mb-6 min-h-[40px]">Showroom restoration with long-lasting protection.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Everything in Standard
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Clay Bar Treatment
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> High-Grade Sealant
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Shampoo Seats/Carpets
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Leather Conditioning
                        </li>
</ul>
<a className="w-full block text-center py-2.5 rounded-lg bg-neutral-50 text-sm font-medium text-neutral-950 hover:bg-neutral-200 transition-colors" href="#contact">Book Premium</a>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 flex flex-col">
<h3 className="text-lg font-medium text-neutral-50 mb-2">Full Detail + Ceramic</h3>
<p className="text-sm text-neutral-400 mb-6 min-h-[40px]">The ultimate package for unmatched gloss and years of protection.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Premium Detail Included
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> 1-Step Paint Correction
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Ceramic Coating (Paint)
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Wheel Face Coating
                        </li>
</ul>
<a className="w-full block text-center py-2.5 rounded-lg border border-white/10 text-sm font-medium text-neutral-300 hover:bg-white/5 transition-colors" href="#contact">Book Full Detail</a>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-600/5"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
<h2 className="text-3xl sm:text-4xl font-semibold text-neutral-50 tracking-tight mb-4">Ready For a Pristine Vehicle?</h2>
<p className="text-neutral-400 text-base mb-8">Due to high demand, we have limited weekly slots available. Secure your mobile detailing appointment now and let us bring the shine to you.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neutral-50 text-neutral-950 hover:bg-neutral-200 text-sm font-medium px-8 py-3 rounded-full transition-all" href="tel:6135013722">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                    Call: 613-501-3722
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-neutral-50 text-sm font-medium px-8 py-3 rounded-full transition-all ring-1 ring-inset ring-white/10" href="#contact">
                    Book Appointment
                </a>
</div>
</div>
</section>

<section className="py-24 sm:py-32" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

<div className="lg:sticky lg:top-32">
<h2 className="text-3xl font-semibold text-neutral-50 tracking-tight mb-4">Get a Quote &amp; Book Now</h2>
<p className="text-sm text-neutral-400 mb-10 leading-relaxed">Select a date and time that works best for you via our calendar. The specific quote will be provided through Calendly. We pride ourselves on fast responses and will confirm everything shortly after you book.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 bg-white/5">
<iconify-icon className="text-neutral-300" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-50">Direct Line</p>
<a className="text-sm text-neutral-400 hover:text-neutral-300 transition-colors" href="tel:6135013722">613-501-3722</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 bg-white/5">
<iconify-icon className="text-neutral-300" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-50">Business Hours</p>
<p className="text-sm text-neutral-400">Open 7 Days a Week</p>
<p className="text-sm text-neutral-400">8:00 AM – 8:00 PM</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 bg-white/5">
<iconify-icon className="text-neutral-300" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-50">Service Area</p>
<p className="text-sm text-neutral-400">Mobile service across Ottawa, ON</p>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-2 sm:p-4 w-full h-[650px] overflow-hidden">

<div className="calendly-inline-widget w-full h-full" data-url="https://calendly.com/msbhcd25/30min?hide_event_type_details=1&amp;hide_gdpr_banner=1&amp;background_color=171717&amp;text_color=d4d4d4&amp;primary_color=3b82f6"></div>


</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div>
<a className="text-neutral-50 font-semibold tracking-tighter text-lg flex items-center gap-2 mb-2" href="#">
<iconify-icon className="text-blue-500 text-xl" icon="solar:steering-wheel-linear"></iconify-icon>
                        MSBH
                    </a>
<p className="text-sm text-neutral-400">Premium Mobile Car Detailing across Ottawa.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
<a className="text-neutral-400 hover:text-neutral-300 flex items-center gap-2" href="tel:6135013722">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                        613-501-3722
                    </a>
<span className="text-neutral-400 flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                        8AM–8PM, 7 days
                    </span>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-500">
                    ©  MSBH Car Detailing. All rights reserved.
                </p>
<div className="text-[10px] text-neutral-600 flex gap-4">
<span>Mobile Car Detailing Ottawa</span>
<span>Interior Car Cleaning Ottawa</span>
<span>Ceramic Coating Ottawa</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
