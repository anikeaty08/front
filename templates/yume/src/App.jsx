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



        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Menu Filter
        const menuTabs = document.querySelectorAll('.menu-tab');
        const menuItems = document.querySelectorAll('.menu-item');
        
        menuTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Update active tab
                menuTabs.forEach(t => {
                    t.classList.remove('bg-rose-900', 'text-white', 'shadow-md');
                    t.classList.add('bg-stone-100', 'text-stone-600', 'hover:bg-stone-200');
                });
                tab.classList.remove('bg-stone-100', 'text-stone-600', 'hover:bg-stone-200');
                tab.classList.add('bg-rose-900', 'text-white', 'shadow-md');
                
                // Filter items
                const category = tab.dataset.category;
                menuItems.forEach(item => {
                    // Simple animation for switching
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(10px)';
                    
                    setTimeout(() => {
                        if (category === 'all' || item.dataset.category === category) {
                            item.style.display = 'block';
                            // Trigger reflow
                            void item.offsetWidth;
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        } else {
                            item.style.display = 'none';
                        }
                    }, 200);
                });
            });
        });
        
        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    mobileMenu.classList.add('hidden');
                }
            });
        });
        
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md', 'bg-white/95');
                nav.classList.remove('bg-stone-50/90');
            } else {
                nav.classList.remove('shadow-md', 'bg-white/95');
                nav.classList.add('bg-stone-50/90');
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
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 lg:h-20">
<a className="flex items-center gap-2" href="#home">
<span className="text-xl lg:text-2xl font-bold tracking-tight text-rose-900" style={{fontFamily: '\'Playfair Display\', serif'}}>YUME</span>
<span className="hidden sm:block text-xs font-medium text-stone-500 tracking-wide uppercase">Asian Fusion</span>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-rose-900 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-stone-600 hover:text-rose-900 transition-colors" href="#about">Philosophy</a>
<a className="text-sm font-medium text-stone-600 hover:text-rose-900 transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-stone-600 hover:text-rose-900 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-stone-600 hover:text-rose-900 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-stone-600 hover:text-rose-900 transition-colors" href="#contact">Visit</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center gap-2 text-sm text-stone-600 hover:text-rose-900 transition-colors" href="tel:07737283668">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span>077372 83668</span>
</a>
<a className="bg-rose-900 hover:bg-rose-950 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors shadow-lg shadow-rose-900/20" href="#contact">
                        Book Table
                    </a>
<button className="lg:hidden p-2 text-stone-600" id="mobileMenuBtn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden lg:hidden bg-stone-50 border-t border-stone-200" id="mobileMenu">
<div className="px-4 py-4 space-y-3">
<a className="block text-sm font-medium text-stone-600 hover:text-rose-900 py-2" href="#home">Home</a>
<a className="block text-sm font-medium text-stone-600 hover:text-rose-900 py-2" href="#about">Philosophy</a>
<a className="block text-sm font-medium text-stone-600 hover:text-rose-900 py-2" href="#menu">Menu</a>
<a className="block text-sm font-medium text-stone-600 hover:text-rose-900 py-2" href="#gallery">Gallery</a>
<a className="block text-sm font-medium text-stone-600 hover:text-rose-900 py-2" href="#reviews">Reviews</a>
<a className="block text-sm font-medium text-stone-600 hover:text-rose-900 py-2" href="#contact">Visit</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden" id="home">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-rose-50/30 to-stone-100"></div>
<div className="absolute top-20 right-10 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl"></div>
<div className="absolute bottom-20 left-10 w-[30rem] h-[30rem] bg-stone-200/30 rounded-full blur-3xl"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="text-center lg:text-left">
<div className="inline-flex items-center gap-2 bg-white border border-stone-200 text-rose-900 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-8 shadow-sm">
<iconify-icon icon="solar:medal-ribbon-star-linear" width="14"></iconify-icon>
<span>Premium Asian Cuisine</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-stone-900 mb-8 leading-[1.1]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        The Art of<br/>
<span className="text-rose-900">Asian Fusion</span>,<br/>
                        Soul of the<br/>
<span className="italic text-stone-500 font-normal">East</span>
</h1>
<p className="text-lg text-stone-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                        Experience the harmony of flavors from Tokyo to Sichuan right here in Raipur. Hand-rolled sushi, artisanal dim sum, and woks that dance with fire.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
<a className="inline-flex items-center justify-center gap-2 bg-rose-900 hover:bg-rose-950 text-white text-sm font-medium px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-rose-900/20" href="#menu">
<iconify-icon icon="solar:chef-hat-minimalistic-linear" width="18"></iconify-icon>
                            View Menu
                        </a>
<a className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-stone-800 text-sm font-medium px-8 py-4 rounded-full border border-stone-200 transition-all shadow-sm hover:shadow-md" href="#contact">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
                            Reserve Table
                        </a>
</div>

<div className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-stone-200 pt-8">
<div>
<div className="flex items-center gap-1.5 text-rose-900 mb-2">
<iconify-icon icon="solar:chef-hat-linear" width="16"></iconify-icon>
<span className="text-xs font-semibold tracking-wide uppercase">Sushi Bar</span>
</div>
<p className="text-sm font-medium text-stone-900">Master</p>
<p className="text-xs text-stone-500">Chefs</p>
</div>
<div className="border-l border-stone-200 pl-6">
<div className="flex items-center gap-1.5 text-rose-900 mb-2">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="text-xs font-semibold tracking-wide uppercase">Hours</span>
</div>
<p className="text-sm font-medium text-stone-900">Open Daily</p>
<p className="text-xs text-stone-500">12 PM - 11 PM</p>
</div>
<div className="border-l border-stone-200 pl-6">
<div className="flex items-center gap-1.5 text-rose-900 mb-2">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
<span className="text-xs font-semibold tracking-wide uppercase">Location</span>
</div>
<p className="text-sm font-medium text-stone-900">Civil Lines</p>
<p className="text-xs text-stone-500">Raipur, CG</p>
</div>
</div>
</div>
<div className="relative pl-4 lg:pl-0">
<div className="relative aspect-[4/5] max-w-md mx-auto">

<div className="absolute -inset-4 bg-rose-100 rounded-[2rem] transform rotate-3"></div>
<div className="absolute inset-0 bg-stone-200 rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-900/10 border border-white/50">
<img alt="Premium Sushi Platter" className="w-full h-full object-cover transform scale-105" src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&amp;h=1000&amp;fit=crop" style={{}}/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-xl shadow-stone-900/10 border border-stone-100 max-w-[200px]">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center flex-shrink-0 text-rose-900">
<iconify-icon icon="solar:fire-linear" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-bold text-stone-900">Robata Grill</p>
<p className="text-xs text-stone-500 leading-snug">Traditional charcoal cooking</p>
</div>
</div>
</div>

<div className="absolute -top-6 -right-6 bg-stone-900 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center p-2 shadow-2xl border-4 border-stone-50">
<span className="text-2xl font-bold font-serif italic">Top</span>
<span className="text-[10px] uppercase tracking-wider opacity-80">Rated</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-xs font-bold text-rose-900 uppercase tracking-widest">Our Selection</span>
<h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-stone-900 mt-3" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        Signature Plates
                    </h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-rose-900 transition-colors group" href="#menu">
                    View Full Menu 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative">
<div className="group-hover:bg-black/0 transition-colors bg-black/5 z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Dim Sum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1648003370082-267f71be1a96?w=800&amp;q=80"/>
</div>
<div className="">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-stone-900 group-hover:text-rose-900 transition-colors">Truffle Edamame Dumplings</h3>
<span className="text-sm font-medium text-stone-500">₹449</span>
</div>
<p className="text-sm text-stone-500 leading-relaxed">Hand-folded, truffle oil, edamame puree, chili garlic crisp</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative">
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10"></div>
<img alt="Ramen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&amp;h=600&amp;fit=crop"/>
</div>
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-stone-900 group-hover:text-rose-900 transition-colors">Spicy Miso Ramen</h3>
<span className="text-sm font-medium text-stone-500">₹589</span>
</div>
<p className="text-sm text-stone-500 leading-relaxed">Rich miso broth, chashu pork, soft-boiled egg, nori</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative">
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10"></div>
<img alt="Sushi Roll" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&amp;h=600&amp;fit=crop"/>
</div>
<div className="">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-stone-900 group-hover:text-rose-900 transition-colors">Dragon Uramaki</h3>
<span className="text-sm font-medium text-stone-500">₹619</span>
</div>
<p className="text-sm text-stone-500 leading-relaxed">Tempura prawn, avocado, cucumber, unagi sauce, sesame</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative">
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10"></div>
<img alt="Matcha Dessert" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1567624725806-227866a3f784?w=800&amp;q=80"/>
</div>
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-stone-900 group-hover:text-rose-900 transition-colors">Matcha Cheesecake</h3>
<span className="text-sm font-medium text-stone-500">₹399</span>
</div>
<p className="text-sm text-stone-500 leading-relaxed">Kyoto matcha, biscuit base, white chocolate drizzle</p>
</div>
</div>
</div>
<div className="mt-12 text-center md:hidden">
<a className="inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-900 text-sm font-medium px-6 py-3 rounded-full transition-all" href="#menu">
                    View Full Menu
                </a>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-stone-100" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1 relative">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200">
<img alt="Asian Restaurant Interior" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&amp;h=533&amp;fit=crop"/>
</div>
</div>
<div className="space-y-4">
<div className="aspect-square rounded-2xl overflow-hidden bg-stone-200">
<img alt="Chef Plating Sushi" className="opacity-90 w-full h-full object-cover" src="https://images.unsplash.com/photo-1560053608-13721e0d69e8?w=800&amp;q=80"/>
</div>
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200">
<img alt="Fresh Ingredients" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-xs font-bold text-rose-900 uppercase tracking-widest">Our Philosophy</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 mt-4 mb-8" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        A Culinary Journey<br/>Through the Orient
                    </h2>
<div className="space-y-6 text-stone-600 text-lg leading-relaxed font-light">
<p className="">
                            Nestled in the vibrant district of Civil Lines, <span className="font-medium text-stone-900">YUME</span> brings the diverse and intricate flavors of Pan-Asian cuisine to Raipur. We believe that great food is an art form, a balance of texture, aroma, and taste.
                        </p>
<p className="">
                            Our kitchen is led by masters who understand the delicate precision of Japanese sushi, the fiery heat of Sichuan woks, and the comforting warmth of Cantonese dim sum. From our fresh sashimi cuts to our slow-simmered broths, every dish tells a story.
                        </p>
<p>
                            With an ambiance inspired by modern Zen aesthetics and a menu crafted for sharing, YUME is a destination for those who seek to explore the authentic taste of the East.
                        </p>
</div>
<div className="grid grid-cols-3 gap-8 mt-12 pt-10 border-t border-stone-200/60">
<div>
<p className="text-3xl lg:text-4xl font-semibold text-rose-900" style={{fontFamily: '\'Playfair Display\', serif'}}>2018</p>
<p className="text-xs font-medium text-stone-500 uppercase tracking-wide mt-2">Established</p>
</div>
<div className="">
<p className="text-3xl lg:text-4xl font-semibold text-rose-900" style={{fontFamily: '\'Playfair Display\', serif'}}>80+</p>
<p className="text-xs font-medium text-stone-500 uppercase tracking-wide mt-2">Asian Recipes</p>
</div>
<div>
<p className="text-3xl lg:text-4xl font-semibold text-rose-900" style={{fontFamily: '\'Playfair Display\', serif'}}>24k+</p>
<p className="text-xs font-medium text-stone-500 uppercase tracking-wide mt-2">Guests Served</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white" id="menu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-xs font-bold text-rose-900 uppercase tracking-widest">Gastronomy</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 mt-3" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    The Menu
                </h2>
<p className="text-stone-500 mt-4 max-w-xl mx-auto font-light text-lg">Authentic recipes from across the continent</p>
</div>

<div className="flex flex-wrap justify-center gap-3 mb-16">
<button className="menu-tab px-6 py-2.5 text-sm font-medium rounded-full transition-all bg-rose-900 text-white shadow-md shadow-rose-900/10" data-category="all">All</button>
<button className="menu-tab px-6 py-2.5 text-sm font-medium rounded-full transition-all bg-stone-100 text-stone-600 hover:bg-stone-200" data-category="small_plates">Small Plates</button>
<button className="menu-tab px-6 py-2.5 text-sm font-medium rounded-full transition-all bg-stone-100 text-stone-600 hover:bg-stone-200" data-category="dimsum">Dim Sum</button>
<button className="menu-tab px-6 py-2.5 text-sm font-medium rounded-full transition-all bg-stone-100 text-stone-600 hover:bg-stone-200" data-category="sushi">Sushi Bar</button>
<button className="menu-tab px-6 py-2.5 text-sm font-medium rounded-full transition-all bg-stone-100 text-stone-600 hover:bg-stone-200" data-category="mains">Mains &amp; Wok</button>
<button className="menu-tab px-6 py-2.5 text-sm font-medium rounded-full transition-all bg-stone-100 text-stone-600 hover:bg-stone-200" data-category="dessert">Dessert</button>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" id="menuGrid">

<div className="menu-item bg-white rounded-xl p-8 border border-stone-100 hover:border-rose-100 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300" data-category="small_plates">
<div className="flex items-start justify-between mb-6">
<div className="flex text-rose-900 bg-rose-50 w-12 h-12 rounded-full items-center justify-center">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-rose-900 bg-rose-50 px-3 py-1 rounded-full uppercase tracking-wider">Starters</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Small Plates</h3>
<ul className="space-y-4">
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Spicy Edamame</span>
<p className="text-xs text-stone-500 mt-0.5">Wok tossed, shichimi togarashi, sea salt</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹249</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Rock Shrimp Tempura</span>
<p className="text-xs text-stone-500 mt-0.5">Spicy mayo, yuzu juice, chives</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹499</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Crispy Lotus Stem</span>
<p className="text-xs text-stone-500 mt-0.5">Honey chilli glaze, sesame seeds</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹349</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Chicken Satay</span>
<p className="text-xs text-stone-500 mt-0.5">Peanut sauce, cucumber relish</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹399</span>
</li>
</ul>
</div>

<div className="menu-item bg-white rounded-xl p-8 border border-stone-100 hover:border-rose-100 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300" data-category="dimsum">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-900">
<iconify-icon icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-rose-900 bg-rose-50 px-3 py-1 rounded-full uppercase tracking-wider">Dumplings</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Dim Sum</h3>
<ul className="space-y-4">
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Crystal Veg Dumpling</span>
<p className="text-xs text-stone-500 mt-0.5">Translucent wrapper, seasonal greens</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹349</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Prawn Hargow</span>
<p className="text-xs text-stone-500 mt-0.5">Steamed prawn, bamboo shoot</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹449</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Chicken Siu Mai</span>
<p className="text-xs text-stone-500 mt-0.5">Open faced, tobiko topping</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹399</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Spicy Duck Potsticker</span>
<p className="text-xs text-stone-500 mt-0.5">Pan seared, hoisin dipping sauce</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹429</span>
</li>
</ul>
</div>

<div className="menu-item bg-white rounded-xl p-8 border border-stone-100 hover:border-rose-100 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300" data-category="sushi">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-900">
<iconify-icon icon="solar:tuning-square-2-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-rose-900 bg-rose-50 px-3 py-1 rounded-full uppercase tracking-wider">Raw Bar</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Sushi &amp; Maki</h3>
<ul className="space-y-4">
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Salmon Nigiri</span>
<p className="text-xs text-stone-500 mt-0.5">Norwegian salmon, vinegared rice (2 pcs)</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹399</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Spicy Tuna Roll</span>
<p className="text-xs text-stone-500 mt-0.5">Tuna tartare, spicy mayo, cucumber</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹499</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">California Roll</span>
<p className="text-xs text-stone-500 mt-0.5">Crab stick, avocado, tobiko</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹479</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Asparagus Tempura</span>
<p className="text-xs text-stone-500 mt-0.5">Crispy asparagus, tanuki, mayo</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹429</span>
</li>
</ul>
</div>

<div className="menu-item bg-white rounded-xl p-8 border border-stone-100 hover:border-rose-100 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300" data-category="mains">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-900">
<iconify-icon icon="solar:flame-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-rose-900 bg-rose-50 px-3 py-1 rounded-full uppercase tracking-wider">Wok &amp; Grill</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Mains</h3>
<ul className="space-y-4">
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Miso Black Cod</span>
<p className="text-xs text-stone-500 mt-0.5">Saikyo miso marinade, hajikami ginger</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹999</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Kung Pao Chicken</span>
<p className="text-xs text-stone-500 mt-0.5">Sichuan peppercorn, cashew, dried chili</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹549</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Thai Green Curry</span>
<p className="text-xs text-stone-500 mt-0.5">Coconut milk, thai basil, bamboo shoots</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹499</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Yaki Udon Noodles</span>
<p className="text-xs text-stone-500 mt-0.5">Stir fried thick noodles, vegetables</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹449</span>
</li>
</ul>
</div>

<div className="menu-item bg-white rounded-xl p-8 border border-stone-100 hover:border-rose-100 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300" data-category="dessert">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-900">
<iconify-icon icon="solar:cup-hot-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-rose-900 bg-rose-50 px-3 py-1 rounded-full uppercase tracking-wider">Sweets</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Dolci</h3>
<ul className="space-y-4">
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Matcha Tiramisu</span>
<p className="text-xs text-stone-500 mt-0.5">Green tea soaked sponge, mascarpone</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹399</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Chocolate Hazelnut Mochi</span>
<p className="text-xs text-stone-500 mt-0.5">Rice cake, chocolate ganache filling</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹299</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Coconut Panna Cotta</span>
<p className="text-xs text-stone-500 mt-0.5">Mango coulis, toasted coconut</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹279</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Yuzu Sorbet</span>
<p className="text-xs text-stone-500 mt-0.5">Refreshing citrus palate cleanser</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹199</span>
</li>
</ul>
</div>
</div>
<div className="text-center mt-16">
<a className="inline-flex items-center gap-2 text-stone-500 hover:text-rose-900 font-medium text-sm transition-colors border-b border-transparent hover:border-rose-900 pb-0.5" href="#">
<iconify-icon icon="solar:file-download-linear" width="16"></iconify-icon>
                    Download Seasonal Menu (PDF)
                </a>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-stone-900" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-xs font-bold text-rose-400 uppercase tracking-widest">Visual Experience</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white mt-3" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Our Atmosphere
                </h2>
<p className="text-stone-400 mt-4 max-w-xl mx-auto font-light">Elegance inspired by the East</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Restaurant Bar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer md:col-span-2 lg:col-span-1">
<img alt="Dim Sum Plating" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1552590635-27c2c2128abf?w=600&amp;h=400&amp;fit=crop" style={{transition: 'outline 0.1s ease-in-out'}}/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Interior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1543773495-2cd9248a5bda?w=800&amp;q=80" style={{outline: 'rgb(245, 158, 11) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Asian Salmon" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1560717845-968823efbee1?w=400&amp;h=400&amp;fit=crop" style={{}}/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Ramen Bowl" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=400&amp;h=400&amp;fit=crop" style={{}}/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Sushi Making" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&amp;h=400&amp;fit=crop" style={{}}/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Chef Plating" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=400&amp;h=400&amp;fit=crop" style={{}}/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Chopsticks" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1702827335519-e501c571150b?w=800&amp;q=80" style={{}}/>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-stone-50" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-xs font-bold text-rose-900 uppercase tracking-widest">Testimonials</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 mt-3" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Guest Stories
                </h2>
<div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-stone-200 mt-8">
<div className="flex items-center gap-0.5 text-rose-900">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="text-xl font-bold text-stone-900">4.9</span>
<span className="text-xs text-stone-500 border-l border-stone-200 pl-3">2,400+ reviews</span>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-xl p-8 shadow-sm border border-stone-100">
<p className="text-stone-600 text-sm leading-relaxed mb-6 italic">
                        "The most authentic Sushi I've had in Raipur. The fish quality is top-notch and the Miso Black Cod melts in your mouth. The ambiance feels like Tokyo."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-900 font-bold text-sm">
                            PR
                        </div>
<div>
<p className="text-sm font-semibold text-stone-900">Priya R.</p>
<p className="text-[10px] uppercase tracking-wide text-stone-400">Dined Last Week</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl p-8 shadow-sm border border-stone-100">
<p className="text-stone-600 text-sm leading-relaxed mb-6 italic">
                        "A gem in Civil Lines. The Dim Sum basket is a game changer. Staff is knowledgeable about the tea pairings. Highly recommend the Matcha Cheesecake."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-900 font-bold text-sm">
                            AK
                        </div>
<div>
<p className="text-sm font-semibold text-stone-900">Amit K.</p>
<p className="text-[10px] uppercase tracking-wide text-stone-400">Regular Guest</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl p-8 shadow-sm border border-stone-100">
<p className="text-stone-600 text-sm leading-relaxed mb-6 italic">
                        "Perfect spot for a date night. Quiet, elegant, and the food is consistently excellent. The Ramen broth is incredibly rich. Will definitely be returning soon."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-900 font-bold text-sm">
                            SM
                        </div>
<div>
<p className="text-sm font-semibold text-stone-900">Sneha M.</p>
<p className="text-[10px] uppercase tracking-wide text-stone-400">2 Days Ago</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
<div className="">
<span className="text-xs font-bold text-rose-900 uppercase tracking-widest">Reservations</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 mt-3 mb-8" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        Visit Us
                    </h2>
<div className="space-y-8">
<div className="flex gap-5">
<div className="w-12 h-12 border border-stone-200 rounded-full flex items-center justify-center flex-shrink-0 text-rose-900">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-stone-900 mb-1">Location</h3>
<p className="text-sm text-stone-600 leading-relaxed">48/726, Kali Mata Mandir Road, Akashwani Chowk, Civil Lines, Raipur, Chhattisgarh 492001</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 border border-stone-200 rounded-full flex items-center justify-center flex-shrink-0 text-rose-900">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-stone-900 mb-1">Contact</h3>
<a className="text-sm text-stone-600 hover:text-rose-900 transition-colors block mb-1" href="tel:07737283668">077372 83668</a>
<p className="text-sm text-stone-500">reservations@yume-asian.com</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 border border-stone-200 rounded-full flex items-center justify-center flex-shrink-0 text-rose-900">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-stone-900 mb-1">Opening Hours</h3>
<p className="text-sm text-stone-600">Daily: 12:00 PM - 11:00 PM</p>
<p className="text-sm text-stone-500 mt-1">Sushi Happy Hour: 4:00 PM - 7:00 PM</p>
</div>
</div>
</div>
</div>

<div className="relative h-full min-h-[400px]">
<div className="absolute inset-0 rounded-2xl overflow-hidden bg-stone-100 shadow-lg">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.123456789!2d81.6296!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMore%20Over%20Coffee!5e0!3m2!1sen!2sin!4v1234567890" style={{border: '0', filter: 'grayscale(1) contrast(1.2) opacity(0.8)'}} width="100%">
</iframe>
</div>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/50">
<div className="flex items-center justify-between">
<div>
<h3 className="text-base font-bold text-stone-900">Reserve a Table</h3>
<p className="text-xs text-stone-500 mt-1">Book your dining experience</p>
</div>
<a className="inline-flex items-center justify-center gap-2 bg-rose-900 hover:bg-rose-950 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all" href="tel:07737283668">
                                Book Now
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-16 lg:py-24 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
<div className="sm:col-span-2 lg:col-span-1">
<a className="inline-block mb-6" href="#home">
<span className="text-3xl font-bold tracking-tight text-white" style={{fontFamily: '\'Playfair Display\', serif'}}>YUME</span>
</a>
<p className="text-sm leading-relaxed mb-6">
                        Authentic Pan-Asian cuisine crafted with passion and tradition in the heart of Raipur.
                    </p>
<div className="flex gap-4">
<a className="text-white hover:text-rose-400 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-white hover:text-rose-400 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Explore</h4>
<ul className="space-y-3">
<li><a className="text-sm hover:text-white transition-colors" href="#about">Philosophy</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#menu">Menu</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#gallery">Gallery</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#contact">Private Dining</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Visit</h4>
<ul className="space-y-3">
<li className="text-sm">Civil Lines, Raipur</li>
<li className="text-sm">Chhattisgarh 492001</li>
<li className="pt-2"><a className="text-sm text-white hover:text-rose-400 transition-colors" href="tel:07737283668">077372 83668</a></li>
<li className="text-sm">reservations@yume-asian.com</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Opening</h4>
<ul className="space-y-3">
<li className="text-sm flex justify-between"><span>Mon - Thu</span> <span className="text-white">12pm - 11pm</span></li>
<li className="text-sm flex justify-between"><span>Fri - Sat</span> <span className="text-white">12pm - 12am</span></li>
<li className="text-sm flex justify-between"><span>Sunday</span> <span className="text-white">12pm - 11pm</span></li>
</ul>
</div>
</div>
<div className="border-t border-stone-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 YUME Asian Dining. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
