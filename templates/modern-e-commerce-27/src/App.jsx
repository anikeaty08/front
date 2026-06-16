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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-white text-lg font-semibold tracking-tighter flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-black rounded-full"></div>
</div>
                ATLAS
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-white" href="#">Shop All</a>
<a className="hover:text-white transition-colors" href="#">New Arrivals</a>
<a className="hover:text-white transition-colors" href="#">Objects</a>
<a className="hover:text-white transition-colors" href="#">Digital</a>
</div>

<div className="flex items-center gap-4">
<button className="hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="hover:text-white transition-colors relative group">
<iconify-icon height="20" icon="solar:bag-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
</span>
</button>
</div>
</div>
</nav>

<main className="flex-grow pt-24 pb-20 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-4 gap-12">

<aside className="hidden lg:block lg:col-span-1 space-y-10 sticky top-24 h-fit">

<div className="space-y-4">
<h3 className="text-white text-xs font-medium uppercase tracking-widest opacity-50">Collection</h3>
<div className="flex flex-col gap-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-700 rounded peer-checked:bg-white peer-checked:border-white transition-all relative flex items-center justify-center">
<iconify-icon className="text-black opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-500 group-hover:text-white transition-colors">All Products</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-700 rounded peer-checked:bg-white peer-checked:border-white transition-all relative flex items-center justify-center">
<iconify-icon className="text-black opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-500 group-hover:text-white transition-colors">Furniture</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-700 rounded peer-checked:bg-white peer-checked:border-white transition-all relative flex items-center justify-center">
<iconify-icon className="text-black opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-500 group-hover:text-white transition-colors">Electronics</span>
</label>
</div>
</div>

<div className="space-y-4">
<h3 className="text-white text-xs font-medium uppercase tracking-widest opacity-50">Price Range</h3>
<div className="relative pt-6 pb-2">
<div className="h-1 w-full bg-zinc-800 rounded-full">
<div className="absolute h-1 bg-white w-1/2 left-1/4 rounded-full"></div>
</div>
<div className="absolute top-4 left-1/4 w-4 h-4 bg-[#09090b] border-2 border-white rounded-full cursor-pointer hover:scale-110 transition-transform shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
<div className="absolute top-4 right-1/4 w-4 h-4 bg-[#09090b] border-2 border-white rounded-full cursor-pointer hover:scale-110 transition-transform shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
<div className="flex justify-between mt-4 text-xs font-mono text-zinc-500">
<span>$50</span>
<span>$500</span>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-white text-xs font-medium uppercase tracking-widest opacity-50">Availability</h3>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-zinc-500 group-hover:text-white transition-colors">In Stock Only</span>
<input className="peer sr-only" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 rounded-full peer-checked:bg-white relative transition-colors">
<div className="absolute top-1 left-1 bg-zinc-500 peer-checked:bg-black w-3 h-3 rounded-full peer-checked:translate-x-4 transition-all"></div>
</div>
</label>
</div>
</aside>

<div className="col-span-1 lg:col-span-3">

<div className="flex items-center justify-between mb-8">
<h1 className="text-xl text-white font-medium tracking-tight">New Arrivals</h1>
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-500">Sort by:</span>
<button className="text-xs text-white flex items-center gap-1 hover:text-zinc-300">
                        Recommended
                        <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden mb-4 border border-white/5 ring-1 ring-white/0 group-hover:ring-white/10 transition-all duration-300">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-900 to-black opacity-80 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full bg-gradient-to-tr from-stone-500 to-stone-700 blur-2xl opacity-40"></div>
<img alt="Product" className="w-24 h-24 opacity-20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2352525b' strokeWidth='0.5'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E"/>
</div>

<div className="absolute top-3 left-3">
<span className="text-[10px] uppercase tracking-wider font-semibold bg-white text-black px-2 py-1 rounded-full">New</span>
</div>

<div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
<button className="w-full bg-white text-black h-10 rounded-full text-xs font-semibold tracking-wide hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:bag-plus-linear" width="16"></iconify-icon>
                                Add to Cart
                            </button>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-white group-hover:text-zinc-200 transition-colors">Geometric Lamp</h3>
<span className="text-sm font-medium text-white">$120</span>
</div>
<p className="text-xs text-zinc-500 mt-1">Lighting</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden mb-4 border border-white/5 ring-1 ring-white/0 group-hover:ring-white/10 transition-all duration-300">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950 opacity-80 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-40 h-40 bg-gradient-to-b from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<iconify-icon className="text-zinc-700 w-16 h-16 opacity-30" icon="solar:headphones-round-linear" width="64"></iconify-icon>
</div>
<div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
<button className="w-full bg-white text-black h-10 rounded-full text-xs font-semibold tracking-wide hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:bag-plus-linear" width="16"></iconify-icon>
                                Add to Cart
                            </button>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-white group-hover:text-zinc-200 transition-colors">Studio Monitor</h3>
<span className="text-sm font-medium text-white">$350</span>
</div>
<p className="text-xs text-zinc-500 mt-1">Audio</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden mb-4 border border-white/5 ring-1 ring-white/0 group-hover:ring-white/10 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-32 bg-zinc-800/50 border border-white/5 rounded mx-auto transform -rotate-12"></div>
</div>
<div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
<button className="w-full bg-white text-black h-10 rounded-full text-xs font-semibold tracking-wide hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:bag-plus-linear" width="16"></iconify-icon>
                                Add to Cart
                            </button>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-white group-hover:text-zinc-200 transition-colors">Nomad Journal</h3>
<span className="text-sm font-medium text-white">$45</span>
</div>
<p className="text-xs text-zinc-500 mt-1">Stationery</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden mb-4 border border-white/5 ring-1 ring-white/0 group-hover:ring-white/10 transition-all duration-300">
<div className="absolute inset-0 bg-zinc-900 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative">
<div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-white/20"></div>
</div>
</div>
</div>
<div className="absolute top-3 right-3">
<div className="bg-zinc-800/80 backdrop-blur p-1.5 rounded-full text-white/50 hover:text-white hover:bg-zinc-700 transition">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</div>
</div>
<div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
<button className="w-full bg-white text-black h-10 rounded-full text-xs font-semibold tracking-wide hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:bag-plus-linear" width="16"></iconify-icon>
                                Add to Cart
                            </button>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-white group-hover:text-zinc-200 transition-colors">Analog Clock</h3>
<span className="text-sm font-medium text-white">$89</span>
</div>
<p className="text-xs text-zinc-500 mt-1">Home</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden mb-4 border border-white/5 ring-1 ring-white/0 group-hover:ring-white/10 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-zinc-800 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white/10 w-20 h-20" icon="solar:chair-2-linear" width="80"></iconify-icon>
</div>
<div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
<button className="w-full bg-white text-black h-10 rounded-full text-xs font-semibold tracking-wide hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:bag-plus-linear" width="16"></iconify-icon>
                                Add to Cart
                            </button>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-white group-hover:text-zinc-200 transition-colors">Lounge Chair</h3>
<span className="text-sm font-medium text-white">$450</span>
</div>
<p className="text-xs text-zinc-500 mt-1">Furniture</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden mb-4 border border-white/5 ring-1 ring-white/0 group-hover:ring-white/10 transition-all duration-300">
<div className="absolute inset-0 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-black group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white/10 w-20 h-20" icon="solar:camera-linear" width="80"></iconify-icon>
</div>
<div className="absolute top-3 left-3">
<span className="text-[10px] uppercase tracking-wider font-semibold bg-zinc-800 text-zinc-300 px-2 py-1 rounded-full border border-white/5">Sold Out</span>
</div>
</div>
<div>
<div className="flex justify-between items-start opacity-50">
<h3 className="text-sm font-medium text-white">Film Camera</h3>
<span className="text-sm font-medium text-white">$299</span>
</div>
<p className="text-xs text-zinc-500 mt-1">Photography</p>
</div>
</div>
</div>

<div className="mt-16 flex justify-center">
<button className="border border-white/10 bg-white/5 text-white hover:bg-white hover:text-black transition-all px-8 py-3 rounded-full text-xs font-medium tracking-wide">
                    Load More Products
                </button>
</div>
</div>
</main>

<footer className="border-t border-white/5 py-12 bg-[#09090b]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-zinc-500 text-xs">
                © 2024 Atlas Store. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
