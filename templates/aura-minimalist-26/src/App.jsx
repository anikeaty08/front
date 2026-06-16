import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
zinc: {
50: '#fafafa',
100: '#f4f4f5',
200: '#e4e4e7',
300: '#d4d4d8',
400: '#a1a1aa',
500: '#71717a',
600: '#52525b',
700: '#3f3f46',
800: '#27272a',
900: '#18181b',
950: '#09090b',
}
}
}
}
}



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
      

<div className="bg-zinc-950 text-zinc-300 w-full z-50 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between text-xs font-medium">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:global-linear" width="14"></iconify-icon> Global Shipping Available</span>
</div>
<div className="flex items-center gap-4 divide-x divide-zinc-700">
<button className="hover:text-white transition-colors flex items-center gap-1">
                    English (US) <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>
<button className="pl-4 hover:text-white transition-colors flex items-center gap-1">
                    USD ($) <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>
<a className="pl-4 hover:text-white transition-colors" href="#">Sign In</a>
</div>
</div>
</div>

<nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-200/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<button className="md:hidden p-2 -ml-2 text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>

<div className="flex-shrink-0 flex items-center justify-center absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
<a className="text-lg font-medium tracking-tighter text-zinc-950 uppercase letter-spacing-widest" href="#">Aura</a>
</div>

<div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">New Arrivals</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Objects</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Apparel</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Journal</a>
</div>

<div className="flex items-center gap-3 sm:gap-5 text-zinc-500">
<button className="p-1 hover:text-zinc-900 transition-colors hidden sm:block">
<iconify-icon icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<button className="p-1 hover:text-zinc-900 transition-colors relative flex items-center">
<iconify-icon icon="solar:bag-3-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-900 text-[10px] font-medium text-white">2</span>
</button>
</div>
</div>
</nav>

<header className="relative bg-white pt-20 pb-40 lg:pt-32 lg:pb-48 border-b border-zinc-100 overflow-visible">

<div className="absolute inset-0 z-0 pointer-events-none opacity-30" style={{backgroundImage: 'radial-gradient(circle at 50% 0%, #f4f4f5 0%, transparent 70%)'}}></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
<div className="inline-flex items-center gap-2 rounded-full bg-zinc-50 border border-zinc-200/60 px-3 py-1 mb-8">
<span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-600 tracking-wide uppercase">System Active • Studio Collection</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-zinc-950 mb-6 text-balance leading-tight">
                Precision in every detail.
            </h1>
<p className="text-base sm:text-lg text-zinc-500 max-w-2xl mb-10 font-normal text-balance">
                Discover a curated selection of essential objects where form seamlessly meets function. Engineered with strict intention for your daily environment.
            </p>
</div>

<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-20">
<div className="bg-white rounded-xl shadow-xl shadow-zinc-200/40 border border-zinc-200/80 p-2 flex flex-col md:flex-row gap-2">
<div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2">

<button className="flex flex-col items-start p-3 rounded-lg hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-200 text-left group">
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest mb-1 flex items-center gap-1">
<iconify-icon icon="solar:box-minimalistic-linear" width="12"></iconify-icon> Classification
                        </span>
<div className="flex items-center justify-between w-full">
<span className="text-sm font-medium text-zinc-900">All Objects</span>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</button>

<div className="hidden sm:block w-px bg-zinc-100 my-2"></div>
<button className="flex flex-col items-start p-3 rounded-lg hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-200 text-left group -ml-4 sm:ml-0">
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest mb-1 flex items-center gap-1">
<iconify-icon icon="solar:layers-minimalistic-linear" width="12"></iconify-icon> Material Origin
                        </span>
<div className="flex items-center justify-between w-full">
<span className="text-sm font-medium text-zinc-900">Any Material</span>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</button>

<div className="hidden sm:block w-px bg-zinc-100 my-2"></div>
<button className="flex flex-col items-start p-3 rounded-lg hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-200 text-left group -ml-4 sm:ml-0">
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest mb-1 flex items-center gap-1">
<iconify-icon icon="solar:sort-linear" width="12"></iconify-icon> Sort Priority
                        </span>
<div className="flex items-center justify-between w-full">
<span className="text-sm font-medium text-zinc-900">Newest Arrivals</span>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</button>
</div>
<div className="p-2 flex items-center">
<button className="w-full md:w-auto bg-zinc-900 text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm flex justify-center items-center gap-2">
                        Initialize Search
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="py-24 bg-zinc-50 pt-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xs font-medium uppercase tracking-widest text-zinc-500">Curated Environments</h2>
<div className="h-px bg-zinc-200 flex-grow ml-6"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<a className="group relative block overflow-hidden rounded-xl bg-zinc-200 aspect-[4/3] md:aspect-square lg:aspect-[4/3] border border-zinc-200/50" href="#">
<img alt="Workspace Objects" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-900/20 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 flex flex-col w-full">
<div className="flex justify-between items-center border-b border-white/20 pb-3 mb-3">
<span className="text-[10px] font-medium text-white/70 uppercase tracking-widest">ENV-01</span>
<span className="text-[10px] font-medium text-white/70 uppercase tracking-widest flex items-center gap-1"><iconify-icon icon="solar:archive-linear" width="12"></iconify-icon> 24 Specs</span>
</div>
<div className="flex justify-between items-end w-full">
<div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-1">Workspace</h3>
<p className="text-xs text-white/60 font-medium">Engineered for productivity.</p>
</div>
<div className="bg-white/10 backdrop-blur-md rounded-lg p-2 text-white border border-white/10 group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</div>
</a>
<div className="grid grid-rows-2 gap-6">

<a className="group relative block overflow-hidden rounded-xl bg-zinc-200 h-full border border-zinc-200/50" href="#">
<img alt="Living Space" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&amp;w=2565&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-900/20 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 flex flex-col w-full">
<div className="flex justify-between items-center border-b border-white/20 pb-2 mb-2">
<span className="text-[10px] font-medium text-white/70 uppercase tracking-widest">ENV-02</span>
<span className="text-[10px] font-medium text-white/70 uppercase tracking-widest flex items-center gap-1"><iconify-icon icon="solar:archive-linear" width="12"></iconify-icon> 18 Specs</span>
</div>
<div className="flex justify-between items-end w-full">
<h3 className="text-xl font-medium tracking-tight text-white">Living Area</h3>
<div className="bg-white/10 backdrop-blur-md rounded-lg p-1.5 text-white border border-white/10 group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group relative block overflow-hidden rounded-xl bg-zinc-200 h-full border border-zinc-200/50" href="#">
<img alt="Everyday Carry" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&amp;w=2193&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-900/20 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 flex flex-col w-full">
<div className="flex justify-between items-center border-b border-white/20 pb-2 mb-2">
<span className="text-[10px] font-medium text-white/70 uppercase tracking-widest">ENV-03</span>
<span className="text-[10px] font-medium text-white/70 uppercase tracking-widest flex items-center gap-1"><iconify-icon icon="solar:archive-linear" width="12"></iconify-icon> 32 Specs</span>
</div>
<div className="flex justify-between items-end w-full">
<h3 className="text-xl font-medium tracking-tight text-white">Essential Carry</h3>
<div className="bg-white/10 backdrop-blur-md rounded-lg p-1.5 text-white border border-white/10 group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200/60" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 border-b border-zinc-200/60 pb-6">
<div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Inventory Ledger</h2>
<p className="text-sm text-zinc-500 mt-1">Detailed specifications for daily utilities.</p>
</div>

<div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide w-full sm:w-auto">
<button className="whitespace-nowrap bg-zinc-900 text-white px-4 py-1.5 rounded-md text-xs font-medium border border-zinc-900 flex items-center gap-1.5"><iconify-icon icon="solar:checklist-minimalistic-linear" width="14"></iconify-icon> View All</button>
<button className="whitespace-nowrap bg-white text-zinc-600 px-4 py-1.5 rounded-md text-xs font-medium border border-zinc-200 hover:border-zinc-300 hover:text-zinc-900 transition-colors">Desk</button>
<button className="whitespace-nowrap bg-white text-zinc-600 px-4 py-1.5 rounded-md text-xs font-medium border border-zinc-200 hover:border-zinc-300 hover:text-zinc-900 transition-colors">Carry</button>
<button className="whitespace-nowrap bg-white text-zinc-600 px-4 py-1.5 rounded-md text-xs font-medium border border-zinc-200 hover:border-zinc-300 hover:text-zinc-900 transition-colors">Home</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10">

<div className="group relative flex flex-col cursor-pointer bg-zinc-50/50 rounded-xl border border-zinc-200/50 p-3 hover:border-zinc-300 hover:shadow-sm transition-all">
<div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-zinc-100 mb-4 relative border border-zinc-200/50">
<img alt="Matte Black Pen" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-start border-b border-zinc-200/80 pb-3 border-dashed">
<div>
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest mb-1 block">SKU: PN-T5</span>
<h3 className="text-sm font-medium text-zinc-900">Titanium Pen</h3>
</div>
<p className="text-sm font-medium text-zinc-900 bg-white border border-zinc-200 px-2 py-0.5 rounded text-center min-w-[50px]">$45</p>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-500 font-medium">Workspace</span>
<span className="flex items-center gap-1.5 text-zinc-900 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Available
                            </span>
</div>
</div>
</div>

<div className="group relative flex flex-col cursor-pointer bg-zinc-50/50 rounded-xl border border-zinc-200/50 p-3 hover:border-zinc-300 hover:shadow-sm transition-all">
<div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-zinc-100 mb-4 relative border border-zinc-200/50">
<img alt="Ceramic Mug" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1593998066526-65fcab3021a2?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-start border-b border-zinc-200/80 pb-3 border-dashed">
<div>
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest mb-1 block">SKU: MG-C1</span>
<h3 className="text-sm font-medium text-zinc-900">Studio Mug</h3>
</div>
<p className="text-sm font-medium text-zinc-900 bg-white border border-zinc-200 px-2 py-0.5 rounded text-center min-w-[50px]">$28</p>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-500 font-medium">Living Area</span>
<span className="flex items-center gap-1.5 text-zinc-900 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Available
                            </span>
</div>
</div>
</div>

<div className="group relative flex flex-col cursor-pointer bg-zinc-50/50 rounded-xl border border-zinc-200/50 p-3 hover:border-zinc-300 hover:shadow-sm transition-all">
<div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-zinc-100 mb-4 relative border border-zinc-200/50">
<div className="absolute top-2 left-2 bg-zinc-900 text-white text-[10px] font-medium px-2 py-0.5 rounded z-10 uppercase tracking-widest flex items-center gap-1"><iconify-icon icon="solar:star-linear" width="10"></iconify-icon> New</div>
<img alt="Leather Folio" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-start border-b border-zinc-200/80 pb-3 border-dashed">
<div>
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest mb-1 block">SKU: FL-L4</span>
<h3 className="text-sm font-medium text-zinc-900">Leather Folio</h3>
</div>
<p className="text-sm font-medium text-zinc-900 bg-white border border-zinc-200 px-2 py-0.5 rounded text-center min-w-[50px]">$120</p>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-500 font-medium">Essential Carry</span>
<span className="flex items-center gap-1.5 text-zinc-900 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Available
                            </span>
</div>
</div>
</div>

<div className="group relative flex flex-col cursor-pointer bg-zinc-50/50 rounded-xl border border-zinc-200/50 p-3 hover:border-zinc-300 hover:shadow-sm transition-all">
<div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-zinc-100 mb-4 relative border border-zinc-200/50">
<img alt="Smart Watch Minimal" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&amp;w=2599&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-start border-b border-zinc-200/80 pb-3 border-dashed">
<div>
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest mb-1 block">SKU: TM-01</span>
<h3 className="text-sm font-medium text-zinc-900">Timepiece 01</h3>
</div>
<p className="text-sm font-medium text-zinc-900 bg-white border border-zinc-200 px-2 py-0.5 rounded text-center min-w-[50px]">$185</p>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-500 font-medium">Essential Carry</span>
<span className="flex items-center gap-1.5 text-zinc-900 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Low Stock
                            </span>
</div>
</div>
</div>

<div className="group relative flex flex-col cursor-pointer bg-zinc-50/50 rounded-xl border border-zinc-200/50 p-3 hover:border-zinc-300 hover:shadow-sm transition-all">
<div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-zinc-100 mb-4 relative border border-zinc-200/50">
<img alt="Concrete Tray" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-start border-b border-zinc-200/80 pb-3 border-dashed">
<div>
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest mb-1 block">SKU: TR-C2</span>
<h3 className="text-sm font-medium text-zinc-900">Valet Tray</h3>
</div>
<p className="text-sm font-medium text-zinc-900 bg-white border border-zinc-200 px-2 py-0.5 rounded text-center min-w-[50px]">$35</p>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-500 font-medium">Workspace</span>
<span className="flex items-center gap-1.5 text-zinc-900 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Available
                            </span>
</div>
</div>
</div>

<div className="group relative flex flex-col cursor-pointer bg-zinc-50/30 rounded-xl border border-zinc-200/50 p-3 hover:border-zinc-300 transition-all opacity-70 hover:opacity-100">
<div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-zinc-100 mb-4 relative border border-zinc-200/50">
<div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm text-zinc-600 text-[10px] font-medium px-2 py-0.5 rounded z-10 uppercase tracking-widest border border-zinc-200/50 flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear" width="10"></iconify-icon> Waitlist</div>
<img alt="Headphones" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out grayscale" src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-start border-b border-zinc-200/80 pb-3 border-dashed">
<div>
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest mb-1 block">SKU: AU-O8</span>
<h3 className="text-sm font-medium text-zinc-600">Over-Ear Audio</h3>
</div>
<p className="text-sm font-medium text-zinc-500 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded text-center min-w-[50px]">$250</p>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-400 font-medium">Essential Carry</span>
<span className="flex items-center gap-1.5 text-zinc-500 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span> Depleted
                            </span>
</div>
</div>
</div>

<div className="group relative flex flex-col cursor-pointer bg-zinc-50/50 rounded-xl border border-zinc-200/50 p-3 hover:border-zinc-300 hover:shadow-sm transition-all">
<div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-zinc-100 mb-4 relative border border-zinc-200/50">
<img alt="Notebook" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-start border-b border-zinc-200/80 pb-3 border-dashed">
<div>
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest mb-1 block">SKU: NB-L1</span>
<h3 className="text-sm font-medium text-zinc-900">Linen Notebook</h3>
</div>
<p className="text-sm font-medium text-zinc-900 bg-white border border-zinc-200 px-2 py-0.5 rounded text-center min-w-[50px]">$22</p>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-500 font-medium">Workspace</span>
<span className="flex items-center gap-1.5 text-zinc-900 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Available
                            </span>
</div>
</div>
</div>

<div className="group relative flex flex-col cursor-pointer bg-zinc-50/50 rounded-xl border border-zinc-200/50 p-3 hover:border-zinc-300 hover:shadow-sm transition-all">
<div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-zinc-100 mb-4 relative border border-zinc-200/50">
<img alt="Earbuds" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&amp;w=2584&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-start border-b border-zinc-200/80 pb-3 border-dashed">
<div>
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest mb-1 block">SKU: AU-W3</span>
<h3 className="text-sm font-medium text-zinc-900">Wireless Earbuds</h3>
</div>
<p className="text-sm font-medium text-zinc-900 bg-white border border-zinc-200 px-2 py-0.5 rounded text-center min-w-[50px]">$140</p>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-500 font-medium">Essential Carry</span>
<span className="flex items-center gap-1.5 text-zinc-900 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Available
                            </span>
</div>
</div>
</div>
</div>
<div className="mt-16 border border-zinc-200/80 rounded-lg p-6 bg-zinc-50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
<div>
<h4 className="text-sm font-medium text-zinc-900">Complete Catalog Array</h4>
<p className="text-xs text-zinc-500 mt-1">Access our full database of over 140 engineered items.</p>
</div>
<a className="inline-flex items-center gap-2 text-xs font-medium bg-white text-zinc-900 border border-zinc-200 px-5 py-2.5 rounded-md hover:border-zinc-300 transition-colors shadow-sm whitespace-nowrap" href="#">
                    Access Complete Database
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200/50 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlNGU0ZTciLz48L3N2Zz4=')] opacity-50 z-0"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex items-center justify-between mb-12 border-b border-zinc-200/80 pb-4">
<h2 className="text-lg font-medium tracking-tight text-zinc-900">Service Standards &amp; Guarantees</h2>
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest">Global Protocol</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200/80 border border-zinc-200/80 rounded-xl bg-white shadow-sm">

<div className="p-8 flex flex-col items-start hover:bg-zinc-50/50 transition-colors">
<div className="flex items-center justify-between w-full mb-6">
<div className="bg-zinc-900 text-white p-2 rounded-lg border border-zinc-800">
<iconify-icon icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest">Protocol 01</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-zinc-900 mb-2">Sustainable Architecture</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-4">Sourced responsibly. We strictly prioritize recycled and recyclable base materials without compromising core structural integrity.</p>
<a className="mt-auto text-[10px] font-medium text-zinc-900 uppercase tracking-widest flex items-center gap-1 hover:text-zinc-600 transition-colors" href="#">View Material Data <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon></a>
</div>

<div className="p-8 flex flex-col items-start hover:bg-zinc-50/50 transition-colors">
<div className="flex items-center justify-between w-full mb-6">
<div className="bg-zinc-900 text-white p-2 rounded-lg border border-zinc-800">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest">Protocol 02</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-zinc-900 mb-2">Lifetime Warranty coverage</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-4">Engineered to last. All hardware elements are entirely backed by our repair or replace guarantee against systematic defects.</p>
<a className="mt-auto text-[10px] font-medium text-zinc-900 uppercase tracking-widest flex items-center gap-1 hover:text-zinc-600 transition-colors" href="#">Review Terms <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon></a>
</div>

<div className="p-8 flex flex-col items-start hover:bg-zinc-50/50 transition-colors">
<div className="flex items-center justify-between w-full mb-6">
<div className="bg-zinc-900 text-white p-2 rounded-lg border border-zinc-800">
<iconify-icon icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest">Protocol 03</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-zinc-900 mb-2">Priority Global Transit</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-4">Carbon neutral delivery via priority global routes. Complimentary express routing allocated for all orders exceeding $150.</p>
<a className="mt-auto text-[10px] font-medium text-zinc-900 uppercase tracking-widest flex items-center gap-1 hover:text-zinc-600 transition-colors" href="#">Track Coverage <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon></a>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 text-zinc-400 pt-20 pb-10 mt-auto border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16 border-b border-zinc-800/50 pb-16">

<div className="lg:col-span-2">
<a className="text-lg font-medium tracking-tighter text-white uppercase letter-spacing-widest block mb-4 flex items-center gap-2" href="#">
                        Aura <span className="text-[10px] font-normal text-zinc-500 tracking-widest border border-zinc-800 px-1.5 py-0.5 rounded">INTL.</span>
</a>
<p className="text-xs text-zinc-500 mb-8 max-w-sm leading-relaxed">Elevating the everyday environment through meticulously structured and engineered design. Register for priority transmission of new releases.</p>
<form className="flex max-w-sm">
<div className="relative w-full flex items-center border border-zinc-800 rounded-lg bg-zinc-900/50 focus-within:border-zinc-600 focus-within:bg-zinc-900 transition-all">
<iconify-icon className="absolute left-3 text-zinc-500" icon="solar:letter-linear" width="16"></iconify-icon>
<input className="w-full bg-transparent px-10 py-2.5 text-xs text-white focus:outline-none placeholder-zinc-600" placeholder="Communication address" type="email"/>
<button className="absolute right-1.5 bg-white text-zinc-950 px-3 py-1.5 rounded-md text-[10px] font-medium hover:bg-zinc-200 transition-colors uppercase tracking-widest" type="submit">
                                Submit
                            </button>
</div>
</form>
</div>

<div>
<h4 className="text-[10px] font-medium text-zinc-300 uppercase tracking-widest mb-4 flex items-center gap-2"><iconify-icon icon="solar:box-minimalistic-linear" width="12"></iconify-icon> Inventory</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors flex justify-between items-center group" href="#">Full Database <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon></a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors flex justify-between items-center group" href="#">Workspace <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon></a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors flex justify-between items-center group" href="#">Living Area <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon></a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors flex justify-between items-center group" href="#">Essential Carry <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon></a></li>
</ul>
</div>

<div>
<h4 className="text-[10px] font-medium text-zinc-300 uppercase tracking-widest mb-4 flex items-center gap-2"><iconify-icon icon="solar:phone-calling-linear" width="12"></iconify-icon> Support Dept.</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors flex justify-between items-center group" href="#">FAQ Base <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon></a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors flex justify-between items-center group" href="#">Transit &amp; Returns <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon></a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors flex justify-between items-center group" href="#">Communication <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon></a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors flex justify-between items-center group" href="#">Warranty Claims <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon></a></li>
</ul>
</div>

<div>
<h4 className="text-[10px] font-medium text-zinc-300 uppercase tracking-widest mb-4 flex items-center gap-2"><iconify-icon icon="solar:info-circle-linear" width="12"></iconify-icon> Corporate</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors flex justify-between items-center group" href="#">Our Philosophy <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon></a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors flex justify-between items-center group" href="#">Careers <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon></a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors flex justify-between items-center group" href="#">Press Kit <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon></a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-4">
<p className="text-[10px] text-zinc-600 tracking-widest uppercase">© 2024 Aura Studio Inc.</p>
<span className="w-1 h-1 rounded-full bg-zinc-800 hidden md:block"></span>
<p className="text-[10px] text-zinc-600 tracking-widest uppercase hidden md:block">All Systems Operational.</p>
</div>
<div className="flex gap-6">
<a className="text-[10px] text-zinc-600 uppercase tracking-widest hover:text-white transition-colors" href="#">Privacy Protocol</a>
<a className="text-[10px] text-zinc-600 uppercase tracking-widest hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
