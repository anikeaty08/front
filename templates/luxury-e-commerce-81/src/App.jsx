import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const carousel = document.getElementById('carousel');
            const dots = document.querySelectorAll('.dot');
            const slidesCount = dots.length;
            let currentIndex = 0;
            let intervalId;

            function updateCarousel(index) {
                carousel.style.transform = `translateX(-${index * 100}%)`;
                
                dots.forEach((dot, i) => {
                    if (i === index) {
                        dot.classList.remove('bg-white/40');
                        dot.classList.add('bg-white');
                    } else {
                        dot.classList.remove('bg-white');
                        dot.classList.add('bg-white/40');
                    }
                });
            }

            function nextSlide() {
                currentIndex = (currentIndex + 1) % slidesCount;
                updateCarousel(currentIndex);
            }

            function startAutoplay() {
                intervalId = setInterval(nextSlide, 6000); // 6 seconds per slide
            }

            function stopAutoplay() {
                clearInterval(intervalId);
            }

            // Click events for dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    updateCarousel(currentIndex);
                    stopAutoplay();
                    startAutoplay(); // Reset timer on manual click
                });
            });

            // Pause on hover
            carousel.addEventListener('mouseenter', stopAutoplay);
            carousel.addEventListener('mouseleave', startAutoplay);

            // Init
            startAutoplay();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<button className="md:hidden p-2 text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="flex-shrink-0 flex items-center" href="#">
<span className="font-semibold text-xl tracking-widest uppercase">AURA</span>
</a>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-zinc-900 border-b-2 border-zinc-900 py-1" href="#">Home</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors py-1" href="#shop">Shop</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors py-1" href="#about">About</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors py-1" href="#contact">Contact</a>
</nav>

<div className="flex items-center space-x-4">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block">
<iconify-icon height="22" icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block">
<iconify-icon height="22" icon="solar:user-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors relative">
<iconify-icon height="22" icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-zinc-900 text-[0.5rem] font-medium text-white">2</span>
</button>
</div>
</div>
</div>
</header>

<section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-zinc-900 pt-16">
<div className="flex h-full w-full transition-transform duration-1000 ease-in-out" id="carousel">

<div className="w-full h-full flex-shrink-0 relative">
<img alt="Luxury Watch" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&amp;w=2825&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
<span className="text-xs font-medium text-zinc-300 tracking-widest uppercase mb-4 animate-fade-up">New Collection</span>
<h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tighter text-white mb-6 animate-fade-up delay-100">Precision Redefined.</h1>
<p className="text-base sm:text-lg text-zinc-300 mb-10 max-w-lg animate-fade-up delay-200 font-light">Experience the pinnacle of craftsmanship with our latest series of mechanical timepieces.</p>
<a className="group inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-zinc-900 bg-white rounded-full transition-all hover:bg-zinc-100 hover:scale-[1.02] active:scale-95 animate-fade-up delay-300 shadow-xl shadow-white/10" href="#shop">
                        Explore Collection
                    </a>
</div>
</div>

<div className="w-full h-full flex-shrink-0 relative">
<img alt="Leather Goods" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
<span className="text-xs font-medium text-zinc-300 tracking-widest uppercase mb-4">Essentials</span>
<h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tighter text-white mb-6">Everyday Elegance.</h1>
<p className="text-base sm:text-lg text-zinc-300 mb-10 max-w-lg font-light">Curated accessories crafted from premium Italian leather, designed for the modern individual.</p>
<a className="group inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-transparent border border-white/30 rounded-full transition-all hover:bg-white hover:text-zinc-900 hover:scale-[1.02] active:scale-95 backdrop-blur-sm" href="#shop">
                        Shop Accessories
                    </a>
</div>
</div>

<div className="w-full h-full flex-shrink-0 relative">
<img alt="Minimalist Object" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
<span className="text-xs font-medium text-zinc-300 tracking-widest uppercase mb-4">Home &amp; Living</span>
<h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tighter text-white mb-6">Art of Subtlety.</h1>
<p className="text-base sm:text-lg text-zinc-300 mb-10 max-w-lg font-light">Elevate your space with objects that blend seamless functionality with timeless aesthetics.</p>
<a className="group inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-zinc-900 bg-white rounded-full transition-all hover:bg-zinc-100 hover:scale-[1.02] active:scale-95 shadow-xl shadow-white/10" href="#shop">
                        View Lookbook
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
<button aria-label="Slide 1" className="dot w-2 h-2 rounded-full bg-white transition-all duration-300"></button>
<button aria-label="Slide 2" className="dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-300"></button>
<button aria-label="Slide 3" className="dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-300"></button>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-32 sm:pb-16" id="shop">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
<div>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-900 mb-2">New Arrivals</h2>
<p className="text-base text-zinc-500 font-light">Discover pieces that define contemporary luxury.</p>
</div>
<a className="group flex items-center text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">
                View All New
                <iconify-icon className="ml-1 transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12">

<div className="group relative flex flex-col">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4">
<img alt="Smart Watch" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&amp;w=2599&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-x-4 bottom-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
<button className="w-full py-3 bg-white/90 backdrop-blur-md text-zinc-900 text-sm font-medium rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white transition-colors flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:bag-linear" width="18"></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-zinc-900"><a href="#">Chronograph Obsidian</a></h3>
<p className="text-sm text-zinc-500 mt-1 font-light">Matte Titanium</p>
</div>
<p className="text-sm font-medium text-zinc-900">$895</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4">
<img alt="Perfume" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-x-4 bottom-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
<button className="w-full py-3 bg-white/90 backdrop-blur-md text-zinc-900 text-sm font-medium rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white transition-colors flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:bag-linear" width="18"></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-zinc-900"><a href="#">Essence No. 5</a></h3>
<p className="text-sm text-zinc-500 mt-1 font-light">Eau de Parfum, 50ml</p>
</div>
<p className="text-sm font-medium text-zinc-900">$185</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4">
<div className="absolute top-4 left-4 z-10">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-zinc-900 text-white">Sold Out</span>
</div>
<img alt="Bag" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-x-4 bottom-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
<button className="w-full py-3 bg-white/90 backdrop-blur-md text-zinc-900 text-sm font-medium rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white transition-colors flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:eye-linear" width="18"></iconify-icon>
                            Quick View
                        </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-zinc-900"><a href="#">Sartorial Tote</a></h3>
<p className="text-sm text-zinc-500 mt-1 font-light">Pebbled Calfskin</p>
</div>
<p className="text-sm font-medium text-zinc-900">$1,250</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4">
<img alt="Sunglasses" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-x-4 bottom-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
<button className="w-full py-3 bg-white/90 backdrop-blur-md text-zinc-900 text-sm font-medium rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white transition-colors flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:bag-linear" width="18"></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-zinc-900"><a href="#">Aero Aviators</a></h3>
<p className="text-sm text-zinc-500 mt-1 font-light">Brushed Gold</p>
</div>
<p className="text-sm font-medium text-zinc-900">$340</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
<div>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-900 mb-2">Best Sellers</h2>
<p className="text-base text-zinc-500 font-light">Our most sought-after signature pieces.</p>
</div>
<a className="group flex items-center text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">
                View All Top
                <iconify-icon className="ml-1 transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12">

<div className="group relative flex flex-col">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4">
<img alt="Lounge Chair" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-4 bottom-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
<button className="w-full py-3 bg-white/90 backdrop-blur-md text-zinc-900 text-sm font-medium rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white transition-colors flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:bag-linear" width="18"></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-zinc-900"><a href="#">Lounge Chair Model 01</a></h3>
<p className="text-sm text-zinc-500 mt-1 font-light">Walnut &amp; Leather</p>
</div>
<p className="text-sm font-medium text-zinc-900">$2,400</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4">
<img alt="Headphones" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-4 bottom-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
<button className="w-full py-3 bg-white/90 backdrop-blur-md text-zinc-900 text-sm font-medium rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white transition-colors flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:bag-linear" width="18"></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-zinc-900"><a href="#">Acoustic Over-Ears</a></h3>
<p className="text-sm text-zinc-500 mt-1 font-light">Brushed Steel</p>
</div>
<p className="text-sm font-medium text-zinc-900">$550</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4">
<img alt="Wallet" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-4 bottom-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
<button className="w-full py-3 bg-white/90 backdrop-blur-md text-zinc-900 text-sm font-medium rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white transition-colors flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:bag-linear" width="18"></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-zinc-900"><a href="#">Slim Cardholder</a></h3>
<p className="text-sm text-zinc-500 mt-1 font-light">Cordovan Leather</p>
</div>
<p className="text-sm font-medium text-zinc-900">$120</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4">
<img alt="Camera" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-4 bottom-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
<button className="w-full py-3 bg-white/90 backdrop-blur-md text-zinc-900 text-sm font-medium rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white transition-colors flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:bag-linear" width="18"></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-zinc-900"><a href="#">Analog Rangefinder</a></h3>
<p className="text-sm text-zinc-500 mt-1 font-light">Silver Edition</p>
</div>
<p className="text-sm font-medium text-zinc-900">$1,850</p>
</div>
</div>
</div>
</section>

<section className="bg-white border-y border-zinc-100 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-100">
<div className="flex flex-col items-center py-6 md:py-0 px-4">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-900 mb-4">
<iconify-icon height="24" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-zinc-900 mb-2">Complimentary Shipping</h4>
<p className="text-sm text-zinc-500 font-light">Enjoy free express delivery on all orders over $500 globally.</p>
</div>
<div className="flex flex-col items-center py-6 md:py-0 px-4">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-900 mb-4">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-zinc-900 mb-2">Authenticity Guarantee</h4>
<p className="text-sm text-zinc-500 font-light">Every item is certified authentic and comes with a digital passport.</p>
</div>
<div className="flex flex-col items-center py-6 md:py-0 px-4">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-900 mb-4">
<iconify-icon height="24" icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-zinc-900 mb-2">Free Returns</h4>
<p className="text-sm text-zinc-500 font-light">Return or exchange any item within 30 days, hassle-free.</p>
</div>
</div>
</div>
</section>

<footer className="bg-orange-600 text-orange-50 py-16 sm:py-24" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-2">
<a className="inline-block mb-6 text-white font-semibold text-xl tracking-widest uppercase" href="#">AURA</a>
<p className="text-sm font-light mb-6 max-w-sm text-orange-100">Join our private list to receive updates on new arrivals, exclusive access, and insider content.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md">
<input className="flex-1 bg-orange-700/50 border border-orange-500 text-white placeholder:text-orange-200 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors" placeholder="Email address" required="" type="email"/>
<button className="px-6 py-3 bg-white text-orange-600 text-sm font-medium rounded-lg hover:bg-orange-50 transition-colors whitespace-nowrap" type="submit">Subscribe</button>
</form>
</div>

<div>
<h4 className="text-white text-sm font-medium mb-6">Customer Care</h4>
<ul className="space-y-4 text-sm font-light">
<li><a className="text-orange-100 hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="text-orange-100 hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="text-orange-100 hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="text-orange-100 hover:text-white transition-colors" href="#">Track Order</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-medium mb-6">Legal</h4>
<ul className="space-y-4 text-sm font-light">
<li><a className="text-orange-100 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-orange-100 hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-orange-100 hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-orange-500 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs font-light text-orange-200">© 2024 AURA Luxury. All rights reserved.</p>
<div className="flex items-center space-x-6 text-orange-200">
<a className="hover:text-white transition-colors" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon height="20" icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<span className="sr-only">Twitter</span>
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<span className="sr-only">Pinterest</span>
<iconify-icon height="20" icon="solar:gallery-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
