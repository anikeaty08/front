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



        // Simple SPA Routing Logic
        function navigateTo(route) {
            // Hide all pages
            document.querySelectorAll('.page-view').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show target page
            const targetPage = document.getElementById(`page-${route}`);
            if(targetPage) {
                targetPage.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Add to cart animation
        function addToCart(btn) {
            const originalIcon = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="solar:check-circle-bold" width="18" class="text-white"></iconify-icon>';
            btn.classList.add('bg-[#27AE60]', 'border-[#27AE60]');
            btn.classList.remove('bg-gray-100', 'text-[#111111]');
            
            setTimeout(() => {
                btn.innerHTML = originalIcon;
                btn.classList.remove('bg-[#27AE60]', 'border-[#27AE60]');
                btn.classList.add('bg-gray-100', 'text-[#111111]');
            }, 1000);
        }

        // Place order animation
        function placeOrder(btn) {
            btn.innerHTML = '<iconify-icon icon="line-md:loading-twotone-loop" width="20"></iconify-icon> Processing...';
            setTimeout(() => {
                btn.classList.remove('bg-[#111111]', 'hover:bg-gray-800');
                btn.classList.add('bg-[#27AE60]', 'pointer-events-none');
                btn.innerHTML = '<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon> Order Placed Successfully!';
                
                // Reset after 3 seconds and go home
                setTimeout(() => {
                    navigateTo('home');
                    btn.classList.add('bg-[#111111]', 'hover:bg-gray-800');
                    btn.classList.remove('bg-[#27AE60]', 'pointer-events-none');
                    btn.innerHTML = 'Place Order';
                }, 3000);
            }, 1500);
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
      

<nav className="sticky top-0 z-50 h-[80px] bg-white border-b border-[#E6E6E6] flex items-center justify-center px-4 md:px-6 transition-all duration-300 backdrop-blur-md bg-white/90">
<div className="w-full max-w-[1200px] flex justify-between items-center">

<div className="text-2xl font-semibold tracking-tighter cursor-pointer text-[#111111]" onclick="navigateTo('home')">
                CRAVE
            </div>

<div className="hidden md:flex items-center gap-8 text-sm text-[#6B6B6B]">
<button className="hover:text-[#111111] transition-colors" onclick="navigateTo('home')">Home</button>
<button className="hover:text-[#111111] transition-colors" onclick="navigateTo('restaurant-list')">Restaurants</button>
<button className="hover:text-[#111111] transition-colors">Offers</button>
<button className="hover:text-[#111111] transition-colors">About</button>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:block text-sm text-[#111111] font-medium px-4 py-2 hover:bg-gray-50 rounded-full transition-colors">Log in</button>
<button className="hidden md:block text-sm bg-[#111111] text-white px-5 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors">Sign up</button>

<button className="relative p-2 text-[#111111] hover:bg-gray-100 rounded-full transition-colors group" onclick="navigateTo('cart')">
<iconify-icon className="group-hover:scale-105 transition-transform" icon="solar:cart-large-2-linear" width="24"></iconify-icon>
<span className="absolute top-0 right-0 bg-[#FF5A1F] text-white text-[10px] font-medium h-4 w-4 rounded-full flex items-center justify-center border border-white">2</span>
</button>
</div>
</div>
</nav>

<div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-[#E6E6E6] z-50 px-6 py-3 flex justify-between items-center">
<button className="flex flex-col items-center gap-1 text-[#111111]" onclick="navigateTo('home')">
<iconify-icon icon="solar:home-2-linear" width="24"></iconify-icon>
<span className="text-[10px]">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-[#6B6B6B]" onclick="navigateTo('restaurant-list')">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
<span className="text-[10px]">Search</span>
</button>
<button className="flex flex-col items-center gap-1 text-[#6B6B6B]">
<iconify-icon icon="solar:clipboard-list-linear" width="24"></iconify-icon>
<span className="text-[10px]">Orders</span>
</button>
<button className="flex flex-col items-center gap-1 text-[#6B6B6B]">
<iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
<span className="text-[10px]">Profile</span>
</button>
</div>



<main className="page-view active bg-[#FFFFFF] min-h-screen pb-24" id="page-home">

<section className="max-w-[1200px] mx-auto pt-16 md:pt-24 px-4 md:px-6 mb-24">
<div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="flex flex-col gap-6">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#111111] leading-[1.1]">
                        Delicious Food Delivered To Your Door
                    </h1>
<p className="text-lg text-[#6B6B6B] max-w-md">
                        Order from the best restaurants near you in minutes.
                    </p>

<div className="mt-4 flex flex-col sm:flex-row gap-3 bg-white border border-[#E6E6E6] p-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
<div className="flex-1 flex items-center px-4 gap-3 border-b sm:border-b-0 sm:border-r border-[#E6E6E6] pb-2 sm:pb-0">
<iconify-icon className="text-[#6B6B6B]" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="w-full outline-none text-sm text-[#111111] placeholder:text-[#6B6B6B] bg-transparent" placeholder="Search restaurants..." type="text"/>
</div>
<div className="flex-1 flex items-center px-4 gap-3">
<iconify-icon className="text-[#6B6B6B]" icon="solar:map-point-linear" width="20"></iconify-icon>
<input className="w-full outline-none text-sm text-[#111111] placeholder:text-[#6B6B6B] bg-transparent" placeholder="Enter delivery address" type="text"/>
</div>
<button className="bg-[#FF5A1F] hover:bg-[#E44D17] text-white px-8 py-3.5 rounded-full text-sm font-medium transition-colors w-full sm:w-auto flex-shrink-0" onclick="navigateTo('restaurant-list')">
                            Find Food
                        </button>
</div>
</div>

<div className="hidden md:grid grid-cols-2 gap-4 h-[500px]">
<img alt="Pizza" className="w-full h-full object-cover rounded-2xl" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=500"/>
<div className="grid grid-rows-2 gap-4 h-full">
<img alt="Burger" className="w-full h-full object-cover rounded-2xl" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=240"/>
<img alt="Sushi" className="w-full h-full object-cover rounded-2xl" src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=240"/>
</div>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-4 md:px-6 mb-24">
<h3 className="text-2xl font-medium tracking-tight mb-8">Categories</h3>
<div className="flex overflow-x-auto hide-scrollbar gap-6 pb-4 -mx-4 px-4 md:mx-0 md:px-0">

<button className="flex flex-col items-center gap-3 min-w-[80px] group" onclick="navigateTo('restaurant-list')">
<div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden group-hover:ring-2 ring-[#FF5A1F] ring-offset-2 transition-all">
<img alt="Pizza" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
</div>
<span className="text-sm font-medium text-[#111111]">Pizza</span>
</button>
<button className="flex flex-col items-center gap-3 min-w-[80px] group" onclick="navigateTo('restaurant-list')">
<div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden group-hover:ring-2 ring-[#FF5A1F] ring-offset-2 transition-all">
<img alt="Burgers" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
</div>
<span className="text-sm font-medium text-[#111111]">Burgers</span>
</button>
<button className="flex flex-col items-center gap-3 min-w-[80px] group" onclick="navigateTo('restaurant-list')">
<div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden group-hover:ring-2 ring-[#FF5A1F] ring-offset-2 transition-all">
<img alt="Chinese" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span className="text-sm font-medium text-[#111111]">Chinese</span>
</button>
<button className="flex flex-col items-center gap-3 min-w-[80px] group" onclick="navigateTo('restaurant-list')">
<div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden group-hover:ring-2 ring-[#FF5A1F] ring-offset-2 transition-all">
<img alt="Indian" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
</div>
<span className="text-sm font-medium text-[#111111]">Indian</span>
</button>
<button className="flex flex-col items-center gap-3 min-w-[80px] group" onclick="navigateTo('restaurant-list')">
<div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden group-hover:ring-2 ring-[#FF5A1F] ring-offset-2 transition-all">
<img alt="Desserts" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
</div>
<span className="text-sm font-medium text-[#111111]">Desserts</span>
</button>
<button className="flex flex-col items-center gap-3 min-w-[80px] group" onclick="navigateTo('restaurant-list')">
<div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden group-hover:ring-2 ring-[#FF5A1F] ring-offset-2 transition-all">
<img alt="Healthy" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
</div>
<span className="text-sm font-medium text-[#111111]">Healthy</span>
</button>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-4 md:px-6">
<h3 className="text-2xl font-medium tracking-tight mb-8">Popular Near You</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group cursor-pointer" onclick="navigateTo('restaurant-menu')">
<div className="relative w-full h-56 rounded-2xl overflow-hidden mb-4">
<img alt="Restaurant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&amp;fit=crop&amp;q=80&amp;w=600&amp;h=400"/>
<div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
<span className="text-sm font-medium">4.8</span>
<iconify-icon className="text-[#FF5A1F]" icon="solar:star-bold" width="14"></iconify-icon>
</div>
</div>
<h4 className="text-xl font-medium tracking-tight text-[#111111] mb-1">The Urban Burger</h4>
<p className="text-sm text-[#6B6B6B] mb-2 flex items-center gap-2">
                        American • Burgers 
                        <span className="w-1 h-1 rounded-full bg-[#E6E6E6]"></span>
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> 20-30 min
                    </p>
</div>

<div className="group cursor-pointer" onclick="navigateTo('restaurant-menu')">
<div className="relative w-full h-56 rounded-2xl overflow-hidden mb-4">
<img alt="Restaurant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&amp;fit=crop&amp;q=80&amp;w=600&amp;h=400"/>
<div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
<span className="text-sm font-medium">4.9</span>
<iconify-icon className="text-[#FF5A1F]" icon="solar:star-bold" width="14"></iconify-icon>
</div>
</div>
<h4 className="text-xl font-medium tracking-tight text-[#111111] mb-1">Napoli Pizza Kitchen</h4>
<p className="text-sm text-[#6B6B6B] mb-2 flex items-center gap-2">
                        Italian • Pizza 
                        <span className="w-1 h-1 rounded-full bg-[#E6E6E6]"></span>
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> 35-45 min
                    </p>
</div>

<div className="group cursor-pointer" onclick="navigateTo('restaurant-menu')">
<div className="relative w-full h-56 rounded-2xl overflow-hidden mb-4">
<img alt="Restaurant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&amp;fit=crop&amp;q=80&amp;w=600&amp;h=400"/>
<div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
<span className="text-sm font-medium">4.7</span>
<iconify-icon className="text-[#FF5A1F]" icon="solar:star-bold" width="14"></iconify-icon>
</div>
</div>
<h4 className="text-xl font-medium tracking-tight text-[#111111] mb-1">Sushi Master</h4>
<p className="text-sm text-[#6B6B6B] mb-2 flex items-center gap-2">
                        Japanese • Sushi 
                        <span className="w-1 h-1 rounded-full bg-[#E6E6E6]"></span>
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> 40-50 min
                    </p>
</div>
</div>
</section>
</main>



<main className="page-view bg-[#FAFAFA] min-h-screen pb-24" id="page-restaurant-list">

<div className="bg-white border-b border-[#E6E6E6] sticky top-[80px] z-40">
<div className="max-w-[1200px] mx-auto px-4 md:px-6 py-4 flex gap-4 items-center">
<div className="flex-1 flex items-center gap-3 bg-gray-50 border border-[#E6E6E6] rounded-xl px-4 py-2.5">
<iconify-icon className="text-[#6B6B6B]" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="w-full bg-transparent outline-none text-sm" placeholder="Search..." type="text"/>
</div>
<button className="md:hidden flex items-center justify-center w-10 h-10 border border-[#E6E6E6] rounded-xl bg-white">
<iconify-icon icon="solar:tuning-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 flex gap-8">

<aside className="hidden md:block w-64 flex-shrink-0">
<h4 className="text-lg font-medium tracking-tight mb-6">Filters</h4>
<div className="mb-8">
<h5 className="text-sm font-medium mb-3 text-[#111111]">Sort By</h5>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="custom-radio" name="sort" type="radio"/>
<span className="text-sm text-[#6B6B6B] group-hover:text-[#111111]">Recommended</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-radio" name="sort" type="radio"/>
<span className="text-sm text-[#6B6B6B] group-hover:text-[#111111]">Top Rated</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-radio" name="sort" type="radio"/>
<span className="text-sm text-[#6B6B6B] group-hover:text-[#111111]">Delivery Time</span>
</label>
</div>
</div>
<div className="mb-8">
<h5 className="text-sm font-medium mb-3 text-[#111111]">Price</h5>
<div className="flex gap-2">
<button className="flex-1 py-1.5 border border-[#E6E6E6] rounded-md text-sm hover:border-[#FF5A1F] transition-colors">$</button>
<button className="flex-1 py-1.5 border border-[#111111] bg-[#111111] text-white rounded-md text-sm transition-colors">$$</button>
<button className="flex-1 py-1.5 border border-[#E6E6E6] rounded-md text-sm hover:border-[#FF5A1F] transition-colors">$$$</button>
</div>
</div>
<div>
<h5 className="text-sm font-medium mb-3 text-[#111111]">Dietary</h5>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-sm text-[#6B6B6B] group-hover:text-[#111111]">Vegetarian</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-sm text-[#6B6B6B] group-hover:text-[#111111]">Vegan</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-sm text-[#6B6B6B] group-hover:text-[#111111]">Gluten-free</span>
</label>
</div>
</div>
</aside>

<div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-3 border border-[#E6E6E6] hover:shadow-md transition-shadow cursor-pointer group" onclick="navigateTo('restaurant-menu')">
<div className="relative w-full h-40 rounded-xl overflow-hidden mb-3">
<img alt="Food" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=300"/>
<button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-[#6B6B6B] hover:text-[#FF5A1F] transition-colors">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start mb-1">
<h4 className="text-base font-medium tracking-tight text-[#111111]">The Urban Burger</h4>
<div className="flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded-md">
<span className="text-xs font-medium">4.8</span>
<iconify-icon className="text-[#FF5A1F]" icon="solar:star-bold" width="10"></iconify-icon>
</div>
</div>
<p className="text-xs text-[#6B6B6B] mb-3">American • Burgers • Fast Food</p>
<div className="flex items-center justify-between border-t border-[#E6E6E6] pt-3">
<div className="flex items-center gap-1 text-xs text-[#6B6B6B]">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
<span>20-30 min</span>
</div>
<div className="flex items-center gap-1 text-xs text-[#6B6B6B]">
<iconify-icon icon="solar:routing-2-linear"></iconify-icon>
<span>$2.99 Delivery</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-3 border border-[#E6E6E6] hover:shadow-md transition-shadow cursor-pointer group" onclick="navigateTo('restaurant-menu')">
<div className="relative w-full h-40 rounded-xl overflow-hidden mb-3">
<img alt="Food" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=300"/>
</div>
<div className="flex justify-between items-start mb-1">
<h4 className="text-base font-medium tracking-tight text-[#111111]">Napoli Pizza</h4>
<div className="flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded-md">
<span className="text-xs font-medium">4.9</span>
<iconify-icon className="text-[#FF5A1F]" icon="solar:star-bold" width="10"></iconify-icon>
</div>
</div>
<p className="text-xs text-[#6B6B6B] mb-3">Italian • Pizza • Pasta</p>
<div className="flex items-center justify-between border-t border-[#E6E6E6] pt-3">
<div className="flex items-center gap-1 text-xs text-[#6B6B6B]">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
<span>35-45 min</span>
</div>
<div className="flex items-center gap-1 text-xs text-[#6B6B6B]">
<iconify-icon icon="solar:routing-2-linear"></iconify-icon>
<span>Free Delivery</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-3 border border-[#E6E6E6] hover:shadow-md transition-shadow cursor-pointer group" onclick="navigateTo('restaurant-menu')">
<div className="relative w-full h-40 rounded-xl overflow-hidden mb-3">
<img alt="Food" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex justify-between items-start mb-1">
<h4 className="text-base font-medium tracking-tight text-[#111111]">Dragon Wok</h4>
<div className="flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded-md">
<span className="text-xs font-medium">4.5</span>
<iconify-icon className="text-[#FF5A1F]" icon="solar:star-bold" width="10"></iconify-icon>
</div>
</div>
<p className="text-xs text-[#6B6B6B] mb-3">Chinese • Asian • Noodles</p>
<div className="flex items-center justify-between border-t border-[#E6E6E6] pt-3">
<div className="flex items-center gap-1 text-xs text-[#6B6B6B]">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
<span>25-40 min</span>
</div>
<div className="flex items-center gap-1 text-xs text-[#6B6B6B]">
<iconify-icon icon="solar:routing-2-linear"></iconify-icon>
<span>$1.99 Delivery</span>
</div>
</div>
</div>

</div>
</div>
</main>



<main className="page-view bg-[#FFFFFF] min-h-screen pb-24" id="page-restaurant-menu">

<div className="w-full h-64 md:h-80 relative">
<img alt="Cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&amp;fit=crop&amp;q=80&amp;w=1600&amp;h=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full">
<div className="max-w-[1200px] mx-auto px-4 md:px-6 pb-8">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-2">The Urban Burger</h1>
<div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
<span className="flex items-center gap-1"><iconify-icon className="text-[#FF5A1F]" icon="solar:star-bold"></iconify-icon> 4.8 (500+ ratings)</span>
<span>•</span>
<span>American, Burgers</span>
<span>•</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 20-30 min</span>
</div>
</div>
</div>
</div>

<div className="bg-white border-b border-[#E6E6E6] sticky top-[80px] z-40">
<div className="max-w-[1200px] mx-auto px-4 md:px-6 flex overflow-x-auto hide-scrollbar gap-8">
<button className="py-4 text-sm font-medium border-b-2 border-[#111111] text-[#111111] whitespace-nowrap">Burgers</button>
<button className="py-4 text-sm font-medium border-b-2 border-transparent text-[#6B6B6B] hover:text-[#111111] whitespace-nowrap">Sides</button>
<button className="py-4 text-sm font-medium border-b-2 border-transparent text-[#6B6B6B] hover:text-[#111111] whitespace-nowrap">Drinks</button>
<button className="py-4 text-sm font-medium border-b-2 border-transparent text-[#6B6B6B] hover:text-[#111111] whitespace-nowrap">Desserts</button>
</div>
</div>

<div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8">
<h3 className="text-2xl font-medium tracking-tight mb-6">Burgers</h3>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="flex gap-4 p-4 border border-[#E6E6E6] rounded-2xl hover:border-gray-300 transition-colors group bg-white">
<div className="w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
<img alt="Classic Burger" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
<div className="flex flex-col flex-1 justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<h4 className="text-base font-medium text-[#111111]">Classic Cheeseburger</h4>
<span className="text-base font-medium text-[#111111]">$12.99</span>
</div>
<p className="text-sm text-[#6B6B6B] line-clamp-2">Double beef patty, cheddar cheese, lettuce, tomato, house sauce on a brioche bun.</p>
</div>
<div className="flex justify-end mt-2">
<button className="bg-gray-100 hover:bg-[#FF5A1F] text-[#111111] hover:text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 active:scale-90" onclick="addToCart(this)">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex gap-4 p-4 border border-[#E6E6E6] rounded-2xl hover:border-gray-300 transition-colors group bg-white">
<div className="w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
<img alt="Bacon Burger" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex flex-col flex-1 justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<h4 className="text-base font-medium text-[#111111]">Bacon BBQ Burger</h4>
<span className="text-base font-medium text-[#111111]">$14.99</span>
</div>
<p className="text-sm text-[#6B6B6B] line-clamp-2">Beef patty, crispy bacon, onion rings, BBQ sauce, cheddar cheese.</p>
</div>
<div className="flex justify-end mt-2">
<button className="bg-gray-100 hover:bg-[#FF5A1F] text-[#111111] hover:text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 active:scale-90" onclick="addToCart(this)">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</main>



<main className="page-view bg-[#F7F7F7] min-h-screen pb-24" id="page-cart">
<div className="max-w-[1000px] mx-auto px-4 md:px-6 py-8 md:py-12">
<h2 className="text-3xl font-medium tracking-tight mb-8">Your Cart</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="md:col-span-2 space-y-4">

<div className="bg-white p-4 rounded-2xl border border-[#E6E6E6] flex gap-4 items-center">
<img alt="Food" className="w-20 h-20 rounded-xl object-cover bg-gray-100" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="flex-1">
<h4 className="text-base font-medium text-[#111111]">Classic Cheeseburger</h4>
<p className="text-sm text-[#6B6B6B] mb-2">$12.99</p>
<div className="flex items-center gap-3">
<div className="flex items-center border border-[#E6E6E6] rounded-full px-2 py-1 bg-gray-50">
<button className="w-6 h-6 flex items-center justify-center text-[#6B6B6B] hover:text-[#111111]"><iconify-icon icon="solar:minus-linear"></iconify-icon></button>
<span className="text-sm font-medium w-6 text-center text-[#111111]">1</span>
<button className="w-6 h-6 flex items-center justify-center text-[#6B6B6B] hover:text-[#111111]"><iconify-icon icon="solar:add-linear"></iconify-icon></button>
</div>
<button className="text-xs text-[#EB5757] hover:underline font-medium">Remove</button>
</div>
</div>
<div className="text-base font-medium text-[#111111] self-start">$12.99</div>
</div>

<div className="bg-white p-4 rounded-2xl border border-[#E6E6E6] flex gap-4 items-center">
<img alt="Fries" className="w-20 h-20 rounded-xl object-cover bg-gray-100" src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="flex-1">
<h4 className="text-base font-medium text-[#111111]">Large Fries</h4>
<p className="text-sm text-[#6B6B6B] mb-2">$4.99</p>
<div className="flex items-center gap-3">
<div className="flex items-center border border-[#E6E6E6] rounded-full px-2 py-1 bg-gray-50">
<button className="w-6 h-6 flex items-center justify-center text-[#6B6B6B] hover:text-[#111111]"><iconify-icon icon="solar:minus-linear"></iconify-icon></button>
<span className="text-sm font-medium w-6 text-center text-[#111111]">1</span>
<button className="w-6 h-6 flex items-center justify-center text-[#6B6B6B] hover:text-[#111111]"><iconify-icon icon="solar:add-linear"></iconify-icon></button>
</div>
<button className="text-xs text-[#EB5757] hover:underline font-medium">Remove</button>
</div>
</div>
<div className="text-base font-medium text-[#111111] self-start">$4.99</div>
</div>
</div>

<div className="md:col-span-1">
<div className="bg-white p-6 rounded-2xl border border-[#E6E6E6] sticky top-[104px]">
<h3 className="text-lg font-medium tracking-tight mb-4">Order Summary</h3>
<div className="space-y-3 mb-6 border-b border-[#E6E6E6] pb-6">
<div className="flex justify-between text-sm text-[#6B6B6B]">
<span>Subtotal</span>
<span className="text-[#111111]">$17.98</span>
</div>
<div className="flex justify-between text-sm text-[#6B6B6B]">
<span>Delivery Fee</span>
<span className="text-[#111111]">$2.99</span>
</div>
<div className="flex justify-between text-sm text-[#6B6B6B]">
<span>Taxes</span>
<span className="text-[#111111]">$1.80</span>
</div>
</div>
<div className="flex justify-between items-center mb-6">
<span className="text-base font-medium text-[#111111]">Total</span>
<span className="text-xl font-semibold tracking-tight text-[#111111]">$22.77</span>
</div>
<div className="flex gap-2 mb-6">
<input className="flex-1 border border-[#E6E6E6] rounded-lg px-3 py-2 text-sm outline-none focus:border-[#FF5A1F]" placeholder="Promo code" type="text"/>
<button className="bg-[#111111] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">Apply</button>
</div>
<button className="w-full bg-[#FF5A1F] hover:bg-[#E44D17] text-white py-3.5 rounded-xl text-sm font-medium transition-colors" onclick="navigateTo('checkout')">
                            Proceed to Checkout
                        </button>
</div>
</div>
</div>
</div>
</main>



<main className="page-view bg-[#FFFFFF] min-h-screen pb-24" id="page-checkout">
<div className="max-w-[1000px] mx-auto px-4 md:px-6 py-8 md:py-12">
<h2 className="text-3xl font-medium tracking-tight mb-8">Checkout</h2>
<div className="grid md:grid-cols-3 gap-12">

<div className="md:col-span-2 space-y-10">

<section>
<h3 className="text-xl font-medium tracking-tight mb-4 flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-[#111111] text-white text-xs flex items-center justify-center">1</span> 
                            Delivery Address
                        </h3>
<div className="grid sm:grid-cols-2 gap-4 ml-8">
<label className="border border-[#FF5A1F] bg-orange-50/50 p-4 rounded-xl cursor-pointer relative">
<input checked="" className="absolute top-4 right-4 custom-radio" name="address" type="radio"/>
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-[#FF5A1F]" icon="solar:home-2-linear"></iconify-icon>
<span className="text-sm font-medium text-[#111111]">Home</span>
</div>
<p className="text-sm text-[#6B6B6B] pr-6">123 Design Avenue, Apt 4B<br/>New York, NY 10001</p>
</label>
<label className="border border-[#E6E6E6] hover:border-gray-300 p-4 rounded-xl cursor-pointer relative transition-colors">
<input className="absolute top-4 right-4 custom-radio" name="address" type="radio"/>
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-[#6B6B6B]" icon="solar:buildings-linear"></iconify-icon>
<span className="text-sm font-medium text-[#111111]">Work</span>
</div>
<p className="text-sm text-[#6B6B6B] pr-6">456 Startup Blvd, Floor 12<br/>New York, NY 10002</p>
</label>
<button className="border border-dashed border-[#E6E6E6] hover:border-[#111111] p-4 rounded-xl flex flex-col items-center justify-center gap-2 text-[#6B6B6B] hover:text-[#111111] transition-colors min-h-[120px]">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium">Add New Address</span>
</button>
</div>
</section>

<section>
<h3 className="text-xl font-medium tracking-tight mb-4 flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-gray-200 text-[#111111] text-xs flex items-center justify-center">2</span> 
                            Delivery Options
                        </h3>
<div className="space-y-3 ml-8">
<label className="flex items-center justify-between p-4 border border-[#E6E6E6] rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-3">
<input checked="" className="custom-radio" name="delivery" type="radio"/>
<div>
<p className="text-sm font-medium text-[#111111]">Standard Delivery</p>
<p className="text-xs text-[#6B6B6B]">20-30 min</p>
</div>
</div>
<span className="text-sm font-medium text-[#111111]">$2.99</span>
</label>
<label className="flex items-center justify-between p-4 border border-[#E6E6E6] rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-3">
<input className="custom-radio" name="delivery" type="radio"/>
<div>
<p className="text-sm font-medium text-[#111111]">Express Delivery</p>
<p className="text-xs text-[#6B6B6B]">10-15 min</p>
</div>
</div>
<span className="text-sm font-medium text-[#111111]">$5.99</span>
</label>
</div>
</section>

<section>
<h3 className="text-xl font-medium tracking-tight mb-4 flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-gray-200 text-[#111111] text-xs flex items-center justify-center">3</span> 
                            Payment Method
                        </h3>
<div className="space-y-3 ml-8">
<label className="flex items-center gap-3 p-4 border border-[#E6E6E6] rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
<input checked="" className="custom-radio" name="payment" type="radio"/>
<iconify-icon className="text-[#6B6B6B]" icon="solar:card-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-[#111111]">Credit / Debit Card</span>
</label>
<label className="flex items-center gap-3 p-4 border border-[#E6E6E6] rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
<input className="custom-radio" name="payment" type="radio"/>
<iconify-icon className="text-[#6B6B6B]" icon="solar:wallet-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-[#111111]">Digital Wallet</span>
</label>
<label className="flex items-center gap-3 p-4 border border-[#E6E6E6] rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
<input className="custom-radio" name="payment" type="radio"/>
<iconify-icon className="text-[#6B6B6B]" icon="solar:wad-of-money-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-[#111111]">Cash on Delivery</span>
</label>
</div>
</section>
</div>

<div className="md:col-span-1">
<div className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#E6E6E6] sticky top-[104px]">
<h3 className="text-lg font-medium tracking-tight mb-4">Final Summary</h3>
<div className="space-y-3 mb-6">
<div className="flex justify-between items-start text-sm">
<span className="text-[#6B6B6B]">1x Classic Cheeseburger</span>
<span className="text-[#111111] font-medium">$12.99</span>
</div>
<div className="flex justify-between items-start text-sm">
<span className="text-[#6B6B6B]">1x Large Fries</span>
<span className="text-[#111111] font-medium">$4.99</span>
</div>
</div>
<div className="space-y-3 border-t border-[#E6E6E6] pt-4 mb-6">
<div className="flex justify-between text-sm text-[#6B6B6B]">
<span>Subtotal</span>
<span className="text-[#111111]">$17.98</span>
</div>
<div className="flex justify-between text-sm text-[#6B6B6B]">
<span>Delivery</span>
<span className="text-[#111111]">$2.99</span>
</div>
<div className="flex justify-between text-sm text-[#6B6B6B]">
<span>Taxes</span>
<span className="text-[#111111]">$1.80</span>
</div>
</div>
<div className="flex justify-between items-center border-t border-[#E6E6E6] pt-4 mb-6">
<span className="text-base font-medium text-[#111111]">Total to Pay</span>
<span className="text-2xl font-semibold tracking-tight text-[#111111]">$22.77</span>
</div>
<button className="w-full bg-[#111111] hover:bg-gray-800 text-white py-4 rounded-xl text-sm font-medium transition-colors flex justify-center items-center gap-2" onclick="placeOrder(this)">
                            Place Order
                        </button>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
