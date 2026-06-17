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
      

<nav className="fixed w-full z-50 bg-[#FDFCF8]/80 backdrop-blur-md border-b transition-all duration-300 border-stone-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<iconify-icon className="text-2xl text-[#2A3B24]" icon="solar:cup-hot-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-serif text-xl tracking-tighter font-medium uppercase text-stone-900">ETS</span>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-sm font-light text-stone-500 transition-colors hover:text-stone-900" href="#about">About</a>
<a className="text-sm font-light text-stone-500 transition-colors hover:text-stone-900" href="#menu">Menu</a>
<a className="text-sm font-light text-stone-500 transition-colors hover:text-stone-900" href="#gallery">Gallery</a>
<a className="text-sm font-light text-stone-500 transition-colors hover:text-stone-900" href="#contact">Location</a>
</div>
<div className="flex items-center space-x-4">
<button className="hidden md:inline-flex items-center justify-center px-5 py-2.5 border text-sm font-medium rounded-full transition-all duration-300 border-stone-200 text-stone-700 bg-white hover:bg-stone-50">
                        Table Reservation
                    </button>
<button className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full text-[#FDFCF8] bg-[#2A3B24] hover:bg-[#1f2c1b] transition-all duration-300 shadow-sm hover:shadow">
                        Order Online
                    </button>
</div>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 w-full h-full">
<div className="absolute inset-0 z-10 mix-blend-multiply bg-stone-900/40"></div>
<div className="absolute inset-0 bg-gradient-to-b via-transparent to-[#FDFCF8] z-10 from-stone-900/30"></div>
<img alt="Cafe Interior" className="w-full h-full object-cover object-center scale-105" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=2047&amp;auto=format&amp;fit=crop" style={{animation: 'subtleZoom 20s infinite alternate'}}/>
</div>
<div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
<span className="block text-sm md:text-base font-light uppercase tracking-[0.2em] mb-4 text-stone-200">Welcome to</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight mb-6 drop-shadow-sm text-white">
                Espresso Tipu Sultan
            </h1>
<p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto text-stone-200">
                Brewed to Perfection in the Heart of Karachi.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full backdrop-blur-md border text-sm font-medium transition-all duration-300 bg-white/10 border-white/20 text-white hover:bg-white hover:text-stone-900" href="#menu">
                    View Menu
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2A3B24] text-[#FDFCF8] text-sm font-medium hover:bg-[#1f2c1b] transition-all duration-300 shadow-lg shadow-black/20" href="#order">
                    Order Now
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#FDFCF8] relative" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute -inset-4 rounded-3xl -z-10 transform -rotate-2 bg-stone-100"></div>
<img alt="Pouring Coffee" className="w-full aspect-[4/5] object-cover rounded-2xl shadow-sm" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=1975&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl border flex items-center gap-4 bg-white border-stone-100">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-600">
<iconify-icon className="text-2xl" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-1">
<span className="text-xl font-serif font-medium tracking-tight text-stone-900">4.4</span>
<div className="flex text-sm text-amber-400">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<p className="text-xs font-light text-stone-500">5,987 reviews</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-6 text-stone-900">An oasis of calm &amp; coffee.</h2>
<p className="text-base font-light mb-6 leading-relaxed text-stone-600">
                        Located on the bustling Main Tipu Sultan Road, Espresso offers a warm, inviting escape from the city. We believe in the art of coffee making, serving premium blends alongside a curated menu of wholesome meals and decadent desserts.
                    </p>
<p className="text-base font-light mb-10 leading-relaxed text-stone-600">
                        Whether you're looking for a quiet corner to work, a place to catch up with friends, or a late-night bite, our cozy atmosphere and exceptional service await you.
                    </p>
<div className="grid grid-cols-2 gap-6 pt-8 border-t border-stone-200">
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#2A3B24] mt-0.5" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-stone-900">Dine-in &amp; Takeout</h4>
<p className="text-xs font-light text-stone-500 mt-1">Comfortable seating available</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#2A3B24] mt-0.5" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-stone-900">Late Night</h4>
<p className="text-xs font-light text-stone-500 mt-1">Open until 1 AM daily</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F4EF]" id="menu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-xs font-medium text-[#2A3B24] uppercase tracking-widest mb-2 block">Our Offerings</span>
<h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-stone-900">Menu Highlights</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="group rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer bg-white border-stone-100">
<div className="relative overflow-hidden aspect-[4/3] bg-stone-100">
<img alt="Espresso Club Sandwich" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&amp;w=2073&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-black/10 transition-colors duration-300 bg-black/0"></div>
</div>
<div className="p-6 flex-grow flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium tracking-tight text-stone-900">Espresso Club Sandwich</h3>
<span className="text-sm font-medium text-[#2A3B24]">Rs. 1,450</span>
</div>
<p className="text-xs font-light text-stone-500 line-clamp-2">Grilled chicken, roast beef, cheese, egg, and fresh veggies served with fries.</p>
</div>
<button className="mt-4 w-full py-2 flex items-center justify-center gap-2 text-xs font-medium rounded-lg group-hover:bg-[#2A3B24] group-hover:text-white transition-colors duration-300 text-stone-700 bg-stone-50">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon> Add to Order
                        </button>
</div>
</div>

<div className="group rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer bg-white border-stone-100">
<div className="relative overflow-hidden aspect-[4/3] bg-stone-100">
<img alt="Full Irish Breakfast" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex-grow flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium tracking-tight text-stone-900">Full Irish Breakfast</h3>
<span className="text-sm font-medium text-[#2A3B24]">Rs. 1,850</span>
</div>
<p className="text-xs font-light text-stone-500 line-clamp-2">Two eggs, sausages, baked beans, grilled tomato, hash browns, and toast.</p>
</div>
<button className="mt-4 w-full py-2 flex items-center justify-center gap-2 text-xs font-medium rounded-lg group-hover:bg-[#2A3B24] group-hover:text-white transition-colors duration-300 text-stone-700 bg-stone-50">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon> Add to Order
                        </button>
</div>
</div>

<div className="group rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer bg-white border-stone-100">
<div className="relative overflow-hidden aspect-[4/3] bg-stone-100">
<img alt="Smoked Chicken Pizza" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&amp;w=1981&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex-grow flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium tracking-tight text-stone-900">Smoked Chicken Pizza</h3>
<span className="text-sm font-medium text-[#2A3B24]">Rs. 1,600</span>
</div>
<p className="text-xs font-light text-stone-500 line-clamp-2">Thin crust topped with smoked chicken, mozzarella, bell peppers, and olives.</p>
</div>
<button className="mt-4 w-full py-2 flex items-center justify-center gap-2 text-xs font-medium rounded-lg group-hover:bg-[#2A3B24] group-hover:text-white transition-colors duration-300 text-stone-700 bg-stone-50">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon> Add to Order
                        </button>
</div>
</div>

<div className="group rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer bg-white border-stone-100">
<div className="relative overflow-hidden aspect-[4/3] bg-stone-100">
<img alt="Pasta Alfredo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex-grow flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium tracking-tight text-stone-900">Pasta Alfredo</h3>
<span className="text-sm font-medium text-[#2A3B24]">Rs. 1,400</span>
</div>
<p className="text-xs font-light text-stone-500 line-clamp-2">Fettuccine tossed in a rich, creamy parmesan sauce with grilled chicken breast.</p>
</div>
<button className="mt-4 w-full py-2 flex items-center justify-center gap-2 text-xs font-medium rounded-lg group-hover:bg-[#2A3B24] group-hover:text-white transition-colors duration-300 text-stone-700 bg-stone-50">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon> Add to Order
                        </button>
</div>
</div>

<div className="group rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer bg-white border-stone-100">
<div className="relative overflow-hidden aspect-[4/3] bg-stone-100">
<img alt="Beef Lasagna" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex-grow flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium tracking-tight text-stone-900">Beef Lasagna</h3>
<span className="text-sm font-medium text-[#2A3B24]">Rs. 1,550</span>
</div>
<p className="text-xs font-light text-stone-500 line-clamp-2">Layers of pasta, rich beef ragu, béchamel sauce, and melted mozzarella.</p>
</div>
<button className="mt-4 w-full py-2 flex items-center justify-center gap-2 text-xs font-medium rounded-lg group-hover:bg-[#2A3B24] group-hover:text-white transition-colors duration-300 text-stone-700 bg-stone-50">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon> Add to Order
                        </button>
</div>
</div>

<div className="group rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer bg-white border-stone-100">
<div className="relative overflow-hidden aspect-[4/3] bg-stone-100">
<img alt="Chocolate Mousse Cake" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&amp;w=2003&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex-grow flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium tracking-tight text-stone-900">Chocolate Mousse</h3>
<span className="text-sm font-medium text-[#2A3B24]">Rs. 750</span>
</div>
<p className="text-xs font-light text-stone-500 line-clamp-2">Decadent layers of dark chocolate mousse on a soft sponge base.</p>
</div>
<button className="mt-4 w-full py-2 flex items-center justify-center gap-2 text-xs font-medium rounded-lg group-hover:bg-[#2A3B24] group-hover:text-white transition-colors duration-300 text-stone-700 bg-stone-50">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon> Add to Order
                        </button>
</div>
</div>

<div className="group rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer sm:col-span-2 lg:col-span-1 xl:col-span-2 bg-white border-stone-100">
<div className="relative overflow-hidden aspect-[4/3] sm:aspect-[21/9] lg:aspect-[4/3] xl:aspect-[21/9] bg-stone-100">
<img alt="Latte Macchiato" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&amp;w=2135&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex-grow flex flex-col justify-between">
<div className="flex sm:flex-row flex-col sm:items-center justify-between gap-4">
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-base font-medium tracking-tight text-stone-900">Latte Macchiato</h3>
<span className="text-sm font-medium text-[#2A3B24] sm:hidden">Rs. 650</span>
</div>
<p className="text-xs font-light text-stone-500">Steamed milk stained with a shot of our signature espresso blend.</p>
</div>
<div className="flex items-center gap-4 hidden sm:flex">
<span className="text-base font-medium text-[#2A3B24]">Rs. 650</span>
<button className="px-6 py-2 flex items-center justify-center gap-2 text-xs font-medium bg-[#2A3B24] rounded-lg hover:bg-[#1f2c1b] transition-colors duration-300 text-white">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon> Add
                                </button>
</div>
<button className="mt-2 w-full sm:hidden py-2 flex items-center justify-center gap-2 text-xs font-medium bg-[#2A3B24] rounded-lg hover:bg-[#1f2c1b] transition-colors duration-300 text-white">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon> Add
                            </button>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center justify-center px-6 py-3 border text-sm font-medium rounded-full bg-transparent transition-all duration-300 border-stone-300 text-stone-700 hover:bg-stone-100">
                    View Full Menu
                </button>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFCF8]" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-2 text-stone-900">Glimpses of Espresso</h2>
<p className="text-sm font-light text-stone-500">The aesthetics of taste and comfort.</p>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full text-xs font-medium transition-colors bg-stone-900 text-white">All</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium transition-colors bg-stone-100 text-stone-600 hover:bg-stone-200">Coffee</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium transition-colors bg-stone-100 text-stone-600 hover:bg-stone-200">Food</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium transition-colors bg-stone-100 text-stone-600 hover:bg-stone-200">Vibe</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
<div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer">
<img alt="Cafe Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/20">
<iconify-icon className="text-3xl text-white" icon="solar:maximize-linear"></iconify-icon>
</div>
</div>
<div className="rounded-2xl overflow-hidden relative group cursor-pointer">
<img alt="Coffee Pour" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden relative group cursor-pointer">
<img alt="Dining" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-2 md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer">
<img alt="Dessert" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden relative group cursor-pointer">
<img alt="Pizza" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden relative bg-stone-900 text-white">
<div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-[#2A3B24] rounded-full blur-3xl opacity-30"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
<div>
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-2">What our guests say</h2>
<div className="flex items-center gap-3">
<div className="flex text-lg text-amber-400">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-half-bold" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-light text-stone-400">4.4 based on Google Reviews</span>
</div>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors border-stone-700 text-stone-400 hover:text-white hover:bg-stone-800">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors border-stone-700 text-stone-400 hover:text-white hover:bg-stone-800">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 pb-8 snap-x hide-scrollbar">

<div className="min-w-[300px] md:min-w-[400px] backdrop-blur-sm border rounded-2xl p-8 snap-start bg-stone-800/50 border-stone-700/50">
<div className="flex text-sm mb-4 text-amber-400">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-light mb-6 leading-relaxed text-stone-300">
                        "The Espresso Club Sandwich is a must-try! The ambiance at the Tipu Sultan branch is perfect for a quiet evening or a casual business meeting. Great coffee."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-serif text-sm bg-stone-700">A</div>
<div>
<h4 className="text-sm font-medium">Ahmed Raza</h4>
<span className="text-xs text-stone-500">Local Guide</span>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] backdrop-blur-sm border rounded-2xl p-8 snap-start bg-stone-800/50 border-stone-700/50">
<div className="flex text-sm mb-4 text-amber-400">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-light mb-6 leading-relaxed text-stone-300">
                        "Loved the rustic vibe and earthy tones. Ordered the Pasta Alfredo and a Latte Macchiato. Both were exactly to my liking. Will definitely return."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-serif text-sm bg-stone-700">S</div>
<div>
<h4 className="text-sm font-medium">Sara K.</h4>
<span className="text-xs text-stone-500">2 weeks ago</span>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] backdrop-blur-sm border rounded-2xl p-8 snap-start bg-stone-800/50 border-stone-700/50">
<div className="flex text-sm mb-4 text-amber-400">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm font-light mb-6 leading-relaxed text-stone-300">
                        "A classic spot in Karachi. The fact that it's open till 1 AM makes it my go-to place for late-night dessert cravings. The Chocolate Mousse is divine."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-serif text-sm bg-stone-700">M</div>
<div>
<h4 className="text-sm font-medium">Murtaza Ali</h4>
<span className="text-xs text-stone-500">1 month ago</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFCF8]" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
<div className="flex flex-col justify-center">
<h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight mb-8 text-stone-900">Visit Us</h2>
<div className="space-y-8 mb-10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-stone-100">
<iconify-icon className="text-xl text-[#2A3B24]" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium mb-1 text-stone-900">Address</h4>
<p className="text-sm font-light leading-relaxed max-w-sm text-stone-600">
                                    Main Tipu Sultan Rd, Karachi Memon Co-operative Housing Society,<br/>
                                    Karachi, Pakistan
                                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-stone-100">
<iconify-icon className="text-xl text-[#2A3B24]" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium mb-1 text-stone-900">Contact</h4>
<p className="text-sm font-light leading-relaxed text-stone-600">
                                    +92 348 2099235
                                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-stone-100">
<iconify-icon className="text-xl text-[#2A3B24]" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium mb-1 text-stone-900">Hours</h4>
<p className="text-sm font-light leading-relaxed text-stone-600">
                                    Mon - Sun: 8:00 AM - 1:00 AM
                                </p>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-3.5 rounded-full bg-[#2A3B24] text-[#FDFCF8] text-sm font-medium hover:bg-[#1f2c1b] transition-all duration-300 flex items-center justify-center gap-2">
<iconify-icon icon="solar:routing-linear" strokeWidth="1.5"></iconify-icon> Get Directions
                        </button>
<button className="px-8 py-3.5 rounded-full border text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-sm bg-white border-stone-200 text-stone-800 hover:bg-stone-50">
<iconify-icon icon="solar:scooter-linear" strokeWidth="1.5"></iconify-icon> Order Online
                        </button>
</div>
</div>
<div className="h-[400px] lg:h-auto w-full rounded-2xl overflow-hidden shadow-sm relative border bg-stone-200 border-stone-200">

<div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-100 text-stone-400">
<iconify-icon className="text-5xl mb-3" icon="solar:map-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-light">Interactive Map Area</span>
<img alt="Map background" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-stone-200/50"></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
<div className="p-2 rounded-lg shadow-lg mb-2 border flex items-center gap-2 bg-white border-stone-100">
<iconify-icon className="text-[#2A3B24]" icon="solar:cup-hot-bold"></iconify-icon>
<span className="text-xs font-medium tracking-tight text-stone-900">Espresso</span>
</div>
<iconify-icon className="text-3xl text-[#2A3B24] drop-shadow-md" icon="solar:map-point-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t mt-auto bg-stone-950 text-stone-400 border-stone-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-2xl text-stone-300" icon="solar:cup-hot-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-serif text-xl tracking-tighter font-medium uppercase text-stone-200">ETS</span>
</div>
<p className="text-xs font-light leading-relaxed text-stone-500 mb-6">
                        Brewed to Perfection in the Heart of Karachi. Experience the premium cafe aesthetic.
                    </p>
<div className="flex gap-4">
<a className="text-stone-500 transition-colors hover:text-white" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="text-stone-500 transition-colors hover:text-white" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="text-stone-500 transition-colors hover:text-white" href="#">
<iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium mb-6 text-stone-200">Quick Links</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="transition-colors hover:text-white" href="#about">Our Story</a></li>
<li><a className="transition-colors hover:text-white" href="#menu">Full Menu</a></li>
<li><a className="transition-colors hover:text-white" href="#">Reservations</a></li>
<li><a className="transition-colors hover:text-white" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-6 text-stone-200">Legal</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="transition-colors hover:text-white" href="#">Privacy Policy</a></li>
<li><a className="transition-colors hover:text-white" href="#">Terms of Service</a></li>
<li><a className="transition-colors hover:text-white" href="#">Cookie Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-6 text-stone-200">Newsletter</h4>
<p className="text-xs font-light text-stone-500 mb-4">Stay updated with our latest offerings and events.</p>
<div className="flex rounded-lg p-1 border focus-within:border-stone-600 transition-colors bg-stone-900 border-stone-800">
<input className="bg-transparent border-none text-sm px-3 py-2 w-full focus:outline-none focus:ring-0 placeholder-stone-600 font-light text-stone-300" placeholder="Your email" type="email"/>
<button className="px-4 py-2 text-xs font-medium rounded-md transition-colors bg-stone-800 text-white hover:bg-stone-700">
                            Subscribe
                        </button>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-stone-900">
<p className="text-xs font-light text-stone-600">
                    © 2024 Espresso Tipu Sultan. All rights reserved.
                </p>
<p className="text-xs font-light text-stone-600">
                    Designed with an aesthetic touch.
                </p>
</div>
</div>
</footer>

    </>
  );
}
