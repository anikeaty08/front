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
colors: {
stone: {
850: '#1f1f1e',
}
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
'slide-up': 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'slide-down': 'slideDown 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
slideDown: {
'0%': { opacity: '0', transform: 'translateY(-20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/60 opacity-0 animate-slide-down">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center text-white" href="#home">
<i className="w-4 h-4" data-lucide="chef-hat"></i>
</a>
<span className="text-sm font-semibold tracking-tight">CULINARY.</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#menu">Menu</a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#features">Sourcing</a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#features">Chefs</a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Mission</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-xs font-medium text-stone-600 hover:text-stone-900">
<i className="w-4 h-4" data-lucide="search"></i>
<span>Search</span>
</button>
<button className="relative group">
<i className="w-5 h-5 text-stone-900" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-stone-50"></span>
</button>
</div>
</div>
</nav>

<main className="pt-32 pb-16 md:pt-48 md:pb-32 px-6" id="home">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start gap-6 opacity-0 animate-slide-up" style={{animationDelay: '150ms'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-medium tracking-wide">Summer Menu Launched</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-stone-900 leading-[1.1]">
                    Nourish your body, <br/>
<span className="text-stone-400">elevate your taste.</span>
</h1>
<p className="text-lg text-stone-500 max-w-lg leading-relaxed font-light">
                    Chef-curated meal kits delivering Michelin-quality ingredients directly to your door. Experience the art of cooking without the hassle.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
<button className="h-12 px-8 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-stone-900/10">
                        Start Ordering
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<a className="h-12 px-8 rounded-lg border border-stone-200 text-stone-600 text-sm font-medium hover:bg-stone-100 transition-all flex items-center justify-center gap-2" href="#menu">
                        View Menu
                    </a>
</div>
<div className="flex items-center gap-4 mt-8">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-2 border-stone-50 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-stone-50 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-stone-50 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="text-xs text-stone-500">
<span className="font-semibold text-stone-900">4.9/5</span> from 2,000+ home chefs
                    </div>
</div>
</div>

<div className="relative opacity-0 animate-slide-up" style={{animationDelay: '300ms'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-orange-100/50 to-stone-200/50 rounded-3xl blur-3xl -z-10"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-stone-900/10 border border-stone-200/50">
<img alt="Healthy Bowl" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-stone-100 shadow-lg flex items-center justify-between">
<div>
<p className="text-sm font-medium text-stone-900">Quinoa &amp; Avocado Salad</p>
<p className="text-xs text-stone-500">Prep time: 15 mins</p>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-semibold">$14.00</span>
<button className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-12 border-y border-stone-200 bg-white opacity-0 animate-slide-up" style={{animationDelay: '400ms'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
<div>
<h2 className="text-xl font-medium tracking-tight">Our Weekly Selection</h2>
<p className="text-sm text-stone-500 mt-1">Fresh recipes added every Monday.</p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4">

<div className="bg-stone-100 p-1 rounded-lg flex items-center relative">
<button className="relative z-10 px-4 py-1.5 text-xs font-medium text-stone-900 bg-white shadow-sm rounded-md transition-all">A la Carte</button>
<button className="relative z-10 px-4 py-1.5 text-xs font-medium text-stone-500 hover:text-stone-900 transition-all">Subscription</button>
</div>
<div className="h-6 w-px bg-stone-200 hidden sm:block"></div>

<button className="flex items-center gap-2 text-xs font-medium border border-stone-200 rounded-lg px-3 py-2 hover:bg-stone-50 transition-colors">
<i className="w-3.5 h-3.5 text-stone-500" data-lucide="sliders-horizontal"></i>
<span>Dietary: All</span>
<i className="w-3.5 h-3.5 text-stone-400" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 bg-stone-50" id="menu">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group flex flex-col gap-4 opacity-0 animate-slide-up" style={{animationDelay: '500ms'}}>
<div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-200">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md">
<span className="text-[10px] font-semibold tracking-wide uppercase text-stone-800">Vegan</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-stone-900">Garden Fresh Poke Bowl</h3>
<p className="text-xs text-stone-500 mt-1 line-clamp-2">Organic tofu, edamame, cucumber, shredded carrots, and sticky rice with sesame dressing.</p>
</div>
<span className="text-sm font-medium text-stone-900">$16</span>
</div>
<div className="flex items-center gap-4 pt-2 border-t border-stone-200/60 mt-auto">
<div className="flex items-center gap-1.5 text-xs text-stone-500">
<i className="w-3.5 h-3.5" data-lucide="flame"></i> 450 kcal
                    </div>
<div className="flex items-center gap-1.5 text-xs text-stone-500">
<i className="w-3.5 h-3.5" data-lucide="clock"></i> 20 min
                    </div>
<button className="ml-auto w-8 h-8 flex items-center justify-center rounded-full border border-stone-200 hover:border-stone-900 text-stone-500 hover:text-stone-900 transition-all">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="group flex flex-col gap-4 opacity-0 animate-slide-up" style={{animationDelay: '600ms'}}>
<div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-200">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md">
<span className="text-[10px] font-semibold tracking-wide uppercase text-stone-800">Gluten Free</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-stone-900">Roasted Pumpkin Pizza</h3>
<p className="text-xs text-stone-500 mt-1 line-clamp-2">Cauliflower crust topped with roasted pumpkin, sage, goat cheese, and caramelized onions.</p>
</div>
<span className="text-sm font-medium text-stone-900">$18</span>
</div>
<div className="flex items-center gap-4 pt-2 border-t border-stone-200/60 mt-auto">
<div className="flex items-center gap-1.5 text-xs text-stone-500">
<i className="w-3.5 h-3.5" data-lucide="flame"></i> 620 kcal
                    </div>
<div className="flex items-center gap-1.5 text-xs text-stone-500">
<i className="w-3.5 h-3.5" data-lucide="clock"></i> 35 min
                    </div>
<button className="ml-auto w-8 h-8 flex items-center justify-center rounded-full border border-stone-200 hover:border-stone-900 text-stone-500 hover:text-stone-900 transition-all">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="group flex flex-col gap-4 opacity-0 animate-slide-up" style={{animationDelay: '700ms'}}>
<div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-200">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md">
<span className="text-[10px] font-semibold tracking-wide uppercase text-stone-800">High Protein</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-stone-900">Seared Salmon Fillet</h3>
<p className="text-xs text-stone-500 mt-1 line-clamp-2">Wild-caught salmon with asparagus risotto and a lemon butter reduction sauce.</p>
</div>
<span className="text-sm font-medium text-stone-900">$24</span>
</div>
<div className="flex items-center gap-4 pt-2 border-t border-stone-200/60 mt-auto">
<div className="flex items-center gap-1.5 text-xs text-stone-500">
<i className="w-3.5 h-3.5" data-lucide="flame"></i> 580 kcal
                    </div>
<div className="flex items-center gap-1.5 text-xs text-stone-500">
<i className="w-3.5 h-3.5" data-lucide="clock"></i> 25 min
                    </div>
<button className="ml-auto w-8 h-8 flex items-center justify-center rounded-full border border-stone-200 hover:border-stone-900 text-stone-500 hover:text-stone-900 transition-all">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
<div className="mt-12 text-center opacity-0 animate-slide-up" style={{animationDelay: '800ms'}}>
<button className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors border-b border-transparent hover:border-stone-900 pb-0.5">
                View Full Menu
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:w-1/2">
<h2 className="text-3xl font-medium tracking-tight mb-4">Farm to fork, <br/><span className="text-stone-500">without the compromise.</span></h2>
<p className="text-stone-400 font-light text-sm leading-relaxed">We partner with local organic farms to ensure every ingredient is harvested at peak ripeness, delivering flavor and nutrition that supermarket produce can't match.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl bg-stone-850 border border-stone-800">
<div className="w-10 h-10 rounded-lg bg-stone-800 flex items-center justify-center mb-6 text-orange-500">
<i className="w-5 h-5" data-lucide="leaf"></i>
</div>
<h3 className="text-base font-medium mb-2">100% Organic Sourcing</h3>
<p className="text-xs text-stone-400 leading-relaxed">No pesticides, no GMOs. Just clean, honest food grown by farmers we know by name.</p>
</div>

<div className="p-6 rounded-2xl bg-stone-850 border border-stone-800">
<div className="w-10 h-10 rounded-lg bg-stone-800 flex items-center justify-center mb-6 text-orange-500">
<i className="w-5 h-5" data-lucide="recycle"></i>
</div>
<h3 className="text-base font-medium mb-2">Zero-Waste Packaging</h3>
<p className="text-xs text-stone-400 leading-relaxed">Our commitment to the planet means fully compostable containers and recycled materials.</p>
</div>

<div className="p-6 rounded-2xl bg-stone-850 border border-stone-800">
<div className="w-10 h-10 rounded-lg bg-stone-800 flex items-center justify-center mb-6 text-orange-500">
<i className="w-5 h-5" data-lucide="chef-hat"></i>
</div>
<h3 className="text-base font-medium mb-2">Chef Crafted Recipes</h3>
<p className="text-xs text-stone-400 leading-relaxed">Designed by Michelin-star alumni to bring fine dining techniques into your home kitchen.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto bg-stone-100 rounded-3xl p-8 md:p-12 border border-stone-200 relative overflow-hidden">
<div className="relative z-10 text-center">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">Ready to taste the difference?</h2>
<p className="text-sm text-stone-500 mb-8 max-w-md mx-auto">Build your first box today and get 20% off your first three deliveries. No commitment, cancel anytime.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
<div className="relative flex-1">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" data-lucide="mail"></i>
<input className="w-full pl-10 pr-4 h-10 rounded-lg border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 placeholder:text-stone-400" placeholder="Enter your email" type="email"/>
</div>
<button className="h-10 px-6 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-medium transition-colors shadow-md shadow-orange-900/10" type="submit">
                        Get Started
                    </button>
</form>
<p className="text-[10px] text-stone-400 mt-4">By subscribing you agree to our Terms of Service.</p>
</div>

<div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
<div className="absolute -top-24 -left-24 w-64 h-64 bg-orange-300 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="absolute -bottom-24 -right-24 w-64 h-64 bg-stone-300 rounded-full blur-3xl mix-blend-multiply"></div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="text-xs font-semibold text-stone-900 mb-4">Product</h4>
<ul className="space-y-2">
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Weekly Menu</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Meal Plans</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Wine Pairing</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Our Story</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Sustainability</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Careers</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 mb-4">Resources</h4>
<ul className="space-y-2">
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Cooking Tips</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Blog</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">FAQ</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Support</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 mb-4">Social</h4>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-stone-900" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="text-stone-400 hover:text-stone-900" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-stone-400 hover:text-stone-900" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
</div>
</div>
</div>
<div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-stone-900 rounded flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="chef-hat"></i>
</div>
<span className="text-xs font-semibold tracking-tight">CULINARY.</span>
</div>
<div className="text-[10px] text-stone-400">
                    © 2024 Culinary Inc. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
