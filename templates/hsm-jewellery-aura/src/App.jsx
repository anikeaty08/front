import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function showPage(pageId) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
                setTimeout(() => {
                    if(!section.classList.contains('active')) section.style.display = 'none';
                }, 0); // Immediate for simplicity in this demo, animation handled by CSS
            });

            // Show target section
            const target = document.getElementById(pageId);
            if (target) {
                target.style.display = 'block';
                // Small delay to allow display:block to apply before adding opacity class if we were doing JS animation
                // But CSS animation handles the entry
                target.classList.add('active');
                window.scrollTo(0, 0);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-slate-50 border-b border-slate-100 text-xs py-2 hidden md:block">
<div className="container mx-auto px-6 flex justify-between items-center text-slate-500">
<div className="flex gap-6">
<span>Free Shipping on Orders Over ₹50,000</span>
<span>Lifetime Exchange Policy</span>
</div>
<div className="flex gap-6">
<a className="hover:text-slate-900 transition-colors" href="#">Store Locator</a>
<a className="hover:text-slate-900 transition-colors" href="#">Track Order</a>
<a className="hover:text-slate-900 transition-colors" href="#">Contact</a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
<div className="container mx-auto px-4 md:px-6 py-4">
<div className="flex items-center justify-between gap-8">

<button className="md:hidden text-slate-600">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>

<a className="flex-shrink-0" href="#" onclick="showPage('home')">
<h1 className="text-2xl font-medium tracking-tighter text-slate-900">HSM<span className="text-amber-600">.</span></h1>
</a>

<div className="hidden md:flex flex-1 max-w-xl relative">
<input className="w-full bg-slate-50 border border-slate-200 rounded-full py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-slate-300 focus:bg-white transition-all placeholder:text-slate-400" placeholder="Search for Gold, Silver, Solitaires..." type="text"/>
<span className="iconify absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" data-icon="lucide:search" data-strokeWidth="1.5" data-width="18"></span>
</div>

<div className="flex items-center gap-5 md:gap-8">
<div className="hidden md:flex flex-col items-center cursor-pointer group">
<span className="iconify text-slate-600 group-hover:text-amber-600 transition-colors" data-icon="lucide:user" data-strokeWidth="1.5" data-width="22"></span>
<span className="text-[10px] uppercase tracking-wide mt-1 text-slate-500 group-hover:text-amber-600">Account</span>
</div>
<div className="flex flex-col items-center cursor-pointer group relative">
<span className="iconify text-slate-600 group-hover:text-amber-600 transition-colors" data-icon="lucide:heart" data-strokeWidth="1.5" data-width="22"></span>
<span className="text-[10px] uppercase tracking-wide mt-1 text-slate-500 group-hover:text-amber-600 hidden md:block">Wishlist</span>
</div>
<div className="flex flex-col items-center cursor-pointer group relative">
<span className="iconify text-slate-600 group-hover:text-amber-600 transition-colors" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="22"></span>
<span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">2</span>
<span className="text-[10px] uppercase tracking-wide mt-1 text-slate-500 group-hover:text-amber-600 hidden md:block">Cart</span>
</div>
</div>
</div>
</div>

<nav className="border-t border-slate-50 hidden md:block">
<div className="container mx-auto px-6">
<ul className="flex justify-center gap-10 py-3 text-sm font-medium text-slate-600 tracking-tight">
<li><a className="hover:text-amber-600 transition-colors" href="#" onclick="showPage('home')">Home</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#" onclick="showPage('listing')">New Arrivals</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#" onclick="showPage('listing')">Gold Jewellery</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#" onclick="showPage('listing')">Silver Jewellery</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#" onclick="showPage('listing')">Coins</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#" onclick="showPage('listing')">Collections</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#" onclick="showPage('about')">About Us</a></li>
</ul>
</div>
</nav>
</header>

<main className="page-section active" id="home">

<section className="relative bg-slate-50 overflow-hidden">
<div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-6 md:pr-12">
<span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold tracking-wider uppercase rounded-full">New Collection 2024</span>
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-slate-900 leading-tight">
                            The Golden <br/>Standard of <span className="text-amber-600 serif italic">Luxury.</span>
</h2>
<p className="text-slate-600 text-lg font-light leading-relaxed max-w-md">
                            Discover exquisite craftsmanship in 22k Gold and Sterling Silver. Tradition meets modern elegance.
                        </p>
<div className="flex gap-4 pt-4">
<button className="bg-slate-900 text-white px-8 py-3.5 text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-200" onclick="showPage('listing')">Shop Gold</button>
<button className="bg-white border border-slate-200 text-slate-900 px-8 py-3.5 text-sm font-medium hover:bg-slate-50 transition-all" onclick="showPage('listing')">Shop Silver</button>
</div>
</div>
<div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
<img alt="Hero Jewelry" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="container mx-auto px-4 md:px-6">
<h3 className="text-xl font-medium tracking-tight text-center mb-10">Shop By Category</h3>
<div className="flex flex-wrap justify-center gap-8 md:gap-12">

<div className="group cursor-pointer flex flex-col items-center gap-3" onclick="showPage('listing')">
<div className="w-24 h-24 rounded-full overflow-hidden border border-slate-100 shadow-md group-hover:border-amber-200 transition-all">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-amber-600">Rings</span>
</div>

<div className="group cursor-pointer flex flex-col items-center gap-3" onclick="showPage('listing')">
<div className="w-24 h-24 rounded-full overflow-hidden border border-slate-100 shadow-md group-hover:border-amber-200 transition-all">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-amber-600">Necklaces</span>
</div>

<div className="group cursor-pointer flex flex-col items-center gap-3" onclick="showPage('listing')">
<div className="w-24 h-24 rounded-full overflow-hidden border border-slate-100 shadow-md group-hover:border-amber-200 transition-all">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-amber-600">Earrings</span>
</div>

<div className="group cursor-pointer flex flex-col items-center gap-3" onclick="showPage('listing')">
<div className="w-24 h-24 rounded-full overflow-hidden border border-slate-100 shadow-md group-hover:border-amber-200 transition-all">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-amber-600">Bangles</span>
</div>

<div className="group cursor-pointer flex flex-col items-center gap-3" onclick="showPage('listing')">
<div className="w-24 h-24 rounded-full overflow-hidden border border-slate-100 shadow-md group-hover:border-amber-200 transition-all">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-amber-600">Mangalsutras</span>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50/50">
<div className="container mx-auto px-4 md:px-6">
<div className="flex justify-between items-end mb-8">
<div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900">Trending in Gold</h3>
<p className="text-slate-500 text-sm mt-1">Handpicked designs for the season.</p>
</div>
<button className="text-sm font-medium text-amber-700 flex items-center gap-1 hover:gap-2 transition-all" onclick="showPage('listing')">View All <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span></button>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-lg p-3 group border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300">
<div className="relative overflow-hidden rounded-md aspect-[4/5] bg-slate-100 mb-4 cursor-pointer" onclick="showPage('product')">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-sm hover:text-red-500 transition-colors cursor-pointer">
<span className="iconify" data-icon="lucide:heart" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div className="absolute top-3 left-3 bg-amber-600 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide">Best Seller</div>
</div>
<h4 className="text-sm font-medium text-slate-900 truncate">Royal 22k Gold Antique Necklace</h4>
<div className="flex justify-between items-center mt-2">
<span className="text-base font-semibold text-slate-900">₹1,45,000</span>
<span className="text-xs text-slate-500 line-through">₹1,52,000</span>
</div>
</div>

<div className="bg-white rounded-lg p-3 group border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300">
<div className="relative overflow-hidden rounded-md aspect-[4/5] bg-slate-100 mb-4 cursor-pointer" onclick="showPage('product')">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-sm hover:text-red-500 transition-colors cursor-pointer">
<span className="iconify" data-icon="lucide:heart" data-strokeWidth="1.5" data-width="18"></span>
</div>
</div>
<h4 className="text-sm font-medium text-slate-900 truncate">Floral Diamond &amp; Gold Ring</h4>
<div className="flex justify-between items-center mt-2">
<span className="text-base font-semibold text-slate-900">₹32,500</span>
</div>
</div>

<div className="bg-white rounded-lg p-3 group border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300">
<div className="relative overflow-hidden rounded-md aspect-[4/5] bg-slate-100 mb-4 cursor-pointer" onclick="showPage('product')">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-sm hover:text-red-500 transition-colors cursor-pointer">
<span className="iconify" data-icon="lucide:heart" data-strokeWidth="1.5" data-width="18"></span>
</div>
</div>
<h4 className="text-sm font-medium text-slate-900 truncate">Geometric Gold Earrings</h4>
<div className="flex justify-between items-center mt-2">
<span className="text-base font-semibold text-slate-900">₹18,900</span>
<span className="text-xs text-slate-500 line-through">₹22,000</span>
</div>
</div>

<div className="bg-white rounded-lg p-3 group border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300">
<div className="relative overflow-hidden rounded-md aspect-[4/5] bg-slate-100 mb-4 cursor-pointer" onclick="showPage('product')">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-sm hover:text-red-500 transition-colors cursor-pointer">
<span className="iconify" data-icon="lucide:heart" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div className="absolute top-3 left-3 bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide">New</div>
</div>
<h4 className="text-sm font-medium text-slate-900 truncate">Silver Bracelet with Charms</h4>
<div className="flex justify-between items-center mt-2">
<span className="text-base font-semibold text-slate-900">₹8,400</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-slate-100 bg-white">
<div className="container mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="flex flex-col items-center gap-2">
<span className="iconify text-amber-600" data-icon="lucide:award" data-strokeWidth="1.5" data-width="32"></span>
<h4 className="text-sm font-semibold text-slate-900">BIS Hallmarked</h4>
<p className="text-xs text-slate-500">100% Certified Jewellery</p>
</div>
<div className="flex flex-col items-center gap-2">
<span className="iconify text-amber-600" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="32"></span>
<h4 className="text-sm font-semibold text-slate-900">Lifetime Exchange</h4>
<p className="text-xs text-slate-500">Hassle-free exchange policy</p>
</div>
<div className="flex flex-col items-center gap-2">
<span className="iconify text-amber-600" data-icon="lucide:truck" data-strokeWidth="1.5" data-width="32"></span>
<h4 className="text-sm font-semibold text-slate-900">Insured Shipping</h4>
<p className="text-xs text-slate-500">Safe doorstep delivery</p>
</div>
<div className="flex flex-col items-center gap-2">
<span className="iconify text-amber-600" data-icon="lucide:gem" data-strokeWidth="1.5" data-width="32"></span>
<h4 className="text-sm font-semibold text-slate-900">Best Designs</h4>
<p className="text-xs text-slate-500">Curated by top designers</p>
</div>
</div>
</div>
</section>
</main>

<main className="page-section" id="listing">
<div className="bg-slate-50 py-8 border-b border-slate-200">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Gold Jewellery</h2>
<div className="text-sm text-slate-500 mt-2 flex gap-2">
<span className="cursor-pointer hover:text-slate-900" onclick="showPage('home')">Home</span> / <span>Gold</span>
</div>
</div>
</div>
<div className="container mx-auto px-6 py-10">
<div className="flex flex-col md:flex-row gap-10">

<aside className="w-full md:w-64 flex-shrink-0 space-y-8">

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">Price</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded-sm flex items-center justify-center transition-colors">
<span className="iconify text-white hidden" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Under ₹10,000</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded-sm flex items-center justify-center transition-colors">
<span className="iconify text-white hidden" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900">₹10,000 - ₹30,000</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="hidden custom-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded-sm flex items-center justify-center transition-colors">
<span className="iconify text-white hidden" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900">₹30,000 - ₹50,000</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded-sm flex items-center justify-center transition-colors">
<span className="iconify text-white hidden" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Above ₹50,000</span>
</label>
</div>
</div>
<div className="h-px bg-slate-100 w-full"></div>

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">Purity</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded-sm flex items-center justify-center transition-colors">
<span className="iconify text-white hidden" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900">24k Gold</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="hidden custom-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded-sm flex items-center justify-center transition-colors">
<span className="iconify text-white hidden" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900">22k Gold</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded-sm flex items-center justify-center transition-colors">
<span className="iconify text-white hidden" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900">18k Gold</span>
</label>
</div>
</div>
</aside>

<div className="flex-1">
<div className="flex justify-between items-center mb-6">
<span className="text-sm text-slate-500">Showing 1-9 of 45 products</span>
<div className="flex items-center gap-2">
<span className="text-sm text-slate-500">Sort by:</span>
<div className="relative group">
<button className="text-sm font-medium text-slate-900 flex items-center gap-1">Newest <span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span></button>
</div>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-3 gap-6">


<div className="bg-white group" onclick="showPage('product')">
<div className="relative overflow-hidden rounded-lg aspect-square bg-slate-50 mb-3">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1588444650733-d0767b753fc8?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-0 left-0 w-full bg-slate-900 text-white py-3 text-xs font-medium uppercase tracking-wider translate-y-full group-hover:translate-y-0 transition-transform duration-300">Add to Cart</button>
</div>
<h4 className="text-sm font-medium text-slate-900">Elegant Gold Pendant</h4>
<p className="text-slate-500 text-xs mt-1">22k Gold | 4.5g</p>
<div className="mt-2 font-semibold text-slate-900">₹28,500</div>
</div>

<div className="bg-white group" onclick="showPage('product')">
<div className="relative overflow-hidden rounded-lg aspect-square bg-slate-50 mb-3">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<button className="absolute bottom-0 left-0 w-full bg-slate-900 text-white py-3 text-xs font-medium uppercase tracking-wider translate-y-full group-hover:translate-y-0 transition-transform duration-300">Add to Cart</button>
</div>
<h4 className="text-sm font-medium text-slate-900">Diamond Studded Ring</h4>
<p className="text-slate-500 text-xs mt-1">18k Gold | 0.5ct Diamond</p>
<div className="mt-2 font-semibold text-slate-900">₹45,000</div>
</div>

<div className="bg-white group" onclick="showPage('product')">
<div className="relative overflow-hidden rounded-lg aspect-square bg-slate-50 mb-3">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-0 left-0 w-full bg-slate-900 text-white py-3 text-xs font-medium uppercase tracking-wider translate-y-full group-hover:translate-y-0 transition-transform duration-300">Add to Cart</button>
</div>
<h4 className="text-sm font-medium text-slate-900">Classic Gold Bangles</h4>
<p className="text-slate-500 text-xs mt-1">22k Gold | Set of 2</p>
<div className="mt-2 font-semibold text-slate-900">₹1,12,000</div>
</div>

<div className="bg-white group" onclick="showPage('product')">
<div className="relative overflow-hidden rounded-lg aspect-square bg-slate-50 mb-3">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<button className="absolute bottom-0 left-0 w-full bg-slate-900 text-white py-3 text-xs font-medium uppercase tracking-wider translate-y-full group-hover:translate-y-0 transition-transform duration-300">Add to Cart</button>
</div>
<h4 className="text-sm font-medium text-slate-900">Temple Jewellery Necklace</h4>
<p className="text-slate-500 text-xs mt-1">22k Gold Antique</p>
<div className="mt-2 font-semibold text-slate-900">₹2,45,000</div>
</div>
</div>

<div className="flex justify-center mt-12">
<div className="flex gap-2">
<button className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900"><span className="iconify" data-icon="lucide:chevron-left" data-width="16"></span></button>
<button className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center text-sm font-medium">1</button>
<button className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-sm font-medium">2</button>
<button className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-sm font-medium">3</button>
<button className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900"><span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span></button>
</div>
</div>
</div>
</div>
</div>
</main>

<main className="page-section" id="product">
<div className="container mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

<div className="space-y-4">
<div className="aspect-[4/5] bg-slate-100 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="grid grid-cols-4 gap-4">
<div className="aspect-square rounded-md overflow-hidden border border-amber-600 cursor-pointer">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="aspect-square rounded-md overflow-hidden border border-slate-200 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="aspect-square rounded-md overflow-hidden border border-slate-200 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="pt-2">
<div className="flex items-center gap-2 mb-4">
<span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded">Best Seller</span>
<span className="text-xs font-medium text-slate-500">SKU: HSM-GLD-0045</span>
</div>
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-2">Royal Antique 22k Gold Necklace</h1>
<div className="flex items-center gap-2 mb-6">
<div className="flex text-amber-400">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star-half" data-width="16"></span>
</div>
<span className="text-sm text-slate-500">(128 Reviews)</span>
</div>
<div className="text-3xl font-semibold text-slate-900 mb-6">₹1,45,000 <span className="text-lg font-normal text-slate-400 line-through ml-2">₹1,52,000</span></div>
<div className="space-y-6 border-t border-b border-slate-100 py-6 mb-8">
<div>
<h3 className="text-sm font-medium text-slate-900 mb-3">Purity</h3>
<div className="flex gap-3">
<button className="px-4 py-2 border-2 border-slate-900 text-slate-900 text-sm font-medium rounded-sm">22 KT</button>
<button className="px-4 py-2 border border-slate-200 text-slate-600 hover:border-slate-300 text-sm font-medium rounded-sm">18 KT</button>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-3">Weight (Gross)</h3>
<div className="text-sm text-slate-600">24.5 Grams</div>
</div>
</div>
<div className="flex gap-4 mb-8">
<button className="flex-1 bg-slate-900 text-white py-4 text-sm font-semibold uppercase tracking-wide hover:bg-slate-800 transition-colors shadow-xl shadow-slate-200">Add to Cart</button>
<button className="flex-none px-5 border border-slate-200 text-slate-600 hover:text-red-500 hover:border-red-200 transition-colors">
<span className="iconify" data-icon="lucide:heart" data-width="20"></span>
</button>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3">
<span className="iconify text-slate-400 mt-1" data-icon="lucide:truck" data-width="20"></span>
<div>
<h4 className="text-sm font-medium text-slate-900">Free Insured Shipping</h4>
<p className="text-xs text-slate-500">Delivery in 5-7 business days.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="iconify text-slate-400 mt-1" data-icon="lucide:rotate-ccw" data-width="20"></span>
<div>
<h4 className="text-sm font-medium text-slate-900">14 Day Returns</h4>
<p className="text-xs text-slate-500">Easy returns and lifetime exchange.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<main className="page-section" id="about">
<div className="bg-slate-900 text-white py-20">
<div className="container mx-auto px-6 text-center">
<h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Crafting Memories Since 1980</h1>
<p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">The hallmark of purity and trust.</p>
</div>
</div>
<div className="container mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Who We Are</h2>
<p className="text-slate-600 leading-relaxed mb-6">
                        At Hsm Jewellers, we believe that jewelry is more than just an accessory; it is an emotion, an heirloom, and a symbol of love. Established with a vision to bring transparency and world-class craftsmanship to the Indian jewelry market, we have grown into a name synonymous with trust.
                    </p>
<p className="text-slate-600 leading-relaxed">
                        Modeled on principles of integrity, our collections in Gold and Silver are BIS Hallmarked and curated to suit both traditional weddings and modern lifestyle needs.
                    </p>
</div>
<div className="bg-slate-100 rounded-2xl overflow-hidden aspect-video">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-20">
<div className="bg-slate-100 rounded-2xl overflow-hidden aspect-video order-2 md:order-1">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 md:order-2">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Our Mission &amp; Vision</h2>
<div className="space-y-6">
<div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Mission</h3>
<p className="text-slate-600 text-sm leading-relaxed">To provide the finest quality gold and silver jewelry with absolute transparency in pricing and purity, ensuring every customer feels like family.</p>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Vision</h3>
<p className="text-slate-600 text-sm leading-relaxed">To become the most preferred jewelry brand, known not just for our designs, but for our ethical standards and customer-centric approach.</p>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-slate-900 text-slate-400 pt-16 pb-8 text-sm">
<div className="container mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-12">
<div className="col-span-2 lg:col-span-2">
<h2 className="text-2xl font-medium tracking-tighter text-white mb-6">HSM.</h2>
<p className="max-w-xs mb-6 font-light">
                        Exquisite gold and silver jewelry for every occasion. Certified for purity, crafted for eternity.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="16"></span></a>
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="16"></span></a>
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
</div>
</div>
<div>
<h3 className="text-white font-medium mb-4">Shop</h3>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#" onclick="showPage('listing')">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#" onclick="showPage('listing')">Gold</a></li>
<li><a className="hover:text-white transition-colors" href="#" onclick="showPage('listing')">Silver</a></li>
<li><a className="hover:text-white transition-colors" href="#" onclick="showPage('listing')">Coins</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-medium mb-4">Support</h3>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#">Track Order</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Returns &amp; Exchange</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-medium mb-4">About</h3>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#" onclick="showPage('about')">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#" onclick="showPage('about')">Mission &amp; Vision</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Store Locator</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-light text-xs">© 2024 Hsm Jewellers. All rights reserved.</p>
<div className="flex gap-2">

<div className="w-10 h-6 bg-slate-800 rounded"></div>
<div className="w-10 h-6 bg-slate-800 rounded"></div>
<div className="w-10 h-6 bg-slate-800 rounded"></div>
</div>
</div>
</div>
</footer>



    </>
  );
}
