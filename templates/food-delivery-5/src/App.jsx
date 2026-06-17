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
primary: {
50: '#fff7ed',
100: '#ffedd5',
500: '#f97316',
600: '#ea580c',
900: '#7c2d12',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'slide-up': 'slideUp 0.5s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Data
        const menuItems = [
            { id: 1, name: "Classic Cheeseburger", category: "Burgers", price: 12.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600", desc: "Angus beef patty, cheddar, lettuce, tomato, house sauce." },
            { id: 2, name: "Pepperoni Pizza", category: "Pizza", price: 15.50, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=600", desc: "Crispy crust, tomato sauce, mozzarella, double pepperoni." },
            { id: 3, name: "Dragon Roll Sushi", category: "Asian", price: 18.00, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=600", desc: "Eel, cucumber, avocado, topped with tobiko and unagi sauce." },
            { id: 4, name: "Chicken Caesar Salad", category: "Healthy", price: 11.00, image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=600", desc: "Romaine lettuce, croutons, parmesan, grilled chicken breast." },
            { id: 5, name: "Spicy Ramen", category: "Asian", price: 14.50, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600", desc: "Rich pork broth, soft egg, nori, spicy miso paste." },
            { id: 6, name: "Margherita Pizza", category: "Pizza", price: 13.00, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600", desc: "Tomato sauce, fresh mozzarella, basil, olive oil." },
            { id: 7, name: "Avocado Toast", category: "Healthy", price: 9.50, image: "https://images.unsplash.com/photo-1588137372308-15f75323ca8d?auto=format&fit=crop&q=80&w=600", desc: "Sourdough bread, smashed avocado, poached egg, chili flakes." },
            { id: 8, name: "Double Bacon Burger", category: "Burgers", price: 16.00, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=600", desc: "Two patties, crispy bacon, caramelized onions, BBQ sauce." },
             { id: 9, name: "Pesto Pasta", category: "Pasta", price: 13.50, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=600", desc: "Fresh basil pesto, pine nuts, parmesan, fusilli pasta." },
        ];

        const partners = [
            { name: "Burger Kingz", rating: 4.8, time: "20-30 min", cuisine: "American", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=600" },
            { name: "Sushi Master", rating: 4.9, time: "30-45 min", cuisine: "Japanese", image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=600" },
            { name: "Pizza Palace", rating: 4.5, time: "25-40 min", cuisine: "Italian", image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=600" },
            { name: "Green Bowl", rating: 4.7, time: "15-25 min", cuisine: "Healthy", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600" },
            { name: "Taco Fiesta", rating: 4.6, time: "20-35 min", cuisine: "Mexican", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=600" },
            { name: "Wok N' Roll", rating: 4.4, time: "30-50 min", cuisine: "Chinese", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600" }
        ];

        let cart = [];

        // Initialization
        document.addEventListener('DOMContentLoaded', () => {
            renderMenu();
            renderPartners();
            showPage('home'); // Default page
        });

        // Navigation
        function showPage(pageId) {
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block');
            });
            const activePage = document.getElementById(pageId);
            if(activePage){
                activePage.classList.remove('hidden');
                activePage.classList.add('block');
            }
            window.scrollTo(0,0);
            
            // Update active nav link state
            document.querySelectorAll('.nav-link').forEach(btn => {
                if(btn.getAttribute('onclick').includes(pageId)) {
                    btn.classList.add('text-orange-600');
                    btn.classList.remove('text-neutral-600');
                } else {
                    btn.classList.remove('text-orange-600');
                    btn.classList.add('text-neutral-600');
                }
            });

            if(pageId === 'cart') renderCart();
        }

        // Render Functions
        function renderMenu() {
            const grid = document.getElementById('menu-grid');
            grid.innerHTML = menuItems.map(item => `
                <div class="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col group">
                    <div class="h-48 overflow-hidden relative">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <button onclick="addToCart(${item.id})" class="absolute bottom-3 right-3 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-neutral-900 hover:text-orange-600 hover:scale-110 transition-all">
                            <span class="iconify" data-icon="lucide:plus" data-width="20"></span>
                        </button>
                    </div>
                    <div class="p-5 flex flex-col flex-grow">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="font-semibold text-neutral-900 text-lg tracking-tight">${item.name}</h3>
                            <span class="font-medium text-neutral-900">$${item.price.toFixed(2)}</span>
                        </div>
                        <p class="text-neutral-500 text-sm mb-4 line-clamp-2">${item.desc}</p>
                        <div class="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 font-medium">
                            <span class="bg-neutral-100 px-2 py-1 rounded text-neutral-600">${item.category}</span>
                            <div class="flex items-center gap-1">
                                <span class="iconify text-yellow-400" data-icon="lucide:star" data-width="12" data-fill="currentColor"></span>
                                4.9
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function renderPartners() {
            const grid = document.getElementById('partners-grid');
            grid.innerHTML = partners.map(partner => `
                <div class="bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all group cursor-pointer" onclick="showPage('menu')">
                    <div class="h-48 rounded-t-2xl overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="${partner.name}" class="w-full h-full object-cover">
                        <div class="absolute bottom-3 left-3 z-20 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold text-neutral-900 flex items-center gap-1">
                            <span class="iconify" data-icon="lucide:clock" data-width="12"></span>
                            ${partner.time}
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-semibold text-lg text-neutral-900 tracking-tight">${partner.name}</h3>
                                <p class="text-sm text-neutral-500">${partner.cuisine}</p>
                            </div>
                            <div class="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-lg text-xs font-bold">
                                <span>${partner.rating}</span>
                                <span class="iconify" data-icon="lucide:star" data-width="10" data-fill="currentColor"></span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Cart Logic
        function addToCart(id) {
            const item = menuItems.find(i => i.id === id);
            const existing = cart.find(i => i.id === id);
            if(existing) {
                existing.quantity++;
            } else {
                cart.push({...item, quantity: 1});
            }
            updateCartBadge();
            // Optional: Simple toast
            const btn = event.currentTarget;
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<span class="iconify text-green-600" data-icon="lucide:check" data-width="20"></span>';
            setTimeout(() => btn.innerHTML = originalHTML, 1000);
        }

        function updateCartBadge() {
            const badge = document.getElementById('cart-badge');
            const count = cart.reduce((acc, item) => acc + item.quantity, 0);
            badge.innerText = count;
            if(count > 0) {
                badge.classList.remove('opacity-0');
            } else {
                badge.classList.add('opacity-0');
            }
        }

        function removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);
            renderCart();
            updateCartBadge();
        }

        function changeQuantity(id, delta) {
            const item = cart.find(i => i.id === id);
            if(item) {
                item.quantity += delta;
                if(item.quantity <= 0) removeFromCart(id);
                else renderCart();
            }
            updateCartBadge();
        }

        function renderCart() {
            const container = document.getElementById('cart-items-container');
            
            if(cart.length === 0) {
                container.innerHTML = `
                    <div class="text-center py-12 text-neutral-500">
                        <div class="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="iconify text-neutral-400" data-icon="lucide:shopping-bag" data-width="32"></span>
                        </div>
                        <p class="text-lg font-medium text-neutral-900">Your cart is empty</p>
                        <p class="text-sm mb-6">Looks like you haven't added anything yet.</p>
                        <button onclick="showPage('menu')" class="px-6 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">Browse Menu</button>
                    </div>
                `;
                document.getElementById('cart-subtotal').innerText = "$0.00";
                document.getElementById('cart-tax').innerText = "$0.00";
                document.getElementById('cart-total').innerText = "$0.00";
                return;
            }

            container.innerHTML = cart.map(item => `
                <div class="flex gap-4 items-center">
                    <div class="w-20 h-20 flex-shrink-0 bg-neutral-100 rounded-lg overflow-hidden">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover">
                    </div>
                    <div class="flex-grow">
                        <h4 class="font-semibold text-neutral-900">${item.name}</h4>
                        <p class="text-sm text-neutral-500">$${item.price.toFixed(2)}</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <button onclick="changeQuantity(${item.id}, -1)" class="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-orange-500 hover:text-orange-600 transition-colors">
                            <span class="iconify" data-icon="lucide:minus" data-width="14"></span>
                        </button>
                        <span class="w-4 text-center text-sm font-medium">${item.quantity}</span>
                        <button onclick="changeQuantity(${item.id}, 1)" class="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-orange-500 hover:text-orange-600 transition-colors">
                            <span class="iconify" data-icon="lucide:plus" data-width="14"></span>
                        </button>
                    </div>
                    <div class="w-16 text-right font-semibold text-neutral-900">
                        $${(item.price * item.quantity).toFixed(2)}
                    </div>
                </div>
            `).join('');

            const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            const tax = subtotal * 0.08;
            const total = subtotal + tax + 2.99; // + delivery

            document.getElementById('cart-subtotal').innerText = "$" + subtotal.toFixed(2);
            document.getElementById('cart-tax').innerText = "$" + tax.toFixed(2);
            document.getElementById('cart-total').innerText = "$" + total.toFixed(2);
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="showPage('home')">
<div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:utensils" data-strokeWidth="2" data-width="20"></span>
</div>
<span className="font-semibold text-lg tracking-tight">QuickBite</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<button className="nav-link text-sm font-medium text-neutral-600 hover:text-orange-600 transition-colors" onclick="showPage('home')">Home</button>
<button className="nav-link text-sm font-medium text-neutral-600 hover:text-orange-600 transition-colors" onclick="showPage('menu')">Menu</button>
<button className="nav-link text-sm font-medium text-neutral-600 hover:text-orange-600 transition-colors" onclick="showPage('partners')">Partners</button>
<button className="nav-link text-sm font-medium text-neutral-600 hover:text-orange-600 transition-colors" onclick="showPage('about')">About</button>
<button className="nav-link text-sm font-medium text-neutral-600 hover:text-orange-600 transition-colors" onclick="showPage('contact')">Contact</button>
</div>

<div className="flex items-center gap-4">
<button className="relative p-2 text-neutral-600 hover:bg-neutral-100 rounded-full transition-colors group" onclick="showPage('cart')">
<span className="iconify" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="20"></span>
<span className="absolute top-1 right-0.5 w-4 h-4 bg-orange-600 text-white text-[10px] font-semibold flex items-center justify-center rounded-full opacity-0 transition-opacity" id="cart-badge">0</span>
</button>
<button className="md:hidden p-2 text-neutral-600" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden border-t border-neutral-100 bg-white" id="mobile-menu">
<div className="px-4 pt-2 pb-4 space-y-1">
<button className="block w-full text-left px-3 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-50 rounded-md" onclick="showPage('home')">Home</button>
<button className="block w-full text-left px-3 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-50 rounded-md" onclick="showPage('menu')">Menu</button>
<button className="block w-full text-left px-3 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-50 rounded-md" onclick="showPage('partners')">Partners</button>
<button className="block w-full text-left px-3 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-50 rounded-md" onclick="showPage('about')">About</button>
<button className="block w-full text-left px-3 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-50 rounded-md" onclick="showPage('contact')">Contact</button>
</div>
</div>
</nav>

<main className="flex-grow pt-16">

<div className="page-section animate-fade-in block" id="home">

<section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32 bg-gradient-to-br from-orange-50 via-white to-red-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 animate-slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-medium uppercase tracking-wide">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                                No delivery fees on first order
                            </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                                Delicious food delivered <span className="text-orange-600">fast</span> to your door.
                            </h1>
<p className="text-lg text-neutral-500 max-w-lg leading-relaxed">
                                Craving something specific? QuickBite connects you with the best local restaurants for instant satisfaction. Fresh, hot, and right on time.
                            </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-xl shadow-lg shadow-orange-200 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2" onclick="showPage('menu')">
                                    Order Now
                                    <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="px-8 py-3.5 bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-900 font-medium rounded-xl transition-all flex items-center justify-center gap-2" onclick="showPage('partners')">
                                    View Restaurants
                                </button>
</div>

<div className="pt-6 flex items-center gap-6 text-sm text-neutral-500 font-medium">
<div className="flex items-center gap-2">
<span className="iconify text-green-500" data-icon="lucide:check-circle-2" data-width="18"></span>
<span>Free Delivery</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-green-500" data-icon="lucide:check-circle-2" data-width="18"></span>
<span>24/7 Support</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-green-500" data-icon="lucide:check-circle-2" data-width="18"></span>
<span>Real-time Tracking</span>
</div>
</div>
</div>
<div className="relative lg:h-[600px] flex items-center justify-center animate-slide-up" style={{animationDelay: '0.1s'}}>

<div className="absolute inset-0 bg-gradient-to-tr from-orange-200/40 to-red-200/40 rounded-full blur-3xl transform scale-75"></div>
<img alt="Delicious Pizza" className="relative z-10 rounded-2xl shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-700 object-cover w-full h-auto max-w-md mx-auto aspect-[4/5]" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>

<div className="absolute bottom-10 -left-4 md:left-10 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="bg-green-100 p-2 rounded-full text-green-600">
<span className="iconify" data-icon="lucide:clock" data-width="20"></span>
</div>
<div>
<p className="text-xs text-neutral-500 font-medium uppercase">Delivery Time</p>
<p className="text-sm font-semibold text-neutral-900">25-30 Mins</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Popular Categories</h2>
<p className="text-neutral-500 mt-2">Explore our most ordered food types.</p>
</div>
<button className="hidden md:flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm gap-1" onclick="showPage('menu')">
                            See all <span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

<div className="group cursor-pointer" onclick="showPage('menu')">
<div className="aspect-square rounded-2xl bg-neutral-50 border border-neutral-100 overflow-hidden relative mb-3 group-hover:border-orange-200 transition-colors">
<img alt="Burgers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<h3 className="text-center font-medium text-neutral-900">Burgers</h3>
</div>
<div className="group cursor-pointer" onclick="showPage('menu')">
<div className="aspect-square rounded-2xl bg-neutral-50 border border-neutral-100 overflow-hidden relative mb-3 group-hover:border-orange-200 transition-colors">
<img alt="Pizza" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<h3 className="text-center font-medium text-neutral-900">Pizza</h3>
</div>
<div className="group cursor-pointer" onclick="showPage('menu')">
<div className="aspect-square rounded-2xl bg-neutral-50 border border-neutral-100 overflow-hidden relative mb-3 group-hover:border-orange-200 transition-colors">
<img alt="Sushi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<h3 className="text-center font-medium text-neutral-900">Sushi</h3>
</div>
<div className="group cursor-pointer" onclick="showPage('menu')">
<div className="aspect-square rounded-2xl bg-neutral-50 border border-neutral-100 overflow-hidden relative mb-3 group-hover:border-orange-200 transition-colors">
<img alt="Asian" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<h3 className="text-center font-medium text-neutral-900">Asian</h3>
</div>
<div className="group cursor-pointer" onclick="showPage('menu')">
<div className="aspect-square rounded-2xl bg-neutral-50 border border-neutral-100 overflow-hidden relative mb-3 group-hover:border-orange-200 transition-colors">
<img alt="Healthy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<h3 className="text-center font-medium text-neutral-900">Healthy</h3>
</div>
<div className="group cursor-pointer" onclick="showPage('menu')">
<div className="aspect-square rounded-2xl bg-neutral-50 border border-neutral-100 overflow-hidden relative mb-3 group-hover:border-orange-200 transition-colors">
<img alt="Pasta" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<h3 className="text-center font-medium text-neutral-900">Pasta</h3>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-50 border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 text-center mb-12">What our customers say</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
<div className="flex gap-1 text-orange-500 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-neutral-600 mb-6 leading-relaxed">"The delivery was incredibly fast and the food was still hot. The app interface is so clean and easy to use. Highly recommended!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-semibold">JS</div>
<div>
<p className="text-sm font-semibold text-neutral-900">James Smith</p>
<p className="text-xs text-neutral-500">Food Lover</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
<div className="flex gap-1 text-orange-500 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-neutral-600 mb-6 leading-relaxed">"QuickBite has revolutionized my lunch breaks. The variety of healthy options and reliable delivery times are unmatched."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-semibold">ED</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Elena Davis</p>
<p className="text-xs text-neutral-500">Corporate Designer</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
<div className="flex gap-1 text-orange-500 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-neutral-600 mb-6 leading-relaxed">"Best customer service I've experienced. Had a small issue with an order and they fixed it within minutes. 5 stars."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-semibold">MR</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Michael Ross</p>
<p className="text-xs text-neutral-500">Local Guide</p>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden animate-fade-in" id="menu">
<div className="bg-neutral-900 text-white py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Menu</h1>
<p className="text-neutral-400 mt-2 max-w-2xl">Discover cuisines from all over the globe, prepared by the finest local chefs.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col lg:flex-row gap-8">

<aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
<div>
<div className="relative">
<span className="iconify absolute left-3 top-3 text-neutral-400" data-icon="lucide:search" data-width="18"></span>
<input className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="Search food..." type="text"/>
</div>
</div>
<div>
<h3 className="font-semibold text-neutral-900 mb-4">Categories</h3>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-5 h-5 border border-neutral-300 rounded flex items-center justify-center text-white bg-orange-500 border-orange-500">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="3" data-width="14"></span>
</div>
<span className="text-sm text-neutral-600 group-hover:text-neutral-900">All Items</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-5 h-5 border border-neutral-300 rounded flex items-center justify-center text-white bg-white hover:border-orange-500"></div>
<span className="text-sm text-neutral-600 group-hover:text-neutral-900">Burgers</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-5 h-5 border border-neutral-300 rounded flex items-center justify-center text-white bg-white hover:border-orange-500"></div>
<span className="text-sm text-neutral-600 group-hover:text-neutral-900">Pizza</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-5 h-5 border border-neutral-300 rounded flex items-center justify-center text-white bg-white hover:border-orange-500"></div>
<span className="text-sm text-neutral-600 group-hover:text-neutral-900">Healthy</span>
</label>
</div>
</div>
<div>
<h3 className="font-semibold text-neutral-900 mb-4">Price Range</h3>
<input className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range"/>
<div className="flex justify-between text-xs text-neutral-500 mt-2">
<span>$0</span>
<span>$100+</span>
</div>
</div>
</aside>

<div className="flex-grow">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="menu-grid">

</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden animate-fade-in" id="partners">
<div className="bg-neutral-50 py-16 border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Restaurant Partners</h1>
<p className="text-neutral-500 max-w-2xl mx-auto">We partner with the best kitchens in your city to bring quality food to your doorstep.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="partners-grid">

</div>
</div>
</div>

<div className="page-section hidden animate-fade-in" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="max-w-3xl mx-auto text-center mb-16">
<h1 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-6">Delivering happiness, one meal at a time.</h1>
<p className="text-lg text-neutral-500 leading-relaxed">
                        Founded in 2024, QuickBite was built on a simple mission: to bridge the gap between hungry customers and excellent local food, without the hassle. We believe good food should be accessible, fast, and handled with care.
                    </p>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-20">
<div className="p-6 bg-orange-50 rounded-2xl border border-orange-100 text-center">
<h3 className="text-4xl font-bold text-orange-600 mb-2">50k+</h3>
<p className="text-neutral-600 font-medium">Deliveries Made</p>
</div>
<div className="p-6 bg-orange-50 rounded-2xl border border-orange-100 text-center">
<h3 className="text-4xl font-bold text-orange-600 mb-2">500+</h3>
<p className="text-neutral-600 font-medium">Restaurant Partners</p>
</div>
<div className="p-6 bg-orange-50 rounded-2xl border border-orange-100 text-center">
<h3 className="text-4xl font-bold text-orange-600 mb-2">30m</h3>
<p className="text-neutral-600 font-medium">Avg Delivery Time</p>
</div>
</div>
<div className="relative rounded-3xl overflow-hidden aspect-[21/9] mb-20">
<img alt="Delivery Guy" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
<h2 className="text-white text-2xl font-semibold">Our drivers are the heart of our service.</h2>
</div>
</div>
</div>
</div>

<div className="page-section hidden animate-fade-in" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="grid lg:grid-cols-2 gap-12">
<div>
<h1 className="text-3xl font-semibold tracking-tight mb-6">Get in touch</h1>
<p className="text-neutral-500 mb-8">Have a question about an order or want to partner with us? Fill out the form below.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-2">First Name</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-2">Last Name</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
<textarea className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" rows="4"></textarea>
</div>
<button className="w-full px-6 py-3.5 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors" type="button">Send Message</button>
</form>
<div className="mt-12 space-y-4">
<div className="flex items-center gap-4 text-neutral-600">
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
<span>support@quickbite.com</span>
</div>
<div className="flex items-center gap-4 text-neutral-600">
<span className="iconify" data-icon="lucide:phone" data-width="20"></span>
<span>+1 (555) 123-4567</span>
</div>
<div className="flex items-center gap-4 text-neutral-600">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
<span>123 Foodie Lane, Flavor Town, CA 90210</span>
</div>
</div>
</div>
<div className="bg-neutral-100 rounded-2xl overflow-hidden min-h-[400px] relative">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184126442654!2d-73.9855556845941!3d40.74844057932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1632765432123!5m2!1sen!2sus" style={{border: '0', filter: 'grayscale(1)'}} width="100%"></iframe>
</div>
</div>
</div>
</div>

<div className="page-section hidden animate-fade-in" id="cart">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<h1 className="text-2xl font-semibold tracking-tight mb-8">Your Cart</h1>
<div className="grid lg:grid-cols-3 gap-12">

<div className="lg:col-span-2">
<div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
<div className="p-6 space-y-6" id="cart-items-container">

<div className="text-center py-10 text-neutral-500">
<span className="iconify mx-auto mb-2 text-neutral-300" data-icon="lucide:shopping-cart" data-width="40"></span>
<p>Your cart is empty.</p>
<button className="mt-4 text-orange-600 font-medium hover:underline" onclick="showPage('menu')">Browse Menu</button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 sticky top-24">
<h3 className="text-lg font-semibold text-neutral-900 mb-6">Order Summary</h3>
<div className="space-y-3 mb-6">
<div className="flex justify-between text-neutral-600 text-sm">
<span>Subtotal</span>
<span id="cart-subtotal">$0.00</span>
</div>
<div className="flex justify-between text-neutral-600 text-sm">
<span>Delivery Fee</span>
<span>$2.99</span>
</div>
<div className="flex justify-between text-neutral-600 text-sm">
<span>Tax (8%)</span>
<span id="cart-tax">$0.00</span>
</div>
<div className="h-px bg-neutral-200 my-2"></div>
<div className="flex justify-between text-neutral-900 font-semibold">
<span>Total</span>
<span id="cart-total">$0.00</span>
</div>
</div>
<h4 className="font-medium text-sm text-neutral-900 mb-3">Delivery Address</h4>
<input className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-lg text-sm mb-4 focus:ring-2 focus:ring-orange-500 focus:outline-none" placeholder="123 Main St, Apt 4B" type="text"/>
<h4 className="font-medium text-sm text-neutral-900 mb-3">Payment</h4>
<div className="flex gap-3 mb-6">
<div className="flex-1 h-10 bg-white border border-orange-500 text-orange-600 rounded-lg flex items-center justify-center cursor-pointer text-sm font-medium">Card</div>
<div className="flex-1 h-10 bg-white border border-neutral-200 text-neutral-500 rounded-lg flex items-center justify-center cursor-pointer text-sm hover:bg-neutral-50">PayPal</div>
</div>
<button className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-xl shadow-lg shadow-orange-200 transition-colors">
                                Checkout
                            </button>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-neutral-900 text-white py-12 border-t border-neutral-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="space-y-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center">
<span className="iconify" data-icon="lucide:utensils" data-strokeWidth="2" data-width="14"></span>
</div>
<span className="font-semibold text-lg tracking-tight">QuickBite</span>
</div>
<p className="text-neutral-400 text-sm leading-relaxed">Delicious food delivered fast to your door. Fresh ingredients, hot meals, and happy customers.</p>
</div>
<div>
<h4 className="font-semibold mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#" onclick="showPage('about')">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4">Help</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#" onclick="showPage('contact')">Contact Support</a></li>
<li><a className="hover:text-white transition-colors" href="#">Delivery Details</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sitemap</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4">Follow Us</h4>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
</div>
<div className="mt-6">
<p className="text-xs text-neutral-500">© 2024 QuickBite Delivery. All rights reserved.</p>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
