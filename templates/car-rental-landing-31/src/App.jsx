import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
700: '#334155',
800: '#1e293b',
900: '#0f172a',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function navigate(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block');
            });
            
            // Show target page
            const target = document.getElementById(`page-${pageId}`);
            if(target) {
                target.classList.remove('hidden');
                target.classList.add('block');
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function openModal() {
            const modal = document.getElementById('booking-modal');
            modal.classList.remove('hidden');
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('booking-modal');
            modal.classList.add('hidden');
            // Restore body scroll
            document.body.style.overflow = '';
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex-shrink-0 flex items-center cursor-pointer" onclick="navigate('home')">
<span className="tracking-tighter font-semibold text-xl">RNTL</span>
</div>
<div className="hidden md:flex space-x-8">
<button className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors" onclick="navigate('home')">Home</button>
<button className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors" onclick="navigate('categories')">Categories</button>
<button className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors" onclick="navigate('contact')">Contact</button>
</div>
<div className="flex items-center">
<button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors hidden sm:block" onclick="navigate('categories')">
                        Book a Ride
                    </button>

<button className="md:hidden ml-4 text-slate-600">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="flex-grow relative">

<div className="page-section block pb-24" id="page-home">

<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="w-full lg:w-1/2 flex flex-col items-start text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-green-500"></span> Available 24/7
                        </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-slate-900 mb-6 leading-tight">
                            Move freely <br/> across the city.
                        </h1>
<p className="text-lg text-slate-600 mb-8 max-w-md font-light leading-relaxed">
                            Access a diverse fleet of premium vehicles on demand. Transparent pricing, no hidden fees, just seamless travel.
                        </p>
<div className="flex gap-4 w-full sm:w-auto">
<button className="flex-1 sm:flex-none bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors text-center" onclick="navigate('categories')">
                                View Fleet
                            </button>
<button className="flex-1 sm:flex-none bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors text-center" onclick="navigate('contact')">
                                Learn More
                            </button>
</div>
</div>
<div className="w-full lg:w-1/2 relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 relative">
<img alt="Premium Car" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="bg-white border-y border-slate-100 py-20">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-12 text-center">Why ride with us</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100/50 transition-colors">
<iconify-icon className="text-3xl text-slate-900 mb-4" icon="solar:wallet-linear"></iconify-icon>
<h3 className="text-lg tracking-tight font-medium mb-2">Transparent Pricing</h3>
<p className="text-sm text-slate-600 font-light leading-relaxed">Know exactly what you'll pay before you book. No hidden charges or unexpected fees at drop-off.</p>
</div>
<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100/50 transition-colors">
<iconify-icon className="text-3xl text-slate-900 mb-4" icon="solar:map-arrow-up-linear"></iconify-icon>
<h3 className="text-lg tracking-tight font-medium mb-2">Flexible Locations</h3>
<p className="text-sm text-slate-600 font-light leading-relaxed">Pick up and drop off your vehicle at numerous convenient locations across the metropolitan area.</p>
</div>
<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100/50 transition-colors">
<iconify-icon className="text-3xl text-slate-900 mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-lg tracking-tight font-medium mb-2">Fully Insured</h3>
<p className="text-sm text-slate-600 font-light leading-relaxed">Drive with peace of mind knowing all our vehicles come with comprehensive insurance coverage.</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-2">Top rentals</h2>
<p className="text-sm text-slate-600 font-light">Our most popular vehicles available today.</p>
</div>
<button className="text-sm font-medium text-slate-900 hover:text-slate-600 flex items-center gap-1" onclick="navigate('categories')">
                        View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
<div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
<img alt="Sedan" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-5 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg tracking-tight font-medium">Executive Sedan</h3>
<span className="bg-slate-100 text-slate-900 text-xs px-2 py-1 rounded font-medium">$85/d</span>
</div>
<p className="text-xs text-slate-500 mb-4">Comfortable, efficient, perfect for city meetings.</p>
<div className="flex items-center gap-4 text-xs text-slate-600 mb-6">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 5 Seats</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:settings-linear"></iconify-icon> Auto</span>
</div>
<button className="mt-auto w-full py-2.5 bg-slate-50 border border-slate-200 text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors" onclick="navigate('details')">
                                View Details
                            </button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
<div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
<img alt="SUV" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-5 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg tracking-tight font-medium">Compact SUV</h3>
<span className="bg-slate-100 text-slate-900 text-xs px-2 py-1 rounded font-medium">$110/d</span>
</div>
<p className="text-xs text-slate-500 mb-4">Spacious interior with great elevated visibility.</p>
<div className="flex items-center gap-4 text-xs text-slate-600 mb-6">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 5 Seats</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:settings-linear"></iconify-icon> Auto</span>
</div>
<button className="mt-auto w-full py-2.5 bg-slate-50 border border-slate-200 text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors" onclick="navigate('details')">
                                View Details
                            </button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
<div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
<img alt="Luxury" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-5 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg tracking-tight font-medium">Electric Performance</h3>
<span className="bg-slate-100 text-slate-900 text-xs px-2 py-1 rounded font-medium">$150/d</span>
</div>
<p className="text-xs text-slate-500 mb-4">Zero emissions with instant torque and premium tech.</p>
<div className="flex items-center gap-4 text-xs text-slate-600 mb-6">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 4 Seats</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bolt-linear"></iconify-icon> EV</span>
</div>
<button className="mt-auto w-full py-2.5 bg-slate-50 border border-slate-200 text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors" onclick="navigate('details')">
                                View Details
                            </button>
</div>
</div>
</div>
</section>

<section className="bg-white border-y border-slate-100 py-20">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-12 text-center">Rider feedback</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 border border-slate-200 rounded-xl bg-white">
<div className="flex gap-1 text-slate-900 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 font-light mb-4">"The process was incredibly smooth. Car was clean and ready exactly when I needed it. Appreciate the straightforward pricing."</p>
<p className="text-xs font-medium text-slate-900">Michael T.</p>
</div>
<div className="p-6 border border-slate-200 rounded-xl bg-white">
<div className="flex gap-1 text-slate-900 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 font-light mb-4">"Best rental experience I've had. The electric vehicle option was perfect for my weekend trip. Highly recommended."</p>
<p className="text-xs font-medium text-slate-900">Sarah L.</p>
</div>
<div className="p-6 border border-slate-200 rounded-xl bg-white">
<div className="flex gap-1 text-slate-900 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm text-slate-600 font-light mb-4">"Solid selection of cars. The pickup location was convenient and the support team was responsive when I had a question."</p>
<p className="text-xs font-medium text-slate-900">David R.</p>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden pb-24" id="page-categories">
<div className="bg-white border-b border-slate-200 pt-12 pb-8">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900 mb-4">Fleet Categories</h1>
<p className="text-sm text-slate-600 max-w-2xl font-light">Find the perfect vehicle for your journey. From compact city cars to spacious family vans.</p>
</div>
</div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative rounded-2xl overflow-hidden bg-slate-900 cursor-pointer" onclick="navigate('details')">
<div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-300">
<img alt="Sedans" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="relative p-8 h-64 flex flex-col justify-end">
<h2 className="text-2xl tracking-tight font-semibold text-white mb-2">Sedans</h2>
<p className="text-sm text-slate-200 font-light flex items-center gap-2">Explore models <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-900 cursor-pointer" onclick="navigate('details')">
<div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-300">
<img alt="SUVs" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="relative p-8 h-64 flex flex-col justify-end">
<h2 className="text-2xl tracking-tight font-semibold text-white mb-2">SUVs &amp; Crossovers</h2>
<p className="text-sm text-slate-200 font-light flex items-center gap-2">Explore models <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-900 cursor-pointer" onclick="navigate('details')">
<div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-300">
<img alt="Electric" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="relative p-8 h-64 flex flex-col justify-end">
<h2 className="text-2xl tracking-tight font-semibold text-white mb-2">Electric Vehicles</h2>
<p className="text-sm text-slate-200 font-light flex items-center gap-2">Explore models <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-900 cursor-pointer" onclick="navigate('details')">
<div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-300">
<img alt="Minivans" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="relative p-8 h-64 flex flex-col justify-end">
<h2 className="text-2xl tracking-tight font-semibold text-white mb-2">Minivans &amp; Vans</h2>
<p className="text-sm text-slate-200 font-light flex items-center gap-2">Explore models <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></p>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden pb-24" id="page-details">

<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<button className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1 font-medium transition-colors" onclick="navigate('categories')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Categories
                </button>
</div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row shadow-sm">

<div className="w-full lg:w-3/5 bg-slate-100 relative min-h-[300px] lg:min-h-[500px]">
<img alt="Car Detail" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>

<div className="w-full lg:w-2/5 p-8 lg:p-10 flex flex-col">
<div className="mb-2 flex items-center gap-2">
<span className="bg-slate-100 text-slate-600 text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded">Electric</span>
<span className="bg-slate-100 text-slate-600 text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded">Premium</span>
</div>
<h1 className="text-3xl tracking-tight font-semibold text-slate-900 mb-2">Performance EV</h1>
<p className="text-sm text-slate-500 font-light mb-8">Sleek design meets unmatched electric performance. Perfect for business or a weekend getaway with a focus on sustainability.</p>

<div className="flex items-end gap-2 mb-8 pb-8 border-b border-slate-100">
<span className="text-4xl tracking-tight font-semibold text-slate-900">$150</span>
<span className="text-sm text-slate-500 mb-1">/ day</span>
</div>

<h3 className="text-sm font-medium text-slate-900 mb-4">Specifications</h3>
<div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase tracking-wider">Seats</p>
<p className="text-sm font-medium">4 People</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase tracking-wider">Transmission</p>
<p className="text-sm font-medium">Automatic</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
<iconify-icon className="text-lg" icon="solar:bolt-linear"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase tracking-wider">Fuel Type</p>
<p className="text-sm font-medium">Electric</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
<iconify-icon className="text-lg" icon="solar:smart-home-doors-linear"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase tracking-wider">Doors</p>
<p className="text-sm font-medium">4 Doors</p>
</div>
</div>
</div>

<button className="w-full bg-slate-900 text-white py-4 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors mt-auto shadow-sm" onclick="openModal()">
                            Rent this vehicle
                        </button>
</div>
</div>
</div>
</div>

<div className="page-section hidden pb-24" id="page-contact">
<div className="bg-white border-b border-slate-200 pt-12 pb-8 mb-12">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900 mb-4">Get in touch</h1>
<p className="text-sm text-slate-600 max-w-2xl font-light">Have questions about our fleet or your booking? Our support team is here to help.</p>
</div>
</div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-12">

<div className="w-full md:w-1/3">
<div className="space-y-8">
<div>
<h3 className="text-sm font-medium text-slate-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Headquarters
                                </h3>
<p className="text-sm text-slate-600 font-light">100 Driveway Blvd,<br/>Suite 400<br/>Metropolis, NY 10001</p>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:phone-calling-linear"></iconify-icon> Phone Support
                                </h3>
<p className="text-sm text-slate-600 font-light">+1 (800) 555-0199</p>
<p className="text-xs text-slate-400 mt-1">Available 24/7</p>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:letter-linear"></iconify-icon> Email
                                </h3>
<p className="text-sm text-slate-600 font-light">support@rntl.co</p>
</div>
</div>
</div>

<div className="w-full md:w-2/3 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">First Name</label>
<input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-colors" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Last Name</label>
<input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
<input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-colors" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Message</label>
<textarea className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-colors resize-none" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors w-full sm:w-auto">
                                Send Message
                            </button>
</form>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-200 py-12 mt-auto">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center">
<span className="tracking-tighter font-semibold text-xl text-slate-900">RNTL</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<button className="hover:text-slate-900 transition-colors" onclick="navigate('home')">Home</button>
<button className="hover:text-slate-900 transition-colors" onclick="navigate('categories')">Categories</button>
<button className="hover:text-slate-900 transition-colors" onclick="navigate('contact')">Contact</button>
</div>
<div className="text-xs text-slate-400 font-light">
                © 2023 RNTL Inc. All rights reserved.
            </div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="booking-modal">

<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>

<div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
<div className="bg-white rounded-2xl shadow-xl w-full max-w-md pointer-events-auto flex flex-col overflow-hidden border border-slate-200">

<div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
<h2 className="text-lg tracking-tight font-medium text-slate-900">Book Vehicle</h2>
<button className="text-slate-400 hover:text-slate-700 transition-colors" onclick="closeModal()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<div className="p-6 overflow-y-auto max-h-[80vh] no-scrollbar">
<div className="flex items-center gap-4 mb-6 p-3 bg-slate-50 rounded-lg border border-slate-100">
<img alt="Car thumb" className="w-16 h-12 object-cover rounded" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div>
<p className="text-sm font-medium text-slate-900">Performance EV</p>
<p className="text-xs text-slate-500">$150 / day</p>
</div>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); closeModal();">

<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[10px] font-medium uppercase tracking-wider text-slate-500 mb-1">Pick-up Date</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:calendar-linear"></iconify-icon>
<input className="w-full rounded-lg border border-slate-300 bg-white pl-9 pr-3 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-colors" type="date"/>
</div>
</div>
<div>
<label className="block text-[10px] font-medium uppercase tracking-wider text-slate-500 mb-1">Drop-off Date</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:calendar-linear"></iconify-icon>
<input className="w-full rounded-lg border border-slate-300 bg-white pl-9 pr-3 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-colors" type="date"/>
</div>
</div>
</div>

<div>
<label className="block text-[10px] font-medium uppercase tracking-wider text-slate-500 mb-1">Pick-up Location</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:map-point-linear"></iconify-icon>
<select className="w-full rounded-lg border border-slate-300 bg-white pl-9 pr-3 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-colors appearance-none">
<option>Downtown Station</option>
<option>Airport Terminal 1</option>
<option>Westside Hub</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<hr className="border-slate-100 my-4"/>

<div>
<label className="block text-[10px] font-medium uppercase tracking-wider text-slate-500 mb-1">Full Name</label>
<input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-colors" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-[10px] font-medium uppercase tracking-wider text-slate-500 mb-1">Phone Number</label>
<input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-colors" placeholder="+1 (555) 000-0000" type="tel"/>
</div>

<div className="flex items-start gap-3 pt-2">
<input className="custom-checkbox mt-0.5" id="insurance" type="checkbox"/>
<label className="text-xs text-slate-600 font-light leading-tight cursor-pointer select-none" htmlFor="insurance">
                                Add full coverage insurance (+$25/day). Recommended for peace of mind.
                            </label>
</div>

<div className="pt-4">
<button className="w-full bg-slate-900 text-white py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm" type="submit">
                                Confirm Booking
                            </button>
</div>
</form>
</div>
</div>
</div>
</div>



    </>
  );
}
