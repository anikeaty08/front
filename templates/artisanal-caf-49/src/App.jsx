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



        // Init Icons
        lucide.createIcons();

        // Drawer Logic
        function toggleDrawer() {
            const drawer = document.getElementById('cart-drawer');
            const overlay = document.getElementById('drawer-overlay');
            const isClosed = drawer.classList.contains('translate-x-full');

            if (isClosed) {
                drawer.classList.remove('translate-x-full');
                overlay.classList.remove('hidden');
                // slight delay to allow display:block to apply before opacity transition
                setTimeout(() => overlay.classList.remove('opacity-0'), 10);
                document.body.style.overflow = 'hidden';
            } else {
                drawer.classList.add('translate-x-full');
                overlay.classList.add('opacity-0');
                setTimeout(() => overlay.classList.add('hidden'), 500);
                document.body.style.overflow = '';
            }
        }

        // Tab Logic
        function switchTab(tabName) {
            const boutiqueBtn = document.getElementById('tab-boutique');
            const cateringBtn = document.getElementById('tab-catering');
            const boutiqueContent = document.getElementById('content-boutique');
            const cateringContent = document.getElementById('content-catering');

            if (tabName === 'boutique') {
                boutiqueBtn.classList.add('border-charcoal', 'text-charcoal');
                boutiqueBtn.classList.remove('border-transparent', 'text-charcoal/40');
                
                cateringBtn.classList.remove('border-charcoal', 'text-charcoal');
                cateringBtn.classList.add('border-transparent', 'text-charcoal/40');

                boutiqueContent.classList.remove('hidden');
                cateringContent.classList.add('hidden');
            } else {
                cateringBtn.classList.add('border-charcoal', 'text-charcoal');
                cateringBtn.classList.remove('border-transparent', 'text-charcoal/40');
                
                boutiqueBtn.classList.remove('border-charcoal', 'text-charcoal');
                boutiqueBtn.classList.add('border-transparent', 'text-charcoal/40');

                cateringContent.classList.remove('hidden');
                boutiqueContent.classList.add('hidden');
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
      

<div className="film-grain"></div>

<nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-offwhite pointer-events-none">
<div className="text-xs tracking-[0.2em] font-medium pointer-events-auto cursor-pointer">EST. 2024</div>
<button className="pointer-events-auto hover:opacity-70 transition-opacity" onclick="toggleDrawer()">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>

<header className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">

<div className="absolute inset-0 w-full h-full z-0">
<video autoplay="" className="w-full h-full object-cover filter grayscale contrast-125 brightness-75" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/4252632/4252632-uhd_2560_1440_30fps.mp4" type="video/mp4"/>
</video>
<div className="bg-center bg-black/20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bba335b-2b43-4b29-bce9-79cf74ceadad_3840w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="z-10 text-offwhite text-center pr-4 pl-4 relative">
<h1 className="md:text-8xl lg:text-9xl leading-none text-6xl text-zinc-100 tracking-tighter font-serif mb-6">
                CHOUQUETTE
            </h1><p className="md:text-base uppercase leading-relaxed text-sm font-light text-stone-100 tracking-widest font-sans opacity-90 max-w-md mr-auto mb-12 ml-auto">
                Parisian Soul. NYC Grit.<br/>Tequesta’s Morning Ritual.
            </p>
<button className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium tracking-widest text-offwhite border border-offwhite/50 hover:border-offwhite transition-all duration-300 ease-out text-xs uppercase backdrop-blur-sm" onclick="toggleDrawer()">
<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-offwhite rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
<span className="text-neutral-100 relative">Order Online</span>
</button>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-50">
<svg className="lucide lucide-arrow-down w-5 h-5 text-offwhite" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</header>

<section className="relative z-20 py-24 px-6 md:px-12 bg-offwhite">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">

<div className="group relative transform rotate-1 hover:rotate-0 hover:z-30 transition-all duration-500 ease-out hover:scale-105">
<div className="bg-white p-3 pb-12 shadow-xl border border-gray-200 aspect-[4/5] flex flex-col">
<div className="relative w-full h-full overflow-hidden bg-gray-100">
<img alt="Parisian Ham Sandwich" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:contrast-100 transition-all duration-700" src="https://images.unsplash.com/photo-1553909489-cd47e3ca313f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-black/5 mix-blend-overlay"></div>
</div>
<div className="absolute bottom-4 left-0 w-full text-center">
<span className="font-hand text-2xl text-charcoal/80 -rotate-1 block">Le Parisien</span>
</div>
</div>
</div>

<div className="group relative transform -rotate-2 hover:rotate-0 hover:z-30 transition-all duration-500 ease-out hover:scale-105 mt-8 md:mt-0">
<div className="bg-white p-3 pb-12 shadow-xl border border-gray-200 aspect-[4/5] flex flex-col">
<div className="relative w-full h-full overflow-hidden bg-gray-100">
<img alt="Signature Croissant" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:contrast-100 transition-all duration-700" src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-4 left-0 w-full text-center">
<span className="font-hand text-2xl text-charcoal/80 rotate-1 block">Omelet Croissant</span>
</div>
</div>
</div>

<div className="group relative transform rotate-2 hover:rotate-0 hover:z-30 transition-all duration-500 ease-out hover:scale-105">
<div className="bg-white p-3 pb-12 shadow-xl border border-gray-200 aspect-[4/5] flex flex-col">
<div className="relative w-full h-full overflow-hidden bg-gray-100">
<img alt="Quiche Lorraine" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:contrast-100 transition-all duration-700" src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-4 left-0 w-full text-center">
<span className="font-hand text-2xl text-charcoal/80 -rotate-2 block">Rustic Quiche</span>
</div>
</div>
</div>

<div className="group relative transform -rotate-1 hover:rotate-0 hover:z-30 transition-all duration-500 ease-out hover:scale-105 mt-8 md:mt-0">
<div className="bg-white p-3 pb-12 shadow-xl border border-gray-200 aspect-[4/5] flex flex-col">
<div className="relative w-full h-full overflow-hidden bg-gray-100">
<img alt="Champagne" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:contrast-100 transition-all duration-700" src="https://images.unsplash.com/photo-1598155523122-38423bb4d6c1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-4 left-0 w-full text-center">
<span className="font-hand text-2xl text-charcoal/80 rotate-1 block">Moët Chilled</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 py-24 px-6 md:px-12 bg-offwhite border-t border-charcoal/5">
<div className="max-w-3xl mx-auto">

<div className="flex justify-center mb-16 space-x-12">
<button className="text-lg md:text-xl tracking-widest uppercase border-b border-charcoal pb-1 transition-all opacity-100" id="tab-boutique" onclick="switchTab('boutique')">
                    Boutique Menu
                </button>
<button className="text-lg md:text-xl tracking-widest uppercase border-b border-transparent pb-1 text-charcoal/40 hover:text-charcoal transition-all" id="tab-catering" onclick="switchTab('catering')">
                    Catering Menu
                </button>
</div>

<div className="min-h-[400px]">

<div className="space-y-10 animate-fade-in" id="content-boutique">

<div className="group cursor-pointer" onclick="toggleDrawer()">
<div className="flex justify-between items-baseline border-b border-charcoal/10 pb-2 mb-2">
<h3 className="font-serif text-2xl md:text-3xl text-charcoal group-hover:italic transition-all">Le Jambon-Beurre</h3>
<span className="font-sans text-sm font-medium">$14</span>
</div>
<p className="font-serif italic text-charcoal/60 text-sm md:text-base">Classic Parisian ham, salted butter, aged Emmental, artisan baguette.</p>
</div>

<div className="group cursor-pointer" onclick="toggleDrawer()">
<div className="flex justify-between items-baseline border-b border-charcoal/10 pb-2 mb-2">
<h3 className="font-serif text-2xl md:text-3xl text-charcoal group-hover:italic transition-all">Omelet Croissant</h3>
<span className="font-sans text-sm font-medium">$12</span>
</div>
<p className="font-serif italic text-charcoal/60 text-sm md:text-base">Our signature flaky croissant stuffed with a fluffy farm-fresh omelet.</p>
</div>

<div className="group cursor-pointer" onclick="toggleDrawer()">
<div className="flex justify-between items-baseline border-b border-charcoal/10 pb-2 mb-2">
<h3 className="font-serif text-2xl md:text-3xl text-charcoal group-hover:italic transition-all">Quiche Lorraine</h3>
<span className="font-sans text-sm font-medium">$16</span>
</div>
<p className="font-serif italic text-charcoal/60 text-sm md:text-base">Thick, rustic slice with pancetta, crème fraîche, served with greens.</p>
</div>

<div className="group cursor-pointer" onclick="toggleDrawer()">
<div className="flex justify-between items-baseline border-b border-charcoal/10 pb-2 mb-2">
<h3 className="font-serif text-2xl md:text-3xl text-charcoal group-hover:italic transition-all">Tarte au Citron</h3>
<span className="font-sans text-sm font-medium">$9</span>
</div>
<p className="font-serif italic text-charcoal/60 text-sm md:text-base">Zesty lemon curd, sweet pastry shell, burnt meringue.</p>
</div>
</div>

<div className="hidden text-center space-y-8 animate-fade-in flex flex-col items-center justify-center h-full pt-8" id="content-catering">
<svg className="lucide lucide-utensils-crossed w-12 h-12 mx-auto text-brass mb-4" data-lucide="utensils-crossed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"></path><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"></path><path d="m2.1 21.8 6.4-6.3"></path><path d="m19 5-7 7"></path></svg>
<p className="font-serif text-2xl md:text-4xl leading-tight text-charcoal max-w-xl mx-auto">
                        "From sunset boat days to corporate events, Chouquette elevates your moments with handcrafted platters. Authentic, artisanal, and delivered with French flair."
                    </p>
<button className="mt-8 px-8 py-3 bg-charcoal text-offwhite uppercase tracking-widest text-xs hover:bg-brass transition-colors duration-300" onclick="toggleDrawer()">
                        Inquire Now
                    </button>
</div>
</div>
</div>
</section>

<section className="relative z-20 bg-[#F2F2F0] py-24 px-6 md:px-12">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

<div>
<h2 className="font-serif text-4xl mb-8 tracking-tight">La Buvette</h2>
<ul className="space-y-6">
<li className="flex justify-between items-center border-b border-charcoal/10 pb-2">
<span className="font-sans text-sm uppercase tracking-wider">Mariage Frères Tea</span>
<span className="font-serif italic text-charcoal/60">$6</span>
</li>
<li className="flex justify-between items-center border-b border-charcoal/10 pb-2">
<span className="font-sans text-sm uppercase tracking-wider">Ceremonial Matcha</span>
<span className="font-serif italic text-charcoal/60">$7</span>
</li>
<li className="flex justify-between items-center border-b border-charcoal/10 pb-2">
<span className="font-sans text-sm uppercase tracking-wider">Signature Chocolat Chaud</span>
<span className="font-serif italic text-charcoal/60">$8</span>
</li>
<li className="flex justify-between items-center border-b border-charcoal/10 pb-2">
<span className="font-sans text-sm uppercase tracking-wider">Moët &amp; Chandon (Bottle)</span>
<span className="font-serif italic text-charcoal/60">$95</span>
</li>
</ul>
<p className="mt-8 font-serif italic text-charcoal/50 text-sm leading-relaxed">
                    "A nod to our neighbors: For your daily coffee fix, visit the legends at Ocean Coffee. Here, we celebrate the art of tea and chocolate."
                </p>
</div>

<div className="flex flex-col justify-center border-l border-charcoal/10 md:pl-12">
<h2 className="font-serif text-4xl mb-6 tracking-tight">Our Craft</h2>
<p className="font-sans font-light text-lg leading-relaxed mb-8 text-charcoal/80">
                    We believe in the sanctity of the morning ritual. Bread baked on-site before dawn. Pastries &amp; Quiches handcrafted in-house with patience and precise technique.
                </p>
<div className="h-px w-24 bg-brass mb-8"></div>
<div className="flex items-center space-x-2 text-xs uppercase tracking-widest opacity-60">
<svg className="lucide lucide-wheat w-4 h-4" data-lucide="wheat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 22 16 8"></path><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"></path><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path><path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path><path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path></svg>
<span>Tequesta, FL</span>
</div>
</div>
</div>
</section>

<footer className="relative z-20 bg-charcoal text-offwhite py-20 px-6 text-center">
<div className="max-w-md mx-auto flex flex-col items-center space-y-8">
<h3 className="font-serif text-5xl tracking-tight">CHOUQUETTE</h3>
<address className="not-italic font-sans font-light text-sm opacity-70 leading-relaxed">
                150 US 1 Tequesta Suite 17<br/>
                Tequesta, FL 33449
            </address>
<a className="inline-flex items-center space-x-2 border border-offwhite/30 px-6 py-2 hover:bg-offwhite hover:text-charcoal transition-colors duration-300" href="https://maps.google.com" target="_blank">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs uppercase tracking-widest">Open in Maps</span>
</a>
<span className="font-serif italic text-xs opacity-40">Phone coming soon</span>
<div className="pt-12 opacity-20 text-[10px] uppercase tracking-widest">
                © 2024 Chouquette Tequesta
            </div>
</div>
</footer>

<div className="fixed inset-y-0 right-0 z-50 w-full md:w-[480px] bg-offwhite shadow-2xl transform translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col" id="cart-drawer">

<div className="flex justify-between items-center p-6 border-b border-charcoal/10">
<h2 className="font-serif text-2xl text-charcoal">Your Order</h2>
<button className="p-2 hover:bg-charcoal/5 rounded-full transition-colors" onclick="toggleDrawer()">
<svg className="lucide lucide-x w-6 h-6 text-charcoal" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 flex flex-col items-center justify-center text-center space-y-6">
<div className="w-16 h-16 bg-charcoal/5 rounded-full flex items-center justify-center mb-2">
<svg className="lucide lucide-shopping-bag w-8 h-8 text-charcoal/40" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<p className="font-serif text-xl italic text-charcoal/60">Your basket is empty.</p>
<p className="font-sans text-sm text-charcoal/40 max-w-xs">Select items from our menu to start your Square Click &amp; Collect order.</p>
<button className="mt-4 text-xs font-bold uppercase tracking-widest border-b border-charcoal pb-1" onclick="toggleDrawer()">Return to Menu</button>
</div>

<div className="p-6 border-t border-charcoal/10 bg-[#F2F2F0]">
<button className="w-full bg-charcoal text-offwhite py-4 uppercase tracking-widest text-xs font-medium hover:bg-brass transition-colors">
                Checkout $0.00
            </button>
</div>
</div>

<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 hidden opacity-0 transition-opacity duration-500" id="drawer-overlay" onclick="toggleDrawer()"></div>



    </>
  );
}
