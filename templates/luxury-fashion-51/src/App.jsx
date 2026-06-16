import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Page Loader
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.visibility = 'hidden';
                // Trigger initial hero text reveal
                document.querySelectorAll('.reveal-text').forEach(el => el.classList.add('active'));
            }, 500);
        });

        // Mobile Menu Toggle
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('-translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        }

        // Cart Drawer Toggle
        function toggleCart() {
            const cart = document.getElementById('cart-drawer');
            cart.classList.toggle('translate-x-full');
            // document.body.classList.toggle('overflow-hidden'); // Optional
        }

        // Scroll Animations (Intersection Observer)
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach(el => {
            observer.observe(el);
        });

        // Navbar blur on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('bg-black/80');
                nav.classList.remove('bg-black/50');
            } else {
                nav.classList.remove('bg-black/80');
                nav.classList.add('bg-black/50');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="loader-overlay" id="loader">
<div className="text-white text-2xl font-light tracking-widest animate-pulse">NOIR</div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-[1920px] mx-auto px-6 h-20 flex items-center justify-between">

<button className="md:hidden text-white" onclick="toggleMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-neutral-400">
<a className="hover:text-white transition-colors" href="#shop">Shop</a>
<a className="hover:text-white transition-colors" href="#collections">Collections</a>
<a className="hover:text-white transition-colors" href="#journal">Journal</a>
</div>

<a className="text-2xl font-semibold tracking-tighter text-white absolute left-1/2 -translate-x-1/2" href="#">
                NOIR
            </a>

<div className="flex items-center gap-6">
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-white transition-colors relative" onclick="toggleCart()">
<iconify-icon icon="solar:bag-linear" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></span>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-black z-40 transform -translate-x-full transition-transform duration-500 flex flex-col items-center justify-center space-y-8" id="mobile-menu">
<button className="absolute top-6 right-6 text-neutral-400" onclick="toggleMenu()">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<a className="text-3xl font-light tracking-tight hover:text-neutral-400 transition-colors" href="#shop" onclick="toggleMenu()">Shop</a>
<a className="text-3xl font-light tracking-tight hover:text-neutral-400 transition-colors" href="#collections" onclick="toggleMenu()">Collections</a>
<a className="text-3xl font-light tracking-tight hover:text-neutral-400 transition-colors" href="#journal" onclick="toggleMenu()">Journal</a>
<a className="text-3xl font-light tracking-tight hover:text-neutral-400 transition-colors" href="#">About</a>
</div>

<div className="fixed inset-y-0 right-0 w-full md:w-96 bg-neutral-900 z-50 transform translate-x-full transition-transform duration-500 shadow-2xl border-l border-white/10 flex flex-col" id="cart-drawer">
<div className="p-6 border-b border-white/5 flex items-center justify-between">
<h2 className="text-lg font-light tracking-wide text-white">Shopping Bag (2)</h2>
<button className="text-neutral-400 hover:text-white" onclick="toggleCart()">
<iconify-icon icon="solar:close-square-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6">

<div className="flex gap-4">
<img alt="Item" className="w-20 h-28 object-cover bg-neutral-800" src="https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 flex flex-col justify-between">
<div>
<h3 className="text-white font-medium text-sm">Oversized Trench</h3>
<p className="text-neutral-500 text-xs mt-1">Size: M / Black</p>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-400">1 x $450</span>
<span className="text-white">$450</span>
</div>
</div>
</div>

<div className="flex gap-4">
<img alt="Item" className="w-20 h-28 object-cover bg-neutral-800" src="https://images.unsplash.com/photo-1550614000-4b9519e02929?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 flex flex-col justify-between">
<div>
<h3 className="text-white font-medium text-sm">Silk Blouse</h3>
<p className="text-neutral-500 text-xs mt-1">Size: S / Ivory</p>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-400">1 x $280</span>
<span className="text-white">$280</span>
</div>
</div>
</div>
</div>
<div className="p-6 border-t border-white/5 bg-neutral-900">
<div className="flex justify-between text-sm mb-4">
<span className="text-neutral-400">Subtotal</span>
<span className="text-white font-medium">$730.00</span>
</div>
<button className="w-full bg-white text-black py-4 font-medium text-sm tracking-widest uppercase hover:bg-neutral-200 transition-colors">
                Checkout
            </button>
</div>
</div>

<header className="relative h-screen w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40 z-10"></div>
<img alt="Hero" className="w-full h-full object-cover object-top opacity-90" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20">
<p className="text-xs md:text-sm text-neutral-300 uppercase tracking-[0.3em] mb-6 reveal-text">Spring / Summer 2024</p>
<h1 className="text-5xl md:text-7xl lg:text-9xl font-semibold text-white tracking-tighter mb-8 leading-none reveal-text" style={{transitionDelay: '100ms'}}>
                ETHEREAL<br/>ESSENCE
            </h1>
<div className="reveal-text" style={{transitionDelay: '200ms'}}>
<a className="inline-block px-8 py-3 border border-white/30 hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-sm tracking-widest uppercase backdrop-blur-sm" href="#shop">
                    Explore Collection
                </a>
</div>
</div>
<div className="absolute bottom-10 left-0 w-full flex justify-between px-8 text-xs text-neutral-400 tracking-wider z-20">
<span>EST. 2024</span>
<span className="animate-bounce">SCROLL</span>
<span>PARIS / TOKYO</span>
</div>
</header>

<section className="border-y border-white/10 bg-black py-4 overflow-hidden relative z-10">
<div className="whitespace-nowrap flex animate-marquee">
<span className="text-4xl md:text-6xl font-light tracking-tighter text-neutral-800 mx-8">NEW ARRIVALS</span>
<span className="text-4xl md:text-6xl font-light tracking-tighter text-white mx-8">LIMITED EDITION</span>
<span className="text-4xl md:text-6xl font-light tracking-tighter text-neutral-800 mx-8">SUSTAINABLE LUXURY</span>
<span className="text-4xl md:text-6xl font-light tracking-tighter text-white mx-8">HANDCRAFTED</span>
<span className="text-4xl md:text-6xl font-light tracking-tighter text-neutral-800 mx-8">NEW ARRIVALS</span>
<span className="text-4xl md:text-6xl font-light tracking-tighter text-white mx-8">LIMITED EDITION</span>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-[1920px] mx-auto bg-black" id="collections">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 fade-up">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-2">Curated Collections</h2>
<p className="text-neutral-500 text-sm tracking-wide max-w-md">Timeless pieces designed for the modern individual.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-white border-b border-transparent hover:border-white transition-all pb-1 mt-6 md:mt-0" href="#">
                View All <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">

<div className="group relative h-[600px] overflow-hidden cursor-pointer">
<div className="img-zoom-container h-full w-full">
<img alt="Women" className="w-full h-full object-cover img-zoom opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent">
<h3 className="text-2xl font-light text-white tracking-tight">Ready to Wear</h3>
<p className="text-neutral-400 text-sm mt-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Shop Women</p>
</div>
</div>

<div className="group relative h-[600px] overflow-hidden cursor-pointer lg:mt-16">
<div className="img-zoom-container h-full w-full">
<img alt="Men" className="w-full h-full object-cover img-zoom opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent">
<h3 className="text-2xl font-light text-white tracking-tight">Tailoring</h3>
<p className="text-neutral-400 text-sm mt-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Shop Men</p>
</div>
</div>

<div className="group relative h-[600px] overflow-hidden cursor-pointer">
<div className="img-zoom-container h-full w-full">
<img alt="Accessories" className="w-full h-full object-cover img-zoom opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1616150638538-23b43818d971?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent">
<h3 className="text-2xl font-light text-white tracking-tight">Accessories</h3>
<p className="text-neutral-400 text-sm mt-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Shop Now</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-[1920px] mx-auto border-t border-white/5 bg-neutral-950" id="shop">
<div className="text-center mb-16 fade-up">
<span className="text-xs text-neutral-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">Selected Items</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mt-6">Essential Wardrobe</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group fade-up">
<div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-900 mb-4">
<img alt="Front" className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 absolute inset-0 z-10" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Back" className="w-full h-full object-cover absolute inset-0" src="https://images.unsplash.com/photo-1529139574466-a302d2052505?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<button className="absolute bottom-4 left-4 right-4 bg-white text-black py-3 px-4 text-xs font-bold tracking-widest uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 flex items-center justify-center gap-2 hover:bg-neutral-200">
                        Add to Cart
                    </button>
<div className="absolute top-3 left-3 bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-20">New</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-sm tracking-wide">Structured Blazer</h3>
<p className="text-neutral-500 text-xs mt-1">Wool Blend</p>
</div>
<span className="text-white font-medium text-sm">$890</span>
</div>
</div>

<div className="group fade-up" style={{transitionDelay: '100ms'}}>
<div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-900 mb-4">
<img alt="Front" className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 absolute inset-0 z-10" src="https://images.unsplash.com/photo-1551163943-3f6a29e3945a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Back" className="w-full h-full object-cover absolute inset-0" src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 left-4 right-4 bg-white text-black py-3 px-4 text-xs font-bold tracking-widest uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 flex items-center justify-center gap-2 hover:bg-neutral-200">
                        Add to Cart
                    </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-sm tracking-wide">Cashmere Coat</h3>
<p className="text-neutral-500 text-xs mt-1">Midnight Blue</p>
</div>
<span className="text-white font-medium text-sm">$1,250</span>
</div>
</div>

<div className="group fade-up" style={{transitionDelay: '200ms'}}>
<div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-900 mb-4">
<img alt="Front" className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 absolute inset-0 z-10" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Back" className="w-full h-full object-cover absolute inset-0" src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 left-4 right-4 bg-white text-black py-3 px-4 text-xs font-bold tracking-widest uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 flex items-center justify-center gap-2 hover:bg-neutral-200">
                        Add to Cart
                    </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-sm tracking-wide">Silk Evening Dress</h3>
<p className="text-neutral-500 text-xs mt-1">Black</p>
</div>
<span className="text-white font-medium text-sm">$950</span>
</div>
</div>

<div className="group fade-up" style={{transitionDelay: '300ms'}}>
<div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-900 mb-4">
<img alt="Front" className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 absolute inset-0 z-10" src="https://images.unsplash.com/photo-1608234807905-4466023792f5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Back" className="w-full h-full object-cover absolute inset-0" src="https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 left-4 right-4 bg-white text-black py-3 px-4 text-xs font-bold tracking-widest uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 flex items-center justify-center gap-2 hover:bg-neutral-200">
                        Add to Cart
                    </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-sm tracking-wide">Leather Tote</h3>
<p className="text-neutral-500 text-xs mt-1">Italian Leather</p>
</div>
<span className="text-white font-medium text-sm">$1,400</span>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-block px-12 py-3 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300" href="#">
                View All Products
            </a>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 border-t border-white/10 overflow-hidden">
<div className="relative h-[600px] lg:h-auto overflow-hidden group">
<div className="img-zoom-container h-full w-full">
<img alt="Collection Focus" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-black/20"></div>
</div>
<div className="bg-neutral-900 p-12 lg:p-24 flex flex-col justify-center">
<span className="text-xs text-neutral-500 uppercase tracking-widest mb-4 fade-up">Campaign</span>
<h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tighter mb-6 fade-up">The Monochrome<br/>Series</h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-10 max-w-md fade-up">
                A study in contrast. Our latest capsule collection explores the depths of light and shadow through textures, silhouettes, and uncompromising quality.
            </p>
<div className="grid grid-cols-2 gap-4 mb-10 fade-up">
<img alt="Detail 1" className="w-full h-32 object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1550614000-4b9519e02929?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Detail 2" className="w-full h-32 object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="fade-up">
<a className="text-white border-b border-white pb-1 uppercase text-xs tracking-[0.2em] hover:text-neutral-300 hover:border-neutral-300 transition-colors inline-flex items-center gap-2" href="#">
                    Discover Collection <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
<div className="absolute inset-0 opacity-20">
<img alt="Texture" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1485230946086-1d99d529a763?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-8 leading-tight fade-up">
                "FASHION IS NOT SOMETHING THAT EXISTS IN DRESSES ONLY. FASHION IS IN THE SKY, IN THE STREET."
            </h2>
<p className="text-neutral-400 text-sm md:text-base tracking-wide max-w-lg mx-auto mb-10 fade-up">
                We believe in sustainable luxury. Every piece is crafted with the utmost attention to detail, using ethically sourced materials from the world's finest artisans.
            </p>
<button className="text-white border-b border-white pb-1 uppercase text-xs tracking-[0.2em] hover:text-neutral-300 hover:border-neutral-300 transition-colors fade-up">
                Read Our Story
            </button>
</div>
</section>

<section className="py-24 px-6 max-w-[1920px] mx-auto bg-neutral-950 border-t border-white/5" id="journal">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 fade-up">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-2">The Journal</h2>
<p className="text-neutral-500 text-sm tracking-wide">Stories, trends, and behind the scenes.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-white border-b border-transparent hover:border-white transition-all pb-1 mt-6 md:mt-0" href="#">
                View Archive <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer fade-up">
<div className="overflow-hidden mb-6 h-64 w-full bg-neutral-900">
<img alt="Blog 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-neutral-500 mb-3">
<span>Oct 12, 2023</span>
<span className="w-1 h-1 bg-neutral-500 rounded-full"></span>
<span>Trends</span>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-3 group-hover:underline decoration-white/30 underline-offset-4 transition-all">
                    The Art of Minimalism in 2024
                </h3>
<p className="text-neutral-500 text-sm line-clamp-2 mb-4">
                    Exploring how clean lines and monochromatic palettes are reshaping the fashion landscape this season.
                </p>
<span className="text-white text-xs border-b border-transparent group-hover:border-white transition-all pb-0.5 inline-flex items-center gap-1">
                    Read Article <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</article>

<article className="group cursor-pointer fade-up" style={{transitionDelay: '100ms'}}>
<div className="overflow-hidden mb-6 h-64 w-full bg-neutral-900">
<img alt="Blog 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1470309630548-437ed88c86a4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-neutral-500 mb-3">
<span>Sep 28, 2023</span>
<span className="w-1 h-1 bg-neutral-500 rounded-full"></span>
<span>Atelier</span>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-3 group-hover:underline decoration-white/30 underline-offset-4 transition-all">
                    Behind the Seams: Craftsmanship
                </h3>
<p className="text-neutral-500 text-sm line-clamp-2 mb-4">
                    A look inside our Parisian workshop where traditional techniques meet modern innovation.
                </p>
<span className="text-white text-xs border-b border-transparent group-hover:border-white transition-all pb-0.5 inline-flex items-center gap-1">
                    Read Article <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</article>

<article className="group cursor-pointer fade-up" style={{transitionDelay: '200ms'}}>
<div className="overflow-hidden mb-6 h-64 w-full bg-neutral-900">
<img alt="Blog 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-neutral-500 mb-3">
<span>Sep 15, 2023</span>
<span className="w-1 h-1 bg-neutral-500 rounded-full"></span>
<span>Sustainability</span>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-3 group-hover:underline decoration-white/30 underline-offset-4 transition-all">
                    Sustainable Luxury: A New Era
                </h3>
<p className="text-neutral-500 text-sm line-clamp-2 mb-4">
                    Why we are committing to 100% recycled materials by 2025 without compromising on quality.
                </p>
<span className="text-white text-xs border-b border-transparent group-hover:border-white transition-all pb-0.5 inline-flex items-center gap-1">
                    Read Article <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</article>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black">
<div className="max-w-xl mx-auto px-6 text-center">
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Join the Club</h3>
<p className="text-neutral-500 text-sm mb-8">Unlock exclusive access to new collections and sales.</p>
<form className="flex flex-col sm:flex-row gap-4">
<input className="flex-1 bg-transparent border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-neutral-600 placeholder:text-xs placeholder:tracking-widest" placeholder="ENTER YOUR EMAIL" type="email"/>
<button className="bg-white text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors" type="button">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-neutral-950 pt-20 pb-10 border-t border-white/10 text-neutral-400">
<div className="max-w-[1920px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div>
<a className="text-2xl font-semibold tracking-tighter text-white block mb-6" href="#">NOIR</a>
<p className="text-xs leading-relaxed max-w-xs text-neutral-500">
                    Redefining modern luxury through minimalism, sustainability, and timeless design.
                </p>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Shop</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Women</a></li>
<li><a className="hover:text-white transition-colors" href="#">Men</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Connect</h4>
<div className="flex gap-4 mb-6">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:facebook" width="20"></iconify-icon></a>
</div>
<p className="text-xs text-neutral-500">
                    © 2024 NOIR Fashion Inc. <br/>All rights reserved.
                </p>
</div>
</div>
<div className="text-center">
<p className="text-[10px] text-neutral-600 uppercase tracking-widest">Designed with precision.</p>
</div>
</footer>


    </>
  );
}
