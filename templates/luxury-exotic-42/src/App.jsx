import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
lux: {
black: '#050505',
charcoal: '#121212',
panel: '#1A1A1A',
gold: '#D4AF37',
golddim: '#8a7122',
border: '#2A2A2A'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
      

<nav className="fixed top-0 w-full z-50 bg-lux-black/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-serif text-2xl tracking-tighter text-white hover:text-lux-gold transition-colors duration-300" href="#">
                APEX<span className="text-lux-gold">.</span>
</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
<a className="hover:text-white transition-colors" href="#inventory">INVENTORY</a>
<a className="hover:text-white transition-colors" href="#showroom">SHOWROOM</a>
<a className="hover:text-white transition-colors" href="#finance">FINANCE</a>
<a className="hover:text-white transition-colors" href="#consign">CONSIGN</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-white/5 rounded-full transition-colors group">
<span className="iconify group-hover:text-lux-gold text-neutral-400" data-icon="lucide:search" data-strokeWidth="1.5" data-width="20"></span>
</button>
<button className="hidden md:flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full hover:border-lux-gold/50 hover:bg-lux-gold/10 transition-all duration-300 group">
<span className="iconify text-lux-gold" data-icon="lucide:user" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs font-medium text-white group-hover:text-lux-gold">MEMBERS</span>
</button>
</div>
</div>
</nav>

<header className="relative h-screen w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-lux-charcoal">
<img alt="Luxury Car" className="w-full h-full object-cover opacity-60 scale-105 animate-pulse" src="https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&amp;w=2532&amp;auto=format&amp;fit=crop" style={{animationDuration: '10s'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-lux-black via-lux-black/50 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-lux-black/80 via-transparent to-lux-black/80"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16 animate-fade-in">
<p className="text-lux-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6">Automotive Artistry</p>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tight mb-8">
                Beyond the <br/><span className="italic text-neutral-200">Extraordinary</span>
</h1>
<p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed font-light">
                Curating the world's most exquisite collection of performance, luxury, and vintage automobiles for the discerning collector.
            </p>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center">
<button className="group relative px-8 py-4 bg-white text-lux-black text-sm font-semibold tracking-wide overflow-hidden transition-all hover:bg-lux-gold">
<span className="relative z-10 flex items-center gap-2">
                        VIEW INVENTORY
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</span>
</button>
<button className="px-8 py-4 border border-white/20 text-white text-sm font-medium tracking-wide hover:border-lux-gold hover:text-lux-gold transition-all duration-300 backdrop-blur-sm">
                    BOOK PRIVATE VIEWING
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] tracking-widest uppercase">Scroll</span>
<span className="iconify" data-icon="lucide:chevron-down" data-strokeWidth="1.5" data-width="16"></span>
</div>
</header>

<section className="border-y border-white/5 bg-lux-charcoal py-12">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center border-r border-white/5 last:border-0">
<div className="font-serif text-3xl md:text-4xl text-white mb-2">1.2<span className="text-lux-gold">k</span></div>
<div className="text-xs tracking-widest uppercase text-neutral-500">Cars Delivered</div>
</div>
<div className="text-center border-r border-white/5 last:border-0">
<div className="font-serif text-3xl md:text-4xl text-white mb-2">98<span className="text-lux-gold">%</span></div>
<div className="text-xs tracking-widest uppercase text-neutral-500">Return Clients</div>
</div>
<div className="text-center border-r border-white/5 last:border-0">
<div className="font-serif text-3xl md:text-4xl text-white mb-2">15</div>
<div className="text-xs tracking-widest uppercase text-neutral-500">Years Excellence</div>
</div>
<div className="text-center">
<div className="font-serif text-3xl md:text-4xl text-white mb-2">24<span className="text-lux-gold">/7</span></div>
<div className="text-xs tracking-widest uppercase text-neutral-500">Concierge</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="inventory">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="font-serif text-3xl md:text-4xl text-white mb-4 tracking-tight">The Showroom</h2>
<p className="text-neutral-500 text-sm max-w-md">Filter through our meticulously curated list of engineering marvels.</p>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-white bg-white/5 rounded border border-white/10 hover:border-lux-gold hover:text-lux-gold transition-all">
<span className="iconify" data-icon="lucide:layout-grid" data-strokeWidth="1.5" data-width="20"></span>
</button>
<button className="p-2 text-neutral-500 hover:text-white transition-all">
<span className="iconify" data-icon="lucide:list" data-strokeWidth="1.5" data-width="20"></span>
</button>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-12">

<aside className="w-full lg:w-64 space-y-10 shrink-0">

<div className="relative">
<input className="w-full bg-lux-panel border border-white/10 text-white text-sm px-4 py-3 rounded focus:outline-none focus:border-lux-gold transition-colors placeholder:text-neutral-600" placeholder="Search model..." type="text"/>
<span className="iconify absolute right-3 top-3.5 text-neutral-600" data-icon="lucide:search" data-width="16"></span>
</div>

<div>
<h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Marque</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 group cursor-pointer">
<div className="w-4 h-4 border border-neutral-600 rounded-sm flex items-center justify-center group-hover:border-lux-gold transition-colors">
<div className="w-2 h-2 bg-lux-gold opacity-0 group-hover:opacity-50 checkbox-checked:opacity-100"></div>
</div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Ferrari</span>
<span className="ml-auto text-xs text-neutral-600">04</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<div className="w-4 h-4 border border-neutral-600 rounded-sm flex items-center justify-center group-hover:border-lux-gold transition-colors">
<div className="w-2 h-2 bg-lux-gold opacity-100"></div>
</div>
<span className="text-sm text-white">Porsche</span>
<span className="ml-auto text-xs text-neutral-600">12</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<div className="w-4 h-4 border border-neutral-600 rounded-sm flex items-center justify-center group-hover:border-lux-gold transition-colors"></div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Lamborghini</span>
<span className="ml-auto text-xs text-neutral-600">03</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<div className="w-4 h-4 border border-neutral-600 rounded-sm flex items-center justify-center group-hover:border-lux-gold transition-colors"></div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Aston Martin</span>
<span className="ml-auto text-xs text-neutral-600">06</span>
</label>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Price Range</h3>
<div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
<span>$100k</span>
<span>$5M+</span>
</div>
<input className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer" type="range"/>
</div>

<div>
<h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Propulsion</h3>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 text-xs font-medium border border-lux-gold text-lux-gold rounded hover:bg-lux-gold hover:text-lux-black transition-colors">ICE</button>
<button className="px-3 py-1.5 text-xs font-medium border border-white/10 text-neutral-400 rounded hover:border-white hover:text-white transition-colors">Hybrid</button>
<button className="px-3 py-1.5 text-xs font-medium border border-white/10 text-neutral-400 rounded hover:border-white hover:text-white transition-colors">EV</button>
</div>
</div>
</aside>

<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">

<article className="group relative bg-lux-panel border border-white/5 rounded-sm overflow-hidden hover:border-lux-gold/30 transition-all duration-500">
<div className="relative h-64 overflow-hidden">
<div className="absolute top-4 right-4 z-20 bg-lux-black/80 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-wider text-white border border-white/10">In Stock</div>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-lux-panel to-transparent opacity-80"></div>

<div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center bg-lux-black/90 backdrop-blur-md border-t border-white/10">
<span className="text-xs text-white uppercase tracking-wide cursor-pointer hover:text-lux-gold flex items-center gap-2">
<span className="iconify" data-icon="lucide:eye" data-width="14"></span> View 360°
                            </span>
<span className="text-xs text-white uppercase tracking-wide cursor-pointer hover:text-lux-gold flex items-center gap-2">
<span className="iconify" data-icon="lucide:file-text" data-width="14"></span> PDF
                            </span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-serif text-xl text-white tracking-tight group-hover:text-lux-gold transition-colors">Porsche 911 GT3 RS</h3>
<p className="text-xs text-neutral-500 mt-1">2023 • Weissach Package</p>
</div>
<p className="font-medium text-white">$425,000</p>
</div>
<div className="h-px w-full bg-white/5 my-4"></div>
<div className="flex justify-between items-center text-neutral-400">
<div className="flex flex-col items-center gap-1">
<span className="iconify" data-icon="lucide:gauge" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-[10px] uppercase">3.0s</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-[10px] uppercase">518 HP</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="iconify" data-icon="lucide:fuel" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-[10px] uppercase">4.0L F6</span>
</div>
</div>
</div>
</article>

<article className="group relative bg-lux-panel border border-white/5 rounded-sm overflow-hidden hover:border-lux-gold/30 transition-all duration-500">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-lux-panel to-transparent opacity-80"></div>

<div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center bg-lux-black/90 backdrop-blur-md border-t border-white/10">
<span className="text-xs text-white uppercase tracking-wide cursor-pointer hover:text-lux-gold flex items-center gap-2">
<span className="iconify" data-icon="lucide:eye" data-width="14"></span> View 360°
                            </span>
<span className="text-xs text-white uppercase tracking-wide cursor-pointer hover:text-lux-gold flex items-center gap-2">
<span className="iconify" data-icon="lucide:file-text" data-width="14"></span> PDF
                            </span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-serif text-xl text-white tracking-tight group-hover:text-lux-gold transition-colors">Ferrari SF90 Stradale</h3>
<p className="text-xs text-neutral-500 mt-1">2022 • Assetto Fiorano</p>
</div>
<p className="font-medium text-white">$650,000</p>
</div>
<div className="h-px w-full bg-white/5 my-4"></div>
<div className="flex justify-between items-center text-neutral-400">
<div className="flex flex-col items-center gap-1">
<span className="iconify" data-icon="lucide:gauge" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-[10px] uppercase">2.5s</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-[10px] uppercase">986 HP</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="iconify" data-icon="lucide:battery-charging" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-[10px] uppercase">Hybrid</span>
</div>
</div>
</div>
</article>

<article className="group relative bg-lux-panel border border-white/5 rounded-sm overflow-hidden hover:border-lux-gold/30 transition-all duration-500">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-lux-panel to-transparent opacity-80"></div>

<div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center bg-lux-black/90 backdrop-blur-md border-t border-white/10">
<span className="text-xs text-white uppercase tracking-wide cursor-pointer hover:text-lux-gold flex items-center gap-2">
<span className="iconify" data-icon="lucide:eye" data-width="14"></span> View 360°
                            </span>
<span className="text-xs text-white uppercase tracking-wide cursor-pointer hover:text-lux-gold flex items-center gap-2">
<span className="iconify" data-icon="lucide:file-text" data-width="14"></span> PDF
                            </span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-serif text-xl text-white tracking-tight group-hover:text-lux-gold transition-colors">McLaren 765LT Spider</h3>
<p className="text-xs text-neutral-500 mt-1">2022 • Napier Green</p>
</div>
<p className="font-medium text-white">$580,000</p>
</div>
<div className="h-px w-full bg-white/5 my-4"></div>
<div className="flex justify-between items-center text-neutral-400">
<div className="flex flex-col items-center gap-1">
<span className="iconify" data-icon="lucide:gauge" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-[10px] uppercase">2.7s</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-[10px] uppercase">755 HP</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="iconify" data-icon="lucide:fuel" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-[10px] uppercase">4.0L V8</span>
</div>
</div>
</div>
</article>

<article className="group relative bg-lux-panel border border-white/5 rounded-sm overflow-hidden hover:border-lux-gold/30 transition-all duration-500">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-lux-panel to-transparent opacity-80"></div>

<div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center bg-lux-black/90 backdrop-blur-md border-t border-white/10">
<span className="text-xs text-white uppercase tracking-wide cursor-pointer hover:text-lux-gold flex items-center gap-2">
<span className="iconify" data-icon="lucide:eye" data-width="14"></span> View 360°
                            </span>
<span className="text-xs text-white uppercase tracking-wide cursor-pointer hover:text-lux-gold flex items-center gap-2">
<span className="iconify" data-icon="lucide:file-text" data-width="14"></span> PDF
                            </span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-serif text-xl text-white tracking-tight group-hover:text-lux-gold transition-colors">Rolls-Royce Ghost</h3>
<p className="text-xs text-neutral-500 mt-1">2024 • Black Badge</p>
</div>
<p className="font-medium text-white">$485,000</p>
</div>
<div className="h-px w-full bg-white/5 my-4"></div>
<div className="flex justify-between items-center text-neutral-400">
<div className="flex flex-col items-center gap-1">
<span className="iconify" data-icon="lucide:gauge" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-[10px] uppercase">4.6s</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-[10px] uppercase">592 HP</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-[10px] uppercase">Luxury</span>
</div>
</div>
</div>
</article>
</div>
</div>
<div className="mt-16 flex justify-center">
<button className="text-xs text-neutral-400 uppercase tracking-widest border-b border-transparent hover:border-lux-gold hover:text-white transition-all pb-1">Load More Inventory</button>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-t border-white/5" id="finance">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">

<div className="space-y-8">
<div>
<h2 className="font-serif text-3xl text-white mb-4 tracking-tight">Financial Services</h2>
<p className="text-neutral-500 text-sm leading-relaxed">Tailored financing solutions for your automotive investments. Calculate your estimated monthly payments below.</p>
</div>
<div className="bg-lux-panel p-8 rounded-sm border border-white/5 space-y-8">
<div>
<div className="flex justify-between text-xs text-white uppercase tracking-wide mb-3">
<span>Vehicle Price</span>
<span className="text-lux-gold">$250,000</span>
</div>
<input className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer mb-2" type="range"/>
</div>
<div>
<div className="flex justify-between text-xs text-white uppercase tracking-wide mb-3">
<span>Down Payment (20%)</span>
<span className="text-lux-gold">$50,000</span>
</div>
<input className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer mb-2" type="range"/>
</div>
<div>
<div className="flex justify-between text-xs text-white uppercase tracking-wide mb-3">
<span>Term (Months)</span>
<span className="text-lux-gold">60</span>
</div>
<input className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer mb-2" max="84" min="12" type="range" value="60"/>
</div>
<div className="pt-6 border-t border-white/5 flex items-end justify-between">
<div>
<p className="text-xs text-neutral-500 uppercase tracking-wide">Est. Monthly Payment</p>
<p className="text-xs text-neutral-600 mt-1">*Based on 5.9% APR</p>
</div>
<div className="text-3xl font-serif text-white">$3,856<span className="text-lg text-neutral-500">/mo</span></div>
</div>
</div>
</div>

<div className="space-y-8" id="consign">
<div>
<h2 className="font-serif text-3xl text-white mb-4 tracking-tight">Sell Your Vehicle</h2>
<p className="text-neutral-500 text-sm leading-relaxed">Leverage our global network to sell your exotic vehicle. Submit your vehicle details for a preliminary valuation.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-lux-gold transition-colors">Year</label>
<input className="w-full bg-transparent border-b border-neutral-800 py-2 text-white outline-none focus:border-lux-gold transition-colors font-medium" type="text"/>
</div>
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-lux-gold transition-colors">Make</label>
<input className="w-full bg-transparent border-b border-neutral-800 py-2 text-white outline-none focus:border-lux-gold transition-colors font-medium" type="text"/>
</div>
</div>
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-lux-gold transition-colors">Model &amp; Trim</label>
<input className="w-full bg-transparent border-b border-neutral-800 py-2 text-white outline-none focus:border-lux-gold transition-colors font-medium" type="text"/>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-lux-gold transition-colors">Mileage</label>
<input className="w-full bg-transparent border-b border-neutral-800 py-2 text-white outline-none focus:border-lux-gold transition-colors font-medium" type="text"/>
</div>
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-lux-gold transition-colors">VIN (Optional)</label>
<input className="w-full bg-transparent border-b border-neutral-800 py-2 text-white outline-none focus:border-lux-gold transition-colors font-medium" type="text"/>
</div>
</div>
<div className="pt-4">
<button className="w-full py-4 bg-white text-lux-black font-semibold text-sm tracking-wide hover:bg-lux-gold transition-colors flex justify-center items-center gap-2" type="button">
                            SUBMIT FOR VALUATION
                            <span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-lux-black pt-24 pb-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
<div className="max-w-sm">
<a className="font-serif text-2xl tracking-tighter text-white mb-6 block" href="#">
                        APEX<span className="text-lux-gold">.</span>
</a>
<p className="text-neutral-500 text-sm leading-relaxed mb-8">
                        The premier destination for the acquisition and sale of the world's most significant automobiles.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-lux-gold transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="text-neutral-500 hover:text-lux-gold transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-neutral-500 hover:text-lux-gold transition-colors" href="#"><span className="iconify" data-icon="lucide:youtube" data-width="20"></span></a>
</div>
</div>
<div className="w-full md:w-auto">
<h3 className="font-serif text-2xl text-white mb-6">Join the Inner Circle</h3>
<p className="text-neutral-500 text-sm mb-6">Receive exclusive access to off-market inventory and private events.</p>
<div className="flex border-b border-white/20 pb-2 focus-within:border-lux-gold transition-colors">
<input className="bg-transparent text-white w-full md:w-80 outline-none placeholder:text-neutral-600" placeholder="Email Address" type="email"/>
<button className="text-sm font-medium text-white hover:text-lux-gold uppercase tracking-widest">Join</button>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12 text-sm">
<div>
<h4 className="text-white font-medium mb-4">Inventory</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-lux-gold transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-lux-gold transition-colors" href="#">Consignment</a></li>
<li><a className="hover:text-lux-gold transition-colors" href="#">Sold Archive</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-lux-gold transition-colors" href="#">About Apex</a></li>
<li><a className="hover:text-lux-gold transition-colors" href="#">Team</a></li>
<li><a className="hover:text-lux-gold transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-lux-gold transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-lux-gold transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-2 text-neutral-500">
<li>Miami, FL</li>
<li>+1 (305) 555-0123</li>
<li>concierge@apexauto.com</li>
</ul>
</div>
</div>
<div className="text-center text-xs text-neutral-700 mt-20 uppercase tracking-widest">
                © 2024 Apex Automotive Group. All Rights Reserved.
            </div>
</div>
</footer>

<a className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center" href="#">
<span className="iconify" data-icon="lucide:message-circle" data-strokeWidth="1.5" data-width="24"></span>
</a>

    </>
  );
}
