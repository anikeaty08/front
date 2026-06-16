import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons();

    // Mobile menu toggle
    const toggleBtn = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    toggleBtn?.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = toggleBtn.querySelector('[data-lucide]');
      if (mobileMenu.classList.contains('hidden')) {
        icon.setAttribute('data-lucide', 'menu');
      } else {
        icon.setAttribute('data-lucide', 'x');
      }
      lucide.createIcons();
    });

    // Shopping cart functionality
    let cart = [];
    const cartCount = document.getElementById('cart-count');
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Customization modal
    const customizeModal = document.getElementById('customize-modal');
    const customizeTitle = document.getElementById('customize-title');
    const customizeTotal = document.getElementById('customize-total');
    let currentFruit = null;

    // Customize fruit buttons
    document.querySelectorAll('.customize-fruit').forEach(button => {
      button.addEventListener('click', function() {
        currentFruit = {
          name: this.dataset.name,
          price: parseFloat(this.dataset.price),
          image: this.dataset.image
        };
        customizeTitle.textContent = `Customize ${currentFruit.name}`;
        updateCustomizeTotal();
        customizeModal.classList.remove('hidden');
      });
    });

    // Close customization modal
    document.getElementById('customize-close').addEventListener('click', () => {
      customizeModal.classList.add('hidden');
    });

    customizeModal.addEventListener('click', (e) => {
      if (e.target === customizeModal) {
        customizeModal.classList.add('hidden');
      }
    });

    // Quantity controls
    let quantity = 1;
    document.getElementById('qty-minus').addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').textContent = quantity;
        updateCustomizeTotal();
      }
    });

    document.getElementById('qty-plus').addEventListener('click', () => {
      quantity++;
      document.getElementById('quantity').textContent = quantity;
      updateCustomizeTotal();
    });

    // Sweetness slider
    const sweetnessSlider = document.getElementById('sweetness');
    const sweetnessLabel = document.getElementById('sweetness-label');
    const sweetnessLevels = ['Mild', 'Light', 'Medium Sweet', 'Sweet', 'Very Sweet'];

    sweetnessSlider.addEventListener('input', () => {
      const value = parseInt(sweetnessSlider.value);
      sweetnessLabel.textContent = sweetnessLevels[value - 1];
    });

    // Update customize total
    function updateCustomizeTotal() {
      if (!currentFruit) return;
      
      let total = currentFruit.price * quantity;
      
      // Add enhancement costs
      document.querySelectorAll('input[name="enhancements"]:checked').forEach(checkbox => {
        if (checkbox.value === 'organic-boost') total += 0.50;
        if (checkbox.value === 'vitamin-enriched') total += 0.75;
        if (checkbox.value === 'antioxidant-rich') total += 0.60;
      });
      
      customizeTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Listen for enhancement changes
    document.querySelectorAll('input[name="enhancements"]').forEach(checkbox => {
      checkbox.addEventListener('change', updateCustomizeTotal);
    });

    // Add customized fruit to cart
    document.getElementById('add-customized-fruit').addEventListener('click', () => {
      if (!currentFruit) return;

      const appearance = document.querySelector('input[name="appearance"]:checked').value;
      const texture = document.querySelector('input[name="texture"]:checked').value;
      const sweetness = sweetnessLevels[parseInt(sweetnessSlider.value) - 1];
      const enhancements = Array.from(document.querySelectorAll('input[name="enhancements"]:checked'))
        .map(cb => cb.value);

      let basePrice = currentFruit.price;
      enhancements.forEach(enhancement => {
        if (enhancement === 'organic-boost') basePrice += 0.50;
        if (enhancement === 'vitamin-enriched') basePrice += 0.75;
        if (enhancement === 'antioxidant-rich') basePrice += 0.60;
      });

      const customName = `${appearance.charAt(0).toUpperCase() + appearance.slice(1)} ${currentFruit.name} (${texture}, ${sweetness})`;
      
      const existingItem = cart.find(item => item.name === customName);
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.push({
          name: customName,
          price: basePrice,
          image: currentFruit.image,
          quantity: quantity
        });
      }

      updateCart();
      customizeModal.classList.add('hidden');
      
      // Reset form
      quantity = 1;
      document.getElementById('quantity').textContent = quantity;
      document.querySelectorAll('input[name="enhancements"]').forEach(cb => cb.checked = false);
      sweetnessSlider.value = 3;
      sweetnessLabel.textContent = 'Medium Sweet';
    });

    // Cart modal toggle
    document.getElementById('cart-toggle').addEventListener('click', () => {
      cartModal.classList.remove('hidden');
    });

    document.getElementById('cart-close').addEventListener('click', () => {
      cartModal.classList.add('hidden');
    });

    cartModal.addEventListener('click', (e) => {
      if (e.target === cartModal) {
        cartModal.classList.add('hidden');
      }
    });

    // Update cart display
    function updateCart() {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      // Update cart count
      if (totalItems > 0) {
        cartCount.textContent = totalItems;
        cartCount.classList.remove('hidden');
      } else {
        cartCount.classList.add('hidden');
      }

      // Update cart items
      if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-slate-500 font-geist text-center py-8">Your cart is empty</p>';
        checkoutBtn.disabled = true;
      } else {
        cartItems.innerHTML = cart.map(item => `
          <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
            <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded-lg">
            <div class="flex-1">
              <h4 class="font-medium text-slate-900 text-sm font-geist">${item.name}</h4>
              <p class="text-slate-600 text-sm font-geist">$${item.price.toFixed(2)} × ${item.quantity}</p>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="changeQuantity('${item.name}', -1)" class="w-6 h-6 flex items-center justify-center bg-white border rounded text-slate-600 hover:bg-slate-100">-</button>
              <span class="text-sm font-medium w-8 text-center">${item.quantity}</span>
              <button onclick="changeQuantity('${item.name}', 1)" class="w-6 h-6 flex items-center justify-center bg-white border rounded text-slate-600 hover:bg-slate-100">+</button>
            </div>
          </div>
        `).join('');
        checkoutBtn.disabled = false;
      }

      // Update total
      cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Change quantity function
    function changeQuantity(name, change) {
      const item = cart.find(item => item.name === name);
      if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
          cart = cart.filter(cartItem => cartItem.name !== name);
        }
        updateCart();
      }
    }

    // Make changeQuantity available globally
    window.changeQuantity = changeQuantity;

    // Checkout functionality
    checkoutBtn.addEventListener('click', () => {
      if (cart.length > 0) {
        alert('Order placed successfully! You will receive a confirmation email shortly.');
        cart = [];
        updateCart();
        cartModal.classList.add('hidden');
      }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
<div className="sm:p-10 lg:p-14 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-orange-50 rounded-3xl pt-6 pr-6 pb-6 pl-6">

<nav className="relative z-10">
<div className="flex sm:px-6 bg-white rounded-full pt-3 pr-4 pb-3 pl-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-between">

<a className="flex items-center gap-2" href="#">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white">
<i className="w-5 h-5" data-lucide="apple" style={{strokeWidth: '1.5'}}></i>
</span>
<span className="text-base font-medium tracking-tight hidden sm:block text-slate-900 font-geist">FreshHarvest</span>
</a>

<div className="hidden absolute top-16 left-0 right-0 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:hidden" id="mobile-menu">
<ul className="space-y-4 text-sm font-medium">
<li><a className="block text-slate-900 hover:text-orange-600 font-geist" href="#fruits">Fresh Fruits</a></li>
<li><a className="block text-slate-600 hover:text-orange-600 font-geist" href="#">Organic Vegetables</a></li>
<li><a className="block text-slate-600 hover:text-orange-600 font-geist" href="#">Seasonal</a></li>
<li><a className="block text-slate-600 hover:text-orange-600 font-geist" href="#">Recipes</a></li>
</ul>
<div className="mt-6 pt-4 border-t border-gray-200">
<a className="block w-full text-center px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-sm font-medium shadow-sm transition hover:from-orange-600 hover:to-red-600 text-white font-geist" href="#fruits">Order Now</a>
</div>
</div>

<ul className="hidden sm:flex items-center gap-8 text-sm font-medium">
<li><a className="text-slate-900 hover:text-orange-600 font-geist" href="#fruits">Fresh Fruits</a></li>
<li><a className="text-slate-500 hover:text-orange-600 font-geist" href="#">Organic Vegetables</a></li>
<li><a className="text-slate-500 hover:text-orange-600 font-geist" href="#">Seasonal</a></li>
<li><a className="text-slate-500 hover:text-orange-600 font-geist" href="#">Recipes</a></li>
</ul>

<div className="hidden sm:flex items-center gap-4">
<button className="relative p-2 text-slate-600 hover:text-orange-600" id="cart-toggle">
<i className="w-5 h-5" data-lucide="shopping-cart" style={{strokeWidth: '1.5'}}></i>
<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center hidden" id="cart-count">0</span>
</button>
<a className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-sm font-medium shadow-sm transition hover:from-orange-600 hover:to-red-600 text-white font-geist" href="#fruits">Order Now</a>
</div>

<button className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-slate-100" id="nav-toggle">
<i className="w-5 h-5" data-lucide="menu" style={{strokeWidth: '1.5'}}></i>
</button>
</div>

<div className="hidden fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4" id="cart-modal">
<div className="bg-white rounded-t-2xl sm:rounded-2xl w-full sm:max-w-md">
<div className="p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-medium text-slate-900 font-jakarta">Shopping Cart</h3>
<button className="p-2 hover:bg-slate-100 rounded-lg" id="cart-close">
<i className="w-5 h-5" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="space-y-4 max-h-64 overflow-y-auto" id="cart-items">
<p className="text-slate-500 font-geist text-center py-8">Your cart is empty</p>
</div>
<div className="border-t pt-4 mt-6">
<div className="flex justify-between items-center mb-4">
<span className="font-medium text-slate-900 font-geist">Total:</span>
<span className="font-medium text-slate-900 font-geist" id="cart-total">$0.00</span>
</div>
<button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 transition disabled:opacity-50" disabled="" id="checkout-btn">
                  Checkout
                </button>
</div>
</div>
</div>
</div>
</nav>

<div className="mt-12 grid md:grid-cols-2 gap-10 items-center">

<div>
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-medium text-slate-900 tracking-tight font-jakarta">Farm Fresh. Naturally Delicious. Delivered Daily.</h1>
<p className="mt-6 text-lg max-w-lg text-slate-600 font-geist">Experience the finest selection of premium fruits and organic foods, sourced directly from local farms and delivered fresh to your doorstep.</p>
<div className="mt-8 flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 font-medium shadow-sm transition hover:from-orange-600 hover:to-red-600 text-white font-geist" href="#fruits">Shop Fresh Now</a>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full border font-medium transition border-slate-300 hover:border-slate-400 text-slate-900 font-geist" href="#fruits">View Catalog</a>
</div>
<div className="mt-16 flex items-start gap-12">
<div>
<p className="text-4xl text-slate-900 font-jakarta font-medium">5000+</p>
<p className="mt-1 text-sm text-slate-600 font-geist">happy customers</p>
</div>
<div className="w-px h-12 hidden md:block bg-slate-300"></div>
<div>
<p className="text-4xl text-slate-900 font-jakarta font-medium">99%</p>
<p className="mt-1 text-sm text-slate-600 font-geist">freshness guarantee</p>
</div>
</div>
</div>

<div className="relative h-[340px] sm:h-[420px] lg:h-[480px]">
<div className="absolute inset-0 -translate-x-4 sm:-translate-x-8">
<img alt="Fresh fruits and vegetables" className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
</div>
</div>

<section className="mt-20" id="fruits">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 font-jakarta">Fresh Fruits Available Today</h2>
<p className="mt-4 max-w-2xl text-lg text-slate-600 font-geist">Handpicked premium fruits delivered fresh from our partner farms. Customize your perfect fruit selection.</p>
<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-orange-100 overflow-hidden">
<img alt="Fresh Strawberries" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="p-6">
<h3 className="text-xl font-medium text-slate-900 font-jakarta">Organic Strawberries</h3>
<p className="mt-2 text-slate-600 font-geist text-sm">Sweet, juicy strawberries packed with vitamin C</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-2xl font-medium text-slate-900 font-jakarta">$4.99<span className="text-sm text-slate-500 font-geist">/lb</span></span>
<button className="customize-fruit px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 transition font-geist" data-image="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80" data-name="Organic Strawberries" data-price="4.99">
                  Customize &amp; Add
                </button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-orange-100 overflow-hidden">
<img alt="Fresh Bananas" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="p-6">
<h3 className="text-xl font-medium text-slate-900 font-jakarta">Premium Bananas</h3>
<p className="mt-2 text-slate-600 font-geist text-sm">Perfectly ripe bananas, great source of potassium</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-2xl font-medium text-slate-900 font-jakarta">$2.49<span className="text-sm text-slate-500 font-geist">/lb</span></span>
<button className="customize-fruit px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 transition font-geist" data-image="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80" data-name="Premium Bananas" data-price="2.49">
                  Customize &amp; Add
                </button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-orange-100 overflow-hidden">
<img alt="Fresh Apples" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="p-6">
<h3 className="text-xl font-medium text-slate-900 font-jakarta">Honeycrisp Apples</h3>
<p className="mt-2 text-slate-600 font-geist text-sm">Crisp, sweet apples perfect for snacking</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-2xl font-medium text-slate-900 font-jakarta">$3.99<span className="text-sm text-slate-500 font-geist">/lb</span></span>
<button className="customize-fruit px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 transition font-geist" data-image="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80" data-name="Honeycrisp Apples" data-price="3.99">
                  Customize &amp; Add
                </button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-orange-100 overflow-hidden">
<img alt="Fresh Oranges" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="p-6">
<h3 className="text-xl font-medium text-slate-900 font-jakarta">Valencia Oranges</h3>
<p className="mt-2 text-slate-600 font-geist text-sm">Juicy oranges bursting with natural sweetness</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-2xl font-medium text-slate-900 font-jakarta">$3.49<span className="text-sm text-slate-500 font-geist">/lb</span></span>
<button className="customize-fruit px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 transition font-geist" data-image="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80" data-name="Valencia Oranges" data-price="3.49">
                  Customize &amp; Add
                </button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-orange-100 overflow-hidden">
<img alt="Fresh Blueberries" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="p-6">
<h3 className="text-xl font-medium text-slate-900 font-jakarta">Organic Blueberries</h3>
<p className="mt-2 text-slate-600 font-geist text-sm">Antioxidant-rich blueberries, perfect for smoothies</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-2xl font-medium text-slate-900 font-jakarta">$5.99<span className="text-sm text-slate-500 font-geist">/pint</span></span>
<button className="customize-fruit px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 transition font-geist" data-image="https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80" data-name="Organic Blueberries" data-price="5.99">
                  Customize &amp; Add
                </button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-orange-100 overflow-hidden">
<img alt="Fresh Pineapple" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="p-6">
<h3 className="text-xl font-medium text-slate-900 font-jakarta">Golden Pineapple</h3>
<p className="mt-2 text-slate-600 font-geist text-sm">Sweet tropical pineapple, perfectly ripened</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-2xl font-medium text-slate-900 font-jakarta">$6.99<span className="text-sm text-slate-500 font-geist">/each</span></span>
<button className="customize-fruit px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 transition font-geist" data-image="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80" data-name="Golden Pineapple" data-price="6.99">
                  Customize &amp; Add
                </button>
</div>
</div>
</div>
</div>
</section>

<div className="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" id="customize-modal">
<div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
<div className="p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-medium text-slate-900 font-jakarta" id="customize-title">Customize Your Fruit</h3>
<button className="p-2 hover:bg-slate-100 rounded-lg" id="customize-close">
<i className="w-5 h-5" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="space-y-6">

<div>
<h4 className="font-medium text-slate-900 mb-3 font-jakarta">Appearance Style</h4>
<div className="grid grid-cols-2 gap-2">
<label className="flex items-center p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
<input className="mr-3 text-orange-500" name="appearance" type="radio" value="golden"/>
<div className="flex items-center gap-2">
<span className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></span>
<span className="text-sm font-geist">Golden</span>
</div>
</label>
<label className="flex items-center p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
<input className="mr-3 text-orange-500" name="appearance" type="radio" value="rainbow"/>
<div className="flex items-center gap-2">
<span className="w-4 h-4 bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 rounded-full"></span>
<span className="text-sm font-geist">Rainbow</span>
</div>
</label>
<label className="flex items-center p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
<input checked="" className="mr-3 text-orange-500" name="appearance" type="radio" value="natural"/>
<div className="flex items-center gap-2">
<span className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></span>
<span className="text-sm font-geist">Natural</span>
</div>
</label>
<label className="flex items-center p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
<input className="mr-3 text-orange-500" name="appearance" type="radio" value="glossy"/>
<div className="flex items-center gap-2">
<span className="w-4 h-4 bg-gradient-to-r from-slate-300 to-slate-500 rounded-full"></span>
<span className="text-sm font-geist">Glossy</span>
</div>
</label>
</div>
</div>

<div>
<h4 className="font-medium text-slate-900 mb-3 font-jakarta">Texture Preference</h4>
<div className="space-y-2">
<label className="flex items-center p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
<input checked="" className="mr-3 text-orange-500" name="texture" type="radio" value="juicy"/>
<div>
<span className="text-sm font-medium font-geist">Extra Juicy</span>
<p className="text-xs text-slate-500 font-geist">Maximum juice content for refreshing taste</p>
</div>
</label>
<label className="flex items-center p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
<input className="mr-3 text-orange-500" name="texture" type="radio" value="crispy"/>
<div>
<span className="text-sm font-medium font-geist">Crispy &amp; Firm</span>
<p className="text-xs text-slate-500 font-geist">Perfect crunch with every bite</p>
</div>
</label>
<label className="flex items-center p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
<input className="mr-3 text-orange-500" name="texture" type="radio" value="soft"/>
<div>
<span className="text-sm font-medium font-geist">Soft &amp; Tender</span>
<p className="text-xs text-slate-500 font-geist">Melts in your mouth texture</p>
</div>
</label>
<label className="flex items-center p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
<input className="mr-3 text-orange-500" name="texture" type="radio" value="wet"/>
<div>
<span className="text-sm font-medium font-geist">Wet &amp; Succulent</span>
<p className="text-xs text-slate-500 font-geist">Extra moisture for intense flavor</p>
</div>
</label>
</div>
</div>

<div>
<h4 className="font-medium text-slate-900 mb-3 font-jakarta">Sweetness Level</h4>
<div className="flex items-center gap-2">
<span className="text-sm text-slate-600 font-geist">Less Sweet</span>
<input className="flex-1 accent-orange-500" id="sweetness" max="5" min="1" type="range" value="3"/>
<span className="text-sm text-slate-600 font-geist">Very Sweet</span>
</div>
<div className="mt-2 text-center">
<span className="text-sm font-medium text-orange-600 font-geist" id="sweetness-label">Medium Sweet</span>
</div>
</div>

<div>
<h4 className="font-medium text-slate-900 mb-3 font-jakarta">Special Enhancements</h4>
<div className="space-y-2">
<label className="flex items-center p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
<input className="mr-3 text-orange-500" name="enhancements" type="checkbox" value="organic-boost"/>
<div>
<span className="text-sm font-medium font-geist">Organic Boost (+$0.50)</span>
<p className="text-xs text-slate-500 font-geist">Enhanced with organic nutrients</p>
</div>
</label>
<label className="flex items-center p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
<input className="mr-3 text-orange-500" name="enhancements" type="checkbox" value="vitamin-enriched"/>
<div>
<span className="text-sm font-medium font-geist">Vitamin Enriched (+$0.75)</span>
<p className="text-xs text-slate-500 font-geist">Extra vitamins and minerals</p>
</div>
</label>
<label className="flex items-center p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
<input className="mr-3 text-orange-500" name="enhancements" type="checkbox" value="antioxidant-rich"/>
<div>
<span className="text-sm font-medium font-geist">Antioxidant Rich (+$0.60)</span>
<p className="text-xs text-slate-500 font-geist">Boosted antioxidant content</p>
</div>
</label>
</div>
</div>

<div>
<h4 className="font-medium text-slate-900 mb-3 font-jakarta">Quantity</h4>
<div className="flex items-center gap-4">
<button className="w-10 h-10 flex items-center justify-center border border-slate-300 rounded-lg hover:bg-slate-50" id="qty-minus" type="button">-</button>
<span className="text-xl font-medium text-slate-900 w-12 text-center font-jakarta" id="quantity">1</span>
<button className="w-10 h-10 flex items-center justify-center border border-slate-300 rounded-lg hover:bg-slate-50" id="qty-plus" type="button">+</button>
</div>
</div>

<div className="border-t pt-4">
<div className="flex justify-between items-center mb-4">
<span className="font-medium text-slate-900 font-jakarta">Total Price:</span>
<span className="text-2xl font-medium text-slate-900 font-jakarta" id="customize-total">$4.99</span>
</div>
<button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 transition font-geist" id="add-customized-fruit">
                  Add to Cart
                </button>
</div>
</div>
</div>
</div>
</div>

<section className="mt-20">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 font-jakarta">Why Choose FreshHarvest</h2>
<p className="mt-4 max-w-2xl text-lg text-slate-600 font-geist">Discover what makes our fruits and foods the premium choice for health-conscious families.</p>
<div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
<div className="flex flex-col items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-orange-100">
<i className="w-7 h-7 text-green-600" data-lucide="leaf" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-xl font-medium text-slate-900 font-jakarta">100% Organic</h3>
<p className="text-slate-600 font-geist text-base">Certified organic produce grown without harmful pesticides or chemicals.</p>
</div>
<div className="flex flex-col items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-orange-100">
<i className="w-7 h-7 text-orange-600" data-lucide="truck" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-xl font-medium text-slate-900 font-jakarta">Farm to Door</h3>
<p className="text-slate-600 font-geist text-base">Direct delivery from local farms ensures maximum freshness and quality.</p>
</div>
<div className="flex flex-col items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-orange-100">
<i className="w-7 h-7 text-blue-600" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-xl font-medium text-slate-900 font-jakarta">Daily Fresh</h3>
<p className="text-slate-600 font-geist text-base">Harvested daily to guarantee peak ripeness and nutritional value.</p>
</div>
<div className="flex flex-col items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-orange-100">
<i className="w-7 h-7 text-red-500" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-xl font-medium text-slate-900 font-jakarta">Health First</h3>
<p className="text-slate-600 font-geist text-base">Nutrient-rich selections curated by nutrition experts for optimal health.</p>
</div>
</div>
</section>

<section className="mt-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 lg:p-12 text-center shadow-lg">
<h2 className="text-3xl font-medium tracking-tight font-jakarta text-white">Ready to Taste the Difference?</h2>
<p className="mt-4 text-lg font-geist text-orange-100 max-w-xl mx-auto">Join thousands of families who choose FreshHarvest for premium quality fruits and organic foods. Start your healthy journey today.</p>
<div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-orange-600 font-medium shadow-md hover:bg-orange-50 transition font-geist" href="#fruits">Browse Products</a>
<a className="inline-flex items-center justify-center rounded-full border border-white px-8 py-3 text-white font-medium shadow-md hover:bg-orange-400 hover:border-orange-400 transition font-geist" href="#fruits">Get Started</a>
</div>
</section>
</div>
</main>


    </>
  );
}
