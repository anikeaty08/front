import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="lg:hidden p-2 text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon height="20" icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</button>

<a className="text-lg font-semibold tracking-tighter uppercase z-10" href="#">
                Origameeaa
            </a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#collection">Collection</a>
<a className="hover:text-stone-900 transition-colors" href="#process">The Process</a>
<a className="hover:text-stone-900 transition-colors" href="#custom">Custom Orders</a>
<a className="hover:text-stone-900 transition-colors" href="#about">About</a>
</div>

<div className="flex items-center gap-4">
<button className="p-2 text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon height="20" icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="relative p-2 text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon height="20" icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-1 right-1 w-2 h-2 bg-stone-900 rounded-full"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-stone-600">New Hand-Painted Drop Available</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-stone-950">
                    Wearable art,<br/>
<span className="text-stone-400">crafted by hand.</span>
</h1>
<p className="text-lg text-stone-500 max-w-md leading-relaxed">
                    Each piece is individually painted, stitched, and crafted. Sustainable fashion meets abstract expressionism. Unique items for unique souls.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-all shadow-lg shadow-stone-900/10 hover:shadow-stone-900/20" href="#collection">
                        Shop Collection
                    </a>
<a className="inline-flex items-center justify-center h-12 px-6 rounded-lg border border-stone-200 bg-white text-stone-700 text-sm font-medium hover:border-stone-300 hover:bg-stone-50 transition-all" href="#custom">
                        Request Custom
                    </a>
</div>
</div>

<div className="relative h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden bg-stone-100 group">
<img alt="Hand painted clothing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm flex items-center justify-between">
<div>
<p className="text-xs font-semibold text-stone-900 uppercase tracking-wider">Featured</p>
<p className="text-sm text-stone-600">The "Origami" Linen Jacket</p>
</div>
<span className="text-sm font-medium text-stone-900">$240</span>
</div>
</div>
</div>
</section>

<section className="border-y border-stone-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="space-y-2">
<iconify-icon className="text-stone-900 mb-2" icon="lucide:brush" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-stone-900">Hand Painted</h3>
<p className="text-xs text-stone-500">Every stroke is unique.</p>
</div>
<div className="space-y-2">
<iconify-icon className="text-stone-900 mb-2" icon="lucide:leaf" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-stone-900">Eco-Friendly</h3>
<p className="text-xs text-stone-500">Sustainable materials only.</p>
</div>
<div className="space-y-2">
<iconify-icon className="text-stone-900 mb-2" icon="lucide:scissors" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-stone-900">Custom Fit</h3>
<p className="text-xs text-stone-500">Tailored to your size.</p>
</div>
<div className="space-y-2">
<iconify-icon className="text-stone-900 mb-2" icon="lucide:heart-handshake" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-stone-900">Small Batch</h3>
<p className="text-xs text-stone-500">Limited releases.</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="collection">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900">Latest Drops</h2>
<p className="text-stone-500 mt-2 text-sm">Fresh from the studio. Once they're gone, they're gone.</p>
</div>
<a className="text-sm font-medium text-stone-900 hover:text-stone-600 flex items-center gap-1 transition-colors group" href="#">
                View all products 
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 rounded-xl overflow-hidden mb-4">
<img alt="Painted Denim" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="absolute top-4 left-4 bg-stone-900 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">
                        One of a kind
                    </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-stone-900 group-hover:underline decoration-1 underline-offset-4">Abstract Denim Jacket</h3>
<p className="text-sm text-stone-500 mt-1">Hand-painted canvas patch</p>
</div>
<span className="text-sm font-medium text-stone-900">$185.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 rounded-xl overflow-hidden mb-4">
<img alt="Silk Scarf" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-stone-900 group-hover:underline decoration-1 underline-offset-4">Flow State Scarf</h3>
<p className="text-sm text-stone-500 mt-1">100% Raw Silk, Plant Dyed</p>
</div>
<span className="text-sm font-medium text-stone-900">$65.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 rounded-xl overflow-hidden mb-4">
<img alt="Embroidered Tee" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-[10px] uppercase font-bold px-2 py-1 rounded border border-stone-100">
                        Low Stock
                    </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-stone-900 group-hover:underline decoration-1 underline-offset-4">Origami Stitch Tee</h3>
<p className="text-sm text-stone-500 mt-1">Heavyweight Cotton</p>
</div>
<span className="text-sm font-medium text-stone-900">$55.00</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50" id="process">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="grid grid-cols-2 gap-4">
<img className="rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<img className="rounded-lg translate-y-12 opacity-80 hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
<div className="order-1 lg:order-2 space-y-6">
<iconify-icon className="text-stone-400" icon="lucide:pen-tool" width="32"></iconify-icon>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Not just clothing.<br/>It's a canvas.</h2>
<p className="text-stone-400 leading-relaxed text-sm lg:text-base">
                    At Origameeaa, every garment begins as a thought. I hand-select fabrics for texture and durability, then treat them with fabric paints, embroidery, and structural alterations. No two items are identical. When you buy from here, you are buying a piece of my time, my art, and my soul.
                </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-3 text-sm text-stone-300">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon>
                        Ethically sourced raw materials
                    </li>
<li className="flex items-center gap-3 text-sm text-stone-300">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon>
                        Non-toxic, permanent fabric pigments
                    </li>
<li className="flex items-center gap-3 text-sm text-stone-300">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon>
                        Shipped in biodegradable packaging
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto" id="custom">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900">Custom Commission</h2>
<p className="text-stone-500 mt-3 text-sm">Have a specific vision? Let's create something unique together. Fill out the form below to start the conversation.</p>
</div>
<form className="space-y-6 bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-stone-700">First Name</label>
<input className="w-full px-4 py-2.5 rounded-md border border-stone-200 bg-stone-50 focus:bg-white focus:ring-1 focus:ring-stone-900 focus:border-stone-900 outline-none transition-all text-sm placeholder:text-stone-400" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-700">Last Name</label>
<input className="w-full px-4 py-2.5 rounded-md border border-stone-200 bg-stone-50 focus:bg-white focus:ring-1 focus:ring-stone-900 focus:border-stone-900 outline-none transition-all text-sm placeholder:text-stone-400" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-700">Email Address</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3 text-stone-400" icon="lucide:mail" width="16"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2.5 rounded-md border border-stone-200 bg-stone-50 focus:bg-white focus:ring-1 focus:ring-stone-900 focus:border-stone-900 outline-none transition-all text-sm placeholder:text-stone-400" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-700">Type of Product</label>
<div className="relative">
<select className="w-full px-4 py-2.5 rounded-md border border-stone-200 bg-stone-50 focus:bg-white focus:ring-1 focus:ring-stone-900 focus:border-stone-900 outline-none transition-all text-sm appearance-none text-stone-600">
<option>Painted Jacket</option>
<option>Embroidered Hoodie</option>
<option>Accessories (Bag/Scarf)</option>
<option>Wall Art / Canvas</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-stone-400 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-700">Your Vision</label>
<textarea className="w-full px-4 py-3 rounded-md border border-stone-200 bg-stone-50 focus:bg-white focus:ring-1 focus:ring-stone-900 focus:border-stone-900 outline-none transition-all text-sm placeholder:text-stone-400 resize-none" placeholder="Describe colors, themes, or specific design elements you are looking for..." rows="4"></textarea>
</div>
<div className="pt-2">
<label className="custom-checkbox flex items-start gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 border border-stone-300 rounded bg-white flex items-center justify-center transition-colors group-hover:border-stone-400">
<iconify-icon className="text-white hidden" icon="lucide:check" strokeWidth="3" width="14"></iconify-icon>
</div>
<span className="text-xs text-stone-500 leading-tight pt-0.5">I understand that custom orders take 3-5 weeks for production and shipping.</span>
</label>
</div>
<button className="w-full h-11 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 transition-all shadow-lg shadow-stone-900/10" type="button">
                Send Enquiry
            </button>
</form>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2 space-y-4">
<a className="text-lg font-semibold tracking-tighter uppercase" href="#">Origameeaa</a>
<p className="text-sm text-stone-500 max-w-xs">
                        Handcrafted art pieces tailored for your wardrobe. Located in the heart of the creative district.
                    </p>
<div className="flex gap-4 pt-2">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="20"></iconify-icon>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider">Shop</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Jackets</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Accessories</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider">Support</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Care Instructions</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">© 2023 Origameeaa. All rights reserved.</p>
<div className="flex items-center gap-1 text-xs text-stone-400">
<span>Designed with</span>
<iconify-icon className="text-red-400" icon="lucide:heart" width="12"></iconify-icon>
<span>for artists.</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
