import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
logo: ['"Exo 2"', 'sans-serif'],
},
colors: {
safety: '#FF6700',
}
}
}
}



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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950 border-b border-zinc-900 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-safety text-2xl group-hover:scale-110 transition-transform" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col">
<span className="font-logo italic font-semibold tracking-tighter text-white text-xl leading-none">DOUBLE-TIME</span>
<span className="font-logo italic font-medium tracking-widest text-zinc-400 text-xs leading-none mt-1">PEST CONTROL</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<div className="hidden lg:flex flex-col text-right mr-2">
<span className="text-xs font-medium text-zinc-400">Emergency / Dispatch</span>
<a className="text-sm font-medium text-white tracking-tight" href="tel:+18507186109">850-718-6109</a>
</div>
<a className="bg-safety hover:bg-orange-600 text-zinc-950 font-medium text-sm px-6 py-2.5 rounded shadow-sm transition-all duration-200 flex items-center gap-2" href="#contact">
                    Book Now
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-zinc-950 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Pest Control Technician working" className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-safety/30 bg-safety/10 text-safety text-xs font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-safety animate-pulse"></span>
                    Now Dispatching in Chipley, FL
                </div>
<h1 className="text-4xl lg:text-6xl font-semibold text-white tracking-tighter leading-[1.1] mb-6">
                    Corporate pest control moves slow. <span className="text-zinc-400">We move double-time.</span>
</h1>
<p className="text-lg text-zinc-400 font-light mb-10 max-w-xl leading-relaxed">
                    Protect your Florida home with rapid, transparent, and thorough pest solutions. Fast-acting elimination with military-style efficiency.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
<a className="w-full sm:w-auto bg-safety hover:bg-orange-600 text-zinc-950 font-medium text-base px-8 py-3.5 rounded shadow-sm transition-all duration-200 flex items-center justify-center gap-2" href="tel:+18507186109">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                        Call Now: 850-718-6109
                    </a>
<a className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium text-base px-8 py-3.5 rounded transition-all duration-200 flex items-center justify-center gap-2" href="#contact">
                        Request a Free Quote
                    </a>
</div>

<div className="flex flex-wrap items-center gap-6 gap-y-4 text-sm font-medium text-zinc-300">
<div className="flex items-center gap-2">
<iconify-icon className="text-safety text-lg" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
                        5.0 Google Rating
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-safety text-lg" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
                        3+ Years Experience
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-safety text-lg" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                        Licensed &amp; Insured
                    </div>
</div>
</div>
</div>
</header>

<div className="bg-zinc-900 border-y border-zinc-800 py-6">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center lg:justify-between items-center gap-8">
<div className="flex items-center gap-3 text-zinc-400">
<span className="text-2xl font-semibold text-white tracking-tight">3+</span>
<span className="text-sm font-medium leading-tight">Years<br/>Experience</span>
</div>
<div className="hidden lg:block w-px h-8 bg-zinc-800"></div>
<div className="flex items-center gap-3 text-zinc-400">
<span className="text-2xl font-semibold text-white tracking-tight">12+</span>
<span className="text-sm font-medium leading-tight">Verified<br/>Reviews</span>
</div>
<div className="hidden lg:block w-px h-8 bg-zinc-800"></div>
<div className="flex items-center gap-3 text-zinc-400">
<span className="text-2xl font-semibold text-white tracking-tight">5.0</span>
<span className="text-sm font-medium leading-tight">Google<br/>Rating</span>
</div>
<div className="hidden lg:block w-px h-8 bg-zinc-800"></div>
<div className="flex items-center gap-3 text-zinc-400">
<iconify-icon className="text-3xl text-white" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium leading-tight">100% Satisfaction<br/>Guarantee</span>
</div>
</div>
</div>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-950 mb-4">Why Chipley Residents Choose Double-Time</h2>
<p className="text-zinc-500 font-light">We built our reputation on moving faster and hitting harder than the slow-moving corporate alternatives.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-xl border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-6 group-hover:border-safety/50 transition-colors">
<iconify-icon className="text-2xl text-zinc-700 group-hover:text-safety transition-colors" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-950 tracking-tight mb-2">Rapid Response</h3>
<p className="text-sm text-zinc-500 font-light">True to our name, we mobilize quickly. When pests invade, you shouldn't have to wait days for a dispatch.</p>
</div>

<div className="p-6 rounded-xl border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-6 group-hover:border-safety/50 transition-colors">
<iconify-icon className="text-2xl text-zinc-700 group-hover:text-safety transition-colors" icon="solar:tag-price-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-950 tracking-tight mb-2">Honest Upfront Pricing</h3>
<p className="text-sm text-zinc-500 font-light">No hidden fees or surprise charges. We diagnose the issue and provide clear, transparent pricing before any work begins.</p>
</div>

<div className="p-6 rounded-xl border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-6 group-hover:border-safety/50 transition-colors">
<iconify-icon className="text-2xl text-zinc-700 group-hover:text-safety transition-colors" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-950 tracking-tight mb-2">Local Panhandle Experts</h3>
<p className="text-sm text-zinc-500 font-light">We know the Florida climate. Our treatments are specifically formulated to handle high-humidity pests and aggressive local species.</p>
</div>

<div className="p-6 rounded-xl border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-6 group-hover:border-safety/50 transition-colors">
<iconify-icon className="text-2xl text-zinc-700 group-hover:text-safety transition-colors" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-950 tracking-tight mb-2">Fully Licensed &amp; Insured</h3>
<p className="text-sm text-zinc-500 font-light">Rest easy knowing your property is protected by certified professionals operating to the highest state standards.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-950 mb-4">Precision Pest Defense</h2>
<p className="text-zinc-500 font-light">Targeted treatments built specifically to withstand and conquer the challenging Florida climate. We don't just spray; we secure your perimeter.</p>
</div>
<a className="hidden lg:flex bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-sm px-6 py-2.5 rounded transition-all duration-200 items-center gap-2 w-max" href="#contact">
                    Request Service
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-zinc-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
<div className="relative z-10 flex items-start gap-6">
<div className="w-14 h-14 rounded-xl bg-zinc-950 text-safety flex items-center justify-center shrink-0">
<iconify-icon className="text-3xl" icon="solar:bug-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-950 mb-3 group-hover:text-safety transition-colors">General Pest Control</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-4">Fast-acting elimination of common household invaders including ants, spiders, standard roaches, and silverfish. We flush them out and keep them out.</p>
<span className="text-xs font-medium text-zinc-950 flex items-center gap-1">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>

<div className="group bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-zinc-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
<div className="relative z-10 flex items-start gap-6">
<div className="w-14 h-14 rounded-xl bg-zinc-950 text-safety flex items-center justify-center shrink-0">
<iconify-icon className="text-3xl" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-950 mb-3 group-hover:text-safety transition-colors">Florida Specialized Control</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-4">Targeted, heavy-duty treatments specifically formulated for resilient local threats like palmetto bugs, ghost ants, and high-humidity pests.</p>
<span className="text-xs font-medium text-zinc-950 flex items-center gap-1">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>

<div className="group bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-zinc-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
<div className="relative z-10 flex items-start gap-6">
<div className="w-14 h-14 rounded-xl bg-zinc-950 text-safety flex items-center justify-center shrink-0">
<iconify-icon className="text-3xl" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-950 mb-3 group-hover:text-safety transition-colors">Yard &amp; Perimeter Protection</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-4">We establish a protective barrier around your property to severely reduce Florida’s aggressive mosquito, tick, and flea populations before they reach your doors.</p>
<span className="text-xs font-medium text-zinc-950 flex items-center gap-1">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>

<div className="group bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-zinc-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
<div className="relative z-10 flex items-start gap-6">
<div className="w-14 h-14 rounded-xl bg-zinc-950 text-safety flex items-center justify-center shrink-0">
<iconify-icon className="text-3xl" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-950 mb-3 group-hover:text-safety transition-colors">Rodent Exclusion</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-4">Comprehensive inspection, sealing of entry points, and removal services to ensure your attic and crawlspaces remain completely rodent-free year-round.</p>
<span className="text-xs font-medium text-zinc-950 flex items-center gap-1">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>
</div>
<div className="mt-8 lg:hidden flex justify-center">
<a className="bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-sm px-8 py-3 rounded shadow-sm transition-all duration-200 w-full text-center" href="#contact">
                    Request Service
                </a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Active Deployments.</h2>
<p className="text-zinc-400 font-light">Real work, real results. See our technicians in action across the Panhandle, securing properties with military precision.</p>
</div>
<a className="hidden md:flex text-safety hover:text-white font-medium text-sm transition-colors items-center gap-2" href="#contact">
                    Get Your Project Started <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-900">
<img alt="Technician applying exterior perimeter spray" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://img.freepik.com/free-photo/people-disinfecting-together-dangerous-area_23-2148848569.jpg?w=740&amp;q=80"/>
<div className="bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-medium text-safety uppercase tracking-wider mb-1 block">Exterior Defense</span>
<h3 className="text-lg font-medium text-white tracking-tight">Perimeter Barrier Application</h3>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-900">
<img alt="Technician inspecting wood structure" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://img.freepik.com/free-photo/people-wearing-protective-equipment-disinfecting-dangerous-area_23-2148848604.jpg?w=740&amp;q=80"/>
<div className="bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-medium text-safety uppercase tracking-wider mb-1 block">Inspection</span>
<h3 className="text-lg font-medium text-white tracking-tight">Structural Integrity Check</h3>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-900">
<img alt="Crawlspace inspection" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://img.freepik.com/free-photo/people-disinfecting-biohazard-area_23-2148848550.jpg?w=740&amp;q=80"/>
<div className="bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-medium text-safety uppercase tracking-wider mb-1 block">Rodent Exclusion</span>
<h3 className="text-lg font-medium text-white tracking-tight">Crawlspace Sealing</h3>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-900">
<img alt="Yard treatment for mosquitos" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://img.freepik.com/premium-photo/pest-control-expert-work-residential-area-concept-pest-infestation-rodent-control-insect-extermination-residential-services_864588-96416.jpg?w=740&amp;q=80"/>
<div className="bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-medium text-safety uppercase tracking-wider mb-1 block">Yard Care</span>
<h3 className="text-lg font-medium text-white tracking-tight">Mosquito Mitigation</h3>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-900">
<img alt="Professional pest control gear" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://img.freepik.com/free-photo/closeup-disinfection-activities-due-covid19-pandemic_637285-7912.jpg?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-medium text-safety uppercase tracking-wider mb-1 block">Equipment</span>
<h3 className="text-lg font-medium text-white tracking-tight">Commercial Grade Gear</h3>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-900">
<img alt="Technician arriving at property" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://img.freepik.com/premium-photo/professional-exterminator-holding-sprayer-equipment-pest-control_926199-3614964.jpg?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-medium text-safety uppercase tracking-wider mb-1 block">Dispatch</span>
<h3 className="text-lg font-medium text-white tracking-tight">Rapid Site Arrival</h3>
</div>
</div>
</div>
<div className="mt-8 md:hidden flex justify-center">
<a className="text-safety font-medium text-sm flex items-center gap-2" href="#contact">
                    Get Your Project Started <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100 overflow-hidden" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="inline-flex items-center gap-1 text-safety mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-950 mb-4">Trusted by Chipley Locals</h2>
<p className="text-zinc-500 font-light">With a perfect 5.0 rating, our reputation speaks for itself. Here's what your neighbors are saying.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 relative">
<iconify-icon className="absolute top-6 right-8 text-4xl text-zinc-200" icon="solar:quote-right-bold"></iconify-icon>
<div className="flex items-center gap-1 text-safety mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-700 font-light leading-relaxed mb-6">"Called them about a sudden ant infestation in the kitchen. They lived up to the name 'Double-Time' - arrived within hours. The technician didn't just spray; he showed me where they were coming in and sealed it up. Top-tier service."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-medium text-sm">MR</div>
<div>
<p className="text-sm font-medium text-zinc-950">Michael R.</p>
<p className="text-xs text-zinc-500">Chipley, FL • General Pest Control</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 relative">
<iconify-icon className="absolute top-6 right-8 text-4xl text-zinc-200" icon="solar:quote-right-bold"></iconify-icon>
<div className="flex items-center gap-1 text-safety mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-700 font-light leading-relaxed mb-6">"We've struggled with Palmetto bugs since moving to Florida. Corporate guys came out thrice and nothing changed. Double-Time came out once, did a heavy perimeter treatment, and we haven't seen a bug inside for months."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-medium text-sm">ST</div>
<div>
<p className="text-sm font-medium text-zinc-950">Sarah T.</p>
<p className="text-xs text-zinc-500">Bonifay, FL • Specialized Control</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 relative">
<iconify-icon className="absolute top-6 right-8 text-4xl text-zinc-200" icon="solar:quote-right-bold"></iconify-icon>
<div className="flex items-center gap-1 text-safety mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-700 font-light leading-relaxed mb-6">"Highly professional. They handled a minor rodent issue in our shed. Very transparent about pricing upfront, no upselling nonsense. Honest local business that does exactly what they promise."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-medium text-sm">JD</div>
<div>
<p className="text-sm font-medium text-zinc-950">James D.</p>
<p className="text-xs text-zinc-500">Graceville, FL • Rodent Exclusion</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 relative">
<iconify-icon className="absolute top-6 right-8 text-4xl text-zinc-200" icon="solar:quote-right-bold"></iconify-icon>
<div className="flex items-center gap-1 text-safety mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-700 font-light leading-relaxed mb-6">"Before Double-Time, we couldn't use our backyard in the evenings because of mosquitos. Their yard protection actually works. The technician was polite and thoroughly explained the process."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-medium text-sm">EL</div>
<div>
<p className="text-sm font-medium text-zinc-950">Emily L.</p>
<p className="text-xs text-zinc-500">Chipley, FL • Yard Protection</p>
</div>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-medium text-sm px-6 py-2.5 rounded transition-colors" href="https://www.google.com/maps/search/?api=1&amp;query=Scaduto+Solutions+LLC&amp;query_place_id=ChIJpfc5hq-jCIgR_8cn-pOUqiQ47" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="logos:google-icon"></iconify-icon>
                    See More Reviews on Google
                </a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<span className="text-xs font-medium text-safety uppercase tracking-wider mb-2 block">Our Mission</span>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-950 mb-6">About Double-Time Pest Control</h2>
<div className="space-y-4 text-zinc-600 font-light leading-relaxed mb-8">
<p>Double-Time Pest Control is the Panhandle’s answer to slow-moving corporate pest services. True to our name, we are known for rapid response times and military-style efficiency on every job site.</p>
<p>With a rapidly growing reputation and a perfect 5.0-star rating, we have become a local favorite in Chipley for our unwavering transparency and thoroughness. We believe in honest, upfront pricing—no hidden fees, no bait-and-switch tactics.</p>
<p>We don't just spray chemicals and leave; we educate homeowners on how to maintain a pest-free environment in the challenging Florida climate, identifying vulnerabilities and securing perimeters.</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-lg bg-white border border-zinc-100 flex items-center gap-3">
<iconify-icon className="text-safety text-xl" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-950">Fast Dispatch</span>
</div>
<div className="p-4 rounded-lg bg-white border border-zinc-100 flex items-center gap-3">
<iconify-icon className="text-safety text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-950">Fully Licensed</span>
</div>
<div className="p-4 rounded-lg bg-white border border-zinc-100 flex items-center gap-3">
<iconify-icon className="text-safety text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-950">Local Business</span>
</div>
<div className="p-4 rounded-lg bg-white border border-zinc-100 flex items-center gap-3">
<iconify-icon className="text-safety text-xl" icon="solar:hand-shake-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-950">100% Guaranteed</span>
</div>
</div>
</div>

<div className="bg-zinc-950 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden shadow-xl">
<div className="absolute top-0 right-0 w-64 h-64 bg-zinc-900 rounded-full blur-3xl opacity-50 -mr-32 -mt-32 pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Proudly Serving the Panhandle</h3>
<p className="text-zinc-400 text-sm font-light mb-8">Dispatched locally from Chipley, Florida.</p>
<div className="space-y-6 mb-8">
<div>
<h4 className="text-xs font-medium text-safety uppercase tracking-wider mb-3">Primary Service Areas</h4>
<ul className="grid grid-cols-2 gap-y-2 text-sm text-zinc-300 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-safety" icon="solar:check-circle-linear"></iconify-icon> Chipley</li>
<li className="flex items-center gap-2"><iconify-icon className="text-safety" icon="solar:check-circle-linear"></iconify-icon> Bonifay</li>
<li className="flex items-center gap-2"><iconify-icon className="text-safety" icon="solar:check-circle-linear"></iconify-icon> Graceville</li>
<li className="flex items-center gap-2"><iconify-icon className="text-safety" icon="solar:check-circle-linear"></iconify-icon> Cottondale</li>
<li className="flex items-center gap-2"><iconify-icon className="text-safety" icon="solar:check-circle-linear"></iconify-icon> Washington Co.</li>
<li className="flex items-center gap-2"><iconify-icon className="text-safety" icon="solar:check-circle-linear"></iconify-icon> Jackson Co.</li>
</ul>
</div>
<div className="h-px w-full bg-zinc-800"></div>
<div>
<h4 className="text-xs font-medium text-safety uppercase tracking-wider mb-3">Operating Hours</h4>
<ul className="space-y-1 text-sm text-zinc-300 font-light">
<li className="flex justify-between"><span>Monday – Friday:</span> <span>8:00 AM – 5:00 PM</span></li>
<li className="flex justify-between text-zinc-500"><span>Saturday – Sunday:</span> <span>Closed</span></li>
</ul>
</div>
</div>
<a className="w-full bg-white hover:bg-zinc-200 text-zinc-950 font-medium text-sm py-3 rounded transition-colors flex items-center justify-center gap-2" href="https://www.google.com/maps/search/?api=1&amp;query=Scaduto+Solutions+LLC&amp;query_place_id=ChIJpfc5hq-jCIgR_8cn-pOUqiQ47" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:map-linear"></iconify-icon>
                            View on Google Maps
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 relative overflow-hidden" id="contact">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-safety/5 blur-[120px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="flex flex-col justify-center">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tighter text-white leading-tight mb-4">Ready to secure your perimeter?</h2>
<p className="text-lg text-zinc-400 font-light mb-10">We are currently accepting new service requests in Chipley and surrounding areas. Get a response in double-time.</p>
<div className="space-y-6 mb-12">
<a className="group flex items-center gap-4 bg-zinc-950/50 p-6 rounded-xl border border-zinc-800 hover:border-safety/50 transition-colors" href="tel:+18507186109">
<div className="w-12 h-12 rounded-full bg-safety text-zinc-950 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider block mb-1">Call for Immediate Dispatch</span>
<span className="text-2xl font-semibold text-white tracking-tight group-hover:text-safety transition-colors">850-718-6109</span>
</div>
</a>
<a className="group flex items-center gap-4 bg-zinc-950/50 p-6 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors" href="mailto:awesomeblade75@yahoo.com">
<div className="w-12 h-12 rounded-full bg-zinc-800 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider block mb-1">Email Us Directly</span>
<span className="text-lg font-medium text-white tracking-tight">awesomeblade75@yahoo.com</span>
</div>
</a>
</div>
<div className="flex flex-wrap items-center gap-6 text-sm font-medium text-zinc-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-safety" icon="solar:shield-check-bold"></iconify-icon>
                            Licensed &amp; Insured
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-safety" icon="solar:map-point-bold"></iconify-icon>
                            Local Florida Experts
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 shadow-xl">
<h3 className="text-2xl font-semibold tracking-tight text-zinc-950 mb-2">Request a Free Quote</h3>
<p className="text-sm text-zinc-500 font-light mb-6">Fill out the form below and we will respond within 24 hours to schedule your inspection.</p>
<form action="#" className="space-y-4" method="POST">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1" htmlFor="name">Full Name</label>
<input className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-md focus:ring-safety focus:border-safety block p-3 outline-none transition-colors" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1" htmlFor="phone">Phone Number</label>
<input className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-md focus:ring-safety focus:border-safety block p-3 outline-none transition-colors" id="phone" name="phone" placeholder="(850) 555-0123" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1" htmlFor="email">Email Address</label>
<input className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-md focus:ring-safety focus:border-safety block p-3 outline-none transition-colors" id="email" name="email" placeholder="john@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1" htmlFor="service">Service Needed</label>
<div className="relative">
<select className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-md focus:ring-safety focus:border-safety block p-3 appearance-none outline-none transition-colors" id="service" name="service">
<option>General Pest Control</option>
<option>Florida Specialized Control</option>
<option>Yard &amp; Perimeter Protection</option>
<option>Rodent Exclusion</option>
<option>Not Sure / Inspection Needed</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1" htmlFor="message">Property Details / Issue Details</label>
<textarea className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-md focus:ring-safety focus:border-safety block p-3 outline-none transition-colors resize-none" id="message" name="message" placeholder="Briefly describe the pest issue or service you need..." rows="4"></textarea>
</div>
<button className="w-full bg-safety hover:bg-orange-600 text-zinc-950 font-medium text-base py-3.5 rounded-md transition-all duration-200 flex items-center justify-center gap-2 mt-4 shadow-sm" type="submit">
                            Send Message
                            <iconify-icon icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
<p className="text-xs text-center text-zinc-400 font-light mt-4">By submitting, you agree to receive communications regarding your inquiry.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 pt-16 pb-8 border-t border-zinc-900 text-zinc-400">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-4 group inline-flex" href="#">
<iconify-icon className="text-safety text-2xl" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col">
<span className="font-logo italic font-semibold tracking-tighter text-white text-xl leading-none">DOUBLE-TIME</span>
<span className="font-logo italic font-medium tracking-widest text-zinc-500 text-xs leading-none mt-1">PEST CONTROL</span>
</div>
</a>
<p className="text-sm font-light max-w-sm mb-6">Rapid, reliable, and relentless pest elimination in the Florida Panhandle. We do it right the first time, in double-time.</p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-safety hover:text-zinc-950 transition-colors" href="#">
<iconify-icon className="text-xl" icon="mdi:facebook"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-safety hover:text-zinc-950 transition-colors" href="https://www.google.com/maps/search/?api=1&amp;query=Scaduto+Solutions+LLC&amp;query_place_id=ChIJpfc5hq-jCIgR_8cn-pOUqiQ47" target="_blank">
<iconify-icon className="text-lg" icon="logos:google-icon"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white font-medium text-sm tracking-tight mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#services">Our Services</a></li>
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium text-sm tracking-tight mb-4">Contact Info</h4>
<ul className="space-y-3 text-sm font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-safety mt-0.5" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+18507186109">850-718-6109</a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-safety mt-0.5" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<a className="hover:text-white transition-colors break-all" href="mailto:awesomeblade75@yahoo.com">awesomeblade75@yahoo.com</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-zinc-500">
<p>© 2024 Double-Time Pest Control. All rights reserved.</p>
<div className="flex items-center gap-4">
<span className="flex items-center gap-1"><iconify-icon className="text-safety" icon="solar:shield-check-linear"></iconify-icon> Licensed &amp; Insured</span>
<span className="flex items-center gap-1"><iconify-icon className="text-safety" icon="solar:star-bold"></iconify-icon> 5.0 Google Rated</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
