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
},
colors: {
brand: {
black: '#111111',
offwhite: '#F5F5F5',
lime: '#D6FF3F',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initial Cart Data
        const cartData = [
            {
                id: 1,
                name: "Veluno Air Max Pulse",
                category: "Men's Shoes",
                color: "Photon Dust/Particle Grey",
                size: "10.5",
                price: 150.00,
                image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80",
                qty: 1
            },
            {
                id: 2,
                name: "Veluno Tech Fleece",
                category: "Men's Full-Zip Hoodie",
                color: "Black/Black",
                size: "L",
                price: 130.00,
                image: "https://images.unsplash.com/photo-1556906781-9a412961d28c?auto=format&fit=crop&w=600&q=80",
                qty: 1
            }
        ];

        // Format currency helper
        const formatMoney = (amount) => {
            return '$' + amount.toFixed(2);
        };

        // Render Cart Items
        function renderCart() {
            const container = document.getElementById('cart-items-container');
            const emptyState = document.getElementById('empty-cart-message');
            const headerCount = document.getElementById('header-cart-count');
            
            // Clear current view
            container.innerHTML = '';

            // Handle empty state
            if (cartData.length === 0) {
                emptyState.classList.remove('hidden');
                headerCount.style.display = 'none';
                updateSummary();
                return;
            } else {
                emptyState.classList.add('hidden');
                headerCount.style.display = 'flex';
                headerCount.innerText = cartData.reduce((acc, item) => acc + item.qty, 0);
            }

            // Loop through data and create HTML
            cartData.forEach(item => {
                const itemHTML = `
                    <div class="flex flex-col sm:flex-row py-6 border-b border-gray-100 animate-fade-in gap-6">
                        <!-- Image -->
                        <div class="w-full sm:w-36 aspect-square bg-[#F5F5F5] rounded-xl flex-shrink-0 overflow-hidden">
                            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover mix-blend-multiply hover:scale-105 transition-transform duration-500">
                        </div>

                        <!-- Info -->
                        <div class="flex-1 flex flex-col justify-between">
                            <div class="flex justify-between items-start">
                                <div class="space-y-1">
                                    <h3 class="text-base font-medium text-black leading-tight">${item.name}</h3>
                                    <p class="text-sm text-gray-500">${item.category}</p>
                                    <p class="text-sm text-gray-500">${item.color}</p>
                                    <div class="flex items-center gap-4 mt-2">
                                        <div class="flex items-center gap-1">
                                            <span class="text-sm text-gray-500">Size</span>
                                            <span class="text-sm font-medium text-black">${item.size}</span>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-base font-medium text-black tracking-tight">${formatMoney(item.price * item.qty)}</p>
                            </div>

                            <!-- Controls -->
                            <div class="flex justify-between items-end mt-4 sm:mt-0">
                                <div class="flex items-center gap-6">
                                    <!-- Qty Selector -->
                                    <div class="flex items-center gap-3">
                                        <button onclick="updateQty(${item.id}, -1)" class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-black hover:text-black transition-colors disabled:opacity-30">
                                            <iconify-icon icon="solar:minus-linear"></iconify-icon>
                                        </button>
                                        <span class="text-sm font-medium w-4 text-center">${item.qty}</span>
                                        <button onclick="updateQty(${item.id}, 1)" class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-black hover:text-black transition-colors">
                                            <iconify-icon icon="solar:add-linear"></iconify-icon>
                                        </button>
                                    </div>
                                </div>

                                <div class="flex items-center gap-4">
                                    <button class="text-gray-400 hover:text-black transition-colors">
                                        <iconify-icon icon="solar:heart-linear" class="text-xl"></iconify-icon>
                                    </button>
                                    <button onclick="removeItem(${item.id})" class="text-gray-400 hover:text-red-600 transition-colors">
                                        <iconify-icon icon="solar:trash-bin-trash-linear" class="text-xl"></iconify-icon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += itemHTML;
            });

            updateSummary();
        }

        // Logic: Update Quantity
        function updateQty(id, change) {
            const item = cartData.find(i => i.id === id);
            if (item) {
                const newQty = item.qty + change;
                if (newQty > 0) {
                    item.qty = newQty;
                    renderCart();
                }
            }
        }

        // Logic: Remove Item
        function removeItem(id) {
            const index = cartData.findIndex(i => i.id === id);
            if (index > -1) {
                cartData.splice(index, 1);
                renderCart();
            }
        }

        // Logic: Calculate Totals
        function updateSummary() {
            const subtotal = cartData.reduce((sum, item) => sum + (item.price * item.qty), 0);
            const tax = subtotal * 0.08; // 8% tax
            const total = subtotal + tax;

            document.getElementById('summary-subtotal').innerText = formatMoney(subtotal);
            document.getElementById('summary-tax').innerText = formatMoney(tax);
            document.getElementById('summary-total').innerText = formatMoney(total);
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            renderCart();
        });

    
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
      

<header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">

<a className="text-2xl font-bold tracking-tighter hover:opacity-70 transition-opacity" href="#">VELUNO</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-gray-500 transition-colors" href="#">New &amp; Featured</a>
<a className="text-sm font-medium hover:text-gray-500 transition-colors" href="#">Men</a>
<a className="text-sm font-medium hover:text-gray-500 transition-colors" href="#">Women</a>
<a className="text-sm font-medium hover:text-gray-500 transition-colors" href="#">Sale</a>
</nav>

<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center bg-gray-100 rounded-full px-3 py-1.5 hover:bg-gray-200 transition-colors group cursor-text w-40">
<iconify-icon className="text-gray-500 text-lg group-hover:text-black" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent border-none focus:outline-none text-xs ml-2 w-full placeholder:text-gray-500 font-medium" placeholder="Search" type="text"/>
</div>
<button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors relative">
<iconify-icon className="text-xl" icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-1 right-0.5 h-4 w-4 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center" id="header-cart-count">2</span>
</button>
</div>
</div>
</header>

<main className="pt-24 pb-20 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">

<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">

<div className="lg:col-span-8">

<div className="bg-gray-50 p-4 rounded-lg mb-8 border border-gray-100 flex items-start gap-3">
<iconify-icon className="text-orange-500 text-xl flex-shrink-0 mt-0.5" icon="solar:box-linear"></iconify-icon>
<div>
<p className="text-sm font-medium text-black">Free Shipping for Members.</p>
<p className="text-xs text-gray-500 mt-1">Become a Veluno Member for fast and free shipping. <a className="underline hover:text-black" href="#">Join us</a> or <a className="underline hover:text-black" href="#">Sign-in</a></p>
</div>
</div>
<h1 className="text-2xl font-medium tracking-tight mb-6">Bag</h1>

<div className="space-y-6" id="cart-items-container">

</div>

<div className="hidden text-center py-16" id="empty-cart-message">
<iconify-icon className="text-4xl text-gray-300 mb-4" icon="solar:bag-3-linear"></iconify-icon>
<h3 className="text-lg font-medium text-gray-900">Your bag is empty</h3>
<p className="text-gray-500 text-sm mt-2 mb-6">Looking for inspiration?</p>
<button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">Start Shopping</button>
</div>
</div>

<div className="lg:col-span-4 mt-10 lg:mt-0">
<div className="sticky top-24">
<h2 className="text-xl font-medium tracking-tight mb-6">Summary</h2>
<div className="space-y-4 mb-6">
<div className="flex justify-between items-center">
<span className="text-sm text-gray-600">Subtotal</span>
<span className="text-sm font-medium" id="summary-subtotal">$0.00</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-gray-600">Estimated Delivery</span>
<span className="text-sm font-medium">Free</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-gray-600">Estimated Tax</span>
<span className="text-sm font-medium" id="summary-tax">$0.00</span>
</div>
</div>
<div className="border-t border-b border-gray-100 py-4 mb-6">
<div className="flex justify-between items-center">
<span className="text-base font-medium">Total</span>
<span className="text-base font-semibold tracking-tight" id="summary-total">$0.00</span>
</div>
</div>
<button className="w-full bg-black text-white h-14 rounded-full font-medium hover:bg-gray-800 transition-transform active:scale-95 mb-4 flex items-center justify-center gap-2 group">
                        Checkout
                    </button>
<button className="w-full bg-[#F5F5F5] text-black h-14 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                        Pay with <iconify-icon height="20" icon="logos:paypal"></iconify-icon>
</button>

<div className="mt-8">
<details className="group">
<summary className="list-none flex justify-between items-center cursor-pointer text-sm font-medium text-gray-900">
                                Do you have a Promo Code?
                                <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 flex gap-2">
<input className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-black uppercase" placeholder="Promo Code" type="text"/>
<button className="bg-white border border-gray-300 text-black px-4 py-2 rounded-lg text-sm font-medium hover:border-black transition-colors">Apply</button>
</div>
</details>
</div>
</div>
</div>
</div>

<section className="mt-24 border-t border-gray-100 pt-12">
<h3 className="text-xl font-medium tracking-tight mb-8">You Might Also Like</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

<div className="group cursor-pointer">
<div className="bg-[#F5F5F5] rounded-xl aspect-[4/5] overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-black">Veluno Air Max</p>
<p className="text-sm text-gray-500">Men's Shoes</p>
</div>
<span className="text-sm font-medium">$130</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-[#F5F5F5] rounded-xl aspect-[4/5] overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-black">Veluno Dunk Low</p>
<p className="text-sm text-gray-500">Women's Shoes</p>
</div>
<span className="text-sm font-medium">$115</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-[#F5F5F5] rounded-xl aspect-[4/5] overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-black">Veluno React</p>
<p className="text-sm text-gray-500">Running</p>
</div>
<span className="text-sm font-medium">$160</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-[#F5F5F5] rounded-xl aspect-[4/5] overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-black">Veluno Retro</p>
<p className="text-sm text-gray-500">Lifestyle</p>
</div>
<span className="text-sm font-medium">$90</span>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black text-white pt-16 pb-8">
<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div>
<h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-white">Find A Store</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Become A Member</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Send Us Feedback</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Student Discounts</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-white">Get Help</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Order Status</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Delivery</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Returns</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Payment Options</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-white">About Veluno</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">News</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Investors</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Sustainability</a></li>
</ul>
</div>
<div className="flex justify-end items-start gap-4">
<button className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
<iconify-icon className="filter invert" icon="logos:twitter" width="16"></iconify-icon>
</button>
<button className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
<iconify-icon className="filter invert" icon="logos:instagram-icon" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end border-t border-gray-800 pt-8">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<iconify-icon className="text-white" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs font-bold">United States</span>
<span className="text-xs text-gray-500 ml-4">© 2024 Veluno, Inc. All Rights Reserved</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-gray-500 hover:text-white" href="#">Guides</a>
<a className="text-xs text-gray-500 hover:text-white" href="#">Terms of Sale</a>
<a className="text-xs text-gray-500 hover:text-white" href="#">Terms of Use</a>
<a className="text-xs text-gray-500 hover:text-white" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
