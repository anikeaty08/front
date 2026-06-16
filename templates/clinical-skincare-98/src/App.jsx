import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function toggleCart() {
            const drawer = document.getElementById('cart-drawer');
            const backdrop = document.getElementById('cart-backdrop');
            const panel = document.getElementById('cart-panel');

            if (drawer.classList.contains('invisible')) {
                // Open
                drawer.classList.remove('invisible');
                setTimeout(() => {
                    backdrop.classList.remove('opacity-0');
                    panel.classList.remove('translate-x-full');
                }, 10);
            } else {
                // Close
                backdrop.classList.add('opacity-0');
                panel.classList.add('translate-x-full');
                setTimeout(() => {
                    drawer.classList.add('invisible');
                }, 300);
            }
        }

        function switchView(viewName) {
            // Hide all views
            document.getElementById('view-home').classList.add('hidden');
            document.getElementById('view-collection').classList.add('hidden');
            document.getElementById('view-pdp').classList.add('hidden');

            // Show selected view
            const selected = document.getElementById('view-' + viewName);
            selected.classList.remove('hidden');
            
            // Reset scroll
            window.scrollTo(0, 0);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-stone-900 text-white px-6 py-3 rounded-full shadow-2xl flex gap-6 text-sm font-medium backdrop-blur-md bg-opacity-90 border border-stone-700">
<button className="hover:text-stone-300 transition-colors" onclick="switchView('home')">Home</button>
<button className="hover:text-stone-300 transition-colors" onclick="switchView('collection')">Shop All</button>
<button className="hover:text-stone-300 transition-colors" onclick="switchView('pdp')">Product Page</button>
<button className="hover:text-stone-300 transition-colors" onclick="toggleCart()">Cart</button>
</div>

<div className="bg-stone-900 text-stone-50 text-xs py-2 text-center tracking-wide font-medium relative z-40">
<span>Free Shipping on Orders Over $75 + 30-Day Glow Guarantee</span>
</div>

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<button className="md:hidden text-stone-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<div className="cursor-pointer" onclick="switchView('home')">
<span className="font-sans font-bold text-xl tracking-tighter text-stone-900 uppercase">LUMEN.</span>
</div>

<nav className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
<button className="hover:text-stone-900 transition-colors" onclick="switchView('collection')">Shop All</button>
<a className="hover:text-stone-900 transition-colors" href="#">Best Sellers</a>
<a className="hover:text-stone-900 transition-colors" href="#">Concerns</a>
<a className="hover:text-stone-900 transition-colors" href="#">Science</a>
<a className="hover:text-stone-900 transition-colors" href="#">Bundles</a>
</nav>

<div className="flex items-center gap-4">
<button className="text-stone-900 hidden sm:block">
<iconify-icon icon="solar:user-linear" width="22"></iconify-icon>
</button>
<button className="text-stone-900">
<iconify-icon icon="solar:magnifer-linear" width="22"></iconify-icon>
</button>
<button className="text-stone-900 relative" onclick="toggleCart()">
<iconify-icon icon="solar:bag-3-linear" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-stone-900 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">2</span>
</button>
</div>
</div>
</div>
</header>

<main className="" id="main-content">

<div className="fade-enter block" id="view-home">

<section className="relative bg-[#F5F5F4] overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh] md:min-h-[700px]">
<div className="flex flex-col justify-center px-6 py-12 md:px-12 lg:px-20 order-2 md:order-1">
<div className="inline-flex items-center gap-2 mb-6">
<span className="bg-stone-200 text-stone-800 text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">Clinically Proven</span>
<div className="flex text-amber-500 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-stone-500">5,000+ Reviews</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[1.1] tracking-tight mb-6 serif font-medium">
                                Clinical results,<br/>
                                minus the complexity.
                            </h1>
<p className="text-stone-600 text-lg mb-8 max-w-md leading-relaxed">
                                Dermatologist-tested skincare formulated to repair your barrier and reveal visible glow in 14 days.
                            </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-stone-900 text-white px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-stone-800 transition-all rounded-sm" onclick="switchView('collection')">
                                    Shop Best Sellers
                                </button>
<button className="border border-stone-300 text-stone-900 px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-stone-50 transition-all rounded-sm">
                                    Take Skin Quiz
                                </button>
</div>
<div className="mt-10 flex gap-6 text-xs text-stone-500 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-900" icon="solar:verified-check-linear"></iconify-icon>
<span>Vegan &amp; Cruelty-Free</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-900" icon="solar:shield-check-linear"></iconify-icon>
<span>Derma-Tested</span>
</div>
</div>
</div>
<div className="relative bg-stone-200 order-1 md:order-2 h-[50vh] md:h-auto">

<div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1556228720-1957be9822d1?q=80&amp'}}></div>
</div>
</div>
</div>
</section>

<section className="border-y border-stone-200 bg-white py-6">
<div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-6 text-center md:text-left">
<div className="flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
<div className="text-left">
<p className="text-xs font-bold uppercase tracking-wide text-stone-900">Free Shipping</p>
<p className="text-xs text-stone-500">On all orders over $75</p>
</div>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="solar:heart-linear" width="24"></iconify-icon>
<div className="text-left">
<p className="text-xs font-bold uppercase tracking-wide text-stone-900">Glow Guarantee</p>
<p className="text-xs text-stone-500">30 days to love it or return it</p>
</div>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="solar:leaf-linear" width="24"></iconify-icon>
<div className="text-left">
<p className="text-xs font-bold uppercase tracking-wide text-stone-900">Clean Formula</p>
<p className="text-xs text-stone-500">No sulfates, parabens, or fragrance</p>
</div>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="solar:star-circle-linear" width="24"></iconify-icon>
<div className="text-left">
<p className="text-xs font-bold uppercase tracking-wide text-stone-900">Top Rated</p>
<p className="text-xs text-stone-500">Over 10,000 5-star reviews</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-3xl text-stone-900 mb-2 serif">Community Favorites</h2>
<p className="text-stone-500 text-sm">Our most-loved formulas for every skin type.</p>
</div>
<a className="hidden md:block text-sm font-semibold border-b border-stone-900 pb-0.5 hover:text-stone-600 hover:border-stone-600 transition-all" href="#" onclick="switchView('collection')">View All Products</a>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-8">

<div className="group cursor-pointer" onclick="switchView('pdp')">
<div className="relative aspect-3-4 bg-stone-200 mb-4 overflow-hidden rounded-sm">
<span className="absolute top-3 left-3 bg-white/90 text-[10px] font-bold uppercase tracking-wider px-2 py-1 z-10">Best Seller</span>
<img alt="Serum" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<button aria-label="Quick Add" className="absolute bottom-4 right-4 bg-stone-900 text-white w-10 h-10 rounded-full flex items-center justify-center translate-y-14 group-hover:translate-y-0 transition-transform duration-300 shadow-lg z-20">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-stone-900 group-hover:underline decoration-1 underline-offset-4">Vitamin C Brightening Serum</h3>
<p className="text-xs text-stone-500 mt-1">Fades dark spots &amp; evens tone</p>
</div>
<span className="text-sm font-medium text-stone-900">$48</span>
</div>
<div className="mt-2 flex items-center gap-1">
<div className="flex text-stone-900 text-[10px]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone"></iconify-icon>
</div>
<span className="text-[10px] text-stone-400">(428)</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-3-4 bg-stone-200 mb-4 overflow-hidden rounded-sm">
<img alt="Moisturizer" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-4 right-4 bg-stone-900 text-white w-10 h-10 rounded-full flex items-center justify-center translate-y-14 group-hover:translate-y-0 transition-transform duration-300 shadow-lg z-20">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-stone-900 group-hover:underline decoration-1 underline-offset-4">Barrier Repair Cream</h3>
<p className="text-xs text-stone-500 mt-1">Deep hydration &amp; soothing</p>
</div>
<span className="text-sm font-medium text-stone-900">$36</span>
</div>
<div className="mt-2 flex items-center gap-1">
<div className="flex text-stone-900 text-[10px]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-[10px] text-stone-400">(890)</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-3-4 bg-stone-200 mb-4 overflow-hidden rounded-sm">
<span className="absolute top-3 left-3 bg-stone-900 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 z-10">New</span>
<img alt="Cleanser" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute bottom-4 right-4 bg-stone-900 text-white w-10 h-10 rounded-full flex items-center justify-center translate-y-14 group-hover:translate-y-0 transition-transform duration-300 shadow-lg z-20">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-stone-900 group-hover:underline decoration-1 underline-offset-4">Gentle Gel Cleanser</h3>
<p className="text-xs text-stone-500 mt-1">Removes makeup without drying</p>
</div>
<span className="text-sm font-medium text-stone-900">$24</span>
</div>
<div className="mt-2 flex items-center gap-1">
<div className="flex text-stone-900 text-[10px]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-[10px] text-stone-400">(156)</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-3-4 bg-stone-200 mb-4 overflow-hidden rounded-sm">
<img alt="SPF" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1563804447971-6e113ab80713?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-stone-900 text-white w-10 h-10 rounded-full flex items-center justify-center translate-y-14 group-hover:translate-y-0 transition-transform duration-300 shadow-lg z-20">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-stone-900 group-hover:underline decoration-1 underline-offset-4">Daily Mineral SPF 50</h3>
<p className="text-xs text-stone-500 mt-1">Invisible finish, non-greasy</p>
</div>
<span className="text-sm font-medium text-stone-900">$32</span>
</div>
<div className="mt-2 flex items-center gap-1">
<div className="flex text-stone-900 text-[10px]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold-half-linear"></iconify-icon>
</div>
<span className="text-[10px] text-stone-400">(312)</span>
</div>
</div>
</div>
</div>
</section>

<section className="text-stone-50 bg-stone-900 pt-20 pb-20">
<div className="max-w-2xl mx-auto px-4 text-center">
<h2 className="serif text-3xl mb-4">Unlock 10% Off Your First Order</h2>
<p className="text-stone-400 mb-8">Join the inner circle for expert skin tips, new launch alerts, and exclusive subscriber savings.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="w-full px-4 py-3 text-stone-900 bg-white rounded-sm focus:outline-none focus:ring-2 focus:ring-stone-500" placeholder="Enter your email" type="email"/>
<button className="px-8 py-3 bg-stone-700 hover:bg-stone-600 text-white font-semibold uppercase tracking-wide rounded-sm transition-colors whitespace-nowrap" type="button">
                            Sign Up
                        </button>
</form>
<p className="text-[10px] text-stone-500 mt-4">By signing up, you agree to our Terms &amp; Privacy Policy.</p>
</div>
</section>
</div>

<div className="fade-enter hidden" id="view-collection">
<div className="py-8 border-b border-stone-200">
<div className="max-w-7xl mx-auto px-4 text-center">
<h1 className="text-3xl serif text-stone-900 mb-2">Shop All Skincare</h1>
<p className="text-stone-500 text-sm max-w-lg mx-auto">Effective, clinical formulations for every skin concern. Mix and match to build your perfect routine.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">

<aside className="w-full md:w-64 hidden md:block shrink-0">
<div className="sticky top-24 space-y-8">
<div>
<h3 className="font-bold text-sm mb-3">Concern</h3>
<ul className="space-y-2 text-sm text-stone-600">
<li className="flex items-center gap-2"><div className="w-4 h-4 border border-stone-300 rounded-sm"></div> Acne &amp; Blemishes</li>
<li className="flex items-center gap-2"><div className="w-4 h-4 border border-stone-300 rounded-sm"></div> Dryness</li>
<li className="flex items-center gap-2"><div className="w-4 h-4 border border-stone-300 rounded-sm"></div> Fine Lines</li>
<li className="flex items-center gap-2"><div className="w-4 h-4 border border-stone-300 rounded-sm"></div> Sensitive Skin</li>
</ul>
</div>
<div>
<h3 className="font-bold text-sm mb-3">Product Type</h3>
<ul className="space-y-2 text-sm text-stone-600">
<li className="cursor-pointer hover:text-stone-900">Cleansers</li>
<li className="cursor-pointer hover:text-stone-900">Serums</li>
<li className="cursor-pointer hover:text-stone-900">Moisturizers</li>
<li className="cursor-pointer hover:text-stone-900">Sunscreen</li>
</ul>
</div>
</div>
</aside>

<div className="md:hidden flex gap-4 overflow-x-auto pb-4 no-scrollbar">
<button className="flex items-center gap-2 border border-stone-300 rounded-full px-4 py-1.5 text-xs font-medium whitespace-nowrap bg-white">
<iconify-icon icon="solar:filter-linear"></iconify-icon> Filter
                    </button>
<button className="border border-stone-200 rounded-full px-4 py-1.5 text-xs font-medium whitespace-nowrap bg-stone-50">Concerns</button>
<button className="border border-stone-200 rounded-full px-4 py-1.5 text-xs font-medium whitespace-nowrap bg-stone-50">Type</button>
</div>

<div className="flex-1">
<div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-6">

<div className="col-span-2 bg-[#E7E5E4] p-6 flex flex-col justify-center items-start rounded-sm relative overflow-hidden">
<div className="relative z-10 max-w-xs">
<span className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-2 block">Value Set</span>
<h3 className="text-2xl serif text-stone-900 mb-2">The Glow Routine</h3>
<p className="text-sm text-stone-700 mb-4">Cleanser + Vitamin C + Moisturizer. Everything you need for glass skin.</p>
<button className="bg-stone-900 text-white px-6 py-2 text-xs font-bold uppercase tracking-wide rounded-sm hover:bg-stone-800">
                                    Shop Bundle (Save 20%)
                                </button>
</div>

<div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/30 rounded-full blur-2xl"></div>
</div>

<div className="group cursor-pointer" onclick="switchView('pdp')">
<div className="relative aspect-3-4 bg-stone-200 mb-4 overflow-hidden rounded-sm">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-stone-900 text-white w-10 h-10 rounded-full flex items-center justify-center translate-y-14 group-hover:translate-y-0 transition-transform duration-300 shadow-lg z-20">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="text-sm font-semibold text-stone-900">Vitamin C Serum</h3>
<span className="text-sm font-medium text-stone-900">$48</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-3-4 bg-stone-200 mb-4 overflow-hidden rounded-sm">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<h3 className="text-sm font-semibold text-stone-900">Barrier Repair Cream</h3>
<span className="text-sm font-medium text-stone-900">$36</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-3-4 bg-stone-200 mb-4 overflow-hidden rounded-sm">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<h3 className="text-sm font-semibold text-stone-900">Gel Cleanser</h3>
<span className="text-sm font-medium text-stone-900">$24</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-3-4 bg-stone-200 mb-4 overflow-hidden rounded-sm">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1563804447971-6e113ab80713?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="text-sm font-semibold text-stone-900">Mineral SPF 50</h3>
<span className="text-sm font-medium text-stone-900">$32</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fade-enter hidden" id="view-pdp">

<div className="max-w-7xl mx-auto px-4 py-4 text-xs text-stone-500 flex items-center gap-2">
<span className="cursor-pointer hover:text-stone-900" onclick="switchView('home')">Home</span> / 
                <span className="cursor-pointer hover:text-stone-900" onclick="switchView('collection')">Serums</span> / 
                <span className="text-stone-900 font-medium">Vitamin C Brightening Serum</span>
</div>

<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-20">

<div className="flex flex-col gap-4">
<div className="aspect-[4/5] bg-stone-100 rounded-sm overflow-hidden relative">

<div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
<span className="bg-stone-900 text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-sm shadow-sm">Best Seller</span>
<span className="bg-white/90 text-stone-900 text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-sm shadow-sm">Cruelty-Free</span>
</div>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>

<div className="grid grid-cols-4 gap-2">
<div className="aspect-square bg-stone-100 rounded-sm border-2 border-stone-900 cursor-pointer overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-stone-100 rounded-sm cursor-pointer overflow-hidden opacity-70 hover:opacity-100">

<div className="w-full h-full bg-[#EADDCD]"></div>
</div>
<div className="aspect-square bg-stone-100 rounded-sm cursor-pointer overflow-hidden opacity-70 hover:opacity-100">

<div className="w-full h-full bg-stone-300"></div>
</div>
<div className="aspect-square bg-stone-100 rounded-sm cursor-pointer overflow-hidden opacity-70 hover:opacity-100 flex items-center justify-center text-xs text-stone-500 bg-stone-50">
                            Video
                       </div>
</div>
</div>

<div className="flex flex-col pt-2">
<h1 className="text-3xl lg:text-4xl serif text-stone-900 mb-2">Vitamin C Brightening Serum</h1>
<p className="text-lg text-stone-600 mb-4">Visibly brightens and reduces dark spots in 14 days.</p>

<div className="flex items-center gap-4 mb-6 pb-6 border-b border-stone-100">
<div className="flex text-amber-500 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-sm text-stone-900 font-medium hover:underline cursor-pointer">4.9/5.0 (428 reviews)</span>
<span className="text-xs text-stone-500 border-l border-stone-200 pl-4">120+ sold in last 24h</span>
</div>

<div className="space-y-3 mb-8">
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-900 mt-1 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-stone-700"> to reduce hyperpigmentation.</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-900 mt-1 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-stone-700"> + Ferulic Acid.</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-900 mt-1 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-stone-700"> formula (fragrance-free).</span>
</div>
</div>

<div className="border border-stone-200 rounded-md p-4 mb-6 bg-white space-y-3">

<label className="flex items-start cursor-pointer group">
<input checked="" className="peer sr-only" name="purchase_type" type="radio"/>
<div className="w-5 h-5 border border-stone-300 rounded-full mr-3 peer-checked:border-stone-900 peer-checked:border-[6px] transition-all shrink-0 mt-0.5"></div>
<div className="flex-1">
<div className="flex justify-between items-center">
<span className="font-semibold text-stone-900">Subscribe &amp; Save 15%</span>
<span className="font-bold text-stone-900">$40.80</span>
</div>
<p className="text-xs text-stone-500 mt-1">Free shipping. Cancel or skip anytime.</p>
<select className="mt-2 text-xs border border-stone-200 rounded px-2 py-1 bg-stone-50 text-stone-700 focus:outline-none">
<option>Deliver every 30 days</option>
<option>Deliver every 60 days</option>
</select>
</div>
</label>
<div className="w-full h-px bg-stone-100 my-2"></div>

<label className="flex items-center cursor-pointer group">
<input className="peer sr-only" name="purchase_type" type="radio"/>
<div className="w-5 h-5 border border-stone-300 rounded-full mr-3 peer-checked:border-stone-900 peer-checked:border-[6px] transition-all shrink-0"></div>
<div className="flex-1 flex justify-between items-center">
<span className="text-stone-700 font-medium">One-time purchase</span>
<span className="text-stone-700 font-medium">$48.00</span>
</div>
</label>
</div>

<div className="flex gap-4 mb-4">
<div className="w-24 border border-stone-300 rounded-sm flex items-center justify-between px-3 h-12">
<button className="text-stone-500 hover:text-stone-900 text-lg">-</button>
<span className="text-stone-900 font-medium">1</span>
<button className="text-stone-500 hover:text-stone-900 text-lg">+</button>
</div>
<button className="flex-1 bg-stone-900 text-white font-bold text-sm uppercase tracking-wide rounded-sm hover:bg-stone-800 transition-all h-12 flex items-center justify-center gap-2 shadow-lg" onclick="toggleCart()">
<span>Add to Cart</span>
<span className="hidden sm:inline">—</span>
<span>$40.80</span>
</button>
</div>

<div className="flex justify-center gap-6 text-[10px] text-stone-500 mb-8 uppercase tracking-wide">
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> 30-Day Guarantee</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:box-linear"></iconify-icon> Free Shipping</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:card-linear"></iconify-icon> Secure Checkout</span>
</div>

<div className="bg-stone-100 p-4 rounded-sm flex items-center gap-4 border border-stone-200">
<img className="w-12 h-16 object-cover rounded-sm bg-stone-200" src="https://images.unsplash.com/photo-1563804447971-6e113ab80713?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-xs font-bold text-stone-900 uppercase">Complete the Routine</p>
<p className="text-xs text-stone-600">Daily Mineral SPF 50 protects your glow.</p>
</div>
<button className="bg-white border border-stone-900 text-stone-900 text-[10px] font-bold uppercase px-3 py-1.5 rounded-sm hover:bg-stone-50">
                            Add +$32
                        </button>
</div>
</div>
</div>


<section className="bg-[#F5F5F4] py-16">
<div className="max-w-7xl mx-auto px-4">
<h2 className="text-2xl serif text-center mb-12">Why your skin needs this</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-stone-800">
<iconify-icon icon="solar:sun-2-linear" width="32"></iconify-icon>
</div>
<h3 className="font-bold text-stone-900 mb-2">Fades Dark Spots</h3>
<p className="text-sm text-stone-600 px-4">Potent antioxidants target hyperpigmentation and sun damage for an even tone.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-stone-800">
<iconify-icon icon="solar:shield-star-linear" width="32"></iconify-icon>
</div>
<h3 className="font-bold text-stone-900 mb-2">Protects Barrier</h3>
<p className="text-sm text-stone-600 px-4">Defends against environmental stressors and pollution that cause premature aging.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-stone-800">
<iconify-icon icon="solar:magic-stick-3-linear" width="32"></iconify-icon>
</div>
<h3 className="font-bold text-stone-900 mb-2">Boosts Radiance</h3>
<p className="text-sm text-stone-600 px-4">Exfoliates gently to reveal fresh, glowing skin without irritation.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-2xl serif mb-6">Powered by Science, <br/>Kind to Skin.</h2>
<div className="space-y-6">
<div className="border-l-2 border-stone-900 pl-4">
<h4 className="font-bold text-stone-900">15% L-Ascorbic Acid</h4>
<p className="text-sm text-stone-600 mt-1">The purest form of Vitamin C. Validated by dermatologists to brighten skin.</p>
</div>
<div className="border-l-2 border-stone-200 pl-4 hover:border-stone-400 transition-colors">
<h4 className="font-bold text-stone-900">Ferulic Acid</h4>
<p className="text-sm text-stone-600 mt-1">Stabilizes Vitamin C and boosts its antioxidant effectiveness.</p>
</div>
<div className="border-l-2 border-stone-200 pl-4 hover:border-stone-400 transition-colors">
<h4 className="font-bold text-stone-900">Vitamin E</h4>
<p className="text-sm text-stone-600 mt-1">Soathes and nourishes the skin lipid barrier.</p>
</div>
<button className="text-xs font-bold uppercase border-b border-stone-900 pb-0.5 mt-2">View Full Ingredient List</button>
</div>
</div>
<div className="bg-stone-100 aspect-square rounded-sm overflow-hidden">

<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1615396899839-c99c121888b0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-16 bg-stone-900 text-stone-50">
<div className="max-w-7xl mx-auto px-4 text-center">
<h2 className="text-2xl serif mb-10">Real Results Timeline</h2>
<div className="grid grid-cols-3 gap-4 md:gap-8 relative">

<div className="absolute top-6 left-0 w-full h-px bg-stone-700 hidden md:block z-0"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 bg-stone-800 border border-stone-600 rounded-full flex items-center justify-center font-bold mb-4">1</div>
<h4 className="font-bold mb-2">Week 1</h4>
<p className="text-sm text-stone-400">Skin feels softer and more hydrated. Immediate glow upon application.</p>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 bg-stone-800 border border-stone-600 rounded-full flex items-center justify-center font-bold mb-4">2</div>
<h4 className="font-bold mb-2">Week 2</h4>
<p className="text-sm text-stone-400">Skin tone appears more even. Dullness is significantly reduced.</p>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 bg-white text-stone-900 border border-white rounded-full flex items-center justify-center font-bold mb-4">4</div>
<h4 className="font-bold mb-2">Week 4</h4>
<p className="text-sm text-stone-400">Dark spots visibly faded. Skin looks radiant, firm, and healthy.</p>
</div>
</div>
<p className="text-[10px] text-stone-600 mt-10 italic">*Based on a 4-week consumer study of 50 participants.</p>
</div>
</section>

<section className="py-16 max-w-3xl mx-auto px-4">
<h2 className="text-2xl serif text-center mb-8">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white border border-stone-200 rounded-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
<span>Can I use this with Retinol?</span>
<span className="transition group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="text-stone-600 text-sm p-4 pt-0">
                            We recommend using Vitamin C in the morning and Retinol at night to avoid potential irritation and maximize the benefits of both actives.
                        </div>
</details>
<details className="group bg-white border border-stone-200 rounded-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
<span>Is this suitable for sensitive skin?</span>
<span className="transition group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="text-stone-600 text-sm p-4 pt-0">
                            Yes! Our formula is fragrance-free and includes Vitamin E to soothe the skin barrier. However, we always recommend patch testing first.
                        </div>
</details>
<details className="group bg-white border border-stone-200 rounded-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
<span>Does it oxidize quickly?</span>
<span className="transition group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="text-stone-600 text-sm p-4 pt-0">
                            Our opaque, air-tight packaging keeps the formula stable for 6 months after opening. Store in a cool, dry place.
                        </div>
</details>
</div>
</section>

<div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-stone-200 p-4 z-30 flex items-center gap-4">
<div className="flex-1">
<p className="text-xs font-bold text-stone-900">Vitamin C Serum</p>
<p className="text-xs text-stone-500">$48.00</p>
</div>
<button className="bg-stone-900 text-white px-6 py-3 text-sm font-bold uppercase rounded-sm" onclick="toggleCart()">Add</button>
</div>
</div>
</main>

<footer className="bg-[#E7E5E4] pt-16 pb-8 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<span className="font-sans font-bold text-xl tracking-tighter text-stone-900 uppercase">LUMEN.</span>
<p className="text-xs text-stone-600 mt-4 leading-relaxed">Clinically effective skincare designed to support your skin barrier and deliver real results.</p>
<div className="flex gap-4 mt-4 text-stone-900">
<iconify-icon icon="solar:instagram-linear"></iconify-icon>
<iconify-icon icon="solar:facebook-linear"></iconify-icon>
<iconify-icon icon="solar:tiktok-linear"></iconify-icon>
</div>
</div>
<div>
<h4 className="font-bold text-sm mb-4">Shop</h4>
<ul className="text-sm text-stone-600 space-y-2">
<li><a className="hover:text-stone-900" href="#">All Products</a></li>
<li><a className="hover:text-stone-900" href="#">Bundles</a></li>
<li><a className="hover:text-stone-900" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-sm mb-4">Help</h4>
<ul className="text-sm text-stone-600 space-y-2">
<li><a className="hover:text-stone-900" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-stone-900" href="#">FAQ</a></li>
<li><a className="hover:text-stone-900" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-sm mb-4">About</h4>
<ul className="text-sm text-stone-600 space-y-2">
<li><a className="hover:text-stone-900" href="#">Our Story</a></li>
<li><a className="hover:text-stone-900" href="#">Ingredients</a></li>
<li><a className="hover:text-stone-900" href="#">Sustainability</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-500 gap-4">
<p>© 2023 LUMEN Skincare. All rights reserved.</p>
<div className="flex gap-4">
<span>Privacy Policy</span>
<span>Terms of Service</span>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 invisible transition-all duration-300" id="cart-drawer">

<div className="absolute inset-0 bg-stone-900/50 opacity-0 transition-opacity duration-300" id="cart-backdrop" onclick="toggleCart()"></div>

<div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col" id="cart-panel">

<div className="p-5 border-b border-stone-100 flex justify-between items-center">
<h2 className="text-lg font-bold serif text-stone-900">Your Cart (2)</h2>
<button className="text-stone-500 hover:text-stone-900" onclick="toggleCart()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="px-5 py-4 bg-[#F5F5F4]">
<p className="text-xs text-stone-600 mb-2 font-medium">You're $15 away from <span className="text-stone-900 font-bold">Free Shipping</span></p>
<div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
<div className="bg-stone-900 h-full w-3/4 rounded-full"></div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-6">

<div className="flex gap-4">
<div className="w-20 h-24 bg-stone-100 shrink-0 rounded-sm">
<img className="w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold text-stone-900">Vitamin C Serum</h3>
<span className="text-sm font-medium">$40.80</span>
</div>
<p className="text-xs text-stone-500 mb-2">Subscribe &amp; Save (Every 30 days)</p>
<div className="flex items-center justify-between">
<div className="border border-stone-200 rounded-sm flex items-center px-2 py-1 text-xs">
<button className="px-1 text-stone-400">-</button>
<span className="px-2 font-medium">1</span>
<button className="px-1 text-stone-400">+</button>
</div>
<button className="text-[10px] text-stone-400 border-b border-stone-300">Remove</button>
</div>
</div>
</div>

<div className="flex gap-4">
<div className="w-20 h-24 bg-stone-100 shrink-0 rounded-sm">
<img className="w-full h-full object-cover rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold text-stone-900">Gentle Cleanser</h3>
<span className="text-sm font-medium">$24.00</span>
</div>
<p className="text-xs text-stone-500 mb-2">One-time purchase</p>
<div className="flex items-center justify-between">
<div className="border border-stone-200 rounded-sm flex items-center px-2 py-1 text-xs">
<button className="px-1 text-stone-400">-</button>
<span className="px-2 font-medium">1</span>
<button className="px-1 text-stone-400">+</button>
</div>
<button className="text-[10px] text-stone-400 border-b border-stone-300">Remove</button>
</div>
</div>
</div>

<div className="bg-stone-50 border border-stone-100 p-3 rounded-sm mt-4">
<p className="text-xs font-bold uppercase text-stone-900 mb-2">You might also need</p>
<div className="flex items-center gap-3">
<div className="w-10 h-12 bg-white rounded-sm shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1563804447971-6e113ab80713?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<p className="text-xs font-semibold text-stone-900">Daily SPF 50</p>
<p className="text-[10px] text-stone-500">Must-have protection</p>
</div>
<button className="text-[10px] font-bold bg-white border border-stone-300 px-2 py-1 rounded-sm uppercase hover:bg-stone-900 hover:text-white transition-colors">
                            Add +$32
                        </button>
</div>
</div>
</div>

<div className="p-5 border-t border-stone-100 bg-white">
<div className="flex justify-between items-center mb-4 text-sm">
<span className="text-stone-600">Subtotal</span>
<span className="font-bold text-stone-900">$64.80</span>
</div>
<p className="text-[10px] text-stone-500 text-center mb-3">Shipping &amp; taxes calculated at checkout.</p>
<button className="w-full bg-stone-900 text-white py-4 font-bold uppercase tracking-wide text-sm rounded-sm hover:bg-stone-800 transition-colors shadow-lg">
                    Checkout Now
                </button>
</div>
</div>
</div>



    </>
  );
}
