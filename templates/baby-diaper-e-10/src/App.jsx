import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Simple Router Function
        function showPage(pageId) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block');
            });

            // Show target section
            const target = document.getElementById(pageId);
            if (target) {
                target.classList.remove('hidden');
                target.classList.add('block');
                window.scrollTo(0, 0);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="showPage('home')">
<span className="text-xl tracking-tight font-semibold text-teal-900">Wicombus</span>
</div>

<div className="hidden md:flex space-x-8">
<button className="text-sm font-medium text-stone-500 hover:text-teal-900 transition-colors" onclick="showPage('home')">Home</button>
<button className="text-sm font-medium text-stone-500 hover:text-teal-900 transition-colors" onclick="showPage('plp')">Shop All</button>
<button className="text-sm font-medium text-stone-500 hover:text-teal-900 transition-colors" onclick="showPage('plp')">Bundles</button>
<button className="text-sm font-medium text-stone-500 hover:text-teal-900 transition-colors">Our Story</button>
</div>

<div className="flex items-center gap-4">
<button className="p-2 text-stone-400 hover:text-teal-900 transition-colors rounded-full hover:bg-stone-100" onclick="showPage('account')">
<i className="w-5 h-5" data-lucide="user"></i>
</button>
<button className="p-2 text-stone-400 hover:text-teal-900 transition-colors rounded-full hover:bg-stone-100 relative" onclick="showPage('cart')">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-teal-500 rounded-full"></span>
</button>
<button className="md:hidden p-2 text-stone-400 hover:text-teal-900">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<main className="page-section block" id="home">

<div className="relative overflow-hidden pt-12 pb-24 lg:pt-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 mb-6">
<span className="w-2 h-2 rounded-full bg-teal-500"></span>
<span className="text-xs font-medium text-teal-800 uppercase tracking-wide">New Ultra-Dry Tech</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 mb-6 leading-[1.1]">
                            Softness needed for <br/> <span className="text-teal-800">peaceful dreams.</span>
</h1>
<p className="text-lg text-stone-500 mb-8 max-w-lg font-normal leading-relaxed">
                            Engineered for 12-hour leak protection with organic cotton softness. The safest choice for your baby's sensitive skin.
                        </p>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
<label className="block text-xs font-medium text-stone-500 uppercase tracking-wide mb-3">Quick Select Size</label>
<div className="flex flex-wrap gap-2">
<button className="w-10 h-10 rounded-full border border-stone-200 text-sm font-medium text-stone-600 hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50 transition-all">1</button>
<button className="w-10 h-10 rounded-full border border-teal-500 bg-teal-50 text-sm font-medium text-teal-700">2</button>
<button className="w-10 h-10 rounded-full border border-stone-200 text-sm font-medium text-stone-600 hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50 transition-all">3</button>
<button className="w-10 h-10 rounded-full border border-stone-200 text-sm font-medium text-stone-600 hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50 transition-all">4</button>
<button className="w-10 h-10 rounded-full border border-stone-200 text-sm font-medium text-stone-600 hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50 transition-all">5</button>
<button className="w-10 h-10 rounded-full border border-stone-200 text-sm font-medium text-stone-600 hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50 transition-all">6</button>
</div>
<div className="mt-4 flex gap-3">
<button className="flex-1 bg-stone-900 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-teal-900 transition-colors" onclick="showPage('pdp')">Shop Size 2</button>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square bg-stone-100 rounded-[3rem] overflow-hidden relative">

<div className="absolute inset-0 bg-stone-200 flex items-center justify-center text-stone-400">
<img alt="Baby sleeping" className="w-full h-full object-cover opacity-90 mix-blend-multiply" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex items-center gap-3">
<div className="bg-green-50 p-2 rounded-full text-green-600">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Dermatologist Tested</p>
<p className="text-xs text-stone-500">0% Fragrance or Chlorine</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="py-20 bg-white border-y border-stone-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8">
<div className="text-center p-4">
<div className="w-12 h-12 mx-auto bg-teal-50 rounded-2xl flex items-center justify-center text-teal-700 mb-4">
<i className="w-6 h-6" data-lucide="droplets"></i>
</div>
<h3 className="font-medium text-stone-900 mb-2">Maximum Absorbency</h3>
<p className="text-sm text-stone-500 leading-relaxed">Multi-layer core locks moisture away instantly for up to 12 hours.</p>
</div>
<div className="text-center p-4">
<div className="w-12 h-12 mx-auto bg-purple-50 rounded-2xl flex items-center justify-center text-purple-700 mb-4">
<i className="w-6 h-6" data-lucide="feather"></i>
</div>
<h3 className="font-medium text-stone-900 mb-2">Cloud-Like Comfort</h3>
<p className="text-sm text-stone-500 leading-relaxed">Silky soft materials that prevent chafing and irritation.</p>
</div>
<div className="text-center p-4">
<div className="w-12 h-12 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 mb-4">
<i className="w-6 h-6" data-lucide="shield"></i>
</div>
<h3 className="font-medium text-stone-900 mb-2">Leak Protection</h3>
<p className="text-sm text-stone-500 leading-relaxed">Double leg cuffs and high waistband to stop blowouts.</p>
</div>
<div className="text-center p-4">
<div className="w-12 h-12 mx-auto bg-rose-50 rounded-2xl flex items-center justify-center text-rose-700 mb-4">
<i className="w-6 h-6" data-lucide="heart"></i>
</div>
<h3 className="font-medium text-stone-900 mb-2">Skin Safe</h3>
<p className="text-sm text-stone-500 leading-relaxed">Hypoallergenic, breathable, and free from harsh chemicals.</p>
</div>
</div>
</div>
</div>
</main>

<main className="page-section hidden pt-8" id="plp">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-8">

<div className="w-full md:w-64 flex-shrink-0">
<div className="sticky top-24">
<h2 className="text-lg font-semibold tracking-tight text-stone-900 mb-6">Filters</h2>

<div className="mb-8">
<h3 className="text-xs font-medium text-stone-500 uppercase tracking-wide mb-3">Size</h3>
<div className="grid grid-cols-3 gap-2">
<button className="h-9 rounded-lg border border-stone-200 text-sm hover:border-teal-500 transition-colors">1</button>
<button className="h-9 rounded-lg border border-teal-500 bg-teal-50 text-teal-700 text-sm">2</button>
<button className="h-9 rounded-lg border border-stone-200 text-sm hover:border-teal-500 transition-colors">3</button>
<button className="h-9 rounded-lg border border-stone-200 text-sm hover:border-teal-500 transition-colors">4</button>
<button className="h-9 rounded-lg border border-stone-200 text-sm hover:border-teal-500 transition-colors">5</button>
<button className="h-9 rounded-lg border border-stone-200 text-sm hover:border-teal-500 transition-colors">6</button>
</div>
</div>

<div className="mb-8">
<h3 className="text-xs font-medium text-stone-500 uppercase tracking-wide mb-3">Collection</h3>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-stone-300 group-hover:border-teal-500 flex items-center justify-center">
<div className="w-2 h-2 bg-teal-500 rounded-sm hidden"></div>
</div>
<span className="text-sm text-stone-600">Wicombus Original</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-stone-300 group-hover:border-teal-500 flex items-center justify-center">
<div className="w-2 h-2 bg-teal-500 rounded-sm"></div> 
</div>
<span className="text-sm text-stone-600">Ultra-Dry Night</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-stone-300 group-hover:border-teal-500 flex items-center justify-center"></div>
<span className="text-sm text-stone-600">Sensitive Care</span>
</label>
</div>
</div>
</div>
</div>

<div className="flex-1">
<div className="flex justify-between items-center mb-6">
<h1 className="text-2xl font-semibold tracking-tight text-stone-900">Diapers &amp; Pants</h1>
<span className="text-sm text-stone-500">Showing 6 results</span>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group cursor-pointer" onclick="showPage('pdp')">
<div className="aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden mb-4 relative">
<img alt="Diaper Pack" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white/90 backdrop-blur text-stone-900 p-2 rounded-full shadow-sm hover:bg-teal-50 hover:text-teal-700">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<h3 className="text-base font-medium text-stone-900 group-hover:text-teal-800 transition-colors">Wicombus Daily Soft</h3>
<p className="text-sm text-stone-500 mb-2">Size 2 (148 Count)</p>
<p className="text-sm font-medium text-stone-900">$42.00</p>
</div>

<div className="group cursor-pointer" onclick="showPage('pdp')">
<div className="aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden mb-4 relative">
<img alt="Diaper Pack Night" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611080061386-2777f98d6c75?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-stone-900 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">Best Seller</div>
</div>
<h3 className="text-base font-medium text-stone-900 group-hover:text-teal-800 transition-colors">Wicombus Night Defense</h3>
<p className="text-sm text-stone-500 mb-2">Size 2 (132 Count)</p>
<p className="text-sm font-medium text-stone-900">$45.00</p>
</div>

<div className="group cursor-pointer" onclick="showPage('pdp')">
<div className="aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-teal-50 flex items-center justify-center">
<i className="w-12 h-12 text-teal-200" data-lucide="package"></i>
</div>
</div>
<h3 className="text-base font-medium text-stone-900 group-hover:text-teal-800 transition-colors">Monthly Mega Bundle</h3>
<p className="text-sm text-stone-500 mb-2">3 Packs + Wipes</p>
<p className="text-sm font-medium text-stone-900">$110.00 <span className="text-stone-400 line-through text-xs ml-1">$130</span></p>
</div>
</div>
</div>
</div>
</div>
</main>

<main className="page-section hidden pt-8" id="pdp">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<nav className="flex items-center text-xs text-stone-500 mb-6">
<span className="cursor-pointer hover:text-stone-900" onclick="showPage('home')">Home</span>
<i className="w-3 h-3 mx-2" data-lucide="chevron-right"></i>
<span className="cursor-pointer hover:text-stone-900" onclick="showPage('plp')">Diapers</span>
<i className="w-3 h-3 mx-2" data-lucide="chevron-right"></i>
<span className="text-stone-900">Wicombus Daily Soft</span>
</nav>
<div className="grid lg:grid-cols-2 gap-12 mb-20">

<div className="space-y-4">
<div className="aspect-[4/3] bg-stone-100 rounded-3xl overflow-hidden">
<img alt="Product Detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="grid grid-cols-4 gap-4">
<div className="aspect-square bg-stone-100 rounded-xl cursor-pointer ring-2 ring-teal-500">
<img alt="Thumb" className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div className="aspect-square bg-stone-100 rounded-xl cursor-pointer hover:opacity-80 transition-opacity"></div>
<div className="aspect-square bg-stone-100 rounded-xl cursor-pointer hover:opacity-80 transition-opacity"></div>
<div className="aspect-square bg-stone-100 rounded-xl cursor-pointer hover:opacity-80 transition-opacity"></div>
</div>
</div>

<div>
<h1 className="text-3xl font-semibold tracking-tight text-stone-900 mb-2">Wicombus Daily Soft</h1>
<div className="flex items-center gap-4 mb-6">
<span className="text-2xl font-medium text-stone-900">$42.00</span>
<div className="flex items-center gap-1 text-teal-600 bg-teal-50 px-2 py-1 rounded-md">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<span className="text-xs font-semibold">4.9 (128 reviews)</span>
</div>
</div>

<div className="mb-8">
<div className="flex justify-between items-center mb-3">
<span className="text-sm font-medium text-stone-900">Size</span>
<span className="text-xs text-stone-500">Weight: 12-18 lbs</span>
</div>
<div className="flex flex-wrap gap-3">
<button className="w-12 h-12 rounded-xl border border-stone-200 flex items-center justify-center text-sm font-medium text-stone-600 hover:border-teal-500 transition-colors">1</button>
<button className="w-12 h-12 rounded-xl border-2 border-teal-600 bg-teal-50 flex items-center justify-center text-sm font-bold text-teal-800">2</button>
<button className="w-12 h-12 rounded-xl border border-stone-200 flex items-center justify-center text-sm font-medium text-stone-600 hover:border-teal-500 transition-colors">3</button>
<button className="w-12 h-12 rounded-xl border border-stone-200 flex items-center justify-center text-sm font-medium text-stone-600 hover:border-teal-500 transition-colors">4</button>
<button className="w-12 h-12 rounded-xl border border-stone-200 flex items-center justify-center text-sm font-medium text-stone-600 hover:border-teal-500 transition-colors">5</button>
<button className="w-12 h-12 rounded-xl border border-stone-200 flex items-center justify-center text-sm font-medium text-stone-600 hover:border-teal-500 transition-colors">6</button>
</div>
</div>

<div className="mb-8">
<span className="block text-sm font-medium text-stone-900 mb-3">Style Variation</span>
<div className="grid grid-cols-2 gap-3">
<button className="border-2 border-teal-600 bg-teal-50/50 p-3 rounded-xl flex items-center gap-3 text-left">
<div className="w-4 h-4 rounded-full border border-teal-600 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-teal-600"></div>
</div>
<div>
<span className="block text-sm font-medium text-stone-900">Soft-Fit</span>
<span className="block text-xs text-stone-500">For daily comfort</span>
</div>
</button>
<button className="border border-stone-200 p-3 rounded-xl flex items-center gap-3 text-left hover:border-stone-300">
<div className="w-4 h-4 rounded-full border border-stone-300"></div>
<div>
<span className="block text-sm font-medium text-stone-900">Ultra-Dry</span>
<span className="block text-xs text-stone-500">Extra absorption</span>
</div>
</button>
</div>
</div>

<div className="flex gap-4 mb-8">
<div className="w-32 flex items-center border border-stone-200 rounded-xl px-4">
<button className="text-stone-400 hover:text-stone-900">-</button>
<input className="w-full text-center bg-transparent border-none focus:ring-0 text-stone-900 font-medium" type="number" value="1"/>
<button className="text-stone-400 hover:text-stone-900">+</button>
</div>
<button className="flex-1 bg-stone-900 text-white font-medium rounded-xl hover:bg-teal-900 transition-colors py-4" onclick="showPage('cart')">
                            Add to Cart - $42.00
                        </button>
</div>

<div className="border-t border-stone-100 pt-6 space-y-3">
<div className="flex justify-between text-sm">
<span className="text-stone-500">Material</span>
<span className="font-medium text-stone-900">Organic Cotton, Plant-based Core</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-stone-500">Absorbency</span>
<span className="font-medium text-stone-900">High (12 Hours)</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-stone-500">Sustainability</span>
<span className="font-medium text-stone-900">FSC Certified Pulp</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 lg:p-12 border border-stone-100">
<h2 className="text-2xl font-semibold tracking-tight text-stone-900 mb-8">Parent Reviews</h2>
<div className="grid lg:grid-cols-3 gap-12">

<div className="col-span-1">
<div className="text-5xl font-semibold text-stone-900 mb-2">4.9</div>
<div className="flex gap-1 text-teal-500 mb-2">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-stone-500 mb-6">Based on 128 verified reviews</p>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs font-medium text-stone-900 mb-1">
<span>Rash Free</span>
<span>98%</span>
</div>
<div className="w-full bg-stone-100 rounded-full h-1.5">
<div className="bg-teal-500 h-1.5 rounded-full" style={{width: '98%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium text-stone-900 mb-1">
<span>Leak Protection</span>
<span>96%</span>
</div>
<div className="w-full bg-stone-100 rounded-full h-1.5">
<div className="bg-teal-500 h-1.5 rounded-full" style={{width: '96%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium text-stone-900 mb-1">
<span>True to Size</span>
<span>92%</span>
</div>
<div className="w-full bg-stone-100 rounded-full h-1.5">
<div className="bg-teal-500 h-1.5 rounded-full" style={{width: '92%'}}></div>
</div>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-2 space-y-8">
<div className="border-b border-stone-100 pb-8">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="font-medium text-stone-900">Best diapers for sensitive skin</h4>
<p className="text-xs text-stone-400">Sarah M. • 2 weeks ago</p>
</div>
<div className="flex text-teal-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
<p className="text-sm text-stone-600 leading-relaxed">
                                We tried 4 different brands before Wicombus. My son had chronic diaper rash, but it cleared up within 2 days of switching to these. The soft-fit style is amazing.
                            </p>
</div>
<div>
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="font-medium text-stone-900">Zero leaks overnight</h4>
<p className="text-xs text-stone-400">James P. • 1 month ago</p>
</div>
<div className="flex text-teal-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
<p className="text-sm text-stone-600 leading-relaxed">
                                Finally getting sleep! These absorb so much more than store brands.
                            </p>
</div>
</div>
</div>
</div>
</div>
</main>

<main className="page-section hidden pt-12" id="cart">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<h1 className="text-2xl font-semibold tracking-tight text-stone-900 mb-8">Your Cart</h1>
<div className="grid md:grid-cols-3 gap-8">

<div className="md:col-span-2 space-y-6">

<div className="flex gap-4 p-4 bg-white rounded-2xl border border-stone-100">
<div className="w-24 h-24 bg-stone-100 rounded-xl overflow-hidden flex-shrink-0">
<img alt="Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between">
<h3 className="font-medium text-stone-900">Wicombus Daily Soft</h3>
<span className="font-medium text-stone-900">$42.00</span>
</div>
<p className="text-sm text-stone-500">Size 2 • Soft-Fit</p>
</div>
<div className="flex justify-between items-end">
<div className="flex items-center gap-3 border border-stone-200 rounded-lg px-2 py-1">
<button className="text-stone-400 text-xs">-</button>
<span className="text-sm font-medium text-stone-900">1</span>
<button className="text-stone-400 text-xs">+</button>
</div>
<button className="text-xs text-red-500 font-medium hover:text-red-600">Remove</button>
</div>
</div>
</div>

<div className="flex gap-4 p-4 bg-white rounded-2xl border border-stone-100">
<div className="w-24 h-24 bg-stone-100 rounded-xl overflow-hidden flex-shrink-0">
<div className="w-full h-full flex items-center justify-center text-stone-300">
<i className="w-8 h-8" data-lucide="package"></i>
</div>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between">
<h3 className="font-medium text-stone-900">Sensitive Wipes</h3>
<span className="font-medium text-stone-900">$12.00</span>
</div>
<p className="text-sm text-stone-500">3-Pack</p>
</div>
<div className="flex justify-between items-end">
<div className="flex items-center gap-3 border border-stone-200 rounded-lg px-2 py-1">
<button className="text-stone-400 text-xs">-</button>
<span className="text-sm font-medium text-stone-900">2</span>
<button className="text-stone-400 text-xs">+</button>
</div>
<button className="text-xs text-red-500 font-medium hover:text-red-600">Remove</button>
</div>
</div>
</div>
</div>

<div className="md:col-span-1">
<div className="bg-white p-6 rounded-2xl border border-stone-100 sticky top-24">
<h3 className="font-semibold text-stone-900 mb-4">Summary</h3>
<div className="space-y-3 border-b border-stone-100 pb-4 mb-4">
<div className="flex justify-between text-sm text-stone-600">
<span>Subtotal</span>
<span>$66.00</span>
</div>
<div className="flex justify-between text-sm text-stone-600">
<span>Shipping</span>
<span className="text-teal-600">Free</span>
</div>
<div className="flex justify-between text-sm text-stone-600">
<span>Tax</span>
<span>$5.28</span>
</div>
</div>
<div className="flex justify-between font-semibold text-lg text-stone-900 mb-6">
<span>Total</span>
<span>$71.28</span>
</div>
<button className="w-full bg-stone-900 text-white py-3 rounded-xl font-medium text-sm hover:bg-teal-900 transition-colors" onclick="showPage('checkout')">
                            Proceed to Checkout
                        </button>
</div>
</div>
</div>
</div>
</main>

<main className="page-section hidden pt-12" id="checkout">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12">

<div>
<h1 className="text-xl font-semibold tracking-tight text-stone-900 mb-6">Shipping Details</h1>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-stone-500 mb-1">First Name</label>
<input className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-500 mb-1">Last Name</label>
<input className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-stone-500 mb-1">Email</label>
<input className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-500 mb-1">Address</label>
<input className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" type="text"/>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="col-span-1">
<label className="block text-xs font-medium text-stone-500 mb-1">Zip Code</label>
<input className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" type="text"/>
</div>
<div className="col-span-2">
<label className="block text-xs font-medium text-stone-500 mb-1">City</label>
<input className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" type="text"/>
</div>
</div>
<div className="pt-8">
<h1 className="text-xl font-semibold tracking-tight text-stone-900 mb-6">Payment</h1>
<div className="bg-stone-100 rounded-xl p-4 flex flex-col gap-4 border border-stone-200">
<div className="flex gap-2">
<div className="w-10 h-6 bg-white rounded border border-stone-300"></div>
<div className="w-10 h-6 bg-white rounded border border-stone-300"></div>
</div>
<input className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm" placeholder="Card Number" type="text"/>
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm" placeholder="MM/YY" type="text"/>
<input className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm" placeholder="CVC" type="text"/>
</div>
</div>
</div>
<button className="w-full mt-6 bg-stone-900 text-white py-4 rounded-xl font-medium hover:bg-teal-900 transition-colors" onclick="showPage('account')" type="button">
                            Confirm Order ($71.28)
                        </button>
</form>
</div>

<div className="bg-stone-100 rounded-3xl p-8 h-fit">
<h2 className="font-medium text-stone-900 mb-6">Order Summary</h2>
<div className="space-y-4 mb-6">
<div className="flex gap-4">
<div className="w-16 h-16 bg-white rounded-lg overflow-hidden border border-stone-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-stone-900">Wicombus Daily Soft</p>
<p className="text-xs text-stone-500">Size 2 x 1</p>
</div>
<p className="text-sm font-medium text-stone-900">$42.00</p>
</div>
<div className="flex gap-4">
<div className="w-16 h-16 bg-white rounded-lg overflow-hidden border border-stone-200 flex items-center justify-center">
<i className="w-5 h-5 text-stone-400" data-lucide="package"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-stone-900">Sensitive Wipes</p>
<p className="text-xs text-stone-500">3-Pack x 2</p>
</div>
<p className="text-sm font-medium text-stone-900">$24.00</p>
</div>
</div>
<div className="border-t border-stone-200 pt-4 space-y-2">
<div className="flex justify-between text-sm text-stone-600">
<span>Subtotal</span>
<span>$66.00</span>
</div>
<div className="flex justify-between text-sm text-stone-600">
<span>Shipping</span>
<span>Free</span>
</div>
<div className="flex justify-between font-semibold text-stone-900 pt-2">
<span>Total</span>
<span>$71.28</span>
</div>
</div>
</div>
</div>
</div>
</main>

<main className="page-section hidden pt-12" id="account">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<h1 className="text-2xl font-semibold tracking-tight text-stone-900 mb-8">My Account</h1>
<div className="grid md:grid-cols-4 gap-8">

<div className="md:col-span-1 space-y-1">
<button className="w-full text-left px-4 py-2 bg-teal-50 text-teal-900 font-medium text-sm rounded-lg">Orders</button>
<button className="w-full text-left px-4 py-2 text-stone-500 hover:bg-stone-100 font-medium text-sm rounded-lg transition-colors">Subscription</button>
<button className="w-full text-left px-4 py-2 text-stone-500 hover:bg-stone-100 font-medium text-sm rounded-lg transition-colors">Profile</button>
<button className="w-full text-left px-4 py-2 text-stone-500 hover:bg-stone-100 font-medium text-sm rounded-lg transition-colors">Addresses</button>
</div>

<div className="md:col-span-3">
<div className="bg-white border border-stone-200 rounded-2xl p-6 mb-6">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="font-semibold text-stone-900">Order #WIC-8293</h3>
<p className="text-sm text-stone-500">Placed on Oct 24, 2023</p>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                                In Transit
                            </span>
</div>

<div className="relative py-8">
<div className="absolute top-1/2 left-0 w-full h-0.5 bg-stone-100 -translate-y-1/2"></div>
<div className="absolute top-1/2 left-0 w-3/4 h-0.5 bg-teal-500 -translate-y-1/2"></div>
<div className="relative flex justify-between">
<div className="text-center">
<div className="w-3 h-3 bg-teal-500 rounded-full mx-auto mb-2 ring-4 ring-white"></div>
<p className="text-xs font-medium text-stone-900">Confirmed</p>
</div>
<div className="text-center">
<div className="w-3 h-3 bg-teal-500 rounded-full mx-auto mb-2 ring-4 ring-white"></div>
<p className="text-xs font-medium text-stone-900">Packed</p>
</div>
<div className="text-center">
<div className="w-3 h-3 bg-teal-500 rounded-full mx-auto mb-2 ring-4 ring-white shadow-lg"></div>
<p className="text-xs font-medium text-stone-900">Shipped</p>
<p className="text-[10px] text-stone-400">Oct 25</p>
</div>
<div className="text-center">
<div className="w-3 h-3 bg-stone-200 rounded-full mx-auto mb-2 ring-4 ring-white"></div>
<p className="text-xs font-medium text-stone-400">Delivered</p>
</div>
</div>
</div>

<div className="mt-6 pt-6 border-t border-stone-100">
<div className="flex gap-4">
<img className="w-12 h-12 rounded-lg object-cover border border-stone-100" src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="flex-1">
<p className="text-sm font-medium text-stone-900">Monthly Bundle</p>
<p className="text-xs text-stone-500">Size 3</p>
</div>
<p className="text-sm font-medium text-stone-900">$110.00</p>
</div>
</div>
</div>

<div className="bg-white border border-stone-200 rounded-2xl p-6 opacity-60 hover:opacity-100 transition-opacity">
<div className="flex justify-between items-start">
<div>
<h3 className="font-semibold text-stone-900">Order #WIC-1002</h3>
<p className="text-sm text-stone-500">Placed on Sept 12, 2023</p>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">
                                Delivered
                            </span>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-stone-200 mt-20 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="font-semibold text-stone-900 mb-4">Shop</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-teal-900" href="#">Diapers</a></li>
<li><a className="hover:text-teal-900" href="#">Wipes</a></li>
<li><a className="hover:text-teal-900" href="#">Bundles</a></li>
<li><a className="hover:text-teal-900" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4">Support</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-teal-900" href="#">Track Order</a></li>
<li><a className="hover:text-teal-900" href="#">Returns</a></li>
<li><a className="hover:text-teal-900" href="#">Size Guide</a></li>
<li><a className="hover:text-teal-900" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4">Company</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-teal-900" href="#">Our Story</a></li>
<li><a className="hover:text-teal-900" href="#">Sustainability</a></li>
<li><a className="hover:text-teal-900" href="#">Careers</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="font-semibold text-stone-900 mb-4">Wicombus</h4>
<p className="text-sm text-stone-500 mb-4">Softness for peaceful dreams. Join our newsletter.</p>
<div className="flex gap-2">
<input className="bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-sm w-full outline-none focus:border-teal-500" placeholder="Email address" type="email"/>
<button className="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-900">Go</button>
</div>
</div>
</div>
<div className="flex justify-between items-center pt-8 border-t border-stone-100 text-xs text-stone-400">
<p>© 2023 Wicombus Inc.</p>
<div className="flex gap-4">
<span>Privacy</span>
<span>Terms</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
