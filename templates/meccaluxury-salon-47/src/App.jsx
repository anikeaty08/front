import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'media',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
gold: {
50: '#fbf7eb',
100: '#f5ebd1',
200: '#ecd6a6',
300: '#e1bd76',
400: '#d7a249',
500: '#ce882b',
600: '#b16a21',
700: '#8e4d1e',
800: '#753e1e',
900: '#60331b',
},
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
800: '#292524',
900: '#1c1917',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both',
'zoom-slow': 'zoomSlow 20s linear infinite alternate',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(30px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
zoomSlow: {
'0%': { transform: 'scale(1)' },
'100%': { transform: 'scale(1.1)' },
}
}
}
}
}



        // Animation Observer
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
            observer.observe(el);
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        const navBg = document.getElementById('nav-bg');
        const logoText = document.getElementById('logo-text');
        const logoIcon = document.getElementById('logo-icon');
        const navLinks = document.getElementById('nav-links');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navBg.classList.remove('bg-white/0', 'dark:bg-stone-900/0');
                navBg.classList.add('bg-white/90', 'dark:bg-stone-900/90', 'backdrop-blur-md', 'border-b', 'border-stone-100', 'dark:border-stone-800');
                
                if (!document.documentElement.classList.contains('dark')) {
                     logoText.classList.remove('text-white'); logoText.classList.add('text-stone-900');
                     logoIcon.classList.remove('text-white'); logoIcon.classList.add('text-gold-500');
                     Array.from(navLinks.children).forEach(link => {
                         link.classList.remove('text-white/80', 'hover:text-gold-300');
                         link.classList.add('text-stone-500', 'hover:text-stone-900');
                     });
                }
            } else {
                navBg.classList.add('bg-white/0', 'dark:bg-stone-900/0');
                navBg.classList.remove('bg-white/90', 'dark:bg-stone-900/90', 'backdrop-blur-md', 'border-b', 'border-stone-100', 'dark:border-stone-800');
                
                if (!document.documentElement.classList.contains('dark')) {
                     logoText.classList.add('text-white'); logoText.classList.remove('text-stone-900');
                     logoIcon.classList.add('text-white'); logoIcon.classList.remove('text-gold-500');
                     Array.from(navLinks.children).forEach(link => {
                         link.classList.add('text-white/80', 'hover:text-gold-300');
                         link.classList.remove('text-stone-500', 'hover:text-stone-900');
                     });
                }
            }
        });

        // Slider Logic
        const slider = document.getElementById('comparisonSlider');
        const overlay = document.getElementById('comparisonOverlay');
        const handle = document.getElementById('comparisonHandle');
        const beforeImg = document.getElementById('comparisonImageBefore');
        let isDown = false;

        function updateSlider(x) {
            if (!slider) return;
            const rect = slider.getBoundingClientRect();
            let position = ((x - rect.left) / rect.width) * 100;
            if (position < 0) position = 0;
            if (position > 100) position = 100;
            overlay.style.width = `${position}%`;
            handle.style.left = `${position}%`;
        }

        if (slider) {
            slider.addEventListener('mousedown', () => isDown = true);
            window.addEventListener('mouseup', () => isDown = false);
            slider.addEventListener('mousemove', (e) => { if (!isDown) return; updateSlider(e.clientX); });
            slider.addEventListener('touchstart', () => isDown = true);
            window.addEventListener('touchend', () => isDown = false);
            slider.addEventListener('touchmove', (e) => { if (!isDown) return; updateSlider(e.touches[0].clientX); });
            const resizeImg = () => { if(beforeImg) beforeImg.style.width = slider.getBoundingClientRect().width + 'px'; };
            window.addEventListener('resize', resizeImg);
            setTimeout(resizeImg, 100);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300" id="navbar">
<div className="absolute inset-0 bg-white/0 dark:bg-stone-900/0 backdrop-blur-none border-b border-transparent transition-all duration-300" id="nav-bg"></div>
<div className="relative flex h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="text-white transition-colors duration-300" id="logo-icon">
<iconify-icon height="32" icon="solar:crown-star-linear" width="32"></iconify-icon>
</div>
<span className="font-serif text-xl tracking-tight font-medium text-white group-hover:opacity-80 transition-opacity" id="logo-text">Hair Mecca</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80" id="nav-links">
<a className="hover:text-gold-300 transition-colors" href="#about">About</a>
<a className="hover:text-gold-300 transition-colors" href="#services">Services</a>
<a className="hover:text-gold-300 transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-gold-300 transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden md:block">
<a className="bg-white text-stone-900 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-gold-50 transition-colors flex items-center gap-2" href="https://wa.me/233202809178" target="_blank">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                    Book via WhatsApp
                </a>
</div>

<button className="md:hidden p-2 text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-24 left-0 w-full bg-white dark:bg-stone-900 border-b border-stone-100 dark:border-stone-800 p-6 flex flex-col gap-4 md:hidden shadow-xl" id="mobile-menu">
<a className="text-lg font-serif text-stone-900 dark:text-white" href="#about">About</a>
<a className="text-lg font-serif text-stone-900 dark:text-white" href="#services">Services</a>
<a className="text-lg font-serif text-stone-900 dark:text-white" href="#gallery">Gallery</a>
<a className="text-lg font-serif text-gold-500" href="https://wa.me/233202809178">Book on WhatsApp</a>
</div>
</nav>

<header className="relative w-full h-screen min-h-[750px] overflow-hidden bg-stone-900">

<div className="absolute inset-0 w-full h-full animate-zoom-slow">
<img alt="Luxury Salon" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-stone-900"></div>
<div className="absolute inset-0 bg-black/20"></div>
</div>
<div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
<div className="max-w-3xl mt-16">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-8 animate-fade-in-up" style={{animationDelay: '100ms'}}>
<div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></div>
<span className="text-[10px] uppercase tracking-widest text-stone-300 font-medium">Premium Salon in Osu, Accra</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95] tracking-tight mb-8 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                    Elevate Your Style. <br/>
<span className="italic font-light text-gold-200">Look &amp; Feel Fabulous.</span>
</h1>

<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{animationDelay: '400ms'}}>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-stone-900 rounded-full text-sm font-semibold hover:bg-gold-50 transition-colors text-center flex items-center justify-center gap-2" href="https://wa.me/233202809178" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
                        Book Now via WhatsApp
                    </a>
<a className="w-full sm:w-auto px-8 py-4 glass-panel text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group" href="https://instagram.com" target="_blank">
<iconify-icon icon="solar:camera-linear" width="18"></iconify-icon>
                        Follow on Instagram
                    </a>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-white dark:bg-stone-900" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<span className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-4 block">Our Story</span>
<h2 className="text-4xl md:text-5xl mb-6 font-serif leading-tight">Welcome to <span className="italic text-stone-500">Hair Mecca</span></h2>
<p className="text-stone-600 dark:text-stone-300 text-lg font-light leading-relaxed mb-6">
                        Located at 2nd Ringway Close, Osu Klottey, we are Accra's premier destination for luxury hair and beauty. We believe every client deserves to feel confident and beautiful.
                    </p>
<p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-8">
                        Led by our lead stylist <strong>Nasiyah</strong>, our team is dedicated to professionalism, exceptional customer care, and the highest standard of artistry. Whether you are looking for a seamless wig install, natural hair care, or a relaxing pedicure, Hair Mecca is your sanctuary for style.
                    </p>
<div className="flex items-center gap-4">
<div className="h-px w-12 bg-gold-400"></div>
<span className="font-serif italic text-xl">Nasiyah</span>
</div>
</div>
<div className="relative reveal-on-scroll delay-200">
<div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
<img alt="Stylist Nasiyah" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-stone-100 dark:bg-stone-800 -z-10 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 bg-stone-50 dark:bg-stone-800">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer reveal-on-scroll delay-100">
<div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-stone-200 dark:bg-stone-700 relative">
<img alt="Wig Styling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm p-4 rounded-xl border border-white/20">
<h3 className="text-lg font-serif italic">Wig Styling</h3>
<p className="text-stone-500 text-xs mt-1">Customization &amp; Installs</p>
</div>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-200">
<div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-stone-200 dark:bg-stone-700 relative">
<img alt="Natural Hair" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1620331313123-6e3783f96933?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm p-4 rounded-xl border border-white/20">
<h3 className="text-lg font-serif italic">Natural Hair</h3>
<p className="text-stone-500 text-xs mt-1">Silk Press &amp; Treatments</p>
</div>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-300">
<div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-stone-200 dark:bg-stone-700 relative">
<img alt="Beauty Bar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm p-4 rounded-xl border border-white/20">
<h3 className="text-lg font-serif italic">Beauty Bar</h3>
<p className="text-stone-500 text-xs mt-1">Nails &amp; Pedicure</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white dark:bg-stone-900" id="all-services">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">

<div className="lg:col-span-5 relative hidden lg:block">
<div className="sticky top-32 flex flex-col gap-6 reveal-on-scroll">
<div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl">
<img alt="Menu Visual" className="absolute inset-0 w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-serif text-white italic mb-2">The Collection</h3>
<p className="text-white/80 text-xs font-light leading-relaxed mb-4">
                                    Our curated menu of premium services designed to maintain the health and beauty of your hair and nails.
                                </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="flex flex-col gap-16">
<div className="flex flex-col gap-2 border-b border-stone-100 dark:border-stone-800 pb-8 reveal-on-scroll">
<span className="text-gold-500 font-bold text-[10px] tracking-[0.2em] uppercase">Service Menu</span>
<h2 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-white">Our Services</h2>
</div>

<div className="reveal-on-scroll delay-100">
<div className="flex items-center gap-4 mb-6">
<div className="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-500">
<iconify-icon icon="solar:scissors-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight">Hair Artistry</h3>
</div>
<div className="grid gap-3">

<div className="group relative p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-transparent hover:border-gold-200 dark:hover:border-stone-600 transition-all duration-300">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium">Wash &amp; Blow Dry</span>
<span className="text-sm font-medium text-gold-500">From 150 GHS</span>
</div>
<p className="text-xs text-stone-500 dark:text-stone-400 font-light">Deep cleansing wash, conditioning, and professional blowout.</p>
</div>

<div className="group relative p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-transparent hover:border-gold-200 dark:hover:border-stone-600 transition-all duration-300">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium">Wig Styling &amp; Revamp</span>
<span className="text-sm font-medium text-gold-500">From 200 GHS</span>
</div>
<p className="text-xs text-stone-500 dark:text-stone-400 font-light">Customization, styling, and revitalization for your units.</p>
</div>

<div className="group relative p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-transparent hover:border-gold-200 dark:hover:border-stone-600 transition-all duration-300">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium">Natural Hair Care</span>
<span className="text-sm font-medium text-gold-500">From 250 GHS</span>
</div>
<p className="text-xs text-stone-500 dark:text-stone-400 font-light">Silk press, treatments, and protective styling.</p>
</div>
<div className="group relative p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-transparent hover:border-gold-200 dark:hover:border-stone-600 transition-all duration-300">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium">Relaxers &amp; Coloring</span>
<span className="text-sm font-medium text-gold-500">From 200 GHS</span>
</div>
<p className="text-xs text-stone-500 dark:text-stone-400 font-light">Professional chemical treatments and custom color application.</p>
</div>
<div className="group relative p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-transparent hover:border-gold-200 dark:hover:border-stone-600 transition-all duration-300">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium">Ponytails &amp; Extensions</span>
<span className="text-sm font-medium text-gold-500">From 180 GHS</span>
</div>
<p className="text-xs text-stone-500 dark:text-stone-400 font-light">Sleek ponytails and seamless extension installation.</p>
</div>
</div>
</div>

<div className="reveal-on-scroll delay-200">
<div className="flex items-center gap-4 mb-6">
<div className="w-8 h-8 rounded-full bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center text-gold-600">
<iconify-icon icon="solar:cosmetic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight">Beauty Bar</h3>
</div>
<div className="grid gap-3">
<div className="group relative p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-transparent hover:border-gold-200 dark:hover:border-stone-600 transition-all duration-300">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium">Manicure &amp; Polish</span>
<span className="text-sm font-medium text-gold-500">From 80 GHS</span>
</div>
<p className="text-xs text-stone-500 dark:text-stone-400 font-light">Gel polish, acrylics, and nail art.</p>
</div>
<div className="group relative p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-transparent hover:border-gold-200 dark:hover:border-stone-600 transition-all duration-300">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium">Luxury Pedicure</span>
<span className="text-sm font-medium text-gold-500">From 100 GHS</span>
</div>
<p className="text-xs text-stone-500 dark:text-stone-400 font-light">Soak, scrub, massage, and polish.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50 dark:bg-stone-800 border-t border-stone-200 dark:border-stone-700" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="mb-16 text-center reveal-on-scroll">
<span className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-2 block">Our Work</span>
<h2 className="text-3xl md:text-4xl tracking-tight">Gallery &amp; Wig Revamps</h2>
</div>

<div className="max-w-4xl mx-auto mb-24 reveal-on-scroll">
<div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl comparison-slider" id="comparisonSlider">
<img alt="Revamped Wig" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1596458397260-243d637645eb?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 text-xs rounded backdrop-blur-sm">AFTER REVAMP</span>
<div className="comparison-item" id="comparisonOverlay" style={{width: '50%'}}>
<img alt="Old Wig" className="absolute top-0 left-0 h-full max-w-none w-[100vw] md:w-[64rem] lg:w-[56rem] object-cover" id="comparisonImageBefore" src="https://images.unsplash.com/photo-1582095133179-bfd08d2fc6a8?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 text-xs rounded backdrop-blur-sm">BEFORE</span>
</div>
<div className="comparison-handle" id="comparisonHandle" style={{left: '50%'}}>
<div className="comparison-circle bg-white text-gold-500">
<iconify-icon className="mr-1" icon="solar:round-alt-arrow-left-linear"></iconify-icon>
<iconify-icon icon="solar:round-alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<p className="text-center text-xs text-stone-400 mt-4">Wig Revamp Service: Drag to see the transformation</p>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
<div className="break-inside-avoid rounded-xl overflow-hidden relative group reveal-on-scroll">
<img className="w-full object-cover" src="https://images.unsplash.com/photo-1519699047748-40baea614fda?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-white font-serif text-xl italic">Coloring</span>
</div>
</div>
<div className="break-inside-avoid rounded-xl overflow-hidden relative group reveal-on-scroll delay-100">
<img className="w-full object-cover" src="https://images.unsplash.com/photo-1605497788044-5a90406436b5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid rounded-xl overflow-hidden relative group reveal-on-scroll">
<img className="w-full object-cover" src="https://images.unsplash.com/photo-1522337360705-2b1cc3d549e3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid rounded-xl overflow-hidden relative group reveal-on-scroll delay-100">
<img className="w-full object-cover" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid rounded-xl overflow-hidden relative group reveal-on-scroll">
<img className="w-full object-cover" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid rounded-xl overflow-hidden relative group reveal-on-scroll delay-100">
<img className="w-full object-cover" src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-stone-900 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-serif mb-12 text-center">Client Love</h2>
<div className="flex flex-col md:flex-row gap-6 reveal-on-scroll">

<div className="flex-1 bg-stone-50 dark:bg-stone-800 p-8 rounded-2xl">
<div className="flex gap-1 text-gold-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg font-serif italic mb-6">"Hair Mecca is simply the best in Accra. Nasiyah transformed my wig, it looks brand new!"</p>
<div>
<p className="text-sm font-medium">Ama K.</p>
<p className="text-xs text-stone-400">Wig Revamp</p>
</div>
</div>

<div className="flex-1 bg-stone-50 dark:bg-stone-800 p-8 rounded-2xl">
<div className="flex gap-1 text-gold-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg font-serif italic mb-6">"The atmosphere is so elegant and relaxing. My silk press lasted for weeks. Highly recommend."</p>
<div>
<p className="text-sm font-medium">Jessica O.</p>
<p className="text-xs text-stone-400">Natural Hair</p>
</div>
</div>

<div className="flex-1 bg-stone-50 dark:bg-stone-800 p-8 rounded-2xl">
<div className="flex gap-1 text-gold-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg font-serif italic mb-6">"Professional service and amazing nails. The best place in Osu to get pampered."</p>
<div>
<p className="text-sm font-medium">Naa A.</p>
<p className="text-xs text-stone-400">Pedicure</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-900 text-white relative" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="flex flex-col justify-center reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif mb-8">Visit Us</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold-400 shrink-0">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium mb-1">Address</h4>
<p className="text-stone-300 font-light">2nd Ringway Close<br/>Osu Klottey, Accra, Ghana</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold-400 shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium mb-1">Bookings</h4>
<a className="text-stone-300 font-light hover:text-white block" href="https://wa.me/233202809178">+233 202 809 178 (WhatsApp)</a>
<a className="text-stone-300 font-light hover:text-white block" href="#">@hairmecca_beautybar</a>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold-400 shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium mb-1">Opening Hours</h4>
<p className="text-stone-300 font-light">Tue - Sat: 9:00 AM - 7:00 PM</p>
<p className="text-stone-500 font-light">Sun &amp; Mon: Closed</p>
</div>
</div>
</div>
<div className="mt-12">
<a className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-gold-50 transition-colors w-full sm:w-auto" href="https://wa.me/233202809178">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
                        Message on WhatsApp
                    </a>
</div>
</div>

<div className="h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-2xl reveal-on-scroll delay-200 bg-stone-800">
<iframe allowfullscreen="" className="grayscale hover:grayscale-0 transition-all duration-500" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.970597693596!2d-0.1802146846618545!3d5.571477335043815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a9c53c48003%3A0x632439366113872!2s2nd%20Ringway%20Cl%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
<div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-white/10 text-center text-xs text-stone-500">
<p>© 2024 Hair Mecca &amp; Beauty Bar. All rights reserved.</p>
</div>
</section>


    </>
  );
}
