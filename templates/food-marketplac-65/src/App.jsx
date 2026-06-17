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
colors: {
coffee: {
900: '#1a0f0a',
800: '#2c1810',
700: '#3d2314',
600: '#5c3420',
500: '#6b4423',
400: '#8b5a3c',
},
cream: {
50: '#fdfbf7',
100: '#faf7f2',
200: '#f5ede4',
300: '#e8ddd0',
},
forest: {
700: '#1b4332',
800: '#15352a',
}
},
fontFamily: {
'display': ['Cormorant Garamond', 'serif'],
'body': ['Source Serif 4', 'serif'],
},
transitionTimingFunction: {
'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('py-3', 'nav-scrolled');
        navbar.classList.remove('py-4', 'lg:py-6');
      } else {
        navbar.classList.remove('py-3', 'nav-scrolled');
        navbar.classList.add('py-4', 'lg:py-6');
      }
    });

    // Mobile menu toggle
    function toggleMobileMenu() {
      const menu = document.getElementById('mobileMenu');
      if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.style.opacity = '0';
        menu.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          menu.style.transition = 'all 0.3s cubic-bezier(0.19, 1, 0.22, 1)';
          menu.style.opacity = '1';
          menu.style.transform = 'translateY(0)';
        }, 10);
      } else {
        menu.style.opacity = '0';
        menu.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          menu.classList.add('hidden');
        }, 300);
      }
    }

    // Advanced Intersection Observer for reveals
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if(entry.target.classList.contains('divider-line')) {
            // Unobserve divider once animated
            revealObserver.unobserve(entry.target);
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-up, .divider-line').forEach(el => {
      revealObserver.observe(el);
    });

    // Parallax effect on images
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      document.querySelectorAll('.parallax-img').forEach(img => {
        const speed = 0.05;
        img.style.transform = `translateY(${scrolled * speed}px) scale(1.05)`;
      });
    });

    // Process Timeline Scroll Animation
    const processSection = document.getElementById('subscriptions');
    const processProgress = document.getElementById('process-progress');
    
    if (processSection && processProgress) {
      window.addEventListener('scroll', () => {
        const sectionRect = processSection.getBoundingClientRect();
        const sectionTop = sectionRect.top;
        const sectionHeight = sectionRect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the section is scrolled
        if (sectionTop < windowHeight / 2 && sectionTop > -sectionHeight) {
          const scrollDistance = (windowHeight / 2) - sectionTop;
          let progress = scrollDistance / sectionHeight;
          
          // Clamp between 0 and 1
          progress = Math.max(0, Math.min(1, progress));
          processProgress.style.transform = `scaleY(${progress})`;
        }
      });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          document.getElementById('mobileMenu').classList.add('hidden');
        }
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
      

<div className="fixed inset-0 texture-overlay pointer-events-none z-[100]"></div>

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-nav py-4 lg:py-6" id="navbar">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between">

<a className="font-display text-2xl lg:text-3xl font-normal tracking-tight text-coffee-800 transition-transform hover:scale-105 duration-500 ease-out-expo" href="#">
          PRELO
        </a>

<div className="hidden md:flex items-center space-x-10">
<a className="text-sm tracking-wide text-coffee-600 hover:text-coffee-900 transition-colors duration-300 relative group" href="#menu">
            Weekly Menu
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-coffee-800 transition-all duration-500 ease-out-expo group-hover:w-full"></span>
</a>
<a className="text-sm tracking-wide text-coffee-600 hover:text-coffee-900 transition-colors duration-300 relative group" href="#subscriptions">
            Subscriptions
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-coffee-800 transition-all duration-500 ease-out-expo group-hover:w-full"></span>
</a>
<a className="text-sm tracking-wide text-coffee-600 hover:text-coffee-900 transition-colors duration-300 relative group" href="#marketplace">
            Marketplace
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-coffee-800 transition-all duration-500 ease-out-expo group-hover:w-full"></span>
</a>
<a className="text-sm tracking-wide text-coffee-600 hover:text-coffee-900 transition-colors duration-300 relative group" href="#dashboard">
            Dashboard
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-coffee-800 transition-all duration-500 ease-out-expo group-hover:w-full"></span>
</a>
</div>

<div className="flex items-center gap-4">

<button className="relative p-2 text-coffee-800 hover:bg-coffee-800/5 rounded-full transition-colors group">
<iconify-icon icon="solar:box-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-4 h-4 bg-forest-700 text-cream-50 text-[10px] font-semibold flex items-center justify-center rounded-full scale-100 transition-transform duration-300">4</span>
</button>

<button className="md:hidden p-2 text-coffee-800 hover:bg-coffee-800/5 rounded-full transition-colors" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="absolute top-full left-0 w-full hidden md:hidden glass-nav border-t border-coffee-800/10 shadow-xl" id="mobileMenu">
<div className="px-6 py-8 space-y-6">
<a className="block text-2xl font-display tracking-tight text-coffee-700 hover:text-coffee-900 transition-colors" href="#menu">Weekly Menu</a>
<a className="block text-2xl font-display tracking-tight text-coffee-700 hover:text-coffee-900 transition-colors" href="#subscriptions">Subscriptions</a>
<a className="block text-2xl font-display tracking-tight text-coffee-700 hover:text-coffee-900 transition-colors" href="#marketplace">Marketplace</a>
<a className="block text-2xl font-display tracking-tight text-coffee-700 hover:text-coffee-900 transition-colors" href="#dashboard">Dashboard</a>
</div>
</div>
</nav>

<section className="min-h-screen pt-24 lg:pt-32 relative overflow-hidden flex items-center">
<div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="order-2 lg:order-1 flex flex-col justify-center reveal-up">
<div className="mb-6 flex items-center gap-4">
<span className="w-8 h-px bg-forest-700"></span>
<span className="handwritten text-forest-700 text-lg flex items-center gap-2">
<iconify-icon icon="solar:medal-star-linear" width="20"></iconify-icon>
              Platinum Member
            </span>
</div>
<h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.05] text-coffee-900 mb-8">
            Curated meals,<br/>
<span className="italic text-coffee-600">tailored for you</span>
</h1>
<p className="text-lg lg:text-xl text-coffee-600 leading-relaxed max-w-md mb-12">
            Discover specialty foods and weekly meal subscriptions from independent chefs. 
            Our AI recommendation engine learns your preferences with every order.
          </p>
<div className="flex flex-col sm:flex-row gap-5">
<a className="group relative inline-flex items-center justify-center px-8 py-4 bg-coffee-800 text-cream-50 text-sm tracking-wide overflow-hidden" href="#menu">
<span className="absolute inset-0 w-full h-full bg-coffee-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out-expo"></span>
<span className="relative z-10 flex items-center gap-2">
                Select Weekly Meals
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</span>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 border border-coffee-800/20 text-coffee-800 text-sm tracking-wide hover:bg-coffee-800/5 hover:border-coffee-800/40 transition-all duration-500" href="#dashboard">
              View Dashboard
            </a>
</div>
</div>

<div className="relative order-1 lg:order-2 reveal-up delay-200 parallax-container">
<div className="aspect-[4/5] lg:aspect-[3/4] relative overflow-hidden group hover-reveal-img">
<img alt="Premium fresh meal" className="w-full h-full object-cover grain-img parallax-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-coffee-900/40 via-transparent to-transparent"></div>
</div>

<div className="absolute -bottom-6 -right-6 lg:bottom-12 lg:-left-12 bg-cream-50/90 backdrop-blur-md px-6 py-4 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border border-coffee-800/5">
<p className="handwritten text-coffee-800 text-xl">Weekly Premium Box</p>
<div className="flex items-center gap-3 mt-1">
<div className="flex-1 h-1 bg-coffee-800/10 rounded-full w-24">
<div className="h-full bg-forest-700 rounded-full w-2/3"></div>
</div>
<p className="text-xs text-coffee-500 uppercase tracking-widest">4/6 Selected</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center reveal-up delay-300">
<span className="text-xs text-coffee-500 tracking-widest uppercase mb-4">Scroll</span>
<div className="w-px h-16 bg-coffee-800/10 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1/2 bg-coffee-500 animate-[translateY_2s_ease-in-out_infinite]"></div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 reveal-up">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="divider-line mb-16 mx-auto w-3/4"></div>
<blockquote className="font-display text-3xl lg:text-4xl italic text-coffee-800 leading-relaxed tracking-tight">
        "Every meal carries the story of its chef, sourced with care and delivered fresh to your door."
      </blockquote>
<p className="mt-8 text-sm text-coffee-500 tracking-widest uppercase">— The Marketplace Promise</p>
<div className="divider-line mt-16 mx-auto w-3/4"></div>
</div>
</section>

<section className="py-20 lg:py-32 bg-cream-50 border-y border-coffee-800/5 relative" id="menu">
<div className="max-w-6xl mx-auto px-6 lg:px-8">

<div className="mb-20 lg:mb-32 reveal-up">
<span className="handwritten text-forest-700 text-xl">Your selections</span>
<h2 className="font-display text-4xl lg:text-6xl font-normal tracking-tight text-coffee-900 mt-4">
          Weekly Menu
        </h2>
<p className="mt-6 text-coffee-600 max-w-xl leading-relaxed text-lg">
          Select your 6 meals for the upcoming week. Our AI has highlighted some recommendations based on your favorite categories and dietary preferences.
        </p>
</div>

<div className="space-y-32 lg:space-y-48">

<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center reveal-up">
<div className="relative group hover-reveal-img">
<div className="aspect-[4/3] overflow-hidden bg-coffee-100">
<img alt="Salmon Bowl" className="w-full h-full object-cover grain-img" src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-8 -right-8 w-28 h-28 bg-forest-800 flex items-center justify-center rounded-full shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-500">
<span className="text-cream-100 text-xs tracking-widest text-center leading-relaxed">Chef<br/>Marco</span>
</div>
</div>
<div className="lg:pl-8">
<span className="flex items-center gap-2 text-sm text-forest-700 font-semibold tracking-widest uppercase mb-4">
<iconify-icon icon="solar:stars-linear" width="18"></iconify-icon> AI Recommended
            </span>
<h3 className="font-display text-3xl lg:text-5xl font-normal tracking-tight text-coffee-900 mb-6">
              Wild Caught Salmon Bowl
            </h3>
<p className="text-coffee-600 text-lg leading-relaxed mb-8">
              Perfectly roasted wild salmon served over a bed of quinoa, fresh avocado, edamame, and finished with a house-made sesame ginger dressing. A high-protein customer favorite perfectly matched to your past orders.
            </p>
<div className="flex flex-wrap gap-3 mb-10">
<span className="px-4 py-1.5 border border-coffee-800/10 text-coffee-800 text-sm tracking-wide rounded-full hover:bg-coffee-800 hover:text-cream-50 transition-colors cursor-default">High Protein</span>
<span className="px-4 py-1.5 border border-coffee-800/10 text-coffee-800 text-sm tracking-wide rounded-full hover:bg-coffee-800 hover:text-cream-50 transition-colors cursor-default">Keto Friendly</span>
<span className="px-4 py-1.5 border border-coffee-800/10 text-coffee-800 text-sm tracking-wide rounded-full hover:bg-coffee-800 hover:text-cream-50 transition-colors cursor-default">Top Rated</span>
</div>
<button className="inline-flex items-center text-coffee-900 hover:text-forest-700 transition-colors group">
<span className="text-sm tracking-widest uppercase font-semibold">Add to Box</span>
<iconify-icon className="ml-3 group-hover:rotate-90 transition-transform duration-300" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center reveal-up">
<div className="relative lg:order-2 group hover-reveal-img">
<div className="aspect-[4/3] overflow-hidden bg-coffee-100">
<img alt="Healthy Quinoa Bowl" className="w-full h-full object-cover grain-img" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -top-8 -left-8 w-28 h-28 bg-coffee-800 flex items-center justify-center rounded-full shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-500">
<span className="text-cream-100 text-xs tracking-widest text-center leading-relaxed">Chef<br/>Elena</span>
</div>
</div>
<div className="lg:pr-8 lg:order-1">
<span className="flex items-center gap-2 text-sm text-coffee-500 tracking-widest uppercase mb-4">
<span className="w-4 h-px bg-coffee-500"></span> Chef's Special
            </span>
<h3 className="font-display text-3xl lg:text-5xl font-normal tracking-tight text-coffee-900 mb-6">
              Mediterranean Quinoa
            </h3>
<p className="text-coffee-600 text-lg leading-relaxed mb-8">
              Locally sourced organic greens, crisp cucumbers, cherry tomatoes, Kalamata olives, and feta cheese tossed with a light lemon herb vinaigrette. Fresh, vibrant, and incredibly nourishing.
            </p>
<div className="flex flex-wrap gap-3 mb-10">
<span className="px-4 py-1.5 border border-coffee-800/10 text-coffee-800 text-sm tracking-wide rounded-full hover:bg-coffee-800 hover:text-cream-50 transition-colors cursor-default">Vegetarian</span>
<span className="px-4 py-1.5 border border-coffee-800/10 text-coffee-800 text-sm tracking-wide rounded-full hover:bg-coffee-800 hover:text-cream-50 transition-colors cursor-default">Gluten-Free</span>
<span className="px-4 py-1.5 border border-coffee-800/10 text-coffee-800 text-sm tracking-wide rounded-full hover:bg-coffee-800 hover:text-cream-50 transition-colors cursor-default">Fresh</span>
</div>
<button className="inline-flex items-center text-coffee-900 hover:text-forest-700 transition-colors group">
<span className="text-sm tracking-widest uppercase font-semibold">Add to Box</span>
<iconify-icon className="ml-3 group-hover:rotate-90 transition-transform duration-300" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-40 bg-coffee-900 text-cream-100 relative overflow-hidden" id="subscriptions">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(61,35,20,0.5),transparent_50%)]"></div>
<div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

<div className="text-center mb-20 lg:mb-32 reveal-up">
<span className="handwritten text-cream-400 text-xl">The Prelo Experience</span>
<h2 className="font-display text-4xl lg:text-6xl font-normal tracking-tight text-cream-50 mt-4">
          How it Works
        </h2>
<p className="mt-6 text-cream-300 max-w-xl mx-auto leading-relaxed text-lg">
          From smart curation to rewarding your loyalty, we've built a marketplace that puts your preferences first.
        </p>
</div>

<div className="relative max-w-5xl mx-auto">

<div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px process-track -translate-x-1/2">
<div className="w-full h-full process-fill" id="process-progress"></div>
</div>
<div className="space-y-24 lg:space-y-40">

<div className="relative grid lg:grid-cols-2 gap-12 lg:gap-24 items-center process-step reveal-up">
<div className="lg:text-right lg:pr-12">
<span className="text-5xl font-display text-coffee-700 opacity-50 mb-4 block">01</span>
<h3 className="font-display text-3xl lg:text-4xl font-normal tracking-tight text-cream-50 mb-4">AI Recommendations</h3>
<p className="text-cream-300 text-lg leading-relaxed">
                Our smart engine analyzes your order history, dietary preferences, and favorite categories to suggest the perfect meals for your weekly Premium subscription.
              </p>
</div>
<div className="aspect-[4/3] overflow-hidden order-first lg:order-last group">
<img alt="Food ingredients" className="w-full h-full object-cover grain-img group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cream-100 border-4 border-coffee-900 z-10"></div>
</div>

<div className="relative grid lg:grid-cols-2 gap-12 lg:gap-24 items-center process-step reveal-up">
<div className="aspect-[4/3] overflow-hidden group">
<img alt="Fresh box delivery" className="w-full h-full object-cover grain-img group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="lg:pl-12">
<span className="text-5xl font-display text-coffee-700 opacity-50 mb-4 block">02</span>
<h3 className="font-display text-3xl lg:text-4xl font-normal tracking-tight text-cream-50 mb-4">Loyalty Rewards</h3>
<p className="text-cream-300 text-lg leading-relaxed">
                Automatically earn points with every transaction. Progress through Bronze, Silver, Gold, and Platinum tiers to unlock exclusive marketplace perks and discounts.
              </p>
</div>

<div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cream-100 border-4 border-coffee-900 z-10"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-cream-100" id="marketplace">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 reveal-up">
<div>
<span className="handwritten text-forest-700 text-xl">Enhance your box</span>
<h2 className="font-display text-4xl lg:text-5xl font-normal tracking-tight text-coffee-900 mt-4">
            Marketplace Add-ons
          </h2>
</div>
<a className="mt-6 lg:mt-0 group flex items-center gap-2 text-sm tracking-widest uppercase font-semibold text-coffee-800 hover:text-forest-700 transition-colors" href="#">
          View All Products
          <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group relative reveal-up">
<div className="aspect-[3/4] overflow-hidden bg-cream-200 mb-6 relative">
<img alt="Artisan Bread" className="w-full h-full object-cover grain-img group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-x-4 bottom-4 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out-expo z-10">
<button className="w-full bg-cream-50/90 backdrop-blur-sm text-coffee-900 py-3 text-sm tracking-widest uppercase font-semibold hover:bg-coffee-900 hover:text-cream-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Add — $8
              </button>
</div>
<div className="absolute inset-0 bg-coffee-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-display text-xl tracking-tight text-coffee-900 group-hover:text-forest-700 transition-colors">Artisan Sourdough</h3>
<p className="text-sm text-coffee-500 mt-1">Bakery • Freshly Baked</p>
</div>
<p className="text-coffee-900 font-medium">$8</p>
</div>
</div>

<div className="group relative reveal-up delay-100">
<div className="aspect-[3/4] overflow-hidden bg-cream-200 mb-6 relative">
<img alt="Olive Oil" className="w-full h-full object-cover grain-img group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-4 bottom-4 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out-expo z-10">
<button className="w-full bg-cream-50/90 backdrop-blur-sm text-coffee-900 py-3 text-sm tracking-widest uppercase font-semibold hover:bg-coffee-900 hover:text-cream-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Add — $24
              </button>
</div>
<div className="absolute inset-0 bg-coffee-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-display text-xl tracking-tight text-coffee-900 group-hover:text-forest-700 transition-colors">Organic Olive Oil</h3>
<p className="text-sm text-coffee-500 mt-1">Pantry • Cold Pressed</p>
</div>
<p className="text-coffee-900 font-medium">$24</p>
</div>
</div>

<div className="group relative reveal-up delay-200">
<div className="aspect-[3/4] overflow-hidden bg-cream-200 mb-6 relative">
<img alt="Local Honey" className="w-full h-full object-cover grain-img group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-x-4 bottom-4 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out-expo z-10">
<button className="w-full bg-cream-50/90 backdrop-blur-sm text-coffee-900 py-3 text-sm tracking-widest uppercase font-semibold hover:bg-coffee-900 hover:text-cream-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Add — $12
              </button>
</div>
<div className="absolute inset-0 bg-coffee-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-display text-xl tracking-tight text-coffee-900 group-hover:text-forest-700 transition-colors">Raw Local Honey</h3>
<p className="text-sm text-coffee-500 mt-1">Pantry • Unfiltered</p>
</div>
<p className="text-coffee-900 font-medium">$12</p>
</div>
</div>

<div className="group relative reveal-up delay-300">
<div className="aspect-[3/4] overflow-hidden bg-cream-200 mb-6 relative">
<img alt="Kombucha" className="w-full h-full object-cover grain-img group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-4 bottom-4 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out-expo z-10">
<button className="w-full bg-cream-50/90 backdrop-blur-sm text-coffee-900 py-3 text-sm tracking-widest uppercase font-semibold hover:bg-coffee-900 hover:text-cream-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Add — $16
              </button>
</div>
<div className="absolute inset-0 bg-coffee-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-display text-xl tracking-tight text-coffee-900 group-hover:text-forest-700 transition-colors">Kombucha 4-Pack</h3>
<p className="text-sm text-coffee-500 mt-1">Beverages • Probiotic</p>
</div>
<p className="text-coffee-900 font-medium">$16</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-coffee-900 text-cream-200 py-20 lg:py-24 border-t border-coffee-800">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 reveal-up">

<div className="lg:col-span-1">
<a className="font-display text-3xl font-normal tracking-tight text-cream-50" href="#">PRELO</a>
<p className="mt-6 text-cream-400 text-sm leading-relaxed max-w-xs">
            Your premium food marketplace. AI-curated subscriptions, independent chefs, and loyalty rewards.
          </p>
</div>

<div>
<h4 className="text-xs text-cream-500 tracking-widest uppercase mb-6 font-semibold">Dashboard</h4>
<ul className="space-y-4">
<li><a className="text-cream-300 hover:text-cream-50 transition-colors text-sm" href="#menu">Weekly Menu</a></li>
<li><a className="text-cream-300 hover:text-cream-50 transition-colors text-sm" href="#subscriptions">Manage Subscriptions</a></li>
<li><a className="text-cream-300 hover:text-cream-50 transition-colors text-sm" href="#">Loyalty Points</a></li>
<li><a className="text-cream-300 hover:text-cream-50 transition-colors text-sm" href="#">Order History</a></li>
</ul>
</div>

<div>
<h4 className="text-xs text-cream-500 tracking-widest uppercase mb-6 font-semibold">Admin &amp; Vendors</h4>
<ul className="space-y-4">
<li><a className="text-cream-300 hover:text-cream-50 transition-colors text-sm" href="#">Admin Analytics</a></li>
<li><a className="text-cream-300 hover:text-cream-50 transition-colors text-sm" href="#">Manage Customers</a></li>
<li><a className="text-cream-300 hover:text-cream-50 transition-colors text-sm" href="#">Vendor Sign Up</a></li>
<li><a className="text-cream-300 hover:text-cream-50 transition-colors text-sm" href="#">Support Chat</a></li>
</ul>
</div>

<div>
<h4 className="text-xs text-cream-500 tracking-widest uppercase mb-6 font-semibold">Newsletter</h4>
<p className="text-cream-400 text-sm mb-6">
            New chef menus, marketplace additions, and dietary tips.
          </p>
<form className="flex relative group">
<input className="w-full bg-coffee-800/50 border border-coffee-700 px-4 py-3 text-sm text-cream-200 placeholder-coffee-500 focus:outline-none focus:border-forest-700 focus:bg-coffee-800 transition-colors" placeholder="Email address" type="email"/>
<button className="absolute right-0 top-0 bottom-0 px-4 text-cream-300 hover:text-cream-50 transition-colors flex items-center justify-center" type="submit">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</form>
</div>
</div>

<div className="pt-8 border-t border-coffee-800 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 reveal-up delay-100">
<p className="text-coffee-500 text-xs tracking-wide">
          © 2024 Prelo Marketplace. All rights reserved.
        </p>
<div className="flex items-center gap-6">
<a className="text-coffee-500 hover:text-cream-300 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="text-coffee-500 hover:text-cream-300 transition-colors" href="#">
<iconify-icon icon="solar:hashtag-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
