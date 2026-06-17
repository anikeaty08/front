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
      

<nav className="fixed w-full z-50 top-0 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-white text-2xl font-semibold tracking-tighter uppercase" href="#">Empire</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#menu">Menu</a>
<a className="hover:text-white transition-colors" href="#signature">Signatures</a>
<a className="hover:text-amber-500 transition-colors" href="#late-night">Late Night</a>
<a className="hover:text-white transition-colors" href="#locations">Locations</a>
</div>
<div className="flex items-center space-x-4">
<button className="text-zinc-400 hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:cart-large-linear" width="24"></iconify-icon>
</button>
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-sm transition-colors" href="#order">
                    Order Now
                </a>
<button className="md:hidden text-zinc-400">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Grilling meat" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/30"></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-transparent to-zinc-950/90"></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-amber-600/10 blur-[100px] pointer-events-none"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center space-x-2 mb-6 border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 rounded-full">
<iconify-icon className="text-amber-500" height="16" icon="solar:fire-linear" width="16"></iconify-icon>
<span className="text-xs font-semibold tracking-widest text-amber-500 uppercase">Serving Since 1966</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-8 leading-[1.05]">
                Bangalore's Late Night <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Food Icon.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                The city sleeps, but the grill doesn't. Legendary kebabs, iconic biryani, and the authentic taste of the streets, served hot until 3 AM.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-sm transition-all flex items-center justify-center space-x-2 group" href="#order">
<span>Start Order</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 rounded-sm transition-colors text-center" href="#menu">
                    Explore Menu
                </a>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-zinc-950" id="signature">
<div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">Legendary Signatures</h2>
<p className="text-zinc-400 text-sm md:text-base max-w-md">The dishes that built the empire. Charred to perfection, spiced to the core.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
<iconify-icon height="20" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="pl-6 md:pl-0 max-w-7xl mx-auto flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-8">

<div className="snap-start shrink-0 w-[85vw] md:w-[400px] group relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900/50">
<div className="h-64 overflow-hidden">
<img alt="Shawarma" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1529144415895-6aaf8be872fb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold tracking-tight text-white">Classic Chicken Shawarma</h3>
<span className="text-amber-500 font-semibold tracking-tight">₹140</span>
</div>
<p className="text-sm text-zinc-400 mb-6">Slow-roasted marinated chicken shaved straight off the spit, wrapped with garlic mayo.</p>
<button className="w-full py-2.5 text-xs font-semibold text-white bg-zinc-800 hover:bg-red-600 rounded-sm transition-colors uppercase tracking-wider">
                        Add to Order
                    </button>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[400px] group relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900/50">
<div className="h-64 overflow-hidden relative">
<img alt="Biryani" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-semibold px-2 py-1 uppercase tracking-widest rounded-sm">Bestseller</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold tracking-tight text-white">Mutton Biryani</h3>
<span className="text-amber-500 font-semibold tracking-tight">₹320</span>
</div>
<p className="text-sm text-zinc-400 mb-6">Aromatic basmati rice cooked with tender mutton pieces and secret blend of spices.</p>
<button className="w-full py-2.5 text-xs font-semibold text-white bg-zinc-800 hover:bg-red-600 rounded-sm transition-colors uppercase tracking-wider">
                        Add to Order
                    </button>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[400px] group relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900/50">
<div className="h-64 overflow-hidden">
<img alt="Grill Chicken" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold tracking-tight text-white">Empire Grill Chicken</h3>
<span className="text-amber-500 font-semibold tracking-tight">₹450</span>
</div>
<p className="text-sm text-zinc-400 mb-6">Half chicken marinated in fiery red spices and char-grilled over open flames.</p>
<button className="w-full py-2.5 text-xs font-semibold text-white bg-zinc-800 hover:bg-red-600 rounded-sm transition-colors uppercase tracking-wider">
                        Add to Order
                    </button>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[400px] group relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900/50">
<div className="h-64 overflow-hidden">
<img alt="Butter Chicken" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold tracking-tight text-white">Butter Chicken</h3>
<span className="text-amber-500 font-semibold tracking-tight">₹290</span>
</div>
<p className="text-sm text-zinc-400 mb-6">Tandoori chicken chunks simmered in a rich, creamy tomato and butter gravy.</p>
<button className="w-full py-2.5 text-xs font-semibold text-white bg-zinc-800 hover:bg-red-600 rounded-sm transition-colors uppercase tracking-wider">
                        Add to Order
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-zinc-900" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">The Menu</h2>

<div className="flex flex-wrap justify-center gap-2 md:gap-4">
<button className="px-5 py-2 text-sm font-semibold bg-white text-black rounded-full">All</button>
<button className="px-5 py-2 text-sm font-semibold text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-white rounded-full transition-colors">Biryani</button>
<button className="px-5 py-2 text-sm font-semibold text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-white rounded-full transition-colors">Kebabs &amp; Grills</button>
<button className="px-5 py-2 text-sm font-semibold text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-white rounded-full transition-colors">Shawarma</button>
<button className="px-5 py-2 text-sm font-semibold text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-white rounded-full transition-colors">Curries</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="group flex gap-4">
<div className="w-24 h-24 shrink-0 rounded bg-zinc-900 overflow-hidden">
<img alt="Food" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex-1 flex flex-col justify-center">
<div className="flex justify-between items-center mb-1">
<h4 className="text-base font-semibold text-white tracking-tight">Chicken Tikka</h4>
<span className="text-amber-500 text-sm font-semibold">₹220</span>
</div>
<p className="text-xs text-zinc-500 mb-3 line-clamp-2">Boneless chicken chunks marinated in yogurt and spices, roasted in tandoor.</p>
<button className="self-start flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-red-500 transition-colors">
<iconify-icon icon="solar:cart-large-linear" width="16"></iconify-icon> Add
                        </button>
</div>
</div>

<div className="group flex gap-4">
<div className="w-24 h-24 shrink-0 rounded bg-zinc-900 overflow-hidden">
<img alt="Food" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex-1 flex flex-col justify-center">
<div className="flex justify-between items-center mb-1">
<h4 className="text-base font-semibold text-white tracking-tight">Brain Fry</h4>
<span className="text-amber-500 text-sm font-semibold">₹280</span>
</div>
<p className="text-xs text-zinc-500 mb-3 line-clamp-2">A bold delicacy. Mutton brain pan-fried with pepper, onions, and curry leaves.</p>
<button className="self-start flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-red-500 transition-colors">
<iconify-icon icon="solar:cart-large-linear" width="16"></iconify-icon> Add
                        </button>
</div>
</div>

<div className="group flex gap-4">
<div className="w-24 h-24 shrink-0 rounded bg-zinc-900 overflow-hidden">
<img alt="Food" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex-1 flex flex-col justify-center">
<div className="flex justify-between items-center mb-1">
<h4 className="text-base font-semibold text-white tracking-tight">Tandoori Roti</h4>
<span className="text-amber-500 text-sm font-semibold">₹30</span>
</div>
<p className="text-xs text-zinc-500 mb-3 line-clamp-2">Whole wheat flatbread baked in a traditional clay oven. Best served hot.</p>
<button className="self-start flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-red-500 transition-colors">
<iconify-icon icon="solar:cart-large-linear" width="16"></iconify-icon> Add
                        </button>
</div>
</div>

<div className="group flex gap-4">
<div className="w-24 h-24 shrink-0 rounded bg-zinc-900 overflow-hidden">
<img alt="Food" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col justify-center">
<div className="flex justify-between items-center mb-1">
<h4 className="text-base font-semibold text-white tracking-tight">Chicken Kabab</h4>
<span className="text-amber-500 text-sm font-semibold">₹180</span>
</div>
<p className="text-xs text-zinc-500 mb-3 line-clamp-2">Deep-fried chicken pieces coated in a spicy, vibrant red batter.</p>
<button className="self-start flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-red-500 transition-colors">
<iconify-icon icon="solar:cart-large-linear" width="16"></iconify-icon> Add
                        </button>
</div>
</div>

<div className="group flex gap-4">
<div className="w-24 h-24 shrink-0 rounded bg-zinc-900 overflow-hidden">
<img alt="Food" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="flex-1 flex flex-col justify-center">
<div className="flex justify-between items-center mb-1">
<h4 className="text-base font-semibold text-white tracking-tight">Mutton Keema</h4>
<span className="text-amber-500 text-sm font-semibold">₹260</span>
</div>
<p className="text-xs text-zinc-500 mb-3 line-clamp-2">Minced mutton slow-cooked with peas and robust Indian spices.</p>
<button className="self-start flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-red-500 transition-colors">
<iconify-icon icon="solar:cart-large-linear" width="16"></iconify-icon> Add
                        </button>
</div>
</div>

<div className="group flex gap-4">
<div className="w-24 h-24 shrink-0 rounded bg-zinc-900 overflow-hidden">
<img alt="Food" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col justify-center">
<div className="flex justify-between items-center mb-1">
<h4 className="text-base font-semibold text-white tracking-tight">Falooda</h4>
<span className="text-amber-500 text-sm font-semibold">₹120</span>
</div>
<p className="text-xs text-zinc-500 mb-3 line-clamp-2">The ultimate sweet finish. Rose milk, vermicelli, basil seeds, topped with ice cream.</p>
<button className="self-start flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-red-500 transition-colors">
<iconify-icon icon="solar:cart-large-linear" width="16"></iconify-icon> Add
                        </button>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="px-6 py-3 text-sm font-semibold text-zinc-300 border border-zinc-800 hover:bg-zinc-900 rounded-sm transition-colors">
                    View Full Menu
                </button>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden border-y border-red-900/30" id="late-night">
<div className="absolute inset-0 z-0">
<img alt="Night Vibe" className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80"/>
<div className="absolute inset-0 bg-zinc-950/80"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<iconify-icon className="text-red-500 mb-6 neon-text" height="48" icon="solar:moon-sleep-linear" width="48"></iconify-icon>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                Hungry at 2 AM? <br/>
<span className="text-red-500 neon-text">We're still grilling.</span>
</h2>
<p className="text-lg text-zinc-400 max-w-xl mx-auto mb-10">
                When the cravings hit late, we deliver. Experience the energy of a bustling Bangalore night with food that hits the spot, every single time.
            </p>
<a className="inline-flex items-center space-x-2 px-8 py-4 text-sm font-semibold text-black bg-white hover:bg-zinc-200 rounded-sm transition-colors" href="#locations">
<span>Find an Open Outlet</span>
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">The City's Pulse</h2>
<p className="text-zinc-400">Real fire. Real food. Real crowd.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
<div className="col-span-2 row-span-2 rounded-lg overflow-hidden relative group">
<img alt="Grill" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
</div>
<div className="rounded-lg overflow-hidden relative group">
<img alt="Crowd" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="rounded-lg overflow-hidden relative group">
<img alt="Meat" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1529144415895-6aaf8be872fb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="col-span-2 rounded-lg overflow-hidden relative group">
<img alt="Night" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4">
<p className="text-white text-sm font-semibold tracking-tight">"Best post-party spot in Blr."</p>
<p className="text-amber-500 text-xs">@foodie_blr</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-t border-zinc-800" id="locations">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-12">Our Outlets</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 bg-zinc-950 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
<div className="flex items-start justify-between mb-4">
<h3 className="text-lg font-semibold text-white tracking-tight">Church Street</h3>
<span className="inline-flex items-center px-2 py-1 bg-green-500/10 text-green-500 text-[10px] font-semibold uppercase tracking-wider rounded">Open Now</span>
</div>
<p className="text-sm text-zinc-400 mb-6">36, Church St, Shanthala Nagar, Ashok Nagar, Bengaluru</p>
<div className="space-y-3 mb-6">
<div className="flex items-center text-sm text-zinc-300">
<iconify-icon className="mr-3 text-amber-500" icon="solar:clock-circle-linear" width="18"></iconify-icon>
                            12:00 PM - 3:00 AM
                        </div>
<div className="flex items-center text-sm text-zinc-300">
<iconify-icon className="mr-3 text-amber-500" icon="solar:phone-linear" width="18"></iconify-icon>
                            +91 80 4041 4041
                        </div>
</div>
<button className="w-full py-2.5 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 rounded-sm transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon> Get Directions
                    </button>
</div>

<div className="p-6 bg-zinc-950 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
<div className="flex items-start justify-between mb-4">
<h3 className="text-lg font-semibold text-white tracking-tight">Koramangala</h3>
<span className="inline-flex items-center px-2 py-1 bg-green-500/10 text-green-500 text-[10px] font-semibold uppercase tracking-wider rounded">Open Now</span>
</div>
<p className="text-sm text-zinc-400 mb-6">103, 5th Block, Koramangala, Bengaluru</p>
<div className="space-y-3 mb-6">
<div className="flex items-center text-sm text-zinc-300">
<iconify-icon className="mr-3 text-amber-500" icon="solar:clock-circle-linear" width="18"></iconify-icon>
                            12:00 PM - 3:00 AM
                        </div>
<div className="flex items-center text-sm text-zinc-300">
<iconify-icon className="mr-3 text-amber-500" icon="solar:phone-linear" width="18"></iconify-icon>
                            +91 80 4041 4042
                        </div>
</div>
<button className="w-full py-2.5 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 rounded-sm transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon> Get Directions
                    </button>
</div>

<div className="p-6 bg-zinc-950 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
<div className="flex items-start justify-between mb-4">
<h3 className="text-lg font-semibold text-white tracking-tight">Indiranagar</h3>
<span className="inline-flex items-center px-2 py-1 bg-zinc-800 text-zinc-400 text-[10px] font-semibold uppercase tracking-wider rounded">Opens at 12 PM</span>
</div>
<p className="text-sm text-zinc-400 mb-6">80 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru</p>
<div className="space-y-3 mb-6">
<div className="flex items-center text-sm text-zinc-300">
<iconify-icon className="mr-3 text-amber-500" icon="solar:clock-circle-linear" width="18"></iconify-icon>
                            12:00 PM - 2:00 AM
                        </div>
<div className="flex items-center text-sm text-zinc-300">
<iconify-icon className="mr-3 text-amber-500" icon="solar:phone-linear" width="18"></iconify-icon>
                            +91 80 4041 4043
                        </div>
</div>
<button className="w-full py-2.5 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 rounded-sm transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon> Get Directions
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-black pt-20 pb-10 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<h2 className="text-2xl font-semibold tracking-tighter text-white uppercase mb-4">Empire</h2>
<p className="text-sm text-zinc-400 max-w-sm mb-6">An Empire of Flavours Since 1966. Serving authentic, fiery, and soulful food to the streets of Bangalore.</p>
<div className="flex space-x-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon height="24" icon="solar:camera-linear" width="24"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon height="24" icon="solar:letter-linear" width="24"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-semibold tracking-tight mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm text-zinc-400">
<li><a className="hover:text-amber-500 transition-colors" href="#">Order Online</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#menu">Full Menu</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#locations">Find Us</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Catering</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold tracking-tight mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Refund Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-600">
<p>© 2023 Empire Restaurant. All rights reserved.</p>
<p className="mt-2 md:mt-0 flex items-center gap-1">Designed for late nights <iconify-icon className="text-red-600" icon="solar:fire-linear"></iconify-icon></p>
</div>
</div>
</footer>

    </>
  );
}
