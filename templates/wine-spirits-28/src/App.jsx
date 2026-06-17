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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        document.addEventListener('DOMContentLoaded', () => {
            const tabBtns = document.querySelectorAll('.js-tab-btn');
            const viewSections = document.querySelectorAll('.view-section');

            tabBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const targetId = btn.getAttribute('data-target');
                    
                    // Reset all buttons
                    tabBtns.forEach(b => {
                        b.classList.remove('bg-white', 'text-zinc-900', 'shadow-[0_2px_8px_rgba(0,0,0,0.04)]');
                        b.classList.add('text-zinc-500');
                    });
                    
                    // Set active button
                    btn.classList.remove('text-zinc-500');
                    btn.classList.add('bg-white', 'text-zinc-900', 'shadow-[0_2px_8px_rgba(0,0,0,0.04)]');

                    // Hide all views
                    viewSections.forEach(view => {
                        view.classList.remove('active');
                        // Small delay for smooth opacity transition
                        setTimeout(() => {
                            if (!view.classList.contains('active')) {
                                view.style.display = 'none';
                            }
                        }, 400); 
                    });

                    // Show target view
                    const targetView = document.getElementById(targetId);
                    if (targetView) {
                        targetView.style.display = 'block';
                        // Trigger reflow to restart animation
                        void targetView.offsetWidth;
                        targetView.classList.add('active');
                    }
                });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/80">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex items-center gap-8">
<a className="text-zinc-900 text-lg font-semibold tracking-tight flex items-center gap-2" href="#">
<iconify-icon className="text-xl" icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
                    ENOTECA
                </a>

<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">Shop</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Curated Collections</a>
<a className="hover:text-zinc-900 transition-colors text-xs font-medium text-zinc-500" href="#">Journal</a>
<a className="hover:text-zinc-900 transition-colors text-xs font-medium text-zinc-500" href="about.html">About Us</a>
</div>
</div>

<div className="flex items-center gap-5 text-zinc-600">
<button className="hover:text-zinc-900 transition-colors flex items-center">
<iconify-icon className="text-xl" icon="solar:magnifier-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="hover:text-zinc-900 transition-colors flex items-center">
<iconify-icon className="text-xl" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="hover:text-zinc-900 transition-colors flex items-center relative group">
<iconify-icon className="text-xl" icon="solar:bag-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-zinc-900 text-white text-xs scale-75 min-w-[14px] h-[14px] flex items-center justify-center rounded-full font-medium">0</span>

<div className="absolute top-full right-0 mt-4 w-72 bg-white border border-zinc-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
<div className="text-center text-xs font-medium text-zinc-500 flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-zinc-300" icon="solar:bag-cross-linear" strokeWidth="1.5"></iconify-icon>
                            Your cart is empty
                        </div>
</div>
</button>
</div>
</div>
</nav>

<main className="flex-grow md:py-20 flex flex-col w-full max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">

<header className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-xs font-medium text-zinc-600 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                New Arrivals Available
            </span>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                Exceptional vintages for the modern palate.
            </h1>
<p className="text-sm md:text-base text-zinc-500 max-w-xl font-normal leading-relaxed">
                Discover our meticulously curated selection of the world's finest wines, rare spirits, and artisanal craft beers.
            </p>
</header>

<section className="flex flex-col w-full">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 pb-6 border-b border-zinc-200/80">

<div className="flex items-center bg-zinc-100 p-1 rounded-full w-full md:w-auto overflow-x-auto">
<button className="js-tab-btn flex-1 md:flex-none px-6 py-1.5 text-xs font-medium rounded-full transition-all duration-200" data-target="wines-view">Wines</button>
<button className="js-tab-btn flex-1 md:flex-none transition-all duration-200 hover:text-zinc-900 text-xs font-medium rounded-full pt-1.5 pr-6 pb-1.5 pl-6" data-target="spirits-view">Spirits</button>
<button className="js-tab-btn flex-1 md:flex-none px-6 py-1.5 text-xs font-medium rounded-full transition-all duration-200 text-zinc-500 hover:text-zinc-900" data-target="beers-view">Beers</button>
</div>

<div className="flex items-center gap-6 w-full md:w-auto">

<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="peer-focus:outline-none peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-zinc-900 bg-zinc-200 w-8 h-4 rounded-full"></div>
</div>
<span className="text-xs text-zinc-500 font-medium group-hover:text-zinc-900 transition-colors">In stock</span>
</label>

<div className="relative">
<select className="appearance-none bg-transparent border border-zinc-200/80 text-zinc-600 text-xs font-medium rounded-full px-4 py-1.5 pr-8 focus:outline-none focus:border-zinc-300 focus:ring-0 cursor-pointer hover:bg-zinc-50 transition-colors">
<option>Sort by Featured</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
<option>Newest Arrivals</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="relative" id="views-container">

<div className="view-section" id="wines-view" style={{display: 'none'}}>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col relative bg-white border border-zinc-200/60 rounded-2xl p-2 hover:border-zinc-300 transition-colors duration-300">
<div className="relative w-full aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden flex items-center justify-center mb-4 p-6">
<img alt="Wine" className="max-h-full w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=400&amp;q=80"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-sm">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="px-2 pb-2 flex flex-col">
<span className="text-xs text-zinc-400 font-medium mb-1">Napa Valley</span>
<h3 className="text-sm font-medium text-zinc-900 mb-1 line-clamp-1">Cabernet Sauvignon Reserve 2018</h3>
<span className="text-sm text-zinc-600 font-medium mt-auto">$85.00</span>
</div>
</div>

<div className="group flex flex-col relative bg-white border border-zinc-200/60 rounded-2xl p-2 hover:border-zinc-300 transition-colors duration-300">
<div className="relative w-full aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden flex items-center justify-center mb-4 p-6">
<span className="absolute top-3 left-3 bg-zinc-900 text-white text-xs scale-90 font-medium px-2 py-0.5 rounded-full z-10">Bestseller</span>
<img alt="Champagne" className="max-h-full w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1569919659476-f0852f6834b7?w=400&amp;q=80"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-sm">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="px-2 pb-2 flex flex-col">
<span className="text-xs text-zinc-400 font-medium mb-1">Champagne</span>
<h3 className="text-sm font-medium text-zinc-900 mb-1 line-clamp-1">Brut Premier Cru NV</h3>
<span className="text-sm text-zinc-600 font-medium mt-auto">$65.00</span>
</div>
</div>

<div className="group flex flex-col relative bg-white border border-zinc-200/60 rounded-2xl p-2 hover:border-zinc-300 transition-colors duration-300">
<div className="relative w-full aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden flex items-center justify-center mb-4 p-6">
<img alt="Rosé" className="max-h-full w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&amp;q=80"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-sm">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="px-2 pb-2 flex flex-col">
<span className="text-xs text-zinc-400 font-medium mb-1">Provence</span>
<h3 className="text-sm font-medium text-zinc-900 mb-1 line-clamp-1">Côtes de Provence Rosé</h3>
<span className="text-sm text-zinc-600 font-medium mt-auto">$32.00</span>
</div>
</div>

<div className="group flex flex-col relative bg-white border border-zinc-200/60 rounded-2xl p-2 hover:border-zinc-300 transition-colors duration-300">
<div className="relative w-full aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden flex items-center justify-center mb-4 p-6">
<img alt="Pinot Noir" className="max-h-full w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&amp;q=80"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-sm">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="px-2 pb-2 flex flex-col">
<span className="text-xs text-zinc-400 font-medium mb-1">Burgundy</span>
<h3 className="text-sm font-medium text-zinc-900 mb-1 line-clamp-1">Pinot Noir Grand Cru</h3>
<span className="text-sm text-zinc-600 font-medium mt-auto">$145.00</span>
</div>
</div>
</div>
</div>

<div className="view-section" id="spirits-view" style={{display: 'none'}}>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col relative bg-white border border-zinc-200/60 rounded-2xl p-2 hover:border-zinc-300 transition-colors duration-300">
<div className="relative w-full aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden flex items-center justify-center mb-4 p-6">
<img alt="Whiskey" className="max-h-full w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&amp;q=80"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-sm">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="px-2 pb-2 flex flex-col">
<span className="text-xs text-zinc-400 font-medium mb-1">Single Malt Scotch</span>
<h3 className="text-sm font-medium text-zinc-900 mb-1 line-clamp-1">Highland Reserve 18 Year</h3>
<span className="text-sm text-zinc-600 font-medium mt-auto">$185.00</span>
</div>
</div>

<div className="group flex flex-col relative bg-white border border-zinc-200/60 rounded-2xl p-2 hover:border-zinc-300 transition-colors duration-300">
<div className="relative w-full aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden flex items-center justify-center mb-4 p-6">
<img alt="Tequila" className="max-h-full w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1516535794938-6063878f08cc?w=400&amp;q=80"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-sm">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="px-2 pb-2 flex flex-col">
<span className="text-xs text-zinc-400 font-medium mb-1">Tequila Añejo</span>
<h3 className="text-sm font-medium text-zinc-900 mb-1 line-clamp-1">Don Arturo Extra Añejo</h3>
<span className="text-sm text-zinc-600 font-medium mt-auto">$120.00</span>
</div>
</div>

<div className="group flex flex-col relative bg-white border border-zinc-200/60 rounded-2xl p-2 hover:border-zinc-300 transition-colors duration-300">
<div className="relative w-full aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden flex items-center justify-center mb-4 p-6">
<img alt="Gin" className="max-h-full w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-sm">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="px-2 pb-2 flex flex-col">
<span className="text-xs text-zinc-400 font-medium mb-1">London Dry Gin</span>
<h3 className="text-sm font-medium text-zinc-900 mb-1 line-clamp-1">Botanical Artisanal Gin</h3>
<span className="text-sm text-zinc-600 font-medium mt-auto">$48.99</span>
</div>
</div>

<div className="group flex flex-col relative bg-white border border-zinc-200/60 rounded-2xl p-2 hover:border-zinc-300 transition-colors duration-300">
<div className="relative w-full aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden flex items-center justify-center mb-4 p-6">
<img alt="Rum" className="max-h-full w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-sm">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="px-2 pb-2 flex flex-col">
<span className="text-xs text-zinc-400 font-medium mb-1">Aged Rum</span>
<h3 className="text-sm font-medium text-zinc-900 mb-1 line-clamp-1">Caribbean Estate Dark Rum</h3>
<span className="text-sm text-zinc-600 font-medium mt-auto">$45.00</span>
</div>
</div>
</div>
</div>

<div className="view-section" id="beers-view" style={{display: 'none'}}>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col relative bg-white border border-zinc-200/60 rounded-2xl p-2 hover:border-zinc-300 transition-colors duration-300">
<div className="relative w-full aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden flex items-center justify-center mb-4 p-6">
<img alt="IPA" className="max-h-full w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&amp;q=80"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-sm">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="px-2 pb-2 flex flex-col">
<span className="text-xs text-zinc-400 font-medium mb-1">Craft Ale</span>
<h3 className="text-sm font-medium text-zinc-900 mb-1 line-clamp-1">West Coast IPA</h3>
<span className="text-sm text-zinc-600 font-medium mt-auto">$14.99</span>
</div>
</div>

<div className="group flex flex-col relative bg-white border border-zinc-200/60 rounded-2xl p-2 hover:border-zinc-300 transition-colors duration-300">
<div className="relative w-full aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden flex items-center justify-center mb-4 p-6">
<img alt="Stout" className="max-h-full w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-sm">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="px-2 pb-2 flex flex-col">
<span className="text-xs text-zinc-400 font-medium mb-1">Dark Beer</span>
<h3 className="text-sm font-medium text-zinc-900 mb-1 line-clamp-1">Imperial Oatmeal Stout</h3>
<span className="text-sm text-zinc-600 font-medium mt-auto">$16.50</span>
</div>
</div>

<div className="group flex flex-col relative bg-white border border-zinc-200/60 rounded-2xl p-2 hover:border-zinc-300 transition-colors duration-300">
<div className="relative w-full aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden flex items-center justify-center mb-4 p-6">
<span className="absolute top-3 left-3 bg-red-500 text-white text-xs scale-90 font-medium px-2 py-0.5 rounded-full z-10">Sale</span>
<img alt="Pilsner" className="max-h-full w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-sm">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="px-2 pb-2 flex flex-col">
<span className="text-xs text-zinc-400 font-medium mb-1">Lager</span>
<h3 className="text-sm font-medium text-zinc-900 mb-1 line-clamp-1">Bavarian Style Pilsner</h3>
<div className="flex items-center gap-2 mt-auto">
<span className="text-sm text-zinc-600 font-medium">$9.99</span>
<span className="text-xs text-zinc-400 line-through">$13.00</span>
</div>
</div>
</div>

<div className="group flex flex-col relative bg-white border border-zinc-200/60 rounded-2xl p-2 hover:border-zinc-300 transition-colors duration-300">
<div className="relative w-full aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden flex items-center justify-center mb-4 p-6">
<img alt="Belgian" className="max-h-full w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-sm">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="px-2 pb-2 flex flex-col">
<span className="text-xs text-zinc-400 font-medium mb-1">Imported</span>
<h3 className="text-sm font-medium text-zinc-900 mb-1 line-clamp-1">Belgian Dubbel Reserve</h3>
<span className="text-sm text-zinc-600 font-medium mt-auto">$18.50</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="mt-auto border-t border-zinc-200/80 bg-white py-12">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

<div className="col-span-1 md:col-span-1">
<a className="text-zinc-900 text-lg font-semibold tracking-tight flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-xl" icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
                    ENOTECA
                </a>
<p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
                    Purveyors of fine wines, premium spirits, and craft beers since 1998. Curated for the modern aficionado.
                </p>
</div>

<div>
<h4 className="text-xs font-semibold text-zinc-900 mb-4">Store</h4>
<ul className="flex flex-col gap-3 text-xs">
<li><a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Shop All</a></li>
<li><a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Rare Vintages</a></li>
<li><a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">New Arrivals</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold text-zinc-900 mb-4">Support</h4>
<ul className="flex flex-col gap-3 text-xs">
<li><a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Contact Us</a></li>
<li><a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">FAQ</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold text-zinc-900 mb-4">Stay Updated</h4>
<p className="text-xs text-zinc-500 mb-3">Join our mailing list for exclusive releases.</p>
<div className="flex relative">
<input className="w-full bg-zinc-50 border border-zinc-200/80 rounded-full py-2 pl-4 pr-10 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-300 focus:ring-0 transition-colors" placeholder="Email address" type="email"/>
<button className="absolute right-1 top-1 bottom-1 w-8 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full flex items-center justify-center transition-colors">
<iconify-icon className="text-sm" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-xs scale-90 origin-left text-zinc-400 font-medium uppercase tracking-wider">© 2024 La Enoteca. All rights reserved.</span>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:tag-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
