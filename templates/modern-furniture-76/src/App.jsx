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
      

<header className="h-16 border-b border-stone-100 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md z-50 shrink-0">
<div className="flex items-center gap-8">
<a className="text-xl tracking-tighter font-medium text-stone-900" href="#">FERN</a>
<nav className="hidden md:flex items-center gap-6 text-sm text-stone-500 font-light">
<a className="hover:text-stone-900 transition-colors" href="#">Living</a>
<a className="hover:text-stone-900 transition-colors" href="#">Dining</a>
<a className="hover:text-stone-900 transition-colors" href="#">Bedroom</a>
<a className="hover:text-stone-900 transition-colors" href="#">Workspace</a>
<a className="text-stone-900 font-normal" href="#">New Arrivals</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm font-light focus:outline-none focus:ring-1 focus:ring-stone-300 w-64 placeholder:text-stone-400" placeholder="Search furniture..." type="text"/>
</div>
<button className="p-2 text-stone-500 hover:text-stone-900 transition-colors relative">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="p-2 text-stone-500 hover:text-stone-900 transition-colors relative">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-600 rounded-full border border-white"></span>
</button>
<button className="w-8 h-8 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-600 ml-2">
<span className="text-xs font-medium">JD</span>
</button>
</div>
</header>

<main className="flex-1 flex overflow-hidden">

<aside className="w-72 bg-white border-r border-stone-100 flex flex-col overflow-y-auto hidden lg:flex shrink-0">
<div className="p-6 border-b border-stone-50">
<div className="flex items-center justify-between mb-6">
<h2 className="text-sm font-medium tracking-tight text-stone-900">Filters</h2>
<button className="text-xs text-stone-400 hover:text-stone-900 transition-colors">Reset</button>
</div>

<div className="mb-8">
<h3 className="text-xs font-medium text-stone-400 uppercase tracking-widest mb-4">Category</h3>
<div className="space-y-2.5">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox appearance-none w-4 h-4 border border-stone-300 rounded-md checked:bg-stone-900 transition-all" type="checkbox"/>
<span className="text-sm font-light text-stone-600 group-hover:text-stone-900">Seating</span>
<span className="ml-auto text-xs text-stone-400">12</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="custom-checkbox appearance-none w-4 h-4 border border-stone-300 rounded-md checked:bg-stone-900 transition-all" type="checkbox"/>
<span className="text-sm font-light text-stone-600 group-hover:text-stone-900">Tables</span>
<span className="ml-auto text-xs text-stone-400">8</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox appearance-none w-4 h-4 border border-stone-300 rounded-md checked:bg-stone-900 transition-all" type="checkbox"/>
<span className="text-sm font-light text-stone-600 group-hover:text-stone-900">Storage</span>
<span className="ml-auto text-xs text-stone-400">24</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox appearance-none w-4 h-4 border border-stone-300 rounded-md checked:bg-stone-900 transition-all" type="checkbox"/>
<span className="text-sm font-light text-stone-600 group-hover:text-stone-900">Lighting</span>
<span className="ml-auto text-xs text-stone-400">6</span>
</label>
</div>
</div>

<div className="mb-8">
<h3 className="text-xs font-medium text-stone-400 uppercase tracking-widest mb-4">Price Range</h3>
<div className="relative pt-2">
<input className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer" max="5000" min="0" type="range" value="2400"/>
<div className="flex items-center justify-between mt-4">
<div className="flex items-center gap-1 border border-stone-200 rounded px-2 py-1 bg-stone-50">
<span className="text-xs text-stone-500">$</span>
<input className="w-12 bg-transparent text-xs font-medium outline-none text-stone-700" type="number" value="0"/>
</div>
<span className="text-stone-300">-</span>
<div className="flex items-center gap-1 border border-stone-200 rounded px-2 py-1 bg-stone-50">
<span className="text-xs text-stone-500">$</span>
<input className="w-12 bg-transparent text-xs font-medium outline-none text-stone-700" type="number" value="2400"/>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-stone-400 uppercase tracking-widest mb-4">Material</h3>
<div className="grid grid-cols-4 gap-2">
<button className="w-full aspect-square rounded-lg bg-[#EFEBE4] border border-stone-200 hover:border-stone-400 transition-colors focus:ring-2 focus:ring-offset-1 focus:ring-stone-300" title="Oak"></button>
<button className="w-full aspect-square rounded-lg bg-[#5C5346] border border-stone-200 hover:border-stone-400 transition-colors focus:ring-2 focus:ring-offset-1 focus:ring-stone-300" title="Walnut"></button>
<button className="w-full aspect-square rounded-lg bg-[#27272a] border border-stone-200 hover:border-stone-400 transition-colors focus:ring-2 focus:ring-offset-1 focus:ring-stone-300" title="Black Metal"></button>
<button className="w-full aspect-square rounded-lg bg-[#d4d4d8] border border-stone-200 hover:border-stone-400 transition-colors focus:ring-2 focus:ring-offset-1 focus:ring-stone-300" title="Brushed Steel"></button>
</div>
</div>
</div>
<div className="p-6 mt-auto bg-stone-50/50">
<div className="p-4 bg-white border border-stone-200 rounded-xl shadow-sm">
<div className="flex gap-3 mb-2">
<div className="p-2 bg-stone-100 rounded-full w-fit text-stone-600">
<iconify-icon icon="solar:box-minimalistic-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-stone-900">Fern Membership</p>
<p className="text-xs text-stone-500 font-light mt-0.5">Free shipping on all orders.</p>
</div>
</div>
<button className="w-full mt-2 py-2 text-xs font-medium bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors">Join Now</button>
</div>
</div>
</aside>

<div className="flex-1 overflow-y-auto bg-white p-6 md:p-10">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
<div>
<h1 className="text-3xl font-medium tracking-tight text-stone-900 mb-2">Living Room</h1>
<p className="text-stone-500 font-light max-w-lg">Curated seating, tables, and storage designed to bring warmth and modularity to your central gathering space.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 border border-stone-200 rounded-lg text-sm font-medium text-stone-600 hover:bg-stone-50 transition-colors">
<iconify-icon icon="solar:sort-vertical-linear" width="16"></iconify-icon>
                        Sort by
                    </button>
<button className="lg:hidden flex items-center gap-2 px-4 py-2 bg-stone-900 text-white border border-stone-900 rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon>
                        Filters
                    </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 rounded-xl overflow-hidden mb-4">
<img alt="Chair" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-white/90 backdrop-blur text-[10px] uppercase tracking-wider font-medium text-stone-900 rounded-md">New</span>
</div>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-900 shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-base font-medium text-stone-900 group-hover:underline decoration-1 underline-offset-4 decoration-stone-300">Oslo Armchair</h3>
<span className="text-sm font-medium text-stone-900">$890</span>
</div>
<p className="text-sm text-stone-500 font-light mt-1">Oak Wood / Beige Fabric</p>
<div className="flex gap-1.5 mt-3">
<div className="w-3 h-3 rounded-full bg-[#D8D4CC] border border-stone-200"></div>
<div className="w-3 h-3 rounded-full bg-[#5C5346] border border-stone-200"></div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 rounded-xl overflow-hidden mb-4">
<img alt="Table" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-900 shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-base font-medium text-stone-900 group-hover:underline decoration-1 underline-offset-4 decoration-stone-300">Kyln Side Table</h3>
<span className="text-sm font-medium text-stone-900">$320</span>
</div>
<p className="text-sm text-stone-500 font-light mt-1">Travertine Stone</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 rounded-xl overflow-hidden mb-4">
<img alt="Sofa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-stone-900/90 backdrop-blur text-[10px] uppercase tracking-wider font-medium text-white rounded-md">Best Seller</span>
</div>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-900 shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-base font-medium text-stone-900 group-hover:underline decoration-1 underline-offset-4 decoration-stone-300">Haven Sectional</h3>
<span className="text-sm font-medium text-stone-900">$3,400</span>
</div>
<p className="text-sm text-stone-500 font-light mt-1">Performance Linen / Gray</p>
<div className="flex gap-1.5 mt-3">
<div className="w-3 h-3 rounded-full bg-[#a1a1aa] border border-stone-200"></div>
<div className="w-3 h-3 rounded-full bg-[#f4f4f5] border border-stone-200"></div>
<div className="w-3 h-3 rounded-full bg-[#27272a] border border-stone-200"></div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 rounded-xl overflow-hidden mb-4">
<img alt="Lamp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-900 shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-base font-medium text-stone-900 group-hover:underline decoration-1 underline-offset-4 decoration-stone-300">Lume Floor Lamp</h3>
<span className="text-sm font-medium text-stone-900">$245</span>
</div>
<p className="text-sm text-stone-500 font-light mt-1">Brushed Brass</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 rounded-xl overflow-hidden mb-4">
<img alt="Chair 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-900 shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-base font-medium text-stone-900 group-hover:underline decoration-1 underline-offset-4 decoration-stone-300">Vera Lounge</h3>
<span className="text-sm font-medium text-stone-900">$1,150</span>
</div>
<p className="text-sm text-stone-500 font-light mt-1">Black Leather</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 rounded-xl overflow-hidden mb-4">
<img alt="Shelf" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-900 shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-base font-medium text-stone-900 group-hover:underline decoration-1 underline-offset-4 decoration-stone-300">Modular Shelf</h3>
<span className="text-sm font-medium text-stone-900">$560</span>
</div>
<p className="text-sm text-stone-500 font-light mt-1">Walnut Veneer</p>
</div>
</div>
</div>

<div className="mt-20 flex flex-col items-center justify-center gap-4">
<span className="text-xs text-stone-400 font-light">Showing 6 of 42 items</span>
<div className="w-48 h-1 bg-stone-100 rounded-full overflow-hidden">
<div className="w-1/4 h-full bg-stone-900 rounded-full"></div>
</div>
<button className="mt-4 px-6 py-2.5 border border-stone-200 rounded-lg text-sm font-medium hover:border-stone-400 transition-colors">Load More</button>
</div>

<footer className="mt-20 pt-10 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center md:items-start gap-6 text-stone-400 text-xs font-light">
<div className="flex gap-6">
<a className="hover:text-stone-900" href="#">Privacy Policy</a>
<a className="hover:text-stone-900" href="#">Terms of Service</a>
<a className="hover:text-stone-900" href="#">Return Policy</a>
</div>
<div>
                    © 2024 Fern Inc.
                </div>
</footer>
</div>
</main>

    </>
  );
}
