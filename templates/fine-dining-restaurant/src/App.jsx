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
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 bg-stone-950/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl font-serif tracking-tighter text-white hover:text-orange-100 transition-colors" href="#">
                AURA
            </a>
<div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide text-stone-300">
<a className="hover:text-white transition-colors" href="#story">Our Story</a>
<a className="hover:text-white transition-colors" href="#menu">Menu</a>
<a className="hover:text-white transition-colors" href="#experience">Experience</a>
<a className="hover:text-white transition-colors" href="#private">Private Dining</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex group relative overflow-hidden rounded-full bg-white text-stone-950 px-6 py-2.5 text-xs font-semibold tracking-wide transition-all hover:bg-orange-100" href="#reserve">
<span className="relative z-10">Book a Table</span>
</a>
<button className="md:hidden text-white">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Fine Dining Atmosphere" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-950/30"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-medium text-stone-200 tracking-wide uppercase">Michelin Guide 2024</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white tracking-tight leading-[0.9]">
                Taste the <br/> <span className="italic text-stone-400">Extraordinary</span>
</h1>
<p className="text-stone-300 text-lg md:text-xl font-light max-w-lg mx-auto leading-relaxed">
                A sensory journey through modern gastronomy. Where art meets flavor in the heart of the city.
            </p>
<div className="pt-6 flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold tracking-wide rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(234,88,12,0.3)]" href="#reserve">
                    Reserve Experience
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-full md:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm text-white text-sm font-medium tracking-wide rounded-full transition-all duration-300" href="#menu">
                    View Seasonal Menu
                </a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
<span className="text-[10px] uppercase tracking-widest text-stone-400">Scroll</span>
<iconify-icon className="text-white" icon="lucide:chevron-down" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</header>

<section className="py-16 bg-stone-900/50 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="space-y-2">
<iconify-icon className="text-orange-500 mb-2" icon="lucide:star" strokeWidth="1.5" width="24"></iconify-icon>
<div className="text-3xl font-serif text-white">4.9</div>
<div className="text-xs text-stone-500 uppercase tracking-widest">OpenTable</div>
</div>
<div className="space-y-2">
<iconify-icon className="text-orange-500 mb-2" icon="lucide:award" strokeWidth="1.5" width="24"></iconify-icon>
<div className="text-3xl font-serif text-white">2</div>
<div className="text-xs text-stone-500 uppercase tracking-widest">Michelin Stars</div>
</div>
<div className="space-y-2">
<iconify-icon className="text-orange-500 mb-2" icon="lucide:wine" strokeWidth="1.5" width="24"></iconify-icon>
<div className="text-3xl font-serif text-white">400+</div>
<div className="text-xs text-stone-500 uppercase tracking-widest">Wine Labels</div>
</div>
<div className="space-y-2">
<iconify-icon className="text-orange-500 mb-2" icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
<div className="text-3xl font-serif text-white">12k+</div>
<div className="text-xs text-stone-500 uppercase tracking-widest">Guests Served</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-950 relative overflow-hidden" id="story">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl"></div>
<img alt="Atmospheric Dining" className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5 shadow-2xl z-10" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -right-6 bg-stone-900 border border-white/10 p-6 rounded-xl shadow-xl z-20 max-w-xs backdrop-blur-md">
<p className="font-serif italic text-lg text-white mb-2">"We cook not just to feed, but to create memories that linger."</p>
</div>
</div>
<div className="space-y-8 order-1 lg:order-2">
<div>
<span className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-2 block">Our Philosophy</span>
<h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">The Art of <br/><span className="italic text-stone-500">Slow Dining</span></h2>
</div>
<div className="space-y-6 text-stone-400 font-light leading-relaxed">
<p>
                        Born from a desire to reconnect with the origins of flavor, Aura represents a return to artisanal craftsmanship. Our kitchen is a laboratory of tradition and innovation, where ancient techniques meet modern sensibilities.
                    </p>
<p>
                        We believe that a meal should be a narrative—a story told through texture, temperature, and taste. Every ingredient is selected with intention, honoring the seasons and the hands that cultivated them.
                    </p>
</div>
<div className="flex items-center gap-4 pt-2">
<div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-transparent"></div>
<span className="font-serif text-xl text-white tracking-wider">Est. 2018</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-900/30 border-t border-white/5">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/3 relative group">
<div className="absolute inset-0 bg-orange-500 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
<img alt="Chef Portrait" className="relative w-full aspect-[4/5] object-cover rounded-2xl border border-white/5 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&amp;w=2672&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-2/3 space-y-8">
<div className="space-y-2">
<h3 className="text-3xl md:text-4xl font-serif text-white">Chef Elena Vos</h3>
<p className="text-orange-500 text-sm font-medium tracking-wider uppercase">Executive Chef &amp; Founder</p>
</div>
<p className="text-xl md:text-2xl font-serif italic text-stone-300 leading-relaxed border-l-2 border-orange-500/50 pl-6">
                        "True luxury in cuisine is not about excess, but about the purity of flavor and the honesty of the ingredients."
                    </p>
<div className="grid grid-cols-2 gap-8 pt-4">
<div>
<h4 className="text-white font-medium mb-1">Background</h4>
<p className="text-sm text-stone-500">Previously Chef de Cuisine at Le Bernadin. 15 years of experience in French and Japanese techniques.</p>
</div>
<div>
<h4 className="text-white font-medium mb-1">Accolades</h4>
<p className="text-sm text-stone-500">James Beard Award Winner 2022.<br/>Top 50 Restaurants World List.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative bg-stone-950" id="experience">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="space-y-4">
<span className="text-orange-500 text-xs font-semibold tracking-widest uppercase">The Atmosphere</span>
<h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight">Crafted for the <span className="italic text-stone-500">Senses</span></h2>
</div>
<p className="text-stone-400 text-sm max-w-md leading-relaxed">
                    Every detail at Aura is curated to enhance your dining journey. From the lighting to the plating, we believe in the harmony of elements.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]">
<div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl bg-stone-900 border border-white/5">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex items-center gap-3 mb-2 text-orange-400">
<iconify-icon icon="lucide:chef-hat" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium tracking-wider uppercase">Open Kitchen</span>
</div>
<h3 className="text-2xl font-serif text-white mb-2">Culinary Theater</h3>
<p className="text-stone-300 text-sm line-clamp-2">Witness the artistry of our chefs as they prepare each dish with precision and passion in our open-concept kitchen.</p>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl bg-stone-900 border border-white/5">
<img alt="Cocktail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-lg font-serif text-white mb-1">Mixology</h3>
<p className="text-stone-400 text-xs">Botanical infusions &amp; rare spirits.</p>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl bg-stone-900 border border-white/5">
<img alt="Plating" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-lg font-serif text-white mb-1">Sourcing</h3>
<p className="text-stone-400 text-xs">Farm-to-table, redefined.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-950 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 space-y-3">
<span className="text-orange-500 text-xs font-semibold tracking-widest uppercase">Curated Excellence</span>
<h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight">Signature <span className="italic text-stone-500">Creations</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer">
<img alt="Signature Dish 1" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" src="https://images.unsplash.com/photo-1551024601-5629436bb976?q=80&amp;w=2592&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="w-10 h-px bg-orange-500 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100"></div>
<h3 className="text-2xl font-serif text-white mb-2">Duck Breast &amp; Fig</h3>
<p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-200">Aged 14 days, glazed with local honey and roasted figs.</p>
</div>
</div>

<div className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer md:-mt-12">
<img alt="Signature Dish 2" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" src="https://images.unsplash.com/photo-1625938145744-e38051539994?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="w-10 h-px bg-orange-500 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100"></div>
<h3 className="text-2xl font-serif text-white mb-2">Ocean Trout</h3>
<p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-200">Smoked tableside, dill emulsion, crisp skin.</p>
</div>
</div>

<div className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer">
<img alt="Signature Dish 3" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&amp;w=2568&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="w-10 h-px bg-orange-500 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100"></div>
<h3 className="text-2xl font-serif text-white mb-2">Truffle Risotto</h3>
<p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-200">Arborio rice, parmesan crisp, shaved black truffle.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-950 border-t border-white/5" id="menu">
<div className="max-w-4xl mx-auto text-center mb-16">
<span className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-4 block">Seasonal Selections</span>
<h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-6">The <span className="italic text-stone-500">Tasting</span> Menu</h2>
<div className="flex justify-center gap-8 text-sm font-medium text-stone-400">
<button className="text-white border-b border-orange-500 pb-1">Dinner</button>
<button className="hover:text-white transition-colors pb-1">Lunch</button>
<button className="hover:text-white transition-colors pb-1">Wine</button>
</div>
</div>
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
<div className="group flex gap-4 items-start">
<div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
<img alt="Dish" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 border-b border-white/5 pb-8 group-hover:border-white/10 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl font-serif text-white group-hover:text-orange-200 transition-colors">Hokkaido Scallop</h3>
<span className="text-orange-500 font-mono text-sm">$42</span>
</div>
<p className="text-stone-400 text-sm leading-relaxed mb-3">
                        Pan-seared, cauliflower purée, truffle foam, caviar accent.
                    </p>
<div className="flex gap-2">
<span className="text-[10px] px-2 py-0.5 border border-white/10 rounded-full text-stone-500">GF</span>
</div>
</div>
</div>
<div className="group flex gap-4 items-start">
<div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
<img alt="Dish" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 border-b border-white/5 pb-8 group-hover:border-white/10 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl font-serif text-white group-hover:text-orange-200 transition-colors">Wagyu A5 Tartare</h3>
<span className="text-orange-500 font-mono text-sm">$58</span>
</div>
<p className="text-stone-400 text-sm leading-relaxed mb-3">
                        Smoked egg yolk, capers, shallot, toasted brioche.
                    </p>
<div className="flex gap-2">
<span className="text-[10px] px-2 py-0.5 border border-white/10 rounded-full text-stone-500">Raw</span>
</div>
</div>
</div>
<div className="group flex gap-4 items-start">
<div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
<img alt="Dish" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 border-b border-white/5 pb-8 group-hover:border-white/10 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl font-serif text-white group-hover:text-orange-200 transition-colors">Black Cod Miso</h3>
<span className="text-orange-500 font-mono text-sm">$48</span>
</div>
<p className="text-stone-400 text-sm leading-relaxed mb-3">
                        72-hour marinade, hajikami ginger, citrus reduction.
                    </p>
<div className="flex gap-2">
<span className="text-[10px] px-2 py-0.5 border border-white/10 rounded-full text-stone-500">Sustainably Sourced</span>
</div>
</div>
</div>
<div className="group flex gap-4 items-start">
<div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
<img alt="Dish" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 border-b border-white/5 pb-8 group-hover:border-white/10 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl font-serif text-white group-hover:text-orange-200 transition-colors">Forest Mushroom Risotto</h3>
<span className="text-orange-500 font-mono text-sm">$36</span>
</div>
<p className="text-stone-400 text-sm leading-relaxed mb-3">
                        Acquerello rice, porcini, parmesan crisp, thyme oil.
                    </p>
<div className="flex gap-2">
<span className="text-[10px] px-2 py-0.5 border border-white/10 rounded-full text-stone-500">V</span>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 text-sm text-white hover:text-orange-400 transition-colors border-b border-white/20 pb-0.5 hover:border-orange-400" href="#">
                View Full Menu
                <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</section>

<section className="py-20 px-6 bg-stone-900/30 border-y border-white/5">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
<div className="space-y-4 p-6 rounded-2xl hover:bg-white/5 transition-colors">
<div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mx-auto md:mx-0 text-orange-500">
<iconify-icon icon="lucide:sprout" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-white">Hyper-Local Sourcing</h3>
<p className="text-sm text-stone-400 leading-relaxed">We work directly with 15 local farms within a 50-mile radius to ensure every ingredient is harvested at its peak.</p>
</div>
<div className="space-y-4 p-6 rounded-2xl hover:bg-white/5 transition-colors">
<div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mx-auto md:mx-0 text-orange-500">
<iconify-icon icon="lucide:fish" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-white">Ethical Catch</h3>
<p className="text-sm text-stone-400 leading-relaxed">Our seafood is strictly sourced from sustainable fisheries that prioritize the health of our oceans for future generations.</p>
</div>
<div className="space-y-4 p-6 rounded-2xl hover:bg-white/5 transition-colors">
<div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mx-auto md:mx-0 text-orange-500">
<iconify-icon icon="lucide:wine" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-white">Biodynamic Wines</h3>
<p className="text-sm text-stone-400 leading-relaxed">Our cellar features over 200 labels from vineyards that practice organic and biodynamic farming methods.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-950 overflow-hidden">
<div className="px-6 mb-12 flex justify-between items-end max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-serif text-white">Visual <span className="italic text-stone-500">Diaries</span></h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-stone-950 transition-all">
<iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-stone-950 transition-all">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-4 overflow-x-auto hide-scrollbar px-6 pb-8 snap-x">
<div className="min-w-[300px] h-[400px] md:min-w-[400px] snap-center relative rounded-lg overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
</div>
<div className="min-w-[300px] h-[400px] md:min-w-[400px] snap-center relative rounded-lg overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
</div>
<div className="min-w-[300px] h-[400px] md:min-w-[400px] snap-center relative rounded-lg overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9f4?q=80&amp;w=2599&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
</div>
<div className="min-w-[300px] h-[400px] md:min-w-[400px] snap-center relative rounded-lg overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
</div>
<div className="min-w-[300px] h-[400px] md:min-w-[400px] snap-center relative rounded-lg overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-900 border-t border-white/5" id="private">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-4 block">Exclusive Events</span>
<h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight">Private <span className="italic text-stone-500">Dining</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group relative h-[500px] rounded-2xl overflow-hidden border border-white/5">
<img alt="The Wine Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
<div className="absolute bottom-10 left-10 right-10">
<h3 className="text-3xl font-serif text-white mb-2">The Wine Room</h3>
<p className="text-stone-300 text-sm mb-6 max-w-sm">An intimate sanctuary surrounded by our vintage collection. Perfect for business dinners or anniversaries.</p>
<ul className="space-y-2 mb-6 text-sm text-stone-400">
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="lucide:check"></iconify-icon> Up to 12 Guests</li>
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="lucide:check"></iconify-icon> Custom Tasting Menu</li>
</ul>
<button className="text-white border-b border-orange-500 pb-1 text-sm font-medium hover:text-orange-400 transition-colors">Inquire Availability</button>
</div>
</div>
<div className="group relative h-[500px] rounded-2xl overflow-hidden border border-white/5">
<img alt="Chef's Table" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
<div className="absolute bottom-10 left-10 right-10">
<h3 className="text-3xl font-serif text-white mb-2">The Chef's Table</h3>
<p className="text-stone-300 text-sm mb-6 max-w-sm">Front-row seats to the action. Interact with Chef Elena and the team as they prepare a 12-course journey.</p>
<ul className="space-y-2 mb-6 text-sm text-stone-400">
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="lucide:check"></iconify-icon> Up to 6 Guests</li>
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="lucide:check"></iconify-icon> Interactive Experience</li>
</ul>
<button className="text-white border-b border-orange-500 pb-1 text-sm font-medium hover:text-orange-400 transition-colors">Reserve Experience</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-950 relative" id="reviews">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-serif text-white text-center mb-16">Guest <span className="italic text-stone-500">Stories</span></h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-2xl">
<div className="flex gap-1 text-orange-500 mb-6">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-stone-300 text-sm leading-relaxed mb-6">"An absolute triumph. The balance of flavors in the tasting menu was nothing short of poetic. Service was attentive yet invisible."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center text-white font-serif">JD</div>
<div>
<p className="text-white text-sm font-medium">James Dalton</p>
<p className="text-stone-500 text-xs">New York Times Critic</p>
</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-2xl">
<div className="flex gap-1 text-orange-500 mb-6">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-stone-300 text-sm leading-relaxed mb-6">"The Chef's Table experience changed my perspective on fine dining. Unpretentious, warm, and utterly delicious."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center text-white font-serif">SC</div>
<div>
<p className="text-white text-sm font-medium">Sarah Chen</p>
<p className="text-stone-500 text-xs">Verified Guest</p>
</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-2xl">
<div className="flex gap-1 text-orange-500 mb-6">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-stone-300 text-sm leading-relaxed mb-6">"Every course was a surprise. The wine pairing is a must-do. Simply one of the best evenings we've had in the city."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center text-white font-serif">MR</div>
<div>
<p className="text-white text-sm font-medium">Michael Ross</p>
<p className="text-stone-500 text-xs">Verified Guest</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-stone-900/30 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale">
<span className="text-2xl font-serif text-white tracking-widest">VOGUE</span>
<span className="text-2xl font-serif text-white tracking-widest">Esquire</span>
<span className="text-2xl font-serif text-white tracking-widest">Eater</span>
<span className="text-2xl font-serif text-white tracking-widest">Bon Appétit</span>
<span className="text-2xl font-serif text-white tracking-widest">Michelin</span>
</div>
</div>
</section>

<section className="relative py-32 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0">
<img className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/40"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-3xl">
<h2 className="text-5xl md:text-6xl font-serif text-white tracking-tight mb-8">Your Table <span className="italic text-stone-500">Awaits</span></h2>
<p className="text-stone-300 text-lg font-light mb-10 max-w-xl mx-auto">Join us for an evening of culinary artistry. Tables are limited to ensure an intimate atmosphere.</p>
<a className="inline-flex items-center gap-3 px-8 py-4 bg-white text-stone-950 rounded-full font-semibold tracking-wide hover:bg-orange-100 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]" href="#reserve">
                Secure Reservation
                <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-stone-950" id="reserve">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-lg mx-auto relative z-10">
<div className="text-center mb-10">
<span className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-4 block">Reservations</span>
<h2 className="text-4xl font-serif text-white tracking-tight mb-4">Complete Your Booking</h2>
<p className="text-stone-400 text-sm">We release tables 30 days in advance. A credit card is required to secure your booking.</p>
</div>
<form className="space-y-6 backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/5 shadow-2xl">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-medium text-stone-400 uppercase tracking-wider ml-1">Date</label>
<div className="relative">
<input className="w-full bg-stone-900/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all appearance-none [&amp;::-webkit-calendar-picker-indicator]:invert [&amp;::-webkit-calendar-picker-indicator]:opacity-50" type="date"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-400 uppercase tracking-wider ml-1">Guests</label>
<div className="relative">
<select className="w-full bg-stone-900/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all appearance-none">
<option>2 Guests</option>
<option>3 Guests</option>
<option>4 Guests</option>
<option>5+ Guests</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-400 uppercase tracking-wider ml-1">Preferred Time</label>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer group">
<input className="hidden peer" name="time" type="radio"/>
<div className="text-center py-2.5 rounded-lg border border-white/10 text-stone-400 text-sm hover:bg-white/5 peer-checked:bg-orange-600 peer-checked:text-white peer-checked:border-orange-600 transition-all">
                                6:00 PM
                            </div>
</label>
<label className="cursor-pointer group">
<input className="hidden peer" name="time" type="radio"/>
<div className="text-center py-2.5 rounded-lg border border-white/10 text-stone-400 text-sm hover:bg-white/5 peer-checked:bg-orange-600 peer-checked:text-white peer-checked:border-orange-600 transition-all">
                                7:30 PM
                            </div>
</label>
<label className="cursor-pointer group">
<input className="hidden peer" disabled="" name="time" type="radio"/>
<div className="text-center py-2.5 rounded-lg border border-white/5 bg-white/5 text-stone-600 text-sm opacity-50 cursor-not-allowed decoration-slice">
                                8:30 PM
                            </div>
</label>
</div>
</div>
<div className="space-y-4">
<div className="relative group">
<input className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-stone-600" placeholder="Full Name" type="text"/>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-600 group-focus-within:text-orange-500 transition-colors" icon="lucide:user" width="16"></iconify-icon>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-stone-600" placeholder="Email Address" type="email"/>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-600 group-focus-within:text-orange-500 transition-colors" icon="lucide:mail" width="16"></iconify-icon>
</div>
</div>
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-4 w-4 opacity-0 absolute" type="checkbox"/>
<div className="h-4 w-4 border border-stone-600 rounded bg-stone-900 peer-checked:bg-orange-500 peer-checked:border-orange-500 transition-all flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="lucide:check" width="12"></iconify-icon>
</div>
</div>
<span className="text-xs text-stone-400 leading-tight group-hover:text-stone-300 transition-colors">
                        Keep me updated on special events, seasonal menus, and chef's table availability.
                    </span>
</label>
<button className="w-full bg-white text-stone-950 font-semibold py-4 rounded-lg hover:bg-orange-50 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-white/5" type="button">
                    Confirm Reservation
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-stone-950 border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-3xl font-serif tracking-tighter text-white block mb-6" href="#">AURA</a>
<p className="text-stone-500 text-sm leading-relaxed">
                        Redefining modern dining through sustainable sourcing and artistic presentation.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Location</h4>
<p className="text-stone-400 text-sm leading-relaxed">
                        1024 Culinary Ave,<br/>
                        Metropolis, NY 10012<br/>
                        United States
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Hours</h4>
<div className="text-stone-400 text-sm leading-relaxed space-y-1">
<div className="flex justify-between max-w-[140px]"><span>Tue - Thu</span> <span>5pm - 10pm</span></div>
<div className="flex justify-between max-w-[140px]"><span>Fri - Sat</span> <span>5pm - 11pm</span></div>
<div className="flex justify-between max-w-[140px]"><span>Sun</span> <span>5pm - 9pm</span></div>
<div className="text-stone-600 pt-2">Closed Mondays</div>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Social</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-stone-400 hover:bg-white hover:text-stone-950 transition-all" href="#">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-stone-400 hover:bg-white hover:text-stone-950 transition-all" href="#">
<iconify-icon icon="lucide:facebook" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-stone-400 hover:bg-white hover:text-stone-950 transition-all" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-stone-600 text-xs">© 2024 Aura Restaurant Group. All rights reserved.</p>
<div className="flex gap-6 text-xs text-stone-500">
<a className="hover:text-stone-300" href="#">Privacy Policy</a>
<a className="hover:text-stone-300" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
