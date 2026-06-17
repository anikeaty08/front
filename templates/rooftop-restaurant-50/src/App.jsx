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
        
        // Menu Category Toggle
        function showCategory(category) {
            // Hide all categories
            document.querySelectorAll('.menu-category').forEach(el => {
                el.classList.add('hidden');
            });
            
            // Show selected category
            document.getElementById(category).classList.remove('hidden');
            
            // Update tab styles
            document.querySelectorAll('.menu-tab').forEach(tab => {
                if (tab.dataset.category === category) {
                    tab.classList.remove('bg-white/10', 'text-neutral-300', 'hover:bg-white/20');
                    tab.classList.add('bg-amber-500', 'text-neutral-900');
                } else {
                    tab.classList.add('bg-white/10', 'text-neutral-300', 'hover:bg-white/20');
                    tab.classList.remove('bg-amber-500', 'text-neutral-900');
                }
            });
        }
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    mobileMenu.classList.add('hidden');
                }
            });
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 lg:h-20">
<a className="text-2xl lg:text-3xl font-semibold tracking-tighter text-amber-400" href="#" style={{fontFamily: '\'Playfair Display\', serif'}}>Sangria</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#menu">Menu</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#ambience">Ambience</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors" href="tel:07880033440">
<span className="iconify" data-icon="lucide:phone" data-width="16" style={{strokeWidth: '1.5'}}></span>
                        078800 33440
                    </a>
<a className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-neutral-900 text-sm font-medium rounded-full transition-all" href="#reserve">
                        Reserve Table
                    </a>
<button className="lg:hidden p-2 text-neutral-300" id="mobileMenuBtn">
<span className="iconify" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>

<div className="lg:hidden hidden bg-neutral-900 border-t border-white/5" id="mobileMenu">
<div className="px-4 py-6 space-y-4">
<a className="block text-neutral-300 hover:text-white" href="#about">About</a>
<a className="block text-neutral-300 hover:text-white" href="#menu">Menu</a>
<a className="block text-neutral-300 hover:text-white" href="#ambience">Ambience</a>
<a className="block text-neutral-300 hover:text-white" href="#gallery">Gallery</a>
<a className="block text-neutral-300 hover:text-white" href="#contact">Contact</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-neutral-950"></div>
<div className="absolute inset-0" style={{background: 'url(\'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-purple-900/20 mix-blend-overlay"></div>
<div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm text-neutral-200">4.2★ · 1,161 Reviews on Google</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Where Flavours Meet<br/>
<span className="text-amber-400">the Skyline</span>
</h1>
<p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 font-light">
                Experience exquisite cuisine, handcrafted cocktails, and mesmerizing live music at Raipur's premier rooftop destination
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-neutral-900 font-medium rounded-full transition-all flex items-center justify-center gap-2" href="#reserve">
<span className="iconify" data-icon="lucide:calendar" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Reserve a Table
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-full transition-all flex items-center justify-center gap-2" href="tel:07880033440">
<span className="iconify" data-icon="lucide:phone" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Call Now
                </a>
<a className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-white/40 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2" href="#contact">
<span className="iconify" data-icon="lucide:map-pin" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Get Directions
                </a>
</div>
<div className="mt-16 grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-8 max-w-3xl mx-auto">
<div className="flex flex-col items-center gap-2 p-4">
<span className="iconify text-amber-400" data-icon="lucide:utensils" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-neutral-400">All You Can Eat</span>
</div>
<div className="flex flex-col items-center gap-2 p-4">
<span className="iconify text-amber-400" data-icon="lucide:clock" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-neutral-400">Happy Hour</span>
</div>
<div className="flex flex-col items-center gap-2 p-4">
<span className="iconify text-amber-400" data-icon="lucide:leaf" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-neutral-400">Vegan Options</span>
</div>
<div className="flex flex-col items-center gap-2 p-4">
<span className="iconify text-amber-400" data-icon="lucide:sunset" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-neutral-400">Rooftop Seating</span>
</div>
<div className="col-span-2 sm:col-span-1 flex flex-col items-center gap-2 p-4">
<span className="iconify text-amber-400" data-icon="lucide:music" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-neutral-400">Live Music</span>
</div>
</div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
<span className="iconify text-white/50" data-icon="lucide:chevron-down" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
</section>

<section className="py-20 lg:py-32 bg-neutral-950" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div>
<span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Our Story</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mt-4 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        A Toast to<br/>Tradition &amp; Innovation
                    </h2>
<div className="space-y-4 text-neutral-400 font-light leading-relaxed">
<p>
                            Inspired by the timeless Spanish drink, Sangria Raipur is a celebration of flavors where ancient culinary customs meet future-forward gastronomy. Perched on the 9th floor of Babylon Tower, we offer an unparalleled rooftop dining experience with panoramic views of Raipur's skyline.
                        </p>
<p>
                            Our kitchen brings together authentic Indian, Indo-Chinese, Italian, and global cuisines, crafted by passionate chefs who believe in the art of fusion. Every dish tells a story, every cocktail is an experience.
                        </p>
<p>
                            From intimate dinners under the stars to vibrant evenings with live music and DJ nights, Sangria is where memories are made and celebrations come alive.
                        </p>
</div>
<div className="grid grid-cols-3 gap-6 mt-10">
<div>
<div className="text-3xl font-semibold text-amber-400" style={{fontFamily: '\'Playfair Display\', serif'}}>9th</div>
<div className="text-sm text-neutral-500 mt-1">Floor Views</div>
</div>
<div>
<div className="text-3xl font-semibold text-amber-400" style={{fontFamily: '\'Playfair Display\', serif'}}>4+</div>
<div className="text-sm text-neutral-500 mt-1">Cuisines</div>
</div>
<div>
<div className="text-3xl font-semibold text-amber-400" style={{fontFamily: '\'Playfair Display\', serif'}}>1K+</div>
<div className="text-sm text-neutral-500 mt-1">Happy Guests</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden">
<img alt="Sangria Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&amp;q=80"/>
</div>
<div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-neutral-950 hidden lg:block">
<img alt="Cocktail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-gradient-to-b from-neutral-950 to-neutral-900" id="menu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Culinary Excellence</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mt-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Our Menu
                </h2>
<p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
                    A carefully curated selection of dishes that celebrate global flavors with a local soul
                </p>
</div>

<div className="flex flex-wrap justify-center gap-2 mb-12">
<button className="menu-tab active px-5 py-2.5 rounded-full text-sm font-medium transition-all bg-amber-500 text-neutral-900" data-category="appetizers" onclick="showCategory('appetizers')">Appetizers</button>
<button className="menu-tab px-5 py-2.5 rounded-full text-sm font-medium transition-all bg-white/10 text-neutral-300 hover:bg-white/20" data-category="chefs" onclick="showCategory('chefs')">Chef's Special</button>
<button className="menu-tab px-5 py-2.5 rounded-full text-sm font-medium transition-all bg-white/10 text-neutral-300 hover:bg-white/20" data-category="pizza" onclick="showCategory('pizza')">Pizzas</button>
<button className="menu-tab px-5 py-2.5 rounded-full text-sm font-medium transition-all bg-white/10 text-neutral-300 hover:bg-white/20" data-category="pasta" onclick="showCategory('pasta')">Pastas</button>
<button className="menu-tab px-5 py-2.5 rounded-full text-sm font-medium transition-all bg-white/10 text-neutral-300 hover:bg-white/20" data-category="soups" onclick="showCategory('soups')">Soups</button>
<button className="menu-tab px-5 py-2.5 rounded-full text-sm font-medium transition-all bg-white/10 text-neutral-300 hover:bg-white/20" data-category="munches" onclick="showCategory('munches')">Munches</button>
<button className="menu-tab px-5 py-2.5 rounded-full text-sm font-medium transition-all bg-white/10 text-neutral-300 hover:bg-white/20" data-category="salads" onclick="showCategory('salads')">Salads</button>
</div>

<div className="max-w-4xl mx-auto">
<div className="bg-gradient-to-b from-neutral-800/50 to-neutral-900/50 rounded-3xl border border-white/10 p-6 sm:p-10 backdrop-blur-sm">

<div className="menu-category" id="appetizers">
<h3 className="text-2xl font-medium text-amber-400 mb-8 pb-4 border-b border-white/10" style={{fontFamily: '\'Playfair Display\', serif'}}>
                            Appetizers – Veg
                        </h3>
<div className="space-y-4">
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Baby Kulcha</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹225</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Tandoori Pineapple Chaat</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹295</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Mushroom &amp; Spinach Crostini</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹275</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Crispy Bullets</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹325</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Crispy Veg / Veg Salt &amp; Pepper</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹325</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Potato Cheese Shots</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹325</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Chilli Baby Corn</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹325</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Honey Chilli Potato</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹325</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Honey Chilli Lotus Stem</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹375</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Chilli Mushroom</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹395</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Chilli Paneer</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹395</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Golden Baby Corn</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹365</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Veg Manchurian</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹365</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Veg Lollipop</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹395</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Paneer 65</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹425</span>
</div>
</div>
</div>

<div className="menu-category hidden" id="chefs">
<h3 className="text-2xl font-medium text-amber-400 mb-8 pb-4 border-b border-white/10" style={{fontFamily: '\'Playfair Display\', serif'}}>
                            Chef's Special Starters
                        </h3>
<div className="space-y-4">
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Mushroom Duplex</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹425</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Malai Broccoli</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹375</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">The Silk Route Cake</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹445</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Hara Bhara Kebab</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹315</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Veg Seekh Kebab</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹395</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Dahi Ke Takiya</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹375</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Mushroom Achari Tikka</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹395</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Paneer Tikka</span>
<p className="text-xs text-neutral-500 mt-1">Achari / Malai / Hariyali</p>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium text-sm">₹425 / ₹445 / ₹475</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Aloo Guldasta</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹425</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Tex-Mex Chimichanga Roll</span>
<p className="text-xs text-neutral-500 mt-1">Veg / Chicken</p>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹445 / ₹495</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Sizzling Cheesy Garlic Paneer</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹615</span>
</div>
</div>
</div>

<div className="menu-category hidden" id="pizza">
<h3 className="text-2xl font-medium text-amber-400 mb-8 pb-4 border-b border-white/10" style={{fontFamily: '\'Playfair Display\', serif'}}>
                            Artisanal Pizzas
                        </h3>
<div className="space-y-4">
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Margherita</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹395</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Naanza</span>
<p className="text-xs text-neutral-500 mt-1">Veg / Chicken</p>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹375 / ₹485</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Earthy Mushroom</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹445</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Paneer Tikka Pizza</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹445</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Chicken Tikka Pizza</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹465</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Hawaiian</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹445 / ₹495</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Calzone</span>
<p className="text-xs text-neutral-500 mt-1">Veg / Chicken</p>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹445 / ₹495</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">BBQ Jalapenos Chicken</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹495</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Smokey Chicken</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹495</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Sangria Special Farm House</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹535</span>
</div>
</div>
</div>

<div className="menu-category hidden" id="pasta">
<h3 className="text-2xl font-medium text-amber-400 mb-8 pb-4 border-b border-white/10" style={{fontFamily: '\'Playfair Display\', serif'}}>
                            Pastas
                        </h3>
<p className="text-xs text-neutral-500 mb-6">Choice of Penne / Spaghetti</p>
<div className="space-y-4">
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Modern Street Pasta</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹325 / ₹375</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Aglio e Olio</span>
<p className="text-xs text-neutral-500 mt-1">Veg / Chicken / Prawn</p>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium text-sm">₹325 / ₹345 / ₹375</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Sugo All'Arrabbiata</span>
<p className="text-xs text-neutral-500 mt-1">Veg / Chicken / Prawn</p>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium text-sm">₹325 / ₹375 / ₹415</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Pesto</span>
<p className="text-xs text-neutral-500 mt-1">Veg / Chicken / Prawn</p>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium text-sm">₹345 / ₹375 / ₹425</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Alfredo</span>
<p className="text-xs text-neutral-500 mt-1">Veg / Chicken / Prawn</p>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium text-sm">₹375 / ₹425 / ₹475</span>
</div>
</div>
</div>

<div className="menu-category hidden" id="soups">
<h3 className="text-2xl font-medium text-amber-400 mb-8 pb-4 border-b border-white/10" style={{fontFamily: '\'Playfair Display\', serif'}}>
                            Zuppa (Soups)
                        </h3>
<div className="space-y-4">
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Hot &amp; Sour</span>
<p className="text-xs text-neutral-500 mt-1">Veg / Chicken</p>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹215 / ₹235</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Manchow</span>
<p className="text-xs text-neutral-500 mt-1">Veg / Chicken</p>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹215 / ₹235</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Lemon Coriander</span>
<p className="text-xs text-neutral-500 mt-1">Veg / Chicken</p>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹215 / ₹235</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Mushroom Broth</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹235</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Cream of Tomato</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹245</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Cream of Chicken</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹255</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Wonton</span>
<p className="text-xs text-neutral-500 mt-1">Veg / Chicken / Prawn</p>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium text-sm">₹275 / ₹325 / ₹395</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Tibetan Noodle Thukpa</span>
<p className="text-xs text-neutral-500 mt-1">Veg / Chicken / Prawn</p>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium text-sm">₹295 / ₹325 / ₹375</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Khow Suey</span>
<p className="text-xs text-neutral-500 mt-1">Veg / Chicken / Prawn</p>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium text-sm">₹395 / ₹495</span>
</div>
</div>
</div>

<div className="menu-category hidden" id="munches">
<h3 className="text-2xl font-medium text-amber-400 mb-8 pb-4 border-b border-white/10" style={{fontFamily: '\'Playfair Display\', serif'}}>
                            Munches
                        </h3>
<div className="space-y-4">
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Masala Papad</span>
<p className="text-xs text-neutral-500 mt-1">Fried / Roasted</p>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹60 / ₹80</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Nutty Affair</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹155</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Peanut Masala</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹175</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">French Fries</span>
<p className="text-xs text-neutral-500 mt-1">Salted / Peri Peri</p>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹145 / ₹175</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Potato Wedges</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹195</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Potato Cheese Shots</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹225</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Crispy Chilli Corn / Corn Salt &amp; Pepper</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹275</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Corn Cheese Balls</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹275</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Grilled Pineapple</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹275</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Cheese Cherry Pineapple</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹295</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Loaded Nachos</span>
<p className="text-xs text-neutral-500 mt-1">Veg / Chicken</p>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹345 / ₹395</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Harissa Hummus with Pita</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹395</span>
</div>
</div>
</div>

<div className="menu-category hidden" id="salads">
<h3 className="text-2xl font-medium text-amber-400 mb-8 pb-4 border-b border-white/10" style={{fontFamily: '\'Playfair Display\', serif'}}>
                            Insalata (Salads)
                        </h3>
<div className="space-y-4">
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Russian Salad</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹245</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Caesar Salad</span>
<p className="text-xs text-neutral-500 mt-1">Veg / Chicken</p>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹255 / ₹275</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Green Salad</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹275</span>
</div>
<div className="flex justify-between items-baseline gap-4 group">
<div className="flex-1">
<span className="text-white font-medium group-hover:text-amber-400 transition-colors">Fattoush Salad</span>
<div className="border-b border-dotted border-neutral-700 mt-2"></div>
</div>
<span className="text-amber-400 font-medium">₹345</span>
</div>
</div>
</div>

<div className="mt-10 pt-6 border-t border-white/10">
<p className="text-xs text-neutral-500 text-center">5% GST &amp; 7% Service Charge Applicable</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-neutral-950" id="ambience">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Experience</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mt-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Live Music &amp; Ambience
                </h2>
<p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
                    Where every evening transforms into an unforgettable celebration
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
<img alt="Live Band" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-center gap-2 text-amber-400 mb-2">
<span className="iconify" data-icon="lucide:music" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium">Live Bands</span>
</div>
<p className="text-neutral-300 text-sm">Soulful performances every weekend</p>
</div>
</div>
<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
<img alt="DJ Night" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-center gap-2 text-amber-400 mb-2">
<span className="iconify" data-icon="lucide:disc-3" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium">DJ Nights</span>
</div>
<p className="text-neutral-300 text-sm">Electrifying beats under the stars</p>
</div>
</div>
<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
<img alt="City Skyline" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-center gap-2 text-amber-400 mb-2">
<span className="iconify" data-icon="lucide:building-2" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium">Skyline Views</span>
</div>
<p className="text-neutral-300 text-sm">Panoramic views of Raipur</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-gradient-to-b from-neutral-950 to-neutral-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Testimonials</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mt-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    What Our Guests Say
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
<div className="flex gap-1 mb-4">
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: '#f59e0b'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: '#f59e0b'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: '#f59e0b'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: '#f59e0b'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: '#f59e0b'}}></span>
</div>
<p className="text-neutral-300 font-light leading-relaxed mb-6">
                        "The rooftop ambience is absolutely stunning! Perfect for a romantic dinner. The live band made our anniversary even more special. Highly recommended!"
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-medium">R</div>
<div>
<p className="text-white font-medium text-sm">Rahul Sharma</p>
<p className="text-neutral-500 text-xs">Google Review</p>
</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
<div className="flex gap-1 mb-4">
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: '#f59e0b'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: '#f59e0b'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: '#f59e0b'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: '#f59e0b'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: '#f59e0b'}}></span>
</div>
<p className="text-neutral-300 font-light leading-relaxed mb-6">
                        "Best cocktails in Raipur, hands down! The staff is incredibly attentive and the food quality is consistently excellent. Our go-to weekend spot."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-medium">P</div>
<div>
<p className="text-white font-medium text-sm">Priya Verma</p>
<p className="text-neutral-500 text-xs">Google Review</p>
</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
<div className="flex gap-1 mb-4">
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: '#f59e0b'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: '#f59e0b'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: '#f59e0b'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: '#f59e0b'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-neutral-300 font-light leading-relaxed mb-6">
                        "Amazing DJ nights! The energy is unmatched. Tried their Paneer Tikka Pizza and it was out of this world. Perfect blend of Indian and Italian."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-medium">A</div>
<div>
<p className="text-white font-medium text-sm">Amit Patel</p>
<p className="text-neutral-500 text-xs">Google Review</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-neutral-900" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Gallery</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mt-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    A Glimpse of Sangria
                </h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square rounded-xl overflow-hidden group">
<img alt="Food" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&amp;q=80"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group">
<img alt="Cocktail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&amp;q=80"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group">
<img alt="Restaurant" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&amp;q=80"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group">
<img alt="Pizza" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&amp;q=80"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group">
<img alt="Dish" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&amp;q=80"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group">
<img alt="Drinks" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&amp;q=80"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group">
<img alt="Food Platter" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&amp;q=80"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group">
<img alt="Ambience" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden" id="reserve">
<div className="absolute inset-0 opacity-10">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&amp;q=80"/>
</div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center">
<span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Reservations</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mt-4 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Book Your Table
                </h2>
<p className="text-neutral-400 max-w-xl mx-auto mb-12">
                    Secure your spot at Raipur's most sought-after rooftop destination. Reserve now for an unforgettable evening.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-neutral-900 font-medium rounded-full transition-all flex items-center justify-center gap-2" href="https://www.eazydiner.com" target="_blank">
<span className="iconify" data-icon="lucide:calendar-check" data-width="20" style={{strokeWidth: '1.5'}}></span>
                        Reserve on EazyDiner
                    </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-full transition-all flex items-center justify-center gap-2" href="https://www.swiggy.com" target="_blank">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="20" style={{strokeWidth: '1.5'}}></span>
                        Order on Swiggy
                    </a>
</div>
<div className="mt-8 flex items-center justify-center gap-6 text-neutral-400">
<a className="flex items-center gap-2 hover:text-amber-400 transition-colors" href="tel:07880033440">
<span className="iconify" data-icon="lucide:phone" data-width="18" style={{strokeWidth: '1.5'}}></span>
                        078800 33440
                    </a>
<span className="text-neutral-700">|</span>
<span className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:clock" data-width="18" style={{strokeWidth: '1.5'}}></span>
                        Open till 12:00 AM
                    </span>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-neutral-950" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
<div>
<span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Contact</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mt-4 mb-8" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        Find Us
                    </h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
<span className="iconify text-amber-400" data-icon="lucide:map-pin" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-white font-medium mb-1">Address</h3>
<p className="text-neutral-400 font-light">A Wing, 9th Floor, Babylon Tower,<br/>VIP Square, NH-06, Raipur,<br/>Chhattisgarh 492001</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
<span className="iconify text-amber-400" data-icon="lucide:phone" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-white font-medium mb-1">Phone</h3>
<a className="text-neutral-400 font-light hover:text-amber-400 transition-colors" href="tel:07880033440">078800 33440</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
<span className="iconify text-amber-400" data-icon="lucide:clock" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-white font-medium mb-1">Hours</h3>
<p className="text-neutral-400 font-light">Open Daily<br/>Closes at 12:00 AM</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
<span className="iconify text-amber-400" data-icon="lucide:instagram" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-white font-medium mb-1">Follow Us</h3>
<a className="text-neutral-400 font-light hover:text-amber-400 transition-colors" href="#">@sangriaraipur</a>
</div>
</div>
</div>
</div>
<div className="rounded-2xl overflow-hidden h-96 lg:h-auto">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8556!2d81.6343!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE1JzA1LjAiTiA4McKwMzgnMDMuNSJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" style={{border: '0', filter: 'grayscale(100%) invert(92%) contrast(83%)'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="py-12 bg-neutral-950 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<a className="text-2xl font-semibold tracking-tighter text-amber-400" href="#" style={{fontFamily: '\'Playfair Display\', serif'}}>Sangria</a>
<span className="text-neutral-600">|</span>
<span className="text-neutral-500 text-sm">Raipur's Premier Rooftop Destination</span>
</div>
<div className="flex items-center gap-6">
<a className="text-neutral-500 hover:text-amber-400 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-neutral-500 hover:text-amber-400 transition-colors" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-neutral-500 hover:text-amber-400 transition-colors" href="tel:07880033440">
<span className="iconify" data-icon="lucide:phone" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/5 text-center">
<p className="text-neutral-600 text-sm">© 2024 Sangria Raipur. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
