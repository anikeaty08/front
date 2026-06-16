import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
dark: '#1c1c1c', // Charcoal
gold: '#C5A059', // Muted Gold
beige: '#F5F2EB', // Warm Beige
gray: '#888888', // Muted Gray
}
},
fontFamily: {
serif: ['Playfair Display', 'serif'],
sans: ['Plus Jakarta Sans', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm');
                navbar.classList.add('bg-white/90');
                navbar.classList.remove('py-2');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.remove('bg-white/90');
                navbar.classList.add('py-2');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-300 glass-panel" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="font-serif text-xl tracking-tight font-medium uppercase z-50 relative" href="#">
                    Artspace<span className="text-brand-gold">Haven</span>
</a>

<div className="hidden md:flex space-x-10 items-center">
<a className="text-sm font-medium text-gray-600 hover:text-brand-dark transition-colors" href="#about">Studio</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-dark transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-dark transition-colors" href="#projects">Projects</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-dark transition-colors" href="#process">Process</a>
<a className="px-6 py-2.5 bg-brand-dark text-white text-xs font-medium tracking-wide uppercase rounded-full hover:bg-brand-gold transition-colors duration-300" href="#contact">
                        Book Consultation
                    </a>
</div>

<button className="md:hidden z-50 text-brand-dark focus:outline-none" onclick="document.getElementById('mobile-menu').classList.toggle('translate-x-full')">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-white transform translate-x-full transition-transform duration-500 ease-in-out flex flex-col justify-center items-center space-y-8 md:hidden" id="mobile-menu">
<a className="font-serif text-3xl text-brand-dark" href="#about" onclick="document.getElementById('mobile-menu').classList.toggle('translate-x-full')">Studio</a>
<a className="font-serif text-3xl text-brand-dark" href="#services" onclick="document.getElementById('mobile-menu').classList.toggle('translate-x-full')">Services</a>
<a className="font-serif text-3xl text-brand-dark" href="#projects" onclick="document.getElementById('mobile-menu').classList.toggle('translate-x-full')">Projects</a>
<a className="font-serif text-3xl text-brand-dark" href="#contact" onclick="document.getElementById('mobile-menu').classList.toggle('translate-x-full')">Contact</a>
</div>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Interior Vasai" className="w-full h-full object-cover object-center opacity-90" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-brand-beige"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6 fade-in-up">
<p className="text-white/90 text-sm tracking-[0.2em] uppercase mb-6 font-medium">Vasai's Premier Design Studio</p>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-tight mb-8">
                Designing Spaces <br/>
<span className="italic font-light">That Inspire Living</span>
</h1>
<div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
<a className="glass-panel text-brand-dark px-10 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-white transition-all duration-300" href="#contact">
                    Book Free Consultation
                </a>
<a className="border border-white/30 text-white px-10 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-white/10 transition-all duration-300" href="#projects">
                    View Our Projects
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
<iconify-icon icon="solar:mouse-minimalistic-linear" width="32"></iconify-icon>
</div>
</header>

<section className="py-24 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto" id="about">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden">
<img alt="Founder Artspace Haven" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute -bottom-10 -right-6 md:-right-10 glass-panel bg-white/90 p-6 rounded-xl shadow-lg max-w-xs">
<p className="font-serif text-2xl text-brand-dark mb-1">10+ Years</p>
<p className="text-xs text-gray-500 uppercase tracking-wide">Of Design Excellence in Mumbai &amp; Vasai</p>
</div>
</div>
<div className="md:pl-10">
<h2 className="font-serif text-4xl md:text-5xl text-brand-dark tracking-tight mb-8 leading-snug">
                    Where Art Meets <br/><span className="text-brand-gold italic">Functionality</span>
</h2>
<p className="text-brand-gray text-lg leading-relaxed mb-6 font-light">
                    At Artspace Haven, we believe that luxury lies in the details. Based in the heart of Vasai, we curate bespoke interiors for discerning clients who value elegance, craftsmanship, and timeless design.
                </p>
<p className="text-brand-gray text-lg leading-relaxed mb-10 font-light">
                    Whether it's a sea-facing apartment or a commercial villa, our approach creates a harmonious balance between sophisticated aesthetics and everyday comfort.
                </p>
<div className="grid grid-cols-2 gap-8 mb-10">
<div>
<iconify-icon className="text-brand-gold mb-3 text-3xl" icon="solar:ruler-pen-linear"></iconify-icon>
<h4 className="font-serif text-lg mb-1">Tailored Designs</h4>
<p className="text-sm text-gray-500">Customized to your lifestyle.</p>
</div>
<div>
<iconify-icon className="text-brand-gold mb-3 text-3xl" icon="solar:verified-check-linear"></iconify-icon>
<h4 className="font-serif text-lg mb-1">Premium Finish</h4>
<p className="text-sm text-gray-500">Only the finest materials.</p>
</div>
</div>
<a className="inline-flex items-center text-brand-dark font-medium border-b border-brand-dark pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors" href="#services">
                    Explore Our Services
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-3 block">Our Expertise</span>
<h2 className="font-serif text-4xl md:text-5xl text-brand-dark tracking-tight">Curated Design Services</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-10 bg-brand-beige rounded-2xl hover:bg-brand-dark hover:text-white transition-all duration-500 cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:sofa-2-linear" width="120"></iconify-icon>
</div>
<iconify-icon className="text-brand-dark group-hover:text-brand-gold mb-8 transition-colors" icon="solar:sofa-linear" width="40"></iconify-icon>
<h3 className="font-serif text-2xl mb-4">Residential Interior</h3>
<p className="text-sm leading-relaxed opacity-70 mb-8 font-light">
                        Complete home transformations for flats, villas, and bungalows. From concept to handover.
                    </p>
<div className="border-t border-current opacity-20 my-6"></div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium">₹2,50,000 onwards</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>

<div className="group p-10 bg-brand-beige rounded-2xl hover:bg-brand-dark hover:text-white transition-all duration-500 cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:chef-hat-heart-linear" width="120"></iconify-icon>
</div>
<iconify-icon className="text-brand-dark group-hover:text-brand-gold mb-8 transition-colors" icon="solar:fridge-linear" width="40"></iconify-icon>
<h3 className="font-serif text-2xl mb-4">Modular Kitchens</h3>
<p className="text-sm leading-relaxed opacity-70 mb-8 font-light">
                        Ergonomic, high-end modular kitchens designed for Indian cooking with European aesthetics.
                    </p>
<div className="border-t border-current opacity-20 my-6"></div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium">₹1,50,000 onwards</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>

<div className="group p-10 bg-brand-beige rounded-2xl hover:bg-brand-dark hover:text-white transition-all duration-500 cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:buildings-2-linear" width="120"></iconify-icon>
</div>
<iconify-icon className="text-brand-dark group-hover:text-brand-gold mb-8 transition-colors" icon="solar:city-linear" width="40"></iconify-icon>
<h3 className="font-serif text-2xl mb-4">Commercial Spaces</h3>
<p className="text-sm leading-relaxed opacity-70 mb-8 font-light">
                        Offices, retail stores, and showrooms designed to enhance brand value and productivity.
                    </p>
<div className="border-t border-current opacity-20 my-6"></div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium">₹3,75,000 onwards</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto" id="projects">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-3 block">Portfolio</span>
<h2 className="font-serif text-4xl md:text-5xl text-brand-dark tracking-tight">Featured Projects</h2>
</div>
<div className="flex gap-4 mt-6 md:mt-0">
<button className="px-5 py-2 rounded-full border border-brand-dark text-brand-dark text-xs font-medium uppercase hover:bg-brand-dark hover:text-white transition-colors">All</button>
<button className="px-5 py-2 rounded-full border border-gray-200 text-gray-500 text-xs font-medium uppercase hover:border-brand-dark hover:text-brand-dark transition-colors">Residential</button>
<button className="px-5 py-2 rounded-full border border-gray-200 text-gray-500 text-xs font-medium uppercase hover:border-brand-dark hover:text-brand-dark transition-colors">Commercial</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6">
<img alt="The Luxe Apartment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2568&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
<p className="text-xs uppercase tracking-widest mb-1">Vasai West</p>
<p className="font-serif text-xl">The Orchid Villa</p>
</div>
</div>
<div className="flex justify-between items-center">
<div>
<h3 className="font-serif text-xl text-brand-dark">The Orchid Villa</h3>
<p className="text-sm text-gray-500 font-light">Residential Renovation</p>
</div>
<p className="text-sm font-medium text-brand-dark">₹25L Budget</p>
</div>
</div>

<div className="group cursor-pointer lg:mt-16">
<div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6">
<img alt="Modern Minimalist Flat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
<p className="text-xs uppercase tracking-widest mb-1">Evershine City</p>
<p className="font-serif text-xl">Minimalist Haven</p>
</div>
</div>
<div className="flex justify-between items-center">
<div>
<h3 className="font-serif text-xl text-brand-dark">Minimalist Haven</h3>
<p className="text-sm text-gray-500 font-light">3BHK Apartment</p>
</div>
<p className="text-sm font-medium text-brand-dark">₹18L Budget</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6">
<img alt="Kitchen Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
<p className="text-xs uppercase tracking-widest mb-1">Sun City</p>
<p className="font-serif text-xl">Azure Kitchen</p>
</div>
</div>
<div className="flex justify-between items-center">
<div>
<h3 className="font-serif text-xl text-brand-dark">Azure Kitchen</h3>
<p className="text-sm text-gray-500 font-light">Modular Design</p>
</div>
<p className="text-sm font-medium text-brand-dark">₹4.5L Budget</p>
</div>
</div>
</div>
</section>

<section className="bg-brand-dark text-brand-beige py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-8">Why Vasai Chooses <br/><span className="text-brand-gold">Artspace Haven</span></h2>
<p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                        We bridge the gap between high-end international design trends and practical Indian home requirements. Our transparent pricing and committed timelines set us apart.
                    </p>
<ul className="space-y-6">
<li className="flex items-center space-x-4">
<div className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-light">Guaranteed 45-Day Delivery for Kitchens</span>
</li>
<li className="flex items-center space-x-4">
<div className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-light">Transparent Pricing - No Hidden Costs</span>
</li>
<li className="flex items-center space-x-4">
<div className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
<iconify-icon icon="solar:pallete-2-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-light">3D Visualization Before Execution</span>
</li>
</ul>
</div>

<div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col justify-center items-center">
<div className="grid grid-cols-2 gap-8 text-center">
<div>
<span className="block text-4xl font-serif text-white mb-1">150+</span>
<span className="text-xs uppercase tracking-widest text-white/70">Projects</span>
</div>
<div>
<span className="block text-4xl font-serif text-white mb-1">100%</span>
<span className="text-xs uppercase tracking-widest text-white/70">Satisfaction</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<h2 className="font-serif text-3xl md:text-4xl text-center mb-16 tracking-tight">Client Stories</h2>
<div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory">

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-2xl border border-stone-100 shadow-sm snap-center">
<div className="flex gap-1 text-brand-gold mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-brand-gray italic mb-6 font-light">"Artspace transformed our 3BHK in Vasai. The team was professional, and the modular kitchen they designed is both beautiful and super functional."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center font-serif">R</div>
<div>
<p className="font-medium text-sm">Rajesh Shetty</p>
<p className="text-xs text-gray-400">Vasai East</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-2xl border border-stone-100 shadow-sm snap-center">
<div className="flex gap-1 text-brand-gold mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-brand-gray italic mb-6 font-light">"I wanted a minimalist office space. They understood the assignment perfectly. The finish and material quality are top-notch."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center font-serif">A</div>
<div>
<p className="font-medium text-sm">Amit Deshmukh</p>
<p className="text-xs text-gray-400">Commercial Complex</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-2xl border border-stone-100 shadow-sm snap-center">
<div className="flex gap-1 text-brand-gold mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-brand-gray italic mb-6 font-light">"Absolutely delighted with our living room renovation. The lighting concepts they suggested completely changed the vibe of our home."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center font-serif">P</div>
<div>
<p className="font-medium text-sm">Priya Gonsalves</p>
<p className="text-xs text-gray-400">Vasai West</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="font-serif text-3xl md:text-4xl mb-12 tracking-tight">Design Insights</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<article className="cursor-pointer group">
<div className="overflow-hidden rounded-lg mb-4 aspect-[3/2]">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&amp;w=2516&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-brand-gold font-bold uppercase tracking-wide">Interior Trends</span>
<h3 className="font-serif text-xl mt-2 mb-2 group-hover:text-brand-gold transition-colors">Minimalism in 2024</h3>
<p className="text-sm text-gray-500 font-light line-clamp-2">How to achieve the perfect balance of empty space and functionality in Indian homes.</p>
</article>
<article className="cursor-pointer group">
<div className="overflow-hidden rounded-lg mb-4 aspect-[3/2]">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<span className="text-xs text-brand-gold font-bold uppercase tracking-wide">Kitchen Tips</span>
<h3 className="font-serif text-xl mt-2 mb-2 group-hover:text-brand-gold transition-colors">Modular Kitchen Myths</h3>
<p className="text-sm text-gray-500 font-light line-clamp-2">Debunking common misconceptions about maintenance and durability.</p>
</article>
<article className="cursor-pointer group">
<div className="overflow-hidden rounded-lg mb-4 aspect-[3/2]">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<span className="text-xs text-brand-gold font-bold uppercase tracking-wide">Budget Design</span>
<h3 className="font-serif text-xl mt-2 mb-2 group-hover:text-brand-gold transition-colors">Luxury on a Budget</h3>
<p className="text-sm text-gray-500 font-light line-clamp-2">Smart material choices that look premium without breaking the bank.</p>
</article>
</div>
</div>
</section>

<section className="bg-brand-beige py-24 md:py-32" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

<div className="p-10 md:p-16">
<h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-2">Let's Create Your Dream Space</h2>
<p className="text-gray-500 mb-8 font-light">Fill out the form below to schedule your free initial consultation.</p>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-wide text-gray-400">Name</label>
<input className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-dark bg-transparent transition-colors text-brand-dark placeholder-gray-300" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-wide text-gray-400">Phone</label>
<input className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-dark bg-transparent transition-colors text-brand-dark placeholder-gray-300" placeholder="+91 98765 43210" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-wide text-gray-400">Email</label>
<input className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-dark bg-transparent transition-colors text-brand-dark placeholder-gray-300" placeholder="john@example.com" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-wide text-gray-400">Project Type</label>
<div className="relative">
<select className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-dark bg-transparent appearance-none text-brand-dark">
<option>Residential Interior</option>
<option>Modular Kitchen</option>
<option>Commercial Space</option>
<option>Renovation</option>
</select>
<iconify-icon className="absolute right-0 top-3 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-wide text-gray-400">Budget (INR)</label>
<div className="relative">
<select className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-dark bg-transparent appearance-none text-brand-dark">
<option>₹5L - ₹10L</option>
<option>₹10L - ₹20L</option>
<option>₹20L - ₹50L</option>
<option>₹50L+</option>
</select>
<iconify-icon className="absolute right-0 top-3 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-wide text-gray-400">Message</label>
<textarea className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-dark bg-transparent transition-colors text-brand-dark placeholder-gray-300" placeholder="Tell us about your vision..." rows="3"></textarea>
</div>
<button className="mt-4 px-8 py-3 bg-brand-dark text-white text-sm font-medium tracking-wide uppercase rounded-full hover:bg-brand-gold transition-colors duration-300 w-full md:w-auto" type="button">
                            Send Request
                        </button>
</form>
</div>

<div className="bg-stone-900 text-white p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 opacity-20">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&amp;w=2532&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10">
<h3 className="font-serif text-2xl mb-8">Visit Our Studio</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-brand-gold text-xl mt-1" icon="solar:map-point-linear"></iconify-icon>
<p className="text-sm font-light text-white/80 leading-relaxed">
                                    Artspace Haven Studio,<br/>
                                    101, Platinum Heights, <br/>
                                    Vasai West, Maharashtra 401202
                                </p>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-brand-gold text-xl" icon="solar:phone-calling-linear"></iconify-icon>
<p className="text-sm font-light text-white/80">+91 98200 12345</p>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-brand-gold text-xl" icon="solar:letter-linear"></iconify-icon>
<p className="text-sm font-light text-white/80">hello@artspacehaven.in</p>
</div>
</div>
</div>

<div className="relative z-10 mt-10 w-full h-48 bg-stone-800 rounded-xl overflow-hidden flex items-center justify-center border border-white/10">
<span className="text-xs uppercase tracking-widest text-white/50">Google Map Integration</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-950 text-white/60 pt-20 pb-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="font-serif text-2xl text-white tracking-tight block mb-6" href="#">Artspace<span className="text-brand-gold">Haven</span></a>
<p className="text-xs font-light leading-relaxed mb-6">
                        Crafting luxurious, functional, and timeless interiors for the modern Indian home. Based in Vasai.
                    </p>
<div className="flex gap-4">
<a className="text-white hover:text-brand-gold transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-white hover:text-brand-gold transition-colors" href="#"><iconify-icon icon="brandico:facebook-rect" width="18"></iconify-icon></a> 
<a className="text-white hover:text-brand-gold transition-colors" href="#"><iconify-icon icon="solar:plain-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white text-sm font-medium uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-brand-gold transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#careers">Careers</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#blog">Blog</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium uppercase tracking-widest mb-6">Services</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-brand-gold transition-colors" href="#">Residential Design</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Commercial Space</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Modular Kitchens</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">3D Visualization</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium uppercase tracking-widest mb-6">Newsletter</h4>
<p className="text-xs font-light mb-4">Subscribe for design trends and offers.</p>
<div className="flex border-b border-white/20 pb-2">
<input className="bg-transparent w-full text-sm outline-none text-white placeholder-white/40" placeholder="Email Address" type="email"/>
<button className="text-brand-gold font-medium text-xs uppercase hover:text-white transition-colors">Join</button>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light">
<p>© 2024 Artspace Haven. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1" href="https://wa.me/919820012345">
<iconify-icon icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
</a>



    </>
  );
}
