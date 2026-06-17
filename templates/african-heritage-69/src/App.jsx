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



function switchPage(pageId) {
document.querySelectorAll('.page-view').forEach(el => el.classList.add('hidden'));
document.getElementById('view-' + pageId).classList.remove('hidden');
window.scrollTo({ top: 0, behavior: 'smooth' });
}
function toggleDropdown(id) {
const el = document.getElementById(id);
if (el.classList.contains('hidden')) {
el.classList.remove('hidden');
} else {
el.classList.add('hidden');
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
      

<nav className="absolute top-0 left-0 w-full z-50 border-b border-white/20">
<div className="flex max-w-7xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<div className="hidden md:flex items-center space-x-8 text-white uppercase tracking-[0.2em] text-xs font-light">
<button className="hover:text-[#C9A84C] transition-colors duration-300" onclick="switchPage('shop')">Shop</button>
<button className="hover:text-[#C9A84C] transition-colors duration-300" onclick="switchPage('corporate')">Corporate</button>
<button className="hover:text-[#C9A84C] transition-colors duration-300" onclick="switchPage('story')">Story</button>
<button className="hover:text-[#C9A84C] transition-colors duration-300" onclick="switchPage('journal')">Journal</button>
</div>
<button className="text-white text-2xl tracking-tighter uppercase font-medium absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0" onclick="switchPage('home')" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                Mawilo
            </button>
<div className="flex items-center space-x-6 text-white ml-auto md:ml-0">
<a className="hover:text-[#C9A84C] transition-colors duration-300 hidden sm:block" href="#">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</a>
<a className="hover:text-[#C9A84C] transition-colors duration-300 hidden sm:block" href="#">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</a>
<a className="hover:text-[#C9A84C] transition-colors duration-300 relative" href="#">
<iconify-icon className="text-xl" icon="solar:bag-2-linear"></iconify-icon>
<span className="absolute -top-1 -right-2 bg-[#C9A84C] text-white text-[0.65rem] rounded-full h-4 w-4 flex items-center justify-center">0</span>
</a>
<button className="md:hidden hover:text-[#C9A84C] transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="flex-grow">

<div className="page-view block" id="view-home">

<header className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
<div className="absolute inset-0 w-full h-full bg-[#1A1A1A]">
<img alt="African Heritage Lifestyle" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1615800098779-1be32e60cca3?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center mt-20">
<span className="text-[#F0EAD6] uppercase tracking-[0.3em] text-xs font-extralight mb-6 border-b border-[#C9A84C] pb-2">Kenyan Heritage Gifting</span>
<h1 className="text-[#F0EAD6] text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 font-light leading-none" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                        Woven With Purpose.<br/>Made With Love.
                    </h1>
<p className="text-[#F0EAD6]/80 font-light text-base md:text-lg mb-12 max-w-xl mx-auto">
                        Elevating everyday living with authentic African craftsmanship. Discover our curated collection of artisanal home decor, textiles, and bespoke gifting.
                    </p>
<button className="bg-[#C9A84C] text-white hover:bg-white hover:text-[#1A1A1A] transition-all duration-500 uppercase tracking-[0.15em] text-xs font-light py-4 px-10" onclick="switchPage('shop')">
                        Shop the Collection
                    </button>
</div>
</header>

<section className="py-24 px-6 bg-[#F0EAD6]">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#C8B89A]/40">
<div className="px-6 py-8 md:py-0 flex flex-col items-center">
<iconify-icon className="text-4xl text-[#C9A84C] mb-6" icon="solar:hand-stars-linear"></iconify-icon>
<h3 className="text-2xl md:text-3xl tracking-tight text-[#1A1A1A] mb-4 font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Authentic Heritage</h3>
<p className="text-sm font-light text-[#1A1A1A]/80 leading-relaxed max-w-xs">
                            Honoring centuries of Kenyan artistry by preserving traditional techniques in every piece we curate.
                        </p>
</div>
<div className="px-6 py-8 md:py-0 flex flex-col items-center">
<iconify-icon className="text-4xl text-[#C9A84C] mb-6" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h3 className="text-2xl md:text-3xl tracking-tight text-[#1A1A1A] mb-4 font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Empowering Artisans</h3>
<p className="text-sm font-light text-[#1A1A1A]/80 leading-relaxed max-w-xs">
                            Partnering directly with local cooperatives to provide sustainable income and celebrate their profound skill.
                        </p>
</div>
<div className="px-6 py-8 md:py-0 flex flex-col items-center">
<iconify-icon className="text-4xl text-[#C9A84C] mb-6" icon="solar:leaf-linear"></iconify-icon>
<h3 className="text-2xl md:text-3xl tracking-tight text-[#1A1A1A] mb-4 font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Sustainable Craft</h3>
<p className="text-sm font-light text-[#1A1A1A]/80 leading-relaxed max-w-xs">
                            Utilizing natural, locally sourced materials from earth-friendly sisal to organic coastal cotton.
                        </p>
</div>
</div>
</section>

<section className="border-t bg-[#C8B89A]/10 border-[#C8B89A]/30 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="uppercase tracking-[0.2em] text-xs font-light text-[#C9A84C]">Curated Selection</span>
<h3 className="text-3xl md:text-5xl tracking-tight text-[#1A1A1A] mt-4 font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Shop by Category</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-12 gap-x-8 gap-y-12">
<button className="group flex flex-col items-center cursor-pointer" onclick="switchPage('shop')">
<div className="w-full aspect-[2/3] overflow-hidden rounded-t-full rounded-b-sm bg-[#C8B89A] mb-6 relative shadow-sm">
<img alt="Maasai Shuka Blankets" className="group-hover:scale-105 transition-transform duration-700 ease-in-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#1A1A1A]/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<h4 className="text-2xl tracking-tight text-[#1A1A1A] font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Maasai Shukas</h4>
<span className="text-[#C9A84C] text-xs tracking-widest uppercase mt-3 group-hover:text-[#1A1A1A] transition-colors font-medium border-b border-transparent group-hover:border-[#1A1A1A] pb-1">Explore</span>
</button>
<button className="group flex flex-col items-center cursor-pointer pt-0 md:pt-12" onclick="switchPage('shop')">
<div className="w-full aspect-[2/3] overflow-hidden rounded-t-full rounded-b-sm bg-[#C8B89A] mb-6 relative shadow-sm">
<img alt="Kikoy Towels" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-[#1A1A1A]/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<h4 className="text-2xl tracking-tight text-[#1A1A1A] font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Kikoy Towels</h4>
<span className="text-[#C9A84C] text-xs tracking-widest uppercase mt-3 group-hover:text-[#1A1A1A] transition-colors font-medium border-b border-transparent group-hover:border-[#1A1A1A] pb-1">Explore</span>
</button>
<button className="group flex flex-col items-center cursor-pointer" onclick="switchPage('shop')">
<div className="w-full aspect-[2/3] overflow-hidden rounded-t-full rounded-b-sm bg-[#C8B89A] mb-6 relative shadow-sm">
<img alt="Handwoven Baskets" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-[#1A1A1A]/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<h4 className="text-2xl tracking-tight text-[#1A1A1A] font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Handwoven Baskets</h4>
<span className="text-[#C9A84C] text-xs tracking-widest uppercase mt-3 group-hover:text-[#1A1A1A] transition-colors font-medium border-b border-transparent group-hover:border-[#1A1A1A] pb-1">Explore</span>
</button>
<button className="group flex flex-col items-center cursor-pointer pt-0 md:pt-12" onclick="switchPage('shop')">
<div className="w-full aspect-[2/3] overflow-hidden rounded-t-full rounded-b-sm bg-[#C8B89A] mb-6 relative shadow-sm">
<img alt="Gift Sets" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1A1A1A]/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<h4 className="text-2xl tracking-tight text-[#1A1A1A] font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Curated Gift Sets</h4>
<span className="text-[#C9A84C] text-xs tracking-widest uppercase mt-3 group-hover:text-[#1A1A1A] transition-colors font-medium border-b border-transparent group-hover:border-[#1A1A1A] pb-1">Explore</span>
</button>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#1A1A1A] text-[#F0EAD6] relative overflow-hidden">
<div className="absolute inset-0 opacity-40">
<img alt="Corporate Gifting Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center">
<span className="uppercase tracking-[0.3em] text-xs font-light mb-4 block text-[#C9A84C]">Bespoke Solutions</span>
<h2 className="text-4xl md:text-6xl tracking-tight mb-8 font-light leading-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Corporate Gifting,<br/>Elevated.</h2>
<p className="text-base font-light opacity-90 mb-10 max-w-xl mx-auto leading-loose">
                        Leave a lasting impression with handcrafted, culturally rich gifts tailored for your clients and team. Every gift box is a bridge between authentic artistry and professional appreciation.
                    </p>
<button className="border-b border-[#C9A84C] pb-1 uppercase tracking-[0.1em] text-xs font-medium hover:text-white transition-colors text-[#C9A84C] flex items-center gap-2 mx-auto" onclick="switchPage('corporate')">
                        Explore Corporate Services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>

<section className="py-32 px-6 bg-[#F0EAD6]">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#C8B89A]/40 pb-6">
<div>
<span className="uppercase tracking-[0.2em] text-xs font-light text-[#C9A84C]">Our Favorites</span>
<h3 className="text-3xl md:text-5xl tracking-tight text-[#1A1A1A] mt-2 font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Featured Arrivals</h3>
</div>
<button className="hidden md:inline-block uppercase tracking-[0.1em] text-xs font-medium border-b border-[#1A1A1A] pb-1 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors mt-6 md:mt-0" onclick="switchPage('shop')">View All</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">

<button className="group relative text-left" onclick="switchPage('product')">
<div className="aspect-[4/5] overflow-hidden bg-[#C8B89A]/30 mb-5 relative rounded-sm shadow-sm">
<span className="absolute top-4 left-4 bg-[#1A1A1A] text-white text-[0.65rem] uppercase tracking-widest px-3 py-1 z-10 font-medium rounded-sm">Wedding</span>
<img alt="Mara Shuka" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
<div className="w-full bg-white/95 backdrop-blur-sm text-[#1A1A1A] py-3 text-center text-[0.7rem] uppercase tracking-widest font-medium rounded-sm shadow-sm hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300">
                                        Quick Add
                                    </div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-xl tracking-tight text-[#1A1A1A] mb-1 font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Mara Red Shuka</h4>
<p className="text-sm font-light text-[#1A1A1A]/70">100% Cotton</p>
</div>
<span className="text-sm font-medium">$45.00</span>
</div>
</button>

<button className="group relative text-left" onclick="switchPage('product')">
<div className="aspect-[4/5] overflow-hidden bg-[#C8B89A]/30 mb-5 relative rounded-sm shadow-sm">
<img alt="Sisal Basket" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
<div className="w-full bg-white/95 backdrop-blur-sm text-[#1A1A1A] py-3 text-center text-[0.7rem] uppercase tracking-widest font-medium rounded-sm shadow-sm hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300">
                                        Quick Add
                                    </div>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h4 className="text-xl tracking-tight text-[#1A1A1A] mb-1 font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Nairobi Woven Basket</h4>
<p className="text-sm font-light text-[#1A1A1A]/70">Handwoven Sisal</p>
</div>
<span className="text-sm font-medium">$85.00</span>
</div>
</button>

<button className="group relative text-left" onclick="switchPage('product')">
<div className="aspect-[4/5] overflow-hidden bg-[#C8B89A]/30 mb-5 relative rounded-sm shadow-sm">
<span className="absolute top-4 left-4 bg-white/90 text-[#1A1A1A] text-[0.65rem] uppercase tracking-widest px-3 py-1 z-10 font-medium rounded-sm">Best Seller</span>
<img alt="Kikoy Towel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
<div className="w-full bg-white/95 backdrop-blur-sm text-[#1A1A1A] py-3 text-center text-[0.7rem] uppercase tracking-widest font-medium rounded-sm shadow-sm hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300">
                                        Quick Add
                                    </div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-xl tracking-tight text-[#1A1A1A] mb-1 font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Lamu Blue Kikoy</h4>
<p className="text-sm font-light text-[#1A1A1A]/70">Terry-lined</p>
</div>
<span className="text-sm font-medium">$38.00</span>
</div>
</button>

<button className="group relative text-left" onclick="switchPage('product')">
<div className="aspect-[4/5] overflow-hidden bg-[#C8B89A]/30 mb-5 relative rounded-sm shadow-sm">
<span className="absolute top-4 left-4 bg-white/90 text-[#1A1A1A] text-[0.65rem] uppercase tracking-widest px-3 py-1 z-10 font-medium rounded-sm">New</span>
<img alt="Gift Box" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
<div className="w-full bg-white/95 backdrop-blur-sm text-[#1A1A1A] py-3 text-center text-[0.7rem] uppercase tracking-widest font-medium rounded-sm shadow-sm hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300">
                                        Quick Add
                                    </div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-xl tracking-tight text-[#1A1A1A] mb-1 font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Savanna Gift Box</h4>
<p className="text-sm font-light text-[#1A1A1A]/70">Curated Set</p>
</div>
<span className="text-sm font-medium">$120.00</span>
</div>
</button>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="view-shop">

<header className="relative w-full h-[40vh] md:h-[45vh] flex items-end justify-center text-center overflow-hidden bg-[#1A1A1A] pb-16">
<div className="absolute inset-0 w-full h-full">
<img alt="Shop Collection" className="w-full h-full object-cover opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center">
<span className="text-[#F0EAD6] uppercase tracking-[0.3em] text-[0.65rem] font-medium mb-4 block">Handcrafted Heritage</span>
<h1 className="text-[#F0EAD6] text-5xl md:text-6xl tracking-tight font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                        The Collection
                    </h1>
</div>
</header>

<section className="py-16 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">

<aside className="w-full lg:w-56 flex-shrink-0 hidden lg:block">
<div className="sticky top-24 space-y-12">

<div>
<h3 className="text-[0.65rem] uppercase tracking-[0.2em] font-medium mb-5 text-[#1A1A1A]">Categories</h3>
<ul className="space-y-3.5 text-sm font-light text-[#1A1A1A]/70">
<li><button className="text-[#1A1A1A] font-medium flex justify-between w-full items-center">All Products <span className="text-xs opacity-40">42</span></button></li>
<li><button className="hover:text-[#C9A84C] transition-colors flex justify-between w-full items-center">Maasai Shukas <span className="text-xs opacity-40">12</span></button></li>
<li><button className="hover:text-[#C9A84C] transition-colors flex justify-between w-full items-center">Kikoy Towels <span className="text-xs opacity-40">18</span></button></li>
<li><button className="hover:text-[#C9A84C] transition-colors flex justify-between w-full items-center">Woven Baskets <span className="text-xs opacity-40">8</span></button></li>
<li><button className="hover:text-[#C9A84C] transition-colors flex justify-between w-full items-center">Gift Sets <span className="text-xs opacity-40">4</span></button></li>
</ul>
</div>

<div>
<h3 className="text-[0.65rem] uppercase tracking-[0.2em] font-medium mb-5 text-[#1A1A1A]">Material</h3>
<ul className="space-y-3.5 text-sm font-light text-[#1A1A1A]/70">
<li className="flex items-center gap-3">
<div className="relative flex items-center justify-center">
<input checked="" className="peer appearance-none w-4 h-4 border border-[#1A1A1A]/30 rounded-[2px] checked:bg-[#1A1A1A] checked:border-[#1A1A1A] transition-colors cursor-pointer" type="checkbox"/>
<iconify-icon className="absolute text-white text-[10px] pointer-events-none opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear"></iconify-icon>
</div>
<label className="cursor-pointer hover:text-[#1A1A1A] transition-colors">100% Cotton</label>
</li>
<li className="flex items-center gap-3">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none w-4 h-4 border border-[#1A1A1A]/30 rounded-[2px] checked:bg-[#1A1A1A] checked:border-[#1A1A1A] transition-colors cursor-pointer" type="checkbox"/>
<iconify-icon className="absolute text-white text-[10px] pointer-events-none opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear"></iconify-icon>
</div>
<label className="cursor-pointer hover:text-[#1A1A1A] transition-colors">Natural Sisal</label>
</li>
<li className="flex items-center gap-3">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none w-4 h-4 border border-[#1A1A1A]/30 rounded-[2px] checked:bg-[#1A1A1A] checked:border-[#1A1A1A] transition-colors cursor-pointer" type="checkbox"/>
<iconify-icon className="absolute text-white text-[10px] pointer-events-none opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear"></iconify-icon>
</div>
<label className="cursor-pointer hover:text-[#1A1A1A] transition-colors">Olive Wood</label>
</li>
</ul>
</div>

<div>
<h3 className="text-[0.65rem] uppercase tracking-[0.2em] font-medium mb-5 text-[#1A1A1A]">Price Range</h3>
<div className="space-y-4">
<input className="w-full h-1 bg-[#1A1A1A]/20 rounded-lg appearance-none cursor-pointer accent-[#1A1A1A]" max="200" min="0" type="range" value="150"/>
<div className="flex justify-between text-xs font-light text-[#1A1A1A]/70">
<span>$0</span>
<span>$150+</span>
</div>
</div>
</div>
</div>
</aside>

<div className="flex-1">

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6 border-b border-[#C8B89A]/40 pb-6">

<button className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-medium border border-[#1A1A1A]/20 px-4 py-2 rounded-sm hover:bg-[#1A1A1A]/5 transition-colors">
<iconify-icon className="text-sm" icon="solar:filter-linear"></iconify-icon> Filters
                        </button>

<div className="hidden lg:flex items-center gap-3 flex-wrap">
<span className="text-xs font-medium text-[#1A1A1A]/50 uppercase tracking-widest">Active:</span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#C8B89A]/20 border border-[#C8B89A]/30 text-[0.7rem] font-medium text-[#1A1A1A] uppercase tracking-widest">
                                100% Cotton <button className="hover:text-[#C9A84C] transition-colors flex items-center"><iconify-icon className="text-sm" icon="solar:close-circle-linear"></iconify-icon></button>
</span>
<button className="text-[0.7rem] uppercase tracking-widest font-medium text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors underline underline-offset-4 decoration-[#1A1A1A]/20">Clear All</button>
</div>

<div className="relative ml-auto sm:ml-0 w-full sm:w-auto flex justify-end">
<button className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium hover:text-[#C9A84C] transition-colors" onclick="toggleDropdown('sort-dropdown')">
                                Sort By <iconify-icon className="text-base" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="absolute right-0 top-full mt-3 w-48 bg-[#F0EAD6] border border-[#C8B89A]/40 shadow-xl hidden z-20 flex flex-col py-2 text-left rounded-sm" id="sort-dropdown">
<button className="text-left px-4 py-2.5 text-xs font-light hover:bg-[#C8B89A]/20 transition-colors">Featured</button>
<button className="text-left px-4 py-2.5 text-xs font-light hover:bg-[#C8B89A]/20 transition-colors">Price: Low to High</button>
<button className="text-left px-4 py-2.5 text-xs font-light hover:bg-[#C8B89A]/20 transition-colors">Price: High to Low</button>
<button className="text-left px-4 py-2.5 text-xs font-light hover:bg-[#C8B89A]/20 transition-colors">Newest Arrivals</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">

<button className="group relative flex flex-col text-left" onclick="switchPage('product')">
<div className="aspect-[4/5] w-full overflow-hidden bg-[#C8B89A]/20 relative rounded-sm mb-4 border border-[#1A1A1A]/5">
<span className="absolute top-3 left-3 bg-[#1A1A1A] text-white text-[0.6rem] uppercase tracking-widest px-2.5 py-1 z-10 font-medium rounded-sm">Wedding</span>
<img alt="Mara Shuka" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
<div className="w-full bg-white/95 backdrop-blur-sm text-[#1A1A1A] py-2.5 text-center text-[0.65rem] uppercase tracking-widest font-medium rounded-sm shadow-sm hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300 border border-[#1A1A1A]/10">
                                        Quick Add
                                    </div>
</div>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-start gap-4">
<div>
<h4 className="text-xl tracking-tight text-[#1A1A1A] font-light mb-1" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Mara Red Shuka</h4>
<p className="text-[0.75rem] font-light text-[#1A1A1A]/60 uppercase tracking-wider">100% Cotton</p>
</div>
<span className="text-sm font-medium text-[#1A1A1A] mt-1">$45.00</span>
</div>

<div className="flex items-center gap-2 mt-3">
<div className="w-3.5 h-3.5 rounded-full bg-[#8B0000] border border-[#F0EAD6] ring-1 ring-[#1A1A1A]/20"></div>
<div className="w-3.5 h-3.5 rounded-full bg-[#1A1A1A] border border-[#F0EAD6] ring-1 ring-transparent hover:ring-[#1A1A1A]/20 transition-all"></div>
</div>
</div>
</button>

<button className="group relative flex flex-col text-left" onclick="switchPage('product')">
<div className="aspect-[4/5] w-full overflow-hidden bg-[#C8B89A]/20 relative rounded-sm mb-4 border border-[#1A1A1A]/5">
<img alt="Sisal Basket" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
<div className="w-full bg-white/95 backdrop-blur-sm text-[#1A1A1A] py-2.5 text-center text-[0.65rem] uppercase tracking-widest font-medium rounded-sm shadow-sm hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300 border border-[#1A1A1A]/10">
                                        Quick Add
                                    </div>
</div>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-start gap-4">
<div>
<h4 className="text-xl tracking-tight text-[#1A1A1A] font-light mb-1" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Nairobi Woven Basket</h4>
<p className="text-[0.75rem] font-light text-[#1A1A1A]/60 uppercase tracking-wider">Handwoven Sisal</p>
</div>
<span className="text-sm font-medium text-[#1A1A1A] mt-1">$85.00</span>
</div>
</div>
</button>

<button className="group relative flex flex-col text-left" onclick="switchPage('product')">
<div className="aspect-[4/5] w-full overflow-hidden bg-[#C8B89A]/20 relative rounded-sm mb-4 border border-[#1A1A1A]/5">
<span className="absolute top-3 left-3 bg-white/90 text-[#1A1A1A] text-[0.6rem] uppercase tracking-widest px-2.5 py-1 z-10 font-medium rounded-sm shadow-sm">Best Seller</span>
<img alt="Kikoy Towel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
<div className="w-full bg-white/95 backdrop-blur-sm text-[#1A1A1A] py-2.5 text-center text-[0.65rem] uppercase tracking-widest font-medium rounded-sm shadow-sm hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300 border border-[#1A1A1A]/10">
                                        Quick Add
                                    </div>
</div>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-start gap-4">
<div>
<h4 className="text-xl tracking-tight text-[#1A1A1A] font-light mb-1" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Lamu Blue Kikoy</h4>
<p className="text-[0.75rem] font-light text-[#1A1A1A]/60 uppercase tracking-wider">Terry-lined</p>
</div>
<span className="text-sm font-medium text-[#1A1A1A] mt-1">$38.00</span>
</div>

<div className="flex items-center gap-2 mt-3">
<div className="w-3.5 h-3.5 rounded-full bg-[#4682B4] border border-[#F0EAD6] ring-1 ring-[#1A1A1A]/20"></div>
<div className="w-3.5 h-3.5 rounded-full bg-[#D2B48C] border border-[#F0EAD6] ring-1 ring-transparent hover:ring-[#1A1A1A]/20 transition-all"></div>
<div className="w-3.5 h-3.5 rounded-full bg-[#556B2F] border border-[#F0EAD6] ring-1 ring-transparent hover:ring-[#1A1A1A]/20 transition-all"></div>
</div>
</div>
</button>

<button className="group relative flex flex-col text-left" onclick="switchPage('product')">
<div className="aspect-[4/5] w-full overflow-hidden bg-[#C8B89A]/20 relative rounded-sm mb-4 border border-[#1A1A1A]/5">
<img alt="Gift Box" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
<div className="w-full bg-white/95 backdrop-blur-sm text-[#1A1A1A] py-2.5 text-center text-[0.65rem] uppercase tracking-widest font-medium rounded-sm shadow-sm hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300 border border-[#1A1A1A]/10">
                                        Quick Add
                                    </div>
</div>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-start gap-4">
<div>
<h4 className="text-xl tracking-tight text-[#1A1A1A] font-light mb-1" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Savanna Gift Box</h4>
<p className="text-[0.75rem] font-light text-[#1A1A1A]/60 uppercase tracking-wider">Curated Set</p>
</div>
<span className="text-sm font-medium text-[#1A1A1A] mt-1">$120.00</span>
</div>
</div>
</button>

<button className="group relative flex flex-col text-left" onclick="switchPage('product')">
<div className="aspect-[4/5] w-full overflow-hidden bg-[#C8B89A]/20 relative rounded-sm mb-4 border border-[#1A1A1A]/5">
<img alt="Olive Wood Bowl" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
<div className="w-full bg-white/95 backdrop-blur-sm text-[#1A1A1A] py-2.5 text-center text-[0.65rem] uppercase tracking-widest font-medium rounded-sm shadow-sm hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300 border border-[#1A1A1A]/10">
                                        Quick Add
                                    </div>
</div>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-start gap-4">
<div>
<h4 className="text-xl tracking-tight text-[#1A1A1A] font-light mb-1" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Olive Wood Bowl</h4>
<p className="text-[0.75rem] font-light text-[#1A1A1A]/60 uppercase tracking-wider">Hand-carved</p>
</div>
<span className="text-sm font-medium text-[#1A1A1A] mt-1">$55.00</span>
</div>
</div>
</button>

<button className="group relative flex flex-col text-left" onclick="switchPage('product')">
<div className="aspect-[4/5] w-full overflow-hidden bg-[#C8B89A]/20 relative rounded-sm mb-4 border border-[#1A1A1A]/5">
<img alt="Safari Throw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
<div className="w-full bg-white/95 backdrop-blur-sm text-[#1A1A1A] py-2.5 text-center text-[0.65rem] uppercase tracking-widest font-medium rounded-sm shadow-sm hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300 border border-[#1A1A1A]/10">
                                        Quick Add
                                    </div>
</div>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-start gap-4">
<div>
<h4 className="text-xl tracking-tight text-[#1A1A1A] font-light mb-1" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Serengeti Throw</h4>
<p className="text-[0.75rem] font-light text-[#1A1A1A]/60 uppercase tracking-wider">Organic Cotton</p>
</div>
<span className="text-sm font-medium text-[#1A1A1A] mt-1">$95.00</span>
</div>
</div>
</button>
</div>

<div className="mt-20 flex justify-center items-center space-x-2 text-sm font-light">
<button className="w-10 h-10 flex items-center justify-center border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors rounded-sm"><iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] text-white rounded-sm font-medium">1</button>
<button className="w-10 h-10 flex items-center justify-center hover:bg-[#1A1A1A]/5 text-[#1A1A1A] transition-colors rounded-sm">2</button>
<button className="w-10 h-10 flex items-center justify-center hover:bg-[#1A1A1A]/5 text-[#1A1A1A] transition-colors rounded-sm">3</button>
<span className="w-10 h-10 flex items-center justify-center text-[#1A1A1A]/50">...</span>
<button className="w-10 h-10 flex items-center justify-center border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors rounded-sm"><iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="view-product">

<header className="relative w-full h-[50vh] flex items-center justify-center text-center overflow-hidden bg-[#1A1A1A]">
<div className="absolute inset-0 w-full h-full">
<img alt="Product Lifestyle" className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 px-6 max-w-4xl mx-auto mt-20">
<span className="text-[#F0EAD6] uppercase tracking-[0.3em] text-xs font-extralight mb-4 block">Shop / Kikoys</span>
<h1 className="text-[#F0EAD6] text-4xl md:text-6xl tracking-tight font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                        Lamu Blue Kikoy
                    </h1>
</div>
</header>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

<div className="space-y-6">
<div className="aspect-[4/5] bg-[#C8B89A]/30 overflow-hidden rounded-sm relative">
<img alt="Lamu Blue Kikoy Main" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="aspect-square bg-[#C8B89A]/30 overflow-hidden rounded-sm">
<img alt="Lamu Kikoy Detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-[#C8B89A]/30 overflow-hidden rounded-sm">
<img alt="Lamu Kikoy Detail 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="flex flex-col relative md:sticky top-32 h-fit">
<span className="text-[#C9A84C] uppercase tracking-[0.2em] text-[0.65rem] font-medium mb-2 block">Best Seller</span>
<h2 className="text-4xl tracking-tight text-[#1A1A1A] mb-4 font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Lamu Blue Kikoy</h2>
<span className="text-xl font-medium text-[#1A1A1A] mb-8 block">$38.00</span>
<p className="text-base font-light opacity-80 leading-loose mb-10">
                            Handwoven in the coastal town of Lamu, this versatile kikoy is lined with lightweight terry cloth, making it the perfect companion for the beach, a picnic, or a stylish wrap. Dyed using natural indigo for a rich, enduring color that beautifully fades over time like your favorite denim.
                        </p>

<div className="flex flex-col sm:flex-row gap-4 mb-12">
<div className="flex items-center border border-[#1A1A1A]/20 h-14 px-4 w-full sm:w-32 justify-between rounded-sm">
<button className="text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors"><iconify-icon icon="solar:minus-linear"></iconify-icon></button>
<span className="text-sm font-light">1</span>
<button className="text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors"><iconify-icon icon="solar:plus-linear"></iconify-icon></button>
</div>
<button className="flex-grow bg-[#1A1A1A] text-white hover:bg-[#C9A84C] transition-colors duration-500 uppercase tracking-[0.15em] text-xs font-light h-14 flex items-center justify-center rounded-sm">
                                Add to Cart — $38.00
                            </button>
</div>

<div className="border-t border-[#1A1A1A]/10">
<div className="border-b border-[#1A1A1A]/10 py-5">
<button className="w-full flex justify-between items-center text-sm font-medium uppercase tracking-widest text-left" onclick="toggleDropdown('details-acc')">
<span>Details &amp; Care</span>
<iconify-icon className="text-lg text-[#1A1A1A]/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden pt-4 text-sm font-light opacity-80 leading-loose" id="details-acc">
<ul className="list-disc pl-4 space-y-2">
<li>100% Kenyan Cotton</li>
<li>Dimensions: 64" x 40"</li>
<li>Machine wash cold with like colors</li>
<li>Tumble dry low or line dry</li>
<li>Hand-knotted fringes</li>
</ul>
</div>
</div>
<div className="border-b border-[#1A1A1A]/10 py-5">
<button className="w-full flex justify-between items-center text-sm font-medium uppercase tracking-widest text-left" onclick="toggleDropdown('shipping-acc')">
<span>Shipping &amp; Returns</span>
<iconify-icon className="text-lg text-[#1A1A1A]/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden pt-4 text-sm font-light opacity-80 leading-loose" id="shipping-acc">
<p>Enjoy free standard shipping on orders over $100. Returns and exchanges are accepted within 30 days of purchase in their original, unused condition.</p>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="view-journal">

<header className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden bg-[#1A1A1A]">
<div className="absolute inset-0 w-full h-full">
<img alt="Journal Hero" className="w-full h-full object-cover opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="relative z-10 px-6 max-w-4xl mx-auto mt-20">
<span className="text-[#F0EAD6] uppercase tracking-[0.3em] text-xs font-extralight mb-6 block">Our Stories</span>
<h1 className="text-[#F0EAD6] text-5xl md:text-7xl tracking-tight mb-6 font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                        The Journal
                    </h1>
<p className="text-[#F0EAD6]/80 font-light text-base md:text-lg max-w-xl mx-auto">
                        Delve into stories of heritage, authentic craftsmanship, and the remarkable people behind Mawilo.
                    </p>
</div>
</header>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
<button className="aspect-[4/3] md:aspect-[3/4] overflow-hidden rounded-sm relative group cursor-pointer text-left" onclick="switchPage('journal-post')">
<img alt="Featured Article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</button>
<div>
<span className="uppercase tracking-[0.2em] text-xs font-light text-[#C9A84C] mb-4 block">Craftsmanship • 5 Min Read</span>
<h2 className="text-3xl md:text-5xl tracking-tight text-[#1A1A1A] mb-6 font-light leading-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>The Enduring Art of Sisal Weaving</h2>
<p className="text-base font-light opacity-80 leading-loose mb-10">
                            Discover the generational techniques used by our artisan partners in rural Kenya. From harvesting the resilient sisal plant to natural dyeing and meticulous hand-weaving, every step is a labor of love that preserves an ancient cultural heritage while creating modern functional art.
                        </p>
<button className="border-b border-[#1A1A1A] pb-1 uppercase tracking-[0.1em] text-xs font-medium hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors flex items-center gap-2" onclick="switchPage('journal-post')">
                            Read Article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#C8B89A]/10 border-y border-[#C8B89A]/30">
<div className="max-w-7xl mx-auto">
<h3 className="text-3xl tracking-tight text-[#1A1A1A] mb-12 font-light text-center md:text-left" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Latest Stories</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<button className="group cursor-pointer text-left block" onclick="switchPage('journal-post')">
<div className="aspect-[4/3] overflow-hidden rounded-sm mb-6">
<img alt="Kikoy Styling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<span className="uppercase tracking-[0.2em] text-[0.65rem] font-light text-[#C9A84C] mb-3 block">Style Guide</span>
<h4 className="text-2xl tracking-tight text-[#1A1A1A] mb-3 font-light leading-snug" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Styling Your Kikoy for the Summer Coast</h4>
<p className="text-sm font-light opacity-80 mb-4 line-clamp-2">The versatile kikoy isn't just a towel. Learn how to wear, style, and travel with East Africa's most iconic textile.</p>
<span className="text-xs uppercase tracking-widest font-medium border-b border-transparent group-hover:border-[#1A1A1A] transition-colors pb-1 inline-block">Read More</span>
</button>

<button className="group cursor-pointer text-left block" onclick="switchPage('journal-post')">
<div className="aspect-[4/3] overflow-hidden rounded-sm mb-6">
<img alt="Corporate Gifting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<span className="uppercase tracking-[0.2em] text-[0.65rem] font-light text-[#C9A84C] mb-3 block">Corporate</span>
<h4 className="text-2xl tracking-tight text-[#1A1A1A] mb-3 font-light leading-snug" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>A Guide to Meaningful Corporate Gifting</h4>
<p className="text-sm font-light opacity-80 mb-4 line-clamp-2">Move beyond standard branded merchandise. Discover how culturally rich, handcrafted gifts can deepen professional relationships.</p>
<span className="text-xs uppercase tracking-widest font-medium border-b border-transparent group-hover:border-[#1A1A1A] transition-colors pb-1 inline-block">Read More</span>
</button>

<button className="group cursor-pointer text-left block" onclick="switchPage('journal-post')">
<div className="aspect-[4/3] overflow-hidden rounded-sm mb-6">
<img alt="Meet the Maker" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<span className="uppercase tracking-[0.2em] text-[0.65rem] font-light text-[#C9A84C] mb-3 block">Interviews</span>
<h4 className="text-2xl tracking-tight text-[#1A1A1A] mb-3 font-light leading-snug" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Meet the Maker: A Conversation with Mama Njeri</h4>
<p className="text-sm font-light opacity-80 mb-4 line-clamp-2">Sit down with the lead artisan of our Nairobi cooperative to learn about her life, her craft, and her hopes for the future.</p>
<span className="text-xs uppercase tracking-widest font-medium border-b border-transparent group-hover:border-[#1A1A1A] transition-colors pb-1 inline-block">Read More</span>
</button>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="view-journal-post">

<header className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden bg-[#1A1A1A]">
<div className="absolute inset-0 w-full h-full">
<img alt="Sisal Weaving" className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 px-6 max-w-4xl mx-auto mt-20">
<span className="text-[#C9A84C] uppercase tracking-[0.2em] text-xs font-light mb-6 block">Craftsmanship • 5 Min Read</span>
<h1 className="text-[#F0EAD6] text-5xl md:text-7xl tracking-tight mb-8 font-light leading-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                        The Enduring Art of Sisal Weaving
                    </h1>
<span className="text-[#F0EAD6]/80 text-xs font-light uppercase tracking-widest">By Stella Riungu • October 12, 2023</span>
</div>
</header>

<article className="py-24 px-6 max-w-3xl mx-auto text-[#1A1A1A]">
<div className="text-base md:text-lg font-light leading-loose space-y-8 opacity-90">
<p><span className="float-left text-6xl leading-none pr-4 pt-2 text-[#C9A84C]" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>D</span>eep in the rural highlands of Kenya, the rhythmic sound of hands twisting and weaving natural fibers has echoed for generations. The art of sisal weaving is not just a method of creating functional items; it is a tapestry of cultural history, female empowerment, and sustainable living.</p>
<p>Sisal, an agave plant known for its stiff, resilient sword-shaped leaves, thrives in arid climates. For our artisan partners, the process begins long before the weaving starts. The leaves are harvested, stripped to their core fibers, and washed. They are then naturally dyed using local earth, bark, and roots, boiling over an open fire to achieve the rich, earthy tones that characterize Mawilo's collections.</p>
<blockquote className="text-2xl md:text-3xl tracking-tight text-[#1A1A1A] my-16 pl-6 border-l border-[#C9A84C] font-light italic leading-snug" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                        "Every basket tells a story of the woman who wove it. Her mood, her family's history, and her connection to the earth are all twisted into the fibers."
                    </blockquote>
<p>What makes this craft truly remarkable is the communal aspect. Weaving is often done in groups, known as cooperatives. As the women work, their hands moving with practiced precision, they share stories, sing, and support one another. The cooperative becomes a social safety net, a place of learning, and a source of independent income.</p>
<div className="aspect-[3/2] overflow-hidden rounded-sm my-16">
<img alt="Artisan Weaving" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<p>At Mawilo, we believe in honoring this slow, intentional process. We do not rush our artisans, nor do we compromise on the authenticity of the materials. When you bring a handwoven sisal basket into your home, you are not merely purchasing decor. You are keeping an ancient art form alive and participating in a fair, supportive ecosystem.</p>
<p>The next time you look closely at the intricate patterns of a Mawilo basket, take a moment to appreciate the journey of its creation. From a tough desert plant to a beautifully refined object, it is a testament to the enduring power of human hands and heritage.</p>
</div>

<div className="mt-20 pt-8 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row justify-between items-center gap-6">
<span className="uppercase tracking-[0.2em] text-[0.65rem] font-light">Share this story</span>
<div className="flex space-x-6 text-xl">
<button className="hover:text-[#C9A84C] transition-colors"><iconify-icon icon="solar:link-linear"></iconify-icon></button>
<button className="hover:text-[#C9A84C] transition-colors"><iconify-icon icon="solar:letter-linear"></iconify-icon></button>
</div>
</div>
</article>
</div>

<div className="page-view hidden" id="view-story">

<header className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">
<div className="absolute inset-0 w-full h-full bg-[#1A1A1A]">
<img alt="Mawilo Heritage" className="w-full h-full object-cover opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="relative z-10 px-6 max-w-4xl mx-auto mt-20">
<h1 className="text-[#F0EAD6] text-5xl md:text-7xl tracking-tight mb-8 font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                        Made With Love.<br/>Built for the World.
                    </h1>
<div className="h-[1px] w-24 bg-[#C9A84C] mx-auto mt-8"></div>
</div>
</header>

<section className="py-20 px-6 bg-[#F0EAD6]">
<div className="max-w-3xl mx-auto text-center">
<p className="text-lg md:text-xl font-light text-[#1A1A1A] leading-relaxed" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                        In Kenya's vibrant creative economy, one name is quietly changing the way the world sees African craftsmanship — and it started with a simple, powerful idea: that every piece made by African hands deserves to be celebrated.
                    </p>
</div>
</section>

<section className="py-24 px-6 bg-[#F0EAD6]">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="aspect-[4/5] overflow-hidden rounded-sm relative">
<img alt="Stella Riungu" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h2 className="text-4xl md:text-5xl tracking-tight text-[#1A1A1A] mb-8 font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>The Woman Behind the Brand</h2>
<p className="text-base font-light opacity-80 leading-loose text-[#1A1A1A]">
                            Stella Riungu is the visionary founder of Mawilo Africa — a woman who saw beauty in tradition and had the courage to share it with the world. Born from her deep love for African artistry, Mawilo Africa was founded in 2023 and officially registered in February 2024. From the very beginning, Stella's mission was clear: to bring Kenya's rich cultural heritage to the modern global stage, without losing an ounce of its soul.
                        </p>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#C8B89A] text-[#1A1A1A]">
<div className="max-w-4xl mx-auto text-center">
<span className="uppercase tracking-[0.2em] text-xs font-medium mb-6 block opacity-70">What's in a Name?</span>
<h3 className="text-4xl md:text-6xl tracking-tight mb-10 font-light italic" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                        Mawilo means Made With Love.
                    </h3>
<p className="text-base font-light opacity-90 leading-loose mb-12 max-w-2xl mx-auto">
                        And that is not just a tagline — it is the philosophy behind every single product we create. From our handwoven baskets and Maasai shuka fleece blankets to our Kikoy towels and personalised corporate gifts, every item that leaves our hands carries intention, care, and a piece of Kenya's story.
                    </p>
<div className="max-w-2xl mx-auto border-t border-[#1A1A1A]/10 pt-12 mt-12">
<p className="text-2xl md:text-3xl text-[#C9A84C] italic font-light tracking-tight mb-6 leading-relaxed" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                            "Every piece we make carries a heartbeat. It's made by real hands with real stories."
                        </p>
<span className="text-sm font-medium uppercase tracking-widest opacity-80">— Stella Riungu, Founder</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F0EAD6]">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<h2 className="text-4xl md:text-5xl tracking-tight text-[#1A1A1A] mb-8 font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>More Than a Brand</h2>
<div className="space-y-6 text-base font-light opacity-80 leading-loose text-[#1A1A1A]">
<p>For Stella, Mawilo Africa was never just about beautiful products. It was about people.</p>
<p>Through Mawilo Africa, she is empowering local artisans, women, and youth across Kenya — giving them not just jobs, but a platform to express pride in their craft. Every purchase you make supports a real person, a real family, and a real community.</p>
<p>Each product is a bridge — between Kenya's cultural heritage and today's global market. Between the hands that create and the hearts that receive.</p>
</div>
</div>
<div className="order-1 md:order-2 aspect-[4/5] overflow-hidden rounded-sm relative">
<img alt="Mawilo Lifestyle" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#1A1A1A] text-[#F0EAD6]">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl tracking-tight mb-10 font-medium" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>The Vision</h2>
<div className="space-y-8 text-base md:text-lg font-light opacity-90 leading-loose">
<p>Stella's vision is bold yet grounded: to see Mawilo Africa rise as a leading African lifestyle brand, representing Kenya's artistry on the world stage while driving inclusive growth at home.</p>
<p>To celebrate African creativity. To champion community. And to keep everything — quite literally — <span className="text-[#C9A84C] italic font-medium">made with love.</span></p>
<p className="pt-8 text-xl tracking-tight font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Welcome to Mawilo Africa. We're so glad you're here.</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F0EAD6] text-center border-b border-[#C8B89A]/30">
<h3 className="text-3xl md:text-4xl tracking-tight text-[#1A1A1A] mb-8 font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Ready to find the perfect gift?</h3>
<button className="bg-[#C9A84C] text-white hover:bg-[#1A1A1A] transition-colors duration-500 uppercase tracking-[0.15em] text-xs font-light py-4 px-10" onclick="switchPage('shop')">
                    Shop the Collection
                </button>
</section>
</div>

<div className="page-view hidden" id="view-corporate">

<header className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">
<div className="absolute inset-0 w-full h-full bg-[#1A1A1A]">
<img alt="Corporate Gifts" className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 px-6 max-w-4xl mx-auto mt-20">
<span className="text-[#F0EAD6] uppercase tracking-[0.3em] text-xs font-extralight mb-6 block">Bespoke Solutions</span>
<h1 className="text-[#F0EAD6] text-5xl md:text-7xl tracking-tight mb-6 font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                        Corporate Gifting
                    </h1>
</div>
</header>

<section className="py-24 md:py-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl tracking-tight text-[#1A1A1A] leading-relaxed font-light mb-8" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                        Elevate your brand with gifts that matter. At Mawilo, we curate exceptional, handcrafted African pieces that leave a lasting impression on your clients, partners, and team.
                    </h2>
<div className="h-[1px] w-12 bg-[#C9A84C] mx-auto"></div>
</div>
</section>

<section className="py-20 px-6 bg-[#C8B89A] text-[#1A1A1A]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="uppercase tracking-[0.2em] text-xs font-medium text-[#1A1A1A]/70">Our Approach</span>
<h3 className="text-3xl md:text-4xl tracking-tight mt-4" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>The Gifting Process</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full border border-[#1A1A1A] flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<h4 className="uppercase tracking-[0.15em] text-xs font-medium mb-3">1. Consult</h4>
<p className="text-sm font-light opacity-80">We discuss your vision, budget, and timeline to understand your needs perfectly.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full border border-[#1A1A1A] flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h4 className="uppercase tracking-[0.15em] text-xs font-medium mb-3">2. Curate</h4>
<p className="text-sm font-light opacity-80">Our team selects the finest handcrafted items that align with your brand identity.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full border border-[#1A1A1A] flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:pen-linear"></iconify-icon>
</div>
<h4 className="uppercase tracking-[0.15em] text-xs font-medium mb-3">3. Customize</h4>
<p className="text-sm font-light opacity-80">Add personalized touches like branded tags, engraved logos, and custom packaging.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full border border-[#1A1A1A] flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:box-linear"></iconify-icon>
</div>
<h4 className="uppercase tracking-[0.15em] text-xs font-medium mb-3">4. Deliver</h4>
<p className="text-sm font-light opacity-80">Seamless logistics ensuring your gifts arrive beautifully packaged and on time.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#F0EAD6]">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h3 className="text-3xl md:text-5xl tracking-tight text-[#1A1A1A] mb-4 font-light" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Request a Proposal</h3>
<p className="text-base font-light opacity-80">Fill out the details below, and our gifting concierge will be in touch shortly.</p>
</div>
<form className="space-y-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="relative">
<input className="w-full bg-transparent border-b border-[#1A1A1A]/30 focus:border-[#C9A84C] pb-3 text-sm font-light outline-none transition-colors placeholder:text-[#1A1A1A]/50" id="name" placeholder="Full Name" type="text"/>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b border-[#1A1A1A]/30 focus:border-[#C9A84C] pb-3 text-sm font-light outline-none transition-colors placeholder:text-[#1A1A1A]/50" id="company" placeholder="Company Name" type="text"/>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b border-[#1A1A1A]/30 focus:border-[#C9A84C] pb-3 text-sm font-light outline-none transition-colors placeholder:text-[#1A1A1A]/50" id="email" placeholder="Email Address" type="email"/>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b border-[#1A1A1A]/30 focus:border-[#C9A84C] pb-3 text-sm font-light outline-none transition-colors placeholder:text-[#1A1A1A]/50" id="qty" placeholder="Estimated Quantity" type="number"/>
</div>
</div>
<div className="relative">
<textarea className="w-full bg-transparent border-b border-[#1A1A1A]/30 focus:border-[#C9A84C] pb-3 text-sm font-light outline-none transition-colors placeholder:text-[#1A1A1A]/50 resize-none" id="message" placeholder="Tell us about your event or gifting needs..." rows="4"></textarea>
</div>
<div className="text-center pt-8">
<button className="bg-[#1A1A1A] text-white hover:bg-[#C9A84C] transition-colors duration-500 uppercase tracking-[0.15em] text-xs font-light py-4 px-12" type="button">
                                Submit Inquiry
                            </button>
</div>
</form>
</div>
</section>
</div>
</main>

<section className="flex flex-wrap md:flex-nowrap w-full">
<a className="relative w-1/2 md:w-1/4 aspect-square group overflow-hidden" href="#">
<img alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1621272036047-bb0f76bbc1ad?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1A1A1A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:camera-linear"></iconify-icon>
</div>
</a>
<a className="relative w-1/2 md:w-1/4 aspect-square group overflow-hidden" href="#">
<img alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1A1A1A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:camera-linear"></iconify-icon>
</div>
</a>
<a className="relative w-1/2 md:w-1/4 aspect-square group overflow-hidden" href="#">
<img alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1A1A1A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:camera-linear"></iconify-icon>
</div>
</a>
<a className="relative w-1/2 md:w-1/4 aspect-square group overflow-hidden" href="#">
<img alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1A1A1A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:camera-linear"></iconify-icon>
</div>
</a>
</section>

<footer className="bg-[#C8B89A] pt-20 pb-10 px-6 text-[#1A1A1A]">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<button className="text-3xl tracking-tighter uppercase font-medium mb-6 block" onclick="switchPage('home')" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                        Mawilo
                    </button>
<p className="text-sm font-light leading-relaxed opacity-80 mb-6">
                        Bringing the heart of Africa to your home. Handcrafted heritage gifting, made with love in Kenya.
                    </p>
<div className="flex space-x-4">
<a className="hover:text-[#C9A84C] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:map-arrow-square-linear"></iconify-icon></a>
<a className="hover:text-[#C9A84C] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a>
<a className="hover:text-[#C9A84C] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>

<div>
<h5 className="uppercase tracking-[0.15em] text-xs font-medium mb-6">Explore</h5>
<ul className="space-y-4 text-sm font-light opacity-80">
<li><button className="hover:text-[#C9A84C] transition-colors" onclick="switchPage('shop')">Shop All</button></li>
<li><button className="hover:text-[#C9A84C] transition-colors" onclick="switchPage('corporate')">Corporate Gifting</button></li>
<li><button className="hover:text-[#C9A84C] transition-colors" onclick="switchPage('story')">Our Story</button></li>
<li><button className="hover:text-[#C9A84C] transition-colors" onclick="switchPage('journal')">Journal</button></li>
</ul>
</div>

<div>
<h5 className="uppercase tracking-[0.15em] text-xs font-medium mb-6">Support</h5>
<ul className="space-y-4 text-sm font-light opacity-80">
<li><a className="hover:text-[#C9A84C] transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-[#C9A84C] transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-[#C9A84C] transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-[#C9A84C] transition-colors" href="#">Track Order</a></li>
</ul>
</div>

<div>
<h5 className="uppercase tracking-[0.15em] text-xs font-medium mb-6">The Mawilo Note</h5>
<p className="text-sm font-light opacity-80 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
<form className="flex border-b border-[#1A1A1A] pb-2">
<input className="bg-transparent w-full text-sm font-light outline-none placeholder:text-[#1A1A1A]/50" placeholder="Enter your email address" type="email"/>
<button className="hover:text-[#C9A84C] transition-colors" type="submit">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>

<div className="pt-8 border-t border-[#1A1A1A]/10 flex flex-col md:flex-row justify-between items-center text-xs font-light opacity-60 space-y-4 md:space-y-0">
<p>© 2023 Mawilo Africa Limited. All Rights Reserved.</p>
<div className="flex space-x-6">
<a className="hover:text-[#1A1A1A]" href="#">Terms of Service</a>
<a className="hover:text-[#1A1A1A]" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center" href="#">
<iconify-icon className="text-2xl" icon="solar:chat-round-line-linear"></iconify-icon>
</a>

    </>
  );
}
