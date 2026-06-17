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
vintage: {
cream: '#F5F2E9',
dark: '#2C2420',
brown: '#5D4037',
red: '#782221',     /* Deep Vintage Red */
redlight: '#9B2C2C',
olive: '#556B2F',
gold: '#C5A059'
}
},
backgroundImage: {
'paper-pattern': "url('https://www.transparenttextures.com/patterns/cream-paper.png')"
}
}
}
}



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<nav className="fixed top-0 w-full z-50 bg-[#F5F2E9]/95 backdrop-blur-sm border-b-2 border-vintage-dark/10">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<i className="w-8 h-8 text-vintage-red stroke-[1.5]" data-lucide="scroll"></i>
<div className="flex flex-col">
<span className="text-2xl font-black font-serif tracking-tighter text-vintage-dark leading-none">Pet<span className="text-vintage-red italic font-normal">Essentials</span></span>
<span className="text-[10px] uppercase tracking-[0.2em] text-vintage-brown font-display">Est. MMXXIII</span>
</div>
</a>
<div className="hidden md:flex items-center gap-12 text-xs font-bold text-vintage-dark tracking-[0.15em] uppercase font-display">
<a className="hover:text-vintage-red transition-colors relative group" href="#">
                    Provisions
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vintage-red transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-vintage-red transition-colors relative group" href="#">
                    Apothecary
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vintage-red transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-vintage-red transition-colors relative group" href="#">
                    Curios
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vintage-red transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-vintage-red transition-colors relative group" href="#">
                    Gazette
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vintage-red transition-all group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center gap-6">
<button className="hover:text-vintage-red transition-colors text-vintage-dark">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<button className="flex items-center gap-2 hover:text-vintage-red transition-colors text-vintage-dark group">
<div className="relative">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
<span className="absolute -bottom-1 -right-1 w-3 h-3 bg-vintage-red rounded-full text-[8px] flex items-center justify-center text-white font-bold border border-vintage-cream">0</span>
</div>
</button>
</div>
</div>
</nav>

<section className="pt-36 pb-24 md:pt-48 md:pb-32 px-6 border-b border-double border-vintage-dark/10">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-12 relative z-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-3 px-4 py-1.5 border border-vintage-red/30 bg-vintage-red/5 text-xs font-bold uppercase tracking-[0.2em] text-vintage-red font-display">
<span className="w-1.5 h-1.5 rotate-45 bg-vintage-red"></span> Artisan Quality
                        <span className="w-1.5 h-1.5 rotate-45 bg-vintage-red"></span>
</div>
<h1 className="text-6xl md:text-8xl font-serif text-vintage-dark leading-[0.95] tracking-tight">
                        Timeless <br/>
<i className="font-normal text-vintage-red">Comfort</i> <span className="text-5xl md:text-7xl align-middle">&amp;</span><br/>
                        Companionship
                    </h1>
<p className="text-lg md:text-xl text-vintage-brown max-w-lg leading-relaxed font-serif italic border-l-2 border-vintage-red pl-6">
                        "Curated heritage goods and organic nutrition for the distinguished modern pet."
                    </p>
</div>
<div className="flex flex-col sm:flex-row gap-5">
<button className="bg-vintage-red hover:bg-vintage-redlight text-vintage-cream px-10 py-4 font-bold tracking-widest uppercase text-xs transition-all shadow-[4px_4px_0px_0px_#2C2420] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#2C2420] border border-vintage-dark">
                        View Catalogue
                    </button>
<button className="bg-transparent hover:bg-vintage-dark/5 text-vintage-dark border border-vintage-dark px-10 py-4 font-bold tracking-widest uppercase text-xs transition-all flex items-center justify-center gap-2">
                        Read Our Manifesto
                    </button>
</div>
<div className="pt-8 flex gap-8 border-t border-vintage-dark/10">
<div className="text-center">
<span className="block text-3xl font-serif text-vintage-red font-bold">100%</span>
<span className="text-[10px] uppercase tracking-widest text-vintage-brown">Organic</span>
</div>
<div className="w-px bg-vintage-dark/10 h-10 self-center"></div>
<div className="text-center">
<span className="block text-3xl font-serif text-vintage-red font-bold">No. 1</span>
<span className="text-[10px] uppercase tracking-widest text-vintage-brown">Rated Quality</span>
</div>
<div className="w-px bg-vintage-dark/10 h-10 self-center"></div>
<div className="text-center">
<span className="block text-3xl font-serif text-vintage-red font-bold">24hr</span>
<span className="text-[10px] uppercase tracking-widest text-vintage-brown">Dispatch</span>
</div>
</div>
</div>
<div className="relative group p-6">

<div className="absolute inset-0 border-4 border-double border-vintage-dark/20 rotate-1"></div>
<div className="absolute inset-0 border border-vintage-dark/80 -rotate-1 bg-vintage-cream z-0"></div>
<img alt="Dog Portrait" className="relative z-10 w-full h-[600px] object-cover vintage-filter border border-vintage-dark/10 shadow-xl" src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute bottom-12 -left-6 z-20">
<div className="relative w-32 h-32 flex items-center justify-center">
<svg className="w-full h-full absolute inset-0 animate-[spin_12s_linear_infinite] opacity-90" viewbox="0 0 100 100">
<path d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" id="curve"></path>
<text className="text-[11px] font-bold uppercase tracking-[0.25em] fill-vintage-red">
<textpath href="#curve">
                                    • Genuine Quality • Est. 2023 •
                                </textpath>
</text>
</svg>
<div className="w-20 h-20 bg-vintage-red rounded-full flex items-center justify-center text-vintage-cream border-4 border-vintage-cream shadow-md">
<i className="w-8 h-8" data-lucide="award"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-vintage-red py-4 overflow-hidden border-y-4 border-double border-vintage-dark text-vintage-cream shadow-inner">
<div className="flex gap-12 whitespace-nowrap animate-marquee items-center justify-center font-display uppercase text-xs tracking-[0.3em]">
<span>Complimentary Shipping over $50</span>
<span className="text-vintage-gold text-lg">✦</span>
<span>Hand-Stitched Toys</span>
<span className="text-vintage-gold text-lg">✦</span>
<span>Veterinarian Formulated</span>
<span className="text-vintage-gold text-lg">✦</span>
<span>Ethically Sourced</span>
<span className="text-vintage-gold text-lg">✦</span>
<span>Complimentary Shipping over $50</span>
<span className="text-vintage-gold text-lg">✦</span>
<span>Hand-Stitched Toys</span>
</div>
</div>

<section className="py-28 px-6 bg-[#EFEDE6]">
<div className="max-w-7xl mx-auto space-y-20">
<div className="text-center space-y-5 max-w-2xl mx-auto">
<span className="text-vintage-red font-bold uppercase tracking-[0.3em] text-xs font-display">The Collection</span>
<h2 className="text-5xl md:text-6xl font-serif text-vintage-dark relative inline-block">
                    Curated Classics
                    <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 border-b-2 border-vintage-red border-double"></span>
</h2>
<p className="text-vintage-brown font-serif italic text-lg pt-4">Selected with discernment for the household.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

<div className="group cursor-pointer">
<div className="relative bg-white p-3 border border-vintage-dark/10 shadow-sm transition-all duration-500 group-hover:shadow-[8px_8px_0px_0px_#782221] group-hover:-translate-y-1">
<div className="relative aspect-[4/5] overflow-hidden border border-vintage-dark/5">
<img alt="Product" className="object-cover w-full h-full vintage-filter transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="mt-4 pb-2 text-center space-y-2">
<h3 className="font-serif text-xl font-bold text-vintage-dark group-hover:text-vintage-red transition-colors">Kibble Mix No. 5</h3>
<div className="flex items-center justify-center gap-3">
<span className="h-px w-8 bg-vintage-dark/20"></span>
<p className="text-sm text-vintage-red font-bold font-display tracking-widest">$24.00</p>
<span className="h-px w-8 bg-vintage-dark/20"></span>
</div>
</div>
<button className="w-full mt-2 bg-vintage-dark text-vintage-cream py-3 text-xs font-bold uppercase tracking-widest hover:bg-vintage-red transition-colors">
                            Add to Basket
                        </button>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-white p-3 border border-vintage-dark/10 shadow-sm transition-all duration-500 group-hover:shadow-[8px_8px_0px_0px_#782221] group-hover:-translate-y-1">
<div className="absolute top-0 right-0 z-10 bg-vintage-red text-white text-[10px] font-bold font-display uppercase tracking-widest px-3 py-1.5 shadow-md">Special Offer</div>
<div className="relative aspect-[4/5] overflow-hidden border border-vintage-dark/5">
<img alt="Product" className="object-cover w-full h-full vintage-filter transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="mt-4 pb-2 text-center space-y-2">
<h3 className="font-serif text-xl font-bold text-vintage-dark group-hover:text-vintage-red transition-colors">Heritage Rope</h3>
<div className="flex items-center justify-center gap-3">
<span className="h-px w-8 bg-vintage-dark/20"></span>
<p className="text-sm text-vintage-brown line-through opacity-50 font-display">$18.00</p>
<p className="text-sm text-vintage-red font-bold font-display tracking-widest">$12.50</p>
<span className="h-px w-8 bg-vintage-dark/20"></span>
</div>
</div>
<button className="w-full mt-2 bg-vintage-dark text-vintage-cream py-3 text-xs font-bold uppercase tracking-widest hover:bg-vintage-red transition-colors">
                            Add to Basket
                        </button>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-white p-3 border border-vintage-dark/10 shadow-sm transition-all duration-500 group-hover:shadow-[8px_8px_0px_0px_#782221] group-hover:-translate-y-1">
<div className="relative aspect-[4/5] overflow-hidden border border-vintage-dark/5">
<img alt="Product" className="object-cover w-full h-full vintage-filter transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="mt-4 pb-2 text-center space-y-2">
<h3 className="font-serif text-xl font-bold text-vintage-dark group-hover:text-vintage-red transition-colors">Velvet Sleeper</h3>
<div className="flex items-center justify-center gap-3">
<span className="h-px w-8 bg-vintage-dark/20"></span>
<p className="text-sm text-vintage-red font-bold font-display tracking-widest">$45.00</p>
<span className="h-px w-8 bg-vintage-dark/20"></span>
</div>
</div>
<button className="w-full mt-2 bg-vintage-dark text-vintage-cream py-3 text-xs font-bold uppercase tracking-widest hover:bg-vintage-red transition-colors">
                            Add to Basket
                        </button>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-white p-3 border border-vintage-dark/10 shadow-sm transition-all duration-500 group-hover:shadow-[8px_8px_0px_0px_#782221] group-hover:-translate-y-1">
<div className="relative aspect-[4/5] overflow-hidden border border-vintage-dark/5">
<img alt="Product" className="object-cover w-full h-full vintage-filter transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="mt-4 pb-2 text-center space-y-2">
<h3 className="font-serif text-xl font-bold text-vintage-dark group-hover:text-vintage-red transition-colors">Salmon Treats</h3>
<div className="flex items-center justify-center gap-3">
<span className="h-px w-8 bg-vintage-dark/20"></span>
<p className="text-sm text-vintage-red font-bold font-display tracking-widest">$10.00</p>
<span className="h-px w-8 bg-vintage-dark/20"></span>
</div>
</div>
<button className="w-full mt-2 bg-vintage-dark text-vintage-cream py-3 text-xs font-bold uppercase tracking-widest hover:bg-vintage-red transition-colors">
                            Add to Basket
                        </button>
</div>
</div>
</div>
<div className="flex justify-center pt-8">
<a className="group flex items-center gap-2 text-vintage-dark font-bold font-display uppercase tracking-widest text-xs border-b-2 border-vintage-red pb-1 hover:text-vintage-red transition-colors" href="#">
                    View Entire Catalog <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-vintage-red border-y-4 border-double border-vintage-dark text-vintage-cream">
<div className="max-w-7xl mx-auto">
<div className="relative border border-vintage-gold/30 p-2 md:p-4">
<div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-vintage-gold"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-vintage-gold"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-vintage-gold"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-vintage-gold"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-vintage-dark/20 p-8 md:p-12">
<div className="order-2 md:order-1 space-y-8">
<div className="flex items-center gap-3">
<span className="h-px w-12 bg-vintage-gold"></span>
<span className="text-vintage-gold font-display font-bold uppercase tracking-[0.2em] text-xs">Limited Edition</span>
</div>
<h2 className="text-4xl md:text-6xl font-serif text-vintage-cream leading-[1.1]">
                            The Autumn <br/> <i className="text-vintage-gold">Essentials</i> Kit
                        </h2>
<p className="text-vintage-cream/80 text-lg font-serif italic max-w-md">
                            "A collection of warming comforts for the season. Includes a wool-blend blanket, organic venison jerky, and a durable tug."
                        </p>
<div className="pt-4">
<button className="bg-vintage-cream text-vintage-red px-10 py-4 font-bold font-display uppercase tracking-widest text-xs transition-colors hover:bg-vintage-gold hover:text-vintage-dark">
                                Shop Bundle - $65
                            </button>
</div>
</div>
<div className="order-1 md:order-2 relative h-80 md:h-[450px]">
<div className="absolute inset-0 border-2 border-vintage-gold/20 translate-x-3 translate-y-3"></div>
<img alt="Dog Running" className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] sepia-[0.3] shadow-lg border border-vintage-gold/10" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 px-6 bg-texture">
<div className="max-w-7xl mx-auto space-y-16">
<div className="flex flex-col items-center text-center space-y-4">
<i className="w-10 h-10 text-vintage-red" data-lucide="feather"></i>
<h2 className="text-5xl font-serif text-vintage-dark">The Gazette</h2>
<div className="h-1 w-20 bg-vintage-red border-y border-vintage-cream"></div>
<p className="text-vintage-brown max-w-lg font-serif italic text-lg">Musings on health, behavior, and the joy of companionship.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<article className="group cursor-pointer">
<div className="relative mb-6 p-2 border border-vintage-dark/10 bg-white shadow-md">
<img alt="Dog Walking" className="w-full aspect-[4/3] object-cover vintage-filter" src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="space-y-3 text-center px-4">
<div className="text-[10px] font-bold font-display uppercase tracking-[0.2em] text-vintage-red">
                            Health • Oct 12
                        </div>
<h3 className="text-2xl font-serif text-vintage-dark leading-tight group-hover:text-vintage-red transition-colors">Recognizing Subtle Signs of Discomfort</h3>
<p className="text-vintage-brown/80 text-sm leading-relaxed line-clamp-3 font-medium">Our pets communicate in whispers. Learn to interpret the quiet signals before they become loud problems.</p>
<span className="inline-block pt-2 text-xs font-bold border-b border-vintage-dark/20 uppercase tracking-widest pb-0.5 group-hover:border-vintage-red transition-colors">Read Article</span>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative mb-6 p-2 border border-vintage-dark/10 bg-white shadow-md">
<img alt="Cat Playing" className="w-full aspect-[4/3] object-cover vintage-filter" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="space-y-3 text-center px-4">
<div className="text-[10px] font-bold font-display uppercase tracking-[0.2em] text-vintage-red">
                            Lifestyle • Oct 08
                        </div>
<h3 className="text-2xl font-serif text-vintage-dark leading-tight group-hover:text-vintage-red transition-colors">Enrichment Ideas for Indoor Cats</h3>
<p className="text-vintage-brown/80 text-sm leading-relaxed line-clamp-3 font-medium">Stimulation need not be expensive. Five methods to keep the hunter inside your feline engaged.</p>
<span className="inline-block pt-2 text-xs font-bold border-b border-vintage-dark/20 uppercase tracking-widest pb-0.5 group-hover:border-vintage-red transition-colors">Read Article</span>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative mb-6 p-2 border border-vintage-dark/10 bg-white shadow-md">
<img alt="Pet Food" className="w-full aspect-[4/3] object-cover vintage-filter" src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="space-y-3 text-center px-4">
<div className="text-[10px] font-bold font-display uppercase tracking-[0.2em] text-vintage-red">
                            Nutrition • Sep 24
                        </div>
<h3 className="text-2xl font-serif text-vintage-dark leading-tight group-hover:text-vintage-red transition-colors">Decoding the Ingredients Label</h3>
<p className="text-vintage-brown/80 text-sm leading-relaxed line-clamp-3 font-medium">What actually goes into that bag? We break down the industry terms and what to avoid.</p>
<span className="inline-block pt-2 text-xs font-bold border-b border-vintage-dark/20 uppercase tracking-widest pb-0.5 group-hover:border-vintage-red transition-colors">Read Article</span>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-vintage-dark/10 bg-[#E8E4D9]">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl font-serif text-vintage-dark text-center mb-16 italic">Notes of Appreciation</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-vintage-cream p-10 border border-vintage-dark/10 shadow-[6px_6px_0px_0px_#2C2420] relative">
<i className="absolute top-6 left-6 w-8 h-8 text-vintage-dark/10 rotate-180" data-lucide="quote"></i>
<div className="flex gap-1 mb-6 justify-center text-vintage-gold">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-vintage-dark font-serif text-lg text-center leading-relaxed mb-8">
                        "Finally, toys that don't look like neon plastic garbage. Beautifully made, durable, and they fit my home aesthetic."
                    </p>
<div className="text-center border-t border-vintage-dark/10 pt-4">
<h4 className="text-xs font-bold font-display uppercase tracking-widest text-vintage-red">Sarah M.</h4>
<p className="text-[10px] text-vintage-brown uppercase tracking-wide mt-1">Verified Patron</p>
</div>
</div>

<div className="bg-vintage-cream p-10 border border-vintage-dark/10 shadow-[6px_6px_0px_0px_#2C2420] relative">
<i className="absolute top-6 left-6 w-8 h-8 text-vintage-dark/10 rotate-180" data-lucide="quote"></i>
<div className="flex gap-1 mb-6 justify-center text-vintage-gold">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-vintage-dark font-serif text-lg text-center leading-relaxed mb-8">
                        "The organic treats have completely changed my cat's digestion. I am a customer for life. Splendid quality."
                    </p>
<div className="text-center border-t border-vintage-dark/10 pt-4">
<h4 className="text-xs font-bold font-display uppercase tracking-widest text-vintage-red">James L.</h4>
<p className="text-[10px] text-vintage-brown uppercase tracking-wide mt-1">Verified Patron</p>
</div>
</div>

<div className="bg-vintage-cream p-10 border border-vintage-dark/10 shadow-[6px_6px_0px_0px_#2C2420] relative">
<i className="absolute top-6 left-6 w-8 h-8 text-vintage-dark/10 rotate-180" data-lucide="quote"></i>
<div className="flex gap-1 mb-6 justify-center text-vintage-gold">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-vintage-dark font-serif text-lg text-center leading-relaxed mb-8">
                        "The packaging was entirely plastic-free, wrapped in paper, which I adore. The harness fits perfectly."
                    </p>
<div className="text-center border-t border-vintage-dark/10 pt-4">
<h4 className="text-xs font-bold font-display uppercase tracking-widest text-vintage-red">Emily R.</h4>
<p className="text-[10px] text-vintage-brown uppercase tracking-wide mt-1">Verified Patron</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-vintage-dark text-vintage-cream pt-24 pb-12 px-6 border-t-[8px] border-vintage-red">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
<div className="space-y-6">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-vintage-red" data-lucide="scroll"></i>
<span className="text-2xl font-bold font-serif tracking-tight text-white block">Pet<span className="text-vintage-red italic font-normal">Essentials.</span></span>
</div>
<p className="text-sm leading-relaxed max-w-xs text-vintage-cream/60 font-serif">
                    Purveyors of fine goods for the four-legged. Established in the year 2023.
                </p>
<div className="flex gap-4 pt-4">
<a className="w-10 h-10 border border-vintage-cream/10 flex items-center justify-center hover:bg-vintage-red hover:border-vintage-red transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="w-10 h-10 border border-vintage-cream/10 flex items-center justify-center hover:bg-vintage-red hover:border-vintage-red transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-10 h-10 border border-vintage-cream/10 flex items-center justify-center hover:bg-vintage-red hover:border-vintage-red transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
</div>
</div>
<div>
<h4 className="font-display font-bold uppercase tracking-widest text-xs mb-8 text-vintage-gold">Discovery</h4>
<ul className="space-y-4 text-sm font-serif italic text-vintage-cream/80">
<li><a className="hover:text-vintage-red transition-colors" href="#">Our Heritage</a></li>
<li><a className="hover:text-vintage-red transition-colors" href="#">Sustainability Efforts</a></li>
<li><a className="hover:text-vintage-red transition-colors" href="#">Opportunities</a></li>
<li><a className="hover:text-vintage-red transition-colors" href="#">The Gazette</a></li>
</ul>
</div>
<div>
<h4 className="font-display font-bold uppercase tracking-widest text-xs mb-8 text-vintage-gold">Assistance</h4>
<ul className="space-y-4 text-sm font-serif italic text-vintage-cream/80">
<li><a className="hover:text-vintage-red transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-vintage-red transition-colors" href="#">Sizing Guide</a></li>
<li><a className="hover:text-vintage-red transition-colors" href="#">Frequently Asked</a></li>
<li><a className="hover:text-vintage-red transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="font-display font-bold uppercase tracking-widest text-xs mb-2 text-vintage-gold">Correspondence</h4>
<p className="text-sm text-vintage-cream/60 font-serif">Join our registry for exclusive offers and news.</p>
<form className="flex flex-col gap-3">
<input className="bg-transparent border border-vintage-cream/20 text-vintage-cream text-sm px-4 py-3 w-full focus:border-vintage-red outline-none placeholder:text-vintage-cream/20 font-serif italic" placeholder="Email Address" type="email"/>
<button className="bg-vintage-cream text-vintage-dark hover:bg-vintage-red hover:text-white px-4 py-3 text-xs font-bold font-display uppercase tracking-widest transition-colors">
                        Subscribe
                    </button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-vintage-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-vintage-cream/40 font-display">
<p>© MMXXIII PetEssentials. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</footer>


    </>
  );
}
