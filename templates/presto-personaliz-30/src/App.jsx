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
rose: {
50: '#fff1f2',
100: '#ffe4e6',
200: '#fecdd3',
300: '#fda4af',
400: '#fb7185',
500: '#f43f5e', // Vibrant Pink
600: '#e11d48',
800: '#9f1239',
900: '#881337', // Deep Wine
950: '#4c0519', // Text Dark
},
gold: {
100: '#fbf5eb',
200: '#f3e6cd',
300: '#e6cc9f',
400: '#d9b072',
500: '#cc964e', // Rose Gold base
600: '#b07b3c',
},
blush: '#FFF5F5',
},
backgroundImage: {
'gradient-rose': 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)',
'gradient-gold': 'linear-gradient(135deg, #f3e6cd 0%, #e6cc9f 100%)',
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
      

<div className="bg-rose-950 text-white text-xs py-2">
<div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
<div className="flex items-center gap-6">
<span className="flex items-center gap-1.5 opacity-90"><iconify-icon icon="solar:phone-linear"></iconify-icon> +1 (800) 123-4567</span>
<span className="flex items-center gap-1.5 opacity-90 hidden sm:flex"><iconify-icon icon="solar:letter-linear"></iconify-icon> support@presto.com</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-rose-200 transition-colors" href="#">Track Order</a>
<span className="w-px h-3 bg-rose-800"></span>
<a className="hover:text-rose-200 transition-colors" href="#">Bulk Orders</a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-rose-100 shadow-sm transition-all">
<div className="max-w-7xl mx-auto px-4 py-4">
<div className="flex items-center gap-4 md:gap-8 justify-between">

<button className="md:hidden text-rose-900 p-1">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<a className="flex-shrink-0 flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:gift-bold" width="18"></iconify-icon>
</div>
<span className="font-serif text-2xl font-medium tracking-tight text-rose-950">Presto<span className="text-rose-500">.</span></span>
</a>

<div className="hidden md:flex flex-1 max-w-xl relative group">
<input className="w-full bg-rose-50 border border-rose-100 rounded-full py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-rose-200 focus:bg-white transition-all placeholder:text-rose-300" placeholder="Search for personalized gifts..." type="text"/>
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>

<div className="flex items-center gap-3 md:gap-6">
<button className="md:hidden text-rose-900 p-1">
<iconify-icon icon="solar:magnifer-linear" width="22"></iconify-icon>
</button>
<a className="flex flex-col items-center gap-0.5 group" href="#">
<iconify-icon className="text-rose-900 group-hover:text-rose-500 transition-colors" icon="solar:user-heart-linear" width="24"></iconify-icon>
<span className="text-[10px] hidden md:block font-medium">Profile</span>
</a>
<a className="flex flex-col items-center gap-0.5 group relative" href="#">
<iconify-icon className="text-rose-900 group-hover:text-rose-500 transition-colors" icon="solar:heart-angle-linear" width="24"></iconify-icon>
<span className="text-[10px] hidden md:block font-medium">Wishlist</span>
</a>
<a className="flex flex-col items-center gap-0.5 group relative" href="#">
<div className="relative">
<iconify-icon className="text-rose-900 group-hover:text-rose-500 transition-colors" icon="solar:bag-3-linear" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1.5 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">3</span>
</div>
<span className="text-[10px] hidden md:block font-medium">Cart</span>
</a>
</div>
</div>

<nav className="hidden md:flex items-center justify-center gap-8 mt-4 border-t border-dashed border-rose-100 pt-3 text-sm font-medium text-rose-900/80">
<a className="hover:text-rose-600 transition-colors flex items-center gap-1" href="#"><iconify-icon icon="solar:star-fall-linear"></iconify-icon> New Arrivals</a>
<a className="hover:text-rose-600 transition-colors" href="#">Personalized</a>
<a className="hover:text-rose-600 transition-colors" href="#">3D Crystals</a>
<a className="hover:text-rose-600 transition-colors" href="#">Photo Clocks</a>
<a className="hover:text-rose-600 transition-colors" href="#">Soft Toys</a>
<a className="hover:text-rose-600 transition-colors" href="#">Frames</a>
<a className="hover:text-rose-600 transition-colors" href="#">Corporate</a>
<a className="text-rose-600 font-semibold" href="#">Valentine's Special</a>
</nav>
</div>
</header>

<section className="relative bg-blush overflow-hidden">
<div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-center min-h-[500px] px-4 py-12 md:py-0">

<div className="md:col-span-5 relative z-10 space-y-6">
<div className="inline-flex items-center gap-2 bg-rose-100 border border-rose-200 text-rose-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
<iconify-icon icon="solar:heart-bold"></iconify-icon> #1 Gifting Platform
                </div>
<h1 className="font-serif text-4xl md:text-6xl text-rose-950 leading-[1.1] tracking-tight">
                    Memories <span className="italic text-rose-500">Etched</span> in Time Forever.
                </h1>
<p className="text-rose-800/70 text-lg leading-relaxed font-light">
                    From laser-engraved crystals to handcrafted photo albums, create gifts that speak the language of your heart.
                </p>
<div className="flex flex-wrap gap-4 pt-2">
<button className="bg-rose-500 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-rose-600 transition-all hover:shadow-lg shadow-rose-200 flex items-center gap-2">
                        Explore Collection <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="bg-white border border-rose-200 text-rose-800 px-8 py-3.5 rounded-full text-sm font-medium hover:border-rose-400 hover:text-rose-900 transition-all">
                        Create Your Own
                    </button>
</div>
</div>

<div className="md:col-span-7 relative h-[450px]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-rose-100/50 to-transparent blur-3xl -z-10"></div>
<div className="relative w-full h-full flex items-center justify-center">

<div className="relative z-20 w-64 md:w-80 aspect-[4/5] rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-2xl border-4 border-white">
<img alt="Wedding Gift" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm p-4">
<p className="font-serif text-lg text-rose-900">Custom 3D Crystal</p>
<p className="text-xs text-rose-500 font-medium">Starting at $49</p>
</div>
</div>

<div className="absolute top-10 left-0 md:left-10 w-40 aspect-square rounded-2xl bg-white p-2 shadow-xl -rotate-6 z-10 animate-fade-in">
<img alt="Mug" className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>

<div className="absolute bottom-10 right-0 md:right-10 w-44 aspect-[4/3] rounded-2xl bg-white p-2 shadow-xl rotate-3 z-30">
<img alt="Frame" className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1621600411688-4be93cd68504?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute -top-3 -right-3 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md">BEST SELLER</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white">
<div className="max-w-7xl mx-auto px-4">
<h2 className="text-center font-serif text-2xl md:text-3xl text-rose-950 mb-10">Shop by Category</h2>
<div className="flex gap-6 overflow-x-auto hide-scroll pb-4 px-2 snap-x">

<a className="group flex flex-col items-center gap-3 min-w-[100px] snap-center cursor-pointer" href="#">
<div className="w-24 h-24 rounded-full p-1 border-2 border-rose-100 group-hover:border-rose-400 transition-colors">
<div className="w-full h-full rounded-full overflow-hidden bg-rose-50">
<img alt="Personalized" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>
<span className="text-sm font-medium text-rose-900 group-hover:text-rose-600 text-center">Personalized</span>
</a>

<a className="group flex flex-col items-center gap-3 min-w-[100px] snap-center cursor-pointer" href="#">
<div className="w-24 h-24 rounded-full p-1 border-2 border-rose-100 group-hover:border-rose-400 transition-colors">
<div className="w-full h-full rounded-full overflow-hidden bg-rose-50">
<img alt="3D Crystal" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>
<span className="text-sm font-medium text-rose-900 group-hover:text-rose-600 text-center">3D Crystals</span>
</a>

<a className="group flex flex-col items-center gap-3 min-w-[100px] snap-center cursor-pointer" href="#">
<div className="w-24 h-24 rounded-full p-1 border-2 border-rose-100 group-hover:border-rose-400 transition-colors">
<div className="w-full h-full rounded-full overflow-hidden bg-rose-50">
<img alt="Clocks" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1581783342308-f792ca11df53?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>
<span className="text-sm font-medium text-rose-900 group-hover:text-rose-600 text-center">Photo Clocks</span>
</a>

<a className="group flex flex-col items-center gap-3 min-w-[100px] snap-center cursor-pointer" href="#">
<div className="w-24 h-24 rounded-full p-1 border-2 border-rose-100 group-hover:border-rose-400 transition-colors">
<div className="w-full h-full rounded-full overflow-hidden bg-rose-50">
<img alt="Bags" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>
<span className="text-sm font-medium text-rose-900 group-hover:text-rose-600 text-center">Accessories</span>
</a>

<a className="group flex flex-col items-center gap-3 min-w-[100px] snap-center cursor-pointer" href="#">
<div className="w-24 h-24 rounded-full p-1 border-2 border-rose-100 group-hover:border-rose-400 transition-colors">
<div className="w-full h-full rounded-full overflow-hidden bg-rose-50">
<img alt="Mugs" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1555529771-7888783a18d3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>
<span className="text-sm font-medium text-rose-900 group-hover:text-rose-600 text-center">Photo Mugs</span>
</a>

<a className="group flex flex-col items-center gap-3 min-w-[100px] snap-center cursor-pointer" href="#">
<div className="w-24 h-24 rounded-full p-1 border-2 border-rose-100 group-hover:border-rose-400 transition-colors">
<div className="w-full h-full rounded-full overflow-hidden bg-rose-50">
<img alt="Home" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>
<span className="text-sm font-medium text-rose-900 group-hover:text-rose-600 text-center">Home Decor</span>
</a>

<a className="group flex flex-col items-center gap-3 min-w-[100px] snap-center cursor-pointer" href="#">
<div className="w-24 h-24 rounded-full p-1 border-2 border-rose-100 group-hover:border-rose-400 transition-colors">
<div className="w-full h-full rounded-full overflow-hidden bg-rose-50">
<img alt="Corporate" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>
<span className="text-sm font-medium text-rose-900 group-hover:text-rose-600 text-center">Corporate</span>
</a>
</div>
</div>
</section>

<section className="py-8 bg-rose-50/50">
<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">

<div className="relative rounded-2xl overflow-hidden min-h-[260px] flex items-center bg-white shadow-sm group">
<div className="absolute right-0 top-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-r from-rose-50 via-rose-50/90 to-transparent"></div>
<div className="relative z-10 p-8 md:p-12 w-2/3">
<span className="text-xs font-bold text-rose-500 tracking-wider uppercase mb-2 block">For Your Special One</span>
<h3 className="font-serif text-3xl text-rose-950 mb-4">Anniversary <br/>Collection</h3>
<button className="text-sm font-semibold text-rose-800 underline decoration-rose-300 decoration-2 underline-offset-4 hover:text-rose-600 transition-colors">
                        Shop Now
                    </button>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden min-h-[260px] flex items-center bg-white shadow-sm group">
<div className="absolute right-0 top-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-r from-rose-50 via-rose-50/90 to-transparent"></div>
<div className="relative z-10 p-8 md:p-12 w-2/3">
<span className="text-xs font-bold text-rose-500 tracking-wider uppercase mb-2 block">Capture The Moment</span>
<h3 className="font-serif text-3xl text-rose-950 mb-4">Birthday <br/>Surprises</h3>
<button className="text-sm font-semibold text-rose-800 underline decoration-rose-300 decoration-2 underline-offset-4 hover:text-rose-600 transition-colors">
                        Shop Now
                    </button>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div>
<h2 className="font-serif text-3xl text-rose-950">Trending Gifts</h2>
<p className="text-rose-400 mt-2 font-light">Most loved personalized items this week</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-full border border-rose-200 text-sm font-medium text-rose-600 hover:bg-rose-50 transition-colors active">All</button>
<button className="px-4 py-2 rounded-full border border-transparent text-sm font-medium text-rose-400 hover:text-rose-600 transition-colors">For Him</button>
<button className="px-4 py-2 rounded-full border border-transparent text-sm font-medium text-rose-400 hover:text-rose-600 transition-colors">For Her</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-white border border-rose-50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-300">
<div className="relative aspect-[4/5] bg-rose-50 overflow-hidden">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<span className="absolute top-3 left-3 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">NEW</span>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur text-rose-300 hover:text-rose-500 hover:bg-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:heart-bold"></iconify-icon>
</button>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-medium text-rose-950 line-clamp-2 leading-snug group-hover:text-rose-600 transition-colors">3D Laser Engraved Crystal - Heart Shape</h3>
</div>
<div className="flex items-center gap-1 mb-3">
<iconify-icon className="text-gold-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-gold-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-gold-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-gold-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-rose-100 text-xs" icon="solar:star-bold"></iconify-icon>
<span className="text-xs text-rose-300 ml-1">(45)</span>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-lg font-semibold text-rose-900">$39.00</span>
<span className="text-xs text-rose-300 line-through">$55.00</span>
</div>
<button className="w-8 h-8 rounded-full border border-rose-200 text-rose-600 flex items-center justify-center hover:bg-rose-50 transition-colors">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative bg-white border border-rose-50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-300">
<div className="relative aspect-[4/5] bg-rose-50 overflow-hidden">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1577909060416-654cb2c4866f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<span className="absolute top-3 left-3 bg-gold-400 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">BESTSELLER</span>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur text-rose-300 hover:text-rose-500 hover:bg-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:heart-bold"></iconify-icon>
</button>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-medium text-rose-950 line-clamp-2 leading-snug group-hover:text-rose-600 transition-colors">Custom Photo Collage Wall Clock</h3>
</div>
<div className="flex items-center gap-1 mb-3">
<iconify-icon className="text-gold-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-gold-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-gold-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-gold-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-gold-400 text-xs" icon="solar:star-half-bold"></iconify-icon>
<span className="text-xs text-rose-300 ml-1">(128)</span>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-lg font-semibold text-rose-900">$24.99</span>
</div>
<button className="w-8 h-8 rounded-full border border-rose-200 text-rose-600 flex items-center justify-center hover:bg-rose-50 transition-colors">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative bg-white border border-rose-50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-300">
<div className="relative aspect-[4/5] bg-rose-50 overflow-hidden">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1583203408344-93b5840d21e0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur text-rose-300 hover:text-rose-500 hover:bg-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:heart-bold"></iconify-icon>
</button>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-medium text-rose-950 line-clamp-2 leading-snug group-hover:text-rose-600 transition-colors">Personalized Wooden Photo Frame</h3>
</div>
<div className="flex items-center gap-1 mb-3">
<iconify-icon className="text-gold-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-gold-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-gold-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-gold-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-gold-400 text-xs" icon="solar:star-bold"></iconify-icon>
<span className="text-xs text-rose-300 ml-1">(89)</span>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-lg font-semibold text-rose-900">$18.50</span>
<span className="text-xs text-rose-300 line-through">$22.00</span>
</div>
<button className="w-8 h-8 rounded-full border border-rose-200 text-rose-600 flex items-center justify-center hover:bg-rose-50 transition-colors">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative bg-white border border-rose-50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-300">
<div className="relative aspect-[4/5] bg-rose-50 overflow-hidden">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur text-rose-300 hover:text-rose-500 hover:bg-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:heart-bold"></iconify-icon>
</button>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-medium text-rose-950 line-clamp-2 leading-snug group-hover:text-rose-600 transition-colors">Magic Color Changing Mug</h3>
</div>
<div className="flex items-center gap-1 mb-3">
<iconify-icon className="text-gold-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-gold-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-gold-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-gold-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-rose-100 text-xs" icon="solar:star-linear"></iconify-icon>
<span className="text-xs text-rose-300 ml-1">(342)</span>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-lg font-semibold text-rose-900">$14.99</span>
</div>
<button className="w-8 h-8 rounded-full border border-rose-200 text-rose-600 flex items-center justify-center hover:bg-rose-50 transition-colors">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 border border-rose-200 text-rose-700 px-8 py-3 rounded-full hover:bg-rose-50 transition-colors font-medium text-sm">
                    View All Bestsellers <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-16 bg-gradient-to-br from-rose-50 to-white border-y border-rose-100">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

<div className="flex flex-col items-center text-center gap-3">
<div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-rose-400 border border-rose-100 mb-2">
<iconify-icon icon="solar:box-minimalistic-linear" width="32"></iconify-icon>
</div>
<h4 className="font-serif text-lg text-rose-950">Safe Delivery</h4>
<p className="text-xs text-rose-400 leading-relaxed max-w-[150px]">We ensure your gifts arrive in perfect condition.</p>
</div>

<div className="flex flex-col items-center text-center gap-3">
<div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-rose-400 border border-rose-100 mb-2">
<iconify-icon icon="solar:medal-star-linear" width="32"></iconify-icon>
</div>
<h4 className="font-serif text-lg text-rose-950">Premium Quality</h4>
<p className="text-xs text-rose-400 leading-relaxed max-w-[150px]">Only the finest materials for your memories.</p>
</div>

<div className="flex flex-col items-center text-center gap-3">
<div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-rose-400 border border-rose-100 mb-2">
<iconify-icon icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h4 className="font-serif text-lg text-rose-950">Secure Payment</h4>
<p className="text-xs text-rose-400 leading-relaxed max-w-[150px]">100% secure payment gateways.</p>
</div>

<div className="flex flex-col items-center text-center gap-3">
<div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-rose-400 border border-rose-100 mb-2">
<iconify-icon icon="solar:chat-round-call-linear" width="32"></iconify-icon>
</div>
<h4 className="font-serif text-lg text-rose-950">24/7 Support</h4>
<p className="text-xs text-rose-400 leading-relaxed max-w-[150px]">We are here to help you anytime.</p>
</div>
</div>
</div>
</section>

<footer className="bg-rose-950 text-rose-200/80 pt-16 pb-8 text-sm border-t-4 border-rose-500">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

<div className="lg:col-span-2 space-y-6">
<a className="font-serif text-3xl text-white block" href="#">Presto<span className="text-rose-500">.</span></a>
<p className="leading-relaxed max-w-sm font-light text-rose-100/70">
                    The ultimate destination for personalized gifts. Whether it's a birthday, anniversary, or just because, we make every moment memorable.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-rose-900 border border-rose-800 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all" href="#">
<iconify-icon icon="brandico:facebook"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-rose-900 border border-rose-800 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all" href="#">
<iconify-icon icon="brandico:instagram"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-rose-900 border border-rose-800 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all" href="#">
<iconify-icon icon="brandico:twitter-bird"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-rose-900 border border-rose-800 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all" href="#">
<iconify-icon icon="brandico:pinterest-p"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white font-serif text-lg mb-5">Quick Links</h4>
<ul className="space-y-3 font-light">
<li><a className="hover:text-white hover:translate-x-1 inline-block transition-transform" href="#">About Us</a></li>
<li><a className="hover:text-white hover:translate-x-1 inline-block transition-transform" href="#">Contact Us</a></li>
<li><a className="hover:text-white hover:translate-x-1 inline-block transition-transform" href="#">Blog</a></li>
<li><a className="hover:text-white hover:translate-x-1 inline-block transition-transform" href="#">Track Order</a></li>
<li><a className="hover:text-white hover:translate-x-1 inline-block transition-transform" href="#">Corporate Gifts</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-serif text-lg mb-5">Policies</h4>
<ul className="space-y-3 font-light">
<li><a className="hover:text-white hover:translate-x-1 inline-block transition-transform" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white hover:translate-x-1 inline-block transition-transform" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-white hover:translate-x-1 inline-block transition-transform" href="#">Shipping Policy</a></li>
<li><a className="hover:text-white hover:translate-x-1 inline-block transition-transform" href="#">Cancellation &amp; Refunds</a></li>
<li><a className="hover:text-white hover:translate-x-1 inline-block transition-transform" href="#">FAQ</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-serif text-lg mb-5">Newsletter</h4>
<p className="text-xs mb-4 font-light">Sign up for new arrivals and exclusive offers.</p>
<form className="flex flex-col gap-3">
<input className="w-full bg-rose-900/50 border border-rose-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 focus:bg-rose-900 transition-colors placeholder:text-rose-400/50" placeholder="Your Email" type="email"/>
<button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-400 transition-colors uppercase text-xs tracking-widest">Subscribe</button>
</form>
</div>
</div>

<div className="border-t border-rose-900 pt-8 mt-8">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-rose-400">© 2024 Presto Personalised Gifts. All Rights Reserved.</p>
<div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
<iconify-icon icon="logos:visa" width="36"></iconify-icon>
<iconify-icon icon="logos:mastercard" width="36"></iconify-icon>
<iconify-icon icon="logos:paypal" width="36"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
