import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-[#1C1917]/95', 'backdrop-blur-md', 'shadow-lg');
            } else {
                navbar.classList.remove('bg-[#1C1917]/95', 'backdrop-blur-md', 'shadow-lg');
            }
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            observer.observe(element);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full top-0 z-50 transition-all duration-300 py-4 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

<a className="text-2xl md:text-3xl font-serif text-white tracking-tight hover:opacity-80 transition-opacity" href="#">
                SPENCER HAIR
            </a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-200 hover:text-[#C5A065] transition-colors tracking-wide uppercase" href="#about">About</a>
<a className="text-sm font-medium text-stone-200 hover:text-[#C5A065] transition-colors tracking-wide uppercase" href="#services">Services</a>
<a className="text-sm font-medium text-stone-200 hover:text-[#C5A065] transition-colors tracking-wide uppercase" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-stone-200 hover:text-[#C5A065] transition-colors tracking-wide uppercase" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-[#C5A065] text-white text-sm font-medium tracking-wide hover:bg-[#B08955] transition-all duration-300 shadow-lg" href="https://wa.me/233530406864" target="_blank">
<span>Book Now</span>
<iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
</a>

<button aria-label="Menu" className="md:hidden text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">

<img alt="Spencer Hair Salon" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1C1917]/90 via-[#1C1917]/60 to-[#C5A065]/20"></div>

<div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-2xl reveal-on-scroll">
<p className="text-[#C5A065] text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-semibold">Accra's Premier Beauty Destination</p>
<h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-6 tracking-tight">
                    Your Style, <br/> <span className="italic text-[#C5A065]">Perfected.</span>
</h1>
<p className="text-stone-200 text-base md:text-lg font-light leading-relaxed mb-10 max-w-lg">
                    Experience world-class hair styling and beauty services in the heart of Accra. At Spencer Hair, we reveal the most confident version of you.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 px-8 py-3 bg-[#C5A065] text-white text-sm tracking-wide font-medium hover:scale-105 transition-transform duration-300" href="https://wa.me/233530406864">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                        Book Appointment
                    </a>
<a className="inline-flex justify-center items-center gap-2 px-8 py-3 border border-white/30 text-white backdrop-blur-sm text-sm tracking-wide font-medium hover:bg-white hover:text-[#1C1917] transition-all duration-300" href="https://instagram.com" target="_blank">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
                        View Instagram
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</section>

<section className="py-24 bg-[#FDFBF7] overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative reveal-on-scroll order-2 lg:order-1">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-[#C5A065]/10 z-0"></div>
<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#1C1917]/5 z-0"></div>
<img alt="Spencer Hair Team" className="relative z-10 w-full h-[500px] object-cover shadow-2xl transition-all duration-700" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-8 left-8 md:right-8 md:left-auto max-w-xs p-6 bg-white shadow-xl z-20 border-l-4 border-[#C5A065]">
<p className="font-serif italic text-stone-800 text-lg">"Beauty is power, and a great hairstyle is its sword."</p>
</div>
</div>

<div className="reveal-on-scroll reveal-delay-200 order-1 lg:order-2">
<h2 className="text-[#C5A065] text-xs font-semibold tracking-[0.2em] uppercase mb-3">About Us</h2>
<h3 className="text-3xl md:text-4xl font-serif text-[#1C1917] mb-6 tracking-tight">The Spencer Standard</h3>
<p className="text-stone-600 font-light leading-relaxed mb-6">
                        Located at 49 Blohum Road, Accra, Spencer Hair was founded on a simple mission: to provide a luxurious, personalized beauty experience that celebrates diversity and style.
                    </p>
<p className="text-stone-600 font-light leading-relaxed mb-8">
                        Our team of expert stylists specializes in all hair types, offering cutting-edge techniques in coloring, cutting, and styling. We believe every client deserves to walk out feeling empowered and beautiful. Whether you need a transformative cut or a subtle refresh, Spencer Hair is your sanctuary.
                    </p>
<div className="flex items-center gap-4">
<div>
<p className="font-serif text-[#1C1917] text-lg">Lead Stylist</p>
<p className="text-xs text-[#C5A065] uppercase tracking-wide">Spencer Hair, Accra</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1C1917] text-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-[#C5A065] text-xs font-semibold tracking-[0.2em] uppercase">Our Menu</span>
<h2 className="text-3xl md:text-4xl font-serif mt-3 tracking-tight">Signature Services</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#C5A065] transition-all duration-500 reveal-on-scroll">
<div className="w-12 h-12 mb-6 text-[#C5A065] group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-5xl" icon="solar:scissors-linear"></iconify-icon>
</div>
<div className="flex justify-between items-end mb-3">
<h3 className="text-xl font-serif group-hover:text-white transition-colors">Haircuts &amp; Styling</h3>
<span className="text-xs opacity-60 group-hover:text-white">from GH₵ 150</span>
</div>
<p className="text-sm font-light text-stone-400 group-hover:text-white/90 leading-relaxed">
                        Precision cuts, wash &amp; blow dry, and custom styling tailored to your face shape.
                    </p>
</div>

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#C5A065] transition-all duration-500 reveal-on-scroll reveal-delay-100">
<div className="w-12 h-12 mb-6 text-[#C5A065] group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-5xl" icon="solar:star-shine-linear"></iconify-icon>
</div>
<div className="flex justify-between items-end mb-3">
<h3 className="text-xl font-serif group-hover:text-white transition-colors">Color &amp; Highlights</h3>
<span className="text-xs opacity-60 group-hover:text-white">from GH₵ 300</span>
</div>
<p className="text-sm font-light text-stone-400 group-hover:text-white/90 leading-relaxed">
                        Full color, balayage, ombre, and root touch-ups using premium products.
                    </p>
</div>

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#C5A065] transition-all duration-500 reveal-on-scroll reveal-delay-200">
<div className="w-12 h-12 mb-6 text-[#C5A065] group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-5xl" icon="solar:heart-linear"></iconify-icon>
</div>
<div className="flex justify-between items-end mb-3">
<h3 className="text-xl font-serif group-hover:text-white transition-colors">Bridal &amp; Events</h3>
<span className="text-xs opacity-60 group-hover:text-white">Custom Packages</span>
</div>
<p className="text-sm font-light text-stone-400 group-hover:text-white/90 leading-relaxed">
                        Exquisite bridal hair styling and party looks to make your special day unforgettable.
                    </p>
</div>

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#C5A065] transition-all duration-500 reveal-on-scroll">
<div className="w-12 h-12 mb-6 text-[#C5A065] group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-5xl" icon="solar:cosmetic-linear"></iconify-icon>
</div>
<div className="flex justify-between items-end mb-3">
<h3 className="text-xl font-serif group-hover:text-white transition-colors">Makeup Artistry</h3>
<span className="text-xs opacity-60 group-hover:text-white">from GH₵ 250</span>
</div>
<p className="text-sm font-light text-stone-400 group-hover:text-white/90 leading-relaxed">
                        Professional makeup for weddings, photoshoots, and evening events.
                    </p>
</div>

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#C5A065] transition-all duration-500 reveal-on-scroll reveal-delay-100">
<div className="w-12 h-12 mb-6 text-[#C5A065] group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-5xl" icon="solar:layers-linear"></iconify-icon>
</div>
<div className="flex justify-between items-end mb-3">
<h3 className="text-xl font-serif group-hover:text-white transition-colors">Extensions &amp; Wigs</h3>
<span className="text-xs opacity-60 group-hover:text-white">Consultation</span>
</div>
<p className="text-sm font-light text-stone-400 group-hover:text-white/90 leading-relaxed">
                        Expert installation of weaves, wigs, and tape-ins for volume and length.
                    </p>
</div>

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#C5A065] transition-all duration-500 reveal-on-scroll reveal-delay-200">
<div className="w-12 h-12 mb-6 text-[#C5A065] group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-5xl" icon="solar:user-hand-up-linear"></iconify-icon>
</div>
<div className="flex justify-between items-end mb-3">
<h3 className="text-xl font-serif group-hover:text-white transition-colors">Treatments</h3>
<span className="text-xs opacity-60 group-hover:text-white">from GH₵ 200</span>
</div>
<p className="text-sm font-light text-stone-400 group-hover:text-white/90 leading-relaxed">
                        Deep conditioning, keratin treatments, and scalp care for healthy, shiny hair.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFBF7]" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-on-scroll">
<div>
<span className="text-[#C5A065] text-xs font-semibold tracking-[0.2em] uppercase">Portfolio</span>
<h2 className="text-3xl md:text-4xl font-serif mt-3 text-[#1C1917] tracking-tight">Our Recent Work</h2>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[#1C1917] border-b border-[#C5A065] pb-1 hover:text-[#C5A065] transition-colors" href="https://instagram.com" target="_blank">
                    Follow on Instagram <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll">
<img alt="Hair Styling" className="w-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-sm" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=1978&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1C1917]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">Elegant Styling</p>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll reveal-delay-100">
<img alt="Braids" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110 rounded-sm" src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&amp;w=2002&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1C1917]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">Braids &amp; Twists</p>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll">
<img alt="Makeup" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 rounded-sm" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1C1917]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">Glam Makeup</p>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll reveal-delay-200">
<img alt="Color" className="w-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-sm" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1C1917]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">Color Transformations</p>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll">
<img alt="Salon Interior" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110 rounded-sm" src="https://images.unsplash.com/photo-1605980776566-0486c3ac7617?q=80&amp;w=2059&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1C1917]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">Relaxing Ambiance</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#FDFBF7] to-[#F5F5F4]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-serif text-[#1C1917] tracking-tight">Client Love</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll border border-stone-100">
<div className="flex text-[#C5A065] mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 font-light italic mb-6">"Spencer Hair is the best in Accra! The team is so professional and they really understand natural hair. I left feeling like a superstar."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg"/>
</div>
<div>
<p className="font-medium text-[#1C1917] text-sm">Ama K.</p>
<p className="text-xs text-stone-400">Accra, Ghana</p>
</div>
</div>
</div>

<div className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll reveal-delay-100 border border-stone-100">
<div className="flex text-[#C5A065] mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 font-light italic mb-6">"Got my bridal hair and makeup done here. Absolute perfection. They were punctual and the results lasted all night."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/12.jpg"/>
</div>
<div>
<p className="font-medium text-[#1C1917] text-sm">Jessica B.</p>
<p className="text-xs text-stone-400">Bride</p>
</div>
</div>
</div>

<div className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll reveal-delay-200 border border-stone-100">
<div className="flex text-[#C5A065] mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 font-light italic mb-6">"The ambiance is beautiful and relaxing. A true 5-star experience right here in Blohum Road. Highly recommended."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/68.jpg"/>
</div>
<div>
<p className="font-medium text-[#1C1917] text-sm">Efya D.</p>
<p className="text-xs text-stone-400">Regular Client</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-[#C5A065] text-xs font-semibold tracking-[0.2em] uppercase">Visit Us</span>
<h2 className="text-3xl md:text-4xl font-serif mt-3 text-[#1C1917] tracking-tight">Contact &amp; Booking</h2>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<div className="flex flex-col space-y-8 reveal-on-scroll">
<div className="p-8 bg-[#FDFBF7] border border-stone-100">
<h3 className="text-xl font-serif text-[#1C1917] mb-6">Salon Information</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="text-[#C5A065] mt-1">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-[#1C1917]">Address</p>
<p className="text-stone-500 font-light text-sm">49 Blohum Road, Accra, Ghana</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="text-[#C5A065] mt-1">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-[#1C1917]">Phone &amp; WhatsApp</p>
<a className="text-stone-500 font-light text-sm hover:text-[#C5A065] block" href="tel:+233530406864">+233 530 406 864</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="text-[#C5A065] mt-1">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-[#1C1917]">Opening Hours</p>
<p className="text-stone-500 font-light text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
<p className="text-stone-500 font-light text-sm">Sun: 12:00 PM - 6:00 PM</p>
</div>
</div>
</div>
<div className="mt-8 flex gap-4">
<a className="flex-1 py-3 bg-[#25D366] text-white text-sm font-medium text-center hover:brightness-110 transition-all flex items-center justify-center gap-2" href="https://wa.me/233530406864">
<iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon> WhatsApp
                            </a>
<a className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium text-center hover:brightness-110 transition-all flex items-center justify-center gap-2" href="https://instagram.com">
<iconify-icon icon="solar:camera-linear"></iconify-icon> Instagram
                            </a>
</div>
</div>
</div>

<div className="h-[400px] lg:h-auto bg-stone-200 relative w-full border border-stone-200 reveal-on-scroll reveal-delay-200">

<iframe allowfullscreen="" className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 transition-all duration-500" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.686523910609!2d-0.2078519241460505!3d5.612853233077797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b7777777777%3A0x7777777777777777!2sBlohum%20Rd%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-4 left-4 bg-white p-3 shadow-lg max-w-xs hidden sm:block">
<p className="text-xs font-bold text-[#1C1917]">Spencer Hair</p>
<p className="text-[10px] text-stone-500">49 Blohum Road, Accra</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1C1917] text-stone-400 py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 md:col-span-1">
<a className="text-2xl font-serif text-white tracking-tight block mb-6" href="#">SPENCER HAIR</a>
<p className="text-sm font-light leading-relaxed mb-6">
                        Accra's destination for luxury hair and beauty. We bring out the best in you.
                    </p>
</div>

<div>
<h4 className="text-white font-medium uppercase text-xs tracking-widest mb-6">Menu</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-[#C5A065] transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-[#C5A065] transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-[#C5A065] transition-colors" href="#gallery">Gallery</a></li>
<li><a className="hover:text-[#C5A065] transition-colors" href="#contact">Book Now</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium uppercase text-xs tracking-widest mb-6">Services</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-[#C5A065] transition-colors" href="#">Bridal Styling</a></li>
<li><a className="hover:text-[#C5A065] transition-colors" href="#">Wigs &amp; Weaves</a></li>
<li><a className="hover:text-[#C5A065] transition-colors" href="#">Natural Hair Care</a></li>
<li><a className="hover:text-[#C5A065] transition-colors" href="#">Makeup</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium uppercase text-xs tracking-widest mb-6">Contact</h4>
<ul className="space-y-3 text-sm font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-[#C5A065]" icon="solar:phone-calling-linear"></iconify-icon> +233 530 406 864</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#C5A065]" icon="solar:map-point-linear"></iconify-icon> Accra, Ghana</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light">
<p>© 2023 Spencer Hair. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

<a aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group" href="https://wa.me/233530406864" target="_blank">
<iconify-icon className="text-2xl" icon="solar:chat-round-dots-linear"></iconify-icon>
<span className="absolute right-full mr-4 bg-white text-[#1C1917] px-3 py-1 rounded text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Chat on WhatsApp</span>
</a>



    </>
  );
}
