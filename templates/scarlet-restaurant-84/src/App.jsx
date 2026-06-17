import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
rust: {
50: '#fff1f0',
100: '#ffe0df',
200: '#ffc7c5',
300: '#ffa09c',
400: '#ff6b66',
500: '#f73e38',
600: '#db2721', // Primary Brand Color
700: '#b81d19',
800: '#981b18',
900: '#7e1e1b',
950: '#450a09',
},
neutral: {
850: '#1f1d1b',
900: '#171717',
950: '#0a0a0a', // Deepest black
}
},
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
widest: '0.15em',
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="group flex items-center gap-3" href="#">
<div className="w-8 h-8 bg-rust-600 rounded-sm flex items-center justify-center text-white font-serif italic text-lg shadow-[0_0_15px_rgba(219,39,33,0.3)] transition-transform duration-500 group-hover:rotate-12">
                    S
                </div>
<span className="text-white font-medium tracking-widest text-xs uppercase group-hover:text-rust-500 transition-colors">Scarlet</span>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-xs font-medium uppercase tracking-widest hover:text-white transition-colors" href="#philosophy">Philosophy</a>
<a className="text-xs font-medium uppercase tracking-widest hover:text-white transition-colors" href="#signatures">Signatures</a>
<a className="text-xs font-medium uppercase tracking-widest hover:text-white transition-colors" href="#reviews">Reviews</a>
</div>

<div className="flex items-center gap-6">
<a className="hidden sm:flex items-center gap-2 text-white text-xs font-medium uppercase tracking-widest hover:text-rust-500 transition-colors group" href="#reserve">
                    Reservations
                    <img alt="Arrow" className="w-4 h-4 group-hover:translate-x-1 transition-transform" src="https://api.iconify.design/lucide/arrow-right.svg?color=currentColor&amp;strokeWidth=1.5"/>
</a>
<button className="md:hidden text-white">
<img alt="Menu" className="w-6 h-6" src="https://api.iconify.design/lucide/menu.svg?color=white&amp;strokeWidth=1.5"/>
</button>
</div>
</div>
</nav>

<header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Dark Atmospheric Dining" className="w-full h-full object-cover animate-[scale_20s_ease-in-out_infinite_alternate] opacity-40" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-neutral-950/30"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-neutral-950/60 to-neutral-950"></div>
</div>
<div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-20">
<div className="grid md:grid-cols-12 gap-12 items-end">

<div className="md:col-span-8">
<div className="fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-rust-500 animate-pulse"></span>
<span className="text-[10px] font-medium uppercase tracking-widest text-neutral-300">Michelin Guide 2024</span>
</div>
<h1 className="fade-in-up delay-100 text-5xl md:text-7xl lg:text-8xl font-normal text-white tracking-tighter mb-6 leading-[0.95]">
                        Elegance in <br/>
<span className="font-serif italic text-rust-500 pr-4">Every</span> Detail.
                    </h1>
</div>

<div className="md:col-span-4 pb-2">
<p className="fade-in-up delay-200 text-sm md:text-base text-neutral-400 font-light leading-relaxed mb-8 border-l border-rust-900 pl-6">
                        Experience the intersection of primitive fire cooking and contemporary finesse. A culinary journey designed for the senses.
                    </p>
<div className="fade-in-up delay-300 flex items-center gap-4">
<a className="h-12 px-6 bg-white text-neutral-950 text-xs font-bold uppercase tracking-widest flex items-center justify-center hover:bg-neutral-200 transition-colors" href="#menu">
                            Explore Menu
                        </a>
<a className="h-12 w-12 border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white/5 transition-colors" href="#reserve">
<img alt="Scroll" className="w-5 h-5" src="https://api.iconify.design/lucide/arrow-down.svg?color=currentColor&amp;strokeWidth=1.5"/>
</a>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-neutral-950 border-y border-white/5" id="philosophy">
<div className="max-w-3xl mx-auto px-6 text-center">
<div className="w-px h-12 bg-gradient-to-b from-transparent via-rust-500 to-transparent mx-auto mb-8"></div>
<h2 className="text-2xl md:text-4xl font-light text-white tracking-tight mb-6 leading-snug">
                "We don't just cook. We curate <span className="font-serif italic text-rust-500">moments</span> through the language of flavor, fire, and atmosphere."
            </h2>
<div className="flex items-center justify-center gap-3">
<img alt="Chef" className="w-10 h-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-left">
<p className="text-white text-xs font-medium uppercase tracking-widest">Elena Rossi</p>
<p className="text-rust-500 text-[10px] uppercase tracking-widest">Head Chef</p>
</div>
</div>
</div>
</section>

<section className="w-full sm:px-6 md:px-10 max-w-7xl mx-auto pt-24 pb-24 bg-neutral-950" id="signatures">
<div className="flex sm:mb-12 mb-8 items-end justify-between px-4">
<div>
<div className="flex items-center gap-2 mb-3">
<span className="w-8 h-px bg-rust-500"></span>
<p className="text-[10px] sm:text-xs uppercase text-rust-500 tracking-widest font-bold">Selections</p>
</div>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">Signature Plates</h2>
</div>
<a className="hidden sm:inline-flex items-center gap-2 border border-white/10 hover:border-rust-500/50 hover:bg-white/5 text-xs font-medium uppercase tracking-widest text-white px-6 py-3 transition-all duration-300" href="#menu">
                Full menu
                <img className="w-4 h-4" src="https://api.iconify.design/lucide/arrow-up-right.svg?color=currentColor&amp;strokeWidth=1.5"/>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

<div className="group relative overflow-hidden border border-white/10 cursor-pointer bg-neutral-900 h-96">
<img alt="Risotto" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1546252992-cf6226db92b9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-[10px] uppercase tracking-widest text-rust-400 mb-2">Primi • Risotto</p>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<h3 className="text-lg font-medium text-white tracking-tight">Saffron &amp; Bone Marrow</h3>
<span className="inline-flex h-8 w-8 items-center justify-center border border-white/20 text-white group-hover:bg-rust-600 group-hover:border-rust-600 transition-colors">
<img className="w-4 h-4" src="https://api.iconify.design/lucide/arrow-right.svg?color=white&amp;strokeWidth=1.5"/>
</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden border border-white/10 cursor-pointer bg-neutral-900 h-96">
<img alt="Steak" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1594911776994-279c0942e6ab?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-[10px] uppercase tracking-widest text-rust-400 mb-2">Secondi • Grill</p>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<h3 className="text-lg font-medium text-white tracking-tight">Wagyu Striploin</h3>
<span className="inline-flex h-8 w-8 items-center justify-center border border-white/20 text-white group-hover:bg-rust-600 group-hover:border-rust-600 transition-colors">
<img className="w-4 h-4" src="https://api.iconify.design/lucide/arrow-right.svg?color=white&amp;strokeWidth=1.5"/>
</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden border border-white/10 cursor-pointer bg-neutral-900 h-96">
<img alt="Pasta" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1626804475297-411dbe9175d6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-[10px] uppercase tracking-widest text-rust-400 mb-2">Pasta • Handmade</p>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<h3 className="text-lg font-medium text-white tracking-tight">Truffle Tagliolini</h3>
<span className="inline-flex h-8 w-8 items-center justify-center border border-white/20 text-white group-hover:bg-rust-600 group-hover:border-rust-600 transition-colors">
<img className="w-4 h-4" src="https://api.iconify.design/lucide/arrow-right.svg?color=white&amp;strokeWidth=1.5"/>
</span>
</div>
</div>
</div>
</div>
<div className="mt-12 flex justify-center sm:hidden">
<a className="inline-flex items-center gap-2 border border-white/10 px-6 py-3 text-xs uppercase tracking-widest text-white hover:bg-white/5 transition-colors" href="#menu">
                View complete menu
                <img className="w-4 h-4" src="https://api.iconify.design/lucide/arrow-up-right.svg?color=currentColor&amp;strokeWidth=1.5"/>
</a>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden" id="menu">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-4xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-x-20 gap-y-16">

<div>
<h3 className="text-white text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-4 mb-8 flex justify-between items-center">
                        Starters
                        <span className="text-rust-500 font-serif italic text-lg lowercase">i.</span>
</h3>
<ul className="space-y-10">
<li className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<span className="text-white font-medium text-base group-hover:text-rust-400 transition-colors">Smoked Burrata</span>
<span className="text-neutral-500 text-sm font-serif italic">$24</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">Heirloom tomato confit, basil oil, toasted pine nuts, aged balsamic.</p>
</li>
<li className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<span className="text-white font-medium text-base group-hover:text-rust-400 transition-colors">Beef Tartare</span>
<span className="text-neutral-500 text-sm font-serif italic">$28</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">Hand-cut fillet, cured egg yolk, capers, truffle aioli, rye crisp.</p>
</li>
<li className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<span className="text-white font-medium text-base group-hover:text-rust-400 transition-colors">Charred Octopus</span>
<span className="text-neutral-500 text-sm font-serif italic">$32</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">Romesco sauce, confit potato, chorizo oil, lemon zest.</p>
</li>
</ul>
</div>

<div>
<h3 className="text-white text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-4 mb-8 flex justify-between items-center">
                        Mains
                        <span className="text-rust-500 font-serif italic text-lg lowercase">ii.</span>
</h3>
<ul className="space-y-10">
<li className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<span className="text-white font-medium text-base group-hover:text-rust-400 transition-colors">Dry Aged Duck</span>
<span className="text-neutral-500 text-sm font-serif italic">$45</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">Honey glaze, roasted parsnip, blackberry jus, thyme.</p>
</li>
<li className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<span className="text-white font-medium text-base group-hover:text-rust-400 transition-colors">Market Fish</span>
<span className="text-neutral-500 text-sm font-serif italic">$MP</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">Pan-seared catch of the day, fennel puree, citrus beurre blanc.</p>
</li>
<li className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<span className="text-white font-medium text-base group-hover:text-rust-400 transition-colors">Lamb Rack</span>
<span className="text-neutral-500 text-sm font-serif italic">$52</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">Herb crust, smoked eggplant, pomegranate molasses, mint.</p>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-28 bg-neutral-900 border-t border-white/5 relative overflow-hidden" id="reviews">

<div className="absolute -top-[20%] right-0 w-[500px] h-[500px] bg-rust-900/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<div className="flex items-center gap-2 mb-3">
<span className="w-8 h-px bg-rust-500"></span>
<p className="text-[10px] sm:text-xs uppercase text-rust-500 tracking-widest font-bold">Acclaim</p>
</div>
<h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight leading-tight">
                        Critical <span className="font-serif italic text-neutral-400">Perspectives</span>
</h2>
</div>
<div className="flex items-center gap-4">
<button className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
<img className="w-5 h-5" src="https://api.iconify.design/lucide/arrow-left.svg?color=currentColor&amp;strokeWidth=1.5"/>
</button>
<button className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
<img className="w-5 h-5" src="https://api.iconify.design/lucide/arrow-right.svg?color=currentColor&amp;strokeWidth=1.5"/>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-white/10 p-8 md:p-12 relative group hover:border-rust-500/30 transition-all duration-500">
<img alt="quote" className="absolute top-8 right-8 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity" src="https://api.iconify.design/lucide/quote.svg?color=%23db2721&amp;strokeWidth=1.5"/>
<div className="flex gap-1 mb-6">
<img className="w-3.5 h-3.5" src="https://api.iconify.design/lucide/star.svg?color=%23db2721&amp;strokeWidth=0&amp;fill=%23db2721"/>
<img className="w-3.5 h-3.5" src="https://api.iconify.design/lucide/star.svg?color=%23db2721&amp;strokeWidth=0&amp;fill=%23db2721"/>
<img className="w-3.5 h-3.5" src="https://api.iconify.design/lucide/star.svg?color=%23db2721&amp;strokeWidth=0&amp;fill=%23db2721"/>
<img className="w-3.5 h-3.5" src="https://api.iconify.design/lucide/star.svg?color=%23db2721&amp;strokeWidth=0&amp;fill=%23db2721"/>
<img className="w-3.5 h-3.5" src="https://api.iconify.design/lucide/star.svg?color=%23db2721&amp;strokeWidth=0&amp;fill=%23db2721"/>
</div>
<blockquote className="text-2xl md:text-3xl text-white font-serif italic mb-8 leading-snug">
                        "Scarlet isn't just a restaurant; it is a theatre of fire and flavor. The striploin redefines what a steak can be."
                    </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm">NYT</div>
<div className="flex flex-col">
<span className="text-white text-xs font-bold uppercase tracking-widest">The New York Times</span>
<span className="text-neutral-500 text-[10px] uppercase tracking-wider">Top Pick 2024</span>
</div>
</div>
</div>

<div className="flex flex-col justify-between bg-neutral-950 border border-white/5 p-8 relative group hover:border-white/20 transition-all duration-500">
<div>
<div className="flex gap-1 mb-6 opacity-60">
<img className="w-3 h-3" src="https://api.iconify.design/lucide/star.svg?color=white&amp;strokeWidth=0&amp;fill=white"/>
<img className="w-3 h-3" src="https://api.iconify.design/lucide/star.svg?color=white&amp;strokeWidth=0&amp;fill=white"/>
<img className="w-3 h-3" src="https://api.iconify.design/lucide/star.svg?color=white&amp;strokeWidth=0&amp;fill=white"/>
<img className="w-3 h-3" src="https://api.iconify.design/lucide/star.svg?color=white&amp;strokeWidth=0&amp;fill=white"/>
<img className="w-3 h-3" src="https://api.iconify.design/lucide/star.svg?color=white&amp;strokeWidth=0&amp;fill=white"/>
</div>
<blockquote className="text-lg text-neutral-300 font-light mb-6 leading-relaxed">
                            "Impeccable service and a menu that respects seasonality with bold, confident strokes. A modern classic."
                        </blockquote>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
<img className="w-4 h-4" src="https://api.iconify.design/lucide/award.svg?color=%23a3a3a3&amp;strokeWidth=1.5"/>
</div>
<div>
<p className="text-white text-xs font-medium">Michelin Guide</p>
<p className="text-neutral-600 text-[10px]">Review</p>
</div>
</div>
</div>

<div className="flex flex-col justify-between bg-neutral-950 border border-white/5 p-8 relative group hover:border-white/20 transition-all duration-500">
<div>
<div className="flex gap-1 mb-6 opacity-60">
<img className="w-3 h-3" src="https://api.iconify.design/lucide/star.svg?color=white&amp;strokeWidth=0&amp;fill=white"/>
<img className="w-3 h-3" src="https://api.iconify.design/lucide/star.svg?color=white&amp;strokeWidth=0&amp;fill=white"/>
<img className="w-3 h-3" src="https://api.iconify.design/lucide/star.svg?color=white&amp;strokeWidth=0&amp;fill=white"/>
<img className="w-3 h-3" src="https://api.iconify.design/lucide/star.svg?color=white&amp;strokeWidth=0&amp;fill=white"/>
<img className="w-3 h-3" src="https://api.iconify.design/lucide/star.svg?color=white&amp;strokeWidth=0&amp;fill=white"/>
</div>
<blockquote className="text-lg text-neutral-300 font-light mb-6 leading-relaxed">
                            "The wine pairing was nothing short of revelatory. An essential destination for the serious gourmand."
                        </blockquote>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
<img className="w-4 h-4" src="https://api.iconify.design/lucide/wine.svg?color=%23a3a3a3&amp;strokeWidth=1.5"/>
</div>
<div>
<p className="text-white text-xs font-medium">Bon Appétit</p>
<p className="text-neutral-600 text-[10px]">Editor's Choice</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 border-t border-white/5" id="reserve">
<div className="grid lg:grid-cols-12 min-h-[600px]">

<div className="relative lg:col-span-5 hidden lg:block overflow-hidden">
<img alt="Restaurant Interior" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[20s] hover:scale-110" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 to-neutral-950"></div>
<div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
<div>
<span className="text-rust-500 text-[10px] font-bold uppercase tracking-widest block mb-4">Reservations</span>
<h2 className="text-4xl font-serif italic text-white mb-4">Secure your table.</h2>
<p className="text-neutral-400 text-sm max-w-xs leading-relaxed">Join us for an evening of warmth and culinary excellence. We release tables 30 days in advance.</p>
</div>
<div className="space-y-6">
<div>
<p className="text-white text-xs font-bold uppercase tracking-widest mb-2">Private Dining</p>
<a className="text-neutral-400 text-xs hover:text-rust-400 transition-colors" href="#">events@scarlet.com</a>
</div>
<div>
<p className="text-white text-xs font-bold uppercase tracking-widest mb-2">Location</p>
<p className="text-neutral-400 text-xs">128 West Broadway,<br/>New York, NY 10013</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 p-8 md:p-16 lg:p-24 flex items-center bg-neutral-950">
<div className="w-full max-w-lg mx-auto">
<div className="lg:hidden mb-10">
<h2 className="text-3xl font-serif italic text-white mb-2">Reservations</h2>
<p className="text-neutral-500 text-xs uppercase tracking-widest">Book your experience</p>
</div>
<form className="space-y-10">

<div className="grid grid-cols-2 gap-8">
<div className="relative group">
<label className="absolute -top-2.5 left-0 text-[10px] uppercase tracking-widest text-neutral-500 transition-colors group-focus-within:text-rust-500">Date</label>
<input className="w-full bg-transparent border-b border-neutral-800 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder-neutral-700" placeholder="Select Date" type="text"/>
<img alt="Icon" className="absolute right-0 top-3 w-4 h-4 pointer-events-none opacity-50" src="https://api.iconify.design/lucide/calendar.svg?color=gray&amp;strokeWidth=1.5"/>
</div>
<div className="relative group">
<label className="absolute -top-2.5 left-0 text-[10px] uppercase tracking-widest text-neutral-500 transition-colors group-focus-within:text-rust-500">Guests</label>
<select className="w-full bg-transparent border-b border-neutral-800 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer">
<option className="bg-neutral-900">2 Guests</option>
<option className="bg-neutral-900">3 Guests</option>
<option className="bg-neutral-900">4 Guests</option>
<option className="bg-neutral-900">5+ Guests</option>
</select>
<img alt="Icon" className="absolute right-0 top-3 w-4 h-4 pointer-events-none opacity-50" src="https://api.iconify.design/lucide/chevron-down.svg?color=gray&amp;strokeWidth=1.5"/>
</div>
</div>

<div className="space-y-4">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 block">Available Times</label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer group">
<input className="peer sr-only" name="time" type="radio"/>
<span className="inline-block px-4 py-2 border border-neutral-800 text-neutral-400 text-xs rounded-sm transition-all duration-300 hover:border-neutral-600 peer-checked:bg-white peer-checked:text-black peer-checked:border-white">17:30</span>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="time" type="radio"/>
<span className="inline-block px-4 py-2 border border-neutral-800 text-neutral-400 text-xs rounded-sm transition-all duration-300 hover:border-neutral-600 peer-checked:bg-white peer-checked:text-black peer-checked:border-white">18:15</span>
</label>
<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="time" type="radio"/>
<span className="inline-block px-4 py-2 border border-neutral-800 text-neutral-400 text-xs rounded-sm transition-all duration-300 hover:border-neutral-600 peer-checked:bg-white peer-checked:text-black peer-checked:border-white">19:30</span>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="time" type="radio"/>
<span className="inline-block px-4 py-2 border border-neutral-800 text-neutral-400 text-xs rounded-sm transition-all duration-300 hover:border-neutral-600 peer-checked:bg-white peer-checked:text-black peer-checked:border-white">20:45</span>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" disabled="" name="time" type="radio"/>
<span className="inline-block px-4 py-2 border border-neutral-800/50 text-neutral-700 text-xs rounded-sm line-through decoration-neutral-700 cursor-not-allowed">21:30</span>
</label>
</div>
</div>

<div className="space-y-6 pt-4">
<div className="relative group">
<input className="w-full bg-transparent border-b border-neutral-800 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder-neutral-600" placeholder="Full Name" type="text"/>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-neutral-800 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder-neutral-600" placeholder="Email Address" type="email"/>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-neutral-800 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder-neutral-600" placeholder="Phone Number" type="tel"/>
</div>
</div>

<div className="pt-6">
<button className="group w-full bg-rust-600 text-white text-xs font-bold uppercase tracking-widest py-4 hover:bg-white hover:text-black transition-all duration-500 relative overflow-hidden" type="submit">
<span className="relative z-10 flex items-center justify-center gap-2">
                                    Confirm Reservation
                                    <img className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" src="https://api.iconify.design/lucide/arrow-right.svg?color=currentColor&amp;strokeWidth=2"/>
</span>
</button>
<p className="text-center text-[10px] text-neutral-600 mt-4">By booking, you agree to our cancellation policy.</p>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-t border-white/5 pt-20 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6 text-white font-medium tracking-tight" href="#">
<div className="w-6 h-6 bg-rust-600 rounded-sm flex items-center justify-center text-[10px] font-serif italic">S</div>
                        SCARLET
                    </a>
<p className="text-neutral-500 text-xs leading-relaxed max-w-xs">
                        A tribute to the warmth of the hearth and the richness of the earth. Est. 2024.
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Discovery</h4>
<ul className="space-y-3 text-xs text-neutral-500">
<li><a className="hover:text-rust-400 transition-colors" href="#">Our Producers</a></li>
<li><a className="hover:text-rust-400 transition-colors" href="#">The Wine List</a></li>
<li><a className="hover:text-rust-400 transition-colors" href="#">Private Events</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Visit Us</h4>
<ul className="space-y-3 text-xs text-neutral-500">
<li>128 West Broadway, NYC</li>
<li>+1 (212) 555-0199</li>
<li>reservations@scarlet.com</li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Hours</h4>
<ul className="space-y-3 text-xs text-neutral-500">
<li className="flex justify-between w-32"><span>Tue - Thu</span> <span className="text-neutral-300">17:00 - 22:00</span></li>
<li className="flex justify-between w-32"><span>Fri - Sat</span> <span className="text-neutral-300">17:00 - 23:00</span></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-neutral-600 uppercase tracking-widest">© 2024 Scarlet Restaurant Group.</p>
<div className="flex gap-4">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><img alt="IG" className="w-4 h-4" src="https://api.iconify.design/lucide/instagram.svg?color=currentColor&amp;strokeWidth=1.5"/></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
