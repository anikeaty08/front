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
red: '#D62300',
cream: '#FDFBF7',
surface: '#F5F0EB',
border: '#E2D9D0',
charcoal: '#1A1A1A',
dark: '#0F0F0F',
gray: '#8C8C8C'
}
},
boxShadow: {
'soft': '0 8px 30px rgba(0,0,0,0.04)',
'card': '0 2px 10px rgba(26,26,26,0.03)',
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
      
<div className="max-w-[1600px] mx-auto mb-12 text-center">
<h1 className="text-4xl font-serif font-semibold tracking-tight text-brand-dark mb-2">To Her Focus</h1>
<p className="text-brand-gray">Mobile App Design System • Flutter Ready</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-16 justify-items-center pb-20">

<div className="relative bg-brand-cream border-gray-800 border-[8px] rounded-[3rem] h-[800px] w-[375px] shadow-2xl overflow-hidden ring-1 ring-gray-900/5">
<div className="h-full w-full flex flex-col items-center justify-center relative">
<div className="w-24 h-24 bg-brand-red rounded-full flex items-center justify-center text-brand-cream mb-6 shadow-soft animate-pulse">
<iconify-icon icon="solar:chef-hat-heart-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<h1 className="font-serif text-3xl font-bold tracking-tight text-brand-dark">To Her Focus</h1>
<p className="text-xs font-medium tracking-widest uppercase text-brand-red mt-3">Culinary Arts</p>
<div className="absolute bottom-12">
<iconify-icon className="animate-spin text-brand-gray text-2xl" icon="solar:spinner-linear"></iconify-icon>
</div>
</div>
</div>

<div className="relative bg-brand-cream border-gray-800 border-[8px] rounded-[3rem] h-[800px] w-[375px] shadow-2xl overflow-hidden ring-1 ring-gray-900/5">
<div className="h-full flex flex-col">
<div className="h-[60%] relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-cream via-transparent to-transparent"></div>
<div className="absolute top-12 right-6 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium border border-white/20">Guest Mode</div>
</div>
<div className="flex-1 px-8 pt-4 pb-10 flex flex-col items-center text-center">
<h2 className="font-serif text-4xl font-semibold text-brand-dark leading-tight mb-4">Elevate your daily home cooking</h2>
<p className="text-brand-gray text-sm mb-8 leading-relaxed">Join a community of focused chefs and home cooks sharing premium recipes.</p>
<button className="w-full bg-transparent border border-brand-charcoal text-brand-charcoal py-4 rounded-full font-medium text-sm mb-3 hover:bg-brand-surface transition-colors">
                        Explore Free Recipes
                    </button>
<button className="w-full bg-brand-charcoal text-white py-4 rounded-full font-medium text-sm hover:opacity-90 shadow-soft">
                        Sign in with Google
                    </button>
</div>
</div>
</div>

<div className="relative bg-brand-cream border-gray-800 border-[8px] rounded-[3rem] h-[800px] w-[375px] shadow-2xl overflow-hidden ring-1 ring-gray-900/5">
<div className="h-full px-8 flex flex-col justify-center relative">
<button className="absolute top-12 left-6 text-brand-charcoal w-10 h-10 rounded-full border border-brand-border flex items-center justify-center">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<div className="text-center mb-10">
<div className="w-16 h-16 bg-brand-surface rounded-2xl mx-auto flex items-center justify-center text-brand-red mb-6">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear" width="32"></iconify-icon>
</div>
<h2 className="font-serif text-3xl font-semibold mb-3">Welcome Back</h2>
<p className="text-brand-gray text-sm">Sign in to access your cookbooks and premium content.</p>
</div>
<button className="w-full bg-white border border-brand-border py-4 rounded-xl flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all mb-8">
<iconify-icon icon="logos:google-icon" width="20"></iconify-icon>
<span className="font-medium text-brand-charcoal">Continue with Google</span>
</button>
<p className="text-center text-xs text-brand-gray">
                    By continuing, you agree to our <a className="underline text-brand-charcoal" href="#">Terms</a> and <a className="underline text-brand-charcoal" href="#">Privacy Policy</a>.
                </p>
</div>
</div>

<div className="relative bg-brand-dark border-gray-800 border-[8px] rounded-[3rem] h-[800px] w-[375px] shadow-2xl overflow-hidden ring-1 ring-gray-900/5">
<div className="h-full bg-brand-cream rounded-l-[2rem] ml-16 flex flex-col relative overflow-hidden">

<div className="p-8 pt-16 border-b border-brand-border/50">
<div className="w-16 h-16 rounded-full bg-brand-surface mb-4 overflow-hidden border-2 border-white shadow-sm">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<h3 className="font-serif text-xl font-semibold text-brand-dark">Sarah Jenkins</h3>
<p className="text-xs text-brand-gray">Premium Member</p>
</div>

<div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
<div className="flex items-center gap-4 px-4 py-3 bg-brand-surface rounded-xl text-brand-red font-medium">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
<span>Home</span>
</div>
<div className="flex items-center gap-4 px-4 py-3 text-brand-charcoal hover:bg-white rounded-xl transition-colors">
<iconify-icon icon="solar:chef-hat-linear" width="24"></iconify-icon>
<span>Recipes</span>
</div>
<div className="flex items-center gap-4 px-4 py-3 text-brand-charcoal hover:bg-white rounded-xl transition-colors">
<iconify-icon icon="solar:book-bookmark-linear" width="24"></iconify-icon>
<span>Cookbooks</span>
</div>
<div className="flex items-center gap-4 px-4 py-3 text-brand-charcoal hover:bg-white rounded-xl transition-colors">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
<span>Favorites</span>
</div>
<div className="flex items-center gap-4 px-4 py-3 text-brand-charcoal hover:bg-white rounded-xl transition-colors">
<iconify-icon icon="solar:star-linear" width="24"></iconify-icon>
<span>Reviews</span>
</div>
<div className="my-4 border-t border-brand-border/50"></div>
<div className="flex items-center gap-4 px-4 py-3 text-brand-charcoal hover:bg-white rounded-xl transition-colors">
<iconify-icon icon="solar:card-linear" width="24"></iconify-icon>
<span>Billing</span>
</div>
<div className="flex items-center gap-4 px-4 py-3 text-brand-charcoal hover:bg-white rounded-xl transition-colors">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
<span>Settings</span>
</div>
</div>

<div className="p-8 border-t border-brand-border/50">
<button className="flex items-center gap-3 text-brand-gray hover:text-brand-red text-sm font-medium transition-colors">
<iconify-icon icon="solar:logout-2-linear" width="20"></iconify-icon>
                        Sign Out
                    </button>
</div>
</div>

<div className="absolute inset-y-0 left-0 w-16 flex items-center justify-center opacity-30">
<iconify-icon className="text-white text-3xl" icon="solar:close-circle-linear"></iconify-icon>
</div>
</div>

<div className="relative bg-brand-cream border-gray-800 border-[8px] rounded-[3rem] h-[800px] w-[375px] shadow-2xl overflow-hidden ring-1 ring-gray-900/5">

<div className="absolute top-0 left-0 right-0 h-28 bg-brand-cream/90 backdrop-blur-sm z-20 px-6 pt-12 pb-4 flex justify-between items-center border-b border-brand-border/30">
<button className="w-10 h-10 flex items-center justify-center text-brand-charcoal hover:bg-brand-surface rounded-full transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
<div className="flex flex-col items-center">
<span className="font-serif font-bold text-lg tracking-tight">To Her Focus</span>
</div>
<button className="w-10 h-10 flex items-center justify-center text-brand-charcoal relative hover:bg-brand-surface rounded-full transition-colors">
<iconify-icon icon="solar:bell-linear" width="24"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-brand-red rounded-full"></span>
</button>
</div>
<div className="h-full overflow-y-auto pt-32 pb-8 no-scrollbar">

<div className="px-6 mb-10">
<div className="relative rounded-2xl overflow-hidden shadow-card aspect-[4/5] group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 p-6 text-white">
<span className="bg-brand-red px-2 py-1 rounded text-[10px] uppercase tracking-wider font-bold mb-3 inline-block">Premium Collection</span>
<h3 className="font-serif text-3xl mb-1">Sunday Roast</h3>
<p className="text-sm opacity-80 mb-4">Master the art of the perfect family gathering.</p>
<button className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest border-b border-white pb-1">Read Book <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="mb-10 pl-6">
<div className="flex justify-between items-end pr-6 mb-4">
<h3 className="font-serif text-xl font-medium text-brand-dark">New Recipes</h3>
<a className="text-xs font-medium text-brand-red hover:underline" href="#">View All</a>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar pr-6 pb-2">

<div className="w-40 flex-shrink-0">
<div className="h-48 rounded-xl overflow-hidden mb-3 relative shadow-sm">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<h4 className="font-serif text-base leading-tight mb-1">Buttermilk Pancakes</h4>
<p className="text-xs text-brand-gray">Breakfast • 25m</p>
</div>

<div className="w-40 flex-shrink-0">
<div className="h-48 rounded-xl overflow-hidden mb-3 relative shadow-sm">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute top-2 right-2 w-6 h-6 bg-brand-dark rounded-full flex items-center justify-center text-brand-cream">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
</div>
</div>
<h4 className="font-serif text-base leading-tight mb-1">Crispy Fried Chicken</h4>
<p className="text-xs text-brand-gray">Dinner • 45m</p>
</div>
</div>
</div>

<div className="px-6">
<h3 className="font-serif text-xl font-medium text-brand-dark mb-4">Trending Now</h3>
<div className="space-y-4">
<div className="flex gap-4 p-3 bg-white rounded-xl shadow-card border border-brand-surface">
<img className="w-24 h-24 rounded-lg object-cover" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="flex-1 py-1">
<span className="text-[10px] font-bold text-brand-red uppercase tracking-wider">Premium</span>
<h4 className="font-serif text-lg leading-tight mt-1 mb-2">Summer Salad with Figs</h4>
<div className="flex items-center gap-4 text-xs text-brand-gray">
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 15m</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:flame-linear"></iconify-icon> Easy</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative bg-brand-cream border-gray-800 border-[8px] rounded-[3rem] h-[800px] w-[375px] shadow-2xl overflow-hidden ring-1 ring-gray-900/5">

<div className="px-6 pt-12 pb-4 flex justify-between items-center bg-brand-cream z-20">
<div className="flex items-center gap-4">
<button><iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon></button>
<h2 className="font-serif text-2xl font-semibold">Recipes</h2>
</div>
<button className="w-10 h-10 bg-brand-charcoal text-white rounded-full flex items-center justify-center shadow-lg">
<iconify-icon icon="solar:sort-from-top-to-bottom-linear" width="20"></iconify-icon>
</button>
</div>

<div className="px-6 mb-6 overflow-x-auto no-scrollbar flex gap-2">
<button className="bg-brand-charcoal text-white px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap">All</button>
<button className="bg-white border border-brand-border text-brand-charcoal px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap">Breakfast</button>
<button className="bg-white border border-brand-border text-brand-charcoal px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap">Vegetarian</button>
<button className="bg-white border border-brand-border text-brand-charcoal px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap">Dessert</button>
</div>

<div className="px-6 pb-20 overflow-y-auto h-[660px] no-scrollbar grid grid-cols-2 gap-4">

<div className="bg-white p-2 rounded-2xl shadow-sm border border-brand-surface">
<div className="aspect-square rounded-xl overflow-hidden mb-3 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h3 className="font-serif text-sm font-medium leading-snug mb-1 px-1">Avocado Toast with Egg</h3>
<p className="text-[10px] text-brand-gray px-1 pb-1">Breakfast • 15m</p>
</div>

<div className="bg-white p-2 rounded-2xl shadow-sm border border-brand-surface">
<div className="aspect-square rounded-xl overflow-hidden mb-3 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div className="absolute top-2 right-2 bg-brand-surface/90 backdrop-blur p-1 rounded-full">
<iconify-icon className="text-brand-charcoal text-xs" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
</div>
<h3 className="font-serif text-sm font-medium leading-snug mb-1 px-1">French Toast</h3>
<p className="text-[10px] text-brand-gray px-1 pb-1">Premium • 25m</p>
</div>

<div className="bg-white p-2 rounded-2xl shadow-sm border border-brand-surface">
<div className="aspect-square rounded-xl overflow-hidden mb-3 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h3 className="font-serif text-sm font-medium leading-snug mb-1 px-1">Healthy Bowl</h3>
<p className="text-[10px] text-brand-gray px-1 pb-1">Lunch • 20m</p>
</div>

<div className="bg-white p-2 rounded-2xl shadow-sm border border-brand-surface">
<div className="aspect-square rounded-xl overflow-hidden mb-3 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1476718408415-10fbdd54b7fb?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h3 className="font-serif text-sm font-medium leading-snug mb-1 px-1">Focaccia Bread</h3>
<p className="text-[10px] text-brand-gray px-1 pb-1">Baking • 2h</p>
</div>
</div>
</div>

<div className="relative bg-brand-cream border-gray-800 border-[8px] rounded-[3rem] h-[800px] w-[375px] shadow-2xl overflow-hidden ring-1 ring-gray-900/5">
<div className="h-full overflow-y-auto no-scrollbar relative">

<div className="h-[350px] w-full relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

<div className="absolute top-0 w-full px-6 pt-12 flex justify-between text-white">
<button className="w-10 h-10 rounded-full bg-black/20 backdrop-blur flex items-center justify-center">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-full bg-black/20 backdrop-blur flex items-center justify-center">
<iconify-icon icon="solar:share-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="relative -mt-10 bg-brand-cream rounded-t-[2.5rem] px-6 pt-10 pb-20 z-10 min-h-[500px]">
<div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-8"></div>
<h1 className="font-serif text-3xl font-bold text-brand-dark mb-2 leading-tight">Rustic Mushroom &amp; Herb Pizza</h1>
<p className="text-brand-gray text-sm mb-6">By Chef Mario • Italian Cuisine</p>

<div className="flex justify-between items-center mb-8 border-y border-brand-border py-4">
<button className="flex flex-col items-center gap-1 text-brand-charcoal">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
<span className="text-[10px] uppercase font-bold tracking-wider">Save</span>
</button>
<div className="w-px h-8 bg-brand-border"></div>
<button className="flex flex-col items-center gap-1 text-brand-charcoal">
<iconify-icon icon="solar:chef-hat-linear" width="24"></iconify-icon>
<span className="text-[10px] uppercase font-bold tracking-wider">Cooked</span>
</button>
<div className="w-px h-8 bg-brand-border"></div>
<button className="flex flex-col items-center gap-1 text-brand-red">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<span className="text-[10px] uppercase font-bold tracking-wider">Rate</span>
</button>
</div>

<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-white p-4 rounded-2xl border border-brand-surface">
<div className="flex items-center gap-2 text-brand-red mb-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-xs font-bold uppercase">Time</span>
</div>
<p className="font-serif text-lg">45 mins</p>
</div>
<div className="bg-white p-4 rounded-2xl border border-brand-surface">
<div className="flex items-center gap-2 text-brand-red mb-1">
<iconify-icon icon="solar:flame-linear"></iconify-icon>
<span className="text-xs font-bold uppercase">Level</span>
</div>
<p className="font-serif text-lg">Medium</p>
</div>
</div>

<div className="mb-8">
<h3 className="font-serif text-xl font-semibold mb-4">Ingredients</h3>
<div className="space-y-3">
<div className="flex items-start gap-3 py-2 border-b border-brand-border/40">
<input className="mt-1 rounded-full text-brand-red focus:ring-brand-red border-gray-300" type="checkbox"/>
<span className="text-sm text-brand-charcoal leading-relaxed">2 cups all-purpose flour</span>
</div>
<div className="flex items-start gap-3 py-2 border-b border-brand-border/40">
<input className="mt-1 rounded-full text-brand-red focus:ring-brand-red border-gray-300" type="checkbox"/>
<span className="text-sm text-brand-charcoal leading-relaxed">1 cup mixed wild mushrooms</span>
</div>
<div className="flex items-start gap-3 py-2 border-b border-brand-border/40">
<input className="mt-1 rounded-full text-brand-red focus:ring-brand-red border-gray-300" type="checkbox"/>
<span className="text-sm text-brand-charcoal leading-relaxed">Fresh basil leaves</span>
</div>
</div>
</div>

<div>
<h3 className="font-serif text-xl font-semibold mb-4">Preparation</h3>
<div className="flex gap-4 mb-6">
<span className="flex-shrink-0 w-8 h-8 bg-brand-dark text-brand-cream rounded-full flex items-center justify-center font-serif font-bold text-sm">1</span>
<p className="text-sm text-brand-charcoal leading-relaxed pt-1">Preheat oven to 450°F. Roll out the dough on a floured surface to your desired thickness.</p>
</div>
<div className="flex gap-4 mb-6">
<span className="flex-shrink-0 w-8 h-8 bg-brand-surface text-brand-dark rounded-full flex items-center justify-center font-serif font-bold text-sm">2</span>
<p className="text-sm text-brand-charcoal leading-relaxed pt-1">Sauté the mushrooms in olive oil until golden brown. Season with salt and pepper.</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative bg-brand-cream border-gray-800 border-[8px] rounded-[3rem] h-[800px] w-[375px] shadow-2xl overflow-hidden ring-1 ring-gray-900/5">
<div className="px-6 pt-12 pb-4 flex items-center gap-4 bg-brand-cream z-20">
<button><iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon></button>
<h2 className="font-serif text-2xl font-semibold">Cookbooks</h2>
</div>
<div className="px-6 pb-20 overflow-y-auto h-[700px] no-scrollbar space-y-6">

<div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-card group cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1544965850-6f8a620a85ca?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 text-white w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="font-serif text-2xl mb-1">Italian Heritage</h3>
<p className="text-xs opacity-80">12 Authentic Recipes</p>
</div>
<iconify-icon icon="solar:arrow-right-circle-linear" width="32"></iconify-icon>
</div>
</div>
</div>

<div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-card">
<img className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-4">
<iconify-icon icon="solar:lock-keyhole-linear" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-2xl mb-1">Asian Fusion</h3>
<p className="text-xs opacity-80 mb-4">Premium Collection</p>
<button className="bg-brand-red px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider">Unlock</button>
</div>
</div>
</div>
</div>

<div className="relative bg-brand-cream border-gray-800 border-[8px] rounded-[3rem] h-[800px] w-[375px] shadow-2xl overflow-hidden ring-1 ring-gray-900/5">
<div className="px-6 pt-12 pb-4 flex items-center gap-4 bg-brand-cream z-20">
<button><iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon></button>
<h2 className="font-serif text-2xl font-semibold">Your Library</h2>
</div>

<div className="px-6 mb-6">
<div className="flex p-1 bg-brand-surface rounded-xl">
<button className="flex-1 py-2 text-xs font-bold uppercase tracking-wide bg-white shadow-sm rounded-lg text-brand-dark">Favorites</button>
<button className="flex-1 py-2 text-xs font-bold uppercase tracking-wide text-brand-gray">Cooked</button>
<button className="flex-1 py-2 text-xs font-bold uppercase tracking-wide text-brand-gray">Starred</button>
</div>
</div>

<div className="px-6 space-y-4 overflow-y-auto h-[640px] no-scrollbar">

<div className="flex gap-4 p-3 bg-white rounded-2xl border border-brand-surface shadow-sm">
<div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col justify-center">
<h4 className="font-serif text-base font-medium text-brand-charcoal mb-1">Avocado Salad</h4>
<p className="text-xs text-brand-gray mb-2">Lunch • 15m</p>
<div className="flex gap-1 text-brand-red text-[10px]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<button className="self-start text-brand-red"><iconify-icon icon="solar:heart-bold" width="20"></iconify-icon></button>
</div>

<div className="flex gap-4 p-3 bg-white rounded-2xl border border-brand-surface shadow-sm">
<div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col justify-center">
<h4 className="font-serif text-base font-medium text-brand-charcoal mb-1">Lemon Tart</h4>
<p className="text-xs text-brand-gray mb-2">Dessert • 45m</p>
</div>
<button className="self-start text-brand-red"><iconify-icon icon="solar:heart-bold" width="20"></iconify-icon></button>
</div>

<div className="py-12 text-center opacity-60">
<iconify-icon className="text-4xl text-brand-border mb-2" icon="solar:chef-hat-heart-linear"></iconify-icon>
<p className="text-xs text-brand-gray">Add more recipes to your collection</p>
</div>
</div>
</div>

<div className="relative bg-brand-cream border-gray-800 border-[8px] rounded-[3rem] h-[800px] w-[375px] shadow-2xl overflow-hidden ring-1 ring-gray-900/5">
<div className="px-6 pt-12 pb-6 flex items-center gap-4 bg-brand-cream z-20 border-b border-brand-border/50">
<button><iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon></button>
<h2 className="font-serif text-2xl font-semibold">Community</h2>
</div>
<div className="px-6 py-6 overflow-y-auto h-[700px] no-scrollbar space-y-6">

<div className="bg-white p-5 rounded-2xl shadow-sm border border-brand-surface">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<h4 className="text-sm font-semibold text-brand-charcoal">Emily R.</h4>
<p className="text-[10px] text-brand-gray">Reviewed: Rustic Pizza</p>
</div>
</div>
<span className="text-xs font-bold text-brand-charcoal bg-brand-surface px-2 py-1 rounded">4.8</span>
</div>
<p className="text-sm text-brand-charcoal leading-relaxed mb-4">Absolutely delicious! The crust came out perfectly crispy. I added a bit of truffle oil at the end.</p>
<div className="flex items-center gap-4 border-t border-brand-surface pt-3">
<button className="flex items-center gap-1 text-xs font-medium text-brand-gray hover:text-brand-red">
<iconify-icon icon="solar:round-arrow-up-linear" width="18"></iconify-icon> 24
                        </button>
<button className="flex items-center gap-1 text-xs font-medium text-brand-gray hover:text-brand-red">
<iconify-icon icon="solar:round-arrow-down-linear" width="18"></iconify-icon>
</button>
<button className="ml-auto text-xs font-medium text-brand-gray">Reply</button>
</div>
</div>

<div className="bg-white p-5 rounded-2xl shadow-sm border border-brand-surface">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center font-serif text-lg">J</div>
<div>
<h4 className="text-sm font-semibold text-brand-charcoal">James K.</h4>
<p className="text-[10px] text-brand-gray">Reviewed: Lemon Tart</p>
</div>
</div>
<span className="text-xs font-bold text-brand-charcoal bg-brand-surface px-2 py-1 rounded">5.0</span>
</div>
<p className="text-sm text-brand-charcoal leading-relaxed mb-4">Best dessert recipe on the app. The balance of sweet and sour is perfection.</p>
<div className="flex items-center gap-4 border-t border-brand-surface pt-3">
<button className="flex items-center gap-1 text-xs font-medium text-brand-gray hover:text-brand-red">
<iconify-icon icon="solar:round-arrow-up-linear" width="18"></iconify-icon> 12
                        </button>
<button className="flex items-center gap-1 text-xs font-medium text-brand-gray hover:text-brand-red">
<iconify-icon icon="solar:round-arrow-down-linear" width="18"></iconify-icon>
</button>
<button className="ml-auto text-xs font-medium text-brand-gray">Reply</button>
</div>
</div>
</div>
</div>

<div className="relative bg-brand-cream border-gray-800 border-[8px] rounded-[3rem] h-[800px] w-[375px] shadow-2xl overflow-hidden ring-1 ring-gray-900/5">
<div className="px-6 pt-12 pb-6 flex items-center gap-4 bg-brand-cream z-20">
<button><iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon></button>
<h2 className="font-serif text-2xl font-semibold">Subscription</h2>
</div>
<div className="px-6 pt-4">
<div className="bg-brand-dark text-brand-cream p-6 rounded-3xl relative overflow-hidden shadow-card mb-8">
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
<iconify-icon className="text-brand-red" icon="solar:crown-star-bold" width="24"></iconify-icon>
</div>
<span className="bg-brand-red text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Active</span>
</div>
<h3 className="font-serif text-2xl mb-1">Premium Plan</h3>
<p className="text-sm text-gray-400 mb-6">Renews on Oct 24, 2024</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold">$10</span>
<span className="text-sm text-gray-400">/ year</span>
</div>
</div>

<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-red/20 rounded-full blur-3xl"></div>
</div>
<h3 className="font-serif text-lg font-medium mb-4">Payment Method</h3>
<div className="flex items-center justify-between p-4 bg-white border border-brand-border rounded-xl mb-8">
<div className="flex items-center gap-3">
<iconify-icon icon="logos:mastercard" width="24"></iconify-icon>
<span className="text-sm font-medium">•••• 4242</span>
</div>
<button className="text-xs font-medium text-brand-gray hover:text-brand-dark">Update</button>
</div>
<div className="space-y-3">
<button className="w-full py-4 border border-brand-charcoal text-brand-charcoal rounded-full text-sm font-medium hover:bg-brand-surface transition-colors">Manage Billing on Web</button>
<button className="w-full py-4 text-brand-red text-sm font-medium">Cancel Subscription</button>
</div>
<div className="mt-8 flex items-start gap-2 p-4 bg-brand-surface rounded-xl">
<iconify-icon className="text-brand-charcoal mt-0.5" icon="solar:shield-check-linear"></iconify-icon>
<p className="text-xs text-brand-gray leading-relaxed">Secure payment processing. You can cancel anytime from your settings.</p>
</div>
</div>
</div>

<div className="relative bg-brand-cream border-gray-800 border-[8px] rounded-[3rem] h-[800px] w-[375px] shadow-2xl overflow-hidden ring-1 ring-gray-900/5">
<div className="px-6 pt-12 pb-6 flex items-center gap-4 bg-brand-cream z-20">
<button><iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon></button>
<h2 className="font-serif text-2xl font-semibold">Settings</h2>
</div>
<div className="px-6 space-y-8">

<div>
<h3 className="text-xs font-bold uppercase tracking-wider text-brand-gray mb-4 ml-1">Account</h3>
<div className="bg-white rounded-2xl border border-brand-border overflow-hidden">
<div className="p-4 flex items-center justify-between border-b border-brand-border/50 hover:bg-brand-surface cursor-pointer">
<span className="text-sm font-medium text-brand-charcoal">Edit Profile</span>
<iconify-icon className="text-brand-gray" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="p-4 flex items-center justify-between hover:bg-brand-surface cursor-pointer">
<span className="text-sm font-medium text-brand-charcoal">Change Password</span>
<iconify-icon className="text-brand-gray" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-bold uppercase tracking-wider text-brand-gray mb-4 ml-1">App Settings</h3>
<div className="bg-white rounded-2xl border border-brand-border overflow-hidden">
<div className="p-4 flex items-center justify-between border-b border-brand-border/50">
<span className="text-sm font-medium text-brand-charcoal">Notifications</span>
<div className="w-10 h-6 bg-brand-charcoal rounded-full p-1 cursor-pointer flex justify-end">
<div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
</div>
<div className="p-4 flex items-center justify-between border-b border-brand-border/50">
<span className="text-sm font-medium text-brand-charcoal">Dark Mode</span>
<div className="w-10 h-6 bg-brand-surface rounded-full p-1 cursor-pointer flex justify-start">
<div className="w-4 h-4 bg-white rounded-full shadow-sm border border-brand-border"></div>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div>
<span className="text-sm font-medium text-brand-charcoal block">Offline Storage</span>
<span className="text-[10px] text-brand-gray">124 MB used</span>
</div>
<button className="text-xs font-medium text-brand-red">Clear</button>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-bold uppercase tracking-wider text-brand-gray mb-4 ml-1">Support</h3>
<div className="bg-white rounded-2xl border border-brand-border overflow-hidden">
<div className="p-4 flex items-center justify-between border-b border-brand-border/50 hover:bg-brand-surface cursor-pointer">
<span className="text-sm font-medium text-brand-charcoal">Help Center</span>
<iconify-icon className="text-brand-gray" icon="solar:question-circle-linear"></iconify-icon>
</div>
<div className="p-4 flex items-center justify-between hover:bg-brand-surface cursor-pointer">
<span className="text-sm font-medium text-brand-charcoal text-brand-red">Log Out</span>
<iconify-icon className="text-brand-red" icon="solar:logout-2-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
