import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Cormorant Garamond', 'serif'],
display: ['Cinzel', 'serif'],
},
colors: {
obsidian: '#050505',
charcoal: '#0a0a0a',
gold: {
300: '#eecd68',
400: '#d4af37',
500: '#b08d2b',
900: '#3e2c05',
}
},
letterSpacing: {
'ultra': '0.25em',
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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-purple-900/10 blur-[120px] rounded-full"></div>
</div>

<nav className="fixed w-full z-50 top-0 left-0 transition-all duration-500 bg-gradient-to-b from-obsidian/90 to-transparent backdrop-blur-sm border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<div className="hidden md:flex items-center gap-10">
<a className="group relative py-2" href="#collections">
<span className="text-xs font-display font-medium uppercase tracking-ultra text-neutral-400 group-hover:text-gold-300 transition-colors duration-300">Patisserie</span>
<span className="absolute bottom-0 left-0 w-0 h-px bg-gold-400 transition-all duration-500 group-hover:w-full opacity-50"></span>
</a>
<a className="group relative py-2" href="#about">
<span className="text-xs font-display font-medium uppercase tracking-ultra text-neutral-400 group-hover:text-gold-300 transition-colors duration-300">Legacy</span>
<span className="absolute bottom-0 left-0 w-0 h-px bg-gold-400 transition-all duration-500 group-hover:w-full opacity-50"></span>
</a>
</div>

<a className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group" href="#">
<div className="flex flex-col items-center">
<span className="font-display text-3xl tracking-tighter text-neutral-100 group-hover:text-gold-300 transition-colors duration-500">N&amp;N</span>
<span className="text-[8px] uppercase tracking-[0.4em] text-gold-500/80 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Est. 1892</span>
</div>
</a>

<div className="flex items-center gap-6">
<button className="text-neutral-400 hover:text-gold-300 transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="1.2" width="20"></iconify-icon>
</button>
<div className="h-4 w-px bg-white/10 hidden md:block"></div>
<button className="text-neutral-400 hover:text-gold-300 transition-colors relative group">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.2" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-purple-900 border border-obsidian rounded-full group-hover:bg-gold-400 transition-colors"></span>
</button>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Dark moody cake" className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-obsidian/60"></div>
<div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-transparent to-obsidian/80"></div>
</div>

<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-12">
<div className="inline-flex items-center gap-4 mb-8 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
<div className="h-px w-12 bg-gold-500/50"></div>
<span className="text-xs font-display uppercase tracking-ultra text-gold-300/90">The Gothic Quarter, NY</span>
<div className="h-px w-12 bg-gold-500/50"></div>
</div>
<h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-neutral-100 leading-[0.9] tracking-tight mb-8 drop-shadow-2xl opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
                Nocturne <br/>
<span className="font-serif italic font-thin text-5xl md:text-7xl lg:text-8xl text-purple-200/80">&amp;</span> Nectar
            </h1>
<p className="text-xl md:text-2xl text-neutral-300 font-light max-w-lg mx-auto leading-relaxed mb-12 opacity-0 animate-[fadeIn_1s_ease-out_1.1s_forwards]">
                Where darkness meets delicacy. <br/>
<span className="text-neutral-500 text-base italic">Artisan confectionary for the twilight hours.</span>
</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 opacity-0 animate-[fadeIn_1s_ease-out_1.4s_forwards]">
<a className="group relative px-8 py-4 bg-neutral-100 text-obsidian font-display text-xs font-semibold tracking-widest hover:bg-gold-300 transition-colors duration-500 overflow-hidden" href="#collections">
<span className="relative z-10">VIEW COLLECTIONS</span>
</a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60">
<span className="text-[10px] uppercase tracking-widest text-neutral-500">Scroll</span>
<div className="h-12 w-px bg-gradient-to-b from-neutral-500 to-transparent"></div>
</div>
</header>

<section className="relative py-24 md:py-32 bg-obsidian z-10">
<div className="max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-gold-500/20 mx-auto mb-6 transform rotate-180" icon="lucide:quote" width="40"></iconify-icon>
<h2 className="font-sans text-2xl md:text-4xl text-neutral-300 font-light leading-relaxed italic">
                "We bake for the melancholy, the romantics, and those who find comfort in the shadows. Every crumb tells a story of midnight cravings."
            </h2>
<div className="mt-8 flex items-center justify-center gap-3">
<span className="text-xs font-display tracking-widest text-gold-400">THE HEAD BAKER</span>
</div>
</div>
</section>

<section className="relative py-20 px-6 bg-charcoal border-t border-white/5" id="collections">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/5 pb-6">
<div>
<span className="text-[10px] font-display uppercase tracking-[0.2em] text-gold-500 block mb-3">Seasonal Offerings</span>
<h3 className="font-display text-3xl md:text-5xl text-neutral-100 tracking-tight">The Midnight Menu</h3>
</div>
<div className="flex items-center gap-2 text-neutral-500 text-sm italic font-light">
<span className="w-2 h-2 rounded-full bg-green-900 border border-green-700"></span>
                    Available for Evening Delivery
                </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">

<article className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 mb-6">
<div className="absolute inset-0 bg-neutral-900 z-0"></div>
<img alt="Obsidian Cake" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:opacity-90 opacity-70" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&amp;w=2589&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
<span className="px-3 py-1 bg-obsidian/80 backdrop-blur border border-white/10 text-[10px] font-display tracking-widest text-neutral-300 uppercase">Signature</span>
</div>
</div>
<div className="flex justify-between items-baseline">
<h4 className="font-display text-xl text-neutral-200 group-hover:text-gold-300 transition-colors">The Obsidian Heart</h4>
<span className="font-sans italic text-gold-400/80 text-lg">$45.00</span>
</div>
<p className="text-sm text-neutral-500 mt-2 font-light leading-relaxed">
                        70% Dark Chocolate, Charcoal infused sponge, Blackberry reduction.
                    </p>
<button className="mt-4 text-xs font-display tracking-widest text-neutral-400 border-b border-transparent group-hover:border-gold-500 group-hover:text-gold-500 transition-all pb-0.5">ADD TO CART</button>
</article>

<article className="group cursor-pointer md:mt-12">
<div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 mb-6">
<div className="absolute inset-0 bg-neutral-900 z-0"></div>
<img alt="Fig Tart" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:opacity-90 opacity-70" src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 z-20">
<span className="px-3 py-1 bg-purple-900/40 backdrop-blur border border-purple-500/20 text-[10px] font-display tracking-widest text-purple-200 uppercase">Limited</span>
</div>
</div>
<div className="flex justify-between items-baseline">
<h4 className="font-display text-xl text-neutral-200 group-hover:text-gold-300 transition-colors">Gilded Fig &amp; Thyme</h4>
<span className="font-sans italic text-gold-400/80 text-lg">$38.00</span>
</div>
<p className="text-sm text-neutral-500 mt-2 font-light leading-relaxed">
                        Roasted black figs, thyme-infused honey cream, gold leaf.
                    </p>
<button className="mt-4 text-xs font-display tracking-widest text-neutral-400 border-b border-transparent group-hover:border-gold-500 group-hover:text-gold-500 transition-all pb-0.5">ADD TO CART</button>
</article>

<article className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 mb-6">
<div className="absolute inset-0 bg-neutral-900 z-0"></div>
<img alt="Red Velvet" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:opacity-90 opacity-70" src="https://images.unsplash.com/photo-1626263468007-a9e0cf83f1ac?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline">
<h4 className="font-display text-xl text-neutral-200 group-hover:text-gold-300 transition-colors">Crimson Velvet</h4>
<span className="font-sans italic text-gold-400/80 text-lg">$42.00</span>
</div>
<p className="text-sm text-neutral-500 mt-2 font-light leading-relaxed">
                        Beetroot velvet sponge, mascarpone, crystallized rose petals.
                    </p>
<button className="mt-4 text-xs font-display tracking-widest text-neutral-400 border-b border-transparent group-hover:border-gold-500 group-hover:text-gold-500 transition-all pb-0.5">ADD TO CART</button>
</article>
</div>
</div>
</section>

<section className="relative py-24 px-6 bg-obsidian overflow-hidden" id="about">

<div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-900/20"></div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">

<div className="relative group">
<div className="absolute top-4 left-4 w-full h-full border border-white/5 z-0 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
<div className="relative h-[600px] bg-neutral-900 overflow-hidden z-10">
<img alt="Texture detail" className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="pl-0 md:pl-10">
<div className="inline-flex items-center gap-3 mb-6">
<iconify-icon className="text-purple-400" icon="lucide:star" width="14"></iconify-icon>
<span className="text-[10px] font-display uppercase tracking-ultra text-purple-200/60">Bespoke Commissions</span>
</div>
<h2 className="font-display text-4xl md:text-6xl text-neutral-100 tracking-tight leading-none mb-8">
                    Sculpted from <br/> <span className="text-neutral-500 italic font-serif">Shadow &amp; Sugar</span>
</h2>
<p className="text-lg text-neutral-400 font-light leading-relaxed mb-8">
                    Our atelier specializes in the structural and the surreal. From towering wedding monoliths to delicate petit fours for the most exclusive masquerades, we craft edible art that defies expectation.
                </p>
<div className="grid grid-cols-2 gap-8 mb-10">
<div>
<span className="block text-2xl font-display text-gold-400 mb-1">24k</span>
<span className="text-xs uppercase tracking-widest text-neutral-500">Edible Gold Leaf</span>
</div>
<div>
<span className="block text-2xl font-display text-gold-400 mb-1">72h</span>
<span className="text-xs uppercase tracking-widest text-neutral-500">Fermentation Process</span>
</div>
</div>
<a className="inline-flex items-center gap-3 text-neutral-300 hover:text-gold-300 transition-colors group" href="#">
<span className="text-sm font-display tracking-widest">INQUIRE FOR EVENTS</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-white/5 bg-charcoal">
<div className="max-w-7xl mx-auto text-center mb-12">
<span className="text-xs font-display tracking-ultra text-neutral-500 uppercase">@NocturneNectar</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-1">
<div className="aspect-square relative group overflow-hidden bg-neutral-900">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="aspect-square relative group overflow-hidden bg-neutral-900">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="aspect-square relative group overflow-hidden bg-neutral-900">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1517427677506-ade074eb1432?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="aspect-square relative group overflow-hidden bg-neutral-900">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
</div>
</section>

<footer className="bg-obsidian border-t border-white/5 pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

<div className="md:col-span-4 space-y-6">
<h5 className="font-display text-3xl text-neutral-100 tracking-tight">N &amp; N</h5>
<p className="text-neutral-500 font-light text-sm leading-relaxed max-w-xs">
                        Founded in the gaslight era, refined for the modern palate. We serve those who crave something darker.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-full text-neutral-400 hover:text-white hover:border-white/30 transition-all" href="#">
<iconify-icon icon="lucide:instagram" width="14"></iconify-icon>
</a>
<a className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-full text-neutral-400 hover:text-white hover:border-white/30 transition-all" href="#">
<iconify-icon icon="lucide:twitter" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="md:col-span-2">
<h6 className="text-[10px] uppercase tracking-ultra text-gold-500/80 mb-6">Explore</h6>
<ul className="space-y-3 text-sm font-light text-neutral-400">
<li><a className="hover:text-gold-300 transition-colors" href="#">Patisserie</a></li>
<li><a className="hover:text-gold-300 transition-colors" href="#">Wedding</a></li>
<li><a className="hover:text-gold-300 transition-colors" href="#">Gifts</a></li>
<li><a className="hover:text-gold-300 transition-colors" href="#">Catering</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h6 className="text-[10px] uppercase tracking-ultra text-gold-500/80 mb-6">Atelier</h6>
<ul className="space-y-3 text-sm font-light text-neutral-400">
<li><a className="hover:text-gold-300 transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-gold-300 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-gold-300 transition-colors" href="#">Press</a></li>
<li><a className="hover:text-gold-300 transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div className="md:col-span-4">
<h6 className="text-[10px] uppercase tracking-ultra text-gold-500/80 mb-6">The Secret Menu</h6>
<p className="text-xs text-neutral-500 mb-4 font-light">Subscribe to receive keys to our seasonal vaults.</p>
<div className="flex items-center border-b border-white/10 py-2">
<input className="bg-transparent w-full text-sm text-neutral-300 placeholder-neutral-700 outline-none" placeholder="Enter your email" type="email"/>
<button className="text-neutral-400 hover:text-white transition-colors uppercase text-xs tracking-widest">Join</button>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-[10px] text-neutral-700 uppercase tracking-widest">© 2024 Nocturne &amp; Nectar. New York.</span>
<div className="flex gap-6 text-[10px] text-neutral-600 uppercase tracking-widest">
<a href="#">Privacy</a>
<a href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
