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



    lucide.createIcons();

    // Mobile nav toggle
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    btn?.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    // Smooth reveal animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.animate-fade-in-up, .animate-slide-in-left, .animate-slide-in-right').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      observer.observe(el);
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
      

<div className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
<svg className="absolute -left-40 top-20 opacity-20" fill="none" height="600" width="600" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0C120 180 360 180 600 0" stroke="url(#grad1)" strokeWidth="2"></path>
<path d="M0 100C120 280 360 280 600 100" opacity="0.5" stroke="url(#grad1)" strokeWidth="1"></path>
<defs><lineargradient gradientunits="userSpaceOnUse" id="grad1" x1="0" x2="600" y1="0" y2="0"><stop stop-color="#ffffff" stop-opacity="0"></stop><stop offset="0.5" stop-color="#9eff37" stop-opacity=".3"></stop><stop offset="1" stop-color="#ffffff" stop-opacity="0"></stop></lineargradient></defs>
</svg>
<svg className="absolute right-0 bottom-10 opacity-15" fill="none" height="500" width="800" xmlns="http://www.w3.org/2000/svg">
<path d="M800 500C550 350 250 350 0 500" stroke="url(#grad2)" strokeWidth="2"></path>
<path d="M800 400C550 250 250 250 0 400" opacity="0.6" stroke="url(#grad2)" strokeWidth="1"></path>
<defs><lineargradient gradientunits="userSpaceOnUse" id="grad2" x1="800" x2="0" y1="500" y2="500"><stop stop-color="#ffffff" stop-opacity="0"></stop><stop offset="0.5" stop-color="#9eff37" stop-opacity=".2"></stop><stop offset="1" stop-color="#ffffff" stop-opacity="0"></stop></lineargradient></defs>
</svg>
</div>

<header className="relative z-10 backdrop-blur-sm border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between animate-fade-in-up" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="flex items-center space-x-3">
<div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-lime-400 to-lime-500 shadow-lg">
<svg className="lucide lucide-trending-up w-5 h-5 text-black" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-xl font-bold tracking-tight">FinanceFlow</span>
</div>
<nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
<a className="hover:text-lime-400 transition-colors duration-200 flex items-center space-x-1" href="#">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>About Us</span>
</a>
<a className="hover:text-lime-400 transition-colors duration-200 flex items-center space-x-1" href="#">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span>Features</span>
</a>
<a className="hover:text-lime-400 transition-colors duration-200 flex items-center space-x-1" href="#">
<svg className="lucide lucide-credit-card w-4 h-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<span>Pricing</span>
</a>
<a className="hover:text-lime-400 transition-colors duration-200 flex items-center space-x-1" href="#">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>Contact</span>
</a>
</nav>
<div className="flex items-center space-x-3">
<button className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors duration-200">
<svg className="lucide lucide-log-in w-4 h-4 mr-2" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
          Sign In
        </button>
<button className="inline-flex items-center px-6 py-2 rounded-lg bg-lime-400 text-black text-sm font-semibold hover:bg-lime-300 transition-all duration-200 shadow-lg hover:shadow-lime-400/25">
<svg className="lucide lucide-rocket w-4 h-4 mr-2" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
          Get Started
        </button>
<button className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div className="lg:hidden px-4 sm:px-6 pb-6 space-y-4 hidden border-t border-white/5 bg-black/20 backdrop-blur-sm" id="mobileMenu">
<a className="flex items-center space-x-3 py-3 text-sm font-medium hover:text-lime-400 transition-colors" href="#">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>About Us</span>
</a>
<a className="flex items-center space-x-3 py-3 text-sm font-medium hover:text-lime-400 transition-colors" href="#">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span>Features</span>
</a>
<a className="flex items-center space-x-3 py-3 text-sm font-medium hover:text-lime-400 transition-colors" href="#">
<svg className="lucide lucide-credit-card w-4 h-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<span>Pricing</span>
</a>
<a className="flex items-center space-x-3 py-3 text-sm font-medium hover:text-lime-400 transition-colors" href="#">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>Contact</span>
</a>
<div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
<button className="w-full flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
<svg className="lucide lucide-log-in w-4 h-4 mr-2" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
          Sign In
        </button>
<button className="w-full flex items-center justify-center px-6 py-2 rounded-lg bg-lime-400 text-black text-sm font-semibold hover:bg-lime-300 transition-colors">
<svg className="lucide lucide-rocket w-4 h-4 mr-2" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
          Get Started
        </button>
</div>
</div>
</header>

<section className="relative z-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-16">
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">

<div className="max-w-3xl animate-slide-in-left" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="inline-flex items-center px-4 py-2 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-sm font-medium mb-6">
<svg className="lucide lucide-sparkles w-4 h-4 mr-2" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
            New: AI-Powered Financial Analytics
          </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
<span className="block">Transform your</span>
<span className="block text-lime-400">financial future</span>
<span className="block">with AI precision</span>
</h1>
<p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
            Connect with elite financial technology experts who leverage cutting-edge AI to optimize your investments, automate savings, and accelerate wealth building.
          </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
<button className="inline-flex items-center px-8 py-4 rounded-xl bg-lime-400 text-black text-lg font-semibold hover:bg-lime-300 transition-all duration-200 shadow-xl hover:shadow-lime-400/25">
<svg className="lucide lucide-play w-5 h-5 mr-2" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
              Start Free Trial
            </button>
<button className="inline-flex items-center px-6 py-4 rounded-xl border border-white/20 text-lg font-medium hover:bg-white/10 transition-colors duration-200">
<svg className="lucide lucide-video w-5 h-5 mr-2" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
              Watch Demo
            </button>
</div>
</div>

<div className="hidden lg:flex flex-col items-center space-y-4 animate-slide-in-right animate-delay-400" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="h-12 w-12 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 flex items-center justify-center shadow-lg">
<svg className="lucide lucide-award w-6 h-6 text-black" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<div className="text-center">
<p className="text-xs uppercase tracking-wide text-gray-400">Winner 2024</p>
<p className="text-sm font-semibold text-lime-400">FinTech Innovation</p>
<p className="text-xs text-gray-500">Product Hunt</p>
</div>
</div>
</div>

<div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 relative bg-gradient-to-br from-[#111625] to-[#0d1016] rounded-2xl overflow-hidden border border-white/10 card-hover animate-fade-in-up animate-delay-600" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="absolute top-3 right-3 z-10">
<div className="flex items-center space-x-2 px-2 py-1 rounded-full bg-lime-400/20 border border-lime-400/30">
<div className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse"></div>
<span className="text-xs font-medium text-lime-400">Live</span>
</div>
</div>
<img alt="Financial Analytics Dashboard" className="w-full h-32 object-cover" src="https://images.unsplash.com/photo-1659710176040-636656401be3?w=1080&amp;q=80"/>
<div className="p-4 relative z-10">
<div className="flex items-center justify-between mb-3">
<div>
<p className="text-xs tracking-wider text-gray-400 uppercase">Portfolio Value</p>
<div className="flex items-center mt-1">
<span className="text-2xl font-bold mr-2">$2.4M</span>
<div className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-lime-400/20 text-lime-400">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-xs font-medium">+12.5%</span>
</div>
</div>
</div>
<div className="h-10 w-10 rounded-xl bg-lime-400/10 flex items-center justify-center">
<svg className="lucide lucide-bar-chart-3 w-5 h-5 text-lime-400" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-3 space-y-3">
<div className="flex items-center justify-between">
<span className="text-sm font-medium">Top Investments</span>
<span className="text-sm text-lime-400 font-medium">+8.2%</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-sm">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-lime-400 rounded-full"></div>
<span className="text-gray-300">Bitcoin</span>
</div>
<span className="font-medium">$45,230</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span className="text-gray-300">Ethereum</span>
</div>
<span className="font-medium">$28,910</span>
</div>
</div>
<div className="flex space-x-2 pt-1">
<button className="flex-1 py-1.5 text-xs font-medium rounded-lg bg-lime-400/10 text-lime-400 hover:bg-lime-400/20 transition-colors">
<svg className="lucide lucide-plus w-3 h-3 inline mr-1" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                  Invest
                </button>
<button className="flex-1 py-1.5 text-xs font-medium rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
<svg className="lucide lucide-eye w-3 h-3 inline mr-1" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  Analyze
                </button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 relative bg-gradient-to-br from-[#111625] to-[#0d1016] rounded-2xl overflow-hidden border border-white/10 card-hover animate-fade-in-up animate-delay-700" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="relative">
<img alt="Sarah Chen - Financial Technology Expert" className="w-full h-32 object-cover" src="https://images.unsplash.com/photo-1660063235722-8703b63f5516?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 flex items-center space-x-2 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
<div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
<span className="text-xs font-medium">Available</span>
</div>
</div>
<div className="p-4 relative">
<div className="flex items-start justify-between mb-3">
<div className="">
<h3 className="text-lg font-semibold mb-1">Sarah Chen</h3>
<p className="text-sm text-gray-400">FinTech Strategist</p>
<div className="flex items-center space-x-3 mt-1">
<div className="flex items-center space-x-1">
<svg className="lucide lucide-star w-3 h-3 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs font-medium">4.9</span>
</div>
<div className="flex items-center space-x-1">
<svg className="lucide lucide-briefcase w-3 h-3 text-gray-400" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="text-xs text-gray-400">250+ Projects</span>
</div>
</div>
</div>
<div className="h-8 w-8 rounded-full bg-lime-400/10 flex items-center justify-center">
<svg className="lucide lucide-user-check w-4 h-4 text-lime-400" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
</div>
<div className="space-y-3">
<div className="flex flex-wrap gap-2">
<span className="px-2 py-0.5 rounded-full bg-lime-400/10 text-lime-400 text-xs font-medium">AI Trading</span>
<span className="px-2 py-0.5 rounded-full bg-blue-400/10 text-blue-400 text-xs font-medium">DeFi</span>
</div>
<p className="text-xs text-gray-300 leading-relaxed">Specialized in algorithmic trading and blockchain solutions. Former Goldman Sachs analyst.</p>
<button className="w-full py-2 rounded-lg bg-lime-400 text-black font-semibold hover:bg-lime-300 transition-colors flex items-center justify-center">
<svg className="lucide lucide-calendar w-3 h-3 mr-1" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                Book Consultation
              </button>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-4 animate-fade-in-up animate-delay-800" style={{opacity: '1', transform: 'translateY(0px)'}}>

<div className="bg-gradient-to-br from-lime-400/10 to-lime-400/5 border border-lime-400/20 rounded-2xl p-4 card-hover">
<div className="flex items-center justify-between mb-3">
<div className="h-10 w-10 rounded-xl bg-lime-400/10 flex items-center justify-center">
<svg className="lucide lucide-brain w-5 h-5 text-lime-400" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
</div>
<div className="text-right">
<p className="text-xs uppercase tracking-wide text-lime-400 font-medium">AI Powered</p>
<p className="text-xl font-bold">99.7%</p>
<p className="text-xs text-gray-400">Accuracy Rate</p>
</div>
</div>
<h3 className="text-base font-semibold mb-2">Smart Portfolio Optimization</h3>
<p className="text-xs text-gray-300 leading-relaxed">Advanced ML algorithms analyze market patterns and optimize portfolios.</p>
</div>

<div className="bg-gradient-to-br from-blue-400/10 to-blue-400/5 border border-blue-400/20 rounded-2xl p-4 card-hover">
<div className="flex items-center justify-between mb-3">
<div className="h-10 w-10 rounded-xl bg-blue-400/10 flex items-center justify-center">
<svg className="lucide lucide-shield-check w-5 h-5 text-blue-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="text-right">
<p className="text-xs uppercase tracking-wide text-blue-400 font-medium">Bank Grade</p>
<p className="text-xl font-bold">256-bit</p>
<p className="text-xs text-gray-400">Encryption</p>
</div>
</div>
<h3 className="text-base font-semibold mb-2">Military-Grade Security</h3>
<p className="text-xs text-gray-300 leading-relaxed">Enterprise-level security protocols used by Fortune 500 companies.</p>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="bg-gradient-to-br from-[#111625] to-[#0d1016] border border-white/10 rounded-xl p-3 text-center">
<div className="h-6 w-6 rounded-lg bg-green-400/10 flex items-center justify-center mx-auto mb-2">
<svg className="lucide lucide-users w-3 h-3 text-green-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<p className="text-lg font-bold">50K+</p>
<p className="text-xs text-gray-400">Active Users</p>
</div>
<div className="bg-gradient-to-br from-[#111625] to-[#0d1016] border border-white/10 rounded-xl p-3 text-center">
<div className="h-6 w-6 rounded-lg bg-purple-400/10 flex items-center justify-center mx-auto mb-2">
<svg className="lucide lucide-dollar-sign w-3 h-3 text-purple-400" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<p className="text-lg font-bold">$5B+</p>
<p className="text-xs text-gray-400">Assets Managed</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm mt-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
<div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-6">
<div className="col-span-2 space-y-3">
<div className="flex items-center space-x-3">
<div className="h-8 w-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-lime-400 to-lime-500">
<svg className="lucide lucide-trending-up w-4 h-4 text-black" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-lg font-bold">FinanceFlow</span>
</div>
<p className="text-sm text-gray-400 leading-relaxed max-w-xs">Empowering financial growth through AI-driven insights and expert guidance.</p>
<div className="flex space-x-3">
<a className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-lime-400/20 transition-colors" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-lime-400/20 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-lime-400/20 transition-colors" href="#">
<svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold mb-3">Platform</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="hover:text-lime-400 transition-colors" href="#">Dashboard</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Analytics</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Portfolio</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-3">Resources</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="hover:text-lime-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-3">Support</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="hover:text-lime-400 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Status</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 text-sm text-gray-400">
<p>© 2024 FinanceFlow Technologies. All rights reserved.</p>
<div className="flex items-center space-x-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
