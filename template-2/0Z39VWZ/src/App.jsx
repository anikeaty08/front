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



      // Global state
      let cartItems = [];
      let cartCount = 2;
      let selectedSize = 'US 9';
      let selectedColor = 'Black/White';

      // Utility functions
      function showNotification(message, type = 'success') {
        const container = document.getElementById('notificationContainer');
        const notification = document.createElement('div');
        
        const bgColor = type === 'success' ? 'bg-green-600' : type === 'error' ? 'bg-red-600' : 'bg-blue-600';
        
        notification.className = `notification-enter ${bgColor} text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 max-w-sm`;
        notification.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 flex-shrink-0">
            ${type === 'success' ? '<path d="M20 6L9 17l-5-5"></path>' : 
              type === 'error' ? '<circle cx="12" cy="12" r="10"></circle><line x1="15" x2="9" y1="9" y2="15"></line><line x1="9" x2="15" y1="9" y2="15"></line>' :
              '<circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path>'}
          </svg>
          <span class="text-sm font-medium">${message}</span>
        `;
        
        container.appendChild(notification);
        
        setTimeout(() => {
          notification.classList.remove('notification-enter');
          notification.classList.add('notification-exit');
          setTimeout(() => notification.remove(), 300);
        }, 3000);
      }

      function updateCartCount(count) {
        cartCount = count;
        const cartCountEl = document.getElementById('cartCount');
        if (cartCountEl) {
          cartCountEl.textContent = count;
          cartCountEl.classList.add('cart-bounce');
          setTimeout(() => cartCountEl.classList.remove('cart-bounce'), 500);
        }
      }

      function addToCart(product, price) {
        cartItems.push({ product, price, size: selectedSize, color: selectedColor });
        updateCartCount(cartCount + 1);
        showNotification(`${product} (${selectedSize}) added to cart!`, 'success');
      }

      // Product gallery functionality
      function initProductGallery() {
        const mainImage = document.getElementById('mainProductImage');
        const galleryButtons = document.querySelectorAll('.gallery-nav');
        
        galleryButtons.forEach(button => {
          button.addEventListener('click', () => {
            // Remove selected state from all buttons
            galleryButtons.forEach(btn => {
              btn.classList.remove('border-neutral-900');
              btn.classList.add('border-transparent');
            });
            
            // Add selected state to clicked button
            button.classList.remove('border-transparent');
            button.classList.add('border-neutral-900');
            
            // Update main image
            const img = button.querySelector('img');
            if (img && mainImage) {
              mainImage.src = img.src;
            }
          });
        });
      }

      // Size selection functionality
      function initSizeSelection() {
        const sizeButtons = document.querySelectorAll('.size-option');
        
        sizeButtons.forEach(button => {
          button.addEventListener('click', () => {
            // Only handle size buttons (not color buttons)
            if (button.textContent.includes('US')) {
              // Remove selected state from all size buttons
              sizeButtons.forEach(btn => {
                if (btn.textContent.includes('US')) {
                  btn.classList.remove('selected');
                }
              });
              
              // Add selected state to clicked button
              button.classList.add('selected');
              selectedSize = button.textContent.trim();
              showNotification(`Size ${selectedSize} selected`, 'info');
            }
          });
        });
      }

      // Color selection functionality
      function initColorSelection() {
        const colorButtons = document.querySelectorAll('.size-option');
        
        colorButtons.forEach(button => {
          button.addEventListener('click', () => {
            // Only handle color buttons (circular ones without text)
            if (!button.textContent.includes('US') && button.classList.contains('rounded-full')) {
              // Remove selected state from all color buttons
              colorButtons.forEach(btn => {
                if (btn.classList.contains('rounded-full')) {
                  btn.classList.remove('border-neutral-900');
                  btn.classList.add('border-neutral-300', 'border-transparent');
                  // Remove check mark
                  const checkmark = btn.querySelector('svg');
                  if (checkmark) checkmark.remove();
                }
              });
              
              // Add selected state to clicked button
              button.classList.remove('border-neutral-300', 'border-transparent');
              button.classList.add('border-neutral-900');
              
              // Add check mark for non-black colors
              if (!button.classList.contains('bg-black')) {
                button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M20 6L9 17l-5-5"></path></svg>';
              }
              
              // Update selected color (simplified)
              if (button.classList.contains('bg-white')) selectedColor = 'White';
              else if (button.classList.contains('bg-red-600')) selectedColor = 'Red';
              else if (button.classList.contains('bg-blue-600')) selectedColor = 'Blue';
              else selectedColor = 'Black/White';
              
              showNotification(`Color ${selectedColor} selected`, 'info');
            }
          });
        });
      }

      // Navigation functionality
      function initNavigation() {
        const backToHomeBtn = document.getElementById('backToHome');
        const homeLink = document.getElementById('homeLink');
        
        function goToHome() {
          showNotification('Returning to homepage...', 'info');
          // In a real app, this would navigate to the home page
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
        
        backToHomeBtn?.addEventListener('click', goToHome);
        homeLink?.addEventListener('click', (e) => {
          e.preventDefault();
          goToHome();
        });
      }

      // Typing animation
      function initTypingAnimation() {
        const messages = [
          'Free shipping on Nike orders over $99',
          'New Nike arrivals every week',
          'Authentic Nike products guaranteed',
          'Nike member exclusive deals available'
        ];
        
        let currentMessage = 0;
        const typingElement = document.getElementById('typingText');
        
        function typeMessage(message, callback) {
          let i = 0;
          typingElement.textContent = '';
          
          function typeChar() {
            if (i < message.length) {
              typingElement.textContent += message.charAt(i);
              i++;
              setTimeout(typeChar, 100);
            } else {
              setTimeout(callback, 2000);
            }
          }
          typeChar();
        }
        
        function nextMessage() {
          typeMessage(messages[currentMessage], () => {
            currentMessage = (currentMessage + 1) % messages.length;
            setTimeout(nextMessage, 1000);
          });
        }
        
        nextMessage();
      }

      // Scroll progress indicator
      function initScrollProgress() {
        const indicator = document.getElementById('scrollIndicator');
        
        window.addEventListener('scroll', () => {
          const scrollTop = window.pageYOffset;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = (scrollTop / docHeight) * 100;
          
          indicator.style.width = scrollPercent + '%';
        });
      }

      // Search functionality
      function initSearch() {
        const searchInput = document.getElementById('searchInput');
        const searchDropdown = document.getElementById('searchDropdown');
        
        let searchTimeout;
        
        searchInput?.addEventListener('input', (e) => {
          clearTimeout(searchTimeout);
          
          if (e.target.value.length > 2) {
            searchDropdown.classList.add('active');
            
            searchTimeout = setTimeout(() => {
              showNotification(`Searching Nike products for "${e.target.value}"...`, 'info');
            }, 500);
          } else {
            searchDropdown.classList.remove('active');
          }
        });
      }

      // Button interactions
      function initButtonInteractions() {
        // Main add to cart button
        document.getElementById('addToCartMain')?.addEventListener('click', (e) => {
          e.stopPropagation();
          const product = e.target.dataset.product;
          const price = parseFloat(e.target.dataset.price);
          addToCart(product, price);
        });
        
        // Other interactive buttons
        document.getElementById('locationBtn')?.addEventListener('click', () => {
          showNotification('Checking Nike stores near you...', 'info');
        });
        
        document.getElementById('accountBtn')?.addEventListener('click', () => {
          showNotification('Nike account features coming soon!', 'info');
        });
      }

      // Intersection Observer for animations
      function initAnimations() {
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in');
            }
          });
        }, observerOptions);
        
        document.querySelectorAll('.hover-lift, article').forEach(el => {
          observer.observe(el);
        });
      }

      // Initialize everything when DOM is loaded
      document.addEventListener('DOMContentLoaded', function() {
        // Initialize Lucide icons
        if (window.lucide) {
          lucide.createIcons({ strokeWidth: 1.5 });
        }
        
        // Initialize all features
        initProductGallery();
        initSizeSelection();
        initColorSelection();
        initNavigation();
        initTypingAnimation();
        initScrollProgress();
        initSearch();
        initButtonInteractions();
        initAnimations();
        
        // Welcome message
        setTimeout(() => {
          showNotification('Welcome to Nike on Arcade! 👟', 'success');
        }, 1000);
      });

      // Handle window resize
      window.addEventListener('resize', () => {
        const searchDropdown = document.getElementById('searchDropdown');
        if (searchDropdown?.classList.contains('active')) {
          searchDropdown.classList.remove('active');
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
      

<div className="scroll-indicator" id="scrollIndicator" style={{width: `0%`}}></div>

<div className="fixed top-4 right-4 z-50 space-y-2" id="notificationContainer"></div>

<div className="w-full bg-neutral-900 text-white overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between" id="announcementSlider">
<p className="text-[13px] sm:text-sm font-medium tracking-tight font-sans typing-animation" id="typingText">Free shipping o</p>
<button className="hidden sm:flex items-center gap-2 text-[13px] font-medium opacity-90 hover:opacity-100 transition font-sans ripple" id="locationBtn">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
          Update location
        </button>
</div>
</div>

<header className="bg-white border-neutral-200 border-b sticky top-0 z-40 backdrop-blur-sm bg-white/95">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cd065655-fb2f-4ecb-93de-a5eb31c7b573_320w.jpg)] bg-cover rounded invert-0 hover:scale-105 transition-transform" href="#" id="homeLink"></a>

<div className="flex-1 hidden md:flex relative">
<div className="w-full relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="lucide lucide-search w-4 h-4 text-neutral-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<input autocomplete="off" className="focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900/20 text-[15px] transition-all duration-300 bg-white w-full border-neutral-200 border rounded-md pt-2.5 pr-36 pb-2.5 pl-10" id="searchInput" placeholder="Search Nike products" type="text" />
<div className="absolute inset-y-0 right-0 pr-1 flex items-center">
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-neutral-100 hover:bg-neutral-200/80 text-[13px] font-medium transition-all duration-200 font-sans ripple" id="categoryBtn">
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform" data-lucide="chevron-down" fill="none" height="24" id="categoryChevron" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
<span className="" id="categoryText">Nike</span>
</button>
</div>
</div>

<div className="search-dropdown absolute top-full left-0 right-0 bg-white border border-neutral-200 rounded-md shadow-lg mt-1" id="searchDropdown">
<div className="p-4">
<h4 className="text-sm font-semibold mb-3">Popular Nike searches</h4>
<div className="space-y-2">
<button className="block w-full text-left text-sm hover:bg-neutral-50 p-2 rounded transition-colors">Air Jordan</button>
<button className="block w-full text-left text-sm hover:bg-neutral-50 p-2 rounded transition-colors">Air Max</button>
<button className="block w-full text-left text-sm hover:bg-neutral-50 p-2 rounded transition-colors">Nike Dunk</button>
<button className="block w-full text-left text-sm hover:bg-neutral-50 p-2 rounded transition-colors">Running shoes</button>
</div>
</div>
</div>
</div>
<nav className="ml-auto hidden md:flex items-center gap-6">
<a className="text-sm font-medium opacity-90 hover:opacity-100 transition-all duration-200 hover:scale-105 font-sans" href="#browse">Browse</a>
<a className="text-sm font-medium opacity-90 hover:opacity-100 transition-all duration-200 hover:scale-105 font-sans" href="#deals">Deals</a>
<a className="text-sm font-medium opacity-90 hover:opacity-100 transition-all duration-200 hover:scale-105 font-sans" href="#support">Support</a>
</nav>
<div className="ml-2 flex items-center gap-2">
<button className="p-2 rounded-md hover:bg-neutral-100 transition-colors md:hidden" id="mobileSearchBtn">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="p-2 rounded-md hover:bg-neutral-100 transition-all duration-200 hover:scale-110 ripple" id="accountBtn">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
<button className="relative hover:bg-neutral-100 transition-all duration-200 hover:scale-110 ripple rounded-md pt-2 pr-2 pb-2 pl-2">
<svg className="lucide lucide-shopping-cart w-5 h-5" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<span className="absolute -top-2 -right-2 bg-neutral-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center" id="cartCount">2</span>
</button>
</div>
</div>

<div className="border-t border-neutral-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
<nav className="flex items-center gap-2 text-sm text-neutral-600">
<button className="hover:text-neutral-900 transition-colors font-sans" id="backToHome">Arcade</button>
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="text-neutral-900 font-medium font-sans">Nike</span>
</nav>
</div>
</div>
</header>

<main className="fade-in">

<section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div className="slide-up">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
<svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
<path d="M2.4 5.4c0-.5.4-.9.9-.9h.3c.4 0 .8.3.9.7L5.1 8h13.4c.5 0 .9.4.9.9 0 .1 0 .3-.1.4l-2.4 7.2c-.1.3-.4.5-.8.5H7.8l-.3 1.2c0 .1 0 .2.1.3.1.1.2.1.3.1h10.7c.5 0 .9.4.9.9s-.4.9-.9.9H7.9c-.8 0-1.5-.7-1.5-1.5 0-.2 0-.3.1-.5L4.2 6.3H3.3c-.5 0-.9-.4-.9-.9z"></path>
</svg>
</div>
<div>
<h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-geist">Nike</h1>
<p className="text-neutral-300 text-lg font-geist mt-1">Just Do It</p>
</div>
</div>
<p className="text-xl text-neutral-200 leading-relaxed font-geist mb-8">
                Discover the latest Nike athletic wear, sneakers, and sportswear. From Air Jordan to Air Max, find your perfect fit for every sport and lifestyle.
              </p>
<div className="flex flex-wrap gap-4">
<button className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-100 transition-all duration-300 hover:scale-105 font-geist">
                  Shop New Arrivals
                  <svg className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105 font-geist">
<svg className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18v18H3zM9 9l3 3 3-3"></path></svg>
                  Size Guide
                </button>
</div>
</div>
<div className="relative slide-up" style={{animationDelay: `0.2s`}}>
<div className="aspect-square bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-3xl p-8 hover:scale-105 transition-transform duration-500">
<img alt="Nike featured product" className="w-full h-full object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6fdbbeb3-36ec-475f-8227-1bc9b7fa96a2_800w.jpg" />
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="fade-in">
<div className="aspect-square bg-neutral-100 rounded-2xl mb-4 overflow-hidden">
<img alt="Nike Air Max 270" className="w-full h-full object-cover product-zoom" id="mainProductImage" src="/assets/a0334f32-8e67-444f-bb8c-ef1ebc4a3a8f_1600w.jpg" />
</div>
<div className="flex gap-3 overflow-x-auto pb-2">
<button className="gallery-nav flex-shrink-0 w-20 h-20 bg-neutral-100 rounded-lg overflow-hidden border-2 border-neutral-900">
<img alt="View 1" className="w-full h-full object-cover" src="https://cdn.midjourney.com/944ee6b3-3133-4f7f-934b-9dce46faef61/0_0.png?w=800&q=80" />
</button>
<button className="gallery-nav flex-shrink-0 w-20 h-20 bg-neutral-100 rounded-lg overflow-hidden border-2 border-transparent hover:border-neutral-300">
<img alt="View 2" className="w-full h-full object-cover" src="https://cdn.midjourney.com/b364832d-777c-48e7-911a-1be3f0ea7f47/0_0.png?w=800&q=80" />
</button>
<button className="gallery-nav flex-shrink-0 w-20 h-20 bg-neutral-100 rounded-lg overflow-hidden border-2 border-transparent hover:border-neutral-300">
<img alt="View 3" className="w-full h-full object-cover" src="https://cdn.midjourney.com/2a604624-00fc-4126-9c6c-ab9173bdee29/0_0.png?w=800&q=80" />
</button>
<button className="gallery-nav flex-shrink-0 w-20 h-20 bg-neutral-100 rounded-lg overflow-hidden border-2 border-transparent hover:border-neutral-300">
<img alt="View 4" className="w-full h-full object-cover" src="https://cdn.midjourney.com/598f8ab8-2981-4083-813d-d9c6df6c0f8d/0_0.png?w=800&q=80" />
</button>
</div>
</div>

<div className="fade-in" style={{animationDelay: `0.2s`}}>
<div className="flex items-center gap-2 mb-4">
<span className="inline-flex items-center rounded-md bg-green-100 text-green-800 text-sm px-2.5 py-1 font-medium">In Stock</span>
<span className="inline-flex items-center rounded-md bg-orange-100 text-orange-800 text-sm px-2.5 py-1 font-medium">Best Seller</span>
</div>
<h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-4 font-geist">Nike Air Max 270</h1>
<div className="flex items-baseline gap-4 mb-6">
<span className="text-3xl font-bold text-neutral-900 font-geist">$160.00</span>
<span className="text-lg text-neutral-500 line-through font-geist">$200.00</span>
<span className="inline-flex items-center rounded-md bg-red-100 text-red-800 text-sm px-2.5 py-1 font-semibold">20% OFF</span>
</div>
<div className="space-y-6 mb-8">
<div>
<h3 className="text-sm font-semibold text-neutral-900 mb-3 font-geist">Color: Black/White</h3>
<div className="flex gap-2">
<button className="size-option w-10 h-10 bg-black rounded-full border-2 border-neutral-900 flex items-center justify-center">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
</button>
<button className="size-option w-10 h-10 bg-white rounded-full border-2 border-neutral-300 hover:border-neutral-400"></button>
<button className="size-option w-10 h-10 bg-red-600 rounded-full border-2 border-transparent hover:border-neutral-400"></button>
<button className="size-option w-10 h-10 bg-blue-600 rounded-full border-2 border-transparent hover:border-neutral-400"></button>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900 mb-3 font-geist">Size</h3>
<div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
<button className="size-option h-12 border border-neutral-300 rounded-md text-sm font-medium hover:border-neutral-900 font-geist">US 7</button>
<button className="size-option h-12 border border-neutral-300 rounded-md text-sm font-medium hover:border-neutral-900 font-geist">US 8</button>
<button className="size-option h-12 border border-neutral-300 rounded-md text-sm font-medium hover:border-neutral-900 selected font-geist">US 9</button>
<button className="size-option h-12 border border-neutral-300 rounded-md text-sm font-medium hover:border-neutral-900 font-geist">US 10</button>
<button className="size-option h-12 border border-neutral-300 rounded-md text-sm font-medium hover:border-neutral-900 font-geist">US 11</button>
<button className="size-option h-12 border border-neutral-300 rounded-md text-sm font-medium hover:border-neutral-900 font-geist">US 12</button>
</div>
<button className="text-sm text-neutral-600 hover:text-neutral-900 mt-2 underline font-geist">Size guide</button>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
<button className="flex-1 inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-800 transition-all duration-300 hover:scale-105 font-geist" data-price="160.00" data-product="Nike Air Max 270" id="addToCartMain">
<svg className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                Add to Cart
              </button>
<button className="inline-flex items-center justify-center gap-2 border-2 border-neutral-300 text-neutral-900 px-6 py-4 rounded-lg font-semibold hover:border-neutral-900 transition-all duration-300 hover:scale-105 font-geist">
<svg className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"></path></svg>
                Wishlist
              </button>
</div>
<div className="border-t border-neutral-200 pt-8">
<h3 className="text-lg font-semibold mb-4 font-geist">Product Details</h3>
<div className="space-y-3 text-sm text-neutral-600">
<p className="font-geist">The Nike Air Max 270 delivers unrivaled all-day comfort with the largest Max Air unit yet, offering a super soft ride that feels as impossible as it looks.</p>
<div className="grid grid-cols-2 gap-4">
<div>
<span className="font-medium text-neutral-900 font-geist">Material:</span>
<p className="font-geist">Mesh and synthetic upper</p>
</div>
<div>
<span className="font-medium text-neutral-900 font-geist">Sole:</span>
<p className="font-geist">Air Max cushioning</p>
</div>
<div>
<span className="font-medium text-neutral-900 font-geist">Closure:</span>
<p className="font-geist">Lace-up</p>
</div>
<div>
<span className="font-medium text-neutral-900 font-geist">Origin:</span>
<p className="font-geist">Made in Vietnam</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-4 py-12">
<div className="flex items-end justify-between gap-4 mb-8">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight font-geist">More from Nike</h2>
<p className="mt-1 text-sm text-neutral-600 font-sans">Complete your athletic look</p>
</div>
<button className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-700 transition-all duration-200 hover:scale-105 font-sans">
            View all Nike
            <svg className="w-4 h-4" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

<article className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover-lift cursor-pointer fade-in">
<div className="aspect-square bg-neutral-100 overflow-hidden">
<img alt="Nike Air Jordan 1" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" src="https://cdn.midjourney.com/a18e65a9-0911-47cf-96aa-fa683126038c/0_0.png?w=800&q=80" />
</div>
<div className="p-4">
<h3 className="font-semibold text-neutral-900 mb-1 font-geist">Nike Air Jordan 1</h3>
<p className="text-sm text-neutral-600 mb-2 font-sans">Classic high-top sneaker</p>
<div className="flex items-center justify-between">
<span className="text-lg font-bold font-geist">$170</span>
<button className="p-2 rounded-md hover:bg-neutral-100 transition-colors">
<svg className="w-4 h-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</article>

<article className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover-lift cursor-pointer fade-in" style={{animationDelay: `0.1s`}}>
<div className="aspect-square bg-neutral-100 overflow-hidden">
<img alt="Nike Dri-FIT Shirt" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" src="https://cdn.midjourney.com/262f9267-fa07-4075-8a11-c9b836b68427/0_0.png?w=800&q=80" />
</div>
<div className="p-4">
<h3 className="font-semibold text-neutral-900 mb-1 font-geist">Nike Dri-FIT Shirt</h3>
<p className="text-sm text-neutral-600 mb-2 font-sans">Moisture-wicking tee</p>
<div className="flex items-center justify-between">
<span className="text-lg font-bold font-geist">$35</span>
<button className="p-2 rounded-md hover:bg-neutral-100 transition-colors">
<svg className="w-4 h-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</article>

<article className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover-lift cursor-pointer fade-in" style={{animationDelay: `0.2s`}}>
<div className="aspect-square bg-neutral-100 overflow-hidden">
<img alt="Nike Tech Fleece Hoodie" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" src="https://cdn.midjourney.com/b4d99e84-1d78-4120-ae49-3d553f673171/0_0.png?w=800&q=80" />
</div>
<div className="p-4">
<h3 className="font-semibold text-neutral-900 mb-1 font-geist">Nike Tech Fleece</h3>
<p className="text-sm text-neutral-600 mb-2 font-sans">Premium hoodie</p>
<div className="flex items-center justify-between">
<span className="text-lg font-bold font-geist">$110</span>
<button className="p-2 rounded-md hover:bg-neutral-100 transition-colors">
<svg className="w-4 h-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</article>

<article className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover-lift cursor-pointer fade-in" style={{animationDelay: `0.3s`}}>
<div className="aspect-square bg-neutral-100 overflow-hidden">
<img alt="Nike Running Shorts" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" src="https://cdn.midjourney.com/babe9229-5cb3-4062-a0d7-fd9b345de7da/0_0.png?w=800&q=80" />
</div>
<div className="p-4">
<h3 className="font-semibold text-neutral-900 mb-1 font-geist">Nike Running Shorts</h3>
<p className="text-sm text-neutral-600 mb-2 font-sans">Lightweight performance</p>
<div className="flex items-center justify-between">
<span className="text-lg font-bold font-geist">$45</span>
<button className="p-2 rounded-md hover:bg-neutral-100 transition-colors">
<svg className="w-4 h-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</article>
</div>
</section><section className="sm:px-6 lg:px-8 bg-white max-w-7xl rounded-2xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight font-geist mb-4">What Our Customers Say</h2>
<p className="text-lg text-neutral-600 font-sans">Join thousands of satisfied Nike customers</p>
<div className="flex items-center justify-center gap-2 mt-4">
<div className="flex items-center">
<svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<span className="text-sm font-medium text-neutral-900 ml-2 font-geist">4.8/5 based on 12,847 reviews</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

<article className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-8 hover-lift fade-in">
<div className="flex items-center gap-1 mb-4">
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
<span className="text-white font-semibold font-geist">SJ</span>
</div>
<div>
<div className="font-semibold text-neutral-900 font-geist">Sarah Johnson</div>
<div className="text-sm text-neutral-600 font-sans">Verified Buyer • 2 weeks ago</div>
</div>
</div>
</article>

<article className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-8 hover-lift fade-in" style={{animationDelay: `0.1s`}}>
<div className="flex items-center gap-1 mb-4">
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
<span className="text-white font-semibold font-geist">MC</span>
</div>
<div>
<div className="font-semibold text-neutral-900 font-geist">Mike Chen</div>
<div className="text-sm text-neutral-600 font-sans">Verified Buyer • 1 month ago</div>
</div>
</div>
</article>

<article className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-8 hover-lift fade-in" style={{animationDelay: `0.2s`}}>
<div className="flex items-center gap-1 mb-4">
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
<span className="text-white font-semibold font-geist">ER</span>
</div>
<div>
<div className="font-semibold text-neutral-900 font-geist">Emma Rodriguez</div>
<div className="text-sm text-neutral-600 font-sans">Verified Buyer • 3 weeks ago</div>
</div>
</div>
</article>
</div>

<div className="bg-gradient-to-r from-neutral-100 to-neutral-50 rounded-2xl p-8 mb-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-3xl font-bold text-neutral-900 font-geist mb-2">12,847</div>
<div className="text-sm text-neutral-600 font-sans">Total Reviews</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-neutral-900 font-geist mb-2">4.8/5</div>
<div className="text-sm text-neutral-600 font-sans">Average Rating</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-neutral-900 font-geist mb-2">96%</div>
<div className="text-sm text-neutral-600 font-sans">Would Recommend</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-neutral-900 font-geist mb-2">89%</div>
<div className="text-sm text-neutral-600 font-sans">5-Star Reviews</div>
</div>
</div>
</div>

<div className="">
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-semibold tracking-tight font-geist">Recent Reviews</h3>
<button className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-700 transition-all duration-200 hover:scale-105 font-sans">
        View All Reviews
        <svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="space-y-6">

<article className="border border-neutral-200 rounded-xl p-6 hover-lift fade-in bg-white">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
<span className="text-white font-semibold text-sm font-geist">JD</span>
</div>
<div>
<div className="font-semibold text-neutral-900 font-geist">James Davis</div>
<div className="text-sm text-neutral-600 font-sans">Purchased Nike Air Max 270 • US 10</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
</div>
<p className="text-neutral-700 font-geist mb-4">
          "Absolutely love these shoes! The fit is perfect and they're incredibly comfortable for all-day wear. The Air Max cushioning really makes a difference during workouts. Highly recommend!"
        </p>
<div className="flex items-center gap-4 text-sm text-neutral-500">
<span className="font-sans">3 days ago</span>
<span className="font-sans">Verified Purchase</span>
<button className="inline-flex items-center gap-1 hover:text-neutral-700 transition-colors font-sans">
<svg className="w-3 h-3" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 10v12l5-3 5 3V10"></path>
<path d="M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"></path>
</svg>
            Helpful (24)
          </button>
</div>
</article>

<article className="border border-neutral-200 rounded-xl p-6 hover-lift fade-in bg-white" style={{animationDelay: `0.1s`}}>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
<span className="text-white font-semibold text-sm font-geist">AL</span>
</div>
<div className="">
<div className="font-semibold text-neutral-900 font-geist">Alex Thompson</div>
<div className="text-sm text-neutral-600 font-sans">Purchased Nike Air Max 270 • US 9</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-neutral-300 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
</div>
<p className="text-neutral-700 font-geist mb-4">
          "Great quality and style! The only minor issue is they run slightly large, so consider sizing down. Otherwise, these are fantastic everyday sneakers."
        </p>
<div className="flex items-center gap-4 text-sm text-neutral-500">
<span className="font-sans">1 week ago</span>
<span className="font-sans">Verified Purchase</span>
<button className="inline-flex items-center gap-1 hover:text-neutral-700 transition-colors font-sans">
<svg className="w-3 h-3" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 10v12l5-3 5 3V10"></path>
<path d="M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"></path>
</svg>
            Helpful (18)
          </button>
</div>
</article>

<article className="border border-neutral-200 rounded-xl p-6 hover-lift fade-in bg-white" style={{animationDelay: `0.2s`}}>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
<span className="text-white font-semibold text-sm font-geist">LS</span>
</div>
<div className="">
<div className="font-semibold text-neutral-900 font-geist">Lisa Smith</div>
<div className="text-sm text-neutral-600 font-sans">Purchased Nike Air Max 270 • US 8</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
</div>
<p className="text-neutral-700 font-geist mb-4">
          "Super fast delivery and excellent packaging. The shoes are exactly as described and the quality is top-notch. Will definitely order from Nike again!"
        </p>
<div className="flex items-center gap-4 text-sm text-neutral-500">
<span className="font-sans">2 weeks ago</span>
<span className="font-sans">Verified Purchase</span>
<button className="inline-flex items-center gap-1 hover:text-neutral-700 transition-colors font-sans">
<svg className="w-3 h-3" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 10v12l5-3 5 3V10"></path>
<path d="M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"></path>
</svg>
            Helpful (31)
          </button>
</div>
</article>
</div>
</div>

<div className="text-center mt-12 p-8 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl text-white">
<h3 className="text-xl font-semibold tracking-tight font-geist mb-2">Share Your Experience</h3>
<p className="text-neutral-300 mb-6 font-sans">Help other customers by writing a review</p>
<button className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-100 transition-all duration-300 hover:scale-105 font-geist">
<svg className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
      Write a Review
    </button>
</div>
</section>
</main>

<div className="text-white bg-neutral-900 w-full mt-6">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-center">
<button className="inline-flex items-center gap-2 text-sm font-medium hover:text-white/90 transition-all duration-300 hover:scale-105 font-sans" onClick={(e) => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
<svg className="lucide lucide-chevron-up w-4 h-4" data-lucide="chevron-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
          Back to top
        </button>
</div>
</div>
<section className="text-neutral-200 bg-neutral-900 border-neutral-800 border-t">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
<div className="">
<h4 className="text-[15px] font-semibold tracking-tight mb-3 font-sans">Get to know us</h4>
<ul className="space-y-2 text-sm">
<li className=""><a className="hover:text-white transition-colors font-sans" href="#about">About Arcade</a></li>
<li className=""><a className="hover:text-white transition-colors font-sans" href="#careers">Careers</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#press">Press</a></li>
<li className=""><a className="hover:text-white transition-colors font-sans" href="#science">Arcade Labs</a></li>
</ul>
</div>
<div className="">
<h4 className="text-[15px] font-semibold tracking-tight mb-3 font-sans">Connect with us</h4>
<ul className="space-y-2 text-sm">
<li className=""><a className="inline-flex items-center gap-2 hover:text-white transition-colors font-sans" href="#facebook"><svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> Facebook</a></li>
<li className=""><a className="inline-flex items-center gap-2 hover:text-white transition-colors font-sans" href="#x"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg> X</a></li>
<li className=""><a className="inline-flex items-center gap-2 hover:text-white transition-colors font-sans" href="#instagram"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg> Instagram</a></li>
</ul>
</div>
<div className="">
<h4 className="text-[15px] font-semibold tracking-tight mb-3 font-sans">Make money with us</h4>
<ul className="space-y-2 text-sm">
<li className=""><a className="hover:text-white transition-colors font-sans" href="#sell">Sell on Arcade</a></li>
<li className=""><a className="hover:text-white transition-colors font-sans" href="#ads">Advertise your products</a></li>
<li className=""><a className="hover:text-white transition-colors font-sans" href="#brand">Protect & build your brand</a></li>
<li className=""><a className="hover:text-white transition-colors font-sans" href="#affiliates">Affiliates Program</a></li>
</ul>
</div>
<div>
<h4 className="text-[15px] font-semibold tracking-tight mb-3 font-sans">Let us help you</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors font-sans" href="#account">Your Account</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#orders">Your Orders</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#shipping">Shipping & returns</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#help">Help</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cd065655-fb2f-4ecb-93de-a5eb31c7b573_320w.jpg)] bg-cover rounded invert hover:scale-105 transition-transform" href="#"></a>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-700 px-3 py-1.5 text-sm hover:bg-white/5 transition-all duration-200 hover:scale-105 font-sans">
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
              English (SG)
            </button>
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-700 px-3 py-1.5 text-sm hover:bg-white/5 transition-all duration-200 hover:scale-105 font-sans">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Singapore
            </button>
</div>
</div>
<div className="bg-neutral-950">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-[13px] text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex flex-wrap items-center gap-x-6 gap-y-2">
<a className="hover:text-neutral-200 transition-colors font-sans" href="#terms">Conditions of Use</a>
<a className="hover:text-neutral-200 transition-colors font-sans" href="#privacy">Privacy Notice</a>
<a className="hover:text-neutral-200 transition-colors font-sans" href="#cookies">Cookies</a>
<a className="hover:text-neutral-200 transition-colors font-sans" href="#ads">Interest‑Based Ads</a>
</div>
<p className="font-sans">© 2025 Arcade, Inc. or its affiliates</p>
</div>
</div>
</div>
</section>



    </>
  );
}
