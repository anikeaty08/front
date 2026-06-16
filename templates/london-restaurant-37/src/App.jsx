import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
bg: '#080808',
panel: '#111111',
card: '#161616',
orange: '#FF6A00',
glow: '#FF8F2D',
text: '#FFFFFF',
muted: '#888888',
border: '#222222',
}
},
fontFamily: {
sans: ['Manrope', 'sans-serif'],
display: ['Oswald', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.05em',
tightest: '-0.08em',
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
      

<nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
<div className="font-display font-medium tracking-tighter text-lg cursor-pointer">
            LONDON<span className="text-brand-orange">.</span>EATS
        </div>
<button className="bg-white/10 p-2 rounded-full backdrop-blur-md hover:bg-white/20 transition-all group">
<iconify-icon className="text-white group-hover:rotate-180 transition-transform duration-500" height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>

<header className="relative w-full min-h-screen pt-32 pb-12 overflow-hidden flex flex-col justify-between">
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-brand-orange/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="px-6 relative z-10">
<h1 className="font-display text-[15vw] leading-[0.8] font-medium uppercase tracking-tightest text-center mix-blend-overlay opacity-50 select-none">London</h1>
<h1 className="font-display text-[18vw] leading-[0.85] font-medium uppercase tracking-tightest text-center mt-[-2vw] relative z-20 select-none">Flavor</h1>
<div className="relative w-full aspect-square mt-[-10vw] max-w-lg mx-auto group">
<img alt="Plated Dish" className="w-full h-full object-cover rounded-[3rem] shadow-2xl rotate-[-3deg] border border-white/5 group-hover:rotate-0 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute -top-4 -right-2 glass-panel px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg animate-bounce duration-[3000ms]">
<iconify-icon className="text-brand-orange" icon="solar:star-bold" width="16"></iconify-icon>
<span className="text-sm font-medium">4.9 Rating</span>
</div>
<div className="absolute bottom-10 -left-4 glass-panel px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg">
<iconify-icon className="text-brand-muted" icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="text-sm font-medium">25 min</span>
</div>
</div>
<div className="flex justify-center mt-8">
<button className="bg-brand-orange text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-brand-glow transition-all shadow-[0_0_30px_rgba(255,106,0,0.4)] hover:shadow-[0_0_50px_rgba(255,106,0,0.6)] hover:-translate-y-1">
                    Explore Restaurants
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="mt-12 px-4">
<div className="glass-panel rounded-3xl p-6 grid grid-cols-3 gap-4 text-center divide-x divide-white/10">
<div>
<div className="font-display text-2xl font-medium">140+</div>
<div className="text-xs text-brand-muted uppercase tracking-widest mt-1">Spots</div>
</div>
<div>
<div className="font-display text-2xl font-medium">120+</div>
<div className="text-xs text-brand-muted uppercase tracking-widest mt-1">Dishes</div>
</div>
<div>
<div className="font-display text-2xl font-medium">50+</div>
<div className="text-xs text-brand-muted uppercase tracking-widest mt-1">Areas</div>
</div>
</div>
</div>
</header>

<section className="py-16 bg-brand-panel border-t border-brand-border">
<div className="px-6 mb-8 flex items-end justify-between">
<h2 className="font-display text-4xl uppercase tracking-tighter w-2/3 leading-none">
                Today's <span className="text-brand-muted">Featured</span>
</h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/5 hover:text-white transition-all">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white hover:bg-brand-glow transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 px-6 pb-8 no-scrollbar snap-x snap-mandatory">
<div className="min-w-[85vw] md:min-w-[400px] snap-center">
<div className="relative group h-[450px] w-full rounded-[2rem] overflow-hidden cursor-pointer">
<img alt="BBQ" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">Trending</div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="font-display text-3xl uppercase tracking-tight mb-1 group-hover:text-brand-orange transition-colors">Smokestak</h3>
<div className="flex items-center gap-2 text-brand-muted text-sm">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Shoreditch, London
                        </div>
</div>
</div>
</div>
<div className="min-w-[85vw] md:min-w-[400px] snap-center pt-8">
<div className="relative group h-[450px] w-full rounded-[2rem] overflow-hidden cursor-pointer">
<img alt="Cocktails" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute top-6 left-6 bg-brand-orange px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-white">New</div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="font-display text-3xl uppercase tracking-tight mb-1 group-hover:text-brand-orange transition-colors">The Alchemist</h3>
<div className="flex items-center gap-2 text-brand-muted text-sm">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Covent Garden
                        </div>
</div>
</div>
</div>
<div className="min-w-[85vw] md:min-w-[400px] snap-center">
<div className="relative group h-[450px] w-full rounded-[2rem] overflow-hidden cursor-pointer">
<img alt="Dim Sum" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="font-display text-3xl uppercase tracking-tight mb-1 group-hover:text-brand-orange transition-colors">Din Tai Fung</h3>
<div className="flex items-center gap-2 text-brand-muted text-sm">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Soho, London
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4">
<div className="text-center mb-12">
<h2 className="font-display text-5xl uppercase tracking-tighter">Top Rated</h2>
<p className="text-brand-muted mt-2">Curated by our editors</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative group h-80 rounded-[2rem] overflow-hidden md:col-span-2 cursor-pointer">
<img alt="Bar" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent p-8 flex flex-col justify-end items-start">
<span className="text-brand-orange text-xs font-semibold uppercase tracking-widest mb-2">Editor's Choice</span>
<h3 className="font-display text-4xl uppercase tracking-tight group-hover:translate-x-2 transition-transform">Sketch London</h3>
<div className="flex gap-1 mt-2">
<iconify-icon className="text-brand-orange" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-brand-orange" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-brand-orange" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-brand-orange" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-brand-orange" icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
<div className="relative group h-64 rounded-[2rem] overflow-hidden bg-brand-card border border-white/5 cursor-pointer hover:border-brand-orange/30 transition-colors">
<div className="p-6 h-full flex flex-col justify-between relative z-10">
<div className="flex justify-between items-start">
<div className="bg-white/10 p-2 rounded-full backdrop-blur-md">
<iconify-icon className="text-white" icon="solar:chef-hat-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium">4.8</span>
</div>
<div>
<h3 className="font-display text-2xl uppercase tracking-tight group-hover:text-brand-orange transition-colors">Gloria</h3>
<p className="text-brand-muted text-sm mt-1">Italian Big Mamma</p>
</div>
</div>
<img alt="Pasta" className="absolute bottom-0 right-0 w-32 h-32 object-cover rounded-tl-[2rem] opacity-80 group-hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative group h-64 rounded-[2rem] overflow-hidden bg-brand-card border border-white/5 cursor-pointer hover:border-brand-orange/30 transition-colors">
<div className="p-6 h-full flex flex-col justify-between relative z-10">
<div className="flex justify-between items-start">
<div className="bg-white/10 p-2 rounded-full backdrop-blur-md">
<iconify-icon className="text-white" icon="solar:wine-glass-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium">4.7</span>
</div>
<div>
<h3 className="font-display text-2xl uppercase tracking-tight group-hover:text-brand-orange transition-colors">Noble Rot</h3>
<p className="text-brand-muted text-sm mt-1">Wine Bar &amp; Bistro</p>
</div>
</div>
<img alt="Wine" className="absolute bottom-0 right-0 w-32 h-32 object-cover rounded-tl-[2rem] opacity-80 group-hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="flex justify-center mt-10">
<button className="text-sm font-medium border-b border-brand-orange pb-1 hover:text-brand-orange transition-colors">Load more restaurants</button>
</div>
</section>

<section className="py-24 bg-brand-bg relative overflow-hidden">
<img alt="Chicken" className="absolute top-10 right-[-10%] w-40 h-40 object-cover rounded-full rotate-12 opacity-60 mix-blend-luminosity z-0" src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Burger" className="absolute bottom-20 right-4 w-32 h-40 object-cover rounded-[2rem] -rotate-6 z-20 border-2 border-brand-panel" src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="container mx-auto px-6 relative z-10">
<ul className="flex flex-col gap-2">
<li className="font-display text-6xl md:text-8xl uppercase tracking-tighter text-outline hover:text-white transition-all cursor-pointer hover:translate-x-4 duration-300">Burgers</li>
<li className="font-display text-6xl md:text-8xl uppercase tracking-tighter text-outline hover:text-white transition-all cursor-pointer hover:translate-x-4 duration-300">Pizza</li>
<li className="font-display text-6xl md:text-8xl uppercase tracking-tighter text-brand-orange hover:text-brand-glow transition-all cursor-pointer ml-8 hover:translate-x-4 duration-300">Fried Chicken</li>
<li className="font-display text-6xl md:text-8xl uppercase tracking-tighter text-outline hover:text-white transition-all cursor-pointer hover:translate-x-4 duration-300">Vegan</li>
<li className="font-display text-6xl md:text-8xl uppercase tracking-tighter text-outline hover:text-white transition-all cursor-pointer hover:translate-x-4 duration-300">Asian</li>
<li className="font-display text-6xl md:text-8xl uppercase tracking-tighter text-outline hover:text-white transition-all cursor-pointer hover:translate-x-4 duration-300">Dessert</li>
</ul>
</div>
</section>

<section className="py-12 px-4">
<div className="bg-gradient-to-br from-[#2a1a11] to-brand-panel rounded-[2.5rem] p-8 md:p-16 relative overflow-visible mt-20 group">
<div className="relative z-10 max-w-lg">
<div className="inline-block px-3 py-1 border border-brand-orange/30 rounded-full text-brand-orange text-xs font-semibold uppercase tracking-wider mb-4">London Selection</div>
<h2 className="font-display text-5xl md:text-6xl uppercase tracking-tighter leading-[0.9] mb-6">
                    London's<br/>Top Burger<br/>Houses
                </h2>
<p className="text-brand-muted mb-8 max-w-xs">From Patty &amp; Bun to Bleeker St, discover the juiciest bites in the city.</p>
<button className="bg-brand-orange text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-brand-glow transition-colors">
                    View Collection
                </button>
</div>
<div className="absolute -right-12 -top-24 w-64 h-64 md:w-96 md:h-96 z-0">
<img alt="Big Burger" className="w-full h-full object-cover rounded-full shadow-2xl animate-[spin_60s_linear_infinite]" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 glass-panel p-3 rounded-xl flex items-center gap-3 w-48 animate-pulse">
<div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0"></div>
<div>
<div className="h-2 w-20 bg-white/20 rounded mb-1"></div>
<div className="h-2 w-12 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 overflow-hidden">
<div className="px-2 mb-10 flex items-end justify-between">
<div>
<h2 className="font-display text-4xl uppercase tracking-tighter leading-none mb-1">Neighborhoods</h2>
<p className="text-brand-muted text-sm">Curated guides for every postcode</p>
</div>
<button className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-full hover:bg-white/5">
<iconify-icon className="text-brand-orange group-hover:scale-110 transition-transform" icon="solar:map-linear"></iconify-icon>
                Interactive Map
            </button>
</div>
<div className="flex overflow-x-auto gap-4 pb-8 no-scrollbar snap-x snap-mandatory px-2">

<div className="min-w-[280px] md:min-w-[320px] h-[450px] relative rounded-[2rem] overflow-hidden group cursor-pointer snap-start border border-white/5">
<img alt="Soho" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90 grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute top-6 left-6 flex gap-2">
<span className="bg-white/10 backdrop-blur-md px-2 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider text-white border border-white/10">Nightlife</span>
</div>
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
<div className="bg-brand-orange rounded-full w-8 h-8 flex items-center justify-center text-white">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<div className="flex items-center gap-1 text-brand-orange text-xs font-mono mb-2 opacity-80">
<iconify-icon icon="solar:map-point-bold"></iconify-icon> 51.51° N
                    </div>
<h3 className="font-display text-4xl uppercase tracking-tighter text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Soho</h3>
<div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
<span className="text-xs text-brand-muted uppercase tracking-wider">42 Locations</span>
<span className="text-xs text-white group-hover:text-brand-orange transition-colors">Explore</span>
</div>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] h-[450px] relative rounded-[2rem] overflow-hidden group cursor-pointer snap-start border border-white/5">
<img alt="Shoreditch" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90 grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1533552803623-42cc6630f9c4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute top-6 left-6 flex gap-2">
<span className="bg-white/10 backdrop-blur-md px-2 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider text-white border border-white/10">Hipster</span>
<span className="bg-white/10 backdrop-blur-md px-2 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider text-white border border-white/10">Art</span>
</div>
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
<div className="bg-brand-orange rounded-full w-8 h-8 flex items-center justify-center text-white">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<div className="flex items-center gap-1 text-brand-orange text-xs font-mono mb-2 opacity-80">
<iconify-icon icon="solar:map-point-bold"></iconify-icon> 51.52° N
                    </div>
<h3 className="font-display text-4xl uppercase tracking-tighter text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Shoreditch</h3>
<div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
<span className="text-xs text-brand-muted uppercase tracking-wider">28 Locations</span>
<span className="text-xs text-white group-hover:text-brand-orange transition-colors">Explore</span>
</div>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] h-[450px] relative rounded-[2rem] overflow-hidden group cursor-pointer snap-start border border-white/5">
<img alt="Mayfair" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90 grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute top-6 left-6 flex gap-2">
<span className="bg-white/10 backdrop-blur-md px-2 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider text-white border border-white/10">Luxury</span>
</div>
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
<div className="bg-brand-orange rounded-full w-8 h-8 flex items-center justify-center text-white">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<div className="flex items-center gap-1 text-brand-orange text-xs font-mono mb-2 opacity-80">
<iconify-icon icon="solar:map-point-bold"></iconify-icon> 51.50° N
                    </div>
<h3 className="font-display text-4xl uppercase tracking-tighter text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Mayfair</h3>
<div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
<span className="text-xs text-brand-muted uppercase tracking-wider">15 Locations</span>
<span className="text-xs text-white group-hover:text-brand-orange transition-colors">Explore</span>
</div>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] h-[450px] relative rounded-[2rem] overflow-hidden group cursor-pointer snap-start border border-white/5">
<img alt="Covent Garden" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90 grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1517478440026-6b225883d8e5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute top-6 left-6 flex gap-2">
<span className="bg-white/10 backdrop-blur-md px-2 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider text-white border border-white/10">Classic</span>
</div>
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
<div className="bg-brand-orange rounded-full w-8 h-8 flex items-center justify-center text-white">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<div className="flex items-center gap-1 text-brand-orange text-xs font-mono mb-2 opacity-80">
<iconify-icon icon="solar:map-point-bold"></iconify-icon> 51.51° N
                    </div>
<h3 className="font-display text-4xl uppercase tracking-tighter text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Covent Garden</h3>
<div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
<span className="text-xs text-brand-muted uppercase tracking-wider">35 Locations</span>
<span className="text-xs text-white group-hover:text-brand-orange transition-colors">Explore</span>
</div>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] h-[450px] relative rounded-[2rem] overflow-hidden group cursor-pointer snap-start border border-white/5">
<img alt="Chelsea" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90 grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1574519992388-c7e14578da26?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute top-6 left-6 flex gap-2">
<span className="bg-white/10 backdrop-blur-md px-2 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider text-white border border-white/10">Posh</span>
</div>
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
<div className="bg-brand-orange rounded-full w-8 h-8 flex items-center justify-center text-white">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<div className="flex items-center gap-1 text-brand-orange text-xs font-mono mb-2 opacity-80">
<iconify-icon icon="solar:map-point-bold"></iconify-icon> 51.48° N
                    </div>
<h3 className="font-display text-4xl uppercase tracking-tighter text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Chelsea</h3>
<div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
<span className="text-xs text-brand-muted uppercase tracking-wider">19 Locations</span>
<span className="text-xs text-white group-hover:text-brand-orange transition-colors">Explore</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 bg-brand-panel clip-diagonal pb-32 border-t border-brand-border">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="md:w-1/3 pt-8">
<div className="w-12 h-1 bg-brand-orange mb-6"></div>
<h2 className="font-display text-5xl uppercase tracking-tighter mb-4">Exclusive <br/>Offers</h2>
<p className="text-brand-muted mb-8 leading-relaxed">Dine at London's finest for a fraction of the price. Limited time deals curated for you.</p>
<button className="border border-white/20 rounded-full px-6 py-3 text-sm hover:bg-white hover:text-black transition-all">View All Deals</button>
</div>
<div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative bg-brand-card rounded-3xl p-6 h-[400px] flex flex-col justify-between group overflow-hidden border border-white/5 cursor-pointer">
<div className="absolute top-4 right-4 bg-white text-black font-bold text-xs px-2 py-1 rounded">-50% OFF</div>
<div className="relative z-10">
<div className="text-brand-orange text-xs font-semibold mb-2">LIMITED TIME</div>
<h3 className="font-display text-3xl uppercase tracking-tight">Sushi Samba</h3>
<p className="text-brand-muted text-sm mt-2">Lunch Menu Special</p>
</div>
<img alt="Sushi" className="absolute bottom-0 right-0 w-48 h-48 object-cover rounded-tl-[100px] opacity-80 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-4">
<div className="bg-[#1a1a1a] rounded-3xl p-5 flex items-center justify-between border border-white/5 hover:border-brand-orange/50 transition-colors cursor-pointer group">
<div>
<h4 className="font-display text-xl uppercase group-hover:text-brand-orange transition-colors">Dishoom</h4>
<span className="text-brand-muted text-sm font-medium">Free Drink</span>
</div>
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-all">
<iconify-icon icon="solar:cup-linear" width="20"></iconify-icon>
</div>
</div>
<div className="bg-[#1a1a1a] rounded-3xl p-5 flex items-center justify-between border border-white/5 hover:border-brand-orange/50 transition-colors cursor-pointer group">
<div>
<h4 className="font-display text-xl uppercase group-hover:text-brand-orange transition-colors">Flat Iron</h4>
<span className="text-brand-muted text-sm font-medium">2 for 1</span>
</div>
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-all">
<iconify-icon icon="solar:knife-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-brand-bg relative overflow-hidden pt-20 border-t border-brand-border">

<div className="absolute inset-0 footer-grid opacity-10 pointer-events-none"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 pb-40">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

<div className="lg:col-span-5 flex flex-col justify-between h-full">
<div>
<div className="font-display text-2xl tracking-tighter mb-6">
                            LONDON<span className="text-brand-orange">.</span>EATS
                        </div>
<h3 className="font-display text-4xl lg:text-5xl uppercase tracking-tight leading-none mb-6 text-white">
                            Unlock the<br/><span className="text-brand-muted">Hidden City.</span>
</h3>
<p className="text-brand-muted mb-8 max-w-sm text-sm leading-relaxed">
                            Join 15,000+ Londoners discovering secret menus, new openings, and exclusive chef tables every week.
                        </p>

<div className="relative max-w-md group">
<input className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-5 pr-32 text-white placeholder-brand-muted focus:outline-none focus:border-brand-orange/50 focus:bg-white/10 transition-all text-sm" placeholder="email@example.com" type="email"/>
<button className="absolute right-1 top-1 bottom-1 bg-white text-black px-5 rounded-lg font-medium text-xs uppercase tracking-wide hover:bg-brand-orange hover:text-white transition-colors">
                                Subscribe
                            </button>
</div>
</div>
<div className="mt-12 flex gap-4">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
<iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
<iconify-icon icon="solar:brand-tiktok-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="hidden lg:block lg:col-span-1"></div>

<div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">

<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-6">Discover</h4>
<ul className="space-y-4 text-sm text-brand-muted">
<li><a className="hover:text-brand-orange transition-colors flex items-center gap-2 group" href="#">New Openings <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-xs" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
<li><a className="hover:text-white transition-colors" href="#">Trending Now</a></li>
<li><a className="hover:text-white transition-colors" href="#">Street Food</a></li>
<li><a className="hover:text-white transition-colors" href="#">Michelin Star</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cocktail Bars</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-6">Company</h4>
<ul className="space-y-4 text-sm text-brand-muted">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Partner with us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press Kit</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-6">Support</h4>
<ul className="space-y-4 text-sm text-brand-muted">
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li className="pt-4">
<div className="bg-brand-card border border-white/10 rounded-lg p-3 inline-flex items-center gap-3">
<div className="bg-green-500/20 p-2 rounded-full">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
</div>
<div>
<div className="text-[10px] uppercase text-brand-muted tracking-wide">Status</div>
<div className="text-xs font-medium text-white">Kitchens Open</div>
</div>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full overflow-hidden border-t border-white/5 bg-brand-bg/80 backdrop-blur-sm">

<div className="absolute bottom-[-1vw] left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none select-none">
<span className="font-display text-[14vw] font-bold uppercase tracking-tightest text-white/[0.03]">London.Eats</span>
</div>
<div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center relative z-10 text-xs text-brand-muted font-medium uppercase tracking-wider">
<div>© 2024 London Eats Inc.</div>
<div className="flex gap-6 mt-4 md:mt-0">
<span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
<span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
