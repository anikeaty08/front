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
navy: '#0B1A33',
beige: '#F5F0E8',
gold: '#D4AF37',
terracotta: '#C96E4F',
charcoal: '#2C2C2C'
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
      

<div bis_size='{"x":0,"y":0,"w":1355,"h":37,"abs_x":480,"abs_y":43}' className="bg-navy text-gold py-2.5 px-4 text-center text-xs tracking-wide">
<span bis_size='{"x":533,"y":10,"w":287,"h":16,"abs_x":1013,"abs_y":53}' className="font-serif italic font-medium">"Let your light so shine before men..." - Matthew 5:16</span>
</div>

<nav bis_size='{"x":0,"y":1667,"w":1355,"h":81,"abs_x":480,"abs_y":1710}' className="sticky top-0 z-50 bg-beige/90 backdrop-blur-md border-b border-navy/5">
<div bis_size='{"x":37,"y":1667,"w":1280,"h":80,"abs_x":517,"abs_y":1710}' className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button bis_size='{"x":0,"y":1667,"w":0,"h":0,"abs_x":480,"abs_y":1710}' className="lg:hidden text-navy">
<iconify-icon bis_size='{"x":0,"y":1667,"w":0,"h":0,"abs_x":480,"abs_y":1710}' icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<a bis_size='{"x":61,"y":1695,"w":29,"h":24,"abs_x":541,"abs_y":1738}' className="flex flex-col items-center justify-center group" href="#">
<span bis_size='{"x":61,"y":1695,"w":29,"h":24,"abs_x":541,"abs_y":1738}' className="font-serif text-2xl tracking-tighter font-semibold uppercase leading-none group-hover:text-gold transition-colors duration-300">RT</span>
</a>

<div bis_size='{"x":450,"y":1697,"w":377,"h":20,"abs_x":930,"abs_y":1740}' className="hidden lg:flex items-center space-x-10">
<a bis_size='{"x":450,"y":1697,"w":35,"h":20,"abs_x":930,"abs_y":1740}' className="text-sm font-medium tracking-wide hover:text-gold transition-colors duration-200" href="#">Shop</a>
<a bis_size='{"x":526,"y":1697,"w":78,"h":20,"abs_x":1006,"abs_y":1740}' className="text-sm font-medium tracking-wide hover:text-gold transition-colors duration-200" href="#">Collections</a>
<a bis_size='{"x":645,"y":1697,"w":67,"h":20,"abs_x":1125,"abs_y":1740}' className="text-sm font-medium tracking-wide hover:text-gold transition-colors duration-200" href="#">The Word</a>
<a bis_size='{"x":753,"y":1697,"w":74,"h":20,"abs_x":1233,"abs_y":1740}' className="text-sm font-medium tracking-wide hover:text-gold transition-colors duration-200" href="#">Size Guide</a>
</div>

<div bis_size='{"x":1187,"y":1696,"w":106,"h":22,"abs_x":1667,"abs_y":1739}' className="flex items-center space-x-5">
<button bis_size='{"x":1187,"y":1696,"w":22,"h":22,"abs_x":1667,"abs_y":1739}' className="text-navy hover:text-gold transition-colors duration-200 flex items-center">
<iconify-icon bis_size='{"x":1187,"y":1696,"w":22,"h":22,"abs_x":1667,"abs_y":1739}' icon="solar:magnifer-linear" width="22"></iconify-icon>
</button>
<button bis_size='{"x":1229,"y":1696,"w":22,"h":22,"abs_x":1709,"abs_y":1739}' className="text-navy hover:text-gold transition-colors duration-200 flex items-center">
<iconify-icon bis_size='{"x":1229,"y":1696,"w":22,"h":22,"abs_x":1709,"abs_y":1739}' className="" icon="solar:user-circle-linear" width="22"></iconify-icon>
</button>
<button bis_size='{"x":1271,"y":1696,"w":22,"h":22,"abs_x":1751,"abs_y":1739}' className="text-navy hover:text-gold transition-colors duration-200 flex items-center relative">
<iconify-icon bis_size='{"x":1271,"y":1696,"w":22,"h":22,"abs_x":1751,"abs_y":1739}' icon="solar:cart-large-minimalistic-linear" width="22"></iconify-icon>
<span bis_size='{"x":1285,"y":1690,"w":16,"h":16,"abs_x":1765,"abs_y":1733}' className="absolute -top-1.5 -right-2 bg-gold text-navy text-[0.65rem] font-semibold w-4 h-4 rounded-full flex items-center justify-center">2</span>
</button>
</div>
</div>
</nav>

<header bis_size='{"x":0,"y":118,"w":1355,"h":810,"abs_x":480,"abs_y":161}' className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">

<div bis_size='{"x":0,"y":118,"w":1355,"h":810,"abs_x":480,"abs_y":161}' className="absolute inset-0 z-0">
<img alt="Faith based streetwear lifestyle" bis_size='{"x":0,"y":118,"w":1355,"h":810,"abs_x":480,"abs_y":161}' className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=2062&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":0,"y":118,"w":1355,"h":810,"abs_x":480,"abs_y":161}' className="absolute inset-0 bg-navy/40 mix-blend-multiply"></div>
<div bis_size='{"x":0,"y":118,"w":1355,"h":810,"abs_x":480,"abs_y":161}' className="bg-gradient-to-t from-navy/80 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div bis_size='{"x":317,"y":398,"w":720,"h":314,"abs_x":797,"abs_y":441}' className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-16">
<h1 bis_size='{"x":408,"y":398,"w":537,"h":144,"abs_x":888,"abs_y":441}' className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tighter font-serif mb-6">
                Walk In Faith.<br bis_size='{"x":876,"y":386,"w":0,"h":96,"abs_x":1356,"abs_y":429}'/>Stand Out In Style.
            </h1>
<p bis_size='{"x":341,"y":566,"w":672,"h":56,"abs_x":821,"abs_y":609}' className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Premium faith-based apparel designed to inspire conversations and declare your beliefs.
            </p>
<div bis_size='{"x":471,"y":662,"w":411,"h":50,"abs_x":951,"abs_y":705}' className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
<a bis_size='{"x":471,"y":663,"w":193,"h":48,"abs_x":951,"abs_y":706}' className="w-full sm:w-auto px-8 py-3.5 bg-beige text-navy font-medium text-sm tracking-wide hover:bg-white transition-colors duration-300" href="#">
                    Shop New Arrivals
                </a>
<a bis_size='{"x":681,"y":662,"w":201,"h":50,"abs_x":1161,"abs_y":705}' className="w-full sm:w-auto px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-sm tracking-wide hover:bg-white/20 transition-all duration-300" href="#">
                    Explore Collections
                </a>
</div>
</div>
</header>

<section bis_size='{"x":37,"y":928,"w":1280,"h":754,"abs_x":517,"abs_y":971}' className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div bis_size='{"x":61,"y":1024,"w":1232,"h":68,"abs_x":541,"abs_y":1067}' className="flex items-end justify-between mb-12">
<div bis_size='{"x":61,"y":1024,"w":342,"h":68,"abs_x":541,"abs_y":1067}' className="">
<h2 bis_size='{"x":61,"y":1024,"w":342,"h":40,"abs_x":541,"abs_y":1067}' className="font-serif text-3xl md:text-4xl tracking-tight font-medium text-navy">Featured Declarations</h2>
<p bis_size='{"x":61,"y":1072,"w":342,"h":20,"abs_x":541,"abs_y":1115}' className="text-navy/60 mt-2 text-sm">Designed for the daily walk.</p>
</div>
<a bis_size='{"x":1213,"y":1072,"w":79,"h":20,"abs_x":1693,"abs_y":1115}' className="hidden md:flex items-center text-sm font-medium text-navy hover:text-gold transition-colors duration-200 group" href="#">
                View All 
                <iconify-icon bis_size='{"x":1275,"y":1073,"w":18,"h":18,"abs_x":1755,"abs_y":1116}' className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div bis_size='{"x":61,"y":1140,"w":1232,"h":446,"abs_x":541,"abs_y":1183}' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div bis_size='{"x":61,"y":1140,"w":290,"h":446,"abs_x":541,"abs_y":1183}' className="group cursor-pointer">
<div bis_size='{"x":61,"y":1140,"w":290,"h":386,"abs_x":541,"abs_y":1183}' className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-4">
<img alt="Armor Hoodie" bis_size='{"x":61,"y":1140,"w":290,"h":386,"abs_x":541,"abs_y":1183}' className="object-center group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":73,"y":1152,"w":45,"h":24,"abs_x":553,"abs_y":1195}' className="absolute top-3 left-3 bg-navy text-beige text-xs px-2 py-1 font-medium tracking-wide">NEW</div>

<div bis_size='{"x":61,"y":1466,"w":290,"h":76,"abs_x":541,"abs_y":1509}' className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out">
<button bis_size='{"x":77,"y":1482,"w":258,"h":44,"abs_x":557,"abs_y":1525}' className="w-full bg-beige/90 backdrop-blur text-navy py-3 text-sm font-medium hover:bg-beige transition-colors shadow-sm">
                            Quick Add
                        </button>
</div>
</div>
<div bis_size='{"x":61,"y":1542,"w":290,"h":44,"abs_x":541,"abs_y":1585}' className="flex justify-between items-start">
<div bis_size='{"x":61,"y":1542,"w":140,"h":44,"abs_x":541,"abs_y":1585}'>
<h3 bis_size='{"x":61,"y":1542,"w":140,"h":24,"abs_x":541,"abs_y":1585}' className="text-base font-medium text-navy">The Armor Hoodie</h3>
<p bis_size='{"x":61,"y":1570,"w":140,"h":16,"abs_x":541,"abs_y":1613}' className="text-xs text-navy/50 mt-1">Charcoal / Heavy Blend</p>
</div>
<span bis_size='{"x":303,"y":1542,"w":47,"h":20,"abs_x":783,"abs_y":1585}' className="text-sm font-medium text-navy">$55.00</span>
</div>
</div>

<div bis_size='{"x":375,"y":1140,"w":290,"h":446,"abs_x":855,"abs_y":1183}' className="group cursor-pointer">
<div bis_size='{"x":375,"y":1140,"w":290,"h":386,"abs_x":855,"abs_y":1183}' className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-4">
<img alt="Grace Tee" bis_size='{"x":375,"y":1140,"w":290,"h":386,"abs_x":855,"abs_y":1183}' className="object-center group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>

<div bis_size='{"x":375,"y":1466,"w":290,"h":76,"abs_x":855,"abs_y":1509}' className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out">
<button bis_size='{"x":391,"y":1482,"w":258,"h":44,"abs_x":871,"abs_y":1525}' className="w-full bg-beige/90 backdrop-blur text-navy py-3 text-sm font-medium hover:bg-beige transition-colors shadow-sm">
                            Quick Add
                        </button>
</div>
</div>
<div bis_size='{"x":375,"y":1542,"w":290,"h":44,"abs_x":855,"abs_y":1585}' className="flex justify-between items-start">
<div bis_size='{"x":375,"y":1542,"w":208,"h":44,"abs_x":855,"abs_y":1585}' className="">
<h3 bis_size='{"x":375,"y":1542,"w":208,"h":24,"abs_x":855,"abs_y":1585}' className="text-base font-medium text-navy">Grace Alone Oversized Tee</h3>
<p bis_size='{"x":375,"y":1570,"w":208,"h":16,"abs_x":855,"abs_y":1613}' className="text-xs text-navy/50 mt-1">Vintage Wash</p>
</div>
<span bis_size='{"x":617,"y":1542,"w":47,"h":20,"abs_x":1097,"abs_y":1585}' className="text-sm font-medium text-navy">$35.00</span>
</div>
</div>

<div bis_size='{"x":689,"y":1140,"w":290,"h":446,"abs_x":1169,"abs_y":1183}' className="group cursor-pointer">
<div bis_size='{"x":689,"y":1140,"w":290,"h":386,"abs_x":1169,"abs_y":1183}' className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-4">
<img alt="Faith Cap" bis_size='{"x":689,"y":1140,"w":290,"h":386,"abs_x":1169,"abs_y":1183}' className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&amp;w=2030&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":701,"y":1152,"w":93,"h":24,"abs_x":1181,"abs_y":1195}' className="absolute top-3 left-3 bg-terracotta text-white text-xs px-2 py-1 font-medium tracking-wide">BESTSELLER</div>

<div bis_size='{"x":689,"y":1466,"w":290,"h":76,"abs_x":1169,"abs_y":1509}' className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out">
<button bis_size='{"x":705,"y":1482,"w":258,"h":44,"abs_x":1185,"abs_y":1525}' className="w-full bg-beige/90 backdrop-blur text-navy py-3 text-sm font-medium hover:bg-beige transition-colors shadow-sm">
                            Quick Add
                        </button>
</div>
</div>
<div bis_size='{"x":689,"y":1542,"w":290,"h":44,"abs_x":1169,"abs_y":1585}' className="flex justify-between items-start">
<div bis_size='{"x":689,"y":1542,"w":141,"h":44,"abs_x":1169,"abs_y":1585}'>
<h3 bis_size='{"x":689,"y":1542,"w":141,"h":24,"abs_x":1169,"abs_y":1585}' className="text-base font-medium text-navy">Mustard Seed Cap</h3>
<p bis_size='{"x":689,"y":1570,"w":141,"h":16,"abs_x":1169,"abs_y":1613}' className="text-xs text-navy/50 mt-1">Navy / Embroidered</p>
</div>
<span bis_size='{"x":931,"y":1542,"w":48,"h":20,"abs_x":1411,"abs_y":1585}' className="text-sm font-medium text-navy">$28.00</span>
</div>
</div>

<div bis_size='{"x":1003,"y":1140,"w":290,"h":446,"abs_x":1483,"abs_y":1183}' className="group cursor-pointer">
<div bis_size='{"x":1003,"y":1140,"w":290,"h":386,"abs_x":1483,"abs_y":1183}' className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-4">
<img alt="Proverbs Crewneck" bis_size='{"x":1003,"y":1140,"w":290,"h":386,"abs_x":1483,"abs_y":1183}' className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>

<div bis_size='{"x":1003,"y":1466,"w":290,"h":76,"abs_x":1483,"abs_y":1509}' className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out">
<button bis_size='{"x":1019,"y":1482,"w":258,"h":44,"abs_x":1499,"abs_y":1525}' className="w-full bg-beige/90 backdrop-blur text-navy py-3 text-sm font-medium hover:bg-beige transition-colors shadow-sm">
                            Quick Add
                        </button>
</div>
</div>
<div bis_size='{"x":1003,"y":1542,"w":290,"h":44,"abs_x":1483,"abs_y":1585}' className="flex justify-between items-start">
<div bis_size='{"x":1003,"y":1542,"w":150,"h":44,"abs_x":1483,"abs_y":1585}'>
<h3 bis_size='{"x":1003,"y":1542,"w":150,"h":24,"abs_x":1483,"abs_y":1585}' className="text-base font-medium text-navy">Proverbs Crewneck</h3>
<p bis_size='{"x":1003,"y":1570,"w":150,"h":16,"abs_x":1483,"abs_y":1613}' className="text-xs text-navy/50 mt-1">Warm Beige</p>
</div>
<span bis_size='{"x":1244,"y":1542,"w":48,"h":20,"abs_x":1724,"abs_y":1585}' className="text-sm font-medium text-navy">$48.00</span>
</div>
</div>
</div>
<div bis_size='{"x":0,"y":1667,"w":0,"h":0,"abs_x":480,"abs_y":1710}' className="mt-12 md:hidden flex justify-center">
<a bis_size='{"x":0,"y":1667,"w":0,"h":0,"abs_x":480,"abs_y":1710}' className="px-6 py-3 border border-navy text-navy text-sm font-medium hover:bg-navy hover:text-beige transition-colors" href="#">
                View All Products
            </a>
</div>
</section>

<section bis_size='{"x":0,"y":1682,"w":1355,"h":922,"abs_x":480,"abs_y":1725}' className="bg-navy py-24 text-beige">
<div bis_size='{"x":37,"y":1778,"w":1280,"h":730,"abs_x":517,"abs_y":1821}' className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div bis_size='{"x":61,"y":1778,"w":584,"h":730,"abs_x":541,"abs_y":1821}' className="relative aspect-square lg:aspect-[4/5] overflow-hidden">
<img alt="Community" bis_size='{"x":61,"y":1778,"w":584,"h":730,"abs_x":541,"abs_y":1821}' className="object-center grayscale-[20%] sepia-[10%] w-full h-full object-cover" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&amp;w=2689&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":77,"y":1794,"w":552,"h":698,"abs_x":557,"abs_y":1837}' className="border-white/10 border mt-4 mr-4 mb-4 ml-4 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div bis_size='{"x":709,"y":1936,"w":584,"h":415,"abs_x":1189,"abs_y":1979}' className="flex flex-col justify-center">
<span bis_size='{"x":709,"y":1936,"w":584,"h":16,"abs_x":1189,"abs_y":1979}' className="text-gold uppercase text-xs tracking-[0.2em] font-semibold mb-4">More Than Just Fabric</span>
<h2 bis_size='{"x":709,"y":1968,"w":584,"h":96,"abs_x":1189,"abs_y":2011}' className="font-serif text-4xl lg:text-5xl tracking-tight font-medium mb-6 leading-[1.2]">
        Every design is rooted<br bis_size='{"x":1162,"y":1960,"w":0,"h":64,"abs_x":1642,"abs_y":2003}'/>in scripture.
      </h2>
<p bis_size='{"x":709,"y":2088,"w":512,"h":84,"abs_x":1189,"abs_y":2131}' className="text-beige/70 text-base lg:text-lg mb-10 leading-relaxed font-light max-w-lg">
        We aren't just making clothes; we're making declarations. Join a movement of believers who express their
        identity in Christ through fashion. It's faith that fits.
      </p>

<div bis_size='{"x":709,"y":2212,"w":584,"h":63,"abs_x":1189,"abs_y":2255}' className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
<div bis_size='{"x":709,"y":2212,"w":276,"h":63,"abs_x":1189,"abs_y":2255}' className="flex items-start">
<iconify-icon bis_size='{"x":709,"y":2216,"w":24,"h":24,"abs_x":1189,"abs_y":2259}' className="text-gold mt-1 shrink-0" icon="solar:leaf-linear" width="24"></iconify-icon>
<div bis_size='{"x":749,"y":2212,"w":236,"h":63,"abs_x":1229,"abs_y":2255}' className="ml-4">
<h4 bis_size='{"x":749,"y":2212,"w":236,"h":20,"abs_x":1229,"abs_y":2255}' className="text-sm font-medium text-beige mb-1">Ethical Quality</h4>
<p bis_size='{"x":749,"y":2236,"w":236,"h":39,"abs_x":1229,"abs_y":2279}' className="text-xs text-beige/50 leading-relaxed">Durable garments crafted with integrity and care.</p>
</div>
</div>
<div bis_size='{"x":1017,"y":2212,"w":276,"h":63,"abs_x":1497,"abs_y":2255}' className="flex items-start">
<iconify-icon bis_size='{"x":1017,"y":2216,"w":24,"h":24,"abs_x":1497,"abs_y":2259}' className="text-gold mt-1 shrink-0" icon="solar:heart-linear" width="24"></iconify-icon>
<div bis_size='{"x":1057,"y":2212,"w":236,"h":63,"abs_x":1537,"abs_y":2255}' className="ml-4">
<h4 bis_size='{"x":1057,"y":2212,"w":236,"h":20,"abs_x":1537,"abs_y":2255}' className="text-sm font-medium text-beige mb-1">Community First</h4>
<p bis_size='{"x":1057,"y":2236,"w":236,"h":39,"abs_x":1537,"abs_y":2279}' className="text-xs text-beige/50 leading-relaxed">10% of every purchase tithed to global missions.</p>
</div>
</div>
</div>
<div bis_size='{"x":709,"y":2323,"w":584,"h":28,"abs_x":1189,"abs_y":2366}' className="">
<a bis_size='{"x":709,"y":2326,"w":125,"h":25,"abs_x":1189,"abs_y":2369}' className="inline-flex items-center pb-1 border-b border-gold text-gold text-sm font-medium hover:text-white hover:border-white transition-colors duration-300 group" href="#">
          Read Our Story
          <iconify-icon bis_size='{"x":819,"y":2328,"w":16,"h":16,"abs_x":1299,"abs_y":2371}' className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section bis_size='{"x":37,"y":2604,"w":1280,"h":1257,"abs_x":517,"abs_y":2647}' className="py-24 px-6 max-w-7xl mx-auto border-b border-navy/10">
<div bis_size='{"x":61,"y":2700,"w":1232,"h":1064,"abs_x":541,"abs_y":2743}' className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

<div bis_size='{"x":61,"y":2700,"w":576,"h":1064,"abs_x":541,"abs_y":2743}' className="flex flex-col space-y-4">
<div bis_size='{"x":61,"y":2700,"w":576,"h":768,"abs_x":541,"abs_y":2743}' className="aspect-[3/4] bg-white overflow-hidden">
<img alt="Detailed Hoodie" bis_size='{"x":61,"y":2700,"w":576,"h":768,"abs_x":541,"abs_y":2743}' className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&amp;w=1972&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":61,"y":3484,"w":576,"h":280,"abs_x":541,"abs_y":3527}' className="grid grid-cols-2 gap-4">
<div bis_size='{"x":61,"y":3484,"w":280,"h":280,"abs_x":541,"abs_y":3527}' className="aspect-square bg-white overflow-hidden">
<img alt="Flat lay" bis_size='{"x":61,"y":3484,"w":280,"h":280,"abs_x":541,"abs_y":3527}' className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":357,"y":3484,"w":280,"h":280,"abs_x":837,"abs_y":3527}' className="aspect-square bg-white overflow-hidden">
<img alt="Detail shot" bis_size='{"x":357,"y":3484,"w":280,"h":280,"abs_x":837,"abs_y":3527}' className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>

<div bis_size='{"x":717,"y":2700,"w":576,"h":627,"abs_x":1197,"abs_y":2743}' className="flex flex-col justify-center sticky top-28 h-fit">

<div bis_size='{"x":717,"y":2700,"w":576,"h":16,"abs_x":1197,"abs_y":2743}' className="flex items-center space-x-2 text-navy/60 mb-4">
<iconify-icon bis_size='{"x":717,"y":2700,"w":16,"h":16,"abs_x":1197,"abs_y":2743}' icon="solar:book-bookmark-linear" width="16"></iconify-icon>
<span bis_size='{"x":741,"y":2700,"w":74,"h":16,"abs_x":1221,"abs_y":2743}' className="text-xs font-serif italic font-medium">Ephesians 6:11</span>
</div>
<h1 bis_size='{"x":717,"y":2732,"w":576,"h":40,"abs_x":1197,"abs_y":2775}' className="font-serif text-3xl lg:text-4xl tracking-tight font-medium text-navy mb-2">The Armor of God Hoodie</h1>
<p bis_size='{"x":717,"y":2780,"w":576,"h":28,"abs_x":1197,"abs_y":2823}' className="text-xl text-navy font-medium mb-6">$49.99</p>
<p bis_size='{"x":717,"y":2832,"w":576,"h":45,"abs_x":1197,"abs_y":2875}' className="text-sm text-navy/70 leading-relaxed mb-8">
                    Unisex Heavy Blend Hoodie. Super soft, pre-shrunk, and designed to remind you of the spiritual armor you carry daily. Declare it loud.
                </p>

<div bis_size='{"x":717,"y":2910,"w":576,"h":64,"abs_x":1197,"abs_y":2953}' className="mb-6">
<div bis_size='{"x":717,"y":2910,"w":576,"h":20,"abs_x":1197,"abs_y":2953}' className="flex justify-between items-center mb-3">
<span bis_size='{"x":717,"y":2910,"w":103,"h":20,"abs_x":1197,"abs_y":2953}' className="text-sm font-medium text-navy">Color: <span bis_size='{"x":761,"y":2911,"w":59,"h":17,"abs_x":1241,"abs_y":2954}' className="text-navy/60 font-normal">Charcoal</span></span>
</div>
<div bis_size='{"x":717,"y":2942,"w":576,"h":32,"abs_x":1197,"abs_y":2985}' className="flex space-x-3">
<button bis_size='{"x":717,"y":2942,"w":32,"h":32,"abs_x":1197,"abs_y":2985}' className="w-8 h-8 rounded-full bg-charcoal ring-2 ring-offset-2 ring-offset-beige ring-navy"></button>
<button bis_size='{"x":761,"y":2942,"w":32,"h":32,"abs_x":1241,"abs_y":2985}' className="w-8 h-8 rounded-full bg-navy ring-1 ring-offset-2 ring-offset-beige ring-transparent hover:ring-navy/30"></button>
<button bis_size='{"x":805,"y":2942,"w":32,"h":32,"abs_x":1285,"abs_y":2985}' className="w-8 h-8 rounded-full bg-[#E5E0D8] ring-1 ring-offset-2 ring-offset-beige ring-transparent hover:ring-navy/30"></button>
</div>
</div>

<div bis_size='{"x":717,"y":2998,"w":576,"h":74,"abs_x":1197,"abs_y":3041}' className="mb-8">
<div bis_size='{"x":717,"y":2998,"w":576,"h":20,"abs_x":1197,"abs_y":3041}' className="flex justify-between items-center mb-3">
<span bis_size='{"x":717,"y":2998,"w":28,"h":20,"abs_x":1197,"abs_y":3041}' className="text-sm font-medium text-navy">Size</span>
<button bis_size='{"x":1242,"y":3000,"w":50,"h":16,"abs_x":1722,"abs_y":3043}' className="text-xs text-navy/60 underline hover:text-navy">Fit Guide</button>
</div>
<div bis_size='{"x":717,"y":3030,"w":576,"h":42,"abs_x":1197,"abs_y":3073}' className="grid grid-cols-5 gap-3">
<button bis_size='{"x":717,"y":3030,"w":105,"h":42,"abs_x":1197,"abs_y":3073}' className="py-2.5 border border-navy/20 text-sm font-medium text-navy hover:border-navy transition-colors">S</button>
<button bis_size='{"x":835,"y":3030,"w":105,"h":42,"abs_x":1315,"abs_y":3073}' className="py-2.5 border border-navy text-sm font-medium text-navy bg-navy/5 transition-colors">M</button>
<button bis_size='{"x":952,"y":3030,"w":105,"h":42,"abs_x":1432,"abs_y":3073}' className="py-2.5 border border-navy/20 text-sm font-medium text-navy hover:border-navy transition-colors">L</button>
<button bis_size='{"x":1070,"y":3030,"w":105,"h":42,"abs_x":1550,"abs_y":3073}' className="py-2.5 border border-navy/20 text-sm font-medium text-navy hover:border-navy transition-colors">XL</button>
<button bis_size='{"x":1187,"y":3030,"w":105,"h":42,"abs_x":1667,"abs_y":3073}' className="py-2.5 border border-navy/20 text-sm font-medium text-navy hover:border-navy transition-colors opacity-50 cursor-not-allowed">XXL</button>
</div>
</div>
<button bis_size='{"x":717,"y":3104,"w":576,"h":52,"abs_x":1197,"abs_y":3147}' className="w-full bg-navy text-beige py-4 text-sm font-medium tracking-wide hover:bg-navy/90 transition-colors mb-8">
                    Add to Cart - $49.99
                </button>

<div bis_size='{"x":717,"y":3188,"w":576,"h":140,"abs_x":1197,"abs_y":3231}' className="border-t border-navy/10 pt-6">
<div bis_size='{"x":717,"y":3213,"w":576,"h":31,"abs_x":1197,"abs_y":3256}' className="flex space-x-6 border-b border-navy/10 mb-4">
<button bis_size='{"x":717,"y":3213,"w":99,"h":30,"abs_x":1197,"abs_y":3256}' className="text-sm font-medium text-navy pb-2 border-b-2 border-navy">The Inspiration</button>
<button bis_size='{"x":841,"y":3213,"w":45,"h":30,"abs_x":1321,"abs_y":3256}' className="text-sm font-medium text-navy/50 pb-2 border-b-2 border-transparent hover:text-navy">Details</button>
<button bis_size='{"x":911,"y":3213,"w":58,"h":30,"abs_x":1391,"abs_y":3256}' className="text-sm font-medium text-navy/50 pb-2 border-b-2 border-transparent hover:text-navy">Shipping</button>
</div>
<p bis_size='{"x":717,"y":3260,"w":576,"h":68,"abs_x":1197,"abs_y":3303}' className="text-sm text-navy/70 leading-relaxed font-light">
                        "Put on the full armor of God, so that you can take your stand against the devil’s schemes." This piece was designed as a daily, physical reminder of the spiritual readiness required in our walk.
                    </p>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3861,"w":1355,"h":670,"abs_x":480,"abs_y":3904}' className="py-24 overflow-hidden">
<div bis_size='{"x":0,"y":3957,"w":1355,"h":64,"abs_x":480,"abs_y":4000}' className="text-center mb-10 px-6">
<h2 bis_size='{"x":24,"y":3957,"w":1307,"h":36,"abs_x":504,"abs_y":4000}' className="font-serif text-3xl tracking-tight font-medium text-navy">#WearYourFaith</h2>
<p bis_size='{"x":24,"y":4001,"w":1307,"h":20,"abs_x":504,"abs_y":4044}' className="text-navy/60 mt-2 text-sm">Not just a brand, a brotherhood.</p>
</div>

<div bis_size='{"x":0,"y":4061,"w":1355,"h":374,"abs_x":480,"abs_y":4104}' className="flex gap-4 px-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8">
<div bis_size='{"x":16,"y":4061,"w":342,"h":342,"abs_x":496,"abs_y":4104}' className="snap-center shrink-0 w-[70vw] sm:w-[40vw] md:w-[25vw] aspect-square relative group">
<img bis_size='{"x":16,"y":4061,"w":342,"h":342,"abs_x":496,"abs_y":4104}' className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":16,"y":4061,"w":342,"h":342,"abs_x":496,"abs_y":4104}' className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon bis_size='{"x":175,"y":4220,"w":24,"h":24,"abs_x":655,"abs_y":4263}' className="text-white" icon="solar:camera-linear" width="24"></iconify-icon>
</div>
</div>
<div bis_size='{"x":374,"y":4061,"w":342,"h":342,"abs_x":854,"abs_y":4104}' className="snap-center shrink-0 w-[70vw] sm:w-[40vw] md:w-[25vw] aspect-square relative group">
<img bis_size='{"x":374,"y":4061,"w":342,"h":342,"abs_x":854,"abs_y":4104}' className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":374,"y":4061,"w":342,"h":342,"abs_x":854,"abs_y":4104}' className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon bis_size='{"x":533,"y":4220,"w":24,"h":24,"abs_x":1013,"abs_y":4263}' className="text-white" icon="solar:camera-linear" width="24"></iconify-icon>
</div>
</div>
<div bis_size='{"x":733,"y":4061,"w":342,"h":342,"abs_x":1213,"abs_y":4104}' className="snap-center shrink-0 w-[70vw] sm:w-[40vw] md:w-[25vw] aspect-square relative group">
<img bis_size='{"x":733,"y":4061,"w":342,"h":342,"abs_x":1213,"abs_y":4104}' className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":733,"y":4061,"w":342,"h":342,"abs_x":1213,"abs_y":4104}' className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon bis_size='{"x":892,"y":4220,"w":24,"h":24,"abs_x":1372,"abs_y":4263}' className="text-white" icon="solar:camera-linear" width="24"></iconify-icon>
</div>
</div>
<div bis_size='{"x":1091,"y":4061,"w":342,"h":342,"abs_x":1571,"abs_y":4104}' className="snap-center shrink-0 w-[70vw] sm:w-[40vw] md:w-[25vw] aspect-square relative group">
<img bis_size='{"x":1091,"y":4061,"w":342,"h":342,"abs_x":1571,"abs_y":4104}' className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":1091,"y":4061,"w":342,"h":342,"abs_x":1571,"abs_y":4104}' className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon bis_size='{"x":1250,"y":4220,"w":24,"h":24,"abs_x":1730,"abs_y":4263}' className="text-white" icon="solar:camera-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":4532,"w":1355,"h":343,"abs_x":480,"abs_y":4575}' className="bg-[#DDE2DB] py-24 px-6 border-y border-navy/10">
<div bis_size='{"x":341,"y":4629,"w":672,"h":149,"abs_x":821,"abs_y":4672}' className="max-w-2xl mx-auto text-center">
<h2 bis_size='{"x":341,"y":4629,"w":672,"h":40,"abs_x":821,"abs_y":4672}' className="font-serif text-3xl md:text-4xl tracking-tight font-medium text-navy mb-4">Get The Word &amp; The Wardrobe.</h2>
<p bis_size='{"x":341,"y":4685,"w":672,"h":20,"abs_x":821,"abs_y":4728}' className="text-navy/70 text-sm mb-10 font-light">Sign up for our weekly devotional, early access to new drops, and exclusive community events.</p>
<form bis_size='{"x":453,"y":4745,"w":448,"h":33,"abs_x":933,"abs_y":4788}' className="flex flex-col sm:flex-row max-w-md mx-auto relative">
<input bis_size='{"x":453,"y":4745,"w":448,"h":33,"abs_x":933,"abs_y":4788}' className="w-full bg-transparent border-b border-navy/30 pb-3 text-navy text-sm placeholder:text-navy/40 focus:outline-none focus:border-navy transition-colors mb-4 sm:mb-0" placeholder="Enter your email" type="email"/>
<button bis_size='{"x":813,"y":4746,"w":87,"h":20,"abs_x":1293,"abs_y":4789}' className="sm:absolute right-0 bottom-3 text-sm font-medium text-navy hover:text-gold transition-colors flex items-center group" type="submit">
                    Subscribe
                    <iconify-icon bis_size='{"x":885,"y":4748,"w":16,"h":16,"abs_x":1365,"abs_y":4791}' className="ml-1 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</section>

<footer bis_size='{"x":0,"y":4875,"w":1355,"h":436,"abs_x":480,"abs_y":4918}' className="bg-beige pt-20 pb-10 px-6">
<div bis_size='{"x":37,"y":4955,"w":1280,"h":204,"abs_x":517,"abs_y":4998}' className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div bis_size='{"x":37,"y":4955,"w":284,"h":204,"abs_x":517,"abs_y":4998}' className="col-span-1 md:col-span-1">
<span bis_size='{"x":37,"y":4955,"w":284,"h":32,"abs_x":517,"abs_y":4998}' className="font-serif text-2xl tracking-tighter font-semibold uppercase mb-4 block">RT</span>
<p bis_size='{"x":37,"y":5003,"w":284,"h":39,"abs_x":517,"abs_y":5046}' className="text-xs text-navy/60 leading-relaxed font-light mb-6 max-w-xs">
                    Wear your faith. Live your truth. Premium apparel for the modern believer.
                </p>
<div bis_size='{"x":37,"y":5066,"w":284,"h":26,"abs_x":517,"abs_y":5109}' className="flex space-x-4">
<a bis_size='{"x":37,"y":5066,"w":20,"h":26,"abs_x":517,"abs_y":5109}' className="text-navy/50 hover:text-navy transition-colors" href="#"><iconify-icon bis_size='{"x":37,"y":5066,"w":20,"h":20,"abs_x":517,"abs_y":5109}' icon="solar:camera-linear" width="20"></iconify-icon></a>
<a bis_size='{"x":73,"y":5066,"w":20,"h":26,"abs_x":553,"abs_y":5109}' className="text-navy/50 hover:text-navy transition-colors" href="#"><iconify-icon bis_size='{"x":73,"y":5066,"w":20,"h":20,"abs_x":553,"abs_y":5109}' icon="solar:video-frame-linear" width="20"></iconify-icon></a>
<a bis_size='{"x":109,"y":5066,"w":20,"h":26,"abs_x":589,"abs_y":5109}' className="text-navy/50 hover:text-navy transition-colors" href="#"><iconify-icon bis_size='{"x":109,"y":5066,"w":20,"h":20,"abs_x":589,"abs_y":5109}' icon="solar:pin-linear" width="20"></iconify-icon></a>
</div>
</div>

<div bis_size='{"x":369,"y":4955,"w":284,"h":204,"abs_x":849,"abs_y":4998}'>
<h4 bis_size='{"x":369,"y":4955,"w":284,"h":20,"abs_x":849,"abs_y":4998}' className="font-medium text-sm text-navy mb-4 tracking-wide">Shop</h4>
<ul bis_size='{"x":369,"y":4991,"w":284,"h":168,"abs_x":849,"abs_y":5034}' className="space-y-3">
<li bis_size='{"x":369,"y":4991,"w":284,"h":24,"abs_x":849,"abs_y":5034}'><a bis_size='{"x":369,"y":4997,"w":72,"h":15,"abs_x":849,"abs_y":5040}' className="text-xs text-navy/60 hover:text-navy transition-colors" href="#">New Arrivals</a></li>
<li bis_size='{"x":369,"y":5027,"w":284,"h":24,"abs_x":849,"abs_y":5070}'><a bis_size='{"x":369,"y":5033,"w":66,"h":15,"abs_x":849,"abs_y":5076}' className="text-xs text-navy/60 hover:text-navy transition-colors" href="#">Best Sellers</a></li>
<li bis_size='{"x":369,"y":5063,"w":284,"h":24,"abs_x":849,"abs_y":5106}'><a bis_size='{"x":369,"y":5069,"w":94,"h":15,"abs_x":849,"abs_y":5112}' className="text-xs text-navy/60 hover:text-navy transition-colors" href="#">Men's Collection</a></li>
<li bis_size='{"x":369,"y":5099,"w":284,"h":24,"abs_x":849,"abs_y":5142}'><a bis_size='{"x":369,"y":5105,"w":113,"h":15,"abs_x":849,"abs_y":5148}' className="text-xs text-navy/60 hover:text-navy transition-colors" href="#">Women's Collection</a></li>
<li bis_size='{"x":369,"y":5135,"w":284,"h":24,"abs_x":849,"abs_y":5178}'><a bis_size='{"x":369,"y":5141,"w":69,"h":15,"abs_x":849,"abs_y":5184}' className="text-xs text-navy/60 hover:text-navy transition-colors" href="#">Accessories</a></li>
</ul>
</div>

<div bis_size='{"x":701,"y":4955,"w":284,"h":204,"abs_x":1181,"abs_y":4998}'>
<h4 bis_size='{"x":701,"y":4955,"w":284,"h":20,"abs_x":1181,"abs_y":4998}' className="font-medium text-sm text-navy mb-4 tracking-wide">Support</h4>
<ul bis_size='{"x":701,"y":4991,"w":284,"h":168,"abs_x":1181,"abs_y":5034}' className="space-y-3">
<li bis_size='{"x":701,"y":4991,"w":284,"h":24,"abs_x":1181,"abs_y":5034}'><a bis_size='{"x":701,"y":4997,"w":23,"h":15,"abs_x":1181,"abs_y":5040}' className="text-xs text-navy/60 hover:text-navy transition-colors" href="#">FAQ</a></li>
<li bis_size='{"x":701,"y":5027,"w":284,"h":24,"abs_x":1181,"abs_y":5070}'><a bis_size='{"x":701,"y":5033,"w":60,"h":15,"abs_x":1181,"abs_y":5076}' className="text-xs text-navy/60 hover:text-navy transition-colors" href="#">Size Guide</a></li>
<li bis_size='{"x":701,"y":5063,"w":284,"h":24,"abs_x":1181,"abs_y":5106}'><a bis_size='{"x":701,"y":5069,"w":120,"h":15,"abs_x":1181,"abs_y":5112}' className="text-xs text-navy/60 hover:text-navy transition-colors" href="#">Returns &amp; Exchanges</a></li>
<li bis_size='{"x":701,"y":5099,"w":284,"h":24,"abs_x":1181,"abs_y":5142}'><a bis_size='{"x":701,"y":5105,"w":88,"h":15,"abs_x":1181,"abs_y":5148}' className="text-xs text-navy/60 hover:text-navy transition-colors" href="#">Track My Order</a></li>
<li bis_size='{"x":701,"y":5135,"w":284,"h":24,"abs_x":1181,"abs_y":5178}'><a bis_size='{"x":701,"y":5141,"w":63,"h":15,"abs_x":1181,"abs_y":5184}' className="text-xs text-navy/60 hover:text-navy transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div bis_size='{"x":1033,"y":4955,"w":284,"h":204,"abs_x":1513,"abs_y":4998}'>
<h4 bis_size='{"x":1033,"y":4955,"w":284,"h":20,"abs_x":1513,"abs_y":4998}' className="font-medium text-sm text-navy mb-4 tracking-wide">About</h4>
<ul bis_size='{"x":1033,"y":4991,"w":284,"h":96,"abs_x":1513,"abs_y":5034}' className="space-y-3">
<li bis_size='{"x":1033,"y":4991,"w":284,"h":24,"abs_x":1513,"abs_y":5034}'><a bis_size='{"x":1033,"y":4997,"w":67,"h":15,"abs_x":1513,"abs_y":5040}' className="text-xs text-navy/60 hover:text-navy transition-colors" href="#">Our Mission</a></li>
<li bis_size='{"x":1033,"y":5027,"w":284,"h":24,"abs_x":1513,"abs_y":5070}'><a bis_size='{"x":1033,"y":5033,"w":79,"h":15,"abs_x":1513,"abs_y":5076}' className="text-xs text-navy/60 hover:text-navy transition-colors" href="#">Privacy Policy</a></li>
<li bis_size='{"x":1033,"y":5063,"w":284,"h":24,"abs_x":1513,"abs_y":5106}'><a bis_size='{"x":1033,"y":5069,"w":96,"h":15,"abs_x":1513,"abs_y":5112}' className="text-xs text-navy/60 hover:text-navy transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div bis_size='{"x":37,"y":5223,"w":1280,"h":48,"abs_x":517,"abs_y":5266}' className="max-w-7xl mx-auto pt-8 border-t border-navy/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
<p bis_size='{"x":37,"y":5256,"w":325,"h":15,"abs_x":517,"abs_y":5299}' className="text-[0.65rem] text-navy/50 uppercase tracking-widest">
                © 2024 Righteous Threads. All rights reserved.
            </p>
<p bis_size='{"x":1234,"y":5256,"w":82,"h":15,"abs_x":1714,"abs_y":5299}' className="text-[0.65rem] text-navy/50 font-serif italic">
                Created with faith.
            </p>
</div>
</footer>
<style>
        /* Hide scrollbar for gallery but keep functionality */
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>

    </>
  );
}
