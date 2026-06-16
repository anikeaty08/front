import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Single Page App Logic
        function navigateTo(pageId) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.add('hidden');
                section.classList.remove('page-enter'); // Reset animation
            });

            // Show target section
            const target = document.getElementById(pageId);
            if(target) {
                target.classList.remove('hidden');
                // Trigger reflow to restart animation
                void target.offsetWidth; 
                target.classList.add('page-enter');
            }

            // Update Nav State
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-slate-900');
                link.classList.add('text-slate-500');
                if(link.getAttribute('data-target') === pageId) {
                    link.classList.remove('text-slate-500');
                    link.classList.add('text-slate-900');
                }
            });

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Search Functionality
        const searchInput = document.getElementById('globalSearch');
        const cardsContainer = document.getElementById('cards-container');
        const hotelCards = document.querySelectorAll('.hotel-card');
        const noResults = document.getElementById('no-results');

        // Scroll to hotels section from hero button
        function scrollToHotels() {
            const hotelsSection = document.getElementById('hotel-listings');
            hotelsSection.scrollIntoView({ behavior: 'smooth' });
        }

        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            let hasResults = false;

            // If user searches, force navigation to home where the list is
            const homeSection = document.getElementById('home');
            if (homeSection.classList.contains('hidden')) {
                navigateTo('home');
                // Scroll down to listings
                setTimeout(() => scrollToHotels(), 100);
            }

            hotelCards.forEach(card => {
                const name = card.getAttribute('data-name').toLowerCase();
                const location = card.getAttribute('data-location').toLowerCase();
                
                if (name.includes(term) || location.includes(term)) {
                    card.style.display = 'block';
                    hasResults = true;
                } else {
                    card.style.display = 'none';
                }
            });

            if (!hasResults && term.length > 0) {
                noResults.classList.remove('hidden');
            } else {
                noResults.classList.add('hidden');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-[1440px] mx-auto p-4 md:p-6 lg:p-8">

<nav className="flex items-center justify-between mb-8 relative z-50">
<div className="flex items-center gap-2 cursor-pointer" onclick="navigateTo('home')">
<i className="w-6 h-6 text-slate-900 fill-slate-900/10" data-lucide="sun"></i>
<span className="text-xl font-medium tracking-tight">Sunrise</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<button className="nav-link text-slate-900 transition-colors" data-target="home" onclick="navigateTo('home')">Home</button>
<button className="nav-link hover:text-slate-900 transition-colors" data-target="about" onclick="navigateTo('about')">About Us</button>
<button className="nav-link hover:text-slate-900 transition-colors" data-target="services" onclick="navigateTo('services')">Services</button>
<button className="nav-link hover:text-slate-900 transition-colors" data-target="facilities" onclick="navigateTo('facilities')">Facilities</button>
<button className="nav-link hover:text-slate-900 transition-colors" data-target="membership" onclick="navigateTo('membership')">Membership</button>
</div>
<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center bg-white px-4 py-2.5 rounded-full border border-slate-200 shadow-sm w-64 focus-within:ring-2 focus-within:ring-slate-100 transition-shadow">
<input className="flex-1 bg-transparent border-none outline-none text-slate-900 text-sm placeholder:text-slate-400" id="globalSearch" placeholder="Search hotels..." type="text"/>
<i className="w-4 h-4 text-slate-400" data-lucide="search"></i>
</div>
<button className="bg-slate-900 text-white pl-5 pr-1.5 py-1.5 rounded-full text-sm font-medium flex items-center gap-3 hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 active:scale-95" onclick="navigateTo('membership')">
                    Book Now
                    <span className="bg-white/20 rounded-full p-1">
<i className="w-4 h-4 text-white" data-lucide="arrow-up-right"></i>
</span>
</button>
</div>
</nav>

<main id="main-content">

<div className="page-section page-enter" id="home">

<div className="relative w-full h-[600px] md:h-[700px] rounded-[2rem] overflow-hidden group mb-20">
<img alt="Modern Hotel" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute top-6 right-6 hidden md:flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
<span className="text-sm font-medium mr-2">Get the app</span>
<i className="w-4 h-4 fill-current" data-lucide="smartphone"></i>
<div className="w-px h-4 bg-slate-300 mx-1"></div>
<button className="bg-slate-900 rounded-full p-1">
<i className="w-3 h-3 text-white" data-lucide="download"></i>
</button>
</div>
<div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-20 pt-20 pb-32">
<h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight mb-6 max-w-5xl leading-[1.1]">
                            Find amazing hotels, compare prices, and <br className="hidden md:block"/> book your dream vacation
                        </h1>
<p className="text-slate-200 text-lg md:text-xl font-normal max-w-2xl leading-relaxed tracking-wide opacity-90">
                            Search trusted hotels for unforgettable stays and hassle-free bookings. Find the best hotels near you in seconds.
                        </p>
</div>

<div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-20 md:right-20 bg-white p-2.5 rounded-3xl shadow-2xl flex flex-col lg:flex-row gap-2">
<div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2">

<div className="bg-slate-50 rounded-2xl p-3 flex flex-col justify-center px-5 hover:bg-slate-100 transition-colors cursor-pointer group/input">
<label className="text-xs text-slate-500 font-medium mb-1 ml-7 group-hover/input:text-slate-700">Location</label>
<div className="flex items-center gap-3">
<div className="w-5 h-5 flex items-center justify-center rounded-full bg-slate-200 text-slate-500">
<i className="w-3 h-3" data-lucide="map-pin"></i>
</div>
<input className="bg-transparent border-none text-slate-900 font-medium text-sm focus:outline-none w-full" type="text" value="Lisbon, Portugal"/>
</div>
</div>

<div className="bg-slate-50 rounded-2xl p-3 flex flex-col justify-center px-5 hover:bg-slate-100 transition-colors cursor-pointer group/input">
<label className="text-xs text-slate-500 font-medium mb-1 ml-7 group-hover/input:text-slate-700">Type</label>
<div className="flex items-center gap-3">
<div className="w-5 h-5 flex items-center justify-center rounded-full bg-slate-200 text-slate-500">
<i className="w-3 h-3" data-lucide="home"></i>
</div>
<select className="bg-transparent border-none text-slate-900 font-medium text-sm focus:outline-none w-full appearance-none">
<option>Minimalist</option>
<option>Luxury</option>
<option>Resort</option>
</select>
</div>
</div>

<div className="bg-slate-50 rounded-2xl p-3 flex flex-col justify-center px-5 hover:bg-slate-100 transition-colors cursor-pointer group/input">
<label className="text-xs text-slate-500 font-medium mb-1 ml-7 group-hover/input:text-slate-700">Price Range</label>
<div className="flex items-center gap-3">
<div className="w-5 h-5 flex items-center justify-center rounded-full bg-slate-200 text-slate-500">
<i className="w-3 h-3" data-lucide="dollar-sign"></i>
</div>
<span className="text-slate-900 font-medium text-sm">10k - 12k</span>
</div>
</div>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-base py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98]" onclick="scrollToHotels()">
                            Search Hotel
                        </button>
</div>
</div>

<div className="mb-20">
<div className="flex flex-col items-center text-center mb-16">
<div className="inline-flex items-center gap-1 bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-sm mb-6 cursor-pointer hover:border-slate-300 transition-colors">
<span className="text-sm font-medium text-slate-600">Discover</span>
<i className="w-3.5 h-3.5 text-slate-600" data-lucide="arrow-right"></i>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1] max-w-4xl">
                            Explore Stays, About Comfort, Your Stay, Our Priority
                        </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-4 flex flex-col justify-between space-y-8 lg:pr-8 py-4">
<div>
<span className="inline-block bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full mb-4">About Us</span>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">
                                    Sunrise is a trusted platform connecting travelers with top hotels
                                </h3>
<p className="text-lg text-slate-500 leading-relaxed">
                                    We provide a seamless booking experience, ensuring comfort and luxury at the best prices available in the market.
                                </p>
</div>
<button className="group bg-slate-900 text-white pl-6 pr-2 py-2 rounded-full w-max flex items-center gap-4 text-sm font-medium hover:bg-slate-800 transition-all" onclick="navigateTo('about')">
                                Learn More
                                <span className="bg-white rounded-full p-1.5 group-hover:scale-110 transition-transform">
<i className="w-3.5 h-3.5 text-slate-900" data-lucide="arrow-up-right"></i>
</span>
</button>
</div>
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Hotel Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/20">Outdoor View</div>
<div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="map-pin"></i>
<span className="text-xs font-medium text-slate-900">NYC, United States</span>
</div>
</div>
<div className="flex flex-col gap-6">
<div className="relative flex-1 rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-black/30 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/10">Resort</div>
</div>
<div className="px-2">
<p className="text-slate-500 text-sm leading-relaxed">
                                        Explore the perfect destination for comfort, relaxation, and luxury. Where hospitality meets excellence.
                                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="py-16 border-t border-slate-100" id="hotel-listings">
<div className="flex items-end justify-between mb-10 px-2">
<div>
<span className="text-sm font-medium text-slate-500 mb-2 block">Premium Stays</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900">Explore Best Hotels</h2>
</div>
<div className="flex items-center gap-4">
<span className="text-sm text-slate-400 hidden" id="result-count">Showing matches</span>
<button className="bg-slate-900 text-white text-xs font-medium px-4 py-2.5 rounded-full hover:bg-slate-800 transition-colors">View All</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="cards-container">


<div className="hotel-card group relative rounded-2xl overflow-hidden h-[380px] cursor-pointer" data-location="Dubai" data-name="Crystal View Hotel">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded-md border border-white/20">$2500/night</div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-white/70 text-[10px] uppercase tracking-wider mb-1">Dubai</p>
<h3 className="text-white text-lg font-medium tracking-tight">Crystal View Hotel</h3>
</div>
</div>

<div className="hotel-card group relative rounded-2xl overflow-hidden h-[380px] cursor-pointer" data-location="Paris" data-name="The Grand Terrace">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded-md border border-white/20">$1800/night</div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-white/70 text-[10px] uppercase tracking-wider mb-1">Paris</p>
<h3 className="text-white text-lg font-medium tracking-tight">The Grand Terrace</h3>
</div>
</div>

<div className="hotel-card group relative rounded-2xl overflow-hidden h-[380px] cursor-pointer" data-location="Maldives" data-name="Serenity Bay Inn">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded-md border border-white/20">$3200/night</div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-white/70 text-[10px] uppercase tracking-wider mb-1">Maldives</p>
<h3 className="text-white text-lg font-medium tracking-tight">Serenity Bay Inn</h3>
</div>
</div>

<div className="hotel-card group relative rounded-2xl overflow-hidden h-[380px] cursor-pointer" data-location="Miami" data-name="Golden Sands Resort">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded-md border border-white/20">$2100/night</div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-white/70 text-[10px] uppercase tracking-wider mb-1">Miami</p>
<h3 className="text-white text-lg font-medium tracking-tight">Golden Sands Resort</h3>
</div>
</div>
</div>

<div className="hidden text-center py-20" id="no-results">
<i className="w-12 h-12 text-slate-300 mx-auto mb-4" data-lucide="search-x"></i>
<h3 className="text-slate-900 font-medium">No hotels found</h3>
<p className="text-slate-500 text-sm">Try adjusting your search terms.</p>
</div>
</div>
</div>

<div className="page-section hidden page-enter" id="about">
<div className="py-20 text-center max-w-3xl mx-auto mb-16">
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900 mb-6">Redefining Hospitality</h1>
<p className="text-lg text-slate-500">We started with a simple mission: to connect travelers with spaces that feel like home, but better.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
<div className="space-y-6">
<h3 className="text-2xl font-medium text-slate-900">Our Story</h3>
<p className="text-slate-500 leading-relaxed">Founded in 2020, Sunrise Hotels began as a boutique agency in Lisbon. Today, we partner with over 500 premium properties worldwide. We believe that where you stay shapes your entire journey.</p>
<div className="grid grid-cols-2 gap-8 pt-6">
<div>
<h4 className="text-3xl font-semibold text-slate-900 mb-1">500+</h4>
<p className="text-sm text-slate-500">Partner Hotels</p>
</div>
<div>
<h4 className="text-3xl font-semibold text-slate-900 mb-1">120k</h4>
<p className="text-sm text-slate-500">Happy Guests</p>
</div>
</div>
</div>
<div className="rounded-3xl overflow-hidden h-[400px]">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="page-section hidden page-enter" id="services">
<div className="py-16 mb-10">
<h1 className="text-4xl font-medium tracking-tight text-slate-900 mb-4">Our Services</h1>
<p className="text-slate-500 max-w-xl">Everything you need for a perfect stay, curated by our concierge team.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-slate-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-slate-900" data-lucide="utensils"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Gourmet Dining</h3>
<p className="text-sm text-slate-500 leading-relaxed">Access to world-class restaurants within our partner hotels, featuring local and international cuisine.</p>
</div>

<div className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-slate-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-slate-900" data-lucide="car"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Private Transport</h3>
<p className="text-sm text-slate-500 leading-relaxed">Airport pickups and luxury chauffeurs available 24/7 to get you where you need to go.</p>
</div>

<div className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-slate-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-slate-900" data-lucide="waves"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Spa &amp; Wellness</h3>
<p className="text-sm text-slate-500 leading-relaxed">Rejuvenate with exclusive access to top-tier spa facilities and wellness treatments.</p>
</div>
</div>
</div>

<div className="page-section hidden page-enter" id="facilities">
<div className="py-16">
<h1 className="text-4xl font-medium tracking-tight text-slate-900 mb-12">World Class Facilities</h1>
<div className="space-y-24">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div className="order-2 lg:order-1">
<h3 className="text-2xl font-medium text-slate-900 mb-4">Infinity Pools</h3>
<p className="text-slate-500 leading-relaxed mb-6">Experience breathtaking views from our temperature-controlled infinity pools. Perfect for morning laps or evening relaxation with a cocktail.</p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Temperature Controlled</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Poolside Service</li>
</ul>
</div>
<div className="order-1 lg:order-2 rounded-3xl overflow-hidden h-[300px]">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div className="rounded-3xl overflow-hidden h-[300px]">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="text-2xl font-medium text-slate-900 mb-4">Modern Gyms</h3>
<p className="text-slate-500 leading-relaxed mb-6">State-of-the-art fitness centers equipped with the latest Technogym equipment, personal trainers, and yoga studios.</p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> 24/7 Access</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Personal Training</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden page-enter" id="membership">
<div className="py-16 text-center">
<h1 className="text-4xl font-medium tracking-tight text-slate-900 mb-4">Sunrise Membership</h1>
<p className="text-slate-500 mb-12">Unlock exclusive rates and perks.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">

<div className="bg-white border border-slate-200 p-8 rounded-3xl">
<h3 className="text-lg font-medium text-slate-900">Member</h3>
<div className="text-3xl font-bold text-slate-900 my-4">Free</div>
<p className="text-xs text-slate-500 mb-6">Basic access to booking.</p>
<button className="w-full bg-slate-100 text-slate-900 font-medium py-3 rounded-xl mb-8 hover:bg-slate-200 transition-colors">Current Plan</button>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Standard Rates</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Email Support</li>
</ul>
</div>

<div className="bg-slate-900 p-8 rounded-3xl relative overflow-hidden text-white shadow-xl transform md:-translate-y-4">
<div className="absolute top-0 right-0 bg-white/20 px-3 py-1 rounded-bl-xl text-[10px] font-bold tracking-wider uppercase">Popular</div>
<h3 className="text-lg font-medium">Gold</h3>
<div className="text-3xl font-bold my-4">$99<span className="text-sm font-normal text-slate-400">/year</span></div>
<p className="text-xs text-slate-400 mb-6">For frequent travelers.</p>
<button className="w-full bg-white text-slate-900 font-medium py-3 rounded-xl mb-8 hover:bg-slate-100 transition-colors">Upgrade to Gold</button>
<ul className="space-y-3 text-sm text-slate-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-white" data-lucide="check"></i> 10% Off bookings</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-white" data-lucide="check"></i> Late Checkout</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-white" data-lucide="check"></i> Free Breakfast</li>
</ul>
</div>

<div className="bg-white border border-slate-200 p-8 rounded-3xl">
<h3 className="text-lg font-medium text-slate-900">Platinum</h3>
<div className="text-3xl font-bold text-slate-900 my-4">$299<span className="text-sm font-normal text-slate-500">/year</span></div>
<p className="text-xs text-slate-500 mb-6">Ultimate luxury access.</p>
<button className="w-full bg-slate-900 text-white font-medium py-3 rounded-xl mb-8 hover:bg-slate-800 transition-colors">Get Platinum</button>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> 20% Off bookings</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Suite Upgrades</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> 24/7 Concierge</li>
</ul>
</div>
</div>
</div>
</div>
</main>

<div className="mt-20 mb-20 text-center max-w-2xl mx-auto pt-10 border-t border-slate-100">
<span className="inline-block border border-slate-200 text-slate-500 text-[10px] font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-wider">Explore Stays</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Discover top hotel options nearby<br/>Effortless hotel booking, tailored for you
            </h2>
<p className="text-slate-500 text-sm mb-8 max-w-md mx-auto">Find the best hotels around you with ease and access top-notch hospitality services tailored to your needs.</p>
<button className="bg-slate-900 text-white pl-6 pr-2 py-2 rounded-full inline-flex items-center gap-4 text-sm font-medium hover:bg-slate-800 transition-all" onclick="navigateTo('membership')">
                Get started
                <span className="bg-white rounded-full p-1.5">
<i className="w-3.5 h-3.5 text-slate-900" data-lucide="arrow-up-right"></i>
</span>
</button>
<div className="mt-12 flex flex-wrap justify-center gap-8 opacity-40 grayscale">
<div className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="box"></i> <span className="font-bold text-sm">Dropbox</span></div>
<div className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="cloud-lightning"></i> <span className="font-bold text-sm">Creative</span></div>
<div className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="shopping-bag"></i> <span className="font-bold text-sm">Deliveroo</span></div>
<div className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="triangle"></i> <span className="font-bold text-sm">Vercel</span></div>
</div>
</div>
</div>


    </>
  );
}
