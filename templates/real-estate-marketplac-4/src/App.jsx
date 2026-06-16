import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function switchTab(clickedTab) {
            // Get all buttons in the same container
            const container = clickedTab.parentElement;
            const buttons = container.querySelectorAll('button');
            
            // Define active and inactive classes
            const activeClasses = ['text-slate-900', 'border-rose-600'];
            const inactiveClasses = ['text-slate-500', 'border-transparent'];
            
            // Loop through all buttons to reset them to inactive state
            buttons.forEach(btn => {
                btn.classList.remove(...activeClasses);
                btn.classList.add(...inactiveClasses);
                // Ensure hover effect is active on inactive tabs
                btn.classList.add('hover:text-slate-900');
            });
            
            // Set the clicked button to active state
            clickedTab.classList.remove(...inactiveClasses);
            clickedTab.classList.add(...activeClasses);
            // Optional: Remove hover effect on active tab if desired (keeping it is usually fine)
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-20 items-center">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<img alt="Homex Properties" className="h-8 w-auto object-contain" src="https://optim.tildacdn.one/tild3231-6663-4564-b138-343261336261/-/resize/340x/-/format/webp/logo.png.webp"/>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-slate-900 font-medium text-sm hover:text-rose-600 transition-colors" href="#">Buy</a>
<a className="text-slate-500 font-medium text-sm hover:text-rose-600 transition-colors" href="#">Rent</a>
<a className="text-slate-500 font-medium text-sm hover:text-rose-600 transition-colors" href="#">Commercial</a>
<a className="text-slate-500 font-medium text-sm hover:text-rose-600 transition-colors" href="#">New Projects</a>
<a className="text-slate-500 font-medium text-sm hover:text-rose-600 transition-colors" href="#">Find Agent</a>
</div>

<div className="flex items-center space-x-4">
<button className="hidden md:flex items-center gap-2 text-slate-900 font-medium text-sm px-4 py-2 hover:bg-slate-50 rounded-full transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Saved</span>
</button>
<button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
                        List Property
                    </button>
</div>
</div>
</div>
</nav>

<div className="relative pt-20 h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Home" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
</div>

<div className="relative z-10 w-full max-w-5xl px-4">
<div className="text-center mb-8">
<h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-4">
                    Find your home.<br className="hidden md:block"/> Live your dream.
                </h1>
<p className="text-slate-200 text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
                    Explore the most exclusive portfolio of properties in the most prime locations.
                </p>
</div>

<div className="bg-white rounded-2xl p-2 shadow-2xl shadow-black/20 max-w-4xl mx-auto">

<div className="flex space-x-1 p-1 mb-2 border-b border-slate-100" id="searchTabs">
<button className="px-6 py-2 text-sm font-medium text-slate-900 border-b-2 border-rose-600 transition-all duration-200" onclick="switchTab(this)">Buy</button>
<button className="px-6 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 border-b-2 border-transparent transition-all duration-200" onclick="switchTab(this)">Rent</button>
<button className="px-6 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 border-b-2 border-transparent transition-all duration-200" onclick="switchTab(this)">Commercial</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-center p-2">

<div className="md:col-span-4 relative group">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="w-full pl-10 pr-4 py-3 bg-slate-50 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-600/20 transition-all" placeholder="City, community or building" type="text"/>
</div>

<div className="md:col-span-3 relative">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon icon="solar:home-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<select className="w-full pl-10 pr-8 py-3 bg-slate-50 rounded-xl text-sm font-medium text-slate-900 appearance-none focus:outline-none cursor-pointer">
<option>Property Type</option>
<option>Apartment</option>
<option>Villa</option>
<option>Penthouse</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>

<div className="md:col-span-3 relative">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon icon="solar:bed-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<select className="w-full pl-10 pr-8 py-3 bg-slate-50 rounded-xl text-sm font-medium text-slate-900 appearance-none focus:outline-none cursor-pointer">
<option>Beds &amp; Baths</option>
<option>1 Bed</option>
<option>2 Beds</option>
<option>3+ Beds</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>

<div className="md:col-span-2">
<button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Search</span>
</button>
</div>
</div>
</div>
</div>
</div>

<section className="bg-white border-b border-slate-100 py-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-bold tracking-tight">FORBES</span>
<span className="text-lg font-bold tracking-tight">EMAAR</span>
<span className="text-lg font-bold tracking-tight">DAMAC</span>
<span className="text-lg font-bold tracking-tight">SOTHEBY'S</span>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Popular Neighborhoods</h2>
<p className="text-slate-500 mt-1 text-sm">Explore the most sought-after communities</p>
</div>
<a className="text-rose-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
                    View all areas <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="flex space-x-4 overflow-x-auto hide-scroll pb-4">

<div className="relative flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Downtown" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white text-lg font-semibold">Downtown</h3>
<p className="text-slate-300 text-xs mt-1">1,240 Properties</p>
</div>
</div>

<div className="relative flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Marina" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white text-lg font-semibold">Marina</h3>
<p className="text-slate-300 text-xs mt-1">850 Properties</p>
</div>
</div>

<div className="relative flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Palm Jumeirah" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white text-lg font-semibold">Palm Jumeirah</h3>
<p className="text-slate-300 text-xs mt-1">420 Properties</p>
</div>
</div>

<div className="relative flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Hills Estate" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white text-lg font-semibold">Hills Estate</h3>
<p className="text-slate-300 text-xs mt-1">310 Properties</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
<div>
<span className="text-rose-600 font-semibold text-xs tracking-wider uppercase mb-2 block">Exclusive Listings</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Latest Properties for Sale</h2>
</div>

<div className="flex gap-2">
<button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium">All</button>
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:border-slate-300">Villas</button>
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:border-slate-300">Apartments</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="House" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-semibold text-slate-900 uppercase tracking-wide">
                            Super Agent
                        </div>
<button className="absolute top-4 right-4 w-8 h-8 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white text-slate-900 transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-medium text-white">
                            Apartment
                        </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">$ 1,250,000</h3>
</div>
<p className="text-slate-500 text-sm mb-4 truncate">Downtown Views II, Downtown Dubai</p>
<div className="flex items-center gap-6 border-t border-slate-100 pt-4">
<div className="flex items-center gap-2 text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:bed-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">3</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:bath-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">2</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:ruler-angular-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">1,850 sqft</span>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="House" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-rose-600 px-3 py-1 rounded-md text-xs font-semibold text-white uppercase tracking-wide">
                            New
                        </div>
<button className="absolute top-4 right-4 w-8 h-8 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white text-slate-900 transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-medium text-white">
                            Villa
                        </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">$ 3,800,000</h3>
</div>
<p className="text-slate-500 text-sm mb-4 truncate">Palm Jumeirah Frond N, Dubai</p>
<div className="flex items-center gap-6 border-t border-slate-100 pt-4">
<div className="flex items-center gap-2 text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:bed-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">5</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:bath-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">6</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:ruler-angular-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">5,400 sqft</span>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="House" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<button className="absolute top-4 right-4 w-8 h-8 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white text-slate-900 transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-medium text-white">
                            Penthouse
                        </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">$ 890,000</h3>
</div>
<p className="text-slate-500 text-sm mb-4 truncate">Marina Gate, Dubai Marina</p>
<div className="flex items-center gap-6 border-t border-slate-100 pt-4">
<div className="flex items-center gap-2 text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:bed-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">2</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:bath-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">2</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:ruler-angular-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">1,200 sqft</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="px-8 py-3 bg-white border border-slate-200 text-slate-900 font-medium rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-colors">
                    Load more properties
                </button>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-72 h-72 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
<img alt="Interior" className="relative rounded-2xl shadow-2xl w-full object-cover" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div>
<span className="text-rose-600 font-semibold text-xs tracking-wider uppercase">Why choose us</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mt-2 mb-6">Experience the future of<br/>real estate trading</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                        We provide a complete service for the sale, purchase or rental of real estate. We have been operating more than 10 years. Search millions of apartments and houses on Homex Properties.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 flex-shrink-0">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-semibold mb-1">Property Insurance</h4>
<p className="text-slate-500 text-sm">We offer comprehensive insurance packages to protect your valuable assets.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 flex-shrink-0">
<iconify-icon icon="solar:calculator-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-semibold mb-1">Tax Advantage</h4>
<p className="text-slate-500 text-sm">Expert advice on property tax benefits and investment optimization.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 flex-shrink-0">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-semibold mb-1">Lowest Commission</h4>
<p className="text-slate-500 text-sm">Competitive rates ensuring you get the most value out of your transaction.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
<div className="relative z-10 md:w-1/2">
<h2 className="text-3xl font-bold text-white tracking-tight mb-4">Download our App</h2>
<p className="text-slate-400 mb-8 text-lg">
                        Get the best real estate experience on your phone. Browse listings, schedule viewings, and chat with agents on the go.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-medium flex items-center gap-3 hover:bg-slate-100 transition-colors">
<iconify-icon icon="solar:apple-linear" width="24"></iconify-icon>
<div className="text-left leading-tight">
<div className="text-[10px] uppercase font-bold text-slate-500">Download on the</div>
<div className="font-bold text-sm">App Store</div>
</div>
</button>
<button className="bg-white/10 backdrop-blur text-white border border-white/20 px-6 py-3 rounded-xl font-medium flex items-center gap-3 hover:bg-white/20 transition-colors">
<iconify-icon icon="solar:play-linear" width="24"></iconify-icon>
<div className="text-left leading-tight">
<div className="text-[10px] uppercase font-bold text-slate-400">Get it on</div>
<div className="font-bold text-sm">Google Play</div>
</div>
</button>
</div>
</div>

<div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-20 pointer-events-none hidden md:block">
<svg className="w-full h-full text-rose-500 fill-current" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-17.9,89.2,-2.4C88.4,13,84,28.3,74.9,40.6C65.8,52.9,52,62.2,37.6,68.6C23.2,75,8.2,78.5,-5.8,76.5C-19.8,74.5,-32.8,67,-45.5,59.3C-58.2,51.6,-70.6,43.7,-79.3,32.7C-88,21.7,-93,7.6,-89.6,-5.1C-86.2,-17.8,-74.4,-29.1,-63.3,-38.7C-52.2,-48.3,-41.8,-56.2,-30.5,-64.9C-19.2,-73.6,-7,-83.1,3.2,-88.6C13.4,-94.1,26.8,-95.6,44.7,-76.4Z" fill="#F43F5E" transform="translate(100 100)"></path>
</svg>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<img alt="Homex Properties" className="h-8 w-auto object-contain" src="https://optim.tildacdn.one/tild3231-6663-4564-b138-343261336261/-/resize/340x/-/format/webp/logo.png.webp"/>
</div>
<p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm">
                        The leading real estate marketplace dedicated to helping you find your perfect home with speed, elegance, and trust.
                    </p>
<div className="flex space-x-4">
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-rose-600 hover:text-white transition-all" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-rose-600 hover:text-white transition-all" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-rose-600 hover:text-white transition-all" href="#">
<iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h3 className="font-semibold text-slate-900 mb-4">Properties</h3>
<ul className="space-y-3">
<li><a className="text-slate-500 text-sm hover:text-rose-600 transition-colors" href="#">Apartments for Rent</a></li>
<li><a className="text-slate-500 text-sm hover:text-rose-600 transition-colors" href="#">Villas for Sale</a></li>
<li><a className="text-slate-500 text-sm hover:text-rose-600 transition-colors" href="#">Commercial</a></li>
<li><a className="text-slate-500 text-sm hover:text-rose-600 transition-colors" href="#">New Projects</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold text-slate-900 mb-4">Company</h3>
<ul className="space-y-3">
<li><a className="text-slate-500 text-sm hover:text-rose-600 transition-colors" href="#">About Us</a></li>
<li><a className="text-slate-500 text-sm hover:text-rose-600 transition-colors" href="#">Careers</a></li>
<li><a className="text-slate-500 text-sm hover:text-rose-600 transition-colors" href="#">Press</a></li>
<li><a className="text-slate-500 text-sm hover:text-rose-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold text-slate-900 mb-4">Resources</h3>
<ul className="space-y-3">
<li><a className="text-slate-500 text-sm hover:text-rose-600 transition-colors" href="#">Mortgage Calculator</a></li>
<li><a className="text-slate-500 text-sm hover:text-rose-600 transition-colors" href="#">Area Guides</a></li>
<li><a className="text-slate-500 text-sm hover:text-rose-600 transition-colors" href="#">House Prices</a></li>
<li><a className="text-slate-500 text-sm hover:text-rose-600 transition-colors" href="#">Market Trends</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-400 text-xs text-center md:text-left">
                    © 2023 Homex Properties. All rights reserved.
                </p>
<div className="flex space-x-6">
<a className="text-slate-400 text-xs hover:text-slate-900" href="#">Privacy Policy</a>
<a className="text-slate-400 text-xs hover:text-slate-900" href="#">Terms of Service</a>
<a className="text-slate-400 text-xs hover:text-slate-900" href="#">Cookies Settings</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
