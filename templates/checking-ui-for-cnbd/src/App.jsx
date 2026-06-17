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
darkMode: 'class',
theme: {
extend: {
colors: {
cnbd: {
blue: '#00AEEF',
dark: '#0f172a',
}
},
boxShadow: {
'3d': '0 20px 40px -5px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.04)',
'3d-dark': '0 20px 40px -5px rgba(0, 0, 0, 0.5), 0 10px 20px -5px rgba(0, 0, 0, 0.4)',
'glow': '0 0 20px rgba(0, 174, 239, 0.3)'
}
}
}
}



        // Data Structure
        const db = {
            mens: {
                title: "Mens",
                focus: "Denim & Utility",
                items: [
                    { id: 101, name: "Premium Slim Jeans", price: "$89.00", image: "https://images.unsplash.com/photo-1542272617-08f086303294?auto=format&fit=crop&q=80&w=800", tag: "Best Seller" },
                    { id: 102, name: "Utility Cargo Pants", price: "$110.00", image: "https://images.unsplash.com/photo-1517445312882-56600c7091de?auto=format&fit=crop&q=80&w=800", tag: "New Arrival" },
                    { id: 103, name: "Heavyweight Denim", price: "$125.00", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800" },
                    { id: 104, name: "Working Cargo Pant", price: "$95.00", image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?auto=format&fit=crop&q=80&w=800" },
                    { id: 105, name: "Raw Denim Jacket", price: "$145.00", image: "https://images.unsplash.com/photo-1576995853123-5a297da40303?auto=format&fit=crop&q=80&w=800", tag: "Limited Edition" },
                    { id: 106, name: "Standard Fit Jean", price: "$75.00", image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=800" },
                ]
            },
            womens: {
                title: "Womens",
                focus: "Fashion & Dresses",
                items: [
                    { id: 201, name: "A-Line Denim Skirt", price: "$65.00", image: "https://images.unsplash.com/photo-1600865825103-63309c855845?auto=format&fit=crop&q=80&w=800" },
                    { id: 202, name: "Urban Jump Suit", price: "$120.00", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800", tag: "Trending" },
                    { id: 203, name: "Summer Frock", price: "$85.00", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800" },
                    { id: 204, name: "Evening Full Dress", price: "$180.00", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800", tag: "Exclusive" },
                    { id: 205, name: "High-Waist Jeans", price: "$90.00", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800" },
                    { id: 206, name: "Denim Midi Dress", price: "$115.00", image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=800" }
                ]
            },
            kids: {
                title: "Kids",
                focus: "Junior Streetwear",
                items: [
                    { id: 301, name: "Junior Denim Shorts", price: "$45.00", image: "https://images.unsplash.com/photo-1519238263496-6362274dd43d?auto=format&fit=crop&q=80&w=800" },
                    { id: 302, name: "Kids Cargo Short", price: "$50.00", image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&q=80&w=800" },
                    { id: 303, name: "Mini Dungarees", price: "$60.00", image: "https://images.unsplash.com/photo-1514339324523-b67f185d2153?auto=format&fit=crop&q=80&w=800", tag: "Playful" },
                    { id: 304, name: "Streetwear Tee", price: "$35.00", image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=800" }
                ]
            }
        };

        const categories = ['mens', 'womens', 'kids'];
        let currentIndex = 0;

        // Elements
        const gatewayView = document.getElementById('selection-gateway');
        const catalogView = document.getElementById('catalog-view');
        const catTitle = document.getElementById('cat-title');
        const catDesc = document.getElementById('cat-desc');
        const displayContainer = document.getElementById('category-display');
        
        // Theme Toggle
        const themeBtn = document.getElementById('theme-toggle');
        themeBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
        });

        // Switcher Logic
        function updateDisplay() {
            displayContainer.style.opacity = '0';
            displayContainer.style.transform = 'translateY(15px) scale(0.95)';
            
            setTimeout(() => {
                const key = categories[currentIndex];
                catTitle.textContent = db[key].title.toUpperCase();
                catDesc.textContent = db[key].focus;
                
                displayContainer.style.opacity = '1';
                displayContainer.style.transform = 'translateY(0) scale(1)';
            }, 300);
        }

        document.getElementById('next-btn').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % categories.length;
            updateDisplay();
        });

        document.getElementById('prev-btn').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + categories.length) % categories.length;
            updateDisplay();
        });

        // Navigation
        document.getElementById('select-btn').addEventListener('click', () => {
            const selectedKey = categories[currentIndex];
            loadCatalog(selectedKey);
            
            gatewayView.classList.add('hidden');
            catalogView.classList.remove('hidden');
            window.scrollTo(0, 0);
        });

        function resetApp() {
            catalogView.classList.add('hidden');
            gatewayView.classList.remove('hidden');
            window.scrollTo(0, 0);
        }

        function loadCatalog(categoryKey) {
            const data = db[categoryKey];
            const grid = document.getElementById('product-grid');
            
            // Set Headers
            document.getElementById('catalog-title').textContent = data.title + " Collection";
            
            // Render Cards
            grid.innerHTML = data.items.map(item => `
                <div class="group flex flex-col gap-4 cursor-pointer">
                    <div class="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/50">
                        ${item.tag ? `<span class="absolute top-4 left-4 z-10 bg-white/90 dark:bg-black/80 backdrop-blur-md text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest text-zinc-900 dark:text-white shadow-sm">${item.tag}</span>` : ''}
                        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <button class="absolute bottom-5 right-5 bg-white dark:bg-white text-black p-3.5 rounded-full shadow-xl translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out hover:bg-cnbd-blue hover:text-white">
                             <iconify-icon icon="solar:cart-large-2-linear" class="text-xl"></iconify-icon>
                        </button>
                    </div>
                    <div class="flex flex-col gap-1 px-1">
                        <div class="flex justify-between items-start">
                            <h3 class="text-xl font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-cnbd-blue transition-colors tracking-tight">${item.name}</h3>
                            <span class="text-lg text-zinc-500 dark:text-zinc-400 font-normal tracking-tight">${item.price}</span>
                        </div>
                        <p class="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">CNBD / ${data.title}</p>
                    </div>
                </div>
            `).join('');
        }
    
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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-zinc-200/50 dark:border-zinc-800/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex flex-col leading-none select-none cursor-pointer group" onclick="resetApp()">
<span className="text-[10px] uppercase tracking-[0.25em] font-medium text-zinc-500 dark:text-zinc-500 mb-0.5 group-hover:text-cnbd-blue transition-colors duration-300">Cotton &amp;</span>
<div className="flex items-center gap-0.5">
<span className="text-3xl font-bold tracking-tighter text-cnbd-blue">CN</span>
<span className="dark:text-white group-hover:text-cnbd-blue transition-colors duration-300 text-3xl font-bold text-zinc-900 tracking-tighter">BD</span>
</div>
<span className="text-[10px] uppercase tracking-[0.25em] font-medium text-zinc-900 dark:text-zinc-100 mt-0.5 text-right">Blue Denim</span>
</div>

<div className="flex items-center gap-6">
<button className="group p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100" id="theme-toggle">
<iconify-icon className="hidden dark:block text-2xl group-active:rotate-90 transition-transform duration-500" icon="solar:sun-2-linear"></iconify-icon>
<iconify-icon className="block dark:hidden text-2xl group-active:-rotate-12 transition-transform duration-500" icon="solar:moon-linear"></iconify-icon>
</button>
<button className="relative p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
<iconify-icon className="text-2xl" icon="solar:bag-3-linear"></iconify-icon>
<span className="absolute top-1.5 right-1 w-2 h-2 bg-cnbd-blue rounded-full ring-2 ring-white dark:ring-black"></span>
</button>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col pt-20">

<section className="w-full flex flex-col relative" id="selection-gateway">
<div className="min-h-[85vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent opacity-50"></div>
<div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cnbd-blue/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
<div className="text-center z-10 max-w-4xl mx-auto space-y-4 mb-20">
<h1 className="text-5xl md:text-8xl font-medium tracking-tighter text-zinc-900 dark:text-white">
                        Enhance Your <br/> <span className="text-zinc-400 dark:text-zinc-600">Dressing.</span>
</h1>
</div>

<div className="relative w-full max-w-3xl flex items-center justify-between mb-20 select-none perspective-container">

<button className="group p-5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-cnbd-blue hover:shadow-glow dark:hover:border-cnbd-blue transition-all active:scale-95 z-20" id="prev-btn">
<iconify-icon className="text-2xl text-zinc-600 dark:text-zinc-300 group-hover:text-cnbd-blue transition-colors" icon="solar:arrow-left-linear"></iconify-icon>
</button>

<div className="flex flex-col items-center justify-center w-full h-40 relative">
<div className="text-center transition-all duration-500 transform-gpu" id="category-display">
<p className="text-sm md:text-base text-cnbd-blue font-semibold uppercase tracking-[0.3em] mb-4" id="cat-desc">
                                Denim &amp; Utility
                            </p>
<h2 className="text-6xl md:text-8xl font-semibold tracking-tighter text-zinc-900 dark:text-white" id="cat-title">
                                MENS
                            </h2>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-zinc-200/50 dark:border-zinc-800/50 rounded-full -z-10 scale-150 opacity-50"></div>
</div>

<button className="group p-5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-cnbd-blue hover:shadow-glow dark:hover:border-cnbd-blue transition-all active:scale-95 z-20" id="next-btn">
<iconify-icon className="text-2xl text-zinc-600 dark:text-zinc-300 group-hover:text-cnbd-blue transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<button className="group relative overflow-hidden rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-16 py-6 text-lg font-semibold tracking-tight shadow-2xl hover:-translate-y-1 transition-all duration-300" id="select-btn">
<span className="relative z-10 flex items-center gap-3">
                        View Collection <iconify-icon className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-cnbd-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 mix-blend-overlay"></div>
</button>
<div className="absolute bottom-10 flex gap-2">
<div className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
<div className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
<div className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
</div>
</div>

<div className="w-full py-24 px-6 bg-zinc-50 dark:bg-[#080808] border-t border-zinc-200 dark:border-zinc-900 relative overflow-hidden perspective-container" id="want-to-know">

<div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row items-end justify-between gap-6">
<div>
<span className="text-cnbd-blue font-bold tracking-widest uppercase text-xs mb-2 block">Our Philosophy</span>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white">Want To Know?</h3>
</div>
<p className="text-zinc-500 dark:text-zinc-400 max-w-sm text-sm leading-relaxed text-right md:text-left">
                        We craft denim that speaks the language of durability and style. Experience the three pillars of CNBD.
                    </p>
</div>

<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="card-3d group relative h-80 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl hover:shadow-3d dark:hover:shadow-3d-dark p-8 flex flex-col justify-between overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cnbd-blue/20 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="z-10">
<div className="w-12 h-12 rounded-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-cnbd-blue mb-6">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h4 className="text-2xl font-medium text-zinc-900 dark:text-white mb-2">Durability</h4>
<p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                                Engineered fabrics designed to withstand the rigors of modern life without losing shape or comfort.
                            </p>
</div>
<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-cnbd-blue transition-colors">
                            Read More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="card-3d group relative h-80 rounded-2xl bg-zinc-900 dark:bg-white border border-zinc-800 dark:border-zinc-200 shadow-xl hover:shadow-3d dark:hover:shadow-3d-dark p-8 flex flex-col justify-between overflow-hidden text-white dark:text-zinc-900 transform md:-translate-y-4">
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cnbd-blue to-purple-500"></div>
<div className="z-10">
<div className="w-12 h-12 rounded-full bg-zinc-800 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-zinc-900 mb-6 border border-zinc-700 dark:border-zinc-300">
<iconify-icon className="text-2xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h4 className="text-2xl font-medium mb-2">Sustainability</h4>
<p className="text-zinc-400 dark:text-zinc-500 text-sm leading-relaxed">
                                Committed to eco-friendly washes and organic cotton sourcing to minimize our environmental footprint.
                            </p>
</div>
<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white dark:group-hover:text-black transition-colors">
                            Our Impact <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="card-3d group relative h-80 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl hover:shadow-3d dark:hover:shadow-3d-dark p-8 flex flex-col justify-between overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-100 via-transparent to-transparent dark:from-zinc-800 opacity-50"></div>
<div className="z-10">
<div className="w-12 h-12 rounded-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-cnbd-blue mb-6">
<iconify-icon className="text-2xl" icon="solar:scissors-square-linear"></iconify-icon>
</div>
<h4 className="text-2xl font-medium text-zinc-900 dark:text-white mb-2">Heritage</h4>
<p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                                Blending traditional tailoring techniques with contemporary cuts for the perfect fit every time.
                            </p>
</div>
<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-cnbd-blue transition-colors">
                            The Story <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="hidden min-h-screen px-6 py-12 max-w-7xl mx-auto w-full animate-fade-in" id="catalog-view">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-8">
<div>
<button className="flex items-center gap-2 text-zinc-500 hover:text-cnbd-blue mb-4 transition-colors text-sm font-semibold tracking-wide uppercase" onclick="resetApp()">
<iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon> Back
                    </button>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-white" id="catalog-title">
                        Mens Collection
                    </h2>
<p className="text-lg text-zinc-500 dark:text-zinc-400 mt-2 font-light" id="catalog-subtitle">
                        Premium denim and utility wear.
                    </p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:border-cnbd-blue hover:text-cnbd-blue transition-colors bg-white dark:bg-zinc-900">
<iconify-icon className="text-lg" icon="solar:filter-linear"></iconify-icon> Filter
                    </button>
<button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:border-cnbd-blue hover:text-cnbd-blue transition-colors bg-white dark:bg-zinc-900">
<iconify-icon className="text-lg" icon="solar:sort-vertical-linear"></iconify-icon> Sort
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16" id="product-grid">

</div>

<div className="mt-24 pt-12 border-t border-zinc-200 dark:border-zinc-800 text-center">
<div className="flex flex-col items-center">
<span className="text-2xl font-bold tracking-tighter text-zinc-300 dark:text-zinc-700">CNBD</span>
<p className="text-zinc-400 dark:text-zinc-600 text-sm mt-2">Designed for the modern individual.</p>
</div>
</div>
</section>
</main>


    </>
  );
}
