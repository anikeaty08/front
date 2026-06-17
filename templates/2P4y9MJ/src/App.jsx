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



        document.addEventListener('DOMContentLoaded', function() {
            const productList = document.getElementById('product-list');
            const recommendations = document.getElementById('recommendations');
            const totalPriceElement = document.getElementById('total-price');
            let nextProductId = 4;
            
            // Set initial total
            updateTotal();
            
            // Product list event delegation
            productList.addEventListener('click', function(event) {
                const target = event.target.closest('button');
                if (!target) return;
                
                const product = target.closest('[id^="product-"]');
                if (!product) return;
                
                if (target.classList.contains('increase-btn')) {
                    const quantityElement = product.querySelector('.quantity');
                    let quantity = parseInt(quantityElement.textContent) || 0;
                    quantity++;
                    quantityElement.textContent = quantity;
                    updateProductTotal(product, quantity);
                    updateTotal();
                } else if (target.classList.contains('decrease-btn')) {
                    const quantityElement = product.querySelector('.quantity');
                    let quantity = parseInt(quantityElement.textContent) || 0;
                    if (quantity > 0) {
                        quantity--;
                        quantityElement.textContent = quantity;
                        updateProductTotal(product, quantity);
                        updateTotal();
                    }
                } else if (target.classList.contains('remove-btn')) {
                    product.remove();
                    updateTotal();
                }
            });
            
            // Recommendations event delegation
            recommendations.addEventListener('click', function(event) {
                const target = event.target.closest('.add-to-cart-btn');
                if (!target) return;
                
                const recItem = target.closest('[data-rec-id]');
                if (!recItem) return;
                
                const name = recItem.dataset.name;
                const price = recItem.dataset.price;
                const desc = recItem.dataset.desc;
                const img = recItem.dataset.img;
                
                // Check if product already exists
                const existingProducts = document.querySelectorAll('[id^="product-"]');
                let productExists = false;
                
                for (let product of existingProducts) {
                    if (product.dataset.name === name && product.dataset.desc === desc) {
                        const quantityElement = product.querySelector('.quantity');
                        let quantity = parseInt(quantityElement.textContent) || 0;
                        quantity++;
                        quantityElement.textContent = quantity;
                        updateProductTotal(product, quantity);
                        updateTotal();
                        productExists = true;
                        break;
                    }
                }
                
                if (!productExists) {
                    addProductToCart(name, price, desc, img);
                }
            });
            
            function addProductToCart(name, price, desc, img) {
                const productId = `product-${nextProductId++}`;
                const productHTML = `
                    <div class="flex items-center gap-2 py-5 border-b border-gray-100" id="${productId}" data-price="${price}" data-name="${name}" data-desc="${desc}" data-img="${img}">
                        <div class="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                            <img src="${img}" class="w-full h-full object-cover" alt="${name}">
                        </div>
                        <div class="flex-1 flex flex-col justify-between h-20">
                            <div class="flex justify-between">
                                <h3 class="font-bold text-[#1C2229] text-base">${name}</h3>
                                <button class="text-red-500 remove-btn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/>
                                    </svg>
                                </button>
                            </div>
                            <p class="text-xs text-gray-500">${desc}</p>
                            <div class="flex items-center justify-between">
                                <p class="text-green-600 font-bold"><span>$</span><span class="product-total">${price}</span></p>
                                <div class="flex items-center gap-3">
                                    <button class="w-6 h-6 bg-white border border-gray-200 rounded-lg flex items-center justify-center decrease-btn">-</button>
                                    <span class="font-bold quantity">1</span>
                                    <button class="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center increase-btn">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                productList.insertAdjacentHTML('beforeend', productHTML);
                updateTotal();
            }
            
            function updateProductTotal(product, quantity) {
                const price = parseFloat(product.dataset.price);
                const productTotalElement = product.querySelector('.product-total');
                const total = (price * quantity).toFixed(2);
                productTotalElement.textContent = total;
            }
            
            function updateTotal() {
                let total = 0;
                const products = document.querySelectorAll('[id^="product-"]');
                
                products.forEach(product => {
                    const quantityElement = product.querySelector('.quantity');
                    const quantity = parseInt(quantityElement.textContent) || 0;
                    const price = parseFloat(product.dataset.price);
                    if (quantity > 0 && !isNaN(price)) {
                        total += price * quantity;
                    }
                });
                
                totalPriceElement.textContent = total.toFixed(2);
            }
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
      
<div className="iphone-frame">
<div className="notch"></div>
<div className="content-area bg-gray-100">
<header className="bg-white py-3 px-4 border-b border-gray-200 flex items-center justify-between fade-in">
<button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200">
<svg fill="none" height="20" viewbox="0 0 24 24" width="20">
<path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#1C2229" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<h1 className="text-lg font-bold text-[#1C2229]">My Cart</h1>
<div className="w-9 h-9"></div>
</header>
<main className="container mx-auto px-4 max-w-md">
<section className="bg-white rounded-2xl p-4 mt-4 slide-up" id="product-list">
<div className="flex items-center gap-2 py-5 border-b border-gray-100" data-desc="Natural Oak / 20oz" data-img="https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&amp;fit=crop&amp;w=800&amp;q=80" data-name="Wooden Water Bottle" data-price="32.99" id="product-1">
<div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
<img alt="Wooden Water Bottle" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col justify-between h-20">
<div className="flex justify-between">
<h3 className="font-bold text-[#1C2229] text-base">Wooden Water Bottle</h3>
<button className="text-red-500 remove-btn">
<svg fill="none" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"></path>
</svg>
</button>
</div>
<p className="text-xs text-gray-500">Natural Oak / 20oz</p>
<div className="flex items-center justify-between">
<p className="text-green-600 font-bold"><span>$</span><span className="product-total">32.99</span></p>
<div className="flex items-center gap-3">
<button className="w-6 h-6 bg-white border border-gray-200 rounded-lg flex items-center justify-center decrease-btn">-</button>
<span className="font-bold quantity">1</span>
<button className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center increase-btn">+</button>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-2 py-5 border-b border-gray-100 delay-1 slide-up" data-desc="Brown / Genuine Leather" data-img="https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?auto=format&amp;fit=crop&amp;w=800&amp;q=80" data-name="Leather Accent Chair" data-price="249.00" id="product-2">
<div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
<img alt="Leather Chair" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col justify-between h-20">
<div className="flex justify-between">
<h3 className="font-bold text-[#1C2229] text-base">Leather Accent Chair</h3>
<button className="text-red-500 remove-btn">
<svg fill="none" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"></path>
</svg>
</button>
</div>
<p className="text-xs text-gray-500">Brown / Genuine Leather</p>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">15%</span>
<span className="text-xs text-gray-500 line-through">$295.00</span>
</div>
<div className="flex items-center justify-between">
<p className="text-green-600 font-bold"><span>$</span><span className="product-total">249.00</span></p>
<div className="flex items-center gap-3">
<button className="w-6 h-6 bg-white border border-gray-200 rounded-lg flex items-center justify-center decrease-btn">-</button>
<span className="font-bold quantity">1</span>
<button className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center increase-btn">+</button>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-2 py-5 delay-2 slide-up" data-desc="White / 12oz" data-img="https://images.unsplash.com/photo-1541696490-8744a5dc0228?auto=format&amp;fit=crop&amp;w=800&amp;q=80" data-name="Ceramic Coffee Mug" data-price="18.99" id="product-3">
<div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
<img alt="Coffee Mug" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541696490-8744a5dc0228?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col justify-between h-20">
<div className="flex justify-between">
<h3 className="font-bold text-[#1C2229] text-base">Ceramic Coffee Mug</h3>
<button className="text-red-500 remove-btn">
<svg fill="none" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"></path>
</svg>
</button>
</div>
<p className="text-xs text-gray-500">White / 12oz</p>
<div className="flex items-center justify-between">
<p className="text-green-600 font-bold"><span>$</span><span className="product-total">18.99</span></p>
<div className="flex items-center gap-3">
<button className="w-6 h-6 bg-white border border-gray-200 rounded-lg flex items-center justify-center decrease-btn">-</button>
<span className="font-bold quantity">1</span>
<button className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center increase-btn">+</button>
</div>
</div>
</div>
</div>
</section>
<section className="mt-8 slide-up delay-3">
<div className="flex justify-between items-center mb-4">
<h2 className="font-bold text-base text-[#1C2229]">You might like</h2>
</div>
<div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4" id="recommendations">
<div className="min-w-[140px] border border-gray-100 rounded-2xl bg-white p-3 scale-in delay-1" data-desc="Indoor Plant" data-img="https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&amp;fit=crop&amp;w=800&amp;q=80" data-name="Monstera Deliciosa" data-price="29.99" data-rec-id="rec-1">
<div className="h-[100px] bg-gray-100 rounded-xl mb-2 overflow-hidden">
<img alt="Indoor Plant" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="font-bold text-sm text-[#1C2229] leading-tight mb-1">Monstera Deliciosa</h3>
<p className="text-xs text-gray-500 mb-1">Indoor Plant</p>
<div className="flex items-center justify-between">
<p className="font-black text-xs text-[#1C2229]">$29.99</p>
<button className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center add-to-cart-btn">+</button>
</div>
</div>
<div className="min-w-[140px] border border-gray-100 rounded-2xl bg-white p-3 scale-in delay-2" data-desc="Gray / 5'x7'" data-img="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&amp;fit=crop&amp;w=800&amp;q=80" data-name="Geometric Area Rug" data-price="149.50" data-rec-id="rec-2">
<div className="h-[100px] bg-gray-100 rounded-xl mb-2 overflow-hidden">
<img alt="Living Room Carpet" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="font-bold text-sm text-[#1C2229] leading-tight mb-1">Geometric Area Rug</h3>
<p className="text-xs text-gray-500 mb-1">Gray / 5'x7'</p>
<div className="flex items-center justify-between">
<p className="font-black text-xs text-[#1C2229]">$149.50</p>
<button className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center add-to-cart-btn">+</button>
</div>
</div>
<div className="min-w-[140px] border border-gray-100 rounded-2xl bg-white p-3 scale-in delay-3" data-desc="Vintage / Oak" data-img="https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&amp;fit=crop&amp;w=800&amp;q=80" data-name="Antique Wooden Chair" data-price="189.99" data-rec-id="rec-3">
<div className="h-[100px] bg-gray-100 rounded-xl mb-2 overflow-hidden relative">
<div className="absolute right-2 top-2 bg-red-500 text-white text-xs font-bold px-1 py-0.5 rounded">20%</div>
<img alt="Antique Wooden Chair" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="font-bold text-sm text-[#1C2229] leading-tight mb-1">Antique Wooden Chair</h3>
<p className="text-xs text-gray-500 mb-1">Vintage / Oak</p>
<div className="flex items-center justify-between">
<div>
<p className="font-black text-xs text-[#1C2229]">$189.99</p>
<p className="text-xs text-red-500 line-through">$239.99</p>
</div>
<button className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center add-to-cart-btn">+</button>
</div>
</div>
</div>
</section>
<section className="mt-8 bg-green-50 border border-green-700 rounded-2xl p-4 flex items-center justify-between slide-up delay-3 mb-16">
<div className="flex items-center gap-2">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24">
<path d="M21 14v3c0 .83-.67 1.5-1.5 1.5h-15C3.67 18.5 3 17.83 3 17v-3c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5z" fill="#61AD4E" opacity="0.4"></path>
<path d="M6.5 13c-.96 0-1.75-.79-1.75-1.75v-4.5c0-.96.79-1.75 1.75-1.75s1.75.79 1.75 1.75v4.5c0 .96-.79 1.75-1.75 1.75z" fill="#457B37"></path>
</svg>
<span className="text-green-700 font-bold text-sm">Got a promo code? Apply it here</span>
</div>
<svg fill="none" height="16" viewbox="0 0 16 16" width="16">
<path d="M6 12l4-4-4-4" stroke="#457B37" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</section>
</main>
</div>
<div className="bottom-bar border-t border-gray-200 p-4 fade-in delay-3">
<div className="flex justify-center items-center mb-2">
<div className="text-center">
<p className="text-gray-500 text-xs">Total</p>
<p className="text-lg font-black text-[#1C2229]">$<span id="total-price">300.98</span></p>
</div>
</div>
<button className="w-full bg-green-600 text-white py-3 px-4 rounded-xl font-bold shadow-inner shadow-green-700/60">
                Checkout
            </button>
<div className="flex justify-center pt-2">
<div className="w-32 h-1 bg-black rounded-full opacity-30"></div>
</div>
</div>
</div>


    </>
  );
}
