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
      
    let currentQuantity = 1;
    let cart = [
      { id: 1, name: 'Nebula Truffle', price: 28, quantity: 1, customization: 'Medium • Dark Chocolate • Galaxy Stardust' },
      { id: 2, name: 'Galaxy Explorer Collection', price: 179, quantity: 1, customization: '24 signature pieces with rare ingredient infusions' },
      { id: 3, name: 'Stellar Selection', price: 89, quantity: 1, customization: '12 handcrafted pieces with single-origin cacao' }
    ];

    function openCart() {
      document.getElementById('cartModal').classList.remove('hidden');
      document.getElementById('cartModal').classList.add('flex');
      renderCart();
    }

    function closeCart() {
      document.getElementById('cartModal').classList.add('hidden');
      document.getElementById('cartModal').classList.remove('flex');
    }

    function renderCart() {
      const cartItemsContainer = document.getElementById('cartItems');
      const emptyCart = document.getElementById('emptyCart');
      const cartSummary = document.getElementById('cartSummary');

      if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        emptyCart.classList.remove('hidden');
        cartSummary.classList.add('hidden');
        return;
      }

      emptyCart.classList.add('hidden');
      cartSummary.classList.remove('hidden');

      cartItemsContainer.innerHTML = cart.map((item, index) => `
        <div class="flex items-center gap-4 p-6 rounded-2xl border border-amber-500/20" style="background: rgba(245, 158, 11, 0.05);">
          <div class="w-16 h-16 rounded-xl border border-amber-500/20 flex items-center justify-center flex-shrink-0" style="background: rgba(245, 158, 11, 0.1);">
            <i data-lucide="sparkles" class="w-8 h-8 text-amber-400"></i>
          </div>
          <div class="flex-1">
            <h4 class="text-lg font-medium text-white mb-1">${item.name}</h4>
            <p class="text-sm text-white/60 mb-2">${item.customization}</p>
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2">
                <button onclick="updateCartItemQuantity(${index}, -1)" class="w-8 h-8 rounded-lg border border-amber-500/20 flex items-center justify-center hover:border-amber-500/40 transition-colors duration-300" style="background: rgba(245, 158, 11, 0.05);">
                  <i data-lucide="minus" class="w-3 h-3 text-white"></i>
                </button>
                <span class="text-white font-medium min-w-8 text-center">${item.quantity}</span>
                <button onclick="updateCartItemQuantity(${index}, 1)" class="w-8 h-8 rounded-lg border border-amber-500/20 flex items-center justify-center hover:border-amber-500/40 transition-colors duration-300" style="background: rgba(245, 158, 11, 0.05);">
                  <i data-lucide="plus" class="w-3 h-3 text-white"></i>
                </button>
              </div>
              <button onclick="removeFromCart(${index})" class="text-white/60 hover:text-red-400 transition-colors duration-300 p-2">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
          <div class="text-right">
            <div class="text-lg font-medium text-white" style="font-family: 'Manrope', sans-serif;">$${(item.price * item.quantity).toFixed(0)}</div>
            <div class="text-sm text-white/60">$${item.price} each</div>
          </div>
        </div>
      `).join('');

      updateCartSummary();
      lucide.createIcons({ strokeWidth: 1.5 });
    }

    function updateCartSummary() {
      const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      const tax = Math.round(subtotal * 0.08);
      const total = subtotal + tax;

      document.getElementById('subtotal').textContent = `$${subtotal}`;
      document.getElementById('tax').textContent = `$${tax}`;
      document.getElementById('total').textContent = `$${total}`;
    }

    function updateCartItemQuantity(index, change) {
      cart[index].quantity = Math.max(1, cart[index].quantity + change);
      renderCart();
      updateCartCount();
    }

    function removeFromCart(index) {
      cart.splice(index, 1);
      renderCart();
      updateCartCount();
    }

    function updateCartCount() {
      const count = cart.reduce((total, item) => total + item.quantity, 0);
      document.getElementById('cartCount').textContent = count;
    }

    function addPresetToCart(name, price) {
      const newItem = {
        id: Date.now(),
        name: name,
        price: price,
        quantity: 1,
        customization: 'Standard collection with premium ingredients'
      };
      cart.push(newItem);
      updateCartCount();
      
      // Show a brief success message
      const button = event.target;
      const originalText = button.innerHTML;
      button.innerHTML = '<i data-lucide="check" class="w-4 h-4 mr-2 inline-block"></i>Added!';
      button.style.background = 'rgba(34, 197, 94, 0.2)';
      button.style.borderColor = 'rgba(34, 197, 94, 0.5)';
      
      setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
        button.style.borderColor = '';
        lucide.createIcons({ strokeWidth: 1.5 });
      }, 2000);
      
      lucide.createIcons({ strokeWidth: 1.5 });
    }

    function toggleFaq(button) {
      const content = button.nextElementSibling;
      const icon = button.querySelector('[data-lucide="chevron-down"]');
      
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
      } else {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
      }
    }

    function openCustomize(productName = 'Custom Space Chocolate') {
      document.getElementById('customizeModal').classList.remove('hidden');
      document.getElementById('customizeModal').classList.add('flex');
      document.getElementById('previewName').textContent = productName;
      updatePreview();
    }

    function closeCustomize() {
      document.getElementById('customizeModal').classList.add('hidden');
      document.getElementById('customizeModal').classList.remove('flex');
    }

    function updateQuantity(change) {
      currentQuantity = Math.max(1, currentQuantity + change);
      document.getElementById('quantity').textContent = currentQuantity;
      updatePreview();
    }

    function updatePreview() {
      const size = document.querySelector('input[name="size"]:checked')?.value || 'medium';
      const base = document.querySelector('input[name="base"]:checked')?.value || 'dark';
      const shape = document.querySelector('input[name="shape"]:checked')?.value || 'sphere';
      const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(t => t.value);

      // Calculate price
      let basePrice = size === 'small' ? 18 : size === 'large' ? 32 : 24;
      
      // Add base chocolate premium
      if (base === 'ruby') basePrice += 3;
      
      // Add shape premium
      const shapePrices = { sphere: 0, star: 2, galaxy: 3, rocket: 4 };
      basePrice += shapePrices[shape] || 0;
      
      // Add toppings
      const toppingPrices = { stardust: 2, meteors: 3, nebula: 2, moondust: 2, plasma: 4, comet: 3 };
      toppings.forEach(topping => {
        basePrice += toppingPrices[topping] || 0;
      });

      const totalPrice = basePrice * currentQuantity;

      // Update preview
      const sizeText = size.charAt(0).toUpperCase() + size.slice(1);
      const baseText = base.charAt(0).toUpperCase() + base.slice(1) + ' Chocolate';
      const toppingsText = toppings.length > 0 ? toppings.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', ') : 'No Toppings';

      document.getElementById('previewDetails').textContent = `${sizeText} • ${baseText} • ${toppingsText}`;
      document.getElementById('previewPrice').textContent = totalPrice;
    }

    function addToCart() {
      const name = document.getElementById('previewName').textContent;
      const customization = document.getElementById('previewDetails').textContent;
      const price = parseInt(document.getElementById('previewPrice').textContent);
      
      const newItem = {
        id: Date.now(),
        name: name,
        price: price / currentQuantity, // Store unit price
        quantity: currentQuantity,
        customization: customization
      };
      
      cart.push(newItem);
      updateCartCount();
      closeCustomize();
      
      // Brief success notification
      alert('🚀 Space chocolate added to cart!');
    }

    // Initialize Lucide icons
    lucide.createIcons({
      strokeWidth: 1.5
    });

    // Close modals on outside click
    document.getElementById('customizeModal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeCustomize();
      }
    });

    document.getElementById('cartModal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeCart();
      }
    });

    // Initialize cart count
    updateCartCount();
  
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
      

<div className="fixed inset-0 opacity-10" style={{backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`, backgroundSize: `24px 24px`}}></div>

<div className="fixed inset-0 pointer-events-none opacity-20">
<div className="absolute top-20 left-20 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
<div className="absolute top-40 right-32 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
<div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
<div className="absolute bottom-20 right-20 w-2 h-2 bg-amber-300 rounded-full animate-pulse"></div>
</div>

<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 hidden items-center justify-center p-4" id="cartModal">
<div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-amber-500/30" style={{background: `rgba(26, 26, 46, 0.95)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="p-8">

<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-2xl font-semibold text-white tracking-tight" style={{fontFamily: `'Manrope', sans-serif`}}>Your Space Cart</h3>
<p className="text-white/60 text-sm mt-2">Ready for an interstellar chocolate journey</p>
</div>
<button className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300" onClick={(e) => { closeCart() }}>
<i className="w-5 h-5 text-white/60" data-lucide="x"></i>
</button>
</div>

<div className="space-y-6 mb-8" id="cartItems">

</div>

<div className="text-center py-12 hidden" id="emptyCart">
<div className="w-24 h-24 mx-auto mb-6 rounded-full border border-amber-500/20 flex items-center justify-center" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<i className="w-12 h-12 text-amber-400/50" data-lucide="shopping-bag"></i>
</div>
<h4 className="text-lg font-medium text-white mb-2">Your cart is empty</h4>
<p className="text-white/60 mb-6">Discover our celestial chocolate collections</p>
<button className="px-6 py-3 rounded-xl text-sm font-medium text-white border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 hover:bg-amber-500/10" onClick={(e) => { closeCart() }} style={{background: `rgba(245, 158, 11, 0.08)`}}>
            Continue Shopping
          </button>
</div>

<div className="border-t border-amber-500/20 pt-8" id="cartSummary">
<div className="space-y-4 mb-8">
<div className="flex items-center justify-between text-white/80">
<span>Subtotal</span>
<span id="subtotal">$0</span>
</div>
<div className="flex items-center justify-between text-white/80">
<span>Shipping</span>
<span className="text-green-400">Free</span>
</div>
<div className="flex items-center justify-between text-white/80">
<span>Tax</span>
<span id="tax">$0</span>
</div>
<div className="border-t border-amber-500/20 pt-4">
<div className="flex items-center justify-between text-white">
<span className="text-lg font-medium">Total</span>
<span className="text-2xl font-medium" id="total" style={{fontFamily: `'Manrope', sans-serif`}}>$0</span>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<button className="w-full py-4 px-6 rounded-xl text-sm font-medium text-white border border-amber-500/40 hover:border-amber-500/60 transition-all duration-300" style={{background: `rgba(245, 158, 11, 0.2)`}}>
<i className="w-4 h-4 mr-2 inline-block" data-lucide="rocket"></i>
              Launch to Checkout
            </button>
<button className="w-full py-3 px-6 rounded-xl text-sm font-medium text-white/80 border border-white/20 hover:border-white/30 transition-all duration-300" onClick={(e) => { closeCart() }} style={{background: `rgba(255, 255, 255, 0.05)`}}>
              Continue Shopping
            </button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 hidden items-center justify-center p-4" id="customizeModal">
<div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-amber-500/30" style={{background: `rgba(26, 26, 46, 0.95)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="p-8">

<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-2xl font-semibold text-white tracking-tight" style={{fontFamily: `'Manrope', sans-serif`}}>Customize Your Space Chocolate</h3>
<p className="text-white/60 text-sm mt-2">Create your perfect cosmic chocolate experience</p>
</div>
<button className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300" onClick={(e) => { closeCustomize() }}>
<i className="w-5 h-5 text-white/60" data-lucide="x"></i>
</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="order-2 lg:order-1">
<div className="sticky top-0">
<div className="rounded-2xl border border-amber-500/20 p-8 text-center" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<div className="w-48 h-48 mx-auto mb-6 rounded-full border border-amber-500/30 flex items-center justify-center" style={{background: `rgba(245, 158, 11, 0.1)`}}>
<i className="w-24 h-24 text-amber-400" data-lucide="sparkles"></i>
</div>
<h4 className="text-xl font-semibold text-white mb-2" id="previewName">Custom Space Chocolate</h4>
<p className="text-white/60 text-sm mb-6" id="previewDetails">Medium • Dark Chocolate • No Toppings</p>
<div className="flex items-center justify-center gap-2 text-2xl font-medium text-white" style={{fontFamily: `'Manrope', sans-serif`}}>
<span>$</span>
<span id="previewPrice">24</span>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 space-y-8">

<div>
<h5 className="text-lg font-medium text-white mb-4">Size</h5>
<div className="grid grid-cols-3 gap-4">
<label className="relative">
<input className="sr-only peer" name="size" onChange={(e) => { updatePreview() }} type="radio" value="small" />
<div className="p-4 rounded-xl border border-amber-500/20 text-center cursor-pointer transition-all duration-300 peer-checked:border-amber-500/50 peer-checked:bg-amber-500/10 hover:border-amber-500/30" style={{background: `rgba(245, 158, 11, 0.03)`}}>
<div className="text-sm font-medium text-white mb-1">Small</div>
<div className="text-xs text-white/60">20g • $18</div>
</div>
</label>
<label className="relative">
<input checked className="sr-only peer" name="size" onChange={(e) => { updatePreview() }} type="radio" value="medium" />
<div className="p-4 rounded-xl border border-amber-500/20 text-center cursor-pointer transition-all duration-300 peer-checked:border-amber-500/50 peer-checked:bg-amber-500/10 hover:border-amber-500/30" style={{background: `rgba(245, 158, 11, 0.03)`}}>
<div className="text-sm font-medium text-white mb-1">Medium</div>
<div className="text-xs text-white/60">35g • $24</div>
</div>
</label>
<label className="relative">
<input className="sr-only peer" name="size" onChange={(e) => { updatePreview() }} type="radio" value="large" />
<div className="p-4 rounded-xl border border-amber-500/20 text-center cursor-pointer transition-all duration-300 peer-checked:border-amber-500/50 peer-checked:bg-amber-500/10 hover:border-amber-500/30" style={{background: `rgba(245, 158, 11, 0.03)`}}>
<div className="text-sm font-medium text-white mb-1">Large</div>
<div className="text-xs text-white/60">50g • $32</div>
</div>
</label>
</div>
</div>

<div>
<h5 className="text-lg font-medium text-white mb-4">Chocolate Base</h5>
<div className="space-y-3">
<label className="relative flex items-center">
<input checked className="sr-only peer" name="base" onChange={(e) => { updatePreview() }} type="radio" value="dark" />
<div className="flex items-center w-full p-4 rounded-xl border border-amber-500/20 cursor-pointer transition-all duration-300 peer-checked:border-amber-500/50 peer-checked:bg-amber-500/10 hover:border-amber-500/30" style={{background: `rgba(245, 158, 11, 0.03)`}}>
<div className="w-4 h-4 rounded-full bg-amber-900 mr-4"></div>
<div className="flex-1">
<div className="text-sm font-medium text-white">Dark Chocolate</div>
<div className="text-xs text-white/60">70% Cacao • Rich & Intense</div>
</div>
</div>
</label>
<label className="relative flex items-center">
<input className="sr-only peer" name="base" onChange={(e) => { updatePreview() }} type="radio" value="milk" />
<div className="flex items-center w-full p-4 rounded-xl border border-amber-500/20 cursor-pointer transition-all duration-300 peer-checked:border-amber-500/50 peer-checked:bg-amber-500/10 hover:border-amber-500/30" style={{background: `rgba(245, 158, 11, 0.03)`}}>
<div className="w-4 h-4 rounded-full bg-amber-600 mr-4"></div>
<div className="flex-1">
<div className="text-sm font-medium text-white">Milk Chocolate</div>
<div className="text-xs text-white/60">40% Cacao • Smooth & Creamy</div>
</div>
</div>
</label>
<label className="relative flex items-center">
<input className="sr-only peer" name="base" onChange={(e) => { updatePreview() }} type="radio" value="white" />
<div className="flex items-center w-full p-4 rounded-xl border border-amber-500/20 cursor-pointer transition-all duration-300 peer-checked:border-amber-500/50 peer-checked:bg-amber-500/10 hover:border-amber-500/30" style={{background: `rgba(245, 158, 11, 0.03)`}}>
<div className="w-4 h-4 rounded-full bg-amber-100 mr-4"></div>
<div className="flex-1">
<div className="text-sm font-medium text-white">White Chocolate</div>
<div className="text-xs text-white/60">Pure Cocoa Butter • Sweet & Delicate</div>
</div>
</div>
</label>
<label className="relative flex items-center">
<input className="sr-only peer" name="base" onChange={(e) => { updatePreview() }} type="radio" value="ruby" />
<div className="flex items-center w-full p-4 rounded-xl border border-amber-500/20 cursor-pointer transition-all duration-300 peer-checked:border-amber-500/50 peer-checked:bg-amber-500/10 hover:border-amber-500/30" style={{background: `rgba(245, 158, 11, 0.03)`}}>
<div className="w-4 h-4 rounded-full bg-pink-400 mr-4"></div>
<div className="flex-1">
<div className="text-sm font-medium text-white">Ruby Chocolate</div>
<div className="text-xs text-white/60">Natural Pink • Fruity & Unique • +$3</div>
</div>
</div>
</label>
</div>
</div>

<div>
<h5 className="text-lg font-medium text-white mb-4">Cosmic Toppings</h5>
<div className="grid grid-cols-2 gap-3">
<label className="relative flex items-center">
<input className="sr-only peer" name="toppings" onChange={(e) => { updatePreview() }} type="checkbox" value="stardust" />
<div className="flex items-center w-full p-3 rounded-xl border border-amber-500/20 cursor-pointer transition-all duration-300 peer-checked:border-amber-500/50 peer-checked:bg-amber-500/10 hover:border-amber-500/30" style={{background: `rgba(245, 158, 11, 0.03)`}}>
<div className="text-xs font-medium text-white">Galaxy Stardust</div>
<div className="ml-auto text-xs text-white/60">+$2</div>
</div>
</label>
<label className="relative flex items-center">
<input className="sr-only peer" name="toppings" onChange={(e) => { updatePreview() }} type="checkbox" value="meteors" />
<div className="flex items-center w-full p-3 rounded-xl border border-amber-500/20 cursor-pointer transition-all duration-300 peer-checked:border-amber-500/50 peer-checked:bg-amber-500/10 hover:border-amber-500/30" style={{background: `rgba(245, 158, 11, 0.03)`}}>
<div className="text-xs font-medium text-white">Meteor Crunch</div>
<div className="ml-auto text-xs text-white/60">+$3</div>
</div>
</label>
<label className="relative flex items-center">
<input className="sr-only peer" name="toppings" onChange={(e) => { updatePreview() }} type="checkbox" value="nebula" />
<div className="flex items-center w-full p-3 rounded-xl border border-amber-500/20 cursor-pointer transition-all duration-300 peer-checked:border-amber-500/50 peer-checked:bg-amber-500/10 hover:border-amber-500/30" style={{background: `rgba(245, 158, 11, 0.03)`}}>
<div className="text-xs font-medium text-white">Nebula Swirl</div>
<div className="ml-auto text-xs text-white/60">+$2</div>
</div>
</label>
<label className="relative flex items-center">
<input className="sr-only peer" name="toppings" onChange={(e) => { updatePreview() }} type="checkbox" value="moondust" />
<div className="flex items-center w-full p-3 rounded-xl border border-amber-500/20 cursor-pointer transition-all duration-300 peer-checked:border-amber-500/50 peer-checked:bg-amber-500/10 hover:border-amber-500/30" style={{background: `rgba(245, 158, 11, 0.03)`}}>
<div className="text-xs font-medium text-white">Moon Dust</div>
<div className="ml-auto text-xs text-white/60">+$2</div>
</div>
</label>
<label className="relative flex items-center">
<input className="sr-only peer" name="toppings" onChange={(e) => { updatePreview() }} type="checkbox" value="plasma" />
<div className="flex items-center w-full p-3 rounded-xl border border-amber-500/20 cursor-pointer transition-all duration-300 peer-checked:border-amber-500/50 peer-checked:bg-amber-500/10 hover:border-amber-500/30" style={{background: `rgba(245, 158, 11, 0.03)`}}>
<div className="text-xs font-medium text-white">Plasma Crystals</div>
<div className="ml-auto text-xs text-white/60">+$4</div>
</div>
</label>
<label className="relative flex items-center">
<input className="sr-only peer" name="toppings" onChange={(e) => { updatePreview() }} type="checkbox" value="comet" />
<div className="flex items-center w-full p-3 rounded-xl border border-amber-500/20 cursor-pointer transition-all duration-300 peer-checked:border-amber-500/50 peer-checked:bg-amber-500/10 hover:border-amber-500/30" style={{background: `rgba(245, 158, 11, 0.03)`}}>
<div className="text-xs font-medium text-white">Comet Tail</div>
<div className="ml-auto text-xs text-white/60">+$3</div>
</div>
</label>
</div>
</div>

<div>
<h5 className="text-lg font-medium text-white mb-4">Cosmic Shape</h5>
<div className="grid grid-cols-2 gap-4">
<label className="relative">
<input checked className="sr-only peer" name="shape" onChange={(e) => { updatePreview() }} type="radio" value="sphere" />
<div className="p-4 rounded-xl border border-amber-500/20 text-center cursor-pointer transition-all duration-300 peer-checked:border-amber-500/50 peer-checked:bg-amber-500/10 hover:border-amber-500/30" style={{background: `rgba(245, 158, 11, 0.03)`}}>
<div className="text-sm font-medium text-white mb-1">Planet Sphere</div>
<div className="text-xs text-white/60">Classic Round</div>
</div>
</label>
<label className="relative">
<input className="sr-only peer" name="shape" onChange={(e) => { updatePreview() }} type="radio" value="star" />
<div className="p-4 rounded-xl border border-amber-500/20 text-center cursor-pointer transition-all duration-300 peer-checked:border-amber-500/50 peer-checked:bg-amber-500/10 hover:border-amber-500/30" style={{background: `rgba(245, 158, 11, 0.03)`}}>
<div className="text-sm font-medium text-white mb-1">Star Shape</div>
<div className="text-xs text-white/60">+$2</div>
</div>
</label>
<label className="relative">
<input className="sr-only peer" name="shape" onChange={(e) => { updatePreview() }} type="radio" value="galaxy" />
<div className="p-4 rounded-xl border border-amber-500/20 text-center cursor-pointer transition-all duration-300 peer-checked:border-amber-500/50 peer-checked:bg-amber-500/10 hover:border-amber-500/30" style={{background: `rgba(245, 158, 11, 0.03)`}}>
<div className="text-sm font-medium text-white mb-1">Galaxy Spiral</div>
<div className="text-xs text-white/60">+$3</div>
</div>
</label>
<label className="relative">
<input className="sr-only peer" name="shape" onChange={(e) => { updatePreview() }} type="radio" value="rocket" />
<div className="p-4 rounded-xl border border-amber-500/20 text-center cursor-pointer transition-all duration-300 peer-checked:border-amber-500/50 peer-checked:bg-amber-500/10 hover:border-amber-500/30" style={{background: `rgba(245, 158, 11, 0.03)`}}>
<div className="text-sm font-medium text-white mb-1">Rocket Ship</div>
<div className="text-xs text-white/60">+$4</div>
</div>
</label>
</div>
</div>

<div>
<h5 className="text-lg font-medium text-white mb-4">Quantity</h5>
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-xl border border-amber-500/20 flex items-center justify-center hover:border-amber-500/40 transition-colors duration-300" onClick={(e) => { updateQuantity(-1) }} style={{background: `rgba(245, 158, 11, 0.05)`}}>
<i className="w-4 h-4 text-white" data-lucide="minus"></i>
</button>
<span className="text-xl font-medium text-white min-w-8 text-center" id="quantity">1</span>
<button className="w-10 h-10 rounded-xl border border-amber-500/20 flex items-center justify-center hover:border-amber-500/40 transition-colors duration-300" onClick={(e) => { updateQuantity(1) }} style={{background: `rgba(245, 158, 11, 0.05)`}}>
<i className="w-4 h-4 text-white" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-amber-500/20">
<button className="flex-1 py-4 px-6 rounded-xl text-sm font-medium text-white border border-amber-500/40 hover:border-amber-500/60 transition-all duration-300" onClick={(e) => { addToCart() }} style={{background: `rgba(245, 158, 11, 0.2)`}}>
            Add to Cart
          </button>
<button className="flex-1 py-4 px-6 rounded-xl text-sm font-medium text-white/80 border border-white/20 hover:border-white/30 transition-all duration-300" onClick={(e) => { closeCustomize() }} style={{background: `rgba(255, 255, 255, 0.05)`}}>
            Cancel
          </button>
</div>
</div>
</div>
</div>

<div className="relative z-10 min-h-screen">

<nav className="fixed top-0 left-0 right-0 z-40 px-6 py-6">
<div className="max-w-4xl mx-auto border border-amber-500/20 rounded-full px-6 py-3" style={{background: `rgba(10, 11, 20, 0.9)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="flex items-center justify-between">
<div className="flex items-center">
<span className="text-lg font-semibold tracking-tight text-white" style={{fontFamily: `'Manrope', sans-serif`}}>CosmicChoco</span>
</div>
<ul className="hidden md:flex items-center gap-1 text-sm font-medium text-white/60">
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5" href="#">Collections</a></li>
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5" href="#space-chocolates">Space Chocolates</a></li>
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5" href="#">Artisans</a></li>
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5" href="#">Stories</a></li>
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5" href="#">Contact</a></li>
</ul>
<div className="flex items-center gap-2">
<button aria-label="Account" className="hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<i className="w-4 h-4 stroke-[1.5] text-white/60" data-lucide="user"></i>
</button>
<button aria-label="Cart" className="relative hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5" onClick={(e) => { openCart() }} style={{background: `rgba(255, 255, 255, 0.02)`}}>
<i className="w-4 h-4 stroke-[1.5] text-white/60" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-white text-xs rounded-full flex items-center justify-center font-medium" id="cartCount">3</span>
</button>
</div>
</div>
</div>
</nav>

<section className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="order-2 lg:order-1">
<div className="p-10 lg:p-12 shadow-2xl border border-amber-500/20 rounded-3xl" style={{background: `rgba(139, 69, 19, 0.1)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>

<div className="flex items-center gap-3 mb-8">
<div className="flex items-center gap-0.5">
<i className="w-3.5 h-3.5 stroke-[1.5] text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 stroke-[1.5] text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 stroke-[1.5] text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 stroke-[1.5] text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 stroke-[1.5] text-amber-400 fill-amber-400" data-lucide="star"></i>
</div>
<span className="text-xs font-medium text-white/50">4.9 • 12,847 chocolate lovers</span>
</div>

<h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-8 font-medium" style={{fontFamily: `'Manrope', sans-serif`}}>
              Taste the<br />
<span className="text-amber-400 font-medium" style={{fontFamily: `'Manrope', sans-serif`}}>universe</span> in chocolate.
            </h1>

<p className="text-lg text-white/60 leading-relaxed mb-12">
              Discover our celestial collection of artisan chocolates, crafted with rare ingredients from around the world. Each piece tells a cosmic story of flavor, texture, and pure indulgence.
            </p>

<div className="flex flex-col sm:flex-row gap-4 mb-16">
<button className="inline-flex items-center justify-center px-8 py-4 rounded-xl hover:bg-amber-500/20 text-white text-sm font-medium border border-amber-500/30 transition-all duration-300 hover:border-amber-500/50" style={{background: `rgba(245, 158, 11, 0.15)`}}>
<span>Shop Collections</span>
<i className="w-4 h-4 stroke-[1.5] ml-2" data-lucide="shopping-cart"></i>
</button>
<button className="inline-flex items-center justify-center px-8 py-4 rounded-xl hover:bg-white/5 text-white/80 text-sm font-medium border border-white/10 transition-all duration-300 hover:border-white/20" style={{background: `rgba(255, 255, 255, 0.03)`}}>
<i className="w-4 h-4 stroke-[1.5] mr-2" data-lucide="play"></i>
<span>Watch Craft Process</span>
</button>
</div>

<div className="grid grid-cols-3 gap-8">
<div className="text-center">
<div className="w-10 h-10 flex border-white/10 border rounded-xl mx-auto mb-3 items-center justify-center" style={{background: `rgba(255, 255, 255, 0.03)`}}>
<i className="w-4 h-4 stroke-[1.5] text-white" data-lucide="award"></i>
</div>
<div className="text-xs font-medium text-white/70">Premium Quality</div>
</div>
<div className="text-center">
<div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/10" style={{background: `rgba(255, 255, 255, 0.03)`}}>
<i className="w-4 h-4 stroke-[1.5] text-white" data-lucide="leaf"></i>
</div>
<div className="text-xs font-medium text-white/70">Organic Sourced</div>
</div>
<div className="text-center">
<div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/10" style={{background: `rgba(255, 255, 255, 0.03)`}}>
<i className="w-4 h-4 stroke-[1.5] text-white" data-lucide="truck"></i>
</div>
<div className="text-xs font-medium text-white/70">Fresh Delivery</div>
</div>
</div>
</div>
</div>

<div className="relative order-1 lg:order-2">
<div className="overflow-hidden border border-amber-500/20 rounded-3xl shadow-2xl" style={{background: `rgba(139, 69, 19, 0.1)`}}>

<div className="absolute top-8 left-8 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium border border-amber-500/30 z-10" style={{background: `rgba(245, 158, 11, 0.2)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="w-2 h-2 bg-amber-400 rounded-full"></div>
<span className="text-white">Limited Edition</span>
</div>

<div className="w-full h-[500px] lg:h-[650px] bg-gradient-to-br from-amber-900/30 to-yellow-900/20 flex items-center justify-center">
<div className="text-center">
<i className="w-24 h-24 stroke-[1] text-amber-400 mx-auto mb-4" data-lucide="sparkles"></i>
<p className="text-white/60 text-lg">Artisan Chocolate Collection</p>
</div>
</div>

<div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-6">
<div className="border-amber-500/20 border rounded-2xl p-6" style={{background: `rgba(245, 158, 11, 0.15)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="text-2xl text-white font-medium" style={{fontFamily: `'Manrope', sans-serif`}}>50+</div>
<div className="text-sm text-white/60 mt-1">Flavor Varieties</div>
</div>
<div className="rounded-2xl p-6 border border-amber-500/20" style={{background: `rgba(245, 158, 11, 0.15)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="text-2xl text-white font-medium" style={{fontFamily: `'Manrope', sans-serif`}}>100%</div>
<div className="text-sm text-white/60 mt-1">Satisfaction Rate</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24" id="space-chocolates">
<div className="p-12 lg:p-16 border border-amber-500/20 rounded-3xl" style={{background: `rgba(139, 69, 19, 0.05)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="text-center mb-16">
<p className="uppercase text-sm font-medium text-white/40 tracking-wide mb-3">Featured Collection</p>
<h3 className="text-3xl lg:text-4xl text-white tracking-tight mb-6 font-medium" style={{fontFamily: `'Manrope', sans-serif`}}>Space Chocolates</h3>
<p className="text-lg text-white/60 max-w-3xl mx-auto">Embark on an interstellar journey with our signature space-themed chocolates. Each piece is designed to capture the wonder of the cosmos in exquisite flavors.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="rounded-2xl border border-amber-500/20 overflow-hidden" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<div className="h-48 bg-gradient-to-br from-purple-900/50 to-blue-900/30 flex items-center justify-center">
<i className="w-16 h-16 text-purple-400" data-lucide="sparkles"></i>
</div>
<div className="p-6">
<h4 className="text-lg font-semibold text-white mb-2">Nebula Truffle</h4>
<p className="text-sm text-white/60 mb-4">Dark chocolate infused with cosmic berry flavors and shimmering edible glitter</p>
<div className="flex items-center justify-between">
<span className="text-xl font-medium text-white" style={{fontFamily: `'Manrope', sans-serif`}}>$28</span>
<button className="px-4 py-2 rounded-xl text-sm font-medium text-white border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 hover:bg-amber-500/10" onClick={(e) => { openCustomize('Nebula Truffle') }} style={{background: `rgba(245, 158, 11, 0.08)`}}>
                  Customize
                </button>
</div>
</div>
</div>

<div className="rounded-2xl border border-amber-500/20 overflow-hidden" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<div className="h-48 bg-gradient-to-br from-indigo-900/50 to-pink-900/30 flex items-center justify-center">
<i className="w-16 h-16 text-pink-400" data-lucide="circle"></i>
</div>
<div className="p-6">
<h4 className="text-lg font-semibold text-white mb-2">Galaxy Sphere</h4>
<p className="text-sm text-white/60 mb-4">Milk chocolate sphere with swirling galaxy patterns and popping candy</p>
<div className="flex items-center justify-between">
<span className="text-xl font-medium text-white" style={{fontFamily: `'Manrope', sans-serif`}}>$32</span>
<button className="px-4 py-2 rounded-xl text-sm font-medium text-white border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 hover:bg-amber-500/10" onClick={(e) => { openCustomize('Galaxy Sphere') }} style={{background: `rgba(245, 158, 11, 0.08)`}}>
                  Customize
                </button>
</div>
</div>
</div>

<div className="rounded-2xl border border-amber-500/20 overflow-hidden" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<div className="h-48 bg-gradient-to-br from-yellow-900/50 to-orange-900/30 flex items-center justify-center">
<i className="w-16 h-16 text-yellow-400" data-lucide="zap"></i>
</div>
<div className="p-6">
<h4 className="text-lg font-semibold text-white mb-2">Comet Tail</h4>
<p className="text-sm text-white/60 mb-4">White chocolate comet with caramel center and gold leaf trail</p>
<div className="flex items-center justify-between">
<span className="text-xl font-medium text-white" style={{fontFamily: `'Manrope', sans-serif`}}>$35</span>
<button className="px-4 py-2 rounded-xl text-sm font-medium text-white border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 hover:bg-amber-500/10" onClick={(e) => { openCustomize('Comet Tail') }} style={{background: `rgba(245, 158, 11, 0.08)`}}>
                  Customize
                </button>
</div>
</div>
</div>

<div className="rounded-2xl border border-amber-500/20 overflow-hidden" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<div className="h-48 bg-gradient-to-br from-red-900/50 to-gray-900/30 flex items-center justify-center">
<i className="w-16 h-16 text-red-400" data-lucide="star"></i>
</div>
<div className="p-6">
<h4 className="text-lg font-semibold text-white mb-2">Meteor Crunch</h4>
<p className="text-sm text-white/60 mb-4">Dark chocolate meteor with crunchy honeycomb center and space dust</p>
<div className="flex items-center justify-between">
<span className="text-xl font-medium text-white" style={{fontFamily: `'Manrope', sans-serif`}}>$30</span>
<button className="px-4 py-2 rounded-xl text-sm font-medium text-white border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 hover:bg-amber-500/10" onClick={(e) => { openCustomize('Meteor Crunch') }} style={{background: `rgba(245, 158, 11, 0.08)`}}>
                  Customize
                </button>
</div>
</div>
</div>

<div className="rounded-2xl border border-amber-500/20 overflow-hidden" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<div className="h-48 bg-gradient-to-br from-green-900/50 to-teal-900/30 flex items-center justify-center">
<i className="w-16 h-16 text-green-400" data-lucide="diamond"></i>
</div>
<div className="p-6">
<h4 className="text-lg font-semibold text-white mb-2">Plasma Crystal</h4>
<p className="text-sm text-white/60 mb-4">Ruby chocolate crystal with mint plasma filling and electric blue shimmer</p>
<div className="flex items-center justify-between">
<span className="text-xl font-medium text-white" style={{fontFamily: `'Manrope', sans-serif`}}>$38</span>
<button className="px-4 py-2 rounded-xl text-sm font-medium text-white border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 hover:bg-amber-500/10" onClick={(e) => { openCustomize('Plasma Crystal') }} style={{background: `rgba(245, 158, 11, 0.08)`}}>
                  Customize
                </button>
</div>
</div>
</div>

<div className="rounded-2xl border border-amber-500/20 overflow-hidden" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<div className="h-48 bg-gradient-to-br from-blue-900/50 to-purple-900/30 flex items-center justify-center">
<i className="w-16 h-16 text-blue-400" data-lucide="rocket"></i>
</div>
<div className="p-6">
<h4 className="text-lg font-semibold text-white mb-2">Rocket Ship</h4>
<p className="text-sm text-white/60 mb-4">Multi-layer chocolate rocket with strawberry fuel and silver details</p>
<div className="flex items-center justify-between">
<span className="text-xl font-medium text-white" style={{fontFamily: `'Manrope', sans-serif`}}>$42</span>
<button className="px-4 py-2 rounded-xl text-sm font-medium text-white border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 hover:bg-amber-500/10" onClick={(e) => { openCustomize('Rocket Ship') }} style={{background: `rgba(245, 158, 11, 0.08)`}}>
                  Customize
                </button>
</div>
</div>
</div>
</div>

<div className="text-center mt-16 pt-12 border-t border-amber-500/20">
<h4 className="text-lg font-medium text-white mb-6">Quick Order Options</h4>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-medium text-white border border-amber-500/40 hover:border-amber-500/60 transition-all duration-300" onClick={(e) => { openCustomize('Custom Space Chocolate') }} style={{background: `rgba(245, 158, 11, 0.2)`}}>
<i className="w-4 h-4 mr-2" data-lucide="settings"></i>
              Create Custom Space Chocolate
            </button>
<button className="inline-flex items-center justify-center px-6 py-4 rounded-xl text-sm font-medium text-white/80 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5" onClick={(e) => { addPresetToCart('Space Collection Gift Set', 89) }} style={{background: `rgba(255, 255, 255, 0.02)`}}>
<i className="w-4 h-4 mr-2" data-lucide="gift"></i>
              Space Collection Gift Set
            </button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
<div className="p-12 lg:p-16 border border-amber-500/20 rounded-3xl" style={{background: `rgba(139, 69, 19, 0.05)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="text-center mb-12">
<p className="uppercase text-sm font-medium text-white/40 tracking-wide mb-3">Trusted Sources</p>
<h3 className="text-2xl text-white tracking-tight mb-4 font-medium" style={{fontFamily: `'Manrope', sans-serif`}}>Premium Cacao Partners Worldwide</h3>
<p className="text-base text-white/60 max-w-2xl mx-auto">Our chocolates are crafted from the finest cacao beans, sourced directly from sustainable farms across the globe, ensuring exceptional quality and ethical practices.</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-amber-500/10" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<span className="text-lg font-semibold text-white/60 hover:text-white/80 transition-colors duration-300 tracking-tight mb-2">MADAGASCAR</span>
<p className="text-xs text-white/40">Vanilla Beans</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-amber-500/10" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<span className="text-lg font-semibold text-white/60 hover:text-white/80 transition-colors duration-300 tracking-tight mb-2">ECUADOR</span>
<p className="text-xs text-white/40">Fine Cacao</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-amber-500/10" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<span className="text-lg font-semibold text-white/60 hover:text-white/80 transition-colors duration-300 tracking-tight mb-2">BELGIUM</span>
<p className="text-xs text-white/40">Craft Techniques</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-amber-500/10" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<span className="text-lg font-semibold text-white/60 hover:text-white/80 transition-colors duration-300 tracking-tight mb-2">PERU</span>
<p className="text-xs text-white/40">Organic Cacao</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-amber-500/10" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<span className="text-lg font-semibold text-white/60 hover:text-white/80 transition-colors duration-300 tracking-tight mb-2">SWITZERLAND</span>
<p className="text-xs text-white/40">Alpine Cream</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-amber-500/10" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<span className="text-lg font-semibold text-white/60 hover:text-white/80 transition-colors duration-300 tracking-tight mb-2">FRANCE</span>
<p className="text-xs text-white/40">Artisan Mastery</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="text-center">
<div className="text-3xl text-white mb-2 font-medium" style={{fontFamily: `'Manrope', sans-serif`}}>99.8%</div>
<p className="text-sm text-white/60">Pure Cacao Quality</p>
</div>
<div className="text-center">
<div className="text-3xl text-white mb-2 font-medium" style={{fontFamily: `'Manrope', sans-serif`}}>25+</div>
<p className="text-sm text-white/60">Years Expertise</p>
</div>
<div className="text-center">
<div className="text-3xl text-white mb-2 font-medium" style={{fontFamily: `'Manrope', sans-serif`}}>200+</div>
<p className="text-sm text-white/60">Unique Creations</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
<div className="p-12 lg:p-16 border border-amber-500/20 rounded-3xl" style={{background: `rgba(139, 69, 19, 0.05)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="text-center mb-16">
<p className="uppercase text-sm font-medium text-white/40 tracking-wide mb-3">Chocolate Collections</p>
<h3 className="text-3xl lg:text-4xl text-white tracking-tight mb-6 font-medium" style={{fontFamily: `'Manrope', sans-serif`}}>Choose Your Celestial Journey</h3>
<p className="text-lg text-white/60 max-w-3xl mx-auto">From single-origin delights to complex flavor symphonies, discover collections that transport your senses beyond the ordinary. Each piece is handcrafted with precision and passion.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="relative rounded-2xl border border-amber-500/20 p-8" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<div className="mb-8">
<h4 className="text-xl font-semibold text-white mb-2">Stellar Selection</h4>
<p className="text-sm text-white/60 mb-6">Experience our curated collection of 12 artisan chocolates featuring classic flavors with cosmic twists.</p>
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white font-medium" style={{fontFamily: `'Manrope', sans-serif`}}>$89</span>
<span className="text-sm text-white/40">per box</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-400 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-sm text-white/70">12 handcrafted pieces</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-400 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-sm text-white/70">Single-origin cacao</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-400 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-sm text-white/70">Elegant gift packaging</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-400 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-sm text-white/70">Flavor journey guide</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-400 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-sm text-white/70">Free shipping</span>
</li>
</ul>
<button className="w-full py-4 px-6 rounded-xl text-sm font-medium text-white border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 hover:bg-amber-500/10" onClick={(e) => { addPresetToCart('Stellar Selection', 89) }} style={{background: `rgba(245, 158, 11, 0.08)`}}>
              Add to Cart
            </button>
</div>

<div className="relative rounded-2xl border border-amber-500/40 p-8" style={{background: `rgba(245, 158, 11, 0.1)`}}>
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
<span className="px-4 py-1 text-xs font-medium text-white rounded-full border border-amber-500/40" style={{background: `rgba(245, 158, 11, 0.2)`}}>Most Popular</span>
</div>
<div className="mb-8">
<h4 className="text-xl font-semibold text-white mb-2">Galaxy Explorer</h4>
<p className="text-sm text-white/60 mb-6">Our signature collection featuring 24 unique chocolates with exotic ingredients from around the world.</p>
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white font-medium" style={{fontFamily: `'Manrope', sans-serif`}}>$179</span>
<span className="text-sm text-white/40">per box</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-400 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-sm text-white/70">24 signature pieces</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-400 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-sm text-white/70">Rare ingredient infusions</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-400 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-sm text-white/70">Luxury presentation box</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-400 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-sm text-white/70">Tasting notes & pairings</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-400 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-sm text-white/70">Personalized message card</span>
</li>
</ul>
<button className="w-full py-4 px-6 rounded-xl text-sm font-medium text-white border border-amber-500/40 hover:border-amber-500/60 transition-all duration-300" onClick={(e) => { addPresetToCart('Galaxy Explorer', 179) }} style={{background: `rgba(245, 158, 11, 0.2)`}}>
              Add to Cart
            </button>
</div>

<div className="relative rounded-2xl border border-amber-500/20 p-8" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<div className="mb-8">
<h4 className="text-xl font-semibold text-white mb-2">Universe Masterpiece</h4>
<p className="text-sm text-white/60 mb-6">The ultimate chocolate experience with 48 exclusive pieces, including limited-edition flavors and premium ingredients.</p>
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white font-medium" style={{fontFamily: `'Manrope', sans-serif`}}>$399</span>
<span className="text-sm text-white/40">per box</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-400 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-sm text-white/70">48 masterpiece chocolates</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-400 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-sm text-white/70">Limited edition flavors</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-400 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-sm text-white/70">Hand-numbered collector's box</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-400 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-sm text-white/70">Master chocolatier's journal</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-400 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-sm text-white/70">VIP access to new releases</span>
</li>
</ul>
<button className="w-full py-4 px-6 rounded-xl text-sm font-medium text-white border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 hover:bg-amber-500/10" onClick={(e) => { addPresetToCart('Universe Masterpiece', 399) }} style={{background: `rgba(245, 158, 11, 0.08)`}}>
              Reserve Now
            </button>
</div>
</div>
<div className="text-center mt-16 pt-12 border-t border-amber-500/20">
<p className="text-sm text-white/60 mb-6">All collections include temperature-controlled shipping and our satisfaction guarantee. Custom gifting options available.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium text-white border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 hover:bg-amber-500/10" style={{background: `rgba(245, 158, 11, 0.08)`}}>
<i className="w-4 h-4 mr-2" data-lucide="phone"></i>
              Schedule Tasting
            </button>
<button className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium text-white/80 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<i className="w-4 h-4 mr-2" data-lucide="file-text"></i>
              Download Catalog
            </button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
<div className="p-12 lg:p-16 border border-amber-500/20 rounded-3xl" style={{background: `rgba(139, 69, 19, 0.05)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="text-center mb-16">
<p className="uppercase text-sm font-medium text-white/40 tracking-wide mb-3">Support</p>
<h3 className="text-3xl lg:text-4xl text-white tracking-tight mb-6 font-medium" style={{fontFamily: `'Manrope', sans-serif`}}>Frequently Asked Questions</h3>
<p className="text-lg text-white/60 max-w-3xl mx-auto">Everything you need to know about our chocolates, ingredients, storage, and ordering process.</p>
</div>
<div className="max-w-4xl mx-auto space-y-6">

<div className="rounded-2xl border border-amber-500/20 overflow-hidden" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-amber-500/10 transition-all duration-300" onClick={(e) => { toggleFaq(e.currentTarget) }}>
<span className="text-lg font-medium text-white">What makes your chocolates special?</span>
<i className="w-5 h-5 text-white/60 transform transition-transform duration-300" data-lucide="chevron-down"></i>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed">Our chocolates are crafted using single-origin cacao beans from sustainable farms, combined with rare ingredients like Madagascar vanilla, Himalayan salt, and exotic spices. Each piece is hand-tempered by master chocolatiers using traditional techniques passed down through generations.</p>
</div>
</div>
<div className="rounded-2xl border border-amber-500/20 overflow-hidden" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-amber-500/10 transition-all duration-300" onClick={(e) => { toggleFaq(e.currentTarget) }}>
<span className="text-lg font-medium text-white">How should I store my chocolates?</span>
<i className="w-5 h-5 text-white/60 transform transition-transform duration-300" data-lucide="chevron-down"></i>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed">Store chocolates in a cool, dry place at 60-68°F (15-20°C) away from direct sunlight and strong odors. Our chocolates have a shelf life of 12 months when stored properly. For optimal flavor, allow chocolates to come to room temperature before enjoying.</p>
</div>
</div>
<div className="rounded-2xl border border-amber-500/20 overflow-hidden" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-amber-500/10 transition-all duration-300" onClick={(e) => { toggleFaq(e.currentTarget) }}>
<span className="text-lg font-medium text-white">Do you accommodate dietary restrictions?</span>
<i className="w-5 h-5 text-white/60 transform transition-transform duration-300" data-lucide="chevron-down"></i>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed">Yes, we offer vegan, sugar-free, and gluten-free options in all our collections. Our facility is also nut-aware, and we clearly label all allergens. Please contact us for custom collections tailored to specific dietary needs.</p>
</div>
</div>
</div>
<div className="text-center mt-16 pt-12 border-t border-amber-500/20">
<p className="text-sm text-white/60 mb-6">Have more questions? Our chocolate experts are here to help you find the perfect selection.</p>
<button className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-medium text-white border border-amber-500/40 hover:border-amber-500/60 transition-all duration-300" style={{background: `rgba(245, 158, 11, 0.2)`}}>
<i className="w-4 h-4 mr-2" data-lucide="message-circle"></i>
            Contact Support
          </button>
</div>
</div>
</section>

<footer className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
<div className="p-12 lg:p-16 border border-amber-500/20 rounded-3xl" style={{background: `rgba(139, 69, 19, 0.05)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<div className="flex items-center mb-6">
<span className="text-xl font-semibold tracking-tight text-white" style={{fontFamily: `'Manrope', sans-serif`}}>CosmicChoco</span>
</div>
<p className="text-sm text-white/60 leading-relaxed mb-8">Crafting celestial chocolate experiences that transport your senses beyond the ordinary, one exquisite piece at a time.</p>
<div className="flex items-center gap-4">
<a aria-label="Instagram" className="w-10 h-10 rounded-xl flex items-center justify-center border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:bg-amber-500/10" href="#" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<i className="w-4 h-4 text-white" data-lucide="instagram"></i>
</a>
<a aria-label="Facebook" className="w-10 h-10 rounded-xl flex items-center justify-center border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:bg-amber-500/10" href="#" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<i className="w-4 h-4 text-white" data-lucide="facebook"></i>
</a>
<a aria-label="Twitter" className="w-10 h-10 rounded-xl flex items-center justify-center border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:bg-amber-500/10" href="#" style={{background: `rgba(245, 158, 11, 0.05)`}}>
<i className="w-4 h-4 text-white" data-lucide="twitter"></i>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Collections</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Stellar Selection</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Galaxy Explorer</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Universe Masterpiece</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#space-chocolates">Space Chocolates</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Custom Orders</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Experience</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Tasting Events</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Factory Tours</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Chocolate Making</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Gift Experiences</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Corporate Events</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Support</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Help Center</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Contact Us</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Shipping Info</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Returns</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Gift Cards</a></li>
</ul>
</div>
</div>

<div className="border-t border-amber-500/20 pt-12 mb-12">
<div className="max-w-2xl mx-auto text-center">
<h4 className="text-lg font-medium text-white mb-4">Join Our Chocolate Universe</h4>
<p className="text-sm text-white/60 mb-8">Subscribe for exclusive access to new collections, special offers, and chocolate-making insights.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<input className="flex-1 max-w-md px-4 py-3 rounded-xl text-sm text-white placeholder-white/40 border border-amber-500/20 focus:border-amber-500/40 focus:outline-none transition-all duration-300" placeholder="Enter your email address" style={{background: `rgba(245, 158, 11, 0.1)`}} type="email" />
<button className="px-8 py-3 rounded-xl text-sm font-medium text-white border border-amber-500/40 hover:border-amber-500/60 transition-all duration-300" style={{background: `rgba(245, 158, 11, 0.2)`}}>
                Subscribe
              </button>
</div>
</div>
</div>

<div className="border-t border-amber-500/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-wrap items-center gap-6 text-xs text-white/40">
<span>© 2024 CosmicChoco. All rights reserved.</span>
<a className="hover:text-white/60 transition-colors duration-300" href="#">Privacy Policy</a>
<a className="hover:text-white/60 transition-colors duration-300" href="#">Terms of Service</a>
</div>
<div className="flex items-center gap-4 text-xs text-white/40">
<span className="flex items-center gap-2">
<i className="w-3 h-3 text-green-400" data-lucide="check-circle"></i>
              Organic Certified
            </span>
<span className="flex items-center gap-2">
<i className="w-3 h-3 text-amber-400" data-lucide="heart"></i>
              Ethically Sourced
            </span>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
