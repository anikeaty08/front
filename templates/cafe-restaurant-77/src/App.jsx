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



        (function() {
            // Self-executing function to isolate scope
            const container = document.querySelector('[data-element-id="aura-emlbzpkiy2hdoyj5"]');
            if (!container) return;
            
            // Wait for DOM to be fully ready if needed, or run immediately if injected
            const initFilter = () => {
                const radios = container.querySelectorAll('input[name="category"]');
                
                // Find the grid container (assumes it's the next sibling in the layout)
                let grid = container.nextElementSibling;
                // Traverse until we find an element node
                while (grid && grid.nodeType !== 1) {
                    grid = grid.nextSibling;
                }
                
                if (!grid) return;

                const handleFilter = (category) => {
                    const items = Array.from(grid.children);
                    // Simple keyword matching for demo functionality
                    const keywords = {
                        'coffee': ['coffee', 'tea', 'cappuccino', 'latte', 'espresso', 'brew'],
                        'snacks': ['sandwich', 'burger', 'toast', 'salad', 'fries', 'wrap'],
                        'italian': ['pizza', 'pasta', 'lasagna', 'spaghetti', 'risotto'],
                        'sweets': ['brownie', 'cake', 'ice', 'cream', 'donut', 'chocolate', 'sweet'],
                        'drinks': ['mojito', 'shake', 'drink', 'coke', 'soda', 'water', 'juice', 'cooler']
                    };

                    items.forEach(item => {
                        const text = item.textContent.toLowerCase();
                        let match = category === 'all';
                        
                        if (!match && keywords[category]) {
                            match = keywords[category].some(k => text.includes(k));
                        }
                        
                        if (match) {
                            item.classList.remove('hidden');
                            item.style.display = 'flex'; // Restore flex display
                            // Simple fade in animation
                            item.style.opacity = '0';
                            item.style.transform = 'scale(0.98)';
                            requestAnimationFrame(() => {
                                item.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                                item.style.opacity = '1';
                                item.style.transform = 'scale(1)';
                            });
                        } else {
                            item.classList.add('hidden');
                            item.style.display = 'none';
                        }
                    });
                };

                radios.forEach(radio => {
                    radio.addEventListener('change', (e) => handleFilter(e.target.value));
                });
            };

            // Run initialization
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initFilter);
            } else {
                initFilter();
            }
        })();
    


        // Splash Screen Logic
        window.addEventListener('load', () => {
            const splash = document.getElementById('splash-screen');
            setTimeout(() => {
                splash.classList.add('splash-hidden');
            }, 2000); // 2 seconds delay
        });

        // Gallery Filter Logic
        const tabs = document.querySelectorAll('#gallery-tabs button');
        const items = document.querySelectorAll('.gallery-item');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active styling from all
                tabs.forEach(t => {
                    t.classList.remove('bg-white', 'text-stone-900', 'shadow-sm');
                    t.classList.add('text-stone-500');
                });
                // Add active styling to clicked
                tab.classList.remove('text-stone-500');
                tab.classList.add('bg-white', 'text-stone-900', 'shadow-sm');

                const filter = tab.getAttribute('data-filter');

                items.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.classList.remove('hidden');
                        item.classList.add('animate-fade-in');
                    } else {
                        item.classList.add('hidden');
                        item.classList.remove('animate-fade-in');
                    }
                });
            });
        });

        // Dashboard Toggle Logic
        function toggleDashboard() {
            const dashboard = document.getElementById('dashboard-view');
            const mainContent = document.getElementById('main-content');
            
            if (dashboard.classList.contains('dashboard-closed')) {
                // Open Dashboard
                dashboard.classList.remove('dashboard-closed');
                dashboard.classList.add('dashboard-open');
                // Optional: Freeze main body scrolling
                document.body.style.overflow = 'hidden';
            } else {
                // Close Dashboard
                dashboard.classList.remove('dashboard-open');
                dashboard.classList.add('dashboard-closed');
                // Restore scrolling
                document.body.style.overflow = '';
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
      

<div className="fixed flex flex-col bg-stone-50 z-[100] top-0 right-0 bottom-0 left-0 items-center justify-center" id="splash-screen">
<div className="relative w-20 h-20 mb-6">
<div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-20"></div>
<div className="relative w-full h-full bg-white rounded-2xl shadow-xl flex items-center justify-center border border-green-50">

<div className="grid grid-cols-2 gap-0.5 transform rotate-45">
<iconify-icon className="text-green-600 -rotate-45 animate-pulse" icon="solar:heart-bold" width="16"></iconify-icon>
<iconify-icon className="text-green-600 rotate-45 animate-pulse" icon="solar:heart-bold" style={{animationDelay: '0.1s'}} width="16"></iconify-icon>
<iconify-icon className="text-green-600 -rotate-135 animate-pulse" icon="solar:heart-bold" style={{animationDelay: '0.2s'}} width="16"></iconify-icon>
<iconify-icon className="text-green-600 rotate-135 animate-pulse" icon="solar:heart-bold" style={{animationDelay: '0.3s'}} width="16"></iconify-icon>
</div>
</div>
</div>
<h1 className="font-['DM_Serif_Display'] text-3xl text-stone-900 tracking-tight opacity-0 animate-fade-in" style={{animationDelay: '0.5s'}}>Prakren Cafe</h1>
<p className="text-stone-500 text-sm mt-2 tracking-widest uppercase opacity-0 animate-fade-in" style={{animationDelay: '0.8s'}}>Brewing Happiness</p>
</div>

<a aria-label="WhatsApp Chat" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-110 transition-transform flex items-center justify-center group" href="#">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="28"></iconify-icon>
<span className="absolute right-full mr-3 bg-white text-stone-800 text-xs font-semibold py-1.5 px-3 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-stone-100">Chat with us</span>
</a>

<nav className="fixed top-0 w-full z-40 glass transition-all duration-300">
<div className="flex max-w-7xl mx-auto py-4 px-6 items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-100 flex items-center justify-center text-green-700 shadow-sm group-hover:shadow-md transition-all">
<div className="grid grid-cols-2 gap-0.5 transform rotate-45">
<iconify-icon className="text-green-600 -rotate-45" icon="solar:heart-bold" width="8"></iconify-icon>
<iconify-icon className="text-green-600 rotate-45" icon="solar:heart-bold" width="8"></iconify-icon>
<iconify-icon className="text-green-600 -rotate-135" icon="solar:heart-bold" width="8"></iconify-icon>
<iconify-icon className="text-green-600 rotate-135" icon="solar:heart-bold" width="8"></iconify-icon>
</div>
</div>
<div className="flex flex-col">
<span className="font-['DM_Serif_Display'] text-xl text-stone-900 tracking-tight leading-none">Prakren</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-medium pt-0.5">Cafe &amp; Nature</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="hover:text-green-700 transition-colors text-sm font-medium text-stone-600" href="#home">Home</a>
<a className="text-sm font-medium text-stone-600 hover:text-green-700 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-stone-600 hover:text-green-700 transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-stone-600 hover:text-green-700 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-stone-600 hover:text-green-700 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-stone-600 hover:text-green-700 transition-colors flex items-center gap-2" href="#order-online">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    Live Order
                </a>
<div className="h-4 w-px bg-stone-200"></div>

<button className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors group relative" onclick="toggleDashboard()" title="Staff Dashboard">
<iconify-icon icon="solar:widget-2-linear" width="20"></iconify-icon>
<span className="absolute top-full right-0 mt-2 bg-stone-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Dashboard</span>
</button>
<a className="px-5 py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold hover:bg-green-800 transition-all shadow-sm flex items-center gap-2 tracking-wide" href="#reserve">
<iconify-icon icon="solar:calendar-add-linear" width="16"></iconify-icon>
<span>Reserve Table</span>
</a>
</div>

<button className="lg:hidden text-stone-800 p-2 hover:bg-stone-100 rounded-lg transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="" id="main-content">

<section className="lg:pt-48 lg:pb-32 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-50/60 via-[#FAFAF9] to-stone-100 pt-32 pb-20 relative" id="home">

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-50/50 to-transparent rounded-l-[100px] pointer-events-none hidden lg:block"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 text-green-800 text-xs font-semibold mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
<iconify-icon icon="solar:leaf-linear" width="14"></iconify-icon>
<span className="">Brewed with Nature's Love</span>
</div>
<h1 className="lg:text-7xl leading-[1.05] text-5xl text-stone-900 tracking-tight font-['DM_Serif_Display'] mb-6">If Your Heart is Tired,<br/> <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-green-700 to-emerald-500 pr-2">Sit with Us</span></h1>
<p className="leading-relaxed text-lg font-light text-stone-600 max-w-md mb-10">Prakren Cafe is your cozy escape. Organic blends, fresh ingredients, and a warm atmosphere designed to make you feel right at home.♥️</p>
<div className="flex flex-wrap gap-4">
<a className="px-8 py-3.5 bg-green-700 text-white rounded-xl font-semibold text-sm hover:bg-green-800 transition-all shadow-lg hover:shadow-green-700/20 hover:-translate-y-0.5 flex items-center gap-2 group" href="#order-online">
                            Order Now
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:cart-large-linear" width="18"></iconify-icon>
</a>
<a className="px-8 py-3.5 bg-white border border-stone-200 text-stone-800 rounded-xl font-semibold text-sm hover:bg-stone-50 transition-all hover:border-stone-300 flex items-center gap-2" href="#reserve">
                            Book Event
                            <iconify-icon icon="solar:confetti-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="relative h-[400px] lg:h-[550px] w-full animate-fade-in" style={{animationDelay: '0.2s'}}>

<div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl animate-float border-[6px] border-white ring-1 ring-stone-100">
<img alt="Cafe Ambience" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
</div>

<div className="absolute top-[40%] right-[20%] pointer-events-none">
<div className="w-6 h-12 bg-white blur-2xl rounded-full absolute animate-steam opacity-30"></div>
<div className="w-4 h-10 bg-white blur-xl rounded-full absolute -left-4 -top-2 animate-steam delay-100 opacity-30"></div>
</div>

<div className="absolute bottom-12 left-[-20px] lg:left-[-40px] bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 animate-float delay-100 max-w-[260px] border border-stone-50">
<div className="bg-amber-50 p-3 rounded-full text-amber-600">
<iconify-icon className="" icon="solar:cup-star-linear" width="24"></iconify-icon>
</div>
<div className="">
<p className="text-[10px] text-stone-400 uppercase tracking-wider font-bold">Bestseller</p>
<p className="text-sm font-semibold text-stone-800">Organic Roast Coffee</p>
</div>
</div>
<div className="absolute top-12 right-[-10px] lg:right-[-20px] bg-white/95 backdrop-blur-sm p-3.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] animate-float delay-200 border border-stone-50">
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img alt="" className="w-7 h-7 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-7 h-7 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-7 h-7 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1 text-yellow-500 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-stone-800 font-bold">4.9</span>
</div>
<span className="text-[10px] text-stone-400 font-medium">Happy Customers</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Coffee" className="rounded-2xl h-64 w-full object-cover shadow-sm hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="space-y-4 pt-8">
<img alt="Toast" className="rounded-2xl h-52 w-full object-cover shadow-sm hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="bg-green-50 p-6 rounded-2xl flex flex-col justify-center h-40 border border-green-100/50">
<iconify-icon className="text-green-600 mb-2" icon="solar:leaf-bold" width="32"></iconify-icon>
<p className="text-green-900 font-semibold">100% Eco Friendly</p>
<p className="text-green-800/60 text-xs mt-1">Sustainable &amp; Conscious</p>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<span className="text-green-600 font-semibold text-xs tracking-widest uppercase mb-3 block">Our Story</span>
<h2 className="font-['DM_Serif_Display'] text-4xl text-stone-900 mb-6 tracking-tight">Rooted in Love,<br/>Served with Passion.</h2>
<p className="text-stone-600 leading-relaxed mb-6 font-light">
                            Prakren Cafe was born from a simple desire: to create a sanctuary where the aroma of freshly ground coffee meets the serenity of nature. The four-leaf clover isn't just our logo; it represents the luck of finding a quiet moment in a busy world.
                        </p>
<div className="grid gap-4 mt-8">
<div className="flex items-start gap-4 p-4 rounded-xl bg-stone-50 hover:bg-white border border-transparent hover:border-stone-100 hover:shadow-sm transition-all">
<div className="bg-green-100 text-green-700 p-2 rounded-lg">
<iconify-icon icon="solar:chef-hat-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-stone-900 text-sm">Expertly Crafted</h4>
<p className="text-xs text-stone-500 mt-1">Our chefs bring global flavors with local love.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-stone-50 hover:bg-white border border-transparent hover:border-stone-100 hover:shadow-sm transition-all">
<div className="bg-green-100 text-green-700 p-2 rounded-lg">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-stone-900 text-sm">Community Focused</h4>
<p className="text-xs text-stone-500 mt-1">A space designed for connection and conversation.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="scroll-mt-20 bg-white pt-24 pb-24" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-green-600 font-semibold text-xs tracking-widest uppercase mb-2 block">Moments</span>
<h2 className="font-['DM_Serif_Display'] text-4xl text-stone-900 tracking-tight">Life at Prakren</h2>
</div>
<div className="flex space-x-1 bg-stone-100 p-1 rounded-lg" id="gallery-tabs">
<button className="px-4 py-2 rounded-md text-xs font-medium bg-white text-stone-900 shadow-sm transition-all" data-filter="all">All</button>
<button className="px-4 py-2 rounded-md text-xs font-medium text-stone-500 hover:text-stone-900 hover:bg-white/50 transition-all" data-filter="ambiance">Ambiance</button>
<button className="px-4 py-2 rounded-md text-xs font-medium text-stone-500 hover:text-stone-900 hover:bg-white/50 transition-all" data-filter="food">Food &amp; Brews</button>
<button className="px-4 py-2 rounded-md text-xs font-medium text-stone-500 hover:text-stone-900 hover:bg-white/50 transition-all" data-filter="events">Events</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] gap-4" id="gallery-grid">

<div className="gallery-item ambiance col-span-1 md:col-span-2 row-span-2 relative group rounded-2xl overflow-hidden cursor-pointer">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<p className="text-white font-medium text-lg">Cozy Interiors</p>
<p className="text-stone-200 text-xs">Designed for comfort</p>
</div>
</div>
</div>

<div className="gallery-item food relative group rounded-2xl overflow-hidden cursor-pointer">
<img alt="Coffee" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:cup-hot-linear" width="32"></iconify-icon>
</div>
</div>

<div className="gallery-item food relative group rounded-2xl overflow-hidden cursor-pointer">
<img alt="Pizza" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:pizza-linear" width="32"></iconify-icon>
</div>
</div>

<div className="gallery-item events col-span-1 md:col-span-2 relative group rounded-2xl overflow-hidden cursor-pointer">
<img alt="Event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<p className="text-white font-medium text-lg">Celebrations</p>
<p className="text-stone-200 text-xs">Birthday setup</p>
</div>
</div>
</div>

<div className="gallery-item ambiance relative group rounded-2xl overflow-hidden cursor-pointer">
<img alt="Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<div className="gallery-item food relative group rounded-2xl overflow-hidden cursor-pointer">
<img alt="Cocktail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>


<section className="scroll-mt-20 bg-white border-stone-200 border-t pt-24 pb-24" id="order-online">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div className="">
<div className="flex items-center gap-2 mb-2">
<div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse-green"></div>
<span className="text-green-700 text-xs font-bold tracking-widest uppercase">Kitchen Online</span>
</div>
<h2 className="font-['DM_Serif_Display'] text-4xl text-stone-900 tracking-tight">Order &amp; Pick Up</h2>
<p className="text-stone-500 mt-2 max-w-lg">Skip the queue. Select your favorites, pay online, and grab your meal fresh from the counter.</p>
</div>
<div className="flex items-center gap-2 px-4 py-2 bg-stone-50 rounded-lg border border-stone-100 text-sm text-stone-600">
<iconify-icon className="text-stone-400" icon="solar:clock-circle-linear"></iconify-icon>
<span className="">Est. Prep Time: <span className="font-semibold text-stone-900">15 mins</span></span>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="lg:col-span-2 space-y-8">

<div className="flex w-full overflow-x-auto gap-3 pb-4 no-scrollbar mask-gradient items-center">

<label className="cursor-pointer shrink-0 group">
<input checked="" className="peer sr-only" name="category" type="radio" value="all"/>
<span className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-200 bg-white text-sm font-medium text-stone-600 transition-all hover:border-green-600 hover:text-green-700 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 peer-checked:shadow-md select-none group-active:scale-95">
<svg className="opacity-70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
            All Items
        </span>
</label>
<label className="cursor-pointer shrink-0 group">
<input className="peer sr-only" name="category" type="radio" value="coffee"/>
<span className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-200 bg-white text-sm font-medium text-stone-600 transition-all hover:border-green-600 hover:text-green-700 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 peer-checked:shadow-md select-none group-active:scale-95">
            ☕ Coffee &amp; Tea
        </span>
</label>
<label className="cursor-pointer shrink-0 group">
<input className="peer sr-only" name="category" type="radio" value="snacks"/>
<span className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-200 bg-white text-sm font-medium text-stone-600 transition-all hover:border-green-600 hover:text-green-700 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 peer-checked:shadow-md select-none group-active:scale-95">
            🥪 Snacks
        </span>
</label>
<label className="cursor-pointer shrink-0 group">
<input className="peer sr-only" name="category" type="radio" value="italian"/>
<span className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-200 bg-white text-sm font-medium text-stone-600 transition-all hover:border-green-600 hover:text-green-700 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 peer-checked:shadow-md select-none group-active:scale-95">
            🍕 Italian
        </span>
</label>
<label className="cursor-pointer shrink-0 group">
<input className="peer sr-only" name="category" type="radio" value="sweets"/>
<span className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-200 bg-white text-sm font-medium text-stone-600 transition-all hover:border-green-600 hover:text-green-700 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 peer-checked:shadow-md select-none group-active:scale-95">
            🍩 Sweets
        </span>
</label>
<label className="cursor-pointer shrink-0 group">
<input className="peer sr-only" name="category" type="radio" value="drinks"/>
<span className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-200 bg-white text-sm font-medium text-stone-600 transition-all hover:border-green-600 hover:text-green-700 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 peer-checked:shadow-md select-none group-active:scale-95">
            🥤 Drinks
        </span>
</label>
</div>

<div className="grid sm:grid-cols-2 gap-4">

<div className="flex gap-4 p-4 rounded-xl border border-stone-100 bg-white hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5 transition-all group">
<div className="w-24 h-24 rounded-lg bg-stone-100 overflow-hidden flex-shrink-0">
<img alt="Cappuccino" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-between flex-grow">
<div className="">
<div className="flex justify-between items-start">
<h4 className="font-semibold text-stone-800 text-sm">Cappuccino</h4>
<span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-md border border-green-100">Veg</span>
</div>
<p className="text-xs text-stone-500 mt-1 line-clamp-2">Rich espresso with steamed milk foam.</p>
</div>
<div className="flex justify-between items-end mt-2">
<span className="font-bold text-stone-900">₹60</span>
<button className="flex hover:bg-green-600 transition-colors active:scale-90 text-white bg-stone-900 w-8 h-8 rounded-full shadow-sm items-center justify-center">+</button>
</div>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl border border-stone-100 bg-white hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5 transition-all group">
<div className="w-24 h-24 rounded-lg bg-stone-100 overflow-hidden flex-shrink-0">
<img alt="Pizza" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1573821663912-6df460f9c684?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-between flex-grow">
<div className="">
<div className="flex justify-between items-start">
<h4 className="font-semibold text-stone-800 text-sm">Veg Farm Pizza</h4>
<span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-md border border-green-100">Veg</span>
</div>
<p className="text-xs text-stone-500 mt-1 line-clamp-2">Fresh veggies, mozzarella, tomato sauce.</p>
</div>
<div className="flex justify-between items-end mt-2">
<span className="font-bold text-stone-900">₹140</span>
<button className="flex hover:bg-green-600 transition-colors active:scale-90 text-white bg-stone-900 w-8 h-8 rounded-full shadow-sm items-center justify-center">+</button>
</div>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl border border-stone-100 bg-white hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5 transition-all group">
<div className="w-24 h-24 rounded-lg bg-stone-100 overflow-hidden flex-shrink-0">
<img alt="Sandwich" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-between flex-grow">
<div className="">
<div className="flex justify-between items-start">
<h4 className="font-semibold text-stone-800 text-sm">Club Sandwich</h4>
<span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-md border border-green-100">Veg</span>
</div>
<p className="text-xs text-stone-500 mt-1 line-clamp-2">Grilled with cheese and fresh cucumber.</p>
</div>
<div className="flex justify-between items-end mt-2">
<span className="font-bold text-stone-900">₹70</span>
<button className="flex hover:bg-green-600 transition-colors active:scale-90 text-white bg-stone-900 w-8 h-8 rounded-full shadow-sm items-center justify-center">+</button>
</div>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl border border-stone-100 bg-white hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5 transition-all group">
<div className="w-24 h-24 rounded-lg bg-stone-100 overflow-hidden flex-shrink-0">
<img alt="Coffee" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2083661a-fabe-4a37-a4a9-4a20b4d95ee4_320w.webp"/>
</div>
<div className="flex flex-col justify-between flex-grow">
<div className="">
<div className="flex justify-between items-start">
<h4 className="font-semibold text-stone-800 text-sm">Cold Coffee</h4>
<span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-md border border-green-100">Veg</span>
</div>
<p className="text-xs text-stone-500 mt-1 line-clamp-2">Classic blend with ice cream scoop.</p>
</div>
<div className="flex justify-between items-end mt-2">
<span className="font-bold text-stone-900">₹80</span>
<button className="flex hover:bg-green-600 transition-colors active:scale-90 text-white bg-stone-900 w-8 h-8 rounded-full shadow-sm items-center justify-center">+</button>
</div>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl border border-stone-100 bg-white hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5 transition-all group">
<div className="w-24 h-24 rounded-lg bg-stone-100 overflow-hidden flex-shrink-0">
<img alt="Pasta" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1626844131082-256783844137?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-between flex-grow">
<div className="">
<div className="flex justify-between items-start">
<h4 className="font-semibold text-stone-800 text-sm">Red Sauce Pasta</h4>
<span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-md border border-green-100">Veg</span>
</div>
<p className="text-xs text-stone-500 mt-1 line-clamp-2">Tangy tomato sauce with fresh basil.</p>
</div>
<div className="flex justify-between items-end mt-2">
<span className="font-bold text-stone-900">₹180</span>
<button className="flex hover:bg-green-600 transition-colors active:scale-90 text-white bg-stone-900 w-8 h-8 rounded-full shadow-sm items-center justify-center">+</button>
</div>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl border border-stone-100 bg-white hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5 transition-all group">
<div className="w-24 h-24 rounded-lg bg-stone-100 overflow-hidden flex-shrink-0">
<img alt="Brownie" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-between flex-grow">
<div className="">
<div className="flex justify-between items-start">
<h4 className="font-semibold text-stone-800 text-sm">Choco Brownie</h4>
<span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-md border border-green-100">Veg</span>
</div>
<p className="text-xs text-stone-500 mt-1 line-clamp-2">Gooey chocolate fudge with walnuts.</p>
</div>
<div className="flex justify-between items-end mt-2">
<span className="font-bold text-stone-900">₹120</span>
<button className="flex hover:bg-green-600 transition-colors active:scale-90 text-white bg-stone-900 w-8 h-8 rounded-full shadow-sm items-center justify-center">+</button>
</div>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl border border-stone-100 bg-white hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5 transition-all group">
<div className="w-24 h-24 rounded-lg bg-stone-100 overflow-hidden flex-shrink-0">
<img alt="Mojito" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-between flex-grow">
<div className="">
<div className="flex justify-between items-start">
<h4 className="font-semibold text-stone-800 text-sm">Virgin Mojito</h4>
<span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-md border border-green-100">Veg</span>
</div>
<p className="text-xs text-stone-500 mt-1 line-clamp-2">Refreshing lime and mint cooler.</p>
</div>
<div className="flex justify-between items-end mt-2">
<span className="font-bold text-stone-900">₹110</span>
<button className="flex hover:bg-green-600 transition-colors active:scale-90 text-white bg-stone-900 w-8 h-8 rounded-full shadow-sm items-center justify-center">+</button>
</div>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl border border-stone-100 bg-white hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5 transition-all group">
<div className="w-24 h-24 rounded-lg bg-stone-100 overflow-hidden flex-shrink-0">
<img alt="Salad" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-between flex-grow">
<div className="">
<div className="flex justify-between items-start">
<h4 className="font-semibold text-stone-800 text-sm">Green Salad</h4>
<span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-md border border-green-100">Veg</span>
</div>
<p className="text-xs text-stone-500 mt-1 line-clamp-2">Healthy mix of lettuce, olives &amp; feta.</p>
</div>
<div className="flex justify-between items-end mt-2">
<span className="font-bold text-stone-900">₹150</span>
<button className="flex hover:bg-green-600 transition-colors active:scale-90 text-white bg-stone-900 w-8 h-8 rounded-full shadow-sm items-center justify-center">+</button>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="sticky top-24 bg-[#1C1917] text-stone-50 rounded-2xl p-6 shadow-2xl shadow-stone-900/20">
<div className="flex justify-between items-center mb-6 border-b border-stone-800 pb-4">
<h3 className="font-serif text-xl">Your Tray</h3>
<div className="px-2 py-1 bg-green-900/30 rounded text-[10px] font-mono text-green-400 border border-green-800/50">
                                    #ORD-1024
                                </div>
</div>

<div className="space-y-4 mb-6">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 bg-stone-800 rounded-lg p-1">
<button className="w-5 h-5 flex items-center justify-center text-stone-400 hover:text-white transition-colors"><iconify-icon icon="solar:minus-linear"></iconify-icon></button>
<span className="text-xs font-mono w-3 text-center">1</span>
<button className="w-5 h-5 flex items-center justify-center text-stone-400 hover:text-white transition-colors"><iconify-icon icon="solar:add-linear"></iconify-icon></button>
</div>
<div className="">
<p className="text-sm font-medium text-stone-200">Cappuccino</p>
<p className="text-[10px] text-stone-500">Small</p>
</div>
</div>
<span className="text-sm font-medium">₹60</span>
</div>

<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 bg-stone-800 rounded-lg p-1">
<button className="w-5 h-5 flex items-center justify-center text-stone-400 hover:text-white transition-colors"><iconify-icon icon="solar:minus-linear"></iconify-icon></button>
<span className="text-xs font-mono w-3 text-center">2</span>
<button className="w-5 h-5 flex items-center justify-center text-stone-400 hover:text-white transition-colors"><iconify-icon icon="solar:add-linear"></iconify-icon></button>
</div>
<div className="">
<p className="text-sm font-medium text-stone-200">Veg Burger</p>
<p className="text-[10px] text-stone-500">Extra Cheese</p>
</div>
</div>
<span className="text-sm font-medium">₹160</span>
</div>
</div>

<div className="space-y-2 border-t border-stone-800 pt-4 mb-6">
<div className="flex justify-between text-xs text-stone-400">
<span className="">Subtotal</span>
<span>₹220</span>
</div>
<div className="flex justify-between text-xs text-stone-400">
<span className="">Taxes (5%)</span>
<span>₹11</span>
</div>
<div className="flex justify-between text-lg font-bold text-white pt-2">
<span className="">Total</span>
<span className="">₹231</span>
</div>
</div>

<button className="w-full py-3.5 bg-green-600 hover:bg-green-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-green-900/50 flex items-center justify-center gap-2 group">
                                Pay &amp; Place Order
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:card-transfer-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-stone-200 bg-[#1C1917] pt-24 pb-24 relative" id="reserve">

<div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
<iconify-icon className="absolute -top-20 -left-20 text-white rotate-12" icon="solar:leaf-linear" width="400"></iconify-icon>
</div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10">
<div className="">
<h2 className="font-['DM_Serif_Display'] text-4xl text-white mb-4 tracking-tight">Celebrate at Prakren</h2>
<p className="text-stone-400 mb-8 max-w-md">From intimate coffee dates to lively birthday parties, our space adapts to your joy. Reserve your spot today.</p>
<div className="grid gap-6 mb-10">
<div className="flex gap-4 items-start">
<div className="bg-stone-800 p-3 rounded-full text-green-400 border border-stone-700">
<iconify-icon className="" icon="solar:balloon-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-medium">Birthday Bashes</h4>
<p className="text-sm text-stone-500">Dedicated space for decorations.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="bg-stone-800 p-3 rounded-full text-green-400 border border-stone-700">
<iconify-icon className="" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-medium">Group Gatherings</h4>
<p className="text-sm text-stone-500">Perfect for meetups and kitty parties.</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 text-stone-800 shadow-2xl">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5 gap-x-5 gap-y-5">
<div className="space-y-1">
<label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-sm transition-all placeholder:text-stone-400" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Phone</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-sm transition-all placeholder:text-stone-400" placeholder="+91" type="tel"/>
</div>
</div><div className="grid grid-cols-2 gap-5 gap-x-5 gap-y-5">
<div className="space-y-1">
<label className="uppercase text-xs font-bold text-stone-500 tracking-wide">Message or Purpose</label>
<input className="focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all placeholder:text-stone-400 text-sm bg-stone-50 w-full border-stone-200 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="Type here" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Booking Type</label>
<input className="focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all placeholder:text-stone-400 text-sm bg-stone-50 w-full border-stone-200 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="Birthday part,Casual meeting etc." type="tel"/>
</div>
</div>
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Date</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-sm text-stone-600 transition-all" type="date"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Guests</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-sm transition-all placeholder:text-stone-400" min="1" placeholder="2" type="number"/>
</div>
</div>
<button className="w-full py-3.5 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition-all shadow-lg hover:shadow-green-700/20 mt-2 flex justify-center items-center gap-2" type="button">
                            Confirm Reservation
                            <iconify-icon className="" icon="solar:check-circle-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</section><section className="scroll-mt-20 bg-stone-50 border-stone-200 border-t pt-24 pb-24" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-3 gap-12">

<div className="lg:col-span-1">
<span className="text-green-600 font-semibold text-xs tracking-widest uppercase mb-3 block">Testimonials</span>
<h2 className="font-['DM_Serif_Display'] text-4xl text-stone-900 mb-6 tracking-tight">Loved by Locals</h2>
<p className="text-stone-600 leading-relaxed mb-8 text-sm">
                            Don't just take our word for it. Here is what our community has to say about their experience at Prakren.
                        </p>
<div className="flex items-center gap-4 mb-8">
<div className="text-4xl font-bold text-stone-900">4.9</div>
<div className="flex flex-col">
<div className="flex text-yellow-500 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-stone-500">Based on 2,000+ reviews</span>
</div>
</div>
<button className="px-6 py-3 bg-white border border-stone-200 text-stone-900 rounded-xl text-sm font-semibold hover:border-green-600 hover:text-green-700 transition-all shadow-sm flex items-center gap-2 group w-full justify-center lg:justify-start">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
                            Write a Review
                        </button>
</div>

<div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-stone-100">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover ring-2 ring-stone-50" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;auto=format&amp;fit=crop"/>
<div>
<h5 className="text-sm font-semibold text-stone-900">Sarah Jenkins</h5>
<p className="text-[10px] text-stone-400">Local Guide • 2 days ago</p>
</div>
</div>
<iconify-icon className="text-stone-300" icon="brandico:google" width="16"></iconify-icon>
</div>
<div className="flex text-yellow-400 text-xs mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-stone-600 leading-relaxed">
                                "Absolutely the best cold coffee in the city. The ambience is so peaceful, perfect for reading a book or getting some work done. Highly recommended!"
                            </p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-stone-100">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">RK</div>
<div>
<h5 className="text-sm font-semibold text-stone-900">Rahul Kumar</h5>
<p className="text-[10px] text-stone-400">Verified Diner • 1 week ago</p>
</div>
</div>
</div>
<div className="flex text-yellow-400 text-xs mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm text-stone-600 leading-relaxed">
                                "Loved the Veg Farm Pizza. Crust was thin and crispy. Service was a bit slow due to rush hour but the staff was very polite."
                            </p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-stone-100">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover ring-2 ring-stone-50" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;auto=format&amp;fit=crop"/>
<div>
<h5 className="text-sm font-semibold text-stone-900">David Chen</h5>
<p className="text-[10px] text-stone-400">Tourist • 3 weeks ago</p>
</div>
</div>
</div>
<div className="flex text-yellow-400 text-xs mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-stone-600 leading-relaxed">
                                "A hidden gem! The decorations for my sister's birthday were spot on. Thank you Prakren team for making it special."
                            </p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-stone-100 bg-gradient-to-br from-white to-green-50/30">
<div className="flex items-center justify-center h-full flex-col text-center">
<div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 mb-3">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h5 className="text-sm font-semibold text-stone-900 mb-1">Join the Family</h5>
<p className="text-xs text-stone-500 mb-3">Share your own story with us.</p>
<a className="text-xs font-semibold text-green-700 hover:underline" href="#">Rate Us Now</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 border-stone-200 border-t pt-20 pb-20" id="contact">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
<div className="">
<span className="text-green-600 font-semibold text-xs tracking-widest uppercase mb-2 block">Get in Touch</span>
<h2 className="font-['DM_Serif_Display'] text-4xl text-stone-900 mb-8 tracking-tight">Visit Us</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="bg-white p-3 rounded-full text-green-700 shadow-sm border border-stone-100">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div className="">
<h5 className="font-semibold text-stone-900 mb-1">Location</h5>
<p className="text-sm text-stone-600 leading-relaxed">Shop 12, Green Avenue, Near City Park,<br/>New Delhi, India.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-white p-3 rounded-full text-green-700 shadow-sm border border-stone-100">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div className="">
<h5 className="font-semibold text-stone-900 mb-1">Contact</h5>
<p className="text-sm text-stone-600">+91 98765 43210</p>
<p className="text-sm text-stone-600">hello@prakrencafe.com</p>
</div>
</div>
</div>
</div>

<div className="h-80 md:h-full bg-stone-200 rounded-2xl overflow-hidden relative shadow-inner">
<iframe allowfullscreen="" className="filter grayscale opacity-80 hover:grayscale-0 transition-all duration-500" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.064560700144!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-stone-200 rounded-3xl border-t-8 pt-16 pb-8">
<div className="bg-neutral-950 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-green-700" icon="solar:leaf-bold" width="24"></iconify-icon>
<span className="text-xl text-neutral-50 font-['DM_Serif_Display'] bg-neutral-950">Prakren</span>
</a>
<p className="leading-relaxed text-xs text-neutral-50">
                            A place where nature meets flavor. Come for the coffee, stay for the comfort.
                        </p>
</div>
<div className="">
<h6 className="text-sm font-semibold text-neutral-50 mb-4">Company</h6>
<ul className="space-y-2 text-xs text-stone-500">
<li className=""><a className="hover:text-green-700 transition-colors" href="#about">About Us</a></li>
<li className=""><a className="hover:text-green-700 transition-colors" href="#menu">Menu</a></li>
<li className=""><a className="hover:text-green-700 transition-colors" href="#gallery">Gallery</a></li>
</ul>
</div>
<div className="">
<h6 className="text-sm font-semibold text-neutral-50 mb-4">Legal</h6>
<ul className="space-y-2 text-xs text-stone-500">
<li className=""><a className="hover:text-green-700 transition-colors -translate-x-1" href="#">Terms</a></li>
<li className=""><a className="hover:text-green-700 transition-colors" href="#">Privacy</a></li>
</ul>
</div>
<div className="">
<h6 className="text-sm font-semibold text-neutral-50 mb-4">Follow Us</h6>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-green-100 hover:text-green-700 transition-colors" href="#">
<iconify-icon icon="brandico:instagram" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-green-100 hover:text-green-700 transition-colors" href="#">
<iconify-icon className="" height="32" icon="brandico:facebook" style={{color: 'rgb(21, 128, 61)'}} width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
<p className="">© 2023 Prakren Cafe. All rights reserved.</p>
<p className="">Designed with <iconify-icon className="inline text-red-400 align-middle" icon="solar:heart-bold" width="12"></iconify-icon> for Nature.</p>
</div>
</div>
</footer>
</div>

<div className="fixed inset-0 z-[100] dashboard-closed bg-stone-100 flex overflow-hidden" id="dashboard-view">

<aside className="w-64 bg-[#1C1917] text-stone-400 flex flex-col h-full shrink-0 border-r border-stone-800">
<div className="h-16 flex items-center px-6 border-b border-stone-800">
<span className="text-white font-['DM_Serif_Display'] text-xl tracking-tight">Prakren Admin</span>
</div>
<div className="p-4 space-y-1 flex-1 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-green-900/20 text-green-400 text-sm font-medium" href="#">
<iconify-icon icon="solar:widget-2-linear" width="18"></iconify-icon>
                    Overview
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-stone-800 hover:text-stone-200 transition-colors text-sm font-medium" href="#">
<iconify-icon icon="solar:bill-list-linear" width="18"></iconify-icon>
                    Orders
                    <span className="ml-auto bg-green-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">5</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-stone-800 hover:text-stone-200 transition-colors text-sm font-medium" href="#">
<iconify-icon icon="solar:chef-hat-linear" width="18"></iconify-icon>
                    Menu Items
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-stone-800 hover:text-stone-200 transition-colors text-sm font-medium" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                    Customers
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-stone-800 hover:text-stone-200 transition-colors text-sm font-medium" href="#">
<iconify-icon icon="solar:chart-square-linear" width="18"></iconify-icon>
                    Analytics
                </a>
</div>
<div className="p-4 border-t border-stone-800">
<button className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-red-900/20 hover:text-red-400 transition-colors text-sm font-medium w-full text-left" onclick="toggleDashboard()">
<iconify-icon icon="solar:logout-linear" width="18"></iconify-icon>
                    Exit Dashboard
                </button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden">

<header className="h-16 bg-white border-b border-stone-200 flex items-center justify-between px-8">
<h2 className="text-stone-800 font-semibold">Dashboard Overview</h2>
<div className="flex items-center gap-4">
<div className="relative">
<iconify-icon className="text-stone-500" icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
</div>
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-600">AD</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs text-stone-500 uppercase font-semibold tracking-wider">Total Revenue</p>
<h3 className="text-2xl font-bold text-stone-900 mt-1">₹12,450</h3>
</div>
<div className="p-2 bg-green-50 text-green-600 rounded-lg">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
</div>
<span className="text-green-600 text-xs font-medium flex items-center gap-1">
<iconify-icon icon="solar:arrow-up-linear"></iconify-icon> 12% from yesterday
                        </span>
</div>
<div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs text-stone-500 uppercase font-semibold tracking-wider">Active Orders</p>
<h3 className="text-2xl font-bold text-stone-900 mt-1">8</h3>
</div>
<div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
<iconify-icon icon="solar:clipboard-list-linear" width="24"></iconify-icon>
</div>
</div>
<span className="text-stone-500 text-xs font-medium">3 Pending preparation</span>
</div>
<div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs text-stone-500 uppercase font-semibold tracking-wider">Satisfaction</p>
<h3 className="text-2xl font-bold text-stone-900 mt-1">4.9/5</h3>
</div>
<div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
<iconify-icon icon="solar:star-linear" width="24"></iconify-icon>
</div>
</div>
<span className="text-stone-500 text-xs font-medium">Based on 124 reviews today</span>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-stone-200 flex justify-between items-center">
<h3 className="font-semibold text-stone-800">Recent Orders</h3>
<button className="text-xs text-green-700 font-medium hover:underline">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-stone-500 uppercase bg-stone-50 border-b border-stone-100">
<tr>
<th className="px-6 py-3 font-medium">Order ID</th>
<th className="px-6 py-3 font-medium">Items</th>
<th className="px-6 py-3 font-medium">Amount</th>
<th className="px-6 py-3 font-medium">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100">
<tr className="hover:bg-stone-50/50">
<td className="px-6 py-4 font-mono text-stone-500">#ORD-1023</td>
<td className="px-6 py-4 text-stone-800">Cappuccino x2, Brownie</td>
<td className="px-6 py-4 font-medium">₹200</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span> Preparing
                                            </span>
</td>
</tr>
<tr className="hover:bg-stone-50/50">
<td className="px-6 py-4 font-mono text-stone-500">#ORD-1022</td>
<td className="px-6 py-4 text-stone-800">Veg Burger, Pizza</td>
<td className="px-6 py-4 font-medium">₹220</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Ready
                                            </span>
</td>
</tr>
<tr className="hover:bg-stone-50/50">
<td className="px-6 py-4 font-mono text-stone-500">#ORD-1021</td>
<td className="px-6 py-4 text-stone-800">Masala Tea x4</td>
<td className="px-6 py-4 font-medium">₹100</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-600">
                                                Delivered
                                            </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="lg:col-span-1 bg-white rounded-xl border border-stone-200 shadow-sm p-6 flex flex-col">
<h3 className="font-semibold text-stone-800 mb-6">Weekly Sales</h3>
<div className="flex-1 flex items-end justify-between gap-2 h-40">

<div className="w-full bg-stone-100 rounded-t-lg relative group h-[40%] hover:bg-green-100 transition-colors">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-stone-800 text-white px-2 py-1 rounded transition-opacity">Mon</div>
</div>
<div className="w-full bg-stone-100 rounded-t-lg relative group h-[60%] hover:bg-green-100 transition-colors">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-stone-800 text-white px-2 py-1 rounded transition-opacity">Tue</div>
</div>
<div className="w-full bg-stone-100 rounded-t-lg relative group h-[55%] hover:bg-green-100 transition-colors"></div>
<div className="w-full bg-stone-100 rounded-t-lg relative group h-[80%] hover:bg-green-100 transition-colors"></div>
<div className="w-full bg-green-500 rounded-t-lg relative group h-[95%] shadow-lg shadow-green-200">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-stone-800 text-white px-2 py-1 rounded transition-opacity">Fri</div>
</div>
<div className="w-full bg-stone-100 rounded-t-lg relative group h-[85%] hover:bg-green-100 transition-colors"></div>
<div className="w-full bg-stone-100 rounded-t-lg relative group h-[70%] hover:bg-green-100 transition-colors"></div>
</div>
<div className="flex justify-between mt-4 text-xs text-stone-400 font-medium uppercase tracking-wide">
<span>Mon</span>
<span>Sun</span>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
