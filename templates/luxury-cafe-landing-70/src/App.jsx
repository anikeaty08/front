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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 bg-[#FDFBF7]/80 backdrop-blur-lg border-b border-[#2C1E16]/10 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-xl font-semibold tracking-tighter text-[#1A110A] uppercase flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                Arambh
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2C1E16]/70">
<a className="hover:text-[#D4AF37] transition-colors" href="#about">About</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#menu">Menu</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#booking">Reservation</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#location">Contact</a>
</div>
<a className="hidden md:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#1A110A] rounded-full hover:bg-[#2C1E16] hover:shadow-[0_0_15px_rgba(26,17,10,0.3)] hover:-translate-y-0.5 transition-all duration-300" href="#booking">
<iconify-icon height="16" icon="solar:calendar-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
                Book Table
            </a>
<button className="md:hidden text-[#1A110A]">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center bg-[#1A110A] overflow-hidden pt-20">

<div className="absolute inset-0 w-full h-full">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay transform scale-105" loop="" muted="" playsinline="" style={{filter: 'contrast(1.2) brightness(0.7) sepia(0.3)'}}>

<source src="https://assets.mixkit.co/videos/preview/mixkit-barista-making-coffee-with-an-espresso-machine-4246-large.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-b from-[#1A110A]/80 via-[#2C1E16]/60 to-[#1A110A]/90 pointer-events-none"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/15 rounded-full blur-[120px] pointer-events-none"></div>

<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

<div className="absolute left-[10%] animate-float-1 w-5 h-7 bg-gradient-to-br from-[#4A3320] to-[#1A110A] rounded-full shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.6)] flex items-center justify-center opacity-0">
<div className="w-0.5 h-5 bg-black/60 rounded-full rotate-6"></div>
</div>

<div className="absolute left-[30%] animate-float-2 w-4 h-6 bg-gradient-to-br from-[#5C3A21] to-[#2C1E16] rounded-full shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.6)] flex items-center justify-center opacity-0">
<div className="w-0.5 h-4 bg-black/60 rounded-full rotate-12"></div>
</div>

<div className="absolute left-[50%] animate-float-3 w-6 h-8 bg-gradient-to-br from-[#4A3320] to-[#1A110A] rounded-full shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.6)] flex items-center justify-center opacity-0 filter blur-[1px]">
<div className="w-[3px] h-6 bg-black/60 rounded-full -rotate-6"></div>
</div>

<div className="absolute left-[70%] animate-float-4 w-5 h-7 bg-gradient-to-br from-[#3E2723] to-[#1A110A] rounded-full shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.6)] flex items-center justify-center opacity-0">
<div className="w-0.5 h-5 bg-black/60 rounded-full rotate-6"></div>
</div>

<div className="absolute left-[90%] animate-float-5 w-4 h-6 bg-gradient-to-br from-[#5C3A21] to-[#2C1E16] rounded-full shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.6)] flex items-center justify-center opacity-0 filter blur-[2px]">
<div className="w-0.5 h-4 bg-black/60 rounded-full rotate-12"></div>
</div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in">
<span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
<span className="text-xs font-medium text-[#FDFBF7] tracking-widest uppercase">Luxury Cafe</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white leading-[1.1] mb-6 drop-shadow-2xl animate-fade-in" style={{animationDelay: '0.2s', opacity: '0'}}>
                Welcome to <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FDFBF7]">Arambh Cafe</span>
</h1>
<p className="text-base md:text-xl text-[#FDFBF7]/80 font-light max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide drop-shadow-md animate-fade-in" style={{animationDelay: '0.4s', opacity: '0'}}>
                Premium Coffee • Cozy Atmosphere • Perfect Moments
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{animationDelay: '0.6s', opacity: '0'}}>
<a className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-[#1A110A] bg-[#D4AF37] rounded-full hover:bg-[#c29f2f] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-2" href="#menu">
                    View Menu
                    <iconify-icon height="18" icon="solar:cup-hot-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white bg-white/10 border border-white/20 backdrop-blur-md rounded-full hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-2" href="#booking">
                    Book a Table
                    <iconify-icon height="18" icon="solar:calendar-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-[bounce_2s_infinite]">
<span className="text-xs tracking-widest uppercase">Scroll</span>
<div className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
</div>
</section>

<section className="py-32 relative bg-[#FDFBF7]" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl group">
<img alt="Cozy Cafe Atmosphere" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=2047&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#1A110A]/60 via-transparent to-transparent opacity-80 transition-opacity duration-500"></div>
</div>
<div className="space-y-8">
<div>
<h2 className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">Our Story</h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1A110A] leading-tight">
                            A relaxing place <br/> for coffee lovers.
                        </h3>
</div>
<p className="text-base text-[#2C1E16]/80 font-light leading-relaxed">
                        Arambh Cafe is your elegant sanctuary in the heart of the city. Designed with warm lighting, luxurious dark wood elements, and comfortable seating, we offer a cozy atmosphere where friends can gather, relax, and create perfect moments over a beautifully crafted cup.
                    </p>
<p className="text-base text-[#2C1E16]/80 font-light leading-relaxed">
                        From freshly roasted premium beans to our delectable desserts, every element is curated to provide a luxurious and comforting experience. Whether you're catching up with loved ones or seeking a quiet moment of reflection, Arambh is your perfect destination.
                    </p>
<div className="pt-4 flex items-center gap-8">
<div className="flex flex-col">
<span className="text-3xl font-semibold tracking-tighter text-[#1A110A]">Premium</span>
<span className="text-xs text-[#2C1E16]/60 uppercase tracking-widest mt-1">Coffee Beans</span>
</div>
<div className="w-px h-12 bg-[#2C1E16]/10"></div>
<div className="flex flex-col">
<span className="text-3xl font-semibold tracking-tighter text-[#1A110A]">Cozy</span>
<span className="text-xs text-[#2C1E16]/60 uppercase tracking-widest mt-1">Atmosphere</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F5F0E6] relative" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">Our Menu</h2>
<h3 className="text-4xl font-semibold tracking-tight text-[#1A110A]">Handcrafted Selection</h3>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

<div className="group relative bg-[#FDFBF7] rounded-2xl shadow-[0_8px_30px_rgb(44,30,22,0.04)] hover:shadow-[0_20px_40px_rgb(44,30,22,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col border border-[#2C1E16]/5">
<div className="h-44 overflow-hidden relative">
<img alt="Hot Coffee" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<h5 className="text-base font-medium tracking-tight text-[#1A110A] group-hover:text-[#D4AF37] transition-colors">Hot Coffee</h5>
<span className="text-sm font-semibold text-[#1A110A]">₹120</span>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#FDFBF7] rounded-2xl shadow-[0_8px_30px_rgb(44,30,22,0.04)] hover:shadow-[0_20px_40px_rgb(44,30,22,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col border border-[#2C1E16]/5">
<div className="h-44 overflow-hidden relative">
<img alt="Cold Coffee" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<h5 className="text-base font-medium tracking-tight text-[#1A110A] group-hover:text-[#D4AF37] transition-colors">Cold Coffee</h5>
<span className="text-sm font-semibold text-[#1A110A]">₹150</span>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#FDFBF7] rounded-2xl shadow-[0_8px_30px_rgb(44,30,22,0.04)] hover:shadow-[0_20px_40px_rgb(44,30,22,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col border border-[#2C1E16]/5">
<div className="h-44 overflow-hidden relative">
<img alt="Cappuccino" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1572442388796-11668aa44f7b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<h5 className="text-base font-medium tracking-tight text-[#1A110A] group-hover:text-[#D4AF37] transition-colors">Cappuccino</h5>
<span className="text-sm font-semibold text-[#1A110A]">₹160</span>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#FDFBF7] rounded-2xl shadow-[0_8px_30px_rgb(44,30,22,0.04)] hover:shadow-[0_20px_40px_rgb(44,30,22,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col border border-[#2C1E16]/5">
<div className="h-44 overflow-hidden relative">
<img alt="Latte" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<h5 className="text-base font-medium tracking-tight text-[#1A110A] group-hover:text-[#D4AF37] transition-colors">Latte</h5>
<span className="text-sm font-semibold text-[#1A110A]">₹170</span>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#FDFBF7] rounded-2xl shadow-[0_8px_30px_rgb(44,30,22,0.04)] hover:shadow-[0_20px_40px_rgb(44,30,22,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col border border-[#2C1E16]/5">
<div className="h-44 overflow-hidden relative">
<img alt="Mocha" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<h5 className="text-base font-medium tracking-tight text-[#1A110A] group-hover:text-[#D4AF37] transition-colors">Mocha</h5>
<span className="text-sm font-semibold text-[#1A110A]">₹180</span>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#FDFBF7] rounded-2xl shadow-[0_8px_30px_rgb(44,30,22,0.04)] hover:shadow-[0_20px_40px_rgb(44,30,22,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col border border-[#2C1E16]/5">
<div className="h-44 overflow-hidden relative">
<img alt="Espresso" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<h5 className="text-base font-medium tracking-tight text-[#1A110A] group-hover:text-[#D4AF37] transition-colors">Espresso</h5>
<span className="text-sm font-semibold text-[#1A110A]">₹140</span>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#FDFBF7] rounded-2xl shadow-[0_8px_30px_rgb(44,30,22,0.04)] hover:shadow-[0_20px_40px_rgb(44,30,22,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col border border-[#2C1E16]/5">
<div className="h-44 overflow-hidden relative">
<img alt="Chocolate Dessert" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1559553156-2e97137af16f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<h5 className="text-base font-medium tracking-tight text-[#1A110A] group-hover:text-[#D4AF37] transition-colors truncate pr-2">Chocolate Dessert</h5>
<span className="text-sm font-semibold text-[#1A110A]">₹220</span>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#FDFBF7] rounded-2xl shadow-[0_8px_30px_rgb(44,30,22,0.04)] hover:shadow-[0_20px_40px_rgb(44,30,22,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col border border-[#2C1E16]/5">
<div className="h-44 overflow-hidden relative">
<img alt="Brownie with Ice Cream" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<h5 className="text-base font-medium tracking-tight text-[#1A110A] group-hover:text-[#D4AF37] transition-colors truncate pr-2">Brownie with Ice Cream</h5>
<span className="text-sm font-semibold text-[#1A110A]">₹240</span>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#FDFBF7] rounded-2xl shadow-[0_8px_30px_rgb(44,30,22,0.04)] hover:shadow-[0_20px_40px_rgb(44,30,22,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col border border-[#2C1E16]/5">
<div className="h-44 overflow-hidden relative">
<img alt="Cafe Sandwich" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<h5 className="text-base font-medium tracking-tight text-[#1A110A] group-hover:text-[#D4AF37] transition-colors truncate pr-2">Cafe Sandwich</h5>
<span className="text-sm font-semibold text-[#1A110A]">₹180</span>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#FDFBF7] rounded-2xl shadow-[0_8px_30px_rgb(44,30,22,0.04)] hover:shadow-[0_20px_40px_rgb(44,30,22,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col border border-[#2C1E16]/5">
<div className="h-44 overflow-hidden relative">
<img alt="French Fries" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<h5 className="text-base font-medium tracking-tight text-[#1A110A] group-hover:text-[#D4AF37] transition-colors truncate pr-2">French Fries</h5>
<span className="text-sm font-semibold text-[#1A110A]">₹150</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FDFBF7] overflow-hidden" id="gallery">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center">
<h2 className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">Gallery</h2>
<h3 className="text-4xl font-semibold tracking-tight text-[#1A110A]">Moments at Arambh</h3>
</div>

<div className="flex gap-6 px-6 overflow-x-auto snap-x snap-mandatory pb-12 hide-scrollbar">
<div className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] h-[350px] md:h-[450px] relative rounded-3xl overflow-hidden group shadow-lg">
<img alt="Pouring Coffee" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" />
<div className="absolute inset-0 bg-[#1A110A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</img></div>
<div className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] h-[350px] md:h-[450px] relative rounded-3xl overflow-hidden group shadow-lg">
<img alt="Latte Art" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" />
<div className="absolute inset-0 bg-[#1A110A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</img></div>
<div className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] h-[350px] md:h-[450px] relative rounded-3xl overflow-hidden group shadow-lg">
<img alt="Customers Enjoying" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" />
<div className="absolute inset-0 bg-[#1A110A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</img></div>
<div className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] h-[350px] md:h-[450px] relative rounded-3xl overflow-hidden group shadow-lg">
<img alt="Coffee Beans" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&amp;w=1974&amp;auto=format&amp;fit=crop" />
<div className="absolute inset-0 bg-[#1A110A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</img></div>
<div className="shrink-0 w-[5vw]"></div>
</div>
</section>

<section className="py-32 relative bg-[#1A110A] overflow-hidden" id="booking">

<div className="absolute inset-0 w-full h-full opacity-30">
<img alt="Cafe Background" className="w-full h-full object-cover blur-sm" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1A110A]/80"></div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-14 shadow-2xl">
<div className="text-center mb-10">
<h2 className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">Table Reservation</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">Book Your Experience</h3>
<p className="text-sm text-white/60 font-light max-w-md mx-auto">Reserve a table at Arambh Cafe to enjoy premium coffee in our cozy luxury atmosphere.</p>
</div>
<form className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-white/80 tracking-wide">Full Name</label>
<input className="w-full bg-[#1A110A]/60 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] focus:bg-[#1A110A] transition-all duration-300" placeholder="Your Name" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-white/80 tracking-wide">Phone Number</label>
<input className="w-full bg-[#1A110A]/60 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] focus:bg-[#1A110A] transition-all duration-300" placeholder="Your Phone Number" type="tel"/>
</div>
<div className="flex flex-col gap-2 relative">
<label className="text-xs font-medium text-white/80 tracking-wide">Date</label>
<input className="w-full bg-[#1A110A]/60 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] focus:bg-[#1A110A] transition-all duration-300 [&amp;::-webkit-calendar-picker-indicator]:filter [&amp;::-webkit-calendar-picker-indicator]:invert [&amp;::-webkit-calendar-picker-indicator]:opacity-60 hover:[&amp;::-webkit-calendar-picker-indicator]:opacity-100 cursor-pointer" type="date"/>
</div>
<div className="flex flex-col gap-2 relative">
<label className="text-xs font-medium text-white/80 tracking-wide">Time (11 AM to 11 PM)</label>
<div className="relative">
<select className="w-full bg-[#1A110A]/60 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] focus:bg-[#1A110A] transition-all duration-300 appearance-none cursor-pointer">
<option className="text-white/50" disabled="" selected="" value="">Select Time</option>
<option className="text-[#1A110A]" value="11:00 AM">11:00 AM</option>
<option className="text-[#1A110A]" value="12:00 PM">12:00 PM</option>
<option className="text-[#1A110A]" value="1:00 PM">1:00 PM</option>
<option className="text-[#1A110A]" value="2:00 PM">2:00 PM</option>
<option className="text-[#1A110A]" value="3:00 PM">3:00 PM</option>
<option className="text-[#1A110A]" value="4:00 PM">4:00 PM</option>
<option className="text-[#1A110A]" value="5:00 PM">5:00 PM</option>
<option className="text-[#1A110A]" value="6:00 PM">6:00 PM</option>
<option className="text-[#1A110A]" value="7:00 PM">7:00 PM</option>
<option className="text-[#1A110A]" value="8:00 PM">8:00 PM</option>
<option className="text-[#1A110A]" value="9:00 PM">9:00 PM</option>
<option className="text-[#1A110A]" value="10:00 PM">10:00 PM</option>
<option className="text-[#1A110A]" value="11:00 PM">11:00 PM</option>
</select>
<div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-white/50">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="md:col-span-2 mt-6">
<button className="w-full py-4 text-sm font-semibold text-[#1A110A] bg-[#D4AF37] rounded-xl hover:bg-[#c29f2f] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex justify-center items-center gap-2" type="submit">
                            Confirm Reservation
                            <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</section>

<section className="py-32 bg-[#F5F0E6]" id="location">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#FDFBF7] border border-[#2C1E16]/10 rounded-[2rem] shadow-[0_20px_40px_rgb(44,30,22,0.06)] overflow-hidden">

<div className="p-10 md:p-16 flex flex-col justify-center">
<h3 className="text-3xl font-semibold tracking-tight text-[#1A110A] mb-2">Visit Arambh Cafe</h3>
<p className="text-sm text-[#2C1E16]/70 font-light mb-10">We'd love to hear from you. Reach out or visit us for a perfect coffee experience.</p>
<div className="space-y-8 mb-10">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-[#1A110A]/5 flex items-center justify-center text-[#D4AF37] shrink-0">
<iconify-icon height="24" icon="solar:map-point-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div className="pt-1">
<h4 className="text-sm font-medium text-[#1A110A] mb-1">Location</h4>
<p className="text-xs text-[#2C1E16]/70 font-light leading-relaxed">
                                    Nehru Foundation for Development,<br/>
                                    Inside CEEE Campus,<br/>
                                    Ahmedabad, Gujarat 380054, India
                                </p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-[#1A110A]/5 flex items-center justify-center text-[#D4AF37] shrink-0">
<iconify-icon height="24" icon="solar:phone-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div className="pt-1">
<h4 className="text-sm font-medium text-[#1A110A] mb-1">Phone Number</h4>
<p className="text-xs text-[#2C1E16]/70 font-light leading-relaxed">9099581803</p>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold text-[#FDFBF7] bg-[#1A110A] rounded-xl hover:bg-[#2C1E16] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" href="tel:+919099581803">
<iconify-icon height="20" icon="solar:phone-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
                            Call Us Now
                        </a>
<a className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold text-[#1A110A] bg-transparent border border-[#1A110A]/20 rounded-xl hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:-translate-y-0.5 transition-all duration-300" href="https://wa.me/919099581803" target="_blank">
<iconify-icon height="20" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
                            WhatsApp Chat
                        </a>
</div>
</div>

<div className="relative h-[400px] lg:h-auto bg-[#EBE5D9]">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.867540251781!2d72.5089334150616!3d23.028639221884485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b278ca1ea8d%3A0xa196f7c164d1fce!2sNehru%20Foundation%20for%20Development!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" style={{border: '0', filter: 'grayscale(80%) sepia(20%) contrast(1.1) opacity(0.9)'}} width="100%"></iframe>

<div className="absolute bottom-6 left-6 right-6 bg-[#FDFBF7]/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white">
<h4 className="text-sm font-semibold tracking-tight text-[#1A110A] mb-1">Arambh Cafe</h4>
<p className="text-xs text-[#2C1E16]/70 mb-4 font-light">Inside CEEE Campus, Ahmedabad</p>
<div className="flex items-center gap-4">
<a className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1A110A]/5 text-[#1A110A] hover:bg-[#D4AF37] hover:text-white transition-colors" href="https://goo.gl/maps/xyz" target="_blank">
<iconify-icon height="16" icon="solar:routing-linear" width="16"></iconify-icon>
</a>
<span className="text-xs font-medium text-[#D4AF37]">Get Directions</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1A110A] text-white/60 pt-20 pb-10 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="text-2xl font-semibold tracking-tighter text-white uppercase flex items-center gap-2 mb-6" href="#">
<span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                        Arambh
                    </a>
<p className="text-xs font-light leading-relaxed mb-6 max-w-xs text-white/50">
                        Elevating the coffee experience through craftsmanship, cozy luxury environments, and perfect moments.
                    </p>
<div className="flex items-center gap-4">
<a className="text-white/40 hover:text-[#D4AF37] transition-colors" href="#">
<iconify-icon height="20" icon="solar:instagram-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</a>
<a className="text-white/40 hover:text-[#D4AF37] transition-colors" href="#">
<iconify-icon height="20" icon="solar:letter-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</a>
<a className="text-white/40 hover:text-[#D4AF37] transition-colors" href="#">
<iconify-icon height="20" icon="solar:global-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white text-sm font-medium tracking-wide mb-6">Explore</h4>
<ul className="space-y-3 text-xs font-light">
<li><a className="hover:text-white transition-colors" href="#about">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#menu">Menu</a></li>
<li><a className="hover:text-white transition-colors" href="#gallery">Gallery</a></li>
<li><a className="hover:text-white transition-colors" href="#booking">Book a Table</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-medium tracking-wide mb-6">Contact</h4>
<ul className="space-y-4 text-xs font-light">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-[#D4AF37]" height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>Nehru Foundation for Dev,<br/> Inside CEEE Campus,<br/> Ahmedabad, 380054</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#D4AF37]" height="16" icon="solar:phone-linear" width="16"></iconify-icon>
<span>9099581803</span>
</li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-medium tracking-wide mb-6">Opening Hours</h4>
<ul className="space-y-3 text-xs font-light">
<li className="flex justify-between border-b border-white/10 pb-2">
<span>Monday - Sunday</span>
<span className="text-white font-medium text-[#D4AF37]">11:00 AM - 11:00 PM</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-white/30">
<p>© 2024 Arambh Cafe. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white/60 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white/60 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
