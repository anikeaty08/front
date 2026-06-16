import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
gold: '#BC9860',
'gold-light': '#D4B480',
'gold-dim': '#8C7040',
cream: '#F7F4EE',
'cream-dim': '#EBE5D9',
charcoal: '#151515',
'charcoal-light': '#1F1F1F',
'charcoal-lighter': '#2A2A2A'
},
fontFamily: {
'display': ['Playfair Display', 'serif'],
'body': ['Inter', 'sans-serif']
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
widest: '0.15em'
}
}
}
}



        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('bg-charcoal/95', 'shadow-lg');
                nav.classList.remove('bg-charcoal/80', 'border-transparent');
            } else {
                nav.classList.remove('bg-charcoal/95', 'shadow-lg');
                nav.classList.add('bg-charcoal/80');
            }
        });

        // Hide Loader
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            loader.classList.add('opacity-0');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 700);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-charcoal z-[60] flex items-center justify-center transition-opacity duration-700" id="loader">
<div className="text-center">
<div className="mb-6 relative">
<div className="w-16 h-16 border-t-2 border-b-2 border-gold rounded-full animate-spin"></div>
<div className="absolute inset-0 flex items-center justify-center font-display text-gold text-xl">H</div>
</div>
<p className="text-gold text-xs tracking-widest uppercase animate-pulse font-light">Hemingways</p>
</div>
</div>

<header className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-charcoal/80 backdrop-blur-md" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center group-hover:border-gold transition-colors">
<span className="font-display text-gold text-lg">H</span>
</div>
<div className="flex flex-col">
<span className="font-display text-lg tracking-tight leading-none text-cream">HEMINGWAYS</span>
<span className="text-[10px] tracking-widest uppercase text-gold/80 leading-none mt-1">East London</span>
</div>
</a>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-light text-cream/80 hover:text-gold transition-colors" href="#rooms">Accommodation</a>
<a className="text-sm font-light text-cream/80 hover:text-gold transition-colors" href="#dining">Dining</a>
<a className="text-sm font-light text-cream/80 hover:text-gold transition-colors" href="#amenities">Amenities</a>
<a className="text-sm font-light text-cream/80 hover:text-gold transition-colors" href="#casino">Casino</a>
<a className="text-sm font-light text-cream/80 hover:text-gold transition-colors" href="#events">Events</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gold hover:bg-gold-light text-charcoal text-xs font-medium tracking-wide uppercase transition-all" href="#booking">
<span>Book Now</span>
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="lg:hidden text-cream hover:text-gold" onclick="document.getElementById('mobileMenu').classList.remove('translate-x-full')">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="fixed inset-0 z-[70] bg-charcoal transform translate-x-full transition-transform duration-500" id="mobileMenu">
<div className="flex justify-end p-6">
<button className="text-cream hover:text-gold" onclick="document.getElementById('mobileMenu').classList.add('translate-x-full')">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
</div>
<nav className="flex flex-col items-center justify-center h-[80vh] gap-8">
<a className="font-display text-3xl text-cream hover:text-gold" href="#rooms" onclick="document.getElementById('mobileMenu').classList.add('translate-x-full')">Accommodation</a>
<a className="font-display text-3xl text-cream hover:text-gold" href="#dining" onclick="document.getElementById('mobileMenu').classList.add('translate-x-full')">Dining</a>
<a className="font-display text-3xl text-cream hover:text-gold" href="#amenities" onclick="document.getElementById('mobileMenu').classList.add('translate-x-full')">Amenities</a>
<a className="font-display text-3xl text-cream hover:text-gold" href="#casino" onclick="document.getElementById('mobileMenu').classList.add('translate-x-full')">Casino</a>
<a className="mt-8 px-8 py-4 bg-gold text-charcoal font-medium uppercase tracking-widest" href="#booking">Book Your Stay</a>
</nav>
</div>

<section className="relative h-screen flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">

<img alt="Hemingways Hotel Exterior" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/60"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-4 mt-20">
<div className="inline-flex items-center gap-3 mb-6 animate-fade-in-up border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest text-cream/90 font-medium">Southern Sun &amp; Tsogo Sun</span>
</div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-tight tracking-tighter mb-8 animate-fade-in-up delay-100">
                Classical <span className="text-gold italic pr-2">Inspiration</span> <br/> &amp; Elegance
            </h1>
<p className="text-cream/70 text-sm md:text-base font-light max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
                Inspired by the Key West home of Ernest Hemingway, blending warm hospitality with refined luxury in the heart of East London.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
<a className="px-8 py-3.5 bg-gold hover:bg-gold-light text-charcoal text-xs font-medium tracking-widest uppercase transition-all w-full sm:w-auto text-center" href="#rooms">
                    View Rooms
                </a>
<a className="px-8 py-3.5 border border-white/20 hover:border-gold hover:text-gold text-cream text-xs font-medium tracking-widest uppercase transition-all w-full sm:w-auto text-center backdrop-blur-sm" href="#dining">
                    Key Largo Dining
                </a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
<a className="text-cream/40 hover:text-gold transition-colors" href="#about">
<iconify-icon icon="solar:arrow-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 bg-charcoal relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-gold/30"></div>
<img alt="Hotel Interior" className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-gold/30"></div>
</div>
<div>
<span className="text-gold text-xs font-medium tracking-widest uppercase mb-4 block">Our Story</span>
<h2 className="font-display text-4xl md:text-5xl text-cream tracking-tight mb-6">Designed with warm, <span className="text-gold italic">welcoming</span> hospitality.</h2>
<p className="text-cream/60 font-light leading-relaxed mb-6">
                        Hemingways Hotel captures the essence of Ernest Hemingway’s Key West home. From the sub-tropical gardens to the neo-classical architecture, every detail is crafted to provide a sanctuary of peace and elegance.
                    </p>
<p className="text-cream/60 font-light leading-relaxed mb-8">
                        Whether you are here for business at The Venue or leisure at the adjacent Casino and Mall, our 108 rooms and suites offer an award-winning retreat with personalized service that feels immediately like home.
                    </p>
<div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
<div>
<div className="text-3xl font-display text-gold mb-1">108</div>
<div className="text-xs uppercase tracking-wider text-cream/50">Luxury Rooms</div>
</div>
<div>
<div className="text-3xl font-display text-gold mb-1">4.5</div>
<div className="text-xs uppercase tracking-wider text-cream/50">TripAdvisor Rating</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-charcoal-light" id="rooms">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="text-gold text-xs font-medium tracking-widest uppercase mb-4 block">Accommodation</span>
<h2 className="font-display text-4xl text-cream tracking-tight">Stay in <span className="italic text-gray-400">Style</span></h2>
</div>
<p className="text-cream/60 font-light text-sm max-w-sm">
                    Tastefully appointed with free uncapped Wi-Fi, DStv, air-conditioning, and en-suite bathrooms. 
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-charcoal border border-white/5 hover:border-gold/30 transition-all duration-500">
<div className="relative overflow-hidden aspect-[4/3]">
<img alt="Standard Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 bg-charcoal/90 backdrop-blur px-3 py-1 text-xs text-cream uppercase tracking-wide border border-white/10">Queen Bed</div>
</div>
<div className="p-8">
<h3 className="font-display text-2xl text-cream mb-3 group-hover:text-gold transition-colors">Standard Room</h3>
<p className="text-cream/60 text-sm font-light mb-6 leading-relaxed">
                            Charmingly decorated and well-appointed with an en-suite bathroom, work desk, and garden views. Ideally suited for business or leisure.
                        </p>
<div className="flex items-center gap-4 text-cream/40 mb-6">
<iconify-icon icon="solar:wifi-square-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:tv-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:cup-hot-linear" width="20"></iconify-icon>
</div>
<a className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest group-hover:gap-3 transition-all" href="#booking">
                            Book Now <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-charcoal border border-white/5 hover:border-gold/30 transition-all duration-500">
<div className="relative overflow-hidden aspect-[4/3]">
<img alt="Family Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 bg-charcoal/90 backdrop-blur px-3 py-1 text-xs text-cream uppercase tracking-wide border border-white/10">2 Double Beds</div>
</div>
<div className="p-8">
<h3 className="font-display text-2xl text-cream mb-3 group-hover:text-gold transition-colors">Family Room</h3>
<p className="text-cream/60 text-sm font-light mb-6 leading-relaxed">
                            Spacious comfort for the whole family. Includes two double beds, separate bath and shower, and complimentary stay for 2 children under 18.
                        </p>
<div className="flex items-center gap-4 text-cream/40 mb-6">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:bath-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:airbuds-case-minimalistic-linear" width="20"></iconify-icon>
</div>
<a className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest group-hover:gap-3 transition-all" href="#booking">
                            Book Now <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-charcoal border border-white/5 hover:border-gold/30 transition-all duration-500 lg:col-span-1 md:col-span-2">
<div className="relative overflow-hidden aspect-[4/3]">
<img alt="Presidential Suite" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-gold text-charcoal px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Premium</div>
</div>
<div className="p-8">
<h3 className="font-display text-2xl text-cream mb-3 group-hover:text-gold transition-colors">Presidential Suite</h3>
<p className="text-cream/60 text-sm font-light mb-6 leading-relaxed">
                            Indulge in award-winning luxury. Featuring a private lounge, dining area, guest toilet, and opulent furnishings for the discerning traveler.
                        </p>
<div className="flex items-center gap-4 text-cream/40 mb-6">
<iconify-icon icon="solar:sofa-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:wineglass-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:city-linear" width="20"></iconify-icon>
</div>
<a className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest group-hover:gap-3 transition-all" href="#booking">
                            Book Now <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-charcoal border-y border-white/5" id="amenities">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
<div className="flex flex-col items-center gap-3 text-center group">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
<iconify-icon icon="solar:wifi-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs uppercase tracking-wider text-cream/70">Free Wi-Fi</span>
</div>
<div className="flex flex-col items-center gap-3 text-center group">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
<iconify-icon icon="solar:dumbbell-large-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs uppercase tracking-wider text-cream/70">Fitness Centre</span>
</div>
<div className="flex flex-col items-center gap-3 text-center group">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
<iconify-icon icon="solar:swimming-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs uppercase tracking-wider text-cream/70">Outdoor Pool</span>
</div>
<div className="flex flex-col items-center gap-3 text-center group">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
<iconify-icon icon="solar:chef-hat-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs uppercase tracking-wider text-cream/70">Key Largo Dining</span>
</div>
<div className="flex flex-col items-center gap-3 text-center group">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
<iconify-icon icon="solar:bus-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs uppercase tracking-wider text-cream/70">Shuttle Service</span>
</div>
<div className="flex flex-col items-center gap-3 text-center group">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
<iconify-icon icon="solar:calendar-mark-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs uppercase tracking-wider text-cream/70">Event Venues</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-charcoal relative overflow-hidden" id="dining">
<div className="absolute right-0 top-0 w-1/2 h-full bg-charcoal-light/30 skew-x-12 transform origin-top-right"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<span className="text-gold text-xs font-medium tracking-widest uppercase mb-4 block">Dining</span>
<h2 className="font-display text-4xl text-cream tracking-tight mb-6">Key Largo <span className="text-gold italic">Restaurant</span></h2>
<p className="text-cream/60 font-light leading-relaxed mb-6">
                        Enjoy the expansive buffet breakfast or a delicious la carte menu for lunch and dinner. Key Largo overlooks the hotel’s beautiful gardens and pool, offering a relaxed atmosphere with a touch of elegance.
                    </p>
<div className="space-y-6 mb-10">
<div className="flex gap-4 items-start">
<div className="mt-1 text-gold"><iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-cream uppercase tracking-wide">Breakfast</h4>
<p className="text-cream/50 text-xs font-light">Mon-Fri: 06h30 - 10h30 | Weekends: 07h00 - 11h00</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 text-gold"><iconify-icon icon="solar:chef-hat-heart-linear" width="20"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-cream uppercase tracking-wide">Dinner</h4>
<p className="text-cream/50 text-xs font-light">Daily: 18h30 - 22h00 (Grill Buffet or A la Carte)</p>
</div>
</div>
</div>
<a className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-charcoal text-xs font-medium tracking-widest uppercase transition-all" href="#">View Menu</a>
</div>
<div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
<img alt="Fine Dining" className="w-full h-64 object-cover rounded-sm translate-y-8 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<img alt="Restaurant Interior" className="w-full h-64 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-charcoal-lighter border-y border-white/5" id="casino">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<span className="text-gold text-xs font-medium tracking-widest uppercase mb-4 block">Entertainment</span>
<h2 className="font-display text-4xl md:text-5xl text-cream tracking-tight mb-6">Hemingways <span className="text-gold">Casino</span></h2>
<p className="text-cream/60 font-light leading-relaxed max-w-2xl mx-auto mb-10">
                Experience the thrill of East London's premier entertainment destination. Located adjacent to the hotel, the casino offers over 380 slot machines, American Roulette, Blackjack, and Poker tables.
            </p>
<a className="inline-flex items-center gap-2 text-cream hover:text-gold transition-colors text-sm uppercase tracking-widest border-b border-gold/30 pb-1 hover:border-gold" href="#">
                Visit Casino Website <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 bg-charcoal relative" id="booking">
<div className="max-w-4xl mx-auto px-6">
<div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="text-center mb-10">
<h2 className="font-display text-3xl text-cream tracking-tight">Reserve Your Sanctuary</h2>
<p className="text-cream/50 text-sm font-light mt-2">Best rates guaranteed when booking direct.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-cream/70">Check-in</label>
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" icon="solar:calendar-linear" width="18"></iconify-icon>
<input className="w-full bg-charcoal-light border border-white/10 text-cream text-sm rounded-lg px-4 pl-12 py-3 focus:outline-none focus:border-gold/50 transition-colors" type="date"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-cream/70">Check-out</label>
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" icon="solar:calendar-linear" width="18"></iconify-icon>
<input className="w-full bg-charcoal-light border border-white/10 text-cream text-sm rounded-lg px-4 pl-12 py-3 focus:outline-none focus:border-gold/50 transition-colors" type="date"/>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-cream/70">Room Type</label>
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" icon="solar:bed-linear" width="18"></iconify-icon>
<select className="w-full bg-charcoal-light border border-white/10 text-cream text-sm rounded-lg px-4 pl-12 py-3 focus:outline-none focus:border-gold/50 transition-colors appearance-none">
<option>Standard Room</option>
<option>Family Room</option>
<option>Superior Room</option>
<option>Executive Room</option>
<option>Suite</option>
<option>Presidential Suite</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/30 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-cream/70">Guests</label>
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<select className="w-full bg-charcoal-light border border-white/10 text-cream text-sm rounded-lg px-4 pl-12 py-3 focus:outline-none focus:border-gold/50 transition-colors appearance-none">
<option>1 Guest</option>
<option>2 Guests</option>
<option>2 Adults, 2 Children</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/30 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<button className="w-full py-4 bg-gold hover:bg-gold-light text-charcoal font-medium uppercase tracking-widest text-xs rounded-lg transition-all shadow-lg shadow-gold/10" type="submit">
                        Check Availability
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-charcoal border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 border border-gold/30 rounded-full flex items-center justify-center">
<span className="font-display text-gold">H</span>
</div>
<span className="font-display text-lg tracking-tight text-cream">HEMINGWAYS</span>
</div>
<p className="text-cream/40 text-xs font-light leading-relaxed">
                        Part of the Tsogo Sun Group. Southern Sun &amp; Tsogo Sun renowned hospitality in East London.
                    </p>
</div>
<div>
<h4 className="text-cream text-xs font-medium uppercase tracking-widest mb-6">Contact</h4>
<ul className="space-y-4 text-sm font-light text-cream/60">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-gold" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>Cnr. Western Avenue &amp; Two Rivers Drive, East London, 5201</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-gold" icon="solar:phone-linear" width="16"></iconify-icon>
<a className="hover:text-gold transition-colors" href="tel:+27437078000">+27 43 707 8000</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-gold" icon="solar:letter-linear" width="16"></iconify-icon>
<a className="hover:text-gold transition-colors" href="mailto:hemingways.reservations@tsogosun.com">hemingways.reservations@tsogosun.com</a>
</li>
</ul>
</div>
<div>
<h4 className="text-cream text-xs font-medium uppercase tracking-widest mb-6">Explore</h4>
<ul className="space-y-3 text-sm font-light text-cream/60">
<li><a className="hover:text-gold transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Tsogo Rewards</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Offers</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-cream text-xs font-medium uppercase tracking-widest mb-6">Newsletter</h4>
<form className="space-y-3">
<input className="w-full bg-white/5 border border-white/10 text-cream text-xs px-4 py-3 rounded focus:outline-none focus:border-gold/50 transition-colors" placeholder="Your email address" type="email"/>
<button className="w-full py-2.5 border border-white/20 hover:border-gold hover:text-gold text-cream text-[10px] font-medium uppercase tracking-widest rounded transition-all">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-cream/30 uppercase tracking-wider">© 2025 Tsogo Sun. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-cream/40 hover:text-gold transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-cream/40 hover:text-gold transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-cream/40 hover:text-gold transition-colors" href="#"><iconify-icon icon="ri:twitter-x-line" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
