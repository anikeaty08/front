import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 fixed h-screen border-r border-neutral-200/60 bg-[#FCFCFC]/80 backdrop-blur-2xl p-6 flex flex-col gap-10 z-50 hidden lg:flex">
<div className="flex items-center gap-3 px-2">
<div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center text-white">
<i className="w-6 h-6" data-lucide="croissant"></i>
</div>
<span className="text-xl font-semibold tracking-tight">Lumina</span>
</div>
<nav className="flex flex-col gap-2 flex-1">
<a className="flex items-center gap-4 px-4 py-3 rounded-xl bg-neutral-100/80 text-neutral-900 font-medium transition-colors" href="#">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-base">Home</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-neutral-100/50 text-neutral-500 hover:text-neutral-900 font-medium transition-colors" href="#">
<i className="w-5 h-5" data-lucide="coffee"></i>
<span className="text-base">Menu</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-neutral-100/50 text-neutral-500 hover:text-neutral-900 font-medium transition-colors" href="#">
<i className="w-5 h-5" data-lucide="package"></i>
<span className="text-base">Pre-order</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-neutral-100/50 text-neutral-500 hover:text-neutral-900 font-medium transition-colors" href="#">
<i className="w-5 h-5" data-lucide="heart"></i>
<span className="text-base">Favorites</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-neutral-100/50 text-neutral-500 hover:text-neutral-900 font-medium transition-colors" href="#">
<i className="w-5 h-5" data-lucide="receipt"></i>
<span className="text-base">Orders</span>
</a>
</nav>
<div className="mt-auto">
<a className="flex items-center gap-4 px-4 py-3 rounded-xl border border-neutral-200/60 hover:bg-neutral-50 transition-colors" href="#">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex flex-col">
<span className="text-base font-medium">Anna K.</span>
<span className="text-sm text-neutral-500">View profile</span>
</div>
</a>
</div>
</aside>

<div className="w-full lg:ml-64 flex flex-col min-h-screen">

<header className="sticky top-0 z-40 bg-[#FCFCFC]/80 backdrop-blur-2xl border-b border-neutral-200/60 px-6 lg:px-10 py-4 flex items-center justify-between gap-6">
<div className="flex items-center gap-4 lg:hidden">
<button className="p-2 -ml-2 text-neutral-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
<span className="text-xl font-semibold tracking-tight">Lumina</span>
</div>

<div className="hidden md:flex bg-neutral-100/80 p-1 rounded-full border border-neutral-200/40">
<button className="px-6 py-2 rounded-full bg-white shadow-[0_2px_8px_rgb(0,0,0,0.04)] text-base font-medium transition-all">Delivery</button>
<button className="px-6 py-2 rounded-full text-neutral-500 hover:text-neutral-900 text-base font-medium transition-all">Pickup</button>
</div>
<div className="hidden xl:flex items-center gap-2 text-base font-medium px-4 py-2 rounded-full hover:bg-neutral-100/50 cursor-pointer transition-colors">
<i className="w-4 h-4 text-neutral-500" data-lucide="map-pin"></i>
<span>42 Baker St, London</span>
<span className="text-neutral-400 mx-1">•</span>
<span className="text-amber-600">Now</span>
<i className="w-4 h-4 text-neutral-500 ml-1" data-lucide="chevron-down"></i>
</div>

<div className="flex-1 max-w-2xl relative group">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-neutral-900 transition-colors" data-lucide="search"></i>
<input className="w-full bg-neutral-100/80 border border-transparent focus:bg-white focus:border-neutral-200/80 rounded-full py-3 pl-12 pr-4 outline-none focus:ring-4 focus:ring-neutral-900/5 transition-all text-base placeholder:text-neutral-400 shadow-sm" placeholder="Search for croissants, sourdough..." type="text"/>
</div>

<div className="flex items-center gap-3">
<button className="relative p-3 rounded-full hover:bg-neutral-100/80 transition-colors hidden sm:block">
<i className="w-6 h-6" data-lucide="shopping-bag"></i>
<span className="absolute top-2 right-2 w-2.5 h-2.5 bg-amber-500 rounded-full border-2 border-[#FCFCFC]"></span>
</button>
<button className="hidden md:block px-5 py-2.5 rounded-full text-base font-medium hover:bg-neutral-100/80 transition-colors">Log in</button>
<button className="px-5 py-2.5 rounded-full bg-neutral-900 text-white text-base font-medium hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-900/10 hidden sm:block">Sign up</button>
</div>
</header>

<main className="p-6 lg:p-10 flex flex-col gap-14 max-w-[1600px] mx-auto w-full">

<section className="flex flex-col gap-6">
<div className="flex gap-4 lg:gap-8 overflow-x-auto pb-4 hide-scrollbar items-start">

<div className="flex flex-col items-center gap-3 min-w-[72px] cursor-pointer group">
<div className="w-16 h-16 rounded-[1.25rem] bg-amber-50 border border-amber-100/50 flex items-center justify-center group-hover:scale-105 group-hover:bg-amber-100 transition-all duration-300">
<img alt="Bread" className="w-8 h-8 opacity-80" src="https://cdn-icons-png.flaticon.com/512/3014/3014502.png"/>
</div>
<span className="text-base font-medium text-neutral-900">Bread</span>
</div>
<div className="flex flex-col items-center gap-3 min-w-[72px] cursor-pointer group">
<div className="w-16 h-16 rounded-[1.25rem] bg-neutral-50 border border-neutral-200/60 flex items-center justify-center group-hover:scale-105 group-hover:bg-neutral-100 transition-all duration-300">
<img alt="Pastry" className="w-8 h-8 opacity-60 grayscale group-hover:grayscale-0 transition-all" src="https://cdn-icons-png.flaticon.com/512/2515/2515183.png"/>
</div>
<span className="text-base font-medium text-neutral-600 group-hover:text-neutral-900">Pastries</span>
</div>
<div className="flex flex-col items-center gap-3 min-w-[72px] cursor-pointer group">
<div className="w-16 h-16 rounded-[1.25rem] bg-neutral-50 border border-neutral-200/60 flex items-center justify-center group-hover:scale-105 group-hover:bg-neutral-100 transition-all duration-300">
<img alt="Coffee" className="w-8 h-8 opacity-60 grayscale group-hover:grayscale-0 transition-all" src="https://cdn-icons-png.flaticon.com/512/924/924514.png"/>
</div>
<span className="text-base font-medium text-neutral-600 group-hover:text-neutral-900">Coffee</span>
</div>
<div className="flex flex-col items-center gap-3 min-w-[72px] cursor-pointer group">
<div className="w-16 h-16 rounded-[1.25rem] bg-neutral-50 border border-neutral-200/60 flex items-center justify-center group-hover:scale-105 group-hover:bg-neutral-100 transition-all duration-300">
<img alt="Cakes" className="w-8 h-8 opacity-60 grayscale group-hover:grayscale-0 transition-all" src="https://cdn-icons-png.flaticon.com/512/2666/2666504.png"/>
</div>
<span className="text-base font-medium text-neutral-600 group-hover:text-neutral-900">Cakes</span>
</div>
<div className="flex flex-col items-center gap-3 min-w-[72px] cursor-pointer group">
<div className="w-16 h-16 rounded-[1.25rem] bg-neutral-50 border border-neutral-200/60 flex items-center justify-center group-hover:scale-105 group-hover:bg-neutral-100 transition-all duration-300">
<img alt="Sandwich" className="w-8 h-8 opacity-60 grayscale group-hover:grayscale-0 transition-all" src="https://cdn-icons-png.flaticon.com/512/8173/8173369.png"/>
</div>
<span className="text-base font-medium text-neutral-600 group-hover:text-neutral-900">Savory</span>
</div>
<div className="flex flex-col items-center gap-3 min-w-[72px] cursor-pointer group">
<div className="w-16 h-16 rounded-[1.25rem] bg-neutral-50 border border-neutral-200/60 flex items-center justify-center group-hover:scale-105 group-hover:bg-neutral-100 transition-all duration-300">
<img alt="Vegan" className="w-8 h-8 opacity-60 grayscale group-hover:grayscale-0 transition-all" src="https://cdn-icons-png.flaticon.com/512/1147/1147805.png"/>
</div>
<span className="text-base font-medium text-neutral-600 group-hover:text-neutral-900">Vegan</span>
</div>
<div className="flex flex-col items-center gap-3 min-w-[72px] cursor-pointer group">
<div className="w-16 h-16 rounded-[1.25rem] bg-neutral-50 border border-neutral-200/60 flex items-center justify-center group-hover:scale-105 group-hover:bg-neutral-100 transition-all duration-300">
<i className="w-6 h-6 text-neutral-400 group-hover:text-neutral-900 transition-colors" data-lucide="arrow-right"></i>
</div>
<span className="text-base font-medium text-neutral-600 group-hover:text-neutral-900">More</span>
</div>
</div>

<div className="flex gap-3 flex-wrap items-center pt-2">
<button className="px-5 py-2.5 rounded-full border border-neutral-200/80 bg-white text-base font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all flex items-center gap-2 shadow-sm">
<i className="w-4 h-4 text-neutral-500" data-lucide="sliders-horizontal"></i>
                        Filters
                    </button>
<button className="px-5 py-2.5 rounded-full border border-neutral-200/80 bg-white text-base font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all shadow-sm">
                        Offers
                    </button>
<button className="px-5 py-2.5 rounded-full border border-neutral-200/80 bg-white text-base font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all flex items-center gap-2 shadow-sm">
                        Under 30 min
                        <i className="w-4 h-4 text-neutral-400" data-lucide="chevron-down"></i>
</button>
<button className="px-5 py-2.5 rounded-full border border-neutral-200/80 bg-white text-base font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all shadow-sm">
                        Top Rated
                    </button>
<button className="px-5 py-2.5 rounded-full border border-neutral-200/80 bg-white text-base font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all shadow-sm">
                        Gluten Free
                    </button>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="relative overflow-hidden rounded-[2rem] bg-[#F7EFE8] aspect-[4/3] lg:aspect-auto min-h-[280px] p-8 flex flex-col justify-between group cursor-pointer border border-black/5">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
<img alt="Cinnamon Roll" className="absolute -bottom-10 -right-10 w-2/3 object-cover rounded-full group-hover:scale-105 transition-transform duration-700 ease-out shadow-2xl" src="https://images.unsplash.com/photo-1509365465994-3e8f8101a073?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="relative z-10 max-w-[60%]">
<div className="inline-block px-3 py-1 bg-white/60 backdrop-blur-md rounded-full text-sm font-semibold text-amber-900 mb-4 border border-white/50">Morning Special</div>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 leading-tight mb-2">Buy 1 Cinnamon Roll, get coffee free</h2>
<p className="text-base text-neutral-700">Valid until 11 AM today.</p>
</div>
<button className="relative z-10 w-fit px-6 py-3 bg-white text-neutral-900 rounded-full text-base font-medium shadow-sm hover:shadow-md transition-shadow flex items-center gap-2 mt-4">
                        Claim offer
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="relative overflow-hidden rounded-[2rem] bg-[#E8F0F7] aspect-[4/3] lg:aspect-auto min-h-[280px] p-8 flex flex-col justify-between group cursor-pointer border border-black/5">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
<img alt="Croissants" className="absolute top-1/2 -translate-y-1/2 -right-16 w-3/4 object-cover group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-2xl" src="https://images.unsplash.com/photo-1555507015-06ab5448378d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="relative z-10 max-w-[60%]">
<div className="inline-block px-3 py-1 bg-white/60 backdrop-blur-md rounded-full text-sm font-semibold text-blue-900 mb-4 border border-white/50">New Arrival</div>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 leading-tight mb-2">Parisian Box</h2>
<p className="text-base text-neutral-700">Assortment of 6 freshly baked croissants.</p>
</div>
<button className="relative z-10 w-fit px-6 py-3 bg-white text-neutral-900 rounded-full text-base font-medium shadow-sm hover:shadow-md transition-shadow flex items-center gap-2 mt-4">
                        Order now
                    </button>
</div>

<div className="relative overflow-hidden rounded-[2rem] bg-[#F4F4F5] aspect-[4/3] lg:aspect-auto min-h-[280px] p-8 flex flex-col justify-between group cursor-pointer border border-black/5 hidden lg:flex">
<img alt="Sourdough" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1585478259715-876a6a81fa08?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="relative z-10 mt-auto">
<h2 className="text-3xl font-semibold tracking-tight text-white leading-tight mb-2">Artisan Sourdough</h2>
<p className="text-base text-neutral-200">Aged 48 hours. Baked this morning.</p>
</div>
</div>
</section>

<section className="flex flex-col gap-6">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Fresh out the oven</h2>
<p className="text-base text-neutral-500 mt-1">Items that just finished baking.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors">
<i className="w-5 h-5 text-neutral-600" data-lucide="chevron-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors">
<i className="w-5 h-5 text-neutral-900" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

<div className="group cursor-pointer flex flex-col gap-4">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-black/5">
<img alt="Baguette" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-neutral-400 hover:text-red-500 hover:bg-white transition-all shadow-sm">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<div className="absolute top-3 left-3 px-2.5 py-1 bg-red-500/90 backdrop-blur-md rounded-full text-xs font-semibold text-white flex items-center gap-1 shadow-sm">
<i className="w-3 h-3" data-lucide="flame"></i> Hot
                            </div>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 group-hover:underline decoration-2 underline-offset-4 decoration-neutral-200">Classic Baguette</h3>
<span className="text-lg font-semibold text-neutral-900">$4.50</span>
</div>
<p className="text-base text-neutral-500 line-clamp-1 mb-3">Crispy crust, soft airy inside. French flour.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-sm font-medium text-neutral-700 bg-neutral-100 px-2 py-1 rounded-md">
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star"></i>
                                    4.9 <span className="text-neutral-400 font-normal">(120)</span>
</div>
<button className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group cursor-pointer flex flex-col gap-4">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-black/5">
<img alt="Pain au Chocolat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-neutral-400 hover:text-red-500 hover:bg-white transition-all shadow-sm">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 group-hover:underline decoration-2 underline-offset-4 decoration-neutral-200">Pain au Chocolat</h3>
<span className="text-lg font-semibold text-neutral-900">$5.20</span>
</div>
<p className="text-base text-neutral-500 line-clamp-1 mb-3">Flaky pastry with double dark chocolate.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-sm font-medium text-neutral-700 bg-neutral-100 px-2 py-1 rounded-md">
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star"></i>
                                    4.8 <span className="text-neutral-400 font-normal">(85)</span>
</div>
<button className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group cursor-pointer flex flex-col gap-4">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-black/5">
<img alt="Blueberry Muffin" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1549888834-3ec93abae044?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-red-500 hover:bg-white transition-all shadow-sm">
<i className="w-4 h-4 fill-red-500" data-lucide="heart"></i>
</button>
<div className="absolute top-3 left-3 px-2.5 py-1 bg-amber-500/90 backdrop-blur-md rounded-full text-xs font-semibold text-white flex items-center gap-1 shadow-sm">
                                Popular
                            </div>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 group-hover:underline decoration-2 underline-offset-4 decoration-neutral-200">Wild Blueberry Muffin</h3>
<span className="text-lg font-semibold text-neutral-900">$4.00</span>
</div>
<p className="text-base text-neutral-500 line-clamp-1 mb-3">Loaded with wild berries, crumble top.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-sm font-medium text-neutral-700 bg-neutral-100 px-2 py-1 rounded-md">
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star"></i>
                                    4.7 <span className="text-neutral-400 font-normal">(210)</span>
</div>
<button className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group cursor-pointer flex flex-col gap-4 hidden sm:flex">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-black/5">
<img alt="Pour Over Coffee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-neutral-400 hover:text-red-500 hover:bg-white transition-all shadow-sm">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 group-hover:underline decoration-2 underline-offset-4 decoration-neutral-200">Ethiopian Pour Over</h3>
<span className="text-lg font-semibold text-neutral-900">$5.50</span>
</div>
<p className="text-base text-neutral-500 line-clamp-1 mb-3">Floral notes, light roast, brewed fresh.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-sm font-medium text-neutral-700 bg-neutral-100 px-2 py-1 rounded-md">
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star"></i>
                                    5.0 <span className="text-neutral-400 font-normal">(64)</span>
</div>
<button className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-6 pt-6 border-t border-neutral-200/60">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Signature Creations</h2>
<p className="text-base text-neutral-500 mt-1">Our chef's masterpieces, available daily.</p>
</div>
<a className="text-base font-medium text-neutral-900 hover:underline underline-offset-4 hidden sm:block" href="#">View menu</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

<div className="group cursor-pointer flex flex-col gap-4">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-black/5">
<img alt="Matcha Cake" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-neutral-400 hover:text-red-500 hover:bg-white transition-all shadow-sm">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 group-hover:underline decoration-2 underline-offset-4 decoration-neutral-200">Matcha Crepe Cake</h3>
<span className="text-lg font-semibold text-neutral-900">$8.50</span>
</div>
<p className="text-base text-neutral-500 line-clamp-1 mb-3">20 layers of delicate crepe, premium matcha.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-sm font-medium text-neutral-700 bg-neutral-100 px-2 py-1 rounded-md">
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star"></i>
                                    4.9 <span className="text-neutral-400 font-normal">(412)</span>
</div>
<button className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group cursor-pointer flex flex-col gap-4">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-black/5">
<img alt="Macarons" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-neutral-400 hover:text-red-500 hover:bg-white transition-all shadow-sm">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 group-hover:underline decoration-2 underline-offset-4 decoration-neutral-200">Assorted Macarons (6)</h3>
<span className="text-lg font-semibold text-neutral-900">$18.00</span>
</div>
<p className="text-base text-neutral-500 line-clamp-1 mb-3">Pistachio, Raspberry, Lemon, Vanilla...</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-sm font-medium text-neutral-700 bg-neutral-100 px-2 py-1 rounded-md">
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star"></i>
                                    4.8 <span className="text-neutral-400 font-normal">(189)</span>
</div>
<button className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>
</section>
</main>
</div>



    </>
  );
}
