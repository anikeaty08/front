import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function navigateTo(pageId) {
            document.querySelectorAll('.page-view').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block');
            });
            const target = document.getElementById('page-' + pageId);
            if (target) { target.classList.remove('hidden'); target.classList.add('block'); }
            document.querySelectorAll('.nav-link').forEach(el => {
                if (el.dataset.target === pageId) { el.classList.add('text-slate-900'); el.classList.remove('text-slate-500'); }
                else { el.classList.remove('text-slate-900'); el.classList.add('text-slate-500'); }
            });
            window.scrollTo(0, 0);
        }

        // Carousel scroll buttons
        function setupCarousel(prevId, nextId, carouselId) {
            const prev = document.getElementById(prevId);
            const next = document.getElementById(nextId);
            const carousel = document.getElementById(carouselId);
            if (!prev || !next || !carousel) return;
            next.addEventListener('click', () => { carousel.scrollBy({ left: 320, behavior: 'smooth' }); });
            prev.addEventListener('click', () => { carousel.scrollBy({ left: -320, behavior: 'smooth' }); });
        }
        setupCarousel('deals-prev', 'deals-next', 'deals-carousel');
        setupCarousel('arrivals-prev', 'arrivals-next', 'arrivals-carousel');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="promo-bar flex items-center justify-center py-2.5 px-4 overflow-hidden relative text-white">
<div className="flex items-center gap-6 text-xs font-normal tracking-wide">
<span className="flex items-center gap-2"><iconify-icon className="text-base text-gold" icon="solar:stars-linear"></iconify-icon> Free shipping on orders over $150</span>
<span className="hidden sm:flex items-center gap-2 opacity-60">|</span>
<span className="hidden sm:flex items-center gap-2"><iconify-icon className="text-base text-gold" icon="solar:tag-linear"></iconify-icon> Use <span className="font-medium text-gold mx-1">LUXE20</span> for 20% off</span>
<span className="hidden md:flex items-center gap-2 opacity-60">|</span>
<span className="hidden md:flex items-center gap-2"><iconify-icon className="text-base text-gold" icon="solar:refresh-linear"></iconify-icon> 30-day free returns</span>
</div>
</div>

<header className="sticky top-0 z-40 nav-glass border-b shadow-sm border-slate-200/60">
<div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
<div className="flex items-center gap-8">
<button className="lg:hidden transition-colors text-slate-600 hover:text-indigo-600">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<a className="flex items-center gap-2" href="#" onclick="navigateTo('home')">
<span className="font-display text-2xl font-medium tracking-tight text-slate-900">LUXE</span>
<span className="w-1.5 h-1.5 rounded-full bg-gold mt-0.5"></span>
</a>
<nav className="hidden lg:flex items-center gap-8">
<button className="text-sm font-normal transition-colors nav-link text-slate-700 hover:text-indigo-600" data-target="home" onclick="navigateTo('home')">Home</button>
<button className="text-sm font-normal transition-colors nav-link text-slate-700 hover:text-indigo-600" data-target="shop" onclick="navigateTo('shop')">Collections</button>
<button className="text-sm font-normal transition-colors nav-link text-slate-700 hover:text-indigo-600" data-target="product" onclick="navigateTo('product')">New Arrivals</button>
<button className="text-sm font-normal transition-colors text-slate-700 hover:text-indigo-600">Sale <span className="inline-block ml-1 px-1.5 py-0.5 bg-rose-500 text-xs rounded-full leading-none text-white">Hot</span></button>
</nav>
</div>
<div className="hidden lg:flex flex-1 max-w-sm relative mx-8">
<iconify-icon className="text-lg absolute left-4 top-1/2 -translate-y-1/2 z-10 text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full border border-transparent rounded-full pl-11 pr-4 py-2 text-sm font-normal placeholder:text-slate-400 focus:bg-white focus:border-indigo-200 focus:outline-none focus:ring-4 focus:ring-indigo-50 transition-all bg-slate-100" placeholder="Search products, brands..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-1.5 text-sm font-normal transition-colors nav-link text-slate-600 hover:text-indigo-600" data-target="auth" onclick="navigateTo('auth')">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
<span className="hidden md:block">Account</span>
</button>
<button className="hidden sm:flex items-center gap-1.5 text-sm font-normal transition-colors text-slate-600 hover:text-indigo-600">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
<span className="hidden md:block">Wishlist</span>
</button>
<button className="flex items-center gap-1.5 transition-colors relative group nav-link text-slate-600 hover:text-indigo-600" data-target="cart" onclick="navigateTo('cart')">
<div className="relative">
<iconify-icon className="text-2xl" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
<span className="absolute -top-2 -right-2 text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium shadow-sm bg-indigo-600 text-white">3</span>
</div>
<span className="hidden md:block text-sm font-normal">Cart</span>
</button>
</div>
</div>
</header>
<main>

<div className="page-view block" id="page-home">

<section className="max-w-[1440px] mx-auto px-4 sm:px-6 mt-6">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-4 h-auto lg:h-[580px]">

<div className="lg:col-span-3 relative rounded-[2rem] overflow-hidden group cursor-pointer min-h-[420px]" onclick="navigateTo('product')">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&amp;fit=crop&amp;q=80&amp;w=1400"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-slate-950/90 via-slate-950/30"></div>
<div className="absolute inset-0 bg-gradient-to-r to-transparent from-slate-950/50"></div>
<div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-12">
<span className="tag-pill inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs mb-5 w-fit">
<iconify-icon className="text-sm" icon="solar:stars-linear"></iconify-icon> 2024 Collection
                            </span>
<h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] mb-4 hero-text-shadow text-white">
                                Time, Crafted <br/><em>to Perfection.</em>
</h1>
<p className="font-normal text-base mb-8 max-w-sm leading-relaxed text-slate-300">Swiss-engineered movements. Timeless design. Worn by those who set the standard.</p>
<button className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-colors w-fit shadow-lg group/btn bg-white text-slate-900 hover:bg-slate-100">
                                Shop Now <iconify-icon className="text-lg group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-4">

<div className="relative rounded-[1.5rem] overflow-hidden group cursor-pointer min-h-[180px] lg:flex-1" onclick="navigateTo('product')" style={{background: 'linear-gradient(135deg, #667eea, #764ba2)'}}>
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/70"></div>
<div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-7">
<p className="text-xs font-normal mb-1 section-label text-purple-200">Audio</p>
<h3 className="font-medium text-lg sm:text-xl leading-tight mb-3 text-white">Sony XM5 <br/>Headphones</h3>
<span className="text-sm font-normal flex items-center gap-1 group-hover/btn:gap-2 transition-all text-purple-200">
                                    From $298 <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="relative rounded-[1.5rem] overflow-hidden group cursor-pointer min-h-[180px] lg:flex-1" onclick="navigateTo('product')" style={{background: 'linear-gradient(135deg, #f093fb, #f5576c)'}}>
<img className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/70"></div>
<div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-7">
<p className="text-xs font-normal mb-1 section-label text-pink-200">Footwear</p>
<h3 className="font-medium text-lg sm:text-xl leading-tight mb-3 text-white">Nike Air Max <br/>Flyknit</h3>
<span className="text-sm font-normal flex items-center gap-1 text-pink-200">
                                    From $129 <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</div>
</section>

<div className="mt-8 py-3.5 overflow-hidden bg-slate-950">
<div className="flex items-center gap-12 animate-[scroll_20s_linear_infinite] whitespace-nowrap" style={{animation: 'marquee 25s linear infinite', display: 'flex', width: 'max-content'}}>
<span className="text-xs font-normal tracking-widest uppercase flex items-center gap-3 text-slate-400"><iconify-icon className="text-gold text-xs" icon="solar:star-bold"></iconify-icon> Free Returns</span>
<span className="text-xs font-normal tracking-widest uppercase flex items-center gap-3 text-slate-400"><iconify-icon className="text-gold text-xs" icon="solar:star-bold"></iconify-icon> Premium Materials</span>
<span className="text-xs font-normal tracking-widest uppercase flex items-center gap-3 text-slate-400"><iconify-icon className="text-gold text-xs" icon="solar:star-bold"></iconify-icon> Curated Collections</span>
<span className="text-xs font-normal tracking-widest uppercase flex items-center gap-3 text-slate-400"><iconify-icon className="text-gold text-xs" icon="solar:star-bold"></iconify-icon> Worldwide Shipping</span>
<span className="text-xs font-normal tracking-widest uppercase flex items-center gap-3 text-slate-400"><iconify-icon className="text-gold text-xs" icon="solar:star-bold"></iconify-icon> Authenticated Products</span>
<span className="text-xs font-normal tracking-widest uppercase flex items-center gap-3 text-slate-400"><iconify-icon className="text-gold text-xs" icon="solar:star-bold"></iconify-icon> Free Returns</span>
<span className="text-xs font-normal tracking-widest uppercase flex items-center gap-3 text-slate-400"><iconify-icon className="text-gold text-xs" icon="solar:star-bold"></iconify-icon> Premium Materials</span>
<span className="text-xs font-normal tracking-widest uppercase flex items-center gap-3 text-slate-400"><iconify-icon className="text-gold text-xs" icon="solar:star-bold"></iconify-icon> Curated Collections</span>
<span className="text-xs font-normal tracking-widest uppercase flex items-center gap-3 text-slate-400"><iconify-icon className="text-gold text-xs" icon="solar:star-bold"></iconify-icon> Worldwide Shipping</span>
<span className="text-xs font-normal tracking-widest uppercase flex items-center gap-3 text-slate-400"><iconify-icon className="text-gold text-xs" icon="solar:star-bold"></iconify-icon> Authenticated Products</span>
</div>
</div>
<style>
                @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            </style>

<section className="max-w-[1440px] mx-auto px-4 sm:px-6 mt-16">
<div className="flex items-end justify-between mb-8">
<div>
<p className="section-label text-indigo-500 mb-2">Browse</p>
<h2 className="text-3xl font-medium tracking-tight">Shop by Category</h2>
</div>
<button className="hidden sm:flex items-center gap-1.5 text-sm font-normal text-slate-500 transition-colors hover:text-indigo-600" onclick="navigateTo('shop')">
                        View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[3/4] card-hover" onclick="navigateTo('shop')" style={{background: 'linear-gradient(135deg, #667eea, #764ba2)'}}>
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/80 via-black/20"></div>
<div className="absolute bottom-0 left-0 right-0 p-4">
<h3 className="text-sm font-medium text-white">Watches</h3>
<p className="text-xs mt-0.5 text-white/60">24 items</p>
</div>
</div>
<div className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[3/4] card-hover" onclick="navigateTo('shop')" style={{background: 'linear-gradient(135deg, #f093fb, #f5576c)'}}>
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/80 via-black/20"></div>
<div className="absolute bottom-0 left-0 right-0 p-4">
<h3 className="text-sm font-medium text-white">Footwear</h3>
<p className="text-xs mt-0.5 text-white/60">18 items</p>
</div>
</div>
<div className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[3/4] card-hover" onclick="navigateTo('shop')" style={{background: 'linear-gradient(135deg, #4facfe, #00f2fe)'}}>
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/80 via-black/20"></div>
<div className="absolute bottom-0 left-0 right-0 p-4">
<h3 className="text-sm font-medium text-white">Electronics</h3>
<p className="text-xs mt-0.5 text-white/60">32 items</p>
</div>
</div>
<div className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[3/4] card-hover" onclick="navigateTo('shop')" style={{background: 'linear-gradient(135deg, #43e97b, #38f9d7)'}}>
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/80 via-black/20"></div>
<div className="absolute bottom-0 left-0 right-0 p-4">
<h3 className="text-sm font-medium text-white">Bags</h3>
<p className="text-xs mt-0.5 text-white/60">15 items</p>
</div>
</div>
<div className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[3/4] card-hover" onclick="navigateTo('shop')" style={{background: 'linear-gradient(135deg, #fa709a, #fee140)'}}>
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/80 via-black/20"></div>
<div className="absolute bottom-0 left-0 right-0 p-4">
<h3 className="text-sm font-medium text-white">Photography</h3>
<p className="text-xs mt-0.5 text-white/60">9 items</p>
</div>
</div>
<div className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[3/4] card-hover" onclick="navigateTo('shop')" style={{background: 'linear-gradient(135deg, #a18cd1, #fbc2eb)'}}>
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/80 via-black/20"></div>
<div className="absolute bottom-0 left-0 right-0 p-4">
<h3 className="text-sm font-medium text-white">Beauty</h3>
<p className="text-xs mt-0.5 text-white/60">11 items</p>
</div>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto mt-20">
<div className="px-4 sm:px-6 flex items-end justify-between mb-8">
<div>
<p className="section-label text-rose-500 mb-2">Limited Time</p>
<h2 className="text-3xl font-medium tracking-tight flex items-center gap-3">
                            Today's Deals
                            <span className="bg-rose-500 text-xs px-3 py-1 rounded-full font-normal shadow-sm animate-pulse text-white">Ends 11:59 PM</span>
</h2>
</div>
<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-full border flex items-center justify-center hover:border-indigo-500 transition-all shadow-sm border-slate-200 bg-white text-slate-600 hover:text-indigo-600" id="deals-prev">
<iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border flex items-center justify-center hover:border-indigo-500 transition-all shadow-sm border-slate-200 bg-white text-slate-600 hover:text-indigo-600" id="deals-next">
<iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="carousel-fade-r px-4 sm:px-6">
<div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-5 pb-6" id="deals-carousel">
<div className="group flex flex-col cursor-pointer min-w-[260px] sm:min-w-[300px] snap-start card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-2 rounded-3xl overflow-hidden mb-4 aspect-[4/5] flex items-center justify-center p-8 border border-pink-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-4 left-4 bg-rose-500 text-xs px-3 py-1 rounded-full font-normal shadow-sm text-white">−20%</div>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all z-10 opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400 hover:border-rose-200">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="px-1">
<p className="text-xs mb-1 text-slate-400">Nike Footwear</p>
<h3 className="text-sm font-medium mb-2 leading-snug text-slate-900">Air Max Flyknit Runner</h3>
<div className="flex items-center gap-2">
<span className="text-base font-medium text-rose-600">$129.99</span>
<span className="text-sm line-through text-slate-400">$159.99</span>
</div>
</div>
</div>
<div className="group flex flex-col cursor-pointer min-w-[260px] sm:min-w-[300px] snap-start card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-1 rounded-3xl overflow-hidden mb-4 aspect-[4/5] flex items-center justify-center p-8 border border-indigo-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-4 left-4 bg-rose-500 text-xs px-3 py-1 rounded-full font-normal shadow-sm text-white">−15%</div>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all z-10 opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400 hover:border-rose-200">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="px-1">
<p className="text-xs mb-1 text-slate-400">Sony Audio</p>
<h3 className="text-sm font-medium mb-2 leading-snug text-slate-900">WH-1000XM5 Headphones</h3>
<div className="flex items-center gap-2">
<span className="text-base font-medium text-rose-600">$298.00</span>
<span className="text-sm line-through text-slate-400">$348.00</span>
</div>
</div>
</div>
<div className="group flex flex-col cursor-pointer min-w-[260px] sm:min-w-[300px] snap-start card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-4 rounded-3xl overflow-hidden mb-4 aspect-[4/5] flex items-center justify-center p-8 border border-emerald-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-rose-500 text-xs px-3 py-1 rounded-full font-normal shadow-sm text-white">−30%</div>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all z-10 opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400 hover:border-rose-200">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="px-1">
<p className="text-xs mb-1 text-slate-400">Accessories</p>
<h3 className="text-sm font-medium mb-2 leading-snug text-slate-900">Canvas Tote Bag</h3>
<div className="flex items-center gap-2">
<span className="text-base font-medium text-rose-600">$34.00</span>
<span className="text-sm line-through text-slate-400">$48.00</span>
</div>
</div>
</div>
<div className="group flex flex-col cursor-pointer min-w-[260px] sm:min-w-[300px] snap-start card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-5 rounded-3xl overflow-hidden mb-4 aspect-[4/5] flex items-center justify-center p-8 border border-orange-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute top-4 left-4 bg-rose-500 text-xs px-3 py-1 rounded-full font-normal shadow-sm text-white">−10%</div>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all z-10 opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400 hover:border-rose-200">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="px-1">
<p className="text-xs mb-1 text-slate-400">Photography</p>
<h3 className="text-sm font-medium mb-2 leading-snug text-slate-900">Polaroid OneStep+</h3>
<div className="flex items-center gap-2">
<span className="text-base font-medium text-rose-600">$119.00</span>
<span className="text-sm line-through text-slate-400">$139.00</span>
</div>
</div>
</div>
<div className="group flex flex-col cursor-pointer min-w-[260px] sm:min-w-[300px] snap-start card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-3 rounded-3xl overflow-hidden mb-4 aspect-[4/5] flex items-center justify-center p-8 border border-cyan-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-rose-500 text-xs px-3 py-1 rounded-full font-normal shadow-sm text-white">−25%</div>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all z-10 opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400 hover:border-rose-200">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="px-1">
<p className="text-xs mb-1 text-slate-400">Watches</p>
<h3 className="text-sm font-medium mb-2 leading-snug text-slate-900">Apple Watch Series 9</h3>
<div className="flex items-center gap-2">
<span className="text-base font-medium text-rose-600">$299.00</span>
<span className="text-sm line-through text-slate-400">$399.00</span>
</div>
</div>
</div>
<div className="group flex flex-col cursor-pointer min-w-[260px] sm:min-w-[300px] snap-start card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-6 rounded-3xl overflow-hidden mb-4 aspect-[4/5] flex items-center justify-center p-8 border border-purple-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-rose-500 text-xs px-3 py-1 rounded-full font-normal shadow-sm text-white">−12%</div>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all z-10 opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400 hover:border-rose-200">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="px-1">
<p className="text-xs mb-1 text-slate-400">Beauty</p>
<h3 className="text-sm font-medium mb-2 leading-snug text-slate-900">Signature Eau de Parfum</h3>
<div className="flex items-center gap-2">
<span className="text-base font-medium text-rose-600">$105.00</span>
<span className="text-sm line-through text-slate-400">$120.00</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-4 sm:px-6 mt-20">
<div className="relative rounded-[2rem] overflow-hidden" style={{background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)'}}>
<div className="absolute inset-0 opacity-20">
<div className="absolute top-0 left-1/4 w-96 h-96 rounded-full filter blur-3xl" style={{background: 'radial-gradient(circle, #6366f1, transparent)'}}></div>
<div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full filter blur-3xl" style={{background: 'radial-gradient(circle, #C9A84C, transparent)'}}></div>
</div>
<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 px-8 sm:px-16 py-14">
<div className="text-center lg:text-left">
<p className="section-label text-gold mb-3">Exclusive Membership</p>
<h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight mb-4 leading-tight text-white">Unlock LUXE Gold. <br/><em>Privileges Beyond Compare.</em></h2>
<p className="font-normal text-sm leading-relaxed max-w-md text-slate-400">Priority access to new drops, exclusive member pricing, a personal stylist, and complimentary express shipping on every order.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
<button className="bg-gold px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity shadow-lg flex items-center gap-2 glow-gold text-slate-900">
<iconify-icon className="text-lg" icon="solar:crown-linear"></iconify-icon>
                                Join Gold
                            </button>
<button className="border px-8 py-3.5 rounded-full text-sm font-normal transition-colors border-white/20 text-white hover:bg-white/10">
                                Learn More
                            </button>
</div>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto mt-20">
<div className="px-4 sm:px-6 flex items-end justify-between mb-8">
<div>
<p className="section-label text-indigo-500 mb-2">Just Dropped</p>
<h2 className="text-3xl font-medium tracking-tight">New Arrivals</h2>
</div>
<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-full border flex items-center justify-center hover:border-indigo-500 transition-all shadow-sm border-slate-200 bg-white text-slate-600 hover:text-indigo-600" id="arrivals-prev">
<iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border flex items-center justify-center hover:border-indigo-500 transition-all shadow-sm border-slate-200 bg-white text-slate-600 hover:text-indigo-600" id="arrivals-next">
<iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="carousel-fade-r px-4 sm:px-6">
<div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-5 pb-6" id="arrivals-carousel">
<div className="group flex flex-col cursor-pointer min-w-[260px] sm:min-w-[300px] snap-start card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-1 rounded-3xl overflow-hidden mb-4 aspect-[4/5] flex items-center justify-center p-8 border border-indigo-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute top-4 left-4 tag-pill px-3 py-1 rounded-full text-xs font-normal">New</div>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all z-10 opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400 hover:border-rose-200">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="px-1">
<p className="text-xs mb-1 text-slate-400">Apple Electronics</p>
<h3 className="text-sm font-medium mb-2 text-slate-900">MacBook Pro 16"</h3>
<span className="text-base font-medium text-slate-900">$3,499.00</span>
</div>
</div>
<div className="group flex flex-col cursor-pointer min-w-[260px] sm:min-w-[300px] snap-start card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-3 rounded-3xl overflow-hidden mb-4 aspect-[4/5] flex items-center justify-center p-8 border border-cyan-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 left-4 tag-pill px-3 py-1 rounded-full text-xs font-normal">New</div>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all z-10 opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400 hover:border-rose-200">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="px-1">
<p className="text-xs mb-1 text-slate-400">Apple Watches</p>
<h3 className="text-sm font-medium mb-2 text-slate-900">Watch Series 9 Ultra</h3>
<span className="text-base font-medium text-slate-900">$799.00</span>
</div>
</div>
<div className="group flex flex-col cursor-pointer min-w-[260px] sm:min-w-[300px] snap-start card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-5 rounded-3xl overflow-hidden mb-4 aspect-[4/5] flex items-center justify-center p-8 border border-orange-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute top-4 left-4 tag-pill px-3 py-1 rounded-full text-xs font-normal">New</div>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all z-10 opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400 hover:border-rose-200">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="px-1">
<p className="text-xs mb-1 text-slate-400">Sony Photography</p>
<h3 className="text-sm font-medium mb-2 text-slate-900">Sony Alpha a7 IV</h3>
<span className="text-base font-medium text-slate-900">$2,498.00</span>
</div>
</div>
<div className="group flex flex-col cursor-pointer min-w-[260px] sm:min-w-[300px] snap-start card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-4 rounded-3xl overflow-hidden mb-4 aspect-[4/5] flex items-center justify-center p-8 border border-emerald-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all z-10 opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400 hover:border-rose-200">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="px-1">
<p className="text-xs mb-1 text-slate-400">Accessories</p>
<h3 className="text-sm font-medium mb-2 text-slate-900">Leather Crossbody Bag</h3>
<span className="text-base font-medium text-slate-900">$145.00</span>
</div>
</div>
<div className="group flex flex-col cursor-pointer min-w-[260px] sm:min-w-[300px] snap-start card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-2 rounded-3xl overflow-hidden mb-4 aspect-[4/5] flex items-center justify-center p-8 border border-pink-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4 tag-pill px-3 py-1 rounded-full text-xs font-normal">New</div>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all z-10 opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400 hover:border-rose-200">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="px-1">
<p className="text-xs mb-1 text-slate-400">Watches</p>
<h3 className="text-sm font-medium mb-2 text-slate-900">Classic Gold Timepiece</h3>
<span className="text-base font-medium text-slate-900">$215.00</span>
</div>
</div>
<div className="group flex flex-col cursor-pointer min-w-[260px] sm:min-w-[300px] snap-start card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-6 rounded-3xl overflow-hidden mb-4 aspect-[4/5] flex items-center justify-center p-8 border border-purple-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 left-4 tag-pill px-3 py-1 rounded-full text-xs font-normal">New</div>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all z-10 opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400 hover:border-rose-200">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="px-1">
<p className="text-xs mb-1 text-slate-400">Bags</p>
<h3 className="text-sm font-medium mb-2 text-slate-900">Urban Backpack Pro</h3>
<span className="text-base font-medium text-slate-900">$65.00</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-4 sm:px-6 mt-20 mb-8">
<div className="flex items-end justify-between mb-8">
<div>
<p className="section-label text-amber-500 mb-2">Most Popular</p>
<h2 className="text-3xl font-medium tracking-tight">Best Sellers</h2>
</div>
<button className="hidden sm:flex items-center gap-1.5 text-sm font-normal text-slate-500 transition-colors hover:text-indigo-600" onclick="navigateTo('shop')">
                        View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
<div className="group flex flex-col cursor-pointer card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-1 rounded-2xl overflow-hidden mb-3 aspect-square flex items-center justify-center p-5 border border-indigo-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<button className="absolute top-3 right-3 w-8 h-8 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all z-10 opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400 hover:border-rose-200">
<iconify-icon className="text-sm" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<p className="text-xs mb-0.5 text-slate-400">Accessories</p>
<h3 className="text-sm font-medium mb-1.5 leading-snug line-clamp-1 text-slate-900">Aviator Sunglasses</h3>
<span className="text-sm font-medium text-slate-900">$89.00</span>
</div>
<div className="group flex flex-col cursor-pointer card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-2 rounded-2xl overflow-hidden mb-3 aspect-square flex items-center justify-center p-5 border border-pink-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute top-3 left-3 text-xs px-2 py-0.5 rounded-full font-normal bg-amber-400 text-white">Popular</div>
<button className="absolute top-3 right-3 w-8 h-8 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all z-10 opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400 hover:border-rose-200">
<iconify-icon className="text-sm" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<p className="text-xs mb-0.5 text-slate-400">Electronics</p>
<h3 className="text-sm font-medium mb-1.5 leading-snug line-clamp-1 text-slate-900">Smart Speaker Pro</h3>
<span className="text-sm font-medium text-slate-900">$199.00</span>
</div>
<div className="group flex flex-col cursor-pointer card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-3 rounded-2xl overflow-hidden mb-3 aspect-square flex items-center justify-center p-5 border border-cyan-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<button className="absolute top-3 right-3 w-8 h-8 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all z-10 opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400 hover:border-rose-200">
<iconify-icon className="text-sm" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<p className="text-xs mb-0.5 text-slate-400">Photography</p>
<h3 className="text-sm font-medium mb-1.5 leading-snug line-clamp-1 text-slate-900">Film Camera Kit</h3>
<span className="text-sm font-medium text-slate-900">$249.00</span>
</div>
<div className="group flex flex-col cursor-pointer card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-4 rounded-2xl overflow-hidden mb-3 aspect-square flex items-center justify-center p-5 border border-emerald-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 left-3 text-xs px-2 py-0.5 rounded-full font-normal bg-amber-400 text-white">Popular</div>
<button className="absolute top-3 right-3 w-8 h-8 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all z-10 opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400 hover:border-rose-200">
<iconify-icon className="text-sm" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<p className="text-xs mb-0.5 text-slate-400">Beauty</p>
<h3 className="text-sm font-medium mb-1.5 leading-snug line-clamp-1 text-slate-900">Signature Parfum</h3>
<span className="text-sm font-medium text-slate-900">$120.00</span>
</div>
<div className="group flex flex-col cursor-pointer card-hover hidden xl:flex" onclick="navigateTo('product')">
<div className="relative product-img-bg-5 rounded-2xl overflow-hidden mb-3 aspect-square flex items-center justify-center p-5 border border-orange-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1524532787116-e70228437bbe?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<button className="absolute top-3 right-3 w-8 h-8 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all z-10 opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400 hover:border-rose-200">
<iconify-icon className="text-sm" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<p className="text-xs mb-0.5 text-slate-400">Home</p>
<h3 className="text-sm font-medium mb-1.5 leading-snug line-clamp-1 text-slate-900">Minimal Desk Lamp</h3>
<span className="text-sm font-medium text-slate-900">$79.00</span>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-4 sm:px-6 mt-16 mb-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="flex items-center gap-4 p-5 border rounded-2xl shadow-sm bg-white border-slate-100">
<div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-indigo-50 text-indigo-600">
<iconify-icon className="text-xl" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Free Delivery</h3>
<p className="text-xs text-slate-500 mt-0.5">Orders over $150</p>
</div>
</div>
<div className="flex items-center gap-4 p-5 border rounded-2xl shadow-sm bg-white border-slate-100">
<div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-emerald-50 text-emerald-600">
<iconify-icon className="text-xl" icon="solar:refresh-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">30-Day Returns</h3>
<p className="text-xs text-slate-500 mt-0.5">Hassle-free</p>
</div>
</div>
<div className="flex items-center gap-4 p-5 border rounded-2xl shadow-sm bg-white border-slate-100">
<div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-amber-50 text-amber-600">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Authenticated</h3>
<p className="text-xs text-slate-500 mt-0.5">100% genuine</p>
</div>
</div>
<div className="flex items-center gap-4 p-5 border rounded-2xl shadow-sm bg-white border-slate-100">
<div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-rose-50 text-rose-600">
<iconify-icon className="text-xl" icon="solar:headphones-round-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">24/7 Support</h3>
<p className="text-xs text-slate-500 mt-0.5">Always here</p>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden max-w-[1440px] mx-auto px-4 sm:px-6 mt-8" id="page-shop">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<nav className="flex items-center gap-2 text-sm text-slate-500 mb-2">
<a className="transition-colors hover:text-indigo-600" href="#" onclick="navigateTo('home')">Home</a>
<iconify-icon className="text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="font-medium text-slate-900">Collections</span>
</nav>
<h1 className="text-3xl font-medium tracking-tight">All Collections</h1>
</div>
<div className="relative inline-block">
<button className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-normal transition-colors shadow-sm border-slate-200 text-slate-700 bg-white hover:bg-slate-50">
                        Sort by: Recommended <iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-8">
<aside className="w-full lg:w-60 flex-shrink-0 space-y-8">
<div>
<h3 className="text-sm font-medium mb-4 text-slate-900">Categories</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border rounded peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors border-slate-300"></div>
<iconify-icon className="absolute opacity-0 peer-checked:opacity-100 text-sm transition-opacity text-white" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm group-hover:text-slate-900 text-slate-600">Electronics (24)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border rounded peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors border-slate-300"></div>
<iconify-icon className="absolute opacity-0 peer-checked:opacity-100 text-sm transition-opacity text-white" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm group-hover:text-slate-900 text-slate-600">Footwear (18)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border rounded peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors border-slate-300"></div>
<iconify-icon className="absolute opacity-0 peer-checked:opacity-100 text-sm transition-opacity text-white" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm group-hover:text-slate-900 text-slate-600">Accessories (45)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border rounded peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors border-slate-300"></div>
<iconify-icon className="absolute opacity-0 peer-checked:opacity-100 text-sm transition-opacity text-white" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm group-hover:text-slate-900 text-slate-600">Home (12)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border rounded peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors border-slate-300"></div>
<iconify-icon className="absolute opacity-0 peer-checked:opacity-100 text-sm transition-opacity text-white" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm group-hover:text-slate-900 text-slate-600">Beauty (8)</span>
</label>
</div>
</div>
<div>
<h3 className="text-sm font-medium mb-4 text-slate-900">Price Range</h3>
<div className="space-y-4">
<div className="relative w-full h-1.5 rounded-full bg-slate-100">
<div className="absolute left-[20%] right-[30%] h-full rounded-full bg-indigo-600"></div>
<div className="absolute left-[20%] -top-1.5 w-4 h-4 border-2 rounded-full cursor-pointer shadow-sm bg-white border-indigo-600"></div>
<div className="absolute right-[30%] -top-1.5 w-4 h-4 border-2 rounded-full cursor-pointer shadow-sm bg-white border-indigo-600"></div>
</div>
<div className="flex items-center justify-between gap-4">
<input className="w-full text-center text-sm border rounded-lg py-1.5 focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-50 border-slate-200" type="text" value="$50"/>
<span className="text-slate-400">—</span>
<input className="w-full text-center text-sm border rounded-lg py-1.5 focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-50 border-slate-200" type="text" value="$500"/>
</div>
</div>
</div>
</aside>
<div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="group flex flex-col cursor-pointer card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-2 rounded-2xl overflow-hidden mb-4 aspect-square flex items-center justify-center p-6 border border-pink-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-rose-500 text-xs px-3 py-1 rounded-full text-white">Sale</div>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<p className="text-xs mb-1 text-slate-400">Footwear</p>
<h3 className="text-sm font-medium mb-2 line-clamp-1 text-slate-900">Nike Air Max Flyknit</h3>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-slate-900">$129.99</span>
<span className="text-xs line-through text-slate-400">$159.99</span>
</div>
</div>
<div className="group flex flex-col cursor-pointer card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-1 rounded-2xl overflow-hidden mb-4 aspect-square flex items-center justify-center p-6 border border-indigo-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<p className="text-xs mb-1 text-slate-400">Electronics</p>
<h3 className="text-sm font-medium mb-2 line-clamp-1 text-slate-900">MacBook Pro 16" M3</h3>
<span className="text-sm font-medium text-slate-900">$3,499.00</span>
</div>
<div className="group flex flex-col cursor-pointer card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-3 rounded-2xl overflow-hidden mb-4 aspect-square flex items-center justify-center p-6 border border-cyan-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-4 left-4 tag-pill px-3 py-1 rounded-full text-xs">New</div>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<p className="text-xs mb-1 text-slate-400">Watches</p>
<h3 className="text-sm font-medium mb-2 line-clamp-1 text-slate-900">Apple Watch Series 9</h3>
<span className="text-sm font-medium text-slate-900">$399.00</span>
</div>
<div className="group flex flex-col cursor-pointer card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-5 rounded-2xl overflow-hidden mb-4 aspect-square flex items-center justify-center p-6 border border-orange-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<p className="text-xs mb-1 text-slate-400">Photography</p>
<h3 className="text-sm font-medium mb-2 line-clamp-1 text-slate-900">Vintage Film Camera</h3>
<span className="text-sm font-medium text-slate-900">$249.00</span>
</div>
<div className="group flex flex-col cursor-pointer card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-6 rounded-2xl overflow-hidden mb-4 aspect-square flex items-center justify-center p-6 border border-purple-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<p className="text-xs mb-1 text-slate-400">Accessories</p>
<h3 className="text-sm font-medium mb-2 line-clamp-1 text-slate-900">Aviator Sunglasses</h3>
<span className="text-sm font-medium text-slate-900">$89.00</span>
</div>
<div className="group flex flex-col cursor-pointer card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-4 rounded-2xl overflow-hidden mb-4 aspect-square flex items-center justify-center p-6 border border-emerald-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 tag-pill px-3 py-1 rounded-full text-xs">New</div>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<p className="text-xs mb-1 text-slate-400">Home</p>
<h3 className="text-sm font-medium mb-2 line-clamp-1 text-slate-900">Modern Lounge Chair</h3>
<span className="text-sm font-medium text-slate-900">$399.00</span>
</div>
<div className="group flex flex-col cursor-pointer card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-5 rounded-2xl overflow-hidden mb-4 aspect-square flex items-center justify-center p-6 border border-orange-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<p className="text-xs mb-1 text-slate-400">Beauty</p>
<h3 className="text-sm font-medium mb-2 line-clamp-1 text-slate-900">Signature Parfum</h3>
<span className="text-sm font-medium text-slate-900">$120.00</span>
</div>
<div className="group flex flex-col cursor-pointer card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-2 rounded-2xl overflow-hidden mb-4 aspect-square flex items-center justify-center p-6 border border-pink-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-rose-500 text-xs px-3 py-1 rounded-full text-white">Sale</div>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<p className="text-xs mb-1 text-slate-400">Bags</p>
<h3 className="text-sm font-medium mb-2 line-clamp-1 text-slate-900">Urban Backpack</h3>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-slate-900">$65.00</span>
<span className="text-xs line-through text-slate-400">$85.00</span>
</div>
</div>
<div className="group flex flex-col cursor-pointer card-hover" onclick="navigateTo('product')">
<div className="relative product-img-bg-1 rounded-2xl overflow-hidden mb-4 aspect-square flex items-center justify-center p-6 border border-indigo-100">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<button className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-sm transition-all opacity-0 group-hover:opacity-100 bg-white border-slate-200 text-slate-400">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<p className="text-xs mb-1 text-slate-400">Electronics</p>
<h3 className="text-sm font-medium mb-2 line-clamp-1 text-slate-900">Smart Speaker Pro</h3>
<span className="text-sm font-medium text-slate-900">$199.00</span>
</div>
</div>
</div>
</div>

<div className="page-view hidden max-w-[1440px] mx-auto px-4 sm:px-6 mt-8" id="page-product">
<nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
<a className="transition-colors hover:text-indigo-600" href="#" onclick="navigateTo('home')">Home</a>
<iconify-icon className="text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
<a className="transition-colors hover:text-indigo-600" href="#" onclick="navigateTo('shop')">Collections</a>
<iconify-icon className="text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="font-medium text-slate-900">Nike Air Max Flyknit</span>
</nav>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
<div className="space-y-4">
<div className="product-img-bg-2 border rounded-[2rem] overflow-hidden aspect-square flex items-center justify-center p-10 relative border-pink-100">
<img className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<button className="absolute top-6 right-6 w-12 h-12 border rounded-full flex items-center justify-center hover:text-rose-500 shadow-md transition-all bg-white border-slate-200 text-slate-400 hover:border-rose-200">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-4 gap-3">
<div className="product-img-bg-2 border-2 rounded-2xl aspect-square flex items-center justify-center p-2 cursor-pointer border-indigo-600">
<img className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="border rounded-2xl aspect-square flex items-center justify-center p-2 cursor-pointer transition-colors bg-slate-50 border-slate-200 hover:border-indigo-300">
<img className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="border rounded-2xl aspect-square flex items-center justify-center p-2 cursor-pointer transition-colors bg-slate-50 border-slate-200 hover:border-indigo-300">
<img className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="border rounded-2xl aspect-square flex items-center justify-center cursor-pointer transition-colors text-slate-500 font-medium text-sm bg-slate-100 border-slate-200 hover:bg-slate-200">+3</div>
</div>
</div>
<div className="flex flex-col">
<p className="section-label text-indigo-500 mb-3">Nike Footwear</p>
<h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-tight mb-4 text-slate-900">Nike Air Max <br/><em>Flyknit Edition</em></h1>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center gap-0.5">
<iconify-icon className="text-lg text-amber-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-amber-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-amber-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-amber-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-amber-300" icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-500 underline cursor-pointer hover:text-slate-900">128 Reviews</span>
</div>
<div className="flex items-end gap-3 mb-6">
<span className="text-4xl font-medium tracking-tight text-slate-900">$129.99</span>
<span className="text-lg line-through pb-0.5 text-slate-400">$159.99</span>
<span className="text-xs px-2.5 py-1 rounded-full font-normal border mb-0.5 bg-rose-50 text-rose-600 border-rose-100">Save $30</span>
</div>
<p className="text-sm leading-relaxed mb-8 text-slate-600">Experience the perfect blend of performance and style. Featuring a breathable Flyknit upper and responsive Air Max cushioning, designed for all-day comfort and iconic looks.</p>
<div className="space-y-6 mb-8">
<div>
<span className="text-sm font-medium mb-3 block text-slate-900">Color: <span className="text-slate-500 font-normal">Crimson Red</span></span>
<div className="flex items-center gap-3">
<label className="cursor-pointer"><input checked="" className="peer sr-only" name="color" type="radio"/><div className="w-9 h-9 rounded-full border-2 border-transparent peer-checked:border-indigo-600 p-0.5"><div className="w-full h-full rounded-full bg-rose-500"></div></div></label>
<label className="cursor-pointer"><input className="peer sr-only" name="color" type="radio"/><div className="w-9 h-9 rounded-full border-2 border-transparent peer-checked:border-indigo-600 p-0.5"><div className="w-full h-full rounded-full bg-slate-900"></div></div></label>
<label className="cursor-pointer"><input className="peer sr-only" name="color" type="radio"/><div className="w-9 h-9 rounded-full border-2 border-transparent peer-checked:border-indigo-600 p-0.5"><div className="w-full h-full rounded-full border bg-slate-100 border-slate-300"></div></div></label>
</div>
</div>
<div>
<div className="flex justify-between mb-3">
<span className="text-sm font-medium text-slate-900">Size (US)</span>
<a className="text-sm text-indigo-600 hover:text-indigo-800" href="#">Size Guide</a>
</div>
<div className="grid grid-cols-5 gap-2">
<label className="cursor-pointer"><input className="peer sr-only" name="size" type="radio"/><div className="py-2 text-center text-xs font-medium border rounded-xl peer-checked:border-indigo-600 peer-checked:bg-indigo-50 peer-checked:text-indigo-600 transition-all border-slate-200 hover:border-slate-300">7</div></label>
<label className="cursor-pointer"><input checked="" className="peer sr-only" name="size" type="radio"/><div className="py-2 text-center text-xs font-medium border rounded-xl peer-checked:border-indigo-600 peer-checked:bg-indigo-50 peer-checked:text-indigo-600 transition-all border-slate-200 hover:border-slate-300">8</div></label>
<label className="cursor-pointer"><input className="peer sr-only" name="size" type="radio"/><div className="py-2 text-center text-xs font-medium border rounded-xl peer-checked:border-indigo-600 peer-checked:bg-indigo-50 peer-checked:text-indigo-600 transition-all border-slate-200 hover:border-slate-300">9</div></label>
<label className="cursor-pointer"><input className="peer sr-only" disabled="" name="size" type="radio"/><div className="py-2 text-center text-xs font-medium border rounded-xl cursor-not-allowed border-slate-100 bg-slate-50 text-slate-300">10</div></label>
<label className="cursor-pointer"><input className="peer sr-only" name="size" type="radio"/><div className="py-2 text-center text-xs font-medium border rounded-xl peer-checked:border-indigo-600 peer-checked:bg-indigo-50 peer-checked:text-indigo-600 transition-all border-slate-200 hover:border-slate-300">11</div></label>
</div>
</div>
</div>
<div className="flex items-center gap-4 border-t pt-8 border-slate-100">
<div className="flex items-center border rounded-full h-13 px-2 shadow-sm border-slate-200 bg-white">
<button className="w-10 h-10 flex items-center justify-center text-slate-500 rounded-full transition-colors hover:text-slate-900 hover:bg-slate-100">
<iconify-icon className="text-sm" icon="solar:minus-linear"></iconify-icon>
</button>
<span className="w-8 text-center text-sm font-medium text-slate-900">1</span>
<button className="w-10 h-10 flex items-center justify-center text-slate-500 rounded-full transition-colors hover:text-slate-900 hover:bg-slate-100">
<iconify-icon className="text-sm" icon="solar:add-linear"></iconify-icon>
</button>
</div>
<button className="flex-1 h-13 rounded-full text-sm font-medium transition-colors shadow-lg flex items-center justify-center gap-2 glow-indigo bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-600/25" onclick="navigateTo('cart')" style={{height: '52px'}}>
<iconify-icon className="text-xl" icon="solar:cart-plus-linear"></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>
</div>
</div>

<div className="page-view hidden max-w-[1440px] mx-auto px-4 sm:px-6 mt-8" id="page-cart">
<h1 className="text-3xl font-medium tracking-tight mb-8">Shopping Cart</h1>
<div className="flex flex-col lg:flex-row gap-12">
<div className="flex-1">
<div className="border rounded-3xl p-6 lg:p-8 space-y-6 shadow-sm bg-white border-slate-200">
<div className="flex gap-6 pb-6 border-b border-slate-100">
<div className="w-24 h-24 product-img-bg-2 border rounded-2xl flex items-center justify-center p-2 flex-shrink-0 border-pink-100">
<img className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex-1 flex flex-col justify-between">
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium mb-1 text-slate-900">Nike Air Max Flyknit</h3>
<p className="text-xs text-slate-400">Size: 8 · Color: Crimson Red</p>
</div>
<button className="hover:text-rose-500 transition-colors text-slate-400">
<iconify-icon className="text-xl" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center border rounded-full h-8 px-1 border-slate-200 bg-white">
<button className="w-6 h-6 flex items-center justify-center text-slate-500 rounded-full transition-colors hover:text-slate-900 hover:bg-slate-100">
<iconify-icon className="text-xs" icon="solar:minus-linear"></iconify-icon>
</button>
<span className="w-6 text-center text-xs font-medium text-slate-900">1</span>
<button className="w-6 h-6 flex items-center justify-center text-slate-500 rounded-full transition-colors hover:text-slate-900 hover:bg-slate-100">
<iconify-icon className="text-xs" icon="solar:add-linear"></iconify-icon>
</button>
</div>
<span className="text-sm font-medium text-slate-900">$129.99</span>
</div>
</div>
</div>
<div className="flex gap-6">
<div className="w-24 h-24 product-img-bg-4 border rounded-2xl flex items-center justify-center p-2 flex-shrink-0 border-emerald-100">
<img className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="flex-1 flex flex-col justify-between">
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium mb-1 text-slate-900">Canvas Tote Bag</h3>
<p className="text-xs text-slate-400">Color: Natural</p>
</div>
<button className="hover:text-rose-500 transition-colors text-slate-400">
<iconify-icon className="text-xl" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center border rounded-full h-8 px-1 border-slate-200 bg-white">
<button className="w-6 h-6 flex items-center justify-center text-slate-500 rounded-full transition-colors hover:text-slate-900 hover:bg-slate-100">
<iconify-icon className="text-xs" icon="solar:minus-linear"></iconify-icon>
</button>
<span className="w-6 text-center text-xs font-medium text-slate-900">2</span>
<button className="w-6 h-6 flex items-center justify-center text-slate-500 rounded-full transition-colors hover:text-slate-900 hover:bg-slate-100">
<iconify-icon className="text-xs" icon="solar:add-linear"></iconify-icon>
</button>
</div>
<span className="text-sm font-medium text-slate-900">$68.00</span>
</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between p-4 border rounded-2xl shadow-sm bg-white border-slate-200">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl flex items-center justify-center bg-indigo-50 text-indigo-600">
<iconify-icon className="text-lg" icon="solar:box-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Gift Wrapping</h4>
<p className="text-xs text-slate-400">Premium box &amp; note</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-10 h-5 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 bg-slate-200"></div>
</label>
</div>
</div>
<div className="w-full lg:w-[400px] flex-shrink-0">
<div className="border rounded-3xl p-6 lg:p-8 sticky top-24 shadow-sm bg-white border-slate-200">
<h2 className="text-xl font-medium tracking-tight mb-6">Order Summary</h2>
<div className="space-y-4 mb-6 text-sm">
<div className="flex justify-between text-slate-600"><span>Subtotal</span><span className="font-medium text-slate-900">$197.99</span></div>
<div className="flex justify-between text-slate-600"><span>Shipping</span><span className="font-medium text-emerald-600">Free</span></div>
<div className="flex justify-between text-slate-600"><span>Tax</span><span className="font-medium text-slate-900">$15.84</span></div>
</div>
<div className="border-t pt-4 mb-6 flex justify-between items-end border-slate-100">
<span className="text-sm font-medium text-slate-900">Total</span>
<span className="text-2xl tracking-tight font-medium text-slate-900">$213.83</span>
</div>
<div className="mb-6 relative flex items-center">
<input className="w-full border rounded-xl pl-4 pr-20 py-2.5 text-sm placeholder:text-slate-400 focus:bg-white focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-50 transition-all bg-slate-50 border-slate-200" placeholder="Promo code" type="text"/>
<button className="absolute right-2 text-xs font-medium px-3 py-1.5 rounded-lg text-indigo-600 hover:text-indigo-800">Apply</button>
</div>
<button className="w-full h-12 rounded-full text-sm font-medium transition-colors shadow-lg flex items-center justify-center gap-2 bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-600/20">
                            Proceed to Checkout <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="page-view hidden max-w-md mx-auto px-4 mt-20 mb-32" id="page-auth">
<div className="border rounded-3xl p-8 shadow-sm bg-white border-slate-200">
<div className="text-center mb-8">
<div className="font-display text-2xl font-medium tracking-tight mb-1">Welcome to LUXE<span className="text-gold">.</span></div>
<p className="text-sm text-slate-500">Sign in to your account</p>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium mb-1.5 text-slate-700">Email Address</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3.5 text-lg text-slate-400" icon="solar:letter-linear"></iconify-icon>
<input className="w-full border rounded-xl pl-10 pr-4 py-2.5 text-sm placeholder:text-slate-400 focus:border-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-50 transition-all bg-white border-slate-200" placeholder="you@example.com" type="email"/>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-1.5">
<label className="block text-xs font-medium text-slate-700">Password</label>
<a className="text-xs font-medium text-indigo-600 hover:text-indigo-800" href="#">Forgot?</a>
</div>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3.5 text-lg text-slate-400" icon="solar:lock-password-linear"></iconify-icon>
<input className="w-full border rounded-xl pl-10 pr-4 py-2.5 text-sm placeholder:text-slate-400 focus:border-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-50 transition-all bg-white border-slate-200" placeholder="••••••••" type="password"/>
</div>
</div>
<label className="flex items-center gap-3 cursor-pointer group pt-1 pb-3">
<div className="relative flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border rounded peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors border-slate-300"></div>
<iconify-icon className="absolute opacity-0 peer-checked:opacity-100 text-[10px] transition-opacity text-white" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-600">Remember my device</span>
</label>
<button className="w-full h-11 rounded-xl text-sm font-medium transition-colors shadow-sm bg-indigo-600 text-white hover:bg-indigo-700" type="button">Sign In</button>
</form>
<p className="mt-6 text-xs text-slate-500 text-center">Don't have an account? <a className="font-medium hover:underline text-indigo-600" href="#">Create one</a></p>
</div>
</div>
</main>

<footer className="pt-16 pb-8 mt-20 border-t bg-slate-950 text-slate-400 border-slate-900">
<div className="max-w-[1440px] mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-5">
<span className="font-display text-2xl font-medium text-white">LUXE</span>
<span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
</div>
<p className="text-sm leading-relaxed mb-6 max-w-xs">Curating the finest in modern luxury. Premium products for those who demand the extraordinary.</p>
<div className="flex gap-3">
<a className="w-9 h-9 rounded-full border flex items-center justify-center transition-all bg-slate-900 border-slate-800 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white" href="#">
<iconify-icon className="text-base" icon="solar:link-linear"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full border flex items-center justify-center transition-all bg-slate-900 border-slate-800 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white" href="#">
<iconify-icon className="text-base" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full border flex items-center justify-center transition-all bg-slate-900 border-slate-800 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white" href="#">
<iconify-icon className="text-base" icon="solar:letter-opened-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-xs font-medium mb-5 section-label text-white">Explore</h4>
<ul className="space-y-3 text-sm">
<li><a className="transition-colors hover:text-indigo-400" href="#" onclick="navigateTo('shop')">All Collections</a></li>
<li><a className="transition-colors hover:text-indigo-400" href="#">New Arrivals</a></li>
<li><a className="transition-colors hover:text-indigo-400" href="#">Flash Sale</a></li>
<li><a className="transition-colors flex items-center gap-2 hover:text-indigo-400" href="#">LUXE Gold <iconify-icon className="text-gold text-sm" icon="solar:crown-linear"></iconify-icon></a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium mb-5 section-label text-white">Support</h4>
<ul className="space-y-3 text-sm">
<li><a className="transition-colors hover:text-indigo-400" href="#">Help Center</a></li>
<li><a className="transition-colors hover:text-indigo-400" href="#">Track Order</a></li>
<li><a className="transition-colors hover:text-indigo-400" href="#">Returns</a></li>
<li><a className="transition-colors hover:text-indigo-400" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium mb-5 section-label text-white">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-slate-500 shrink-0 mt-0.5" icon="solar:map-point-linear"></iconify-icon><span>123 Mayfair Lane,<br/>London W1K 1AA</span></li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-slate-500 shrink-0" icon="solar:letter-linear"></iconify-icon><a className="transition-colors hover:text-indigo-400" href="mailto:hello@luxe.com">hello@luxe.com</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 border-slate-900">
<p className="text-xs text-slate-600">© 2024 LUXE Inc. All rights reserved.</p>
<div className="flex items-center gap-3 text-slate-600">
<iconify-icon className="text-2xl" icon="solar:card-linear"></iconify-icon>
<iconify-icon className="text-2xl" icon="solar:shield-minimalistic-linear"></iconify-icon>
<iconify-icon className="text-2xl" icon="solar:lock-password-linear"></iconify-icon>
</div>
</div>
</div>
</footer>


    </>
  );
}
