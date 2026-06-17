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
colors: {
bra: {
brown: '#8B4513',
brownLight: '#A0522D',
gold: '#FFD700',
goldDim: '#E6C200',
beige: '#F5F5DC',
green: '#228B22',
black: '#0F0F0F',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Manrope', 'sans-serif'],
serif: ['Instrument Serif', 'serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
wide: '0.05em',
},
animation: {
'fade-up': 'fadeUp 0.8s ease-out forwards',
'scale-subtle': 'scaleSubtle 10s linear infinite alternate',
'pour': 'pourStream 2s ease-in-out infinite',
'spin-slow': 'spin 12s linear infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
scaleSubtle: {
'0%': { transform: 'scale(1)' },
'100%': { transform: 'scale(1.05)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Reveal Animations on Scroll
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-text').forEach(el => observer.observe(el));

        // Custom Cursor Logic
        const cursorDot = document.querySelector('.cursor-dot');
        
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            
            // Simple follow
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
        });

        // Hover effect for cursor
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(2.5)';
                cursorDot.style.backgroundColor = 'rgba(255, 215, 0, 0.5)'; // Gold
            });
            el.addEventListener('mouseleave', () => {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorDot.style.backgroundColor = '#8B4513'; // Brown
            });
        });

        // Navbar Scroll Effect
        const nav = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md');
                nav.classList.replace('py-5', 'py-3');
            } else {
                nav.classList.remove('shadow-md');
                nav.classList.replace('py-3', 'py-5');
            }
        });
    
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
      

<div className="cursor-dot hidden md:block" style={{left: '708px', top: '323px', transform: 'translate(-50%, -50%) scale(1)', backgroundColor: 'rgb(139, 69, 19)'}}></div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 transition-all duration-300 bg-bra-beige/95 backdrop-blur-md border-b border-bra-brown/10" id="navbar">
<div className="max-w-7xl mx-auto flex justify-between items-center">

<a className="flex items-center gap-3 group" href="#">

<div className="h-14 w-auto aspect-[3/1] relative">
<img alt="BRA's Beer Brand Logo" className="w-full h-full object-contain object-left" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d9cf1ed-e08f-4153-8673-c191574d925e_800w.png"/>
</div>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-xs font-medium tracking-widest uppercase text-bra-brown/80 hover:text-bra-brown transition-colors" href="#heritage">Heritage</a>
<a className="text-xs font-medium tracking-widest uppercase text-bra-brown/80 hover:text-bra-brown transition-colors" href="#product">Product</a>
<a className="text-xs font-medium tracking-widest uppercase text-bra-brown/80 hover:text-bra-brown transition-colors" href="#locator">Find Store</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex bg-bra-brown text-white px-6 py-2 rounded-full text-xs font-semibold tracking-wide uppercase hover:bg-bra-gold hover:text-bra-brown transition-all duration-300 shadow-lg shadow-bra-brown/20 transform hover:-translate-y-0.5">
                    Contact Us
                </button>
<button className="md:hidden text-bra-brown">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-[95vh] md:h-screen overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 w-full h-full z-0">
<img alt="Pouring Sorghum Beer" className="w-full h-full object-cover animate-scale-subtle opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/50c6d569-1567-42fe-9988-41d179c583ed_3840w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-b from-bra-black/30 via-bra-brown/20 to-bra-beige"></div>
<div className="absolute inset-0 bg-gradient-to-r from-bra-brown/60 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20 flex flex-col items-center">

<div className="w-24 h-40 md:w-32 md:h-48 mb-6 animate-float relative z-20">

<img alt="BRA's Beer Carton" className="w-full h-full object-contain drop-shadow-2xl filter brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1bac468d-4c80-4735-a5fe-704065b2a23e_320w.png" style={{}}/>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-6 animate-fade-up">
<span className="w-2 h-2 rounded-full bg-bra-gold animate-pulse"></span>
<span className="text-[10px] font-bold uppercase tracking-widest text-white">Daily Fresh Brew</span>
</div>
<h1 className="font-display text-white text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] mb-8 drop-shadow-lg reveal-text active">
                TASTES LIKE <br/>
<span className="font-serif italic text-bra-gold">HOME.</span>
</h1>
<p className="font-sans text-white/90 text-sm md:text-lg max-w-lg mx-auto leading-relaxed mb-12 font-light reveal-text" style={{}}>
                A Lekker Legacy in every sip. We blend generations of African brewing knowledge with pure sorghum to bring you the authentic taste of the Motherland.
            </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center reveal-text" style={{}}>
<a className="group relative px-8 py-4 bg-bra-brown text-white rounded-full text-xs font-bold uppercase tracking-widest overflow-hidden shadow-2xl hover:shadow-bra-gold/20 transition-all" href="#product">
<div className="absolute inset-0 w-full h-full bg-bra-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative z-10 group-hover:text-bra-brown transition-colors">Discover BRA's Beer</span>
</a>
<a className="group flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest hover:text-bra-gold transition-colors" href="#locator">
<span>Find a Store</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</header>

<div className="bg-bra-brown py-4 border-y border-bra-gold/20 overflow-hidden relative z-20">
<div className="marquee-container text-bra-beige/80">
<div className="marquee-content font-display text-2xl md:text-4xl font-medium tracking-tight uppercase items-center">
<span>Authentic Sorghum</span>
<span className="w-2 h-2 rounded-full bg-bra-gold"></span>
<span className="font-serif italic text-bra-gold">Rich &amp; Creamy</span>
<span className="w-2 h-2 rounded-full bg-bra-gold"></span>
<span>Brewed Daily</span>
<span className="w-2 h-2 rounded-full bg-bra-gold"></span>
<span>Traditional Recipe</span>
<span className="w-2 h-2 rounded-full bg-bra-gold"></span>
<span className="font-serif italic text-bra-gold">Ubuntu Spirit</span>
</div>
<div aria-hidden="true" className="marquee-content font-display text-2xl md:text-4xl font-medium tracking-tight uppercase items-center">
<span>Authentic Sorghum</span>
<span className="w-2 h-2 rounded-full bg-bra-gold"></span>
<span className="font-serif italic text-bra-gold">Rich &amp; Creamy</span>
<span className="w-2 h-2 rounded-full bg-bra-gold"></span>
<span>Brewed Daily</span>
<span className="w-2 h-2 rounded-full bg-bra-gold"></span>
<span>Traditional Recipe</span>
<span className="w-2 h-2 rounded-full bg-bra-gold"></span>
<span className="font-serif italic text-bra-gold">Ubuntu Spirit</span>
</div>
</div>
</div>

<section className="py-24 px-6 md:px-12 bg-bra-beige relative overflow-hidden" id="heritage">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bra-gold/10 rounded-full blur-[100px]"></div>
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div>
<h2 className="font-display text-4xl md:text-6xl font-medium tracking-tighter text-bra-brown mb-4">
                        JOIN THE <br/>
<span className="font-serif italic text-gradient-heritage">#SipTheHeritage</span>
</h2>
<p className="text-bra-brown/60 max-w-md leading-relaxed font-light">
                        More than just a beer. It's a celebration of where we come from and the community that moves us forward.
                    </p>
</div>

<div className="hidden md:block w-20 h-32 relative">

<img alt="BRA's Beer Carton" className="w-full h-full object-contain opacity-50 grayscale hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/daa88be2-89a2-4406-ac1a-e3a913f64629_320w.png"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-white border border-bra-brown/5 hover:border-bra-gold/50 transition-all duration-500 hover:shadow-xl hover:shadow-bra-brown/5 relative overflow-hidden reveal-text">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-full bg-bra-beige flex items-center justify-center text-bra-brown group-hover:bg-bra-gold group-hover:text-bra-brown transition-colors">
<svg className="lucide lucide-scroll w-6 h-6" data-lucide="scroll" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17V5a2 2 0 0 0-2-2H4"></path><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path></svg>
</div>

<div className="w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity">
<img className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/daa88be2-89a2-4406-ac1a-e3a913f64629_320w.png" style={{}}/>
</div>
</div>
<h3 className="font-display text-xl font-bold text-bra-brown mb-3">Generations of Knowledge</h3>
<p className="text-sm text-bra-brown/60 leading-relaxed">
                        Recipes passed down through family lines, preserving the ancient art of sorghum fermentation unique to BRA's Beer.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-bra-brown text-white border border-bra-brown transition-all duration-500 hover:shadow-xl hover:shadow-bra-brown/20 relative overflow-hidden reveal-text" style={{}}>
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-bra-gold group-hover:bg-bra-gold group-hover:text-bra-brown transition-colors">
<svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>

<div className="w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity">
<img className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/daa88be2-89a2-4406-ac1a-e3a913f64629_320w.png" style={{}}/>
</div>
</div>
<h3 className="font-display text-xl font-bold mb-3">Ubuntu Spirit</h3>
<p className="text-sm text-white/70 leading-relaxed">
                        "I am because we are." Every carton of BRA's Beer is brewed to be shared, fostering connection in our communities.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-bra-brown/5 hover:border-bra-green/30 transition-all duration-500 hover:shadow-xl hover:shadow-bra-green/5 relative overflow-hidden reveal-text" style={{}}>
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-full bg-bra-beige flex items-center justify-center text-bra-green mb-6 group-hover:bg-bra-green group-hover:text-white transition-colors">
<svg className="lucide lucide-leaf w-6 h-6" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>

<div className="w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity">
<img className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/daa88be2-89a2-4406-ac1a-e3a913f64629_320w.png" style={{}}/>
</div>
</div>
<h3 className="font-display text-xl font-bold text-bra-brown mb-3">Refill Revolution</h3>
<p className="text-sm text-bra-brown/60 leading-relaxed">
                        Honoring the earth by minimizing waste. Our sustainable practices ensure the land stays fertile.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="product">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

<div className="w-full lg:w-1/2 relative group">

<div className="absolute inset-0 bg-bra-gold/20 rounded-[3rem] rotate-3 transform transition-transform group-hover:rotate-6 duration-700"></div>
<div className="absolute inset-0 bg-bra-brown rounded-[3rem] -rotate-2"></div>
<div className="relative bg-bra-beige rounded-[3rem] overflow-hidden aspect-[4/5] flex items-center justify-center shadow-2xl">

<div className="w-4/5 h-4/5 relative z-10">
<img alt="BRA's Beer 1L Carton" className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/50c6d569-1567-42fe-9988-41d179c583ed_1600w.jpg"/>
</div>

<div className="absolute top-8 right-8 bg-white px-4 py-2 rounded-full shadow-lg z-20">
<span className="text-xs font-bold text-bra-brown uppercase tracking-wider">1 Litre</span>
</div>
<div className="absolute bottom-8 left-8 bg-bra-green text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-20">
<svg className="lucide lucide-check-circle w-3 h-3" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-xs font-bold uppercase tracking-wider">Daily Fresh</span>
</div>
</div>
</div>

<div className="w-full lg:w-1/2">
<span className="text-bra-gold font-serif italic text-2xl mb-2 block">Our Pride</span>
<h2 className="font-display text-5xl md:text-6xl font-medium text-bra-brown tracking-tighter leading-tight mb-8">
                        THE 1L LEGACY  CARTON
                    </h2>
<div className="space-y-8 mb-10">
<div className="flex gap-4 items-start reveal-text">
<div className="w-10 h-10 rounded-full border border-bra-brown/20 flex items-center justify-center shrink-0">
<span className="font-serif italic text-bra-brown text-lg">01</span>
</div>
<div>
<h4 className="font-bold text-bra-brown mb-1">Rich &amp; Creamy Texture</h4>
<p className="text-sm text-bra-brown/60">Fermented to perfection giving you that smooth, satisfying mouthfeel unique to BRA's Beer.</p>
</div>
</div>
<div className="flex gap-4 items-start reveal-text" style={{}}>
<div className="w-10 h-10 rounded-full border border-bra-brown/20 flex items-center justify-center shrink-0">
<span className="font-serif italic text-bra-brown text-lg">02</span>
</div>
<div>
<h4 className="font-bold text-bra-brown mb-1">Active Fermentation</h4>
<p className="text-sm text-bra-brown/60">Alive with flavor. Our beer continues to develop character in the carton.</p>
</div>
</div>
<div className="flex gap-4 items-start reveal-text" style={{}}>
<div className="w-10 h-10 rounded-full border border-bra-brown/20 flex items-center justify-center shrink-0">
<span className="font-serif italic text-bra-brown text-lg">03</span>
</div>
<div className="">
<h4 className="font-bold text-bra-brown mb-1">Gathering Ready</h4>
<p className="text-sm text-bra-brown/60">The perfect companion for weddings, stokvels, and weekend braais.</p>
</div>
</div>
</div>
<div className="flex items-center gap-6 border-t border-bra-brown/10 pt-8">
<button className="bg-bra-brown text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-bra-brownLight transition-colors shadow-lg">
                            View Ingredients
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-bra-beige border-b border-bra-brown/10" id="locator">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-3xl p-6 shadow-sm border border-bra-brown/5">

<div className="lg:col-span-4 flex flex-col h-[600px]">
<h2 className="font-display text-3xl font-medium tracking-tighter text-bra-brown mb-6">WHERE TO BUY</h2>
<div className="relative mb-6">
<input className="w-full bg-bra-beige border-none rounded-xl py-3 pl-4 pr-12 text-sm text-bra-brown focus:ring-2 focus:ring-bra-gold outline-none placeholder:text-bra-brown/40" placeholder="Enter your suburb or postal code" type="text"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-bra-brown hover:text-bra-gold transition-colors">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</div>
<div className="flex-1 overflow-y-auto pr-2 space-y-4 hide-scrollbar">

<div className="p-4 rounded-xl bg-bra-beige/50 border border-transparent hover:border-bra-brown/20 cursor-pointer transition-all">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">

<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden border border-bra-brown/10">
<img className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1bac468d-4c80-4735-a5fe-704065b2a23e_320w.png" style={{}}/>
</div>
<h4 className="font-bold text-bra-brown text-sm">Soweto Central Depot</h4>
</div>
<span className="text-[10px] bg-bra-green/10 text-bra-green px-2 py-0.5 rounded-full font-bold">OPEN</span>
</div>
<p className="text-xs text-bra-brown/60 mb-3 pl-8">142 Vilakazi Street, Orlando West</p>
<a className="ml-8 text-[10px] font-bold uppercase tracking-widest text-bra-brown border-b border-bra-brown/20 hover:border-bra-brown" href="#">Get Directions</a>
</div>

<div className="p-4 rounded-xl bg-white border border-bra-brown/10 cursor-pointer transition-all hover:shadow-md">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">

<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden border border-bra-brown/10">
<img className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d9cf1ed-e08f-4153-8673-c191574d925e_320w.png"/>
</div>
<h4 className="font-bold text-bra-brown text-sm">Alexandra Bottle Store</h4>
</div>
<span className="text-[10px] bg-bra-green/10 text-bra-green px-2 py-0.5 rounded-full font-bold">OPEN</span>
</div>
<p className="text-xs text-bra-brown/60 mb-3 pl-8">88 Roosevelt Street, Alexandra</p>
<a className="ml-8 text-[10px] font-bold uppercase tracking-widest text-bra-brown border-b border-bra-brown/20 hover:border-bra-brown" href="#">Get Directions</a>
</div>

<div className="p-4 rounded-xl bg-white border border-bra-brown/10 cursor-pointer transition-all hover:shadow-md">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">

<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden border border-bra-brown/10">
<img className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d9cf1ed-e08f-4153-8673-c191574d925e_320w.png"/>
</div>
<h4 className="font-bold text-bra-brown text-sm">Tembisa Distributors</h4>
</div>
<span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">CLOSING SOON</span>
</div>
<p className="text-xs text-bra-brown/60 mb-3 pl-8">Unit 5, Industrial Park, Tembisa</p>
<a className="ml-8 text-[10px] font-bold uppercase tracking-widest text-bra-brown border-b border-bra-brown/20 hover:border-bra-brown" href="#">Get Directions</a>
</div>
</div>
</div>

<div className="lg:col-span-8 bg-bra-beige rounded-2xl overflow-hidden relative min-h-[400px]">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.73496839369!2d27.886776850000003!3d-26.24927295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a639722339dd%3A0x6b4477c7f33d7808!2sSoweto%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1715423851000!5m2!1sen!2sus" style={{border: '0', filter: 'grayscale(1) sepia(0.2) contrast(1.2)'}} width="100%"></iframe>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="relative group">
<div className="w-16 h-16 bg-bra-brown rounded-full flex items-center justify-center text-bra-gold shadow-2xl z-10 relative border-4 border-white overflow-hidden">

<img alt="BRA's Beer Marker" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d9cf1ed-e08f-4153-8673-c191574d925e_320w.png"/>
</div>
<div className="absolute top-16 left-1/2 -translate-x-1/2 w-4 h-2 bg-bra-brown rotate-45 transform origin-top-left"></div>

<div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
<span className="text-xs font-bold text-bra-brown">BRA's Beer HQ</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex justify-between items-end mb-12">
<h2 className="font-display text-4xl font-medium tracking-tighter text-bra-brown">LATEST NEWS</h2>
<a className="hidden md:block text-xs font-bold uppercase tracking-widest text-bra-brown border-b border-bra-brown pb-1 hover:text-bra-gold hover:border-bra-gold transition-colors" href="/news">View All Stories</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="overflow-hidden rounded-2xl mb-4 aspect-video relative">
<div className="absolute inset-0 bg-bra-brown/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Harvest" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/50c6d569-1567-42fe-9988-41d179c583ed_800w.jpg"/>

<div className="absolute bottom-2 right-2 w-10 h-16 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
<img className="w-full h-full object-contain drop-shadow-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d9cf1ed-e08f-4153-8673-c191574d925e_320w.png"/>
</div>
</div>
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-bold uppercase tracking-widest text-bra-gold bg-bra-brown px-2 py-1 rounded">Heritage</span>
<span className="text-[10px] text-bra-brown/50">Oct 12, 2023</span>
</div>
<h3 className="font-display text-xl font-bold text-bra-brown mb-2 group-hover:text-bra-brownLight transition-colors">Honoring the Sorghum Harvest</h3>
<p className="text-sm text-bra-brown/60 line-clamp-2">How we work with local farmers to ensure the highest quality grain for every brew.</p>
</article>

<article className="group cursor-pointer">
<div className="overflow-hidden rounded-2xl mb-4 aspect-video relative">
<div className="absolute inset-0 bg-bra-brown/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Community" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79c1f966-ef8d-48ce-b7ff-21cdd3034b2d_800w.jpg"/>

<div className="absolute bottom-2 right-2 w-10 h-16 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
<img className="w-full h-full object-contain drop-shadow-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d9cf1ed-e08f-4153-8673-c191574d925e_320w.png"/>
</div>
</div>
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-bold uppercase tracking-widest text-bra-brown bg-bra-gold px-2 py-1 rounded">Community</span>
<span className="text-[10px] text-bra-brown/50">Sep 28, 2023</span>
</div>
<h3 className="font-display text-xl font-bold text-bra-brown mb-2 group-hover:text-bra-brownLight transition-colors">BRA's Beer at the Soweto Wine &amp; Beer Fest</h3>
<p className="text-sm text-bra-brown/60 line-clamp-2">A recap of our weekend sharing the Ubuntu spirit with thousands of fans.</p>
</article>

<article className="group cursor-pointer">
<div className="overflow-hidden rounded-2xl mb-4 aspect-video relative">
<div className="absolute inset-0 bg-bra-brown/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Production" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e752b521-de4d-4042-9c15-a5c9f49cc138_800w.png"/>

<div className="absolute bottom-2 right-2 w-10 h-16 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
<img className="w-full h-full object-contain drop-shadow-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d9cf1ed-e08f-4153-8673-c191574d925e_320w.png"/>
</div>
</div>
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-bold uppercase tracking-widest text-white bg-bra-green px-2 py-1 rounded">Sustainability</span>
<span className="text-[10px] text-bra-brown/50">Sep 15, 2023</span>
</div>
<h3 className="font-display text-xl font-bold text-bra-brown mb-2 group-hover:text-bra-brownLight transition-colors">Reducing our Water Footprint</h3>
<p className="text-sm text-bra-brown/60 line-clamp-2">New technologies in our brewery allow us to make more beer with less water.</p>
</article>
</div>
</div>
</section>

<footer className="bg-bra-brown text-white pt-24 pb-12 border-t-4 border-bra-gold">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-1">

<div className="w-40 h-16 relative mb-6">
<img alt="BRA's Beer Footer Logo" className="w-full h-full object-contain object-left" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b4b7cdd-7de2-4f8b-8c7d-d168b37ab7fa_320w.png"/>
</div>
<p className="text-white/60 text-sm leading-relaxed mb-6">
                        Brewed with pride. Shared with love. The authentic taste of South African heritage in every 1L carton of BRA's Beer.
                    </p>
<div className="flex gap-4">
<a className="hover:text-bra-gold transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="hover:text-bra-gold transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-bra-gold transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>

<div>
<h4 className="font-bold text-xs uppercase tracking-widest text-bra-gold mb-6">Explore</h4>
<ul className="space-y-4 text-sm text-white/70">
<li><a className="hover:text-white transition-colors" href="#heritage">Our Heritage</a></li>
<li><a className="hover:text-white transition-colors" href="#product">Products</a></li>
<li><a className="hover:text-white transition-colors" href="#news">News</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-xs uppercase tracking-widest text-bra-gold mb-6">Support</h4>
<ul className="space-y-4 text-sm text-white/70">
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Use</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-xs uppercase tracking-widest text-bra-gold mb-6">Get in Touch</h4>
<ul className="space-y-4 text-sm text-white/70">
<li className="flex items-center gap-3">
<svg className="lucide lucide-mail w-4 h-4 text-bra-gold" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                            sales@myurbanafrica.co.za
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-phone w-4 h-4 text-bra-gold" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                            +27 11 000 0000
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-map-pin w-4 h-4 text-bra-gold" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Johannesburg, South Africa
                        </li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 uppercase tracking-widest">
<p>© 2024 BRA's Beer. All rights reserved.</p>
<p className="mt-2 md:mt-0">Not for Sale to Persons Under the Age of 18.</p>
</div>
</div>
</footer>



    </>
  );
}
