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



        document.addEventListener('DOMContentLoaded', () => {
            // Cart Logic
            const cartDrawer = document.getElementById('cartDrawer');
            const cartOverlay = document.getElementById('cartOverlay');
            const openCartBtn = document.getElementById('openCart');
            const closeCartBtn = document.getElementById('closeCart');

            const toggleCart = (show) => {
                if (show) {
                    cartDrawer.classList.remove('translate-x-full');
                    cartOverlay.classList.remove('opacity-0', 'pointer-events-none');
                    document.body.style.overflow = 'hidden';
                } else {
                    cartDrawer.classList.add('translate-x-full');
                    cartOverlay.classList.add('opacity-0', 'pointer-events-none');
                    document.body.style.overflow = '';
                }
            };

            openCartBtn.addEventListener('click', () => toggleCart(true));
            closeCartBtn.addEventListener('click', () => toggleCart(false));
            cartOverlay.addEventListener('click', () => {
                toggleCart(false);
                toggleMobileMenu(false);
            });

            // Mobile Menu Logic
            const mobileMenu = document.getElementById('mobileMenu');
            const openMobileBtn = document.getElementById('openMobileMenu');
            const closeMobileBtn = document.getElementById('closeMobileMenu');

            const toggleMobileMenu = (show) => {
                if (show) {
                    mobileMenu.classList.remove('translate-y-[-100%]');
                    document.body.style.overflow = 'hidden';
                } else {
                    mobileMenu.classList.add('translate-y-[-100%]');
                    document.body.style.overflow = '';
                }
            };

            openMobileBtn.addEventListener('click', () => toggleMobileMenu(true));
            closeMobileBtn.addEventListener('click', () => toggleMobileMenu(false));

            // Custom Dropdown Logic
            const sortBtn = document.getElementById('sortDropdownBtn');
            const sortMenu = document.getElementById('sortDropdownMenu');
            let isDropdownOpen = false;

            sortBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                isDropdownOpen = !isDropdownOpen;
                if(isDropdownOpen) {
                    sortMenu.classList.remove('opacity-0', 'invisible', 'translate-y-2');
                } else {
                    sortMenu.classList.add('opacity-0', 'invisible', 'translate-y-2');
                }
            });

            document.addEventListener('click', () => {
                if(isDropdownOpen) {
                    isDropdownOpen = false;
                    sortMenu.classList.add('opacity-0', 'invisible', 'translate-y-2');
                }
            });

            // Custom Toggle Switch Logic
            const inStockBtn = document.getElementById('inStockToggle');
            const inStockDot = document.getElementById('inStockDot');
            let inStockActive = false;

            inStockBtn.addEventListener('click', () => {
                inStockActive = !inStockActive;
                if(inStockActive) {
                    inStockBtn.classList.replace('bg-gray-200', 'bg-gray-900');
                    inStockDot.classList.add('translate-x-4');
                    inStockDot.classList.remove('border-gray-100');
                } else {
                    inStockBtn.classList.replace('bg-gray-900', 'bg-gray-200');
                    inStockDot.classList.remove('translate-x-4');
                    inStockDot.classList.add('border-gray-100');
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
      

<div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-[60] opacity-0 pointer-events-none transition-opacity duration-300" id="cartOverlay"></div>

<div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[70] shadow-2xl translate-x-full transition-transform duration-500 flex flex-col" id="cartDrawer">
<div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
<h2 className="text-lg font-medium tracking-tight">Your Cart</h2>
<button className="text-gray-400 hover:text-gray-900 transition-colors" id="closeCart">
<iconify-icon icon="solar:close-circle-linear" style={{fontSize: '24px', strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6">

<div className="flex gap-4">
<div className="w-20 aspect-square bg-gray-50 rounded-lg overflow-hidden">
<img alt="Watch" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-1 flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium">Minimalist Timepiece</h3>
<button className="text-gray-400 hover:text-gray-900"><iconify-icon icon="solar:trash-bin-trash-linear" style={{fontSize: '16px', strokeWidth: '1.5'}}></iconify-icon></button>
</div>
<p className="text-xs text-gray-500 mt-1">Silver / 40mm</p>
</div>
<div className="flex justify-between items-center mt-3">
<div className="flex items-center gap-3 border border-gray-100 rounded-full px-3 py-1">
<button className="text-gray-400 hover:text-gray-900"><iconify-icon icon="solar:minus-linear" style={{fontSize: '12px', strokeWidth: '1.5'}}></iconify-icon></button>
<span className="text-xs font-medium">1</span>
<button className="text-gray-400 hover:text-gray-900"><iconify-icon icon="solar:add-linear" style={{fontSize: '12px', strokeWidth: '1.5'}}></iconify-icon></button>
</div>
<span className="text-sm font-medium">$245</span>
</div>
</div>
</div>

<div className="flex gap-4">
<div className="w-20 aspect-square bg-gray-50 rounded-lg overflow-hidden">
<img alt="Tote" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-1 flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium">Everyday Leather Tote</h3>
<button className="text-gray-400 hover:text-gray-900"><iconify-icon icon="solar:trash-bin-trash-linear" style={{fontSize: '16px', strokeWidth: '1.5'}}></iconify-icon></button>
</div>
<p className="text-xs text-gray-500 mt-1">Sable Black</p>
</div>
<div className="flex justify-between items-center mt-3">
<div className="flex items-center gap-3 border border-gray-100 rounded-full px-3 py-1">
<button className="text-gray-400 hover:text-gray-900"><iconify-icon icon="solar:minus-linear" style={{fontSize: '12px', strokeWidth: '1.5'}}></iconify-icon></button>
<span className="text-xs font-medium">1</span>
<button className="text-gray-400 hover:text-gray-900"><iconify-icon icon="solar:add-linear" style={{fontSize: '12px', strokeWidth: '1.5'}}></iconify-icon></button>
</div>
<span className="text-sm font-medium">$180</span>
</div>
</div>
</div>
</div>
<div className="px-6 py-6 bg-gray-50/50 border-t border-gray-100">

<label className="flex items-center gap-3 cursor-pointer group mb-6">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-gray-200 flex items-center justify-center peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-colors bg-white">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear" style={{fontSize: '12px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm text-gray-500 group-hover:text-gray-900 transition-colors">Add premium gift wrapping (+$15)</span>
</label>
<div className="flex justify-between items-center mb-4 text-sm">
<span className="text-gray-500">Subtotal</span>
<span className="font-medium">$425</span>
</div>
<p className="text-xs text-gray-400 mb-6">Shipping and taxes calculated at checkout.</p>
<button className="w-full bg-gray-900 text-white rounded-full py-3.5 text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                Proceed to Checkout
                <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '16px', strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="fixed inset-0 bg-white z-[60] translate-y-[-100%] transition-transform duration-500 flex flex-col pt-20 px-6 pb-10 sm:hidden" id="mobileMenu">
<button className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors" id="closeMobileMenu">
<iconify-icon icon="solar:close-circle-linear" style={{fontSize: '24px', strokeWidth: '1.5'}}></iconify-icon>
</button>
<nav className="flex flex-col gap-6 mt-8">
<a className="text-2xl font-medium tracking-tight text-gray-900" href="#">New Arrivals</a>
<a className="text-2xl font-medium tracking-tight text-gray-500 hover:text-gray-900 transition-colors" href="#">Apparel</a>
<a className="text-2xl font-medium tracking-tight text-gray-500 hover:text-gray-900 transition-colors" href="#">Accessories</a>
<a className="text-2xl font-medium tracking-tight text-gray-500 hover:text-gray-900 transition-colors" href="#">Objects</a>
<a className="text-2xl font-medium tracking-tight text-gray-500 hover:text-gray-900 transition-colors" href="#">Journal</a>
</nav>
<div className="mt-auto flex flex-col gap-4 border-t border-gray-100 pt-8 text-sm font-medium">
<a className="flex items-center gap-3 text-gray-500 hover:text-gray-900" href="#">
<iconify-icon icon="solar:user-linear" style={{fontSize: '20px', strokeWidth: '1.5'}}></iconify-icon>
                Account
            </a>
<a className="flex items-center gap-3 text-gray-500 hover:text-gray-900" href="#">
<iconify-icon icon="solar:magnifer-linear" style={{fontSize: '20px', strokeWidth: '1.5'}}></iconify-icon>
                Search
            </a>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="sm:hidden text-gray-600 hover:text-gray-900 transition-colors" id="openMobileMenu">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '24px', strokeWidth: '1.5'}}></iconify-icon>
</button>

<nav className="hidden sm:flex items-center gap-8 w-1/3">
<a className="text-sm font-medium text-gray-900" href="#">Shop</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Collections</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">About</a>
</nav>

<div className="w-1/3 flex justify-center">
<a className="text-xl font-semibold tracking-tighter uppercase text-gray-900" href="#">AURA</a>
</div>

<div className="flex items-center justify-end gap-5 w-1/3">
<button className="hidden sm:block text-gray-600 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" style={{fontSize: '22px', strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="hidden sm:block text-gray-600 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:user-linear" style={{fontSize: '22px', strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="text-gray-600 hover:text-gray-900 transition-colors relative" id="openCart">
<iconify-icon icon="solar:cart-large-minimalistic-linear" style={{fontSize: '22px', strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gray-900 rounded-full border-2 border-white"></span>
</button>
</div>
</div>
</header>

<main className="flex-1">

<section className="relative h-[75vh] w-full flex flex-col md:flex-row bg-gray-50">
<div className="w-full md:w-1/2 h-full flex items-center justify-center p-8 md:p-16 xl:p-24 z-10 bg-white md:bg-transparent">
<div className="max-w-md">
<span className="text-xs font-medium tracking-widest text-gray-500 uppercase mb-4 block">New Collection</span>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight mb-6">Elevate the everyday.</h1>
<p className="text-base text-gray-500 mb-10 leading-relaxed">Discover our curated selection of thoughtfully designed objects, apparel, and accessories that redefine modern minimalism.</p>
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors gap-2" href="#shop">
                        Explore Collection
                    </a>
</div>
</div>
<div className="w-full md:w-1/2 h-full relative overflow-hidden hidden md:block">
<img alt="Hero Fashion" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="shop">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 relative z-20">
<div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
<button className="text-sm font-medium text-gray-900 whitespace-nowrap">All Products</button>
<button className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors whitespace-nowrap">Apparel</button>
<button className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors whitespace-nowrap">Accessories</button>
<button className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors whitespace-nowrap">Home</button>
</div>
<div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">

<div className="flex items-center gap-3">
<span className="text-xs font-medium text-gray-500">In Stock Only</span>
<button className="w-9 h-5 bg-gray-200 rounded-full relative transition-colors duration-300 focus:outline-none" id="inStockToggle">
<span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 shadow-sm border border-gray-100" id="inStockDot"></span>
</button>
</div>
<div className="w-px h-4 bg-gray-200 hidden md:block"></div>

<div className="relative">
<button className="flex items-center gap-2 text-sm font-medium text-gray-900 group" id="sortDropdownBtn">
                            Sort by: <span className="text-gray-500 font-normal">Featured</span>
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" icon="solar:alt-arrow-down-linear" style={{fontSize: '16px', strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg shadow-gray-200/50 opacity-0 invisible translate-y-2 transition-all duration-200 z-30 py-1" id="sortDropdownMenu">
<button className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-900 bg-gray-50 flex items-center justify-between">
                                Featured
                                <iconify-icon icon="solar:check-read-linear" style={{fontSize: '16px', strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors">Price: Low to High</button>
<button className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors">Price: High to Low</button>
<button className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors">Newest Arrivals</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-gray-50 rounded-2xl overflow-hidden mb-4">
<img alt="Watch" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&amp;w=1999&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-gray-400 hover:text-gray-900 hover:scale-110 transition-all shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:heart-linear" style={{fontSize: '18px', strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-gray-900 text-sm font-medium py-3 rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-gray-900 hover:text-white">
                            Add to Cart
                        </button>

<div className="absolute top-4 left-4 px-2.5 py-1 bg-white border border-gray-100 rounded-md text-xs font-medium text-gray-900 shadow-sm">Bestseller</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900">Minimalist Timepiece</h3>
<p className="text-xs text-gray-500 mt-1">Silver / 40mm</p>
</div>
<span className="text-sm font-medium text-gray-900">$245</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-gray-50 rounded-2xl overflow-hidden mb-4">
<img alt="Bag" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&amp;w=2076&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-gray-400 hover:text-gray-900 hover:scale-110 transition-all shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:heart-linear" style={{fontSize: '18px', strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-gray-900 text-sm font-medium py-3 rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-gray-900 hover:text-white">
                            Add to Cart
                        </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900">Everyday Leather Tote</h3>
<p className="text-xs text-gray-500 mt-1">Sable Black</p>
</div>
<span className="text-sm font-medium text-gray-900">$180</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-gray-50 rounded-2xl overflow-hidden mb-4">
<img alt="Vase" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-gray-400 hover:text-gray-900 hover:scale-110 transition-all shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:heart-linear" style={{fontSize: '18px', strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-gray-900 text-sm font-medium py-3 rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-gray-900 hover:text-white">
                            Add to Cart
                        </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900">Sculptural Vase</h3>
<p className="text-xs text-gray-500 mt-1">Matte White Ceramic</p>
</div>
<span className="text-sm font-medium text-gray-900">$85</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-gray-50 rounded-2xl overflow-hidden mb-4">
<img alt="Sunglasses" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-gray-400 hover:text-gray-900 hover:scale-110 transition-all shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
<iconify-icon className="text-gray-900" icon="solar:heart-bold" style={{fontSize: '18px', strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-gray-900 text-sm font-medium py-3 rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-gray-900 hover:text-white">
                            Add to Cart
                        </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900">Classic Aviators</h3>
<p className="text-xs text-gray-500 mt-1">Tortoise Shell</p>
</div>
<span className="text-sm font-medium text-gray-900">$120</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-gray-50 rounded-2xl overflow-hidden mb-4">
<img alt="Shirt" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-gray-400 hover:text-gray-900 hover:scale-110 transition-all shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:heart-linear" style={{fontSize: '18px', strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-gray-900 text-sm font-medium py-3 rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-gray-900 hover:text-white">
                            Add to Cart
                        </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900">Relaxed Linen Shirt</h3>
<p className="text-xs text-gray-500 mt-1">Oatmeal / Medium</p>
</div>
<span className="text-sm font-medium text-gray-900">$95</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-gray-50 rounded-2xl overflow-hidden mb-4">
<img alt="Perfume" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-gray-400 hover:text-gray-900 hover:scale-110 transition-all shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:heart-linear" style={{fontSize: '18px', strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-gray-900 text-sm font-medium py-3 rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-gray-900 hover:text-white">
                            Add to Cart
                        </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900">Santal Eau de Parfum</h3>
<p className="text-xs text-gray-500 mt-1">50ml</p>
</div>
<span className="text-sm font-medium text-gray-900">$160</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-gray-50 rounded-2xl overflow-hidden mb-4">
<img alt="Scarf" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-gray-400 hover:text-gray-900 hover:scale-110 transition-all shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:heart-linear" style={{fontSize: '18px', strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-gray-900 text-sm font-medium py-3 rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-gray-900 hover:text-white">
                            Add to Cart
                        </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900">Merino Wool Scarf</h3>
<p className="text-xs text-gray-500 mt-1">Charcoal</p>
</div>
<span className="text-sm font-medium text-gray-900">$75</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-gray-50 rounded-2xl overflow-hidden mb-4">
<img alt="Chair" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&amp;w=2012&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-gray-400 hover:text-gray-900 hover:scale-110 transition-all shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:heart-linear" style={{fontSize: '18px', strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-gray-900 text-sm font-medium py-3 rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-gray-900 hover:text-white">
                            Add to Cart
                        </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900">Oak Dining Chair</h3>
<p className="text-xs text-gray-500 mt-1">Natural Oak</p>
</div>
<span className="text-sm font-medium text-gray-900">$310</span>
</div>
</div>
</div>

<div className="mt-16 flex justify-center">
<button className="px-8 py-3 border border-gray-200 rounded-full text-sm font-medium text-gray-900 hover:border-gray-900 hover:bg-gray-50 transition-colors">
                    Load More Products
                </button>
</div>
</section>

<section className="border-y border-gray-100 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm border border-gray-100 text-gray-900">
<iconify-icon icon="solar:box-linear" style={{fontSize: '24px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900 mb-1">Complimentary Shipping</h4>
<p className="text-xs text-gray-500">On all domestic orders over $150.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm border border-gray-100 text-gray-900">
<iconify-icon icon="solar:refresh-circle-linear" style={{fontSize: '24px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900 mb-1">30-Day Returns</h4>
<p className="text-xs text-gray-500">Not quite right? Return it within 30 days.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm border border-gray-100 text-gray-900">
<iconify-icon icon="solar:shield-check-linear" style={{fontSize: '24px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900 mb-1">Secure Checkout</h4>
<p className="text-xs text-gray-500">Your payment information is encrypted and secure.</p>
</div>
</div>
</section>
</main>

<footer className="bg-white pt-20 pb-10 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<a className="text-xl font-semibold tracking-tighter uppercase text-gray-900 block mb-4" href="#">AURA</a>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">Elevating your daily rituals through meticulously crafted, essential objects.</p>
</div>

<div>
<h4 className="text-sm font-medium text-gray-900 mb-6 tracking-tight">Shop</h4>
<ul className="flex flex-col gap-4 text-sm text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Apparel</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Accessories</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Home Objects</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-gray-900 mb-6 tracking-tight">Support</h4>
<ul className="flex flex-col gap-4 text-sm text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Care Guide</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-gray-900 mb-6 tracking-tight">Newsletter</h4>
<p className="text-sm text-gray-500 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
<form className="relative group" data-netlify="true" method="POST" name="newsletter">
<input className="w-full bg-gray-50 border border-gray-100 rounded-lg pl-4 pr-12 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:bg-white transition-all" name="email" placeholder="Enter your email address" required="" type="email"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors" type="submit">
<iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '20px', strokeWidth: '1.5'}}></iconify-icon>
</button>
</form>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100 gap-4">
<p className="text-xs text-gray-400">© 2023 AURA. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-xs text-gray-400 hover:text-gray-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-gray-400 hover:text-gray-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
