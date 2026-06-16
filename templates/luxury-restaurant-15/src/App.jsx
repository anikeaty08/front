import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Page Switching Logic
        function switchPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
                setTimeout(() => {
                    if(!section.classList.contains('active')) {
                        section.style.display = 'none';
                    }
                }, 600); // Wait for transition
            });

            // Show selected page
            const target = document.getElementById(pageId);
            target.style.display = 'block';
            
            // Small delay to allow display:block to apply before adding opacity class
            setTimeout(() => {
                target.classList.add('active');
            }, 50);

            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Mobile Menu Logic
        const menuToggle = document.getElementById('menu-toggle');
        const closeMenu = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');

        function toggleMenu() {
            const isClosed = mobileMenu.classList.contains('pointer-events-none');
            if (isClosed) {
                mobileMenu.classList.remove('pointer-events-none', 'opacity-0');
            } else {
                mobileMenu.classList.add('pointer-events-none', 'opacity-0');
            }
        }

        menuToggle.addEventListener('click', toggleMenu);
        closeMenu.addEventListener('click', toggleMenu);

        // Initialize Home
        document.addEventListener('DOMContentLoaded', () => {
             // Ensure only home is visible initially with no delay
             document.querySelectorAll('.page-section').forEach(s => s.style.display = 'none');
             const home = document.getElementById('home');
             home.style.display = 'flex'; // Home is flex
             setTimeout(() => home.classList.add('active'), 10);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<button className="font-heading text-xl tracking-tight text-white hover:text-amber-400 transition-colors uppercase z-50 relative" onclick="switchPage('home')">
                Bahadur
            </button>

<button className="z-50 text-white focus:outline-none md:hidden" id="menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>

<div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
<button className="hover:text-amber-400 transition-colors" onclick="switchPage('home')">Home</button>
<button className="hover:text-amber-400 transition-colors" onclick="switchPage('about')">Story</button>
<button className="hover:text-amber-400 transition-colors" onclick="switchPage('menu')">Menu</button>
<button className="hover:text-amber-400 transition-colors" onclick="switchPage('gallery')">Gallery</button>
<button className="hover:text-amber-400 transition-colors" onclick="switchPage('why-us')">Why Us</button>
<button className="px-5 py-2 border border-amber-500/50 text-amber-400 rounded-full hover:bg-amber-500/10 transition-all" onclick="switchPage('contact')">Contact</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-neutral-950 z-40 flex flex-col justify-center items-center opacity-0 pointer-events-none transition-opacity duration-300" id="mobile-menu">
<div className="flex flex-col space-y-8 text-center text-2xl font-heading text-neutral-300">
<button className="hover:text-amber-400 transition-colors" onclick="switchPage('home'); toggleMenu()">Home</button>
<button className="hover:text-amber-400 transition-colors" onclick="switchPage('about'); toggleMenu()">The Story</button>
<button className="hover:text-amber-400 transition-colors" onclick="switchPage('menu'); toggleMenu()">Menu</button>
<button className="hover:text-amber-400 transition-colors" onclick="switchPage('gallery'); toggleMenu()">Gallery</button>
<button className="hover:text-amber-400 transition-colors" onclick="switchPage('why-us'); toggleMenu()">Experience</button>
<button className="text-amber-400" onclick="switchPage('contact'); toggleMenu()">Contact</button>
</div>
<button className="absolute top-6 right-6 text-white md:hidden" id="close-menu">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
</div>

<main className="relative min-h-screen pt-20">

<section className="page-section active relative h-screen -mt-20 flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Dark Luxury Food" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
<span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 text-xs tracking-widest uppercase text-amber-200 backdrop-blur-sm mb-4">
                    Est. Neelbad
                </span>
<h1 className="font-heading text-5xl md:text-7xl text-white tracking-tight leading-tight">
                    Bahadur <br/><span className="text-white/80 italic text-4xl md:text-6xl font-normal">Restaurant</span>
</h1>
<p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
                    Where taste meets tradition &amp; quality. Serving authentic fast food with rich flavours and premium quality.
                </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-4">
<button className="w-full md:w-auto px-8 py-3 bg-white text-neutral-950 font-medium tracking-wide rounded hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group" onclick="switchPage('menu')">
                        Explore Menu
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<a className="w-full md:w-auto px-8 py-3 border border-white/20 text-white font-medium tracking-wide rounded hover:border-amber-400 hover:text-amber-400 transition-colors backdrop-blur-sm" href="tel:+919770441722">
                        Call Now
                    </a>
</div>
</div>
</section>

<section className="page-section" id="about">
<div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="font-heading text-4xl text-white tracking-tight">The Art of <span className="italic text-amber-500">Flavor</span></h2>
<div className="w-12 h-0.5 bg-amber-500/50"></div>
<div className="space-y-6 text-lg font-light leading-relaxed text-neutral-400">
<p>
                                At <strong className="text-white font-medium">Bahadur Restaurant</strong>, we believe fast food shouldn't compromise on luxury or health. Nestled in the heart of Neelbad, we have redefined the local culinary scene by blending authentic street-style zest with premium, hygienic preparation.
                            </p>
<p>
                                Our story isn't just about food; it's about trust. Every ingredient is hand-picked, every spice blend is proprietary, and every dish is crafted to provide a consistent, high-quality experience that our patrons have come to respect.
                            </p>
</div>
<div className="grid grid-cols-2 gap-8 pt-4">
<div>
<p className="text-3xl text-white font-heading">100%</p>
<p className="text-sm uppercase tracking-wide mt-1">Hygiene Rating</p>
</div>
<div>
<p className="text-3xl text-white font-heading">5k+</p>
<p className="text-sm uppercase tracking-wide mt-1">Happy Locals</p>
</div>
</div>
</div>
<div className="relative group">
<div className="absolute inset-0 border border-amber-500/20 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
<img alt="Chef plating food" className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 relative z-10" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="page-section" id="menu">
<div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
<div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
<span className="text-amber-500 text-xs tracking-widest uppercase">Signature Selections</span>
<h2 className="font-heading text-4xl md:text-5xl text-white tracking-tight">Curated Taste</h2>
<p className="font-light">Exquisite flavors prepared fresh upon order.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative bg-neutral-900 border border-white/5 p-4 hover:border-amber-500/30 transition-colors duration-300">
<div className="overflow-hidden mb-6 h-64 w-full">
<img alt="Gourmet Burger" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&amp;w=2598&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-2">
<h3 className="text-xl text-white font-heading group-hover:text-amber-400 transition-colors">The Royal Burger</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Double patty, caramelized onions, house signature sauce, and fresh greens.</p>
</div>
</div>

<div className="group relative bg-neutral-900 border border-white/5 p-4 hover:border-amber-500/30 transition-colors duration-300">
<div className="overflow-hidden mb-6 h-64 w-full">
<img alt="Artisan Pizza" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-2">
<h3 className="text-xl text-white font-heading group-hover:text-amber-400 transition-colors">Stone Oven Pizza</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Hand-tossed dough, imported mozzarella, basil, and san marzano tomato sauce.</p>
</div>
</div>

<div className="group relative bg-neutral-900 border border-white/5 p-4 hover:border-amber-500/30 transition-colors duration-300">
<div className="overflow-hidden mb-6 h-64 w-full">
<img alt="Spicy Noodles" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-2">
<h3 className="text-xl text-white font-heading group-hover:text-amber-400 transition-colors">Dragon Noodles</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Wok-tossed noodles with exotic vegetables, chili oil, and aromatic spices.</p>
</div>
</div>

<div className="group relative bg-neutral-900 border border-white/5 p-4 hover:border-amber-500/30 transition-colors duration-300">
<div className="overflow-hidden mb-6 h-64 w-full">
<img alt="Crispy Chicken" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-2">
<h3 className="text-xl text-white font-heading group-hover:text-amber-400 transition-colors">Crispy Supreme</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Golden fried supreme cuts, marinated in secret herbs for 24 hours.</p>
</div>
</div>

<div className="group relative bg-neutral-900 border border-white/5 p-4 hover:border-amber-500/30 transition-colors duration-300">
<div className="overflow-hidden mb-6 h-64 w-full">
<img alt="Loaded Fries" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-2">
<h3 className="text-xl text-white font-heading group-hover:text-amber-400 transition-colors">Loaded Cheese Fries</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Hand-cut potatoes topped with liquid gold cheese, jalapenos, and spices.</p>
</div>
</div>

<div className="group relative bg-neutral-900 border border-white/5 p-4 hover:border-amber-500/30 transition-colors duration-300">
<div className="overflow-hidden mb-6 h-64 w-full">
<img alt="Sushi Rolls" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-2">
<h3 className="text-xl text-white font-heading group-hover:text-amber-400 transition-colors">Bahadur Special Wrap</h3>
<p className="text-sm text-neutral-500 line-clamp-2">A fusion of local spices and premium fillings wrapped in soft tortilla.</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="text-sm text-amber-400 border-b border-amber-400/50 pb-1 hover:text-white hover:border-white transition-colors" onclick="switchPage('contact')">
                        View Full Menu in Store
                    </button>
</div>
</div>
</section>

<section className="page-section" id="gallery">
<div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="font-heading text-4xl text-white tracking-tight">Visual Experience</h2>
<p className="mt-2 font-light text-neutral-500">A glimpse into our ambiance and culinary art.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
<div className="md:col-span-2 row-span-1 md:row-span-2 relative overflow-hidden group">
<img alt="Restaurant Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative overflow-hidden group">
<img alt="Fine Dining" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative overflow-hidden group">
<img alt="Plating" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&amp;w=2510&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:col-span-3 relative overflow-hidden group h-[300px]">
<img alt="Wide Kitchen Shot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="page-section" id="why-us">
<div className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col justify-center min-h-[80vh]">
<div className="text-center mb-20">
<h2 className="font-heading text-4xl md:text-5xl text-white tracking-tight">The Bahadur Standard</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-neutral-900/50 border border-white/5 p-8 text-center hover:bg-neutral-900 transition-colors">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 mb-6">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3">Fresh Ingredients</h3>
<p className="text-sm font-light text-neutral-500">Sourced daily from local organic farms to ensure peak freshness in every bite.</p>
</div>

<div className="bg-neutral-900/50 border border-white/5 p-8 text-center hover:bg-neutral-900 transition-colors">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 mb-6">
<iconify-icon icon="solar:stopwatch-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3">Fast Service</h3>
<p className="text-sm font-light text-neutral-500">Premium food doesn't mean slow. We respect your time without rushing the art.</p>
</div>

<div className="bg-neutral-900/50 border border-white/5 p-8 text-center hover:bg-neutral-900 transition-colors">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 mb-6">
<iconify-icon icon="solar:chef-hat-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3">Authentic Taste</h3>
<p className="text-sm font-light text-neutral-500">Recipes passed down and perfected. A genuine flavor profile you won't find elsewhere.</p>
</div>

<div className="bg-neutral-900/50 border border-white/5 p-8 text-center hover:bg-neutral-900 transition-colors">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 mb-6">
<iconify-icon icon="solar:hearts-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3">Local Love</h3>
<p className="text-sm font-light text-neutral-500">Rated 4.8/5 by the Neelbad community. Trust built over years of service.</p>
</div>
</div>
</div>
</section>

<section className="page-section" id="contact">
<div className="max-w-7xl mx-auto px-6 py-20 md:py-32 min-h-screen flex items-center">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
<div className="space-y-12">
<div>
<span className="text-amber-500 text-xs tracking-widest uppercase">Visit Us</span>
<h2 className="font-heading text-5xl text-white tracking-tight mt-4">We await your<br/>arrival.</h2>
</div>
<div className="space-y-8">
<div className="flex items-start gap-4">
<iconify-icon className="text-amber-500 mt-1" icon="solar:map-point-linear" width="24"></iconify-icon>
<div>
<h4 className="text-white text-lg font-medium">Location</h4>
<p className="text-neutral-400 font-light mt-1">Shop No 18 Colony, Jagannath Puri,<br/>Near Durga Mandir, Neelbad,<br/>Madhya Pradesh – 462044</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-amber-500 mt-1" icon="solar:phone-calling-linear" width="24"></iconify-icon>
<div>
<h4 className="text-white text-lg font-medium">Contact</h4>
<p className="text-neutral-400 font-light mt-1">+91 97704 41722</p>
<p className="text-neutral-500 text-xs mt-1">Available for WhatsApp Orders</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-amber-500 mt-1" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="text-white text-lg font-medium">Hours</h4>
<p className="text-neutral-400 font-light mt-1">Mon - Sun: 11:00 AM - 11:00 PM</p>
</div>
</div>
</div>
<div className="flex gap-4">
<a className="px-8 py-3 bg-white text-neutral-950 font-medium rounded hover:bg-neutral-200 transition-colors" href="tel:+919770441722">Call Now</a>
<a className="px-8 py-3 border border-white/20 text-white font-medium rounded hover:border-amber-400 hover:text-amber-400 transition-colors" href="https://maps.google.com" target="_blank">Get Directions</a>
</div>
</div>
<div className="relative h-[400px] lg:h-auto w-full bg-neutral-900 rounded-lg overflow-hidden border border-white/5">

<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
<img className="opacity-20 w-full h-full object-cover" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2674&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<iconify-icon className="text-amber-500 animate-bounce" icon="solar:map-point-bold" width="48"></iconify-icon>
<span className="text-white font-heading mt-2">Bahadur Restaurant</span>
</div>
</div>
</div>
</div>
</div>

<footer className="border-t border-white/5 py-8 text-center">
<p className="text-xs text-neutral-600">© 2023 Bahadur Restaurant. All rights reserved.</p>
</footer>
</section>
</main>


    </>
  );
}
