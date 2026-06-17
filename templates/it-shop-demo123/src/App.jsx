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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {

          // 1. Mobile Menu Toggle
          const mobileBtn = document.getElementById('mobile-menu-btn');
          const mobileMenu = document.getElementById('mobile-menu');
          const mobileLinks = document.querySelectorAll('.mobile-link');

          mobileBtn.addEventListener('click', () => {
              mobileMenu.classList.toggle('hidden');
          });

          mobileLinks.forEach(link => {
              link.addEventListener('click', () => {
                  mobileMenu.classList.add('hidden');
              });
          });

          // 2. Theme Toggle Logic
          const themeToggleBtn = document.getElementById('theme-toggle');
          const htmlElement = document.documentElement;

          // Check system preference on load - now defaults to light mode
          if (localStorage.theme === 'dark') {
              htmlElement.classList.add('dark');
          } else {
              htmlElement.classList.remove('dark');
          }

          themeToggleBtn.addEventListener('click', () => {
              htmlElement.classList.toggle('dark');
              if (htmlElement.classList.contains('dark')) {
                  localStorage.theme = 'dark';
              } else {
                  localStorage.theme = 'light';
              }
          });

          // 3. Product Filtering
          const filterBtns = document.querySelectorAll('.filter-btn');
          const productCards = document.querySelectorAll('.product-card');

          filterBtns.forEach(btn => {
              btn.addEventListener('click', () => {
                  // Remove active styling from all
                  filterBtns.forEach(b => {
                      b.classList.remove('bg-neutral-900', 'text-white', 'dark:bg-white', 'dark:text-neutral-900');
                      b.classList.add('bg-white', 'text-neutral-600', 'dark:bg-neutral-900', 'dark:text-neutral-400');
                  });

                  // Add active styling to clicked
                  btn.classList.remove('bg-white', 'text-neutral-600', 'dark:bg-neutral-900', 'dark:text-neutral-400');
                  btn.classList.add('bg-neutral-900', 'text-white', 'dark:bg-white', 'dark:text-neutral-900');

                  const filterValue = btn.getAttribute('data-filter');

                  productCards.forEach(card => {
                      // Reset display and opacity for animation
                      card.style.display = 'flex';
                      card.style.opacity = '1';

                      if (filterValue === 'all') {
                          card.style.display = 'flex';
                      } else {
                          if (card.getAttribute('data-category') === filterValue) {
                              card.style.display = 'flex';
                          } else {
                              card.style.display = 'none';
                          }
                      }
                  });
              });
          });

          // 4. Scroll to Top
          const scrollBtn = document.getElementById('scrollToTopBtn');

          window.addEventListener('scroll', () => {
              if (window.scrollY > 500) {
                  scrollBtn.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
                  scrollBtn.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
              } else {
                  scrollBtn.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
                  scrollBtn.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
              }
          });

          scrollBtn.addEventListener('click', () => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
          });
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
      

<nav className="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

<a className="text-lg font-semibold tracking-tighter uppercase flex items-center gap-2" href="#">
<iconify-icon className="text-xl" icon="solar:monitor-smartphone-linear"></iconify-icon>
          TECHYSITE
        </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-400">
<a className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors" href="#about">
            About
          </a>
<a className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors" href="#products">
            Products
          </a>
<a className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors" href="#reviews">
            Reviews
          </a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center h-9 px-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:-translate-y-0.5 transition-transform duration-200" href="#contact">
            Visit Store
          </a>

<button aria-label="Toggle Theme" className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors flex items-center justify-center" id="theme-toggle">
<iconify-icon className="text-lg hidden dark:block" icon="solar:sun-linear" id="theme-icon-light"></iconify-icon>
<iconify-icon className="text-lg block dark:hidden" icon="solar:moon-linear" id="theme-icon-dark"></iconify-icon>
</button>

<button className="md:hidden p-2 text-neutral-600 dark:text-neutral-400" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-neutral-600 dark:text-neutral-400" id="mobile-menu">
<a className="mobile-link py-2 hover:text-neutral-900 dark:hover:text-neutral-50" href="#about">
          About
        </a>
<a className="mobile-link py-2 hover:text-neutral-900 dark:hover:text-neutral-50" href="#products">
          Products
        </a>
<a className="mobile-link py-2 hover:text-neutral-900 dark:hover:text-neutral-50" href="#services">
          Services
        </a>
<a className="mobile-link py-2 hover:text-neutral-900 dark:hover:text-neutral-50" href="#reviews">
          Reviews
        </a>
<a className="mobile-link py-2 text-neutral-900 dark:text-white" href="#contact">
          Contact &amp; Visit
        </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" id="home">

<div className="absolute inset-0 bg-[#F7F5F2] dark:bg-[#1A1A1A] transition-colors duration-300"></div>
<div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-b from-[#EAE4DD] to-transparent dark:from-[#2B2B2B] dark:to-transparent blur-3xl opacity-80 pointer-events-none"></div>
<div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-t from-[#EFEBE6] to-transparent dark:from-[#222222] dark:to-transparent blur-3xl opacity-80 pointer-events-none"></div>
<div className="relative px-6 lg:px-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="flex flex-col items-start text-left z-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 text-xs font-semibold tracking-wide text-stone-600 dark:text-stone-300 mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
            Open today until 8:00 PM
          </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-stone-900 dark:text-white max-w-2xl leading-[1.1] mb-6">
            Curated Tech for the Modern World
          </h1>
<p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 font-medium max-w-md leading-relaxed mb-10">
            Discover handpicked hardware, custom workstations, and expert
            repairs designed for your lifestyle.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-900 text-sm font-semibold hover:-translate-y-0.5 hover:shadow-xl hover:shadow-stone-900/20 dark:hover:shadow-white/10 transition-all duration-300" href="#products">
              Explore Inventory
            </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-stone-200/50 dark:border-white/10 text-stone-800 dark:text-stone-200 text-sm font-semibold hover:-translate-y-0.5 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 shadow-sm" href="#contact">
              Visit Store
            </a>
</div>
</div>

<div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square z-10 group flex items-center justify-center mt-12 lg:mt-0">

<div className="absolute inset-0 bg-stone-200/50 dark:bg-stone-800/20 rounded-full blur-3xl scale-75 group-hover:scale-90 transition-transform duration-1000"></div>
<div className="relative grid grid-cols-2 gap-4 w-full max-w-sm sm:max-w-md">
<div className="flex flex-col gap-4 translate-y-6 sm:translate-y-8 transition-transform duration-700 group-hover:translate-y-4">
<div className="bg-white/60 dark:bg-white/5 backdrop-blur-2xl rounded-[2rem] aspect-square border border-white/50 dark:border-white/10 shadow-xl shadow-stone-900/5 dark:shadow-black/50 flex flex-col items-center justify-center p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/80 dark:hover:bg-white/10">
<iconify-icon className="text-5xl text-stone-700 dark:text-stone-300 mb-3" icon="solar:laptop-minimalistic-linear"></iconify-icon>
<span className="text-sm font-semibold text-stone-800 dark:text-stone-200">
                  Laptops
                </span>
</div>
<div className="bg-white/60 dark:bg-white/5 backdrop-blur-2xl rounded-[2rem] aspect-[4/3] border border-white/50 dark:border-white/10 shadow-xl shadow-stone-900/5 dark:shadow-black/50 flex items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/80 dark:hover:bg-white/10">
<iconify-icon className="text-4xl text-stone-500 dark:text-stone-400" icon="solar:mouse-minimalistic-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-4 -translate-y-2 sm:-translate-y-4 transition-transform duration-700 group-hover:-translate-y-2">
<div className="bg-white/60 dark:bg-white/5 backdrop-blur-2xl rounded-[2rem] aspect-[4/3] border border-white/50 dark:border-white/10 shadow-xl shadow-stone-900/5 dark:shadow-black/50 flex items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/80 dark:hover:bg-white/10">
<iconify-icon className="text-4xl text-stone-500 dark:text-stone-400" icon="solar:server-square-linear"></iconify-icon>
</div>
<div className="bg-white/60 dark:bg-white/5 backdrop-blur-2xl rounded-[2rem] aspect-square border border-white/50 dark:border-white/10 shadow-xl shadow-stone-900/5 dark:shadow-black/50 flex flex-col items-center justify-center p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/80 dark:hover:bg-white/10">
<iconify-icon className="text-5xl text-stone-700 dark:text-stone-300 mb-3" icon="solar:cpu-bolt-linear"></iconify-icon>
<span className="text-sm font-semibold text-stone-800 dark:text-stone-200">
                  Custom PCs
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">
              Local expertise, global standards.
            </h2>
<p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
              Techy Site is your trusted local destination for all things
              computing. With years of experience and a passion for technology,
              our owner and knowledgeable staff are dedicated to providing you
              with the right solutions, whether you need a simple cable or a
              complete corporate office setup. We pride ourselves on
              affordability, expertise, and building lasting customer trust.
            </p>
<div className="grid sm:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<div className="h-10 w-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white mb-2">
<iconify-icon className="text-xl" icon="solar:tag-price-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white">
                  Economical Pricing
                </h3>
<p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Competitive rates on all retail and wholesale orders.
                </p>
</div>
<div className="flex flex-col gap-2">
<div className="h-10 w-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white mb-2">
<iconify-icon className="text-xl" icon="solar:verified-check-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white">
                  Trusted by Customers
                </h3>
<p className="text-xs text-neutral-500 dark:text-neutral-400">
                  A track record of honest advice and reliable service.
                </p>
</div>
<div className="flex flex-col gap-2">
<div className="h-10 w-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white mb-2">
<iconify-icon className="text-xl" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white">
                  Wide Product Range
                </h3>
<p className="text-xs text-neutral-500 dark:text-neutral-400">
                  From budget setups to high-end gaming rigs.
                </p>
</div>
<div className="flex flex-col gap-2">
<div className="h-10 w-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white mb-2">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white">
                  Retail &amp; Bulk Support
                </h3>
<p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Catering to individual users and local businesses alike.
                </p>
</div>
</div>
</div>

<div className="relative w-full aspect-square sm:aspect-[4/3] rounded-3xl bg-neutral-100 dark:bg-neutral-800 overflow-hidden border border-neutral-200 dark:border-neutral-700 flex items-center justify-center p-8 group">
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-neutral-200 dark:to-neutral-900/50 mix-blend-overlay"></div>
<div className="relative z-10 grid grid-cols-2 gap-4 w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500">
<div className="bg-white dark:bg-neutral-950 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
<iconify-icon className="text-4xl text-neutral-400" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<div className="bg-white dark:bg-neutral-950 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
<iconify-icon className="text-4xl text-neutral-400" icon="solar:server-square-linear"></iconify-icon>
</div>
<div className="bg-white dark:bg-neutral-950 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
<iconify-icon className="text-4xl text-neutral-400" icon="solar:keyboard-linear"></iconify-icon>
</div>
<div className="bg-white dark:bg-neutral-950 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
<iconify-icon className="text-4xl text-neutral-400" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto" id="services">
<div className="mb-12">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
          Expert Services
        </h2>
<p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          Fast, reliable, and professional solutions for your tech issues.
        </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors flex items-start gap-4">
<div className="mt-1 text-neutral-900 dark:text-white">
<iconify-icon className="text-2xl" icon="solar:wrench-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">
              Laptop &amp; PC Repair
            </h3>
<p className="mt-1 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              Screen replacement, motherboard issues, water damage, and general
              troubleshooting.
            </p>
</div>
</div>

<div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors flex items-start gap-4">
<div className="mt-1 text-neutral-900 dark:text-white">
<iconify-icon className="text-2xl" icon="solar:ssd-square-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">
              Hardware Upgrades
            </h3>
<p className="mt-1 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              Boost performance with RAM additions, SSD swaps, and graphics card
              installations.
            </p>
</div>
</div>

<div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors flex items-start gap-4">
<div className="mt-1 text-neutral-900 dark:text-white">
<iconify-icon className="text-2xl" icon="solar:stopwatch-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">
              Fast Turnaround
            </h3>
<p className="mt-1 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              Most common repairs and upgrades are completed within 24 to 48
              hours.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-100/50 dark:bg-neutral-900/20 border-y border-neutral-200 dark:border-neutral-800" id="products">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              Our Inventory
            </h2>
<p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              Browse a sample of what we carry in-store daily.
            </p>
</div>

<div className="flex flex-wrap items-center gap-2" id="filter-container">
<button className="filter-btn active px-4 py-1.5 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-700 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 transition-all" data-filter="all">
              All
            </button>
<button className="filter-btn px-4 py-1.5 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-700 bg-white text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all" data-filter="laptops">
              Laptops
            </button>
<button className="filter-btn px-4 py-1.5 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-700 bg-white text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all" data-filter="desktops">
              Desktops
            </button>
<button className="filter-btn px-4 py-1.5 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-700 bg-white text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all" data-filter="accessories">
              Accessories
            </button>
<button className="filter-btn px-4 py-1.5 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-700 bg-white text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all" data-filter="network">
              Network &amp; Print
            </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="product-grid">

<div className="product-card group flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300" data-category="laptops">
<div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-800/50 flex items-center justify-center p-6 border-b border-neutral-200 dark:border-neutral-800">
<iconify-icon className="text-5xl text-neutral-400 group-hover:scale-110 transition-transform duration-500" icon="solar:laptop-minimalistic-linear"></iconify-icon>
<div className="absolute top-3 right-3 px-2 py-1 rounded bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-semibold tracking-wider uppercase">
                Best Price
              </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-1.5 mb-2">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  Available in Store
                </span>
</div>
<h3 className="text-sm font-semibold text-neutral-900 dark:text-white tracking-tight">
                Premium Ultrabook 14"
              </h3>
<p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">
                High-performance slim laptop perfect for professionals and
                creators.
              </p>
</div>
</div>

<div className="product-card group flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300" data-category="laptops">
<div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-800/50 flex items-center justify-center p-6 border-b border-neutral-200 dark:border-neutral-800">
<iconify-icon className="text-5xl text-neutral-400 group-hover:scale-110 transition-transform duration-500" icon="solar:laptop-3-linear"></iconify-icon>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-1.5 mb-2">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  Available in Store
                </span>
</div>
<h3 className="text-sm font-semibold text-neutral-900 dark:text-white tracking-tight">
                Budget Student Laptop 15.6"
              </h3>
<p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">
                Reliable everyday machine for browsing, documents, and studying.
              </p>
</div>
</div>

<div className="product-card group flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300" data-category="desktops">
<div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-800/50 flex items-center justify-center p-6 border-b border-neutral-200 dark:border-neutral-800">
<iconify-icon className="text-5xl text-neutral-400 group-hover:scale-110 transition-transform duration-500" icon="solar:server-square-linear"></iconify-icon>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-1.5 mb-2">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  Available in Store
                </span>
</div>
<h3 className="text-sm font-semibold text-neutral-900 dark:text-white tracking-tight">
                Custom Gaming PC Tower
              </h3>
<p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">
                Pre-built or custom-assembled high-end desktop for gaming and
                rendering.
              </p>
</div>
</div>

<div className="product-card group flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300" data-category="desktops">
<div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-800/50 flex items-center justify-center p-6 border-b border-neutral-200 dark:border-neutral-800">
<iconify-icon className="text-5xl text-neutral-400 group-hover:scale-110 transition-transform duration-500" icon="solar:monitor-linear"></iconify-icon>
<div className="absolute top-3 right-3 px-2 py-1 rounded bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-semibold tracking-wider uppercase">
                Best Price
              </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-1.5 mb-2">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  Available in Store
                </span>
</div>
<h3 className="text-sm font-semibold text-neutral-900 dark:text-white tracking-tight">
                Office Desktop Workstation
              </h3>
<p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">
                Compact and quiet PC perfect for enterprise and small business
                use.
              </p>
</div>
</div>

<div className="product-card group flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300" data-category="accessories">
<div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-800/50 flex items-center justify-center p-6 border-b border-neutral-200 dark:border-neutral-800">
<iconify-icon className="text-5xl text-neutral-400 group-hover:scale-110 transition-transform duration-500" icon="solar:keyboard-linear"></iconify-icon>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-1.5 mb-2">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  Available in Store
                </span>
</div>
<h3 className="text-sm font-semibold text-neutral-900 dark:text-white tracking-tight">
                Mechanical Keyboard
              </h3>
<p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">
                Tactile switches, RGB backlight, durable build for typing and
                gaming.
              </p>
</div>
</div>

<div className="product-card group flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300" data-category="accessories">
<div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-800/50 flex items-center justify-center p-6 border-b border-neutral-200 dark:border-neutral-800">
<iconify-icon className="text-5xl text-neutral-400 group-hover:scale-110 transition-transform duration-500" icon="solar:mouse-minimalistic-linear"></iconify-icon>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-1.5 mb-2">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  Available in Store
                </span>
</div>
<h3 className="text-sm font-semibold text-neutral-900 dark:text-white tracking-tight">
                Ergonomic Wireless Mouse
              </h3>
<p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">
                Comfortable grip, long battery life, precise tracking sensor.
              </p>
</div>
</div>

<div className="product-card group flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300" data-category="network">
<div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-800/50 flex items-center justify-center p-6 border-b border-neutral-200 dark:border-neutral-800">
<iconify-icon className="text-5xl text-neutral-400 group-hover:scale-110 transition-transform duration-500" icon="solar:router-2-linear"></iconify-icon>
<div className="absolute top-3 right-3 px-2 py-1 rounded bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-semibold tracking-wider uppercase">
                Best Price
              </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-1.5 mb-2">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  Available in Store
                </span>
</div>
<h3 className="text-sm font-semibold text-neutral-900 dark:text-white tracking-tight">
                Gigabit Wi-Fi 6 Router
              </h3>
<p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">
                High-speed networking equipment for seamless home or office
                internet.
              </p>
</div>
</div>

<div className="product-card group flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300" data-category="network">
<div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-800/50 flex items-center justify-center p-6 border-b border-neutral-200 dark:border-neutral-800">
<iconify-icon className="text-5xl text-neutral-400 group-hover:scale-110 transition-transform duration-500" icon="solar:printer-linear"></iconify-icon>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-1.5 mb-2">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  Available in Store
                </span>
</div>
<h3 className="text-sm font-semibold text-neutral-900 dark:text-white tracking-tight">
                Laser Office Printer
              </h3>
<p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">
                Fast, economical monochrome and color printing solutions.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden" id="reviews">
<div className="mb-12 text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
          Customer Feedback
        </h2>
<p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          Real reviews from our local community.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-300 italic mb-6">
              "Great prices and the owner really knows his stuff. Got my laptop
              screen repaired perfectly in just one day. Highly recommended for
              any tech needs in the area."
            </p>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs font-semibold text-neutral-600 dark:text-neutral-400">
              RA
            </div>
<span className="text-xs font-medium text-neutral-900 dark:text-white">
              Rahul A.
            </span>
</div>
</div>

<div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-300 italic mb-6">
              "Huge variety of accessories. Bought a bulk order of keyboards and
              mice for my startup office. Very economical pricing, though the
              shop can get a bit crowded during evenings."
            </p>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs font-semibold text-neutral-600 dark:text-neutral-400">
              SM
            </div>
<span className="text-xs font-medium text-neutral-900 dark:text-white">
              Sunita M.
            </span>
</div>
</div>

<div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-300 italic mb-6">
              "They upgraded the RAM on my old PC and it works fine now. The
              service was okay, but it took two days longer than promised
              because a specific part was out of stock."
            </p>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs font-semibold text-neutral-600 dark:text-neutral-400">
              VK
            </div>
<span className="text-xs font-medium text-neutral-900 dark:text-white">
              Vikram K.
            </span>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-2">
            Visit Us Today
          </h2>
<p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
            Drop by for inquiries, purchases, or to drop off your device for
            repair.
          </p>
<div className="flex flex-col gap-6">

<div className="flex items-start gap-4">
<div className="mt-1 h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white shrink-0">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                  Store Address
                </h3>
<p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  123 Tech Street,
                  <br/>
                  Digital Plaza, Sector 5,
                  <br/>
                  Jaipur, Rajasthan, India
                </p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="mt-1 h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white shrink-0">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                  Contact Number
                </h3>
<p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  +91 98765 43210
                </p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="mt-1 h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white shrink-0">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                  Business Hours
                </h3>
<p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  Mon - Sat: 10:00 AM - 8:00 PM
                  <br/>
                  Sunday: Closed
                </p>
</div>
</div>
</div>
</div>

<div className="w-full aspect-video md:aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 overflow-hidden relative">
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 dark:invert dark:hue-rotate-180 transition-all duration-500" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.561579361719!2d75.78918201504495!3d26.91741548312563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db410c66060bd%3A0x6e76cf0184405380!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sus!4v1689791485603!5m2!1sen!2sus"></iframe>
</div>
</div>
</section>

<footer className="bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
<div className="lg:col-span-1">
<a className="text-lg font-semibold tracking-tighter uppercase flex items-center gap-2 mb-4 text-neutral-900 dark:text-white" href="#">
<iconify-icon icon="solar:monitor-smartphone-linear"></iconify-icon>
              TECHYSITE
            </a>
<p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Your reliable local partner for all computer hardware,
              accessories, and expert repair services. Quality tech within
              reach.
            </p>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
              Quick Links
            </h4>
<ul className="flex flex-col gap-2 text-xs text-neutral-500 dark:text-neutral-400">
<li>
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#about">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#products">
                  Products
                </a>
</li>
<li>
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#services">
                  Services
                </a>
</li>
<li>
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#contact">
                  Contact
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
              Categories
            </h4>
<ul className="flex flex-col gap-2 text-xs text-neutral-500 dark:text-neutral-400">
<li>
<span className="cursor-pointer hover:text-neutral-900 dark:hover:text-white transition-colors" onclick="document.querySelector('[data-filter=laptops]').click(); window.location.href='#products';">
                  Laptops
                </span>
</li>
<li>
<span className="cursor-pointer hover:text-neutral-900 dark:hover:text-white transition-colors" onclick="document.querySelector('[data-filter=desktops]').click(); window.location.href='#products';">
                  Desktops
                </span>
</li>
<li>
<span className="cursor-pointer hover:text-neutral-900 dark:hover:text-white transition-colors" onclick="document.querySelector('[data-filter=accessories]').click(); window.location.href='#products';">
                  Accessories
                </span>
</li>
<li>
<span className="cursor-pointer hover:text-neutral-900 dark:hover:text-white transition-colors" onclick="document.querySelector('[data-filter=network]').click(); window.location.href='#products';">
                  Networking
                </span>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
              Social
            </h4>
<div className="flex gap-4 text-neutral-500 dark:text-neutral-400">
<a aria-label="Facebook" className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:minimalistic-magnifer-linear"></iconify-icon>

</a>
<a aria-label="Twitter" className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:hashtag-linear"></iconify-icon>
</a>
<a aria-label="Instagram" className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500 dark:text-neutral-400">
            © 2026 Techy Site. Informational purposes only.
          </p>
<div className="flex gap-4 text-xs text-neutral-500 dark:text-neutral-400">
<a className="hover:text-neutral-900 dark:hover:text-white" href="#">
              Privacy
            </a>
<a className="hover:text-neutral-900 dark:hover:text-white" href="#">
              Terms
            </a>
</div>
</div>
</div>
</footer>

<button aria-label="Scroll to top" className="fixed bottom-6 right-6 h-10 w-10 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full shadow-sm text-neutral-600 dark:text-neutral-300 flex items-center justify-center opacity-0 translate-y-4 pointer-events-none transition-all duration-300 z-50 hover:bg-neutral-50 dark:hover:bg-neutral-700" id="scrollToTopBtn">
<iconify-icon className="text-lg" icon="solar:alt-arrow-up-linear"></iconify-icon>
</button>



    </>
  );
}
