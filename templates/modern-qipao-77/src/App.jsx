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
      

<div className="bg-stone-900 text-stone-50 text-xs text-center py-2 tracking-wide font-light">
        Complimentary shipping on UK orders over £250.
    </div>

<nav className="sticky top-0 z-50 bg-[#fdfdfc]/90 backdrop-blur-md border-b border-stone-100 transition-all duration-300">
<div className="max-w-screen-2xl mx-auto px-4 md:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex items-center gap-4 w-1/3">
<button className="md:hidden p-1 hover:opacity-60 transition-opacity">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="hidden md:flex gap-6 text-xs tracking-widest uppercase font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#">Shop</a>
<a className="hover:text-stone-900 transition-colors" href="#">Collections</a>
<a className="hover:text-stone-900 transition-colors" href="#">Atelier</a>
</div>
</div>

<div className="w-1/3 flex justify-center">
<a className="text-2xl md:text-3xl font-serif tracking-tighter hover:opacity-80 transition-opacity" href="#">
                        KATE YANG
                    </a>
</div>

<div className="flex items-center justify-end gap-5 w-1/3">
<button className="hidden md:block hover:opacity-60 transition-opacity">
<span className="sr-only">Search</span>
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<a className="hidden md:block hover:opacity-60 transition-opacity" href="#">
<span className="sr-only">Account</span>
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<button className="relative hover:opacity-60 transition-opacity group">
<span className="sr-only">Cart</span>
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-stone-900 text-[8px] text-white opacity-0 group-hover:opacity-100 transition-opacity">0</span>
</button>
</div>
</div>
</div>
</nav>

<header className="relative w-full border-b border-stone-100">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[85vh]">

<div className="md:col-span-5 flex flex-col justify-center px-6 md:px-16 py-20 order-2 md:order-1 bg-[#fdfdfc]">
<div className="fade-in-up" style={{animationDelay: '0.1s'}}>
<span className="text-xs font-medium tracking-[0.2em] text-stone-500 uppercase block mb-4">Spring / Summer 2024</span>
<h1 className="text-5xl md:text-7xl font-serif leading-[0.95] tracking-tight mb-8 text-stone-900">
                        The Modern <br/> <i className="font-light">Qipao</i>
</h1>
<p className="text-sm md:text-base text-stone-600 leading-relaxed max-w-sm mb-10 font-light">
                        Reimagining Chinese heritage for the contemporary wardrobe. Sourced from the finest silk mills, crafted without compromise.
                    </p>
<div className="flex gap-6">
<a className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium border-b border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-600 transition-all" href="#">
                            Shop The Collection
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="md:col-span-7 relative h-[60vh] md:h-auto order-1 md:order-2 overflow-hidden group border-l border-stone-100">
<img alt="Silk texture and asian inspired fashion" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724d0c7f-f793-4a92-b9b7-82c9cad08bcc_3840w.png"/>
<div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply"></div>
</div>
</div>
</header>

<section className="border-b border-stone-100 overflow-hidden py-4 bg-stone-50">
<div className="flex whitespace-nowrap gap-16 md:gap-32 animate-marquee justify-center overflow-x-auto no-scrollbar px-4">
<div className="flex items-center gap-2 opacity-60">
<svg className="" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
<span className="uppercase text-xs tracking-widest">Dropship-free</span>
</div>
<div className="flex items-center gap-2 opacity-60">
<iconify-icon className="" icon="lucide:scissors" strokeWidth="1.5" width="14"></iconify-icon>
<span className="uppercase text-xs tracking-widest">Hand-Selected</span>
</div>
<div className="flex items-center gap-2 opacity-60">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="truck" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(28, 25, 23)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
<path d="M15 18H9"></path>
<path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
<circle cx="17" cy="18" r="2"></circle>
<circle cx="7" cy="18" r="2"></circle>
</svg>
<span className="uppercase text-xs tracking-widest">Free delivery</span>
</div>
<div className="flex items-center gap-2 opacity-60">
<iconify-icon className="" icon="lucide:award" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs uppercase tracking-widest">Limited Runs</span>
</div>
</div>
</section>

<section className="md:px-8 max-w-screen-2xl mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl font-serif tracking-tight">Curated Pieces</h2>
<a className="hidden md:inline-flex text-xs uppercase tracking-widest border-b border-transparent hover:border-stone-400 pb-0.5 transition-all text-stone-500 hover:text-stone-900" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-stone-100 mb-4 aspect-[3/4]">
<img alt="Velvet Qipao" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://kateyang.co.uk/cdn/shop/files/MediumFront_30cd27b9-d1c7-474e-bc7f-d676164919d7.jpg?v=1752669550&amp;width=493'" role="button" src="https://kateyang.co.uk/cdn/shop/files/MediumFront_30cd27b9-d1c7-474e-bc7f-d676164919d7.jpg?w=800&amp;q=80" style={{}}/>
<div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full bg-white/90 backdrop-blur text-stone-900 text-xs uppercase tracking-widest py-3 hover:bg-stone-900 hover:text-white transition-colors">
                            Quick Add
                        </button>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="font-serif text-lg leading-none mb-1 group-hover:underline decoration-stone-300 underline-offset-4 decoration-1">The Classic Silk</h3>
<p className="text-xs text-stone-500">Emerald Green</p>
</div>
<span className="text-sm font-medium">£185</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-stone-100 mb-4 aspect-[3/4]">
<span className="absolute top-3 left-3 bg-stone-900 text-white text-[10px] uppercase tracking-wider px-2 py-1 z-10">Best Seller</span>
<img alt="Modified Qipao" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://kateyang.co.uk/cdn/shop/files/MediumFront-2.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full bg-white/90 backdrop-blur text-stone-900 text-xs uppercase tracking-widest py-3 hover:bg-stone-900 hover:text-white transition-colors">
                                Quick Add
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg leading-none mb-1 group-hover:underline decoration-stone-300 underline-offset-4 decoration-1">Modern Mini</h3>
<p className="text-xs text-stone-500">Pearl White</p>
</div>
<span className="text-sm font-medium">£145</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-stone-100 mb-4 aspect-[3/4]">
<img alt="Linen Qipao" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://kateyang.co.uk/cdn/shop/files/Medium_87e91ccf-bc20-4c3d-9176-5bf609a6c059.jpg?w=800&amp;q=80" style={{}}/>
<div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full bg-white/90 backdrop-blur text-stone-900 text-xs uppercase tracking-widest py-3 hover:bg-stone-900 hover:text-white transition-colors">
                                Quick Add
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg leading-none mb-1 group-hover:underline decoration-stone-300 underline-offset-4 decoration-1">Linen Everyday</h3>
<p className="text-xs text-stone-500">Natural Beige</p>
</div>
<span className="text-sm font-medium">£120</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-stone-100 mb-4 aspect-[3/4]">
<img alt="Evening Gown" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://kateyang.co.uk/cdn/shop/files/FrontNoCollarcopy.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full bg-white/90 backdrop-blur text-stone-900 text-xs uppercase tracking-widest py-3 hover:bg-stone-900 hover:text-white transition-colors">
                                Quick Add
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg leading-none mb-1 group-hover:underline decoration-stone-300 underline-offset-4 decoration-1">Evening Silk</h3>
<p className="text-xs text-stone-500">Midnight Blue</p>
</div>
<span className="text-sm font-medium">£220</span>
</div>
</div>
</div>
</section>

<section className="border-y border-stone-100 bg-white">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="relative aspect-square md:aspect-auto h-full min-h-[500px]">
<img alt="Silk detail" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://kateyang.co.uk/cdn/shop/files/evening_event_1_no_wm.png?w=800&amp;q=80"/>
</div>
<div className="flex flex-col justify-center px-8 md:px-20 py-20">
<div className="max-w-md">
<span className="text-xs font-medium tracking-[0.2em] text-stone-400 uppercase mb-4 block">Our Philosophy</span>
<h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-6 leading-none">
                        Uncompromising Quality. 
                        <span className="text-stone-400 italic">No Shortcuts.</span>
</h2>
<p className="text-stone-600 text-sm leading-relaxed mb-8">
                        We believe the Qipao deserves better than fast fashion. We source our Grade-A mulberry silk directly from artisans in Hangzhou. Every garment is inspected in our London studio before it reaches you. We do not dropship. We curate.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-sm text-stone-800">
<iconify-icon className="text-stone-400" icon="lucide:check"></iconify-icon>
                            100% Traceable Materials
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-800">
<iconify-icon className="text-stone-400" icon="lucide:check"></iconify-icon>
                            Small Batch Production
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-800">
<iconify-icon className="text-stone-400" icon="lucide:check"></iconify-icon>
                            Shipped from the UK
                        </li>
</ul>
<a className="inline-block bg-stone-900 text-white text-xs uppercase tracking-widest px-8 py-4 hover:bg-stone-800 transition-colors" href="#">
                        Read Our Story
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 md:px-8 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<a className="group relative aspect-[4/5] overflow-hidden" href="#">
<img alt="Bridal" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5efb033-d124-45e2-8996-e7504dfb9bae_800w.png"/>
<div className="group-hover:bg-black/20 transition-colors bg-black/10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl italic text-white font-serif mb-1">Formal</h3>
<p className="text-white/80 text-xs uppercase tracking-widest">For the Modern Tea Ceremony</p>
</div>
</a>

<a className="group relative aspect-[4/5] overflow-hidden" href="#">
<img alt="Daily Wear" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e85ca48-e231-4663-824c-9f7831000953_800w.png" style={{}}/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl italic text-white font-serif mb-1">Qipao/Cheongsam</h3>
<p className="text-white/80 text-xs uppercase tracking-widest">Casual Elegance</p>
</div>
</a>

<a className="group relative aspect-[4/5] overflow-hidden" href="#">
<img alt="Accessories" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f1763a8-275d-4e62-911c-f74345b879b1_800w.png"/>
<div className="group-hover:bg-black/20 transition-colors bg-black/10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl italic text-white font-serif mb-1">Tang Suits
</h3>
<p className="text-white/80 text-xs uppercase tracking-widest">Hairpins &amp; Fans</p>
</div>
</a>
</div>
</section>

<section className="py-24 border-t border-stone-100 bg-[#fdfdfc]">
<div className="max-w-md mx-auto px-4 text-center">
<h2 className="text-2xl font-serif tracking-tight mb-3">Join the Atelier</h2>
<p className="text-xs text-stone-500 mb-8 leading-relaxed">
                Be the first to know about new collections, pop-up events in London, and exclusive archival sales.
            </p>
<form className="flex flex-col gap-4">
<div className="relative">
<input className="w-full bg-transparent border-b border-stone-300 py-3 text-sm focus:outline-none focus:border-stone-900 placeholder:text-stone-400 transition-colors" placeholder="Email Address" type="email"/>
</div>
<div className="flex items-start gap-3 mt-2">
<label className="custom-checkbox flex items-center cursor-pointer relative">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-stone-300 rounded-sm flex items-center justify-center transition-colors">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</label>
<span className="text-[10px] text-stone-400 text-left leading-tight">
                        I agree to receive communications from Kate Yang.  View our <a className="underline" href="#">Privacy Policy</a>.
                    </span>
</div>
<button className="mt-4 bg-stone-900 text-white text-xs uppercase tracking-widest py-3 hover:bg-stone-800 transition-colors w-full" type="submit">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-stone-900 text-stone-300 py-16 px-4 md:px-8">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="space-y-6">
<a className="text-2xl font-serif text-white tracking-tighter" href="#">KATE YANG</a>
<p className="text-xs text-stone-500 max-w-xs leading-relaxed">
                    Bridging Eastern heritage with Western lifestyle. Authentic Qipao for the modern woman.
                </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest text-white mb-6">Shop</h4>
<ul className="space-y-3 text-xs">
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Qipao Dresses</a></li>
<li><a className="hover:text-white transition-colors" href="#">Wedding</a></li>
</ul>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest text-white mb-6">Information</h4>
<ul className="space-y-3 text-xs">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Size Guide</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
</ul>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest text-white mb-6">Contact</h4>
<ul className="space-y-3 text-xs">
<li>hello@kateyang.co.uk</li>
<li>+44 (0) 20 1234 5678</li>
<li className="mt-4 text-stone-500">
                        Studio 4, Hackney Downs Studios
                        London, E8 2BT
                    </li>
</ul>
</div>
</div>
<div className="max-w-screen-2xl mx-auto mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-stone-500">© 2024 Kate Yang Ltd. All rights reserved.</p>
<div className="flex gap-4">
<iconify-icon className="opacity-50 grayscale" icon="logos:visa" width="24"></iconify-icon>
<iconify-icon className="opacity-50 grayscale" icon="logos:mastercard" width="24"></iconify-icon>
<iconify-icon className="opacity-50 grayscale" icon="logos:amex" width="24"></iconify-icon>
</div>
</div>
</footer>

    </>
  );
}
