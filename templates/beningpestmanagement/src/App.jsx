import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
forest: {
50: '#f0fdf4',
100: '#dcfce7',
200: '#bbf7d0',
300: '#86efac',
400: '#4ade80',
500: '#22c55e',
600: '#16a34a',
700: '#15803d',
800: '#166534',
900: '#14532d', // Primary Brand Dark
950: '#052e16',
},
gold: {
50: '#fefce8',
100: '#fef9c3',
200: '#fef08a',
300: '#fde047',
400: '#facc15',
500: '#eab308', // Primary Brand Accent
600: '#ca8a04',
700: '#a16207',
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
      

<nav className="fixed w-full z-50 transition-all duration-300 bg-forest-900 shadow-sm border-b border-forest-800/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a className="flex flex-col" href="#">
<span className="font-serif text-2xl font-medium tracking-tighter text-white leading-none">BENING</span>
<span className="text-[0.65rem] tracking-widest text-gold-400 uppercase font-medium mt-1">Pest Management</span>
</a>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-forest-100 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-forest-100 hover:text-white transition-colors" href="#about">About Benny</a>
<a className="text-sm font-medium text-forest-100 hover:text-white transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-forest-100 hover:text-white transition-colors" href="#portfolio">Our Work</a>
<a className="inline-flex items-center gap-2 bg-gold-500 text-forest-950 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-400 transition-colors shadow-sm" href="tel:+19196738999">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                        Call Benny Now
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-forest-950 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Pest control technician at work" className="opacity-30 mix-blend-overlay w-full h-full object-cover" src="https://img.freepik.com/premium-photo/worker-protective-gear-applying-pest-control-chemicals-garden-remove-harmful-insects-protect-plants-crops_86390-40908.jpg?w=740&amp;q=80"/>
<div className="bg-gradient-to-t from-forest-950 via-forest-900/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800/50 border border-forest-700 backdrop-blur-sm text-xs font-medium text-forest-100 mb-8">
<iconify-icon className="text-gold-400" icon="solar:star-fall-linear"></iconify-icon>
                Cary's Top-Rated Local Exterminator
            </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
                Protecting Cary Homes &amp; Businesses, <span className="italic text-gold-400">One Family at a Time.</span>
</h1>
<p className="text-lg md:text-xl text-forest-100 font-light mb-10 max-w-2xl mx-auto">
                Skip the national chains. Get guaranteed results and personal care from Benny Campbell, your neighborhood pest expert for over 15 years.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold-500 text-forest-950 px-8 py-4 rounded-full text-base font-semibold hover:bg-gold-400 transition-all shadow-lg hover:shadow-gold-500/20" href="tel:+19196738999">
<iconify-icon className="text-xl" icon="solar:phone-rounded-linear" strokeWidth="1.5"></iconify-icon>
                    Call 919-673-8999
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 backdrop-blur-sm px-8 py-4 rounded-full text-base font-medium hover:bg-white/20 transition-all" href="#contact">
                    Request a Free Quote
                </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-forest-800/50 max-w-4xl mx-auto">
<div className="flex flex-col items-center">
<span className="text-2xl font-serif font-medium text-white mb-1">15+</span>
<span className="text-xs text-forest-200">Years Experience</span>
</div>
<div className="flex flex-col items-center">
<div className="flex text-gold-400 text-sm mb-2">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-forest-200">4.9/5 Google Rating</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-serif font-medium text-white mb-1">Local</span>
<span className="text-xs text-forest-200">Cary Owned</span>
</div>
<div className="flex flex-col items-center">
<iconify-icon className="text-2xl text-gold-400 mb-1" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs text-forest-200">Licensed &amp; Insured</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-serif font-medium text-forest-900 tracking-tight mb-4">Why Cary Residents Choose Bening</h2>
<p className="text-base text-slate-500 max-w-2xl mx-auto">We bring a level of attention to detail and personal accountability that large franchises simply can't match.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-forest-200 transition-colors group">
<div className="w-12 h-12 bg-forest-50 text-forest-700 rounded-xl flex items-center justify-center mb-5 group-hover:bg-forest-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:tag-price-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-forest-950 mb-2 tracking-tight">Honest, Upfront Pricing</h3>
<p className="text-sm text-slate-500 leading-relaxed">No hidden fees or surprise upcharges. You know exactly what you're paying for before we start.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-forest-200 transition-colors group">
<div className="w-12 h-12 bg-forest-50 text-forest-700 rounded-xl flex items-center justify-center mb-5 group-hover:bg-forest-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:shield-user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-forest-950 mb-2 tracking-tight">Licensed &amp; Insured</h3>
<p className="text-sm text-slate-500 leading-relaxed">Fully credentialed to handle North Carolina's specific pest control and structural needs safely.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-forest-200 transition-colors group">
<div className="w-12 h-12 bg-forest-50 text-forest-700 rounded-xl flex items-center justify-center mb-5 group-hover:bg-forest-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-forest-950 mb-2 tracking-tight">Local Cary Expert</h3>
<p className="text-sm text-slate-500 leading-relaxed">We understand local weather patterns, construction types, and the specific pest cycles of the Triangle area.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-forest-200 transition-colors group">
<div className="w-12 h-12 bg-forest-50 text-forest-700 rounded-xl flex items-center justify-center mb-5 group-hover:bg-forest-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:medal-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-forest-950 mb-2 tracking-tight">100% Satisfaction</h3>
<p className="text-sm text-slate-500 leading-relaxed">If pests return between your scheduled quarterly treatments, we return to re-treat at no extra cost.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-forest-900 relative overflow-hidden" id="services">

<div className="absolute top-0 right-0 w-1/2 h-full bg-forest-800/30 rounded-l-full blur-3xl transform translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-serif font-medium text-white tracking-tight mb-4">Our Services</h2>
<p className="text-base text-forest-100">Comprehensive, targeted solutions designed to protect your property from North Carolina's most persistent pests.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors" href="#contact">
                    Request a Service <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-forest-950/50 border border-forest-800 rounded-2xl p-8 hover:bg-forest-800/50 transition-colors">
<div className="flex items-start gap-5">
<div className="w-12 h-12 flex-shrink-0 bg-forest-800 text-gold-400 rounded-xl flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:bug-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Quarterly Pest Control</h3>
<p className="text-sm text-forest-200 mb-4 leading-relaxed">Our most popular plan. Routine residential protection establishing an exterior barrier against spiders, ants, millipedes, and common household pests.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-forest-100"><iconify-icon className="text-gold-500" icon="solar:check-circle-linear"></iconify-icon> Exterior barrier application</li>
<li className="flex items-center gap-2 text-xs text-forest-100"><iconify-icon className="text-gold-500" icon="solar:check-circle-linear"></iconify-icon> Web and wasp nest removal</li>
<li className="flex items-center gap-2 text-xs text-forest-100"><iconify-icon className="text-gold-500" icon="solar:check-circle-linear"></iconify-icon> Free between-service callbacks</li>
</ul>
</div>
</div>
</div>

<div className="bg-forest-950/50 border border-forest-800 rounded-2xl p-8 hover:bg-forest-800/50 transition-colors">
<div className="flex items-start gap-5">
<div className="w-12 h-12 flex-shrink-0 bg-forest-800 text-gold-400 rounded-xl flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Termite Inspections &amp; Treatment</h3>
<p className="text-sm text-forest-200 mb-4 leading-relaxed">Protect your biggest investment. Thorough structural evaluations and advanced liquid barrier treatments to eradicate subterranean termites.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-forest-100"><iconify-icon className="text-gold-500" icon="solar:check-circle-linear"></iconify-icon> Real estate WDIR reports</li>
<li className="flex items-center gap-2 text-xs text-forest-100"><iconify-icon className="text-gold-500" icon="solar:check-circle-linear"></iconify-icon> Preventative soil treatments</li>
<li className="flex items-center gap-2 text-xs text-forest-100"><iconify-icon className="text-gold-500" icon="solar:check-circle-linear"></iconify-icon> Active infestation eradication</li>
</ul>
</div>
</div>
</div>

<div className="bg-forest-950/50 border border-forest-800 rounded-2xl p-8 hover:bg-forest-800/50 transition-colors">
<div className="flex items-start gap-5">
<div className="w-12 h-12 flex-shrink-0 bg-forest-800 text-gold-400 rounded-xl flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Specialized Pest Removal</h3>
<p className="text-sm text-forest-200 mb-4 leading-relaxed">Targeted, aggressive solutions for severe infestations requiring immediate attention, including stinging insects and rodents.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-forest-100"><iconify-icon className="text-gold-500" icon="solar:check-circle-linear"></iconify-icon> Hornet &amp; wasp nest removal</li>
<li className="flex items-center gap-2 text-xs text-forest-100"><iconify-icon className="text-gold-500" icon="solar:check-circle-linear"></iconify-icon> German roach cleanouts</li>
<li className="flex items-center gap-2 text-xs text-forest-100"><iconify-icon className="text-gold-500" icon="solar:check-circle-linear"></iconify-icon> Rodent baiting &amp; exclusion advice</li>
</ul>
</div>
</div>
</div>

<div className="bg-forest-950/50 border border-forest-800 rounded-2xl p-8 hover:bg-forest-800/50 transition-colors">
<div className="flex items-start gap-5">
<div className="w-12 h-12 flex-shrink-0 bg-forest-800 text-gold-400 rounded-xl flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Commercial Services</h3>
<p className="text-sm text-forest-200 mb-4 leading-relaxed">Customized pest management protocols tailored for Cary's small businesses, offices, and retail spaces to ensure a sanitary environment.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-forest-100"><iconify-icon className="text-gold-500" icon="solar:check-circle-linear"></iconify-icon> Discreet service hours</li>
<li className="flex items-center gap-2 text-xs text-forest-100"><iconify-icon className="text-gold-500" icon="solar:check-circle-linear"></iconify-icon> Regulatory compliance support</li>
<li className="flex items-center gap-2 text-xs text-forest-100"><iconify-icon className="text-gold-500" icon="solar:check-circle-linear"></iconify-icon> Customized baiting programs</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-serif font-medium text-forest-900 tracking-tight mb-4">Trusted by Cary Customers</h2>
<p className="text-base text-slate-500 max-w-xl mx-auto mb-8">Don't just take our word for it. Here is what your neighbors are saying about Benny's service.</p>
<div className="inline-flex items-center gap-6 px-6 py-3 bg-white rounded-full shadow-sm border border-slate-100">
<div className="flex items-center gap-2">
<span className="font-semibold text-slate-900">4.9</span>
<div className="flex text-gold-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<div className="w-px h-4 bg-slate-200"></div>
<span className="text-sm text-slate-600">18+ Google Reviews</span>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<div className="flex text-gold-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="flex items-center gap-1 text-[0.65rem] font-medium text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-1 rounded">
<iconify-icon className="text-blue-500 text-xs" icon="solar:verified-check-bold"></iconify-icon> Google
                            </span>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">"Benny has been servicing our home in Preston for over 3 years. He is always punctual, friendly, and most importantly, we haven't seen an ant or spider inside since he started."</p>
</div>
<div>
<p className="text-sm font-medium text-forest-950">Sarah M.</p>
<p className="text-xs text-slate-400">Quarterly Service</p>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<div className="flex text-gold-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="flex items-center gap-1 text-[0.65rem] font-medium text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-1 rounded">
<iconify-icon className="text-blue-500 text-xs" icon="solar:verified-check-bold"></iconify-icon> Google
                            </span>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">"Found a massive wasp nest near our front door. Called Benny and he came out the same day to take care of it safely. True professional and very reasonably priced."</p>
</div>
<div>
<p className="text-sm font-medium text-forest-950">David T.</p>
<p className="text-xs text-slate-400">Specialized Removal</p>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<div className="flex text-gold-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="flex items-center gap-1 text-[0.65rem] font-medium text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-1 rounded">
<iconify-icon className="text-blue-500 text-xs" icon="solar:verified-check-bold"></iconify-icon> Google
                            </span>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">"We needed a quick termite inspection for closing on our house in Lochmere. Bening Pest Management was fast, thorough, and provided the documentation we needed right away."</p>
</div>
<div>
<p className="text-sm font-medium text-forest-950">Jessica R.</p>
<p className="text-xs text-slate-400">Termite Inspection</p>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<div className="flex text-gold-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="flex items-center gap-1 text-[0.65rem] font-medium text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-1 rounded">
<iconify-icon className="text-blue-500 text-xs" icon="solar:verified-check-bold"></iconify-icon> Google
                            </span>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">"Love supporting local businesses. Benny treats you like a neighbor, not just an invoice number. His quarterly treatments work wonders against the Carolina bugs."</p>
</div>
<div>
<p className="text-sm font-medium text-forest-950">Mark W.</p>
<p className="text-xs text-slate-400">Quarterly Service</p>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-forest-700 hover:text-forest-900 transition-colors" href="https://www.google.com/maps/search/?api=1&amp;query=Scaduto+Solutions+LLC&amp;query_place_id=ChIJpfc5hq-jCIgR_8cn-pOUqiQ46" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:link-circle-linear"></iconify-icon>
                    Read More Reviews on Google
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="portfolio">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-serif font-medium text-forest-900 tracking-tight mb-4">On The Job in Cary</h2>
<p className="text-base text-slate-500">Real work protecting real homes. Glimpses into our daily operations.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">

<div className="relative group rounded-xl overflow-hidden bg-slate-100 aspect-square">
<img alt="Technician inspecting home foundation" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://img.freepik.com/free-photo/medium-shot-people-wearing-equipment_23-2148926598.jpg?w=740&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-0 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-white text-sm font-medium">Foundation Inspection</span>
</div>
</div>

<div className="relative group rounded-xl overflow-hidden bg-slate-100 aspect-square">
<img alt="Pest control equipment close up" className="transition-transform duration-500 group-hover:scale-105 cursor-pointer w-full h-full object-cover" onclick="window.location.href='https://img.freepik.com/premium-photo/professional-pest-control-worker-protective-gear-capturing-cockroaches-kitchen-floor_1189127-4649.jpg?semt=ais_hybrid&amp;w=740&amp;q=80'" role="button" src="https://img.freepik.com/premium-photo/professional-pest-control-worker-protective-gear-capturing-cockroaches-kitchen-floor_1189127-4649.jpg?w=740&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-0 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-white text-sm font-medium">Precision Treatment</span>
</div>
</div>

<div className="relative group rounded-xl overflow-hidden bg-slate-100 aspect-square">
<img alt="Exterior home being treated" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://img.freepik.com/premium-photo/pest-control-worker-protective-suit-mask-operates-powerful-sprayer-ready-tackle-any-insect-infestation_856795-71314.jpg?w=740&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-0 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-white text-sm font-medium">Exterior Barrier Application</span>
</div>
</div>

<div className="relative group rounded-xl overflow-hidden bg-slate-100 aspect-square">
<img alt="Crawlspace inspection" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://img.freepik.com/free-photo/medium-shot-man-wearing-suit_23-2148926652.jpg?w=800&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-0 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-white text-sm font-medium">Termite Evaluation</span>
</div>
</div>

<div className="relative group rounded-xl overflow-hidden bg-slate-100 aspect-square">
<img alt="Technician talking to homeowner" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://img.freepik.com/premium-photo/pest-control-worker-spraying-front-house_1203353-13501.jpg?w=800&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-0 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-white text-sm font-medium">Client Consultation</span>
</div>
</div>

<div className="relative group rounded-xl overflow-hidden bg-slate-100 aspect-square">
<img alt="Commercial office space" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-sm font-medium">Commercial Services</span>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center justify-center gap-2 bg-forest-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-forest-800 transition-colors" href="#contact">
                    Get Your Home Protected
                </a>
</div>
</div>
</section>

<section className="overflow-hidden bg-forest-50 pt-24 pb-24" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 relative">

<div className="absolute -top-6 -left-6 w-32 h-32 bg-forest-200 rounded-2xl -z-10"></div>
<img alt="Professional businessman/technician" className="aspect-[4/5] w-full object-cover rounded-2xl shadow-xl" src="https://img.freepik.com/free-photo/people-disinfecting-together-dangerous-area_23-2148848569.jpg?w=740&amp;q=80"/>

<div className="-bottom-8 md:-right-8 flex gap-4 bg-white border-slate-100 border rounded-xl pt-5 pr-5 pb-5 pl-5 absolute right-4 shadow-lg items-center">
<div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:shield-check-bold"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wide font-medium">The Bening Promise</p>
<p className="text-sm font-medium text-forest-950">100% Satisfaction Guarantee</p>
</div>
</div>
</div>
<div className="w-full lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-serif font-medium text-forest-900 tracking-tight mb-6">Meet Your Neighborhood Expert</h2>
<p className="text-base text-slate-600 mb-6 leading-relaxed">
                        Bening Pest Management is a premier, owner-operated pest control service led by Benny Campbell. For over a decade, Benny has been the go-to expert in Cary, North Carolina, known for his punctuality, deep knowledge of local pest cycles, and honest approach.
                    </p>
<p className="text-base text-slate-600 mb-8 leading-relaxed">
                        We believe that protecting your home shouldn't involve high-pressure sales tactics or rotating technicians who don't know your property. We thrive on word-of-mouth and long-term customer loyalty because we provide a level of personal care and attention that the "big box" national franchises simply cannot match.
                    </p>
<div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
<div className="flex items-center gap-3">
<iconify-icon className="text-gold-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-forest-900">Owner-Operated</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-gold-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-forest-900">Family Owned</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-gold-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-forest-900">Punctual Service</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-gold-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-forest-900">Guaranteed Results</span>
</div>
</div>
<img alt="Benny Campbell Signature" className="h-12 opacity-40 mb-2 filter invert-[0.3] sepia-[1] hue-rotate-[100deg] saturate-[0.5]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<p className="text-sm font-serif font-medium text-forest-900">Benny Campbell, Owner</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-16">

<div className="w-full lg:w-5/12">
<h2 className="text-3xl md:text-4xl font-serif font-medium text-forest-900 tracking-tight mb-4">Let's Protect Your Home</h2>
<p className="text-base text-slate-500 mb-10">We are currently accepting new service requests in Cary and surrounding areas. Reach out today for a free, no-obligation quote.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-forest-50 text-forest-700 rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Call Benny Directly</p>
<a className="text-xl font-medium text-forest-950 hover:text-gold-600 transition-colors" href="tel:+19196738999">+1 919-673-8999</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-forest-50 text-forest-700 rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
<a className="text-base font-medium text-forest-950 hover:text-gold-600 transition-colors" href="mailto:bening@nc.rr.com">bening@nc.rr.com</a>
<p className="text-xs text-slate-500 mt-1">We typically respond within 24 hours.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-forest-50 text-forest-700 rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Business Hours</p>
<p className="text-base font-medium text-forest-950">Mon – Fri: 8:00 AM – 5:00 PM</p>
<p className="text-sm text-slate-500 mt-1">Sat – Sun: Closed</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-forest-50 text-forest-700 rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Proudly Serving</p>
<p className="text-base font-medium text-forest-950">Cary, NC &amp; Surrounding Areas</p>
<p className="text-sm text-slate-500 mt-1">Including Apex, Morrisville, and West Raleigh.</p>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-7/12">
<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
<h3 className="text-xl font-medium text-forest-950 mb-6 tracking-tight">Request a Free Quote</h3>
<form action="#" className="space-y-5" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500/20 focus:border-forest-500 transition-colors" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="phone">Phone Number</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500/20 focus:border-forest-500 transition-colors" id="phone" name="phone" placeholder="(919) 555-0123" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500/20 focus:border-forest-500 transition-colors" id="email" name="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="service">Service Needed</label>
<select className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500/20 focus:border-forest-500 transition-colors text-slate-600" id="service" name="service">
<option>Quarterly Pest Control</option>
<option>Termite Inspection / Treatment</option>
<option>Specialized Pest Removal (Wasps, Roaches)</option>
<option>Commercial Service</option>
<option>Other / Not Sure</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="message">How can we help?</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500/20 focus:border-forest-500 transition-colors resize-none" id="message" name="message" placeholder="Briefly describe your pest issue or request..." rows="4"></textarea>
</div>
<button className="w-full bg-forest-900 text-white px-6 py-4 rounded-xl text-sm font-medium hover:bg-forest-800 transition-colors shadow-sm flex justify-center items-center gap-2" type="submit">
                                Send Message <iconify-icon icon="solar:plain-2-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-forest-950 relative overflow-hidden border-t border-forest-800">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-white tracking-tight mb-6">Ready to Get Started?</h2>
<p className="text-lg text-forest-200 mb-10 max-w-2xl mx-auto">We are currently accepting new service requests. Thank you for choosing Bening Pest Management to protect your home.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold-500 text-forest-950 px-8 py-4 rounded-full text-base font-semibold hover:bg-gold-400 transition-all shadow-lg hover:shadow-gold-500/20" href="tel:+19196738999">
<iconify-icon className="text-xl" icon="solar:phone-rounded-linear" strokeWidth="1.5"></iconify-icon>
                    Call 919-673-8999
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-forest-950 px-8 py-4 rounded-full text-base font-medium hover:bg-slate-100 transition-all shadow-lg" href="#contact">
                    Get a Free Quote
                </a>
</div>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-forest-300">
<span className="flex items-center gap-2"><iconify-icon className="text-gold-500" icon="solar:shield-check-bold"></iconify-icon> Licensed &amp; Insured</span>
<span className="flex items-center gap-2"><iconify-icon className="text-gold-500" icon="solar:star-bold"></iconify-icon> 4.9/5 Google Rating</span>
<span className="flex items-center gap-2"><iconify-icon className="text-gold-500" icon="solar:medal-ribbon-star-bold"></iconify-icon> 15+ Years Experience</span>
</div>
</div>
</section>

<footer className="bg-forest-950 py-12 border-t border-forest-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

<div className="flex flex-col items-center md:items-start">
<a className="flex flex-col mb-2" href="#">
<span className="font-serif text-2xl font-medium tracking-tighter text-white leading-none">BENING</span>
<span className="text-[0.65rem] tracking-widest text-gold-400 uppercase font-medium mt-1">Pest Management</span>
</a>
<p className="text-xs text-forest-400">© 2024 Bening Pest Management. All rights reserved.</p>
</div>

<div className="flex flex-col items-center md:items-end text-sm text-forest-300">
<a className="hover:text-gold-400 transition-colors mb-1" href="tel:+19196738999">+1 919-673-8999</a>
<a className="hover:text-gold-400 transition-colors mb-2" href="mailto:bening@nc.rr.com">bening@nc.rr.com</a>
<p className="text-xs text-forest-500">Serving Cary, NC &amp; Triangle Area</p>
</div>
</div>
</footer>

    </>
  );
}
