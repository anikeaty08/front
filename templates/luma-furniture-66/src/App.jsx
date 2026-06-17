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



        // Loading Screen
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.classList.add('hidden');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 600);
            }, 800);
        });

        // Search Bar Toggle
        const searchTrigger = document.getElementById('search-trigger-btn');
        const closeSearch = document.getElementById('close-search-btn');
        const searchContainer = document.getElementById('search-bar-container');
        const searchInput = document.getElementById('search-input');

        function toggleSearch() {
            searchContainer.classList.toggle('active');
            if (searchContainer.classList.contains('active')) {
                setTimeout(() => searchInput.focus(), 100);
            }
        }

        searchTrigger.addEventListener('click', toggleSearch);
        closeSearch.addEventListener('click', toggleSearch);
        
        // Close search on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchContainer.classList.contains('active')) {
                toggleSearch();
            }
        });

        // Mobile Menu Logic
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.add('open');
                menuBtn.innerHTML = '<iconify-icon icon="lucide:x" width="24" stroke-width="1.5"></iconify-icon>';
            } else {
                mobileMenu.classList.remove('open');
                menuBtn.innerHTML = '<iconify-icon icon="lucide:menu" width="24" stroke-width="1.5"></iconify-icon>';
            }
        });

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.remove('open');
                menuBtn.innerHTML = '<iconify-icon icon="lucide:menu" width="24" stroke-width="1.5"></iconify-icon>';
            });
        });

        // Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Navbar blur on scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-[0_4px_30px_-4px_rgba(0,0,0,0.03)]');
            } else {
                navbar.classList.remove('shadow-[0_4px_30px_-4px_rgba(0,0,0,0.03)]');
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
      

<div className="loader-overlay" id="loader" style={{display: 'none'}}>
<div className="flex flex-col items-center gap-4">
<span className="text-xl font-medium tracking-tighter">LUMA</span>
<div className="h-0.5 w-24 bg-neutral-100 overflow-hidden relative rounded-full">
<div className="absolute inset-0 bg-neutral-900 w-full animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
</div>
</div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-neutral-100 transition-all duration-300" id="navbar">
<div className="flex h-16 max-w-[1440px] mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">

<div className="absolute inset-0 bg-white z-[60] flex items-center px-6 opacity-0 invisible transform -translate-y-2" id="search-bar-container">
<div className="max-w-[1440px] mx-auto w-full flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="lucide:search" width="20"></iconify-icon>
<input className="flex-1 h-10 bg-transparent border-none outline-none text-sm text-neutral-900 placeholder:text-neutral-400 font-medium" id="search-input" placeholder="Search for products, collections, or articles..." type="text"/>
<button className="p-2 hover:bg-neutral-100 rounded-full text-neutral-500 hover:text-neutral-900 transition-colors" id="close-search-btn">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center gap-4 z-50">
<button className="lg:hidden p-1 -ml-1 text-neutral-500 hover:text-black transition-colors focus:outline-none" id="menu-btn">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<a className="hover:opacity-70 transition-opacity text-xl font-medium tracking-tighter" href="/home">LUMA</a>
</div>

<div className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

<div className="nav-item group flex items-center justify-center relative h-16">
<a className="hover:text-black transition-colors text-sm font-medium text-neutral-500" href="/product-listing-page">Shop</a>

<div className="nav-dropdown absolute top-full left-0 w-[500px] bg-white border border-neutral-100 rounded-xl shadow-[0_16px_40px_-12px_rgba(0,0,0,0.1)] p-6 opacity-0 invisible transform translate-y-2 transition-all duration-200 ease-out cursor-default z-50">
<div className="grid grid-cols-2 gap-8">
<div className="flex flex-col space-y-3">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Browse</span>
<a className="hover:text-neutral-500 transition-colors text-sm font-medium text-neutral-900" href="/product-listing-page">All Products</a>
<a className="hover:text-neutral-500 transition-colors flex items-center justify-between text-sm font-medium text-neutral-900" href="/product-detail-page">
                                    New Arrivals 
                                    <span className="text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded font-bold">NEW</span>
</a>
<a className="hover:text-neutral-500 transition-colors text-sm font-medium text-neutral-900" href="/#">Best Sellers</a>
<a className="text-sm font-medium text-red-600 hover:text-red-500 transition-colors" href="#">Sale</a>
</div>
<div className="flex flex-col space-y-3">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Categories</span>
<a className="text-sm text-neutral-600 hover:text-black transition-colors flex items-center gap-2" href="#">
<iconify-icon icon="lucide:sofa" width="14"></iconify-icon> Furniture
                                </a>
<a className="text-sm text-neutral-600 hover:text-black transition-colors flex items-center gap-2" href="#">
<iconify-icon className="" icon="lucide:lamp" width="14"></iconify-icon> Lighting
                                </a>
<a className="text-sm text-neutral-600 hover:text-black transition-colors flex items-center gap-2" href="#">
<iconify-icon icon="lucide:flower-2" width="14"></iconify-icon> Accessories
                                </a>
</div>
</div>
</div>
</div>
<a className="hover:text-black transition-colors text-sm font-medium text-neutral-500" href="/about-us">About</a>
<a className="hover:text-black transition-colors text-sm font-medium text-neutral-500" href="/blog">Journal</a>
<a className="hover:text-black transition-colors text-sm font-medium text-neutral-500" href="/contact-us">Contact</a>
</div>

<div className="flex items-center gap-3 z-50">
<button aria-label="Search" className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-black transition-colors rounded-full hover:bg-neutral-100" id="search-trigger-btn">
<iconify-icon className="" icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<a aria-label="Account" className="flex items-center justify-center hover:text-black transition-colors hover:bg-neutral-100 text-neutral-500 w-8 h-8 rounded-full" href="/account-dashboard">
<iconify-icon className="" icon="lucide:user" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<button aria-label="Cart" className="flex hover:text-black transition-colors hover:bg-neutral-100 text-neutral-500 w-8 h-8 rounded-full relative items-center justify-center" onclick="window.location.href='/cart'" role="button">
<iconify-icon className="" icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-1 right-0.5 w-3 h-3 bg-neutral-900 text-white text-[8px] font-bold flex items-center justify-center rounded-full ring-2 ring-white">2</span>
</button>
</div>
</div>

<div className="absolute top-16 left-0 w-full bg-white border-b border-neutral-100 px-6 py-8 lg:hidden shadow-xl h-[calc(100vh-64px)] overflow-y-auto" id="mobile-menu">
<div className="flex flex-col space-y-6 max-w-[1440px] mx-auto">
<div className="space-y-3">
<a className="text-2xl font-medium text-neutral-900 mobile-link block tracking-tight" href="#shop">Shop</a>
<div className="pl-4 space-y-3 border-l-2 border-neutral-100">
<a className="block text-sm text-neutral-500" href="#">New Arrivals</a>
<a className="block text-sm text-neutral-500" href="#">Categories</a>
<a className="block text-sm text-red-500" href="#">Sale</a>
</div>
</div>
<div className="space-y-3">
<a className="text-2xl font-medium text-neutral-900 mobile-link block tracking-tight" href="#collections">Collections</a>
<div className="pl-4 space-y-3 border-l-2 border-neutral-100">
<a className="block text-sm text-neutral-500" href="#">Seasonal</a>
<a className="block text-sm text-neutral-500" href="#">Rooms</a>
</div>
</div>
<a className="text-2xl font-medium text-neutral-900 mobile-link block tracking-tight" href="#about">About</a>
<a className="text-2xl font-medium text-neutral-900 mobile-link block tracking-tight" href="#journal">Journal</a>
</div>
</div>
</nav>

<header className="relative w-full min-h-[100dvh] lg:h-screen flex items-center bg-white overflow-hidden isolate pt-32 lg:pt-0" id="hero">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-neutral-50 via-neutral-100/50 to-transparent rounded-[100%] blur-3xl -z-10 opacity-70 pointer-events-none"></div>

<div className="w-full max-w-[1440px] mx-auto px-6 h-full flex items-center">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full mt-8 lg:mt-0">

<div className="lg:col-span-5 flex flex-col items-start relative z-10">

<div className="flex items-center gap-3 mb-8 animate-fade-in-up opacity-0 mt-8 lg:mt-0">
<div className="flex -space-x-2.5">
<img alt="" className="h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;q=80"/>
<img alt="" className="h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&amp;q=80"/>
<img alt="" className="h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&amp;q=80"/>
<div className="h-9 w-9 rounded-full ring-2 ring-white bg-neutral-100 flex items-center justify-center text-[10px] font-bold text-neutral-600">+2k</div>
</div>
<div className="flex flex-col justify-center">
<div className="flex text-neutral-900 text-[10px] gap-0.5">
<iconify-icon className="" fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon className="" fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon className="" fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-500 mt-0.5">Trusted by designers</span>
</div>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tighter leading-[0.95] mb-6 text-neutral-900 animate-fade-in-up opacity-0 delay-100">
                        Timeless design, <br/>
<span className="text-neutral-400">everyday living.</span>
</h1>
<p className="text-lg text-neutral-500 mb-10 leading-relaxed max-w-md animate-fade-in-up opacity-0 delay-200">
                        Premium furniture designed for the modern sanctuary. Hand-finished materials meets ergonomic excellence.
                    </p>

<div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 animate-fade-in-up opacity-0 delay-300">
<a className="inline-flex items-center justify-center h-12 px-8 bg-neutral-900 text-white text-sm font-semibold rounded-full hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-500/10 hover:-translate-y-0.5 transition-all duration-300" href="#shop">
                            Shop Collection
                        </a>
<a className="inline-flex items-center justify-center h-12 px-8 bg-white border border-neutral-200 text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-50 hover:border-neutral-300 transition-all group" href="#new">
<span>View Lookbook</span>
<iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-neutral-400 animate-fade-in-up opacity-0 delay-300">
<div className="flex items-center gap-1.5">
<iconify-icon icon="lucide:truck" width="14"></iconify-icon> Free Shipping
                        </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="" icon="lucide:shield-check" width="14"></iconify-icon> 5-Year Warranty
                        </div>
</div>
</div>

<div className="lg:col-span-7 relative h-[500px] lg:h-[70vh] min-h-[400px] w-full animate-fade-in-up opacity-0 delay-200">

<div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-neutral-100 group">
<img alt="Lounge Chair" className="object-center transition-transform duration-[1.5s] ease-in-out group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&amp;w=2587&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
</div>

<div className="absolute bottom-6 left-6 md:left-auto md:right-auto md:bottom-12 md:left-12 w-64 glass-panel p-4 rounded-xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] border border-white/60 z-20 hover:-translate-y-1 transition-transform duration-300">
<div className="flex items-start justify-between mb-3">
<div className="">
<p className="text-[10px] font-bold text-neutral-500 uppercase tracking-wide mb-0.5">Best Seller</p>
<h3 className="text-sm font-semibold text-neutral-900 leading-tight">Linen Lounge Chair</h3>
</div>
<span className="bg-neutral-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded ml-2">$890</span>
</div>

<div className="space-y-3">
<div className="flex gap-2">
<button className="w-5 h-5 rounded-full bg-[#E5E0D5] ring-1 ring-offset-2 ring-neutral-900 cursor-pointer"></button>
<button className="w-5 h-5 rounded-full bg-[#3F3F3F] ring-1 ring-transparent hover:ring-offset-2 hover:ring-neutral-300 transition-all cursor-pointer"></button>
<button className="w-5 h-5 rounded-full bg-[#8C7E72] ring-1 ring-transparent hover:ring-offset-2 hover:ring-neutral-300 transition-all cursor-pointer"></button>
</div>
<button className="w-full h-9 bg-neutral-900 hover:bg-neutral-800 text-white text-[10px] font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:shopping-bag" width="14"></iconify-icon>
                                Add to Cart
                            </button>
</div>
</div>

<div className="hidden lg:block absolute -right-8 top-12 w-48 aspect-[3/4] rounded-lg overflow-hidden border-4 border-white shadow-xl animate-fade-in-up opacity-0 delay-300 hover:scale-105 transition-transform duration-500">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</header>

<div className="w-full border-y border-neutral-100 bg-neutral-50/60 py-5">
<div className="max-w-[1440px] mx-auto px-6">
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-semibold text-neutral-400 uppercase tracking-widest text-center">
<span className="flex items-center gap-2 hover:text-neutral-600 transition-colors cursor-default"><iconify-icon icon="lucide:check-circle" width="14"></iconify-icon> Sustainably Sourced</span>
<span className="flex items-center gap-2 hover:text-neutral-600 transition-colors cursor-default"><iconify-icon icon="lucide:box" width="14"></iconify-icon> Free Global Shipping</span>
<span className="flex items-center gap-2 hover:text-neutral-600 transition-colors cursor-default"><iconify-icon icon="lucide:shield-check" width="14"></iconify-icon> 5 Year Warranty</span>
<span className="flex items-center gap-2 hidden sm:flex hover:text-neutral-600 transition-colors cursor-default"><iconify-icon icon="lucide:award" width="14"></iconify-icon> Award Winning Design</span>
</div>
</div>
</div>

<section className="w-full py-20 lg:py-32 scroll-mt-20" id="new">
<div className="max-w-[1440px] mx-auto px-6">
<div className="flex justify-between items-end mb-10 reveal">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tighter">New Arrivals</h2>
<a className="text-sm font-medium text-neutral-500 hover:text-black transition-colors flex items-center gap-1 group pb-1 border-b border-transparent hover:border-black" href="#shop">
                    Browse All
                    <iconify-icon className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">

<div className="h-96 md:h-auto md:col-span-2 relative group overflow-hidden rounded-xl bg-neutral-100 reveal cursor-pointer">
<img alt="Lighting" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1622653533660-a1538fe8424c?w=2560&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 transition-opacity duration-500"></div>
<div className="absolute bottom-8 left-8 text-white z-10">
<span className="text-xs font-bold uppercase tracking-wider mb-2 block opacity-80">Collection 01</span>
<h3 className="text-3xl font-medium tracking-tight mb-2">Lighting Series</h3>
<p className="text-white/80 text-sm max-w-sm">Illuminate your sanctuary with our hand-blown glass collection.</p>
</div>
<button className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl z-20 text-neutral-900">
<iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
</div>

<div className="grid grid-rows-2 gap-6 h-96 md:h-auto">
<div className="relative group overflow-hidden rounded-xl bg-neutral-100 reveal delay-100 cursor-pointer">
<img alt="Ceramics" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 text-white z-10">
<h3 className="text-xl font-medium tracking-tight">Ceramics</h3>
</div>
</div>
<div className="relative group overflow-hidden rounded-xl bg-neutral-100 reveal delay-200 cursor-pointer">
<img alt="Furniture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&amp;w=1780&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 text-white z-10">
<h3 className="text-xl font-medium tracking-tight">Seating</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 bg-neutral-50 border-y border-neutral-200 scroll-mt-20" id="shop">
<div className="max-w-[1440px] mx-auto px-6">
<div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-6 reveal">
<h2 className="text-3xl font-medium tracking-tighter text-neutral-900">Essential Objects</h2>

<div className="flex flex-wrap gap-2">
<button className="px-5 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold shadow-lg shadow-neutral-900/10 transition-transform active:scale-95">All</button>
<button className="px-5 py-2.5 rounded-full bg-white border border-neutral-200 text-neutral-600 text-xs font-semibold hover:border-neutral-400 hover:text-neutral-900 transition-colors">Lighting</button>
<button className="px-5 py-2.5 rounded-full bg-white border border-neutral-200 text-neutral-600 text-xs font-semibold hover:border-neutral-400 hover:text-neutral-900 transition-colors">Furniture</button>
<button className="px-5 py-2.5 rounded-full bg-white border border-neutral-200 text-neutral-600 text-xs font-semibold hover:border-neutral-400 hover:text-neutral-900 transition-colors">Accessories</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">

<div className="group relative reveal">
<div className="aspect-square bg-white rounded-lg overflow-hidden mb-4 relative border border-neutral-100">
<img alt="Lamp" className="w-full h-full object-cover group-hover:opacity-0 transition-opacity absolute inset-0 z-10" src="https://images.unsplash.com/photo-1604610728890-6f4b631ed081?w=800&amp;q=80"/>
<img alt="Lamp Context" className="w-full h-full object-cover absolute inset-0 scale-105" src="https://images.unsplash.com/photo-1603801705819-e3b27f8bb8cc?w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 right-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="w-full h-10 bg-white/95 backdrop-blur text-neutral-900 text-xs font-bold rounded shadow-lg hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon> Quick Add
                            </button>
</div>
<div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center transition-all text-neutral-400 hover:text-red-500 hover:scale-110">
<iconify-icon icon="lucide:heart" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-neutral-900 tracking-tight">Orbital Lamp</h3>
<p className="text-xs text-neutral-500 mt-1">Matte Black Steel</p>
</div>
<span className="text-sm font-semibold text-neutral-900">$320</span>
</div>
</div>

<div className="group relative reveal delay-75">
<div className="aspect-square bg-white rounded-lg overflow-hidden mb-4 relative border border-neutral-100">
<img alt="Chair" className="w-full h-full object-cover group-hover:opacity-0 transition-opacity absolute inset-0 z-10" src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<img alt="Chair Context" className="w-full h-full object-cover absolute inset-0 scale-105" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&amp;q=80"/>
<div className="absolute top-3 left-3 z-20 bg-neutral-900 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-sm">New</div>
<div className="absolute bottom-4 left-4 right-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="w-full h-10 bg-white/95 backdrop-blur text-neutral-900 text-xs font-bold rounded shadow-lg hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon> Quick Add
                            </button>
</div>
<div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center transition-all text-neutral-400 hover:text-red-500 hover:scale-110">
<iconify-icon icon="lucide:heart" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-neutral-900 tracking-tight">Linen Lounge</h3>
<p className="text-xs text-neutral-500 mt-1">Natural Oak</p>
</div>
<span className="text-sm font-semibold text-neutral-900">$890</span>
</div>
</div>

<div className="group relative reveal delay-100">
<div className="aspect-square bg-white rounded-lg overflow-hidden mb-4 relative border border-neutral-100">
<img alt="Vase" className="w-full h-full object-cover group-hover:opacity-0 transition-opacity absolute inset-0 z-10" src="https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?w=800&amp;q=80"/>
<img alt="Vase Context" className="w-full h-full object-cover absolute inset-0 scale-105" src="https://images.unsplash.com/photo-1608111115633-872fa895d40d?w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 right-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="w-full h-10 bg-white/95 backdrop-blur text-neutral-900 text-xs font-bold rounded shadow-lg hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon> Quick Add
                            </button>
</div>
<div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center transition-all text-neutral-400 hover:text-red-500 hover:scale-110">
<iconify-icon icon="lucide:heart" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-neutral-900 tracking-tight">Sculpt Vase 02</h3>
<p className="text-xs text-neutral-500 mt-1">Raw Clay</p>
</div>
<span className="text-sm font-semibold text-neutral-900">$140</span>
</div>
</div>

<div className="group relative reveal delay-150">
<div className="aspect-square bg-white rounded-lg overflow-hidden mb-4 relative border border-neutral-100">
<img alt="Table" className="w-full h-full object-cover group-hover:opacity-0 transition-opacity absolute inset-0 z-10" src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&amp;w=1888&amp;auto=format&amp;fit=crop"/>
<img alt="Table Context" className="w-full h-full object-cover absolute inset-0 scale-105" src="https://images.unsplash.com/photo-1605239435870-67df4c54a0b3?w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 right-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="w-full h-10 bg-white/95 backdrop-blur text-neutral-900 text-xs font-bold rounded shadow-lg hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon> Quick Add
                            </button>
</div>
<div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center transition-all text-neutral-400 hover:text-red-500 hover:scale-110">
<iconify-icon icon="lucide:heart" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-neutral-900 tracking-tight">Side Table</h3>
<p className="text-xs text-neutral-500 mt-1">Walnut Finish</p>
</div>
<span className="text-sm font-semibold text-neutral-900">$450</span>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-block border-b border-black pb-0.5 text-sm font-semibold hover:text-neutral-600 hover:border-neutral-600 transition-all" href="#">View All Products</a>
</div>
</div>
</section>

<section className="w-full grid lg:grid-cols-2 min-h-[600px] border-b border-neutral-100 scroll-mt-20" id="collections">
<div className="relative bg-neutral-100 h-96 lg:h-auto overflow-hidden group">
<img alt="Craftsmanship" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&amp;w=1992&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center px-6 py-20 lg:px-24 bg-white">
<div className="reveal max-w-lg">
<span className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-4 block">Our Philosophy</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tighter mb-6 leading-tight">Designed to endure,<br/>crafted to inspire.</h2>
<p className="text-neutral-500 leading-relaxed mb-8 text-sm">
                    We believe in fewer, better things. Each piece in our collection is thoughtfully designed with sustainability and longevity in mind, using materials that age gracefully over time.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-sm font-medium text-neutral-800">
<div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
                        Ethically sourced materials
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-neutral-800">
<div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
                        Carbon neutral shipping
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-neutral-800">
<div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
                        Artisan craftsmanship
                    </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold border border-neutral-200 px-6 py-3.5 rounded hover:bg-neutral-50 transition-colors" href="#about">
                    Read our story
                </a>
</div>
</div>
</section>

<section className="w-full py-20 lg:py-32 scroll-mt-20" id="journal">
<div className="max-w-[1440px] mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tighter mb-12 reveal">The Journal</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<article className="group cursor-pointer reveal">
<div className="overflow-hidden rounded-xl mb-5 aspect-[16/10] bg-neutral-100">
<img alt="Blog 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 mb-2.5 uppercase tracking-wide">
<span>Oct 12, 2023</span>
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
<span>Interiors</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 group-hover:underline decoration-1 underline-offset-4">Minimalism in the Modern Home</h3>
<p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">Exploring the balance between functionality and aesthetic in contemporary living spaces, emphasizing clutter-free environments.</p>
</article>

<article className="group cursor-pointer reveal delay-100">
<div className="overflow-hidden rounded-xl mb-5 aspect-[16/10] bg-neutral-100">
<img alt="Blog 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&amp;w=1987&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 mb-2.5 uppercase tracking-wide">
<span>Sep 28, 2023</span>
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
<span>Design</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 group-hover:underline decoration-1 underline-offset-4">The Art of Lighting</h3>
<p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">How proper lighting transforms the mood and utility of a room instantly, creating warmth and depth in any space.</p>
</article>

<article className="group cursor-pointer reveal delay-200">
<div className="overflow-hidden rounded-xl mb-5 aspect-[16/10] bg-neutral-100">
<img alt="Blog 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 mb-2.5 uppercase tracking-wide">
<span>Sep 15, 2023</span>
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
<span>Studio</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 group-hover:underline decoration-1 underline-offset-4">Meet the Makers</h3>
<p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">A behind-the-scenes look at the artisans crafting our ceramic collection using traditional techniques handed down for generations.</p>
</article>
</div>
</div>
</section>

<section className="w-full py-24 bg-neutral-900 text-white" id="newsletter">
<div className="max-w-screen-xl mx-auto px-6 text-center reveal">
<iconify-icon className="mb-6 text-neutral-400" icon="lucide:mail-open" width="32"></iconify-icon>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tighter mb-4">Join the list</h2>
<p className="text-neutral-400 mb-10 max-w-md mx-auto text-sm">Sign up for early access to new drops and exclusive offers. No spam, ever.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onsubmit="event.preventDefault();">
<input className="flex-1 bg-neutral-800 border border-neutral-700 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all placeholder:text-neutral-600" placeholder="email@address.com" type="email"/>
<button className="bg-white text-neutral-900 text-sm font-bold px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors" type="submit">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="w-full bg-white pt-20 pb-10 border-t border-neutral-100">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div>
<h4 className="font-semibold text-sm tracking-wide mb-5 text-neutral-900">Shop</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-black transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-black transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-black transition-colors" href="#">Furniture</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm tracking-wide mb-5 text-neutral-900">Support</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-black transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-black transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-black transition-colors" href="#">Size Guide</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm tracking-wide mb-5 text-neutral-900">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-black transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-black transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-black transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm tracking-wide mb-5 text-neutral-900">Follow Us</h4>
<div className="flex gap-4 text-neutral-500">
<a className="hover:text-black transition-colors p-2 bg-neutral-50 rounded-full" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="hover:text-black transition-colors p-2 bg-neutral-50 rounded-full" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="hover:text-black transition-colors p-2 bg-neutral-50 rounded-full" href="#"><iconify-icon icon="lucide:facebook" width="18"></iconify-icon></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-100 gap-4">
<div className="text-xl font-bold tracking-tighter">LUMA</div>
<div className="text-[11px] text-neutral-400 font-medium">
                    © 2023 LUMA Inc. All rights reserved.
                </div>
<div className="flex gap-3">
<div className="h-6 px-2 bg-neutral-50 rounded border border-neutral-100 flex items-center justify-center text-neutral-400">
<iconify-icon icon="lucide:credit-card" width="14"></iconify-icon>
</div>
<div className="h-6 px-2 bg-neutral-50 rounded border border-neutral-100 flex items-center justify-center text-neutral-400">
<iconify-icon icon="lucide:wallet" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
