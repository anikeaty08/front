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



      // Initialize Lucide Icons
      lucide.createIcons();

      // Navigation Logic
      function navigateTo(pageId) {
          // Hide all pages
          document.querySelectorAll('.page-section').forEach(section => {
              section.classList.remove('active');
          });

          // Show target page
          const targetSection = document.getElementById(pageId);
          if (targetSection) {
              targetSection.classList.add('active');
          }

          // Scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });

          // Update Nav State
          updateNavState(pageId);

          // Close mobile menu if open
          const mobileMenu = document.getElementById('mobile-menu');
          if (!mobileMenu.classList.contains('hidden')) {
              toggleMobileMenu();
          }

          // Re-trigger scroll animations for the new page
          setTimeout(handleScrollAnimations, 100);
      }

      function updateNavState(activePage) {
          // Update Desktop Nav Lines
          const navIds = ['home', 'about', 'products', 'services', 'gallery'];
          navIds.forEach(id => {
              const line = document.getElementById(`nav-line-${id}`);
              const btn = document.getElementById(`nav-${id}`);

              if (line && btn) {
                  if (id === activePage) {
                      line.classList.remove('scale-x-0');
                      line.classList.add('scale-x-100');
                      btn.classList.add('text-orange-600');
                      btn.classList.remove('text-stone-600');
                  } else {
                      line.classList.add('scale-x-0');
                      line.classList.remove('scale-x-100');
                      btn.classList.remove('text-orange-600');
                      btn.classList.add('text-stone-600');
                  }
              }
          });

          // Update Mobile Nav Colors
          navIds.concat(['contact']).forEach(id => {
              const mobileBtn = document.getElementById(`mobile-nav-${id}`);
              if (mobileBtn) {
                  if (id === activePage) {
                      mobileBtn.classList.add('text-orange-600');
                      mobileBtn.classList.remove('text-stone-600');
                  } else {
                      mobileBtn.classList.remove('text-orange-600');
                      mobileBtn.classList.add('text-stone-600');
                  }
              }
          });
      }

      function toggleMobileMenu() {
          const menu = document.getElementById('mobile-menu');
          if (menu.style.display === 'none' || menu.classList.contains('hidden')) {
              menu.style.display = 'flex';
              menu.style.visibility = 'visible';
              menu.classList.remove('hidden');
              // Small animation
              menu.style.opacity = '0';
              menu.style.transform = 'translateY(-10px)';
              setTimeout(() => {
                  menu.style.transition = 'all 0.3s ease';
                  menu.style.opacity = '1';
                  menu.style.transform = 'translateY(0)';
              }, 10);
          } else {
              menu.style.opacity = '0';
              menu.style.transform = 'translateY(-10px)';
              setTimeout(() => {
                  menu.classList.add('hidden');
                  menu.style.display = 'none';
              }, 300);
          }
      }

      // Navbar Scroll Effect
      window.addEventListener('scroll', () => {
          const navbar = document.getElementById('navbar');
          if (window.scrollY > 20) {
              navbar.classList.add('bg-white/90', 'shadow-sm');
              navbar.classList.remove('backdrop-blur-md');
          } else {
              navbar.classList.remove('bg-white/90', 'shadow-sm');
              navbar.classList.add('backdrop-blur-md');
          }
          handleScrollAnimations();
      });

      // Scroll Animation Logic (Intersection Observer)
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
                  observer.unobserve(entry.target); // Only animate once
              }
          });
      }, observerOptions);

      function handleScrollAnimations() {
          const activeSection = document.querySelector('.page-section.active');
          if(activeSection) {
              const elements = activeSection.querySelectorAll('.reveal-on-scroll');
              elements.forEach(el => observer.observe(el));
          }
      }

      // Initial call
      handleScrollAnimations();

      // Form Validation & Handling
      function validateContactForm() {
          const name = document.getElementById('contact-name').value;
          const email = document.getElementById('contact-email').value;
          const message = document.getElementById('contact-message').value;
          const btn = document.getElementById('contact-submit-btn');

          if (name && email && message) {
              btn.disabled = false;
              btn.classList.remove('bg-gray-300', 'cursor-not-allowed');
              btn.classList.add('bg-stone-900', 'hover:bg-stone-800', 'cursor-pointer');
          } else {
              btn.disabled = true;
              btn.classList.add('bg-gray-300', 'cursor-not-allowed');
              btn.classList.remove('bg-stone-900', 'hover:bg-stone-800', 'cursor-pointer');
          }
      }

      function validateQuoteForm() {
          const name = document.getElementById('quote-name').value;
          const phone = document.getElementById('quote-phone').value;
          const material = document.getElementById('quote-material').value;
          const btn = document.getElementById('quote-submit-btn');

          if (name && phone && material) {
              btn.disabled = false;
              btn.classList.remove('bg-gray-300', 'cursor-not-allowed');
              btn.classList.add('bg-orange-600', 'hover:bg-orange-700', 'cursor-pointer', 'shadow-orange-500/25');
          } else {
              btn.disabled = true;
              btn.classList.add('bg-gray-300', 'cursor-not-allowed');
              btn.classList.remove('bg-orange-600', 'hover:bg-orange-700', 'cursor-pointer', 'shadow-orange-500/25');
          }
      }

      function handleFormSubmit(e) {
          e.preventDefault();
          const btn = e.target.querySelector('button[type="submit"]');
          const originalText = btn.innerText;

          // Loading State
          btn.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing...`;

          // Simulate API call
          setTimeout(() => {
              // Reset Button
              btn.innerText = originalText;

              // Show Success Modal
              const refNo = Math.floor(100000 + Math.random() * 900000);
              document.getElementById('modal-ref-no').innerText = '#REF-' + refNo;

              const modal = document.getElementById('success-modal');
              const backdrop = document.getElementById('modal-backdrop');
              const content = document.getElementById('modal-content');

              modal.classList.remove('hidden');
              // Trigger reflow
              void modal.offsetWidth;

              // Animate In
              backdrop.classList.remove('opacity-0');
              content.classList.remove('scale-90', 'opacity-0');
              content.classList.add('scale-100', 'opacity-100');

              // Reset Form
              e.target.reset();
              if(e.target.id === 'contact-form') validateContactForm();
              if(e.target.id === 'quote-form') validateQuoteForm();

          }, 1500);
      }

      function closeModal() {
          const modal = document.getElementById('success-modal');
          const backdrop = document.getElementById('modal-backdrop');
          const content = document.getElementById('modal-content');

          // Animate Out
          backdrop.classList.add('opacity-0');
          content.classList.remove('scale-100', 'opacity-100');
          content.classList.add('scale-90', 'opacity-0');

          setTimeout(() => {
              modal.classList.add('hidden');
          }, 300);
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
      

<div className="fixed inset-0 z-[100] hidden flex items-center justify-center p-4" id="success-modal">

<div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity opacity-0" id="modal-backdrop" onclick="closeModal()"></div>

<div className="relative bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl transform scale-90 opacity-0 transition-all duration-300 flex flex-col items-center text-center z-10" id="modal-content" style={{}}>
<div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mb-5 text-stone-800" style={{}}>
<svg className="lucide lucide-check" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<h3 className="text-2xl font-playfair font-bold text-stone-900 mb-2" style={{}}>
          Congratulations!
        </h3>
<p className="font-medium font-playfair mb-6 text-stone-700" style={{}}>
          Your request has been submitted successfully.
        </p>
<div className="bg-stone-50 border border-stone-100 px-6 py-3 rounded-xl mb-6 w-full" style={{}}>
<p className="text-xs text-stone-400 uppercase tracking-wider font-semibold mb-1" style={{}}>
            Reference No
          </p>
<p className="text-xl font-mono font-bold text-stone-800 tracking-tight" id="modal-ref-no" style={{}}>
            #REF-...
          </p>
</div>
<button className="w-full bg-stone-900 text-white py-3 rounded-lg font-medium hover:bg-stone-800 transition-colors font-playfair" onclick="closeModal()" style={{}}>
          Close
        </button>
</div>
</div>

<nav className="fixed w-full z-50 border-b transition-all duration-300 border-stone-200" id="navbar" style={{}}>
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#" onclick="navigateTo('home')">
<div className="transition-colors text-white rounded-md pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow-sm group-hover:bg-red-700 bg-red-600" style={{}}>
<svg className="lucide lucide-building-2 w-5 h-5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<span className="text-lg tracking-tight text-stone-800 font-playfair font-bold" style={{}}>
            JAY BHOLENATH ENTERPRISES
          </span>
</a>

<div className="hidden md:flex gap-x-8 gap-y-8 items-center">
<button className="group transition-colors text-sm font-medium text-red-600 font-playfair relative" id="nav-home" onclick="navigateTo('home')">
            Home
            <span className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-left bg-gradient-to-r transition-transform duration-300 ease-out scale-x-100 to-red-500 from-red-600" id="nav-line-home" style={{}}></span>
</button>
<button className="transition-colors group hover:text-red-600 text-sm font-medium text-stone-800 font-playfair relative" id="nav-about" onclick="navigateTo('about')">
            About
            <span className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 scale-x-0 bg-red-600" id="nav-line-about" style={{}}></span>
</button>
<button className="transition-colors group hover:text-red-600 text-sm font-medium font-playfair relative text-stone-800" id="nav-products" onclick="navigateTo('products')">
            Products
            <span className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 scale-x-0 bg-red-600" id="nav-line-products" style={{}}></span>
</button>
<button className="transition-colors group text-sm font-medium font-playfair relative hover:text-red-600 text-stone-800" id="nav-services" onclick="navigateTo('services')" style={{}}>
            Services
            <span className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 scale-x-0 bg-red-600" id="nav-line-services" style={{}}></span>
</button>
<button className="transition-colors group text-sm font-medium font-playfair relative hover:text-red-600 text-stone-800" id="nav-gallery" onclick="navigateTo('gallery')" style={{}}>
            Gallery
            <span className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 scale-x-0 bg-red-600" id="nav-line-gallery" style={{}}></span>
</button>
<button className="transition-all hover:shadow-md hover:-translate-y-0.5 hover:bg-stone-800 text-xs font-medium text-white font-playfair bg-gradient-to-r from-sky-400 to-sky-600 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm" onclick="navigateTo('quote')">
            Get a Quote
          </button>
</div>

<button className="md:hidden transition-colors hover:text-stone-900 text-stone-800" onclick="toggleMobileMenu()" style={{}}>
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="hidden md:hidden border-b absolute w-full left-0 top-16 px-6 py-4 flex flex-col gap-4 shadow-lg bg-white border-stone-100" id="mobile-menu" style={{visibility: 'hidden', display: 'none'}}>
<button className="text-left text-sm font-playfair font-medium text-red-600" id="mobile-nav-home" onclick="navigateTo('home')" style={{}}>
          Home
        </button>
<button className="text-left text-sm font-playfair font-medium hover:text-red-600 text-stone-800" id="mobile-nav-about" onclick="navigateTo('about')" style={{}}>
          About
        </button>
<button className="text-left text-sm font-playfair font-medium hover:text-red-600 text-stone-800" id="mobile-nav-products" onclick="navigateTo('products')" style={{}}>
          Products
        </button>
<button className="text-left text-sm font-playfair font-medium hover:text-red-600 text-stone-800" id="mobile-nav-services" onclick="navigateTo('services')" style={{}}>
          Services
        </button>
<button className="text-left text-sm font-playfair font-medium hover:text-red-600 text-stone-800" id="mobile-nav-contact" onclick="navigateTo('contact')" style={{}}>
          Contact
        </button>
<button className="text-left text-sm font-playfair font-medium text-red-600" onclick="navigateTo('quote')" style={{}}>
          Get a Quote
        </button>
</div>
</nav>

<main className="flex-grow pt-16">

<section className="page-section active" id="home">

<div className="flex overflow-hidden bg-stone-900 w-full h-[85vh] relative items-center justify-center" style={{}}>
<div className="z-0 opacity-40 absolute top-0 right-0 bottom-0 left-0">
<img alt="Construction background" className="animate-[scaleIn_20s_infinite_alternate] w-full h-full object-cover" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&amp;q=80"/>
</div>
<div className="bg-gradient-to-t from-stone-900 via-stone-900/40 to-stone-900/60 z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-20 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="reveal-on-scroll fade-down inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs mb-6 backdrop-blur-sm is-visible font-playfair font-medium bg-red-500/10 border-red-500/20 text-red-400" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-red-400" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" style={{}}></span>
</span>
              Trusted by top builders
            </div>
<h1 className="reveal-on-scroll fade-up delay-100 md:text-7xl leading-tight text-5xl text-white tracking-tight mb-6 is-visible font-playfair font-bold" style={{}}>
              Reliable Materials for
              <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r font-playfair font-bold from-red-400 to-red-200" style={{}}>
                Strong Foundations.
              </span>
</h1>
<p className="reveal-on-scroll fade-up delay-200 text-lg max-w-2xl mx-auto mb-8 is-visible text-stone-300 font-playfair font-medium" style={{}}>
              Quality • Trust • On-Time Delivery. Jay Bholenath Enterprises
              connects you with premium construction resources.
            </p>
<div className="reveal-on-scroll fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 is-visible">
<button className="w-full sm:w-auto px-8 py-3 rounded-lg transition-all shadow-lg hover:-translate-y-1 text-white font-playfair font-medium hover:bg-red-500 hover:shadow-red-500/25 bg-red-600" onclick="navigateTo('quote')" style={{}}>
                Get a Quote
              </button>
<button className="w-full sm:w-auto px-8 py-3 backdrop-blur-sm border rounded-lg transition-all hover:-translate-y-1 bg-white/10 hover:bg-white/20 border-white/10 text-white font-playfair font-medium" onclick="navigateTo('contact')" style={{}}>
                Contact Us
              </button>
</div>
</div>
</div>

<div className="py-24 bg-white" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll fade-up is-visible">
<h2 className="text-3xl tracking-tight text-stone-900 font-playfair font-bold" style={{}}>
<span className="relative inline-block group cursor-default">
                  Why Choose Us
                  <span className="-bottom-1 origin-left transition-transform duration-300 group-hover:scale-x-100 bg-red-600 w-full h-1 rounded-full absolute left-0 scale-x-0"></span>
</span>
</h2>
<p className="mt-4 text-sm font-playfair font-medium text-stone-700" style={{}}>
                Building trust with every delivery.
              </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 gap-x-8 gap-y-8">

<div className="reveal-on-scroll fade-up delay-100 p-6 rounded-2xl border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group bg-stone-50 border-stone-100 is-visible hover:border-red-200" style={{}}>
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-red-50" style={{}}>
<svg className="lucide lucide-shield-check w-6 h-6 text-cyan-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg text-stone-900 mb-2 font-playfair font-medium" style={{}}>
                  Premium Quality
                </h3>
<p className="text-sm leading-relaxed font-playfair font-medium text-stone-700" style={{}}>
                  Certified products from top brands like UltraTech and Tata
                  Steel.
                </p>
</div>

<div className="reveal-on-scroll fade-up delay-200 p-6 rounded-2xl border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group bg-stone-50 border-stone-100 is-visible hover:border-red-200" style={{}}>
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-red-50" style={{}}>
<svg className="lucide lucide-truck w-6 h-6 text-cyan-600" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<h3 className="text-lg mb-2 text-stone-900 font-playfair font-medium" style={{}}>
                  Fast Delivery
                </h3>
<p className="text-sm leading-relaxed font-playfair font-medium text-stone-700" style={{}}>
                  Same-day delivery options available for local construction
                  sites.
                </p>
</div>

<div className="reveal-on-scroll fade-up delay-300 p-6 rounded-2xl border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group bg-stone-50 border-stone-100 is-visible hover:border-red-200" style={{}}>
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-red-50" style={{}}>
<svg className="lucide lucide-wallet w-6 h-6 text-cyan-600" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<h3 className="text-lg mb-2 text-stone-900 font-playfair font-medium" style={{}}>
                  Best Pricing
                </h3>
<p className="text-sm leading-relaxed font-playfair font-medium text-stone-700" style={{}}>
                  Competitive wholesale rates for bulk orders and contractors.
                </p>
</div>

<div className="reveal-on-scroll fade-up delay-400 p-6 rounded-2xl border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group bg-stone-50 border-stone-100 is-visible hover:border-red-200" style={{}}>
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-red-50" style={{}}>
<svg className="lucide lucide-leaf w-6 h-6 text-cyan-600" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<h3 className="text-lg mb-2 text-stone-900 font-playfair font-medium" style={{}}>
                  Eco Friendly
                </h3>
<p className="text-sm leading-relaxed font-playfair font-medium text-stone-700" style={{}}>
                  Sustainable material options including fly ash bricks and
                  blocks.
                </p>
</div>
</div>
</div>
</div>

<div className="bg-stone-50 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-end justify-between mb-12 reveal-on-scroll fade-up is-visible">
<div className="">
<h2 className="text-3xl tracking-tight text-stone-900 font-playfair font-bold" style={{}}>
<span className="relative inline-block group cursor-default">
                  Featured Materials
                  <span className="-bottom-1 origin-left transition-transform duration-300 group-hover:scale-x-100 bg-red-600 w-full h-1 rounded-full absolute left-0 scale-x-0"></span>
</span>
</h2>
<p className="mt-2 font-playfair font-medium text-stone-700" style={{}}>
                Everything you need from foundation to finish.
              </p>
</div>
<button className="mt-4 md:mt-0 flex items-center gap-2 transition-colors group font-playfair font-medium text-red-600 hover:text-red-700" onclick="navigateTo('products')" style={{}}>
              View All Products
              <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6">

<div className="reveal-on-scroll fade-up delay-100 group relative overflow-hidden rounded-2xl shadow-sm border hover:shadow-xl transition-all duration-500 bg-white border-stone-100 is-visible" style={{}}>
<div className="aspect-video overflow-hidden bg-stone-200" style={{}}>
<img alt="Cement" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover rounded" src="https://images.unsplash.com/photo-1637241612956-b7309005288b?w=800&amp;q=80"/>
</div>
<div className="pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="text-lg text-stone-900 font-playfair font-medium" style={{}}>
                  Cement &amp; Binders
                </h3>
<p className="text-sm mt-2 font-playfair font-medium text-stone-700" style={{}}>
                  UltraTech, ACC, Ambuja. High-grade cement for durability.
                </p>
</div>
</div>

<div className="reveal-on-scroll fade-up delay-200 group relative overflow-hidden rounded-2xl shadow-sm border hover:shadow-xl transition-all duration-500 bg-white border-stone-100 is-visible" style={{}}>
<div className="aspect-video overflow-hidden bg-stone-200" style={{}}>
<img alt="Steel" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1611236544238-2d272eff2cd6?w=800&amp;q=80"/>
</div>
<div className="p-6 relative">
<h3 className="text-lg font-medium text-stone-900 font-playfair" style={{}}>
                  TMT Steel Bars
                </h3>
<p className="text-sm mt-2 font-playfair font-medium text-stone-700" style={{}}>
                  Rust-resistant, high-strength steel for structural integrity.
                </p>
</div>
</div>

<div className="reveal-on-scroll fade-up delay-300 group relative overflow-hidden rounded-2xl shadow-sm border hover:shadow-xl transition-all duration-500 bg-white border-stone-100 is-visible" style={{}}>
<div className="aspect-video overflow-hidden bg-stone-200" style={{}}>
<img alt="Bricks" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1763771421047-7363eeece6f7?w=800&amp;q=80"/>
</div>
<div className="p-6 relative">
<h3 className="text-lg text-stone-900 font-playfair font-medium" style={{}}>
                  Bricks &amp; Blocks
                </h3>
<p className="text-sm mt-2 font-playfair font-medium text-stone-700" style={{}}>
                  Red bricks, Fly ash bricks, and concrete blocks available.
                </p>
</div>
</div>
</div>
</div>

<div className="overflow-hidden text-white bg-gradient-to-r from-blue-400 to-blue-600 py-20 relative">
<div className="animate-[spin_60s_linear_infinite] opacity-10 pt-12 pr-12 pb-12 pl-12 absolute top-0 right-0">
<svg className="lucide lucide-sprout w-64 h-64" data-lucide="sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="reveal-on-scroll fade-right is-visible">
<h2 className="text-3xl md:text-4xl tracking-tight font-playfair font-bold" style={{}}>
                Think Green. Act Green.
              </h2>
<p className="mt-4 max-w-lg font-playfair font-medium text-red-100" style={{}}>
                We are committed to sustainable construction. Ask about our
                eco-friendly fly ash bricks and low-carbon cement options.
              </p>
</div>
<div className="reveal-on-scroll fade-left delay-200 is-visible">
<button className="px-8 py-3 rounded-lg transition-colors shadow-lg hover:-translate-y-1 transform duration-300 bg-white font-playfair font-medium text-red-900 hover:bg-red-50" onclick="navigateTo('contact')" style={{}}>
                Partner With Us
              </button>
</div>
</div>
</div>

<div className="bg-white pt-24 pb-24">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h2 className="reveal-on-scroll fade-up text-3xl tracking-tight text-center mb-16 text-stone-900 is-visible font-playfair font-bold" style={{}}>
<span className="inline-block group cursor-default relative">
                Client Testimonials
                <span className="absolute -bottom-2 left-0 h-1 w-full bg-red-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal-on-scroll fade-up delay-100 p-8 rounded-2xl border hover:shadow-lg transition-all duration-300 relative group bg-stone-50 border-stone-100 is-visible" style={{}}>
<div className="absolute -top-4 left-8 text-6xl opacity-50 font-playfair font-bold text-red-200" style={{}}>
                  "
                </div>
<div className="flex items-center gap-1 mb-4 text-red-500" style={{}}>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm mb-6 relative z-10 font-playfair font-medium text-stone-800" style={{}}>
                  "Jay Bholenath Enterprises provided excellent service. The
                  cement and steel arrived exactly when needed, preventing any
                  site delays."
                </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-stone-200 font-playfair font-medium text-stone-700" style={{}}>
                    R
                  </div>
<div>
<p className="text-sm text-stone-900 font-playfair font-medium" style={{}}>
                      Rahul Sharma
                    </p>
<p className="text-xs font-playfair font-medium text-stone-700" style={{}}>
                      Contractor
                    </p>
</div>
</div>
</div>

<div className="reveal-on-scroll fade-up delay-200 hover:shadow-lg transition-all duration-300 group is-visible bg-stone-50 border-stone-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute -top-4 left-8 text-6xl opacity-50 font-playfair font-bold text-red-200" style={{}}>
                  "
                </div>
<div className="flex items-center gap-1 mb-4 text-red-500" style={{}}>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm mb-6 relative z-10 font-playfair font-medium text-stone-800" style={{}}>
                  "Their pricing on bulk sand and aggregates is the best in the
                  market. Highly recommended for large projects."
                </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-stone-200 font-playfair font-medium text-stone-700" style={{}}>
                    A
                  </div>
<div className="">
<p className="text-sm text-stone-900 font-playfair font-medium" style={{}}>
                      Amit Patel
                    </p>
<p className="text-xs font-playfair font-medium text-stone-700" style={{}}>
                      Developer
                    </p>
</div>
</div>
</div>

<div className="reveal-on-scroll fade-up delay-300 hover:shadow-lg transition-all duration-300 group border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative bg-stone-50 border-stone-100 is-visible" style={{}}>
<div className="absolute -top-4 left-8 text-6xl opacity-50 font-playfair font-bold text-red-200" style={{}}>
                  "
                </div>
<div className="flex items-center gap-1 mb-4 text-red-500" style={{}}>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm mb-6 relative z-10 font-playfair font-medium text-stone-800" style={{}}>
                  "Genuine products and very transparent dealings. The team is
                  professional and polite."
                </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-stone-200 font-playfair font-medium text-stone-700" style={{}}>
                    S
                  </div>
<div className="">
<p className="text-sm text-stone-900 font-playfair font-medium" style={{}}>
                      Sneha Gupta
                    </p>
<p className="text-xs font-playfair font-medium text-stone-700" style={{}}>
                      Home Owner
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="about">
<div className="relative w-full h-[45vh] flex items-center justify-center bg-stone-900 overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-stone-900/40"></div>
<div className="relative z-10 text-center max-w-4xl mx-auto px-6 reveal-on-scroll fade-down is-visible">
<h1 className="text-5xl font-bold text-white tracking-tight font-playfair mb-4">
<span className="relative inline-block group cursor-default">
                About Us
                <span className="absolute -bottom-2 left-0 h-1 w-full bg-red-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
</span>
</h1>
<p className="text-stone-300 font-playfair font-medium text-lg">
              Building relationships as strong as our materials.
            </p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll fade-right">
<h2 className="text-2xl mb-6 font-playfair font-bold" style={{}}>
<span className="relative inline-block group cursor-default">
                  Our Story
                  <span className="absolute -bottom-1 left-0 h-1 w-full bg-red-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
</span>
</h2>
<p className="mb-4 leading-relaxed font-playfair font-medium text-stone-800" style={{}}>
                Jay Bholenath Enterprises has been a cornerstone in the building
                materials industry for over a decade. We started with a simple
                mission: to provide high-quality construction materials with
                reliability and transparency.
              </p>
<p className="mb-6 leading-relaxed font-playfair font-medium text-stone-800" style={{}}>
                Today, we serve hundreds of contractors, builders, and
                homeowners, ensuring that every structure built with our
                materials stands the test of time.
              </p>
</div>
<div className="reveal-on-scroll zoom-in relative h-96 rounded-2xl overflow-hidden shadow-2xl">
<img alt="Construction site" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=1000"/>
</div>
</div>
</div>
<div className="py-20 bg-stone-900 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-12 opacity-5">
<svg className="lucide lucide-anchor" fill="none" height="400" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="400" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="5" r="3"></circle>
<line x1="12" x2="12" y1="22" y2="8"></line>
<path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="reveal-on-scroll fade-right p-8 rounded-2xl bg-stone-800/50 border border-stone-700/50 backdrop-blur-sm hover:border-red-500/30 transition-colors duration-300">
<div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-red-900/20">
<svg className="lucide lucide-target" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="6"></circle>
<circle cx="12" cy="12" r="2"></circle>
</svg>
</div>
<h3 className="text-3xl font-playfair font-bold mb-4">
                  Our Mission
                </h3>
<p className="text-stone-300 font-playfair leading-relaxed text-lg">
                  To supply sustainable, high-grade materials timely to fuel the
                  nation's infrastructure growth, ensuring every project is
                  built on a foundation of quality and trust.
                </p>
</div>
<div className="reveal-on-scroll fade-left p-8 rounded-2xl bg-stone-800/50 border border-stone-700/50 backdrop-blur-sm hover:border-red-500/30 transition-colors duration-300">
<div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-red-900/20">
<svg className="lucide lucide-eye" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<h3 className="text-3xl font-playfair font-bold mb-4">
                  Our Vision
                </h3>
<p className="text-stone-300 font-playfair leading-relaxed text-lg">
                  To be the most trusted name in building material supply chains
                  across the region, recognized for our integrity, innovation,
                  and unwavering customer-centric approach.
                </p>
</div>
</div>
</div>
</div>

<div className="py-24 bg-stone-50" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl mb-12 text-center reveal-on-scroll fade-up font-playfair font-bold" style={{}}>
<span className="relative inline-block group cursor-default">
                Meet The Team
                <span className="absolute -bottom-1 left-0 h-1 w-full bg-red-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal-on-scroll fade-up delay-100 relative h-[450px] rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
<img className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-2xl font-playfair font-bold">Rajesh Kumar</h3>
<p className="text-stone-300 font-playfair font-medium mb-6">
                    Founder &amp; CEO
                  </p>
<div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 transform translate-y-2 group-hover:translate-y-0">
<a className="p-2 bg-white/10 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="p-2 bg-white/10 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300" href="#">
<svg className="lucide lucide-facebook" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
</div>
</div>
</div>

<div className="reveal-on-scroll fade-up delay-200 relative h-[450px] rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
<img className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-2xl font-playfair font-bold">Priya Singh</h3>
<p className="text-stone-300 font-playfair font-medium mb-6">
                    Sales Manager
                  </p>
<div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 transform translate-y-2 group-hover:translate-y-0">
<a className="p-2 bg-white/10 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="p-2 bg-white/10 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300" href="#">
<svg className="lucide lucide-facebook" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
</div>
</div>
</div>

<div className="reveal-on-scroll fade-up delay-300 relative h-[450px] rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
<img className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-2xl font-playfair font-bold">Vikram Das</h3>
<p className="text-stone-300 font-playfair font-medium mb-6">
                    Logistics Head
                  </p>
<div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 transform translate-y-2 group-hover:translate-y-0">
<a className="p-2 bg-white/10 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="p-2 bg-white/10 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300" href="#">
<svg className="lucide lucide-facebook" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="products">
<div className="relative w-full h-[45vh] flex items-center justify-center bg-stone-900 overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-stone-900/40"></div>
<div className="relative z-10 text-center max-w-4xl mx-auto px-6 reveal-on-scroll fade-down is-visible">
<h1 className="text-5xl font-bold text-white tracking-tight font-playfair mb-4">
<span className="relative inline-block group cursor-default">
                Our Products
                <span className="absolute -bottom-2 left-0 h-1 w-full bg-red-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
</span>
</h1>
<p className="text-stone-300 font-playfair font-medium text-lg">
              Comprehensive range of building materials for every stage of
              construction.
            </p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="product-grid">

<div className="reveal-on-scroll fade-up delay-100 group border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white border-stone-200" style={{}}>
<div className="h-64 overflow-hidden relative bg-stone-100" style={{}}>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=800"/>
<div className="absolute bottom-3 left-3 backdrop-blur px-3 py-1 text-xs rounded-md shadow-sm bg-white/95 text-stone-800 font-playfair font-medium" style={{}}>
                  Cement
                </div>
</div>
<div className="p-6">
<h3 className="text-lg text-stone-900 font-playfair font-medium" style={{}}>
                  Cement (PPC/OPC)
                </h3>
<p className="text-sm mt-2 line-clamp-2 font-playfair font-medium text-stone-700" style={{}}>
                  UltraTech, ACC, Ambuja. Grade 43 and 53 for residential and
                  commercial use.
                </p>
<button className="mt-4 w-full py-2.5 border rounded-lg text-sm transition-all duration-300 hover:text-white border-stone-200 hover:bg-stone-900 font-playfair font-medium" onclick="navigateTo('quote')" style={{}}>
                  Enquire Now
                </button>
</div>
</div>

<div className="reveal-on-scroll fade-up delay-200 group border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white border-stone-200" style={{}}>
<div className="h-64 overflow-hidden relative bg-stone-100" style={{}}>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66fb8006-c745-4b8f-aa61-73cec40e6b60_1600w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-3 left-3 backdrop-blur px-3 py-1 text-xs rounded-md shadow-sm bg-white/95 text-stone-800 font-playfair font-medium" style={{}}>
                  Sand &amp; Aggregates
                </div>
</div>
<div className="p-6">
<h3 className="text-lg text-stone-900 font-playfair font-medium" style={{}}>
                  River Sand &amp; Aggregates
                </h3>
<p className="text-sm mt-2 line-clamp-2 font-playfair font-medium text-stone-700" style={{}}>
                  Premium quality washed river sand and 10mm/20mm aggregates for
                  concreting.
                </p>
<button className="mt-4 w-full py-2.5 border rounded-lg text-sm transition-all duration-300 hover:text-white border-stone-200 hover:bg-stone-900 font-playfair font-medium" onclick="navigateTo('quote')" style={{}}>
                  Enquire Now
                </button>
</div>
</div>

<div className="reveal-on-scroll fade-up delay-300 group border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white border-stone-200" style={{}}>
<div className="h-64 overflow-hidden relative bg-stone-100" style={{}}>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute bottom-3 left-3 backdrop-blur px-3 py-1 text-xs rounded-md shadow-sm bg-white/95 text-stone-800 font-playfair font-medium" style={{}}>
                  Bricks
                </div>
</div>
<div className="p-6">
<h3 className="text-lg text-stone-900 font-playfair font-medium" style={{}}>
                  Bricks &amp; Blocks
                </h3>
<p className="text-sm mt-2 line-clamp-2 font-playfair font-medium text-stone-700" style={{}}>
                  Red clay bricks, Fly ash bricks, and AAC blocks. High
                  compressive strength.
                </p>
<button className="mt-4 w-full py-2.5 border rounded-lg text-sm transition-all duration-300 hover:text-white border-stone-200 hover:bg-stone-900 font-playfair font-medium" onclick="navigateTo('quote')" style={{}}>
                  Enquire Now
                </button>
</div>
</div>

<div className="reveal-on-scroll fade-up delay-100 group border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white border-stone-200" style={{}}>
<div className="h-64 overflow-hidden relative bg-stone-100" style={{}}>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute bottom-3 left-3 backdrop-blur px-3 py-1 text-xs rounded-md shadow-sm bg-white/95 text-stone-800 font-playfair font-medium" style={{}}>
                  Steel
                </div>
</div>
<div className="p-6">
<h3 className="text-lg text-stone-900 font-playfair font-medium" style={{}}>
                  TMT Steel Bars
                </h3>
<p className="text-sm mt-2 line-clamp-2 font-playfair font-medium text-stone-700" style={{}}>
                  Fe 500D/550D TMT bars. Rust resistant and earthquake resistant
                  properties.
                </p>
<button className="mt-4 w-full py-2.5 border rounded-lg text-sm transition-all duration-300 hover:text-white border-stone-200 hover:bg-stone-900 font-playfair font-medium" onclick="navigateTo('quote')" style={{}}>
                  Enquire Now
                </button>
</div>
</div>

<div className="reveal-on-scroll fade-up delay-200 group border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white border-stone-200" style={{}}>
<div className="h-64 overflow-hidden relative bg-stone-100" style={{}}>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1590452112574-4c4aa2374492?w=800&amp;q=80" style={{}}/>
<div className="absolute bottom-3 left-3 backdrop-blur px-3 py-1 text-xs rounded-md shadow-sm bg-white/95 text-stone-800 font-playfair font-medium" style={{}}>
                  Finishing
                </div>
</div>
<div className="p-6">
<h3 className="text-lg text-stone-900 font-playfair font-medium" style={{}}>
                  Tiles &amp; Marble
                </h3>
<p className="text-sm mt-2 line-clamp-2 font-playfair font-medium text-stone-700" style={{}}>
                  Vitrified tiles, ceramic tiles, and granite slabs for flooring
                  and walls.
                </p>
<button className="mt-4 w-full py-2.5 border rounded-lg text-sm transition-all duration-300 hover:text-white border-stone-200 hover:bg-stone-900 font-playfair font-medium" onclick="navigateTo('quote')" style={{}}>
                  Enquire Now
                </button>
</div>
</div>

<div className="reveal-on-scroll fade-up delay-300 group border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white border-stone-200" style={{}}>
<div className="h-64 overflow-hidden relative bg-stone-100" style={{}}>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&amp;w=800" style={{}}/>
<div className="absolute bottom-3 left-3 backdrop-blur px-3 py-1 text-xs rounded-md shadow-sm bg-white/95 text-stone-800 font-playfair font-medium" style={{}}>
                  Paint
                </div>
</div>
<div className="p-6">
<h3 className="text-lg text-stone-900 font-playfair font-medium" style={{}}>
                  Paints &amp; Hardware
                </h3>
<p className="text-sm mt-2 line-clamp-2 font-playfair font-medium text-stone-700" style={{}}>
                  Interior and exterior paints, primers, putty, and general
                  hardware fittings.
                </p>
<button className="mt-4 w-full py-2.5 border rounded-lg text-sm transition-all duration-300 hover:text-white border-stone-200 hover:bg-stone-900 font-playfair font-medium" onclick="navigateTo('quote')" style={{}}>
                  Enquire Now
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="services">
<div className="relative w-full h-[45vh] flex items-center justify-center bg-stone-900 overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-stone-900/40"></div>
<div className="relative z-10 text-center max-w-4xl mx-auto px-6 reveal-on-scroll fade-down is-visible">
<h1 className="text-5xl font-bold text-white tracking-tight font-playfair mb-4">
<span className="relative inline-block group cursor-default">
                Our Services
                <span className="absolute -bottom-2 left-0 h-1 w-full bg-red-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
</span>
</h1>
<p className="text-stone-300 font-playfair font-medium text-lg">
              More than just a supplier, we are your construction partner.
            </p>
</div>
</div>
<div className="py-24 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="reveal-on-scroll fade-right delay-100 flex gap-6 p-8 border rounded-2xl hover:shadow-lg transition-all duration-300 bg-white border-stone-100 hover:border-red-200" style={{}}>
<div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 bg-red-50 text-red-600">
<svg className="lucide lucide-package w-7 h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
<path d="M12 22V12"></path>
<polyline points="3.29 7 12 12 20.71 7"></polyline>
<path d="m7.5 4.27 9 5.15"></path>
</svg>
</div>
<div>
<h3 className="text-xl mb-2 text-stone-900 font-playfair font-medium">
                  Wholesale Supply
                </h3>
<p className="text-sm leading-relaxed font-playfair font-medium text-stone-700">
                  Bulk supply for large infrastructure projects, commercial
                  buildings, and housing societies with attractive volume
                  discounts.
                </p>
</div>
</div>

<div className="reveal-on-scroll fade-left delay-200 flex gap-6 p-8 border rounded-2xl hover:shadow-lg transition-all duration-300 bg-white border-stone-100 hover:border-red-200" style={{}}>
<div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 bg-red-50 text-red-600">
<svg className="lucide lucide-truck w-7 h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
<path d="M15 18H9"></path>
<path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
<circle cx="17" cy="18" r="2"></circle>
<circle cx="7" cy="18" r="2"></circle>
</svg>
</div>
<div>
<h3 className="text-xl mb-2 text-stone-900 font-playfair font-medium">
                  On-Site Delivery
                </h3>
<p className="text-sm leading-relaxed font-playfair font-medium text-stone-700">
                  Timely delivery directly to your construction site with our
                  fleet of vehicles. Real-time tracking available.
                </p>
</div>
</div>

<div className="reveal-on-scroll fade-right delay-300 flex gap-6 p-8 border rounded-2xl hover:shadow-lg transition-all duration-300 bg-white border-stone-100 hover:border-red-200" style={{}}>
<div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 bg-red-50 text-red-600">
<svg className="lucide lucide-clipboard-list w-7 h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
<path d="M12 11h4"></path>
<path d="M12 16h4"></path>
<path d="M8 11h.01"></path>
<path d="M8 16h.01"></path>
</svg>
</div>
<div>
<h3 className="text-xl mb-2 text-stone-900 font-playfair font-medium">
                  Material Consultation
                </h3>
<p className="text-sm leading-relaxed font-playfair font-medium text-stone-700">
                  Expert advice on choosing the right grade of cement, steel,
                  and bricks suitable for your specific structural needs.
                </p>
</div>
</div>

<div className="reveal-on-scroll fade-left delay-400 flex gap-6 p-8 border rounded-2xl hover:shadow-lg transition-all duration-300 bg-white border-stone-100 hover:border-red-200" style={{}}>
<div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 bg-red-50 text-red-600">
<svg className="lucide lucide-search w-7 h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
</div>
<div>
<h3 className="text-xl mb-2 text-stone-900 font-playfair font-medium">
                  Custom Sourcing
                </h3>
<p className="text-sm leading-relaxed font-playfair font-medium text-stone-700">
                  Need specific luxury tiles or specialized plumbing fittings?
                  We source custom materials upon request.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="gallery">
<div className="py-20 max-w-7xl mx-auto px-6">
<h1 className="reveal-on-scroll fade-down text-4xl tracking-tight mb-10 text-center text-stone-900 font-playfair font-bold" style={{}}>
<span className="relative inline-block group cursor-default">
              Gallery
              <span className="absolute -bottom-2 left-0 h-1 w-full bg-red-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
</span>
</h1>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
<div className="reveal-on-scroll zoom-in delay-100 col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-md">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&amp;w=800"/>
</div>
<div className="reveal-on-scroll zoom-in delay-200 rounded-2xl overflow-hidden shadow-md">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="reveal-on-scroll zoom-in delay-300 rounded-2xl overflow-hidden shadow-md">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&amp;w=800"/>
</div>
<div className="reveal-on-scroll zoom-in delay-400 col-span-2 rounded-2xl overflow-hidden shadow-md">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=800"/>
</div>
<div className="reveal-on-scroll zoom-in delay-500 rounded-2xl overflow-hidden shadow-md">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="reveal-on-scroll zoom-in delay-100 rounded-2xl overflow-hidden shadow-md">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&amp;w=800"/>
</div>
</div>
</div>
</section>

<section className="page-section" id="contact">
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="reveal-on-scroll fade-right">
<h1 className="text-4xl tracking-tight mb-6 text-stone-900 font-playfair font-bold" style={{}}>
<span className="relative inline-block group cursor-default">
                  Contact Us
                  <span className="absolute -bottom-2 left-0 h-1 w-full bg-red-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
</span>
</h1>
<p className="mb-8 font-playfair font-medium text-stone-700" style={{}}>
                Have questions? Visit our office or send us a message.
              </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-stone-100 text-stone-800" style={{}}>
<svg className="lucide lucide-map-pin w-6 h-6" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<h3 className="text-stone-900 font-playfair font-medium" style={{}}>
                      Address
                    </h3>
<p className="text-sm font-playfair font-medium text-stone-700" style={{}}>
                      Shop No. 12, Ind Area Phase 2, Ahmedabad, Gujarat, India -
                      380016
                    </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-stone-100 text-stone-800" style={{}}>
<svg className="lucide lucide-phone w-6 h-6" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<h3 className="text-stone-900 font-playfair font-medium" style={{}}>
                      Phone
                    </h3>
<p className="text-sm font-playfair font-medium text-stone-700" style={{}}>
                      +91 98765 43210
                    </p>
<p className="text-sm font-playfair font-medium text-stone-700" style={{}}>
                      +91 98765 12345
                    </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-stone-100 text-stone-800" style={{}}>
<svg className="lucide lucide-mail w-6 h-6" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<h3 className="text-stone-900 font-playfair font-medium" style={{}}>
                      Email
                    </h3>
<p className="text-sm font-playfair font-medium text-stone-700" style={{}}>
                      info@jaybholenathenterprises.com
                    </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-stone-100 text-stone-800" style={{}}>
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<h3 className="text-stone-900 font-playfair font-medium" style={{}}>
                      Opening Hours
                    </h3>
<p className="text-sm font-playfair font-medium text-stone-700" style={{}}>
                      Mon - Sat: 9:00 AM - 7:00 PM
                    </p>
<p className="text-sm font-playfair font-medium text-stone-700" style={{}}>
                      Sunday: Closed
                    </p>
</div>
</div>
</div>
<div className="mt-8">
<button className="flex items-center gap-2 px-6 py-3 rounded-lg transition-transform hover:-translate-y-1 bg-green-500 shadow-md text-white hover:bg-green-600 font-playfair font-medium" style={{}}>
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                  Chat on WhatsApp
                </button>
</div>
</div>
<div className="reveal-on-scroll fade-left delay-200 p-8 rounded-2xl border shadow-sm bg-white border-stone-200" style={{}}>
<h2 className="text-xl mb-6 font-playfair font-medium" style={{}}>
                Send a Message
              </h2>
<form className="space-y-4" id="contact-form" onsubmit="handleFormSubmit(event)">
<div>
<label className="block text-sm mb-1 text-stone-700 font-playfair font-medium" style={{}}>
                    Name
                  </label>
<input className="w-full px-4 py-2 border rounded-lg focus:bg-white transition-all bg-stone-50 border-stone-200" id="contact-name" oninput="validateContactForm()" placeholder="Your Name" style={{}} type="text"/>
</div>
<div>
<label className="block text-sm mb-1 text-stone-700 font-playfair font-medium" style={{}}>
                    Email
                  </label>
<input className="w-full px-4 py-2 border rounded-lg focus:bg-white transition-all bg-stone-50 border-stone-200" id="contact-email" oninput="validateContactForm()" placeholder="you@example.com" style={{}} type="email"/>
</div>
<div>
<label className="block text-sm mb-1 text-stone-700 font-playfair font-medium" style={{}}>
                    Message
                  </label>
<textarea className="w-full px-4 py-2 border rounded-lg focus:bg-white transition-all bg-stone-50 border-stone-200" id="contact-message" oninput="validateContactForm()" placeholder="How can we help?" rows="4" style={{}}></textarea>
</div>
<button className="w-full py-3 rounded-lg transition-all shadow-md text-white font-playfair font-medium bg-pink-300 cursor-not-allowed" disabled="" id="contact-submit-btn" type="submit">
                  Submit
                </button>
</form>
</div>
</div>

<div className="reveal-on-scroll zoom-in delay-300 mt-16 w-full h-80 rounded-2xl flex items-center justify-center border bg-stone-200 border-stone-300 text-stone-700" style={{}}>
<div className="text-center">
<svg className="lucide lucide-map w-12 h-12 mx-auto mb-2 opacity-50" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
<p className="font-playfair font-medium" style={{}}>
                Google Map Embedded Here
              </p>
</div>
</div>
</div>
</section>

<section className="page-section" id="quote">
<div className="max-w-3xl mx-auto px-6 py-20">
<div className="text-center mb-10 reveal-on-scroll fade-down">
<h1 className="text-4xl tracking-tight mb-4 text-stone-900 font-playfair font-bold" style={{}}>
              Request a Quote
            </h1>
<p className="font-playfair font-medium text-stone-700" style={{}}>
              Tell us what you need, and we’ll get back to you with the best
              price.
            </p>
</div>
<div className="reveal-on-scroll fade-up delay-100 p-8 md:p-12 rounded-2xl border shadow-xl bg-white border-stone-200" style={{}}>
<form className="space-y-6" id="quote-form" onsubmit="handleFormSubmit(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm mb-1 text-stone-700 font-playfair font-medium" style={{}}>
                    Full Name
                  </label>
<input className="w-full px-4 py-3 border rounded-lg focus:ring-1 transition-all bg-stone-50 border-stone-200 focus:ring-red-500" id="quote-name" oninput="validateQuoteForm()" required="" style={{}} type="text"/>
</div>
<div>
<label className="block text-sm mb-1 text-stone-700 font-playfair font-medium" style={{}}>
                    Phone Number
                  </label>
<input className="w-full px-4 py-3 border rounded-lg focus:ring-1 transition-all bg-stone-50 border-stone-200 focus:ring-red-500" id="quote-phone" oninput="validateQuoteForm()" required="" style={{}} type="tel"/>
</div>
</div>
<div>
<label className="block text-sm mb-1 text-stone-700 font-playfair font-medium" style={{}}>
                  Delivery Address
                </label>
<input className="w-full px-4 py-3 border rounded-lg focus:ring-1 transition-all bg-stone-50 border-stone-200 focus:ring-red-500" id="quote-address" oninput="validateQuoteForm()" required="" style={{}} type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm mb-1 text-stone-700 font-playfair font-medium" style={{}}>
                    Material Required
                  </label>
<select className="w-full px-4 py-3 border rounded-lg focus:ring-1 transition-all bg-stone-50 border-stone-200 focus:ring-red-500" id="quote-material" onchange="validateQuoteForm()" style={{}}>
<option className="font-playfair font-medium" value="">
                      Select Material
                    </option>
<option className="font-playfair font-medium" value="Cement">
                      Cement
                    </option>
<option className="font-playfair font-medium" value="Sand">
                      Sand/Aggregates
                    </option>
<option className="font-playfair font-medium" value="Bricks">
                      Bricks
                    </option>
<option className="font-playfair font-medium" value="Steel">
                      Steel (TMT)
                    </option>
<option className="font-playfair font-medium" value="Tiles">
                      Tiles/Flooring
                    </option>
<option className="font-playfair font-medium" value="Other">
                      Other
                    </option>
</select>
</div>
<div>
<label className="block text-sm mb-1 text-stone-700 font-playfair font-medium" style={{}}>
                    Estimated Quantity
                  </label>
<input className="w-full px-4 py-3 border rounded-lg focus:ring-1 transition-all bg-stone-50 border-stone-200 focus:ring-red-500" id="quote-quantity" oninput="validateQuoteForm()" placeholder="e.g. 50 bags, 2 tons" style={{}} type="text"/>
</div>
</div>
<div>
<label className="block text-sm mb-1 text-stone-700 font-playfair font-medium" style={{}}>
                  Preferred Delivery Date
                </label>
<input className="w-full px-4 py-3 border rounded-lg focus:ring-1 transition-all bg-stone-50 border-stone-200 focus:ring-red-500" id="quote-date" oninput="validateQuoteForm()" style={{}} type="date"/>
</div>
<button className="w-full py-4 rounded-lg transition-all shadow-lg text-white font-playfair font-medium bg-pink-300 cursor-not-allowed" disabled="" id="quote-submit-btn" type="submit">
                Get Quote Now
              </button>
</form>
<p className="text-xs mt-4 text-center text-stone-400 font-playfair font-medium" style={{}}>
              By submitting this form, you agree to our privacy policy.
            </p>
</div>
</div>
</section>

<section className="page-section" id="faq">
<div className="max-w-4xl mx-auto px-6 py-20">
<h1 className="reveal-on-scroll fade-down text-4xl tracking-tight mb-10 text-center text-stone-900 font-playfair font-bold" style={{}}>
<span className="relative inline-block group cursor-default">
              Frequently Asked Questions
              <span className="absolute -bottom-2 left-0 h-1 w-full bg-red-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
</span>
</h1>
<div className="space-y-4 reveal-on-scroll fade-up">
<div className="border rounded-lg overflow-hidden bg-white border-stone-200" style={{}}>
<button className="w-full text-left px-6 py-4 flex justify-between items-center transition-colors bg-stone-50 hover:bg-stone-100 font-playfair font-medium" onclick="this.nextElementSibling.classList.toggle('hidden')" style={{}}>
                Do you offer bulk discounts?
                <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-6 py-4 hidden text-sm animate-[fadeIn_0.3s_ease-out] bg-white font-playfair font-medium text-stone-800" style={{}}>
                Yes, we offer special rates for bulk orders and regular
                contractors. Please contact us or request a quote for details.
              </div>
</div>
<div className="border rounded-lg overflow-hidden bg-white border-stone-200" style={{}}>
<button className="w-full text-left px-6 py-4 flex justify-between items-center transition-colors bg-stone-50 hover:bg-stone-100 font-playfair font-medium" onclick="this.nextElementSibling.classList.toggle('hidden')" style={{}}>
                What is the delivery time?
                <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-6 py-4 hidden text-sm animate-[fadeIn_0.3s_ease-out] bg-white font-playfair font-medium text-stone-800" style={{}}>
                For local orders, we aim for same-day or next-day delivery. For
                specialized items, it may take 2-3 working days.
              </div>
</div>
<div className="border rounded-lg overflow-hidden bg-white border-stone-200" style={{}}>
<button className="w-full text-left px-6 py-4 flex justify-between items-center transition-colors bg-stone-50 hover:bg-stone-100 font-playfair font-medium" onclick="this.nextElementSibling.classList.toggle('hidden')" style={{}}>
                Do you accept returns?
                <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-6 py-4 hidden text-sm animate-[fadeIn_0.3s_ease-out] bg-white font-playfair font-medium text-stone-800" style={{}}>
                Unused, undamaged non-perishable materials (like sealed cement
                bags) can be returned within 7 days, subject to a restocking
                fee. Sand and loose aggregates cannot be returned.
              </div>
</div>
</div>
</div>
</section>

<section className="page-section" id="terms">
<div className="max-w-4xl mx-auto px-6 py-20 text-stone-800" style={{}}>
<h1 className="text-3xl mb-6 text-stone-900 font-playfair font-bold" style={{}}>
            Terms &amp; Policies
          </h1>
<div className="space-y-6">
<div>
<h2 className="text-xl mb-2 text-stone-900 font-playfair font-medium" style={{}}>
                Terms of Service
              </h2>
<p className="text-sm font-playfair font-medium" style={{}}>
                Payment must be cleared before unloading materials. Prices are
                subject to market fluctuations. Delivery charges are extra
                unless specified.
              </p>
</div>
<div>
<h2 className="text-xl mb-2 text-stone-900 font-playfair font-medium" style={{}}>
                Privacy Policy
              </h2>
<p className="text-sm font-playfair font-medium" style={{}}>
                We value your privacy. Your contact information collected via
                forms is only used for communication regarding your orders and
                quotes. We do not sell your data to third parties.
              </p>
</div>
</div>
</div>
</section>
</main>

<footer className="text-stone-400 bg-emerald-950 border-stone-800 border-t mt-auto pt-12 pb-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-8 gap-y-8">
<div className="col-span-1 md:col-span-1">
<div className="flex gap-2 mb-4 gap-x-2 gap-y-2 items-center">
<div className="p-1 rounded text-white bg-red-600" style={{}}>
<svg className="lucide lucide-building-2 w-4 h-4" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<span className="text-white tracking-tight font-playfair font-medium" style={{}}>
              Jay Bholenath Enterprises
            </span>
</div>
<p className="text-xs mb-4 font-playfair font-medium" style={{}}>
            Reliable building materials for strong foundations.
          </p>
<div className="flex gap-4">
<a className="transition-colors hover:text-red-500" href="#" style={{}}>
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="transition-colors hover:text-red-500" href="#" style={{}}>
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="transition-colors hover:text-red-500" href="#" style={{}}>
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
<div className="col-span-1">
<h3 className="text-white mb-4 font-playfair font-medium" style={{}}>
            Quick Links
          </h3>
<ul className="space-y-2 text-sm font-playfair" style={{}}>
<li className="">
<button className="transition-colors font-playfair font-medium hover:text-red-500" onclick="navigateTo('home')" style={{}}>
                Home
              </button>
</li>
<li className="">
<button className="transition-colors font-playfair font-medium hover:text-red-500" onclick="navigateTo('about')" style={{}}>
                About Us
              </button>
</li>
<li className="">
<button className="transition-colors font-playfair font-medium hover:text-red-500" onclick="navigateTo('gallery')" style={{}}>
                Gallery
              </button>
</li>
<li className="">
<button className="transition-colors font-playfair font-medium hover:text-red-500" onclick="navigateTo('faq')" style={{}}>
                FAQ
              </button>
</li>
<li>
<button className="transition-colors font-playfair font-medium hover:text-red-500" onclick="navigateTo('contact')" style={{}}>
                Contact
              </button>
</li>
</ul>
</div>
<div className="col-span-1">
<h3 className="text-white mb-4 font-playfair font-medium" style={{}}>
            Products
          </h3>
<ul className="space-y-2 text-sm font-playfair" style={{}}>
<li className="">
<button className="transition-colors font-playfair font-medium hover:text-red-500" onclick="navigateTo('products')" style={{}}>
                Cement &amp; Aggregates
              </button>
</li>
<li className="">
<button className="transition-colors font-playfair font-medium hover:text-red-500" onclick="navigateTo('products')" style={{}}>
                Steel TMT Bars
              </button>
</li>
<li className="">
<button className="transition-colors font-playfair font-medium hover:text-red-500" onclick="navigateTo('products')" style={{}}>
                Bricks &amp; Blocks
              </button>
</li>
<li className="">
<button className="transition-colors font-playfair font-medium hover:text-red-500" onclick="navigateTo('products')" style={{}}>
                Plumbing &amp; Electricals
              </button>
</li>
</ul>
</div>
<div className="col-span-1">
<h3 className="text-white mb-4 font-playfair font-medium" style={{}}>
            Contact Info
          </h3>
<ul className="space-y-4 text-sm font-playfair" style={{}}>
<li className="flex items-start gap-3">
<svg className="lucide lucide-map-pin w-5 h-5 mt-0.5 text-red-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-stone-400 font-medium" style={{}}>
                Vill-Bath, Po-Adharpur, Darbhanga 847427
              </span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-phone w-5 h-5 text-red-600" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="text-stone-400 font-medium" style={{}}>
                +91 83406 65951
              </span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-mail w-5 h-5 text-red-600" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="text-stone-400 font-medium" style={{}}>
                jaybholenathent@gmail.com
              </span>
</li>
</ul>
</div>
</div>
<div className="text-xs font-medium text-stone-800 font-playfair text-center border-stone-800 border-t mt-12 pt-8">
<p className="" style={{}}>© 2024 Jay Bholenath Enterprises. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
