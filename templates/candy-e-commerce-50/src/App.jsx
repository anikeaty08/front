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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<nav className="sticky top-0 z-50 bg-[#FCFAF8]/80 backdrop-blur-md border-b border-[#EAE5DF]">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">

<a className="flex items-center gap-2 group" href="#">
<span className="text-2xl font-semibold tracking-tight">O<span className="text-[#E32C1A]">kinder</span></span>
</a>

<div className="flex-1 max-w-2xl relative hidden md:block group">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#E32C1A] transition-colors" data-lucide="search" strokeWidth="1.5"></i>
<input __gchrome_uniqueid="1" className="w-full h-12 pl-12 pr-4 bg-white border border-[#EAE5DF] rounded-full text-base outline-none focus:border-[#E32C1A] focus:ring-1 focus:ring-[#E32C1A] transition-all placeholder:text-gray-400 shadow-sm" placeholder="I search" type="text"/>
</div>

<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-1 text-base font-medium hover:text-[#E32C1A] transition-colors" href="#">
                    Boxen <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
<button className="flex flex-col items-center gap-1 hover:text-[#E32C1A] transition-colors">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
<span className="text-xs font-medium uppercase tracking-wider">Account</span>
</button>
<button className="relative hover:text-[#E32C1A] transition-colors">
<i className="w-6 h-6" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#E32C1A] text-white text-[10px] font-semibold rounded-full flex items-center justify-center">2</span>
</button>
</div>
</div>

<div className="bg-[#EAE5DF]/50 border-b border-[#EAE5DF]">
<ul className="max-w-7xl mx-auto px-6 flex items-center justify-center md:justify-start gap-8 h-12 overflow-x-auto hide-scrollbar text-base font-medium">
<li><a className="hover:text-[#E32C1A] transition-colors whitespace-nowrap" href="#">Toys</a></li>
<li className="w-px h-4 bg-gray-300"></li>
<li><a className="text-[#E32C1A] whitespace-nowrap" href="#">Shop</a></li>
<li className="w-px h-4 bg-gray-300"></li>
<li className=""><a className="hover:text-[#E32C1A] transition-colors whitespace-nowrap" href="#">About Us</a></li>
<li className="w-px h-4 bg-gray-300"></li>
<li><a className="hover:text-[#E32C1A] transition-colors whitespace-nowrap" href="#">Contact us</a></li>
</ul>
</div>

<div className="bg-white border-b border-[#EAE5DF] shadow-sm">
<ul className="max-w-7xl mx-auto px-6 flex items-center gap-6 h-10 text-base">
<li><a className="text-[#6A3C1D] font-medium border-b-2 border-[#6A3C1D] py-2" href="#">Kinder Eggs</a></li>
<li><a className="text-gray-500 hover:text-[#6A3C1D] py-2 transition-colors" href="#">Kinder Bueno</a></li>
<li><a className="text-gray-500 hover:text-[#6A3C1D] py-2 transition-colors hidden sm:block" href="#">Kinder Chocolate</a></li>
</ul>
</div>
</nav>
<main>

<section className="relative pt-12 pb-24 overflow-hidden">

<svg className="absolute top-0 left-0 w-full h-24 sm:h-32 text-[#E32C1A] fill-current" preserveaspectratio="none" viewbox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
<path d="M0,0 L1440,0 L1440,20 C1380,60 1320,80 1260,60 C1200,40 1140,20 1080,40 C1020,60 960,80 900,60 C840,40 780,20 720,40 C660,60 600,80 540,60 C480,40 420,20 360,40 C300,60 240,80 180,60 C120,40 60,20 0,40 L0,0 Z"></path>

<path d="M150,50 Q160,80 150,90 Q140,80 150,50" fill="#FCFAF8" opacity="0.9"></path>
<circle cx="170" cy="70" fill="#FCFAF8" opacity="0.8" r="4"></circle>
</svg>
<div className="max-w-7xl mx-auto px-6 pt-16 relative z-10 grid lg:grid-cols-2 gap-16 items-start">

<div className="space-y-12">
<h1 className="text-7xl sm:text-8xl md:text-9xl font-semibold tracking-tight leading-none">
<span className="text-[#1F1A17]">K</span><span className="text-[#E32C1A]">inder</span><br/>
<span className="text-[#6A3C1D]">Shop</span>
</h1>

<div className="flex flex-col sm:flex-row items-end gap-8 mt-12">

<div className="relative group">
<div className="absolute -inset-4 bg-white rounded-[3rem] shadow-xl shadow-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="relative bg-white rounded-3xl p-8 border border-[#EAE5DF] shadow-sm flex flex-col items-center justify-center w-[280px] h-[340px]">

<img alt="Kinder Surprise" className="w-full h-auto object-contain drop-shadow-md" src="https://placehold.co/200x260/ffffff/E32C1A?text=Surprise\nHarry+Potter"/>
<div className="absolute top-4 right-4 bg-[#F4EBE1] text-[#6A3C1D] px-3 py-1 rounded-full text-xs font-semibold tracking-tight border border-[#D5C7B8]">Harry Potter</div>
</div>
<p className="mt-6 text-3xl font-semibold tracking-tight text-[#6A3C1D] text-center">2.13 $</p>
</div>

<div className="flex flex-row sm:flex-col gap-4">

<button className="bg-white rounded-2xl p-4 border border-[#EAE5DF] shadow-sm hover:border-[#E32C1A] transition-colors w-24 h-32 flex items-center justify-center relative focus:ring-2 focus:ring-[#E32C1A] outline-none">
<img alt="Kinder Joy" className="w-full h-full object-contain" src="https://placehold.co/60x80/ffffff/0063A6?text=Joy"/>
</button>

<button className="bg-white rounded-2xl p-4 border-2 border-[#E32C1A] shadow-md w-24 h-32 flex items-center justify-center relative focus:ring-2 focus:ring-[#E32C1A] outline-none">
<div className="absolute -top-3 -right-3 bg-[#FF9500] text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-sm rotate-12">NEW!</div>
<img alt="Kinder Egg" className="w-full h-full object-contain" src="https://placehold.co/60x80/ffffff/E32C1A?text=Egg"/>
</button>

<button className="bg-white rounded-2xl p-4 border border-[#EAE5DF] hover:border-gray-400 transition-colors w-24 h-32 flex items-center justify-center relative focus:ring-2 focus:ring-[#E32C1A] outline-none">
<div className="w-12 h-16 border-2 border-dashed border-gray-300 rounded-[50%_50%_50%_50%/60%_60%_40%_40%]"></div>
</button>
<p className="mt-2 text-xl font-semibold tracking-tight text-[#6A3C1D] text-center hidden sm:block">2.95 $</p>
</div>
</div>
</div>

<div className="hidden lg:block relative h-full w-full">
<div className="absolute right-0 top-12 w-80 bg-white rounded-2xl shadow-2xl border border-[#EAE5DF] p-6 text-lg">
<h3 className="text-xl font-semibold tracking-tight text-[#1F1A17] mb-4 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i> search
                        </h3>
<div className="h-px w-full bg-[#EAE5DF] mb-4"></div>
<ul className="space-y-3 text-gray-600">
<li><a className="block hover:text-[#E32C1A] hover:bg-[#FCFAF8] px-2 py-1 -mx-2 rounded-lg transition-colors" href="#">Chocolate...</a></li>
<li><a className="block hover:text-[#E32C1A] hover:bg-[#FCFAF8] px-2 py-1 -mx-2 rounded-lg transition-colors" href="#">kinder eggs...</a></li>
<li><a className="block hover:text-[#E32C1A] hover:bg-[#FCFAF8] px-2 py-1 -mx-2 rounded-lg transition-colors" href="#">kinder bueno...</a></li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 border-t border-[#EAE5DF]">
<div className="flex items-end justify-between mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-[#1F1A17]">Shop Favorites</h2>
<a className="text-base font-medium text-[#E32C1A] hover:text-[#c42516] flex items-center gap-1 transition-colors" href="#">
                    View all <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-[#F4F1ED] rounded-2xl p-6 h-80 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#EBE7E0] hover:shadow-md">
<img alt="Kinder Country" className="w-auto h-48 object-contain transition-transform duration-500 group-hover:scale-105" src="https://placehold.co/120x200/ffffff/0063A6?text=Country"/>
<div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full px-6">
<button className="w-full bg-white text-[#1F1A17] font-medium py-3 rounded-xl shadow-sm hover:bg-[#E32C1A] hover:text-white transition-colors">Add to bag</button>
</div>
</div>

<div className="group relative bg-[#F4F1ED] rounded-2xl p-6 h-80 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#EBE7E0] hover:shadow-md">
<img alt="Kinder Bueno" className="w-auto h-32 object-contain transition-transform duration-500 group-hover:scale-105" src="https://placehold.co/200x100/ffffff/E32C1A?text=Bueno"/>
<div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full px-6">
<button className="w-full bg-white text-[#1F1A17] font-medium py-3 rounded-xl shadow-sm hover:bg-[#E32C1A] hover:text-white transition-colors">Add to bag</button>
</div>
</div>

<div className="group relative bg-[#F4F1ED] rounded-2xl p-6 h-80 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#EBE7E0] hover:shadow-md">
<img alt="Kinder Bueno White" className="w-auto h-32 object-contain transition-transform duration-500 group-hover:scale-105" src="https://placehold.co/200x100/ffffff/6A3C1D?text=Bueno+White"/>
<div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full px-6">
<button className="w-full bg-white text-[#1F1A17] font-medium py-3 rounded-xl shadow-sm hover:bg-[#E32C1A] hover:text-white transition-colors">Add to bag</button>
</div>
</div>

<div className="group relative bg-[#F4F1ED] rounded-2xl p-6 h-80 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#EBE7E0] hover:shadow-md">
<img alt="Kinder Bueno Mini" className="w-auto h-32 object-contain transition-transform duration-500 group-hover:scale-105" src="https://placehold.co/200x100/ffffff/0063A6?text=Bueno+Mini"/>
<div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full px-6">
<button className="w-full bg-white text-[#1F1A17] font-medium py-3 rounded-xl shadow-sm hover:bg-[#E32C1A] hover:text-white transition-colors">Add to bag</button>
</div>
</div>

<div className="group relative bg-[#F4F1ED] rounded-2xl p-6 h-80 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#EBE7E0] hover:shadow-md sm:col-span-2">
<img alt="Kinder Chocolate" className="w-auto h-40 object-contain transition-transform duration-500 group-hover:scale-105" src="https://placehold.co/300x150/ffffff/0063A6?text=Kinder+Chocolate"/>
<div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full max-w-xs px-6">
<button className="w-full bg-white text-[#1F1A17] font-medium py-3 rounded-xl shadow-sm hover:bg-[#E32C1A] hover:text-white transition-colors">Add to bag</button>
</div>
</div>

<div className="group relative bg-[#F4F1ED] rounded-2xl p-6 h-80 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#EBE7E0] hover:shadow-md">
<img alt="Kinder MAXI" className="w-auto h-16 object-contain transition-transform duration-500 group-hover:scale-105" src="https://placehold.co/200x60/ffffff/E32C1A?text=Kinder+MAXI"/>
<div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full px-6">
<button className="w-full bg-white text-[#1F1A17] font-medium py-3 rounded-xl shadow-sm hover:bg-[#E32C1A] hover:text-white transition-colors">Add to bag</button>
</div>
</div>

<div className="group relative bg-[#F4F1ED] rounded-2xl p-6 h-80 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#EBE7E0] hover:shadow-md">
<img alt="Nutella B-ready" className="w-auto h-44 object-contain transition-transform duration-500 group-hover:scale-105" src="https://placehold.co/150x180/ffffff/6A3C1D?text=Nutella+B-ready"/>
<div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full px-6">
<button className="w-full bg-white text-[#1F1A17] font-medium py-3 rounded-xl shadow-sm hover:bg-[#E32C1A] hover:text-white transition-colors">Add to bag</button>
</div>
</div>
</div>
</section>

<section className="mt-12 bg-[#E32C1A] text-white py-24 relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
<span className="px-4 py-1.5 rounded-full border border-white/30 text-base font-medium mb-8 backdrop-blur-sm">New Collection</span>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl leading-tight mb-8">
                    Discover the joy of our seasonal specials.
                </h2>
<p className="text-xl text-white/80 max-w-2xl mb-12">
                    Carefully crafted with more milk and less cocoa, bringing smiles to every moment.
                </p>
<button className="bg-white text-[#E32C1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FCFAF8] transition-colors shadow-lg flex items-center gap-2">
                    Explore Seasonals <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative rounded-3xl overflow-hidden bg-[#F4F1ED] aspect-square flex items-center justify-center p-12">
<div className="grid grid-cols-2 gap-4 w-full h-full">
<div className="bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center p-6 gap-4">
<div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
<i className="w-8 h-8" data-lucide="droplets" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium text-center">Quality Milk</span>
</div>
<div className="bg-[#6A3C1D] text-white rounded-2xl shadow-sm flex flex-col items-center justify-center p-6 gap-4 transform translate-y-8">
<div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
<i className="w-8 h-8" data-lucide="bean" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium text-center">Fine Cocoa</span>
</div>
</div>
</div>
<div className="order-1 md:order-2 space-y-8">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1F1A17]">Made with care,<br/>shared with love.</h2>
<p className="text-lg text-gray-600 leading-relaxed">
                        At Kinder, we believe in small portions that bring big smiles. Our products are crafted with carefully selected ingredients, always prioritizing quality and taste.
                    </p>
<ul className="space-y-4 text-lg text-[#1F1A17] font-medium">
<li className="flex items-center gap-3">
<i className="w-6 h-6 text-[#E32C1A]" data-lucide="check-circle-2" strokeWidth="1.5"></i> No artificial colors
                        </li>
<li className="flex items-center gap-3">
<i className="w-6 h-6 text-[#E32C1A]" data-lucide="check-circle-2" strokeWidth="1.5"></i> No artificial preservatives
                        </li>
<li className="flex items-center gap-3">
<i className="w-6 h-6 text-[#E32C1A]" data-lucide="check-circle-2" strokeWidth="1.5"></i> High quality milk
                        </li>
</ul>
</div>
</div>
</section>
</main>

<footer className="bg-[#1F1A17] text-[#FCFAF8] py-20 border-t border-[#6A3C1D]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2 space-y-6">
<span className="text-3xl font-semibold tracking-tight text-white">O<span className="text-[#E32C1A]">kinder</span></span>
<p className="text-lg text-gray-400 max-w-sm">
                    Bringing joy through small, delicious moments since the beginning.
                </p>
<div className="flex gap-4 pt-4">
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E32C1A] transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E32C1A] transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E32C1A] transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
</div>
</div>
<div className="space-y-6">
<h4 className="text-lg font-semibold tracking-tight text-white">Shop</h4>
<ul className="space-y-4 text-base text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-white transition-colors" href="#">Kinder Surprise</a></li>
<li><a className="hover:text-white transition-colors" href="#">Chocolate Bars</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-lg font-semibold tracking-tight text-white">Support</h4>
<ul className="space-y-4 text-base text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping Returns</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-base text-gray-500">
<p>© 2023 Okinder Shop Mockup. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
