import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Toggle mobile menu
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                // Trigger reflow to apply transition
                void menu.offsetWidth;
                menu.classList.remove('opacity-0');
                menu.classList.add('flex');
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.add('opacity-0');
                setTimeout(() => {
                    menu.classList.add('hidden');
                    menu.classList.remove('flex');
                    document.body.style.overflow = '';
                }, 300);
            }
        }

        // Close mobile menu on link click
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                toggleMenu();
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('bg-neutral-950/95');
                header.classList.remove('bg-neutral-950/80');
            } else {
                header.classList.add('bg-neutral-950/80');
                header.classList.remove('bg-neutral-950/95');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-neutral-950/95 backdrop-blur-xl z-[100] flex-col items-center justify-center gap-8 hidden opacity-0 transition-opacity duration-300" id="mobile-menu">
<button className="absolute top-6 right-6 text-neutral-400 hover:text-[#c5a059] transition-colors" onclick="toggleMenu()">
<iconify-icon icon="solar:close-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
<div className="flex flex-col items-center gap-6 text-lg tracking-widest uppercase">
<a className="hover:text-[#c5a059] transition-colors" href="#">Home</a>
<a className="hover:text-[#c5a059] transition-colors" href="#whats-on">What's On</a>
<a className="hover:text-[#c5a059] transition-colors" href="#menu">Menu</a>
<a className="hover:text-[#c5a059] transition-colors" href="#private-dining">Private Dining</a>
<a className="hover:text-[#c5a059] transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-[#c5a059] transition-colors" href="#about">About</a>
<a className="hover:text-[#c5a059] transition-colors" href="#contact">Contact</a>
</div>
<a className="mt-8 bg-gold-accent text-neutral-950 uppercase tracking-widest text-xs px-8 py-4 font-medium hover-bg-gold-accent transition-colors" href="#reservations">Make a Reservation</a>
</div>

<header className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-20 md:h-24">

<a className="font-display text-xl md:text-2xl tracking-[0.2em] uppercase font-normal text-white flex items-center gap-2" href="#">
                I G N I S
            </a>

<nav className="hidden xl:flex items-center gap-8 text-xs uppercase tracking-widest text-neutral-400 font-normal">
<a className="hover:text-[#c5a059] transition-colors" href="#">Home</a>
<a className="hover:text-[#c5a059] transition-colors" href="#whats-on">What's On</a>
<a className="hover:text-[#c5a059] transition-colors" href="#menu">Menu</a>
<a className="hover:text-[#c5a059] transition-colors" href="#private-dining">Private Dining</a>
<a className="hover:text-[#c5a059] transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-[#c5a059] transition-colors" href="#reservations">Reservations</a>
<a className="hover:text-[#c5a059] transition-colors" href="#about">About</a>
<a className="hover:text-[#c5a059] transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-6">
<a className="hidden md:inline-flex bg-gold-accent text-neutral-950 uppercase tracking-widest text-xs px-6 py-3 font-medium hover-bg-gold-accent transition-colors" href="#reservations">
                    Make a Reservation
                </a>

<button className="xl:hidden text-neutral-300 hover:text-[#c5a059] transition-colors flex items-center" onclick="toggleMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">

<div className="absolute inset-0 overflow-hidden">
<img alt="Premium restaurant interior and fire" className="w-full h-full object-cover object-center scale-105" src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/70 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
</div>
<div className="relative z-10 flex flex-col items-center text-center max-w-5xl px-6 mx-auto mt-16">
<span className="text-[#c5a059] uppercase tracking-[0.3em] text-xs font-medium mb-6 flex items-center gap-4 before:h-px before:w-8 before:bg-[#c5a059] after:h-px after:w-8 after:bg-[#c5a059]">The Ignis Experience</span>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] font-normal mb-8 text-neutral-50 drop-shadow-2xl">
                Bold Fire. <br className="hidden md:block"/> Refined Flavour. <br/> <span className="italic font-light text-neutral-300">Unforgettable Dining.</span>
</h1>
<p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                A modern restaurant experience shaped by fire, flavour, and atmosphere — where every plate is crafted to impress and every visit becomes a story worth repeating.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-gold-accent text-neutral-950 uppercase tracking-widest text-xs px-8 py-4 font-medium hover-bg-gold-accent transition-colors text-center" href="#reservations">
                    Reserve a Table
                </a>
<a className="w-full sm:w-auto border border-neutral-600 text-neutral-50 uppercase tracking-widest text-xs px-8 py-4 font-normal hover:bg-neutral-50 hover:text-neutral-950 transition-colors text-center backdrop-blur-sm bg-neutral-950/20" href="#menu">
                    Explore Menu
                </a>
</div>
</div>

<a className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 hover:text-[#c5a059] transition-colors flex flex-col items-center gap-2" href="#awards">
<span className="text-[10px] uppercase tracking-widest">Discover</span>
<iconify-icon className="animate-bounce" icon="solar:arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</section>

<section className="py-24 md:py-32 bg-neutral-950 border-b border-neutral-900" id="awards">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-display text-3xl md:text-5xl tracking-tight font-normal mb-6">Recognised for Excellence</h2>
<p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                    Proudly celebrated for exceptional food, warm hospitality, and a dining experience that brings people back again and again. Our commitment to quality is reflected in every dish, every detail, and every guest experience.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="border border-neutral-900 bg-neutral-900/20 p-10 flex flex-col items-center text-center group hover:border-[#c5a059]/30 transition-colors duration-500">
<div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center text-[#c5a059] mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:star-fall-minimalistic-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="font-display text-xl tracking-tight mb-2">Chef Hat Award</h3>
<p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">Good Food Guide 2024</p>
<p className="text-xs text-neutral-400 font-light">Awarded for culinary excellence and innovative use of seasonal ingredients.</p>
</div>

<div className="border border-neutral-900 bg-neutral-900/20 p-10 flex flex-col items-center text-center group hover:border-[#c5a059]/30 transition-colors duration-500">
<div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center text-[#c5a059] mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:medal-star-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="font-display text-xl tracking-tight mb-2">Best New Restaurant</h3>
<p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">Dining Excellence Awards</p>
<p className="text-xs text-neutral-400 font-light">Recognised as the standout new arrival in the city's premium dining scene.</p>
</div>

<div className="border border-neutral-900 bg-neutral-900/20 p-10 flex flex-col items-center text-center group hover:border-[#c5a059]/30 transition-colors duration-500">
<div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center text-[#c5a059] mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:wineglass-triangle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="font-display text-xl tracking-tight mb-2">Wine List of the Year</h3>
<p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">Sommelier Society</p>
<p className="text-xs text-neutral-400 font-light">A curated selection that perfectly complements our bold, fire-driven menu.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="about">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1 relative">
<div className="aspect-[4/5] overflow-hidden bg-neutral-900">
<img alt="Chef plating a dish" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700 hover:scale-105 transform" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#c5a059]/30 -z-10 hidden md:block"></div>
</div>
<div className="order-1 lg:order-2">
<span className="text-[#c5a059] uppercase tracking-widest text-xs font-medium mb-6 block">Our Philosophy</span>
<h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tighter font-normal mb-8 leading-[1.1]">Fine Dining, <br/><i className="text-neutral-400">Made Memorable</i></h2>
<div className="space-y-6 text-sm md:text-base text-neutral-400 font-light leading-relaxed mb-10">
<p>
                            Step into a space where bold flavours meet elegant presentation. Inspired by timeless techniques and elevated with a contemporary touch, our restaurant brings together premium ingredients, expertly prepared dishes, and a vibrant atmosphere designed for every occasion.
                        </p>
<p>
                            Whether you’re joining us for a relaxed lunch, an intimate dinner, or a special celebration, every moment is designed to feel effortless, warm, and unforgettable.
                        </p>
</div>
<a className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-neutral-50 hover:text-[#c5a059] transition-colors group" href="#">
                        Learn More 
                        <span className="w-8 h-px bg-neutral-600 group-hover:bg-[#c5a059] transition-colors"></span>
</a>
</div>
</div>
</div>
</section>

<section className="relative py-32 md:py-48 bg-neutral-950 flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Fire cooking" className="w-full h-full object-cover opacity-30 fixed scale-110" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/80"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tighter font-normal mb-8 text-neutral-50">A Dining Experience Built Around <br/> <span className="italic text-[#c5a059]">Fire, Flavour, and Craft</span></h2>
<div className="space-y-6 text-base text-neutral-300 font-light leading-relaxed">
<p>
                    From carefully sourced ingredients to expertly balanced menus, our kitchen is driven by passion and precision. Expect rich textures, smoky depth, seasonal freshness, and beautifully plated dishes that celebrate both comfort and creativity.
                </p>
<p>
                    Every element of the experience — from the lighting and music to the service and presentation — is curated to create a bold yet welcoming atmosphere.
                </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-neutral-950" id="menu">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

<div className="lg:w-1/3">
<div className="sticky top-32">
<span className="text-[#c5a059] uppercase tracking-widest text-xs font-medium mb-4 block">Taste The Fire</span>
<h2 className="font-display text-4xl md:text-5xl tracking-tighter font-normal mb-6">Discover <br/>Our Menu</h2>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-10">
                            A menu designed to satisfy every craving — from signature mains and fresh seasonal plates to handcrafted desserts and expertly mixed cocktails.
                        </p>
<a className="inline-block bg-transparent border border-neutral-700 text-neutral-50 uppercase tracking-widest text-xs px-8 py-4 font-normal hover:border-[#c5a059] hover:text-[#c5a059] transition-colors text-center" href="#">
                            View Full Menu
                        </a>
</div>
</div>

<div className="lg:w-2/3 flex flex-col">

<div className="py-8 border-b border-neutral-900 group">
<h3 className="font-display text-2xl md:text-3xl tracking-tight text-neutral-200 group-hover:text-[#c5a059] transition-colors mb-3 flex items-center justify-between">
                            Starters
                            <iconify-icon className="text-neutral-700 group-hover:text-[#c5a059] transition-colors" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</h3>
<p className="text-sm text-neutral-500 font-light max-w-xl leading-relaxed">Small plates with big character — perfect for sharing or starting your meal with something unforgettable.</p>
</div>

<div className="py-8 border-b border-neutral-900 group">
<h3 className="font-display text-2xl md:text-3xl tracking-tight text-neutral-200 group-hover:text-[#c5a059] transition-colors mb-3 flex items-center justify-between">
                            Signature Mains
                            <iconify-icon className="text-neutral-700 group-hover:text-[#c5a059] transition-colors" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</h3>
<p className="text-sm text-neutral-500 font-light max-w-xl leading-relaxed">Premium cuts, expertly cooked seafood, and house favourites brought to life with bold seasoning and refined technique.</p>
</div>

<div className="py-8 border-b border-neutral-900 group">
<h3 className="font-display text-2xl md:text-3xl tracking-tight text-neutral-200 group-hover:text-[#c5a059] transition-colors mb-3 flex items-center justify-between">
                            Sides &amp; Additions
                            <iconify-icon className="text-neutral-700 group-hover:text-[#c5a059] transition-colors" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</h3>
<p className="text-sm text-neutral-500 font-light max-w-xl leading-relaxed">Classic comforts and elevated accompaniments that complete the table.</p>
</div>

<div className="py-8 border-b border-neutral-900 group">
<h3 className="font-display text-2xl md:text-3xl tracking-tight text-neutral-200 group-hover:text-[#c5a059] transition-colors mb-3 flex items-center justify-between">
                            Desserts
                            <iconify-icon className="text-neutral-700 group-hover:text-[#c5a059] transition-colors" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</h3>
<p className="text-sm text-neutral-500 font-light max-w-xl leading-relaxed">Beautifully finished sweets designed to leave a lasting final impression.</p>
</div>

<div className="py-8 border-b border-neutral-900 group">
<h3 className="font-display text-2xl md:text-3xl tracking-tight text-neutral-200 group-hover:text-[#c5a059] transition-colors mb-3 flex items-center justify-between">
                            Drinks
                            <iconify-icon className="text-neutral-700 group-hover:text-[#c5a059] transition-colors" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</h3>
<p className="text-sm text-neutral-500 font-light max-w-xl leading-relaxed">Curated wines, premium spirits, classic cocktails, and house creations to complement every course.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0d0d0d]" id="whats-on">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-2xl">
<span className="text-[#c5a059] uppercase tracking-widest text-xs font-medium mb-4 block">Events &amp; Offers</span>
<h2 className="font-display text-4xl md:text-5xl tracking-tighter font-normal mb-6">What's On</h2>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        Discover exclusive events, seasonal specials, chef-curated menus, festive dining experiences, and limited-time offers. There’s always something happening — whether you’re joining us for a special occasion or simply looking for a new reason to dine out.
                    </p>
</div>
<a className="hidden md:inline-block bg-transparent border border-neutral-700 text-neutral-50 uppercase tracking-widest text-xs px-8 py-4 font-normal hover:border-[#c5a059] hover:text-[#c5a059] transition-colors text-center whitespace-nowrap" href="#">
                    See All Events
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<a className="group block relative overflow-hidden bg-neutral-900" href="#">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Wine tasting event" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent flex flex-col justify-end p-8">
<span className="text-[#c5a059] text-xs uppercase tracking-widest mb-2 font-medium">Every Thursday</span>
<h3 className="font-display text-2xl tracking-tight text-white mb-2">Sommelier Series</h3>
<p className="text-xs text-neutral-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">Join us for a guided tasting of rare vintages.</p>
</div>
</a>

<a className="group block relative overflow-hidden bg-neutral-900" href="#">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Steak special" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent flex flex-col justify-end p-8">
<span className="text-[#c5a059] text-xs uppercase tracking-widest mb-2 font-medium">Limited Time</span>
<h3 className="font-display text-2xl tracking-tight text-white mb-2">Winter Truffle Menu</h3>
<p className="text-xs text-neutral-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">A bespoke 5-course menu celebrating seasonal truffles.</p>
</div>
</a>

<a className="group block relative overflow-hidden bg-neutral-900 md:hidden lg:block" href="#">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Private event" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent flex flex-col justify-end p-8">
<span className="text-[#c5a059] text-xs uppercase tracking-widest mb-2 font-medium">Upcoming</span>
<h3 className="font-display text-2xl tracking-tight text-white mb-2">New Year's Eve Gala</h3>
<p className="text-xs text-neutral-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">Ring in the new year with an unforgettable feast.</p>
</div>
</a>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-block bg-transparent border border-neutral-700 text-neutral-50 uppercase tracking-widest text-xs px-8 py-4 font-normal hover:border-[#c5a059] hover:text-[#c5a059] transition-colors text-center w-full" href="#">
                    See All Events
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-neutral-950" id="private-dining">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1">
<span className="text-[#c5a059] uppercase tracking-widest text-xs font-medium mb-6 block">Exclusive Spaces</span>
<h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tighter font-normal mb-8 leading-[1.1]">Private Dining <br/>&amp; Celebrations</h2>
<div className="space-y-6 text-sm md:text-base text-neutral-400 font-light leading-relaxed mb-10">
<p>
                            Host your next event in a setting designed to impress. From intimate dinners and birthdays to corporate gatherings and special celebrations, our private dining experience combines tailored menus, attentive service, and an unforgettable atmosphere.
                        </p>
<p>
                            Our team will work with you to create a seamless event that feels personal, polished, and perfectly executed.
                        </p>
</div>
<a className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-neutral-50 hover:text-[#c5a059] transition-colors group" href="#">
                        Enquire Now 
                        <span className="w-8 h-px bg-neutral-600 group-hover:bg-[#c5a059] transition-colors"></span>
</a>
</div>
<div className="order-1 lg:order-2 relative">
<div className="aspect-square overflow-hidden bg-neutral-900">
<img alt="Private dining room setup" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700 hover:scale-105 transform" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0a0a0a] border-y border-neutral-900">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<h2 className="font-display text-3xl md:text-5xl tracking-tight font-normal mb-6">Why Guests Choose Us</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">

<div className="flex flex-col items-center text-center px-4">
<iconify-icon className="text-[#c5a059] mb-4" icon="solar:chef-hat-linear" strokeWidth="1.5" width="36"></iconify-icon>
<h3 className="font-display text-xl tracking-tight mb-3">Premium Ingredients</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">Expertly prepared dishes using the finest, carefully sourced seasonal produce.</p>
</div>

<div className="flex flex-col items-center text-center px-4">
<iconify-icon className="text-[#c5a059] mb-4" icon="solar:moon-stars-linear" strokeWidth="1.5" width="36"></iconify-icon>
<h3 className="font-display text-xl tracking-tight mb-3">Elegant Ambiance</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">A dark, sophisticated atmosphere with a modern edge, designed for immersion.</p>
</div>

<div className="flex flex-col items-center text-center px-4">
<iconify-icon className="text-[#c5a059] mb-4" icon="solar:glass-water-linear" strokeWidth="1.5" width="36"></iconify-icon>
<h3 className="font-display text-xl tracking-tight mb-3">Perfect for Occasions</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">The ideal setting for date nights, milestone celebrations, and group dining.</p>
</div>

<div className="flex flex-col items-center text-center px-4 lg:col-start-1 lg:col-end-2 lg:ml-auto">
<iconify-icon className="text-[#c5a059] mb-4" icon="solar:hand-stars-linear" strokeWidth="1.5" width="36"></iconify-icon>
<h3 className="font-display text-xl tracking-tight mb-3">Attentive Service</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">Warm, professional, and intuitive hospitality that anticipates your needs.</p>
</div>

<div className="flex flex-col items-center text-center px-4 lg:col-start-2 lg:col-end-4 lg:mr-auto lg:w-1/2">
<iconify-icon className="text-[#c5a059] mb-4" icon="solar:cup-star-linear" strokeWidth="1.5" width="36"></iconify-icon>
<h3 className="font-display text-xl tracking-tight mb-3">Memorable Offerings</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">Unforgettable food pairings and beautifully crafted drinks for a complete experience.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-neutral-950" id="gallery">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-2xl">
<span className="text-[#c5a059] uppercase tracking-widest text-xs font-medium mb-4 block">Visual Journey</span>
<h2 className="font-display text-4xl md:text-5xl tracking-tighter font-normal mb-6">A Space Worth <br/>Stepping Into</h2>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        From the glow of the dining room to the detail in every plate, every corner of the experience is designed to be seen, shared, and remembered. Explore the atmosphere, signature dishes, and moments that define our restaurant.
                    </p>
</div>
<a className="hidden md:inline-block bg-transparent border border-neutral-700 text-neutral-50 uppercase tracking-widest text-xs px-8 py-4 font-normal hover:border-[#c5a059] hover:text-[#c5a059] transition-colors text-center whitespace-nowrap" href="#">
                    View Gallery
                </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
<div className="col-span-2 row-span-2 overflow-hidden bg-neutral-900 group">
<img alt="Cocktail preparation" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 row-span-1 overflow-hidden bg-neutral-900 group">
<img alt="Plated food" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 row-span-1 overflow-hidden bg-neutral-900 group">
<img alt="Restaurant table setting" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-2 row-span-1 overflow-hidden bg-neutral-900 group">
<img alt="Steak dish" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-block bg-transparent border border-neutral-700 text-neutral-50 uppercase tracking-widest text-xs px-8 py-4 font-normal hover:border-[#c5a059] hover:text-[#c5a059] transition-colors text-center w-full" href="#">
                    View Gallery
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#080808]">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<span className="text-[#c5a059] uppercase tracking-widest text-xs font-medium mb-4 block">Guest Experiences</span>
<h2 className="font-display text-3xl md:text-5xl tracking-tight font-normal mb-6">What Our Guests Say</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="bg-neutral-900/40 border border-neutral-800 p-8 md:p-12 flex flex-col justify-between">
<div>
<iconify-icon className="text-neutral-700 mb-6" icon="solar:quote-left-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="font-display text-lg md:text-xl italic text-neutral-200 leading-relaxed mb-8">
                            "Exceptional food, beautiful presentation, and one of the best dining atmospheres we’ve experienced. A true masterclass in culinary arts."
                        </p>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-[#c5a059] font-medium">— Sarah M.</p>
</div>
</div>

<div className="bg-neutral-900/40 border border-neutral-800 p-8 md:p-12 flex flex-col justify-between">
<div>
<iconify-icon className="text-neutral-700 mb-6" icon="solar:quote-left-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="font-display text-lg md:text-xl italic text-neutral-200 leading-relaxed mb-8">
                            "A perfect balance of premium dining and warm hospitality. Every course felt thoughtful and memorable. Will definitely return."
                        </p>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-[#c5a059] font-medium">— James L.</p>
</div>
</div>

<div className="bg-neutral-900/40 border border-neutral-800 p-8 md:p-12 flex flex-col justify-between">
<div>
<iconify-icon className="text-neutral-700 mb-6" icon="solar:quote-left-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="font-display text-lg md:text-xl italic text-neutral-200 leading-relaxed mb-8">
                            "An outstanding venue for celebrations — amazing service, incredible flavours, and a truly stylish setting. Worth every moment."
                        </p>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-[#c5a059] font-medium">— Elena R.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 md:py-40 flex items-center justify-center overflow-hidden" id="reservations">
<div className="absolute inset-0 z-0">
<img alt="Fire dining abstract" className="w-full h-full object-cover opacity-20 filter grayscale" src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/80 bg-gradient-to-b from-transparent to-neutral-950"></div>
</div>
<div className="relative z-10 text-center max-w-2xl px-6 mx-auto">
<h2 className="font-display text-4xl md:text-6xl tracking-tighter font-normal mb-6 text-neutral-50">Ready to Join Us?</h2>
<p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed mb-10">
                Reserve your table today and enjoy an elevated dining experience where flavour, service, and atmosphere come together beautifully.
            </p>
<a className="inline-block bg-gold-accent text-neutral-950 uppercase tracking-widest text-xs px-10 py-5 font-medium hover-bg-gold-accent transition-colors" href="#">
                Make a Reservation
            </a>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-neutral-900">
<div className="max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-[#c5a059] mb-6" icon="solar:letter-linear" strokeWidth="1.5" width="36"></iconify-icon>
<h2 className="font-display text-3xl md:text-4xl tracking-tight font-normal mb-4">Stay in Touch</h2>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
                Be the first to hear about exclusive events, special menus, seasonal launches, and member-only offers. Join our mailing list and stay connected with everything happening at the restaurant.
            </p>
<form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
<input className="flex-1 bg-transparent border border-neutral-800 text-sm text-white px-6 py-4 focus:outline-none focus:border-[#c5a059] transition-colors placeholder:text-neutral-600 font-light" placeholder="Email Address" required="" type="email"/>
<button className="bg-neutral-100 text-neutral-950 uppercase tracking-widest text-xs px-8 py-4 font-normal hover:bg-[#c5a059] hover:text-neutral-950 transition-colors whitespace-nowrap" type="submit">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-neutral-950 border-t border-neutral-900 pt-20 pb-10">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div>
<h4 className="text-xs uppercase tracking-widest text-neutral-200 font-medium mb-6">Contact</h4>
<ul className="space-y-3 text-sm text-neutral-400 font-light">
<li>+61 2 9999 7022</li>
<li>1 Temperance Lane, Sydney NSW 2000</li>
<li><i className="text-neutral-500">Access via George Street Mall</i></li>
<li><a className="hover:text-[#c5a059] transition-colors" href="mailto:info@ignisrestaurant.com.au">info@ignisrestaurant.com.au</a></li>
</ul>
<a className="inline-block mt-6 text-xs uppercase tracking-widest text-[#c5a059] hover:text-white transition-colors border-b border-[#c5a059]/30 pb-1" href="#reservations">
                        Make a Reservation
                    </a>
</div>

<div>
<h4 className="text-xs uppercase tracking-widest text-neutral-200 font-medium mb-6">Opening Hours</h4>
<ul className="space-y-3 text-sm text-neutral-400 font-light">
<li className="flex justify-between w-48"><span>Monday:</span> <span>5pm – 11pm</span></li>
<li className="flex justify-between w-48"><span>Tuesday:</span> <span>12pm – 11pm</span></li>
<li className="flex justify-between w-48"><span>Wednesday:</span> <span>12pm – 11pm</span></li>
<li className="flex justify-between w-48"><span>Thursday:</span> <span>12pm – 12am</span></li>
<li className="flex justify-between w-48"><span>Friday:</span> <span>12pm – 12am</span></li>
<li className="flex justify-between w-48"><span>Saturday:</span> <span>12pm – 12am</span></li>
<li className="flex justify-between w-48"><span>Sunday:</span> <span>12pm – 11pm</span></li>
</ul>
</div>

<div>
<h4 className="text-xs uppercase tracking-widest text-neutral-200 font-medium mb-6">Explore</h4>
<ul className="space-y-3 text-sm text-neutral-400 font-light">
<li><a className="hover:text-[#c5a059] transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-[#c5a059] transition-colors" href="#menu">Menu</a></li>
<li><a className="hover:text-[#c5a059] transition-colors" href="#whats-on">What’s On</a></li>
<li><a className="hover:text-[#c5a059] transition-colors" href="#private-dining">Private Dining</a></li>
<li><a className="hover:text-[#c5a059] transition-colors" href="#gallery">Gallery</a></li>
<li><a className="hover:text-[#c5a059] transition-colors" href="#reservations">Reservations</a></li>
<li><a className="hover:text-[#c5a059] transition-colors" href="#">Vouchers</a></li>
<li><a className="hover:text-[#c5a059] transition-colors" href="#">Work With Us</a></li>
<li><a className="hover:text-[#c5a059] transition-colors" href="#contact">Contact</a></li>
</ul>
</div>

<div>
<a className="font-display text-2xl tracking-[0.2em] uppercase font-normal text-white inline-block mb-6" href="#">
                        I G N I S
                    </a>
<p className="text-sm text-neutral-500 font-light leading-relaxed mb-6 max-w-xs">
                        Celebrated for flavour, atmosphere, and unforgettable dining experiences.
                    </p>
<div className="flex items-center gap-4 text-neutral-400">
<a aria-label="Instagram" className="hover:text-[#c5a059] transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<a aria-label="Facebook" className="hover:text-[#c5a059] transition-colors" href="#">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<a aria-label="TikTok" className="hover:text-[#c5a059] transition-colors" href="#">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600 font-light">
<p>© 2024 IGNIS Restaurant. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Terms of Use</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
