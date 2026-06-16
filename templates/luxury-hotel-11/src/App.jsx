import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
navy: '#0A2342',
gold: '#D4AF37',
cream: '#F8F1E7',
darkgray: '#2F2F2F',
offwhite: '#FAFAFA',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking a link
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // Sticky Header Styling on Scroll
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg', 'bg-navy/95');
            } else {
                navbar.classList.remove('shadow-lg');
            }
        });

        // Gallery Modal Logic
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');

        function openModal(element) {
            const img = element.querySelector('img');
            modalImg.src = img.src;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeModal(event) {
            // Close if clicked on overlay or close button (event propagates)
            if (event.target === modal || event.target.closest('button')) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = '';
            }
        }

        // Contact Form Handling
        const form = document.getElementById('contactForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple validation check visualization (already handled by 'required' attr)
            const button = form.querySelector('button');
            const originalText = button.innerText;
            
            button.innerText = 'Sent!';
            button.classList.remove('bg-gold', 'text-navy');
            button.classList.add('bg-green-600', 'text-white');
            
            setTimeout(() => {
                alert('Thank you for your message. We will respond within 24 hours.');
                form.reset();
                button.innerText = originalText;
                button.classList.add('bg-gold', 'text-navy');
                button.classList.remove('bg-green-600', 'text-white');
            }, 500);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full top-0 z-50 transition-all duration-300 bg-navy/95 backdrop-blur-md border-b border-white/10" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex-shrink-0 group" href="#">
<span className="font-serif text-2xl text-gold tracking-tight font-semibold group-hover:text-white transition-colors duration-300">Nusantara Hotel</span>
</a>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-white/80 hover:text-gold transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-white/80 hover:text-gold transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-white/80 hover:text-gold transition-colors" href="#rooms">Rooms</a>
<a className="text-sm font-medium text-white/80 hover:text-gold transition-colors" href="#facilities">Facilities</a>
<a className="text-sm font-medium text-white/80 hover:text-gold transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-white/80 hover:text-gold transition-colors" href="#location">Location</a>
<a className="px-4 py-2 text-sm font-medium text-navy bg-gold rounded-sm hover:bg-white transition-colors" href="#contact">Contact</a>
</nav>

<div className="md:hidden">
<button className="text-gold hover:text-white transition-colors focus:outline-none" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-navy border-t border-white/10 absolute w-full" id="mobile-menu">
<div className="px-6 py-4 space-y-3 flex flex-col">
<a className="text-base font-medium text-white/90 hover:text-gold" href="#home">Home</a>
<a className="text-base font-medium text-white/90 hover:text-gold" href="#about">About</a>
<a className="text-base font-medium text-white/90 hover:text-gold" href="#rooms">Rooms</a>
<a className="text-base font-medium text-white/90 hover:text-gold" href="#facilities">Facilities</a>
<a className="text-base font-medium text-white/90 hover:text-gold" href="#gallery">Gallery</a>
<a className="text-base font-medium text-white/90 hover:text-gold" href="#location">Location</a>
<a className="text-base font-medium text-gold" href="#contact">Contact Us</a>
</div>
</div>
</header>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Luxury Hotel Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-navy/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-90"></div>
</div>

<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
<span className="inline-block py-1 px-3 border border-gold/50 rounded-full text-gold text-xs uppercase tracking-widest mb-6 bg-navy/30 backdrop-blur-sm">Welcome to Paradise</span>
<h1 className="font-serif text-5xl md:text-7xl text-cream mb-6 tracking-tight leading-tight">
                Nusantara Hotel
            </h1>
<p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto tracking-wide">
                Experience Comfort, Explore Nusantara.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-3 bg-gold text-navy font-semibold rounded-sm hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-xl text-sm tracking-wide" href="#contact">
                    Book Now
                </a>
<a className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white text-white font-medium rounded-sm hover:bg-white hover:text-navy transition-colors duration-300 text-sm tracking-wide" href="#rooms">
                    View Rooms
                </a>
</div>
</div>
</section>

<section className="py-24 bg-cream" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute -inset-4 bg-gold/20 rounded-lg transform rotate-3 group-hover:rotate-2 transition-transform duration-500"></div>
<img alt="Hotel Lobby" className="relative rounded-sm shadow-xl object-cover h-[500px] w-full" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-8">
<div>
<h2 className="font-serif text-4xl text-navy mb-6 tracking-tight">A Sanctuary of Elegance</h2>
<div className="w-16 h-1 bg-gold mb-8"></div>
<p className="text-darkgray/80 leading-relaxed mb-6 font-light text-lg">
                            Nestled in the heart of Indonesia, Nusantara Hotel seamlessly blends traditional heritage with modern luxury. Our architecture pays homage to the rich cultural tapestry of the archipelago, offering a retreat that is both authentic and sophisticated.
                        </p>
<p className="text-darkgray/80 leading-relaxed font-light text-lg">
                            Whether you are travelling for business or seeking a romantic getaway, our dedicated staff ensures every moment of your stay is crafted to perfection. Discover a world where premium service meets the warmth of Indonesian hospitality.
                        </p>
</div>
<div className="flex items-center gap-8 pt-4">
<div className="flex flex-col">
<span className="font-serif text-3xl text-navy">150+</span>
<span className="text-xs uppercase tracking-widest text-gold mt-1">Premium Rooms</span>
</div>
<div className="w-px h-12 bg-darkgray/20"></div>
<div className="flex flex-col">
<span className="font-serif text-3xl text-navy">4.9</span>
<span className="text-xs uppercase tracking-widest text-gold mt-1">Guest Rating</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-offwhite" id="rooms">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-gold text-xs font-bold tracking-widest uppercase mb-3 block">Accommodation</span>
<h2 className="font-serif text-4xl text-navy tracking-tight mb-4">Our Luxurious Rooms</h2>
<p className="text-darkgray/70 font-light">Designed for your ultimate comfort and relaxation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-gold flex flex-col">
<div className="relative h-64 overflow-hidden">
<img alt="Deluxe Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-2xl text-navy">Deluxe Room</h3>
<span className="text-gold font-semibold text-sm mt-1">$120/n</span>
</div>
<p className="text-darkgray/70 text-sm mb-6 leading-relaxed">A perfect blend of comfort and style, featuring modern amenities and a city view.</p>
<div className="flex gap-3 mb-8 text-darkgray/60">
<i className="w-4 h-4" data-lucide="wifi"></i>
<i className="w-4 h-4" data-lucide="tv"></i>
<i className="w-4 h-4" data-lucide="coffee"></i>
</div>
<div className="mt-auto">
<a className="inline-flex items-center text-navy text-sm font-medium hover:text-gold transition-colors group/link" href="#contact">
                                View Details <i className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="group bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-gold flex flex-col">
<div className="relative h-64 overflow-hidden">
<div className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold px-3 py-1 z-10 uppercase tracking-wider rounded-sm">Popular</div>
<img alt="Executive Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-2xl text-navy">Executive Suite</h3>
<span className="text-gold font-semibold text-sm mt-1">$250/n</span>
</div>
<p className="text-darkgray/70 text-sm mb-6 leading-relaxed">Spacious living area with premium furnishings, designed for business and leisure.</p>
<div className="flex gap-3 mb-8 text-darkgray/60">
<i className="w-4 h-4" data-lucide="wifi"></i>
<i className="w-4 h-4" data-lucide="monitor"></i>
<i className="w-4 h-4" data-lucide="wind"></i>
<i className="w-4 h-4" data-lucide="bath"></i>
</div>
<div className="mt-auto">
<a className="inline-flex items-center text-navy text-sm font-medium hover:text-gold transition-colors group/link" href="#contact">
                                View Details <i className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="group bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-gold flex flex-col">
<div className="relative h-64 overflow-hidden">
<img alt="Family Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-2xl text-navy">Family Room</h3>
<span className="text-gold font-semibold text-sm mt-1">$300/n</span>
</div>
<p className="text-darkgray/70 text-sm mb-6 leading-relaxed">Connecting rooms with ample space for the whole family to relax and bond.</p>
<div className="flex gap-3 mb-8 text-darkgray/60">
<i className="w-4 h-4" data-lucide="users"></i>
<i className="w-4 h-4" data-lucide="utensils"></i>
<i className="w-4 h-4" data-lucide="gamepad-2"></i>
</div>
<div className="mt-auto">
<a className="inline-flex items-center text-navy text-sm font-medium hover:text-gold transition-colors group/link" href="#contact">
                                View Details <i className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-navy text-cream" id="facilities">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="text-gold text-xs font-bold tracking-widest uppercase mb-3 block">Amenities</span>
<h2 className="font-serif text-4xl text-white tracking-tight">World Class Facilities</h2>
</div>
<p className="text-white/60 font-light max-w-md text-right md:text-left">Everything you need for a memorable stay, curated for your convenience.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

<div className="p-6 border border-white/10 rounded-sm hover:bg-white/5 hover:border-gold/50 transition-all duration-300 group text-center">
<div className="w-10 h-10 mx-auto mb-4 text-gold group-hover:scale-110 transition-transform">
<i className="w-full h-full" data-lucide="waves"></i>
</div>
<span className="text-sm font-medium tracking-wide">Infinity Pool</span>
</div>
<div className="p-6 border border-white/10 rounded-sm hover:bg-white/5 hover:border-gold/50 transition-all duration-300 group text-center">
<div className="w-10 h-10 mx-auto mb-4 text-gold group-hover:scale-110 transition-transform">
<i className="w-full h-full" data-lucide="utensils"></i>
</div>
<span className="text-sm font-medium tracking-wide">Restaurant</span>
</div>
<div className="p-6 border border-white/10 rounded-sm hover:bg-white/5 hover:border-gold/50 transition-all duration-300 group text-center">
<div className="w-10 h-10 mx-auto mb-4 text-gold group-hover:scale-110 transition-transform">
<i className="w-full h-full" data-lucide="briefcase"></i>
</div>
<span className="text-sm font-medium tracking-wide">Meeting Room</span>
</div>
<div className="p-6 border border-white/10 rounded-sm hover:bg-white/5 hover:border-gold/50 transition-all duration-300 group text-center">
<div className="w-10 h-10 mx-auto mb-4 text-gold group-hover:scale-110 transition-transform">
<i className="w-full h-full" data-lucide="sparkles"></i>
</div>
<span className="text-sm font-medium tracking-wide">Luxury Spa</span>
</div>
<div className="p-6 border border-white/10 rounded-sm hover:bg-white/5 hover:border-gold/50 transition-all duration-300 group text-center">
<div className="w-10 h-10 mx-auto mb-4 text-gold group-hover:scale-110 transition-transform">
<i className="w-full h-full" data-lucide="wifi"></i>
</div>
<span className="text-sm font-medium tracking-wide">Free WiFi</span>
</div>
<div className="p-6 border border-white/10 rounded-sm hover:bg-white/5 hover:border-gold/50 transition-all duration-300 group text-center">
<div className="w-10 h-10 mx-auto mb-4 text-gold group-hover:scale-110 transition-transform">
<i className="w-full h-full" data-lucide="car"></i>
</div>
<span className="text-sm font-medium tracking-wide">Valet Parking</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-cream" id="gallery">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-serif text-4xl text-navy tracking-tight mb-4">Our Gallery</h2>
<p className="text-darkgray/70 font-light">A glimpse into the Nusantara experience.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
<div className="relative group overflow-hidden cursor-pointer rounded-sm" onclick="openModal(this)">
<img alt="Hotel Exterior" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<i className="text-white w-8 h-8" data-lucide="zoom-in"></i>
</div>
</div>
<div className="relative group overflow-hidden cursor-pointer rounded-sm lg:col-span-2" onclick="openModal(this)">
<img alt="Lounge Area" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<i className="text-white w-8 h-8" data-lucide="zoom-in"></i>
</div>
</div>
<div className="relative group overflow-hidden cursor-pointer rounded-sm lg:row-span-2" onclick="openModal(this)">
<img alt="Pool Side" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<i className="text-white w-8 h-8" data-lucide="zoom-in"></i>
</div>
</div>
<div className="relative group overflow-hidden cursor-pointer rounded-sm" onclick="openModal(this)">
<img alt="Fine Dining" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<i className="text-white w-8 h-8" data-lucide="zoom-in"></i>
</div>
</div>
<div className="relative group overflow-hidden cursor-pointer rounded-sm" onclick="openModal(this)">
<img alt="Bedroom Detail" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<i className="text-white w-8 h-8" data-lucide="zoom-in"></i>
</div>
</div>
<div className="relative group overflow-hidden cursor-pointer rounded-sm lg:col-span-2" onclick="openModal(this)">
<img alt="Reception" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<i className="text-white w-8 h-8" data-lucide="zoom-in"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="location">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-cream rounded-lg overflow-hidden shadow-lg">
<div className="lg:col-span-2 p-10 flex flex-col justify-center">
<span className="text-gold text-xs font-bold tracking-widest uppercase mb-3 block">Location</span>
<h2 className="font-serif text-3xl text-navy tracking-tight mb-6">In the Heart of Culture</h2>
<p className="text-darkgray/70 mb-8 leading-relaxed">
                        Located in the heart of Indonesia’s cultural landscape, Nusantara Hotel offers easy access to historical landmarks, shopping districts, and vibrant local markets.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4 text-sm text-darkgray">
<i className="text-gold w-5 h-5 shrink-0 mt-0.5" data-lucide="map-pin"></i>
<span>Jl. Kebudayaan No. 1, Jakarta, Indonesia</span>
</div>
<div className="flex items-center gap-4 text-sm text-darkgray">
<i className="text-gold w-5 h-5 shrink-0" data-lucide="phone"></i>
<span>+62 21 1234 5678</span>
</div>
<div className="flex items-center gap-4 text-sm text-darkgray">
<i className="text-gold w-5 h-5 shrink-0" data-lucide="mail"></i>
<span>info@nusantarahotel.com</span>
</div>
</div>
</div>
<div className="lg:col-span-3 min-h-[400px] relative">

<iframe allowfullscreen="" className="absolute inset-0" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24097833973!2d106.75489154568358!3d-6.229746487898005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1713870000000!5m2!1sen!2sus" style={{border: '0', filter: 'grayscale(100%) contrast(1.2)'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="py-24 bg-navy text-cream relative overflow-hidden" id="contact">

<div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="font-serif text-4xl text-white tracking-tight mb-4">Contact Us</h2>
<p className="text-white/60 font-light">Ready to experience Nusantara? Send us a message.</p>
</div>
<form className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10" id="contactForm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-gold font-semibold" htmlFor="name">Full Name</label>
<input className="w-full bg-navy/50 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all placeholder-white/20" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-gold font-semibold" htmlFor="email">Email</label>
<input className="w-full bg-navy/50 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all placeholder-white/20" id="email" placeholder="john@example.com" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-gold font-semibold" htmlFor="message">Message</label>
<textarea className="w-full bg-navy/50 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all placeholder-white/20" id="message" placeholder="I would like to inquire about..." required="" rows="4"></textarea>
</div>
<div className="pt-4 flex flex-col items-center gap-4">
<button className="w-full md:w-auto px-8 py-3 bg-gold text-navy font-semibold rounded-sm hover:bg-white transition-colors duration-300 shadow-lg text-sm tracking-wide" type="submit">
                        Send Message
                    </button>
<p className="text-xs text-white/40 italic">We will respond within 24 hours.</p>
</div>
</form>
</div>
</section>

<footer className="bg-navy border-t border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<a className="font-serif text-2xl text-white tracking-tight" href="#">Nusantara Hotel</a>
<div className="flex flex-wrap justify-center gap-8">
<a className="text-sm text-white/60 hover:text-gold transition-colors" href="#home">Home</a>
<a className="text-sm text-white/60 hover:text-gold transition-colors" href="#about">About</a>
<a className="text-sm text-white/60 hover:text-gold transition-colors" href="#rooms">Rooms</a>
<a className="text-sm text-white/60 hover:text-gold transition-colors" href="#contact">Contact</a>
</div>
<div className="flex gap-6">
<a className="text-white/60 hover:text-gold transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="text-white/60 hover:text-gold transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="text-white/60 hover:text-gold transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
</div>
</div>
<div className="text-center border-t border-white/5 pt-8">
<p className="text-xs text-white/40">© 2023 Nusantara Hotel. All rights reserved.</p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] bg-navy/95 backdrop-blur hidden items-center justify-center p-4" id="imageModal" onclick="closeModal(event)">
<button className="absolute top-6 right-6 text-white hover:text-gold transition-colors">
<i className="w-8 h-8" data-lucide="x"></i>
</button>
<img alt="Preview" className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm border border-white/10" id="modalImage" src=""/>
</div>


    </>
  );
}
