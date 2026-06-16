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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
background: '#050505',
surface: '#0A0A0A',
surfaceHighlight: '#121212',
border: '#222222',
primary: '#FFFFFF',
secondary: '#A1A1AA',
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
      

<div className="h-8 bg-surfaceHighlight border-b border-border flex items-center justify-center">
<p className="text-[10px] font-medium tracking-wide text-secondary uppercase">
<span className="text-white">System 2.0</span> — Global Shipping Available Now
        </p>
</div>

<nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
<div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">

<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center text-black">
<span className="iconify" data-icon="lucide:box" data-width="12"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-white group-hover:opacity-80 transition-opacity">SYSTEM</span>
</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-white" href="#">Store</a>
<a className="text-xs font-medium text-secondary hover:text-white transition-colors" href="#">Collections</a>
<a className="text-xs font-medium text-secondary hover:text-white transition-colors" href="#">About</a>
</div>
</div>

<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center px-2 py-1.5 bg-surfaceHighlight rounded border border-border w-64 focus-within:border-white/20 transition-colors">
<span className="iconify text-secondary" data-icon="lucide:search" data-width="14"></span>
<input className="bg-transparent border-none outline-none text-xs text-white ml-2 w-full placeholder:text-zinc-600" placeholder="Search products..." type="text"/>
<span className="text-[10px] text-zinc-600 font-mono bg-border px-1.5 rounded ml-1">⌘K</span>
</div>
<div className="flex items-center gap-3 pl-2 border-l border-border">
<button className="text-secondary hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:user" data-width="18"></span>
</button>
<button className="text-secondary hover:text-white transition-colors relative group">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="18"></span>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-white text-black text-[9px] font-bold flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">2</span>
</button>
</div>
</div>
</div>
</nav>

<main className="flex-1 flex max-w-[1400px] mx-auto w-full">

<aside className="hidden lg:block w-64 pt-8 pb-12 pr-8 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-border/50">
<div className="space-y-8">

<div>
<h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Category</h3>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="custom-checkbox" type="checkbox"/>
<span className="text-xs text-white group-hover:text-white transition-colors">All Products</span>
<span className="ml-auto text-[10px] text-zinc-600">42</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-xs text-secondary group-hover:text-white transition-colors">Apparel</span>
<span className="ml-auto text-[10px] text-zinc-600">18</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-xs text-secondary group-hover:text-white transition-colors">Accessories</span>
<span className="ml-auto text-[10px] text-zinc-600">12</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-xs text-secondary group-hover:text-white transition-colors">Objects</span>
<span className="ml-auto text-[10px] text-zinc-600">8</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-xs text-secondary group-hover:text-white transition-colors">Digital</span>
<span className="ml-auto text-[10px] text-zinc-600">4</span>
</label>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Price Range</h3>
<div className="space-y-4">
<input className="w-full" max="1000" min="0" type="range"/>
<div className="flex items-center gap-2">
<div className="bg-surfaceHighlight border border-border rounded px-2 py-1 flex items-center">
<span className="text-xs text-zinc-500">$</span>
<input className="w-12 bg-transparent text-xs text-white outline-none text-right" type="number" value="0"/>
</div>
<span className="text-zinc-600">-</span>
<div className="bg-surfaceHighlight border border-border rounded px-2 py-1 flex items-center">
<span className="text-xs text-zinc-500">$</span>
<input className="w-12 bg-transparent text-xs text-white outline-none text-right" type="number" value="500"/>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Color</h3>
<div className="grid grid-cols-5 gap-2">
<button className="w-6 h-6 rounded-full bg-white border border-white hover:scale-110 transition-transform ring-2 ring-offset-2 ring-offset-background ring-white"></button>
<button className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 hover:scale-110 transition-transform"></button>
<button className="w-6 h-6 rounded-full bg-zinc-600 border border-zinc-500 hover:scale-110 transition-transform"></button>
<button className="w-6 h-6 rounded-full bg-blue-900 border border-blue-800 hover:scale-110 transition-transform"></button>
<button className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 hover:scale-110 transition-transform flex items-center justify-center">
<span className="iconify text-zinc-500" data-icon="lucide:slash" data-width="12"></span>
</button>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Material</h3>
<div className="flex flex-wrap gap-2">
<button className="text-[10px] font-mono border border-border rounded px-2 py-1 hover:border-zinc-500 hover:text-white transition-colors">Cotton 100%</button>
<button className="text-[10px] font-mono border border-white bg-white text-black rounded px-2 py-1 transition-colors">Gore-Tex</button>
<button className="text-[10px] font-mono border border-border rounded px-2 py-1 hover:border-zinc-500 hover:text-white transition-colors">Aluminum</button>
<button className="text-[10px] font-mono border border-border rounded px-2 py-1 hover:border-zinc-500 hover:text-white transition-colors">Ceramic</button>
</div>
</div>
</div>
</aside>

<div className="flex-1 py-8 lg:pl-8">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<div className="flex items-center gap-2 text-xs text-secondary">
<span className="hover:text-white cursor-pointer">Home</span>
<span className="iconify" data-icon="lucide:chevron-right" data-width="10"></span>
<span className="hover:text-white cursor-pointer">Store</span>
<span className="iconify" data-icon="lucide:chevron-right" data-width="10"></span>
<span className="text-white">All Products</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-zinc-500">Showing 42 items</span>
<div className="h-4 w-[1px] bg-border"></div>
<button className="flex items-center gap-1 text-xs text-white hover:opacity-80">
                        Sort by: Featured
                        <span className="iconify" data-icon="lucide:chevron-down" data-width="12"></span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
<div className="md:col-span-2 lg:col-span-3 h-[400px] relative rounded-lg overflow-hidden border border-border group">
<img alt="Hero Product" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&amp;w=2599&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full md:w-1/2">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-white/20 bg-white/5 backdrop-blur-sm text-[10px] font-medium text-white mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            NEW ARRIVAL
                        </div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">The Monolith Watch</h2>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">Minimalist chronometer designed for deep work. Titanium casing with a sapphire crystal face.</p>
<button className="px-6 py-2.5 bg-white text-black text-xs font-semibold rounded hover:bg-zinc-200 transition-colors flex items-center gap-2 w-fit">
                            Shop Now
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group flex flex-col gap-3">
<div className="aspect-[4/5] bg-surfaceHighlight rounded border border-border overflow-hidden relative">
<div className="absolute top-3 left-3 z-10">
<span className="px-1.5 py-0.5 rounded bg-white text-black text-[10px] font-bold">SOLD OUT</span>
</div>
<img alt="Tee" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=1780&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:bg-zinc-200">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</button>
</div>
<div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white group-hover:text-zinc-300 transition-colors">Core Heavyweight Tee</h3>
<p className="text-xs text-zinc-500 mt-0.5">Carbon Black / Cotton</p>
</div>
<span className="text-sm font-medium text-white">$45</span>
</div>
</div>
</div>

<div className="group flex flex-col gap-3">
<div className="aspect-[4/5] bg-surfaceHighlight rounded border border-border overflow-hidden relative">
<img alt="Keyboard" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&amp;w=1771&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:bg-zinc-200">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</button>
</div>
<div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white group-hover:text-zinc-300 transition-colors">Mechanical 65% Kit</h3>
<p className="text-xs text-zinc-500 mt-0.5">Aluminum / Hot-swap</p>
</div>
<span className="text-sm font-medium text-white">$180</span>
</div>
</div>
</div>

<div className="group flex flex-col gap-3">
<div className="aspect-[4/5] bg-surfaceHighlight rounded border border-border overflow-hidden relative">
<img alt="Jacket" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale" src="https://images.unsplash.com/photo-1575024357670-2b5164f470c3?q=80&amp;w=1770&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 flex gap-1">
<div className="w-3 h-3 rounded-full bg-blue-500 border border-black"></div>
<div className="w-3 h-3 rounded-full bg-zinc-500 border border-black"></div>
</div>
<button className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:bg-zinc-200">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</button>
</div>
<div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white group-hover:text-zinc-300 transition-colors">Utility Overshirt</h3>
<p className="text-xs text-zinc-500 mt-0.5">Ripstop Nylon</p>
</div>
<span className="text-sm font-medium text-white">$120</span>
</div>
</div>
</div>

<div className="group flex flex-col gap-3">
<div className="aspect-[4/5] bg-surfaceHighlight rounded border border-border overflow-hidden relative">
<img alt="Robot" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&amp;w=1770&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:bg-zinc-200">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</button>
</div>
<div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white group-hover:text-zinc-300 transition-colors">Desk Mat "Topo"</h3>
<p className="text-xs text-zinc-500 mt-0.5">900x400mm / Felt</p>
</div>
<span className="text-sm font-medium text-white">$35</span>
</div>
</div>
</div>

<div className="group flex flex-col gap-3">
<div className="aspect-[4/5] bg-surfaceHighlight rounded border border-border overflow-hidden relative shimmer"></div>
<div>
<div className="flex justify-between items-start">
<div className="w-2/3">
<div className="h-4 bg-surfaceHighlight rounded w-3/4 mb-2"></div>
<div className="h-3 bg-surfaceHighlight rounded w-1/2"></div>
</div>
<div className="h-4 bg-surfaceHighlight rounded w-12"></div>
</div>
</div>
</div>

<div className="group flex flex-col gap-3">
<div className="aspect-[4/5] bg-surfaceHighlight rounded border border-border overflow-hidden relative shimmer"></div>
<div>
<div className="flex justify-between items-start">
<div className="w-2/3">
<div className="h-4 bg-surfaceHighlight rounded w-3/4 mb-2"></div>
<div className="h-3 bg-surfaceHighlight rounded w-1/2"></div>
</div>
<div className="h-4 bg-surfaceHighlight rounded w-12"></div>
</div>
</div>
</div>
</div>

<div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
<button className="px-4 py-2 text-xs font-medium text-zinc-500 border border-border rounded hover:text-white hover:border-zinc-500 transition-colors disabled:opacity-50" disabled="">Previous</button>
<div className="flex items-center gap-2">
<button className="w-8 h-8 rounded bg-white text-black text-xs font-medium flex items-center justify-center">1</button>
<button className="w-8 h-8 rounded hover:bg-surfaceHighlight text-zinc-500 hover:text-white text-xs font-medium flex items-center justify-center transition-colors">2</button>
<button className="w-8 h-8 rounded hover:bg-surfaceHighlight text-zinc-500 hover:text-white text-xs font-medium flex items-center justify-center transition-colors">3</button>
<span className="text-zinc-600 text-xs">...</span>
<button className="w-8 h-8 rounded hover:bg-surfaceHighlight text-zinc-500 hover:text-white text-xs font-medium flex items-center justify-center transition-colors">8</button>
</div>
<button className="px-4 py-2 text-xs font-medium text-white border border-border rounded hover:bg-surfaceHighlight transition-colors">Next</button>
</div>
</div>
</main>

<footer className="border-t border-border bg-surface mt-auto">
<div className="max-w-[1400px] mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<span className="iconify text-white" data-icon="lucide:box" data-width="16"></span>
<span className="text-sm font-semibold text-white">SYSTEM</span>
</a>
<p className="text-xs text-zinc-500 max-w-xs leading-relaxed mb-6">
                        Engineered objects and apparel for the modern creator. Designed in San Francisco, crafted globally.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="16"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Shop</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Objects</a></li>
<li><a className="hover:text-white transition-colors" href="#">Apparel</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Support</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Warranty</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-zinc-600">
                    © 2024 System Inc. All rights reserved.
                </div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-[10px] text-zinc-600">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        All Systems Operational
                    </div>
<div className="h-3 w-[1px] bg-border"></div>
<div className="text-[10px] text-zinc-600 font-mono">v2.4.0</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
