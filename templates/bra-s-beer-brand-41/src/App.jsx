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
sans: ['Manrope', 'Onest', 'sans-serif'],
},
colors: {
brand: {
brown: '#8B4513',
brownDark: '#5D2E0C',
gold: '#FFD700',
goldLight: '#FFE55C',
cream: '#F5F5DC',
green: '#228B22',
dark: '#0f0f0f',
surface: '#FAFAF5'
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'float': 'float 6s ease-in-out infinite',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: 0, transform: 'translateY(20px)' },
'100%': { opacity: 1, transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        lucide.createIcons();

        // Simple Intersection Observer for Fade Up Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    entry.target.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Target elements that need animation but aren't animated on load
        document.querySelectorAll('section:not(#home) h2, section:not(#home) .group').forEach(el => {
            el.style.opacity = '0';
            el.style.animationFillMode = 'forwards';
            observer.observe(el);
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
      

<nav className="fixed w-full z-50 transition-all duration-300 top-0 glass">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-24">

<a className="flex items-center gap-3 group relative z-10" href="#">
<div className="relative h-14 w-auto flex items-center justify-center">
<img alt="BRA's Beer Logo" className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/daa88be2-89a2-4406-ac1a-e3a913f64629_320w.png"/>
</div>
</a>

<div className="hidden lg:flex items-center gap-10">
<div className="flex items-center gap-8 bg-white/40 px-6 py-3 rounded-full border border-white/40 shadow-sm backdrop-blur-sm">
<a className="text-sm font-medium text-stone-600 hover:text-brand-brown transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-stone-600 hover:text-brand-brown transition-colors" href="#products">Products</a>
<a className="text-sm font-medium text-stone-600 hover:text-brand-brown transition-colors" href="#franchising">Distribution</a>
<a className="text-sm font-medium text-stone-600 hover:text-brand-brown transition-colors" href="#news">News</a>
</div>
</div>

<div className="hidden lg:flex items-center gap-4">
<a className="px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-brand-brown border border-brand-brown/20 rounded-full hover:bg-brand-brown hover:text-brand-gold transition-all duration-300 flex items-center gap-2" href="#store">
<i className="w-3 h-3" data-lucide="map-pin"></i>
                        Find Store
                    </a>
</div>

<button className="lg:hidden p-2 text-brand-brown hover:bg-brand-brown/5 rounded-lg transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-24 overflow-hidden" id="home">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 -z-10 animate-pulse-slow"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-brown/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-0">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1 opacity-0 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 border border-brand-brown/10 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_8px_#FFD700]"></span>
<span className="text-xs font-semibold text-brand-brown tracking-widest uppercase">Authentic Mzansi Brew</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold text-stone-900 leading-[1.05] tracking-tight mb-6">
                        Tastes Like <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-brown via-brand-brownDark to-brand-brown">Home.</span>
</h1>
<p className="text-lg text-stone-600 leading-relaxed mb-10 max-w-lg font-medium opacity-90">
                        A Lekker Legacy in every sip. **BRA's Beer** blends generations of brewing knowledge with pure sorghum to bring you the authentic taste of South Africa.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-4 text-sm font-semibold text-brand-gold bg-brand-brown rounded-xl hover:bg-brand-brownDark transition-all shadow-xl shadow-brand-brown/20 hover:-translate-y-1 group" href="#products">
                            Discover **BRA's Beer**
                            <i className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex justify-center items-center px-8 py-4 text-sm font-semibold text-stone-700 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 transition-all hover:border-stone-300" href="#franchising">
                            Partner With Us
                        </a>
</div>
<div className="mt-12 flex items-center gap-8 opacity-70">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-stone-200 border-2 border-brand-cream overflow-hidden"><img alt="User" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70fabd17-2d3f-4928-b44e-82be3af85377_320w.png"/></div>
<div className="w-10 h-10 rounded-full bg-stone-300 border-2 border-brand-cream overflow-hidden"><img alt="User" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70fabd17-2d3f-4928-b44e-82be3af85377_320w.png"/></div>
<div className="w-10 h-10 rounded-full bg-stone-400 border-2 border-brand-cream overflow-hidden"><img alt="User" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70fabd17-2d3f-4928-b44e-82be3af85377_320w.png"/></div>
</div>
<div className="text-xs font-semibold text-stone-600">
<span className="text-brand-brown">10k+</span> Happy Customers
                        </div>
</div>
</div>

<div className="order-1 lg:order-2 relative h-[500px] flex items-center justify-center opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>

<div className="absolute w-[450px] h-[450px] border border-brand-brown/5 rounded-full animate-spin-slow dashed-border"></div>
<div className="absolute w-[350px] h-[350px] border border-brand-brown/10 rounded-full"></div>

<div className="relative w-72 h-[450px] animate-float z-20 group">
<img alt="BRA's Beer Carton" className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70fabd17-2d3f-4928-b44e-82be3af85377_800w.png"/>

<div className="absolute -right-6 bottom-12 bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/40 animate-bounce delay-700">
<div className="text-[10px] font-bold text-brand-brown uppercase">Best Served Chilled</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<span className="text-brand-brown font-semibold tracking-widest uppercase text-xs mb-3 block">#RefillRevolution</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-stone-900 mb-6 tracking-tight">Join the <span className="text-brand-brown">#SipTheHeritage</span> Movement</h2>
<p className="text-lg text-stone-600 mb-10 font-medium leading-relaxed">Honoring African traditions through sustainable brewing and community spirit. **BRA's Beer** is more than just a brand; we are a custodian of culture, preserving the Ubuntu spirit in every carton.</p>
<div className="grid grid-cols-2 gap-6">
<div className="p-6 rounded-2xl bg-brand-surface border border-brand-brown/5 hover:border-brand-brown/20 transition-all duration-300 group relative overflow-hidden">
<div className="flex items-center gap-3 mb-2 relative z-10">
<i className="w-5 h-5 text-brand-brown group-hover:rotate-180 transition-transform duration-700" data-lucide="hourglass"></i>
<span className="font-bold text-2xl text-stone-900">70+</span>
</div>
<p className="text-sm text-stone-500 font-semibold relative z-10">Years Experience</p>

<img alt="watermark" className="absolute -bottom-4 -right-4 w-20 h-20 opacity-10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cfa53296-2643-465d-8802-9d32ed81a5c3_320w.png"/>
</div>
<div className="p-6 rounded-2xl bg-brand-green/5 border border-brand-green/10 hover:border-brand-green/30 transition-all duration-300 group relative overflow-hidden">
<div className="flex items-center gap-3 mb-2 relative z-10">
<i className="w-5 h-5 text-brand-green group-hover:scale-110 transition-transform" data-lucide="leaf"></i>
<span className="font-bold text-2xl text-stone-900">100%</span>
</div>
<p className="text-sm text-stone-500 font-semibold relative z-10">Recyclable</p>

<img alt="watermark" className="absolute -bottom-4 -right-4 w-20 h-20 opacity-10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cfa53296-2643-465d-8802-9d32ed81a5c3_320w.png"/>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full">
<div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-stone-100 group">

<div className="absolute inset-0 bg-brand-brown/5 mix-blend-multiply"></div>
<div className="absolute inset-0 flex items-center justify-center">

<img alt="Community drinking BRA's Beer" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/50c6d569-1567-42fe-9988-41d179c583ed_800w.jpg"/>
</div>

<div className="absolute top-6 right-6 w-20 h-auto z-20">
<img alt="Logo Overlay" className="w-full opacity-80 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cfa53296-2643-465d-8802-9d32ed81a5c3_320w.png"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-surface relative" id="products">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-brand-brown font-bold tracking-widest uppercase text-xs mb-2 block">Our Collection</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-stone-900 tracking-tight">Authentic Sorghum Brews</h2>
</div>

<div className="relative bg-white rounded-[2rem] p-8 lg:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-stone-100 overflow-hidden group hover:shadow-[0_25px_50px_-12px_rgba(139,69,19,0.1)] transition-all duration-500 hover:-translate-y-1">

<div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-cream/30 to-transparent -skew-x-12 translate-x-32 z-0"></div>
<div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="flex-1 flex justify-center">
<div className="w-72 h-96 bg-gradient-to-b from-stone-50 to-stone-100 rounded-2xl border border-stone-200 flex flex-col items-center justify-center relative group-hover:scale-105 transition-transform duration-500 p-6">

<img alt="BRA's Beer 1L Carton" className="w-full h-full object-contain drop-shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70fabd17-2d3f-4928-b44e-82be3af85377_800w.png"/>

<div className="absolute -top-4 -right-4 bg-brand-gold text-brand-brown text-xs font-bold px-4 py-1.5 rounded-full shadow-md z-20">Best Seller</div>
</div>
</div>

<div className="flex-1 text-center lg:text-left">
<h3 className="text-3xl font-bold text-stone-900 mb-4">**BRA's Beer** Traditional</h3>
<p className="text-stone-600 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
                            The original taste of home. Our flagship brew offers a rich, creamy texture with the distinct tangy flavor that only traditional fermentation can provide.
                        </p>

<div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-brown/10 flex items-center justify-center text-brand-brown">
<i className="w-4 h-4" data-lucide="droplets"></i>
</div>
<span className="text-sm font-semibold text-stone-700">Creamy Texture</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-brown/10 flex items-center justify-center text-brand-brown">
<i className="w-4 h-4" data-lucide="clock"></i>
</div>
<span className="text-sm font-semibold text-stone-700">Daily Freshness</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-brown/10 flex items-center justify-center text-brand-brown">
<i className="w-4 h-4" data-lucide="award"></i>
</div>
<span className="text-sm font-semibold text-stone-700">Premium Taste</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-brown/10 flex items-center justify-center text-brand-brown">
<i className="w-4 h-4" data-lucide="users-2"></i>
</div>
<span className="text-sm font-semibold text-stone-700">Community Size</span>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<button className="px-8 py-3 bg-stone-900 text-white font-semibold rounded-xl hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/20">
                                View Ingredients
                            </button>
<button className="px-8 py-3 border border-stone-200 text-stone-600 font-semibold rounded-xl hover:bg-stone-50 transition-colors">
                                Nutritional Info
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16 md:flex justify-between items-end">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold text-stone-900 mb-4 tracking-tight">Purity in Every Drop</h2>
<p className="text-stone-500 font-medium max-w-md">Explore how **BRA's Beer** is brewed where ancient tradition meets modern hygiene standards.</p>
</div>
<div className="hidden md:block">
<a className="text-brand-brown font-semibold hover:opacity-80 flex items-center gap-2 text-sm" href="#">
                        Learn more about brewing <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:bg-white hover:shadow-xl hover:shadow-brand-brown/5 hover:border-brand-brown/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-4 right-4 w-12 h-12 opacity-5 group-hover:opacity-20 transition-opacity">
<img alt="watermark" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/daa88be2-89a2-4406-ac1a-e3a913f64629_320w.png"/>
</div>
<span className="text-5xl font-bold text-stone-200 group-hover:text-brand-brown/20 transition-colors mb-4 block">01</span>
<h3 className="font-bold text-lg text-stone-900 mb-2">Grain Selection</h3>
<p className="text-sm text-stone-500 leading-relaxed">Sourcing the finest Grade-A sorghum and maize from local farmers.</p>
</div>
<div className="group p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:bg-white hover:shadow-xl hover:shadow-brand-brown/5 hover:border-brand-brown/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-4 right-4 w-12 h-12 opacity-5 group-hover:opacity-20 transition-opacity">
<img alt="watermark" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/daa88be2-89a2-4406-ac1a-e3a913f64629_320w.png"/>
</div>
<span className="text-5xl font-bold text-stone-200 group-hover:text-brand-brown/20 transition-colors mb-4 block">02</span>
<h3 className="font-bold text-lg text-stone-900 mb-2">Milling &amp; Mashing</h3>
<p className="text-sm text-stone-500 leading-relaxed">Grains are milled and mixed with hot water to extract fermentable sugars.</p>
</div>
<div className="group p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:bg-white hover:shadow-xl hover:shadow-brand-brown/5 hover:border-brand-brown/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-4 right-4 w-12 h-12 opacity-5 group-hover:opacity-20 transition-opacity">
<img alt="watermark" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/daa88be2-89a2-4406-ac1a-e3a913f64629_320w.png"/>
</div>
<span className="text-5xl font-bold text-stone-200 group-hover:text-brand-brown/20 transition-colors mb-4 block">03</span>
<h3 className="font-bold text-lg text-stone-900 mb-2">Cooking</h3>
<p className="text-sm text-stone-500 leading-relaxed">The mash is cooked in stainless steel vats to sterilize and prepare for culture.</p>
</div>
<div className="group p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:bg-white hover:shadow-xl hover:shadow-brand-brown/5 hover:border-brand-brown/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-4 right-4 w-12 h-12 opacity-5 group-hover:opacity-20 transition-opacity">
<img alt="watermark" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/daa88be2-89a2-4406-ac1a-e3a913f64629_320w.png"/>
</div>
<span className="text-5xl font-bold text-stone-200 group-hover:text-brand-brown/20 transition-colors mb-4 block">04</span>
<h3 className="font-bold text-lg text-stone-900 mb-2">Cooling</h3>
<p className="text-sm text-stone-500 leading-relaxed">Rapid cooling ensures the perfect temperature for yeast activation.</p>
</div>
<div className="group p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:bg-white hover:shadow-xl hover:shadow-brand-brown/5 hover:border-brand-brown/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-4 right-4 w-12 h-12 opacity-5 group-hover:opacity-20 transition-opacity">
<img alt="watermark" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/daa88be2-89a2-4406-ac1a-e3a913f64629_320w.png"/>
</div>
<span className="text-5xl font-bold text-stone-200 group-hover:text-brand-brown/20 transition-colors mb-4 block">05</span>
<h3 className="font-bold text-lg text-stone-900 mb-2">Fermentation</h3>
<p className="text-sm text-stone-500 leading-relaxed">Natural fermentation develops the signature sour taste and creamy body.</p>
</div>
<div className="group p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:bg-white hover:shadow-xl hover:shadow-brand-brown/5 hover:border-brand-brown/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-4 right-4 w-12 h-12 opacity-5 group-hover:opacity-20 transition-opacity">
<img alt="watermark" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/daa88be2-89a2-4406-ac1a-e3a913f64629_320w.png"/>
</div>
<span className="text-5xl font-bold text-stone-200 group-hover:text-brand-brown/20 transition-colors mb-4 block">06</span>
<h3 className="font-bold text-lg text-stone-900 mb-2">Packaging</h3>
<p className="text-sm text-stone-500 leading-relaxed">Hygienically packed in 1L cartons to lock in freshness and flavor.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark text-white relative overflow-hidden" id="franchising">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#FFD700 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-brand-gold/20">Business Opportunity</div>
<h2 className="text-4xl lg:text-5xl font-semibold mb-6 tracking-tight">Distribution <br/><span className="text-brand-gold">Partnerships</span></h2>
<p className="text-stone-400 text-lg mb-10 max-w-lg font-medium leading-relaxed">
                        Partner with the fastest growing traditional beer brand. **BRA's Beer** offers a proven business model for taverns and entrepreneurs looking to scale.
                    </p>
<div className="space-y-6 mb-10">
<div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
<div className="w-10 h-10 rounded-full bg-brand-brown flex items-center justify-center text-brand-gold shrink-0">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="font-bold text-white text-base">Proven System</h4>
<p className="text-stone-400 text-sm mt-1">Turnkey solution with full marketing support.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
<div className="w-10 h-10 rounded-full bg-brand-brown flex items-center justify-center text-brand-gold shrink-0">
<i className="w-5 h-5" data-lucide="graduation-cap"></i>
</div>
<div>
<h4 className="font-bold text-white text-base">Comprehensive Training</h4>
<p className="text-stone-400 text-sm mt-1">Operational and sales training provided.</p>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 bg-brand-gold text-brand-dark font-bold rounded-xl hover:bg-brand-goldLight transition-colors">
                            Apply Now
                        </button>
<button className="px-8 py-4 bg-transparent border border-stone-600 text-white font-semibold rounded-xl hover:border-brand-gold hover:text-brand-gold transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="download"></i> Download Brochure
                        </button>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-brand-brown to-brand-gold opacity-20 blur-xl rounded-3xl"></div>
<div className="relative glass-card bg-stone-900/80 p-8 rounded-3xl border border-stone-700/50">

<div className="absolute top-8 right-8 w-16 h-16 opacity-30">
<img alt="Brand Logo" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d7c36fc-0d8d-46a4-ac8a-a5c12049c4c6_320w.png"/>
</div>
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-xl font-bold text-white">Growth Trajectory</h3>
<p className="text-stone-400 text-sm">Monthly **BRA's Beer** sales</p>
</div>
<div className="bg-brand-green/20 text-brand-green px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> +124%
                            </div>
</div>

<div className="flex items-end gap-3 h-48 mb-6 px-2">
<div className="w-full bg-stone-800 rounded-t-sm h-[30%] relative group transition-all duration-300 hover:bg-stone-700"></div>
<div className="w-full bg-stone-800 rounded-t-sm h-[45%] relative group transition-all duration-300 hover:bg-stone-700"></div>
<div className="w-full bg-stone-800 rounded-t-sm h-[60%] relative group transition-all duration-300 hover:bg-stone-700"></div>
<div className="w-full bg-gradient-to-t from-brand-brown to-brand-gold rounded-t-sm h-[85%] shadow-[0_0_20px_rgba(255,215,0,0.2)] relative group"></div>
</div>
<div className="grid grid-cols-2 gap-4 pt-6 border-t border-stone-800">
<div>
<p className="text-stone-500 text-xs uppercase tracking-wider mb-1">Total Locations</p>
<p className="text-2xl font-bold text-white">120+</p>
</div>
<div>
<p className="text-stone-500 text-xs uppercase tracking-wider mb-1">Investment</p>
<p className="text-2xl font-bold text-brand-gold">R490k<span className="text-sm font-normal text-stone-500">+</span></p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-cream relative" id="store">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-semibold text-stone-900 tracking-tight mb-4">Where to Buy</h2>
<p className="text-stone-500 font-medium">Find **BRA's Beer** at a retailer near you.</p>
</div>
<div className="bg-white rounded-3xl shadow-xl shadow-brand-brown/5 border border-stone-200 overflow-hidden h-[600px] flex flex-col lg:flex-row">

<div className="lg:w-1/3 flex flex-col h-full border-r border-stone-100 bg-white z-10">
<div className="p-6 border-b border-stone-100">
<div className="relative">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" data-lucide="search"></i>
<input className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-brown/20 focus:border-brand-brown transition-all font-medium text-sm text-stone-900" placeholder="Enter suburb or code..." type="text"/>
</div>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar p-2">

<div className="p-4 rounded-xl hover:bg-stone-50 cursor-pointer transition-colors border border-transparent hover:border-stone-100 group mb-2">
<div className="flex justify-between items-start mb-2">
<h4 className="font-bold text-stone-900 text-sm group-hover:text-brand-brown">Soweto Central Tavern</h4>
<span className="text-[10px] font-bold bg-brand-brown/10 text-brand-brown px-2 py-0.5 rounded">0.8km</span>
</div>
<p className="text-xs text-stone-500 mb-3">124 Vilakazi St, Orlando West</p>
<div className="flex items-center gap-3">
<button className="text-xs font-bold text-stone-700 hover:text-brand-brown flex items-center gap-1 bg-white border border-stone-200 px-2 py-1 rounded-md">
<i className="w-3 h-3" data-lucide="navigation"></i> Directions
                                </button>
<button className="text-xs font-bold text-stone-700 hover:text-brand-brown flex items-center gap-1 bg-white border border-stone-200 px-2 py-1 rounded-md">
<i className="w-3 h-3" data-lucide="phone"></i> Call
                                </button>
</div>
</div>
<div className="p-4 rounded-xl bg-stone-50 border border-brand-brown/20 cursor-pointer mb-2 relative overflow-hidden">

<div className="absolute top-2 right-2 w-6 h-6 opacity-20">
<img alt="icon" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d7c36fc-0d8d-46a4-ac8a-a5c12049c4c6_320w.png"/>
</div>
<div className="flex justify-between items-start mb-2">
<h4 className="font-bold text-brand-brown text-sm">Mama D's Shebeen</h4>
<span className="text-[10px] font-bold bg-brand-gold text-brand-brown px-2 py-0.5 rounded">Open</span>
</div>
<p className="text-xs text-stone-500 mb-3">45 Mbeki Drive, Alexandra</p>
<div className="flex items-center gap-3">
<button className="text-xs font-bold text-white bg-brand-brown hover:bg-brand-brownDark flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors">
<i className="w-3 h-3" data-lucide="navigation"></i> Directions
                                </button>
</div>
</div>
<div className="p-4 rounded-xl hover:bg-stone-50 cursor-pointer transition-colors border border-transparent hover:border-stone-100 group mb-2">
<div className="flex justify-between items-start mb-2">
<h4 className="font-bold text-stone-900 text-sm group-hover:text-brand-brown">Tembisa Plaza Liquors</h4>
<span className="text-[10px] font-bold bg-stone-100 text-stone-400 px-2 py-0.5 rounded">5.2km</span>
</div>
<p className="text-xs text-stone-500 mb-3">Shop 4, Tembisa Plaza</p>
<div className="flex items-center gap-3">
<button className="text-xs font-bold text-stone-700 hover:text-brand-brown flex items-center gap-1 bg-white border border-stone-200 px-2 py-1 rounded-md">
<i className="w-3 h-3" data-lucide="navigation"></i> Directions
                                </button>
</div>
</div>
</div>
</div>

<div className="lg:w-2/3 bg-stone-100 relative">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url(\'https://upload.wikimedia.org/wikipedia/commons/e/ec/Soweto_osm_map.png\')', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)'}}></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white shadow-sm flex items-center gap-3">
<i className="w-5 h-5 text-stone-400" data-lucide="map"></i>
<span className="text-sm font-bold text-stone-600">Google Maps Integration</span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
<div className="relative group cursor-pointer">
<div className="w-16 h-16 bg-brand-brown/20 rounded-full flex items-center justify-center animate-pulse"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-brown rounded-full border-2 border-white shadow-lg flex items-center justify-center overflow-hidden group-hover:-translate-y-3 transition-transform duration-300">
<img alt="Pin" className="w-full h-full object-cover" src="https://placehold.co/100x100/8B4513/ffffff?text=Logo"/>
</div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-white px-3 py-1 rounded shadow-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Mama D's Shebeen</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-stone-900 mb-4 tracking-tight">About **BRA's Beer**</h2>
<p className="text-stone-500 font-medium">A timeline of excellence and tradition.</p>
</div>
<div className="relative max-w-4xl mx-auto">
<div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-px h-full bg-stone-200"></div>
<div className="space-y-12">

<div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 relative">
<div className="md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0">
<h3 className="text-xl font-bold text-brand-brown">1954</h3>
<p className="text-stone-600 mt-2 text-sm leading-relaxed">The journey began with a family recipe in a small kitchen, brewing specifically for local community gatherings.</p>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 rounded-full bg-brand-gold ring-4 ring-white shadow-sm z-10 mt-1.5 md:mt-0"></div>
<div className="md:w-1/2 md:pl-12 hidden md:block">

<img alt="1954" className="rounded-lg opacity-80 w-32 grayscale hover:grayscale-0 transition-all object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e752b521-de4d-4042-9c15-a5c9f49cc138_800w.png"/>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 relative">
<div className="md:w-1/2 md:pr-12 hidden md:block text-right">

<img alt="1980" className="rounded-lg opacity-80 w-32 grayscale hover:grayscale-0 transition-all ml-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/daa88be2-89a2-4406-ac1a-e3a913f64629_800w.png"/>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 rounded-full bg-brand-brown ring-4 ring-white shadow-sm z-10 mt-1.5 md:mt-0"></div>
<div className="md:w-1/2 md:pl-12 pl-12 md:pl-0">
<h3 className="text-xl font-bold text-brand-brown">1980</h3>
<p className="text-stone-600 mt-2 text-sm leading-relaxed">Expansion into local townships across the province, becoming a staple at weddings and celebrations.</p>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 relative">
<div className="md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0">
<h3 className="text-xl font-bold text-brand-brown">Today</h3>
<p className="text-stone-600 mt-2 text-sm leading-relaxed">Combining heritage with modern technology to serve the nation, while keeping the original **BRA's Beer** taste unchanged.</p>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 rounded-full bg-brand-green ring-4 ring-white shadow-sm z-10 mt-1.5 md:mt-0"></div>
<div className="md:w-1/2 md:pl-12 hidden md:block">

<img alt="Today" className="rounded-lg opacity-80 w-32 grayscale hover:grayscale-0 transition-all object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d7c36fc-0d8d-46a4-ac8a-a5c12049c4c6_320w.png"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-t border-stone-200">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-stone-900 mb-10 text-center tracking-tight">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white p-6 rounded-2xl cursor-pointer shadow-sm border border-stone-100 transition-all duration-300 open:shadow-md hover:border-brand-brown/20">
<summary className="flex justify-between items-center font-bold text-stone-900 list-none select-none">
                        What makes **BRA's Beer** different?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-stone-400">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-stone-600 mt-4 text-sm leading-relaxed border-t border-stone-100 pt-4">Sorghum beer is a traditional African brew that is naturally fermented, giving it a unique sour taste, creamy texture, and rich nutritional profile compared to clear beers.</p>
</details>
<details className="group bg-white p-6 rounded-2xl cursor-pointer shadow-sm border border-stone-100 transition-all duration-300 open:shadow-md hover:border-brand-brown/20">
<summary className="flex justify-between items-center font-bold text-stone-900 list-none select-none">
                        How long does the beer stay fresh?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-stone-400">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-stone-600 mt-4 text-sm leading-relaxed border-t border-stone-100 pt-4">Because **BRA's Beer** is a live product with active fermentation, our beer is best consumed within 5-7 days of packaging. Check the expiry date on the carton.</p>
</details>
<details className="group bg-white p-6 rounded-2xl cursor-pointer shadow-sm border border-stone-100 transition-all duration-300 open:shadow-md hover:border-brand-brown/20">
<summary className="flex justify-between items-center font-bold text-stone-900 list-none select-none">
                        Do you offer delivery for events?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-stone-400">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-stone-600 mt-4 text-sm leading-relaxed border-t border-stone-100 pt-4">Yes! Please contact us via the form below or call your nearest distributor to arrange bulk orders for weddings, funerals, and parties.</p>
</details>
</div>
</div>
</section>

<footer className="bg-gradient-to-br from-[#1a1a1a] to-black text-white pt-24 pb-10 border-t-4 border-brand-gold" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

<div className="col-span-1 lg:col-span-2">
<a className="flex items-center gap-3 mb-6" href="#">

<div className="w-auto h-10 flex items-center justify-center">
<img alt="BRA's Beer Logo" className="h-full w-auto object-contain brightness-0 invert" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d7c36fc-0d8d-46a4-ac8a-a5c12049c4c6_320w.png"/>
</div>
</a>
<p className="text-stone-400 max-w-sm mb-8 leading-relaxed text-sm">
                        Authentic South African sorghum beer, brewed with heritage and passion. 70 years of excellence. Sales enquiries: <a className="text-brand-gold hover:underline" href="mailto:sales@myurbanafrica.co.za">sales@myurbanafrica.co.za</a>
</p>

<form className="max-w-md space-y-4">
<h4 className="font-bold text-brand-gold text-sm uppercase tracking-wide">Let's Connect</h4>
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors text-white placeholder-stone-500" placeholder="Name" type="text"/>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors text-white placeholder-stone-500" placeholder="Email" type="email"/>
</div>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors text-white placeholder-stone-500" placeholder="Message" rows="2"></textarea>
<button className="px-6 py-2.5 bg-brand-brown hover:bg-brand-brownDark text-brand-gold text-sm font-bold rounded-lg transition-colors flex items-center gap-2" type="button">
                            Send Message <i className="w-3 h-3" data-lucide="send"></i>
</button>
</form>
</div>

<div>
<h4 className="font-bold text-sm mb-6 text-brand-gold uppercase tracking-wide">Explore</h4>
<ul className="space-y-3 text-stone-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#products">Our Beer</a></li>
<li><a className="hover:text-white transition-colors" href="#franchising">Franchising</a></li>
<li><a className="hover:text-white transition-colors" href="#news">News</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sitemap</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-sm mb-6 text-brand-gold uppercase tracking-wide">Contact</h4>
<ul className="space-y-4 text-stone-400 text-sm">
<li className="flex items-start gap-3 group">
<i className="w-5 h-5 mt-0.5 text-brand-brown group-hover:text-white transition-colors" data-lucide="mail"></i>
<a className="hover:text-white transition-colors" href="mailto:info@brasbeer.co.za">info@brasbeer.co.za</a>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 mt-0.5 text-brand-brown" data-lucide="phone"></i>
<span>+27 11 123 4567</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 mt-0.5 text-brand-brown" data-lucide="clock"></i>
<span>Mon - Fri: 8am - 5pm</span>
</li>
<li className="flex gap-4 mt-6">
<a className="text-stone-400 hover:text-brand-gold transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-stone-400 hover:text-brand-gold transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-stone-400 hover:text-brand-gold transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 font-medium">
<p>© 2024 **BRA's Beer**. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Use</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
