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



        // Initialize Lucide icons
        lucide.createIcons();

        // Page Navigation
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show selected page
            const targetPage = document.getElementById('page-' + pageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }

            // Update nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('nav-active');
                if (link.dataset.page === pageId) {
                    link.classList.add('nav-active');
                }
            });

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Re-initialize icons for new page content
            lucide.createIcons();
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            const closeIcon = document.getElementById('close-icon');
            
            menu.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        }

        // FAQ Toggle
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            content.classList.toggle('hidden');
            icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        }

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });

        // Add scroll effect to navbar
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('bg-slate-950/90');
            } else {
                nav.classList.remove('bg-slate-950/90');
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
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
<div className="flex items-center justify-between h-16 lg:h-20">

<a className="flex items-center space-x-2" href="#" onclick="showPage('home')">
<div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl gradient-bg flex items-center justify-center">
<span className="text-white font-bold text-sm lg:text-base tracking-tighter">MP</span>
</div>
<span className="font-semibold text-base lg:text-lg tracking-tight">MYPOS Cloud</span>
</a>

<div className="hidden lg:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-300 hover:text-white transition nav-link" data-page="home" href="#" onclick="showPage('home')">Home</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition nav-link" data-page="features" href="#" onclick="showPage('features')">Features</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition nav-link" data-page="pricing" href="#" onclick="showPage('pricing')">Pricing</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition nav-link" data-page="dashboard" href="#" onclick="showPage('dashboard')">Dashboard</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition nav-link" data-page="blog" href="#" onclick="showPage('blog')">Blog</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition nav-link" data-page="about" href="#" onclick="showPage('about')">About</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition nav-link" data-page="contact" href="#" onclick="showPage('contact')">Contact</a>
</div>

<div className="hidden lg:flex items-center space-x-4">
<button className="text-sm font-medium text-slate-300 hover:text-white transition">Sign In</button>
<button className="px-5 py-2.5 rounded-xl gradient-bg text-sm font-medium hover:opacity-90 transition">Get Demo</button>
</div>

<button className="lg:hidden p-2 rounded-lg hover:bg-slate-800 transition" onclick="toggleMobileMenu()">
<i className="w-6 h-6" data-lucide="menu" id="menu-icon"></i>
<i className="w-6 h-6 hidden" data-lucide="x" id="close-icon"></i>
</button>
</div>
</div>

<div className="hidden lg:hidden glass-dark border-t border-slate-800" id="mobile-menu">
<div className="px-4 py-6 space-y-4">
<a className="block text-base font-medium text-slate-300 hover:text-white transition py-2" href="#" onclick="showPage('home'); toggleMobileMenu();">Home</a>
<a className="block text-base font-medium text-slate-300 hover:text-white transition py-2" href="#" onclick="showPage('features'); toggleMobileMenu();">Features</a>
<a className="block text-base font-medium text-slate-300 hover:text-white transition py-2" href="#" onclick="showPage('pricing'); toggleMobileMenu();">Pricing</a>
<a className="block text-base font-medium text-slate-300 hover:text-white transition py-2" href="#" onclick="showPage('dashboard'); toggleMobileMenu();">Dashboard</a>
<a className="block text-base font-medium text-slate-300 hover:text-white transition py-2" href="#" onclick="showPage('blog'); toggleMobileMenu();">Blog</a>
<a className="block text-base font-medium text-slate-300 hover:text-white transition py-2" href="#" onclick="showPage('about'); toggleMobileMenu();">About</a>
<a className="block text-base font-medium text-slate-300 hover:text-white transition py-2" href="#" onclick="showPage('contact'); toggleMobileMenu();">Contact</a>
<a className="block text-base font-medium text-slate-300 hover:text-white transition py-2" href="#" onclick="showPage('download'); toggleMobileMenu();">Download App</a>
<div className="pt-4 space-y-3">
<button className="w-full py-3 rounded-xl border border-slate-700 text-sm font-medium hover:bg-slate-800 transition">Sign In</button>
<button className="w-full py-3 rounded-xl gradient-bg text-sm font-medium hover:opacity-90 transition">Get Demo</button>
</div>
</div>
</div>
</nav>

<div className="page active" id="page-home">

<section className="relative min-h-screen pt-20 lg:pt-24 overflow-hidden">

<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
<div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-20">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="text-center lg:text-left">
<div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
<span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
<span className="text-xs font-medium text-slate-300">Trusted by 1,200+ restaurants</span>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight mb-6">
                            Modern POS for <span className="gradient-text">Restaurants, Hotels &amp; Cafés</span>
</h1>
<p className="text-base lg:text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0">
                            Fast billing, smart inventory, real-time analytics. Everything you need to run your food business efficiently in one powerful platform.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<button className="px-8 py-4 rounded-2xl gradient-bg text-base font-medium hover:opacity-90 transition pulse-glow">
                                Get Free Demo
                            </button>
<button className="px-8 py-4 rounded-2xl glass text-base font-medium hover:bg-white/10 transition flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                                Watch Video
                            </button>
</div>

<div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-800">
<div>
<div className="text-2xl lg:text-3xl font-bold gradient-text">1,200+</div>
<div className="text-xs lg:text-sm text-slate-400">Active Businesses</div>
</div>
<div>
<div className="text-2xl lg:text-3xl font-bold gradient-text">₹50Cr+</div>
<div className="text-xs lg:text-sm text-slate-400">Transactions/Month</div>
</div>
<div>
<div className="text-2xl lg:text-3xl font-bold gradient-text">99.9%</div>
<div className="text-xs lg:text-sm text-slate-400">Uptime</div>
</div>
</div>
</div>

<div className="relative">
<div className="relative float-animation">

<div className="relative mx-auto w-full max-w-md">
<div className="glass rounded-3xl p-6 lg:p-8 illustration-3d">
<div className="bg-slate-900 rounded-2xl p-4 lg:p-6">

<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
<span className="text-xs font-bold">MP</span>
</div>
<span className="text-sm font-medium">MYPOS Cloud</span>
</div>
<span className="text-xs text-slate-400">Table 5</span>
</div>

<div className="space-y-3 mb-4">
<div className="flex justify-between items-center py-2 border-b border-slate-800">
<div>
<div className="text-sm font-medium">Paneer Tikka</div>
<div className="text-xs text-slate-400">x2</div>
</div>
<div className="text-sm font-medium text-green-400">₹380</div>
</div>
<div className="flex justify-between items-center py-2 border-b border-slate-800">
<div>
<div className="text-sm font-medium">Butter Chicken</div>
<div className="text-xs text-slate-400">x1</div>
</div>
<div className="text-sm font-medium text-green-400">₹320</div>
</div>
<div className="flex justify-between items-center py-2 border-b border-slate-800">
<div>
<div className="text-sm font-medium">Naan Basket</div>
<div className="text-xs text-slate-400">x3</div>
</div>
<div className="text-sm font-medium text-green-400">₹90</div>
</div>
</div>

<div className="flex justify-between items-center py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl px-4">
<span className="font-medium">Total</span>
<span className="text-xl font-bold gradient-text">₹790</span>
</div>

<div className="grid grid-cols-3 gap-2 mt-4">
<button className="py-2 rounded-lg bg-green-500/20 text-green-400 text-xs font-medium">Cash</button>
<button className="py-2 rounded-lg bg-blue-500/20 text-blue-400 text-xs font-medium">Card</button>
<button className="py-2 rounded-lg bg-purple-500/20 text-purple-400 text-xs font-medium">UPI</button>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 glass rounded-2xl p-3 float-animation" style={{animationDelay: '0.5s'}}>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-green-400" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-xs text-slate-400">Today</div>
<div className="text-sm font-semibold text-green-400">+23%</div>
</div>
</div>
</div>
<div className="absolute -bottom-4 -left-4 glass rounded-2xl p-3 float-animation" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-purple-400" data-lucide="receipt"></i>
</div>
<div>
<div className="text-xs text-slate-400">Orders</div>
<div className="text-sm font-semibold">187</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
<i className="w-6 h-6 text-slate-400" data-lucide="chevron-down"></i>
</div>
</section>

<section className="py-16 lg:py-24 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
<div className="text-center mb-12 lg:mb-16">
<span className="inline-block px-4 py-2 rounded-full glass text-xs font-medium text-purple-400 mb-4">FEATURES</span>
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">Everything You Need to Run Your Business</h2>
<p className="text-slate-400 max-w-2xl mx-auto">Powerful features designed specifically for restaurants, hotels, and cafés to streamline operations and boost revenue.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="glass rounded-2xl p-6 lg:p-8 hover-lift">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center mb-6">
<i className="w-7 h-7 text-purple-400" data-lucide="receipt"></i>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Smart Billing</h3>
<p className="text-slate-400 text-sm leading-relaxed">Lightning-fast billing with split bills, discounts, taxes, and multiple payment modes including UPI, cards, and cash.</p>
</div>

<div className="glass rounded-2xl p-6 lg:p-8 hover-lift">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-6">
<i className="w-7 h-7 text-blue-400" data-lucide="package"></i>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Inventory Management</h3>
<p className="text-slate-400 text-sm leading-relaxed">Real-time stock tracking with auto-deduction, low stock alerts, and supplier management for seamless operations.</p>
</div>

<div className="glass rounded-2xl p-6 lg:p-8 hover-lift">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center mb-6">
<i className="w-7 h-7 text-cyan-400" data-lucide="layout-grid"></i>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Table Management</h3>
<p className="text-slate-400 text-sm leading-relaxed">Visual floor plan with real-time table status, reservations, and quick order transfer between tables.</p>
</div>

<div className="glass rounded-2xl p-6 lg:p-8 hover-lift">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center mb-6">
<i className="w-7 h-7 text-orange-400" data-lucide="monitor"></i>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Kitchen Display (KDS)</h3>
<p className="text-slate-400 text-sm leading-relaxed">Digital kitchen orders with priority marking, preparation time tracking, and instant status updates.</p>
</div>

<div className="glass rounded-2xl p-6 lg:p-8 hover-lift">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 flex items-center justify-center mb-6">
<i className="w-7 h-7 text-pink-400" data-lucide="users"></i>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Customer CRM</h3>
<p className="text-slate-400 text-sm leading-relaxed">Build customer loyalty with order history, preferences, reward points, and targeted promotions.</p>
</div>

<div className="glass rounded-2xl p-6 lg:p-8 hover-lift">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center mb-6">
<i className="w-7 h-7 text-green-400" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Analytics &amp; Reports</h3>
<p className="text-slate-400 text-sm leading-relaxed">Comprehensive insights with sales trends, peak hours analysis, and staff performance metrics.</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 relative overflow-hidden">
<div className="absolute inset-0">
<div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
<div className="text-center mb-12 lg:mb-16">
<span className="inline-block px-4 py-2 rounded-full glass text-xs font-medium text-cyan-400 mb-4">DASHBOARD</span>
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">Real-Time Business Insights</h2>
<p className="text-slate-400 max-w-2xl mx-auto">Monitor your business performance with beautiful, intuitive dashboards that update in real-time.</p>
</div>

<div className="glass rounded-3xl p-4 lg:p-8 illustration-3d">
<div className="bg-slate-900 rounded-2xl p-4 lg:p-6">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<div>
<h3 className="text-lg font-semibold">Dashboard Overview</h3>
<p className="text-sm text-slate-400">Monday, 15 January 2025</p>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 text-xs font-medium">Today</button>
<button className="px-4 py-2 rounded-lg bg-slate-800 text-slate-400 text-xs font-medium">Week</button>
<button className="px-4 py-2 rounded-lg bg-slate-800 text-slate-400 text-xs font-medium">Month</button>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
<div className="bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl p-4">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-purple-400" data-lucide="indian-rupee"></i>
<span className="text-xs text-slate-400">Daily Sales</span>
</div>
<div className="text-xl lg:text-2xl font-bold">₹42,560</div>
<div className="text-xs text-green-400 flex items-center gap-1 mt-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> +18.2%
                                </div>
</div>
<div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl p-4">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-blue-400" data-lucide="shopping-bag"></i>
<span className="text-xs text-slate-400">Orders Today</span>
</div>
<div className="text-xl lg:text-2xl font-bold">187</div>
<div className="text-xs text-green-400 flex items-center gap-1 mt-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> +12.5%
                                </div>
</div>
<div className="bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl p-4">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-cyan-400" data-lucide="users"></i>
<span className="text-xs text-slate-400">Customers</span>
</div>
<div className="text-xl lg:text-2xl font-bold">143</div>
<div className="text-xs text-green-400 flex items-center gap-1 mt-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> +8.3%
                                </div>
</div>
<div className="bg-gradient-to-br from-orange-500/10 to-transparent rounded-xl p-4">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-orange-400" data-lucide="star"></i>
<span className="text-xs text-slate-400">Avg. Rating</span>
</div>
<div className="text-xl lg:text-2xl font-bold">4.8</div>
<div className="text-xs text-green-400 flex items-center gap-1 mt-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> +0.2
                                </div>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-4">

<div className="lg:col-span-2 bg-slate-800/50 rounded-xl p-4">
<h4 className="text-sm font-medium mb-4">Sales Trend</h4>
<div className="h-40 flex items-end justify-between gap-2">
<div className="flex-1 bg-gradient-to-t from-purple-500 to-purple-500/20 rounded-t-lg" style={{height: '60%'}}></div>
<div className="flex-1 bg-gradient-to-t from-purple-500 to-purple-500/20 rounded-t-lg" style={{height: '75%'}}></div>
<div className="flex-1 bg-gradient-to-t from-purple-500 to-purple-500/20 rounded-t-lg" style={{height: '45%'}}></div>
<div className="flex-1 bg-gradient-to-t from-purple-500 to-purple-500/20 rounded-t-lg" style={{height: '85%'}}></div>
<div className="flex-1 bg-gradient-to-t from-purple-500 to-purple-500/20 rounded-t-lg" style={{height: '70%'}}></div>
<div className="flex-1 bg-gradient-to-t from-blue-500 to-blue-500/20 rounded-t-lg" style={{height: '95%'}}></div>
<div className="flex-1 bg-gradient-to-t from-cyan-500 to-cyan-500/20 rounded-t-lg" style={{height: '100%'}}></div>
</div>
<div className="flex justify-between mt-2 text-xs text-slate-400">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>

<div className="bg-slate-800/50 rounded-xl p-4">
<h4 className="text-sm font-medium mb-4">Top Selling Items</h4>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-xs">🍗</div>
<span className="text-xs">Paneer Tikka</span>
</div>
<span className="text-xs text-slate-400">87</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-xs">🍛</div>
<span className="text-xs">Butter Chicken</span>
</div>
<span className="text-xs text-slate-400">72</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-xs">🍚</div>
<span className="text-xs">Biryani</span>
</div>
<span className="text-xs text-slate-400">65</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-xs">🥗</div>
<span className="text-xs">Dal Makhani</span>
</div>
<span className="text-xs text-slate-400">54</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
<div className="text-center mb-12 lg:mb-16">
<span className="inline-block px-4 py-2 rounded-full glass text-xs font-medium text-orange-400 mb-4">WHY CHOOSE US</span>
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">Built for Success</h2>
<p className="text-slate-400 max-w-2xl mx-auto">Join thousands of businesses that trust MYPOS Cloud for their daily operations.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="text-center p-6">
<div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center">
<i className="w-8 h-8 text-purple-400" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-semibold mb-2 tracking-tight">Lightning Fast</h3>
<p className="text-sm text-slate-400">Process orders in under 2 seconds with our optimized billing system.</p>
</div>
<div className="text-center p-6">
<div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center">
<i className="w-8 h-8 text-blue-400" data-lucide="cloud"></i>
</div>
<h3 className="text-lg font-semibold mb-2 tracking-tight">Cloud Powered</h3>
<p className="text-sm text-slate-400">Access your data anywhere, anytime with real-time cloud sync.</p>
</div>
<div className="text-center p-6">
<div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center">
<i className="w-8 h-8 text-cyan-400" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-semibold mb-2 tracking-tight">Bank-Grade Security</h3>
<p className="text-sm text-slate-400">Your data is protected with 256-bit encryption and daily backups.</p>
</div>
<div className="text-center p-6">
<div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center">
<i className="w-8 h-8 text-orange-400" data-lucide="headphones"></i>
</div>
<h3 className="text-lg font-semibold mb-2 tracking-tight">24/7 Support</h3>
<p className="text-sm text-slate-400">Round-the-clock support via chat, phone, and email.</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 relative overflow-hidden">
<div className="absolute inset-0">
<div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
<div className="text-center mb-12 lg:mb-16">
<span className="inline-block px-4 py-2 rounded-full glass text-xs font-medium text-pink-400 mb-4">TESTIMONIALS</span>
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">Loved by Restaurant Owners</h2>
<p className="text-slate-400 max-w-2xl mx-auto">See what our customers have to say about their experience with MYPOS Cloud.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="glass rounded-2xl p-6 hover-lift">
<div className="flex items-center gap-1 mb-4">
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
</div>
<p className="text-slate-300 text-sm mb-6">"MYPOS Cloud transformed our restaurant operations. Billing is now 3x faster, and the inventory tracking has saved us lakhs in wastage."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-semibold text-sm">RS</div>
<div>
<div className="font-medium text-sm">Rajesh Sharma</div>
<div className="text-xs text-slate-400">Owner, Spice Garden Restaurant</div>
</div>
</div>
</div>
<div className="glass rounded-2xl p-6 hover-lift">
<div className="flex items-center gap-1 mb-4">
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
</div>
<p className="text-slate-300 text-sm mb-6">"The KDS feature alone was worth the investment. Our kitchen efficiency improved by 40%, and customers love the faster service."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center font-semibold text-sm">PK</div>
<div>
<div className="font-medium text-sm">Priya Kapoor</div>
<div className="text-xs text-slate-400">Manager, The Coffee House</div>
</div>
</div>
</div>
<div className="glass rounded-2xl p-6 hover-lift md:col-span-2 lg:col-span-1">
<div className="flex items-center gap-1 mb-4">
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
</div>
<p className="text-slate-300 text-sm mb-6">"Running 5 outlets was a nightmare before MYPOS. Now I can monitor everything from one dashboard. Best decision ever!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center font-semibold text-sm">AM</div>
<div>
<div className="font-medium text-sm">Amit Mehta</div>
<div className="text-xs text-slate-400">Founder, Tandoor Express Chain</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
<div className="text-center mb-12 lg:mb-16">
<span className="inline-block px-4 py-2 rounded-full glass text-xs font-medium text-green-400 mb-4">PRICING</span>
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h2>
<p className="text-slate-400 max-w-2xl mx-auto">Choose the plan that fits your business. No hidden fees, cancel anytime.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">

<div className="glass rounded-2xl p-6 lg:p-8 hover-lift">
<div className="text-sm font-medium text-slate-400 mb-2">Basic</div>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl font-bold">₹999</span>
<span className="text-slate-400 text-sm">/month</span>
</div>
<p className="text-sm text-slate-400 mb-6">Perfect for small cafés and food stalls.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i> 1 Terminal
                            </li>
<li className="flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i> Basic Billing
                            </li>
<li className="flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i> Inventory
                            </li>
<li className="flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i> Email Support
                            </li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-700 text-sm font-medium hover:bg-slate-800 transition">Get Started</button>
</div>

<div className="glass rounded-2xl p-6 lg:p-8 relative border-2 border-purple-500/50 hover-lift">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-bg text-xs font-medium">Most Popular</div>
<div className="text-sm font-medium text-purple-400 mb-2">Standard</div>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl font-bold">₹2,499</span>
<span className="text-slate-400 text-sm">/month</span>
</div>
<p className="text-sm text-slate-400 mb-6">Ideal for growing restaurants.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i> 3 Terminals
                            </li>
<li className="flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i> Advanced Billing
                            </li>
<li className="flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i> KDS + Table Mgmt
                            </li>
<li className="flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i> CRM + Analytics
                            </li>
<li className="flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i> Priority Support
                            </li>
</ul>
<button className="w-full py-3 rounded-xl gradient-bg text-sm font-medium hover:opacity-90 transition">Get Started</button>
</div>

<div className="glass rounded-2xl p-6 lg:p-8 hover-lift">
<div className="text-sm font-medium text-slate-400 mb-2">Premium</div>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl font-bold">₹4,999</span>
<span className="text-slate-400 text-sm">/month</span>
</div>
<p className="text-sm text-slate-400 mb-6">For hotel chains and enterprises.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i> Unlimited Terminals
                            </li>
<li className="flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i> Multi-outlet Support
                            </li>
<li className="flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i> All Features
                            </li>
<li className="flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i> API Access
                            </li>
<li className="flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i> 24/7 Dedicated Support
                            </li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-700 text-sm font-medium hover:bg-slate-800 transition">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
<div className="glass rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-cyan-500/20"></div>
<div className="relative">
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">Ready to Transform Your Business?</h2>
<p className="text-slate-400 max-w-xl mx-auto mb-8">Join 1,200+ restaurants already using MYPOS Cloud. Start your free 14-day trial today.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-4 rounded-2xl gradient-bg text-base font-medium hover:opacity-90 transition">Start Free Trial</button>
<button className="px-8 py-4 rounded-2xl glass text-base font-medium hover:bg-white/10 transition">Schedule Demo</button>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page" id="page-features">
<section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
<div className="text-center mb-16">
<span className="inline-block px-4 py-2 rounded-full glass text-xs font-medium text-purple-400 mb-4">FEATURES</span>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Powerful Features for Modern Businesses</h1>
<p className="text-slate-400 max-w-2xl mx-auto">Everything you need to run a successful restaurant, hotel, or café in one integrated platform.</p>
</div>

<div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
<div className="order-2 lg:order-1">
<span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-medium mb-4">BILLING</span>
<h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">Lightning-Fast POS Billing</h2>
<p className="text-slate-400 mb-6">Process orders in seconds with our intuitive billing interface. Split bills, apply discounts, manage taxes, and accept all payment modes seamlessly.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-green-400" data-lucide="check"></i>
</div>
                                Multi-payment mode (UPI, Card, Cash, Wallet)
                            </li>
<li className="flex items-center gap-3 text-sm">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-green-400" data-lucide="check"></i>
</div>
                                Split bills and merge tables
                            </li>
<li className="flex items-center gap-3 text-sm">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-green-400" data-lucide="check"></i>
</div>
                                GST compliant invoicing
                            </li>
<li className="flex items-center gap-3 text-sm">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-green-400" data-lucide="check"></i>
</div>
                                Offline mode support
                            </li>
</ul>
</div>
<div className="order-1 lg:order-2">
<div className="glass rounded-2xl p-6 illustration-3d">
<div className="bg-slate-900 rounded-xl p-4">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium">Quick Billing</span>
<span className="text-xs text-slate-400">Table 12</span>
</div>
<div className="grid grid-cols-4 gap-2 mb-4">
<div className="p-2 bg-purple-500/20 rounded-lg text-center text-xs">Starters</div>
<div className="p-2 bg-slate-800 rounded-lg text-center text-xs">Main</div>
<div className="p-2 bg-slate-800 rounded-lg text-center text-xs">Drinks</div>
<div className="p-2 bg-slate-800 rounded-lg text-center text-xs">Dessert</div>
</div>
<div className="grid grid-cols-3 gap-2 mb-4">
<div className="p-3 bg-slate-800 rounded-lg text-center">
<div className="text-xl mb-1">🍗</div>
<div className="text-xs">Tikka</div>
<div className="text-xs text-green-400">₹190</div>
</div>
<div className="p-3 bg-slate-800 rounded-lg text-center">
<div className="text-xl mb-1">🥗</div>
<div className="text-xs">Salad</div>
<div className="text-xs text-green-400">₹120</div>
</div>
<div className="p-3 bg-slate-800 rounded-lg text-center">
<div className="text-xl mb-1">🍜</div>
<div className="text-xs">Soup</div>
<div className="text-xs text-green-400">₹80</div>
</div>
</div>
<div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg">
<span className="text-sm">Total: ₹1,240</span>
<button className="px-4 py-2 rounded-lg gradient-bg text-xs font-medium">Pay Now</button>
</div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
<div>
<div className="glass rounded-2xl p-6 illustration-3d">
<div className="bg-slate-900 rounded-xl p-4">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium">Floor Plan</span>
<span className="text-xs text-slate-400">Ground Floor</span>
</div>
<div className="grid grid-cols-4 gap-3">
<div className="aspect-square bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
<div className="text-center">
<div className="text-xs font-medium">T1</div>
<div className="text-xs text-green-400">Free</div>
</div>
</div>
<div className="aspect-square bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30">
<div className="text-center">
<div className="text-xs font-medium">T2</div>
<div className="text-xs text-orange-400">₹850</div>
</div>
</div>
<div className="aspect-square bg-red-500/20 rounded-lg flex items-center justify-center border border-red-500/30">
<div className="text-center">
<div className="text-xs font-medium">T3</div>
<div className="text-xs text-red-400">₹1.2K</div>
</div>
</div>
<div className="aspect-square bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
<div className="text-center">
<div className="text-xs font-medium">T4</div>
<div className="text-xs text-green-400">Free</div>
</div>
</div>
<div className="aspect-square bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30">
<div className="text-center">
<div className="text-xs font-medium">T5</div>
<div className="text-xs text-orange-400">₹420</div>
</div>
</div>
<div className="aspect-square bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
<div className="text-center">
<div className="text-xs font-medium">T6</div>
<div className="text-xs text-green-400">Free</div>
</div>
</div>
<div className="aspect-square bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
<div className="text-center">
<div className="text-xs font-medium">T7</div>
<div className="text-xs text-purple-400">Rsv</div>
</div>
</div>
<div className="aspect-square bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30">
<div className="text-center">
<div className="text-xs font-medium">T8</div>
<div className="text-xs text-orange-400">₹680</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div>
<span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">TABLE MANAGEMENT</span>
<h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">Visual Table Management</h2>
<p className="text-slate-400 mb-6">Get a bird's eye view of your entire floor with real-time table status, reservations, and quick order transfers.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-green-400" data-lucide="check"></i>
</div>
                                Drag &amp; drop floor plan designer
                            </li>
<li className="flex items-center gap-3 text-sm">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-green-400" data-lucide="check"></i>
</div>
                                Real-time occupancy tracking
                            </li>
<li className="flex items-center gap-3 text-sm">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-green-400" data-lucide="check"></i>
</div>
                                Reservation management
                            </li>
<li className="flex items-center gap-3 text-sm">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-green-400" data-lucide="check"></i>
</div>
                                Quick table transfer
                            </li>
</ul>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
<div className="order-2 lg:order-1">
<span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-medium mb-4">KDS</span>
<h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">Kitchen Display System</h2>
<p className="text-slate-400 mb-6">Streamline kitchen operations with digital order displays, priority marking, and real-time status updates.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-green-400" data-lucide="check"></i>
</div>
                                Real-time order queue
                            </li>
<li className="flex items-center gap-3 text-sm">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-green-400" data-lucide="check"></i>
</div>
                                Priority order marking
                            </li>
<li className="flex items-center gap-3 text-sm">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-green-400" data-lucide="check"></i>
</div>
                                Preparation time tracking
                            </li>
<li className="flex items-center gap-3 text-sm">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-green-400" data-lucide="check"></i>
</div>
                                Multi-station support
                            </li>
</ul>
</div>
<div className="order-1 lg:order-2">
<div className="glass rounded-2xl p-6 illustration-3d">
<div className="bg-slate-900 rounded-xl p-4">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium">Kitchen Orders</span>
<span className="text-xs text-green-400">● Live</span>
</div>
<div className="space-y-3">
<div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-red-400">🔥 RUSH - Table 5</span>
<span className="text-xs text-slate-400">8 min</span>
</div>
<div className="text-sm">2x Butter Chicken, 1x Naan</div>
</div>
<div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-orange-400">Table 12</span>
<span className="text-xs text-slate-400">5 min</span>
</div>
<div className="text-sm">1x Biryani, 2x Raita</div>
</div>
<div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-green-400">✓ Ready - Table 8</span>
<span className="text-xs text-slate-400">Done</span>
</div>
<div className="text-sm">3x Paneer Tikka</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
<div>
<div className="glass rounded-2xl p-6 illustration-3d">
<div className="bg-slate-900 rounded-xl p-4">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium">Inventory Status</span>
<button className="text-xs text-purple-400">+ Add Stock</button>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-2 bg-slate-800 rounded-lg">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-yellow-500/20 flex items-center justify-center text-sm">🍚</div>
<div>
<div className="text-sm">Rice</div>
<div className="text-xs text-slate-400">Basmati</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-green-400">120 kg</div>
<div className="text-xs text-slate-400">Good</div>
</div>
</div>
<div className="flex items-center justify-between p-2 bg-slate-800 rounded-lg">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-orange-500/20 flex items-center justify-center text-sm">🫒</div>
<div>
<div className="text-sm">Oil</div>
<div className="text-xs text-slate-400">Sunflower</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-orange-400">32 L</div>
<div className="text-xs text-orange-400">Low</div>
</div>
</div>
<div className="flex items-center justify-between p-2 bg-slate-800 rounded-lg">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center text-sm">🧅</div>
<div>
<div className="text-sm">Onion</div>
<div className="text-xs text-slate-400">Red</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-red-400">8 kg</div>
<div className="text-xs text-red-400">Critical</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div>
<span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium mb-4">INVENTORY</span>
<h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">Smart Inventory Management</h2>
<p className="text-slate-400 mb-6">Track stock in real-time with auto-deduction on every sale, low stock alerts, and supplier management.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-green-400" data-lucide="check"></i>
</div>
                                Auto stock deduction
                            </li>
<li className="flex items-center gap-3 text-sm">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-green-400" data-lucide="check"></i>
</div>
                                Low stock alerts
                            </li>
<li className="flex items-center gap-3 text-sm">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-green-400" data-lucide="check"></i>
</div>
                                Recipe costing
                            </li>
<li className="flex items-center gap-3 text-sm">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-green-400" data-lucide="check"></i>
</div>
                                Supplier management
                            </li>
</ul>
</div>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="glass rounded-2xl p-6 hover-lift">
<div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-pink-400" data-lucide="users"></i>
</div>
<h3 className="text-lg font-semibold mb-2 tracking-tight">CRM &amp; Loyalty</h3>
<p className="text-sm text-slate-400">Build customer relationships with order history, preferences, and reward programs.</p>
</div>
<div className="glass rounded-2xl p-6 hover-lift">
<div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-green-400" data-lucide="user-check"></i>
</div>
<h3 className="text-lg font-semibold mb-2 tracking-tight">Staff Management</h3>
<p className="text-sm text-slate-400">Manage shifts, track attendance, and monitor performance with ease.</p>
</div>
<div className="glass rounded-2xl p-6 hover-lift">
<div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-yellow-400" data-lucide="file-text"></i>
</div>
<h3 className="text-lg font-semibold mb-2 tracking-tight">Reports &amp; Analytics</h3>
<p className="text-sm text-slate-400">Comprehensive reports for sales, inventory, staff, and financial insights.</p>
</div>
<div className="glass rounded-2xl p-6 hover-lift">
<div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-purple-400" data-lucide="credit-card"></i>
</div>
<h3 className="text-lg font-semibold mb-2 tracking-tight">Payment Integration</h3>
<p className="text-sm text-slate-400">Accept UPI, cards, wallets, and cash with seamless reconciliation.</p>
</div>
<div className="glass rounded-2xl p-6 hover-lift">
<div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-cyan-400" data-lucide="smartphone"></i>
</div>
<h3 className="text-lg font-semibold mb-2 tracking-tight">Mobile App</h3>
<p className="text-sm text-slate-400">Monitor your business on-the-go with our powerful mobile application.</p>
</div>
<div className="glass rounded-2xl p-6 hover-lift">
<div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-orange-400" data-lucide="plug"></i>
</div>
<h3 className="text-lg font-semibold mb-2 tracking-tight">Integrations</h3>
<p className="text-sm text-slate-400">Connect with Zomato, Swiggy, accounting software, and more.</p>
</div>
</div>
</div>
</section>
</div>

<div className="page" id="page-pricing">
<section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
<div className="text-center mb-16">
<span className="inline-block px-4 py-2 rounded-full glass text-xs font-medium text-green-400 mb-4">PRICING</span>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Choose Your Perfect Plan</h1>
<p className="text-slate-400 max-w-2xl mx-auto">Flexible pricing for businesses of all sizes. No hidden fees, cancel anytime.</p>
</div>

<div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">

<div className="glass rounded-2xl p-6 lg:p-8 hover-lift">
<div className="text-lg font-semibold mb-2">Basic</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-bold">₹999</span>
<span className="text-slate-400">/month</span>
</div>
<p className="text-sm text-slate-400 mb-6">Perfect for small cafés and food stalls starting their digital journey.</p>
<button className="w-full py-3 rounded-xl border border-slate-700 text-sm font-medium hover:bg-slate-800 transition mb-8">Start Free Trial</button>
<div className="space-y-4">
<div className="text-xs font-medium text-slate-400 uppercase">What's included:</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> 1 Terminal</li>
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> Basic POS Billing</li>
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> Inventory Management</li>
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> Basic Reports</li>
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> Email Support</li>
<li className="flex items-center gap-3 text-sm text-slate-500"><i className="w-4 h-4 text-slate-600" data-lucide="x"></i> Table Management</li>
<li className="flex items-center gap-3 text-sm text-slate-500"><i className="w-4 h-4 text-slate-600" data-lucide="x"></i> KDS</li>
<li className="flex items-center gap-3 text-sm text-slate-500"><i className="w-4 h-4 text-slate-600" data-lucide="x"></i> CRM</li>
</ul>
</div>
</div>

<div className="glass rounded-2xl p-6 lg:p-8 relative border-2 border-purple-500/50 hover-lift">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-bg text-xs font-medium">Most Popular</div>
<div className="text-lg font-semibold text-purple-400 mb-2">Standard</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-bold">₹2,499</span>
<span className="text-slate-400">/month</span>
</div>
<p className="text-sm text-slate-400 mb-6">Ideal for growing restaurants with dine-in operations.</p>
<button className="w-full py-3 rounded-xl gradient-bg text-sm font-medium hover:opacity-90 transition mb-8">Start Free Trial</button>
<div className="space-y-4">
<div className="text-xs font-medium text-slate-400 uppercase">Everything in Basic, plus:</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> 3 Terminals</li>
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> Advanced Billing</li>
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> Table Management</li>
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> Kitchen Display (KDS)</li>
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> Customer CRM</li>
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> Advanced Analytics</li>
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> Priority Support</li>
<li className="flex items-center gap-3 text-sm text-slate-500"><i className="w-4 h-4 text-slate-600" data-lucide="x"></i> Multi-outlet</li>
</ul>
</div>
</div>

<div className="glass rounded-2xl p-6 lg:p-8 hover-lift">
<div className="text-lg font-semibold mb-2">Premium</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-bold">₹4,999</span>
<span className="text-slate-400">/month</span>
</div>
<p className="text-sm text-slate-400 mb-6">For hotel chains and multi-outlet enterprises.</p>
<button className="w-full py-3 rounded-xl border border-slate-700 text-sm font-medium hover:bg-slate-800 transition mb-8">Contact Sales</button>
<div className="space-y-4">
<div className="text-xs font-medium text-slate-400 uppercase">Everything in Standard, plus:</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> Unlimited Terminals</li>
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> Multi-outlet Support</li>
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> Central Dashboard</li>
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> API Access</li>
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> Custom Integrations</li>
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> Dedicated Account Manager</li>
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> 24/7 Phone Support</li>
<li className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-green-400" data-lucide="check"></i> On-site Training</li>
</ul>
</div>
</div>
</div>

<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-bold text-center mb-8 tracking-tight">Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="glass rounded-xl p-6">
<button className="flex items-center justify-between w-full text-left" onclick="toggleFaq(this)">
<span className="font-medium">Is there a free trial?</span>
<i className="w-5 h-5 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="hidden mt-4 text-sm text-slate-400">Yes! All plans come with a 14-day free trial. No credit card required. You can explore all features before making a decision.</div>
</div>
<div className="glass rounded-xl p-6">
<button className="flex items-center justify-between w-full text-left" onclick="toggleFaq(this)">
<span className="font-medium">Can I upgrade or downgrade my plan?</span>
<i className="w-5 h-5 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="hidden mt-4 text-sm text-slate-400">Absolutely! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle with prorated adjustments.</div>
</div>
<div className="glass rounded-xl p-6">
<button className="flex items-center justify-between w-full text-left" onclick="toggleFaq(this)">
<span className="font-medium">What payment methods do you accept?</span>
<i className="w-5 h-5 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="hidden mt-4 text-sm text-slate-400">We accept all major credit/debit cards, UPI, net banking, and bank transfers. For annual plans, we also offer cheque payments.</div>
</div>
<div className="glass rounded-xl p-6">
<button className="flex items-center justify-between w-full text-left" onclick="toggleFaq(this)">
<span className="font-medium">Is my data secure?</span>
<i className="w-5 h-5 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="hidden mt-4 text-sm text-slate-400">Your data is protected with bank-grade 256-bit encryption. We perform daily backups and comply with all data protection regulations. Your data is yours, and we never share it with third parties.</div>
</div>
<div className="glass rounded-xl p-6">
<button className="flex items-center justify-between w-full text-left" onclick="toggleFaq(this)">
<span className="font-medium">Do you offer refunds?</span>
<i className="w-5 h-5 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="hidden mt-4 text-sm text-slate-400">Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days, we'll provide a full refund, no questions asked.</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page" id="page-about">
<section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

<div className="text-center mb-16">
<span className="inline-block px-4 py-2 rounded-full glass text-xs font-medium text-purple-400 mb-4">ABOUT US</span>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Our Story</h1>
<p className="text-slate-400 max-w-2xl mx-auto">Building the future of restaurant technology, one kitchen at a time.</p>
</div>

<div className="glass rounded-2xl p-8 lg:p-12 mb-16">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-2xl font-bold mb-4 tracking-tight">How It All Started</h2>
<p className="text-slate-400 mb-4">MYPOS Cloud was born in 2019 when our founders, former restaurant owners themselves, faced the daily struggles of managing a busy kitchen with outdated systems.</p>
<p className="text-slate-400 mb-4">After losing thousands in inventory wastage and spending hours on manual billing, they decided to build the solution they wished they had – a modern, cloud-based POS system designed specifically for the Indian food and hospitality industry.</p>
<p className="text-slate-400">Today, MYPOS Cloud powers over 1,200 restaurants, cafés, and hotels across India, processing millions of transactions every month.</p>
</div>
<div className="glass rounded-xl p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10">
<div className="grid grid-cols-2 gap-6 text-center">
<div>
<div className="text-3xl font-bold gradient-text mb-2">1,200+</div>
<div className="text-sm text-slate-400">Active Businesses</div>
</div>
<div>
<div className="text-3xl font-bold gradient-text mb-2">₹50Cr+</div>
<div className="text-sm text-slate-400">Monthly Transactions</div>
</div>
<div>
<div className="text-3xl font-bold gradient-text mb-2">15+</div>
<div className="text-sm text-slate-400">Cities</div>
</div>
<div>
<div className="text-3xl font-bold gradient-text mb-2">50+</div>
<div className="text-sm text-slate-400">Team Members</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6 mb-16">
<div className="glass rounded-2xl p-8">
<div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-purple-400" data-lucide="target"></i>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Our Mission</h3>
<p className="text-slate-400">To empower every restaurant, café, and hotel in India with technology that simplifies operations, reduces wastage, and maximizes profitability.</p>
</div>
<div className="glass rounded-2xl p-8">
<div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-cyan-400" data-lucide="eye"></i>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Our Vision</h3>
<p className="text-slate-400">To become India's most trusted restaurant technology partner, serving 100,000+ businesses by 2030 with innovative, affordable solutions.</p>
</div>
</div>

<div className="mb-16">
<h2 className="text-2xl font-bold text-center mb-8 tracking-tight">Our Journey</h2>
<div className="relative">
<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500 hidden md:block"></div>
<div className="space-y-8">
<div className="relative flex flex-col md:flex-row items-center">
<div className="md:w-1/2 md:pr-12 md:text-right">
<div className="glass rounded-xl p-6">
<div className="text-sm font-medium text-purple-400 mb-2">2019</div>
<h4 className="font-semibold mb-2">Company Founded</h4>
<p className="text-sm text-slate-400">Started with 3 founders and a vision to revolutionize restaurant technology.</p>
</div>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full gradient-bg hidden md:block"></div>
</div>
<div className="relative flex flex-col md:flex-row items-center">
<div className="md:w-1/2 md:ml-auto md:pl-12">
<div className="glass rounded-xl p-6">
<div className="text-sm font-medium text-blue-400 mb-2">2020</div>
<h4 className="font-semibold mb-2">First 100 Customers</h4>
<p className="text-sm text-slate-400">Reached our first milestone despite the pandemic challenges.</p>
</div>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full gradient-bg hidden md:block"></div>
</div>
<div className="relative flex flex-col md:flex-row items-center">
<div className="md:w-1/2 md:pr-12 md:text-right">
<div className="glass rounded-xl p-6">
<div className="text-sm font-medium text-cyan-400 mb-2">2022</div>
<h4 className="font-semibold mb-2">Series A Funding</h4>
<p className="text-sm text-slate-400">Raised ₹25 Crore to expand operations and enhance product features.</p>
</div>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full gradient-bg hidden md:block"></div>
</div>
<div className="relative flex flex-col md:flex-row items-center">
<div className="md:w-1/2 md:ml-auto md:pl-12">
<div className="glass rounded-xl p-6">
<div className="text-sm font-medium text-green-400 mb-2">2024</div>
<h4 className="font-semibold mb-2">1,200+ Restaurants</h4>
<p className="text-sm text-slate-400">Serving businesses across 15+ cities with 99.9% uptime.</p>
</div>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full gradient-bg hidden md:block"></div>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-2xl font-bold text-center mb-8 tracking-tight">Meet Our Leadership</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="glass rounded-2xl p-6 text-center hover-lift">
<div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-2xl font-bold">AK</div>
<h4 className="font-semibold mb-1">Arun Kumar</h4>
<div className="text-sm text-purple-400 mb-2">CEO &amp; Co-founder</div>
<p className="text-xs text-slate-400">Former restaurateur with 15 years in hospitality industry.</p>
</div>
<div className="glass rounded-2xl p-6 text-center hover-lift">
<div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center text-2xl font-bold">NS</div>
<h4 className="font-semibold mb-1">Neha Sharma</h4>
<div className="text-sm text-cyan-400 mb-2">CTO &amp; Co-founder</div>
<p className="text-xs text-slate-400">Ex-Google engineer with expertise in cloud architecture.</p>
</div>
<div className="glass rounded-2xl p-6 text-center hover-lift">
<div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-2xl font-bold">RG</div>
<h4 className="font-semibold mb-1">Rahul Gupta</h4>
<div className="text-sm text-orange-400 mb-2">COO</div>
<p className="text-xs text-slate-400">Operations expert with experience scaling startups.</p>
</div>
<div className="glass rounded-2xl p-6 text-center hover-lift">
<div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-2xl font-bold">PM</div>
<h4 className="font-semibold mb-1">Priya Mehta</h4>
<div className="text-sm text-pink-400 mb-2">Head of Product</div>
<p className="text-xs text-slate-400">Product leader passionate about user experience.</p>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page" id="page-contact">
<section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
<div className="text-center mb-16">
<span className="inline-block px-4 py-2 rounded-full glass text-xs font-medium text-cyan-400 mb-4">CONTACT</span>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Get in Touch</h1>
<p className="text-slate-400 max-w-2xl mx-auto">Have questions? We'd love to hear from you. Our team is always ready to help.</p>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<div className="glass rounded-2xl p-6 lg:p-8">
<h2 className="text-xl font-semibold mb-6 tracking-tight">Send us a Message</h2>
<form className="space-y-6">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium mb-2">First Name</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm focus:border-purple-500 transition" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2">Last Name</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm focus:border-purple-500 transition" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium mb-2">Email</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm focus:border-purple-500 transition" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium mb-2">Phone</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm focus:border-purple-500 transition" placeholder="+91 98765 43210" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium mb-2">Restaurant Name</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm focus:border-purple-500 transition" placeholder="Your Restaurant" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2">Message</label>
<textarea className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm focus:border-purple-500 transition resize-none" placeholder="Tell us about your requirements..." rows="4"></textarea>
</div>
<button className="w-full py-4 rounded-xl gradient-bg text-sm font-medium hover:opacity-90 transition" type="submit">Send Message</button>
</form>
</div>

<div className="space-y-6">

<div className="glass rounded-2xl p-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6 text-purple-400" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="font-semibold mb-1">Office Address</h4>
<p className="text-sm text-slate-400">42, Tech Park Tower, 5th Floor<br/>Koramangala, Bangalore - 560034<br/>Karnataka, India</p>
</div>
</div>
</div>
<div className="glass rounded-2xl p-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6 text-cyan-400" data-lucide="phone"></i>
</div>
<div>
<h4 className="font-semibold mb-1">Phone</h4>
<p className="text-sm text-slate-400">Sales: +91 98765 43210<br/>Support: +91 98765 43211<br/>Toll Free: 1800-123-4567</p>
</div>
</div>
</div>
<div className="glass rounded-2xl p-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6 text-green-400" data-lucide="mail"></i>
</div>
<div>
<h4 className="font-semibold mb-1">Email</h4>
<p className="text-sm text-slate-400">Sales: sales@myposcloud.com<br/>Support: support@myposcloud.com<br/>Careers: hr@myposcloud.com</p>
</div>
</div>
</div>
<div className="glass rounded-2xl p-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6 text-orange-400" data-lucide="clock"></i>
</div>
<div>
<h4 className="font-semibold mb-1">Business Hours</h4>
<p className="text-sm text-slate-400">Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 4:00 PM<br/>Support: 24/7 Available</p>
</div>
</div>
</div>

<div className="glass rounded-2xl p-4 h-48 lg:h-64">
<div className="w-full h-full rounded-xl bg-slate-800 flex items-center justify-center">
<div className="text-center">
<i className="w-12 h-12 text-slate-600 mx-auto mb-2" data-lucide="map"></i>
<p className="text-sm text-slate-500">Interactive Map</p>
<p className="text-xs text-slate-600">Koramangala, Bangalore</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<button className="fixed bottom-6 right-6 w-14 h-14 rounded-full gradient-bg flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40">
<i className="w-6 h-6" data-lucide="message-circle"></i>
</button>
</div>

<div className="page" id="page-dashboard">
<section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
<div className="text-center mb-12">
<span className="inline-block px-4 py-2 rounded-full glass text-xs font-medium text-green-400 mb-4">DASHBOARD PREVIEW</span>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Powerful Analytics at Your Fingertips</h1>
<p className="text-slate-400 max-w-2xl mx-auto">Get complete visibility into your business with real-time dashboards and actionable insights.</p>
</div>

<div className="glass rounded-3xl p-4 lg:p-8">
<div className="bg-slate-900 rounded-2xl p-4 lg:p-6">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<div>
<h3 className="text-lg font-semibold">Business Dashboard</h3>
<p className="text-sm text-slate-400">Spice Garden Restaurant • Monday, 15 January 2025</p>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 text-xs font-medium">Today</button>
<button className="px-4 py-2 rounded-lg bg-slate-800 text-slate-400 text-xs font-medium">Week</button>
<button className="px-4 py-2 rounded-lg bg-slate-800 text-slate-400 text-xs font-medium">Month</button>
<button className="px-4 py-2 rounded-lg bg-slate-800 text-slate-400 text-xs font-medium">Year</button>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
<div className="bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl p-4 border border-purple-500/20">
<div className="flex items-center justify-between mb-2">
<i className="w-5 h-5 text-purple-400" data-lucide="indian-rupee"></i>
<span className="text-xs text-green-400">+18.2%</span>
</div>
<div className="text-2xl lg:text-3xl font-bold mb-1">₹28,400</div>
<div className="text-xs text-slate-400">Daily Sales</div>
</div>
<div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl p-4 border border-blue-500/20">
<div className="flex items-center justify-between mb-2">
<i className="w-5 h-5 text-blue-400" data-lucide="shopping-bag"></i>
<span className="text-xs text-green-400">+12.5%</span>
</div>
<div className="text-2xl lg:text-3xl font-bold mb-1">154</div>
<div className="text-xs text-slate-400">Total Orders</div>
</div>
<div className="bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl p-4 border border-cyan-500/20">
<div className="flex items-center justify-between mb-2">
<i className="w-5 h-5 text-cyan-400" data-lucide="users"></i>
<span className="text-xs text-green-400">+8.3%</span>
</div>
<div className="text-2xl lg:text-3xl font-bold mb-1">98</div>
<div className="text-xs text-slate-400">Customers</div>
</div>
<div className="bg-gradient-to-br from-orange-500/10 to-transparent rounded-xl p-4 border border-orange-500/20">
<div className="flex items-center justify-between mb-2">
<i className="w-5 h-5 text-orange-400" data-lucide="wallet"></i>
<span className="text-xs text-green-400">+5.1%</span>
</div>
<div className="text-2xl lg:text-3xl font-bold mb-1">₹184</div>
<div className="text-xs text-slate-400">Avg. Order Value</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-slate-800/50 rounded-xl p-4">
<div className="flex items-center justify-between mb-4">
<h4 className="text-sm font-medium">Sales Overview</h4>
<div className="flex items-center gap-4 text-xs">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-500"></span> This Week</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-600"></span> Last Week</span>
</div>
</div>
<div className="h-48 flex items-end justify-between gap-2">
<div className="flex-1 flex flex-col gap-1">
<div className="bg-slate-700 rounded-t-lg" style={{height: '40%'}}></div>
<div className="bg-gradient-to-t from-purple-500 to-purple-500/50 rounded-t-lg" style={{height: '65%'}}></div>
</div>
<div className="flex-1 flex flex-col gap-1">
<div className="bg-slate-700 rounded-t-lg" style={{height: '55%'}}></div>
<div className="bg-gradient-to-t from-purple-500 to-purple-500/50 rounded-t-lg" style={{height: '75%'}}></div>
</div>
<div className="flex-1 flex flex-col gap-1">
<div className="bg-slate-700 rounded-t-lg" style={{height: '35%'}}></div>
<div className="bg-gradient-to-t from-purple-500 to-purple-500/50 rounded-t-lg" style={{height: '50%'}}></div>
</div>
<div className="flex-1 flex flex-col gap-1">
<div className="bg-slate-700 rounded-t-lg" style={{height: '60%'}}></div>
<div className="bg-gradient-to-t from-purple-500 to-purple-500/50 rounded-t-lg" style={{height: '85%'}}></div>
</div>
<div className="flex-1 flex flex-col gap-1">
<div className="bg-slate-700 rounded-t-lg" style={{height: '70%'}}></div>
<div className="bg-gradient-to-t from-purple-500 to-purple-500/50 rounded-t-lg" style={{height: '70%'}}></div>
</div>
<div className="flex-1 flex flex-col gap-1">
<div className="bg-slate-700 rounded-t-lg" style={{height: '80%'}}></div>
<div className="bg-gradient-to-t from-blue-500 to-blue-500/50 rounded-t-lg" style={{height: '95%'}}></div>
</div>
<div className="flex-1 flex flex-col gap-1">
<div className="bg-slate-700 rounded-t-lg" style={{height: '65%'}}></div>
<div className="bg-gradient-to-t from-cyan-500 to-cyan-500/50 rounded-t-lg" style={{height: '100%'}}></div>
</div>
</div>
<div className="flex justify-between mt-3 text-xs text-slate-400">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>

<div className="bg-slate-800/50 rounded-xl p-4">
<h4 className="text-sm font-medium mb-4">Top Selling Items</h4>
<div className="space-y-4">
<div>
<div className="flex items-center justify-between mb-1">
<span className="text-sm">Paneer Tikka</span>
<span className="text-xs text-slate-400">87 orders</span>
</div>
<div className="h-2 rounded-full bg-slate-700">
<div className="h-full rounded-full gradient-bg" style={{width: '100%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-1">
<span className="text-sm">Butter Chicken</span>
<span className="text-xs text-slate-400">72 orders</span>
</div>
<div className="h-2 rounded-full bg-slate-700">
<div className="h-full rounded-full bg-blue-500" style={{width: '83%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-1">
<span className="text-sm">Hyderabadi Biryani</span>
<span className="text-xs text-slate-400">65 orders</span>
</div>
<div className="h-2 rounded-full bg-slate-700">
<div className="h-full rounded-full bg-cyan-500" style={{width: '75%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-1">
<span className="text-sm">Dal Makhani</span>
<span className="text-xs text-slate-400">54 orders</span>
</div>
<div className="h-2 rounded-full bg-slate-700">
<div className="h-full rounded-full bg-orange-500" style={{width: '62%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-1">
<span className="text-sm">Garlic Naan</span>
<span className="text-xs text-slate-400">48 orders</span>
</div>
<div className="h-2 rounded-full bg-slate-700">
<div className="h-full rounded-full bg-pink-500" style={{width: '55%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6 mt-6">

<div className="bg-slate-800/50 rounded-xl p-4">
<h4 className="text-sm font-medium mb-4">Recent Orders</h4>
<div className="space-y-3">
<div className="flex items-center justify-between py-2 border-b border-slate-700">
<div>
<div className="text-sm font-medium">#1247</div>
<div className="text-xs text-slate-400">Table 5</div>
</div>
<div className="text-right">
<div className="text-sm text-green-400">₹1,240</div>
<div className="text-xs text-green-400">Paid</div>
</div>
</div>
<div className="flex items-center justify-between py-2 border-b border-slate-700">
<div>
<div className="text-sm font-medium">#1246</div>
<div className="text-xs text-slate-400">Table 12</div>
</div>
<div className="text-right">
<div className="text-sm text-orange-400">₹860</div>
<div className="text-xs text-orange-400">Pending</div>
</div>
</div>
<div className="flex items-center justify-between py-2">
<div>
<div className="text-sm font-medium">#1245</div>
<div className="text-xs text-slate-400">Takeaway</div>
</div>
<div className="text-right">
<div className="text-sm text-green-400">₹540</div>
<div className="text-xs text-green-400">Paid</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/50 rounded-xl p-4">
<h4 className="text-sm font-medium mb-4">Payment Methods</h4>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-purple-400" data-lucide="smartphone"></i>
</div>
<span className="text-sm">UPI</span>
</div>
<span className="text-sm font-medium">45%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-blue-400" data-lucide="credit-card"></i>
</div>
<span className="text-sm">Card</span>
</div>
<span className="text-sm font-medium">30%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-green-400" data-lucide="banknote"></i>
</div>
<span className="text-sm">Cash</span>
</div>
<span className="text-sm font-medium">25%</span>
</div>
</div>
</div>

<div className="bg-slate-800/50 rounded-xl p-4">
<h4 className="text-sm font-medium mb-4">Staff Performance</h4>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-medium">RK</div>
<span className="text-sm">Ravi Kumar</span>
</div>
<span className="text-sm text-green-400">42 orders</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center text-xs font-medium">AS</div>
<span className="text-sm">Anita Singh</span>
</div>
<span className="text-sm text-green-400">38 orders</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-xs font-medium">VP</div>
<span className="text-sm">Vijay Patel</span>
</div>
<span className="text-sm text-green-400">35 orders</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page" id="page-blog">
<section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
<div className="text-center mb-16">
<span className="inline-block px-4 py-2 rounded-full glass text-xs font-medium text-pink-400 mb-4">BLOG</span>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Insights &amp; Resources</h1>
<p className="text-slate-400 max-w-2xl mx-auto">Tips, guides, and industry insights to help you grow your restaurant business.</p>
</div>

<div className="glass rounded-2xl p-6 lg:p-8 mb-12 hover-lift">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl h-64 flex items-center justify-center">
<i className="w-20 h-20 text-purple-400/50" data-lucide="newspaper"></i>
</div>
<div>
<div className="flex items-center gap-2 mb-4">
<span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-medium">Featured</span>
<span className="text-xs text-slate-400">January 10, 2025</span>
</div>
<h2 className="text-2xl font-bold mb-4 tracking-tight">10 Ways to Reduce Food Wastage in Your Restaurant</h2>
<p className="text-slate-400 mb-6">Learn proven strategies that helped our partner restaurants save up to ₹2 lakhs monthly by optimizing inventory and reducing wastage.</p>
<button className="px-6 py-3 rounded-xl gradient-bg text-sm font-medium hover:opacity-90 transition">Read More</button>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<article className="glass rounded-2xl overflow-hidden hover-lift">
<div className="bg-gradient-to-br from-cyan-500/20 to-green-500/20 h-48 flex items-center justify-center">
<i className="w-16 h-16 text-cyan-400/50" data-lucide="trending-up"></i>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs">Growth</span>
<span className="text-xs text-slate-400">Jan 8, 2025</span>
</div>
<h3 className="font-semibold mb-2 tracking-tight">How to Increase Your Restaurant's Revenue by 30%</h3>
<p className="text-sm text-slate-400 mb-4">Practical tips on menu engineering, upselling, and customer retention strategies.</p>
<a className="text-sm text-purple-400 hover:text-purple-300 transition" href="#">Read more →</a>
</div>
</article>
<article className="glass rounded-2xl overflow-hidden hover-lift">
<div className="bg-gradient-to-br from-orange-500/20 to-pink-500/20 h-48 flex items-center justify-center">
<i className="w-16 h-16 text-orange-400/50" data-lucide="users"></i>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-xs">CRM</span>
<span className="text-xs text-slate-400">Jan 5, 2025</span>
</div>
<h3 className="font-semibold mb-2 tracking-tight">Building Customer Loyalty in the Digital Age</h3>
<p className="text-sm text-slate-400 mb-4">How to use CRM and loyalty programs to turn first-time visitors into regulars.</p>
<a className="text-sm text-purple-400 hover:text-purple-300 transition" href="#">Read more →</a>
</div>
</article>
<article className="glass rounded-2xl overflow-hidden hover-lift">
<div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 h-48 flex items-center justify-center">
<i className="w-16 h-16 text-blue-400/50" data-lucide="bar-chart-3"></i>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs">Analytics</span>
<span className="text-xs text-slate-400">Jan 2, 2025</span>
</div>
<h3 className="font-semibold mb-2 tracking-tight">Understanding Your Restaurant Data</h3>
<p className="text-sm text-slate-400 mb-4">A beginner's guide to using analytics for better business decisions.</p>
<a className="text-sm text-purple-400 hover:text-purple-300 transition" href="#">Read more →</a>
</div>
</article>
<article className="glass rounded-2xl overflow-hidden hover-lift">
<div className="bg-gradient-to-br from-green-500/20 to-cyan-500/20 h-48 flex items-center justify-center">
<i className="w-16 h-16 text-green-400/50" data-lucide="package"></i>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs">Inventory</span>
<span className="text-xs text-slate-400">Dec 28, 2024</span>
</div>
<h3 className="font-semibold mb-2 tracking-tight">Mastering Inventory Management</h3>
<p className="text-sm text-slate-400 mb-4">Best practices for stock control and supplier relationships.</p>
<a className="text-sm text-purple-400 hover:text-purple-300 transition" href="#">Read more →</a>
</div>
</article>
<article className="glass rounded-2xl overflow-hidden hover-lift">
<div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 h-48 flex items-center justify-center">
<i className="w-16 h-16 text-pink-400/50" data-lucide="smartphone"></i>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-400 text-xs">Technology</span>
<span className="text-xs text-slate-400">Dec 22, 2024</span>
</div>
<h3 className="font-semibold mb-2 tracking-tight">Going Digital: A Restaurant's Guide</h3>
<p className="text-sm text-slate-400 mb-4">Step-by-step guide to digitizing your restaurant operations.</p>
<a className="text-sm text-purple-400 hover:text-purple-300 transition" href="#">Read more →</a>
</div>
</article>
<article className="glass rounded-2xl overflow-hidden hover-lift">
<div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 h-48 flex items-center justify-center">
<i className="w-16 h-16 text-yellow-400/50" data-lucide="chef-hat"></i>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 text-xs">Operations</span>
<span className="text-xs text-slate-400">Dec 18, 2024</span>
</div>
<h3 className="font-semibold mb-2 tracking-tight">Optimizing Kitchen Efficiency</h3>
<p className="text-sm text-slate-400 mb-4">How KDS systems can transform your kitchen operations.</p>
<a className="text-sm text-purple-400 hover:text-purple-300 transition" href="#">Read more →</a>
</div>
</article>
</div>

<div className="glass rounded-2xl p-8 lg:p-12 mt-16 text-center">
<h3 className="text-xl font-bold mb-2 tracking-tight">Subscribe to Our Newsletter</h3>
<p className="text-sm text-slate-400 mb-6">Get the latest tips and insights delivered to your inbox weekly.</p>
<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
<input className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm focus:border-purple-500 transition" placeholder="Enter your email" type="email"/>
<button className="px-6 py-3 rounded-xl gradient-bg text-sm font-medium hover:opacity-90 transition whitespace-nowrap">Subscribe</button>
</div>
</div>
</div>
</section>
</div>

<div className="page" id="page-download">
<section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
<div className="text-center mb-16">
<span className="inline-block px-4 py-2 rounded-full glass text-xs font-medium text-blue-400 mb-4">DOWNLOAD</span>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Get MYPOS Cloud App</h1>
<p className="text-slate-400 max-w-2xl mx-auto">Manage your restaurant on-the-go with our powerful mobile application.</p>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="relative">
<div className="glass rounded-3xl p-8 illustration-3d float-animation">
<div className="bg-slate-900 rounded-2xl p-4 max-w-xs mx-auto">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
<span className="text-xs font-bold">MP</span>
</div>
<span className="text-sm font-medium">MYPOS</span>
</div>
<i className="w-5 h-5 text-slate-400" data-lucide="bell"></i>
</div>
<div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl p-4 mb-4">
<div className="text-xs text-slate-400 mb-1">Today's Revenue</div>
<div className="text-2xl font-bold">₹28,450</div>
<div className="text-xs text-green-400">↑ 18% vs yesterday</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-slate-800 rounded-lg p-3 text-center">
<div className="text-lg font-bold">154</div>
<div className="text-xs text-slate-400">Orders</div>
</div>
<div className="bg-slate-800 rounded-lg p-3 text-center">
<div className="text-lg font-bold">98</div>
<div className="text-xs text-slate-400">Customers</div>
</div>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">Your Business in Your Pocket</h2>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-purple-400" data-lucide="bar-chart-3"></i>
</div>
<div>
<h4 className="font-medium mb-1">Real-Time Analytics</h4>
<p className="text-sm text-slate-400">Monitor sales, orders, and revenue from anywhere in real-time.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-cyan-400" data-lucide="bell"></i>
</div>
<div>
<h4 className="font-medium mb-1">Instant Notifications</h4>
<p className="text-sm text-slate-400">Get alerts for new orders, low stock, and important updates.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-green-400" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="font-medium mb-1">Secure Access</h4>
<p className="text-sm text-slate-400">Biometric login and encrypted data for maximum security.</p>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition">
<i className="w-8 h-8" data-lucide="smartphone"></i>
<div className="text-left">
<div className="text-xs text-slate-400">Download on the</div>
<div className="font-semibold">App Store</div>
</div>
</button>
<button className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition">
<i className="w-8 h-8" data-lucide="play"></i>
<div className="text-left">
<div className="text-xs text-slate-400">Get it on</div>
<div className="font-semibold">Google Play</div>
</div>
</button>
</div>
<div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
<span className="flex items-center gap-1">
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
                                4.8 Rating
                            </span>
<span>•</span>
<span>10K+ Downloads</span>
<span>•</span>
<span>Free</span>
</div>
</div>
</div>
</div>
</section>
</div>

<footer className="border-t border-slate-800 py-12 lg:py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
<span className="text-white font-bold">MP</span>
</div>
<span className="font-semibold text-lg">MYPOS Cloud</span>
</div>
<p className="text-sm text-slate-400 mb-4 max-w-xs">Modern POS solutions for restaurants, hotels, and cafés. Simplify operations, boost revenue.</p>
<div className="flex items-center gap-3">
<a className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition" href="#">
<i className="w-5 h-5" data-lucide="youtube"></i>
</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition" href="#" onclick="showPage('features')">Features</a></li>
<li><a className="hover:text-white transition" href="#" onclick="showPage('pricing')">Pricing</a></li>
<li><a className="hover:text-white transition" href="#" onclick="showPage('dashboard')">Dashboard</a></li>
<li><a className="hover:text-white transition" href="#">Integrations</a></li>
<li><a className="hover:text-white transition" href="#">API Docs</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition" href="#" onclick="showPage('about')">About Us</a></li>
<li><a className="hover:text-white transition" href="#" onclick="showPage('blog')">Blog</a></li>
<li><a className="hover:text-white transition" href="#">Careers</a></li>
<li><a className="hover:text-white transition" href="#">Partners</a></li>
<li><a className="hover:text-white transition" href="#" onclick="showPage('contact')">Contact</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-4">Support</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition" href="#">Help Center</a></li>
<li><a className="hover:text-white transition" href="#">Documentation</a></li>
<li><a className="hover:text-white transition" href="#">Status</a></li>
<li><a className="hover:text-white transition" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-400">© 2025 MYPOS Cloud. All rights reserved.</p>
<div className="flex items-center gap-4 text-sm text-slate-400">
<span>Made with ❤️ in India</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
