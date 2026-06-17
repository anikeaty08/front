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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Poppins', 'sans-serif'],
},
colors: {
stiletto: '#FF34AC',
dark: '#000000',
light: '#FFFFFF',
charcoal: '#242424'
},
boxShadow: {
'product': '2px -1px 8px 3px rgba(0, 0, 0, 0.4)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const header = document.getElementById('main-header');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('shadow-[0_4px_20px_rgba(0,0,0,0.8)]');
                    header.classList.replace('py-4', 'py-2');
                } else {
                    header.classList.remove('shadow-[0_4px_20px_rgba(0,0,0,0.8)]');
                    header.classList.replace('py-2', 'py-4');
                }
            });
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
      

<div className="bg-stiletto text-white py-2 text-center text-xs font-semibold uppercase tracking-wider">
        Free Shipping on U.S. Orders Over $150
    </div>

<header className="sticky top-0 z-50 bg-dark border-b-2 border-stiletto/20 transition-all duration-300" id="main-header">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center lg:hidden">
<button className="text-white hover:text-stiletto transition">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>

<div className="flex-shrink-0 flex items-center">
<a className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-2" href="#">
                        STILETTO
                    </a>
</div>

<nav className="hidden lg:flex space-x-10">
<a className="text-white hover:text-stiletto uppercase font-semibold text-sm tracking-wide transition-colors" href="#">Shop All</a>
<a className="text-white hover:text-stiletto uppercase font-semibold text-sm tracking-wide transition-colors" href="#">Needles</a>
<a className="text-white hover:text-stiletto uppercase font-semibold text-sm tracking-wide transition-colors" href="#">Jewelry</a>
<a className="text-white hover:text-stiletto uppercase font-semibold text-sm tracking-wide transition-colors" href="#">The Disruption</a>
</nav>

<div className="flex items-center space-x-6">
<button className="text-white hover:text-stiletto transition">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="text-white hover:text-stiletto transition hidden sm:block">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="text-white hover:text-stiletto transition relative">
<iconify-icon icon="solar:cart-large-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute -top-2 -right-2 bg-stiletto text-white text-xs font-bold px-1.5 py-0.5 leading-none">0</span>
</button>
</div>
</div>
</div>
</header>

<section className="relative h-screen min-h-[600px] flex items-center bg-dark overflow-hidden">

<div className="absolute inset-0 w-full h-full">
<img alt="Piercing Setup" className="w-full h-full object-cover object-center opacity-50" src="https://stilettosupply.com/wp-content/uploads/2022/04/Stiletto-Slider-NoCurve.jpg?id=21"/>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="max-w-3xl">
<h1 className="text-6xl sm:text-7xl lg:text-9xl font-black uppercase text-white leading-none tracking-tighter mb-6 drop-shadow-2xl">
                    Precision.<br/>
<span className="text-stiletto">Evolved.</span>
</h1>
<p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-xl font-medium">
                    The next generation of single-use, sterile piercing tools. Engineered for professionals who demand zero compromise.
                </p>
<div className="flex flex-wrap gap-4">
<a className="bg-stiletto text-white uppercase font-semibold text-base px-10 py-5 hover:bg-white hover:text-dark transition-colors duration-300 shadow-[4px_4px_0px_rgba(255,255,255,0.2)]" href="#">
                        Shop Collection
                    </a>
<a className="bg-transparent border-2 border-white text-white uppercase font-semibold text-base px-10 py-5 hover:bg-white hover:text-dark transition-colors duration-300" href="#">
                        View Lookbook
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-light text-dark relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative pl-6 sm:pl-10">

<div className="absolute left-0 top-0 bottom-0 w-[5px] bg-stiletto"></div>
<h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter mb-2 text-stroke-black opacity-20 relative -left-4">
                        Modern Tech
                    </h2>
<h3 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight mb-6">
                        The Disruption
                    </h3>
<p className="text-base text-gray-700 leading-relaxed mb-6 font-medium">
                        We are fundamentally changing how the industry operates. Moving away from outdated sterilization rooms to high-tech, pre-sterilized disposables.
                    </p>
<p className="text-base text-gray-700 leading-relaxed mb-10">
                        Every needle, every tool, engineered to perfection and ready the moment you open the blister pack. Less time prepping, more time piercing.
                    </p>
<a className="inline-block border-2 border-dark text-dark uppercase font-semibold text-sm px-8 py-4 hover:bg-stiletto hover:border-stiletto hover:text-white transition-all duration-300 shadow-[4px_4px_0px_#000] hover:shadow-none translate-x-0 hover:translate-x-[4px] hover:translate-y-[4px]" href="#">
                        Learn The Process
                    </a>
</div>

<div className="relative mt-12 lg:mt-0 z-10 group">
<div className="absolute inset-0 bg-stiletto translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
<img alt="Helios Product" className="w-full h-auto object-cover border-2 border-dark relative z-10 filter contrast-125 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://stilettosupply.com/wp-content/uploads/2024/08/Helios-3-b-scaled.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark border-t border-gray-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-4xl sm:text-5xl font-bold text-white uppercase tracking-tighter">Professional Gear</h2>
<div className="h-1 w-24 bg-stiletto mt-4"></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<a className="relative block group h-[400px] overflow-hidden border border-gray-800 bg-black" href="#">
<img alt="Needles" className="w-full h-full object-cover object-center opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" src="https://stilettosupply.com/wp-content/uploads/2024/09/STILBC-V4-nologo-550x450.jpg"/>
<div className="absolute bottom-0 left-0 right-0 bg-[rgba(255,52,172,0.85)] backdrop-blur-sm p-6 flex items-center justify-between transform translate-y-0 transition-transform">
<span className="text-white font-bold uppercase tracking-widest text-lg">Cannulas</span>
<iconify-icon className="text-white text-2xl group-hover:rotate-45 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>

<a className="relative block group h-[400px] overflow-hidden border border-gray-800 bg-black" href="#">
<img alt="Tools" className="w-full h-full object-cover object-center opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" src="https://stilettosupply.com/wp-content/uploads/2024/10/21ab77f1-7a25-2dbf-8ac1-77edd7de2e9c-0-2-550x450.jpg"/>
<div className="absolute bottom-0 left-0 right-0 bg-[rgba(255,52,172,0.85)] backdrop-blur-sm p-6 flex items-center justify-between transform translate-y-0 transition-transform">
<span className="text-white font-bold uppercase tracking-widest text-lg">Forceps</span>
<iconify-icon className="text-white text-2xl group-hover:rotate-45 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>

<a className="relative block group h-[400px] overflow-hidden border border-gray-800 bg-black md:col-span-2 lg:col-span-1" href="#">
<img alt="Jewelry" className="w-full h-full object-cover object-center opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" src="https://stilettosupply.com/wp-content/uploads/2024/10/IMG_1183-scaled-550x450.jpeg"/>
<div className="absolute bottom-0 left-0 right-0 bg-[rgba(255,52,172,0.85)] backdrop-blur-sm p-6 flex items-center justify-between transform translate-y-0 transition-transform">
<span className="text-white font-bold uppercase tracking-widest text-lg">Jewelry</span>
<iconify-icon className="text-white text-2xl group-hover:rotate-45 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-gray-100 text-dark relative">

<div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'url(\'https://stilettosupply.com/images/ui-icons_444444_256x240.png\')', backgroundRepeat: 'repeat'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<h2 className="text-4xl sm:text-5xl font-bold text-dark uppercase tracking-tighter text-center mb-16">
                Latest Drops
            </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white shadow-product border-2 border-dark flex flex-col group hover:-translate-y-2 transition-transform duration-300">
<div className="relative overflow-hidden aspect-square border-b-2 border-dark bg-gray-50 flex items-center justify-center p-4">
<img alt="CBR" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://stilettosupply.com/wp-content/uploads/2024/07/Captive-Bead-Ring-scaled.jpg?id=2512"/>
<div className="absolute top-2 right-2 bg-dark text-white text-xs font-bold uppercase px-2 py-1">New</div>
</div>
<div className="p-6 flex flex-col flex-grow bg-white">
<h4 className="font-bold text-lg uppercase tracking-tight mb-1 text-dark line-clamp-2">Captive Bead Ring</h4>
<p className="text-gray-500 text-sm mb-4 font-medium">Titanium Grade 23</p>
<div className="mt-auto flex items-center justify-between">
<span className="font-black text-xl text-dark">$14.00</span>
<button className="bg-stiletto text-white w-10 h-10 flex items-center justify-center hover:bg-dark transition-colors">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white shadow-product border-2 border-dark flex flex-col group hover:-translate-y-2 transition-transform duration-300">
<div className="relative overflow-hidden aspect-square border-b-2 border-dark bg-gray-50 flex items-center justify-center p-4">
<img alt="Gold Ring" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://stilettosupply.com/wp-content/uploads/2024/08/Gold-Fixed-Bead-Ring-b.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow bg-white">
<h4 className="font-bold text-lg uppercase tracking-tight mb-1 text-dark line-clamp-2">Fixed Bead Ring</h4>
<p className="text-gray-500 text-sm mb-4 font-medium">14k Solid Gold</p>
<div className="mt-auto flex items-center justify-between">
<span className="font-black text-xl text-dark">$85.00</span>
<button className="bg-stiletto text-white w-10 h-10 flex items-center justify-center hover:bg-dark transition-colors">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white shadow-product border-2 border-dark flex flex-col group hover:-translate-y-2 transition-transform duration-300">
<div className="relative overflow-hidden aspect-square border-b-2 border-dark bg-gray-50 flex items-center justify-center p-4">
<img alt="Pin" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://stilettosupply.com/wp-content/uploads/2024/12/14GPFpin-scaled-550x450.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow bg-white">
<h4 className="font-bold text-lg uppercase tracking-tight mb-1 text-dark line-clamp-2">Insertion Pin</h4>
<p className="text-gray-500 text-sm mb-4 font-medium">14G Medical Grade</p>
<div className="mt-auto flex items-center justify-between">
<span className="font-black text-xl text-dark">$8.50</span>
<button className="bg-stiletto text-white w-10 h-10 flex items-center justify-center hover:bg-dark transition-colors">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white shadow-product border-2 border-dark flex flex-col group hover:-translate-y-2 transition-transform duration-300">
<div className="relative overflow-hidden aspect-square border-b-2 border-dark bg-gray-50 flex items-center justify-center p-4">
<img alt="Forceps" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://stilettosupply.com/wp-content/uploads/2024/10/IMG_0055a-scaled-550x450.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow bg-white">
<h4 className="font-bold text-lg uppercase tracking-tight mb-1 text-dark line-clamp-2">Pennington Forceps</h4>
<p className="text-gray-500 text-sm mb-4 font-medium">Slotted, Disposable</p>
<div className="mt-auto flex items-center justify-between">
<span className="font-black text-xl text-dark">$18.00</span>
<button className="bg-stiletto text-white w-10 h-10 flex items-center justify-center hover:bg-dark transition-colors">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-block bg-dark text-white uppercase font-semibold text-sm px-10 py-4 hover:bg-stiletto transition-colors duration-300 shadow-stiletto-right" href="#">
                    View Full Catalog
                </a>
</div>
</div>
</section>

<section className="bg-dark text-white border-t-2 border-stiletto">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="p-16 lg:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-800">
<iconify-icon className="text-stiletto text-5xl mb-6" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-3xl font-bold uppercase tracking-tight mb-4">Medical Grade Standards</h3>
<p className="text-gray-400 font-medium max-w-md">All equipment is sterilized using EO gas and individually blister packaged to ensure the highest level of safety for your clients.</p>
</div>
<div className="p-16 lg:p-24 flex flex-col justify-center">
<iconify-icon className="text-stiletto text-5xl mb-6" icon="solar:box-linear"></iconify-icon>
<h3 className="text-3xl font-bold uppercase tracking-tight mb-4">Wholesale Supply</h3>
<p className="text-gray-400 font-medium max-w-md">Register for a professional account to access bulk pricing, faster checkout, and exclusive industry-only drops.</p>
</div>
</div>
</section>

<footer className="bg-dark text-white pt-20 pb-10 border-t border-gray-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 lg:col-span-1">
<a className="text-3xl font-black text-white uppercase tracking-tighter block mb-6" href="#">
                        STILETTO
                    </a>
<p className="text-sm text-gray-400 font-medium mb-6">
                        The future of piercing is disposable. High-quality, sterile, and ready to use. Designed by professionals, for professionals.
                    </p>
<div className="flex space-x-4">
<a className="w-10 h-10 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-stiletto hover:bg-stiletto transition-all" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-stiletto hover:bg-stiletto transition-all" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-lg font-bold uppercase tracking-tight mb-6 border-l-2 border-stiletto pl-3">Shop</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-stiletto transition uppercase font-semibold" href="#">Piercing Needles</a></li>
<li><a className="text-sm text-gray-400 hover:text-stiletto transition uppercase font-semibold" href="#">Disposable Tools</a></li>
<li><a className="text-sm text-gray-400 hover:text-stiletto transition uppercase font-semibold" href="#">Basic Jewelry</a></li>
<li><a className="text-sm text-gray-400 hover:text-stiletto transition uppercase font-semibold" href="#">Aftercare</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-bold uppercase tracking-tight mb-6 border-l-2 border-stiletto pl-3">Support</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-stiletto transition uppercase font-semibold" href="#">My Account</a></li>
<li><a className="text-sm text-gray-400 hover:text-stiletto transition uppercase font-semibold" href="#">Track Order</a></li>
<li><a className="text-sm text-gray-400 hover:text-stiletto transition uppercase font-semibold" href="#">Shipping &amp; Returns</a></li>
<li><a className="text-sm text-gray-400 hover:text-stiletto transition uppercase font-semibold" href="#">Contact Us</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-bold uppercase tracking-tight mb-6 border-l-2 border-stiletto pl-3">Stay Sharp</h4>
<p className="text-sm text-gray-400 mb-4 font-medium">Subscribe for new product drops and professional discounts.</p>
<form className="flex flex-col gap-2">
<input className="bg-transparent border-2 border-gray-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-stiletto transition-colors font-medium placeholder-gray-600" placeholder="ENTER EMAIL ADDRESS" type="email"/>
<button className="bg-stiletto text-white uppercase font-bold text-sm px-4 py-3 hover:bg-white hover:text-dark transition-colors" type="button">Subscribe</button>
</form>
</div>
</div>

<div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-600 font-semibold uppercase tracking-wider">© 2024 Stiletto Supply. All Rights Reserved.</p>
<div className="flex space-x-6 text-xs text-gray-600 font-semibold uppercase tracking-wider">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
