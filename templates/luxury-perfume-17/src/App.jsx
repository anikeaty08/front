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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Cinzel', 'serif'],
},
colors: {
gold: {
400: '#D4AF37',
500: '#C5A028',
600: '#B08D26',
},
neutral: {
950: '#0a0a0a',
}
}
}
}
}



        let currentSlide = 1;
        const totalSlides = 3;

        function changeSlide(slideIndex) {
            // Hide all slides
            for (let i = 1; i <= totalSlides; i++) {
                const el = document.getElementById(`slide-${i}`);
                if (el) {
                    el.style.opacity = '0';
                    el.style.zIndex = '0';
                }
            }
            
            // Show target slide
            const target = document.getElementById(`slide-${slideIndex}`);
            if (target) {
                target.style.opacity = '1';
                target.style.zIndex = '10';
            }
            
            currentSlide = slideIndex;
        }

        // Auto play
        setInterval(() => {
            let next = currentSlide + 1;
            if (next > totalSlides) next = 1;
            changeSlide(next);
        }, 6000);
    
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
      

<header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="md:hidden text-neutral-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<a className="text-xl md:text-2xl font-serif tracking-widest text-neutral-900 uppercase" href="#">
                Ahmed Al Maghribi
            </a>

<nav className="hidden md:flex space-x-8 text-sm font-light tracking-wide text-neutral-600">
<a className="hover:text-gold-600 transition-colors" href="#">Shop All</a>
<a className="hover:text-gold-600 transition-colors" href="#">Oud Collection</a>
<a className="hover:text-gold-600 transition-colors" href="#">Best Sellers</a>
<a className="hover:text-gold-600 transition-colors" href="#">Gifts</a>
</nav>

<div className="flex items-center space-x-5">
<button className="text-neutral-900 hover:text-gold-600 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="22"></iconify-icon>
</button>
<button className="text-neutral-900 hover:text-gold-600 transition-colors hidden sm:block">
<iconify-icon icon="solar:user-linear" width="22"></iconify-icon>
</button>
<button className="text-neutral-900 hover:text-gold-600 transition-colors relative">
<iconify-icon icon="solar:bag-3-linear" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-gold-400 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
</button>
</div>
</div>
</header>

<section className="relative h-screen w-full overflow-hidden mt-0" id="hero-slider">

<div className="absolute inset-0 transition-opacity duration-1000 ease-in-out" id="slide-1">
<img alt="Luxury Perfume" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-white/10 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-neutral-900 tracking-tight mb-4 drop-shadow-sm">Luxury Arabian Perfumes<br/>for Every Occasion</h1>
<p className="text-lg md:text-xl font-light text-neutral-800 mb-8 max-w-2xl">Discover long-lasting, premium fragrances crafted with elegance and tradition.</p>
<a className="bg-neutral-900 text-white px-8 py-3.5 text-sm uppercase tracking-widest hover:bg-gold-500 transition-colors duration-300" href="#">Shop Best Sellers</a>
</div>
</div>
<div className="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0" id="slide-2">
<img alt="Signature Scent" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-white/20 bg-gradient-to-r from-white/60 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-center items-start text-left px-6 md:px-20 pt-20">
<h2 className="font-serif text-4xl md:text-6xl text-neutral-900 tracking-tight mb-4">Find Your<br/>Signature Scent</h2>
<p className="text-lg font-light text-neutral-800 mb-8 max-w-xl">From deep oud to modern florals — explore perfumes that define your personality.</p>
<a className="border border-neutral-900 text-neutral-900 px-8 py-3.5 text-sm uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors duration-300" href="#">Explore Collection</a>
</div>
</div>
<div className="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0" id="slide-3">
<img alt="Authentic Oud" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10"></div>
<div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
<h2 className="font-serif text-4xl md:text-6xl text-white tracking-tight mb-4 drop-shadow-md">Authentic • Bold • Timeless</h2>
<p className="text-lg font-light text-white mb-8 max-w-2xl drop-shadow-sm">Experience the true essence of Arabian perfumery.</p>
<a className="bg-white text-neutral-900 px-8 py-3.5 text-sm uppercase tracking-widest hover:bg-gold-400 hover:text-white transition-colors duration-300" href="#">Shop Now</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
<button aria-label="Slide 1" className="w-12 h-1 bg-neutral-400 hover:bg-neutral-900 transition-colors" onclick="changeSlide(1)"></button>
<button aria-label="Slide 2" className="w-12 h-1 bg-neutral-400 hover:bg-neutral-900 transition-colors" onclick="changeSlide(2)"></button>
<button aria-label="Slide 3" className="w-12 h-1 bg-neutral-400 hover:bg-neutral-900 transition-colors" onclick="changeSlide(3)"></button>
</div>
</section>

<section className="py-20 md:py-28 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-3 tracking-tight">Best Selling Fragrances</h2>
<p className="text-neutral-500 font-light text-sm md:text-base">Loved by customers for their exceptional quality and lasting impression.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-neutral-50 overflow-hidden mb-5">
<img alt="Perfume" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&amp;w=1004&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white/80 hover:bg-neutral-900 hover:text-white p-3 backdrop-blur-sm transition-colors duration-300">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
<div className="absolute top-4 left-4 bg-gold-400 text-white text-[10px] px-2 py-1 uppercase tracking-widest font-medium">Bestseller</div>
</div>
<h3 className="font-serif text-lg text-neutral-900 group-hover:text-gold-600 transition-colors">Royal Oud</h3>
<p className="text-sm text-neutral-500 font-light mt-1">Woody &amp; Spicy</p>
<p className="text-base font-medium text-neutral-900 mt-2">$120.00</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-neutral-50 overflow-hidden mb-5">
<img alt="Perfume" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white/80 hover:bg-neutral-900 hover:text-white p-3 backdrop-blur-sm transition-colors duration-300">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="font-serif text-lg text-neutral-900 group-hover:text-gold-600 transition-colors">Desert Rose</h3>
<p className="text-sm text-neutral-500 font-light mt-1">Floral &amp; Amber</p>
<p className="text-base font-medium text-neutral-900 mt-2">$95.00</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-neutral-50 overflow-hidden mb-5">
<img alt="Perfume" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white/80 hover:bg-neutral-900 hover:text-white p-3 backdrop-blur-sm transition-colors duration-300">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="font-serif text-lg text-neutral-900 group-hover:text-gold-600 transition-colors">Amber Night</h3>
<p className="text-sm text-neutral-500 font-light mt-1">Warm &amp; Sensual</p>
<p className="text-base font-medium text-neutral-900 mt-2">$110.00</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-neutral-50 overflow-hidden mb-5">
<img alt="Perfume" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute bottom-4 right-4 bg-white/80 hover:bg-neutral-900 hover:text-white p-3 backdrop-blur-sm transition-colors duration-300">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="font-serif text-lg text-neutral-900 group-hover:text-gold-600 transition-colors">Midnight Musk</h3>
<p className="text-sm text-neutral-500 font-light mt-1">Fresh &amp; Crisp</p>
<p className="text-base font-medium text-neutral-900 mt-2">$85.00</p>
</div>
</div>
</section>

<section className="py-20 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-3 tracking-tight">New Arrivals</h2>
<p className="text-neutral-500 font-light text-sm md:text-base">Discover our latest fragrance creations — fresh, modern, and unforgettable.</p>
</div>
<a className="hidden md:flex items-center text-sm uppercase tracking-widest border-b border-neutral-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors" href="#">
                    View All
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 group transition-shadow hover:shadow-xl duration-300">
<div className="relative aspect-square overflow-hidden mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<span className="absolute top-0 left-0 bg-neutral-900 text-white text-xs px-2 py-1">New</span>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-xl text-neutral-900 mb-1">Golden Hour</h3>
<p className="text-neutral-500 text-sm font-light">Citrus &amp; Sandalwood</p>
</div>
<span className="text-lg font-medium">$145</span>
</div>
</div>

<div className="bg-white p-6 group transition-shadow hover:shadow-xl duration-300">
<div className="relative aspect-square overflow-hidden mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<span className="absolute top-0 left-0 bg-neutral-900 text-white text-xs px-2 py-1">New</span>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-xl text-neutral-900 mb-1">Velvet Iris</h3>
<p className="text-neutral-500 text-sm font-light">Powdery Floral</p>
</div>
<span className="text-lg font-medium">$130</span>
</div>
</div>

<div className="bg-white p-6 group transition-shadow hover:shadow-xl duration-300">
<div className="relative aspect-square overflow-hidden mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<span className="absolute top-0 left-0 bg-neutral-900 text-white text-xs px-2 py-1">New</span>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-xl text-neutral-900 mb-1">Oceanic Breeze</h3>
<p className="text-neutral-500 text-sm font-light">Aquatic &amp; Mint</p>
</div>
<span className="text-lg font-medium">$115</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-[#F5F2EB] overflow-hidden">
<div className="absolute top-0 right-0 w-full md:w-1/2 h-full">
<img alt="Oud Texture" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#F5F2EB] to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex items-center h-full">
<div className="md:w-1/2 py-12">
<span className="text-gold-600 uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">The Heritage Collection</span>
<h2 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6 leading-tight tracking-tight">The Oud<br/>Collection</h2>
<p className="text-neutral-700 font-light text-lg mb-8 leading-relaxed max-w-md">Rich, intense, and deeply luxurious — our oud perfumes are crafted for those who appreciate bold elegance and centuries of tradition.</p>
<a className="inline-flex items-center bg-neutral-900 text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-gold-600 transition-colors duration-300" href="#">
                    Explore Oud Perfumes
                </a>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center mb-16">
<div className="w-16 h-px bg-gold-400 mb-6"></div>
<h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-3 tracking-tight">Floral &amp; Soft Scents</h2>
<p className="text-neutral-500 font-light text-sm md:text-base max-w-2xl">Elegant blends of flowers and musk, perfect for daily wear and special moments.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
<div className="group">
<div className="aspect-[4/5] rounded-t-full bg-neutral-100 overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="text-center">
<h3 className="font-serif text-lg text-neutral-900">Jasmine Pure</h3>
<p className="text-xs text-neutral-400 uppercase tracking-wide mt-1">Soft Floral</p>
</div>
</div>
<div className="group">
<div className="aspect-[4/5] rounded-t-full bg-neutral-100 overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-center">
<h3 className="font-serif text-lg text-neutral-900">White Musk</h3>
<p className="text-xs text-neutral-400 uppercase tracking-wide mt-1">Powdery</p>
</div>
</div>
<div className="group">
<div className="aspect-[4/5] rounded-t-full bg-neutral-100 overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="text-center">
<h3 className="font-serif text-lg text-neutral-900">Rose Petal</h3>
<p className="text-xs text-neutral-400 uppercase tracking-wide mt-1">Classic Rose</p>
</div>
</div>
<div className="group">
<div className="aspect-[4/5] rounded-t-full bg-neutral-100 overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="text-center">
<h3 className="font-serif text-lg text-neutral-900">Lily Valley</h3>
<p className="text-xs text-neutral-400 uppercase tracking-wide mt-1">Fresh Floral</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-16">
<div className="mb-8 md:mb-0">
<h2 className="text-3xl md:text-4xl font-serif mb-3 tracking-tight">Day to Night Perfumes</h2>
<p className="text-neutral-400 font-light max-w-md">Versatile fragrances designed to transition effortlessly from day freshness to evening sophistication.</p>
</div>

<div className="flex space-x-2 bg-white/10 p-1 rounded-full backdrop-blur-sm">
<button className="px-6 py-2 rounded-full bg-white text-neutral-900 text-sm font-medium transition-all shadow-md">Day</button>
<button className="px-6 py-2 rounded-full text-white text-sm font-medium hover:bg-white/10 transition-all">Night</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="relative group">
<div className="absolute inset-0 bg-white/5 transform rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
<div className="relative bg-neutral-800 p-8 flex flex-col md:flex-row items-center gap-8">
<img alt="Day Perfume" className="w-48 h-64 object-cover shadow-2xl" src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&amp;w=1004&amp;auto=format&amp;fit=crop"/>
<div>
<span className="text-gold-400 text-xs uppercase tracking-widest mb-2 block">Day Wear</span>
<h3 className="text-2xl font-serif mb-2">Solar Citrus</h3>
<p className="text-neutral-400 text-sm font-light mb-6">Energizing notes of bergamot and green tea.</p>
<a className="text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:text-gold-400 hover:border-gold-400 transition-colors" href="#">Shop Now</a>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-white/5 transform -rotate-2 transition-transform group-hover:rotate-0 duration-500"></div>
<div className="relative bg-neutral-800 p-8 flex flex-col md:flex-row items-center gap-8">
<img alt="Night Perfume" className="w-48 h-64 object-cover shadow-2xl" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<div>
<span className="text-purple-300 text-xs uppercase tracking-widest mb-2 block">Evening Wear</span>
<h3 className="text-2xl font-serif mb-2">Lunar Eclipse</h3>
<p className="text-neutral-400 text-sm font-light mb-6">Seductive notes of dark amber and vanilla.</p>
<a className="text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:text-purple-300 hover:border-purple-300 transition-colors" href="#">Shop Now</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-3 tracking-tight">Discover by Mood</h2>
<p className="text-neutral-500 font-light text-sm md:text-base">Choose a fragrance that matches your mood and moment.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="relative h-80 group overflow-hidden" href="#">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-90" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col items-center justify-center text-white">
<iconify-icon className="mb-3 opacity-80" icon="solar:crown-linear" width="32"></iconify-icon>
<span className="text-xl font-serif tracking-wide">Bold &amp; Confident</span>
</div>
</a>

<a className="relative h-80 group overflow-hidden" href="#">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-90" src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&amp;w=2673&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col items-center justify-center text-white">
<iconify-icon className="mb-3 opacity-80" icon="solar:heart-linear" width="32"></iconify-icon>
<span className="text-xl font-serif tracking-wide">Soft &amp; Romantic</span>
</div>
</a>

<a className="relative h-80 group overflow-hidden" href="#">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 flex flex-col items-center justify-center text-white">
<iconify-icon className="mb-3 opacity-80" icon="solar:waterdrops-linear" width="32"></iconify-icon>
<span className="text-xl font-serif tracking-wide">Fresh &amp; Clean</span>
</div>
</a>

<a className="relative h-80 group overflow-hidden" href="#">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex flex-col items-center justify-center text-white">
<iconify-icon className="mb-3 opacity-80" icon="solar:moon-stars-linear" width="32"></iconify-icon>
<span className="text-xl font-serif tracking-wide">Deep &amp; Mysterious</span>
</div>
</a>
</div>
</section>

<section className="py-20 bg-neutral-50 border-y border-neutral-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-center mb-12">
<div>
<h2 className="text-3xl font-serif text-neutral-900 tracking-tight">Signature Picks</h2>
<p className="text-neutral-500 font-light mt-2 text-sm">Hand-selected fragrances that define our spirit.</p>
</div>
<div className="flex space-x-2">
<button className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex space-x-6 overflow-x-auto no-scrollbar pb-8 snap-x">

<div className="min-w-[280px] md:min-w-[320px] snap-center bg-white p-4 border border-neutral-100">
<div className="bg-neutral-50 aspect-square mb-4 p-4 flex items-center justify-center">
<img className="h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&amp;w=1004&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-lg">Imperial Leather</h3>
<p className="text-neutral-500 text-sm mb-4">Rich leather &amp; tobacco</p>
<button className="w-full border border-neutral-200 py-2 text-xs uppercase tracking-widest hover:border-neutral-900 transition-colors">View Details</button>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center bg-white p-4 border border-neutral-100">
<div className="bg-neutral-50 aspect-square mb-4 p-4 flex items-center justify-center">
<img className="h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-lg">Sultan's Garden</h3>
<p className="text-neutral-500 text-sm mb-4">Exotic fruits &amp; wood</p>
<button className="w-full border border-neutral-200 py-2 text-xs uppercase tracking-widest hover:border-neutral-900 transition-colors">View Details</button>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center bg-white p-4 border border-neutral-100">
<div className="bg-neutral-50 aspect-square mb-4 p-4 flex items-center justify-center">
<img className="h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-lg">Desert Storm</h3>
<p className="text-neutral-500 text-sm mb-4">Spicy amber</p>
<button className="w-full border border-neutral-200 py-2 text-xs uppercase tracking-widest hover:border-neutral-900 transition-colors">View Details</button>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center bg-white p-4 border border-neutral-100">
<div className="bg-neutral-50 aspect-square mb-4 p-4 flex items-center justify-center">
<img className="h-full object-contain mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="font-serif text-lg">Majestic Oud</h3>
<p className="text-neutral-500 text-sm mb-4">Pure aged oud</p>
<button className="w-full border border-neutral-200 py-2 text-xs uppercase tracking-widest hover:border-neutral-900 transition-colors">View Details</button>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-3 tracking-tight">Customer Favorites</h2>
<p className="text-neutral-500 font-light text-sm md:text-base">Fragrances our customers keep coming back for.</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

<div className="flex flex-col items-center text-center">
<img className="w-full aspect-[4/5] object-cover mb-4 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1590156546946-ce55a12a6a5d?q=80&amp;w=1576&amp;auto=format&amp;fit=crop"/>
<div className="flex text-gold-500 mb-2 gap-1">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<h4 className="font-medium text-neutral-900">Black Diamond</h4>
<p className="text-xs text-neutral-500 mt-1">450+ Reviews</p>
</div>

<div className="flex flex-col items-center text-center">
<img className="w-full aspect-[4/5] object-cover mb-4 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<div className="flex text-gold-500 mb-2 gap-1">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
</div>
<h4 className="font-medium text-neutral-900">Vanilla Essence</h4>
<p className="text-xs text-neutral-500 mt-1">320+ Reviews</p>
</div>

<div className="flex flex-col items-center text-center">
<img className="w-full aspect-[4/5] object-cover mb-4 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<div className="flex text-gold-500 mb-2 gap-1">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<h4 className="font-medium text-neutral-900">Golden Oud</h4>
<p className="text-xs text-neutral-500 mt-1">500+ Reviews</p>
</div>

<div className="flex flex-col items-center text-center">
<img className="w-full aspect-[4/5] object-cover mb-4 grayscale hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="flex text-gold-500 mb-2 gap-1">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
</div>
<h4 className="font-medium text-neutral-900">Spicy Woods</h4>
<p className="text-xs text-neutral-500 mt-1">280+ Reviews</p>
</div>
</div>
</section>

<section className="py-16 bg-white border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-2xl font-serif text-neutral-900 tracking-tight">Crafted for Lasting Impressions</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-100">
<div className="px-4 py-4">
<iconify-icon className="text-neutral-900 mb-4" icon="solar:leaf-linear" width="36"></iconify-icon>
<h3 className="font-medium text-sm uppercase tracking-widest mb-2">Premium Ingredients</h3>
<p className="text-neutral-500 text-sm font-light">Sourced ethically from the finest origins.</p>
</div>
<div className="px-4 py-4">
<iconify-icon className="text-neutral-900 mb-4" icon="solar:hourglass-linear" width="36"></iconify-icon>
<h3 className="font-medium text-sm uppercase tracking-widest mb-2">Long-lasting</h3>
<p className="text-neutral-500 text-sm font-light">High concentration for all-day performance.</p>
</div>
<div className="px-4 py-4">
<iconify-icon className="text-neutral-900 mb-4" icon="solar:star-circle-linear" width="36"></iconify-icon>
<h3 className="font-medium text-sm uppercase tracking-widest mb-2">Arabian Artistry</h3>
<p className="text-neutral-500 text-sm font-light">Authentic blending techniques.</p>
</div>
</div>
</div>
</section>



    </>
  );
}
