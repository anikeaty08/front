import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
ink: '#0A2A1F',
paper: '#F8F4E8',
acid: '#D2E823',
stone: '#E5E0D6',
},
fontFamily: {
display: ['Dela Gothic One', 'cursive'],
sans: ['Space Grotesk', 'sans-serif'],
},
boxShadow: {
'hard': '4px 4px 0px 0px #0A2A1F',
'hard-sm': '2px 2px 0px 0px #0A2A1F',
'hard-xl': '8px 8px 0px 0px #0A2A1F',
'hard-acid': '4px 4px 0px 0px #D2E823',
},
animation: {
'marquee': 'marquee 25s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
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
      

<div className="bg-ink text-paper overflow-hidden py-3 border-b-2 border-ink relative z-20">
<div className="flex animate-marquee whitespace-nowrap">
<div className="flex items-center gap-12 mx-4 font-display uppercase text-xs tracking-widest">
<span>✸ Don't buy blind</span>
<span>✸ 100% Authentic Juice</span>
<span>✸ Free Shipping $50+</span>
<span>✸ Decants, not debts</span>
<span>✸ Smell Expensive for cheap</span>
<span>✸ Don't buy blind</span>
<span>✸ 100% Authentic Juice</span>
<span>✸ Free Shipping $50+</span>
</div>
</div>
</div>

<nav className="sticky top-4 z-50 px-4 md:px-8 mb-4">
<div className="bg-paper/80 backdrop-blur-md border-2 border-ink rounded-xl shadow-hard flex justify-between items-center p-4">
<button className="md:hidden p-2 hover:bg-acid rounded-lg border border-transparent hover:border-ink transition-all flex items-center justify-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<a className="text-2xl md:text-3xl font-display tracking-tight flex items-center gap-1" href="#">
                ARO<span className="text-acid" style={{WebkitTextStroke: '1px #0A2A1F', textShadow: '2px 2px 0px #0A2A1F'}}>VELL</span>
</a>
<div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-tight">
<a className="hover:text-acid hover:bg-ink px-3 py-1 rounded transition-colors" href="#">NEW DROPS</a>
<a className="hover:text-acid hover:bg-ink px-3 py-1 rounded transition-colors" href="#bestsellers">BESTSELLERS</a>
<a className="hover:text-acid hover:bg-ink px-3 py-1 rounded transition-colors" href="#">BRANDS</a>
<a className="hover:text-acid hover:bg-ink px-3 py-1 rounded transition-colors" href="#bundles">BUNDLES</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:flex hover:bg-acid rounded-lg p-2 border border-transparent hover:border-ink transition-all items-center justify-center">
<iconify-icon height="20" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<button className="bg-ink text-acid px-4 py-2 rounded-lg font-display text-sm border-2 border-ink hover:bg-acid hover:text-ink shadow-hard-sm transition-all active:translate-y-1 active:shadow-none flex items-center gap-2 group">
                    CART (1)
                    <div className="w-2 h-2 bg-acid rounded-full group-hover:bg-ink animate-pulse"></div>
</button>
</div>
</div>
</nav>
<main>

<section className="max-w-7xl mx-auto px-4 md:px-8 py-4">
<div className="grid sm:grid-cols-3 gap-4 md:gap-6">

<a className="group relative aspect-[16/10] sm:aspect-[4/3] bg-paper rounded-2xl overflow-hidden border-2 border-ink shadow-hard transition-all duration-300 hover:-translate-y-1 hover:shadow-hard-xl block" href="#">
<img className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<h2 className="font-display text-3xl md:text-4xl text-paper tracking-tight mb-1" style={{textShadow: '2px 2px 0px #0A2A1F'}}>FOR HER</h2>
<p className="text-acid font-semibold text-xs tracking-widest uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
                            Shop <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</p>
</div>
</a>

<a className="group relative aspect-[16/10] sm:aspect-[4/3] bg-ink rounded-2xl overflow-hidden border-2 border-ink shadow-hard transition-all duration-300 hover:-translate-y-1 hover:shadow-hard-xl block" href="#">
<img className="absolute inset-0 w-full h-full object-cover object-center opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<h2 className="font-display text-3xl md:text-4xl text-paper tracking-tight mb-1" style={{textShadow: '2px 2px 0px #0A2A1F'}}>FOR HIM</h2>
<p className="text-acid font-semibold text-xs tracking-widest uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
                            Shop <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</p>
</div>
</a>

<a className="group relative aspect-[16/10] sm:aspect-[4/3] bg-paper rounded-2xl overflow-hidden border-2 border-ink shadow-hard transition-all duration-300 hover:-translate-y-1 hover:shadow-hard-xl block" href="#">
<img className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<h2 className="font-display text-3xl md:text-4xl text-paper tracking-tight mb-1" style={{textShadow: '2px 2px 0px #0A2A1F'}}>EVERYONE</h2>
<p className="text-acid font-semibold text-xs tracking-widest uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
                            Shop <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</p>
</div>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-10">
<div className="flex items-center gap-4 mb-6">
<h2 className="font-display text-2xl md:text-3xl tracking-tight text-ink uppercase">Seasons</h2>
<div className="h-1 flex-grow bg-ink rounded-full opacity-10 hidden sm:block"></div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
<a className="group bg-acid border-2 border-ink rounded-xl py-3 px-2 flex flex-col items-center justify-center text-center shadow-hard hover:-translate-y-1 hover:shadow-hard-xl transition-all duration-300" href="#">
<iconify-icon className="text-ink mb-1 group-hover:scale-110 transition-transform duration-300" height="28" icon="solar:sun-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<h3 className="font-display text-sm md:text-base tracking-tight text-ink">Summer</h3>
</a>
<a className="group bg-white border-2 border-ink rounded-xl py-3 px-2 flex flex-col items-center justify-center text-center shadow-hard hover:-translate-y-1 hover:shadow-hard-xl transition-all duration-300" href="#">
<iconify-icon className="text-ink mb-1 group-hover:scale-110 transition-transform duration-300" height="28" icon="solar:snowflake-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<h3 className="font-display text-sm md:text-base tracking-tight text-ink">Winter</h3>
</a>
<a className="group bg-ink border-2 border-ink rounded-xl py-3 px-2 flex flex-col items-center justify-center text-center shadow-hard hover:-translate-y-1 hover:shadow-hard-acid transition-all duration-300" href="#">
<iconify-icon className="text-acid mb-1 group-hover:scale-110 transition-transform duration-300" height="28" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<h3 className="font-display text-sm md:text-base tracking-tight text-paper">Spring</h3>
</a>
<a className="group bg-stone border-2 border-ink rounded-xl py-3 px-2 flex flex-col items-center justify-center text-center shadow-hard hover:-translate-y-1 hover:shadow-hard-xl transition-all duration-300" href="#">
<iconify-icon className="text-ink mb-1 group-hover:scale-110 transition-transform duration-300" height="28" icon="solar:cloud-wind-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<h3 className="font-display text-sm md:text-base tracking-tight text-ink">Fall</h3>
</a>
<a className="group bg-paper border-2 border-ink rounded-xl py-3 px-2 flex flex-col items-center justify-center text-center shadow-hard hover:-translate-y-1 hover:shadow-hard-xl transition-all duration-300 sm:col-span-1 col-span-2 md:col-span-1" href="#">
<iconify-icon className="text-ink mb-1 group-hover:scale-110 transition-transform duration-300" height="28" icon="solar:tree-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<h3 className="font-display text-sm md:text-base tracking-tight text-ink">Autumn</h3>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-8 pb-12 pt-4">
<div className="flex items-center gap-4 mb-6">
<h2 className="font-display text-2xl md:text-3xl tracking-tight text-ink uppercase">New To Decants? Start Here</h2>
<div className="h-1 flex-grow bg-ink rounded-full opacity-10 hidden xl:block"></div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">

<a className="group bg-acid border-2 border-ink rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-hard hover:-translate-y-1 hover:shadow-hard-xl transition-all duration-300" href="#">
<iconify-icon className="text-ink mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12" height="32" icon="solar:t-shirt-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="font-display text-base md:text-lg tracking-tight text-ink leading-tight">Daily Wear</h3>
</a>

<a className="group bg-white border-2 border-ink rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-hard hover:-translate-y-1 hover:shadow-hard-xl transition-all duration-300" href="#">
<iconify-icon className="text-ink mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:-rotate-12" height="32" icon="solar:compass-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="font-display text-base md:text-lg tracking-tight text-ink leading-tight">Outdoor</h3>
</a>

<a className="group bg-ink border-2 border-ink rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-hard hover:-translate-y-1 hover:shadow-hard-acid transition-all duration-300" href="#">
<iconify-icon className="text-acid mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12" height="32" icon="solar:moon-stars-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="font-display text-base md:text-lg tracking-tight text-paper leading-tight">Date Nights</h3>
</a>

<a className="group bg-stone border-2 border-ink rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-hard hover:-translate-y-1 hover:shadow-hard-xl transition-all duration-300" href="#">
<iconify-icon className="text-ink mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:-rotate-12" height="32" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="font-display text-base md:text-lg tracking-tight text-ink leading-tight">Fresh</h3>
</a>

<a className="group bg-paper border-2 border-ink rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-hard hover:-translate-y-1 hover:shadow-hard-xl transition-all duration-300" href="#">
<iconify-icon className="text-ink mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12" height="32" icon="solar:briefcase-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="font-display text-base md:text-lg tracking-tight text-ink leading-tight">Work</h3>
</a>

<a className="group bg-acid border-2 border-ink rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-hard hover:-translate-y-1 hover:shadow-hard-xl transition-all duration-300" href="#">
<iconify-icon className="text-ink mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:-rotate-12" height="32" icon="solar:fire-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="font-display text-base md:text-lg tracking-tight text-ink leading-tight">Warm</h3>
</a>

<a className="group bg-ink border-2 border-ink rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-hard hover:-translate-y-1 hover:shadow-hard-acid transition-all duration-300" href="#">
<iconify-icon className="text-paper mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12" height="32" icon="solar:crown-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="font-display text-base md:text-lg tracking-tight text-paper leading-tight">Formal</h3>
</a>

<a className="group bg-white border-2 border-ink rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-hard hover:-translate-y-1 hover:shadow-hard-xl transition-all duration-300" href="#">
<iconify-icon className="text-ink mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:-rotate-12" height="32" icon="solar:snowflake-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="font-display text-base md:text-lg tracking-tight text-ink leading-tight">Cold Weather</h3>
</a>
</div>
</section>

<section className="py-16 md:py-20 border-t-2 border-ink bg-white" id="bestsellers">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div>
<div className="inline-block bg-acid border border-ink px-3 py-1 rounded text-xs font-semibold uppercase tracking-widest mb-3">Top Rated</div>
<h2 className="font-display text-4xl md:text-5xl tracking-tight text-ink uppercase leading-none">Bestsellers</h2>
<p className="font-medium opacity-60 mt-3 text-base md:text-lg">Build your rotation. Don't be the guy who wears one scent.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 border-2 border-ink rounded-full flex items-center justify-center hover:bg-ink hover:text-paper transition-colors shadow-hard-sm">
<iconify-icon height="20" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<button className="w-10 h-10 border-2 border-ink rounded-full flex items-center justify-center hover:bg-ink hover:text-paper transition-colors shadow-hard-sm">
<iconify-icon height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

<div className="group relative bg-paper border-2 border-ink rounded-2xl overflow-hidden shadow-hard hover:shadow-hard-xl hover:-translate-y-1 transition-all duration-300">
<div className="absolute top-4 left-4 z-10">
<span className="bg-white border border-ink px-2 py-1 text-xs font-semibold rounded uppercase shadow-sm">Fresh</span>
</div>
<div className="aspect-[4/5] bg-white border-b-2 border-ink relative overflow-hidden p-6 flex items-center justify-center">
<img className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-4 bottom-4 translate-y-20 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<button className="w-full bg-ink text-acid font-display text-sm py-3 rounded-xl shadow-md border-2 border-transparent hover:bg-acid hover:text-ink hover:border-ink flex items-center justify-center gap-2 transition-colors">
                                    Add <span className="font-sans font-semibold">$14</span>
</button>
</div>
</div>
<div className="p-5">
<div className="flex items-center gap-1 text-ink mb-2">
<iconify-icon className="fill-ink" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-ink" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-ink" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-ink" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-ink" icon="solar:star-linear" width="16"></iconify-icon>
<span className="text-xs font-semibold ml-1 opacity-60">(124)</span>
</div>
<h3 className="font-display text-xl tracking-tight leading-none mb-2">YSL Y EDP</h3>
<div className="flex gap-1 text-xs font-semibold text-ink/60 uppercase tracking-wide">
<span>Apple</span> • <span>Sage</span> • <span>Wood</span>
</div>
</div>
</div>

<div className="group relative bg-paper border-2 border-ink rounded-2xl overflow-hidden shadow-hard hover:shadow-hard-xl hover:-translate-y-1 transition-all duration-300">
<div className="absolute top-4 left-4 z-10 flex gap-1">
<span className="bg-acid text-ink border border-ink px-2 py-1 text-xs font-semibold rounded uppercase shadow-sm">#1 Sold</span>
</div>
<div className="aspect-[4/5] bg-white border-b-2 border-ink relative overflow-hidden p-6 flex items-center justify-center">
<img className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-4 bottom-4 translate-y-20 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<button className="w-full bg-ink text-acid font-display text-sm py-3 rounded-xl shadow-md border-2 border-transparent hover:bg-acid hover:text-ink hover:border-ink flex items-center justify-center gap-2 transition-colors">
                                    Add <span className="font-sans font-semibold">$18</span>
</button>
</div>
</div>
<div className="p-5">
<div className="flex items-center gap-1 text-ink mb-2">
<iconify-icon className="fill-ink" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-ink" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-ink" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-ink" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-ink" icon="solar:star-linear" width="16"></iconify-icon>
<span className="text-xs font-semibold ml-1 opacity-60">(456)</span>
</div>
<h3 className="font-display text-xl tracking-tight leading-none mb-2">Sauvage Elixir</h3>
<div className="flex gap-1 text-xs font-semibold text-ink/60 uppercase tracking-wide">
<span>Spicy</span> • <span>Lavender</span> • <span>Licorice</span>
</div>
</div>
</div>

<div className="group relative bg-paper border-2 border-ink rounded-2xl overflow-hidden shadow-hard hover:shadow-hard-xl hover:-translate-y-1 transition-all duration-300">
<div className="absolute top-4 left-4 z-10">
<span className="bg-white border border-ink px-2 py-1 text-xs font-semibold rounded uppercase shadow-sm">Sweet</span>
</div>
<div className="aspect-[4/5] bg-white border-b-2 border-ink relative overflow-hidden p-6 flex items-center justify-center">
<img className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-x-4 bottom-4 translate-y-20 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<button className="w-full bg-ink text-acid font-display text-sm py-3 rounded-xl shadow-md border-2 border-transparent hover:bg-acid hover:text-ink hover:border-ink flex items-center justify-center gap-2 transition-colors">
                                    Add <span className="font-sans font-semibold">$12</span>
</button>
</div>
</div>
<div className="p-5">
<div className="flex items-center gap-1 text-ink mb-2">
<iconify-icon className="fill-ink" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-ink" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-ink" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-ink" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-ink opacity-30" icon="solar:star-linear" width="16"></iconify-icon>
<span className="text-xs font-semibold ml-1 opacity-60">(89)</span>
</div>
<h3 className="font-display text-xl tracking-tight leading-none mb-2">Azzaro Wanted</h3>
<div className="flex gap-1 text-xs font-semibold text-ink/60 uppercase tracking-wide">
<span>Lemon</span> • <span>Ginger</span> • <span>Tonka</span>
</div>
</div>
</div>

<div className="group relative bg-paper border-2 border-ink rounded-2xl overflow-hidden shadow-hard hover:shadow-hard-xl hover:-translate-y-1 transition-all duration-300">
<div className="absolute top-4 left-4 z-10">
<span className="bg-white border border-ink px-2 py-1 text-xs font-semibold rounded uppercase shadow-sm">Classy</span>
</div>
<div className="aspect-[4/5] bg-white border-b-2 border-ink relative overflow-hidden p-6 flex items-center justify-center">
<img className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-x-4 bottom-4 translate-y-20 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<button className="w-full bg-ink text-acid font-display text-sm py-3 rounded-xl shadow-md border-2 border-transparent hover:bg-acid hover:text-ink hover:border-ink flex items-center justify-center gap-2 transition-colors">
                                    Add <span className="font-sans font-semibold">$16</span>
</button>
</div>
</div>
<div className="p-5">
<div className="flex items-center gap-1 text-ink mb-2">
<iconify-icon className="fill-ink" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-ink" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-ink" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-ink" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-ink" icon="solar:star-linear" width="16"></iconify-icon>
<span className="text-xs font-semibold ml-1 opacity-60">(312)</span>
</div>
<h3 className="font-display text-xl tracking-tight leading-none mb-2">Bleu de Chanel</h3>
<div className="flex gap-1 text-xs font-semibold text-ink/60 uppercase tracking-wide">
<span>Citrus</span> • <span>Mint</span> • <span>Cedar</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 border-t-2 border-ink bg-acid" id="bundles">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="text-center mb-12">
<h2 className="font-display text-4xl md:text-5xl tracking-tight text-ink uppercase mb-2">Curated Bundles</h2>
<p className="font-medium opacity-80 text-lg md:text-xl text-ink">More juice. Less money. Smell great everywhere.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="group bg-paper border-2 border-ink rounded-[2rem] overflow-hidden shadow-hard hover:shadow-hard-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
<div className="aspect-[4/3] relative border-b-2 border-ink overflow-hidden bg-white">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-acid border-2 border-ink px-3 py-1 rounded-lg text-sm font-display tracking-wide uppercase shadow-hard-sm">Save 20%</div>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<h3 className="font-display text-2xl tracking-tight leading-none mb-3">The Starter Pack</h3>
<ul className="space-y-2 mb-8 text-sm font-medium opacity-80">
<li className="flex items-center gap-2"><iconify-icon className="text-ink" icon="solar:check-circle-linear"></iconify-icon> Bleu de Chanel EDP (5ml)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ink" icon="solar:check-circle-linear"></iconify-icon> YSL Y EDP (5ml)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ink" icon="solar:check-circle-linear"></iconify-icon> Acqua Di Gio Profondo (5ml)</li>
</ul>
<div className="mt-auto flex items-end justify-between pt-6 border-t-2 border-ink/10">
<div className="flex flex-col">
<span className="text-sm font-semibold opacity-50 line-through mb-1">$45 Value</span>
<span className="font-display text-3xl text-ink">$35</span>
</div>
<button className="bg-ink text-acid px-6 py-3 rounded-xl font-display text-sm hover:bg-white hover:text-ink border-2 border-ink transition-colors shadow-hard-sm active:translate-y-1 active:shadow-none">
                                    Grab Bundle
                                </button>
</div>
</div>
</div>

<div className="group bg-ink text-paper border-2 border-ink rounded-[2rem] overflow-hidden shadow-[8px_8px_0px_0px_#F8F4E8] hover:shadow-[12px_12px_0px_0px_#F8F4E8] hover:-translate-y-2 transition-all duration-300 flex flex-col relative">
<div className="absolute -top-4 -right-4 z-20 bg-acid text-ink w-24 h-24 rounded-full border-2 border-ink flex items-center justify-center text-center font-display text-sm shadow-hard-sm rotate-12 group-hover:rotate-0 transition-transform">
                            MOST<br/>POPULAR
                        </div>
<div className="aspect-[4/3] relative border-b-2 border-ink overflow-hidden bg-white">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-acid text-ink border-2 border-ink px-3 py-1 rounded-lg text-sm font-display tracking-wide uppercase shadow-hard-sm">Save 25%</div>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<h3 className="font-display text-2xl tracking-tight leading-none mb-3">Date Night Duo</h3>
<ul className="space-y-2 mb-8 text-sm font-medium opacity-80">
<li className="flex items-center gap-2"><iconify-icon className="text-acid" icon="solar:check-circle-linear"></iconify-icon> Sauvage Elixir (10ml)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-acid" icon="solar:check-circle-linear"></iconify-icon> Azzaro The Most Wanted (10ml)</li>
</ul>
<div className="mt-auto flex items-end justify-between pt-6 border-t-2 border-paper/20">
<div className="flex flex-col">
<span className="text-sm font-semibold opacity-50 line-through mb-1 text-paper">$70 Value</span>
<span className="font-display text-3xl text-acid">$50</span>
</div>
<button className="bg-acid text-ink px-6 py-3 rounded-xl font-display text-sm hover:bg-paper border-2 border-transparent hover:border-ink transition-colors shadow-hard-acid active:translate-y-1 active:shadow-none">
                                    Grab Bundle
                                </button>
</div>
</div>
</div>

<div className="group bg-paper border-2 border-ink rounded-[2rem] overflow-hidden shadow-hard hover:shadow-hard-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
<div className="aspect-[4/3] relative border-b-2 border-ink overflow-hidden bg-white">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-acid border-2 border-ink px-3 py-1 rounded-lg text-sm font-display tracking-wide uppercase shadow-hard-sm">Save 15%</div>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<h3 className="font-display text-2xl tracking-tight leading-none mb-3">Office King Trio</h3>
<ul className="space-y-2 mb-8 text-sm font-medium opacity-80">
<li className="flex items-center gap-2"><iconify-icon className="text-ink" icon="solar:check-circle-linear"></iconify-icon> Prada L'Homme (5ml)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ink" icon="solar:check-circle-linear"></iconify-icon> Terre d'Hermes (5ml)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ink" icon="solar:check-circle-linear"></iconify-icon> Tom Ford Grey Vetiver (5ml)</li>
</ul>
<div className="mt-auto flex items-end justify-between pt-6 border-t-2 border-ink/10">
<div className="flex flex-col">
<span className="text-sm font-semibold opacity-50 line-through mb-1">$55 Value</span>
<span className="font-display text-3xl text-ink">$45</span>
</div>
<button className="bg-ink text-acid px-6 py-3 rounded-xl font-display text-sm hover:bg-white hover:text-ink border-2 border-ink transition-colors shadow-hard-sm active:translate-y-1 active:shadow-none">
                                    Grab Bundle
                                </button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-ink text-paper pt-16 pb-8 border-t-2 border-ink">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-3xl font-display tracking-tight flex items-center gap-1 mb-4" href="#">
                        ARO<span className="text-transparent" style={{WebkitTextStroke: '1px #D2E823'}}>VELL</span>
</a>
<p className="text-sm opacity-60 max-w-[200px] leading-relaxed">
                        Making niche fragrance accessible to everyone. Except your ex.
                    </p>
</div>
<div>
<h4 className="font-display text-lg tracking-tight text-acid mb-4">SHOP</h4>
<ul className="space-y-3 text-sm font-medium opacity-80">
<li><a className="hover:text-acid transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-acid transition-colors" href="#bestsellers">Bestsellers</a></li>
<li><a className="hover:text-acid transition-colors" href="#bundles">Bundles</a></li>
<li><a className="hover:text-acid transition-colors" href="#">Women's Perfume</a></li>
<li><a className="hover:text-acid transition-colors" href="#">Men's Cologne</a></li>
</ul>
</div>
<div>
<h4 className="font-display text-lg tracking-tight text-acid mb-4">SUPPORT</h4>
<ul className="space-y-3 text-sm font-medium opacity-80">
<li><a className="hover:text-acid transition-colors" href="#">Track Order</a></li>
<li><a className="hover:text-acid transition-colors" href="#">Shipping Info</a></li>
<li><a className="hover:text-acid transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-acid transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-display text-lg tracking-tight text-acid mb-4">SOCIALS</h4>
<div className="flex gap-3">
<a className="bg-paper text-ink p-3 rounded-xl hover:bg-acid hover:-translate-y-1 transition-all flex items-center justify-center" href="#">
<iconify-icon height="20" icon="mdi:instagram" width="20"></iconify-icon>
</a>
<a className="bg-paper text-ink p-3 rounded-xl hover:bg-acid hover:-translate-y-1 transition-all flex items-center justify-center" href="#">
<iconify-icon height="20" icon="mdi:twitter" width="20"></iconify-icon>
</a>
<a className="bg-paper text-ink p-3 rounded-xl hover:bg-acid hover:-translate-y-1 transition-all flex items-center justify-center" href="#">
<iconify-icon height="20" icon="mdi:youtube" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-paper/20 text-xs font-semibold opacity-40">
<p>© 2024 Arovell Scents. Est. 2024.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-acid transition-colors" href="#">Privacy</a>
<a className="hover:text-acid transition-colors" href="#">Terms</a>
<a className="hover:text-acid transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
