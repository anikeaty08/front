import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Cart functionality
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      
      // Parallax and scroll effects
      let ticking = false;
      
      function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Update scroll progress
        const scrollIndicator = document.querySelector('.scroll-indicator');
        const scrollPercent = (scrolled / (document.body.scrollHeight - window.innerHeight)) * 100;
        scrollIndicator.style.transform = `scaleX(${Math.min(scrollPercent / 100, 1)})`;
        
        // Parallax elements
        document.querySelectorAll('.parallax-element').forEach(element => {
          const speed = element.dataset.speed || 0.5;
          const yPos = -(scrolled * speed);
          element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
      }
      
      function requestTick() {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      }
      
      // Intersection Observer for fade-in animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);
      
      // Enhanced flying animation
      function createFlyingAnimation(button, product) {
        // Get button and cart positions
        const buttonRect = button.getBoundingClientRect();
        const cartIcon = document.querySelector('#cart-trigger');
        const cartRect = cartIcon.getBoundingClientRect();
        
        // Find the product image in the same card
        const productCard = button.closest('.group');
        const productImage = productCard.querySelector('.product-image');
        const imageRect = productImage.getBoundingClientRect();
        
        // Create flying element
        const flyingElement = document.createElement('div');
        flyingElement.className = 'flying-product';
        flyingElement.style.cssText = `
          left: ${imageRect.left}px;
          top: ${imageRect.top}px;
          width: ${imageRect.width}px;
          height: ${imageRect.height}px;
          background-image: url('${product.image}');
          background-size: cover;
          background-position: center;
          z-index: 9999;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        `;
        
        document.body.appendChild(flyingElement);
        
        // Add ripple effect to button
        const ripple = document.createElement('div');
        ripple.className = 'success-ripple';
        ripple.style.cssText = `
          left: 50%;
          top: 50%;
          width: 20px;
          height: 20px;
          margin-left: -10px;
          margin-top: -10px;
        `;
        button.style.position = 'relative';
        button.appendChild(ripple);
        
        // Button success state
        const originalContent = button.innerHTML;
        button.classList.add('button-success');
        button.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
            <path d="M5 12l5 5L20 7"></path>
          </svg>
          Added!
        `;
        
        // Animate to cart
        requestAnimationFrame(() => {
          flyingElement.style.transform = `
            translate(${cartRect.left - imageRect.left + 10}px, ${cartRect.top - imageRect.top + 10}px) 
            scale(0.2) 
            rotate(360deg)
          `;
          flyingElement.style.opacity = '0.8';
        });
        
        // Add cart shake animation
        cartIcon.classList.add('cart-icon-shake');
        
        // Add product card pulse
        productCard.classList.add('product-added-pulse');
        
        // Cleanup animations
        setTimeout(() => {
          document.body.removeChild(flyingElement);
          button.classList.remove('button-success');
          button.innerHTML = originalContent;
          cartIcon.classList.remove('cart-icon-shake');
          productCard.classList.remove('product-added-pulse');
          ripple.remove();
        }, 800);
      }
      
      // Update cart display
      function updateCartDisplay() {
        const cartCount = document.getElementById('cart-count');
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const emptyCart = document.getElementById('empty-cart');
        const cartFooter = document.getElementById('cart-footer');
        
        // Update cart count
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.classList.add('cart-bounce');
        setTimeout(() => cartCount.classList.remove('cart-bounce'), 300);
        
        // Calculate total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `$${total}`;
        
        // Show/hide empty state
        if (cart.length === 0) {
          emptyCart.style.display = 'block';
          cartFooter.style.display = 'none';
          cartItems.innerHTML = '';
        } else {
          emptyCart.style.display = 'none';
          cartFooter.style.display = 'block';
          
          // Render cart items
          cartItems.innerHTML = cart.map(item => `
            <div class="flex items-center gap-4 bg-zinc-900/60 glass-effect border border-zinc-800/60 rounded-xl p-4">
              <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover">
              <div class="flex-1">
                <h4 class="font-semibold text-sm">${item.name}</h4>
                <p class="text-zinc-400 text-xs">$${item.price} each</p>
              </div>
              <div class="flex items-center gap-3">
                <div class="flex items-center gap-2">
                  <button class="quantity-btn w-6 h-6 rounded bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors" onclick="updateQuantity('${item.id}', -1)">-</button>
                  <span class="text-sm w-6 text-center">${item.quantity}</span>
                  <button class="quantity-btn w-6 h-6 rounded bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors" onclick="updateQuantity('${item.id}', 1)">+</button>
                </div>
                <button class="text-zinc-400 hover:text-red-400 transition-colors" onclick="removeFromCart('${item.id}')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                </button>
              </div>
            </div>
          `).join('');
        }
        
        // Save to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
      }
      
      // Add to cart function with animation
      function addToCart(product, button) {
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cart.push({ ...product, quantity: 1 });
        }
        
        // Create flying animation
        createFlyingAnimation(button, product);
        
        // Update display after animation starts
        setTimeout(() => {
          updateCartDisplay();
          showNotification(`${product.name} added to cart!`);
        }, 100);
      }
      
      // Update quantity
      function updateQuantity(id, change) {
        const item = cart.find(item => item.id === id);
        if (item) {
          item.quantity += change;
          if (item.quantity <= 0) {
            removeFromCart(id);
          } else {
            updateCartDisplay();
          }
        }
      }
      
      // Remove from cart
      function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        updateCartDisplay();
      }
      
      // Show notification
      function showNotification(message) {
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notification-text');
        
        notificationText.textContent = message;
        notification.style.transform = 'translateX(0)';
        
        setTimeout(() => {
          notification.style.transform = 'translateX(100%)';
        }, 3000);
      }
      
      // Cart sidebar toggle
      function toggleCart() {
        const sidebar = document.getElementById('cart-sidebar');
        const overlay = document.getElementById('cart-overlay');
        const isOpen = !sidebar.classList.contains('translate-x-full');
        
        if (isOpen) {
          sidebar.classList.add('translate-x-full');
          overlay.classList.add('opacity-0', 'pointer-events-none');
        } else {
          sidebar.classList.remove('translate-x-full');
          overlay.classList.remove('opacity-0', 'pointer-events-none');
        }
      }
      
      // Event listeners
      document.addEventListener('DOMContentLoaded', function() {
        // Initialize cart display
        updateCartDisplay();
        
        // Set up parallax
        window.addEventListener('scroll', requestTick, { passive: true });
        
        // Set up intersection observers
        document.querySelectorAll('.section-fade').forEach(el => {
          observer.observe(el);
        });
        
        // Initial parallax update
        updateParallax();
        
        // Cart toggle
        document.getElementById('cart-trigger').addEventListener('click', toggleCart);
        document.getElementById('close-cart').addEventListener('click', toggleCart);
        document.getElementById('cart-overlay').addEventListener('click', toggleCart);
        
        // Add to cart buttons with enhanced animation
        document.querySelectorAll('.add-to-cart').forEach(button => {
          button.addEventListener('click', function(e) {
            e.preventDefault();
            const product = {
              id: this.dataset.id,
              name: this.dataset.name,
              price: parseInt(this.dataset.price),
              image: this.dataset.image
            };
            addToCart(product, this);
          });
        });
        
        // Wishlist buttons
        document.querySelectorAll('.wishlist-btn').forEach(button => {
          button.addEventListener('click', function() {
            const icon = this.querySelector('svg');
            const isLiked = icon.classList.contains('fill-red-400');
            
            if (isLiked) {
              icon.classList.remove('fill-red-400', 'text-red-400');
              icon.classList.add('text-zinc-300');
              showNotification('Removed from wishlist');
            } else {
              icon.classList.add('fill-red-400', 'text-red-400');
              icon.classList.remove('text-zinc-300');
              showNotification('Added to wishlist');
            }
          });
        });
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        });
        
        // Search functionality
        const searchInput = document.querySelector('input[placeholder="Search products..."]');
        if (searchInput) {
          searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
              showNotification(`Searching for "${this.value}"...`);
              this.value = '';
            }
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="scroll-indicator" style={{transform: 'scaleX(0)'}}></div>

<div className="parallax-bg">

<div className="grid-pattern"></div>

<div className="aurora"></div>

<div className="floating-shapes">
<div className="shape shape-1"></div>
<div className="shape shape-2"></div>
<div className="shape shape-3"></div>
<div className="shape shape-4"></div>
<div className="shape shape-5"></div>
</div>

<div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-emerald-500/8 via-emerald-500/4 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-purple-500/5 via-pink-500/5 to-orange-500/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '60s'}}></div>
</div>

<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-zinc-800/20 to-zinc-900/10 rounded-full blur-3xl parallax-element" data-speed="0.5" style={{transform: 'translateY(0px)'}}></div>
<div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-zinc-800/15 to-zinc-900/5 rounded-full blur-3xl parallax-element" data-speed="0.3" style={{transform: 'translateY(0px)'}}></div>
</div>

<div className="fixed top-4 right-4 z-[100] transform translate-x-full transition-all duration-300" id="notification">
<div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-emerald-400/20">
<div className="relative">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12l5 5L20 7"></path></svg>
<div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
</div>
<span id="notification-text">Item added to cart!</span>
</div>
</div>

<div className="fixed inset-y-0 right-0 z-[60] w-96 transform translate-x-full transition-transform duration-300 ease-in-out" id="cart-sidebar">
<div className="flex h-full flex-col bg-zinc-950/95 glass-effect border-l border-zinc-800/60 shadow-2xl">
<div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/60">
<h2 className="text-lg font-semibold">Shopping Cart</h2>
<button className="p-2 hover:bg-zinc-900/60 rounded-lg transition-colors" id="close-cart">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg>
</button>
</div>
<div className="flex-1 overflow-y-auto px-6 py-4">
<div className="space-y-4" id="cart-items"></div>
<div className="text-center py-12" id="empty-cart" style={{display: 'block'}}>
<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-800/60 flex items-center justify-center">
<svg className="w-6 h-6 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</div>
<p className="text-zinc-400">Your cart is empty</p>
</div>
</div>
<div className="border-t border-zinc-800/60 px-6 py-4 space-y-4" id="cart-footer" style={{display: 'none'}}>
<div className="flex items-center justify-between text-lg font-semibold">
<span>Total</span>
<span id="cart-total">$0</span>
</div>
<button className="w-full bg-zinc-100 text-zinc-900 py-3 rounded-xl font-semibold hover:bg-zinc-200 transition-colors">
            Checkout
          </button>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/50 z-[50] opacity-0 pointer-events-none transition-opacity duration-300" id="cart-overlay"></div>

<div className="relative w-full bg-gradient-to-r from-zinc-900/80 via-zinc-900/60 to-zinc-900/80 glass-effect border-b border-zinc-800/40">
<div className="mx-auto max-w-7xl px-6 py-3 text-center">
<div className="inline-flex items-center gap-2 text-sm text-zinc-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400/90 animate-pulse"></span>
          Free shipping on orders over $75 · Easy 30-day returns
        </div>
</div>
</div>

<header className="sticky top-0 z-50 bg-zinc-950/80 glass-effect supports-[backdrop-filter]:bg-zinc-950/70 border-b border-zinc-800/40">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-20 items-center justify-between">

<a className="inline-flex items-center gap-3 group" href="#">
<div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 text-zinc-900 flex items-center justify-center font-semibold tracking-tight leading-none group-hover:scale-105 transition-transform duration-300 shadow-lg">
              N
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent"></div>
</div>
<span className="group-hover:text-zinc-100 transition-colors text-lg font-medium text-zinc-200 tracking-tight">NovaMart</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="relative text-zinc-300 hover:text-zinc-100 transition-colors group" href="#">
              New
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-100 group-hover:w-full transition-all duration-300"></span>
</a>
<a className="relative text-zinc-300 hover:text-zinc-100 transition-colors group" href="#">
              Best Sellers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-100 group-hover:w-full transition-all duration-300"></span>
</a>
<a className="relative text-zinc-300 hover:text-zinc-100 transition-colors group" href="#">
              Collections
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-100 group-hover:w-full transition-all duration-300"></span>
</a>
<a className="relative text-zinc-300 hover:text-zinc-100 transition-colors group" href="#">
              Accessories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-100 group-hover:w-full transition-all duration-300"></span>
</a>
<a className="relative text-zinc-300 hover:text-zinc-100 transition-colors group" href="#">
              Support
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-100 group-hover:w-full transition-all duration-300"></span>
</a>
</nav>

<div className="flex items-center gap-2">
<div className="hidden sm:flex items-center bg-zinc-900/60 glass-effect border border-zinc-800/60 rounded-xl px-4 py-2.5 focus-within:border-zinc-700/60 focus-within:bg-zinc-900/80 transition-all duration-300 min-w-[240px]">
<svg className="lucide lucide-search w-4 h-4 text-zinc-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="bg-transparent placeholder:text-zinc-500 text-sm text-zinc-200 focus:outline-none px-3 flex-1" placeholder="Search products..." type="text"/>
</div>
<button aria-label="Account" className="p-2.5 rounded-xl hover:bg-zinc-900/60 hover:scale-105 transition-all duration-300 border border-transparent hover:border-zinc-800/60">
<svg className="lucide lucide-user w-5 h-5 text-zinc-300" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
<button aria-label="Cart" className="relative p-2.5 rounded-xl hover:bg-zinc-900/60 hover:scale-105 transition-all duration-300 border border-transparent hover:border-zinc-800/60" id="cart-trigger">
<svg className="lucide lucide-shopping-bag w-5 h-5 text-zinc-300" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-1 -right-1 text-[10px] leading-none bg-emerald-400 text-zinc-900 rounded-full px-1.5 py-1 font-semibold shadow-lg" id="cart-count">0</span>
</button>
<button aria-label="Menu" className="md:hidden p-2.5 rounded-xl hover:bg-zinc-900/60 transition-all duration-300">
<svg className="lucide lucide-menu w-5 h-5 text-zinc-300" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden section-fade visible">
<div className="lg:pt-32 lg:pb-24 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-16 pl-6 relative">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-3 rounded-full border border-zinc-800/60 bg-zinc-900/50 glass-effect px-4 py-2 text-sm text-zinc-300 shadow-xl section-fade stagger-1 visible">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="font-medium">Just dropped: Series 4 Essentials</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-bold text-zinc-50 leading-[0.9] section-fade stagger-2 parallax-element visible" data-speed="0.2" style={{transform: 'translateY(0px)'}}>
<span className="bg-gradient-to-r from-zinc-100 via-zinc-50 to-zinc-200 bg-clip-text text-transparent">
                Shop the future
              </span>
<br/>
<span className="text-zinc-300">of everyday essentials</span>
</h1>
<p className="text-zinc-400 text-lg sm:text-xl max-w-xl leading-relaxed section-fade stagger-3 visible">
              Thoughtfully designed pieces that blend precision, comfort, and durability—so you can do your best work anywhere.
            </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4 section-fade stagger-4 visible">
<a className="group inline-flex items-center justify-center gap-3 bg-zinc-100 text-zinc-900 rounded-xl px-8 py-4 text-base font-semibold hover:bg-zinc-200 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl" href="#featured">
<span>Shop new arrivals</span>
<svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group inline-flex items-center justify-center gap-3 rounded-xl bg-zinc-900/60 glass-effect border border-zinc-800/60 text-zinc-200 px-8 py-4 text-base font-semibold hover:bg-zinc-900/80 hover:scale-[1.02] transition-all duration-300 shadow-lg" href="#categories">
<span>Explore collections</span>
<svg className="lucide lucide-grid w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
</a>
</div>

<div className="flex items-center gap-8 pt-6 section-fade stagger-4 visible">
<div className="flex -space-x-3">
<img alt="Customer" className="h-12 w-12 rounded-full ring-3 ring-zinc-950 object-cover hover:scale-110 transition-transform cursor-pointer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b561a0b-b1a0-43a5-ac03-852308f05daa_320w.jpg"/>
<img alt="Customer" className="h-12 w-12 rounded-full ring-3 ring-zinc-950 object-cover hover:scale-110 transition-transform cursor-pointer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46ced6a9-43d9-4cb3-9d41-e60c4df9040e_320w.jpg"/>
<img alt="Customer" className="h-12 w-12 rounded-full ring-3 ring-zinc-950 object-cover hover:scale-110 transition-transform cursor-pointer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/44a363ff-a90a-4404-9439-cd5fb9f91c5d_320w.jpg"/>
<div className="h-12 w-12 rounded-full ring-3 ring-zinc-950 bg-zinc-800 flex items-center justify-center text-sm font-semibold text-zinc-300">+7k</div>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<div className="flex">
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a .53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-sm font-semibold text-amber-400">4.9</span>
</div>
<p className="text-sm text-zinc-400">
<span className="font-semibold text-zinc-300">10,000+</span> happy customers
                </p>
</div>
</div>
</div>

<div className="relative parallax-element" data-speed="0.1" style={{transform: 'translateY(0px)'}}>
<div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-800/60 shadow-2xl bg-zinc-900/40 glass-effect animate-float">
<img alt="Hero product" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&amp;w=2060&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
</div>

<div className="absolute -bottom-8 -left-8 sm:left-8 md:-left-12 lg:-left-16 w-[85%] sm:w-[75%] rounded-2xl bg-zinc-950/90 glass-effect border border-zinc-800/60 shadow-2xl animate-float parallax-element" data-speed="0.15" style={{animationDelay: '-3s', transform: 'translateY(0px)'}}>
<div className="p-5 sm:p-6 flex items-center gap-4 sm:gap-5">
<div className="relative">
<img alt="Compact Wallet" className="h-20 w-20 rounded-xl object-cover border border-zinc-800/60" src="https://images.unsplash.com/photo-1639789972200-4c5dafacb6fd?w=800&amp;q=80"/>
<div className="absolute -top-2 -right-2 h-6 w-6 bg-emerald-400 rounded-full flex items-center justify-center">
<svg className="lucide lucide-check w-3 h-3 text-zinc-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12l5 5L20 7"></path></svg>
</div>
</div>
<div className="min-w-0 flex-1">
<h3 className="text-base font-semibold tracking-tight text-zinc-100">Compact Smart Wallet</h3>
<p className="text-sm text-zinc-400 mt-1">RFID · Full-grain leather</p>
<div className="mt-3 flex items-center gap-2">
<span className="h-4 w-4 rounded-full bg-zinc-200 border-2 border-zinc-700/80 cursor-pointer hover:scale-110 transition-transform"></span>
<span className="h-4 w-4 rounded-full bg-zinc-500 border-2 border-zinc-700/80 cursor-pointer hover:scale-110 transition-transform"></span>
<span className="h-4 w-4 rounded-full bg-amber-500 border-2 border-zinc-700/80 cursor-pointer hover:scale-110 transition-transform"></span>
</div>
</div>
<div className="text-right">
<div className="text-lg text-zinc-100 font-semibold">$59</div>
<button className="mt-3 add-to-cart inline-flex items-center gap-2 rounded-xl bg-zinc-100 text-zinc-900 px-4 py-2 text-sm font-semibold hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-lg" data-id="wallet" data-image="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" data-name="Compact Smart Wallet" data-price="59">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                    Add
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative mx-auto max-w-7xl px-6 pb-16">
<div className="section-fade visible border-zinc-800/40 border-t pt-12">
<p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8 text-center">Trusted by teams at</p>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
<div className="text-lg font-bold tracking-tight text-zinc-400 hover:text-zinc-300 transition-colors cursor-pointer">ALPHA</div>
<div className="text-lg font-bold tracking-tight text-zinc-400 hover:text-zinc-300 transition-colors cursor-pointer">KITE</div>
<div className="text-lg font-bold tracking-tight text-zinc-400 hover:text-zinc-300 transition-colors cursor-pointer">VECTOR</div>
<div className="text-lg font-bold tracking-tight text-zinc-400 hover:text-zinc-300 transition-colors cursor-pointer">LUME</div>
<div className="text-lg font-bold tracking-tight text-zinc-400 hover:text-zinc-300 transition-colors cursor-pointer col-span-2 sm:col-span-1">NOVA</div>
</div>
</div>
</div>
</section>

<section className="relative mx-auto max-w-7xl px-6 py-20 section-fade visible" id="categories">
<div className="flex items-end justify-between mb-12">
<div className="parallax-element" data-speed="0.1" style={{transform: 'translateY(0px)'}}>
<h2 className="text-4xl sm:text-5xl tracking-tight font-bold bg-gradient-to-r from-zinc-100 to-zinc-300 bg-clip-text text-transparent">Shop by category</h2>
<p className="mt-3 text-zinc-400 text-lg">Discover our curated collections</p>
</div>
<a className="group text-base text-zinc-300 hover:text-zinc-100 transition-colors inline-flex items-center gap-2 font-medium" href="#">
          View all
          <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<a className="group relative rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900/40 glass-effect hover:bg-zinc-900/60 hover:scale-[1.02] transition-all duration-500 shadow-xl parallax-element stagger-1" data-speed="0.05" href="#" style={{transform: 'translateY(0px)'}}>
<div className="relative">
<img alt="Wearables" className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/efa4c7a4-8174-4f7d-a86e-fb32a8e19bcd_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent"></div>
</div>
<div className="absolute bottom-0 p-6 flex items-end justify-between w-full">
<div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Wearables</h3>
<p className="text-zinc-400">Minimal watches &amp; bands</p>
</div>
<div className="p-3 rounded-xl bg-zinc-950/80 glass-effect border border-zinc-800/60 group-hover:scale-110 group-hover:bg-zinc-100 group-hover:text-zinc-900 transition-all duration-300">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>
<a className="group relative rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900/40 glass-effect hover:bg-zinc-900/60 hover:scale-[1.02] transition-all duration-500 shadow-xl parallax-element stagger-2" data-speed="0.05" href="#" style={{transform: 'translateY(0px)'}}>
<div className="relative">
<img alt="Home" className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc64ea1e-0deb-42bd-90e4-d27f24d644c9_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent"></div>
</div>
<div className="absolute bottom-0 p-6 flex items-end justify-between w-full">
<div className="">
<h3 className="text-xl font-semibold tracking-tight mb-2">Home</h3>
<p className="text-zinc-400">Scent, light, and mood</p>
</div>
<div className="p-3 rounded-xl bg-zinc-950/80 glass-effect border border-zinc-800/60 group-hover:scale-110 group-hover:bg-zinc-100 group-hover:text-zinc-900 transition-all duration-300">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>
<a className="group relative rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900/40 glass-effect hover:bg-zinc-900/60 hover:scale-[1.02] transition-all duration-500 shadow-xl parallax-element stagger-3" data-speed="0.05" href="#" style={{transform: 'translateY(0px)'}}>
<div className="relative">
<img alt="Desk" className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/28ab409c-b2de-419d-8737-4c3b451bd28b_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent"></div>
</div>
<div className="absolute bottom-0 p-6 flex items-end justify-between w-full">
<div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Desk</h3>
<p className="text-zinc-400">Workspace essentials</p>
</div>
<div className="p-3 rounded-xl bg-zinc-950/80 glass-effect border border-zinc-800/60 group-hover:scale-110 group-hover:bg-zinc-100 group-hover:text-zinc-900 transition-all duration-300">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>
</div>
</section>

<section className="relative mx-auto max-w-7xl px-6 py-20 section-fade visible" id="featured">
<div className="flex items-end justify-between mb-12">
<div className="parallax-element" data-speed="0.1" style={{transform: 'translateY(0px)'}}>
<h2 className="text-4xl sm:text-5xl tracking-tight font-bold bg-gradient-to-r from-zinc-100 to-zinc-300 bg-clip-text text-transparent">Featured</h2>
<p className="mt-3 text-zinc-400 text-lg">Handpicked favorites</p>
</div>
<div className="flex items-center gap-3">
<button aria-label="Previous" className="p-3 rounded-xl bg-zinc-900/60 glass-effect border border-zinc-800/60 hover:bg-zinc-900/80 hover:scale-105 transition-all duration-300 shadow-lg">
<svg className="lucide lucide-chevron-left w-5 h-5 text-zinc-300" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Next" className="p-3 rounded-xl bg-zinc-900/60 glass-effect border border-zinc-800/60 hover:bg-zinc-900/80 hover:scale-105 transition-all duration-300 shadow-lg">
<svg className="lucide lucide-chevron-right w-5 h-5 text-zinc-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

<div className="group rounded-2xl border border-zinc-800/60 bg-zinc-900/40 glass-effect hover:bg-zinc-900/60 hover:scale-[1.02] transition-all duration-500 overflow-hidden shadow-xl parallax-element stagger-1" data-speed="0.03" style={{transform: 'translateY(0px)'}}>
<div className="relative">
<img alt="Noise-canceling Headphones" className="product-image h-56 w-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1599669454699-248893623440?w=800&amp;q=80"/>
<div className="absolute top-4 left-4 text-xs bg-emerald-400 text-zinc-900 rounded-full px-3 py-1 font-bold shadow-lg">New</div>
<button aria-label="Wishlist" className="wishlist-btn absolute top-4 right-4 p-2.5 rounded-xl bg-zinc-950/80 glass-effect border border-zinc-800/60 hover:scale-110 hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-300 opacity-0 group-hover:opacity-100">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<h3 className="text-base font-semibold tracking-tight line-clamp-1 mb-1">Noise-canceling Headphones</h3>
<p className="text-sm text-zinc-400">Matte Black</p>
<div className="mt-3 flex items-center gap-1 text-amber-400">
<div className="flex">
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star-half w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
<span className="text-xs text-zinc-400 ml-2">(1,248)</span>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-lg font-semibold">$199</span>
<button className="add-to-cart relative overflow-hidden inline-flex items-center gap-2 rounded-xl bg-zinc-100 text-zinc-900 px-4 py-2 text-sm font-semibold hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-lg" data-id="headphones" data-image="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80" data-name="Noise-canceling Headphones" data-price="199">
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                Add to cart
              </button>
</div>
</div>
</div>

<div className="group rounded-2xl border border-zinc-800/60 bg-zinc-900/40 glass-effect hover:bg-zinc-900/60 hover:scale-[1.02] transition-all duration-500 overflow-hidden shadow-xl parallax-element stagger-2" data-speed="0.03" style={{transform: 'translateY(0px)'}}>
<div className="relative">
<img alt="Ergonomic Chair" className="product-image h-56 w-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=800&amp;q=80"/>
<div className="absolute top-4 left-4 text-xs bg-orange-400 text-zinc-900 rounded-full px-3 py-1 font-bold shadow-lg">Bestseller</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold tracking-tight line-clamp-1 mb-1">Ergonomic Chair</h3>
<p className="text-sm text-zinc-400">Graphite</p>
<div className="mt-3 flex items-center gap-1 text-amber-400">
<div className="flex">
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs text-zinc-400 ml-2">(3,402)</span>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-lg font-semibold">$349</span>
<button className="add-to-cart relative overflow-hidden inline-flex items-center gap-2 rounded-xl bg-zinc-100 text-zinc-900 px-4 py-2 text-sm font-semibold hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-lg" data-id="chair" data-image="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" data-name="Ergonomic Chair" data-price="349">
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                Add to cart
              </button>
</div>
</div>
</div>

<div className="group rounded-2xl border border-zinc-800/60 bg-zinc-900/40 glass-effect hover:bg-zinc-900/60 hover:scale-[1.02] transition-all duration-500 overflow-hidden shadow-xl parallax-element stagger-3" data-speed="0.03" style={{transform: 'translateY(0px)'}}>
<div className="relative">
<img alt="Smart Speaker" className="product-image h-56 w-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=800&amp;q=80"/>
</div>
<div className="p-5">
<h3 className="text-base font-semibold tracking-tight line-clamp-1 mb-1">Smart Speaker</h3>
<p className="text-sm text-zinc-400">Charcoal</p>
<div className="mt-3 flex items-center gap-1 text-amber-400">
<div className="flex">
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-zinc-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs text-zinc-400 ml-2">(897)</span>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-lg font-semibold">$129</span>
<button className="add-to-cart relative overflow-hidden inline-flex items-center gap-2 rounded-xl bg-zinc-100 text-zinc-900 px-4 py-2 text-sm font-semibold hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-lg" data-id="speaker" data-image="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" data-name="Smart Speaker" data-price="129">
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                Add to cart
              </button>
</div>
</div>
</div>
<div className="group rounded-2xl border border-zinc-800/60 bg-zinc-900/40 glass-effect hover:bg-zinc-900/60 hover:scale-[1.02] transition-all duration-500 overflow-hidden shadow-xl parallax-element stagger-4" data-speed="0.03" style={{transform: 'translateY(0px)'}}>
<div className="relative">
<img alt="Mechanical Keyboard" className="product-image h-56 w-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?w=800&amp;q=80"/>
<button aria-label="Wishlist" className="wishlist-btn absolute top-4 right-4 p-2.5 rounded-xl bg-zinc-950/80 glass-effect border border-zinc-800/60 hover:scale-110 hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-300 opacity-0 group-hover:opacity-100">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<h3 className="text-base font-semibold tracking-tight line-clamp-1 mb-1">Mechanical Keyboard</h3>
<p className="text-sm text-zinc-400">Hot-swappable · RGB</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-lg font-semibold">$169</span>
<button className="add-to-cart relative overflow-hidden inline-flex items-center gap-2 rounded-xl bg-zinc-100 text-zinc-900 px-4 py-2 text-sm font-semibold hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-lg" data-id="keyboard" data-image="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" data-name="Mechanical Keyboard" data-price="169">
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                Add to cart
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative mx-auto max-w-7xl px-6 py-20 section-fade visible">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 border border-zinc-800/40 rounded-2xl bg-zinc-900/30 glass-effect p-8 shadow-2xl parallax-element" data-speed="0.05" style={{transform: 'translateY(0px)'}}>
<div className="group flex flex-col items-center text-center p-6 rounded-xl hover:bg-zinc-900/50 transition-all duration-300 stagger-1">
<div className="p-4 rounded-2xl bg-zinc-800/60 glass-effect mb-4 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-truck w-6 h-6 text-zinc-300" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Free shipping</h4>
<p className="text-zinc-400">Over $75 in the U.S.</p>
</div>
<div className="group flex flex-col items-center text-center p-6 rounded-xl hover:bg-zinc-900/50 transition-all duration-300 stagger-2">
<div className="p-4 rounded-2xl bg-zinc-800/60 glass-effect mb-4 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-refresh-ccw w-6 h-6 text-zinc-300" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">30-day returns</h4>
<p className="text-zinc-400">No questions asked</p>
</div>
<div className="group flex flex-col items-center text-center p-6 rounded-xl hover:bg-zinc-900/50 transition-all duration-300 stagger-3">
<div className="p-4 rounded-2xl bg-zinc-800/60 glass-effect mb-4 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-shield-check w-6 h-6 text-zinc-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Secure checkout</h4>
<p className="text-zinc-400">256-bit encryption</p>
</div>
<div className="group flex flex-col items-center text-center p-6 rounded-xl hover:bg-zinc-900/50 transition-all duration-300 stagger-4">
<div className="p-4 rounded-2xl bg-zinc-800/60 glass-effect mb-4 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-headphones w-6 h-6 text-zinc-300" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Human support</h4>
<p className="text-zinc-400">24/7 live chat</p>
</div>
</div>
</section>

<section className="relative mx-auto max-w-7xl px-6 pb-20 section-fade visible">
<div className="relative overflow-hidden rounded-3xl border border-zinc-800/40 bg-zinc-900/40 glass-effect shadow-2xl parallax-element" data-speed="0.03" style={{transform: 'translateY(0px)'}}>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-900/60 via-transparent to-zinc-900/30"></div>
<div className="grid lg:grid-cols-2 relative">
<div className="p-10 sm:p-12 lg:p-16">
<div className="inline-flex items-center gap-3 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm text-amber-300 font-medium shadow-lg">
<span className="inline-flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
              Limited time offer
            </div>
<h3 className="mt-6 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold bg-gradient-to-r from-zinc-100 to-zinc-300 bg-clip-text text-transparent">Summer Sale</h3>
<p className="mt-2 text-xl text-amber-300 font-semibold">Up to 30% off</p>
<p className="mt-4 text-zinc-400 text-lg leading-relaxed">Build your setup for less. Discounts auto-applied at checkout on select items.</p>
<div className="mt-8 flex flex-wrap gap-4">
<a className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 text-zinc-900 px-8 py-4 text-base font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" href="#featured">
<span>Shop deals</span>
<svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group inline-flex items-center gap-3 rounded-xl bg-zinc-950/80 glass-effect border border-zinc-700/60 text-zinc-200 px-8 py-4 text-base font-semibold hover:bg-zinc-900/80 hover:scale-105 transition-all duration-300 shadow-lg" href="#">
<span>See all offers</span>
<svg className="lucide lucide-external-link w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
</div>
<div className="relative lg:aspect-square">
<video autoplay="" className="h-full w-full lg:absolute" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/c55d12e8-25f2-4268-a4d8-f2bfceeae73c/0.mp4" title="Summer sale products"></video>
</div>
</div>
</div>
</section>



    </>
  );
}
