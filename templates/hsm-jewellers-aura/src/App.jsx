import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
50: '#fdf2f4',
100: '#fce7ea',
800: '#882435', // PCJ inspired deep maroon
900: '#6d1825',
},
gold: {
400: '#dec378',
500: '#c5a059', // Classic Gold
600: '#b08d45',
},
silver: {
400: '#e2e8f0',
500: '#94a3b8',
600: '#64748b',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-neutral-100 border-b border-neutral-200 text-xs text-neutral-600 hidden md:block">
<div className="container mx-auto px-4 h-9 flex justify-between items-center">
<div className="flex items-center gap-6">
<span className="flex items-center gap-1.5 hover:text-brand-800 cursor-pointer transition-colors">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
                    +91 1234 567 890
                </span>
<span className="flex items-center gap-1.5 hover:text-brand-800 cursor-pointer transition-colors">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
                    care@hsmjewellers.com
                </span>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-brand-800 transition-colors" href="#">Store Locator</a>
<a className="hover:text-brand-800 transition-colors" href="#">Franchise Enquiry</a>
<a className="hover:text-brand-800 transition-colors" href="#">Blog</a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white shadow-sm">
<div className="container mx-auto px-4 py-4 md:py-5">
<div className="flex items-center justify-between gap-4 md:gap-8">

<button className="md:hidden text-neutral-800">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>

<a className="flex-shrink-0" href="#">
<div className="flex flex-col items-center md:items-start">
<h1 className="font-serif text-2xl md:text-3xl font-bold text-brand-800 tracking-tight">Hsm<span className="text-gold-500">.</span></h1>
<span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 hidden md:block">Jewellers</span>
</div>
</a>

<div className="hidden md:flex flex-1 max-w-xl relative">
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-full py-2.5 pl-5 pr-12 text-sm focus:outline-none focus:border-brand-800 focus:ring-1 focus:ring-brand-800 transition-all placeholder:text-neutral-400" placeholder="Search for Gold, Silver, Coins..." type="text"/>
<button className="absolute right-1 top-1 h-8 w-8 bg-brand-800 rounded-full text-white flex items-center justify-center hover:bg-brand-900 transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="16"></span>
</button>
</div>

<div className="flex items-center gap-4 md:gap-6">
<button className="md:hidden text-neutral-800">
<span className="iconify" data-icon="lucide:search" data-width="22"></span>
</button>
<a className="flex flex-col items-center gap-1 group" href="#">
<span className="iconify text-neutral-700 group-hover:text-brand-800 transition-colors" data-icon="lucide:user" data-width="22"></span>
<span className="text-[10px] uppercase font-medium hidden md:block group-hover:text-brand-800">Account</span>
</a>
<a className="flex flex-col items-center gap-1 group relative" href="#">
<span className="iconify text-neutral-700 group-hover:text-brand-800 transition-colors" data-icon="lucide:heart" data-width="22"></span>
<span className="text-[10px] uppercase font-medium hidden md:block group-hover:text-brand-800">Wishlist</span>
</a>
<a className="flex flex-col items-center gap-1 group relative" href="#">
<div className="relative">
<span className="iconify text-neutral-700 group-hover:text-brand-800 transition-colors" data-icon="lucide:shopping-bag" data-width="22"></span>
<span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold-500 rounded-full text-[10px] flex items-center justify-center text-white font-medium">0</span>
</div>
<span className="text-[10px] uppercase font-medium hidden md:block group-hover:text-brand-800">Cart</span>
</a>
</div>
</div>
</div>

<nav className="hidden md:block border-t border-neutral-100 bg-white">
<div className="container mx-auto px-4">
<ul className="flex items-center justify-center gap-8 py-3.5">
<li><a className="text-xs uppercase font-semibold text-brand-800 tracking-wide hover:text-gold-600 transition-colors" href="#">New Arrivals</a></li>
<li><a className="text-xs uppercase font-medium text-neutral-700 hover:text-brand-800 transition-colors tracking-wide" href="#">Rings</a></li>
<li><a className="text-xs uppercase font-medium text-neutral-700 hover:text-brand-800 transition-colors tracking-wide" href="#">Earrings</a></li>
<li><a className="text-xs uppercase font-medium text-neutral-700 hover:text-brand-800 transition-colors tracking-wide" href="#">Pendants</a></li>
<li><a className="text-xs uppercase font-medium text-neutral-700 hover:text-brand-800 transition-colors tracking-wide" href="#">Bangles</a></li>
<li><a className="text-xs uppercase font-medium text-neutral-700 hover:text-brand-800 transition-colors tracking-wide" href="#">Gold</a></li>
<li><a className="text-xs uppercase font-medium text-neutral-700 hover:text-brand-800 transition-colors tracking-wide" href="#">Silver</a></li>
<li><a className="text-xs uppercase font-medium text-neutral-700 hover:text-brand-800 transition-colors tracking-wide" href="#">Coins</a></li>
<li><a className="text-xs uppercase font-medium text-neutral-700 hover:text-brand-800 transition-colors tracking-wide" href="#">Gifts</a></li>
<li><a className="text-xs uppercase font-medium text-red-600 hover:text-red-700 transition-colors tracking-wide" href="#">Sale</a></li>
</ul>
</div>
</nav>
</header>

<section className="relative w-full h-[300px] md:h-[550px] overflow-hidden bg-neutral-100 group">

<div className="absolute inset-0 w-full h-full">
<img alt="Jewellery Model" className="w-full h-full object-cover object-[center_25%]" src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&amp;w=2075&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-900/50 to-transparent"></div>
</div>

<div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
<div className="max-w-xl space-y-4 md:space-y-6 animate-fade-in">
<span className="inline-block px-3 py-1 bg-white/20 backdrop-blur text-white text-[10px] font-medium tracking-widest uppercase border border-white/30">Hsm Exclusive</span>
<h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-tight">
                    Timeless <br/><span className="text-gold-400 italic">Elegance</span>
</h2>
<p className="text-neutral-100 text-sm md:text-base font-light max-w-md leading-relaxed">
                    Discover our exquisite collection of handcrafted gold and silver jewellery, designed to celebrate life's precious moments.
                </p>
<div className="pt-2">
<a className="inline-flex items-center justify-center px-8 py-3 bg-brand-800 hover:bg-brand-900 text-white text-sm font-medium tracking-wide transition-all rounded-sm shadow-lg hover:shadow-xl" href="#">
                        Shop Collection
                    </a>
</div>
</div>
</div>

<button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white text-white hover:text-brand-800 backdrop-blur rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
<span className="iconify" data-icon="lucide:chevron-left" data-width="20"></span>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white text-white hover:text-brand-800 backdrop-blur rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
<span className="iconify" data-icon="lucide:chevron-right" data-width="20"></span>
</button>
</section>

<section className="py-12 md:py-16 bg-white">
<div className="container mx-auto px-4">
<div className="text-center mb-10">
<h3 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-2">Shop By Category</h3>
<div className="w-16 h-0.5 bg-gold-500 mx-auto"></div>
</div>
<div className="flex flex-wrap justify-center gap-6 md:gap-10">

<a className="group flex flex-col items-center gap-3" href="#">
<div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-neutral-200 p-1 group-hover:border-gold-500 transition-colors">
<img alt="Rings" className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
<span className="text-xs font-medium uppercase tracking-wide text-neutral-600 group-hover:text-brand-800">Rings</span>
</a>
<a className="group flex flex-col items-center gap-3" href="#">
<div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-neutral-200 p-1 group-hover:border-gold-500 transition-colors">
<img alt="Earrings" className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1635767798638-3e2523422e55?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
<span className="text-xs font-medium uppercase tracking-wide text-neutral-600 group-hover:text-brand-800">Earrings</span>
</a>
<a className="group flex flex-col items-center gap-3" href="#">
<div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-neutral-200 p-1 group-hover:border-gold-500 transition-colors">
<img alt="Necklaces" className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
<span className="text-xs font-medium uppercase tracking-wide text-neutral-600 group-hover:text-brand-800">Necklaces</span>
</a>
<a className="group flex flex-col items-center gap-3" href="#">
<div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-neutral-200 p-1 group-hover:border-gold-500 transition-colors">
<img alt="Bangles" className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
<span className="text-xs font-medium uppercase tracking-wide text-neutral-600 group-hover:text-brand-800">Bangles</span>
</a>
<a className="group flex flex-col items-center gap-3" href="#">
<div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-neutral-200 p-1 group-hover:border-gold-500 transition-colors">
<img alt="Gold Chains" className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
<span className="text-xs font-medium uppercase tracking-wide text-neutral-600 group-hover:text-brand-800">Chains</span>
</a>
<a className="group flex flex-col items-center gap-3" href="#">
<div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-neutral-200 p-1 group-hover:border-gold-500 transition-colors">
<img alt="Pendants" className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
<span className="text-xs font-medium uppercase tracking-wide text-neutral-600 group-hover:text-brand-800">Pendants</span>
</a>
</div>
</div>
</section>

<section className="py-8 bg-neutral-50">
<div className="container mx-auto px-4">
<div className="grid md:grid-cols-2 gap-4">

<div className="relative h-[250px] md:h-[300px] overflow-hidden group">
<img alt="Silver Collection" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1630019852942-f89202989a51?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h4 className="text-white font-serif text-2xl mb-1">Sterling Silver</h4>
<p className="text-white/80 text-sm mb-4">Pure shine, everyday elegance</p>
<a className="inline-block text-xs font-semibold uppercase tracking-wider text-white border-b border-white hover:text-gold-400 hover:border-gold-400 transition-colors pb-1" href="#">Shop Silver</a>
</div>
</div>

<div className="relative h-[250px] md:h-[300px] overflow-hidden group">
<img alt="Gold Collection" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h4 className="text-white font-serif text-2xl mb-1">Wedding Collection</h4>
<p className="text-white/80 text-sm mb-4">Make your special day shine</p>
<a className="inline-block text-xs font-semibold uppercase tracking-wider text-white border-b border-white hover:text-gold-400 hover:border-gold-400 transition-colors pb-1" href="#">Shop Wedding</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="container mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
<div className="text-center md:text-left w-full md:w-auto">
<h3 className="font-serif text-2xl md:text-3xl text-neutral-900">Trending Now</h3>
<p className="text-neutral-500 text-sm mt-1">Our most loved designs this season</p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-9 h-9 border border-neutral-200 rounded-full flex items-center justify-center text-neutral-500 hover:bg-brand-800 hover:border-brand-800 hover:text-white transition-all">
<span className="iconify" data-icon="lucide:arrow-left" data-width="16"></span>
</button>
<button className="w-9 h-9 border border-neutral-200 rounded-full flex items-center justify-center text-neutral-500 hover:bg-brand-800 hover:border-brand-800 hover:text-white transition-all">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

<div className="group">
<div className="relative overflow-hidden bg-neutral-50 mb-3">
<img alt="Gold Ring" className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1596944924616-b699b244d216?auto=format&amp;fit=crop&amp;q=80&amp;w=500&amp;h=500"/>
<div className="absolute top-2 left-2 bg-brand-800 text-white text-[10px] font-semibold px-2 py-1 uppercase tracking-wide">New</div>
<div className="absolute inset-x-0 bottom-0 p-3 flex justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur">
<button className="w-full bg-brand-800 text-white text-xs font-medium py-2 uppercase tracking-wide hover:bg-brand-900 transition-colors">Add to Cart</button>
</div>
</div>
<div className="space-y-1">
<h4 className="text-sm font-medium text-neutral-800 line-clamp-1 group-hover:text-brand-800 transition-colors">22K Gold Floral Ring</h4>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-neutral-900">₹24,500</span>
<span className="text-xs text-neutral-400 line-through">₹26,900</span>
</div>
</div>
</div>

<div className="group">
<div className="relative overflow-hidden bg-neutral-50 mb-3">
<img alt="Silver Earrings" className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&amp;fit=crop&amp;q=80&amp;w=500&amp;h=500"/>
<div className="absolute inset-x-0 bottom-0 p-3 flex justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur">
<button className="w-full bg-brand-800 text-white text-xs font-medium py-2 uppercase tracking-wide hover:bg-brand-900 transition-colors">Add to Cart</button>
</div>
</div>
<div className="space-y-1">
<h4 className="text-sm font-medium text-neutral-800 line-clamp-1 group-hover:text-brand-800 transition-colors">Silver Oxidised Earrings</h4>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-neutral-900">₹4,500</span>
</div>
</div>
</div>

<div className="group">
<div className="relative overflow-hidden bg-neutral-50 mb-3">
<img alt="Gold Necklace" className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&amp;fit=crop&amp;q=80&amp;w=500&amp;h=500"/>
<div className="absolute top-2 left-2 bg-neutral-800 text-white text-[10px] font-semibold px-2 py-1 uppercase tracking-wide">Best Seller</div>
<div className="absolute inset-x-0 bottom-0 p-3 flex justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur">
<button className="w-full bg-brand-800 text-white text-xs font-medium py-2 uppercase tracking-wide hover:bg-brand-900 transition-colors">Add to Cart</button>
</div>
</div>
<div className="space-y-1">
<h4 className="text-sm font-medium text-neutral-800 line-clamp-1 group-hover:text-brand-800 transition-colors">Antique Gold Necklace</h4>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-neutral-900">₹1,25,000</span>
</div>
</div>
</div>

<div className="group">
<div className="relative overflow-hidden bg-neutral-50 mb-3">
<img alt="Bangle" className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1589128771245-129a63327618?auto=format&amp;fit=crop&amp;q=80&amp;w=500&amp;h=500"/>
<div className="absolute inset-x-0 bottom-0 p-3 flex justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur">
<button className="w-full bg-brand-800 text-white text-xs font-medium py-2 uppercase tracking-wide hover:bg-brand-900 transition-colors">Add to Cart</button>
</div>
</div>
<div className="space-y-1">
<h4 className="text-sm font-medium text-neutral-800 line-clamp-1 group-hover:text-brand-800 transition-colors">Traditional Gold Bangle</h4>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-neutral-900">₹68,000</span>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-block px-8 py-2.5 border border-neutral-300 text-neutral-700 text-xs font-semibold uppercase tracking-widest hover:border-brand-800 hover:text-brand-800 transition-colors" href="#">
                    View All Products
                </a>
</div>
</div>
</section>

<section className="py-12 bg-brand-50 border-t border-brand-100">
<div className="container mx-auto px-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-800 shadow-sm mb-1">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="24"></span>
</div>
<div>
<h5 className="font-serif text-sm font-semibold text-neutral-900">100% Certified</h5>
<p className="text-xs text-neutral-500 mt-1">Hallmarked Gold &amp; Silver</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-800 shadow-sm mb-1">
<span className="iconify" data-icon="lucide:refresh-cw" data-width="24"></span>
</div>
<div>
<h5 className="font-serif text-sm font-semibold text-neutral-900">Lifetime Exchange</h5>
<p className="text-xs text-neutral-500 mt-1">Exchange your old jewellery anytime</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-800 shadow-sm mb-1">
<span className="iconify" data-icon="lucide:truck" data-width="24"></span>
</div>
<div>
<h5 className="font-serif text-sm font-semibold text-neutral-900">Insured Shipping</h5>
<p className="text-xs text-neutral-500 mt-1">Secure delivery to your doorstep</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-800 shadow-sm mb-1">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<div>
<h5 className="font-serif text-sm font-semibold text-neutral-900">Transparent Pricing</h5>
<p className="text-xs text-neutral-500 mt-1">Best market rates assured</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-white pt-16 pb-8">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<h5 className="font-serif text-xl font-medium mb-4">Hsm Jewellers</h5>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Crafting timeless elegance since 1990. Hsm Jewellers represents the finest in traditional and contemporary gold and silver jewellery.
                    </p>
<div className="flex gap-4 pt-2">
<a className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-brand-800 transition-colors" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="16"></span>
</a>
<a className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-brand-800 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="16"></span>
</a>
<a className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-brand-800 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="16"></span>
</a>
</div>
</div>

<div>
<h6 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gold-500">Information</h6>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Store Locator</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>

<div>
<h6 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gold-500">Policies</h6>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Shipping Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Returns &amp; Exchange</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gold Scheme</a></li>
</ul>
</div>

<div>
<h6 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gold-500">Stay Updated</h6>
<p className="text-neutral-400 text-sm mb-4">Subscribe to receive exclusive offers and latest news.</p>
<form className="space-y-2">
<input className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-gold-500 transition-colors" placeholder="Your Email Address" type="email"/>
<button className="w-full bg-gold-500 hover:bg-gold-600 text-neutral-900 font-semibold text-sm py-2.5 rounded transition-colors uppercase tracking-wide">
                            Subscribe
                        </button>
</form>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
<p>© 2024 Hsm Jewellers. All rights reserved.</p>
<div className="flex items-center gap-4">
<span>Payment Methods:</span>
<span className="iconify" data-icon="lucide:credit-card" data-width="20"></span>
<span className="iconify" data-icon="lucide:wallet" data-width="20"></span>
</div>
</div>
</div>
</footer>

    </>
  );
}
