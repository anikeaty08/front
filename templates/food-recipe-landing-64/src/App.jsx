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



        // --- Router Logic ---
        function navigate(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.add('hidden');
            });
            
            // Show selected page
            document.getElementById('page-' + pageId).classList.remove('hidden');
            
            // Scroll to top
            window.scrollTo(0, 0);

            // Update Nav State
            document.querySelectorAll('nav button').forEach(btn => {
                btn.classList.remove('nav-active');
            });
            const activeBtn = document.getElementById('nav-' + pageId);
            if(activeBtn) activeBtn.classList.add('nav-active');
        }

        // Initialize Home
        document.addEventListener('DOMContentLoaded', () => {
            navigate('home');
        });

        // --- Modal Logic ---
        const modal = document.getElementById('recipe-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalContent = document.getElementById('modal-content');

        function showRecipe(recipeName) {
            modal.classList.remove('hidden');
            if (recipeName === 'carbonara') {
                modalTitle.innerText = "Classic Spaghetti Carbonara";
                modalContent.innerHTML = "<strong>Ingredients:</strong> Pasta, eggs, pecorino romano, guanciale, black pepper.<br><br><strong>Instructions:</strong> Boil pasta. Sauté guanciale until crisp. Whisk eggs and cheese. Toss hot pasta with egg mixture off heat to create a creamy sauce. Add guanciale.";
            } else if (recipeName === 'salad') {
                modalTitle.innerText = "Fresh Quinoa Salad";
                modalContent.innerHTML = "<strong>Ingredients:</strong> Quinoa, cherry tomatoes, cucumber, parsley, lemon juice, olive oil.<br><br><strong>Instructions:</strong> Rinse and cook quinoa. Chop vegetables finely. Whisk lemon juice and olive oil. Toss everything together and chill before serving.";
            } else {
                modalTitle.innerText = "Full Recipe Coming Soon";
                modalContent.innerText = "This recipe is currently being written by our chefs. Check back later!";
            }
        }

        function closeModal() {
            modal.classList.add('hidden');
        }

        // Close modal on click outside backdrop
        document.querySelector('#recipe-modal .fixed.inset-0.bg-slate-900\\/20').addEventListener('click', closeModal);
    
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
      

<header className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<button className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2 hover:opacity-80 transition-opacity" onclick="navigate('home')">
<iconify-icon icon="solar:chef-hat-linear" strokeWidth="1.5" width="20"></iconify-icon>
                FOODIE
            </button>
<nav className="hidden sm:flex items-center gap-1 text-sm font-medium">
<button className="px-3 py-1.5 rounded-md text-slate-500 hover:text-slate-900 transition-all" id="nav-home" onclick="navigate('home')">Home</button>
<button className="px-3 py-1.5 rounded-md text-slate-500 hover:text-slate-900 transition-all" id="nav-recipes" onclick="navigate('recipes')">Recipes</button>
<button className="px-3 py-1.5 rounded-md text-slate-500 hover:text-slate-900 transition-all" id="nav-about" onclick="navigate('about')">About</button>
<button className="px-3 py-1.5 rounded-md text-slate-500 hover:text-slate-900 transition-all" id="nav-contact" onclick="navigate('contact')">Contact</button>
</nav>
<button className="sm:hidden text-slate-900 p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<main className="flex-grow pt-14">

<div className="page-section fade-in" id="page-home">

<section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-50 via-white to-transparent opacity-60 -z-10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-4">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
                        Fresh recipes added daily
                    </div>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                        Delicious meals, <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">made simple.</span>
</h2>
<p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto font-light leading-relaxed">
                        Explore a curated collection of simple, high-quality recipes designed for modern home cooks.
                    </p>
<div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
<button className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-6 text-sm font-medium text-white shadow hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" onclick="navigate('recipes')">
                            Browse Recipes
                        </button>
<button className="inline-flex h-10 items-center justify-center rounded-md border border-slate-200 bg-white px-6 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2" onclick="navigate('about')">
                            Our Mission
                        </button>
</div>
</div>
</section>

<section className="py-12 px-6 border-t border-slate-100 bg-slate-50/30">
<div className="max-w-5xl mx-auto">
<div className="flex items-center justify-between mb-8">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Trending Now</h3>
<button className="text-sm font-medium text-slate-500 hover:text-rose-600 flex items-center gap-1 transition-colors" onclick="navigate('recipes')">
                            View library <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all cursor-pointer" onclick="showRecipe('carbonara')">
<div className="aspect-video bg-slate-100 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="text-xs font-semibold text-rose-600 mb-1">Dinner</div>
<h4 className="font-medium text-slate-900">Spaghetti Carbonara</h4>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all cursor-pointer" onclick="showRecipe('salad')">
<div className="aspect-video bg-slate-100 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="text-xs font-semibold text-green-600 mb-1">Healthy</div>
<h4 className="font-medium text-slate-900">Quinoa Garden Salad</h4>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all cursor-pointer">
<div className="aspect-video bg-slate-100 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="text-xs font-semibold text-orange-600 mb-1">Breakfast</div>
<h4 className="font-medium text-slate-900">Avocado Toast Supreme</h4>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden fade-in" id="page-recipes">
<div className="bg-slate-50 border-b border-slate-200 py-12 px-6">
<div className="max-w-5xl mx-auto">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Recipe Library</h1>
<div className="flex flex-col sm:flex-row gap-4">
<div className="relative flex-grow max-w-md">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2.5 rounded-lg border-slate-200 border bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none text-sm shadow-sm" placeholder="Search ingredients, meals..." type="text"/>
</div>
<div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
<button className="px-4 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-medium whitespace-nowrap shadow-sm">All</button>
<button className="px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 whitespace-nowrap">Breakfast</button>
<button className="px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 whitespace-nowrap">Lunch</button>
<button className="px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 whitespace-nowrap">Dinner</button>
<button className="px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 whitespace-nowrap">Dessert</button>
</div>
</div>
</div>
</div>
<div className="max-w-5xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="relative h-56 overflow-hidden bg-slate-100">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-semibold text-slate-900 shadow-sm border border-slate-100 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 20m
                            </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="text-xs font-medium text-orange-600 mb-2">Italian • Dinner</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Classic Carbonara</h3>
<button className="mt-auto pt-4 text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center justify-between w-full border-t border-slate-100 group-hover:text-rose-600 transition-colors" onclick="showRecipe('carbonara')">
                                View Recipe <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="relative h-56 overflow-hidden bg-slate-100">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-semibold text-slate-900 shadow-sm border border-slate-100 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 15m
                            </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="text-xs font-medium text-green-600 mb-2">Vegan • Lunch</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Summer Quinoa Salad</h3>
<button className="mt-auto pt-4 text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center justify-between w-full border-t border-slate-100 group-hover:text-rose-600 transition-colors" onclick="showRecipe('salad')">
                                View Recipe <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="relative h-56 overflow-hidden bg-slate-100">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-semibold text-slate-900 shadow-sm border border-slate-100 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 45m
                            </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="text-xs font-medium text-indigo-600 mb-2">Comfort • Dinner</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Homemade Pizza</h3>
<button className="mt-auto pt-4 text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center justify-between w-full border-t border-slate-100 group-hover:text-rose-600 transition-colors">
                                View Recipe <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="relative h-56 overflow-hidden bg-slate-100">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-semibold text-slate-900 shadow-sm border border-slate-100 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 30m
                            </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="text-xs font-medium text-pink-600 mb-2">Sweet • Drink</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Berry Smoothie Bowl</h3>
<button className="mt-auto pt-4 text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center justify-between w-full border-t border-slate-100 group-hover:text-rose-600 transition-colors">
                                View Recipe <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="relative h-56 overflow-hidden bg-slate-100">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-semibold text-slate-900 shadow-sm border border-slate-100 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 60m
                            </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="text-xs font-medium text-yellow-600 mb-2">Healthy • Lunch</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Poke Bowl</h3>
<button className="mt-auto pt-4 text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center justify-between w-full border-t border-slate-100 group-hover:text-rose-600 transition-colors">
                                View Recipe <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="relative h-56 overflow-hidden bg-slate-100">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-semibold text-slate-900 shadow-sm border border-slate-100 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 10m
                            </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="text-xs font-medium text-amber-600 mb-2">Breakfast • Easy</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">French Toast</h3>
<button className="mt-auto pt-4 text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center justify-between w-full border-t border-slate-100 group-hover:text-rose-600 transition-colors">
                                View Recipe <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-12 flex justify-center">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 border border-slate-200 bg-white px-4 py-2 rounded-md transition-colors shadow-sm hover:shadow">Load More</button>
</div>
</div>
</div>

<div className="page-section hidden fade-in" id="page-about">
<section className="py-24 bg-white">
<div className="max-w-2xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-50 text-rose-500 mb-6">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</div>
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Crafted with Love</h1>
<p className="text-lg text-slate-500 leading-relaxed font-light">
                            We're passionate about sharing easy, tasty recipes for home cooks. Our mission is to make cooking accessible, enjoyable, and delicious without the complexity.
                        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-slate-900 text-2xl mb-4" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="font-semibold text-slate-900 mb-2">Community First</h3>
<p className="text-sm text-slate-500 leading-relaxed">Built by foodies, for foodies. We believe the best recipes are the ones shared with friends.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-slate-900 text-2xl mb-4" icon="solar:verified-check-linear"></iconify-icon>
<h3 className="font-semibold text-slate-900 mb-2">Quality Assured</h3>
<p className="text-sm text-slate-500 leading-relaxed">Every recipe is tested multiple times to ensure it works perfectly in your kitchen.</p>
</div>
</div>
<div className="border-t border-slate-100 pt-10 flex justify-center gap-12">
<div className="flex flex-col items-center">
<span className="text-3xl font-bold tracking-tight text-slate-900">500+</span>
<span className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Recipes</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-bold tracking-tight text-slate-900">10k</span>
<span className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Cooks</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-bold tracking-tight text-slate-900">100%</span>
<span className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Free</span>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden fade-in" id="page-contact">
<section className="py-20 px-6">
<div className="max-w-md mx-auto">
<div className="text-center mb-10">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Get in Touch</h1>
<p className="text-sm text-slate-500">Have a recipe request? Send us a message.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Message sent!');">
<div className="space-y-1.5">
<label className="block text-xs font-semibold text-slate-700 ml-1" htmlFor="name">Full Name</label>
<div className="relative">
<input className="block w-full rounded-lg border-0 bg-slate-50 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm transition-all" id="name" placeholder="Jane Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-semibold text-slate-700 ml-1" htmlFor="email">Email Address</label>
<div className="relative">
<input className="block w-full rounded-lg border-0 bg-slate-50 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm transition-all" id="email" placeholder="jane@example.com" required="" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-semibold text-slate-700 ml-1" htmlFor="message">Message</label>
<textarea className="block w-full rounded-lg border-0 bg-slate-50 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm transition-all" id="message" placeholder="I'd love to see a recipe for..." rows="4"></textarea>
</div>
<button className="w-full flex justify-center items-center gap-2 rounded-lg bg-slate-900 px-3 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 transition-all mt-6" type="submit">
                                Send Message
                                <iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>
<div className="mt-8 text-center space-y-2">
<p className="text-xs text-slate-400">Or email us directly</p>
<a className="text-sm font-medium text-slate-900 hover:text-rose-600 transition-colors" href="mailto:hello@foodie.com">hello@foodie.com</a>
</div>
</div>
</section>
</div>
</main>

<footer className="border-t border-slate-200 py-12 bg-white mt-auto">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-slate-900 flex items-center justify-center text-white">
<span className="text-[10px] font-bold">F</span>
</div>
<span className="text-sm font-medium text-slate-900">Foodie Recipes</span>
</div>
<p className="text-xs text-slate-400">© 2023 Foodie Recipes. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="18"></iconify-icon></a>
</div>
</div>
</footer>

<div aria-labelledby="modal-title" aria-modal="true" className="hidden relative z-50" id="recipe-modal" role="dialog">
<div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity"></div>
<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
<div className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all sm:my-8 sm:w-full sm:max-w-lg border border-slate-100">
<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
<div className="sm:flex sm:items-start">
<div className="mx-auto flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-50 sm:mx-0 sm:h-10 sm:w-10">
<iconify-icon className="text-rose-600 text-xl" icon="solar:chef-hat-heart-linear"></iconify-icon>
</div>
<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
<h3 className="text-base font-semibold leading-6 text-slate-900" id="modal-title">Recipe Details</h3>
<div className="mt-2">
<p className="text-sm text-slate-500" id="modal-content">
                                        Loading recipe details...
                                    </p>
</div>
</div>
</div>
</div>
<div className="bg-slate-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 border-t border-slate-100">
<button className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 sm:mt-0 sm:w-auto transition-all" onclick="closeModal()" type="button">Close</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
