import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Database of 38 Houses
        const hosts = [
            { name: "Sarah", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" },
            { name: "Michael", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
            { name: "Elena", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" },
            { name: "David", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" }
        ];

        const locations = [
            "Malibu, California", "Ibiza, Spain", "Aspen, Colorado", "Tuscany, Italy", "Santorini, Greece", "Paris, France", 
            "Lake Como, Italy", "Bali, Indonesia", "Tokyo, Japan", "Kyoto, Japan", "New York City, NY", "London, UK", 
            "Swiss Alps, Switzerland", "Maldives", "Cape Town, SA", "Sydney, Australia", "Maui, Hawaii", "Tulum, Mexico", 
            "Banff, Canada", "Amalfi Coast, Italy", "Reykjavik, Iceland", "Dubai, UAE", "Costa Rica", "Fiji", 
            "Bora Bora", "Prague, Czechia", "Vienna, Austria", "Rome, Italy", "Barcelona, Spain", "Lisbon, Portugal", 
            "Amsterdam, Netherlands", "Berlin, Germany", "Munich, Germany", "Zermatt, Switzerland", "Queenstown, NZ", 
            "Phuket, Thailand", "Seoul, South Korea", "Taipei, Taiwan"
        ];

        const titles = [
            "Beach and ocean views", "Built by renowned architect", "National Park views", "Vineyard estate", 
            "Cliffside cave house", "Near Eiffel Tower", "Private boat dock", "Jungle canopy view",
            "Modern downtown loft", "Traditional machiya", "Penthouse with skyline view", "Historic townhouse",
            "Ski-in/ski-out chalet", "Overwater bungalow", "Villa with mountain views", "Harborfront apartment",
            "Tropical garden oasis", "Eco-friendly treehouse", "Log cabin near lake", "Cliffside villa",
            "Geothermal retreat", "Luxury high-rise condo", "Rainforest hideaway", "Private island resort",
            "Luxury lagoon villa", "Gothic quarter flat", "Imperial city center stay", "Colosseum view penthouse",
            "Gaudí inspired flat", "Alfama district apartment", "Canal boat stay", "Mitte art studio",
            "Bavarian lodge", "Matterhorn view chalet", "Lake wakatipu villa", "Andaman sea view",
            "Hanok village house", "101 tower view apartment"
        ];

        const images = [
            "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=800&q=80",
            "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
            "https://images.unsplash.com/photo-1502672260266-1c1de2d936b4?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80"
        ];

        // Generate 38 listings
        const houses = [];
        for (let i = 0; i < 38; i++) {
            const basePrice = Math.floor(Math.random() * 800) + 120;
            const rating = (Math.random() * (5.0 - 4.5) + 4.5).toFixed(2);
            const reviews = Math.floor(Math.random() * 400) + 20;
            const isFav = Math.random() > 0.7;
            const host = hosts[i % hosts.length];
            const img = images[i % images.length]; // cycle through images
            
            houses.push({
                id: i,
                location: locations[i],
                title: titles[i],
                dates: "Oct " + (Math.floor(Math.random() * 15) + 1) + " - " + (Math.floor(Math.random() * 10) + 16),
                price: basePrice,
                rating: rating,
                reviews: reviews,
                image: img,
                isFavorite: isFav,
                hostName: host.name,
                hostImg: host.img,
                guests: Math.floor(Math.random() * 6) + 2,
                bedrooms: Math.floor(Math.random() * 4) + 1,
                beds: Math.floor(Math.random() * 5) + 1,
                baths: Math.floor(Math.random() * 3) + 1,
                description: `Experience the beauty of ${locations[i].split(',')[0]} in this stunning property. Featuring top-tier amenities, comfortable living spaces, and easy access to local attractions. Perfect for families, couples, or solo travelers seeking an unforgettable getaway. Book now to secure your dates in this highly sought-after location.`
            });
        }

        let currentHouse = null;

        // Render Grid
        function renderGrid() {
            const grid = document.getElementById('listing-grid');
            grid.innerHTML = houses.map(house => `
                <div class="group cursor-pointer flex flex-col gap-3" onclick="showDetail(${house.id})">
                    <div class="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                        <img src="${house.image}" alt="${house.location}" class="object-cover w-full h-full transition duration-500 group-hover:scale-105">
                        <button class="absolute top-3 right-3 text-white/80 hover:text-rose-500 hover:scale-110 transition duration-200 z-10" onclick="toggleHeart(event)">
                            <iconify-icon icon="solar:heart-linear" class="text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" style="stroke-width: 1.5;"></iconify-icon>
                        </button>
                        ${house.isFavorite ? `
                        <div class="absolute top-3 left-3 bg-white px-2 py-1 rounded-full shadow-md z-10">
                            <span class="text-sm font-medium">Guest favorite</span>
                        </div>` : ''}
                    </div>
                    <div class="flex flex-col">
                        <div class="flex justify-between items-start">
                            <h3 class="text-sm font-medium text-gray-900 truncate pr-4">${house.location}</h3>
                            <div class="flex items-center gap-1 text-sm flex-shrink-0">
                                <iconify-icon icon="solar:star-linear" class="text-xs" style="stroke-width: 1.5;"></iconify-icon>
                                <span class="font-light">${house.rating}</span>
                            </div>
                        </div>
                        <span class="text-sm text-gray-500 font-light truncate">${house.title}</span>
                        <span class="text-sm text-gray-500 font-light truncate">${house.dates}</span>
                        <div class="mt-1.5 flex items-baseline gap-1">
                            <span class="text-sm font-semibold text-gray-900">$${house.price}</span>
                            <span class="text-sm font-light text-gray-900">night</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Categories generation
        const cats = [
            { icon: "solar:home-smile-linear", text: "Icons", active: false },
            { icon: "solar:beach-linear", text: "Beachfront", active: true },
            { icon: "solar:tree-2-linear", text: "Cabins", active: false },
            { icon: "solar:fire-linear", text: "Trending", active: false },
            { icon: "solar:cup-hot-linear", text: "Bed & breakfasts", active: false },
            { icon: "solar:water-drops-linear", text: "Lakefront", active: false },
            { icon: "solar:key-minimalistic-linear", text: "New", active: false },
            { icon: "solar:city-linear", text: "Top cities", active: false },
            { icon: "solar:mountains-linear", text: "Amazing views", active: false },
            { icon: "solar:signpost-2-linear", text: "Camping", active: false },
            { icon: "solar:palmtree-linear", text: "Tropical", active: false },
            { icon: "solar:snowflake-linear", text: "Arctic", active: false }
        ];

        function renderCategories() {
            const bar = document.getElementById('categories-bar');
            bar.innerHTML = cats.map(c => `
                <button class="flex flex-col items-center gap-2 ${c.active ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300'} pb-2 cursor-pointer flex-shrink-0 transition duration-200">
                    <iconify-icon icon="${c.icon}" class="text-2xl" style="stroke-width: 1.5;"></iconify-icon>
                    <span class="text-xs font-medium">${c.text}</span>
                </button>
            `).join('') + `
            <div class="hidden md:flex ml-auto pl-4">
                <button class="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 hover:border-gray-900 hover:bg-gray-50 transition duration-200">
                    <iconify-icon icon="solar:tuning-2-linear" class="text-lg" style="stroke-width: 1.5;"></iconify-icon>
                    <span class="text-xs font-medium">Filters</span>
                </button>
            </div>
            `;
        }

        // Toggle heart without opening detail
        function toggleHeart(e) {
            e.stopPropagation();
            const icon = e.currentTarget.querySelector('iconify-icon');
            if(icon.getAttribute('icon') === 'solar:heart-linear') {
                icon.setAttribute('icon', 'solar:heart-bold');
                icon.classList.add('text-rose-500');
            } else {
                icon.setAttribute('icon', 'solar:heart-linear');
                icon.classList.remove('text-rose-500');
            }
        }

        // Navigation functions
        const homeView = document.getElementById('home-view');
        const detailView = document.getElementById('detail-view');
        const catBar = document.getElementById('categories-bar');

        function showDetail(id) {
            currentHouse = houses.find(h => h.id === id);
            
            // Populate data
            document.getElementById('detail-title').innerText = `${currentHouse.title} in ${currentHouse.location.split(',')[0]}`;
            document.getElementById('detail-rating').innerText = currentHouse.rating;
            document.getElementById('detail-reviews').innerText = currentHouse.reviews;
            document.getElementById('detail-location').innerText = currentHouse.location;
            document.getElementById('detail-image').src = currentHouse.image;
            
            const badge = document.getElementById('detail-badge');
            if(currentHouse.isFavorite) badge.classList.remove('hidden');
            else badge.classList.add('hidden');

            document.getElementById('detail-host').innerText = currentHouse.hostName;
            document.getElementById('detail-host-img').src = currentHouse.hostImg;
            document.getElementById('detail-capacity').innerText = `${currentHouse.guests} guests · ${currentHouse.bedrooms} bedrooms · ${currentHouse.beds} beds · ${currentHouse.baths} baths`;
            document.getElementById('detail-description').innerText = currentHouse.description;

            // Setup pricing
            document.getElementById('calc-price-night').innerText = `$${currentHouse.price}`;
            
            // Set default dates (today and +5 days)
            const today = new Date();
            const checkout = new Date(today);
            checkout.setDate(checkout.getDate() + 5);
            
            document.getElementById('checkin-date').valueAsDate = today;
            document.getElementById('checkout-date').valueAsDate = checkout;
            
            calculatePrice();

            // Transitions
            homeView.classList.add('opacity-0');
            setTimeout(() => {
                homeView.classList.add('hidden');
                catBar.classList.add('hidden');
                detailView.classList.remove('hidden');
                window.scrollTo(0,0);
                setTimeout(() => detailView.classList.remove('opacity-0'), 50);
            }, 300);
        }

        function goHome(e) {
            if(e) e.preventDefault();
            detailView.classList.add('opacity-0');
            setTimeout(() => {
                detailView.classList.add('hidden');
                homeView.classList.remove('hidden');
                catBar.classList.remove('hidden');
                setTimeout(() => homeView.classList.remove('opacity-0'), 50);
            }, 300);
        }

        // Pricing Calculator
        function calculatePrice() {
            if(!currentHouse) return;
            
            const checkin = document.getElementById('checkin-date').valueAsDate;
            const checkout = document.getElementById('checkout-date').valueAsDate;
            
            let nights = 5; // default
            if(checkin && checkout && checkout > checkin) {
                const diffTime = Math.abs(checkout - checkin);
                nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            }

            const baseTotal = nights * currentHouse.price;
            const cleaningFee = 120; // Fixed mock fee
            const serviceFee = Math.round(baseTotal * 0.12); // 12% mock fee
            const grandTotal = baseTotal + cleaningFee + serviceFee;

            document.getElementById('calc-nights-text').innerText = `$${currentHouse.price} x ${nights} nights`;
            document.getElementById('calc-base-total').innerText = `$${baseTotal}`;
            document.getElementById('calc-cleaning-fee').innerText = `$${cleaningFee}`;
            document.getElementById('calc-service-fee').innerText = `$${serviceFee}`;
            document.getElementById('calc-grand-total').innerText = `$${grandTotal}`;
        }

        // Init
        renderCategories();
        renderGrid();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white border-b border-gray-200">

<nav className="hidden md:flex items-center justify-between px-10 py-4 max-w-[1600px] mx-auto">

<div className="flex-1 flex items-center">
<a className="text-rose-500 text-2xl font-semibold tracking-tighter transition hover:opacity-80" href="#" onclick="goHome(event)">airbnb</a>
</div>

<div className="flex items-center border border-gray-300 rounded-full shadow-sm hover:shadow-md transition duration-200 cursor-pointer" id="nav-search">
<button className="px-6 py-2.5 text-sm font-medium">Anywhere</button>
<div className="w-[1px] h-6 bg-gray-300"></div>
<button className="px-6 py-2.5 text-sm font-medium">Any week</button>
<div className="w-[1px] h-6 bg-gray-300"></div>
<div className="flex items-center pl-6 pr-2 py-2.5">
<span className="text-sm font-light text-gray-500 mr-4">Add guests</span>
<div className="bg-rose-500 text-white rounded-full p-2 flex items-center justify-center">
<iconify-icon className="text-sm" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>

<div className="flex-1 flex items-center justify-end gap-2">
<a className="text-sm font-medium hover:bg-gray-100 px-4 py-2.5 rounded-full transition duration-200" href="#">Airbnb your home</a>
<button className="flex items-center hover:bg-gray-100 p-3 rounded-full transition duration-200">
<iconify-icon className="text-lg" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="flex items-center border border-gray-300 rounded-full p-1.5 pl-3 gap-3 hover:shadow-md transition duration-200 cursor-pointer ml-1">
<iconify-icon className="text-lg text-gray-700" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="bg-gray-500 text-white rounded-full p-1.5 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:user-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</nav>

<div className="md:hidden px-6 pt-4 pb-2" id="mobile-nav-search">
<div className="flex items-center border border-gray-200 rounded-full py-3 px-5 shadow-[0_3px_10px_rgb(0,0,0,0.08)] bg-white cursor-pointer" onclick="goHome(event)">
<iconify-icon className="text-xl text-gray-800 mr-4" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="flex flex-col">
<span className="text-sm font-medium">Anywhere</span>
<span className="text-xs text-gray-500 font-light flex gap-1">
                        Any week <span aria-hidden="true">·</span> Add guests
                    </span>
</div>
</div>
</div>

<div className="px-6 md:px-10 max-w-[1600px] mx-auto flex items-center gap-8 overflow-x-auto pt-4 pb-4 transition-all duration-300" id="categories-bar" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

</div>
</header>

<main className="px-6 md:px-10 py-6 md:py-8 max-w-[1600px] mx-auto transition-opacity duration-300" id="home-view">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10" id="listing-grid">

</div>
</main>

<main className="hidden px-6 md:px-40 py-6 md:py-8 max-w-[1600px] mx-auto opacity-0 transition-opacity duration-300" id="detail-view">

<button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 mb-6 group transition" onclick="goHome(event)">
<iconify-icon className="text-lg group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            Back to listings
        </button>

<div className="flex flex-col gap-2 mb-6">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900" id="detail-title"></h1>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 text-sm font-medium text-gray-900">
<div className="flex items-center gap-1">
<iconify-icon className="text-sm" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span id="detail-rating"></span>
</div>
<span className="text-gray-400 font-light">•</span>
<span className="underline cursor-pointer"><span id="detail-reviews"></span> reviews</span>
<span className="text-gray-400 font-light">•</span>
<span className="underline cursor-pointer" id="detail-location"></span>
</div>
<div className="flex items-center gap-4 hidden md:flex">
<button className="flex items-center gap-2 text-sm font-medium hover:bg-gray-100 px-3 py-1.5 rounded-lg transition">
<iconify-icon className="text-lg" icon="solar:upload-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Share
                    </button>
<button className="flex items-center gap-2 text-sm font-medium hover:bg-gray-100 px-3 py-1.5 rounded-lg transition">
<iconify-icon className="text-lg" icon="solar:heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Save
                    </button>
</div>
</div>
</div>

<div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden bg-gray-100 mb-10 group">
<img alt="House" className="object-cover w-full h-full transition duration-500 group-hover:scale-[1.02]" id="detail-image" src=""/>
<div className="hidden absolute top-4 left-4 bg-white px-3 py-1.5 rounded-full shadow-md z-10" id="detail-badge">
<span className="text-sm font-medium">Guest favorite</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="md:col-span-2 flex flex-col gap-8">

<div className="flex items-center justify-between pb-8 border-b border-gray-200">
<div className="flex flex-col gap-1">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Entire home hosted by <span id="detail-host"></span></h2>
<span className="text-base text-gray-500 font-light" id="detail-capacity"></span>
</div>
<div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 border border-gray-300">
<img alt="Host" className="object-cover w-full h-full" id="detail-host-img" src=""/>
</div>
</div>

<div className="flex flex-col gap-6 pb-8 border-b border-gray-200">
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-gray-900 mt-0.5" icon="solar:smart-home-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="flex flex-col">
<span className="text-base font-medium text-gray-900">Self check-in</span>
<span className="text-sm font-light text-gray-500">Check yourself in with the lockbox.</span>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-gray-900 mt-0.5" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="flex flex-col">
<span className="text-base font-medium text-gray-900">Great location</span>
<span className="text-sm font-light text-gray-500">100% of recent guests gave the location a 5-star rating.</span>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-gray-900 mt-0.5" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="flex flex-col">
<span className="text-base font-medium text-gray-900">Free cancellation</span>
<span className="text-sm font-light text-gray-500">Cancel up to 48 hours before check-in for a full refund.</span>
</div>
</div>
</div>

<div className="flex flex-col gap-4 pb-8 border-b border-gray-200">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">About this space</h2>
<p className="text-base text-gray-700 font-light leading-relaxed" id="detail-description"></p>
</div>

<div className="flex flex-col gap-6 pb-8">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">What this place offers</h2>
<div className="grid grid-cols-2 gap-y-4 gap-x-2">
<div className="flex items-center gap-3 text-base font-light text-gray-700"><iconify-icon className="text-xl" icon="solar:tcl-tv-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Fast Wi-Fi</div>
<div className="flex items-center gap-3 text-base font-light text-gray-700"><iconify-icon className="text-xl" icon="solar:swimming-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Private Pool</div>
<div className="flex items-center gap-3 text-base font-light text-gray-700"><iconify-icon className="text-xl" icon="solar:chef-hat-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Full Kitchen</div>
<div className="flex items-center gap-3 text-base font-light text-gray-700"><iconify-icon className="text-xl" icon="solar:washing-machine-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Washer &amp; Dryer</div>
<div className="flex items-center gap-3 text-base font-light text-gray-700"><iconify-icon className="text-xl" icon="solar:air-conditioner-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Air conditioning</div>
<div className="flex items-center gap-3 text-base font-light text-gray-700"><iconify-icon className="text-xl" icon="solar:car-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Free parking</div>
</div>
</div>
</div>

<div className="md:col-span-1">
<div className="sticky top-32 border border-gray-200 rounded-2xl p-6 shadow-xl shadow-gray-200/50 bg-white">
<div className="flex items-baseline gap-1 mb-6">
<span className="text-2xl font-semibold tracking-tight text-gray-900" id="calc-price-night"></span>
<span className="text-base font-light text-gray-500">night</span>
</div>

<div className="border border-gray-400 rounded-xl overflow-hidden mb-4">
<div className="flex border-b border-gray-400 relative">
<div className="flex-1 p-3 border-r border-gray-400 relative">
<label className="block text-xs font-semibold text-gray-900 uppercase">Check-in</label>
<input className="w-full text-sm font-light text-gray-900 outline-none bg-transparent mt-1 cursor-pointer" id="checkin-date" onchange="calculatePrice()" type="date"/>
</div>
<div className="flex-1 p-3 relative">
<label className="block text-xs font-semibold text-gray-900 uppercase">Checkout</label>
<input className="w-full text-sm font-light text-gray-900 outline-none bg-transparent mt-1 cursor-pointer" id="checkout-date" onchange="calculatePrice()" type="date"/>
</div>
</div>
<div className="p-3 relative">
<label className="block text-xs font-semibold text-gray-900 uppercase">Guests</label>
<select className="w-full text-sm font-light text-gray-900 outline-none bg-transparent mt-1 appearance-none cursor-pointer">
<option>1 guest</option>
<option selected="">2 guests</option>
<option>3 guests</option>
<option>4 guests</option>
<option>5+ guests</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 text-gray-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-medium text-base rounded-xl py-3.5 transition duration-200 shadow-sm active:scale-[0.98]">
                        Reserve
                    </button>
<p className="text-center text-sm font-light text-gray-500 mt-4 mb-6">You won't be charged yet</p>

<div className="flex flex-col gap-3 pb-4 border-b border-gray-200 text-base font-light text-gray-700">
<div className="flex justify-between items-center">
<span className="underline" id="calc-nights-text"></span>
<span id="calc-base-total"></span>
</div>
<div className="flex justify-between items-center">
<span className="underline">Cleaning fee</span>
<span id="calc-cleaning-fee"></span>
</div>
<div className="flex justify-between items-center">
<span className="underline">Service fee</span>
<span id="calc-service-fee"></span>
</div>
</div>
<div className="flex justify-between items-center pt-4 text-lg font-medium text-gray-900">
<span>Total before taxes</span>
<span id="calc-grand-total"></span>
</div>
</div>
</div>
</div>
</main>

<div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-center gap-12 py-3 px-6 pb-6 z-50 transition-transform duration-300" id="mobile-bottom-nav">
<button className="flex flex-col items-center gap-1 text-rose-500" onclick="goHome(event)">
<iconify-icon className="text-2xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium">Explore</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-900 transition">
<iconify-icon className="text-2xl" icon="solar:heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium">Wishlists</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-900 transition">
<iconify-icon className="text-2xl" icon="solar:user-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium">Log in</span>
</button>
</div>



    </>
  );
}
