import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter" href="#">AURA</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Shop All</a>
<a className="hover:text-slate-900 transition-colors" href="#">New Arrivals</a>
<a className="hover:text-slate-900 transition-colors" href="#">Collections</a>
</div>
</div>
<div className="flex items-center gap-5 text-slate-600">
<button className="hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:user-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="hover:text-slate-900 transition-colors relative">
<iconify-icon icon="solar:bag-3-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute -top-1 -right-1 bg-slate-900 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">2</span>
</button>
</div>
</div>
</nav>

<section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-50">
<div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 items-center gap-12">
<div className="z-10">
<span className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4 block">Spring 2024 Collection</span>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">Objects for the <br/> modern living space.</h1>
<p className="text-base text-slate-500 max-w-md mb-8 leading-relaxed">
                    Thoughtfully curated essentials designed to bring balance and clarity to your everyday environment.
                </p>
<div className="flex items-center gap-4">
<a className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-sm" href="#">
                        Shop Collection
                    </a>
<a className="text-sm font-medium border-b border-slate-200 pb-1 hover:border-slate-900 transition-all" href="#">
                        View Lookbook
                    </a>
</div>
</div>
<div className="relative hidden md:block">
<div className="aspect-[4/5] rounded-2xl bg-slate-200 overflow-hidden">
<img alt="Hero Image" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Shop by Category</h2>
<p className="text-slate-500 text-sm">Explore our curated range of minimalist goods.</p>
</div>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1" href="#">
                Browse All <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Lighting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-white text-xl font-medium tracking-tight">Lighting</h3>
<p className="text-white/80 text-xs mt-1">12 Products</p>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Ceramics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1594913366159-1832ff18a7d7?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-white text-xl font-medium tracking-tight">Ceramics</h3>
<p className="text-white/80 text-xs mt-1">24 Products</p>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Furniture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-white text-xl font-medium tracking-tight">Furniture</h3>
<p className="text-white/80 text-xs mt-1">08 Products</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">Featured Pieces</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-square rounded-2xl overflow-hidden bg-white mb-4">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
<iconify-icon icon="solar:add-circle-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium text-slate-900">Linear Marble Vase</h4>
<p className="text-xs text-slate-500 mt-1">Stone White</p>
</div>
<p className="text-sm font-semibold tracking-tight">$120</p>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative aspect-square rounded-2xl overflow-hidden bg-white mb-4">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1515895309288-a3815ab7cf81?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
<iconify-icon icon="solar:add-circle-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium text-slate-900">Soft Form Chair</h4>
<p className="text-xs text-slate-500 mt-1">Oak &amp; Linen</p>
</div>
<p className="text-sm font-semibold tracking-tight">$450</p>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative aspect-square rounded-2xl overflow-hidden bg-white mb-4">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
<iconify-icon icon="solar:add-circle-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium text-slate-900">Studio Desk Lamp</h4>
<p className="text-xs text-slate-500 mt-1">Matte Black</p>
</div>
<p className="text-sm font-semibold tracking-tight">$85</p>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative aspect-square rounded-2xl overflow-hidden bg-white mb-4">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1616489953149-755174092f62?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
<iconify-icon icon="solar:add-circle-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium text-slate-900">Minimalist Carafe</h4>
<p className="text-xs text-slate-500 mt-1">Smoke Glass</p>
</div>
<p className="text-sm font-semibold tracking-tight">$64</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100">
<div className="max-w-2xl mx-auto text-center px-6">
<h2 className="text-2xl font-semibold tracking-tight mb-4">Join our community</h2>
<p className="text-slate-500 text-sm mb-8 leading-relaxed">
                Be the first to hear about new launches, exclusive events, and the inspiration behind our collections.
            </p>
<form className="flex gap-3">
<input className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all" placeholder="Email address" type="email"/>
<button className="bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition-all">Subscribe</button>
</form>
</div>
</section>

<footer className="bg-white px-6 py-12 border-t border-slate-100">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-xl font-semibold tracking-tighter block mb-6" href="#">AURA</a>
<p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                        Crafting timeless essentials for your home. We believe in quality materials and intentional design.
                    </p>
</div>
<div>
<h5 className="text-xs font-semibold uppercase tracking-widest text-slate-900 mb-6">Support</h5>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold uppercase tracking-widest text-slate-900 mb-6">Shop</h5>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Bundles</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Digital Gift Cards</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Stockists</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold uppercase tracking-widest text-slate-900 mb-6">Follow</h5>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-all" href="#">
<iconify-icon icon="solar:share-circle-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-all" href="#">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-400 font-medium tracking-wide">© 2024 AURA STUDIO. ALL RIGHTS RESERVED.</p>
<div className="flex gap-4">
<iconify-icon className="text-slate-300 text-xl" icon="solar:card-2-linear"></iconify-icon>
<iconify-icon className="text-slate-300 text-xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
