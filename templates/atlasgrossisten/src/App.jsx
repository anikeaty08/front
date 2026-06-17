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
display: ['Montserrat', 'sans-serif'],
},
colors: {
atlas: {
black: '#050505',
card: '#0A0A0A',
border: '#262626',
red: '#CC0000',
redhover: '#990000',
gray: '#888888'
}
},
backgroundImage: {
'hero-gradient': 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(204,0,0,0.1) 100%)',
}
}
}
}



      // Shopping Cart & Button Logic
      document.addEventListener('DOMContentLoaded', () => {
        const cartCountEl = document.getElementById('cart-count');
        let cartCount = 0;

        function addToCart(btn) {
            cartCount++;
            cartCountEl.textContent = cartCount;

            // Animate badge
            cartCountEl.classList.remove('scale-100');
            cartCountEl.classList.add('scale-150');
            setTimeout(() => {
                cartCountEl.classList.remove('scale-150');
                cartCountEl.classList.add('scale-100');
            }, 150);

            // Visual feedback
            if(btn.innerText.toUpperCase().includes('LÄGG I VARUKORG')) {
                const originalText = btn.innerText;
                btn.innerText = 'TILLAGD!';
                btn.classList.add('bg-green-600', 'border-green-600', 'hover:bg-green-700');
                btn.classList.remove('bg-atlas-red', 'hover:bg-atlas-redhover');
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.classList.remove('bg-green-600', 'border-green-600', 'hover:bg-green-700');
                    btn.classList.add('bg-atlas-red', 'hover:bg-atlas-redhover');
                }, 1000);
            } else if (btn.querySelector('[data-icon*="shopping-bag"]')) {
                // Icon button feedback
                btn.classList.add('!bg-atlas-red', '!text-white');
                setTimeout(() => {
                    btn.classList.remove('!bg-atlas-red', '!text-white');
                }, 500);
            }
        }

        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const text = this.innerText.toUpperCase();
                const hasBagIcon = this.querySelector('[data-icon*="shopping-bag"]');

                if (text.includes('LÄGG I VARUKORG') || hasBagIcon) {
                    e.preventDefault();
                    addToCart(this);
                } else if (text.includes('SKICKA')) {
                    e.preventDefault();
                    const original = this.innerText;
                    this.innerText = 'KLART!';
                    this.classList.add('bg-green-600');
                    setTimeout(() => {
                        this.innerText = original;
                        this.classList.remove('bg-green-600');
                    }, 2000);
                }
            });
        });
      });
    


      const observerOptions={threshold:0.1,rootMargin:"0px 0px -50px 0px"};const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},observerOptions);document.querySelectorAll('.reveal-on-scroll').forEach(el=>{observer.observe(el)});
    
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
      

<div className="bg-atlas-red text-white text-xs md:text-sm py-2 font-medium tracking-wide text-center">
<span className="opacity-95">
        GRATIS FRAKT ÖVER 499 KR  |  KREATÖR RABATTER  | 
        SNABB LEVERANS I SVERIGE
      </span>
</div>

<header className="sticky top-0 z-50 bg-atlas-black/90 backdrop-blur-md border-b border-atlas-border">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex-shrink-0">
<a className="font-display font-black text-2xl tracking-tighter text-white uppercase italic" href="#">
              Atlas
              <span className="text-atlas-red">Grossisten</span>
</a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium hover:text-atlas-red transition-colors" href="#">
              Hem
            </a>
<a className="text-sm font-medium hover:text-atlas-red transition-colors" href="#shop">
              Butik
            </a>
<div className="relative group">
<button className="text-sm font-medium hover:text-atlas-red transition-colors flex items-center gap-1">
                Kategorier
                <svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<a className="text-sm font-medium hover:text-atlas-red transition-colors" href="#">
              Om Oss
            </a>
<a className="text-sm font-medium hover:text-atlas-red transition-colors" href="#">
              Kontakt
            </a>
</nav>

<div className="flex items-center gap-4">

<div className="hidden lg:flex items-center bg-atlas-card border border-atlas-border rounded-full px-3 py-1.5 focus-within:border-atlas-red transition-colors group">
<svg aria-hidden="true" data-icon="lucide:search" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
<input className="bg-transparent border-none text-sm text-white focus:outline-none pl-2 w-32 focus:w-48 transition-all placeholder-gray-600" placeholder="Sök produkt..." type="text"/>
</div>

<span className="text-xs font-bold text-gray-400">SEK</span>

<a className="text-gray-300 hover:text-white transition" href="#">
<svg aria-hidden="true" data-icon="lucide:user" data-width="22" height="22" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</a>

<a className="relative text-gray-300 hover:text-white transition group" href="#">
<svg aria-hidden="true" data-icon="lucide:shopping-cart" data-width="22" height="22" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></g></svg>
<span className="absolute -top-2 -right-2 bg-atlas-red text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" id="cart-count">
                0
              </span>
</a>

<button className="md:hidden text-gray-300">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative h-[80vh] w-full overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Gym Background" className="w-full h-full object-cover object-center opacity-60" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-hero-gradient"></div>
</div>
<div className="z-10 sm:px-6 lg:px-8 flex flex-col h-full max-w-7xl mr-auto ml-auto pr-4 pl-4 relative justify-center">
<div className="max-w-3xl">
<span className="inline-block py-1 px-3 rounded border border-atlas-red/50 bg-atlas-red/10 text-atlas-red text-xs font-bold uppercase tracking-widest mb-4">
            Styrka &amp; Boost
          </span>
<h1 className="font-display font-black text-5xl md:text-7xl leading-none tracking-tight text-white mb-6 uppercase drop-shadow-lg">
            Bygg Din
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-atlas-red to-red-400">
              Gym Resa
            </span>
            Med
            <br/>
            Kvalitet
          </h1>
<p className="md:text-xl text-lg font-medium text-gray-300 max-w-xl mb-8">
            Din butik för kosttillskott i världsklass. Premiumurval, marknadens
            bästa priser och snabb leverans över hela Sverige.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center bg-atlas-red hover:bg-atlas-redhover text-white px-8 py-4 rounded font-bold uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(204,0,0,0.3)]" href="#shop">
              Shoppa Nu
              <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="inline-flex items-center justify-center bg-transparent border border-white/30 hover:border-white text-white px-8 py-4 rounded font-bold uppercase tracking-wide transition-all duration-300 hover:bg-white/5" href="#">
              Bli en affiliate-partner
            </a>
</div>
</div>
</div>
</section>

<section className="py-12 bg-black reveal-on-scroll">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-atlas-border">
<img alt="Protein" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="font-display font-black text-2xl uppercase italic tracking-tighter mb-1">
                Proteiner
              </h3>
<p className="text-gray-400 text-xs mb-3">Whey, Casein &amp; Vegan</p>
<span className="text-atlas-red text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                Utforska
                <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>

<div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-atlas-border">
<img alt="PWO" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="font-display font-black text-2xl uppercase italic tracking-tighter mb-1 text-atlas-red">
                Pre-Workout
              </h3>
<p className="text-gray-400 text-xs mb-3">Energi, Fokus &amp; Pump</p>
<span className="text-white text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                Utforska
                <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>

<div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-atlas-border">
<img alt="Mass Gainer" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="font-display font-black text-2xl uppercase italic tracking-tighter mb-1">
                Mass Gainer
              </h3>
<p className="text-gray-400 text-xs mb-3">För maximal volym</p>
<span className="text-atlas-red text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                Utforska
                <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-atlas-black relative reveal-on-scroll" id="shop">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div className="">
<h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tighter text-white">
              Utvalda Produkter
            </h2>
<p className="text-atlas-gray mt-2">Bästsäljare för gym och butiker</p>
</div>
<a className="hidden md:flex items-center text-sm font-bold text-white hover:text-atlas-red transition" href="#">
            Se alla produkter
            <svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-atlas-card border border-atlas-border rounded-lg overflow-hidden hover:border-atlas-red/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
<div className="absolute top-3 left-3 z-10 bg-atlas-red text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
              Nyhet
            </div>
<div className="h-64 bg-gradient-to-b from-[#151515] to-[#0A0A0A] flex items-center justify-center p-6 relative">
<img alt="Product" className="h-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://musclehouse.se/cdn/shop/products/goldstandard100_whey2270g-pb_1800x1800.jpg?v=1663945640$0'" src="https://musclehouse.se/cdn/shop/products/goldstandard100_whey2270g-pb_1800x1800.jpg?v=1663945640$0"/>
</div>
<div className="p-5">
<div className="flex items-center space-x-1 mb-2">
<svg aria-hidden="true" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs text-gray-400">4.9 (120 recensioner)</span>
</div>
<h3 className="font-display font-bold text-lg uppercase leading-tight mb-1 text-white group-hover:text-atlas-red transition-colors">
                Optimum Nutrition Gold Standard 100% Whey
              </h3>
<p className="text-xs text-gray-500 mb-4">
                Optimum Nutrition, 2270 g
              </p>
<div className="flex items-center justify-between">
<div>
<span className="block text-lg font-bold text-white">849 kr</span>
<span className="text-[10px] text-gray-500 uppercase">
                    inkl. moms
                  </span>
</div>
<button className="bg-white hover:bg-atlas-red text-black hover:text-white p-2.5 rounded-full transition-colors">
<svg aria-hidden="true" data-icon="lucide:shopping-bag" data-width="18" height="18" role="img" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</button>
</div>
</div>
</div>

<div className="group bg-atlas-card border border-atlas-border rounded-lg overflow-hidden hover:border-atlas-red/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
<div className="absolute top-3 right-3 z-10 bg-white/10 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
              33% Rabatt
            </div>
<div className="h-64 bg-gradient-to-b from-[#151515] to-[#0A0A0A] flex items-center justify-center p-6 relative">
<img alt="Product" className="h-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://www.tillskottsbolaget.se/img/bilder/artiklar/zoom/STAR009_1.jpg?m=1671137015&amp;w=720$0'" src="https://www.tillskottsbolaget.se/img/bilder/artiklar/zoom/STAR009_1.jpg?m=1671137015&amp;w=720$0"/>
</div>
<div className="p-5">
<div className="flex items-center space-x-1 mb-2">
<svg aria-hidden="true" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs text-gray-400">5.0 (85 recensioner)</span>
</div>
<h3 className="font-display font-bold text-lg uppercase leading-tight mb-1 text-white group-hover:text-atlas-red transition-colors">
                Pure Creatine Monohydrate
              </h3>
<p className="text-xs text-gray-500 mb-4">Osmaksatt, 500g</p>
<div className="flex items-center justify-between">
<div>
<span className="block text-lg font-bold text-atlas-red">
                    199 kr
                  </span>
<span className="text-[10px] text-gray-500 uppercase line-through">
                    299 kr
                  </span>
</div>
<button className="bg-white hover:bg-atlas-red text-black hover:text-white p-2.5 rounded-full transition-colors">
<svg aria-hidden="true" data-icon="lucide:shopping-bag" data-width="18" height="18" role="img" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</button>
</div>
</div>
</div>

<div className="group bg-atlas-card border border-atlas-border rounded-lg overflow-hidden hover:border-atlas-red/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
<div className="h-64 bg-gradient-to-b from-[#151515] to-[#0A0A0A] flex items-center justify-center p-6 relative">
<img alt="Product" className="h-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://musclehouse.se/cdn/shop/files/sunnystraw12_800x.jpg?v=1717486449$0'" src="https://musclehouse.se/cdn/shop/files/sunnystraw12_800x.jpg?v=1717486449$0"/>
</div>
<div className="p-5">
<div className="flex items-center space-x-1 mb-2">
<svg aria-hidden="true" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs text-gray-400">4.7 (42 recensioner)</span>
</div>
<h3 className="font-display font-bold text-lg uppercase leading-tight mb-1 text-white group-hover:text-atlas-red transition-colors">
                Barebells Protein Bar
              </h3>
<p className="text-xs text-gray-500 mb-4">
                Sunny Strawberry, 12 st - 55 g/st
              </p>
<div className="flex items-center justify-between">
<div>
<span className="block text-lg font-bold text-white">249 kr</span>
<span className="text-[10px] text-gray-500 uppercase">
                    inkl. moms
                  </span>
</div>
<button className="bg-white hover:bg-atlas-red text-black hover:text-white p-2.5 rounded-full transition-colors">
<svg aria-hidden="true" data-icon="lucide:shopping-bag" data-width="18" height="18" role="img" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</button>
</div>
</div>
</div>

<div className="group bg-atlas-card border border-atlas-border rounded-lg overflow-hidden hover:border-atlas-red/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
<div className="h-64 bg-gradient-to-b from-[#151515] to-[#0A0A0A] flex items-center justify-center p-6 relative">
<img alt="Product" className="h-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://www.theedge-sports.com/images/products/w/wm/wm%20candy.PNG?width=1998&amp;height=1998&amp;quality=85&amp;mode=pad&amp;format=webp&amp;bgcolor=ffffff$0'" src="https://www.theedge-sports.com/images/products/w/wm/wm%20candy.PNG?width=1998&amp;height=1998&amp;quality=85&amp;mode=pad&amp;format=webp&amp;bgcolor=ffffff$0"/>
</div>
<div className="p-5">
<div className="flex items-center space-x-1 mb-2">
<svg aria-hidden="true" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs text-gray-400">
                  4.8 (200+ recensioner)
                </span>
</div>
<h3 className="font-display font-bold text-lg uppercase leading-tight mb-1 text-white group-hover:text-atlas-red transition-colors">
                Optimum Nutrition Gold Standard pre-workout
              </h3>
<p className="text-xs text-gray-500 mb-4">Watermelon, 330 g</p>
<div className="flex items-center justify-between">
<div>
<span className="block text-lg font-bold text-white">319 kr</span>
<span className="text-[10px] text-gray-500 uppercase">
                    inkl. moms
                  </span>
</div>
<button className="bg-white hover:bg-atlas-red text-black hover:text-white p-2.5 rounded-full transition-colors">
<svg aria-hidden="true" data-icon="lucide:shopping-bag" data-width="18" height="18" role="img" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-neutral-900 border-t border-atlas-border reveal-on-scroll">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tighter text-white mb-8 text-center">
          Veckans Deal
          <span className="text-atlas-red">Hot Picks</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-black border border-atlas-border rounded-xl p-8 flex flex-col sm:flex-row items-center gap-6 group hover:border-atlas-red transition-colors">
<div className="w-full sm:w-1/2 flex justify-center bg-neutral-900 rounded-lg p-4">
<img className="w-40 h-40 object-contain group-hover:scale-110 transition-transform" onerror="this.src='https://placehold.co/400x400/111/444?text=MEGA+PACK'" src="https://placehold.co/400x400/111/444?text=MEGA+PACK"/>
</div>
<div className="w-full sm:w-1/2">
<div className="bg-atlas-red/20 text-atlas-red text-xs font-bold inline-block px-2 py-1 rounded mb-2">
                16% Rabatt
              </div>
<h3 className="font-display font-black text-2xl uppercase italic text-white mb-2">
                Gym Startpaket
              </h3>
<p className="text-sm text-gray-400 mb-4">
                Perfekt startpaket inför årets nyårslöfte. Innehåller 1 st -
                100% Whey 2.27 kg, 12 st - Barebells Protein Bar, 1 st - Gold
                Standard Pre-Workout 330 g, 1 st - Pure Creatine Monohydrate 500
                g
              </p>
<div className="flex items-center gap-4">
<span className="text-2xl font-bold text-white">1449 kr</span>
<span className="text-sm text-gray-500 line-through">1716 kr</span>
</div>
<button className="mt-4 w-full bg-atlas-red hover:bg-atlas-redhover text-white font-bold py-3 rounded text-sm uppercase tracking-wide transition-colors">
                Lägg i varukorg
              </button>
</div>
</div>

<div className="bg-black border border-atlas-border rounded-xl p-8 flex flex-col sm:flex-row items-center gap-6 group hover:border-atlas-red transition-colors">
<div className="w-full sm:w-1/2 flex justify-center bg-neutral-900 rounded-lg p-4">
<img className="w-40 h-40 object-contain group-hover:scale-110 transition-transform" onerror="this.src='https://placehold.co/400x400/111/444?text=BULK+CREATINE'" src="https://placehold.co/400x400/111/444?text=BULK+CREATINE"/>
</div>
<div className="w-full sm:w-1/2">
<div className="bg-blue-900/30 text-blue-400 text-xs font-bold inline-block px-2 py-1 rounded mb-2">
                Stort Paket
              </div>
<h3 className="font-display font-black text-2xl uppercase italic text-white mb-2">
                Kreatin Bulk
              </h3>
<p className="text-sm text-gray-400 mb-4">
                10st - Pure Creatine Monohydrate 500 g, 2st - Serious Mass 5450
                g, 2st - 100% Whey 900 g. Högsta renhetsgrad. Bulk special.
              </p>
<div className="flex items-center gap-4">
<span className="text-2xl font-bold text-white">4199 kr</span>
<span className="text-sm text-gray-500 line-through">4486 kr</span>
</div>
<button className="mt-4 w-full bg-white hover:bg-gray-200 text-black font-bold py-3 rounded text-sm uppercase tracking-wide transition-colors">
                Lägg i varukorg
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gradient-to-r from-atlas-card to-black border-y border-atlas-border reveal-on-scroll">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="font-display font-black text-3xl uppercase tracking-tighter text-white mb-3">
          Prenumerera för exklusiva erbjudanden
        </h2>
<p className="text-gray-400 mb-8">
          Få de senaste priserna, produktnyheter och kampanjer direkt i din
          inkorg.
        </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
<input className="flex-1 bg-black border border-atlas-border text-white px-5 py-3 rounded focus:outline-none focus:border-atlas-red transition-colors placeholder-gray-600" placeholder="Din e-postadress" type="email"/>
<button className="bg-atlas-red hover:bg-atlas-redhover text-white font-bold uppercase tracking-wide px-8 py-3 rounded transition-colors shadow-[0_0_15px_rgba(204,0,0,0.4)]" type="button">
            Skicka
          </button>
</form>
</div>
</section>

<footer className="bg-black pt-16 pb-8 border-t border-atlas-border/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

<div>
<h4 className="font-display font-bold text-white uppercase tracking-wide mb-4 text-sm">
              Kategorier
            </h4>
<ul className="space-y-2 text-sm text-gray-400">
<li>
<a className="hover:text-atlas-red transition" href="#">Protein</a>
</li>
<li>
<a className="hover:text-atlas-red transition" href="#">
                  Pre-Workout
                </a>
</li>
<li>
<a className="hover:text-atlas-red transition" href="#">
                  Aminosyror
                </a>
</li>
<li>
<a className="hover:text-atlas-red transition" href="#">
                  Vitaminer
                </a>
</li>
<li>
<a className="hover:text-atlas-red transition" href="#">
                  Tillbehör
                </a>
</li>
</ul>
</div>

<div>
<h4 className="font-display font-bold text-white uppercase tracking-wide mb-4 text-sm">
              Kundservice
            </h4>
<ul className="space-y-2 text-sm text-gray-400">
<li>
<a className="hover:text-atlas-red transition" href="#">
                  Kontakta Oss
                </a>
</li>
<li>
<a className="hover:text-atlas-red transition" href="#">
                  Fraktinformation
                </a>
</li>
<li>
<a className="hover:text-atlas-red transition" href="#">
                  Returer &amp; Byten
                </a>
</li>
<li>
<a className="hover:text-atlas-red transition" href="#">
                  Integritetspolicy
                </a>
</li>
<li></li>
</ul>
</div>

<div>
<h4 className="font-display font-bold text-white uppercase tracking-wide mb-4 text-sm">
              Om Atlas
            </h4>
<ul className="space-y-2 text-sm text-gray-400">
<li>
<a className="hover:text-atlas-red transition" href="#">
                  Vår Historia
                </a>
</li>
<li>
<a className="hover:text-atlas-red transition" href="#">
                  Jobba hos oss
                </a>
</li>
<li>
<a className="hover:text-atlas-red transition" href="#">
                  Affiliate Partner
                </a>
</li>
<li></li>
</ul>
</div>

<div>
<a className="font-display font-black text-2xl tracking-tighter text-white uppercase italic block mb-4" href="#">
              Atlas
              <span className="text-atlas-red">Grossisten</span>
</a>
<p className="text-xs text-gray-500 mb-4">
              Atlas Grossisten AB
              
              Sveavägen 10
              
              111 57 Stockholm
            </p>
<div className="flex space-x-4">
<a className="text-gray-400 hover:text-white transition" href="#">
<svg aria-hidden="true" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-gray-400 hover:text-white transition" href="#">
<svg aria-hidden="true" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-gray-400 hover:text-white transition" href="#">
<svg aria-hidden="true" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>
</div>
<div className="border-t border-atlas-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-600">
            © 2026 Atlas Grossisten AB. Alla rättigheter reserverade.
          </p>

<div className="flex items-center gap-3 grayscale opacity-60">
<div className="h-6 w-10 bg-white rounded flex items-center justify-center text-[8px] font-bold text-black border border-gray-600">
              VISA
            </div>
<div className="h-6 w-10 bg-white rounded flex items-center justify-center text-[8px] font-bold text-black border border-gray-600">
              KLARNA
            </div>
<div className="h-6 w-10 bg-white rounded flex items-center justify-center text-[8px] font-bold text-black border border-gray-600">
              SWISH
            </div>
</div>
</div>
</div>
</footer>



    </>
  );
}
