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
      let isLoading = true;

      // Utility functions
      function showNotification(message, type = 'success') {
        const container = document.getElementById('notificationContainer');
        const notification = document.createElement('div');
        
        const bgColor = type === 'success' ? 'bg-green-600' : type === 'error' ? 'bg-red-600' : 'bg-blue-600';
        
        notification.className = `notification-enter ${bgColor} text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 max-w-sm`;
        notification.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 flex-shrink-0">
            ${type === 'success' ? '<path d="M20 6 9 17l-5-5"></path>' : 
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
        cartItems.push({ product, price });
        updateCartCount(cartCount + 1);
        showNotification(`${product} added to cart!`, 'success');
      }

      // Typing animation
      function initTypingAnimation() {
        const messages = [
          'Express delivery on everyday picks in select cities',
          'Free shipping on orders over $50',
          'New deals added daily - shop now!',
          '24/7 customer support available'
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

      // Parallax effects
      function initParallax() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        window.addEventListener('scroll', () => {
          const scrolled = window.pageYOffset;
          
          parallaxElements.forEach(element => {
            const rate = scrolled * -0.5;
            element.style.transform = `translateY(${rate}px)`;
          });
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
              // Simulate search results
              showNotification(`Searching for "${e.target.value}"...`, 'info');
            }, 500);
          } else {
            searchDropdown.classList.remove('active');
          }
        });
        
        searchInput?.addEventListener('focus', () => {
          if (searchInput.value.length > 2) {
            searchDropdown.classList.add('active');
          }
        });
        
        document.addEventListener('click', (e) => {
          if (!searchInput?.contains(e.target) && !searchDropdown?.contains(e.target)) {
            searchDropdown?.classList.remove('active');
          }
        });
      }

      // Deals carousel
      function initDealsCarousel() {
        const scroller = document.getElementById('dealsScroller');
        const prev = document.getElementById('dealsPrev');
        const next = document.getElementById('dealsNext');
        
        if (!scroller || !prev || !next) return;
        
        const getStep = () => {
          const first = scroller.querySelector('article');
          if (!first) return 300;
          const rect = first.getBoundingClientRect();
          const style = getComputedStyle(scroller);
          const gap = parseFloat(style.columnGap || style.gap || '16');
          return rect.width + gap;
        };
        
        prev.addEventListener('click', () => {
          scroller.scrollBy({ left: -getStep(), behavior: 'smooth' });
        });
        
        next.addEventListener('click', () => {
          scroller.scrollBy({ left: getStep(), behavior: 'smooth' });
        });
      }

      // Mobile navigation
      function initMobileNav() {
        const mobileSearchBtn = document.getElementById('mobileSearchBtn');
        const mobileSearch = document.getElementById('mobileSearch');
        
        mobileSearchBtn?.addEventListener('click', () => {
          const isHidden = mobileSearch.classList.contains('hidden');
          
          if (isHidden) {
            mobileSearch.classList.remove('hidden');
            setTimeout(() => {
              mobileSearch.style.maxHeight = mobileSearch.scrollHeight + 'px';
            }, 10);
          } else {
            mobileSearch.style.maxHeight = '0';
            setTimeout(() => {
              mobileSearch.classList.add('hidden');
            }, 300);
          }
        });
      }

      // Button interactions
      function initButtonInteractions() {
        // Add to cart buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
          button.addEventListener('click', (e) => {
            e.stopPropagation();
            const product = button.dataset.product;
            const price = parseFloat(button.dataset.price);
            addToCart(product, price);
          });
        });
        
        // Start shopping button
        document.getElementById('startShopping')?.addEventListener('click', () => {
          document.getElementById('dealsScroller')?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          showNotification('Welcome to Arcade! Check out our deals below.', 'info');
        });
        
        // Sign in button
        document.getElementById('signInBtn')?.addEventListener('click', () => {
          showNotification('Sign-in functionality coming soon!', 'info');
        });
        
        // Location button
        document.getElementById('locationBtn')?.addEventListener('click', () => {
          if (navigator.geolocation) {
            showNotification('Updating your location...', 'info');
            navigator.geolocation.getCurrentPosition(
              (position) => {
                showNotification('Location updated successfully!', 'success');
              },
              (error) => {
                showNotification('Could not update location. Please try again.', 'error');
              }
            );
          } else {
            showNotification('Geolocation is not supported by this browser.', 'error');
          }
        });
        
        // Account button
        document.getElementById('accountBtn')?.addEventListener('click', () => {
          showNotification('Account features coming soon!', 'info');
        });
        
        // Cart button
        document.getElementById('cartBtn')?.addEventListener('click', () => {
          if (cartItems.length === 0) {
            showNotification('Your cart is empty. Add some items!', 'info');
          } else {
            showNotification(`You have ${cartItems.length} items in your cart.`, 'info');
          }
        });
      }

      // Category dropdown
      function initCategoryDropdown() {
        const categoryBtn = document.getElementById('categoryBtn');
        const categoryText = document.getElementById('categoryText');
        const categoryChevron = document.getElementById('categoryChevron');
        
        const categories = ['All', 'Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Books', 'Beauty'];
        let currentCategory = 0;
        
        categoryBtn?.addEventListener('click', () => {
          currentCategory = (currentCategory + 1) % categories.length;
          categoryText.textContent = categories[currentCategory];
          
          categoryChevron?.classList.add('rotate-180');
          setTimeout(() => {
            categoryChevron?.classList.remove('rotate-180');
          }, 200);
          
          showNotification(`Browsing ${categories[currentCategory]} category`, 'info');
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
        // Show loading screen
        setTimeout(() => {
          document.getElementById('loadingScreen')?.classList.add('opacity-0');
          setTimeout(() => {
            document.getElementById('loadingScreen')?.remove();
            document.getElementById('mainContent')?.classList.remove('opacity-0');
            isLoading = false;
          }, 500);
        }, 2000);
        
        // Initialize all features
        if (window.lucide) {
          lucide.createIcons({ strokeWidth: 1.5 });
        }
        
        initTypingAnimation();
        initScrollProgress();
        initParallax();
        initSearch();
        initDealsCarousel();
        initMobileNav();
        initButtonInteractions();
        initCategoryDropdown();
        initAnimations();
        
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
        
        // Welcome message
        setTimeout(() => {
          if (!isLoading) {
            showNotification('Welcome to Arcade! 🎮', 'success');
          }
        }, 3000);
      });

      // Handle window resize
      window.addEventListener('resize', () => {
        // Recalculate any size-dependent elements
        const searchDropdown = document.getElementById('searchDropdown');
        if (searchDropdown?.classList.contains('active')) {
          searchDropdown.classList.remove('active');
        }
      });

      // Performance optimization - debounce scroll events
      let scrollTimeout;
      window.addEventListener('scroll', () => {
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
          // Any scroll-based animations that need debouncing
        }, 10);
      }, { passive: true });
    
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
      

<div className="scroll-indicator" id="scrollIndicator" style={{width: `12.3107%`}}></div>



<div className="w-full bg-neutral-900 text-white overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between" id="announcementSlider">
<p className="text-[13px] sm:text-sm font-medium tracking-tight font-sans typing-animation" id="typingText">24/7 customer support available</p>
<button className="hidden sm:flex items-center gap-2 text-[13px] font-medium opacity-90 hover:opacity-100 transition font-sans ripple" id="locationBtn">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
          Update location
        </button>
</div>
</div>

<header className="bg-white border-neutral-200 border-b sticky top-0 z-40 backdrop-blur-sm bg-white/95">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cd065655-fb2f-4ecb-93de-a5eb31c7b573_320w.jpg)] bg-cover rounded invert-0 hover:scale-105 transition-transform" href="#"></a>

<div className="flex-1 hidden md:flex relative">
<div className="w-full relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="lucide lucide-search w-4 h-4 text-neutral-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<input autocomplete="off" className="focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900/20 text-[15px] transition-all duration-300 bg-white w-full border-neutral-200 border rounded-md pt-2.5 pr-36 pb-2.5 pl-10" id="searchInput" placeholder="Search Arcade" type="text" />
<div className="absolute inset-y-0 right-0 pr-1 flex items-center">
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-neutral-100 hover:bg-neutral-200/80 text-[13px] font-medium transition-all duration-200 font-sans ripple" id="categoryBtn">
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform" data-lucide="chevron-down" fill="none" height="24" id="categoryChevron" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
<span className="" id="categoryText">All</span>
</button>
</div>
</div>

<div className="search-dropdown absolute top-full left-0 right-0 bg-white border border-neutral-200 rounded-md shadow-lg mt-1" id="searchDropdown">
<div className="p-4">
<h4 className="text-sm font-semibold mb-3">Popular searches</h4>
<div className="space-y-2">
<button className="block w-full text-left text-sm hover:bg-neutral-50 p-2 rounded transition-colors">iPhone accessories</button>
<button className="block w-full text-left text-sm hover:bg-neutral-50 p-2 rounded transition-colors">Skincare routine</button>
<button className="block w-full text-left text-sm hover:bg-neutral-50 p-2 rounded transition-colors">Home organization</button>
<button className="block w-full text-left text-sm hover:bg-neutral-50 p-2 rounded transition-colors">Gaming headsets</button>
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
</button>
</div>
</div>

<div className="hidden border-t border-neutral-200 bg-white px-4 py-3 md:hidden transform transition-all duration-300" id="mobileSearch">
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="lucide lucide-search w-4 h-4 text-neutral-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<input className="w-full pl-10 py-2.5 rounded-md border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900/20 text-[15px] transition-all duration-300" placeholder="Search Arcade" type="text" />
</div>
</div>

<div className="border-t border-neutral-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-4 overflow-x-auto">
<button className="p-2 rounded-md hover:bg-neutral-100 transition-all duration-200 hover:scale-110" id="menuBtn">
<svg className="lucide lucide-menu w-4 h-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<button className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-neutral-100 transition-all duration-200 whitespace-nowrap font-sans hover:scale-105">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Fresh & Fast
          </button>
<button className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-neutral-100 transition-all duration-200 whitespace-nowrap font-sans hover:scale-105">
<svg className="lucide lucide-flame w-4 h-4" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg> Trending
          </button>
<button className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-neutral-100 transition-all duration-200 whitespace-nowrap font-sans hover:scale-105">
<svg className="lucide lucide-badge-percent w-4 h-4" data-lucide="badge-percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m15 9-6 6"></path><path d="M9 9h.01"></path><path d="M15 15h.01"></path></svg> Deals
          </button>
<button className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-neutral-100 transition-all duration-200 whitespace-nowrap font-sans hover:scale-105">
<svg className="lucide lucide-monitor w-4 h-4" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg> Electronics
          </button>
<button className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-neutral-100 transition-all duration-200 whitespace-nowrap font-sans hover:scale-105">
<svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg> Books
          </button>
<button className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-neutral-100 transition-all duration-200 whitespace-nowrap font-sans hover:scale-105">
<svg className="lucide lucide-gamepad-2 w-4 h-4" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg> Games
          </button>
<div className="ml-auto text-[13px] font-medium flex items-center gap-2 whitespace-nowrap font-sans">
<svg className="lucide lucide-truck w-4 h-4" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
            Same‑day delivery on essentials
          </div>
</div>
</div>
</header>

<main className="fade-in">

<section className="sm:p-8 bg-neutral-50 max-w-6xl border-neutral-200 border rounded-3xl mt-8 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 shadow-xl" style={{transform: `translateY(0px)`}}>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 relative z-10 items-start">
<div className="flex flex-col min-h-full justify-center slide-up">
<div className="">
<span className="text-sm font-normal text-neutral-500 font-geist">9.9 Event</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-neutral-900 tracking-tight font-geist mt-2">Up to 45% off</h2>
<div className="mt-8 relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200"></div>
</div>
<div className="hidden sm:grid grid-cols-3 gap-6 text-neutral-600 bg-neutral-50 px-4 relative">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shopping-bag w-[16px] h-[16px]" data-lucide="shopping-bag" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="text-sm font-normal font-geist">Brand</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-tv w-[16px] h-[16px]" data-lucide="tv" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m17 2-5 5-5-5"></path><rect height="15" rx="2" width="20" x="2" y="7"></rect></svg>
<span className="text-sm font-normal font-geist">Smart Tech</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-tablets w-[16px] h-[16px]" data-lucide="tablets" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="5"></circle><circle cx="17" cy="17" r="5"></circle><path d="M12 17h10"></path><path d="m3.46 10.54 7.08-7.08"></path></svg>
<span className="text-sm font-normal font-geist">Self-Care</span>
</div>
</div>
</div>
</div>
<div className="w-full mt-10">
<p className="text-sm font-medium text-neutral-900 tracking-tight font-geist">Welcome to Arcade</p>
<p className="text-sm text-neutral-600 font-geist mt-1">Your curated marketplace for daily essentials, tech, home, and beauty with clean, fast shopping experience that matches your lifestyle.</p>
<button className="mt-4 w-full inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full bg-neutral-900 text-white text-sm font-normal hover:bg-neutral-800 transition-all duration-300 hover:scale-105 ripple font-geist" id="startShopping">
                Start shopping
                <svg className="lucide lucide-arrow-right w-[16px] h-[16px] text-slate-50" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative slide-up" style={{animationDelay: `0.2s`}}>
<div className="flex flex-col gap-4">
<article className="relative overflow-hidden aspect-[4/5] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6fdbbeb3-36ec-475f-8227-1bc9b7fa96a2_800w.jpg)] bg-cover border-neutral-200 border rounded-2xl hover-lift cursor-pointer transition-all duration-300 fade-in">
<div className="absolute top-3 right-3">
<span className="text-[11px] font-normal text-neutral-700 font-geist bg-white/60 border-neutral-200 border rounded-md pt-1 pr-2 pb-1 pl-2 backdrop-blur">Branding</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="leading-tight text-lg font-medium text-white tracking-tight font-geist">Nike</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/3] bg-[url(https://cdn.midjourney.com/dd56ccd6-6c09-4b53-9b97-266893cad493/0_0.png?w=800&q=80)] bg-cover border-neutral-200 border rounded-2xl hover-lift cursor-pointer transition-all duration-300 fade-in">
<div className="absolute top-3 right-3">
<span className="text-[11px] font-normal text-neutral-700 font-geist bg-white/60 border-neutral-200 border rounded-md pt-1 pr-2 pb-1 pl-2 backdrop-blur">Skin-Care</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Helix Care</p>
</div>
</article>
</div>
<div className="flex flex-col gap-4">
<article className="relative overflow-hidden aspect-[4/3] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/41ec428c-dfac-4486-b2ee-609a7cc28664_800w.jpg)] bg-cover border-neutral-200 border rounded-2xl hover-lift cursor-pointer transition-all duration-300 fade-in">
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-white/60 backdrop-blur text-[11px] text-neutral-700 font-normal border border-neutral-200 font-geist">Product</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="leading-tight text-lg font-medium text-white tracking-tight font-geist">iMac</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5bc855b1-37a5-4bde-af2f-5a2d80996c9e_800w.jpg)] bg-cover border-neutral-200 border rounded-2xl hover-lift cursor-pointer transition-all duration-300 fade-in">
<div className="absolute top-3 right-3">
<span className="text-[11px] font-normal text-neutral-700 font-geist bg-white/60 border-neutral-200 border rounded-md pt-1 pr-2 pb-1 pl-2 backdrop-blur">Makeup</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="leading-tight text-lg font-medium text-white tracking-tight font-geist">Lumen</p>
</div>
</article>
</div>
</div>
</div>
</section>

<div className="sm:p-8 bg-neutral-50 max-w-6xl border-neutral-200 border rounded-3xl mt-8 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group" style={{animation: `slideInUp 0.8s ease-out forwards`}}>
<div className="group/header relative overflow-hidden sm:p-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-transparent hover:to-neutral-100/30 rounded-2xl">
<h3 className="text-3xl font-semibold tracking-tight fade-in transition-all duration-500 group-hover/header:text-neutral-700 group-hover/header:scale-105 transform-gpu">Welcome to Arcade | Your savings hub</h3>
<div className="absolute -bottom-2 -left-2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700 ease-out group-hover/header:w-full"></div>
</div>
<div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
<article className="relative overflow-hidden aspect-[4/5] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/532c0208-00e8-4cae-a16b-d9b79a5d081c_800w.jpg)] bg-cover border-neutral-200 border rounded-2xl cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:border-neutral-300 group/card transform-gpu fade-in" style={{animation: `fadeInLeft 0.6s ease-out 0.2s both`}}>
<div className="absolute inset-0 transition-opacity duration-300 group-hover/card:opacity-90 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 rounded-2xl"></div>
<div className="absolute top-3 right-3 transform transition-all duration-300 group-hover/card:opacity-100 group-hover/card:translate-x-0 opacity-70 mr-2 translate-x-4">
<div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3 transform translate-y-2 transition-all duration-300 group-hover/card:translate-y-0">
<p className="leading-tight text-lg font-medium text-white tracking-tight font-geist transition-all duration-300 group-hover/card:text-xl group-hover/card:font-semibold">New Arrivals</p>
<div className="w-0 h-0.5 bg-white/80 mt-1 transition-all duration-500 ease-out group-hover/card:w-16"></div>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/20653000-43d0-4885-98f3-9ceb76370106_800w.jpg)] bg-cover border-neutral-200 border rounded-2xl cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:border-neutral-300 group/card transform-gpu fade-in" style={{animation: `fadeInUp 0.6s ease-out 0.4s both`}}>
<div className="absolute inset-0 transition-opacity duration-300 group-hover/card:opacity-90 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 rounded-2xl"></div>
<div className="absolute top-3 right-3 transform transition-all duration-300 group-hover/card:opacity-100 group-hover/card:translate-x-0 opacity-70 mr-2 translate-x-4">
<div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3 transform translate-y-2 transition-all duration-300 group-hover/card:translate-y-0">
<p className="leading-tight text-lg font-medium text-white tracking-tight font-geist transition-all duration-300 group-hover/card:text-xl group-hover/card:font-semibold">Best Sellers</p>
<div className="w-0 h-0.5 bg-white/80 mt-1 transition-all duration-500 ease-out group-hover/card:w-16"></div>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/10dd46c9-2ab8-44be-8554-48514ed069b9_800w.jpg)] bg-cover border-neutral-200 border rounded-2xl cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:border-neutral-300 group/card transform-gpu fade-in" style={{animation: `fadeInRight 0.6s ease-out 0.6s both`}}>
<div className="absolute inset-0 transition-opacity duration-300 group-hover/card:opacity-90 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 rounded-2xl"></div>
<div className="absolute top-3 right-3 transform transition-all duration-300 group-hover/card:opacity-100 group-hover/card:translate-x-0 opacity-70 mr-2 translate-x-4">
<div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3 transform translate-y-2 transition-all duration-300 group-hover/card:translate-y-0">
<p className="leading-tight text-lg font-medium text-white tracking-tight font-geist transition-all duration-300 group-hover/card:text-xl group-hover/card:font-semibold">Today's Picks</p>
<div className="w-0 h-0.5 bg-white/80 mt-1 transition-all duration-500 ease-out group-hover/card:w-16"></div>
</div>
</article>
</div>

</div>

<div className="sm:p-8 bg-neutral-50 max-w-6xl border-neutral-200 border rounded-3xl mt-8 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">

<div className="group relative overflow-hidden sm:p-6 ]">
<div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)`, backgroundSize: `14px 14px`}}>
</div>
<h3 className="text-3xl font-semibold tracking-tight font-geist">Self‑Care favorites | under $100</h3>
</div>
<article className="relative overflow-hidden aspect-[4/5] hover:opacity-100 transition fade-in opacity-90 w-full h-[400px] bg-[url(https://cdn.midjourney.com/f0c41b7a-42cb-4464-bd52-0348640221bd/0_0.png?w=800&q=80)] bg-cover border-neutral-200 border rounded-2xl mb-4">
<div className="absolute top-3 left-3">
</div>
<div className="absolute top-3 right-3">
</div>
<div className="absolute bottom-3 left-3 right-3">
</div>
<p className="leading-tight absolute bottom-4 left-4 text-lg font-medium text-white tracking-tight font-geist" style={{}}>Skin Care</p>
</article>

<div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
<div className="relative overflow-hidden bg-white/5 opacity-90 w-full h-[300px] border-white/10 border rounded-2xl">
<article className="relative overflow-hidden aspect-[4/5] hover:opacity-100 transition fade-in opacity-90 w-full h-[300px] bg-[url(https://cdn.midjourney.com/1b3dbbe0-a99e-4bbb-a144-7c2cf80121f7/0_0.png?w=800&q=80)] bg-cover border-neutral-200 border rounded-2xl">
<div className="absolute top-3 left-3">
</div>
<div className="absolute top-3 right-3">
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="leading-tight text-lg font-medium text-white tracking-tight font-geist" style={{}}>Hair Care</p>
</div>
</article>
</div>
<div className="relative overflow-hidden bg-white/5 opacity-90 w-full h-[300px] border-white/10 border rounded-2xl">
<article className="relative overflow-hidden aspect-[4/5] hover:opacity-100 transition fade-in opacity-90 w-full h-[300px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f16f0b02-58bb-4f2f-937a-ac5e8c06c09b_800w.jpg)] bg-cover border-neutral-200 border rounded-2xl">
<div className="absolute top-3 left-3">
</div>
<div className="absolute top-3 right-3">
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="leading-tight text-lg font-medium text-white tracking-tight font-geist" style={{}}>Fragrances</p>
</div>
</article>
</div>
<div className="relative overflow-hidden bg-white/5 opacity-90 w-full h-[300px] border-white/10 border rounded-2xl">
<article className="relative overflow-hidden aspect-[4/5] hover:opacity-100 transition fade-in opacity-90 w-full h-[300px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/276fe369-8bb6-47b8-8bb8-4f5412e367f4_800w.jpg)] bg-cover border-neutral-200 border rounded-2xl">
<div className="absolute top-3 left-3">
</div>
<div className="absolute top-3 right-3">
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="leading-tight text-lg font-medium text-white tracking-tight font-geist" style={{}}>Makeup</p>
</div>
</article>
</div>
</div>
</div><div className="sm:p-8 bg-neutral-50 max-w-6xl border-neutral-200 border rounded-3xl mt-8 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">

<div className="group relative overflow-hidden sm:p-6 ]">
<div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)`, backgroundSize: `14px 14px`}}>
</div>
<h3 className="text-3xl font-semibold tracking-tight font-geist">Shop for your home essentials</h3>
</div>
<article className="relative overflow-hidden aspect-[4/5] opacity-90 w-full h-[400px] bg-[url(https://cdn.midjourney.com/9dcf2138-f6e6-49ec-bc5b-e8761cd81601/0_0.png?w=800&q=80)] bg-cover border-neutral-200 border rounded-2xl mb-4 hover:opacity-100 transition fade-in">
<div className="absolute top-3 left-3">
</div>
<div className="absolute top-3 right-3">
</div>
<div className="absolute bottom-3 left-3 right-3">
</div>
<p className="leading-tight absolute bottom-4 left-4 text-lg font-medium text-white tracking-tight font-geist" style={{}}>
      Cleaning & Vacuums</p>
</article>

<div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4 opacity-90 w-full h-[300px]">
<div className="relative overflow-hidden bg-white/5 opacity-90 w-full h-[300px] border-white/10 border rounded-2xl">
<article className="relative overflow-hidden aspect-[4/5] hover:opacity-100 transition fade-in opacity-90 w-full h-[300px] bg-[url(https://cdn.midjourney.com/41e7bad9-4ca9-492a-812e-491116008d5c/0_0.png?w=800&q=80)] bg-cover border-neutral-200 border rounded-2xl">
<div className="absolute top-3 left-3">
</div>
<div className="absolute top-3 right-3">
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="leading-tight text-lg font-medium text-white tracking-tight font-geist" style={{}}>Home Storage</p>
</div>
</article>
</div>
<div className="relative overflow-hidden bg-white/5 border-white/10 border rounded-2xl">
<article className="relative overflow-hidden aspect-[4/5] hover:opacity-100 transition opacity-90 w-full h-[300px] bg-[url(https://cdn.midjourney.com/59b1196e-eac4-4632-88f8-efa082b7a03c/0_0.png?w=800&q=80)] bg-cover border-neutral-200 border rounded-2xl fade-in">
<div className="absolute top-3 left-3">
</div>
<div className="absolute top-3 right-3">
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="leading-tight text-lg font-medium text-white tracking-tight font-geist" style={{}}>Home Decor</p>
</div>
</article>
</div>
<div className="relative overflow-hidden bg-white/5 border-white/10 border rounded-2xl">
<article className="relative overflow-hidden aspect-[4/5] opacity-90 w-full h-[300px] bg-[url(https://cdn.midjourney.com/ae5ac21a-698a-4c15-97f4-450e6cf694e0/0_0.png?w=800&q=80)] bg-cover border-neutral-200 border rounded-2xl hover:opacity-100 transition fade-in">
<div className="absolute top-3 left-3">
</div>
<div className="absolute top-3 right-3">
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="leading-tight text-lg font-medium text-white tracking-tight font-geist" style={{}}>Bedding</p>
</div>
</article>
</div>
</div>
</div><section className="sm:px-6 lg:px-8 max-w-6xl mt-20 mr-auto ml-auto pr-0 pl-0">
<div className="flex items-end justify-between gap-4">
<div className="">
<h2 className="sm:text-3xl text-3xl font-semibold tracking-tight font-geist">Today's Deals</h2>
<p className="mt-1 text-sm text-neutral-600 font-sans">Limited time offers. While supplies last.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-700 transition-all duration-200 hover:scale-105 font-sans" href="#all-deals">
            View all deals
            <svg className="w-4 h-4" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="relative mt-4">
<button className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white border border-neutral-200 shadow-sm p-2 hover:bg-neutral-50 transition-all duration-200 hover:scale-110 ripple" id="dealsPrev">
<svg className="w-4 h-4" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white border border-neutral-200 shadow-sm p-2 hover:bg-neutral-50 transition-all duration-200 hover:scale-110 ripple" id="dealsNext">
<svg className="w-[16px] h-[16px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pr-10 pb-20 pl-10">

<article className="min-w-[260px] sm:min-w-[300px] snap-start bg-neutral-50 border-neutral-200 border rounded-lg shadow-xl fade-in">
<div className="pt-3 pr-3 pb-3 pl-3">
<div className="overflow-hidden bg-neutral-100 rounded-lg w-full h-full">
<img alt="Magnetic tiles set" className="transition-transform duration-300 hover:scale-105 w-full h-full object-contain" src="https://cdn.midjourney.com/1ead644f-d4d4-40b5-a570-d56b277fae84/0_0.png?w=800&q=80" />
</div>
</div>
<div className="pr-3 pb-4 pl-3">
<div className="flex flex-wrap gap-2 items-center">
<span className="inline-flex items-center rounded-md bg-rose-600 text-white text-[13px] px-2 py-1 font-semibold">35% off</span>
<span className="inline-flex items-center text-[13px] font-medium text-neutral-600 bg-neutral-200/70 rounded-md pt-1 pr-2 pb-1 pl-2">Limited Time Deal</span>
</div>
<div className="mt-2 text-lg font-semibold tracking-tight font-sans">S$36<span className="align-top text-[11px]">.39</span> <span className="ml-2 text-sm text-neutral-500 font-normal line-through">S$55.99</span></div>
<p className="mt-1 text-sm text-neutral-800 line-clamp-2 font-sans">Magnetic tiles 100‑piece colorful building set</p>
<button className="inline-flex gap-2 hover:bg-gray-700/60 hover:text-white hover:ring-gray-500/40 transition-all duration-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400/60 text-sm font-medium text-gray-300 w-full max-w-sm ring-gray-600/30 ring-1 rounded-lg mt-3 pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-center" type="button">Add to Cart</button>
</div>
</article>
<article className="min-w-[260px] sm:min-w-[300px] snap-start bg-neutral-50 border-neutral-200 border rounded-lg shadow-xl fade-in">
<div className="p-3">
<div className="rounded-lg bg-neutral-100 overflow-hidden">
<img alt="MagSafe phone case" className="w-full h-full object-contain transition-transform duration-300 hover:scale-105" src="https://cdn.midjourney.com/d7717c87-22e5-45b5-9b2a-17127ced3c39/0_0.png?w=800&q=80" />
</div>
</div>
<div className="pr-3 pb-4 pl-3">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center text-[13px] font-medium text-neutral-600 bg-neutral-200/70 rounded-md pt-1 pr-2 pb-1 pl-2">Limited Time Deal</span>
</div>
<div className="mt-2 text-lg font-semibold tracking-tight font-sans">S$49<span className="align-top text-[11px]">.59</span></div>
<p className="mt-1 text-sm text-neutral-800 line-clamp-2 font-sans">MagSafe‑compatible case with slim grip frame</p>
<button className="inline-flex gap-2 hover:bg-gray-700/60 hover:text-white hover:ring-gray-500/40 transition-all duration-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400/60 text-sm font-medium text-gray-300 w-full max-w-sm ring-gray-600/30 ring-1 rounded-lg mt-3 pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-center" data-price="49.59" data-product="MagSafe Case">
                  Add to Cart
                </button>
</div>
</article>
<article className="min-w-[260px] sm:min-w-[300px] snap-start bg-neutral-50 border-neutral-200 border rounded-lg shadow-xl fade-in">
<div className="p-3">
<div className="rounded-lg bg-neutral-100 overflow-hidden">
<img alt="Portable monitor" className="w-full h-full object-contain transition-transform duration-300 hover:scale-105" src="https://cdn.midjourney.com/0a0a6c54-45b0-4955-b91c-bcfcbaa7f16a/0_0.png?w=800&q=80" />
</div>
</div>
<div className="pr-3 pb-4 pl-3">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center rounded-md bg-rose-600 text-white text-[13px] px-2 py-1 font-semibold">44% off</span>
<span className="inline-flex items-center text-[13px] font-medium text-neutral-600 bg-neutral-200/70 rounded-md pt-1 pr-2 pb-1 pl-2">Limited Time Deal</span>
</div>
<div className="mt-2 text-lg font-semibold tracking-tight font-sans">S$149<span className="align-top text-[11px]">.99</span> <span className="ml-2 text-sm text-neutral-500 font-normal line-through">S$269.98</span></div>
<p className="mt-1 text-sm text-neutral-800 line-clamp-2 font-sans">16″ 2K portable monitor with HDR and USB‑C</p>
<button className="inline-flex gap-2 hover:bg-gray-700/60 hover:text-white hover:ring-gray-500/40 transition-all duration-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400/60 text-sm font-medium text-gray-300 w-full max-w-sm ring-gray-600/30 ring-1 rounded-lg mt-3 pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-center" data-price="149.99" data-product="Portable Monitor">
                  Add to Cart
                </button>
</div>
</article>
<article className="min-w-[260px] sm:min-w-[300px] snap-start bg-neutral-50 border-neutral-200 border rounded-lg shadow-xl fade-in">
<div className="p-3">
<div className="rounded-lg bg-neutral-100 overflow-hidden">
<img alt="USB‑C charger" className="w-full h-full object-contain transition-transform duration-300 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b201fbab-0845-4780-9fa7-7018d249dbca_800w.jpg" />
</div>
</div>
<div className="pr-3 pb-4 pl-3">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center rounded-md bg-rose-600 text-white text-[13px] px-2 py-1 font-semibold">40% off</span>
<span className="inline-flex items-center text-[13px] font-medium text-neutral-600 bg-neutral-200/70 rounded-md pt-1 pr-2 pb-1 pl-2">Limited Time Deal</span>
</div>
<div className="mt-2 text-lg font-semibold tracking-tight font-sans">S$41<span className="align-top text-[11px]">.99</span> <span className="ml-2 text-sm text-neutral-500 font-normal line-through">S$69.99</span></div>
<p className="mt-1 text-sm text-neutral-800 line-clamp-2 font-sans">100W USB‑C GaN fast charger with dual ports</p>
<button className="inline-flex gap-2 hover:bg-gray-700/60 hover:text-white hover:ring-gray-500/40 transition-all duration-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400/60 text-sm font-medium text-gray-300 w-full max-w-sm ring-gray-600/30 ring-1 rounded-lg mt-3 pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-center" data-price="41.99" data-product="USB-C Charger">
                  Add to Cart
                </button>
</div>
</article>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 max-w-6xl mr-auto ml-auto pr-4 pl-4">
<div className="rounded-lg border border-neutral-200 bg-white p-6 sm:p-8 text-center hover-lift fade-in">
<h3 className="sm:text-2xl text-xl font-semibold text-neutral-900 tracking-tight">See personalized recommendations</h3>
<div className="mt-4 flex justify-center">
<button className="inline-flex items-center gap-2 rounded-md bg-amber-400 hover:bg-amber-500 text-neutral-900 px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 ripple font-sans" id="signInBtn">
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
              Sign in
            </button>
</div>
<p className="mt-2 text-sm text-neutral-600 font-sans">
            New customer?
            <a className="font-medium text-neutral-900 hover:text-neutral-700 transition-colors hover:underline" href="#start">Start here.</a>
</p>
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
