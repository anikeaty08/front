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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons();

        // 1. Intersection Observer for Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Run animation only once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-anim').forEach((el) => {
            observer.observe(el);
        });

        // 2. Buy / Sell Tabs Interaction
        const tabBuy = document.getElementById('tab-buy');
        const tabSell = document.getElementById('tab-sell');

        if(tabBuy && tabSell) {
            tabBuy.addEventListener('click', () => {
                tabBuy.className = "flex-1 py-4 text-center bg-blue-600 text-white font-medium text-lg tracking-tight transition-all duration-300 active:bg-blue-700";
                tabSell.className = "flex-1 py-4 text-center bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium text-lg tracking-tight transition-all duration-300 active:bg-slate-200";
            });
            tabSell.addEventListener('click', () => {
                tabSell.className = "flex-1 py-4 text-center bg-blue-600 text-white font-medium text-lg tracking-tight transition-all duration-300 active:bg-blue-700";
                tabBuy.className = "flex-1 py-4 text-center bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium text-lg tracking-tight transition-all duration-300 active:bg-slate-200";
            });
        }

        // 3. Heart Button Interaction (Toggle Favorite)
        const heartBtns = document.querySelectorAll('.heart-btn');
        heartBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Prevents clicking the car card itself
                const icon = btn.querySelector('i');
                if (btn.classList.contains('text-red-500')) {
                    btn.classList.remove('text-red-500');
                    btn.classList.add('text-slate-400');
                    icon.setAttribute('fill', 'none');
                } else {
                    btn.classList.remove('text-slate-400');
                    btn.classList.add('text-red-500');
                    icon.setAttribute('fill', 'currentColor'); // Fills the heart
                }
            });
        });

        // 4. Filter Buttons Interaction (Dropdown mock behavior)
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const arrow = btn.querySelector('.icon-arrow');
                
                // Toggle current
                const isActive = btn.classList.contains('border-blue-400');
                
                // Reset all first
                filterBtns.forEach(b => {
                    b.classList.remove('border-blue-400', 'bg-blue-50');
                    b.classList.add('border-slate-200');
                    b.querySelector('.icon-arrow').classList.remove('rotate-180');
                });

                if (!isActive) {
                    btn.classList.remove('border-slate-200');
                    btn.classList.add('border-blue-400', 'bg-blue-50');
                    arrow.classList.add('rotate-180');
                }
            });
        });

        // 5. Mobile Menu Toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileBtn && mobileMenu) {
            mobileBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
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
      

<header className="bg-slate-900 text-white sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="flex items-center justify-between h-16 md:h-20 gap-4">

<div className="flex items-center gap-6 md:gap-8 flex-shrink-0">
<a className="flex items-center gap-2 group transform transition-transform duration-300 active:scale-95" href="#">
<div className="bg-blue-600 rounded-full p-1.5 group-hover:bg-blue-500 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300">
<i className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" data-lucide="car-front" strokeWidth="1.5"></i>
</div>
<span className="text-2xl font-semibold tracking-tight text-white group-hover:text-blue-100 transition-colors">Radhe Auto</span>
</a>
<div className="relative group hidden lg:block">
<button className="flex items-center gap-1.5 text-base text-slate-300 hover:text-white transition-colors py-4">
                            Ahmedabad
                            <i className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>

<div className="dropdown-content absolute top-full left-0 mt-0 w-48 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50">
<a className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 font-medium rounded-lg transition-colors" href="#">Mumbai</a>
<a className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 font-medium rounded-lg transition-colors" href="#">Delhi</a>
<a className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 font-medium rounded-lg transition-colors" href="#">Bangalore</a>
</div>
</div>
</div>

<div className="hidden md:flex flex-1 max-w-xl relative">
<div className="relative w-full group">
<input className="w-full bg-slate-800/50 border border-slate-700 text-white text-base rounded-full pl-5 pr-12 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus:bg-slate-800 focus:border-blue-500/50 transition-all duration-300 placeholder:text-slate-500" placeholder="Search by car make, model..." type="text"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-400 hover:scale-110 active:scale-95 transition-all duration-200">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</button>
</div>
</div>

<nav className="hidden lg:flex items-center gap-6 text-base font-medium">
<div className="relative group">
<button className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors py-6">
                            Buy car <i className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="dropdown-content absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50">
<a className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors" href="#">Used Cars</a>
<a className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors" href="#">New Cars</a>
<a className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors" href="#">Electric Vehicles</a>
</div>
</div>
<div className="relative group">
<button className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors py-6">
                            Sell car <i className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="dropdown-content absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50">
<a className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors" href="#">Free Evaluation</a>
<a className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors" href="#">Sell from Home</a>
</div>
</div>
<div className="relative group">
<button className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors py-6">
                            More <i className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="dropdown-content absolute top-full left-0 mt-0 w-48 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50">
<a className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors" href="#">About Us</a>
<a className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors" href="#">Contact Support</a>
</div>
</div>
</nav>
<div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
<button className="flex flex-col items-center gap-0.5 text-slate-300 hover:text-blue-400 hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
<span className="text-xs hidden md:block">Shortlisted</span>
</button>
<button className="flex flex-col items-center gap-0.5 text-slate-300 hover:text-blue-400 hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
<i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i>
<span className="text-xs hidden md:block">Account</span>
</button>
<div className="hidden xl:flex flex-col items-end border-l border-slate-700 pl-6 ml-2 hover:text-blue-400 transition-colors cursor-pointer">
<span className="text-xs text-slate-400">Call us at</span>
<span className="text-lg font-medium tracking-tight text-white group-hover:text-blue-400">727-727-7275</span>
</div>

<button className="lg:hidden text-slate-300 hover:text-white active:scale-95 transition-all" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="hidden lg:hidden bg-slate-900 border-t border-slate-800 absolute w-full left-0 top-full" id="mobile-menu">
<div className="px-4 py-6 space-y-4">
<a className="block text-white font-medium hover:text-blue-400 transition-colors" href="#">Buy car</a>
<a className="block text-white font-medium hover:text-blue-400 transition-colors" href="#">Sell car</a>
<a className="block text-white font-medium hover:text-blue-400 transition-colors" href="#">More</a>
<div className="pt-4 border-t border-slate-800">
<p className="text-sm text-slate-400">Call us at</p>
<p className="text-lg font-medium text-white">727-727-7275</p>
</div>
</div>
</div>
</div>
</header>

<section className="relative w-full h-[50vh] md:h-[60vh] bg-slate-200 overflow-hidden scroll-anim">
<img alt="Happy family with car" className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 animate-[zoomOut_10s_ease-out_forwards]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
</section>

<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-16 sm:-mt-24 z-10 mb-20 scroll-anim" style={{transitionDelay: '200ms'}}>
<div className="bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">

<div className="flex border-b border-slate-100">
<button className="flex-1 py-4 text-center bg-blue-600 text-white font-medium text-lg tracking-tight transition-all duration-300 active:bg-blue-700" id="tab-buy">
                    BUY
                </button>
<button className="flex-1 py-4 text-center bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium text-lg tracking-tight transition-all duration-300 active:bg-slate-200" id="tab-sell">
                    SELL
                </button>
</div>

<div className="p-4 sm:p-6 md:p-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
<button className="filter-btn w-full flex items-center justify-between px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-base text-slate-600 hover:border-blue-400 hover:bg-slate-50 transition-all duration-300 text-left active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500/20">
<span className="truncate">Select Model</span>
<i className="w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 icon-arrow" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<button className="filter-btn w-full flex items-center justify-between px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-base text-slate-600 hover:border-blue-400 hover:bg-slate-50 transition-all duration-300 text-left active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500/20">
<span className="truncate">Select Budget</span>
<i className="w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 icon-arrow" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<button className="filter-btn w-full flex items-center justify-between px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-base text-slate-600 hover:border-blue-400 hover:bg-slate-50 transition-all duration-300 text-left active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500/20">
<span className="truncate">Select City</span>
<i className="w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 icon-arrow" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<button className="w-full bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 text-white text-base font-medium py-3.5 px-6 rounded-xl transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
                        SEARCH
                    </button>
</div>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
<h2 className="text-3xl md:text-4xl font-semibold text-center text-slate-900 mb-12 tracking-tight scroll-anim">Featured Radhe Auto cars</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 scroll-anim scroll-stagger">

<div className="scroll-anim group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex flex-col cursor-pointer">
<div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<button className="heart-btn absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 hover:bg-white hover:scale-110 active:scale-90 transition-all duration-300 shadow-sm z-10">
<i className="w-5 h-5 transition-colors" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-lg font-medium text-slate-900 tracking-tight line-clamp-1 mb-1 group-hover:text-blue-600 transition-colors">2017 Maruti Suzuki Baleno Alpha</h3>
<p className="text-sm text-slate-500 flex items-center gap-2 mb-4">
<span>90K km</span> <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Petrol</span> <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Manual</span>
</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-end justify-between">
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">₹4.03 Lakh</div>
</div>
<div className="text-sm text-slate-500 text-right">
                            EMI from ₹7,535/m
                        </div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-500 bg-slate-50 group-hover:bg-blue-50 transition-colors duration-300 p-2 rounded-lg">
<i className="w-3.5 h-3.5 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="truncate">Spinny Park, Swarnim Stone, Chharodi...</span>
</div>
</div>
</div>

<div className="scroll-anim group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex flex-col cursor-pointer">
<div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<button className="heart-btn absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 hover:bg-white hover:scale-110 active:scale-90 transition-all duration-300 shadow-sm z-10">
<i className="w-5 h-5 transition-colors" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-lg font-medium text-slate-900 tracking-tight line-clamp-1 mb-1 group-hover:text-blue-600 transition-colors">2015 Maruti Suzuki Alto 800 Lxi</h3>
<p className="text-sm text-slate-500 flex items-center gap-2 mb-4">
<span>59K km</span> <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Petrol</span> <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Manual</span>
</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-end justify-between">
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">₹2.20 Lakh</div>
</div>
<div className="text-sm text-slate-500 text-right">
                            EMI from ₹5,009/m
                        </div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-500 bg-slate-50 group-hover:bg-blue-50 transition-colors duration-300 p-2 rounded-lg">
<i className="w-3.5 h-3.5 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="truncate">Spinny Park, Swarnim Stone, Chharodi...</span>
</div>
</div>
</div>

<div className="scroll-anim group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex flex-col cursor-pointer">
<div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<button className="heart-btn absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 hover:bg-white hover:scale-110 active:scale-90 transition-all duration-300 shadow-sm z-10">
<i className="w-5 h-5 transition-colors" data-lucide="heart" strokeWidth="1.5"></i>
</button>
<div className="absolute top-3 left-3 bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-md shadow-sm">Assured</div>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-lg font-medium text-slate-900 tracking-tight line-clamp-1 mb-1 group-hover:text-blue-600 transition-colors">2024 Tata Tiago XZA Plus iCNG</h3>
<p className="text-sm text-slate-500 flex items-center gap-2 mb-4">
<span>16K km</span> <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Cng</span> <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Automatic</span>
</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-end justify-between">
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">₹7 Lakh</div>
</div>
<div className="text-sm text-slate-500 text-right">
                            EMI from ₹12,060/m
                        </div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-500 bg-slate-50 group-hover:bg-blue-50 transition-colors duration-300 p-2 rounded-lg">
<i className="w-3.5 h-3.5 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="truncate">Spinny Park, Swarnim Stone, Chharodi...</span>
</div>
</div>
</div>

<div className="scroll-anim group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex flex-col cursor-pointer">
<div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<button className="heart-btn absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 hover:bg-white hover:scale-110 active:scale-90 transition-all duration-300 shadow-sm z-10">
<i className="w-5 h-5 transition-colors" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-lg font-medium text-slate-900 tracking-tight line-clamp-1 mb-1 group-hover:text-blue-600 transition-colors">2015 Hyundai Grand i10 Sportz</h3>
<p className="text-sm text-slate-500 flex items-center gap-2 mb-4">
<span>101K km</span> <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Petrol</span> <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Manual</span>
</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-end justify-between">
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">₹3.34 Lakh</div>
</div>
<div className="text-sm text-slate-500 text-right">
                            EMI from ₹7,297/m
                        </div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-500 bg-slate-50 group-hover:bg-blue-50 transition-colors duration-300 p-2 rounded-lg">
<i className="w-3.5 h-3.5 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="truncate">Spinny Park, Swarnim Stone, Chharodi...</span>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-anim max-w-4xl mx-auto px-4 sm:px-6 py-12">
<h2 className="text-2xl md:text-3xl font-semibold text-center text-slate-900 mb-10 tracking-tight">Explore by Body Type</h2>
<div className="flex flex-wrap justify-center gap-4 sm:gap-8 bg-white p-4 sm:p-6 rounded-3xl border border-slate-100 shadow-sm">
<button className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-blue-600 text-white shadow-md hover:shadow-xl hover:-translate-y-2 hover:bg-blue-700 active:scale-95 transition-all duration-300 w-28 sm:w-32 group">
<i className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" data-lucide="car" strokeWidth="1.5"></i>
<span className="text-base font-medium tracking-tight">Hatchback</span>
</button>
<button className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-transparent hover:bg-blue-50 text-slate-600 hover:text-blue-600 shadow-sm hover:shadow-md border border-transparent hover:border-blue-100 transition-all hover:-translate-y-2 active:scale-95 duration-300 w-28 sm:w-32 group">
<i className="w-10 h-10 text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" data-lucide="car-front" strokeWidth="1.5"></i>
<span className="text-base font-medium tracking-tight">Sedan</span>
</button>
<button className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-transparent hover:bg-blue-50 text-slate-600 hover:text-blue-600 shadow-sm hover:shadow-md border border-transparent hover:border-blue-100 transition-all hover:-translate-y-2 active:scale-95 duration-300 w-28 sm:w-32 group">
<svg className="w-10 h-10 text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H8.3a2 2 0 0 0-1.6.8L4 11l-2.16.86a1 1 0 0 0-.84.99V16h3"></path><circle cx="6.5" cy="16.5" r="2.5"></circle><circle cx="16.5" cy="16.5" r="2.5"></circle></svg>
<span className="text-base font-medium tracking-tight">SUV</span>
</button>
<button className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-transparent hover:bg-blue-50 text-slate-600 hover:text-blue-600 shadow-sm hover:shadow-md border border-transparent hover:border-blue-100 transition-all hover:-translate-y-2 active:scale-95 duration-300 w-28 sm:w-32 group">
<svg className="w-10 h-10 text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="10" rx="2" ry="2" width="20" x="2" y="7"></rect><path d="M6 17v4"></path><path d="M18 17v4"></path><path d="M2 11h20"></path></svg>
<span className="text-base font-medium tracking-tight">MUV</span>
</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 scroll-anim scroll-stagger">

<div className="scroll-anim group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex flex-col cursor-pointer">
<div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<button className="heart-btn absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 hover:bg-white hover:scale-110 active:scale-90 transition-all duration-300 shadow-sm z-10">
<i className="w-5 h-5 transition-colors" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-lg font-medium text-slate-900 tracking-tight line-clamp-1 mb-1 group-hover:text-blue-600 transition-colors">2018 Maruti Suzuki Alto 800 LXi</h3>
<p className="text-sm text-slate-500 flex items-center gap-2 mb-4">
<span>40K km</span> <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Petrol</span> <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Manual</span>
</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-end justify-between">
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">₹2.24 Lakh</div>
</div>
<div className="text-sm text-slate-500 text-right">
                            EMI from ₹4,146/m
                        </div>
</div>
</div>
</div>

<div className="scroll-anim group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex flex-col cursor-pointer">
<div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<button className="heart-btn absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 hover:bg-white hover:scale-110 active:scale-90 transition-all duration-300 shadow-sm z-10">
<i className="w-5 h-5 transition-colors" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-lg font-medium text-slate-900 tracking-tight line-clamp-1 mb-1 group-hover:text-blue-600 transition-colors">2018 Honda WR-V VX MT Petrol</h3>
<p className="text-sm text-slate-500 flex items-center gap-2 mb-4">
<span>82K km</span> <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Petrol</span> <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Manual</span>
</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-end justify-between">
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">₹4.91 Lakh</div>
</div>
<div className="text-sm text-slate-500 text-right">
                            EMI from ₹8,548/m
                        </div>
</div>
</div>
</div>

<div className="scroll-anim group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex flex-col cursor-pointer">
<div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<button className="heart-btn absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 hover:bg-white hover:scale-110 active:scale-90 transition-all duration-300 shadow-sm z-10">
<i className="w-5 h-5 transition-colors" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-lg font-medium text-slate-900 tracking-tight line-clamp-1 mb-1 group-hover:text-blue-600 transition-colors">2021 Maruti Suzuki Baleno Delta</h3>
<p className="text-sm text-slate-500 flex items-center gap-2 mb-4">
<span>44K km</span> <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Petrol</span> <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Manual</span>
</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-end justify-between">
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">₹5.04 Lakh</div>
</div>
<div className="text-sm text-slate-500 text-right">
                            EMI from ₹8,770/m
                        </div>
</div>
</div>
</div>

<div className="scroll-anim group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex flex-col cursor-pointer">
<div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<button className="heart-btn absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 hover:bg-white hover:scale-110 active:scale-90 transition-all duration-300 shadow-sm z-10">
<i className="w-5 h-5 transition-colors" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-lg font-medium text-slate-900 tracking-tight line-clamp-1 mb-1 group-hover:text-blue-600 transition-colors">2020 Maruti Suzuki Dzire VXi</h3>
<p className="text-sm text-slate-500 flex items-center gap-2 mb-4">
<span>21K km</span> <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Petrol</span> <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Automatic</span>
</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-end justify-between">
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">₹5.69 Lakh</div>
</div>
<div className="text-sm text-slate-500 text-right">
                            EMI from ₹9,894/m
                        </div>
</div>
</div>
</div>
</div>
<div className="flex justify-center scroll-anim mt-8">
<button className="bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 text-white px-8 py-3.5 rounded-xl font-medium text-base tracking-tight transition-all duration-300 hover:-translate-y-1 active:scale-95 group flex items-center gap-2">
                Browse all cars
                <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-16 rounded-3xl bg-slate-900 text-white overflow-hidden relative scroll-anim shadow-2xl">
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-3">100+ business owners feels the magic</h2>
<p className="text-lg text-slate-400 mb-12">See What Our Clients Have to Say About Our Services</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 scroll-stagger is-visible">

<div className="scroll-anim relative rounded-2xl overflow-hidden aspect-[4/5] group cursor-pointer border border-slate-700/50 hover:border-slate-500 transition-colors duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-2 active:scale-95">
<img alt="David Johnson" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
<div className="w-16 h-16 rounded-full bg-white/10 border border-white/50 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
<i className="w-7 h-7 text-white ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
<div className="absolute bottom-0 left-0 p-6 transform group-hover:-translate-y-2 transition-transform duration-300">
<h4 className="text-lg font-medium tracking-tight text-white mb-1">David Johnson</h4>
<p className="text-sm text-slate-300 group-hover:text-white transition-colors">Director of Operations, Smith Industries</p>
</div>
</div>

<div className="scroll-anim relative rounded-2xl overflow-hidden aspect-[4/5] group cursor-pointer border border-slate-700/50 hover:border-slate-500 transition-colors duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-2 active:scale-95">
<img alt="Michelle Chen" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
<div className="w-16 h-16 rounded-full bg-white/10 border border-white/50 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
<i className="w-7 h-7 text-white ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
<div className="absolute bottom-0 left-0 p-6 transform group-hover:-translate-y-2 transition-transform duration-300">
<h4 className="text-lg font-medium tracking-tight text-white mb-1">Michelle Chen</h4>
<p className="text-sm text-slate-300 group-hover:text-white transition-colors">Marketing Manager, Chen &amp; Co.</p>
</div>
</div>

<div className="scroll-anim relative rounded-2xl overflow-hidden aspect-[4/5] group cursor-pointer border border-slate-700/50 hover:border-slate-500 transition-colors duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-2 active:scale-95">
<img alt="Michael Thompson" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
<div className="w-16 h-16 rounded-full bg-white/10 border border-white/50 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
<i className="w-7 h-7 text-white ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
<div className="absolute bottom-0 left-0 p-6 transform group-hover:-translate-y-2 transition-transform duration-300">
<h4 className="text-lg font-medium tracking-tight text-white mb-1">Michael Thompson</h4>
<p className="text-sm text-slate-300 group-hover:text-white transition-colors">CFO, Thompson Financial Solutions</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8 scroll-anim">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="flex flex-col gap-6">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="bg-blue-600 rounded-full p-1.5 group-hover:bg-blue-500 transition-colors duration-300">
<i className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" data-lucide="car-front" strokeWidth="1.5"></i>
</div>
<span className="text-2xl font-semibold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">Radhe Auto</span>
</div>
<p className="text-base text-slate-600 leading-relaxed">
                        Your trusted partner for premium car rentals since 2020. Making your journey comfortable and memorable.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-blue-600 hover:-translate-y-1 hover:shadow-lg active:scale-90 transition-all duration-300" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-blue-600 hover:-translate-y-1 hover:shadow-lg active:scale-90 transition-all duration-300" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-blue-600 hover:-translate-y-1 hover:shadow-lg active:scale-90 transition-all duration-300" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-6">Quick Links</h4>
<ul className="flex flex-col gap-4 text-base text-slate-600">
<li><a className="hover:text-blue-600 hover:translate-x-1 inline-block transition-transform duration-200" href="#">Home</a></li>
<li><a className="hover:text-blue-600 hover:translate-x-1 inline-block transition-transform duration-200" href="#">About Us</a></li>
<li><a className="hover:text-blue-600 hover:translate-x-1 inline-block transition-transform duration-200" href="#">Our Fleet</a></li>
<li><a className="hover:text-blue-600 hover:translate-x-1 inline-block transition-transform duration-200" href="#">Car Brands</a></li>
<li><a className="hover:text-blue-600 hover:translate-x-1 inline-block transition-transform duration-200" href="#">Our Service</a></li>
<li><a className="hover:text-blue-600 hover:translate-x-1 inline-block transition-transform duration-200" href="#">Blogs</a></li>
<li><a className="hover:text-blue-600 hover:translate-x-1 inline-block transition-transform duration-200" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-6">Contact</h4>
<ul className="flex flex-col gap-5 text-base text-slate-600">
<li className="flex items-start gap-3 group">
<i className="w-5 h-5 shrink-0 mt-0.5 group-hover:text-blue-600 transition-colors" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="group-hover:text-slate-900 transition-colors cursor-default">123 Auto Market Street, Ahmedabad,<br/>Gujarat</span>
</li>
<li className="flex items-center gap-3 group cursor-pointer">
<i className="w-5 h-5 shrink-0 group-hover:text-blue-600 group-hover:animate-bounce transition-colors" data-lucide="phone" strokeWidth="1.5"></i>
<span className="group-hover:text-blue-600 transition-colors">+91 727 888 8275</span>
</li>
<li className="flex items-center gap-3 group cursor-pointer">
<i className="w-5 h-5 shrink-0 group-hover:text-blue-600 transition-colors" data-lucide="mail" strokeWidth="1.5"></i>
<span className="group-hover:text-blue-600 transition-colors">info@radheauto.com</span>
</li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-6">Newsletter</h4>
<form className="flex flex-col gap-4" onsubmit="event.preventDefault();">
<input className="w-full bg-slate-100 border border-transparent text-slate-900 px-6 py-3.5 rounded-full focus:ring-2 focus:ring-blue-600 focus:bg-white focus:outline-none transition-all duration-300 placeholder:text-slate-500 text-base" placeholder="Enter Your Email Address" type="email"/>
<button className="w-full bg-slate-900 hover:bg-slate-800 hover:shadow-lg text-white font-medium py-3.5 rounded-full hover:-translate-y-1 active:scale-95 transition-all duration-300 text-base tracking-tight shadow-sm" type="submit">
                            Subscribe
                        </button>
</form>
</div>
</div>

<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
<p>© 2024 Radhe Auto. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-slate-900 hover:underline transition-all" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 hover:underline transition-all" href="#">Term &amp; Conditions</a>
<a className="hover:text-slate-900 hover:underline transition-all" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
