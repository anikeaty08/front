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
brand: {
50: '#f0f6fc',
100: '#e1edfa',
200: '#c2ddf5',
300: '#91c4ec',
400: '#5ba6e0',
500: '#358cd2',
600: '#2370b3',
700: '#1d5a92',
800: '#1a4d7a',
900: '#184165',
950: '#102a44',
}
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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a className="flex flex-col" href="#">
<span className="text-xl font-semibold tracking-tight text-slate-900 leading-none">PACIFIC</span>
<span className="text-sm font-medium tracking-widest text-brand-600 leading-none mt-1">EXTERIOR CLEANING</span>
</a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#why-us">Why Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#portfolio">Our Work</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#reviews">Reviews</a>
</nav>

<div className="hidden md:flex items-center space-x-4">
<a className="flex items-center text-sm font-semibold text-slate-800 hover:text-brand-600 transition-colors group" href="tel:5097145496">
<iconify-icon className="mr-2 text-lg text-brand-600 group-hover:animate-pulse" icon="solar:phone-linear"></iconify-icon>
                        (509) 714-5496
                    </a>
<a className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500" href="#contact">
                        Get a Free Quote
                    </a>
</div>

<div className="flex items-center md:hidden">
<a className="p-2 text-brand-600 mr-2" href="tel:5097145496">
<iconify-icon className="text-2xl" icon="solar:phone-linear"></iconify-icon>
</a>
<button className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<div className="relative pt-20 pb-32 flex items-center min-h-[90vh] bg-slate-900">

<div className="absolute inset-0 overflow-hidden">
<img alt="Professional technician pressure washing a concrete driveway" className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="max-w-2xl">
<div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-6 backdrop-blur-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
<span className="text-xs font-medium text-brand-100 uppercase tracking-wider">Serving Spokane, WA</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                    Restore Your Property's True <span className="text-brand-400">Curb Appeal.</span>
</h1>
<p className="text-lg text-slate-300 mb-8 max-w-xl font-normal leading-relaxed">
                    Spokane's top-rated exterior cleaning experts. From gentle roof soft washing to heavy-duty concrete cleaning, we deliver commercial-grade results for homes and businesses.
                </p>
<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-brand-600 hover:bg-brand-500 shadow-lg shadow-brand-500/30 transition-all w-full sm:w-auto" href="tel:5097145496">
<iconify-icon className="mr-2 text-xl" icon="solar:phone-bold"></iconify-icon>
                        Call (509) 714-5496
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-slate-100 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all w-full sm:w-auto" href="#contact">
                        Request Service
                        <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="flex items-center space-x-6 text-sm font-medium text-slate-300">
<div className="flex items-center">
<iconify-icon className="mr-1.5 text-brand-400 text-lg" icon="solar:shield-check-linear"></iconify-icon>
                        Fully Insured
                    </div>
<div className="flex items-center">
<iconify-icon className="mr-1.5 text-brand-400 text-lg" icon="solar:star-fall-linear"></iconify-icon>
                        5.0 Google Rating
                    </div>
<div className="flex items-center">
<iconify-icon className="mr-1.5 text-brand-400 text-lg" icon="solar:like-linear"></iconify-icon>
                        100% Guaranteed
                    </div>
</div>
</div>
</div>
</div>

<div className="bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-slate-100">
<div className="px-4">
<p className="text-3xl font-semibold text-slate-900 tracking-tight">10+</p>
<p className="text-xs text-slate-500 mt-1 uppercase tracking-wide font-medium">Years Experience</p>
</div>
<div className="px-4">
<p className="text-3xl font-semibold text-slate-900 tracking-tight">71+</p>
<p className="text-xs text-slate-500 mt-1 uppercase tracking-wide font-medium">Google Reviews</p>
</div>
<div className="px-4">
<p className="text-3xl font-semibold text-slate-900 tracking-tight flex items-center justify-center">
                        5.0
                        <iconify-icon className="text-yellow-400 ml-1 text-2xl" icon="solar:star-bold"></iconify-icon>
</p>
<p className="text-xs text-slate-500 mt-1 uppercase tracking-wide font-medium">Average Rating</p>
</div>
<div className="px-4 flex flex-col items-center justify-center">
<div className="flex space-x-2 text-brand-600 text-2xl">
<iconify-icon icon="solar:diploma-verified-linear"></iconify-icon>
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon>
</div>
<p className="text-xs text-slate-500 mt-2 uppercase tracking-wide font-medium">Licensed &amp; Insured</p>
</div>
</div>
</div>
</div>

<section className="py-24 bg-slate-50" id="why-us">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Why Spokane Residents &amp; Businesses Choose Pacific Exterior Cleaning</h2>
<p className="text-base text-slate-600">We don't just wash surfaces; we protect your biggest investment. Our approach combines industry-leading equipment with deep local expertise.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-6 text-brand-600">
<iconify-icon className="text-2xl" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Honest, Upfront Pricing</h3>
<p className="text-sm text-slate-600 leading-relaxed">No hidden fees or surprise charges. You get a detailed quote before we start, and the price we quote is the price you pay.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-6 text-brand-600">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Licensed &amp; Insured</h3>
<p className="text-sm text-slate-600 leading-relaxed">Sleep easy knowing your property is protected. We carry comprehensive liability insurance for all residential and commercial jobs.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-6 text-brand-600">
<iconify-icon className="text-2xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Local Spokane Roots</h3>
<p className="text-sm text-slate-600 leading-relaxed">We aren't a faceless franchise. We live and work in the Spokane community, treating every neighbor's home like our own.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-6 text-brand-600">
<iconify-icon className="text-2xl" icon="solar:like-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">100% Satisfaction</h3>
<p className="text-sm text-slate-600 leading-relaxed">Our job isn't done until you are thrilled with the results. We back all our exterior cleaning services with a satisfaction guarantee.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Our Professional Services</h2>
<p className="text-base text-slate-600">Tailored cleaning solutions using appropriate pressure and eco-friendly detergents to safely remove dirt, mold, algae, and grime.</p>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-sm font-medium rounded-lg text-slate-900 bg-white hover:bg-slate-50 transition-colors" href="#contact">
                    Get a Free Estimate
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-slate-50 hover:bg-brand-50 transition-colors border border-slate-100 hover:border-brand-100">
<iconify-icon className="text-4xl text-brand-600 mb-6" icon="solar:home-smile-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight group-hover:text-brand-900">Residential Services</h3>
<p className="text-sm text-slate-600 mb-6">Complete house washing using safe, low-pressure soft wash techniques to clean siding, stucco, and brick without damage.</p>
<a className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700" href="#contact">
                        Request Service <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative p-8 rounded-2xl bg-slate-50 hover:bg-brand-50 transition-colors border border-slate-100 hover:border-brand-100">
<iconify-icon className="text-4xl text-brand-600 mb-6" icon="solar:home-angle-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight group-hover:text-brand-900">Roof Cleaning</h3>
<p className="text-sm text-slate-600 mb-6">Safely remove black streaks, moss, and lichen from your shingles extending the lifespan of your roof using soft-wash technology.</p>
<a className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700" href="#contact">
                        Request Service <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative p-8 rounded-2xl bg-slate-50 hover:bg-brand-50 transition-colors border border-slate-100 hover:border-brand-100">
<iconify-icon className="text-4xl text-brand-600 mb-6" icon="solar:road-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight group-hover:text-brand-900">Driveways &amp; Patios</h3>
<p className="text-sm text-slate-600 mb-6">High-pressure surface cleaning to blast away embedded dirt, oil stains, and tire marks from concrete, pavers, and exposed aggregate.</p>
<a className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700" href="#contact">
                        Request Service <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative p-8 rounded-2xl bg-slate-50 hover:bg-brand-50 transition-colors border border-slate-100 hover:border-brand-100">
<iconify-icon className="text-4xl text-brand-600 mb-6" icon="solar:waterdrops-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight group-hover:text-brand-900">Gutter Cleaning</h3>
<p className="text-sm text-slate-600 mb-6">Complete removal of leaves, pine needles, and debris from gutters and downspouts to ensure proper water drainage away from your foundation.</p>
<a className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700" href="#contact">
                        Request Service <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative p-8 rounded-2xl bg-slate-50 hover:bg-brand-50 transition-colors border border-slate-100 hover:border-brand-100 lg:col-span-2">
<div className="flex flex-col md:flex-row md:items-start md:space-x-8">
<div>
<iconify-icon className="text-4xl text-brand-600 mb-6" icon="solar:buildings-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight group-hover:text-brand-900">Building Exterior Cleaning</h3>
<p className="text-sm text-slate-600 mb-6 max-w-xl">Commercial-grade cleaning for storefronts, office buildings, parking lots, and multi-family units. We work around your schedule to minimize disruption to your business operations.</p>
<a className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700" href="#contact">
                                Request Commercial Quote <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="mt-10 md:hidden flex justify-center">
<a className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-sm font-medium rounded-lg text-slate-900 bg-white shadow-sm w-full" href="#contact">
                    Get a Free Estimate
                </a>
</div>
</div>
</section>

<section className="text-white bg-slate-900 pt-24 pb-24" id="portfolio">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Our Recent Work</h2>
<p className="text-base text-slate-400">Quality craftsmanship you can see. Real results from active job sites across Spokane.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 gap-x-4 gap-y-4">

<div className="group relative h-72 rounded-xl overflow-hidden bg-slate-800">
<img alt="Technician surface cleaning a concrete driveway" className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30bae541-c5ca-426b-a25d-00fe77138257_800w.jpg?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6">
<p className="text-sm font-medium text-brand-400 mb-1">Driveway Restoration</p>
<h3 className="text-lg font-semibold text-white tracking-tight">Heavy Duty Concrete Cleaning</h3>
</div>
</div>

<div className="group relative h-72 rounded-xl overflow-hidden bg-slate-800">
<img alt="Worker on roof applying soft wash treatment" className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://images.finehomebuilding.com/app/uploads/2017/09/06220216/LichenIMG_1088-700x525.jpg?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6">
<p className="text-sm font-medium text-brand-400 mb-1">Roof Soft Washing</p>
<h3 className="text-lg font-semibold text-white tracking-tight">Moss &amp; Lichen Removal</h3>
</div>
</div>

<div className="group relative h-72 rounded-xl overflow-hidden bg-slate-800">
<img alt="Technician cleaning residential home siding" className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://www.capefearprowash.com/wp-content/uploads/2021/10/HOUSE-WASHING-WILMINGTON-NC.jpg?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6">
<p className="text-sm font-medium text-brand-400 mb-1">Residential Service</p>
<h3 className="text-lg font-semibold text-white tracking-tight">Siding Soft Wash</h3>
</div>
</div>

<div className="group relative h-72 rounded-xl overflow-hidden bg-slate-800">
<img alt="Commercial building exterior being cleaned" className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://www.grahammanagementhouston.com/wp-content/smush-webp/A-Complete-Guide-To-HOA-Exterior-Maintenance-Responsibilities.jpg.webp?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6">
<p className="text-sm font-medium text-brand-400 mb-1">Commercial Property</p>
<h3 className="text-lg font-semibold text-white tracking-tight">Building Exterior Maintenance</h3>
</div>
</div>

<div className="group relative h-72 rounded-xl overflow-hidden bg-slate-800">
<img alt="Worker on ladder cleaning gutters" className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://www.mrroof.com/wp-content/uploads/2020/03/mrroof-gutter-cleaning.jpg?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6">
<p className="text-sm font-medium text-brand-400 mb-1">Gutter Maintenance</p>
<h3 className="text-lg font-semibold text-white tracking-tight">Debris Clearing &amp; Flushing</h3>
</div>
</div>

<div className="group relative h-72 rounded-xl overflow-hidden bg-slate-800">
<img alt="High pressure washing a patio area" className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://shoreupusa.com/wp-content/uploads/2025/01/deck-and-patio.jpg?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6">
<p className="text-sm font-medium text-brand-400 mb-1">Outdoor Living</p>
<h3 className="text-lg font-semibold text-white tracking-tight">Patio &amp; Deck Washing</h3>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-lg text-slate-900 bg-white hover:bg-slate-100 transition-colors" href="#contact">
                    Get Your Project Started
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-12 items-start">
<div className="lg:w-1/3 sticky top-24">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Trusted by Spokane Customers</h2>
<p className="text-base text-slate-600 mb-8">Don't just take our word for it. See what your neighbors have to say about our professionalism, reliability, and results.</p>
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
<div className="flex items-center justify-between mb-4">
<span className="text-2xl font-semibold tracking-tight">5.0</span>
<div className="flex text-yellow-400 text-xl">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="text-sm font-medium text-slate-600 mb-1">Based on 71+ Google Reviews</p>
<p className="text-xs text-slate-500 mb-6">10+ Years of Excellence</p>
<a className="inline-flex items-center justify-center w-full px-4 py-2.5 border border-slate-200 text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors" href="https://maps.app.goo.gl/kEHwZmVfgWAKXTMw8" rel="noopener noreferrer" target="_blank">
<iconify-icon className="mr-2 text-brand-600" icon="solar:map-bold"></iconify-icon>
                            See More on Google
                        </a>
</div>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400 flex items-center">
<iconify-icon className="text-blue-500 mr-1" icon="solar:verified-check-bold"></iconify-icon> Google Review
                            </span>
</div>
<p className="text-sm text-slate-700 leading-relaxed mb-6">"Pacific Exterior Cleaning did an incredible job on our driveway and back patio. The crew was on time, professional, and the concrete looks brand new. Highly recommend their services to anyone in Spokane."</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-sm mr-3">MD</div>
<div>
<p className="text-sm font-semibold text-slate-900">Mark D.</p>
<p className="text-xs text-slate-500">South Hill, Spokane • Driveway Cleaning</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400 flex items-center">
<iconify-icon className="text-blue-500 mr-1" icon="solar:verified-check-bold"></iconify-icon> Google Review
                            </span>
</div>
<p className="text-sm text-slate-700 leading-relaxed mb-6">"I was worried about pressure washing our older siding, but they used a soft wash technique that cleaned it perfectly without any damage. Our house hasn't looked this good in years. Great local company."</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-semibold text-sm mr-3">SR</div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah R.</p>
<p className="text-xs text-slate-500">Spokane Valley • Residential Soft Wash</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400 flex items-center">
<iconify-icon className="text-blue-500 mr-1" icon="solar:verified-check-bold"></iconify-icon> Google Review
                            </span>
</div>
<p className="text-sm text-slate-700 leading-relaxed mb-6">"They cleared out years of debris from our gutters and washed the roof to remove moss. The pricing was honest, exactly what was quoted, and the team cleaned up perfectly after they were done."</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-semibold text-sm mr-3">JT</div>
<div>
<p className="text-sm font-semibold text-slate-900">James T.</p>
<p className="text-xs text-slate-500">Liberty Lake • Roof &amp; Gutter Cleaning</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400 flex items-center">
<iconify-icon className="text-blue-500 mr-1" icon="solar:verified-check-bold"></iconify-icon> Google Review
                            </span>
</div>
<p className="text-sm text-slate-700 leading-relaxed mb-6">"We hire Pacific Exterior Cleaning for our commercial building maintenance. They always work around our business hours, are fully insured, and deliver top-notch results. A truly reliable partner."</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-semibold text-sm mr-3">AM</div>
<div>
<p className="text-sm font-semibold text-slate-900">Amanda M.</p>
<p className="text-xs text-slate-500">Downtown Spokane • Commercial Exterior</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">About Pacific Exterior Cleaning</h2>
<div className="prose prose-slate prose-sm text-slate-600 mb-8">
<p className="mb-4">With over a decade of dedicated service in the exterior cleaning industry, Pacific Exterior Cleaning has established itself as Spokane's premier choice for residential and commercial property maintenance.</p>
<p className="mb-4">We are a locally owned and operated family business. Our mission is simple: to provide the highest quality power washing and soft washing services with unmatched customer care. We invest in top-of-the-line commercial equipment and environmentally responsible cleaning solutions to ensure superior, safe results for every surface type.</p>
<p>When you hire us, you are hiring your neighbors—fully licensed, comprehensively insured professionals who stand behind their work with a 100% satisfaction guarantee.</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center text-sm font-medium text-slate-800">
<iconify-icon className="text-brand-600 mr-2 text-lg" icon="solar:check-circle-linear"></iconify-icon> Family Owned &amp; Operated
                        </div>
<div className="flex items-center text-sm font-medium text-slate-800">
<iconify-icon className="text-brand-600 mr-2 text-lg" icon="solar:check-circle-linear"></iconify-icon> 10+ Years Experience
                        </div>
<div className="flex items-center text-sm font-medium text-slate-800">
<iconify-icon className="text-brand-600 mr-2 text-lg" icon="solar:check-circle-linear"></iconify-icon> Eco-Friendly Solutions
                        </div>
<div className="flex items-center text-sm font-medium text-slate-800">
<iconify-icon className="text-brand-600 mr-2 text-lg" icon="solar:check-circle-linear"></iconify-icon> Fully Insured
                        </div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-6">Proudly Serving Spokane &amp; Surrounding Areas</h2>
<div className="mb-8">
<div className="flex flex-wrap gap-2 mb-6">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-700 shadow-sm">Spokane</span>
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-700 shadow-sm">Spokane Valley</span>
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-700 shadow-sm">Liberty Lake</span>
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-700 shadow-sm">Cheney</span>
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-700 shadow-sm">Airway Heights</span>
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-700 shadow-sm">Spokane County</span>
</div>
<div className="flex items-start mb-4">
<iconify-icon className="text-brand-600 mt-0.5 mr-3 text-xl" icon="solar:clock-circle-linear"></iconify-icon>
<div>
<p className="text-sm font-semibold text-slate-900">Business Hours</p>
<p className="text-sm text-slate-600">Everyday: 7:00 AM - 9:00 PM</p>
</div>
</div>
</div>
<div className="pt-6 border-t border-slate-200">
<div className="flex items-start">
<iconify-icon className="text-brand-600 mt-1 mr-3 text-2xl" icon="solar:shield-star-linear"></iconify-icon>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-1">Our Ironclad Guarantee</h3>
<p className="text-sm text-slate-600">We stand by the quality of our exterior cleaning. If you aren't completely satisfied with the results, we will return and make it right.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-5">

<div className="lg:col-span-2 bg-slate-900 p-10 text-white flex flex-col justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Get in Touch</h2>
<p className="text-sm text-slate-400 mb-10 leading-relaxed">Ready to transform your property? Fill out the form or reach out directly. We provide free, no-obligation estimates for all projects.</p>
<div className="space-y-6">
<a className="flex items-center group" href="tel:5097145496">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-brand-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">Call Us</p>
<p className="text-base font-medium">(509) 714-5496</p>
</div>
</a>
<a className="flex items-center group" href="mailto:spokanepressurewash@gmail.com">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-brand-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">Email Us</p>
<p className="text-base font-medium break-all">spokanepressurewash@gmail.com</p>
</div>
</a>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">Location</p>
<p className="text-base font-medium">Spokane, WA &amp; Surrounding</p>
</div>
</div>
</div>
</div>
<div className="mt-12 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
<p className="text-sm font-medium text-brand-300 flex items-center">
<iconify-icon className="mr-2 text-lg" icon="solar:bolt-linear"></iconify-icon>
                                We typically respond within 24 hours.
                            </p>
</div>
</div>

<div className="lg:col-span-3 p-10">
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="first-name">First name</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6 transition-all" id="first-name" name="first-name" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="last-name">Last name</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6 transition-all" id="last-name" name="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">Email address</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6 transition-all" id="email" name="email" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="phone">Phone number</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6 transition-all" id="phone" name="phone" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="service">Service Needed (Optional)</label>
<div className="relative">
<select className="block w-full rounded-md border-0 py-2.5 pl-3.5 pr-10 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6 appearance-none bg-white" id="service" name="service">
<option>Select a service...</option>
<option>Residential House Wash</option>
<option>Roof Cleaning</option>
<option>Driveway/Patio Cleaning</option>
<option>Gutter Cleaning</option>
<option>Commercial Cleaning</option>
<option>Other / Multiple Services</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="message">Project Details</label>
<textarea className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6 transition-all" id="message" name="message" placeholder="Tell us a bit about what you need cleaned..." rows="4"></textarea>
</div>
<div>
<button className="w-full flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all" type="submit">
                                    Send Message
                                    <iconify-icon className="ml-2 text-lg" icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-600 text-center relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>
<div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Ready to Get Started?</h2>
<p className="text-lg text-brand-100 mb-10 font-normal">We are currently accepting new service requests. Thank you for choosing Pacific Exterior Cleaning.</p>
<div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
<a className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-brand-900 bg-white hover:bg-slate-50 shadow-lg transition-all w-full sm:w-auto" href="tel:5097145496">
<iconify-icon className="mr-2 text-xl" icon="solar:phone-bold"></iconify-icon>
                    (509) 714-5496
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-transparent border-2 border-white/30 hover:bg-white/10 transition-all w-full sm:w-auto" href="#contact">
                    Get a Free Quote
                </a>
</div>
<div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-brand-100">
<span className="flex items-center"><iconify-icon className="mr-1.5 text-lg" icon="solar:shield-check-bold"></iconify-icon> Licensed &amp; Insured</span>
<span className="hidden sm:inline text-brand-400">•</span>
<span className="flex items-center"><iconify-icon className="mr-1.5 text-lg" icon="solar:star-bold"></iconify-icon> 5.0 Google Rating</span>
<span className="hidden sm:inline text-brand-400">•</span>
<span className="flex items-center"><iconify-icon className="mr-1.5 text-lg" icon="solar:like-bold"></iconify-icon> Satisfaction Guaranteed</span>
</div>
</div>
</section>

<footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="md:col-span-1">
<a className="flex flex-col mb-6" href="#">
<span className="text-xl font-semibold tracking-tight text-white leading-none">PACIFIC</span>
<span className="text-sm font-medium tracking-widest text-brand-500 leading-none mt-1">EXTERIOR CLEANING</span>
</a>
<p className="text-sm text-slate-400 leading-relaxed mb-6">Spokane's trusted choice for professional pressure washing and exterior restoration. Family-owned, licensed, and fully insured.</p>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="sr-only">Facebook</span>
<iconify-icon className="text-xl" icon="solar:minimalistic-magnifer-linear"></iconify-icon> 
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</a>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
<ul className="space-y-3">
<li>
<a className="text-sm text-slate-400 hover:text-brand-400 transition-colors flex items-center" href="tel:5097145496">
<iconify-icon className="mr-2 text-lg" icon="solar:phone-linear"></iconify-icon> (509) 714-5496
                            </a>
</li>
<li>
<a className="text-sm text-slate-400 hover:text-brand-400 transition-colors flex items-center break-all" href="mailto:spokanepressurewash@gmail.com">
<iconify-icon className="mr-2 text-lg" icon="solar:letter-linear"></iconify-icon> spokanepressurewash@gmail.com
                            </a>
</li>
<li className="text-sm text-slate-400 flex items-start">
<iconify-icon className="mr-2 mt-0.5 text-lg" icon="solar:map-point-linear"></iconify-icon> Serving Spokane, WA &amp; surrounding areas
                        </li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Services</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-brand-400 transition-colors" href="#services">Residential Washing</a></li>
<li><a className="text-sm text-slate-400 hover:text-brand-400 transition-colors" href="#services">Roof Cleaning</a></li>
<li><a className="text-sm text-slate-400 hover:text-brand-400 transition-colors" href="#services">Driveways &amp; Patios</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Business Hours</h3>
<ul className="space-y-3">
<li className="flex justify-between text-sm text-slate-400 border-b border-slate-800 pb-2">
<span>Monday - Sunday</span>
<span>7:00 AM - 9:00 PM</span>
</li>
<li className="pt-2">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                Open Everyday
                            </span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-xs text-slate-500 mb-4 md:mb-0">
                    © 2024 Pacific Exterior Cleaning. All rights reserved.
                </p>
<div className="flex space-x-6 text-xs text-slate-500">
<a className="hover:text-slate-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-300 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
