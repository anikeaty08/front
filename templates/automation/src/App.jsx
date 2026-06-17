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
ink: '#0A2A1F',
paper: '#F8F4E8',
acid: '#D2E823',
},
fontFamily: {
display: ['Dela Gothic One', 'cursive'],
sans: ['Space Grotesk', 'sans-serif'],
},
boxShadow: {
'hard': '4px 4px 0px 0px #0A2A1F',
'hard-sm': '2px 2px 0px 0px #0A2A1F',
'hard-xl': '8px 8px 0px 0px #0A2A1F',
},
animation: {
'marquee': 'marquee 25s linear infinite',
'float': 'float 4s ease-in-out infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        lucide.createIcons();
    
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
      

<div className="bg-ink text-paper overflow-hidden py-3 border-b-2 border-ink">
<div className="flex animate-marquee whitespace-nowrap">
<div className="flex items-center gap-12 mx-4 font-display uppercase text-sm tracking-widest">
<span>✸ Don't buy blind</span>
<span>✸ 100% Authentic Juice</span>
<span>✸ Free Shipping $50+</span>
<span>✸ Decants, not debts</span>
<span>✸ Smell Expensive for cheap</span>
<span>✸ Don't buy blind</span>
<span>✸ 100% Authentic Juice</span>
<span>✸ Free Shipping $50+</span>
<span>✸ Decants, not debts</span>
<span>✸ Smell Expensive for cheap</span>
</div>
</div>
</div>

<nav className="sticky top-4 z-50 px-4 md:px-8">
<div className="bg-paper/80 backdrop-blur-md border-2 border-ink rounded-xl shadow-hard flex justify-between items-center p-4">

<button className="md:hidden p-2 hover:bg-acid rounded-lg border border-transparent hover:border-ink transition-all">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>

<a className="text-2xl md:text-3xl font-display tracking-tighter flex items-center gap-1" href="#">
                ARO<span className="text-acid text-shadow-sm" style={{WebkitTextStroke: '1px #0A2A1F'}}>VELL</span>
</a>

<div className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-tight">
<a className="hover:text-acid hover:bg-ink px-3 py-1 rounded transition-colors" href="#">NEW DROPS</a>
<a className="hover:text-acid hover:bg-ink px-3 py-1 rounded transition-colors" href="#">BESTSELLERS</a>
<a className="hover:text-acid hover:bg-ink px-3 py-1 rounded transition-colors" href="#">BRANDS</a>
<a className="hover:text-acid hover:bg-ink px-3 py-1 rounded transition-colors" href="#">BUNDLES</a>
</div>

<div className="flex items-center gap-3">
<button className="hidden md:block hover:bg-acid rounded-lg p-2 border border-transparent hover:border-ink transition-all">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="search"></i>
</button>
<button className="bg-ink text-acid px-4 py-2 rounded-lg font-display text-sm border-2 border-ink hover:bg-acid hover:text-ink transition-colors flex items-center gap-2">
                    CART (0)
                </button>
</div>
</div>
</nav>

<header className="px-4 md:px-8 pt-12 pb-20 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 flex flex-col items-start gap-8 z-10">
<div className="inline-flex items-center gap-2 border-2 border-ink px-4 py-2 rounded-full bg-acid shadow-hard-sm rotate-[-2deg]">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="sparkles"></i>
<span className="font-bold text-xs uppercase tracking-wider">The Anti-Full Bottle Club</span>
</div>
<h1 className="font-display text-6xl md:text-8xl leading-[0.9] tracking-tighter text-ink">
                    SMELL LIKE <br/>
<span className="relative">
                        A MILLION
                        <svg className="absolute -bottom-4 left-0 w-full" fill="none" viewbox="0 0 200 20">
<path d="M2 15Q100 2 198 12" stroke="#D2E823" strokeLinecap="round" strokeWidth="8"></path>
</svg>
</span><br/>
                    BUCKS.
                </h1>
<p className="font-medium text-lg md:text-xl max-w-lg leading-relaxed opacity-90">
                    Authentic designer &amp; niche perfume decants. Try the 5ml before you commit to the $300 mistake.
                </p>
<div className="flex flex-wrap gap-4 w-full">
<a className="flex-1 md:flex-none text-center bg-ink text-acid border-2 border-ink px-8 py-4 rounded-xl font-display text-lg tracking-wide shadow-hard hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all" href="#">
                        SHOP THE DROP
                    </a>
<a className="flex-1 md:flex-none text-center bg-paper text-ink border-2 border-ink px-8 py-4 rounded-xl font-display text-lg tracking-wide shadow-hard hover:bg-acid hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all" href="#">
                        TAKE QUIZ
                    </a>
</div>
<div className="flex items-center gap-4 text-sm font-semibold mt-4">
<div className="flex -space-x-4">
<div className="w-10 h-10 rounded-full border-2 border-paper bg-gray-300"></div>
<div className="w-10 h-10 rounded-full border-2 border-paper bg-gray-400"></div>
<div className="w-10 h-10 rounded-full border-2 border-paper bg-gray-500"></div>
</div>
<p>Trust Pilot <span className="bg-acid px-1 text-ink">4.9/5</span> from 2k+ sniffers</p>
</div>
</div>

<div className="lg:col-span-5 relative mt-10 lg:mt-0">

<div className="absolute top-0 right-0 w-full h-full bg-acid rounded-[2rem] border-2 border-ink rotate-6 z-0"></div>

<div className="absolute -bottom-8 -left-8 z-20 animate-float bg-paper border-2 border-ink p-4 rounded-xl shadow-hard">
<div className="flex items-center gap-3">
<div className="bg-green-100 p-2 rounded-lg border border-ink">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="package-check"></i>
</div>
<div>
<div className="font-display text-sm">Monthly Bundle</div>
<div className="text-xs font-mono">Ready to ship</div>
</div>
</div>
</div>

<div className="relative bg-ink rounded-[2rem] border-2 border-ink overflow-hidden z-10 aspect-[4/5] shadow-hard-xl group">

<div className="grid grid-cols-2 h-full w-full">
<img className="w-full h-full object-cover border-r-2 border-b-2 border-ink opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1627933234009-0f5ce6eb4e3a?w=800&amp;q=80"/>
<img className="w-full h-full object-cover border-b-2 border-ink opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img className="w-full h-full object-cover border-r-2 border-ink opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1598634222670-87c5f558119c?w=800&amp;q=80"/>
</div>

<div className="absolute bottom-0 left-0 w-full p-6 bg-ink/90 border-t-2 border-ink backdrop-blur-sm">
<span className="bg-acid text-ink text-xs font-bold px-2 py-1 rounded-md mb-2 inline-block">500+ SCENTS</span>
<h3 className="text-paper font-display text-2xl">THE ARCHIVE</h3>
<p className="text-paper/80 font-mono text-sm">Curated Designer &amp; Niche Collection</p>
</div>
</div>
</div>
</div>
</header>

<div className="border-y-2 border-ink bg-acid py-6 overflow-hidden rotate-1 scale-105 transform origin-left">
<div className="animate-marquee whitespace-nowrap flex gap-12 text-4xl font-display text-ink items-center">
<span>NO MORE BORING SCENTS</span>
<i className="w-8 h-8 fill-ink" data-lucide="zap"></i>
<span className="text-outline">NO MORE BORING SCENTS</span>
<i className="w-8 h-8 fill-transparent stroke-ink" data-lucide="zap"></i>
<span>NO MORE BORING SCENTS</span>
<i className="w-8 h-8 fill-ink" data-lucide="zap"></i>
<span className="text-outline">NO MORE BORING SCENTS</span>
<i className="w-8 h-8 fill-transparent stroke-ink" data-lucide="zap"></i>
<span>NO MORE BORING SCENTS</span>
<i className="w-8 h-8 fill-ink" data-lucide="zap"></i>
<span className="text-outline">NO MORE BORING SCENTS</span>
</div>
</div>

<section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<h2 className="font-display text-4xl md:text-5xl tracking-tighter text-ink uppercase">Pick Your<br/>Poison</h2>
<a className="hidden md:flex items-center gap-2 font-bold hover:text-acid hover:bg-ink px-4 py-2 rounded-lg border-2 border-transparent hover:border-transparent transition-all" href="#">
                View All Collections <i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 relative group rounded-2xl border-2 border-ink overflow-hidden shadow-hard hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-ink">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 flex flex-col justify-end p-8">
<h3 className="text-5xl font-display text-acid mb-2 tracking-tighter">MEN'S<br/>ESSENTIALS</h3>
<div className="flex justify-between items-end">
<p className="text-paper max-w-xs font-medium">The heavy hitters. Compliment getters. The "Who is he?" vibes.</p>
<button className="bg-paper text-ink rounded-full p-3 hover:bg-acid border-2 border-transparent hover:border-ink transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>

<div className="relative group rounded-2xl border-2 border-ink overflow-hidden shadow-hard hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-paper">
<div className="absolute inset-0 bg-[radial-gradient(#D2E823_2px,transparent_2px)] [background-size:16px_16px] opacity-30"></div>
<div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
<div className="w-16 h-16 bg-acid rounded-full flex items-center justify-center border-2 border-ink mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="flower-2"></i>
</div>
<h3 className="text-2xl font-display tracking-tight text-ink">FOR HER</h3>
<p className="text-sm opacity-60 font-semibold mt-1">Floral, Sweet, &amp; Sexy</p>
</div>
</div>

<div className="relative group rounded-2xl border-2 border-ink overflow-hidden shadow-hard hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-acid">
<div className="absolute top-4 right-4">
<span className="bg-ink text-acid text-[10px] font-bold px-2 py-1 rounded">HOT</span>
</div>
<div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
<div className="w-16 h-16 bg-paper rounded-full flex items-center justify-center border-2 border-ink mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="flask-conical"></i>
</div>
<h3 className="text-2xl font-display tracking-tight text-ink">DISCOVERY SETS</h3>
<p className="text-sm opacity-60 font-semibold mt-1">5 Scents for $40</p>
</div>
</div>
</div>
</section>

<section className="bg-ink text-paper py-20 border-y-2 border-ink">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
<div className="space-y-4">
<i className="w-12 h-12 text-acid stroke-[1.5]" data-lucide="shield-check"></i>
<h3 className="font-display text-2xl text-acid">100% LEGIT</h3>
<p className="opacity-80 leading-relaxed">We extract directly from the original bottle. No watering down, no fakes. We hate fakes.</p>
</div>
<div className="space-y-4">
<i className="w-12 h-12 text-acid stroke-[1.5]" data-lucide="package"></i>
<h3 className="font-display text-2xl text-acid">POCKET SIZED</h3>
<p className="opacity-80 leading-relaxed">Our 5ml and 10ml atomizers fit in your jeans, purse, or gym bag. Freshness on tap.</p>
</div>
<div className="space-y-4">
<i className="w-12 h-12 text-acid stroke-[1.5]" data-lucide="piggy-bank"></i>
<h3 className="font-display text-2xl text-acid">SMART MONEY</h3>
<p className="opacity-80 leading-relaxed">Why buy one $200 bottle when you can have 10 different scents for the same price?</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-b-2 border-ink">
<div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 flex items-center justify-between">
<h2 className="font-display text-4xl md:text-5xl tracking-tighter">FRESH JUICE</h2>
<div className="flex gap-2">
<button className="w-10 h-10 border-2 border-ink rounded-lg flex items-center justify-center hover:bg-acid transition-colors"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<button className="w-10 h-10 border-2 border-ink rounded-lg flex items-center justify-center hover:bg-acid transition-colors"><i className="w-5 h-5" data-lucide="arrow-right"></i></button>
</div>
</div>

<div className="flex overflow-x-auto gap-8 px-4 md:px-8 pb-12 no-scrollbar snap-x snap-mandatory max-w-[100vw]">

<div className="min-w-[280px] md:min-w-[320px] snap-center group">
<div className="relative bg-white border-2 border-ink rounded-2xl aspect-square mb-4 overflow-hidden">
<div className="absolute top-3 left-3 z-10 bg-acid border border-ink px-2 py-0.5 text-xs font-bold rounded">BESTSELLER</div>
<img className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&amp;q=80"/>
<button className="absolute bottom-3 right-3 bg-ink text-acid p-3 rounded-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
<i className="w-6 h-6 stroke-[2]" data-lucide="plus"></i>
</button>
</div>
<h3 className="font-display text-xl leading-none mb-1">Dior Sauvage Elixir</h3>
<p className="text-sm font-medium opacity-60 mb-3">Spicy, Wood, Lavender</p>
<div className="flex items-center gap-2">
<span className="font-bold text-lg bg-acid/30 px-2 rounded">$18.00</span>
<span className="text-xs font-bold line-through opacity-40">$24.00</span>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center group">
<div className="relative bg-white border-2 border-ink rounded-2xl aspect-square mb-4 overflow-hidden">
<img className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 bg-ink text-acid p-3 rounded-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
<i className="w-6 h-6 stroke-[2]" data-lucide="plus"></i>
</button>
</div>
<h3 className="font-display text-xl leading-none mb-1">YSL Y Eau de Parfum</h3>
<p className="text-sm font-medium opacity-60 mb-3">Fresh, Sage, Apple</p>
<div className="flex items-center gap-2">
<span className="font-bold text-lg bg-acid/30 px-2 rounded">$14.50</span>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center group">
<div className="relative bg-white border-2 border-ink rounded-2xl aspect-square mb-4 overflow-hidden">
<div className="absolute top-3 left-3 z-10 bg-ink text-paper border border-paper px-2 py-0.5 text-xs font-bold rounded">SOLD OUT</div>
<img className="w-full h-full object-contain p-6 opacity-50 grayscale" src="https://images.unsplash.com/photo-1637645380612-bfd37805442e?w=800&amp;q=80"/>
</div>
<h3 className="font-display text-xl leading-none mb-1">Tom Ford Lost Cherry</h3>
<p className="text-sm font-medium opacity-60 mb-3">Cherry, Almond, Liqueur</p>
<div className="flex items-center gap-2">
<span className="font-bold text-lg bg-acid/30 px-2 rounded">$22.00</span>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center group">
<div className="relative bg-white border-2 border-ink rounded-2xl aspect-square mb-4 overflow-hidden">
<img className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1705899844877-81bb0a0665c1?w=800&amp;q=80"/>
<button className="absolute bottom-3 right-3 bg-ink text-acid p-3 rounded-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
<i className="w-6 h-6 stroke-[2]" data-lucide="plus"></i>
</button>
</div>
<h3 className="font-display text-xl leading-none mb-1">Bleu de Chanel</h3>
<p className="text-sm font-medium opacity-60 mb-3">Citrus, Amber, Wood</p>
<div className="flex items-center gap-2">
<span className="font-bold text-lg bg-acid/30 px-2 rounded">$16.00</span>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center flex flex-col justify-center items-center border-2 border-ink border-dashed rounded-2xl aspect-square hover:bg-white transition-colors cursor-pointer group">
<div className="w-16 h-16 bg-acid rounded-full flex items-center justify-center border-2 border-ink mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 stroke-[2]" data-lucide="arrow-right"></i>
</div>
<h3 className="font-display text-xl">VIEW ALL</h3>
</div>
</div>
</section>

<section className="py-24 bg-paper relative overflow-hidden">

<div className="absolute -right-10 top-20 w-40 h-40 bg-acid rounded-full border-2 border-ink opacity-20"></div>
<div className="absolute -left-10 bottom-20 w-20 h-20 bg-ink rounded-full opacity-10"></div>
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="text-center mb-16">
<div className="inline-block bg-ink text-acid font-bold text-xs uppercase px-3 py-1 rounded-full mb-4 border border-ink">Real Talk</div>
<h2 className="font-display text-4xl md:text-5xl tracking-tighter text-ink">STREET CRED</h2>
<p className="mt-4 text-lg opacity-70">Don't just take our word for it.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border-2 border-ink shadow-hard hover:translate-y-[-4px] transition-transform duration-300">
<div className="flex gap-1 mb-4 text-acid">
<i className="w-5 h-5 fill-acid stroke-ink" data-lucide="star"></i>
<i className="w-5 h-5 fill-acid stroke-ink" data-lucide="star"></i>
<i className="w-5 h-5 fill-acid stroke-ink" data-lucide="star"></i>
<i className="w-5 h-5 fill-acid stroke-ink" data-lucide="star"></i>
<i className="w-5 h-5 fill-acid stroke-ink" data-lucide="star"></i>
</div>
<p className="font-medium text-lg leading-relaxed mb-6">"Finally a way to try Creed without selling my kidney. The packaging is sick and shipping was faster than Amazon."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-ink rounded-full flex items-center justify-center text-paper font-display text-sm">JD</div>
<div>
<div className="font-bold text-sm">Jason D.</div>
<div className="text-xs opacity-50 font-bold uppercase tracking-wide">Verified Buyer</div>
</div>
</div>
</div>

<div className="bg-ink text-paper p-8 rounded-2xl border-2 border-ink shadow-hard md:-rotate-2 hover:rotate-0 transition-transform duration-300 z-10">
<div className="flex gap-1 mb-4 text-acid">
<i className="w-5 h-5 fill-acid stroke-acid" data-lucide="star"></i>
<i className="w-5 h-5 fill-acid stroke-acid" data-lucide="star"></i>
<i className="w-5 h-5 fill-acid stroke-acid" data-lucide="star"></i>
<i className="w-5 h-5 fill-acid stroke-acid" data-lucide="star"></i>
<i className="w-5 h-5 fill-acid stroke-acid" data-lucide="star"></i>
</div>
<p className="font-medium text-lg leading-relaxed mb-6">"I was skeptical about decants but Arovell is the real deal. The atomizers are high quality and don't leak. 10/10."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-acid rounded-full flex items-center justify-center text-ink font-display text-sm border border-paper">SC</div>
<div>
<div className="font-bold text-sm">Sarah C.</div>
<div className="text-xs opacity-50 font-bold uppercase tracking-wide">Verified Buyer</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border-2 border-ink shadow-hard hover:translate-y-[-4px] transition-transform duration-300">
<div className="flex gap-1 mb-4 text-acid">
<i className="w-5 h-5 fill-acid stroke-ink" data-lucide="star"></i>
<i className="w-5 h-5 fill-acid stroke-ink" data-lucide="star"></i>
<i className="w-5 h-5 fill-acid stroke-ink" data-lucide="star"></i>
<i className="w-5 h-5 fill-acid stroke-ink" data-lucide="star"></i>
<i className="w-5 h-5 fill-acid stroke-ink" data-lucide="star"></i>
</div>
<p className="font-medium text-lg leading-relaxed mb-6">"Got the discovery set for my boyfriend. He loved 3 out of 5 so we bought the larger decants. Super fun experience."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-ink font-display text-sm border-2 border-ink">MK</div>
<div>
<div className="font-bold text-sm">Mike K.</div>
<div className="text-xs opacity-50 font-bold uppercase tracking-wide">Verified Buyer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
<div className="bg-acid rounded-[2rem] border-2 border-ink p-8 md:p-16 text-center relative overflow-hidden shadow-hard-xl">

<svg className="absolute top-0 left-0 opacity-20 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 0 L100 100 M100 0 L0 100" stroke="#0A2A1F" strokeWidth="0.5"></path>
</svg>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="font-display text-4xl md:text-6xl text-ink mb-6 tracking-tighter">DON'T BE STINKY.</h2>
<p className="text-ink text-lg font-medium mb-8">Join the club. Get 15% off your first decant and find out when we drop the rare stuff.</p>
<form className="flex flex-col md:flex-row gap-4">
<input className="flex-1 bg-paper border-2 border-ink rounded-xl px-6 py-4 font-bold text-ink placeholder:text-ink/40 outline-none focus:shadow-hard transition-all" placeholder="your@email.com" type="email"/>
<button className="bg-ink text-acid font-display text-xl px-8 py-4 rounded-xl border-2 border-ink hover:translate-x-1 hover:translate-y-1 transition-transform" type="button">
                        JOIN
                    </button>
</form>
<p className="mt-4 text-xs font-bold opacity-60">No spam, just scents.</p>
</div>
</div>
</section>

<footer className="bg-ink text-paper pt-16 pb-8 border-t-2 border-ink">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-3xl font-display tracking-tighter flex items-center gap-1 mb-4" href="#">
                        ARO<span className="text-transparent text-outline-acid">VELL</span>
</a>
<p className="text-sm opacity-60 max-w-[200px]">
                        Making niche fragrance accessible to everyone. Except your ex.
                    </p>
</div>
<div>
<h4 className="font-display text-lg text-acid mb-4">SHOP</h4>
<ul className="space-y-2 text-sm font-medium opacity-80">
<li><a className="hover:text-acid" href="#">New Arrivals</a></li>
<li><a className="hover:text-acid" href="#">Men's Cologne</a></li>
<li><a className="hover:text-acid" href="#">Women's Perfume</a></li>
<li><a className="hover:text-acid" href="#">Unisex</a></li>
<li><a className="hover:text-acid" href="#">Discovery Sets</a></li>
</ul>
</div>
<div>
<h4 className="font-display text-lg text-acid mb-4">SUPPORT</h4>
<ul className="space-y-2 text-sm font-medium opacity-80">
<li><a className="hover:text-acid" href="#">Track Order</a></li>
<li><a className="hover:text-acid" href="#">Shipping Info</a></li>
<li><a className="hover:text-acid" href="#">Returns</a></li>
<li><a className="hover:text-acid" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-display text-lg text-acid mb-4">SOCIALS</h4>
<div className="flex gap-3">
<a className="bg-paper text-ink p-2 rounded-lg hover:bg-acid transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="bg-paper text-ink p-2 rounded-lg hover:bg-acid transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="bg-paper text-ink p-2 rounded-lg hover:bg-acid transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-paper/20 text-xs font-bold opacity-40">
<p>© 2024 Arovell Scents. Est. 2024.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a href="#">Privacy</a>
<a href="#">Terms</a>
<a href="#">Sitemap</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
