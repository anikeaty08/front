import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
cream: '#FAF9F6',
coffee: '#2C1810',
gold: '#C9A227',
beige: '#F0EBE0'
},
boxShadow: {
'soft': '0 10px 40px -10px rgba(44, 24, 16, 0.05)',
}
}
}
}



        // Send Reservation to WhatsApp
        function sendReservation() {
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;
            const message = document.getElementById('message').value;

            if(!name || !phone || !date || !time || !guests) {
                alert('Please fill in all required fields (Name, Phone, Date, Time, Guests)');
                return;
            }

            // Format message for WhatsApp
            const text = `*New Table Reservation Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Date:* ${date}%0A*Time:* ${time}%0A*Guests:* ${guests}%0A*Message:* ${message}`;
            
            // Open WhatsApp
            const waUrl = `https://wa.me/919820400049?text=${text}`;
            window.open(waUrl, '_blank');
        }

        // Scroll Reveal Animation
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((element) => {
            observer.observe(element);
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        const toTopBtn = document.getElementById('scrollToTop');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm');
                navbar.classList.replace('py-4', 'py-3');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.replace('py-3', 'py-4');
            }

            if (window.scrollY > 500) {
                toTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
            } else {
                toTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
            }
        });

        toTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-cream/90 border-b border-coffee/5" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-coffee flex items-center gap-2 text-2xl tracking-tight font-playfair" href="#">
                Make My Day Cafe
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide">
<a className="hover:text-gold transition-colors" href="#home">Home</a>
<a className="hover:text-gold transition-colors" href="#about">Story</a>
<a className="hover:text-gold transition-colors" href="#menu">Menu</a>
<a className="hover:text-gold transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-gold transition-colors" href="#book">Reservations</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-block px-6 py-2 border border-coffee text-coffee text-xs uppercase tracking-widest hover:bg-coffee hover:text-white transition-all duration-300" href="#book">
                    Book Table
                </a>
<button className="md:hidden text-2xl text-coffee">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Cafe Ambience" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=2047&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-b from-black/60 via-black/40 to-black/70 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto mt-16 reveal">
<span className="block text-gold text-sm tracking-[0.2em] uppercase mb-4">Established 2024</span>
<h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6">
                Fresh Coffee.<br/> <span className="text-cream/90 italic">Delicious Food.</span><br/> Cozy Vibes.
            </h1>
<p className="font-light text-base md:text-lg text-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                Experience the perfect blend of artisanal coffee and culinary excellence in the heart of the city. The best place for breakfast, coffee &amp; snacks.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="bg-gold text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-coffee transition-all duration-300 min-w-[180px]" href="#book">
                    Book a Table
                </a>
<a className="border border-white/30 backdrop-blur-sm text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-coffee transition-all duration-300 min-w-[180px]" href="#menu">
                    View Menu
                </a>
</div>
</div>

<div className="absolute bottom-10 md:bottom-20 left-6 md:left-20 z-10 hidden md:block reveal delay-200">
<div className="flex gap-3 border-white/10 border rounded-2xl mb-4 p-4 backdrop-blur-md items-center">
<div className="bg-gold text-white p-2 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
</div>
<div className="text-left">
<p className="text-white text-sm font-medium">4.8 Rating</p>
<p className="text-white/60 text-xs">From 500+ Reviews</p>
</div>
</div>
<div className="bg-cream/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-3">
<div className="bg-gold text-white p-2 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:cup-hot-linear" width="20"></iconify-icon>
</div>
<div className="text-left">
<p className="text-white text-sm font-medium">Fresh Coffee</p>
<p className="text-white/60 text-xs">100% Arabica Beans</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-cream overflow-hidden" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative reveal">
<div className="absolute -top-4 -left-4 w-full h-full border border-gold rounded-full opacity-30 transform -rotate-2"></div>
<img alt="Cafe Interior" className="relative rounded-t-full rounded-b-[1000px] shadow-soft object-cover w-full h-[600px]" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-10 -right-6 bg-white p-6 shadow-xl max-w-xs hidden md:block">
<p className="font-playfair text-xl italic text-coffee">"Where every cup tells a story."</p>
</div>
</div>
<div className="reveal delay-100">
<span className="text-gold text-xs font-semibold tracking-widest uppercase mb-2 block">Our Story</span>
<h2 className="font-playfair text-4xl md:text-5xl text-coffee mb-6 tracking-tight">Crafting Memories <br/> <span className="italic text-coffee/70">One Sip at a Time</span></h2>
<p className="text-coffee/70 font-light mb-8 leading-relaxed">
                    Founded with a passion for exceptional flavors and warm hospitality, Café Aurum is more than just a coffee shop. It's a sanctuary where modern luxury meets comfort. Our kitchen prioritizes hygiene and freshness, sourcing ingredients daily to ensure every plate is a masterpiece.
                </p>
<div className="grid grid-cols-2 gap-6 mb-10">
<div className="flex items-start gap-3">
<iconify-icon className="text-gold text-2xl flex-shrink-0 mt-1" icon="solar:leaf-linear"></iconify-icon>
<div>
<h4 className="font-medium text-coffee text-sm mb-1">Fresh Ingredients</h4>
<p className="text-xs text-coffee/60 font-light">Farm-to-table approach daily.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-gold text-2xl flex-shrink-0 mt-1" icon="solar:shield-check-linear"></iconify-icon>
<div>
<h4 className="font-medium text-coffee text-sm mb-1">Hygienic Kitchen</h4>
<p className="text-xs text-coffee/60 font-light">Top-tier safety standards.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-gold text-2xl flex-shrink-0 mt-1" icon="solar:sofa-linear"></iconify-icon>
<div>
<h4 className="font-medium text-coffee text-sm mb-1">Cozy Seating</h4>
<p className="text-xs text-coffee/60 font-light">Designed for your comfort.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-gold text-2xl flex-shrink-0 mt-1" icon="solar:user-heart-linear"></iconify-icon>
<div>
<h4 className="font-medium text-coffee text-sm mb-1">Friendly Staff</h4>
<p className="text-xs text-coffee/60 font-light">Service with a warm smile.</p>
</div>
</div>
</div>
<a className="text-coffee border-b border-gold pb-1 hover:text-gold transition-colors text-sm uppercase tracking-wider" href="#menu">Discover Our Menu</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="menu">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<span className="text-gold text-xs font-semibold tracking-widest uppercase mb-2 block">Our Specialties</span>
<h2 className="font-playfair text-4xl text-coffee tracking-tight">Popular Menu</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group reveal delay-100">
<div className="relative overflow-hidden rounded-2xl h-64 mb-4">
<img alt="Cappuccino" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-coffee">₹120</div>
</div>
<h3 className="font-playfair text-xl text-coffee mb-1">Cappuccino</h3>
<p className="text-xs text-coffee/60 font-light mb-3">Rich espresso with steamed milk foam.</p>
</div>

<div className="group reveal delay-200">
<div className="relative overflow-hidden rounded-2xl h-64 mb-4">
<img alt="Latte" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&amp;w=2537&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-coffee">₹150</div>
</div>
<h3 className="font-playfair text-xl text-coffee mb-1">Hazelnut Latte</h3>
<p className="text-xs text-coffee/60 font-light mb-3">Smooth espresso with nutty syrup.</p>
</div>

<div className="group reveal delay-300">
<div className="relative overflow-hidden rounded-2xl h-64 mb-4">
<img alt="Cold Coffee" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-coffee">₹180</div>
</div>
<h3 className="font-playfair text-xl text-coffee mb-1">Classic Cold Coffee</h3>
<p className="text-xs text-coffee/60 font-light mb-3">Blended with ice cream and cocoa.</p>
</div>

<div className="group reveal delay-400">
<div className="relative overflow-hidden rounded-2xl h-64 mb-4">
<img alt="Veg Sandwich" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1554433607-66b5efe9d304?q=80&amp;w=2064&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-coffee">₹140</div>
</div>
<h3 className="font-playfair text-xl text-coffee mb-1">Garden Sandwich</h3>
<p className="text-xs text-coffee/60 font-light mb-3">Fresh veggies, pesto, and grilled bread.</p>
</div>

<div className="group reveal delay-100">
<div className="relative overflow-hidden rounded-2xl h-64 mb-4">
<img alt="Pizza" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-coffee">₹250</div>
</div>
<h3 className="font-playfair text-xl text-coffee mb-1">Cheese Burst Pizza</h3>
<p className="text-xs text-coffee/60 font-light mb-3">Mozzarella, basil, and tomato sauce.</p>
</div>

<div className="group reveal delay-200">
<div className="relative overflow-hidden rounded-2xl h-64 mb-4">
<img alt="Pasta" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-coffee">₹220</div>
</div>
<h3 className="font-playfair text-xl text-coffee mb-1">Pasta Alfredo</h3>
<p className="text-xs text-coffee/60 font-light mb-3">Creamy white sauce with mushrooms.</p>
</div>

<div className="group reveal delay-300">
<div className="relative overflow-hidden rounded-2xl h-64 mb-4">
<img alt="Shake" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-coffee">₹190</div>
</div>
<h3 className="font-playfair text-xl text-coffee mb-1">Chocolate Shake</h3>
<p className="text-xs text-coffee/60 font-light mb-3">Thick belgian chocolate blend.</p>
</div>

<div className="group reveal delay-400">
<div className="relative overflow-hidden rounded-2xl h-64 mb-4">
<img alt="Fries" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&amp;w=2525&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-coffee">₹120</div>
</div>
<h3 className="font-playfair text-xl text-coffee mb-1">French Fries</h3>
<p className="text-xs text-coffee/60 font-light mb-3">Crispy salted fries with dip.</p>
</div>
</div>
<div className="mt-16 text-center reveal">
<button className="inline-flex items-center gap-2 px-8 py-3 border border-coffee text-coffee text-xs uppercase tracking-widest hover:bg-coffee hover:text-white transition-all duration-300">
<iconify-icon icon="solar:file-download-linear" width="16"></iconify-icon>
                    Download Full Menu
                </button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-coffee relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
<svg viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,85.8,-7.1C81.5,6.2,70.2,18.5,59.6,29.3C49,40.1,39,49.4,27.8,56.5C16.6,63.6,4.2,68.5,-9.5,71.1C-23.2,73.7,-38.2,74,-50.2,66.3C-62.2,58.6,-71.2,42.9,-76.8,26.9C-82.4,10.9,-84.6,-5.4,-78.9,-19.9C-73.2,-34.4,-59.6,-47.1,-45.8,-54.5C-32,-61.9,-18,-64, -2.9,-60.1L12.2,-56.2Z" fill="#C9A227" transform="translate(100 100)"></path>
</svg>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10 reveal">
<span className="text-gold text-xs font-semibold tracking-widest uppercase mb-4 block">Limited Time Offer</span>
<h2 className="font-playfair text-4xl md:text-6xl text-white mb-6 tracking-tight">Happy Hours</h2>
<p className="text-white/80 text-xl font-light mb-2">4:00 PM – 7:00 PM Daily</p>
<p className="text-gold text-2xl md:text-3xl font-playfair italic mb-10">Flat 20% OFF on all Hot Coffees</p>
<button className="bg-gold text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-coffee transition-all duration-300">
                Claim Offer
            </button>
</div>
</section>

<section className="py-24 px-6 bg-cream" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12 reveal">
<div>
<span className="text-gold text-xs font-semibold tracking-widest uppercase mb-2 block">Visual Experience</span>
<h2 className="font-playfair text-4xl text-coffee tracking-tight">Our Gallery</h2>
</div>
</div>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
<div className="break-inside-avoid reveal">
<img alt="Gallery" className="w-full rounded-2xl hover:opacity-90 transition-opacity duration-300 cursor-zoom-in" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid reveal delay-100">
<img alt="Gallery" className="w-full rounded-2xl hover:opacity-90 transition-opacity duration-300 cursor-zoom-in" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid reveal delay-200">
<img alt="Gallery" className="w-full rounded-2xl hover:opacity-90 transition-opacity duration-300 cursor-zoom-in" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid reveal">
<img alt="Gallery" className="w-full rounded-2xl hover:opacity-90 transition-opacity duration-300 cursor-zoom-in" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid reveal delay-100">
<img alt="Gallery" className="w-full rounded-2xl hover:opacity-90 transition-opacity duration-300 cursor-zoom-in" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid reveal delay-200">
<img alt="Gallery" className="w-full rounded-2xl hover:opacity-90 transition-opacity duration-300 cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="book">
<div className="max-w-4xl mx-auto bg-cream p-8 md:p-16 rounded-[40px] shadow-soft reveal">
<div className="text-center mb-12">
<span className="text-gold text-xs font-semibold tracking-widest uppercase mb-2 block">Reservations</span>
<h2 className="font-playfair text-3xl md:text-4xl text-coffee tracking-tight mb-2">Book a Table</h2>
<p className="text-coffee/60 font-light text-sm">Fill out the form below to send your reservation request via WhatsApp.</p>
</div>
<form className="space-y-8" id="reservationForm" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="relative group">
<input className="w-full bg-transparent border-b border-coffee/20 py-3 text-coffee placeholder-transparent focus:outline-none focus:border-gold transition-colors peer" id="name" required="" type="text"/>
<label className="absolute left-0 top-3 text-coffee/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-coffee/40 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-gold peer-focus:text-xs peer-valid:-top-4 peer-valid:text-xs" htmlFor="name">Name</label>
</div>

<div className="relative group">
<input className="w-full bg-transparent border-b border-coffee/20 py-3 text-coffee placeholder-transparent focus:outline-none focus:border-gold transition-colors peer" id="phone" required="" type="tel"/>
<label className="absolute left-0 top-3 text-coffee/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-coffee/40 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-gold peer-focus:text-xs peer-valid:-top-4 peer-valid:text-xs" htmlFor="phone">Phone Number</label>
</div>

<div className="relative group">
<input className="w-full bg-transparent border-b border-coffee/20 py-3 text-coffee focus:outline-none focus:border-gold transition-colors" id="date" required="" type="date"/>
</div>

<div className="relative group">
<input className="w-full bg-transparent border-b border-coffee/20 py-3 text-coffee focus:outline-none focus:border-gold transition-colors" id="time" required="" type="time"/>
</div>

<div className="relative group">
<select className="w-full bg-transparent border-b border-coffee/20 py-3 text-coffee focus:outline-none focus:border-gold transition-colors appearance-none" id="guests">
<option disabled="" selected="" value="">Number of Guests</option>
<option value="1">1 Person</option>
<option value="2">2 People</option>
<option value="3">3 People</option>
<option value="4">4 People</option>
<option value="5+">5+ People</option>
</select>
<iconify-icon className="absolute right-0 top-4 text-coffee/50 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="relative group">
<textarea className="w-full bg-transparent border-b border-coffee/20 py-3 text-coffee placeholder-transparent focus:outline-none focus:border-gold transition-colors peer" id="message" rows="2"></textarea>
<label className="absolute left-0 top-3 text-coffee/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-coffee/40 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-gold peer-focus:text-xs peer-valid:-top-4 peer-valid:text-xs" htmlFor="message">Special Request (Optional)</label>
</div>
<div className="flex flex-col md:flex-row items-center gap-6 pt-6">
<button className="w-full md:w-auto bg-coffee text-white px-12 py-3 text-sm tracking-widest uppercase hover:bg-gold transition-all duration-300" onclick="sendReservation()" type="button">
                        Book Now
                    </button>
<a className="flex items-center gap-2 text-coffee text-sm hover:text-green-600 transition-colors" href="https://wa.me/919820400049" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
                        Chat on WhatsApp
                    </a>
</div>
</form>
</div>
</section>

<section className="py-24 px-6 bg-cream">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<span className="text-gold text-xs font-semibold tracking-widest uppercase mb-2 block">Testimonials</span>
<h2 className="font-playfair text-4xl text-coffee tracking-tight">Loved by Customers</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow reveal delay-100">
<div className="flex text-gold mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-coffee/80 font-light italic mb-6 leading-relaxed">"Best cafe vibe in the city. The coffee is authentically brewed and the ambience is just perfect for my remote work days."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-coffee/10 rounded-full flex items-center justify-center text-coffee font-playfair font-semibold">S</div>
<div>
<p className="text-coffee text-sm font-medium">Sarah Jenkins</p>
<p className="text-coffee/40 text-xs">Food Critic</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow reveal delay-200">
<div className="flex text-gold mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-coffee/80 font-light italic mb-6 leading-relaxed">"Food is fresh and staff is incredibly friendly. The pasta alfredo is a must-try. Highly recommended!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-coffee/10 rounded-full flex items-center justify-center text-coffee font-playfair font-semibold">R</div>
<div>
<p className="text-coffee text-sm font-medium">Rahul Mehta</p>
<p className="text-coffee/40 text-xs">Local Guide</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow reveal delay-300">
<div className="flex text-gold mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-coffee/80 font-light italic mb-6 leading-relaxed">"Perfect place for meetings and hangouts. The attention to detail in the decor is stunning. Will visit again."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-coffee/10 rounded-full flex items-center justify-center text-coffee font-playfair font-semibold">A</div>
<div>
<p className="text-coffee text-sm font-medium">Anita Roy</p>
<p className="text-coffee/40 text-xs">Regular Customer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-0 relative h-[500px] w-full bg-white">
<div className="absolute inset-0 z-0">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.010156363636!2d72.82229631490234!3d19.09887198707662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b8b8b8b8b9%3A0x8b8b8b8b8b8b8b8b!2sJuhu%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1629876543210!5m2!1sen!2sin" style={{border: '0'}} width="100%"></iframe>
</div>
<div className="md:left-20 reveal bg-white/95 max-w-sm z-10 rounded-xl pt-8 pr-8 pb-8 pl-8 absolute top-10 left-6 shadow-lg backdrop-blur-md">
<h3 className="font-playfair text-2xl text-coffee mb-6">Visit Us</h3>
<div className="space-y-4">
<div className="flex gap-4">
<iconify-icon className="text-gold text-xl mt-1" icon="solar:map-point-linear"></iconify-icon>
<div>
<p className="text-xs text-coffee/50 uppercase tracking-widest mb-1">Address</p>
<p className="text-coffee leading-relaxed text-sm">Seven Olives hotel, Andheri - Kurla Rd, Safed Pul, Saki Naka, Mumbai, Maharashtra 400072</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-gold text-xl mt-1" icon="solar:phone-calling-linear"></iconify-icon>
<div>
<p className="text-coffee/50 uppercase text-xs tracking-widest mb-1">Contact</p>
<p className="text-coffee text-sm">+91 98204 00049</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-gold text-xl mt-1" icon="solar:clock-circle-linear"></iconify-icon>
<div>
<p className="text-xs text-coffee/50 uppercase tracking-widest mb-1">Opening Hours</p>
<p className="text-coffee text-sm">Mon - Sun: 9:00 AM – 11:00 PM</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-coffee text-cream pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
<div className="md:col-span-1">
<a className="flex items-center gap-2 text-2xl text-white tracking-tight font-playfair mb-6" href="#">Make My Day Cafe</a>
<p className="text-cream/60 text-sm font-light leading-relaxed">
                    A premium culinary destination for coffee lovers and food enthusiasts. Experience luxury in every sip.
                </p>
</div>
<div>
<h4 className="text-gold text-xs uppercase tracking-widest mb-6">Quick Links</h4>
<ul className="space-y-4 text-sm text-cream/70 font-light">
<li><a className="hover:text-white transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#menu">Our Menu</a></li>
<li><a className="hover:text-white transition-colors" href="#gallery">Gallery</a></li>
<li><a className="hover:text-white transition-colors" href="#book">Reservations</a></li>
</ul>
</div>
<div>
<h4 className="text-gold text-xs uppercase tracking-widest mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-cream/70 font-light">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-gold text-xs uppercase tracking-widest mb-6">Follow Us</h4>
<div className="flex gap-4">
<a className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300" href="#">
<iconify-icon className="text-white text-lg" icon="brandico:instagram-filled"></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300" href="#">
<iconify-icon className="text-white text-lg" icon="brandico:facebook"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-cream/40 font-light">
<p>© 2026. Make My Day Cafe All rights reserved.</p>
<p className="mt-2 md:mt-0">Designed with precision.</p>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center" href="https://wa.me/919820400049?text=Hi%20Make%20My%20Day%20Cafe,%20I%20would%20like%20to%20know%20more." target="_blank">
<iconify-icon icon="brandico:whatsapp" width="24"></iconify-icon>
</a>
<button className="fixed bottom-6 right-24 z-40 bg-coffee text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gold transition-all duration-300" id="scrollToTop">
<iconify-icon icon="solar:arrow-up-linear" width="24"></iconify-icon>
</button>



    </>
  );
}
