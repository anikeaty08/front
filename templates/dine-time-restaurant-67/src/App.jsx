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
background: '#0a0a0a',
surface: '#121212',
'surface-highlight': '#1E1E1E',
border: '#2A2A2A',
primary: '#FFFFFF',
secondary: '#A1A1AA',
accent: '#D97706', // Warm amber for food appetite
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // Data Structure (No Prices, No Alcohol)
        const menuData = {
            starters: [
                { name: "Crispy Calamari", desc: "Served with marinara and lemon aioli.", img: "https://images.unsplash.com/photo-1604909052743-94e838986d24?q=80&w=400&auto=format&fit=crop" },
                { name: "Bruschetta Trio", desc: "Tomato basil, mushroom truffle, and ricotta honey.", img: "https://images.unsplash.com/photo-1572695157363-bc31c5d4ef15?q=80&w=400&auto=format&fit=crop" },
                { name: "Stuffed Mushrooms", desc: "Spinach, cheese, and herb breadcrumbs.", img: "https://images.unsplash.com/photo-1623855244697-5d8fbe9c7992?q=80&w=400&auto=format&fit=crop" },
                { name: "Garden Soup", desc: "Seasonal vegetables in a rich herb broth.", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=400&auto=format&fit=crop" }
            ],
            mains: [
                { name: "Grilled Salmon", desc: "Atlantic salmon with asparagus and quinoa.", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=400&auto=format&fit=crop" },
                { name: "Classic Ribeye", desc: "Grass-fed beef with garlic mash and greens.", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=400&auto=format&fit=crop" },
                { name: "Truffle Pasta", desc: "House-made fettuccine with creamy mushroom sauce.", img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=400&auto=format&fit=crop" },
                { name: "Herb Roasted Chicken", desc: "Half chicken with roasted root vegetables.", img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=400&auto=format&fit=crop" }
            ],
            kids: [
                { name: "Mini Cheeseburgers", desc: "Two sliders with fries.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop" },
                { name: "Mac & Cheese", desc: "Creamy three-cheese blend.", img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=400&auto=format&fit=crop" },
                { name: "Chicken Tenders", desc: "Hand-breaded with honey mustard dip.", img: "https://images.unsplash.com/photo-1562967960-f0270a35e9f8?q=80&w=400&auto=format&fit=crop" }
            ],
            desserts: [
                { name: "Chocolate Lava Cake", desc: "Warm center served with vanilla bean ice cream.", img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=400&auto=format&fit=crop" },
                { name: "Berry Cheesecake", desc: "New York style with fresh berry compote.", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=400&auto=format&fit=crop" },
                { name: "Fruit Sorbet", desc: "Trio of mango, raspberry, and lemon.", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=400&auto=format&fit=crop" }
            ],
            beverages: [
                { name: "Fresh Lemonade", desc: "Mint, strawberry, or classic.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400&auto=format&fit=crop" },
                { name: "Green Smoothie", desc: "Spinach, apple, and ginger blend.", img: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=400&auto=format&fit=crop" },
                { name: "Artisan Coffee", desc: "Freshly brewed arabica blends.", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=400&auto=format&fit=crop" },
                { name: "Iced Tea", desc: "Peach or lemon infused.", img: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?q=80&w=400&auto=format&fit=crop" }
            ]
        };

        // Render Menu
        function renderMenu(category) {
            const grid = document.getElementById('menuGrid');
            grid.innerHTML = menuData[category].map(item => `
                <div class="group bg-background border border-white/5 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300">
                    <div class="h-48 overflow-hidden relative">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                        <div class="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
                    </div>
                    <div class="p-6 relative -mt-12">
                        <h3 class="text-lg font-medium text-white mb-2">${item.name}</h3>
                        <p class="text-sm text-secondary leading-relaxed">${item.desc}</p>
                    </div>
                </div>
            `).join('');
        }

        // Loader
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.classList.add('loader-fade-out');
                setTimeout(() => loader.remove(), 800);
            }, 1000);
        });

        // Tab Switching
        document.querySelectorAll('.menu-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.menu-tab').forEach(t => {
                    t.classList.remove('bg-white/10', 'text-white');
                    t.classList.add('text-secondary');
                });
                tab.classList.remove('text-secondary');
                tab.classList.add('bg-white/10', 'text-white');
                renderMenu(tab.dataset.category);
            });
        });

        // Initial Render
        renderMenu('starters');

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const closeMobileMenu = document.getElementById('closeMobileMenu');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            mobileMenu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        }

        mobileMenuBtn.addEventListener('click', toggleMenu);
        closeMobileMenu.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

        // Modal Logic
        const modal = document.getElementById('modalOverlay');
        const modalTitle = document.getElementById('modalTitle');
        const modalDesc = document.getElementById('modalDescription');

        window.openModal = function(type, name) {
            modal.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                document.getElementById('modalContent').classList.remove('scale-95');
                document.getElementById('modalContent').classList.add('scale-100');
            }, 10);
            
            if (type === 'room') {
                modalTitle.innerText = `Inquire: ${name}`;
                modalDesc.innerText = "Send us your details and we will check availability for this suite.";
            }
        }

        window.closeModal = function() {
            modal.classList.add('opacity-0');
            document.getElementById('modalContent').classList.add('scale-95');
            document.getElementById('modalContent').classList.remove('scale-100');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        // Form Handling
        function handleFormSubmit(e) {
            e.preventDefault();
            const toast = document.getElementById('toast');
            
            if(modal.classList.contains('hidden') === false) {
                closeModal();
            }

            toast.classList.remove('translate-y-24');
            setTimeout(() => {
                toast.classList.add('translate-y-24');
            }, 3000);
            
            e.target.reset();
        }

        document.getElementById('bookingForm').addEventListener('submit', handleFormSubmit);
        document.getElementById('modalForm').addEventListener('submit', handleFormSubmit);

        // Glow Effect on Mouse Move
        document.addEventListener("mousemove", (e) => {
            const cards = document.getElementsByClassName("glow-effect");
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
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
      

<div className="fixed inset-0 bg-background z-50 flex items-center justify-center" id="loader">
<div className="flex flex-col items-center">
<div className="w-12 h-12 border-t-2 border-r-2 border-white rounded-full animate-spin mb-4"></div>
<p className="text-xs font-medium tracking-widest uppercase text-white">Dine Time</p>
</div>
</div>

<header className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-background/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center space-x-2 group" href="#home">
<span className="iconify text-white w-6 h-6" data-icon="lucide:chef-hat" style={{strokeWidth: '1.5'}}></span>
<span className="text-white font-semibold text-lg tracking-tight">Dine Time</span>
</a>

<nav className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#suites">Suites</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-background bg-white rounded-full hover:bg-gray-200 transition-all" href="#booking">
                        Reserve Table
                    </a>
<button className="md:hidden text-white p-1" id="mobileMenuBtn">
<span className="iconify w-6 h-6" data-icon="lucide:menu" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</header>

<div className="fixed inset-0 bg-background z-40 transform translate-x-full transition-transform duration-300 md:hidden pt-20 px-6" id="mobileMenu">
<button className="absolute top-5 right-4 text-white p-2" id="closeMobileMenu">
<span className="iconify w-6 h-6" data-icon="lucide:x" style={{strokeWidth: '1.5'}}></span>
</button>
<nav className="flex flex-col space-y-6 text-center mt-10">
<a className="text-xl font-medium text-white mobile-link" href="#home">Home</a>
<a className="text-xl font-medium text-white mobile-link" href="#menu">Menu</a>
<a className="text-xl font-medium text-white mobile-link" href="#suites">Suites</a>
<a className="text-xl font-medium text-accent mobile-link" href="#booking">Reservations</a>
</nav>
</div>
<main>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Family Dining" className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-[2s]" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
<div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
<span className="text-xs font-medium text-white tracking-wide">Family Dining Reimagined</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-[1.1] mb-8">
                    Taste the warmth <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">of coming home.</span>
</h1>
<p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                    Experience culinary excellence in an atmosphere designed for connection. From our family to yours, welcome to Dine Time.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-background rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2" href="#booking">
<span className="iconify" data-icon="lucide:calendar-check" style={{strokeWidth: '1.5'}}></span>
                        Book a Table
                    </a>
<a className="w-full sm:w-auto px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2" href="#menu">
<span className="iconify" data-icon="lucide:utensils" style={{strokeWidth: '1.5'}}></span>
                        View Menu
                    </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<span className="iconify text-white w-6 h-6" data-icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></span>
</div>
</section>

<section className="py-24 border-b border-border bg-background relative" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
<img alt="Interior" className="relative rounded-xl border border-white/10 w-full object-cover shadow-2xl" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">A Legacy of Flavor</h2>
<p className="text-secondary leading-relaxed mb-6">
                            Founded on the principle that food tastes better when shared, Dine Time has evolved into a sanctuary for families and food enthusiasts alike. We strip away the unnecessary, focusing purely on high-quality ingredients, masterful technique, and an ambiance that whispers rather than shouts.
                        </p>
<p className="text-secondary leading-relaxed mb-8">
                            Our chefs curate seasonal menus that honor traditional recipes while embracing modern simplicity. Whether it's a casual Tuesday dinner or a milestone celebration, we ensure every moment is memorable.
                        </p>
<div className="grid grid-cols-2 gap-6 mt-8">
<div className="p-4 rounded-lg bg-surface border border-white/5">
<span className="iconify text-accent w-8 h-8 mb-3" data-icon="lucide:users" style={{strokeWidth: '1.5'}}></span>
<h3 className="text-white font-medium mb-1">Family First</h3>
<p className="text-xs text-secondary">Designed for all generations.</p>
</div>
<div className="p-4 rounded-lg bg-surface border border-white/5">
<span className="iconify text-accent w-8 h-8 mb-3" data-icon="lucide:leaf" style={{strokeWidth: '1.5'}}></span>
<h3 className="text-white font-medium mb-1">Fresh Sourced</h3>
<p className="text-xs text-secondary">Local, sustainable ingredients.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface relative overflow-hidden" id="menu">
<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">Our Menu</h2>
<p className="text-secondary max-w-md">Curated dishes crafted with passion and precision.</p>
</div>

<div className="flex space-x-1 bg-background p-1 rounded-lg border border-white/10 overflow-x-auto">
<button className="menu-tab active px-4 py-2 text-sm font-medium rounded-md text-white bg-white/10 transition-all whitespace-nowrap" data-category="starters">Starters</button>
<button className="menu-tab px-4 py-2 text-sm font-medium rounded-md text-secondary hover:text-white hover:bg-white/5 transition-all whitespace-nowrap" data-category="mains">Mains</button>
<button className="menu-tab px-4 py-2 text-sm font-medium rounded-md text-secondary hover:text-white hover:bg-white/5 transition-all whitespace-nowrap" data-category="kids">Kids Special</button>
<button className="menu-tab px-4 py-2 text-sm font-medium rounded-md text-secondary hover:text-white hover:bg-white/5 transition-all whitespace-nowrap" data-category="desserts">Desserts</button>
<button className="menu-tab px-4 py-2 text-sm font-medium rounded-md text-secondary hover:text-white hover:bg-white/5 transition-all whitespace-nowrap" data-category="beverages">Beverages</button>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="menuGrid">

</div>
<div className="mt-12 text-center">
<p className="text-xs text-secondary/50 uppercase tracking-widest">Seasonal menu subject to availability</p>
</div>
</div>
</section>

<section className="py-24 bg-background border-b border-border" id="suites">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Stay &amp; Dine</h2>
<p className="text-secondary max-w-xl mx-auto">Extend your experience with our comfortable family suites, perfect for weekend getaways.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group border border-white/10 bg-surface rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="h-64 overflow-hidden relative">
<img alt="Family Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-white mb-2">Family Suite</h3>
<p className="text-sm text-secondary mb-6">Spacious accommodation featuring two connecting rooms and a private lounge area.</p>
<div className="flex items-center gap-4 text-xs text-secondary mb-6">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:users"></span> 4 Guests</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:wifi"></span> Free Wifi</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:maximize"></span> 60m²</span>
</div>
<button className="w-full py-2 border border-white/20 rounded-lg text-sm font-medium text-white hover:bg-white hover:text-background transition-all" onclick="openModal('room', 'Family Suite')">Check Availability</button>
</div>
</div>

<div className="group border border-white/10 bg-surface rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="h-64 overflow-hidden relative">
<img alt="Deluxe Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-white mb-2">Garden Deluxe</h3>
<p className="text-sm text-secondary mb-6">Ground floor access with a private patio opening to our herb gardens.</p>
<div className="flex items-center gap-4 text-xs text-secondary mb-6">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:users"></span> 2 Guests</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:coffee"></span> Breakfast</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:flower-2"></span> Garden View</span>
</div>
<button className="w-full py-2 border border-white/20 rounded-lg text-sm font-medium text-white hover:bg-white hover:text-background transition-all" onclick="openModal('room', 'Garden Deluxe')">Check Availability</button>
</div>
</div>

<div className="group border border-white/10 bg-surface rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="h-64 overflow-hidden relative">
<img alt="Executive Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-white mb-2">Executive Suite</h3>
<p className="text-sm text-secondary mb-6">Modern luxury with panoramic city views and dedicated workspace.</p>
<div className="flex items-center gap-4 text-xs text-secondary mb-6">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:users"></span> 3 Guests</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:monitor"></span> Work Desk</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:sun"></span> City View</span>
</div>
<button className="w-full py-2 border border-white/20 rounded-lg text-sm font-medium text-white hover:bg-white hover:text-background transition-all" onclick="openModal('room', 'Executive Suite')">Check Availability</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Gallery</h2>
<a className="text-sm text-white border-b border-white/30 pb-1 hover:border-white transition-colors" href="#">View Instagram</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
<div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group">
<img alt="Restaurant Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white font-medium tracking-widest uppercase text-sm">Interior</span>
</div>
</div>
<div className="relative rounded-xl overflow-hidden group">
<img alt="Dish 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative rounded-xl overflow-hidden group">
<img alt="Dish 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-2 relative rounded-xl overflow-hidden group">
<img alt="Private Dining" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white font-medium tracking-widest uppercase text-sm">Private Events</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-background border-t border-border">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 bg-surface border border-white/5 rounded-2xl">
<div className="flex text-accent mb-4">
<span className="iconify w-4 h-4" data-icon="lucide:star" data-inline="false"></span>
<span className="iconify w-4 h-4" data-icon="lucide:star" data-inline="false"></span>
<span className="iconify w-4 h-4" data-icon="lucide:star" data-inline="false"></span>
<span className="iconify w-4 h-4" data-icon="lucide:star" data-inline="false"></span>
<span className="iconify w-4 h-4" data-icon="lucide:star" data-inline="false"></span>
</div>
<p className="text-secondary text-sm leading-relaxed mb-6">"Finally, a place where I can take my kids and still enjoy a gourmet meal. The atmosphere is sophisticated yet welcoming."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">SP</div>
<span className="text-sm text-white font-medium">Sarah Peterson</span>
</div>
</div>
<div className="p-8 bg-surface border border-white/5 rounded-2xl">
<div className="flex text-accent mb-4">
<span className="iconify w-4 h-4" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-icon="lucide:star"></span>
</div>
<p className="text-secondary text-sm leading-relaxed mb-6">"The weekend stay in the Garden Deluxe suite was rejuvenating. Breakfast in bed was the highlight!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">MR</div>
<span className="text-sm text-white font-medium">Michael Ross</span>
</div>
</div>
<div className="p-8 bg-surface border border-white/5 rounded-2xl">
<div className="flex text-accent mb-4">
<span className="iconify w-4 h-4" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-icon="lucide:star"></span>
</div>
<p className="text-secondary text-sm leading-relaxed mb-6">"Impeccable service and the vegetarian options are outstanding. Best dining experience in the city."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">AL</div>
<span className="text-sm text-white font-medium">Anita Lin</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface relative" id="booking">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<span className="text-accent text-xs font-semibold tracking-widest uppercase mb-2 block">Reservations</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Secure Your Table</h2>
<p className="text-secondary">For groups larger than 10, please contact us directly.</p>
</div>
<form className="bg-background border border-white/10 rounded-2xl p-8 shadow-2xl" id="bookingForm">
<div className="grid md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-xs text-secondary uppercase font-semibold tracking-wider">Name</label>
<input className="custom-input w-full px-4 py-3 rounded-lg text-white border border-white/5 outline-none placeholder-white/20" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-secondary uppercase font-semibold tracking-wider">Email</label>
<input className="custom-input w-full px-4 py-3 rounded-lg text-white border border-white/5 outline-none placeholder-white/20" placeholder="john@example.com" required="" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-xs text-secondary uppercase font-semibold tracking-wider">Date</label>
<input className="custom-input w-full px-4 py-3 rounded-lg text-white border border-white/5 outline-none [color-scheme:dark]" required="" type="date"/>
</div>
<div className="space-y-2">
<label className="text-xs text-secondary uppercase font-semibold tracking-wider">Guests</label>
<div className="relative">
<select className="custom-input w-full px-4 py-3 rounded-lg text-white border border-white/5 outline-none cursor-pointer">
<option>2 People</option>
<option>3 People</option>
<option>4 People</option>
<option>5 People</option>
<option>6+ People</option>
</select>
<span className="iconify absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" data-icon="lucide:chevron-down"></span>
</div>
</div>
</div>

<div className="mb-8">
<label className="text-xs text-secondary uppercase font-semibold tracking-wider block mb-3">Time</label>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="time" type="radio"/>
<span className="block px-4 py-2 rounded-md border border-white/10 text-secondary text-sm peer-checked:bg-white peer-checked:text-background transition-all">6:00 PM</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="time" type="radio"/>
<span className="block px-4 py-2 rounded-md border border-white/10 text-secondary text-sm peer-checked:bg-white peer-checked:text-background transition-all">6:30 PM</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="time" type="radio"/>
<span className="block px-4 py-2 rounded-md border border-white/10 text-secondary text-sm peer-checked:bg-white peer-checked:text-background transition-all">7:00 PM</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="time" type="radio"/>
<span className="block px-4 py-2 rounded-md border border-white/10 text-secondary text-sm peer-checked:bg-white peer-checked:text-background transition-all">7:30 PM</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="time" type="radio"/>
<span className="block px-4 py-2 rounded-md border border-white/10 text-secondary text-sm peer-checked:bg-white peer-checked:text-background transition-all">8:00 PM</span>
</label>
</div>
</div>
<button className="w-full py-4 bg-white text-background font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2" type="submit">
                        Confirm Reservation
                    </button>
</form>
</div>
</section>

<footer className="bg-background border-t border-white/10 py-16" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center space-x-2 mb-6" href="#">
<span className="iconify text-white w-6 h-6" data-icon="lucide:chef-hat"></span>
<span className="text-white font-semibold text-lg tracking-tight">Dine Time</span>
</a>
<p className="text-secondary max-w-sm mb-6">A celebration of family, flavor, and the joy of gathering together. Experience the finest dining in the heart of the city.</p>
<div className="flex space-x-4">
<a className="text-secondary hover:text-white transition-colors" href="#"><span className="iconify w-5 h-5" data-icon="lucide:facebook"></span></a>
<a className="text-secondary hover:text-white transition-colors" href="#"><span className="iconify w-5 h-5" data-icon="lucide:instagram"></span></a>
<a className="text-secondary hover:text-white transition-colors" href="#"><span className="iconify w-5 h-5" data-icon="lucide:twitter"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Visit Us</h4>
<ul className="space-y-4 text-sm text-secondary">
<li className="flex items-start gap-3">
<span className="iconify w-4 h-4 mt-1 shrink-0" data-icon="lucide:map-pin"></span>
                                123 Culinary Avenue,<br/>Metro City, MC 45001
                            </li>
<li className="flex items-center gap-3">
<span className="iconify w-4 h-4 shrink-0" data-icon="lucide:phone"></span>
                                +1 (555) 123-4567
                            </li>
<li className="flex items-center gap-3">
<span className="iconify w-4 h-4 shrink-0" data-icon="lucide:mail"></span>
                                hello@dinetime.com
                            </li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Opening Hours</h4>
<ul className="space-y-4 text-sm text-secondary">
<li className="flex justify-between border-b border-white/5 pb-2">
<span>Mon - Thu</span>
<span className="text-white">11:00 AM - 10:00 PM</span>
</li>
<li className="flex justify-between border-b border-white/5 pb-2">
<span>Fri - Sat</span>
<span className="text-white">11:00 AM - 11:00 PM</span>
</li>
<li className="flex justify-between pb-2">
<span>Sunday</span>
<span className="text-white">10:00 AM - 9:30 PM</span>
</li>
</ul>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary/50">
<p>© 2024 Dine Time Family Restaurant. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
</main>

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden opacity-0 transition-opacity duration-300 flex items-center justify-center p-4" id="modalOverlay">
<div className="bg-surface border border-white/10 rounded-2xl p-8 max-w-md w-full transform scale-95 transition-transform duration-300" id="modalContent">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-semibold text-white" id="modalTitle">Inquiry</h3>
<button className="text-secondary hover:text-white" onclick="closeModal()">
<span className="iconify w-6 h-6" data-icon="lucide:x"></span>
</button>
</div>
<p className="text-secondary mb-6" id="modalDescription">Please confirm your interest.</p>
<form className="space-y-4" id="modalForm">
<input className="custom-input w-full px-4 py-3 rounded-lg text-white border border-white/5 outline-none placeholder-white/20" placeholder="Your Name" type="text"/>
<input className="custom-input w-full px-4 py-3 rounded-lg text-white border border-white/5 outline-none placeholder-white/20" placeholder="Email Address" type="email"/>
<button className="w-full py-3 bg-white text-background font-semibold rounded-lg hover:bg-gray-200 transition-colors" type="submit">Submit Inquiry</button>
</form>
</div>
</div>

<div className="fixed bottom-6 right-6 bg-white text-background px-6 py-4 rounded-lg shadow-2xl transform translate-y-24 transition-transform duration-300 z-50 flex items-center gap-3" id="toast">
<span className="iconify w-5 h-5 text-green-600" data-icon="lucide:check-circle"></span>
<span className="font-medium">Request Sent Successfully!</span>
</div>


    </>
  );
}
