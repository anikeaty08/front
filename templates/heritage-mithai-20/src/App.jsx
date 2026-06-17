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
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
50: '#fff1f2',
100: '#ffe4e6',
800: '#9f1239', // Rose Red
900: '#881337', // Deep Heritage Red
950: '#4c0519',
},
cream: '#FDFBF7',
gold: '#D4AF37',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
wide: '0.02em',
widest: '0.1em',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'marquee': 'marquee 25s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="bg-brand-950 text-white overflow-hidden py-2.5 relative z-50">
<div className="flex animate-marquee whitespace-nowrap">
<span className="mx-8 text-xs font-medium tracking-widest uppercase flex items-center gap-2"><iconify-icon icon="solar:star-linear"></iconify-icon> Festive Season: Pre-order Diwali Hampers</span>
<span className="mx-8 text-xs font-medium tracking-widest uppercase flex items-center gap-2"><iconify-icon icon="solar:star-linear"></iconify-icon> Worldwide Shipping Available</span>
<span className="mx-8 text-xs font-medium tracking-widest uppercase flex items-center gap-2"><iconify-icon icon="solar:star-linear"></iconify-icon> Pure Ghee Preparations Only</span>
<span className="mx-8 text-xs font-medium tracking-widest uppercase flex items-center gap-2"><iconify-icon icon="solar:star-linear"></iconify-icon> Festive Season: Pre-order Diwali Hampers</span>
<span className="mx-8 text-xs font-medium tracking-widest uppercase flex items-center gap-2"><iconify-icon icon="solar:star-linear"></iconify-icon> Worldwide Shipping Available</span>
<span className="mx-8 text-xs font-medium tracking-widest uppercase flex items-center gap-2"><iconify-icon icon="solar:star-linear"></iconify-icon> Pure Ghee Preparations Only</span>
</div>
</div>

<nav className="sticky top-0 z-40 bg-cream/90 backdrop-blur-xl border-b border-stone-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex flex-col group" href="#">
<span className="font-serif text-2xl text-brand-950 tracking-tighter leading-none group-hover:opacity-80 transition-opacity">Balaji Hukmichand</span>
<span className="text-[9px] uppercase tracking-[0.25em] text-brand-800/60 font-semibold mt-0.5">Since 1985</span>
</a>
</div>

<div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-xs font-medium text-stone-900 uppercase tracking-widest hover:text-brand-800 transition-colors" href="#">Mithai</a>
<a className="text-xs font-medium text-stone-500 uppercase tracking-widest hover:text-brand-800 transition-colors" href="#">Namkeen</a>
<a className="text-xs font-medium text-stone-500 uppercase tracking-widest hover:text-brand-800 transition-colors" href="#">Bakery</a>
<a className="text-xs font-medium text-stone-500 uppercase tracking-widest hover:text-brand-800 transition-colors" href="#">Gifting</a>
</div>
<div className="flex items-center gap-6">
<button className="text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button className="relative text-stone-900 hover:text-brand-800 transition-colors group">
<iconify-icon icon="solar:bag-3-linear" width="20"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-brand-900 text-white text-[9px] flex items-center justify-center rounded-full">2</span>
</button>
<button className="lg:hidden text-stone-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center overflow-hidden">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-50 rounded-full blur-[120px] -z-10 opacity-60 translate-x-1/3 -translate-y-1/4"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-stone-200 rounded-full shadow-sm">
<iconify-icon className="text-brand-800" icon="solar:medal-star-linear"></iconify-icon>
<span className="text-xs font-semibold text-stone-600 tracking-wide uppercase">Award Winning Taste</span>
</div>
<h1 className="font-serif text-6xl lg:text-8xl text-stone-900 leading-[0.95] tracking-tighter">
                    Taste the <br/>
<span className="text-brand-900 italic relative pr-4">
                        Tradition
                        <img alt="Decoration" className="hidden xl:block absolute -right-20 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl animate-float" src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</span>
</h1>
<p className="text-lg text-stone-500 font-light leading-relaxed max-w-lg">
                    Crafted with 100% pure desi ghee and time-honored recipes. Every bite is a journey through the royal kitchens of India.
                </p>
<div className="flex flex-wrap gap-4 pt-2">
<button className="bg-stone-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-brand-900 transition-all shadow-lg shadow-stone-900/20 flex items-center gap-3 group">
                        Order Now
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</button>
<button className="px-8 py-4 rounded-full text-sm font-medium text-stone-900 hover:bg-white transition-all border border-stone-200 bg-transparent">
                        View Menu
                    </button>
</div>
<div className="flex items-center gap-8 pt-8">
<div className="flex -space-x-4">
<img alt="" className="w-12 h-12 rounded-full border-2 border-cream object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-12 h-12 rounded-full border-2 border-cream object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-12 h-12 rounded-full border-2 border-cream object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="w-12 h-12 rounded-full border-2 border-cream bg-stone-900 text-white flex items-center justify-center text-xs font-bold">+2k</div>
</div>
<div>
<div className="flex text-brand-500 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xs text-stone-500 font-medium mt-1">Trusted by 20,000+ families</p>
</div>
</div>
</div>

<div className="relative h-full min-h-[500px] flex items-center justify-center">
<div className="relative w-full max-w-lg aspect-[4/5]">

<img alt="Samosa and Sweets" className="w-full h-full object-cover rounded-[2rem] shadow-2xl shadow-stone-400/30 relative z-10" src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute -left-12 bottom-20 z-20 bg-white p-4 rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100 max-w-[200px] animate-float" style={{animationDelay: '1s'}}>
<div className="flex gap-3 items-center">
<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:fire-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-serif text-stone-900 leading-tight">Freshly<br/>Made</p>
</div>
</div>
</div>

<div className="absolute -right-8 top-20 z-20 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100 animate-float">
<p className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold mb-1">Today's Special</p>
<div className="flex items-center gap-3">
<img alt="Laddu" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1589948107931-13359ce971b3?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<p className="font-serif text-sm text-stone-900">Motichoor Laddu</p>
<p className="text-xs text-brand-900 font-bold">₹480/kg</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-y border-stone-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
<a className="group text-center" href="#">
<div className="w-full aspect-square rounded-full overflow-hidden mb-4 border border-stone-100 relative">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
<img alt="Sweets" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1599321955726-90471f6456fa?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-sm font-medium text-stone-900 tracking-tight group-hover:text-brand-900">Premium Sweets</span>
</a>
<a className="group text-center" href="#">
<div className="w-full aspect-square rounded-full overflow-hidden mb-4 border border-stone-100 relative">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
<img alt="Savouries" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1631404060867-27b0034a7495?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-sm font-medium text-stone-900 tracking-tight group-hover:text-brand-900">Savouries</span>
</a>
<a className="group text-center" href="#">
<div className="w-full aspect-square rounded-full overflow-hidden mb-4 border border-stone-100 relative">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
<img alt="Bakery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-sm font-medium text-stone-900 tracking-tight group-hover:text-brand-900">Bakery</span>
</a>
<a className="group text-center" href="#">
<div className="w-full aspect-square rounded-full overflow-hidden mb-4 border border-stone-100 relative">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
<img alt="Dry Fruits" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1596450514735-3733ee35606d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-sm font-medium text-stone-900 tracking-tight group-hover:text-brand-900">Dry Fruits</span>
</a>
<a className="group text-center" href="#">
<div className="w-full aspect-square rounded-full overflow-hidden mb-4 border border-stone-100 relative">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
<img alt="Gifting" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-sm font-medium text-stone-900 tracking-tight group-hover:text-brand-900">Gifting</span>
</a>
<a className="group text-center" href="#">
<div className="w-full aspect-square rounded-full overflow-hidden mb-4 border border-stone-100 relative">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
<img alt="Cakes" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-sm font-medium text-stone-900 tracking-tight group-hover:text-brand-900">Custom Cakes</span>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-cream">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="font-serif text-4xl lg:text-5xl text-stone-900 tracking-tighter mb-4">Curated Delicacies</h2>
<div className="flex gap-4 text-sm font-medium">
<button className="text-stone-900 border-b-2 border-stone-900 pb-1">All</button>
<button className="text-stone-400 hover:text-stone-900 transition-colors pb-1">Bestsellers</button>
<button className="text-stone-400 hover:text-stone-900 transition-colors pb-1">Sugar Free</button>
<button className="text-stone-400 hover:text-stone-900 transition-colors pb-1">Festive</button>
</div>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-brand-900 hover:text-brand-800 transition-colors group" href="#">
                    View Full Catalogue 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[400px]">

<div className="lg:col-span-2 lg:row-span-1 group relative rounded-3xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
<img alt="Kaju Katli" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1599321955726-90471f6456fa?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 left-6 z-20">
<span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20">Bestseller</span>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div>
<h3 className="text-3xl font-serif text-white mb-2">Silver Kaju Katli</h3>
<p className="text-stone-200 text-sm max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Premium cashews ground to perfection, adorned with pure silver varq. A symbol of royalty.</p>
</div>
<button className="w-12 h-12 bg-white text-stone-900 rounded-full flex items-center justify-center hover:bg-brand-900 hover:text-white transition-colors">
<iconify-icon icon="solar:bag-plus-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-white cursor-pointer border border-stone-100">
<div className="absolute top-4 left-4 z-10">
<span className="bg-brand-900 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">Hot</span>
</div>
<div className="h-[70%] overflow-hidden bg-stone-100">
<img alt="Laddu" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1517244683847-745431cd4455?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-stone-900 group-hover:text-brand-900 transition-colors">Besan Laddu</h3>
<p className="text-xs text-stone-500 mt-1">Coarse gram flour, ghee</p>
</div>
<span className="font-medium text-stone-900">₹420</span>
</div>
</div>
<button className="absolute bottom-28 right-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:bag-plus-linear" width="20"></iconify-icon>
</button>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-white cursor-pointer border border-stone-100">
<div className="h-[70%] overflow-hidden bg-stone-100">
<img alt="Mysore Pak" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1589948107931-13359ce971b3?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-stone-900 group-hover:text-brand-900 transition-colors">Mysore Pak</h3>
<p className="text-xs text-stone-500 mt-1">Melt-in-mouth soft</p>
</div>
<span className="font-medium text-stone-900">₹650</span>
</div>
</div>
<button className="absolute bottom-28 right-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:bag-plus-linear" width="20"></iconify-icon>
</button>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-white cursor-pointer border border-stone-100">
<div className="h-[70%] overflow-hidden bg-stone-100">
<img alt="Gulab Jamun" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1616035894324-42b740523082?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-stone-900 group-hover:text-brand-900 transition-colors">Gulab Jamun</h3>
<p className="text-xs text-stone-500 mt-1">Saffron infused syrup</p>
</div>
<span className="font-medium text-stone-900">₹520</span>
</div>
</div>
<button className="absolute bottom-28 right-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:bag-plus-linear" width="20"></iconify-icon>
</button>
</div>

<div className="group relative rounded-3xl overflow-hidden cursor-pointer lg:row-span-1">
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors z-10"></div>
<div className="h-[70%] overflow-hidden bg-stone-100">
<img alt="Rasgulla" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1605197584547-c93aa1cd3d6f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 bg-white h-[30%] border border-t-0 border-stone-100 rounded-b-3xl">
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-stone-900 group-hover:text-brand-900 transition-colors">Rasgulla Tin</h3>
<p className="text-xs text-stone-500 mt-1">Spongy bengali delicacy</p>
</div>
<span className="font-medium text-stone-900">₹380</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid lg:grid-cols-2 bg-stone-900 text-white">
<div className="relative min-h-[500px] lg:h-auto overflow-hidden group">
<img alt="Bakery" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1626803775151-61d756612fcd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-transparent to-transparent"></div>
</div>
<div className="p-16 lg:p-24 flex flex-col justify-center space-y-8 relative">
<iconify-icon className="text-brand-800" icon="solar:chef-hat-heart-linear" width="48"></iconify-icon>
<h2 className="font-serif text-4xl lg:text-6xl tracking-tight leading-none">
                The Artisan <br/>
<span className="text-brand-100 italic">Oven</span>
</h2>
<p className="text-stone-400 font-light leading-relaxed max-w-md">
                Our bakery is a celebration of eggless perfection. From the buttery layers of our Khari biscuits to the rich ganache of our celebration cakes, we bring global baking techniques to Hyderabad.
            </p>
<div className="grid grid-cols-2 gap-8 pt-4">
<div>
<span className="text-3xl font-serif text-white block mb-1">100%</span>
<span className="text-xs uppercase tracking-widest text-stone-500">Eggless</span>
</div>
<div>
<span className="text-3xl font-serif text-white block mb-1">Daily</span>
<span className="text-xs uppercase tracking-widest text-stone-500">Fresh Batches</span>
</div>
</div>
<button className="w-fit text-sm font-medium border-b border-white pb-1 hover:text-brand-100 hover:border-brand-100 transition-colors flex items-center gap-2 mt-4">
                Explore Bakery
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-xs">
<span className="font-serif text-2xl text-stone-900 block mb-6">Balaji Hukmichand</span>
<p className="text-sm text-stone-500 leading-relaxed mb-6">
                        Bringing sweetness to life since 1985. We deliver authentic Indian flavors worldwide, packaged with love and tradition.
                    </p>
</div>
<div className="flex gap-16 flex-wrap">
<div>
<h4 className="font-bold text-xs uppercase tracking-widest text-stone-900 mb-6">Shop</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-brand-900 transition-colors" href="#">Sweets</a></li>
<li><a className="hover:text-brand-900 transition-colors" href="#">Namkeen</a></li>
<li><a className="hover:text-brand-900 transition-colors" href="#">Gifting</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-xs uppercase tracking-widest text-stone-900 mb-6">Company</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-brand-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brand-900 transition-colors" href="#">Stores</a></li>
<li><a className="hover:text-brand-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="w-full md:w-auto">
<h4 className="font-bold text-xs uppercase tracking-widest text-stone-900 mb-6">Stay Sweet</h4>
<div className="flex w-full md:w-80">
<input className="w-full px-4 py-3 bg-stone-50 border border-r-0 border-stone-200 rounded-l-lg text-sm focus:outline-none focus:border-stone-400" placeholder="Email address" type="email"/>
<button className="px-6 bg-stone-900 text-white rounded-r-lg hover:bg-brand-900 transition-colors">
<iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
<p>© 2024 Balaji Hukmichand. All rights reserved.</p>
<div className="flex gap-4">
<iconify-icon className="hover:text-stone-900 cursor-pointer transition-colors" icon="solar:instagram-linear" width="18"></iconify-icon>
<iconify-icon className="hover:text-stone-900 cursor-pointer transition-colors" icon="solar:facebook-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
