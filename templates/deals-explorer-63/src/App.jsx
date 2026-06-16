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
},
colors: {
brand: {
500: '#6366f1',
600: '#4f46e5',
900: '#312e81',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-900/20 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl supports-[backdrop-filter]:bg-black/50">
<div className="w-full px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="text-white font-semibold text-lg tracking-tighter group-hover:text-brand-500 transition-colors">SAVES.BD</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="text-white" href="#">Explore</a>
<a className="hover:text-white transition-colors" href="#">Categories</a>
<a className="hover:text-white transition-colors" href="#">Saved</a>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 iconify" data-icon="lucide:search" data-width="16"></span>
<input className="bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-1.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50 w-64 transition-all" placeholder="Search brands..." type="text"/>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-500 to-purple-500 p-[1px] cursor-pointer">
<div className="w-full h-full rounded-full bg-black flex items-center justify-center">
<span className="text-xs font-semibold text-white">JD</span>
</div>
</div>
</div>
</div>
</nav>

<div className="flex pt-16 min-h-screen relative z-10">

<aside className="hidden lg:block w-64 fixed left-0 top-16 bottom-0 border-r border-white/5 bg-black/20 backdrop-blur-sm p-6 overflow-y-auto custom-scroll">
<div className="space-y-8">

<div>
<h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">Categories</h3>
<div className="space-y-1">
<label className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer group transition-colors">
<span className="iconify text-neutral-400 group-hover:text-white" data-icon="lucide:layout-grid" data-width="16"></span>
<span className="text-sm font-medium text-white">All Deals</span>
</label>
<label className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer group transition-colors">
<span className="iconify text-neutral-400 group-hover:text-white" data-icon="lucide:smartphone" data-width="16"></span>
<span className="text-sm text-neutral-400 group-hover:text-white">Electronics</span>
</label>
<label className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer group transition-colors">
<span className="iconify text-neutral-400 group-hover:text-white" data-icon="lucide:shirt" data-width="16"></span>
<span className="text-sm text-neutral-400 group-hover:text-white">Fashion</span>
</label>
<label className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer group transition-colors">
<span className="iconify text-neutral-400 group-hover:text-white" data-icon="lucide:utensils" data-width="16"></span>
<span className="text-sm text-neutral-400 group-hover:text-white">Food &amp; Dining</span>
</label>
<label className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer group transition-colors">
<span className="iconify text-neutral-400 group-hover:text-white" data-icon="lucide:plane" data-width="16"></span>
<span className="text-sm text-neutral-400 group-hover:text-white">Travel</span>
</label>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">Status</h3>
<div className="space-y-3">
<label className="checkbox-wrapper flex items-center gap-3 cursor-pointer group">
<input checked="" className="hidden peer" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-700 bg-neutral-900 group-hover:border-neutral-500 transition-colors flex items-center justify-center">
<span className="iconify text-white hidden" data-icon="lucide:check" data-width="10"></span>
</div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Verified Only</span>
</label>
<label className="checkbox-wrapper flex items-center gap-3 cursor-pointer group">
<input className="hidden peer" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-700 bg-neutral-900 group-hover:border-neutral-500 transition-colors flex items-center justify-center">
<span className="iconify text-white hidden" data-icon="lucide:check" data-width="10"></span>
</div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Expiring Soon</span>
</label>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">Payment Partner</h3>
<div className="space-y-3">
<label className="checkbox-wrapper flex items-center gap-3 cursor-pointer group">
<input className="hidden peer" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-700 bg-neutral-900 group-hover:border-neutral-500 transition-colors flex items-center justify-center">
<span className="iconify text-white hidden" data-icon="lucide:check" data-width="10"></span>
</div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">bKash</span>
</label>
<label className="checkbox-wrapper flex items-center gap-3 cursor-pointer group">
<input className="hidden peer" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-700 bg-neutral-900 group-hover:border-neutral-500 transition-colors flex items-center justify-center">
<span className="iconify text-white hidden" data-icon="lucide:check" data-width="10"></span>
</div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">City Bank AMEX</span>
</label>
<label className="checkbox-wrapper flex items-center gap-3 cursor-pointer group">
<input className="hidden peer" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-700 bg-neutral-900 group-hover:border-neutral-500 transition-colors flex items-center justify-center">
<span className="iconify text-white hidden" data-icon="lucide:check" data-width="10"></span>
</div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">BRAC Bank</span>
</label>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">Minimum Discount</h3>
<div className="px-1">
<input className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:bg-brand-500 [&amp;::-webkit-slider-thumb]:rounded-full" max="100" min="0" type="range" value="20"/>
<div className="flex justify-between mt-2 text-xs text-neutral-500 font-mono">
<span>0%</span>
<span className="text-brand-400">20%</span>
<span>100%</span>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 lg:ml-64 p-6 lg:p-10">

<div className="lg:hidden flex gap-3 mb-6">
<div className="relative flex-1">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 iconify" data-icon="lucide:search" data-width="16"></span>
<input className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-500" placeholder="Search..." type="text"/>
</div>
<button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors">
<span className="iconify" data-icon="lucide:sliders-horizontal" data-width="18"></span>
</button>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
<div>
<h1 className="text-2xl font-semibold text-white tracking-tight">Explore Deals</h1>
<p className="text-sm text-neutral-500 mt-1">Showing 142 active offers in Bangladesh</p>
</div>

<div className="flex items-center gap-3">
<span className="text-xs text-neutral-500 font-medium">Sort by:</span>
<div className="relative group">
<button className="flex items-center gap-2 text-sm text-white bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 hover:bg-white/10 transition-all">
                            Newest First
                            <span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</button>

<div className="absolute right-0 top-full mt-2 w-40 bg-neutral-900 border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
<div className="p-1">
<a className="block px-3 py-2 text-sm text-brand-400 bg-white/5 rounded" href="#">Newest First</a>
<a className="block px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded transition-colors" href="#">Expiring Soon</a>
<a className="block px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded transition-colors" href="#">Highest Discount</a>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-wrap gap-2 mb-8">
<div className="flex items-center gap-1 pl-3 pr-2 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs text-brand-300">
                    Verified
                    <button className="hover:text-white transition-colors"><span className="iconify" data-icon="lucide:x" data-width="12"></span></button>
</div>
<div className="flex items-center gap-1 pl-3 pr-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-400 hover:border-white/20 transition-colors">
                    Electronics
                    <button className="hover:text-white transition-colors"><span className="iconify" data-icon="lucide:x" data-width="12"></span></button>
</div>
<button className="text-xs text-neutral-500 hover:text-white transition-colors px-2">Clear all</button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="group relative bg-neutral-900/50 border border-white/5 hover:border-brand-500/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)]">
<div className="p-6">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-lg bg-orange-600 text-white flex items-center justify-center font-bold text-lg tracking-tight shadow-lg shadow-orange-900/20">
                                D
                            </div>
<button className="text-neutral-600 hover:text-red-500 transition-colors">
<span className="iconify" data-icon="lucide:heart" data-width="18"></span>
</button>
</div>
<div className="mb-4">
<div className="flex items-center gap-2 mb-2">
<h3 className="text-white font-medium text-lg">Daraz Mall</h3>
<span className="iconify text-brand-500" data-icon="lucide:badge-check" data-width="16"></span>
</div>
<p className="text-sm text-neutral-400 leading-relaxed">Flat 25% off on Electronics with City Bank AMEX cards.</p>
</div>
<div className="flex items-center gap-3 mb-6">
<span className="px-2 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-xs font-medium text-orange-400">11.11 Deal</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-xs text-neutral-500">Min. spend ৳5000</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex flex-col">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Code</span>
<span className="text-sm font-mono text-white tracking-wide">AMEX25</span>
</div>
<button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors flex items-center gap-2">
                                Copy
                                <span className="iconify" data-icon="lucide:copy" data-width="14"></span>
</button>
</div>
</div>
</div>

<div className="group relative bg-neutral-900/50 border border-white/5 hover:border-pink-500/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(236,72,153,0.2)]">
<div className="p-6">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-lg bg-pink-600 text-white flex items-center justify-center font-bold text-lg tracking-tight">
                                fp
                            </div>
<button className="text-neutral-600 hover:text-red-500 transition-colors">
<span className="iconify" data-icon="lucide:heart" data-width="18"></span>
</button>
</div>
<div className="mb-4">
<div className="flex items-center gap-2 mb-2">
<h3 className="text-white font-medium text-lg">Foodpanda</h3>
<span className="iconify text-brand-500" data-icon="lucide:badge-check" data-width="16"></span>
</div>
<p className="text-sm text-neutral-400 leading-relaxed">Free delivery on all Pandamart orders above ৳499.</p>
</div>
<div className="flex items-center gap-3 mb-6">
<span className="px-2 py-1 rounded bg-pink-500/10 border border-pink-500/20 text-xs font-medium text-pink-400">Grocery</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-xs text-neutral-500">New Users</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex flex-col">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Expiring</span>
<span className="text-sm font-mono text-red-400">02h : 15m</span>
</div>
<button className="px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                                Apply
                                <span className="iconify" data-icon="lucide:external-link" data-width="14"></span>
</button>
</div>
</div>
</div>

<div className="group relative bg-neutral-900/50 border border-white/5 hover:border-red-500/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(239,68,68,0.2)]">
<div className="p-6">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-lg tracking-tight">
                                ST
                            </div>
<button className="text-neutral-600 hover:text-red-500 transition-colors">
<span className="iconify" data-icon="lucide:heart" data-width="18"></span>
</button>
</div>
<div className="mb-4">
<div className="flex items-center gap-2 mb-2">
<h3 className="text-white font-medium text-lg">Star Tech</h3>
</div>
<p className="text-sm text-neutral-400 leading-relaxed">Save ৳2000 on Dell Monitors. Official warranty included.</p>
</div>
<div className="flex items-center gap-3 mb-6">
<span className="px-2 py-1 rounded bg-red-500/10 border border-red-500/20 text-xs font-medium text-red-400">Hardware</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-xs text-neutral-500">In-Store</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex flex-col">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Savings</span>
<span className="text-sm font-mono text-white">৳ 2,000</span>
</div>
<button className="px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                                View Deal
                                <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>
</div>

<div className="group relative bg-neutral-900/50 border border-white/5 hover:border-amber-500/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.2)]">
<div className="p-6">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-lg bg-amber-600 text-black flex items-center justify-center font-bold text-lg tracking-tight">
                                Ar
                            </div>
<button className="text-neutral-600 hover:text-red-500 transition-colors">
<span className="iconify" data-icon="lucide:heart" data-width="18"></span>
</button>
</div>
<div className="mb-4">
<div className="flex items-center gap-2 mb-2">
<h3 className="text-white font-medium text-lg">Aarong</h3>
<span className="iconify text-brand-500" data-icon="lucide:badge-check" data-width="16"></span>
</div>
<p className="text-sm text-neutral-400 leading-relaxed">10% Cashback with BRAC Bank Tara cards on Taaga collection.</p>
</div>
<div className="flex items-center gap-3 mb-6">
<span className="px-2 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-amber-400">Lifestyle</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-xs text-neutral-500">Cashback</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex flex-col">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Offer</span>
<span className="text-sm font-mono text-white">Auto-Apply</span>
</div>
<button className="px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                                Shop Now
                                <span className="iconify" data-icon="lucide:external-link" data-width="14"></span>
</button>
</div>
</div>
</div>

<div className="group relative bg-neutral-900/50 border border-white/5 hover:border-emerald-500/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]">
<div className="p-6">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-lg tracking-tight">
                                egg
                            </div>
<button className="text-neutral-600 hover:text-red-500 transition-colors">
<span className="iconify" data-icon="lucide:heart" data-width="18"></span>
</button>
</div>
<div className="mb-4">
<div className="flex items-center gap-2 mb-2">
<h3 className="text-white font-medium text-lg">Chaldal</h3>
<span className="iconify text-brand-500" data-icon="lucide:badge-check" data-width="16"></span>
</div>
<p className="text-sm text-neutral-400 leading-relaxed">Buy 1 Get 1 Free on selected hygiene products.</p>
</div>
<div className="flex items-center gap-3 mb-6">
<span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">Essentials</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-xs text-neutral-500">BOGO</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex flex-col">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Code</span>
<span className="text-sm font-mono text-white">HYGIENE23</span>
</div>
<button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors flex items-center gap-2">
                                Copy
                                <span className="iconify" data-icon="lucide:copy" data-width="14"></span>
</button>
</div>
</div>
</div>

<div className="group relative bg-neutral-900/50 border border-white/5 hover:border-red-500/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(239,68,68,0.2)]">
<div className="p-6">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-lg bg-neutral-800 text-white flex items-center justify-center font-bold text-lg tracking-tight">
                                P
                            </div>
<button className="text-neutral-600 hover:text-red-500 transition-colors">
<span className="iconify" data-icon="lucide:heart" data-width="18"></span>
</button>
</div>
<div className="mb-4">
<div className="flex items-center gap-2 mb-2">
<h3 className="text-white font-medium text-lg">Pathao Food</h3>
</div>
<p className="text-sm text-neutral-400 leading-relaxed">৳100 OFF on your first 3 orders. No minimum value.</p>
</div>
<div className="flex items-center gap-3 mb-6">
<span className="px-2 py-1 rounded bg-red-500/10 border border-red-500/20 text-xs font-medium text-red-400">Delivery</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-xs text-neutral-500">App Only</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex flex-col">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Code</span>
<span className="text-sm font-mono text-white">PATHAO100</span>
</div>
<button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors flex items-center gap-2">
                                Copy
                                <span className="iconify" data-icon="lucide:copy" data-width="14"></span>
</button>
</div>
</div>
</div>
</div>

<div className="mt-12 flex justify-center">
<div className="inline-flex rounded-lg border border-white/10 bg-white/5 p-1">
<button className="w-8 h-8 flex items-center justify-center rounded text-neutral-500 hover:text-white hover:bg-white/5 transition-colors">
<span className="iconify" data-icon="lucide:chevron-left" data-width="16"></span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded text-white bg-brand-600 text-sm font-medium">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium">3</button>
<span className="w-8 h-8 flex items-center justify-center text-neutral-600 text-xs">...</span>
<button className="w-8 h-8 flex items-center justify-center rounded text-neutral-500 hover:text-white hover:bg-white/5 transition-colors">
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>
</div>
</main>
</div>

    </>
  );
}
