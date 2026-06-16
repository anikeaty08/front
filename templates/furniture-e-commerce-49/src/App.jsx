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
slate: {
50: '#f8fafc',
100: '#f1f5f9', // Background
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
800: '#1e293b',
900: '#0f172a',
},
neutral: {
200: '#e5e5e5', // Border
},
blue: {
50: '#eff6ff',
500: '#3b82f6', // Accent
600: '#2563eb',
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
      

<nav className="fixed top-0 w-full z-50 bg-slate-100/80 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-2xl font-serif font-medium tracking-tight text-slate-900 hover:text-blue-500 transition-colors" href="#">Forma.</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-normal text-slate-500 hover:text-blue-500 transition-colors tracking-wide" href="#collection">Collection</a>
<a className="text-sm font-normal text-slate-500 hover:text-blue-500 transition-colors tracking-wide" href="#studio">Studio</a>
<a className="text-sm font-normal text-slate-500 hover:text-blue-500 transition-colors tracking-wide" href="#process">Process</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-slate-600 hover:bg-white hover:text-blue-500 hover:shadow-sm transition-all border border-transparent hover:border-neutral-200 group">
<iconify-icon height="20" icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="flex items-center justify-center w-10 h-10 rounded-full text-slate-600 hover:bg-white hover:text-blue-500 hover:shadow-sm transition-all border border-transparent hover:border-neutral-200 relative group">
<iconify-icon height="20" icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border border-slate-100"></span>
</button>
<button className="md:hidden flex items-center justify-center w-10 h-10 text-slate-600">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="pt-40 pb-20 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 space-y-8">
<h1 className="font-serif text-5xl md:text-6xl lg:text-[64px] font-medium tracking-tight leading-[1.1] text-slate-900">
                    Curated for <br/>
<span className="text-slate-400 italic">quiet living.</span>
</h1>
<p className="text-lg text-slate-500 font-light max-w-md leading-relaxed">
                    We craft timeless furniture that balances modern form with traditional function, stripping away the inessential to reveal the beauty of raw materials.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-blue-500 text-white hover:bg-blue-600 shadow-sm hover:shadow transition-all duration-300 px-8 py-3.5 rounded-md text-sm font-medium flex items-center justify-center gap-2 group">
                        Shop Collection
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="bg-white text-slate-600 border border-neutral-200 hover:border-blue-500 hover:text-blue-500 shadow-sm px-8 py-3.5 rounded-md text-sm font-medium transition-all duration-300">
                        View Lookbook
                    </button>
</div>
</div>

<div className="lg:col-span-7 relative">
<div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-lg overflow-hidden bg-white shadow-sm border border-neutral-200 p-2">
<div className="w-full h-full rounded overflow-hidden relative group">
<img alt="Minimalist interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=2727&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur border border-neutral-200 px-4 py-2 rounded shadow-sm flex items-center gap-3 animate-fade-in-up">
<div className="w-8 h-8 rounded bg-slate-100 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<span className="text-xs font-serif font-medium text-slate-900">The Lounge Chair</span>
<span className="text-[10px] text-slate-500">$890.00</span>
</div>
<button className="ml-2 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors">
<iconify-icon icon="solar:add-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-neutral-200 bg-white/50">
<div className="max-w-7xl mx-auto px-6 py-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-2">
<iconify-icon className="text-blue-500" icon="solar:ruler-pen-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-sm font-serif font-medium text-slate-900">Custom Dimensions</h3>
<p className="text-xs text-slate-500">Tailored to fit your unique space perfectly.</p>
</div>
<div className="flex flex-col gap-2">
<iconify-icon className="text-blue-500" icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-sm font-serif font-medium text-slate-900">Ethical Sourcing</h3>
<p className="text-xs text-slate-500">Certified sustainable woods and fabrics.</p>
</div>
<div className="flex flex-col gap-2">
<iconify-icon className="text-blue-500" icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-sm font-serif font-medium text-slate-900">Lifetime Warranty</h3>
<p className="text-xs text-slate-500">Quality that stands the test of time.</p>
</div>
<div className="flex flex-col gap-2">
<iconify-icon className="text-blue-500" icon="solar:box-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-sm font-serif font-medium text-slate-900">Global Shipping</h3>
<p className="text-xs text-slate-500">Carbon-neutral delivery to your door.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="collection">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-3 text-slate-900">New Arrivals</h2>
<p className="text-slate-500 text-sm font-light">Explore our latest pieces designed for the modern home.</p>
</div>

<div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
<button className="px-5 py-2 rounded-md border border-blue-500 bg-blue-500 text-white shadow-sm text-xs font-medium tracking-wide transition-all whitespace-nowrap">All Items</button>
<button className="px-5 py-2 rounded-md border border-neutral-200 bg-white text-slate-600 hover:border-blue-500 hover:text-blue-500 shadow-sm text-xs font-medium tracking-wide transition-all whitespace-nowrap">Seating</button>
<button className="px-5 py-2 rounded-md border border-neutral-200 bg-white text-slate-600 hover:border-blue-500 hover:text-blue-500 shadow-sm text-xs font-medium tracking-wide transition-all whitespace-nowrap">Tables</button>
<button className="px-5 py-2 rounded-md border border-neutral-200 bg-white text-slate-600 hover:border-blue-500 hover:text-blue-500 shadow-sm text-xs font-medium tracking-wide transition-all whitespace-nowrap">Lighting</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="bg-white border border-neutral-200 shadow-sm rounded-lg overflow-hidden aspect-[3/4] relative mb-5 p-2 transition-all group-hover:shadow-md">
<div className="w-full h-full rounded overflow-hidden relative">
<img alt="Chair" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur border border-neutral-200 px-3 py-1 rounded text-[10px] font-semibold tracking-wider uppercase text-blue-500 shadow-sm">In Stock</div>

<div className="absolute bottom-3 right-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
<button className="w-8 h-8 bg-white text-slate-900 rounded-full flex items-center justify-center shadow hover:text-blue-500 hover:scale-110 transition-all">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div className="space-y-1">
<h3 className="text-lg font-serif font-medium text-slate-900 group-hover:text-blue-500 transition-colors">Wishbone Chair</h3>
<p className="text-xs text-slate-500 font-light">Solid Beech / Natural Paper Cord</p>
</div>
<span className="text-sm font-medium text-slate-900">$595</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-white border border-neutral-200 shadow-sm rounded-lg overflow-hidden aspect-[3/4] relative mb-5 p-2 transition-all group-hover:shadow-md">
<div className="w-full h-full rounded overflow-hidden relative">
<img alt="Table" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="flex justify-between items-start">
<div className="space-y-1">
<h3 className="text-lg font-serif font-medium text-slate-900 group-hover:text-blue-500 transition-colors">Noguchi Coffee Table</h3>
<p className="text-xs text-slate-500 font-light">Tempered Glass / Solid Wood Base</p>
</div>
<span className="text-sm font-medium text-slate-900">$1,250</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-white border border-neutral-200 shadow-sm rounded-lg overflow-hidden aspect-[3/4] relative mb-5 p-2 transition-all group-hover:shadow-md">
<div className="w-full h-full rounded overflow-hidden relative">
<img alt="Lamp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-slate-900/5 text-slate-900 border border-slate-200/50 backdrop-blur px-3 py-1 rounded text-[10px] font-semibold tracking-wider uppercase shadow-sm">Limited</div>
</div>
</div>
<div className="flex justify-between items-start">
<div className="space-y-1">
<h3 className="text-lg font-serif font-medium text-slate-900 group-hover:text-blue-500 transition-colors">Akari Floor Lamp</h3>
<p className="text-xs text-slate-500 font-light">Washi Paper / Bamboo Ribbing</p>
</div>
<span className="text-sm font-medium text-slate-900">$420</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-white border border-neutral-200 shadow-sm rounded-lg overflow-hidden aspect-[3/4] relative mb-5 p-2 transition-all group-hover:shadow-md">
<div className="w-full h-full rounded overflow-hidden relative">
<img alt="Sofa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="flex justify-between items-start">
<div className="space-y-1">
<h3 className="text-lg font-serif font-medium text-slate-900 group-hover:text-blue-500 transition-colors">Tufted Sofa</h3>
<p className="text-xs text-slate-500 font-light">Green Velvet / Walnut Legs</p>
</div>
<span className="text-sm font-medium text-slate-900">$2,100</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-white border border-neutral-200 shadow-sm rounded-lg overflow-hidden aspect-[3/4] relative mb-5 p-2 transition-all group-hover:shadow-md">
<div className="w-full h-full rounded overflow-hidden relative">
<img alt="Cabinet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="flex justify-between items-start">
<div className="space-y-1">
<h3 className="text-lg font-serif font-medium text-slate-900 group-hover:text-blue-500 transition-colors">Modular Shelving</h3>
<p className="text-xs text-slate-500 font-light">Powder Coated Steel / Oak</p>
</div>
<span className="text-sm font-medium text-slate-900">$850</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-white border border-neutral-200 shadow-sm rounded-lg overflow-hidden aspect-[3/4] relative mb-5 p-2 transition-all group-hover:shadow-md">
<div className="w-full h-full rounded overflow-hidden relative">
<img alt="Vase" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-0 right-0 w-full h-full bg-white/60 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<span className="bg-slate-900 text-white px-4 py-2 rounded text-xs font-medium">Sold Out</span>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div className="space-y-1">
<h3 className="text-lg font-serif font-medium text-slate-900 group-hover:text-blue-500 transition-colors">Sculptural Vase</h3>
<p className="text-xs text-slate-500 font-light">Hand-thrown Ceramic</p>
</div>
<span className="text-sm font-medium text-slate-900 line-through text-slate-400">$180</span>
</div>
</div>
</div>
<div className="mt-20 flex justify-center">
<button className="text-sm text-slate-500 hover:text-blue-500 flex flex-col items-center gap-2 group transition-colors">
<span className="border-b border-transparent group-hover:border-blue-500 pb-0.5 transition-all">Load More Products</span>
<iconify-icon className="animate-bounce text-slate-300 group-hover:text-blue-500" icon="solar:arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-neutral-200 relative overflow-hidden" id="process">

<div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center relative z-10">
<div className="w-full lg:w-1/2">
<div className="relative rounded-lg overflow-hidden border border-neutral-200 bg-slate-50 shadow-sm p-3">
<div className="relative rounded overflow-hidden">
<img alt="Craftsmanship" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1611269154421-4e2755361fef?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-[40%] left-[60%] group cursor-pointer">
<div className="relative flex items-center justify-center w-6 h-6">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
</div>

<div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-40 bg-white border border-neutral-200 p-3 rounded shadow-lg text-center pointer-events-none">
<span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest block mb-1">Material</span>
<span className="text-xs font-serif font-medium text-slate-900">French Oak Joint</span>
</div>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 space-y-10">
<div>
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-6 text-slate-900">Design Philosophy</h2>
<p className="text-slate-500 text-sm leading-7 max-w-md font-light">
                        Every curve is intentional. Every material is chosen for its ability to age gracefully. We believe that furniture should not only fill a space but elevate the daily rituals performed within it.
                    </p>
</div>

<div className="divide-y divide-neutral-200 border-y border-neutral-200">
<div className="flex justify-between items-center py-4 group hover:bg-slate-50 px-2 -mx-2 rounded transition-colors cursor-default">
<span className="text-sm text-slate-500 font-light">Material Sourcing</span>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-slate-900">FSC Certified</span>
<iconify-icon className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-center py-4 group hover:bg-slate-50 px-2 -mx-2 rounded transition-colors cursor-default">
<span className="text-sm text-slate-500 font-light">Assembly</span>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-slate-900">Hand-finished</span>
<iconify-icon className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-center py-4 group hover:bg-slate-50 px-2 -mx-2 rounded transition-colors cursor-default">
<span className="text-sm text-slate-500 font-light">Sustainability</span>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-slate-900">100% Recyclable</span>
<iconify-icon className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="pt-2">
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors group" href="#">
                        Read the full journal
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-slate-100 pt-24 pb-12 px-6 border-t border-neutral-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
<div className="md:col-span-5 pr-8">
<a className="text-2xl font-serif font-medium tracking-tight text-slate-900 block mb-6" href="#">Forma.</a>
<p className="text-sm text-slate-500 leading-relaxed font-light mb-8 max-w-sm">
                        Join our newsletter for early access to new collections, design stories, and exclusive studio events.
                    </p>

<div className="relative max-w-sm group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 group-focus-within:text-blue-500 transition-colors" icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-24 py-3 border border-neutral-200 rounded-md leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm shadow-sm transition-all" placeholder="email@domain.com" type="email"/>
<button className="absolute inset-y-1 right-1 px-4 border border-transparent text-xs font-medium rounded text-white bg-slate-900 hover:bg-blue-500 focus:outline-none transition-colors">
                            Subscribe
                        </button>
</div>
</div>
<div className="md:col-span-2 md:col-start-7">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-6">Explore</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-blue-500 transition-colors font-light" href="#">Seating</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-500 transition-colors font-light" href="#">Tables</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-500 transition-colors font-light" href="#">Storage</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-500 transition-colors font-light" href="#">Lighting</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-6">Studio</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-blue-500 transition-colors font-light" href="#">About Us</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-500 transition-colors font-light" href="#">Journal</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-500 transition-colors font-light" href="#">Sustainability</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-500 transition-colors font-light" href="#">Contact</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-6">Connect</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-blue-500 transition-colors font-light flex items-center gap-1 group" href="#">Instagram <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" width="10"></iconify-icon></a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-500 transition-colors font-light flex items-center gap-1 group" href="#">Pinterest <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" width="10"></iconify-icon></a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-500 transition-colors font-light flex items-center gap-1 group" href="#">Twitter <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" width="10"></iconify-icon></a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-200 gap-4">
<p className="text-xs text-slate-400 font-light">© 2024 Forma Studio. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-blue-500 font-light" href="#">Privacy Policy</a>
<a className="text-xs text-slate-400 hover:text-blue-500 font-light" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
