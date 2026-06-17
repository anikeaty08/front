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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
gray: {
50: '#f9fafb',
100: '#f3f4f6',
200: '#e5e7eb',
300: '#d1d5db',
400: '#9ca3af',
500: '#6b7280',
600: '#4b5563',
700: '#374151',
800: '#1f2937',
900: '#111827',
},
orange: {
50: '#fff7ed',
100: '#ffedd5',
500: '#f97316',
600: '#ea580c',
}
},
boxShadow: {
'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
'card': '0 0 0 1px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.04)',
}
}
}
}



        function navigate(viewId) {
            document.querySelectorAll('.page-view').forEach(el => {
                el.classList.add('hidden');
            });
            const target = document.getElementById('view-' + viewId);
            if(target) {
                target.classList.remove('hidden');
                window.scrollTo(0,0);
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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="cursor-pointer flex items-center gap-1.5 group select-none" onclick="navigate('home')">
<div className="relative flex items-center justify-center h-8 w-8 bg-gray-900 rounded-lg text-white transform group-hover:rotate-12 transition-transform duration-300">
<span className="font-bold text-lg">C</span>
<div className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-orange-500 rounded-full border-2 border-white"></div>
</div>
<span className="text-lg font-bold tracking-tight text-gray-900 group-hover:text-gray-700 transition-colors">
                    COOKBOOK
                </span>
</div>

<div className="hidden md:flex items-center gap-1 bg-gray-50/80 p-1.5 rounded-full border border-gray-100">
<button className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 bg-white shadow-sm transition-all flex items-center gap-2" onclick="navigate('home')">
<iconify-icon icon="solar:home-2-linear"></iconify-icon> Home
                </button>
<button className="px-4 py-2 rounded-full text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all flex items-center gap-2" onclick="navigate('recipes')">
<iconify-icon icon="solar:chef-hat-linear"></iconify-icon> Recipes
                </button>
<button className="px-4 py-2 rounded-full text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all flex items-center gap-2" onclick="navigate('saved')">
<iconify-icon className="" height="14" icon="solar:bookmark-linear" style={{color: 'rgb(17, 24, 39)'}} width="14"></iconify-icon> Saved
                </button>
</div>

<div className="flex items-center gap-3">
<button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="22"></iconify-icon>
</button>
<button className="hidden md:flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all" onclick="navigate('profile')">
<div className="h-8 w-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-medium">AM</div>
<span className="text-sm font-medium text-gray-700">Profile</span>
</button>
<button className="md:hidden p-2 text-gray-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="pt-24 min-h-screen">

<div className="page-view animate-fade-in" id="view-home">

<section className="max-w-7xl mx-auto px-6 mb-12">
<div className="relative w-full bg-gray-900 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-20 gap-12 text-white">
<div className="w-full md:w-1/2 space-y-8 z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-md text-xs font-medium text-orange-400 tracking-wide uppercase">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
<span>Daily Curated</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1] text-white">
                            Master the art <br/>
                            of <span className="text-orange-500 italic font-serif">flavor.</span>
</h1>
<p className="text-lg text-gray-400 max-w-md leading-relaxed font-light">
                            Your personal culinary companion. Discover, organize, and cook recipes tailored to your taste.
                        </p>
<div className="flex gap-4">
<button className="h-14 px-8 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2" onclick="navigate('recipes')">
                                Start Cooking <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="w-full md:w-1/2 relative h-80 md:h-[500px]">
<div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transform md:rotate-3 hover:rotate-0 transition-all duration-700 border border-gray-700/50">

<img alt="Cooking" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-center justify-between">
<div className="">
<p className="text-lg font-medium">Roasted Pumpkin Soup</p>
<p className="text-sm text-gray-300">By Chef Antoni</p>
</div>
<button className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:play-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-12">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Browse Categories</h2>
<a className="text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1" href="#">View All <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid grid-cols-2 md:grid-cols-6 gap-4">
<button className="p-6 rounded-3xl bg-orange-50 hover:bg-orange-100 transition-colors flex flex-col items-center gap-3 group">
<span className="text-3xl group-hover:scale-110 transition-transform duration-300">🥗</span>
<span className="text-sm font-medium text-gray-900">Healthy</span>
</button>
<button className="p-6 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-colors flex flex-col items-center gap-3 group">
<span className="text-3xl group-hover:scale-110 transition-transform duration-300">🥩</span>
<span className="text-sm font-medium text-gray-900">Meat</span>
</button>
<button className="p-6 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-colors flex flex-col items-center gap-3 group">
<span className="group-hover:scale-110 transition-transform duration-300 text-3xl">🍰</span>
<span className="text-sm font-medium text-gray-900">Sweet</span>
</button>
<button className="p-6 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-colors flex flex-col items-center gap-3 group">
<span className="text-3xl group-hover:scale-110 transition-transform duration-300">🌮</span>
<span className="text-sm font-medium text-gray-900">Mexican</span>
</button>
<button className="p-6 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-colors flex flex-col items-center gap-3 group">
<span className="text-3xl group-hover:scale-110 transition-transform duration-300">🍜</span>
<span className="text-sm font-medium text-gray-900">Asian</span>
</button>
<button className="p-6 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-colors flex flex-col items-center gap-3 group">
<span className="text-3xl group-hover:scale-110 transition-transform duration-300">🍕</span>
<span className="text-sm font-medium text-gray-900">Italian</span>
</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-20">
<h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-8">Trending Now</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group flex flex-col gap-4 cursor-pointer" onclick="navigate('detail')">
<div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-card">
<img alt="Pancakes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4">
<button className="h-10 w-10 rounded-full bg-white/90 backdrop-blur text-gray-400 hover:text-orange-500 hover:bg-white flex items-center justify-center transition-all shadow-sm">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>
<div className="absolute bottom-4 left-4 flex gap-2">
<span className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur text-xs font-semibold text-gray-900 shadow-sm flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 20 min
                                </span>
</div>
</div>
<div className="px-1">
<div className="flex items-center justify-between mb-1">
<h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">Fluffy Blueberry Pancakes</h3>
<div className="flex items-center gap-1 text-sm font-medium text-gray-900">
<iconify-icon className="text-orange-500" icon="solar:star-bold"></iconify-icon> 4.8
                                </div>
</div>
<div className="flex items-center gap-2 text-sm text-gray-500">
<span className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded text-xs font-medium">Breakfast</span>
<span>•</span>
<span>320 kcal</span>
</div>
</div>
</div>

<div className="group flex flex-col gap-4 cursor-pointer" onclick="navigate('detail')">
<div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-card">
<img alt="Bowl" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4">
<button className="h-10 w-10 rounded-full bg-white/90 backdrop-blur text-gray-400 hover:text-orange-500 hover:bg-white flex items-center justify-center transition-all shadow-sm">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>
<div className="absolute bottom-4 left-4 flex gap-2">
<span className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur text-xs font-semibold text-gray-900 shadow-sm flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 35 min
                                </span>
</div>
</div>
<div className="px-1">
<div className="flex items-center justify-between mb-1">
<h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">Green Goddess Salad</h3>
<div className="flex items-center gap-1 text-sm font-medium text-gray-900">
<iconify-icon className="text-orange-500" icon="solar:star-bold"></iconify-icon> 4.9
                                </div>
</div>
<div className="flex items-center gap-2 text-sm text-gray-500">
<span className="bg-green-50 text-green-600 px-2 py-0.5 rounded text-xs font-medium">Vegan</span>
<span>•</span>
<span>180 kcal</span>
</div>
</div>
</div>

<div className="group flex flex-col gap-4 cursor-pointer" onclick="navigate('detail')">
<div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-card">
<img alt="Pasta" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4">
<button className="h-10 w-10 rounded-full bg-white/90 backdrop-blur text-gray-400 hover:text-orange-500 hover:bg-white flex items-center justify-center transition-all shadow-sm">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>
<div className="absolute bottom-4 left-4 flex gap-2">
<span className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur text-xs font-semibold text-gray-900 shadow-sm flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 45 min
                                </span>
</div>
</div>
<div className="px-1">
<div className="flex items-center justify-between mb-1">
<h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">Creamy Tomato Pasta</h3>
<div className="flex items-center gap-1 text-sm font-medium text-gray-900">
<iconify-icon className="text-orange-500" icon="solar:star-bold"></iconify-icon> 4.6
                                </div>
</div>
<div className="flex items-center gap-2 text-sm text-gray-500">
<span className="bg-red-50 text-red-600 px-2 py-0.5 rounded text-xs font-medium">Italian</span>
<span>•</span>
<span>540 kcal</span>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="hidden page-view" id="view-recipes">
<section className="max-w-7xl mx-auto px-6 py-8">
<div className="mb-10 space-y-6">
<div>
<h2 className="text-4xl font-semibold tracking-tighter text-gray-900">Discover</h2>
<p className="text-gray-500 mt-2">Find your next favorite meal from our community.</p>
</div>

<div className="relative">
<iconify-icon className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="w-full pl-14 pr-4 py-4 rounded-2xl bg-gray-50 border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all outline-none" placeholder="Search for recipes, ingredients, tags..." type="text"/>
<button className="absolute right-3 top-2 bottom-2 px-4 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">Search</button>
</div>

<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium hover:border-gray-900 hover:bg-gray-50 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:tuning-linear"></iconify-icon> Filters
                         </button>
<button className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium">All</button>
<button className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">Quick &amp; Easy</button>
<button className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">Vegetarian</button>
<button className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">Gluten Free</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group flex flex-col gap-3 cursor-pointer" onclick="navigate('detail')">
<div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gray-100 shadow-card">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 text-gray-500 flex items-center justify-center hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:bookmark-linear"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">Buddha Bowl</h3>
<p className="text-sm text-gray-500">By Sarah J.</p>
</div>
</div>

<div className="group flex flex-col gap-3 cursor-pointer" onclick="navigate('detail')">
<div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gray-100 shadow-card">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 text-gray-500 flex items-center justify-center hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:bookmark-linear"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">Pizza Margherita</h3>
<p className="text-sm text-gray-500">By Mario R.</p>
</div>
</div>

<div className="group flex flex-col gap-3 cursor-pointer" onclick="navigate('detail')">
<div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gray-100 shadow-card">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 text-gray-500 flex items-center justify-center hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:bookmark-linear"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">Garden Salad</h3>
<p className="text-sm text-gray-500">By Health Daily</p>
</div>
</div>

<div className="group flex flex-col gap-3 cursor-pointer" onclick="navigate('detail')">
<div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gray-100 shadow-card">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 text-gray-500 flex items-center justify-center hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:bookmark-linear"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">BBQ Ribs</h3>
<p className="text-sm text-gray-500">By Smokehouse</p>
</div>
</div>
</div>
</section>
</div>

<div className="hidden page-view" id="view-detail">
<section className="max-w-5xl mx-auto px-6 py-8">

<div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
<button className="hover:text-gray-900 flex items-center gap-1" onclick="navigate('recipes')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back
                    </button>
<span className="text-gray-300">/</span>
<span className="text-gray-900 font-medium">Fluffy Blueberry Pancakes</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12">

<div>
<h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tighter mb-6">Fluffy Blueberry Pancakes</h1>

<div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-600">
<div className="flex items-center gap-2">
<img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<span className="font-medium text-gray-900">Alex Morgan</span>
</div>
<div className="w-1 h-1 rounded-full bg-gray-300"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-gray-400" icon="solar:clock-circle-linear"></iconify-icon> 20 min
                             </div>
<div className="w-1 h-1 rounded-full bg-gray-300"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-gray-400" icon="solar:fire-linear"></iconify-icon> 320 kcal
                             </div>
<div className="w-1 h-1 rounded-full bg-gray-300"></div>
<div className="flex items-center gap-1 text-orange-500">
<iconify-icon icon="solar:star-bold"></iconify-icon> 4.8
                             </div>
</div>

<div className="w-full aspect-video rounded-3xl overflow-hidden mb-10 shadow-lg">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>

<div className="mb-10">
<h3 className="text-xl font-semibold text-gray-900 mb-4">About this recipe</h3>
<p className="text-gray-600 leading-relaxed text-lg font-light">
                                 These are the fluffiest pancakes you will ever make! Bursting with fresh blueberries and topped with maple syrup, they are the perfect way to start your Sunday morning. The secret is in letting the batter rest for a few minutes.
                             </p>
</div>

<div className="mb-10">
<h3 className="text-xl font-semibold text-gray-900 mb-6">Ingredients</h3>
<div className="space-y-3 bg-gray-50 p-6 rounded-3xl border border-gray-100">
<label className="flex items-center gap-4 p-3 rounded-xl bg-white border border-gray-100 shadow-sm cursor-pointer hover:border-orange-200 transition-colors">
<input className="w-5 h-5 rounded-md border-gray-300 text-orange-500 focus:ring-orange-500" type="checkbox"/>
<span className="text-gray-700 font-medium">2 cups All-purpose Flour</span>
</label>
<label className="flex items-center gap-4 p-3 rounded-xl bg-white border border-gray-100 shadow-sm cursor-pointer hover:border-orange-200 transition-colors">
<input className="w-5 h-5 rounded-md border-gray-300 text-orange-500 focus:ring-orange-500" type="checkbox"/>
<span className="text-gray-700 font-medium">2 Eggs</span>
</label>
<label className="flex items-center gap-4 p-3 rounded-xl bg-white border border-gray-100 shadow-sm cursor-pointer hover:border-orange-200 transition-colors">
<input className="w-5 h-5 rounded-md border-gray-300 text-orange-500 focus:ring-orange-500" type="checkbox"/>
<span className="text-gray-700 font-medium">1 cup Milk</span>
</label>
<label className="flex items-center gap-4 p-3 rounded-xl bg-white border border-gray-100 shadow-sm cursor-pointer hover:border-orange-200 transition-colors">
<input className="w-5 h-5 rounded-md border-gray-300 text-orange-500 focus:ring-orange-500" type="checkbox"/>
<span className="text-gray-700 font-medium">1 cup Blueberries</span>
</label>
</div>
</div>

<div>
<h3 className="text-xl font-semibold text-gray-900 mb-6">Preparation</h3>
<div className="space-y-8">
<div className="flex gap-6">
<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">1</div>
<div>
<h4 className="text-lg font-semibold text-gray-900 mb-2">Mix dry ingredients</h4>
<p className="text-gray-600 leading-relaxed">In a large bowl, whisk together flour, sugar, baking powder, and salt.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">2</div>
<div>
<h4 className="text-lg font-semibold text-gray-900 mb-2">Combine wet ingredients</h4>
<p className="text-gray-600 leading-relaxed">In another bowl, beat the eggs and then stir in milk and melted butter.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">3</div>
<div>
<h4 className="text-lg font-semibold text-gray-900 mb-2">Cook</h4>
<p className="text-gray-600 leading-relaxed">Heat a griddle. Pour batter. Add blueberries. Flip when bubbles form.</p>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="sticky top-24">
<div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-card">
<h3 className="font-semibold text-gray-900 mb-4">Nutrition per serving</h3>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-gray-50 p-3 rounded-2xl text-center">
<p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Calories</p>
<p className="text-lg font-bold text-gray-900">320</p>
</div>
<div className="bg-gray-50 p-3 rounded-2xl text-center">
<p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Protein</p>
<p className="text-lg font-bold text-gray-900">12g</p>
</div>
<div className="bg-gray-50 p-3 rounded-2xl text-center">
<p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Carbs</p>
<p className="text-lg font-bold text-gray-900">45g</p>
</div>
<div className="bg-gray-50 p-3 rounded-2xl text-center">
<p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Fat</p>
<p className="text-lg font-bold text-gray-900">8g</p>
</div>
</div>
<button className="w-full py-4 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2 mb-3">
<iconify-icon icon="solar:bookmark-bold"></iconify-icon> Save Recipe
                                </button>
<button className="w-full py-4 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:share-linear"></iconify-icon> Share
                                </button>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="hidden page-view" id="view-profile">

<div className="h-48 md:h-64 w-full bg-gradient-to-r from-orange-100 to-orange-50 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
</div>
<div className="max-w-6xl mx-auto px-6 relative -mt-16 mb-20">

<div className="bg-white rounded-[2rem] shadow-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-8 border border-gray-100">
<div className="flex flex-col md:flex-row items-center md:items-end gap-6 w-full">
<div className="w-32 h-32 rounded-[2rem] bg-gray-900 p-1 shadow-xl -mt-12 md:-mt-0 relative z-10">
<img className="w-full h-full object-cover rounded-[1.8rem]" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute bottom-0 right-0 h-8 w-8 bg-green-500 rounded-full border-4 border-white"></div>
</div>
<div className="text-center md:text-left flex-1">
<h1 className="text-3xl font-bold text-gray-900 tracking-tight">Alex Morgan</h1>
<p className="text-gray-500 font-medium">@alexcooks • Joined 2022</p>
<div className="flex items-center justify-center md:justify-start gap-4 mt-3">
<span className="flex items-center gap-1 text-sm bg-orange-50 text-orange-700 px-3 py-1 rounded-full font-medium"><iconify-icon icon="solar:chef-hat-bold"></iconify-icon> Master Chef</span>
<span className="flex items-center gap-1 text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium"><iconify-icon icon="solar:map-point-linear"></iconify-icon> New York</span>
</div>
</div>
</div>
<div className="flex gap-3 w-full md:w-auto">
<button className="flex-1 md:flex-none py-3 px-6 rounded-xl bg-gray-900 text-white text-sm font-medium shadow-lg hover:bg-gray-800 transition-all">Edit Profile</button>
<button className="flex-1 md:flex-none p-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-700 transition-all flex items-center justify-center">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex flex-col items-center justify-center hover:shadow-sm transition-all group">
<div className="h-10 w-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:fire-bold" width="24"></iconify-icon>
</div>
<span className="text-2xl font-bold text-gray-900">142</span>
<span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Recipes Cooked</span>
</div>
<div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex flex-col items-center justify-center hover:shadow-sm transition-all group">
<div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-bold" width="24"></iconify-icon>
</div>
<span className="text-2xl font-bold text-gray-900">2.4k</span>
<span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Followers</span>
</div>
<div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex flex-col items-center justify-center hover:shadow-sm transition-all group">
<div className="h-10 w-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-bold" width="24"></iconify-icon>
</div>
<span className="text-2xl font-bold text-gray-900">15.8k</span>
<span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Total Likes</span>
</div>
<div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex flex-col items-center justify-center hover:shadow-sm transition-all group">
<div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calendar-bold" width="24"></iconify-icon>
</div>
<span className="text-2xl font-bold text-gray-900">12</span>
<span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Day Streak</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="space-y-8">

<div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold text-gray-900">Cooking Activity</h3>
<span className="text-xs text-gray-400">Last 30 days</span>
</div>
<div className="flex flex-wrap gap-2">

<div className="w-8 h-8 rounded-lg bg-orange-500"></div>
<div className="w-8 h-8 rounded-lg bg-orange-300"></div>
<div className="w-8 h-8 rounded-lg bg-gray-100"></div>
<div className="w-8 h-8 rounded-lg bg-orange-500"></div>
<div className="w-8 h-8 rounded-lg bg-orange-400"></div>
<div className="w-8 h-8 rounded-lg bg-orange-200"></div>
<div className="w-8 h-8 rounded-lg bg-gray-100"></div>
<div className="w-8 h-8 rounded-lg bg-orange-500"></div>
<div className="w-8 h-8 rounded-lg bg-orange-500"></div>
<div className="w-8 h-8 rounded-lg bg-gray-100"></div>
<div className="w-8 h-8 rounded-lg bg-orange-300"></div>
<div className="w-8 h-8 rounded-lg bg-orange-100"></div>
<div className="w-8 h-8 rounded-lg bg-orange-500"></div>
<div className="w-8 h-8 rounded-lg bg-orange-500"></div>
<div className="w-8 h-8 rounded-lg bg-orange-400"></div>
<div className="w-8 h-8 rounded-lg bg-gray-100"></div>
<div className="w-8 h-8 rounded-lg bg-orange-200"></div>
<div className="w-8 h-8 rounded-lg bg-orange-500"></div>
</div>
</div>

<div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-3xl text-white shadow-lg">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold flex items-center gap-2">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon> Shopping List
                                 </h3>
<button className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 text-xs">+</button>
</div>
<ul className="space-y-3 mb-4">
<li className="flex items-center gap-3 text-sm text-gray-300">
<div className="w-4 h-4 rounded border border-gray-500"></div>
                                     Olive Oil
                                 </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<div className="w-4 h-4 rounded border border-gray-500"></div>
                                     Basil Leaves
                                 </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<div className="w-4 h-4 rounded border border-gray-500"></div>
                                     Parmesan Cheese
                                 </li>
</ul>
<button className="w-full py-2.5 rounded-xl bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors">View All Items</button>
</div>

<div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
<h3 className="font-semibold text-gray-900 mb-4">Dietary Preferences</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wide">Vegetarian</span>
<span className="px-3 py-1.5 rounded-lg bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wide">No Peanuts</span>
<button className="px-3 py-1.5 rounded-lg border border-dashed border-gray-300 text-gray-400 text-xs font-bold uppercase tracking-wide hover:border-gray-900 hover:text-gray-900">+ Add</button>
</div>
</div>
</div>

<div className="lg:col-span-2">
<div className="border-b border-gray-200 mb-6">
<div className="flex gap-8 overflow-x-auto hide-scroll">
<button className="pb-3 border-b-2 border-orange-500 text-orange-600 font-semibold text-sm whitespace-nowrap">My Recipes (12)</button>
<button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 font-medium text-sm whitespace-nowrap">Saved Collection</button>
<button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 font-medium text-sm whitespace-nowrap">Reviews</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="group flex flex-col gap-3 cursor-pointer" onclick="navigate('detail')">
<div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 right-2 bg-black/50 backdrop-blur px-2 py-1 rounded-lg text-white text-xs font-medium">
<iconify-icon className="align-middle" icon="solar:eye-linear"></iconify-icon> 1.2k
                                     </div>
</div>
<div>
<h3 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Roasted Chicken &amp; Veggies</h3>
<p className="text-xs text-gray-400 mt-1">Posted 2 days ago</p>
</div>
</div>
<div className="group flex flex-col gap-3 cursor-pointer" onclick="navigate('detail')">
<div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 right-2 bg-black/50 backdrop-blur px-2 py-1 rounded-lg text-white text-xs font-medium">
<iconify-icon className="align-middle" icon="solar:eye-linear"></iconify-icon> 854
                                     </div>
</div>
<div>
<h3 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Summer Garden Salad</h3>
<p className="text-xs text-gray-400 mt-1">Posted 1 week ago</p>
</div>
</div>

<button className="border-2 border-dashed border-gray-200 rounded-2xl aspect-[16/10] flex flex-col items-center justify-center gap-2 text-gray-400 hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50 transition-all">
<iconify-icon icon="solar:add-circle-linear" width="32"></iconify-icon>
<span className="text-sm font-medium">Create New Recipe</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden page-view" id="view-saved">
<div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
<div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
<iconify-icon icon="solar:bookmark-bold-duotone" width="40"></iconify-icon>
</div>
<h2 className="text-2xl font-bold text-gray-900 mb-2">Your Saved Collection</h2>
<p className="text-gray-500 max-w-sm mb-8">All your bookmarked recipes will appear here. Start exploring to build your cookbook.</p>
<button className="px-8 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all shadow-lg" onclick="navigate('recipes')">Browse Recipes</button>
</div>
</div>
</main>

<footer className="border-t border-gray-100 bg-gray-50 py-12 mt-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-1.5 select-none">
<div className="relative flex items-center justify-center h-6 w-6 bg-gray-900 rounded-md text-white">
<span className="font-bold text-xs">C</span>
<div className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 bg-orange-500 rounded-full border border-white"></div>
</div>
<span className="text-md font-bold tracking-tight text-gray-900">COOKBOOK</span>
</div>
<div className="flex gap-8 text-sm text-gray-500">
<a className="hover:text-gray-900" href="#">About</a>
<a className="hover:text-gray-900" href="#">Community</a>
<a className="hover:text-gray-900" href="#">Privacy</a>
<a className="hover:text-gray-900" href="#">Support</a>
</div>
<p className="text-sm text-gray-400">© 2024 Cookbook Inc.</p>
</div>
</footer>


    </>
  );
}
