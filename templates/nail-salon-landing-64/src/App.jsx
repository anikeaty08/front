import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
nude: {
50: '#FFFCF9',
100: '#FDF6F3', // Main BG
200: '#F4EAE6', // Card BG
300: '#EAD2BB', // From source data
},
dark: {
800: '#2C2C2C', // Primary Text
900: '#1A1A1A', // Darker Text
},
brand: {
400: '#F37DAF', // From source hover state
500: '#E06C9F', // Primary Accent
600: '#D05A8E',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        // Intersection Observer for Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-element');
            elements.forEach(el => observer.observe(el));
        });

        // Navbar blur effect on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) { 
                nav.classList.add('shadow-sm'); 
                nav.classList.replace('bg-nude-100/80', 'bg-nude-100/90'); 
            } else { 
                nav.classList.remove('shadow-sm'); 
                nav.classList.replace('bg-nude-100/90', 'bg-nude-100/80'); 
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-nude-200 w-full border-dark-800/5 border-b pt-2 pr-6 pb-2 pl-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs tracking-wide uppercase font-medium opacity-70 gap-2 md:gap-0">
<span className="flex items-center gap-1">
<iconify-icon className="" icon="solar:clock-circle-linear"></iconify-icon> Mon - Sat: 9:30AM - 6PM
            </span>
<div className="flex flex-wrap justify-center gap-4 md:gap-6">
<a className="hover:text-brand-500 transition-colors flex items-center gap-1" href="tel:+447927785620">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> 07927 785 620
                </a>
<span className="flex items-center gap-1">
<iconify-icon className="" icon="solar:map-point-linear"></iconify-icon> Birmingham &amp; Shrewsbury
                </span>
</div>
</div>
</div>

<nav className="sticky transition-all duration-300 w-full z-50 border-transparent border-b pt-6 pr-6 pb-6 pl-6 top-0 backdrop-blur-sm" id="navbar">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="font-serif text-2xl font-medium tracking-tight">Dear Nail</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
<a className="hover:text-brand-500 transition-colors" href="#about">About</a>
<a className="hover:text-brand-500 transition-colors" href="#services">Services</a>
<a className="hover:text-brand-500 transition-colors" href="#locations">Locations</a>
<a className="hover:text-brand-500 transition-colors" href="#gallery">Gallery</a>
</div>
<a className="bg-dark-800 hover:bg-brand-500 text-white text-xs font-medium uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg shadow-brand-500/10" href="https://www.fresha.com/book-now/dear-nail-limited-h19wgr8p/all-offer?pId=717955" target="_blank">
                Book Now 
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="overflow-hidden pt-12 pr-6 pb-24 pl-6 relative">
<div className="text-center max-w-7xl mr-auto mb-16 ml-auto">
<h1 className="reveal-element font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight mb-6 in-view">
                Your nails deserve<br/>
                the best at <span className="italic font-light text-brand-500">Dear Nail.</span>
</h1>
<p className="reveal-element delay-100 max-w-md mx-auto text-base text-dark-800/70 mb-8 leading-relaxed in-view">
                Birmingham's premier destination for BIAB, custom nail art, and luxury care. Feeling passionate about every detail.
            </p>
<div className="reveal-element delay-200 in-view">
<a className="bg-brand-400/10 text-brand-600 border border-brand-400/20 px-8 py-3 rounded-full text-sm font-medium hover:bg-brand-400 hover:text-white transition-colors duration-300 flex items-center gap-2 mx-auto w-fit" href="#services">
                    Explore Services 
                    <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 max-w-5xl mr-auto ml-auto pr-4 pl-4 gap-x-6 gap-y-6">
<div className="reveal-element delay-100 group relative in-view">
<div className="aspect-[1/2] overflow-hidden rounded-t-[200px] rounded-b-[100px]">
<img alt="Natural BIAB Nails" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="reveal-element delay-200 group relative md:mt-12 in-view">
<div className="aspect-[1/2] overflow-hidden rounded-t-[200px] rounded-b-[100px]">
<img alt="Nail Art Design" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="reveal-element delay-300 group relative in-view">
<div className="aspect-[1/2] overflow-hidden rounded-t-[200px] rounded-b-[100px]">
<img alt="Luxury Pedicure" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</header>

<section className="pt-24 pr-6 pb-24 pl-6 relative">
<div className="absolute top-10 left-1/2 -translate-x-1/2 flex justify-center w-full opacity-10 pointer-events-none">
<iconify-icon className="text-brand-500" icon="solar:crown-star-linear" width="64"></iconify-icon>
</div>
<div className="text-center mb-16 reveal-element">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-2">Our Specialty</h2>
<p className="font-serif text-3xl md:text-4xl italic text-brand-500">The Dear Nail Standard</p>
</div>
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal-element delay-100 bg-white p-10 rounded-2xl text-center hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 cursor-pointer group border border-nude-300/30">
<div className="bg-nude-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform text-brand-500">
<iconify-icon icon="solar:magic-stick-3-linear" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium mb-2">BIAB / Builder Gel</h3>
<p className="text-xs uppercase tracking-widest text-dark-800/60">Strength &amp; Growth</p>
</div>

<div className="reveal-element delay-200 bg-white p-10 rounded-2xl text-center hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 cursor-pointer group border border-nude-300/30">
<div className="bg-nude-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform text-brand-500">
<iconify-icon icon="solar:palette-linear" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium mb-2">Custom Nail Art</h3>
<p className="text-xs uppercase tracking-widest text-dark-800/60">Freehand Design</p>
</div>

<div className="reveal-element delay-300 bg-white p-10 rounded-2xl text-center hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 cursor-pointer group border border-nude-300/30">
<div className="bg-nude-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform text-brand-500">
<iconify-icon icon="solar:sparkle-linear" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium mb-2">Extensions</h3>
<p className="text-xs uppercase tracking-widest text-dark-800/60">Acrylic &amp; Gel</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-nude-200/50" id="about">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 reveal-element">
<span className="text-xs uppercase tracking-widest opacity-60 mb-2 block">About Us</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-1">Two Locations.</h2>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight italic text-brand-500">One Passion.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
<div className="reveal-element delay-100 relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">

<img alt="Dear Nail Salon Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="reveal-element delay-200 space-y-6">
<p className="text-lg leading-relaxed text-dark-800/80">
                        From our humble beginnings,  has grown into a beloved destination for nail care in England. 2025 has been a year of abundance as we expanded from our original home in  to open our second salon in .
                    </p>
<p className="text-lg leading-relaxed text-dark-800/80">
                         Whether you're visiting us at Baldwins Lane or Castle Gates, our team is dedicated to perfecting every set, from classic French tips to intricate 3D art.
                    </p>
<div className="flex gap-4 pt-4">
<div className="flex items-center gap-2 text-sm font-medium">
<iconify-icon className="text-brand-500 text-xl" icon="solar:shop-linear"></iconify-icon>
<span>Birmingham</span>
</div>
<div className="flex items-center gap-2 text-sm font-medium">
<iconify-icon className="text-brand-500 text-xl" icon="solar:shop-2-linear"></iconify-icon>
<span>Shrewsbury</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="services">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-element">
<div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-2">Price List</h2>
<p className="font-serif text-4xl md:text-5xl italic text-brand-500">Treat yourself</p>
</div>
<div className="mt-4 md:mt-0 text-right">
<p className="text-xs max-w-[200px] ml-auto text-dark-800/60 mb-4">Prices may vary based on design complexity.</p>
<button className="bg-nude-200 hover:bg-nude-300 text-[10px] uppercase font-semibold tracking-wider px-4 py-2 rounded-lg transition-colors">
                        View Full Menu
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">

<div className="reveal-element delay-100">
<div className="flex items-center gap-2 mb-6 opacity-60 text-brand-600">
<iconify-icon icon="solar:hand-stars-linear" width="18"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium">Natural Nails &amp; BIAB</span>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-baseline border-b border-dark-800/10 pb-2">
<span className="text-lg font-serif">Gel Polish Manicure</span>
<span className="text-lg italic font-serif text-brand-500">£25</span>
</li>
<li className="flex justify-between items-baseline border-b border-dark-800/10 pb-2">
<span className="text-lg font-serif">BIAB Overlay (Plain)</span>
<span className="text-lg italic font-serif text-brand-500">£33</span>
</li>
<li className="flex justify-between items-baseline border-b border-dark-800/10 pb-2">
<span className="text-lg font-serif">BIAB with Gel Colour</span>
<span className="text-lg italic font-serif text-brand-500">£38</span>
</li>
<li className="flex justify-between items-baseline border-b border-dark-800/10 pb-2">
<span className="text-lg font-serif">Russian Manicure Prep</span>
<span className="text-lg italic font-serif text-brand-500">+£10</span>
</li>
</ul>
</div>

<div className="reveal-element delay-200">
<div className="flex items-center gap-2 mb-6 opacity-60 text-brand-600">
<iconify-icon icon="solar:stars-linear" width="18"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium">Enhancements</span>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-baseline border-b border-dark-800/10 pb-2">
<span className="text-lg font-serif">Acrylic Extensions</span>
<span className="text-lg italic font-serif text-brand-500">£35</span>
</li>
<li className="flex justify-between items-baseline border-b border-dark-800/10 pb-2">
<span className="text-lg font-serif">Hard Gel Extensions</span>
<span className="text-lg italic font-serif text-brand-500">£40</span>
</li>
<li className="flex justify-between items-baseline border-b border-dark-800/10 pb-2">
<span className="text-lg font-serif">Refill / Infill</span>
<span className="text-lg italic font-serif text-brand-500">from £30</span>
</li>
<li className="flex justify-between items-baseline border-b border-dark-800/10 pb-2">
<span className="text-lg font-serif">Removal &amp; New Set</span>
<span className="text-lg italic font-serif text-brand-500">+£10</span>
</li>
</ul>
</div>

<div className="md:col-span-2 reveal-element delay-300">
<div className="flex items-center gap-2 mb-6 opacity-60 mt-4 text-brand-600">
<iconify-icon icon="solar:pallete-2-linear" width="18"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium">Nail Art &amp; Pedicures</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
<div className="flex justify-between items-baseline border-b border-dark-800/10 pb-2">
<span className="text-lg font-serif">French Tips (All Nails)</span>
<span className="text-lg italic font-serif text-brand-500">+£5</span>
</div>
<div className="flex justify-between items-baseline border-b border-dark-800/10 pb-2">
<span className="text-lg font-serif">Simple Nail Art (Per Finger)</span>
<span className="text-lg italic font-serif text-brand-500">£3</span>
</div>
<div className="flex justify-between items-baseline border-b border-dark-800/10 pb-2">
<span className="text-lg font-serif">Luxury Gel Pedicure</span>
<span className="text-lg italic font-serif text-brand-500">£45</span>
</div>
<div className="flex justify-between items-baseline border-b border-dark-800/10 pb-2">
<span className="text-lg font-serif">Standard Pedicure</span>
<span className="text-lg italic font-serif text-brand-500">£35</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-nude-200/20" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-element">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight">Fresh from <span className="italic text-brand-500 block md:inline">the salon</span></h2>
<a className="inline-flex items-center gap-2 mt-4 text-xs font-semibold uppercase tracking-wider hover:text-brand-500 transition-colors" href="https://www.instagram.com/dearnail_uk" target="_blank">
<iconify-icon icon="solar:camera-linear" width="16"></iconify-icon> Follow us @dearnail_uk
                </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="reveal-element delay-100 aspect-square rounded-xl overflow-hidden group">
<img alt="Nail Design" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="reveal-element delay-200 aspect-square rounded-xl overflow-hidden group">
<img alt="Woman laughing with beautiful nails" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1634458925526-9f06c10b42c4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="reveal-element delay-300 aspect-square rounded-xl overflow-hidden group">
<img alt="Nail Design" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1522337360705-8763d84a783a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="reveal-element delay-100 aspect-square rounded-xl overflow-hidden group">
<img alt="Nail Design" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1629215082531-97b7b1349a21?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="locations">
<div className="max-w-4xl mx-auto text-center mb-12 reveal-element">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-2">Visit Us</h2>
<p className="font-serif text-4xl md:text-5xl italic text-brand-500">We'd love to see you</p>
</div>
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 reveal-element delay-100">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-nude-300/30">
<h3 className="font-serif text-2xl mb-4 text-brand-600">Birmingham</h3>
<div className="space-y-3 text-sm text-dark-800/80">
<p className="flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5 text-brand-400" icon="solar:map-point-linear"></iconify-icon>
<span>268 Baldwins Lane,<br/>Birmingham, B28 0XB</span>
</p>
<p className="flex items-center gap-3">
<iconify-icon className="text-lg text-brand-400" icon="solar:phone-linear"></iconify-icon>
<span>07927 785 620</span>
</p>
<a className="inline-block mt-4 text-xs font-bold uppercase tracking-wider text-brand-500 border-b border-brand-500 pb-0.5 hover:text-dark-800 hover:border-dark-800 transition-all" href="https://maps.google.com/?q=268+Baldwins+Lane+Birmingham" target="_blank">Get Directions</a>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-nude-300/30">
<h3 className="font-serif text-2xl mb-4 text-brand-600">Shrewsbury</h3>
<div className="space-y-3 text-sm text-dark-800/80">
<p className="flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5 text-brand-400" icon="solar:map-point-linear"></iconify-icon>
<span>18 Castle Gates,<br/>Shrewsbury, SY1 2AD</span>
</p>
<p className="flex items-center gap-3">
<iconify-icon className="text-lg text-brand-400" icon="solar:phone-linear"></iconify-icon>
<span>07388 889 308</span>
</p>
<a className="inline-block mt-4 text-xs font-bold uppercase tracking-wider text-brand-500 border-b border-brand-500 pb-0.5 hover:text-dark-800 hover:border-dark-800 transition-all" href="https://maps.google.com/?q=18+Castle+Gates+Shrewsbury" target="_blank">Get Directions</a>
</div>
</div>
</div>
<div className="text-center mt-12 reveal-element delay-200">
<p className="mb-4 text-sm opacity-70">Have a question?</p>
<a className="text-xl font-serif hover:text-brand-500 transition-colors" href="mailto:info@dearnail.uk">info@dearnail.uk</a>
</div>
</section>

<footer className="bg-dark-900 text-nude-100 py-16 px-6">
<div className="max-w-7xl mx-auto rounded-2xl overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<span className="font-serif text-2xl font-medium tracking-tight">Dear Nail</span>
</div>
<p className="text-white/60 text-xs leading-relaxed max-w-xs mb-8">
                        Dedicated to providing the ultimate nail experience in a relaxing and comfortable atmosphere. 
                    </p>
<div className="mt-8">
<p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Socials</p>
<div className="flex gap-4">
<a className="hover:text-brand-400 transition-colors" href="https://www.instagram.com/dearnail_uk" target="_blank"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-brand-400 transition-colors" href="https://www.facebook.com/dearnailuk" target="_blank"><iconify-icon icon="brandico:facebook-rect" width="18"></iconify-icon></a>
</div>
</div>
</div>
<div>
<h4 className="text-sm font-medium mb-6">Menu</h4>
<ul className="space-y-3 text-sm text-white/60">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Price List</a></li>
<li><a className="hover:text-white transition-colors" href="#locations">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-6">Legal</h4>
<ul className="space-y-3 text-sm text-white/60">
<li><a className="hover:text-white transition-colors" href="#">Salon Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40">
<p>© 2024 Dear Nail Limited. All rights reserved.</p>
<p>Designed with care.</p>
</div>
</div>
</footer>



    </>
  );
}
