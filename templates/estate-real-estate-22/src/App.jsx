import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function router(pageId) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            // Show target section
            const target = document.getElementById(pageId);
            if(target) {
                target.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#" onclick="router('home')">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="lucide:building-2" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-slate-900 group-hover:text-emerald-600 transition-colors">ESTATE.</span>
</a>

<div className="hidden md:flex items-center gap-8">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="router('home')">Home</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="router('properties')">Properties</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="router('agents')">Agents</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="router('careers')">Careers</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="router('blog')">News</button>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex text-sm font-medium text-slate-900 hover:text-emerald-600 transition-colors" onclick="router('login')">Sign In</button>
<button className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-2" onclick="router('contact')">
<span>Contact Us</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>

<button className="md:hidden text-slate-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="pt-16 min-h-screen">

<section className="page-section active" id="home">

<div className="relative h-[85vh] w-full bg-slate-900 flex items-center justify-center overflow-hidden">
<img alt="Luxury Home" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/30"></div>
<div className="relative z-10 text-center max-w-4xl px-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        #1 Rated Real Estate Agency
                    </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                        Find Your Perfect Home <br className="hidden md:block"/> &amp; Smart Investment
                    </h1>
<p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto font-light">
                        Trusted real estate solutions for buying, selling, and renting luxury properties across the globe.
                    </p>

<div className="bg-white p-2 rounded-2xl shadow-2xl max-w-3xl mx-auto flex flex-col md:flex-row gap-2">
<div className="flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col items-start">
<label className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Location</label>
<input className="w-full outline-none text-slate-900 text-sm placeholder:text-slate-400 font-medium bg-transparent" placeholder="City, Zip..." type="text"/>
</div>
<div className="flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col items-start">
<label className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Type</label>
<select className="w-full outline-none text-slate-900 text-sm font-medium bg-transparent -ml-1">
<option>Residential</option>
<option>Commercial</option>
<option>Land</option>
</select>
</div>
<div className="flex-1 px-4 py-2 flex flex-col items-start">
<label className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Budget</label>
<select className="w-full outline-none text-slate-900 text-sm font-medium bg-transparent -ml-1">
<option>Any Price</option>
<option>$500k - $1M</option>
<option>$1M - $5M</option>
</select>
</div>
<button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full md:w-auto px-8 rounded-xl font-medium transition-colors flex items-center justify-center" onclick="router('properties')">
                            Search
                        </button>
</div>
</div>
</div>

<div className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="group cursor-default">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-50 transition-colors">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Trusted &amp; Verified</h3>
<p className="text-sm text-slate-500 leading-relaxed">Every property is thoroughly vetted for legal and structural integrity.</p>
</div>
<div className="group cursor-default">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-50 transition-colors">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Expert Agents</h3>
<p className="text-sm text-slate-500 leading-relaxed">Access to a team of market experts dedicated to your success.</p>
</div>
<div className="group cursor-default">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-50 transition-colors">
<iconify-icon icon="lucide:file-text" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Transparent Process</h3>
<p className="text-sm text-slate-500 leading-relaxed">Clear documentation and honest communication at every step.</p>
</div>
<div className="group cursor-default">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-50 transition-colors">
<iconify-icon icon="lucide:trending-up" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">High ROI</h3>
<p className="text-sm text-slate-500 leading-relaxed">Strategic investment opportunities selected for maximum growth.</p>
</div>
</div>
</div>
</div>

<div className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Featured Properties</h2>
<p className="text-slate-500 max-w-xl">Curated selection of the finest homes and investment opportunities currently on the market.</p>
</div>
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors" onclick="router('properties')">
                            View all properties <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300" onclick="router('details')">
<div className="relative aspect-[4/3] overflow-hidden">
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide z-10">For Sale</span>
<img alt="Property" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 right-4 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm font-medium">$2,450,000</div>
</div>
<div className="p-6">
<div className="text-xs text-slate-400 font-medium mb-1">Beverly Hills, CA</div>
<h3 className="text-lg font-semibold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">Modern Villa with Pool</h3>
<div className="flex items-center gap-4 text-slate-500 text-sm border-t border-slate-100 pt-4">
<div className="flex items-center gap-1"><iconify-icon className="text-slate-400" icon="lucide:bed"></iconify-icon> 4 Beds</div>
<div className="flex items-center gap-1"><iconify-icon className="text-slate-400" icon="lucide:bath"></iconify-icon> 3 Baths</div>
<div className="flex items-center gap-1"><iconify-icon className="text-slate-400" icon="lucide:move"></iconify-icon> 2,400 sqft</div>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300" onclick="router('details')">
<div className="relative aspect-[4/3] overflow-hidden">
<span className="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide z-10">New Listing</span>
<img alt="Property" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm font-medium">$850,000</div>
</div>
<div className="p-6">
<div className="text-xs text-slate-400 font-medium mb-1">Austin, TX</div>
<h3 className="text-lg font-semibold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">Contemporary Family Home</h3>
<div className="flex items-center gap-4 text-slate-500 text-sm border-t border-slate-100 pt-4">
<div className="flex items-center gap-1"><iconify-icon className="text-slate-400" icon="lucide:bed"></iconify-icon> 3 Beds</div>
<div className="flex items-center gap-1"><iconify-icon className="text-slate-400" icon="lucide:bath"></iconify-icon> 2 Baths</div>
<div className="flex items-center gap-1"><iconify-icon className="text-slate-400" icon="lucide:move"></iconify-icon> 1,800 sqft</div>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300" onclick="router('details')">
<div className="relative aspect-[4/3] overflow-hidden">
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide z-10">For Rent</span>
<img alt="Property" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm font-medium">$4,200 /mo</div>
</div>
<div className="p-6">
<div className="text-xs text-slate-400 font-medium mb-1">Miami, FL</div>
<h3 className="text-lg font-semibold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">Ocean View Penthouse</h3>
<div className="flex items-center gap-4 text-slate-500 text-sm border-t border-slate-100 pt-4">
<div className="flex items-center gap-1"><iconify-icon className="text-slate-400" icon="lucide:bed"></iconify-icon> 2 Beds</div>
<div className="flex items-center gap-1"><iconify-icon className="text-slate-400" icon="lucide:bath"></iconify-icon> 2 Baths</div>
<div className="flex items-center gap-1"><iconify-icon className="text-slate-400" icon="lucide:move"></iconify-icon> 1,200 sqft</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-slate-900 rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-64 h-64 bg-emerald-600/20 blur-[100px] rounded-full"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready to find your dream space?</h2>
<p className="text-slate-400 mb-10 text-lg max-w-2xl mx-auto">Whether you're buying, selling, or looking for property management, our team is here to guide you every step of the way.</p>
<button className="px-8 py-3 bg-white text-slate-900 hover:bg-emerald-50 font-medium rounded-full transition-colors inline-flex items-center gap-2" onclick="router('contact')">
                                Schedule a Consultation
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="properties">
<div className="bg-slate-50 py-12 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Our Properties</h1>
<p className="text-slate-500 text-sm">Browse our exclusive collection of premium listings.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">

<aside className="w-full lg:w-64 flex-shrink-0 space-y-8">

<div>
<label className="text-xs font-semibold uppercase text-slate-900 mb-2 block">Search</label>
<div className="relative">
<input className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:border-emerald-500 focus:outline-none transition-colors" placeholder="Keyword..." type="text"/>
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="lucide:search" width="16"></iconify-icon>
</div>
</div>

<div>
<label className="text-xs font-semibold uppercase text-slate-900 mb-3 block">Type</label>
<div className="space-y-2">
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 custom-checkbox" type="checkbox"/>
<span className="text-sm text-slate-600">House</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 custom-checkbox" type="checkbox"/>
<span className="text-sm text-slate-600">Apartment</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 custom-checkbox" type="checkbox"/>
<span className="text-sm text-slate-600">Commercial</span>
</label>
</div>
</div>
<div>
<label className="text-xs font-semibold uppercase text-slate-900 mb-3 block">Status</label>
<div className="flex gap-2">
<button className="flex-1 py-1.5 border border-emerald-600 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-md">Buy</button>
<button className="flex-1 py-1.5 border border-slate-200 text-slate-600 text-sm font-medium rounded-md hover:border-slate-300">Rent</button>
</div>
</div>
<div>
<label className="text-xs font-semibold uppercase text-slate-900 mb-3 block">Price Range</label>
<input className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer" type="range"/>
<div className="flex justify-between text-xs text-slate-500 mt-2">
<span>$100k</span>
<span>$5M+</span>
</div>
</div>
</aside>

<div className="flex-1">
<div className="mb-6 flex justify-between items-center">
<span className="text-sm text-slate-500">Showing <span className="text-slate-900 font-semibold">12</span> properties</span>
<select className="text-sm border-none bg-transparent font-medium text-slate-700 focus:ring-0 cursor-pointer">
<option>Sort by: Newest</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
</select>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:shadow-lg transition-all" onclick="router('details')">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 bg-slate-900 text-white px-2 py-1 rounded text-xs font-medium">$1,250,000</div>
</div>
<div className="p-4">
<h3 className="text-base font-semibold text-slate-900 mb-2 truncate">Luxury Downtown Loft</h3>
<div className="text-xs text-slate-500">New York, NY</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:shadow-lg transition-all" onclick="router('details')">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 bg-slate-900 text-white px-2 py-1 rounded text-xs font-medium">$3,400,000</div>
</div>
<div className="p-4">
<h3 className="text-base font-semibold text-slate-900 mb-2 truncate">Seaside Mansion</h3>
<div className="text-xs text-slate-500">Malibu, CA</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:shadow-lg transition-all" onclick="router('details')">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 bg-slate-900 text-white px-2 py-1 rounded text-xs font-medium">$980,000</div>
</div>
<div className="p-4">
<h3 className="text-base font-semibold text-slate-900 mb-2 truncate">Forest Retreat</h3>
<div className="text-xs text-slate-500">Portland, OR</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:shadow-lg transition-all" onclick="router('details')">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 bg-slate-900 text-white px-2 py-1 rounded text-xs font-medium">$650,000</div>
</div>
<div className="p-4">
<h3 className="text-base font-semibold text-slate-900 mb-2 truncate">Suburban Dream</h3>
<div className="text-xs text-slate-500">Chicago, IL</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:shadow-lg transition-all" onclick="router('details')">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 bg-slate-900 text-white px-2 py-1 rounded text-xs font-medium">$5,200 /mo</div>
</div>
<div className="p-4">
<h3 className="text-base font-semibold text-slate-900 mb-2 truncate">City Center Apartment</h3>
<div className="text-xs text-slate-500">Boston, MA</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:shadow-lg transition-all" onclick="router('details')">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-3 right-3 bg-slate-900 text-white px-2 py-1 rounded text-xs font-medium">$1,850,000</div>
</div>
<div className="p-4">
<h3 className="text-base font-semibold text-slate-900 mb-2 truncate">Desert Oasis</h3>
<div className="text-xs text-slate-500">Phoenix, AZ</div>
</div>
</div>
</div>

<div className="mt-12 flex justify-center gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-900 hover:border-slate-300">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 text-white font-medium">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-900 hover:border-slate-300">3</button>
</div>
</div>
</div>
</section>

<section className="page-section" id="details">

<div className="grid grid-cols-4 h-[60vh] gap-1 bg-slate-900">
<div className="col-span-2 row-span-2 relative">
<img className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="col-span-1 relative">
<img className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="col-span-1 relative">
<img className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="col-span-1 relative">
<img className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&amp;w=800"/>
</div>
<div className="col-span-1 relative">
<div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center z-10 cursor-pointer hover:bg-slate-900/40 transition-colors">
<span className="text-white font-medium flex items-center gap-2"><iconify-icon icon="lucide:grid"></iconify-icon> View All</span>
</div>
<img className="w-full h-full object-cover opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="flex flex-col lg:flex-row gap-12">

<div className="flex-1">
<div className="flex justify-between items-start mb-6">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Modern Villa with Panoramic Pool</h1>
<p className="text-slate-500 flex items-center gap-1"><iconify-icon icon="lucide:map-pin" width="16"></iconify-icon> 123 Palm Avenue, Beverly Hills, CA 90210</p>
</div>
<div className="text-right">
<div className="text-3xl font-semibold text-slate-900 mb-1">$2,450,000</div>
<div className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded inline-block">For Sale</div>
</div>
</div>

<div className="grid grid-cols-4 gap-4 py-8 border-y border-slate-200 mb-8">
<div className="text-center border-r border-slate-100 last:border-0">
<span className="block text-xl font-semibold text-slate-900">4</span>
<span className="text-xs text-slate-500 uppercase tracking-wide">Bedrooms</span>
</div>
<div className="text-center border-r border-slate-100 last:border-0">
<span className="block text-xl font-semibold text-slate-900">3.5</span>
<span className="text-xs text-slate-500 uppercase tracking-wide">Bathrooms</span>
</div>
<div className="text-center border-r border-slate-100 last:border-0">
<span className="block text-xl font-semibold text-slate-900">2,400</span>
<span className="text-xs text-slate-500 uppercase tracking-wide">Square Ft</span>
</div>
<div className="text-center">
<span className="block text-xl font-semibold text-slate-900">2022</span>
<span className="text-xs text-slate-500 uppercase tracking-wide">Year Built</span>
</div>
</div>
<div className="prose prose-slate max-w-none mb-12 text-slate-600">
<h3 className="text-lg font-semibold text-slate-900 mb-4">Description</h3>
<p className="mb-4">Experience the epitome of luxury living in this stunning modern villa featuring breathtaking panoramic views. meticulously designed with an open-concept layout, this home offers seamless indoor-outdoor living, perfect for entertaining.</p>
<p>The gourmet kitchen is equipped with top-of-the-line appliances and custom cabinetry. The primary suite serves as a private retreat with a spa-like bathroom and a massive walk-in closet.</p>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-6">Features &amp; Amenities</h3>
<div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 mb-12">
<div className="flex items-center gap-2 text-slate-600"><iconify-icon className="text-emerald-600" icon="lucide:check-circle"></iconify-icon> Swimming Pool</div>
<div className="flex items-center gap-2 text-slate-600"><iconify-icon className="text-emerald-600" icon="lucide:check-circle"></iconify-icon> Home Theater</div>
<div className="flex items-center gap-2 text-slate-600"><iconify-icon className="text-emerald-600" icon="lucide:check-circle"></iconify-icon> Smart Home System</div>
<div className="flex items-center gap-2 text-slate-600"><iconify-icon className="text-emerald-600" icon="lucide:check-circle"></iconify-icon> 3 Car Garage</div>
<div className="flex items-center gap-2 text-slate-600"><iconify-icon className="text-emerald-600" icon="lucide:check-circle"></iconify-icon> Private Garden</div>
<div className="flex items-center gap-2 text-slate-600"><iconify-icon className="text-emerald-600" icon="lucide:check-circle"></iconify-icon> Security System</div>
</div>

<div className="w-full h-64 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 mb-12">
<div className="text-center">
<iconify-icon className="mb-2 mx-auto" icon="lucide:map" width="32"></iconify-icon>
<span className="text-sm">Map View Integration</span>
</div>
</div>
</div>

<div className="w-full lg:w-96 flex-shrink-0">
<div className="sticky top-24 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
<div className="flex items-center gap-4 mb-6">
<img className="w-16 h-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-slate-900">Sarah Jenkins</h4>
<p className="text-xs text-slate-500">Senior Real Estate Agent</p>
<div className="flex gap-2 mt-2">
<button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200"><iconify-icon icon="lucide:phone" width="14"></iconify-icon></button>
<button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200"><iconify-icon icon="lucide:mail" width="14"></iconify-icon></button>
</div>
</div>
</div>
<form className="space-y-4">
<input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:border-emerald-600 focus:outline-none" placeholder="Your Name" type="text"/>
<input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:border-emerald-600 focus:outline-none" placeholder="Email Address" type="email"/>
<input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:border-emerald-600 focus:outline-none" placeholder="Phone" type="tel"/>
<textarea className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:border-emerald-600 focus:outline-none" placeholder="I am interested in this property..." rows="4"></textarea>
<button className="w-full bg-slate-900 text-white font-medium py-3 rounded-lg hover:bg-slate-800 transition-colors" type="button">Send Inquiry</button>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="agents">
<div className="bg-slate-50 py-20 border-b border-slate-200 text-center">
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">Meet Our Experts</h1>
<p className="text-slate-500 max-w-2xl mx-auto">A team of dedicated professionals ready to help you navigate the real estate market.</p>
</div>
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="text-center group">
<div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=400"/>
</div>
<h3 className="text-lg font-semibold text-slate-900">James Wilson</h3>
<p className="text-sm text-emerald-600 font-medium mb-4">Founder &amp; CEO</p>
<div className="flex justify-center gap-3">
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
</div>
</div>

<div className="text-center group">
<div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=400"/>
</div>
<h3 className="text-lg font-semibold text-slate-900">Sarah Jenkins</h3>
<p className="text-sm text-emerald-600 font-medium mb-4">Senior Agent</p>
<div className="flex justify-center gap-3">
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
</div>
</div>

<div className="text-center group">
<div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=400"/>
</div>
<h3 className="text-lg font-semibold text-slate-900">Michael Ross</h3>
<p className="text-sm text-emerald-600 font-medium mb-4">Commercial Specialist</p>
<div className="flex justify-center gap-3">
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
</div>
</div>

<div className="text-center group">
<div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=400"/>
</div>
<h3 className="text-lg font-semibold text-slate-900">Emily Chen</h3>
<p className="text-sm text-emerald-600 font-medium mb-4">Rental Manager</p>
<div className="flex justify-center gap-3">
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="careers">

<div className="bg-white pt-24 pb-16 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-6">
                        We are hiring
                    </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6">Join the team shaping <br className="hidden md:block"/> modern real estate.</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">We're looking for passionate individuals to help us build the world's most trusted property platform. Work with the best, from anywhere.</p>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 py-20 border-b border-slate-200">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div>
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-4">
<iconify-icon icon="lucide:globe" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Remote First</h3>
<p className="text-sm text-slate-500 leading-relaxed">We believe talent is everywhere. Work from our hubs or from the comfort of your home.</p>
</div>
<div>
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-4">
<iconify-icon icon="lucide:heart-pulse" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Health &amp; Wellness</h3>
<p className="text-sm text-slate-500 leading-relaxed">Comprehensive health coverage and wellness stipends to keep you feeling your best.</p>
</div>
<div>
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-4">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Growth Budget</h3>
<p className="text-sm text-slate-500 leading-relaxed">Annual stipend for conferences, courses, and books to support your career growth.</p>
</div>
</div>
</div>

<div className="bg-slate-50 py-20">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-slate-900 mb-8">Open Positions</h2>
<div className="space-y-4">

<a className="block group bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all" href="#">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">Senior Product Designer</h3>
<div className="flex items-center gap-3 mt-2">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Design</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium">Remote</span>
<span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium">Full-time</span>
</div>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
                                    Apply Now <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</a>

<a className="block group bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all" href="#">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">Real Estate Broker (NYC)</h3>
<div className="flex items-center gap-3 mt-2">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Sales</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium">New York</span>
<span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium">On-site</span>
</div>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
                                    Apply Now <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</a>

<a className="block group bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all" href="#">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">Frontend Engineer</h3>
<div className="flex items-center gap-3 mt-2">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Engineering</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium">Remote</span>
<span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium">Full-time</span>
</div>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
                                    Apply Now <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</a>

<a className="block group bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all" href="#">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">Marketing Manager</h3>
<div className="flex items-center gap-3 mt-2">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Marketing</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium">Los Angeles</span>
<span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium">Hybrid</span>
</div>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
                                    Apply Now <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</a>
</div>
<div className="mt-12 text-center">
<p className="text-slate-500 text-sm mb-4">Don't see a role that fits?</p>
<button className="text-sm font-medium text-slate-900 border-b border-slate-300 hover:border-slate-900 transition-colors pb-0.5" onclick="router('contact')">Contact us about future opportunities</button>
</div>
</div>
</div>
</section>

<section className="page-section" id="about">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Redefining Real Estate with Integrity and Innovation.</h1>
<p className="text-slate-500 mb-6 leading-relaxed">
                            Founded in 2010, Estate has grown from a boutique agency to a global leader in luxury real estate. Our mission is simple: to provide an exceptional experience for every client, whether they are buying their first home or investing in a commercial complex.
                        </p>
<div className="flex gap-12 mt-12 border-t border-slate-100 pt-8">
<div>
<h3 className="text-3xl font-bold text-slate-900">12+</h3>
<p className="text-sm text-slate-500 mt-1">Years Experience</p>
</div>
<div>
<h3 className="text-3xl font-bold text-slate-900">850+</h3>
<p className="text-sm text-slate-500 mt-1">Properties Sold</p>
</div>
<div>
<h3 className="text-3xl font-bold text-slate-900">98%</h3>
<p className="text-sm text-slate-500 mt-1">Client Satisfaction</p>
</div>
</div>
</div>
<div className="relative h-[500px] rounded-2xl overflow-hidden bg-slate-100">
<img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1000"/>
</div>
</div>
</div>
</section>

<section className="page-section" id="blog">
<div className="bg-white py-20">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12">Market Insights &amp; News</h1>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="cursor-pointer group">
<div className="aspect-[16/9] rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&amp;w=800"/>
</div>
<div className="text-xs text-emerald-600 font-semibold mb-2 uppercase tracking-wide">Investment</div>
<h2 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">Top Emerging Markets for Real Estate in 2024</h2>
<p className="text-slate-500 text-sm line-clamp-2">Discover the cities that are showing the highest potential for property appreciation in the coming year.</p>
</article>

<article className="cursor-pointer group">
<div className="aspect-[16/9] rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=800"/>
</div>
<div className="text-xs text-emerald-600 font-semibold mb-2 uppercase tracking-wide">Interior Design</div>
<h2 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">Minimalist Design Trends Taking Over</h2>
<p className="text-slate-500 text-sm line-clamp-2">How to style your home to increase its value and appeal to modern buyers.</p>
</article>

<article className="cursor-pointer group">
<div className="aspect-[16/9] rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&amp;w=800"/>
</div>
<div className="text-xs text-emerald-600 font-semibold mb-2 uppercase tracking-wide">Buying Tips</div>
<h2 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">First Time Home Buyer Guide</h2>
<p className="text-slate-500 text-sm line-clamp-2">Everything you need to know before signing the dotted line on your first property.</p>
</article>
</div>
</div>
</div>
</section>

<section className="page-section" id="contact">
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Get in Touch</h1>
<p className="text-slate-500 mb-10">Have questions about buying or selling? We're here to help.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 flex-shrink-0">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900">Head Office</h3>
<p className="text-slate-500 text-sm mt-1">100 Wilshire Blvd, Suite 700<br/>Santa Monica, CA 90401</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 flex-shrink-0">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900">Phone</h3>
<p className="text-slate-500 text-sm mt-1">+1 (310) 555-0123</p>
<p className="text-slate-500 text-xs mt-1">Mon-Fri, 9am - 6pm PST</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 flex-shrink-0">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900">Email</h3>
<p className="text-slate-500 text-sm mt-1">hello@estate-agency.com</p>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="col-span-2 md:col-span-1">
<label className="block text-xs font-semibold uppercase text-slate-500 mb-2">First Name</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-emerald-600 focus:outline-none transition-colors" type="text"/>
</div>
<div className="col-span-2 md:col-span-1">
<label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Last Name</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-emerald-600 focus:outline-none transition-colors" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Email</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-emerald-600 focus:outline-none transition-colors" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Message</label>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-emerald-600 focus:outline-none transition-colors" rows="5"></textarea>
</div>
<button className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors" type="button">Send Message</button>
</form>
</div>
</div>
</div>
</section>

<section className="page-section" id="login">
<div className="flex items-center justify-center min-h-[80vh] bg-slate-50">
<div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-xl w-full max-w-md">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold text-slate-900">Welcome Back</h2>
<p className="text-sm text-slate-500 mt-2">Access your saved properties and dashboard.</p>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email</label>
<input className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Password</label>
<input className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" type="password"/>
</div>
<button className="w-full py-2.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors" type="button">Sign In</button>
</form>
<div className="mt-6 text-center text-xs text-slate-400">
                        Don't have an account? <a className="text-emerald-600 font-medium hover:underline" href="#">Sign up</a>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-slate-900">
<iconify-icon icon="lucide:building-2" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-white">ESTATE.</span>
</div>
<p className="text-sm leading-relaxed mb-6">Premium real estate agency tailored for the modern investor and homeowner. Excellence in every transaction.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-3 text-sm">
<li><button className="hover:text-emerald-400 transition-colors" onclick="router('about')">About Us</button></li>
<li><button className="hover:text-emerald-400 transition-colors" onclick="router('agents')">Our Team</button></li>
<li><button className="hover:text-emerald-400 transition-colors" onclick="router('careers')">Careers</button></li>
<li><button className="hover:text-emerald-400 transition-colors" onclick="router('contact')">Contact</button></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Properties</h4>
<ul className="space-y-3 text-sm">
<li><button className="hover:text-emerald-400 transition-colors" onclick="router('properties')">Buy Property</button></li>
<li><button className="hover:text-emerald-400 transition-colors" onclick="router('properties')">Rent Property</button></li>
<li><button className="hover:text-emerald-400 transition-colors" onclick="router('properties')">Commercial</button></li>
<li><button className="hover:text-emerald-400 transition-colors" onclick="router('properties')">New Developments</button></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Newsletter</h4>
<p className="text-sm mb-4">Subscribe for the latest market updates and exclusive listings.</p>
<form className="flex gap-2">
<input className="bg-slate-800 border-none text-white text-sm rounded-lg px-4 py-2 w-full focus:ring-1 focus:ring-emerald-500 outline-none" placeholder="Email address" type="email"/>
<button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg px-3 py-2 transition-colors" type="button">
<iconify-icon icon="lucide:arrow-right"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-xs flex justify-between items-center">
<p>© 2024 Estate Agency Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
