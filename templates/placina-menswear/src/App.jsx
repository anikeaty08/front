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
},
colors: {
'placina-black': '#0a0a0a',
'placina-gray': '#666666',
'placina-light': '#f5f5f5',
},
animation: {
marquee: 'marquee 25s linear infinite',
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
      

<div className="bg-neutral-900 text-white text-xs font-medium py-2 text-center tracking-wide">
        COMPLIMENTARY SHIPPING ON MEN'S ORDERS OVER $150
    </div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center md:hidden">
<button className="text-neutral-900 hover:text-neutral-600 transition-colors">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>
</div>

<div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto absolute left-0 right-0 md:static pointer-events-none md:pointer-events-auto">
<a className="text-xl tracking-tighter font-semibold uppercase pointer-events-auto" href="#">Placina</a>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Shop Men</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Outerwear</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Denim</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Suiting</a>
</div>

<div className="flex items-center space-x-4">
<button className="text-neutral-900 hover:text-neutral-600 transition-colors hidden sm:block">
<span className="iconify" data-height="20" data-icon="lucide:search" data-strokeWidth="1.5" data-width="20"></span>
</button>
<button className="text-neutral-900 hover:text-neutral-600 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:user" data-strokeWidth="1.5" data-width="20"></span>
</button>
<button className="text-neutral-900 hover:text-neutral-600 transition-colors relative group">
<span className="iconify" data-height="20" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="20"></span>
<span className="absolute -top-1 -right-1 bg-neutral-900 text-white text-[10px] font-medium w-4 h-4 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity">1</span>
</button>
</div>
</div>
</div>
</nav>

<header className="relative w-full h-[85vh] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Men's Hero Background" className="w-full h-full object-cover object-center grayscale brightness-[0.75]" src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
<div className="max-w-2xl">
<span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-medium tracking-wide mb-6 backdrop-blur-sm">
                    MENSWEAR FW24
                </span>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-6">
                    Precision tailoring <br/> for the modern man.
                </h1>
<p className="text-lg text-white/80 font-light mb-8 max-w-lg leading-relaxed">
                    Constructed for resilience. A collection defining the intersection of rugged utility and refined aesthetics.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3 border border-white bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-colors" href="#">
                        Shop Men's
                    </a>
<a className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white text-sm font-medium hover:bg-white/10 backdrop-blur-sm transition-colors" href="#">
                        View Lookbook
                    </a>
</div>
</div>
</div>
</header>

<div className="border-b border-neutral-100 py-4 overflow-hidden bg-neutral-50">
<div className="flex whitespace-nowrap animate-marquee">
<div className="flex gap-16 px-8 text-sm font-medium text-neutral-500 uppercase tracking-widest">
<span>Heavyweight Cotton</span>
<span className="text-neutral-300">•</span>
<span>Japanese Denim</span>
<span className="text-neutral-300">•</span>
<span>Technical Nylon</span>
<span className="text-neutral-300">•</span>
<span>Lifetime Guarantee</span>
<span className="text-neutral-300">•</span>
<span>Heavyweight Cotton</span>
<span className="text-neutral-300">•</span>
<span>Japanese Denim</span>
<span className="text-neutral-300">•</span>
<span>Technical Nylon</span>
<span className="text-neutral-300">•</span>
<span>Lifetime Guarantee</span>
<span className="text-neutral-300">•</span>
<span>Heavyweight Cotton</span>
<span className="text-neutral-300">•</span>
<span>Japanese Denim</span>
<span className="text-neutral-300">•</span>
<span>Technical Nylon</span>
<span className="text-neutral-300">•</span>
<span>Lifetime Guarantee</span>
</div>
</div>
</div>

<section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-3xl font-medium tracking-tighter mb-2">Essential Kit</h2>
<p className="text-neutral-500 text-sm">Foundational pieces for a masculine wardrobe.</p>
</div>
<a className="group hidden md:flex items-center text-sm font-medium hover:text-neutral-600 transition-colors" href="#">
                View All Men's
                <span className="iconify ml-1 transform group-hover:translate-x-1 transition-transform" data-height="16" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-100 mb-4 rounded-sm">
<img alt="Men's Tee" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="bg-white text-neutral-900 p-2 rounded-full shadow-sm hover:bg-neutral-900 hover:text-white transition-colors">
<span className="iconify" data-height="18" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-neutral-900">Standard Tee</h3>
<p className="text-xs text-neutral-500 mt-1">Heavyweight Cotton / Black</p>
</div>
<span className="text-sm font-medium text-neutral-900">$55</span>
</div>

<div className="flex gap-2 mt-3">
<div className="w-3 h-3 rounded-full bg-neutral-900 ring-1 ring-offset-1 ring-neutral-300 cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-white border border-neutral-200 hover:ring-1 hover:ring-offset-1 hover:ring-neutral-300 cursor-pointer transition-all"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-100 mb-4 rounded-sm">
<img alt="Men's Jacket" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3">
<span className="px-2 py-1 bg-white/90 backdrop-blur text-[10px] font-semibold tracking-wider uppercase">New</span>
</div>
<div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="bg-white text-neutral-900 p-2 rounded-full shadow-sm hover:bg-neutral-900 hover:text-white transition-colors">
<span className="iconify" data-height="18" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-neutral-900">Field Jacket</h3>
<p className="text-xs text-neutral-500 mt-1">Water Repellent / Olive</p>
</div>
<span className="text-sm font-medium text-neutral-900">$240</span>
</div>
<div className="flex gap-2 mt-3">
<div className="w-3 h-3 rounded-full bg-[#3d4234] ring-1 ring-offset-1 ring-neutral-300 cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-[#1a1a1a] hover:ring-1 hover:ring-offset-1 hover:ring-neutral-300 cursor-pointer transition-all"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-100 mb-4 rounded-sm">
<img alt="Men's Chinos" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="bg-white text-neutral-900 p-2 rounded-full shadow-sm hover:bg-neutral-900 hover:text-white transition-colors">
<span className="iconify" data-height="18" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-neutral-900">Technical Chino</h3>
<p className="text-xs text-neutral-500 mt-1">Nylon Blend / Khaki</p>
</div>
<span className="text-sm font-medium text-neutral-900">$135</span>
</div>
<div className="flex gap-2 mt-3">
<div className="w-3 h-3 rounded-full bg-[#8f8c85] ring-1 ring-offset-1 ring-neutral-300 cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-neutral-900 hover:ring-1 hover:ring-offset-1 hover:ring-neutral-300 cursor-pointer transition-all"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-100 mb-4 rounded-sm">
<img alt="Men's Hoodie" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="bg-white text-neutral-900 p-2 rounded-full shadow-sm hover:bg-neutral-900 hover:text-white transition-colors">
<span className="iconify" data-height="18" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-neutral-900">Structure Hoodie</h3>
<p className="text-xs text-neutral-500 mt-1">French Terry / Ash</p>
</div>
<span className="text-sm font-medium text-neutral-900">$110</span>
</div>
<div className="flex gap-2 mt-3">
<div className="w-3 h-3 rounded-full bg-[#a3a3a3] ring-1 ring-offset-1 ring-neutral-300 cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800 hover:ring-1 hover:ring-offset-1 hover:ring-neutral-300 cursor-pointer transition-all"></div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 py-24 border-t border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="grid grid-cols-2 gap-4">
<img alt="Fabric Detail" className="rounded-sm w-full h-64 object-cover grayscale opacity-90" src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&amp;w=2010&amp;auto=format&amp;fit=crop"/>
<img alt="Men's Studio Shot" className="rounded-sm w-full h-64 object-cover grayscale opacity-90 translate-y-8" src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="flex items-center gap-2 mb-6">
<span className="h-px w-8 bg-neutral-300"></span>
<span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Design Philosophy</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 text-neutral-900">
                        Built for the <br/> <span className="text-neutral-400">long haul.</span>
</h2>
<p className="text-neutral-600 leading-relaxed mb-8 max-w-md">
                        We don't chase trends. We engineer systems. Each garment is designed to integrate seamlessly with the next, creating a utilitarian wardrobe that works as hard as you do.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div>
<span className="iconify text-neutral-900 mb-3" data-height="24" data-icon="lucide:ruler" data-strokeWidth="1.5" data-width="24"></span>
<h4 className="text-sm font-semibold mb-1">Tailored Fit</h4>
<p className="text-xs text-neutral-500 leading-normal">Cut for movement with a structured shoulder.</p>
</div>
<div>
<span className="iconify text-neutral-900 mb-3" data-height="24" data-icon="lucide:shield" data-strokeWidth="1.5" data-width="24"></span>
<h4 className="text-sm font-semibold mb-1">Durable Grade</h4>
<p className="text-xs text-neutral-500 leading-normal">Materials tested for abrasion and longevity.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-[600px] flex items-center justify-center">
<img alt="Men's Lookbook" className="absolute inset-0 w-full h-full object-cover object-top grayscale" src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-900/40"></div>
<div className="relative z-10 text-center px-4">
<h2 className="text-4xl md:text-6xl text-white font-medium tracking-tighter mb-4">The Urban Commuter</h2>
<p className="text-white/80 text-lg mb-8 max-w-xl mx-auto font-light">
                Technical fabrics meet sharp tailoring.
            </p>
<button className="bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-3 text-sm font-medium transition-colors border-0">
                Explore The Edit
            </button>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">

<div className="md:col-span-4">
<a className="text-lg tracking-tighter font-semibold uppercase mb-6 inline-block" href="#">Placina</a>
<p className="text-neutral-500 text-sm leading-relaxed max-w-xs mb-6">
                        Defining the new standard for men's apparel. <br/>Minimalist design, maximum utility.
                    </p>
<div className="flex space-x-4">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<span className="iconify" data-height="20" data-icon="lucide:instagram" data-strokeWidth="1.5" data-width="20"></span>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<span className="iconify" data-height="20" data-icon="lucide:twitter" data-strokeWidth="1.5" data-width="20"></span>
</a>
</div>
</div>

<div className="md:col-span-2">
<h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-6">Shop</h4>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Outerwear</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Denim</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Accessories</a></li>
</ul>
</div>

<div className="md:col-span-2">
<h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-6">Support</h4>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">FAQ</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Size Guide</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div className="md:col-span-4">
<h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-6">Stay Updated</h4>
<p className="text-sm text-neutral-500 mb-4">Subscribe for exclusive access to drops and events.</p>
<form className="flex w-full gap-2">
<div className="relative w-full">
<input className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 placeholder:text-neutral-400 transition-all" placeholder="Email address" type="email"/>
</div>
<button className="bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-neutral-800 transition-colors" type="button">
                            Join
                        </button>
</form>
</div>
</div>

<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400">© 2024 Placina Menswear. All rights reserved.</p>
<div className="flex space-x-6">
<a className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
