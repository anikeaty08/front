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



{
"@context": "https://schema.org",
"@type": "Hotel",
"name": "The Gerrish Hotel",
"image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
"address": {
"@type": "PostalAddress",
"streetAddress": "Main Street",
"addressLocality": "Historic District",
"addressRegion": "State",
"postalCode": "00000",
"addressCountry": "US"
},
"starRating": {
"@type": "Rating",
"ratingValue": "4"
},
"priceRange": "$$$"
}



tailwind.config = {
theme: {
extend: {
colors: {
gold: '#C9A227',
'gold-light': '#E8D5A3',
'gold-dark': '#9A7B1A',
cream: '#FDF8F3',
'cream-dark': '#F5EDE3',
charcoal: '#1A1A1A',
'charcoal-light': '#262626',
'navy-deep': '#0F172A'
},
fontFamily: {
'display': ['Playfair Display', 'serif'],
'body': ['Inter', 'sans-serif']
}
}
}
}



        // Loader Logic
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 700);
            }, 1000);
        });

        // Sticky Header
        const header = document.getElementById('header');
        const headerBg = document.getElementById('headerBg');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                headerBg.classList.remove('bg-charcoal/0');
                headerBg.classList.add('bg-charcoal/90', 'backdrop-blur-md', 'shadow-lg');
            } else {
                headerBg.classList.add('bg-charcoal/0');
                headerBg.classList.remove('bg-charcoal/90', 'backdrop-blur-md', 'shadow-lg');
            }
        });

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobileMenuBtn');
        const menu = document.getElementById('mobileMenu');
        const links = document.querySelectorAll('.mobile-nav-link');
        let isMenuOpen = false;

        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                menu.classList.remove('opacity-0', 'pointer-events-none');
                menu.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden';
            } else {
                closeMenu();
            }
        });

        function closeMenu() {
            isMenuOpen = false;
            menu.classList.add('opacity-0', 'pointer-events-none');
            menu.classList.remove('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = '';
        }

        links.forEach(link => link.addEventListener('click', closeMenu));
    
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
      

<div className="fixed inset-0 bg-charcoal z-50 flex items-center justify-center transition-opacity duration-700" id="loader">
<div className="text-center">
<div className="relative w-24 h-24 mx-auto mb-6">
<div className="absolute inset-0 border border-gold/30 rounded-full animate-ping opacity-30"></div>
<div className="absolute inset-2 border border-gold rounded-full animate-pulse"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="font-display text-gold text-2xl font-medium tracking-tight">GH</span>
</div>
</div>
<p className="text-gold-light text-xs tracking-widest uppercase animate-pulse">Welcome to The Gerrish</p>
</div>
</div>

<header className="fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b border-transparent" id="header">
<div className="absolute inset-0 bg-charcoal/0 transition-all duration-500 backdrop-blur-none" id="headerBg"></div>
<nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20 lg:h-24">

<a className="flex items-center space-x-3 group z-50" href="#home">
<div className="relative">
<div className="w-10 h-10 lg:w-12 lg:h-12 border border-gold rounded-sm flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
<span className="font-display text-gold text-lg lg:text-xl font-medium tracking-tight group-hover:text-charcoal transition-colors duration-500">G</span>
</div>
</div>
<div className="hidden sm:block">
<span className="font-display text-cream text-lg lg:text-xl tracking-tight block leading-none">THE GERRISH</span>
<span className="block text-gold-light text-[10px] tracking-[0.2em] uppercase mt-1">Hotel &amp; Suites</span>
</div>
</a>

<div className="hidden lg:flex items-center space-x-8">
<a className="nav-link text-sm text-cream/80 hover:text-gold transition-colors duration-300" href="#home">Home</a>
<a className="nav-link text-sm text-cream/80 hover:text-gold transition-colors duration-300" href="#rooms">Accommodations</a>
<a className="nav-link text-sm text-cream/80 hover:text-gold transition-colors duration-300" href="#amenities">Amenities</a>
<a className="nav-link text-sm text-cream/80 hover:text-gold transition-colors duration-300" href="#history">History</a>
<a className="nav-link text-sm text-cream/80 hover:text-gold transition-colors duration-300" href="#gallery">Gallery</a>
<a className="nav-link text-sm text-cream/80 hover:text-gold transition-colors duration-300" href="#contact">Contact</a>
</div>

<div className="flex items-center space-x-4 z-50">
<a className="hidden sm:inline-flex items-center px-6 py-2.5 bg-gold text-charcoal text-xs font-medium tracking-wider uppercase rounded-sm hover:bg-white transition-all duration-300" href="#booking">
                        Check Availability
                    </a>
<button aria-label="Toggle menu" className="lg:hidden w-10 h-10 flex flex-col items-end justify-center space-y-1.5 group" id="mobileMenuBtn">
<span className="block w-6 h-px bg-cream transition-all duration-300 group-hover:w-8 group-hover:bg-gold"></span>
<span className="block w-4 h-px bg-cream transition-all duration-300 group-hover:w-8 group-hover:bg-gold"></span>
<span className="block w-6 h-px bg-cream transition-all duration-300 group-hover:w-8 group-hover:bg-gold"></span>
</button>
</div>
</div>
</nav>

<div className="lg:hidden fixed inset-0 bg-charcoal z-40 opacity-0 pointer-events-none transition-all duration-500 flex items-center justify-center" id="mobileMenu">
<nav className="flex flex-col items-center space-y-8">
<a className="mobile-nav-link text-2xl font-display text-cream hover:text-gold transition-colors duration-300" href="#home">Home</a>
<a className="mobile-nav-link text-2xl font-display text-cream hover:text-gold transition-colors duration-300" href="#rooms">Accommodations</a>
<a className="mobile-nav-link text-2xl font-display text-cream hover:text-gold transition-colors duration-300" href="#amenities">Amenities</a>
<a className="mobile-nav-link text-2xl font-display text-cream hover:text-gold transition-colors duration-300" href="#history">Our History</a>
<a className="mobile-nav-link text-2xl font-display text-cream hover:text-gold transition-colors duration-300" href="#gallery">Gallery</a>
<a className="mobile-nav-link text-2xl font-display text-cream hover:text-gold transition-colors duration-300" href="#contact">Contact</a>
<a className="mt-8 px-8 py-3 bg-gold text-charcoal font-medium tracking-wider uppercase rounded-sm" href="#booking">Book Now</a>
</nav>
</div>
</header>
<main>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="The Gerrish Hotel Exterior" className="w-full h-full object-cover opacity-50 scale-105 animate-ken-burns" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/60"></div>
</div>

<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
<div className="inline-block mb-6 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
<span className="py-1 px-3 border border-gold/30 rounded-full text-[10px] tracking-[0.2em] uppercase text-gold">Est. 1924</span>
</div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream font-medium tracking-tight leading-tight mb-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    A Legacy of <br/>
<span className="text-gold italic">Timeless Comfort</span>
</h1>
<p className="text-cream/70 text-base md:text-lg max-w-xl mx-auto mb-12 opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                    Welcome to The Gerrish. Where historic charm meets modern luxury in the heart of the city. Experience hospitality reimagined.
                </p>

<div className="bg-charcoal-light/90 backdrop-blur-md border border-cream/10 p-4 rounded-lg md:rounded-full inline-flex flex-col md:flex-row items-center gap-4 md:gap-8 max-w-4xl mx-auto opacity-0 animate-fade-in-up shadow-2xl" style={{animationDelay: '0.8s'}}>
<div className="flex flex-col items-start px-4 w-full md:w-auto border-b md:border-b-0 md:border-r border-cream/10 pb-2 md:pb-0">
<label className="text-[10px] uppercase tracking-wider text-gold mb-1">Check In</label>
<input className="bg-transparent text-cream text-sm focus:outline-none w-full md:w-32 cursor-pointer font-display" type="date"/>
</div>
<div className="flex flex-col items-start px-4 w-full md:w-auto border-b md:border-b-0 md:border-r border-cream/10 pb-2 md:pb-0">
<label className="text-[10px] uppercase tracking-wider text-gold mb-1">Check Out</label>
<input className="bg-transparent text-cream text-sm focus:outline-none w-full md:w-32 cursor-pointer font-display" type="date"/>
</div>
<div className="flex flex-col items-start px-4 w-full md:w-auto pb-2 md:pb-0">
<label className="text-[10px] uppercase tracking-wider text-gold mb-1">Guests</label>
<select className="bg-transparent text-cream text-sm focus:outline-none w-full md:w-24 cursor-pointer font-display">
<option className="bg-charcoal" value="1">1 Guest</option>
<option className="bg-charcoal" selected="" value="2">2 Guests</option>
<option className="bg-charcoal" value="3">3 Guests</option>
<option className="bg-charcoal" value="4">4+ Guests</option>
</select>
</div>
<button className="w-full md:w-auto px-8 py-3 bg-gold text-charcoal font-medium text-sm tracking-wide rounded-full hover:bg-cream transition-colors duration-300">
                        Search
                    </button>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
<span className="iconify w-6 h-6 text-cream" data-icon="solar:mouse-minimalistic-linear" style={{strokeWidth: '1.5'}}></span>
</div>
</section>

<section className="py-24 bg-charcoal relative" id="history">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-sm overflow-hidden">
<img alt="Hotel Lobby" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&amp;q=80"/>
</div>
<div className="absolute -bottom-8 -right-8 w-48 h-48 bg-charcoal-light border border-gold/20 p-6 flex flex-col justify-center items-center text-center">
<span className="font-display text-4xl text-gold mb-1">100</span>
<span className="text-[10px] tracking-widest uppercase text-cream/60">Years of<br/>Excellence</span>
</div>
</div>
<div>
<span className="text-gold text-xs tracking-[0.2em] uppercase block mb-4">Our Heritage</span>
<h2 className="font-display text-3xl md:text-5xl text-cream mb-6 leading-tight">Authentic Charm <br/> in Every Detail</h2>
<p className="text-cream/60 leading-relaxed mb-6 font-light">
                            Since opening its doors, The Gerrish has been a beacon of hospitality. Restored to its original grandeur, the hotel blends the architectural beauty of the past with the sophisticated amenities of the present. 
                        </p>
<p className="text-cream/60 leading-relaxed mb-8 font-light">
                            Whether you are visiting for business or leisure, our dedicated staff ensures a stay that is as memorable as it is comfortable. Experience the unique character of our historic property.
                        </p>
<a className="inline-flex items-center text-cream hover:text-gold transition-colors duration-300 group" href="#rooms">
<span className="text-sm tracking-widest uppercase border-b border-cream/30 group-hover:border-gold pb-1">View Accommodations</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-charcoal-light relative" id="rooms">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-gold text-xs tracking-[0.2em] uppercase block mb-3">Stay With Us</span>
<h2 className="font-display text-4xl md:text-5xl text-cream">Select Accommodations</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden mb-6">
<img alt="Classic Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
</div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-display text-2xl text-cream group-hover:text-gold transition-colors">The Classic</h3>
<span className="text-cream/50 text-sm">from $199</span>
</div>
<p className="text-cream/60 text-sm mb-4 line-clamp-2">Our signature room featuring a queen bed, historic details, and modern ensuite bath.</p>
<div className="flex gap-4 text-gold/80">
<iconify-icon icon="solar:bed-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:bath-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:wi-fi-square-linear" width="20"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden mb-6">
<img alt="Deluxe Suite" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-gold text-charcoal text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Popular</div>
</div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-display text-2xl text-cream group-hover:text-gold transition-colors">Deluxe King</h3>
<span className="text-cream/50 text-sm">from $289</span>
</div>
<p className="text-cream/60 text-sm mb-4 line-clamp-2">Spacious comfort with a king-sized bed, seating area, and city views.</p>
<div className="flex gap-4 text-gold/80">
<iconify-icon icon="solar:bed-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:sofa-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:tv-linear" width="20"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden mb-6">
<img alt="Gerrish Suite" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-display text-2xl text-cream group-hover:text-gold transition-colors">The Gerrish Suite</h3>
<span className="text-cream/50 text-sm">from $450</span>
</div>
<p className="text-cream/60 text-sm mb-4 line-clamp-2">The ultimate luxury experience with separate living room, kitchenette, and premium amenities.</p>
<div className="flex gap-4 text-gold/80">
<iconify-icon icon="solar:crown-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:wine-trash-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:city-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-charcoal border-y border-cream/5" id="amenities">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
<div className="text-center group">
<div className="w-16 h-16 mx-auto mb-6 border border-cream/20 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-300">
<iconify-icon icon="solar:cup-hot-linear" width="32"></iconify-icon>
</div>
<h3 className="font-display text-lg text-cream mb-2">Daily Breakfast</h3>
<p className="text-cream/50 text-xs font-light">Locally sourced continental breakfast served daily in the Garden Room.</p>
</div>
<div className="text-center group">
<div className="w-16 h-16 mx-auto mb-6 border border-cream/20 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-300">
<iconify-icon icon="solar:bell-bing-linear" width="32"></iconify-icon>
</div>
<h3 className="font-display text-lg text-cream mb-2">24/7 Concierge</h3>
<p className="text-cream/50 text-xs font-light">Dedicated staff available around the clock to assist with your needs.</p>
</div>
<div className="text-center group">
<div className="w-16 h-16 mx-auto mb-6 border border-cream/20 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-300">
<iconify-icon icon="solar:wheel-angle-linear" width="32"></iconify-icon>
</div>
<h3 className="font-display text-lg text-cream mb-2">Valet Parking</h3>
<p className="text-cream/50 text-xs font-light">Secure, convenient parking services for all our guests.</p>
</div>
<div className="text-center group">
<div className="w-16 h-16 mx-auto mb-6 border border-cream/20 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-300">
<iconify-icon icon="solar:paw-linear" width="32"></iconify-icon>
</div>
<h3 className="font-display text-lg text-cream mb-2">Pet Friendly</h3>
<p className="text-cream/50 text-xs font-light">We welcome your four-legged companions in select rooms.</p>
</div>
</div>
</div>
</section>

<section className="py-0" id="gallery">
<div className="grid grid-cols-2 md:grid-cols-4 h-[600px] md:h-[500px]">
<div className="relative group overflow-hidden h-full">
<img alt="Hotel Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="relative group overflow-hidden h-full">
<img alt="Coffee" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="relative group overflow-hidden h-full">
<img alt="Lounge" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1590073242678-cfe4f25c6b62?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="relative group overflow-hidden h-full">
<img alt="Exterior Night" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
</div>
</section>

<section className="py-24 bg-charcoal-light relative overflow-hidden" id="contact">
<div className="absolute top-0 right-0 w-1/3 h-full bg-charcoal hidden lg:block"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-3 gap-12 lg:gap-24">
<div className="lg:col-span-2">
<span className="text-gold text-xs tracking-[0.2em] uppercase block mb-3">Reservations</span>
<h2 className="font-display text-4xl text-cream mb-8">Secure Your Stay</h2>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-xs uppercase tracking-wider text-cream/50 mb-2">First Name</label>
<input className="w-full bg-charcoal border border-cream/10 p-4 text-cream focus:border-gold focus:outline-none transition-colors rounded-sm" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-cream/50 mb-2">Last Name</label>
<input className="w-full bg-charcoal border border-cream/10 p-4 text-cream focus:border-gold focus:outline-none transition-colors rounded-sm" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-xs uppercase tracking-wider text-cream/50 mb-2">Email Address</label>
<input className="w-full bg-charcoal border border-cream/10 p-4 text-cream focus:border-gold focus:outline-none transition-colors rounded-sm" type="email"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-cream/50 mb-2">Phone</label>
<input className="w-full bg-charcoal border border-cream/10 p-4 text-cream focus:border-gold focus:outline-none transition-colors rounded-sm" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-cream/50 mb-2">Message or Special Requests</label>
<textarea className="w-full bg-charcoal border border-cream/10 p-4 text-cream focus:border-gold focus:outline-none transition-colors rounded-sm" rows="4"></textarea>
</div>
<button className="px-8 py-4 bg-gold text-charcoal font-medium tracking-widest uppercase text-xs hover:bg-cream transition-colors duration-300 w-full md:w-auto" type="button">
                                Submit Inquiry
                            </button>
</form>
</div>
<div className="bg-charcoal p-8 lg:p-10 border border-cream/5 h-fit">
<h3 className="font-display text-2xl text-cream mb-6">Contact Us</h3>
<div className="space-y-6 text-sm text-cream/60">
<div className="flex items-start gap-4">
<iconify-icon className="text-gold mt-1" icon="solar:map-point-linear" width="20"></iconify-icon>
<p>123 Historic Main Street<br/>Old Town District<br/>State, Zip Code</p>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-gold" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<p>+1 (555) 123-4567</p>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-gold" icon="solar:letter-linear" width="20"></iconify-icon>
<p>concierge@gerrishhotel.com</p>
</div>
</div>
<div className="mt-8 pt-8 border-t border-cream/10">
<h4 className="font-display text-cream mb-4">Follow Us</h4>
<div className="flex gap-4 text-cream/50">
<a className="hover:text-gold transition-colors" href="#"><iconify-icon icon="brandico:facebook" width="20"></iconify-icon></a>
<a className="hover:text-gold transition-colors" href="#"><iconify-icon icon="brandico:instagram" width="20"></iconify-icon></a>
<a className="hover:text-gold transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon></a>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-charcoal border-t border-cream/10 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 border border-gold flex items-center justify-center text-gold font-display">G</div>
<span className="font-display text-cream text-lg">THE GERRISH</span>
</div>
<div className="flex gap-8 text-xs tracking-wider text-cream/50 uppercase">
<a className="hover:text-gold transition-colors" href="#">Privacy</a>
<a className="hover:text-gold transition-colors" href="#">Terms</a>
<a className="hover:text-gold transition-colors" href="#">Sitemap</a>
</div>
<div className="text-cream/30 text-xs font-light">
                © 2024 The Gerrish Hotel. All rights reserved.
            </div>
</div>
</footer>
<style>
        @keyframes ken-burns {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
        }
        .animate-ken-burns {
            animation: ken-burns 20s ease-out infinite alternate;
        }
        
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #1A1A1A;
        }
        ::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #C9A227;
        }

        html {
            scroll-behavior: smooth;
        }
    </style>


    </>
  );
}
