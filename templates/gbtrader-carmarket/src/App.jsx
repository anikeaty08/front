import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            // Mobile Menu Logic
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const closeBtn = document.getElementById('close-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const backdrop = document.getElementById('menu-backdrop');
            const body = document.body;

            function toggleMenu() {
                const isHidden = mobileMenu.classList.contains('translate-x-full');
                
                if (isHidden) {
                    // Open
                    mobileMenu.classList.remove('translate-x-full');
                    backdrop.classList.remove('hidden');
                    // Small delay to allow display:block to apply before opacity transition
                    setTimeout(() => {
                        backdrop.classList.remove('opacity-0');
                    }, 10);
                    body.style.overflow = 'hidden'; // Prevent background scrolling
                } else {
                    // Close
                    mobileMenu.classList.add('translate-x-full');
                    backdrop.classList.add('opacity-0');
                    setTimeout(() => {
                        backdrop.classList.add('hidden');
                    }, 300);
                    body.style.overflow = '';
                }
            }

            if(mobileBtn) mobileBtn.addEventListener('click', toggleMenu);
            if(closeBtn) closeBtn.addEventListener('click', toggleMenu);
            if(backdrop) backdrop.addEventListener('click', toggleMenu);

            // Animation Observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            });

            // Button Click Simulation (Visual only)
            const buttons = document.querySelectorAll('button:not(#mobile-menu-btn):not(#close-menu-btn), a.btn');
            buttons.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    // Just a visual ripple effect or console log to show it "worked"
                    // In a real app, this would submit forms or navigate
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-neutral-900 text-white py-2 px-6 hidden md:block border-b border-neutral-800">
<div className="max-w-[1400px] mx-auto flex justify-between items-center text-xs font-medium tracking-wide">
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 hover:text-red-400 transition-colors focus:outline-none focus:text-red-400" href="mailto:support@gbtrader.co.uk">
<iconify-icon icon="lucide:mail" width="14"></iconify-icon> support@gbtrader.co.uk
                </a>
<span className="flex items-center gap-2">
<iconify-icon icon="lucide:phone" width="14"></iconify-icon> +44 7903 848023
                </span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-red-400 transition-colors focus:outline-none focus:text-red-400" href="#">Help Center</a>
<span className="text-neutral-700">|</span>
<a className="flex items-center gap-2 hover:text-red-400 transition-colors focus:outline-none focus:text-red-400" href="#">
<iconify-icon icon="lucide:user" width="14"></iconify-icon> Login
                </a>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 glass">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center btn-press focus:outline-none" href="#">
<img alt="GB Trader" className="h-12 w-auto object-contain" src="https://gbtrader.co.uk/wp-content/uploads/2023/08/logo-stimulate.png"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-600 hover:text-red-600 transition-colors py-2 focus:outline-none focus:text-red-600" href="#">Marketplace</a>
<a className="text-sm font-medium text-neutral-600 hover:text-red-600 transition-colors py-2 focus:outline-none focus:text-red-600" href="#">Dealers</a>
<div className="relative group h-full flex items-center">
<button className="flex items-center gap-1 text-sm font-medium text-neutral-600 group-hover:text-red-600 transition-colors focus:outline-none">
                        Categories <iconify-icon className="group-hover:rotate-180 transition-transform duration-300" icon="lucide:chevron-down" width="14"></iconify-icon>
</button>

<div className="absolute top-14 left-0 w-48 bg-white border border-neutral-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
<div className="flex flex-col p-1">
<a className="px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-red-600 rounded-md transition-colors" href="#">Cars</a>
<a className="px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-red-600 rounded-md transition-colors" href="#">Vans</a>
<a className="px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-red-600 rounded-md transition-colors" href="#">Parts</a>
<a className="px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-red-600 rounded-md transition-colors" href="#">Breakdown Services</a>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 text-white text-sm font-semibold hover:bg-red-600 transition-all duration-300 shadow-lg shadow-neutral-900/10 hover:shadow-red-600/20 btn-press focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900" href="#">
<iconify-icon icon="lucide:plus-circle" width="16"></iconify-icon>
                    Add Listing
                </a>
<button className="lg:hidden p-2 text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors btn-press" id="mobile-menu-btn">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-y-0 right-0 z-[60] w-full max-w-xs bg-white shadow-2xl transform translate-x-full lg:hidden" id="mobile-menu">
<div className="p-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-8">
<span className="font-heading font-bold text-xl tracking-tight">Menu</span>
<button className="p-2 hover:bg-neutral-100 rounded-full transition-colors text-neutral-500 hover:text-red-600" id="close-menu-btn">
<iconify-icon icon="lucide:x" width="24"></iconify-icon>
</button>
</div>
<div className="space-y-4 flex-1">
<a className="block text-lg font-medium text-neutral-900 hover:text-red-600" href="#">Marketplace</a>
<a className="block text-lg font-medium text-neutral-900 hover:text-red-600" href="#">Dealers</a>
<div className="py-2 border-t border-b border-neutral-100 my-2">
<p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">Categories</p>
<a className="block py-2 text-neutral-600 hover:text-red-600" href="#">Cars</a>
<a className="block py-2 text-neutral-600 hover:text-red-600" href="#">Vans</a>
<a className="block py-2 text-neutral-600 hover:text-red-600" href="#">Parts</a>
</div>
<a className="block text-lg font-medium text-neutral-900 hover:text-red-600" href="#">Login</a>
</div>
<a className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 transition-all btn-press" href="#">
<iconify-icon icon="lucide:plus-circle" width="18"></iconify-icon>
                Add Listing
            </a>
</div>
</div>

<div className="fixed inset-0 bg-black/20 z-[55] backdrop-blur-sm hidden lg:hidden opacity-0 transition-opacity duration-300" id="menu-backdrop"></div>

<header className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-neutral-900 pt-20 pb-32">

<div className="absolute inset-0 z-0">
<img alt="Car Background" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&amp;w=2048&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-[1400px] px-6 text-center">
<span className="inline-block py-1 px-3 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-bold uppercase tracking-widest mb-6 animate-up select-none">
                No. 1 UK Marketplace
            </span>
<h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight animate-up delay-100">
                Find &amp; Advertise <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Everything You Need</span>
</h1>
<p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light animate-up delay-200">
                Vehicles, parts, and local services on a single platform. <br/>Buy and sell used cars near you with confidence.
            </p>

<form className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/10 p-2 rounded-2xl animate-up delay-300 shadow-2xl hover:shadow-red-900/20 transition-shadow duration-300">
<div className="bg-white rounded-xl p-2 flex flex-col md:flex-row gap-2">
<div className="relative flex-1 group">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-red-600 transition-colors" icon="lucide:search" width="20"></iconify-icon>
<input className="w-full h-14 pl-12 pr-4 bg-transparent border-none outline-none text-neutral-900 placeholder-neutral-500 font-medium rounded-lg hover:bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-red-500/20 transition-all" placeholder="Keywords (Make, Model...)" type="text"/>
</div>
<div className="w-px h-10 bg-neutral-200 self-center hidden md:block"></div>
<div className="relative flex-1 group">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-red-600 transition-colors" icon="lucide:map-pin" width="20"></iconify-icon>
<input className="w-full h-14 pl-12 pr-4 bg-transparent border-none outline-none text-neutral-900 placeholder-neutral-500 font-medium rounded-lg hover:bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-red-500/20 transition-all" placeholder="Postcode or Location" type="text"/>
</div>
<div className="w-px h-10 bg-neutral-200 self-center hidden md:block"></div>
<div className="relative w-full md:w-48 group">
<select className="w-full h-14 pl-4 pr-10 bg-transparent border-none outline-none text-neutral-900 font-medium cursor-pointer hover:bg-neutral-50 rounded-lg appearance-none focus:bg-white focus:ring-2 focus:ring-red-500/20 transition-all">
<option value="">All Categories</option>
<option value="cars">Cars</option>
<option value="vans">Vans</option>
<option value="parts">Parts</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none group-focus-within:text-red-600 transition-colors" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
<button className="h-14 px-8 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-600/30 btn-press focus:ring-4 focus:ring-red-600/20" type="button">
                        Search
                    </button>
</div>
</form>
</div>
</header>

<section className="py-24 px-6 bg-white border-b border-neutral-100">
<div className="max-w-[1400px] mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="font-heading text-3xl font-bold text-neutral-900 mb-2">Browse by Category</h2>
<p className="text-neutral-500">Explore our extensive range of vehicles and services.</p>
</div>
<a className="text-red-600 font-semibold text-sm hover:text-red-700 flex items-center gap-1 group py-2 px-3 rounded hover:bg-red-50 transition-all btn-press" href="#">
                    View All <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

<a className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 btn-press focus:ring-4 focus:ring-red-500/20" href="#">
<img alt="Cars" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://gbtrader.co.uk/wp-content/uploads/2023/08/car-01.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="font-bold text-xl mb-1 group-hover:text-red-400 transition-colors">Cars</h3>
<p className="text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">300+ Listings</p>
</div>
</a>
<a className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 btn-press focus:ring-4 focus:ring-red-500/20" href="#">
<img alt="Vans" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://gbtrader.co.uk/wp-content/uploads/2023/10/bg-van-400x385.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="font-bold text-xl mb-1 group-hover:text-red-400 transition-colors">Vans</h3>
<p className="text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">New Arrivals</p>
</div>
</a>
<a className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 btn-press focus:ring-4 focus:ring-red-500/20" href="#">
<img alt="Garages" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://gbtrader.co.uk/wp-content/uploads/2023/08/garage-01.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="font-bold text-xl mb-1 group-hover:text-red-400 transition-colors">Garages</h3>
<p className="text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">Local Services</p>
</div>
</a>
<a className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 btn-press focus:ring-4 focus:ring-red-500/20" href="#">
<img alt="Parts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://gbtrader.co.uk/wp-content/uploads/2023/10/car-parts.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="font-bold text-xl mb-1 group-hover:text-red-400 transition-colors">Parts</h3>
<p className="text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">Spares &amp; Repairs</p>
</div>
</a>
<a className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 btn-press focus:ring-4 focus:ring-red-500/20" href="#">
<img alt="Recovery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://gbtrader.co.uk/wp-content/uploads/2023/10/breakdown.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="font-bold text-xl mb-1 group-hover:text-red-400 transition-colors">Recovery</h3>
<p className="text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">24/7 Assistance</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-50">
<div className="max-w-[1400px] mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-red-600 font-bold tracking-widest text-xs uppercase mb-2 block">Why Choose Us</span>
<h2 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">The Modern Way to<br/> Buy &amp; Sell.</h2>
<p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                        GB Trader's state-of-the-art marketplace makes buying or selling your car a walk in the park. We combine advanced technology with a user-friendly interface.
                    </p>
<div className="grid sm:grid-cols-2 gap-y-8 gap-x-6">

<div className="flex gap-4 group cursor-default">
<div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:search" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-neutral-900 mb-1">Smart Search</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Find exactly what you want with advanced filters.</p>
</div>
</div>
<div className="flex gap-4 group cursor-default">
<div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-neutral-900 mb-1">Secure Platform</h4>
<p className="text-sm text-neutral-500 leading-relaxed">SSL encryption keeps your data safe at all times.</p>
</div>
</div>
<div className="flex gap-4 group cursor-default">
<div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-neutral-900 mb-1">Direct Contact</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Chat directly with sellers for details and negotiation.</p>
</div>
</div>
<div className="flex gap-4 group cursor-default">
<div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:map" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-neutral-900 mb-1">Location Based</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Find vehicles nearby for easy inspection.</p>
</div>
</div>
</div>
<div className="mt-10 flex gap-4">
<a className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold text-sm hover:bg-red-700 transition-all shadow-lg shadow-red-500/20 btn-press focus:ring-4 focus:ring-red-500/20" href="#">Sell Your Car</a>
<a className="px-6 py-3 bg-white border border-neutral-200 text-neutral-900 rounded-lg font-semibold text-sm hover:border-neutral-300 hover:bg-neutral-50 transition-all btn-press focus:ring-4 focus:ring-neutral-200" href="#">Browse Listings</a>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-orange-100 rounded-3xl transform rotate-2 blur-lg opacity-60"></div>
<img alt="Dashboard" className="relative rounded-2xl shadow-2xl border border-white/50 hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-[1400px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="font-heading text-3xl font-bold text-neutral-900 mb-2">Featured Listings</h2>
<p className="text-neutral-500">Handpicked vehicles that stand out for quality and value.</p>
</div>

<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-100 hover:border-neutral-300 transition-colors text-neutral-600 btn-press focus:outline-none focus:ring-2 focus:ring-neutral-400">
<iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-red-600 transition-colors border border-transparent btn-press focus:outline-none focus:ring-2 focus:ring-red-600 shadow-lg shadow-neutral-900/20">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-red-100 cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-neutral-900 z-10 shadow-sm">Featured</span>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/40 backdrop-blur flex items-center justify-center text-white hover:bg-red-600 hover:text-white transition-all z-10 btn-press">
<iconify-icon icon="lucide:heart" width="16"></iconify-icon>
</button>
<img alt="BMW X3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://gbtrader.co.uk/wp-content/uploads/2025/12/Internet_20251224_134129_3-400x300.jpeg"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-heading font-semibold text-lg text-neutral-900 line-clamp-1 group-hover:text-red-600 transition-colors">2022 BMW X3 xDrive 30e</h3>
<span className="text-sm font-bold text-red-600">£33,000</span>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-500 mb-4">
<iconify-icon icon="lucide:map-pin" width="12"></iconify-icon> Oldbury, West Midlands
                        </div>
<div className="flex gap-2 mb-4">
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] font-medium text-neutral-600">2022</span>
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] font-medium text-neutral-600">Hybrid</span>
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] font-medium text-neutral-600">Auto</span>
</div>
<button className="block w-full py-2.5 text-center rounded-lg border border-neutral-200 text-sm font-semibold text-neutral-700 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors btn-press focus:ring-2 focus:ring-neutral-900">View Details</button>
</div>
</div>

<div className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-red-100 cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-neutral-900 z-10 shadow-sm">Featured</span>
<img alt="Nissan Micra" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://gbtrader.co.uk/wp-content/uploads/2025/12/Internet_20251222_114146_2-400x300.jpeg"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-heading font-semibold text-lg text-neutral-900 line-clamp-1 group-hover:text-red-600 transition-colors">2014 Nissan Micra</h3>
<span className="text-sm font-bold text-red-600">£3,995</span>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-500 mb-4">
<iconify-icon icon="lucide:map-pin" width="12"></iconify-icon> West Bromwich
                        </div>
<div className="flex gap-2 mb-4">
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] font-medium text-neutral-600">2014</span>
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] font-medium text-neutral-600">Petrol</span>
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] font-medium text-neutral-600">Auto</span>
</div>
<button className="block w-full py-2.5 text-center rounded-lg border border-neutral-200 text-sm font-semibold text-neutral-700 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors btn-press focus:ring-2 focus:ring-neutral-900">View Details</button>
</div>
</div>

<div className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-red-100 cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-neutral-900 z-10 shadow-sm">Featured</span>
<img alt="BMW 1 Series" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://gbtrader.co.uk/wp-content/uploads/2025/12/Internet_20251227_185949_4-400x300.jpeg"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-heading font-semibold text-lg text-neutral-900 line-clamp-1 group-hover:text-red-600 transition-colors">2021 BMW 1 Series M Sport</h3>
<span className="text-sm font-bold text-red-600">£14,490</span>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-500 mb-4">
<iconify-icon icon="lucide:map-pin" width="12"></iconify-icon> Birmingham
                        </div>
<div className="flex gap-2 mb-4">
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] font-medium text-neutral-600">2021</span>
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] font-medium text-neutral-600">Diesel</span>
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] font-medium text-neutral-600">Manual</span>
</div>
<button className="block w-full py-2.5 text-center rounded-lg border border-neutral-200 text-sm font-semibold text-neutral-700 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors btn-press focus:ring-2 focus:ring-neutral-900">View Details</button>
</div>
</div>

<div className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-red-100 cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-neutral-900 z-10 shadow-sm">Featured</span>
<img alt="Range Rover Sport" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://gbtrader.co.uk/wp-content/uploads/2025/10/AETV96673154_1-400x300.jpg"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-heading font-semibold text-lg text-neutral-900 line-clamp-1 group-hover:text-red-600 transition-colors">2022 Range Rover Sport</h3>
<span className="text-sm font-bold text-red-600">£44,550</span>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-500 mb-4">
<iconify-icon icon="lucide:map-pin" width="12"></iconify-icon> Oldbury
                        </div>
<div className="flex gap-2 mb-4">
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] font-medium text-neutral-600">2022</span>
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] font-medium text-neutral-600">Diesel</span>
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] font-medium text-neutral-600">Auto</span>
</div>
<button className="block w-full py-2.5 text-center rounded-lg border border-neutral-200 text-sm font-semibold text-neutral-700 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors btn-press focus:ring-2 focus:ring-neutral-900">View Details</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
<div className="max-w-[1400px] mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Start Trading Today</h2>
<p className="text-neutral-400">Join thousands of UK traders. Registration takes less than a minute.</p>
</div>
<div className="grid md:grid-cols-4 gap-8">

<div className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700 hover:border-red-600/50 hover:bg-neutral-800 transition-all duration-300 backdrop-blur-sm group cursor-pointer hover:transform hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-neutral-700 flex items-center justify-center text-white mb-6 group-hover:bg-red-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-600/20">
<span className="font-heading font-bold text-xl">1</span>
</div>
<h4 className="font-bold text-lg mb-2 group-hover:text-red-400 transition-colors">Click 'Start Account'</h4>
<p className="text-sm text-neutral-400">Begin your journey by clicking the registration button.</p>
</div>
<div className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700 hover:border-red-600/50 hover:bg-neutral-800 transition-all duration-300 backdrop-blur-sm group cursor-pointer hover:transform hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-neutral-700 flex items-center justify-center text-white mb-6 group-hover:bg-red-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-600/20">
<span className="font-heading font-bold text-xl">2</span>
</div>
<h4 className="font-bold text-lg mb-2 group-hover:text-red-400 transition-colors">Fill the Form</h4>
<p className="text-sm text-neutral-400">Provide basic details to create your trader profile.</p>
</div>
<div className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700 hover:border-red-600/50 hover:bg-neutral-800 transition-all duration-300 backdrop-blur-sm group cursor-pointer hover:transform hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-neutral-700 flex items-center justify-center text-white mb-6 group-hover:bg-red-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-600/20">
<span className="font-heading font-bold text-xl">3</span>
</div>
<h4 className="font-bold text-lg mb-2 group-hover:text-red-400 transition-colors">Verify Email</h4>
<p className="text-sm text-neutral-400">Check your inbox and click the verification link.</p>
</div>
<div className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700 hover:border-red-600/50 hover:bg-neutral-800 transition-all duration-300 backdrop-blur-sm group cursor-pointer hover:transform hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-neutral-700 flex items-center justify-center text-white mb-6 group-hover:bg-red-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-600/20">
<span className="font-heading font-bold text-xl">4</span>
</div>
<h4 className="font-bold text-lg mb-2 group-hover:text-red-400 transition-colors">Start Trading</h4>
<p className="text-sm text-neutral-400">Log in and start listing or buying vehicles immediately.</p>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-900/50 btn-press focus:ring-4 focus:ring-red-900/50" href="#">
                    Create Account
                    <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-[1400px] mx-auto">
<h2 className="font-heading text-3xl font-bold text-neutral-900 mb-12">Automotive Insights</h2>
<div className="grid md:grid-cols-3 gap-8">

<article className="group cursor-pointer btn-press">
<div className="rounded-xl overflow-hidden mb-4 aspect-[16/9] relative">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
<img alt="News 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://gbtrader.co.uk/wp-content/uploads/2025/09/bmw-i8-hybrid-static-1920x774px-1024x413.jpg"/>
</div>
<span className="text-xs font-bold text-red-600 uppercase tracking-wider group-hover:text-red-700">Market Analysis</span>
<h3 className="font-heading font-bold text-lg mt-2 mb-2 group-hover:text-red-600 transition-colors">Used Car Demand Continues to Rise in the UK</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Recent data shows a significant uptake in second-hand vehicle sales across all regions...</p>
</article>

<article className="group cursor-pointer btn-press">
<div className="rounded-xl overflow-hidden mb-4 aspect-[16/9] relative">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
<img alt="News 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://gbtrader.co.uk/wp-content/uploads/2025/09/used-car-photo-12-scaled-1-1024x683.jpg"/>
</div>
<span className="text-xs font-bold text-red-600 uppercase tracking-wider group-hover:text-red-700">Platform</span>
<h3 className="font-heading font-bold text-lg mt-2 mb-2 group-hover:text-red-600 transition-colors">Why More UK Sellers Are Choosing GBTrader</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Low fees, high visibility, and a trusted community are driving our growth...</p>
</article>

<article className="group cursor-pointer btn-press">
<div className="rounded-xl overflow-hidden mb-4 aspect-[16/9] relative">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
<img alt="News 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://gbtrader.co.uk/wp-content/uploads/2025/09/ev-charging-uk-1024x682.jpg"/>
</div>
<span className="text-xs font-bold text-red-600 uppercase tracking-wider group-hover:text-red-700">Electric</span>
<h3 className="font-heading font-bold text-lg mt-2 mb-2 group-hover:text-red-600 transition-colors">Electric Vehicle Sales Surge Across the UK</h3>
<p className="text-sm text-neutral-500 line-clamp-2">The EV market is booming with new incentives and infrastructure improvements...</p>
</article>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 pt-20 pb-10">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="flex items-center mb-6 group focus:outline-none" href="#">
<img alt="GB Trader" className="h-10 w-auto object-contain" src="https://gbtrader.co.uk/wp-content/uploads/2023/08/logo-stimulate.png"/>
</a>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                        GB Trader offers new and used cars right across the United Kingdom. Join our site and start buying and selling with confidence.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-red-600 hover:text-white transition-all btn-press" href="#"><iconify-icon icon="lucide:facebook" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-red-600 hover:text-white transition-all btn-press" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-red-600 hover:text-white transition-all btn-press" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-red-600 hover:text-white transition-all btn-press" href="#"><iconify-icon icon="lucide:youtube" width="16"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-bold text-neutral-900 mb-6">Marketplace</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-red-600 hover:translate-x-1 inline-block transition-all focus:text-red-600" href="#">Search Cars</a></li>
<li><a className="hover:text-red-600 hover:translate-x-1 inline-block transition-all focus:text-red-600" href="#">Search Vans</a></li>
<li><a className="hover:text-red-600 hover:translate-x-1 inline-block transition-all focus:text-red-600" href="#">Sell Your Vehicle</a></li>
<li><a className="hover:text-red-600 hover:translate-x-1 inline-block transition-all focus:text-red-600" href="#">Dealer Directory</a></li>
<li><a className="hover:text-red-600 hover:translate-x-1 inline-block transition-all focus:text-red-600" href="#">Pricing</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-neutral-900 mb-6">Support</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-red-600 hover:translate-x-1 inline-block transition-all focus:text-red-600" href="#">Help Center</a></li>
<li><a className="hover:text-red-600 hover:translate-x-1 inline-block transition-all focus:text-red-600" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-red-600 hover:translate-x-1 inline-block transition-all focus:text-red-600" href="#">Privacy Policy</a></li>
<li><a className="hover:text-red-600 hover:translate-x-1 inline-block transition-all focus:text-red-600" href="#">Cookie Policy</a></li>
<li><a className="hover:text-red-600 hover:translate-x-1 inline-block transition-all focus:text-red-600" href="#">Contact Us</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-neutral-900 mb-6">Contact Info</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li className="flex items-start gap-3 group">
<iconify-icon className="text-red-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" icon="lucide:map-pin"></iconify-icon>
<span>United Kingdom</span>
</li>
<li className="flex items-center gap-3 group">
<iconify-icon className="text-red-600 shrink-0 group-hover:scale-110 transition-transform" icon="lucide:phone"></iconify-icon>
<a className="hover:text-neutral-900 transition-colors" href="tel:+447903848023"> +44 7903 848023</a>
</li>
<li className="flex items-center gap-3 group">
<iconify-icon className="text-red-600 shrink-0 group-hover:scale-110 transition-transform" icon="lucide:mail"></iconify-icon>
<a className="hover:text-neutral-900 transition-colors" href="mailto:support@gbtrader.co.uk">support@gbtrader.co.uk</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400">© 2026 GB Trader. All rights reserved.</p>
<div className="flex gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">

<div className="h-6 w-10 bg-neutral-200 rounded"></div>
<div className="h-6 w-10 bg-neutral-300 rounded"></div>
<div className="h-6 w-10 bg-neutral-200 rounded"></div>
</div>
</div>
</div>
</footer>


    </>
  );
}
