import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Poppins', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
gold: {
400: '#D4AF37',
500: '#C5A059',
600: '#B48E43',
},
stone: {
850: '#1c1917',
}
},
backgroundImage: {
'hero-pattern': "linear-gradient(to right bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2036&auto=format&fit=crop')",
}
}
}
}



        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Sticky Navbar effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-md');
                navbar.classList.add('bg-white/95');
            } else {
                navbar.classList.remove('shadow-md');
                navbar.classList.remove('bg-white/95');
            }
        });

        // Gallery Filtering
        const filterBtns = document.querySelectorAll('.filter-btn');
        const items = document.querySelectorAll('.gallery-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                filterBtns.forEach(b => {
                    b.classList.remove('bg-stone-900', 'text-white');
                    b.classList.add('bg-stone-100', 'text-stone-600');
                });
                // Add active to clicked
                btn.classList.remove('bg-stone-100', 'text-stone-600');
                btn.classList.add('bg-stone-900', 'text-white');

                const filter = btn.getAttribute('data-filter');

                items.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Lightbox Logic
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxClose = document.getElementById('lightbox-close');

        items.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                lightboxImg.src = img.src;
                lightbox.classList.remove('hidden');
            });
        });

        lightboxClose.addEventListener('click', () => {
            lightbox.classList.add('hidden');
        });

        lightbox.addEventListener('click', (e) => {
            if(e.target === lightbox) lightbox.classList.add('hidden');
        });

        // Booking Form Handler
        function handleBooking(e) {
            e.preventDefault();
            alert("Thank you! We will confirm your appointment on WhatsApp shortly.");
            e.target.reset();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2">
<a className="font-serif text-3xl font-medium tracking-tighter text-stone-900" href="#">
                        Ruva<span className="text-gold-500">.</span>
</a>
</div>

<nav className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium hover:text-gold-500 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium hover:text-gold-500 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium hover:text-gold-500 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium hover:text-gold-500 transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium hover:text-gold-500 transition-colors" href="#about">About</a>
<a className="text-sm font-medium hover:text-gold-500 transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden md:block">
<a className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-stone-900 hover:bg-gold-500 transition-all duration-300 shadow-lg hover:shadow-xl" href="https://wa.me/919993990917?text=Hi%20I%20want%20to%20book%20an%20appointment" target="_blank">
                        Book Appointment
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-stone-900 hover:text-gold-500 focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden absolute top-20 left-0 w-full bg-white border-b border-stone-100 shadow-xl" id="mobile-menu">
<div className="px-4 pt-4 pb-6 space-y-2 flex flex-col items-center">
<a className="block px-3 py-2 text-base font-medium hover:text-gold-500" href="#home">Home</a>
<a className="block px-3 py-2 text-base font-medium hover:text-gold-500" href="#services">Services</a>
<a className="block px-3 py-2 text-base font-medium hover:text-gold-500" href="#gallery">Gallery</a>
<a className="block px-3 py-2 text-base font-medium hover:text-gold-500" href="#pricing">Pricing</a>
<a className="block px-3 py-2 text-base font-medium hover:text-gold-500" href="#about">About</a>
<a className="mt-4 w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gold-500 hover:bg-gold-600" href="https://wa.me/919993990917?text=Hi%20I%20want%20to%20book%20an%20appointment">
                    Book Appointment
                </a>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed" id="home">
<div className="absolute inset-0 bg-black/20"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center px-4 animate-fade-in-up">
<span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs tracking-widest uppercase mb-6">
                Premium Beauty &amp; Wellness
            </span>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white tracking-tight mb-6 leading-tight drop-shadow-sm">
                Luxury Salon Experience <br/> <span className="text-gold-400 italic">in Your City</span>
</h1>
<p className="text-lg md:text-xl text-stone-200 mb-10 font-light tracking-wide max-w-2xl mx-auto">
                Hair | Bridal | Skincare | Makeup | Spa
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="min-w-[180px] px-8 py-4 bg-white text-stone-900 rounded-full font-medium text-sm tracking-wide hover:bg-gold-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="https://wa.me/919993990917?text=Hi%20I%20want%20to%20book%20an%20appointment" target="_blank">
                    Book Appointment
                </a>
<a className="min-w-[180px] px-8 py-4 bg-transparent border border-white/40 backdrop-blur-sm text-white rounded-full font-medium text-sm tracking-wide hover:bg-white hover:text-stone-900 transition-all duration-300 flex items-center justify-center gap-2" href="tel:+919993990917">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    Call Now
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
<iconify-icon icon="solar:arrow-down-linear" width="32"></iconify-icon>
</div>
</section>

<section className="py-24 bg-stone-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 tracking-tight mb-4">Exquisite Services</h2>
<div className="h-1 w-20 bg-gold-500 mx-auto rounded-full"></div>
<p className="mt-4 text-stone-500 max-w-2xl mx-auto font-light">Tailored treatments designed to enhance your natural beauty.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100">
<div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center mb-6 text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:scissors-linear" strokeWidth="1.5" width="30"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 mb-2">Haircut &amp; Styling</h3>
<p className="text-sm text-stone-500 leading-relaxed">Expert cuts, blow-drys, and styling tailored to your face shape and lifestyle.</p>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100">
<div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center mb-6 text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:cosmetic-linear" strokeWidth="1.5" width="30"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 mb-2">Bridal Makeup</h3>
<p className="text-sm text-stone-500 leading-relaxed">Radiant, long-lasting bridal makeup to make your special day unforgettable.</p>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100">
<div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center mb-6 text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:face-scan-circle-linear" strokeWidth="1.5" width="30"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 mb-2">Facial &amp; Cleanup</h3>
<p className="text-sm text-stone-500 leading-relaxed">Deep cleansing and rejuvenating facials for a glowing, healthy complexion.</p>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100">
<div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center mb-6 text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:stars-linear" strokeWidth="1.5" width="30"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 mb-2">Spa &amp; Treatments</h3>
<p className="text-sm text-stone-500 leading-relaxed">Relaxing hair spas, manicures, pedicures, and body treatments.</p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-stone-900 font-medium hover:text-gold-500 transition-colors border-b border-stone-900 pb-1 hover:border-gold-500" href="#pricing">
                    View Full Service Menu <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
<div className="absolute -bottom-8 -right-4 w-32 h-32 bg-stone-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
<img alt="Salon Interior" className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full grayscale-[10%] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gold-50 rounded-full flex items-center justify-center text-gold-600">
<iconify-icon icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-stone-400 uppercase tracking-wide">Experience</p>
<p className="text-xl font-serif font-medium text-stone-900">10+ Years</p>
</div>
</div>
</div>
</div>
<div>
<span className="text-gold-500 font-medium tracking-widest text-sm uppercase">Our Story</span>
<h2 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 tracking-tight mt-4 mb-6">Redefining Beauty &amp; Elegance</h2>
<p className="text-stone-500 mb-6 leading-relaxed">
                        At Ruva Salon, we believe that beauty is an art form. Established with a vision to provide a premium sanctuary for self-care, we combine expert techniques with top-tier hygiene standards. Our team of certified professionals is dedicated to bringing out the best version of you.
                    </p>
<p className="text-stone-500 mb-8 leading-relaxed">
                        Whether you are preparing for your wedding day or just need a relaxing hair spa, we ensure every visit feels like a luxury retreat.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-gold-500" icon="solar:check-circle-linear" width="22"></iconify-icon>
<span className="text-stone-800 font-medium">Certified &amp; Expert Professionals</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-gold-500" icon="solar:check-circle-linear" width="22"></iconify-icon>
<span className="text-stone-800 font-medium">Premium International Products</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-gold-500" icon="solar:check-circle-linear" width="22"></iconify-icon>
<span className="text-stone-800 font-medium">100% Hygienic &amp; Safe Environment</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="pricing">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 tracking-tight mb-4">Our Menu</h2>
<div className="h-1 w-20 bg-gold-500 mx-auto rounded-full"></div>
<p className="mt-4 text-stone-500 font-light">Transparent pricing for premium services.</p>
</div>
<div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100">
<div className="grid md:grid-cols-2">

<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-100">
<h3 className="text-2xl font-serif text-stone-900 mb-8 flex items-center gap-2">
<iconify-icon className="text-gold-500" icon="solar:scissors-square-linear"></iconify-icon> Hair &amp; Styling
                        </h3>
<div className="space-y-6">
<div className="flex justify-between items-baseline border-b border-stone-100 pb-2 border-dotted">
<span className="font-medium text-stone-700">Expert Haircut</span>
<span className="text-stone-500 text-sm">from ₹599</span>
</div>
<div className="flex justify-between items-baseline border-b border-stone-100 pb-2 border-dotted">
<span className="font-medium text-stone-700">Blow Dry &amp; Styling</span>
<span className="text-stone-500 text-sm">from ₹799</span>
</div>
<div className="flex justify-between items-baseline border-b border-stone-100 pb-2 border-dotted">
<span className="font-medium text-stone-700">Hair Spa</span>
<span className="text-stone-500 text-sm">from ₹1499</span>
</div>
<div className="flex justify-between items-baseline border-b border-stone-100 pb-2 border-dotted">
<span className="font-medium text-stone-700">Root Touch Up</span>
<span className="text-stone-500 text-sm">from ₹1199</span>
</div>
<div className="flex justify-between items-baseline border-b border-stone-100 pb-2 border-dotted">
<span className="font-medium text-stone-700">Global Hair Color</span>
<span className="text-stone-500 text-sm">from ₹3499</span>
</div>
</div>
<h3 className="text-2xl font-serif text-stone-900 mt-12 mb-8 flex items-center gap-2">
<iconify-icon className="text-gold-500" icon="solar:face-scan-square-linear"></iconify-icon> Skincare
                        </h3>
<div className="space-y-6">
<div className="flex justify-between items-baseline border-b border-stone-100 pb-2 border-dotted">
<span className="font-medium text-stone-700">Fruit Facial</span>
<span className="text-stone-500 text-sm">from ₹1299</span>
</div>
<div className="flex justify-between items-baseline border-b border-stone-100 pb-2 border-dotted">
<span className="font-medium text-stone-700">Diamond Facial</span>
<span className="text-stone-500 text-sm">from ₹2499</span>
</div>
<div className="flex justify-between items-baseline border-b border-stone-100 pb-2 border-dotted">
<span className="font-medium text-stone-700">Clean Up</span>
<span className="text-stone-500 text-sm">from ₹899</span>
</div>
</div>
</div>

<div className="p-8 md:p-12">
<h3 className="text-2xl font-serif text-stone-900 mb-8 flex items-center gap-2">
<iconify-icon className="text-gold-500" icon="solar:magic-stick-3-linear"></iconify-icon> Makeup &amp; Bridal
                        </h3>
<div className="space-y-6">
<div className="flex justify-between items-baseline border-b border-stone-100 pb-2 border-dotted">
<span className="font-medium text-stone-700">Party Makeup</span>
<span className="text-stone-500 text-sm">from ₹2499</span>
</div>
<div className="flex justify-between items-baseline border-b border-stone-100 pb-2 border-dotted">
<span className="font-medium text-stone-700">Engagement Makeup</span>
<span className="text-stone-500 text-sm">from ₹7999</span>
</div>
<div className="flex justify-between items-baseline border-b border-stone-100 pb-2 border-dotted">
<span className="font-medium text-stone-700">Bridal HD Makeup</span>
<span className="text-stone-500 text-sm">from ₹14999</span>
</div>
<div className="flex justify-between items-baseline border-b border-stone-100 pb-2 border-dotted">
<span className="font-medium text-stone-700">Airbrush Bridal</span>
<span className="text-stone-500 text-sm">from ₹19999</span>
</div>
</div>
<h3 className="text-2xl font-serif text-stone-900 mt-12 mb-8 flex items-center gap-2">
<iconify-icon className="text-gold-500" icon="solar:bath-linear"></iconify-icon> Hands &amp; Feet
                        </h3>
<div className="space-y-6">
<div className="flex justify-between items-baseline border-b border-stone-100 pb-2 border-dotted">
<span className="font-medium text-stone-700">Classic Manicure</span>
<span className="text-stone-500 text-sm">from ₹699</span>
</div>
<div className="flex justify-between items-baseline border-b border-stone-100 pb-2 border-dotted">
<span className="font-medium text-stone-700">Classic Pedicure</span>
<span className="text-stone-500 text-sm">from ₹899</span>
</div>
<div className="flex justify-between items-baseline border-b border-stone-100 pb-2 border-dotted">
<span className="font-medium text-stone-700">Spa Pedicure</span>
<span className="text-stone-500 text-sm">from ₹1299</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 tracking-tight">Our Portfolio</h2>

<div className="flex flex-wrap justify-center gap-4 mt-8" id="gallery-filters">
<button className="filter-btn active px-6 py-2 rounded-full text-sm font-medium transition-all bg-stone-900 text-white" data-filter="all">All</button>
<button className="filter-btn px-6 py-2 rounded-full text-sm font-medium transition-all bg-stone-100 text-stone-600 hover:bg-stone-200" data-filter="hair">Hair</button>
<button className="filter-btn px-6 py-2 rounded-full text-sm font-medium transition-all bg-stone-100 text-stone-600 hover:bg-stone-200" data-filter="makeup">Makeup</button>
<button className="filter-btn px-6 py-2 rounded-full text-sm font-medium transition-all bg-stone-100 text-stone-600 hover:bg-stone-200" data-filter="bridal">Bridal</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="gallery-grid">

<div className="gallery-item group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer bridal makeup">
<img alt="Bridal" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
</div>
</div>
<div className="gallery-item group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer hair">
<img alt="Hair" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&amp;w=2036&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
</div>
</div>
<div className="gallery-item group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer makeup">
<img alt="Makeup" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&amp;w=1035&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
</div>
</div>
<div className="gallery-item group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer hair">
<img alt="Interior" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
</div>
</div>
<div className="gallery-item group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer bridal">
<img alt="Bridal" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1628149455676-13653fb9357d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
</div>
</div>
<div className="gallery-item group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer makeup">
<img alt="Makeup" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1457972729786-0411a3b2b626?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
</div>
</div>
<div className="gallery-item group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer hair">
<img alt="Hair" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
</div>
</div>
<div className="gallery-item group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer bridal">
<img alt="Bridal" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1605280266973-56839d0df568?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight mb-4">Loved by Our Clients</h2>
<div className="flex justify-center gap-1 text-gold-500">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar">

<div className="snap-center flex-shrink-0 w-80 md:w-96 bg-stone-800 p-8 rounded-2xl relative">
<iconify-icon className="text-stone-600 absolute top-4 right-4 text-4xl" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-stone-300 italic mb-6">"Absolutely the best salon experience I've had. The staff is so polite and the ambiance is pure luxury. My bridal makeup was flawless!"</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-stone-900 font-bold">P</div>
<div>
<h4 className="font-medium">Priya Sharma</h4>
<p className="text-xs text-stone-400">Bridal Package</p>
</div>
</div>
</div>

<div className="snap-center flex-shrink-0 w-80 md:w-96 bg-stone-800 p-8 rounded-2xl relative">
<iconify-icon className="text-stone-600 absolute top-4 right-4 text-4xl" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-stone-300 italic mb-6">"Highly recommended for hair services. They use genuine premium products and really understand hair texture. Will visit again."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-600 flex items-center justify-center text-white font-bold">A</div>
<div>
<h4 className="font-medium">Anjali Mehta</h4>
<p className="text-xs text-stone-400">Hair Spa</p>
</div>
</div>
</div>

<div className="snap-center flex-shrink-0 w-80 md:w-96 bg-stone-800 p-8 rounded-2xl relative">
<iconify-icon className="text-stone-600 absolute top-4 right-4 text-4xl" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-stone-300 italic mb-6">"Clean, hygienic and very professional. The facial left my skin glowing for weeks. Love the vibe of this place."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-stone-900 font-bold">S</div>
<div>
<h4 className="font-medium">Sneha Patel</h4>
<p className="text-xs text-stone-400">Skin Care</p>
</div>
</div>
</div>

<div className="snap-center flex-shrink-0 w-80 md:w-96 bg-stone-800 p-8 rounded-2xl relative">
<iconify-icon className="text-stone-600 absolute top-4 right-4 text-4xl" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-stone-300 italic mb-6">"Got a party makeup done for my sister's wedding. Subtle, elegant and just perfect. Thank you Ruva!"</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-600 flex items-center justify-center text-white font-bold">K</div>
<div>
<h4 className="font-medium">Kavita R.</h4>
<p className="text-xs text-stone-400">Makeup</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="appointment-form">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<div className="bg-white rounded-3xl shadow-xl overflow-hidden">
<div className="bg-stone-900 p-8 text-center">
<h3 className="text-2xl text-white font-serif font-medium">Book Your Appointment</h3>
<p className="text-stone-400 text-sm mt-2">Fill the form below or book directly via WhatsApp</p>
</div>
<div className="p-8 md:p-10">
<form className="space-y-6" onsubmit="handleBooking(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-stone-700 mb-2">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-gold-500 focus:ring-0 outline-none transition-colors" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-gold-500 focus:ring-0 outline-none transition-colors" placeholder="+91 98765 43210" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-stone-700 mb-2">Service Category</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-gold-500 focus:ring-0 outline-none transition-colors appearance-none">
<option>Select Service</option>
<option>Hair Services</option>
<option>Bridal Makeup</option>
<option>Party Makeup</option>
<option>Skin &amp; Facial</option>
<option>Manicure/Pedicure</option>
</select>
<iconify-icon className="absolute right-4 top-4 text-stone-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-2">Preferred Date</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-gold-500 focus:ring-0 outline-none transition-colors text-stone-500" required="" type="date"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-2">Message (Optional)</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-gold-500 focus:ring-0 outline-none transition-colors" placeholder="Any specific requirements?" rows="3"></textarea>
</div>
<button className="w-full py-4 bg-stone-900 text-white rounded-lg font-medium hover:bg-gold-500 transition-colors shadow-lg" type="submit">
                            Request Appointment
                        </button>
</form>
<div className="mt-8 pt-6 border-t border-stone-100 text-center">
<p className="text-stone-500 text-sm mb-4">Or simply chat with us</p>
<a className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 bg-green-50 px-6 py-2 rounded-full transition-colors" href="https://wa.me/919993990917?text=Hi%20I%20want%20to%20book%20an%20appointment" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
                            Book via WhatsApp
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div>
<h2 className="text-3xl font-serif font-medium text-stone-900 mb-6">Visit Us</h2>
<p className="text-stone-500 mb-10">We are conveniently located in the heart of the city. Drop by for a consultation or a quick pampering session.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-900 flex-shrink-0">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-900">Address</h4>
<p className="text-stone-500 text-sm mt-1">Shop No 5, Luxury High Street,<br/>Near Central Park, Mumbai - 400001</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-900 flex-shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-900">Contact</h4>
<a className="block text-stone-500 text-sm mt-1 hover:text-gold-500 transition-colors" href="tel:+919993990917">+91 99939 90917</a>
<a className="block text-stone-500 text-sm mt-1 hover:text-gold-500 transition-colors" href="mailto:info@ruvasalon.com">info@ruvasalon.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-900 flex-shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-900">Working Hours</h4>
<p className="text-stone-500 text-sm mt-1">Mon - Sun: 10:00 AM - 08:00 PM</p>
</div>
</div>
</div>
</div>

<div className="h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-stone-100">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30711.02641771192!2d72.85!3d19.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzEyLjAiTiA3MsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="py-16 bg-stone-900 text-white text-center">
<div className="max-w-2xl mx-auto px-4">
<h2 className="text-3xl font-serif mb-6">Ready for a New Look?</h2>
<p className="text-stone-400 mb-8">Step into luxury and let us pamper you.</p>
<a className="inline-block px-8 py-3 bg-gold-500 text-white rounded-full font-medium hover:bg-gold-600 transition-colors shadow-lg shadow-gold-500/30" href="https://wa.me/919993990917?text=Hi%20I%20want%20to%20book%20an%20appointment" target="_blank">
                Book Appointment
            </a>
</div>
</section>

<footer className="bg-stone-950 text-stone-400 border-t border-stone-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-1">
<a className="font-serif text-2xl font-medium text-white block mb-4" href="#">
                        Ruva<span className="text-gold-500">.</span>
</a>
<p className="text-sm leading-relaxed">Your premium destination for beauty, elegance, and self-care.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-gold-500 transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-gold-500 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-gold-500 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-gold-500 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Services</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-gold-500 transition-colors" href="#">Bridal Makeup</a></li>
<li><a className="hover:text-gold-500 transition-colors" href="#">Hair Treatments</a></li>
<li><a className="hover:text-gold-500 transition-colors" href="#">Facials</a></li>
<li><a className="hover:text-gold-500 transition-colors" href="#">Nail Spa</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Socials</h4>
<div className="flex gap-4">
<a className="text-white hover:text-gold-500 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon></a>
<a className="text-white hover:text-gold-500 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="24"></iconify-icon></a>
<a className="text-white hover:text-gold-500 transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="24"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2023 Ruva Salon. All rights reserved.</p>
<p className="mt-2 md:mt-0">Designed by Nexxity / Suraj Shinde</p>
</div>
</div>
</footer>


<a className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300" href="https://wa.me/919993990917?text=Hi%20I%20want%20to%20book%20an%20appointment" target="_blank">
<iconify-icon icon="brandico:whatsapp" width="30"></iconify-icon>
</a>

<a className="md:hidden fixed bottom-6 left-6 z-40 bg-stone-900 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300" href="tel:+919993990917">
<iconify-icon icon="solar:phone-calling-bold" width="28"></iconify-icon>
</a>

<div className="fixed inset-0 z-[60] bg-black/90 hidden flex items-center justify-center p-4" id="lightbox">
<button className="absolute top-6 right-6 text-white text-4xl hover:text-gold-500" id="lightbox-close">×</button>
<img alt="Zoomed" className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl" id="lightbox-img" src=""/>
</div>


    </>
  );
}
