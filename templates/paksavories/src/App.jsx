import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      window.lucide && window.lucide.createIcons({ attrs: { strokeWidth: 1.5 } });

      // Year
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();

      // Smooth scroll for in-page #order links (optional enhancement)
      document.querySelectorAll('a[href="#order"]').forEach(a => {
        a.addEventListener('click', (e) => {
          e.preventDefault();
          document.getElementById('order')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full bg-slate-50 border-b border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-xs text-slate-700">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="truck"></i>
<span>Free local delivery in GTA on orders over CA$75</span>
</div>
<div className="hidden sm:flex items-center gap-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="thermometer-snowflake"></i>
<span>Ships frozen with insulated packaging</span>
</div>
<div className="hidden md:flex items-center gap-2">
<i className="w-4 h-4" data-lucide="shield-check"></i>
<span>Quality guaranteed</span>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-9 h-9 rounded-md bg-slate-900 text-white grid place-items-center tracking-tight text-sm font-semibold">FS</div>
<div className="flex flex-col leading-tight">
<span className="text-[17px] font-semibold tracking-tight">Frozen Savories</span>
<span className="text-xs text-slate-500">Toronto, Canada</span>
</div>
</a>

<div className="hidden md:flex flex-1 px-8">
<div className="w-full max-w-xl relative">
<i className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="search"></i>
<input className="w-full pl-10 pr-3 py-2.5 rounded-md border border-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-300 text-sm placeholder:text-slate-400" id="searchInput" placeholder="Search samosas, rolls, kebabs..." type="search"/>
</div>
</div>

<div className="flex items-center gap-2">
<a className="hidden lg:flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-200 transition" href="#order">
<i className="w-4 h-4" data-lucide="phone"></i>
<span>Contact</span>
</a>
<a className="relative flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 transition" href="#order">
<i className="w-5 h-5" data-lucide="shopping-cart"></i>
<span className="hidden sm:inline">Order</span>
</a>
<button className="md:hidden p-2 rounded-md border border-slate-200 hover:bg-slate-50" id="mobileMenuButton">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden border-t border-slate-200 px-4 pb-3">
<div className="relative mt-3">
<i className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="search"></i>
<input className="w-full pl-10 pr-3 py-2.5 rounded-md border border-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-300 text-sm placeholder:text-slate-400" id="searchInputMobile" placeholder="Search samosas, rolls, kebabs..." type="search"/>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-8 py-10 md:py-14">
<div className="flex flex-col justify-center">
<div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-slate-200 text-xs text-slate-700 w-fit mb-4">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
<span>Handmade, Cook from Frozen</span>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">Authentic Frozen Samosas, Rolls &amp; Kebabs</h1>
<p className="mt-4 text-slate-600 text-base sm:text-[15px] leading-relaxed">Small-batch fillings, flaky pastry, and juicy kebabs made in Toronto. Perfect for parties, quick dinners, and late-night cravings. Ready in minutes — bake, air-fry, or deep-fry.</p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-slate-900 text-white text-sm font-medium hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-slate-100" href="#shop">
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
                Shop bestsellers
              </a>
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-slate-200 hover:bg-slate-50 text-sm text-slate-900" href="#how-it-works">
<i className="w-4 h-4" data-lucide="thermometer-snowflake"></i>
                How delivery works
              </a>
</div>
<div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="leaf"></i>
<span>Vegetarian options</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="badge-check"></i>
<span>Made in Canada</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="flame"></i>
<span>No added MSG</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-200">
<img alt="Freshly fried samosas" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="absolute -bottom-4 -left-4 bg-white border border-slate-200 rounded-lg shadow-sm p-3 hidden sm:flex items-center gap-3">
<img alt="Chef" className="w-10 h-10 rounded-md object-cover" src="https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="text-sm">
<div className="font-medium text-slate-900">Chef Sana</div>
<div className="text-slate-600">"Crispy outside, generous fillings inside."</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-slate-700">
<div className="flex items-center gap-2 border border-slate-200 rounded-md px-3 py-2.5">
<i className="w-4 h-4" data-lucide="clock-3"></i>
<span>Ready in 15 minutes</span>
</div>
<div className="flex items-center gap-2 border border-slate-200 rounded-md px-3 py-2.5">
<i className="w-4 h-4" data-lucide="snowflake"></i>
<span>Frozen-fresh sealed</span>
</div>
<div className="flex items-center gap-2 border border-slate-200 rounded-md px-3 py-2.5">
<i className="w-4 h-4" data-lucide="package"></i>
<span>Eco-friendly packs</span>
</div>
<div className="flex items-center gap-2 border border-slate-200 rounded-md px-3 py-2.5">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span>Local pickup available</span>
</div>
</div>
</section>

<section className="py-10 md:py-14" id="shop">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-4 mb-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Shop Frozen Favourites</h2>
<p className="text-slate-600 text-sm mt-1">Cook from frozen. Vegetarian and halal options.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="filter-btn px-3 py-2 rounded-md border border-slate-900 bg-slate-900 text-white text-sm" data-filter="all">All</button>
<button className="filter-btn px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50" data-filter="samosas">Samosas</button>
<button className="filter-btn px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50" data-filter="rolls">Rolls</button>
<button className="filter-btn px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50" data-filter="kebabs">Kebabs</button>
<button className="filter-btn px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50" data-filter="sweets">Sweets</button>
</div>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="productGrid">


<div className="product-card group border border-slate-200 rounded-xl overflow-hidden hover:shadow-sm transition" data-category="samosas" data-id="p1" data-name="Vegetable Samosa (Potato &amp; Pea)" data-price="13.99">
<div className="relative">
<img alt="Vegetable samosa" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90-blur px-2 py-1 rounded-md text-xs border border-slate-200">12 pcs • 600g</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="font-medium tracking-tight">Vegetable Samosa</h3>
<p className="text-sm text-slate-600 mt-1">Classic potato &amp; pea with warm spices.</p>
</div>
<div className="text-right">
<div className="text-slate-900 font-medium">CA$13.99</div>
<div className="text-xs text-slate-500">Per pack</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-1 text-xs text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="leaf"></i>
<span>Veg</span>
</div>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm hover:opacity-95" href="#order">
<i className="w-4 h-4" data-lucide="plus"></i>
                  Order
                </a>
</div>
</div>
</div>

<div className="product-card group border border-slate-200 rounded-xl overflow-hidden hover:shadow-sm transition" data-category="samosas" data-id="p2" data-name="Chicken Samosa" data-price="15.99">
<div className="relative">
<img alt="Chicken samosa" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs border border-slate-200">10 pcs • 500g</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="font-medium tracking-tight">Chicken Samosa</h3>
<p className="text-sm text-slate-600 mt-1">Juicy ground chicken with herbs.</p>
</div>
<div className="text-right">
<div className="text-slate-900 font-medium">CA$15.99</div>
<div className="text-xs text-slate-500">Per pack</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-1 text-xs text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="flame"></i>
<span>High protein</span>
</div>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm hover:opacity-95" href="#order">
<i className="w-4 h-4" data-lucide="plus"></i>
                  Order
                </a>
</div>
</div>
</div>

<div className="product-card group border border-slate-200 rounded-xl overflow-hidden hover:shadow-sm transition" data-category="rolls" data-id="p3" data-name="Vegetable Spring Rolls" data-price="11.99">
<div className="relative">
<img alt="Vegetable spring rolls" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs border border-slate-200">18 pcs • 540g</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="font-medium tracking-tight">Vegetable Spring Rolls</h3>
<p className="text-sm text-slate-600 mt-1">Cabbage, carrot, and glass noodles.</p>
</div>
<div className="text-right">
<div className="text-slate-900 font-medium">CA$11.99</div>
<div className="text-xs text-slate-500">Per pack</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-1 text-xs text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="leaf"></i>
<span>Veg</span>
</div>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm hover:opacity-95" href="#order">
<i className="w-4 h-4" data-lucide="plus"></i>
                  Order
                </a>
</div>
</div>
</div>

<div className="product-card group border border-slate-200 rounded-xl overflow-hidden hover:shadow-sm transition" data-category="rolls" data-id="p4" data-name="Chicken Rolls" data-price="14.49">
<div className="relative">
<img alt="Chicken rolls" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs border border-slate-200">12 pcs • 600g</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="font-medium tracking-tight">Chicken Rolls</h3>
<p className="text-sm text-slate-600 mt-1">Savory chicken and scallion filling.</p>
</div>
<div className="text-right">
<div className="text-slate-900 font-medium">CA$14.49</div>
<div className="text-xs text-slate-500">Per pack</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-1 text-xs text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="chef-hat"></i>
<span>Pan fry / air fry</span>
</div>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm hover:opacity-95" href="#order">
<i className="w-4 h-4" data-lucide="plus"></i>
                  Order
                </a>
</div>
</div>
</div>

<div className="product-card group border border-slate-200 rounded-xl overflow-hidden hover:shadow-sm transition" data-category="kebabs" data-id="p5" data-name="Beef Seekh Kebabs" data-price="16.99">
<div className="relative">
<img alt="Seekh kebabs" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs border border-slate-200">8 pcs • 560g</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="font-medium tracking-tight">Beef Seekh Kebabs</h3>
<p className="text-sm text-slate-600 mt-1">Hand-rolled, aromatic spices.</p>
</div>
<div className="text-right">
<div className="text-slate-900 font-medium">CA$16.99</div>
<div className="text-xs text-slate-500">Per pack</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-1 text-xs text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="flame"></i>
<span>BBQ / oven</span>
</div>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm hover:opacity-95" href="#order">
<i className="w-4 h-4" data-lucide="plus"></i>
                  Order
                </a>
</div>
</div>
</div>

<div className="product-card group border border-slate-200 rounded-xl overflow-hidden hover:shadow-sm transition" data-category="kebabs" data-id="p6" data-name="Chicken Tikka Skewers" data-price="17.49">
<div className="relative">
<img alt="Chicken tikka skewers" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs border border-slate-200">6 skewers • 540g</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="font-medium tracking-tight">Chicken Tikka Skewers</h3>
<p className="text-sm text-slate-600 mt-1">Yogurt marinade, citrus &amp; spice.</p>
</div>
<div className="text-right">
<div className="text-slate-900 font-medium">CA$17.49</div>
<div className="text-xs text-slate-500">Per pack</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-1 text-xs text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="badge-check"></i>
<span>Gluten-free</span>
</div>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm hover:opacity-95" href="#order">
<i className="w-4 h-4" data-lucide="plus"></i>
                  Order
                </a>
</div>
</div>
</div>

<div className="product-card group border border-slate-200 rounded-xl overflow-hidden hover:shadow-sm transition" data-category="sweets" data-id="p7" data-name="Gulab Jamun (Frozen)" data-price="9.99">
<div className="relative">
<img alt="Gulab jamun" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs border border-slate-200">10 pcs • 400g</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="font-medium tracking-tight">Gulab Jamun (Frozen)</h3>
<p className="text-sm text-slate-600 mt-1">Soft spheres in rose cardamom syrup.</p>
</div>
<div className="text-right">
<div className="text-slate-900 font-medium">CA$9.99</div>
<div className="text-xs text-slate-500">Per pack</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-1 text-xs text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
<span>Family favorite</span>
</div>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm hover:opacity-95" href="#order">
<i className="w-4 h-4" data-lucide="plus"></i>
                  Order
                </a>
</div>
</div>
</div>

<div className="product-card group border border-slate-200 rounded-xl overflow-hidden hover:shadow-sm transition" data-category="samosas" data-id="p8" data-name="Paneer &amp; Pepper Samosa" data-price="14.99">
<div className="relative">
<img alt="Paneer samosa" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs border border-slate-200">12 pcs • 600g</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="font-medium tracking-tight">Paneer &amp; Pepper Samosa</h3>
<p className="text-sm text-slate-600 mt-1">Creamy paneer, bell peppers, spices.</p>
</div>
<div className="text-right">
<div className="text-slate-900 font-medium">CA$14.99</div>
<div className="text-xs text-slate-500">Per pack</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-1 text-xs text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="leaf"></i>
<span>Veg</span>
</div>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm hover:opacity-95" href="#order">
<i className="w-4 h-4" data-lucide="plus"></i>
                  Order
                </a>
</div>
</div>
</div>

<div className="product-card group border border-slate-200 rounded-xl overflow-hidden hover:shadow-sm transition" data-category="kebabs" data-id="p9" data-name="Marinated Lamb Chops (Frozen)" data-price="24.99">
<div className="relative">
<img alt="Marinated lamb chops" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs border border-slate-200">6 pcs • 720g</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="font-medium tracking-tight">Marinated Lamb Chops</h3>
<p className="text-sm text-slate-600 mt-1">Garlic, cumin, and chili marinade.</p>
</div>
<div className="text-right">
<div className="text-slate-900 font-medium">CA$24.99</div>
<div className="text-xs text-slate-500">Per pack</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-1 text-xs text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="flame"></i>
<span>Grill / oven</span>
</div>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm hover:opacity-95" href="#order">
<i className="w-4 h-4" data-lucide="plus"></i>
                  Order
                </a>
</div>
</div>
</div>

<div className="product-card group border border-slate-200 rounded-xl overflow-hidden hover:shadow-sm transition" data-category="rolls" data-id="p10" data-name="Paneer Tikka Rolls" data-price="13.49">
<div className="relative">
<img alt="Paneer tikka rolls" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs border border-slate-200">10 pcs • 500g</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="font-medium tracking-tight">Paneer Tikka Rolls</h3>
<p className="text-sm text-slate-600 mt-1">Smoky paneer with herbs.</p>
</div>
<div className="text-right">
<div className="text-slate-900 font-medium">CA$13.49</div>
<div className="text-xs text-slate-500">Per pack</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-1 text-xs text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="leaf"></i>
<span>Veg</span>
</div>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm hover:opacity-95" href="#order">
<i className="w-4 h-4" data-lucide="plus"></i>
                  Order
                </a>
</div>
</div>
</div>

<div className="product-card group border border-slate-200 rounded-xl overflow-hidden hover:shadow-sm transition" data-category="sweets" data-id="p11" data-name="Ras Malai (Frozen)" data-price="12.99">
<div className="relative">
<img alt="Ras Malai" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs border border-slate-200">12 pcs • 600g</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="font-medium tracking-tight">Ras Malai (Frozen)</h3>
<p className="text-sm text-slate-600 mt-1">Creamy saffron milk, pistachio garnish.</p>
</div>
<div className="text-right">
<div className="text-slate-900 font-medium">CA$12.99</div>
<div className="text-xs text-slate-500">Per pack</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-1 text-xs text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="snowflake"></i>
<span>Serve chilled</span>
</div>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm hover:opacity-95" href="#order">
<i className="w-4 h-4" data-lucide="plus"></i>
                  Order
                </a>
</div>
</div>
</div>

<div className="product-card group border border-slate-200 rounded-xl overflow-hidden hover:shadow-sm transition" data-category="samosas" data-id="p12" data-name="Spicy Beef Samosa" data-price="16.49">
<div className="relative">
<img alt="Beef samosa" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs border border-slate-200">10 pcs • 500g</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="font-medium tracking-tight">Spicy Beef Samosa</h3>
<p className="text-sm text-slate-600 mt-1">Chili kick with coriander &amp; cumin.</p>
</div>
<div className="text-right">
<div className="text-slate-900 font-medium">CA$16.49</div>
<div className="text-xs text-slate-500">Per pack</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-1 text-xs text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="flame"></i>
<span>Spicy</span>
</div>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm hover:opacity-95" href="#order">
<i className="w-4 h-4" data-lucide="plus"></i>
                  Order
                </a>
</div>
</div>
</div>
</div>

<div className="mt-6 sm:hidden flex items-center gap-2 overflow-x-auto pb-2" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<button className="filter-btn px-3 py-2 rounded-md border border-slate-900 bg-slate-900 text-white text-sm whitespace-nowrap" data-filter="all">All</button>
<button className="filter-btn px-3 py-2 rounded-md border border-slate-200 text-sm whitespace-nowrap hover:bg-slate-50" data-filter="samosas">Samosas</button>
<button className="filter-btn px-3 py-2 rounded-md border border-slate-200 text-sm whitespace-nowrap hover:bg-slate-50" data-filter="rolls">Rolls</button>
<button className="filter-btn px-3 py-2 rounded-md border border-slate-200 text-sm whitespace-nowrap hover:bg-slate-50" data-filter="kebabs">Kebabs</button>
<button className="filter-btn px-3 py-2 rounded-md border border-slate-200 text-sm whitespace-nowrap hover:bg-slate-50" data-filter="sweets">Sweets</button>
</div>
</div>
</section>

<section className="border-t border-slate-200 py-10 md:py-14" id="order">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How to Order from Us</h2>
<p className="text-sm text-slate-600 mt-2">Pick your preferred way to place an order. Tell us the items and quantities, and we’ll confirm availability, total, and delivery/pickup.</p>
<div className="grid md:grid-cols-3 gap-6 mt-6">

<a className="group border border-slate-200 rounded-xl p-5 hover:bg-slate-50 transition flex flex-col" href="https://wa.me/14165550134?text=Hi%20Frozen%20Savories%2C%20I%27d%20like%20to%20order%20the%20following%3A%20" rel="noopener noreferrer" target="_blank">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="message-circle"></i>
<h3 className="font-medium tracking-tight">WhatsApp Us</h3>
</div>
<p className="text-sm text-slate-600 mt-3">Fastest response. Chat with us directly and place your order.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-900">
<span>Open WhatsApp</span>
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</a>

<a className="group border border-slate-200 rounded-xl p-5 hover:bg-slate-50 transition flex flex-col" href="https://ig.me/m/frozensavories" rel="noopener noreferrer" target="_blank">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="instagram"></i>
<h3 className="font-medium tracking-tight">Instagram DM</h3>
</div>
<p className="text-sm text-slate-600 mt-3">Send us a DM with your list and we’ll confirm right away.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-900">
<span>Message on Instagram</span>
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</a>

<a className="group border border-slate-200 rounded-xl p-5 hover:bg-slate-50 transition flex flex-col" href="https://www.facebook.com/marketplace/" rel="noopener noreferrer" target="_blank">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="facebook"></i>
<h3 className="font-medium tracking-tight">Facebook Marketplace</h3>
</div>
<p className="text-sm text-slate-600 mt-3">Prefer browsing there? Visit our shop and message us to order.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-900">
<span>Visit our store</span>
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</a>
</div>
<div className="mt-6 p-4 border border-slate-200 rounded-lg">
<div className="flex items-start gap-3">
<i className="w-5 h-5 mt-0.5" data-lucide="info"></i>
<div className="text-sm text-slate-600">
              Tip: Include your postal code for delivery, preferred date/time, and any dietary notes. We respond within business hours.
            </div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 py-10 md:py-14" id="how-it-works">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">Delivery &amp; Pickup</h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="border border-slate-200 rounded-xl p-5">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="truck"></i>
<h3 className="font-medium tracking-tight">Local Delivery (GTA)</h3>
</div>
<p className="text-sm text-slate-600 mt-3">Free over CA$75. Flat CA$9.99 under CA$75. Delivered in insulated packaging within 1–2 days.</p>
</div>
<div className="border border-slate-200 rounded-xl p-5">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="globe"></i>
<h3 className="font-medium tracking-tight">Ontario &amp; Nationwide</h3>
</div>
<p className="text-sm text-slate-600 mt-3">Ships Mon–Thu with cold chain couriers. Rates at checkout based on postal code.</p>
</div>
<div className="border border-slate-200 rounded-xl p-5">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="store"></i>
<h3 className="font-medium tracking-tight">Pickup</h3>
</div>
<p className="text-sm text-slate-600 mt-3">Free pickup from our Toronto kitchen. Get notified when your order is ready.</p>
</div>
</div>
</div>
</section>

<section className="py-10 md:py-14">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Customers love it</h2>
<p className="text-sm text-slate-600 mt-1">Real reviews from Canadians.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-amber-500">
<i className="w-4 h-4 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-amber-500" data-lucide="star"></i>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="border border-slate-200 rounded-xl p-5">
<div className="flex items-center gap-3">
<img alt="Reviewer" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-medium tracking-tight">Amrita K.</div>
<div className="text-xs text-slate-500">Mississauga</div>
</div>
</div>
<p className="text-sm text-slate-700 mt-3">These samosas are a hit at every party. Crispy pastry and generous filling!</p>
</div>
<div className="border border-slate-200 rounded-xl p-5">
<div className="flex items-center gap-3">
<img alt="Reviewer" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-medium tracking-tight">Jason L.</div>
<div className="text-xs text-slate-500">Toronto</div>
</div>
</div>
<p className="text-sm text-slate-700 mt-3">Seekh kebabs were juicy and flavorful. Cooked straight from frozen in the air fryer.</p>
</div>
<div className="border border-slate-200 rounded-xl p-5">
<div className="flex items-center gap-3">
<img alt="Reviewer" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1607556114526-058f5efdf49e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-medium tracking-tight">Sarah P.</div>
<div className="text-xs text-slate-500">Ottawa</div>
</div>
</div>
<p className="text-sm text-slate-700 mt-3">Love the convenience. Tastes like restaurant quality at home.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 py-10 md:py-14">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Get promos and new drops</h3>
<p className="text-sm text-slate-600 mt-2">Monthly updates, no spam. Intro offer 10% off your first order.</p>
<form className="mt-4 flex items-center gap-2" onsubmit="return false;">
<input className="w-full sm:max-w-md px-3 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-4 focus:ring-slate-100" placeholder="you@example.com" required="" type="email"/>
<button className="px-4 py-2.5 rounded-md bg-slate-900 text-white text-sm hover:opacity-95" type="submit">Subscribe</button>
</form>
<p className="text-xs text-slate-500 mt-2">We’ll email you a one-time promo code.</p>
</div>
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Wholesale &amp; Catering</h3>
<p className="text-sm text-slate-600 mt-2">We supply cafes, caterers, and grocers. Tell us your volume and delivery needs.</p>
<form className="mt-4 grid sm:grid-cols-2 gap-3" onsubmit="return false;">
<input className="px-3 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-4 focus:ring-slate-100" placeholder="Business name" required="" type="text"/>
<input className="px-3 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-4 focus:ring-slate-100" placeholder="Contact person" type="text"/>
<input className="px-3 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-4 focus:ring-slate-100" placeholder="Email" required="" type="email"/>
<input className="px-3 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-4 focus:ring-slate-100" placeholder="Phone" type="tel"/>
<textarea className="sm:col-span-2 px-3 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-4 focus:ring-slate-100" placeholder="What products and quantities?" rows="3"></textarea>
<a className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-slate-900 text-white text-sm hover:opacity-95" href="#order">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
              Discuss via WhatsApp/DM
            </a>
</form>
<p className="text-xs text-slate-500 mt-2">We’ll follow up via your preferred channel.</p>
</div>
</div>
</section>

<footer className="border-t border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid sm:grid-cols-3 gap-8">
<div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-md bg-slate-900 text-white grid place-items-center tracking-tight text-xs font-semibold">FS</div>
<div className="text-sm">
<div className="font-medium tracking-tight">Frozen Savories</div>
<div className="text-slate-500">Toronto, ON</div>
</div>
</div>
<p className="text-sm text-slate-600 mt-3">Small-batch frozen snacks made with care. Bake, air-fry, or deep-fry — ready in minutes.</p>
<div className="mt-3 flex items-center gap-3 text-slate-700">
<a aria-label="Instagram" className="p-2 rounded-md border border-slate-200 hover:bg-slate-50" href="https://instagram.com/frozensavories" rel="noopener noreferrer" target="_blank">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a aria-label="Facebook" className="p-2 rounded-md border border-slate-200 hover:bg-slate-50" href="https://facebook.com" rel="noopener noreferrer" target="_blank">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
<a aria-label="Email" className="p-2 rounded-md border border-slate-200 hover:bg-slate-50" href="mailto:hello@frozensavories.ca">
<i className="w-4 h-4" data-lucide="mail"></i>
</a>
</div>
</div>
<div>
<h4 className="font-medium tracking-tight">Visit</h4>
<div className="mt-3 text-sm text-slate-600">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span>123 Dundas St E, Toronto, ON</span>
</div>
<div className="flex items-center gap-2 mt-2">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>Mon–Sat 10am–6pm</span>
</div>
<div className="flex items-center gap-2 mt-2">
<i className="w-4 h-4" data-lucide="phone"></i>
<span>(416) 555-0134</span>
</div>
</div>
</div>
<div>
<h4 className="font-medium tracking-tight">Info</h4>
<ul className="mt-3 text-sm text-slate-600 space-y-2">
<li><a className="hover:underline" href="#order">How to order</a></li>
<li><a className="hover:underline" href="#how-it-works">Shipping &amp; delivery</a></li>
<li><a className="hover:underline" href="#">Returns &amp; refunds</a></li>
<li><a className="hover:underline" href="#">Allergens</a></li>
<li><a className="hover:underline" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 mt-8 pt-4 flex items-center justify-between text-xs text-slate-500">
<span>© <span id="year"></span> Frozen Savories. All rights reserved.</span>
<span>Made with care in Canada.</span>
</div>
</div>
</footer>




    </>
  );
}
