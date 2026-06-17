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
      

<div className="fixed bottom-0 inset-x-0 z-[300] bg-[#0b1f14] text-white p-4 hidden [&amp;.show]:flex items-center justify-between gap-4 border-t border-[#10b981]/20 shadow-[0_-8px_32px_rgba(0,0,0,0.2)] transition-transform duration-500 translate-y-full [&amp;.show]:translate-y-0" id="pwa-banner">
<div className="flex flex-col">
<div className="font-semibold text-sm">📲 Install BUYSELL App</div>
<div className="text-xs text-white/60 mt-0.5">Add to home screen for faster access</div>
</div>
<div className="flex gap-2 shrink-0">
<button className="inline-flex items-center justify-center px-3 py-1.5 bg-[#10b981] hover:bg-[#059669] text-white font-medium text-xs rounded-md transition-all duration-200" onclick="installPWA()">Install</button>
<button className="inline-flex items-center justify-center px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 rounded-md transition-all duration-200" onclick="dismissPWA()">Later</button>
</div>
</div>
<div className="hidden [&amp;.open]:block fixed inset-0 z-[45] bg-black/40 backdrop-blur-sm transition-opacity duration-300" id="mob-overlay" onclick="closeMobSidebar()"></div>

<div className="fixed inset-0 z-[100] bg-[#0b1f14] flex flex-col min-h-screen transition-opacity duration-500 ease-in-out" id="landing">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-r from-[#10b981]/10 to-transparent blur-3xl rounded-full"></div>
<div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-r from-[#f59e0b]/10 to-transparent blur-3xl rounded-full"></div>
</div>
<header className="flex z-10 border-white/5 border-b pt-5 pr-6 pb-5 pl-6 relative items-center justify-between">
<a className="flex items-center gap-3 no-underline" href="#">
<div className="font-['Syne'] font-semibold text-2xl tracking-tighter text-white">B</div>
<div className="flex flex-col">
<div className="font-['Syne'] font-semibold text-xl tracking-tighter text-white leading-none">BUY<span className="text-[#f59e0b]">SELL</span></div>
<div className="text-[10px] text-white/40 font-medium tracking-wide uppercase mt-0.5">.nigeria</div>
</div>
</a>
<button className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-lg border border-white/10 transition-all duration-200" onclick="showModal('auth-modal');toggleAuth('login')">
<iconify-icon icon="solar:login-2-linear" strokeWidth="1.5"></iconify-icon> Sign In
    </button>
</header>
<main className="flex-1 flex items-center justify-center relative z-10 p-6 overflow-y-auto">
<div className="max-w-5xl w-full">
<div className="text-center mb-10 opacity-0 animate-[fadeUp_0.6s_ease_both]">
<div className="inline-flex items-center gap-2 bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] px-4 py-1.5 rounded-full text-xs font-medium mb-5">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon> Nigeria's #1 Seller-First Marketplace
        </div>
<h1 className="font-['Syne'] font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-4">
          Buy, Sell &amp; Earn —<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#10b981]">The Nigerian Way</span>
</h1>
<p className="text-white/60 text-sm md:text-base max-w-lg mx-auto leading-relaxed">Authentic products, secure Paystack payments, dropshipping &amp; affiliate income. All in one elegantly designed platform.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="group relative bg-white/5 border border-white/10 hover:border-[#f59e0b]/40 rounded-2xl p-7 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)] opacity-0 animate-[fadeUp_0.5s_ease_both_0.1s]" onclick="enterSite('buyer')">
<span className="absolute top-5 right-5 bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs font-medium border border-white/10">Most Popular</span>
<div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 bg-gradient-to-br from-[#f59e0b] to-[#ea580c] shadow-lg shadow-[#ea580c]/20">
<iconify-icon className="text-white" icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="font-['Syne'] font-semibold text-2xl text-white mb-2 tracking-tight">I'm a Buyer</h2>
<p className="text-white/50 text-sm leading-relaxed mb-6">Discover authentic products from verified Nigerian sellers. Pay securely via Paystack or bank transfer.</p>
<div className="flex flex-wrap gap-3 mb-6">
<div className="flex items-center gap-1.5 text-xs text-white/60"><iconify-icon className="text-[#f59e0b]" icon="solar:shield-check-linear"></iconify-icon> Buyer Protection</div>
<div className="flex items-center gap-1.5 text-xs text-white/60"><iconify-icon className="text-[#f59e0b]" icon="solar:card-linear"></iconify-icon> Secure Payments</div>
<div className="flex items-center gap-1.5 text-xs text-white/60"><iconify-icon className="text-[#f59e0b]" icon="solar:chat-round-dots-linear"></iconify-icon> Fast Support</div>
</div>
<button className="inline-flex gap-2 hover:bg-[#f59e0b] hover:text-white transition-all duration-200 text-sm font-medium text-[#0b1f14] bg-white w-full rounded-lg pt-3 pr-5 pb-3 pl-5 gap-x-2 gap-y-2 items-center justify-center">Start Shopping <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
<div className="group relative bg-white/5 border border-white/10 hover:border-[#10b981]/40 rounded-2xl p-7 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)] opacity-0 animate-[fadeUp_0.5s_ease_both_0.2s]" onclick="enterSite('seller')">
<span className="absolute top-5 right-5 bg-[#10b981]/20 text-[#10b981] px-3 py-1 rounded-full text-xs font-medium border border-[#10b981]/30">1 Month FREE</span>
<div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 bg-gradient-to-br from-[#10b981] to-[#059669] shadow-lg shadow-[#10b981]/20">
<iconify-icon className="text-white" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="font-['Syne'] font-semibold text-2xl text-white mb-2 tracking-tight">I'm a Seller</h2>
<p className="text-white/50 text-sm leading-relaxed mb-6">Open your store FREE for 1 month! List products with videos, dropship globally, and earn affiliate income.</p>
<div className="flex flex-wrap gap-3 mb-6">
<div className="flex items-center gap-1.5 text-xs text-white/60"><iconify-icon className="text-[#10b981]" icon="solar:chart-square-linear"></iconify-icon> Analytics</div>
<div className="flex items-center gap-1.5 text-xs text-white/60"><iconify-icon className="text-[#10b981]" icon="solar:global-linear"></iconify-icon> Dropshipping</div>
<div className="flex items-center gap-1.5 text-xs text-white/60"><iconify-icon className="text-[#10b981]" icon="solar:star-linear"></iconify-icon> Reviews System</div>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#10b981] hover:bg-[#059669] text-white font-medium text-sm rounded-lg transition-all duration-200 shadow-[0_4px_14px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.4)]">Open Your Store <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
</main>
<footer className="relative z-10 px-6 py-4 border-t border-white/5 flex justify-center flex-wrap gap-5">
<div className="flex items-center gap-2 text-white/40 text-xs font-medium"><iconify-icon className="text-[#10b981]" icon="solar:lock-password-linear"></iconify-icon> SSL Secured</div>
<div className="flex items-center gap-2 text-white/40 text-xs font-medium"><iconify-icon className="text-[#10b981]" icon="solar:card-linear"></iconify-icon> Paystack Payments</div>
<div className="flex items-center gap-2 text-white/40 text-xs font-medium"><iconify-icon className="text-[#10b981]" icon="solar:chat-round-dots-linear"></iconify-icon> 24/7 Support</div>
<div className="flex items-center gap-2 text-white/40 text-xs font-medium"><iconify-icon className="text-[#10b981]" icon="solar:shield-check-linear"></iconify-icon> Buyer Protection</div>
</footer>
</div>

<div className="hidden bg-[#0b1f14] text-white/70 text-xs py-2 max-sm:hidden" id="topbar">
<div className="max-w-7xl mx-auto px-5 flex justify-between items-center gap-4">
<div className="flex items-center gap-2 text-white/60"><iconify-icon className="text-[#10b981] text-sm" icon="solar:bus-linear"></iconify-icon> <span>Free delivery on orders over ₦15,000</span></div>
<div className="flex items-center gap-5">
<a className="text-white/60 hover:text-[#f59e0b] transition-colors flex items-center gap-1.5 no-underline" href="#" onclick="showModal('help-modal')"><iconify-icon icon="solar:question-circle-linear"></iconify-icon> Help</a>
<a className="text-white/60 hover:text-[#f59e0b] transition-colors flex items-center gap-1.5 no-underline" href="https://wa.me/2349061484256" target="_blank"><iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon> WhatsApp</a>
</div>
</div>
</div>

<nav className="hidden sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#eaeaea]" id="main-nav">
<div className="max-w-7xl mx-auto px-4 lg:px-5 min-h-[60px] flex flex-wrap items-center gap-3 py-2">
<button aria-label="Menu" className="hidden max-lg:flex items-center justify-center w-9 h-9 border border-[#eaeaea] rounded-lg text-[#525252] hover:bg-[#fafafa]" id="mob-ham-btn" onclick="openMobSidebar()"><iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon></button>
<a className="flex items-center gap-2 no-underline shrink-0" href="#" onclick="handleNavBrand(event)">
<div className="font-['Syne'] font-semibold text-lg tracking-tighter text-[#171717]">B</div>
<div className="font-['Syne'] font-semibold text-base tracking-tighter text-[#171717] max-sm:hidden">BUY<span className="text-[#10b981]">SELL</span></div>
</a>
<div className="flex-1 w-full max-w-[540px] relative max-sm:order-5 max-sm:w-full max-sm:max-w-none">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a3a3a3] text-lg pointer-events-none" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-10 pr-12 py-2.5 bg-[#fafafa] border border-[#eaeaea] hover:border-[#d4d4d4] rounded-lg text-sm text-[#171717] placeholder-[#a3a3a3] transition-all focus:bg-white focus:border-[#10b981] focus:ring-[3px] focus:ring-[#10b981]/10 outline-none" id="search-input" onkeyup="if(event.key==='Enter')doSearch()" placeholder="Search products, brands…" type="text"/>
<button aria-label="Search" className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#10b981] hover:bg-[#059669] text-white p-1.5 rounded-md transition-colors" onclick="doSearch()"><iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
<div className="flex items-center gap-2.5 ml-auto shrink-0">
<div id="nav-auth-btns"><button className="inline-flex items-center justify-center px-4 py-2 bg-[#171717] hover:bg-[#262626] text-white font-medium text-sm rounded-lg transition-all shadow-[0_2px_8px_rgba(0,0,0,0.08)]" onclick="showModal('auth-modal');toggleAuth('login')">Sign In</button></div>
<div className="hidden flex items-center gap-2 sm:gap-3" id="nav-user-btns">
<div className="relative w-9 h-9 flex items-center justify-center border border-[#eaeaea] bg-[#fafafa] hover:bg-white hover:border-[#10b981] hover:text-[#10b981] rounded-lg text-[#525252] cursor-pointer transition-all" id="cart-btn-el" onclick="openCart()" title="Cart">
<iconify-icon className="text-lg" icon="solar:cart-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute -top-2 -right-2 bg-red-500 text-white min-w-[18px] h-[18px] flex items-center justify-center rounded-full text-[10px] font-bold border-2 border-white px-1" id="cart-count">0</span>
</div>
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center text-white text-xs font-medium cursor-pointer ring-2 ring-white shadow-sm transition-transform hover:scale-105" onclick="showProfile()" title="Profile"><span id="nav-avatar-inner">U</span></div>
<button className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 bg-white hover:bg-[#fafafa] text-[#171717] border border-[#eaeaea] font-medium text-sm rounded-lg transition-all shadow-sm" id="toggle-view-btn" onclick="toggleView()">
<iconify-icon className="text-base" icon="solar:shop-linear" id="toggle-view-icon" strokeWidth="1.5"></iconify-icon>
<span className="max-sm:hidden" id="toggle-view-text">Seller Dashboard</span>
</button>
</div>
</div>
</div>
</nav>

<div className="hidden min-h-screen pb-20" id="buyer-view">
<div className="max-w-7xl mx-auto px-4 lg:px-5 pt-4 pb-2">

<div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-white border border-[#eaeaea]" id="hero-carousel">
<div className="flex transition-transform duration-500 ease-in-out will-change-transform" id="carousel-track">
<div className="carousel-slide min-w-full relative">
<img alt="Electronics" className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover block" loading="lazy" src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1400&amp;h=500&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0b1f14]/80 via-[#0b1f14]/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-5 sm:p-8 max-w-[440px]">
<span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider bg-[#f59e0b] text-[#0b1f14] mb-3">⚡ HOT DEALS</span>
<h2 className="font-['Syne'] font-semibold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-2 leading-tight">Tech &amp; Electronics</h2>
<p className="text-white/80 text-sm mb-4 leading-relaxed max-xs:hidden">Up to 70% off on microcontrollers, sensors &amp; premium laptops.</p>
<button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#fafafa] text-[#171717] font-medium text-sm rounded-lg transition-all" onclick="filterCat('electronics')">Shop Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="carousel-slide min-w-full relative">
<img alt="Fashion" className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover block" loading="lazy" src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1400&amp;h=500&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0b1f14]/80 via-[#0b1f14]/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-5 sm:p-8 max-w-[440px]">
<span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider bg-[#10b981] text-white mb-3">🎨 NEW ARRIVALS</span>
<h2 className="font-['Syne'] font-semibold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-2 leading-tight">African Fashion</h2>
<p className="text-white/80 text-sm mb-4 leading-relaxed max-xs:hidden">Authentic Ankara, Aso-oke &amp; elegant contemporary styles.</p>
<button className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#10b981] hover:bg-[#059669] text-white font-medium text-sm rounded-lg transition-all" onclick="filterCat('fashion')">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="carousel-slide min-w-full relative">
<img alt="Deals" className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover block" loading="lazy" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&amp;h=500&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0b1f14]/80 via-[#0b1f14]/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-5 sm:p-8 max-w-[440px]">
<span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider bg-blue-500 text-white mb-3">💳 SECURE CHECKOUT</span>
<h2 className="font-['Syne'] font-semibold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-2 leading-tight">Pay with Paystack</h2>
<p className="text-white/80 text-sm mb-4 leading-relaxed max-xs:hidden">Cards, bank transfer, USSD &amp; more. Fast and 100% secure.</p>
<button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm rounded-lg transition-all" onclick="filterCat('all')">Browse All <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
<button aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-white text-[#171717] rounded-full flex items-center justify-center shadow-sm transition-transform hover:scale-105" onclick="slideCarousel(-1)"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-white text-[#171717] rounded-full flex items-center justify-center shadow-sm transition-transform hover:scale-105" onclick="slideCarousel(1)"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
<button className="carousel-dot w-1.5 h-1.5 rounded-full bg-white/40 transition-all duration-300 [&amp;.active]:bg-white [&amp;.active]:w-5 active" onclick="goSlide(0)"></button>
<button className="carousel-dot w-1.5 h-1.5 rounded-full bg-white/40 transition-all duration-300 [&amp;.active]:bg-white [&amp;.active]:w-5" onclick="goSlide(1)"></button>
<button className="carousel-dot w-1.5 h-1.5 rounded-full bg-white/40 transition-all duration-300 [&amp;.active]:bg-white [&amp;.active]:w-5" onclick="goSlide(2)"></button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 lg:px-5 py-2">
<div className="bg-white rounded-xl border border-[#eaeaea] p-2.5 overflow-x-auto [&amp;::-webkit-scrollbar]:hidden">
<div className="flex gap-2 min-w-max">
<button className="cat-chip inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-transparent font-medium text-xs text-[#525252] transition-all hover:bg-[#fafafa] [&amp;.active]:bg-[#10b981]/10 [&amp;.active]:text-[#10b981] [&amp;.active]:border-[#10b981]/20 active" data-cat="all" onclick="filterCat('all')"><iconify-icon icon="solar:widget-linear"></iconify-icon> All</button>
<button className="cat-chip inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-transparent font-medium text-xs text-[#525252] transition-all hover:bg-[#fafafa] [&amp;.active]:bg-[#10b981]/10 [&amp;.active]:text-[#10b981] [&amp;.active]:border-[#10b981]/20" data-cat="electronics" onclick="filterCat('electronics')"><iconify-icon icon="solar:cpu-linear"></iconify-icon> Electronics</button>
<button className="cat-chip inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-transparent font-medium text-xs text-[#525252] transition-all hover:bg-[#fafafa] [&amp;.active]:bg-[#10b981]/10 [&amp;.active]:text-[#10b981] [&amp;.active]:border-[#10b981]/20" data-cat="fashion" onclick="filterCat('fashion')"><iconify-icon icon="solar:hanger-linear"></iconify-icon> Fashion</button>
<button className="cat-chip inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-transparent font-medium text-xs text-[#525252] transition-all hover:bg-[#fafafa] [&amp;.active]:bg-[#10b981]/10 [&amp;.active]:text-[#10b981] [&amp;.active]:border-[#10b981]/20" data-cat="phones" onclick="filterCat('phones')"><iconify-icon icon="solar:smartphone-linear"></iconify-icon> Phones</button>
<button className="cat-chip inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-transparent font-medium text-xs text-[#525252] transition-all hover:bg-[#fafafa] [&amp;.active]:bg-[#10b981]/10 [&amp;.active]:text-[#10b981] [&amp;.active]:border-[#10b981]/20" data-cat="home" onclick="filterCat('home')"><iconify-icon icon="solar:home-linear"></iconify-icon> Home</button>
<button className="cat-chip inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-transparent font-medium text-xs text-[#525252] transition-all hover:bg-[#fafafa] [&amp;.active]:bg-[#10b981]/10 [&amp;.active]:text-[#10b981] [&amp;.active]:border-[#10b981]/20" data-cat="beauty" onclick="filterCat('beauty')"><iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Beauty</button>
<button className="cat-chip inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-transparent font-medium text-xs text-[#525252] transition-all hover:bg-[#fafafa] [&amp;.active]:bg-[#10b981]/10 [&amp;.active]:text-[#10b981] [&amp;.active]:border-[#10b981]/20" data-cat="sports" onclick="filterCat('sports')"><iconify-icon icon="solar:dumbell-linear"></iconify-icon> Sports</button>
<button className="cat-chip inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#0b1f14] to-[#1a3a26] font-medium text-xs text-white transition-all hover:opacity-90" data-cat="dropship" onclick="filterCat('dropship')"><iconify-icon icon="solar:global-linear"></iconify-icon> Dropship</button>
<button className="cat-chip inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#ea580c] to-[#ef4444] font-medium text-xs text-white transition-all hover:opacity-90" data-cat="trending" onclick="filterCat('trending')"><iconify-icon icon="solar:fire-linear"></iconify-icon> Trending</button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 lg:px-5 py-4">

<div className="flex border-b border-[#eaeaea] mb-5">
<button className="buyer-tab active px-5 py-3 text-sm font-medium text-[#737373] border-b-2 border-transparent transition-all hover:text-[#171717] [&amp;.active]:text-[#10b981] [&amp;.active]:border-[#10b981]" id="tab-shop" onclick="switchBuyerTab('shop')">🛍️ Shop</button>
<button className="buyer-tab px-5 py-3 text-sm font-medium text-[#737373] border-b-2 border-transparent transition-all hover:text-[#171717] [&amp;.active]:text-[#10b981] [&amp;.active]:border-[#10b981]" id="tab-orders" onclick="switchBuyerTab('orders')">📦 My Orders</button>
</div>

<div id="buyer-shop-tab">
<div className="bg-white rounded-xl border border-[#eaeaea] p-3 mb-5 flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-[#fafafa] border border-[#eaeaea] rounded-lg text-xs font-medium text-[#171717] transition-all" onclick="showModal('filters-modal')">
<iconify-icon icon="solar:tuning-square-linear"></iconify-icon> Filters
          <span className="bg-[#10b981] text-white w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ml-1 hidden" id="filter-count">0</span>
</button>
<select className="px-3 py-2 bg-white border border-[#eaeaea] hover:border-[#d4d4d4] rounded-lg text-xs font-medium text-[#171717] outline-none transition-all focus:border-[#10b981] focus:ring-[3px] focus:ring-[#10b981]/10" id="sort-select" onchange="sortProds()">
<option value="newest">Newest</option>
<option value="price-asc">Price: Low to High</option>
<option value="price-desc">Price: High to Low</option>
<option value="rating">Top Rated</option>
</select>
<div className="flex flex-wrap gap-2 w-full mt-1 empty:hidden" id="active-filters"></div>
</div>
<div className="flex justify-between items-end flex-wrap gap-2 mb-5">
<div>
<h2 className="font-['Syne'] font-semibold text-xl tracking-tight text-[#171717]" id="section-title-text">Latest Products</h2>
<div className="text-xs text-[#737373] mt-0.5">Live from BUYSELL • <span id="prod-count">0</span> items</div>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 lg:gap-4" id="prods-skeleton">
<div className="bg-[#eaeaea] rounded-xl h-64 animate-pulse"></div><div className="bg-[#eaeaea] rounded-xl h-64 animate-pulse"></div><div className="bg-[#eaeaea] rounded-xl h-64 animate-pulse max-sm:hidden"></div><div className="bg-[#eaeaea] rounded-xl h-64 animate-pulse max-md:hidden"></div><div className="bg-[#eaeaea] rounded-xl h-64 animate-pulse max-lg:hidden"></div>
</div>
<div className="hidden grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 lg:gap-4" id="prods-grid"></div>
<div className="hidden text-center py-16 px-4" id="prods-empty">
<iconify-icon className="text-5xl text-[#d4d4d4] mb-3" icon="solar:box-linear"></iconify-icon>
<p className="text-[#737373] text-sm mb-4">No products found. Try adjusting your filters.</p>
<button className="inline-flex items-center px-4 py-2 bg-[#171717] hover:bg-[#262626] text-white text-xs font-medium rounded-lg transition-all" onclick="clearFilters()">Clear Filters</button>
</div>
<div className="hidden text-center py-16 px-4" id="prods-error">
<iconify-icon className="text-5xl text-red-400 mb-3" icon="solar:danger-triangle-linear"></iconify-icon>
<p className="text-[#737373] text-sm mb-4">Could not load products.</p>
<button className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-[#eaeaea] text-[#171717] text-xs font-medium rounded-lg hover:bg-[#fafafa] transition-all" onclick="loadProducts()"><iconify-icon icon="solar:restart-linear"></iconify-icon> Retry</button>
</div>
</div>

<div className="hidden" id="buyer-orders-tab">
<div id="buyer-orders-skeleton"><div className="bg-[#eaeaea] rounded-xl h-28 animate-pulse mb-3"></div><div className="bg-[#eaeaea] rounded-xl h-28 animate-pulse"></div></div>
<div className="hidden flex flex-col gap-3" id="buyer-orders-list"></div>
<div className="hidden text-center py-16 px-4" id="buyer-orders-empty">
<iconify-icon className="text-5xl text-[#d4d4d4] mb-3" icon="solar:box-linear"></iconify-icon>
<p className="text-[#737373] text-sm mb-4">No orders yet.</p>
<button className="inline-flex items-center px-5 py-2.5 bg-[#10b981] hover:bg-[#059669] text-white text-sm font-medium rounded-lg transition-all shadow-sm" onclick="switchBuyerTab('shop')">Start Shopping</button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 lg:px-5 py-10">
<div className="bg-white rounded-2xl border border-[#eaeaea] shadow-[0_2px_16px_rgba(0,0,0,0.03)] p-6 md:p-10">
<h2 className="font-['Syne'] font-semibold text-xl tracking-tight text-center mb-8 text-[#171717]">Why Nigerians Trust BUYSELL</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
<div className="text-center p-4 rounded-xl border border-transparent hover:border-[#10b981]/20 hover:bg-[#10b981]/5 transition-all">
<div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center text-xl text-[#10b981] mx-auto mb-3"><iconify-icon icon="solar:shield-check-linear"></iconify-icon></div>
<h3 className="font-semibold text-sm mb-1 text-[#171717]">Buyer Protection</h3><p className="text-xs text-[#737373]">Full refund guarantee</p>
</div>
<div className="text-center p-4 rounded-xl border border-transparent hover:border-blue-500/20 hover:bg-blue-500/5 transition-all">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-xl text-blue-500 mx-auto mb-3"><iconify-icon icon="solar:card-linear"></iconify-icon></div>
<h3 className="font-semibold text-sm mb-1 text-[#171717]">Paystack Secure</h3><p className="text-xs text-[#737373]">Cards, bank, USSD</p>
</div>
<div className="text-center p-4 rounded-xl border border-transparent hover:border-[#f59e0b]/20 hover:bg-[#f59e0b]/5 transition-all">
<div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center text-xl text-[#f59e0b] mx-auto mb-3"><iconify-icon icon="solar:bus-linear"></iconify-icon></div>
<h3 className="font-semibold text-sm mb-1 text-[#171717]">Fast Delivery</h3><p className="text-xs text-[#737373]">Nationwide in 2–5 days</p>
</div>
<div className="text-center p-4 rounded-xl border border-transparent hover:border-purple-500/20 hover:bg-purple-500/5 transition-all">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-xl text-purple-500 mx-auto mb-3"><iconify-icon icon="solar:star-linear"></iconify-icon></div>
<h3 className="font-semibold text-sm mb-1 text-[#171717]">Verified Reviews</h3><p className="text-xs text-[#737373]">Real buyer ratings</p>
</div>
</div>
</div>
</div>
</div>

<div className="hidden min-h-screen bg-[#fafafa]" id="storefront-view">
<div className="bg-gradient-to-br from-[#0b1f14] to-[#1a3a26] pt-8 pb-10 px-4 lg:px-5">
<div className="max-w-7xl mx-auto">
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-md border border-white/10 transition-all mb-6" onclick="goBackFromStorefront()"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Marketplace</button>
<div className="flex items-center gap-5 flex-wrap">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center font-['Syne'] font-bold text-3xl text-white border-4 border-white/20 shadow-lg" id="sf-avatar">?</div>
<div>
<h1 className="font-['Syne'] font-semibold text-3xl text-white tracking-tight mb-2" id="sf-name">Store Name</h1>
<div className="flex items-center gap-3 flex-wrap mb-3">
<span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-[#10b981] to-[#059669] text-white text-[10px] font-semibold rounded-full uppercase tracking-wider"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Verified Seller</span>
<div className="text-[#f59e0b] text-sm tracking-widest" id="sf-stars">★★★★★</div>
<span className="text-xs text-white/50" id="sf-review-count">0 reviews</span>
</div>
<div className="flex gap-6 flex-wrap">
<div className="text-center"><div className="font-['Syne'] font-bold text-2xl text-white leading-none" id="sf-prod-count">0</div><div className="text-[10px] text-white/50 uppercase tracking-wide mt-1">Products</div></div>
<div className="text-center"><div className="font-['Syne'] font-bold text-2xl text-white leading-none" id="sf-sales-count">0+</div><div className="text-[10px] text-white/50 uppercase tracking-wide mt-1">Sales</div></div>
<div className="text-center"><div className="font-['Syne'] font-bold text-2xl text-white leading-none" id="sf-rating">5.0</div><div className="text-[10px] text-white/50 uppercase tracking-wide mt-1">Rating</div></div>
</div>
</div>
</div>
<p className="mt-5 text-white/70 text-sm max-w-lg leading-relaxed" id="sf-desc">Welcome to our store!</p>
<div className="flex gap-3 mt-5 flex-wrap">
<a className="inline-flex items-center gap-2 px-4 py-2 bg-[#10b981] hover:bg-[#059669] text-white font-medium text-xs rounded-lg transition-all shadow-sm no-underline" href="#" id="sf-wa-link" target="_blank"><iconify-icon className="text-sm" icon="solar:chat-round-dots-linear"></iconify-icon> WhatsApp Seller</a>
<button className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/10 font-medium text-xs rounded-lg transition-all" onclick="shareStore()"><iconify-icon className="text-sm" icon="solar:share-linear"></iconify-icon> Share Store</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 lg:px-5 py-8 pb-20">
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 lg:gap-4" id="sf-products-grid"></div>
<div className="hidden text-center py-16" id="sf-empty">
<iconify-icon className="text-5xl text-[#d4d4d4] mb-3" icon="solar:box-linear"></iconify-icon>
<p className="text-[#737373] text-sm">No products in this store yet.</p>
</div>
</div>
</div>

<div className="hidden min-h-screen bg-[#fafafa]" id="seller-dashboard">
<div className="flex min-h-screen">
<aside className="w-[240px] shrink-0 bg-[#0b1f14] min-h-[calc(100vh-60px)] sticky top-[60px] flex flex-col overflow-y-auto transition-transform duration-300 z-30 max-lg:fixed max-lg:inset-y-0 max-lg:left-0 max-lg:z-[46] max-lg:-translate-x-full [&amp;.open]:translate-x-0" id="dash-sidebar">
<div className="p-5 border-b border-white/5">
<div className="flex justify-between items-center">
<div className="font-['Syne'] font-semibold text-lg tracking-tighter text-white leading-none">BUY<span className="text-[#f59e0b]">SELL</span></div>
<button className="hidden max-lg:block text-white/50 hover:text-white" id="mob-sidebar-close" onclick="closeMobSidebar()"><iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon></button>
</div>
<div className="text-[10px] text-[#10b981] font-medium tracking-wide uppercase mt-1">Seller Dashboard</div>
</div>
<nav className="flex-1 p-3 flex flex-col gap-4">
<div>
<div className="text-[10px] font-semibold text-white/30 tracking-widest uppercase px-3 mb-1.5">Main</div>
<a className="dash-nav-item active flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 text-sm font-medium cursor-pointer transition-all hover:bg-white/5 hover:text-white [&amp;.active]:bg-gradient-to-r [&amp;.active]:from-[#10b981]/20 [&amp;.active]:to-transparent [&amp;.active]:text-[#10b981] [&amp;.active]:border-l-2 [&amp;.active]:border-[#10b981]" onclick="showDash('overview');closeMobSidebar()"><iconify-icon className="text-lg" icon="solar:pie-chart-2-linear"></iconify-icon> Overview</a>
<a className="dash-nav-item flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 text-sm font-medium cursor-pointer transition-all hover:bg-white/5 hover:text-white [&amp;.active]:bg-gradient-to-r [&amp;.active]:from-[#10b981]/20 [&amp;.active]:to-transparent [&amp;.active]:text-[#10b981] [&amp;.active]:border-l-2 [&amp;.active]:border-[#10b981]" onclick="showDash('products');closeMobSidebar()"><iconify-icon className="text-lg" icon="solar:box-linear"></iconify-icon> My Products</a>
<a className="dash-nav-item flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 text-sm font-medium cursor-pointer transition-all hover:bg-white/5 hover:text-white [&amp;.active]:bg-gradient-to-r [&amp;.active]:from-[#10b981]/20 [&amp;.active]:to-transparent [&amp;.active]:text-[#10b981] [&amp;.active]:border-l-2 [&amp;.active]:border-[#10b981]" onclick="showDash('add-product');closeMobSidebar()"><iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon> Add Product</a>
<a className="dash-nav-item flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 text-sm font-medium cursor-pointer transition-all hover:bg-white/5 hover:text-white [&amp;.active]:bg-gradient-to-r [&amp;.active]:from-[#10b981]/20 [&amp;.active]:to-transparent [&amp;.active]:text-[#10b981] [&amp;.active]:border-l-2 [&amp;.active]:border-[#10b981]" onclick="showDash('orders');closeMobSidebar()"><iconify-icon className="text-lg" icon="solar:bill-list-linear"></iconify-icon> Orders <span className="hidden ml-auto bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full" id="orders-badge">0</span></a>
</div>
<div>
<div className="text-[10px] font-semibold text-white/30 tracking-widest uppercase px-3 mb-1.5">Grow</div>
<a className="dash-nav-item flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 text-sm font-medium cursor-pointer transition-all hover:bg-white/5 hover:text-white [&amp;.active]:bg-gradient-to-r [&amp;.active]:from-[#10b981]/20 [&amp;.active]:to-transparent [&amp;.active]:text-[#10b981] [&amp;.active]:border-l-2 [&amp;.active]:border-[#10b981]" onclick="showDash('dropshipping');closeMobSidebar()"><iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon> Dropshipping <span className="ml-auto bg-gradient-to-r from-[#f59e0b] to-[#ea580c] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">HOT</span></a>
<a className="dash-nav-item flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 text-sm font-medium cursor-pointer transition-all hover:bg-white/5 hover:text-white [&amp;.active]:bg-gradient-to-r [&amp;.active]:from-[#10b981]/20 [&amp;.active]:to-transparent [&amp;.active]:text-[#10b981] [&amp;.active]:border-l-2 [&amp;.active]:border-[#10b981]" onclick="showDash('affiliate');closeMobSidebar()"><iconify-icon className="text-lg" icon="solar:link-linear"></iconify-icon> Affiliate</a>
<a className="dash-nav-item flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 text-sm font-medium cursor-pointer transition-all hover:bg-white/5 hover:text-white [&amp;.active]:bg-gradient-to-r [&amp;.active]:from-[#10b981]/20 [&amp;.active]:to-transparent [&amp;.active]:text-[#10b981] [&amp;.active]:border-l-2 [&amp;.active]:border-[#10b981]" onclick="showDash('reviews');closeMobSidebar()"><iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon> Reviews</a>
</div>
<div>
<div className="text-[10px] font-semibold text-white/30 tracking-widest uppercase px-3 mb-1.5">Finance</div>
<a className="dash-nav-item flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 text-sm font-medium cursor-pointer transition-all hover:bg-white/5 hover:text-white [&amp;.active]:bg-gradient-to-r [&amp;.active]:from-[#10b981]/20 [&amp;.active]:to-transparent [&amp;.active]:text-[#10b981] [&amp;.active]:border-l-2 [&amp;.active]:border-[#10b981]" onclick="showDash('withdrawals');closeMobSidebar()"><iconify-icon className="text-lg" icon="solar:transfer-horizontal-linear"></iconify-icon> Withdrawals</a>
<a className="dash-nav-item flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 text-sm font-medium cursor-pointer transition-all hover:bg-white/5 hover:text-white [&amp;.active]:bg-gradient-to-r [&amp;.active]:from-[#10b981]/20 [&amp;.active]:to-transparent [&amp;.active]:text-[#10b981] [&amp;.active]:border-l-2 [&amp;.active]:border-[#10b981]" onclick="showDash('commission');closeMobSidebar()"><iconify-icon className="text-lg" icon="solar:wad-of-money-linear"></iconify-icon> Commission</a>
</div>
<div>
<div className="text-[10px] font-semibold text-white/30 tracking-widest uppercase px-3 mb-1.5">Account</div>
<a className="dash-nav-item flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 text-sm font-medium cursor-pointer transition-all hover:bg-white/5 hover:text-white [&amp;.active]:bg-gradient-to-r [&amp;.active]:from-[#10b981]/20 [&amp;.active]:to-transparent [&amp;.active]:text-[#10b981] [&amp;.active]:border-l-2 [&amp;.active]:border-[#10b981]" onclick="showDash('settings');closeMobSidebar()"><iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon> Settings</a>
<a className="dash-nav-item hidden flex items-center gap-3 px-3 py-2 rounded-lg bg-purple-500/10 text-purple-400 text-sm font-medium cursor-pointer transition-all hover:bg-purple-500/20" id="admin-nav-item" onclick="showDash('admin');closeMobSidebar()"><iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon> Super Admin</a>
</div>
</nav>
<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-2 mb-3 bg-white/5 p-2 rounded-lg border border-white/5">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center text-white text-xs font-semibold shrink-0">U</div>
<div className="min-w-0 flex-1">
<div className="text-white text-xs font-semibold truncate" id="dash-user-name">Loading…</div>
<div className="text-white/40 text-[10px] truncate" id="dash-user-email">…</div>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-white/50 hover:text-red-400 hover:bg-red-400/10 text-xs font-medium rounded-lg transition-all" onclick="logoutUser()"><iconify-icon className="text-sm" icon="solar:logout-2-linear"></iconify-icon> Sign Out</button>
</div>
</aside>
<main className="flex-1 p-4 md:p-6 lg:p-8 min-w-0 max-lg:pb-24">

<div className="dash-section block [&amp;.active]:animate-[fadeIn_0.3s_ease]" id="ds-overview">
<h1 className="font-['Syne'] font-semibold text-2xl tracking-tight text-[#171717] mb-1">Dashboard Overview</h1>
<p className="text-sm text-[#737373] mb-6">Welcome back! Here's your store at a glance.</p>
<div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 lg:gap-4 mb-6">
<div className="bg-white rounded-xl p-4 border border-[#eaeaea] shadow-sm hover:border-[#10b981] transition-all">
<div className="flex justify-between items-start mb-3"><div className="w-9 h-9 rounded-lg bg-[#10b981]/10 text-[#10b981] flex items-center justify-center"><iconify-icon className="text-lg" icon="solar:box-linear"></iconify-icon></div><span className="text-[10px] font-bold text-[#10b981] bg-[#10b981]/10 px-1.5 py-0.5 rounded-md">+12%</span></div>
<div className="font-['Syne'] font-bold text-2xl text-[#171717] leading-none mb-1" id="st-products">0</div>
<div className="text-xs text-[#737373] font-medium">Active Products</div>
</div>
<div className="bg-white rounded-xl p-4 border border-[#eaeaea] shadow-sm hover:border-[#10b981] transition-all">
<div className="flex justify-between items-start mb-3"><div className="w-9 h-9 rounded-lg bg-[#f59e0b]/10 text-[#f59e0b] flex items-center justify-center"><iconify-icon className="text-lg" icon="solar:wad-of-money-linear"></iconify-icon></div><span className="text-[10px] font-bold text-[#10b981] bg-[#10b981]/10 px-1.5 py-0.5 rounded-md">+8%</span></div>
<div className="font-['Syne'] font-bold text-2xl text-[#171717] leading-none mb-1 truncate" id="st-revenue">₦0</div>
<div className="text-xs text-[#737373] font-medium">Total Revenue</div>
</div>
<div className="bg-white rounded-xl p-4 border border-[#eaeaea] shadow-sm hover:border-[#10b981] transition-all">
<div className="flex justify-between items-start mb-3"><div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center"><iconify-icon className="text-lg" icon="solar:bill-list-linear"></iconify-icon></div><span className="text-[10px] font-bold text-[#10b981] bg-[#10b981]/10 px-1.5 py-0.5 rounded-md">+5%</span></div>
<div className="font-['Syne'] font-bold text-2xl text-[#171717] leading-none mb-1" id="st-orders">0</div>
<div className="text-xs text-[#737373] font-medium">Total Orders</div>
</div>
<div className="bg-white rounded-xl p-4 border border-[#eaeaea] shadow-sm hover:border-[#10b981] transition-all">
<div className="flex justify-between items-start mb-3"><div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center"><iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon></div></div>
<div className="font-['Syne'] font-bold text-2xl text-[#171717] leading-none mb-1" id="st-rating">—</div>
<div className="text-xs text-[#737373] font-medium">Avg Rating</div>
</div>
<div className="bg-white rounded-xl p-4 border border-[#eaeaea] shadow-sm hover:border-[#10b981] transition-all">
<div className="flex justify-between items-start mb-3"><div className="w-9 h-9 rounded-lg bg-[#ea580c]/10 text-[#ea580c] flex items-center justify-center"><iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon></div></div>
<div className="font-['Syne'] font-bold text-lg text-[#171717] leading-none mb-1 mt-1 truncate" id="st-trial">Free Trial</div>
<div className="text-xs text-[#737373] font-medium" id="st-days">— days left</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-[#eaeaea] shadow-sm p-4 lg:p-6 mb-6">
<div className="flex justify-between items-center mb-5 flex-wrap gap-3">
<h3 className="font-semibold text-base text-[#171717]">Sales Overview</h3>
<select className="px-3 py-1.5 bg-white border border-[#eaeaea] rounded-md text-xs font-medium text-[#171717] outline-none transition-all focus:border-[#10b981]" id="chart-period" onchange="renderChart()">
<option value="7">Last 7 Days</option><option selected="" value="30">Last 30 Days</option><option value="90">Last 90 Days</option>
</select>
</div>
<div className="h-[250px] w-full"><canvas id="sales-chart"></canvas></div>
</div>
<div className="bg-white rounded-2xl border border-[#eaeaea] shadow-sm p-4 lg:p-6">
<h3 className="font-semibold text-base text-[#171717] mb-4">Quick Actions</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
<button className="flex items-center gap-3 p-3.5 bg-white border border-[#eaeaea] hover:border-[#10b981] hover:shadow-sm rounded-xl text-left transition-all group" onclick="showDash('add-product')">
<div className="w-10 h-10 rounded-lg bg-[#10b981]/10 text-[#10b981] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"><iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon></div>
<div><div className="font-semibold text-sm text-[#171717] mb-0.5">List Product</div><div className="text-[10px] text-[#737373] max-sm:hidden">Add items to store</div></div>
</button>
<button className="flex items-center gap-3 p-3.5 bg-white border border-[#eaeaea] hover:border-[#f59e0b] hover:shadow-sm rounded-xl text-left transition-all group" onclick="showDash('dropshipping')">
<div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 text-[#f59e0b] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"><iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon></div>
<div><div className="font-semibold text-sm text-[#171717] mb-0.5">Import Dropship</div><div className="text-[10px] text-[#737373] max-sm:hidden">From global suppliers</div></div>
</button>
<button className="flex items-center gap-3 p-3.5 bg-white border border-[#eaeaea] hover:border-purple-500 hover:shadow-sm rounded-xl text-left transition-all group" onclick="showDash('orders')">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"><iconify-icon className="text-xl" icon="solar:bill-list-linear"></iconify-icon></div>
<div><div className="font-semibold text-sm text-[#171717] mb-0.5">View Orders</div><div className="text-[10px] text-[#737373] max-sm:hidden">Process shipments</div></div>
</button>
<button className="flex items-center gap-3 p-3.5 bg-white border border-[#eaeaea] hover:border-blue-500 hover:shadow-sm rounded-xl text-left transition-all group" onclick="copyStoreLink()">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"><iconify-icon className="text-xl" icon="solar:share-linear"></iconify-icon></div>
<div><div className="font-semibold text-sm text-[#171717] mb-0.5">Share Store</div><div className="text-[10px] text-[#737373] max-sm:hidden">Copy storefront URL</div></div>
</button>
</div>
</div>
</div>

<div className="dash-section hidden [&amp;.active]:animate-[fadeIn_0.3s_ease]" id="ds-products">
<h1 className="font-['Syne'] font-semibold text-2xl tracking-tight text-[#171717] mb-1">My Products</h1>
<p className="text-sm text-[#737373] mb-6">Manage your listings &amp; inventory</p>
<div className="bg-white rounded-2xl border border-[#eaeaea] shadow-sm p-4 lg:p-6">
<div className="flex justify-between items-center mb-5 flex-wrap gap-3">
<select className="px-3 py-2 bg-white border border-[#eaeaea] rounded-lg text-xs font-medium text-[#171717] outline-none transition-all focus:border-[#10b981]" id="prod-filter" onchange="loadSellerProds()">
<option value="all">All Products</option><option value="active">Active</option><option value="sold-out">Sold Out</option>
</select>
<button className="inline-flex items-center gap-2 px-4 py-2 bg-[#171717] hover:bg-[#262626] text-white font-medium text-xs rounded-lg transition-all" onclick="showDash('add-product')"><iconify-icon icon="solar:add-circle-linear"></iconify-icon> Add Product</button>
</div>
<div id="sp-skeleton"><div className="bg-[#eaeaea] rounded-xl h-20 animate-pulse mb-2.5"></div><div className="bg-[#eaeaea] rounded-xl h-20 animate-pulse mb-2.5"></div><div className="bg-[#eaeaea] rounded-xl h-20 animate-pulse"></div></div>
<div className="hidden flex flex-col gap-2.5" id="sp-list"></div>
<div className="hidden text-center py-16" id="sp-empty">
<iconify-icon className="text-5xl text-[#d4d4d4] mb-3" icon="solar:box-linear"></iconify-icon>
<p className="text-[#737373] text-sm mb-4">No products listed yet.</p>
<button className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#10b981] hover:bg-[#059669] text-white font-medium text-sm rounded-lg transition-all" onclick="showDash('add-product')">Create First Product</button>
</div>
</div>
</div>

<div className="dash-section hidden [&amp;.active]:animate-[fadeIn_0.3s_ease]" id="ds-add-product">
<h1 className="font-['Syne'] font-semibold text-2xl tracking-tight text-[#171717] mb-1">Add New Product</h1>
<p className="text-sm text-[#737373] mb-6">Products with videos get 3× more sales! 🎬</p>
<div className="bg-white rounded-2xl border border-[#eaeaea] shadow-sm p-5 lg:p-8 max-w-3xl">
<form className="space-y-5" id="add-prod-form" onsubmit="submitProduct(event)">
<div><label className="block text-xs font-semibold text-[#525252] mb-1.5">Product Name <span className="text-red-500">*</span></label><input className="w-full px-3.5 py-2.5 border border-[#eaeaea] rounded-lg text-sm focus:border-[#10b981] focus:ring-[3px] focus:ring-[#10b981]/10 outline-none transition-all" id="p-name" placeholder="e.g., iPhone 14 Pro Max" required="" type="text"/></div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div><label className="block text-xs font-semibold text-[#525252] mb-1.5">Price (₦) <span className="text-red-500">*</span></label><input className="w-full px-3.5 py-2.5 border border-[#eaeaea] rounded-lg text-sm focus:border-[#10b981] focus:ring-[3px] focus:ring-[#10b981]/10 outline-none transition-all" id="p-price" inputmode="numeric" placeholder="500000" required="" type="number"/></div>
<div><label className="block text-xs font-semibold text-[#525252] mb-1.5">Original Price (optional)</label><input className="w-full px-3.5 py-2.5 border border-[#eaeaea] rounded-lg text-sm focus:border-[#10b981] focus:ring-[3px] focus:ring-[#10b981]/10 outline-none transition-all" id="p-orig-price" inputmode="numeric" placeholder="Crossed-out price" type="number"/></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div><label className="block text-xs font-semibold text-[#525252] mb-1.5">Stock Quantity <span className="text-red-500">*</span></label><input className="w-full px-3.5 py-2.5 border border-[#eaeaea] rounded-lg text-sm focus:border-[#10b981] focus:ring-[3px] focus:ring-[#10b981]/10 outline-none transition-all" id="p-stock" inputmode="numeric" min="0" placeholder="10" required="" type="number"/></div>
<div><label className="block text-xs font-semibold text-[#525252] mb-1.5">Low Stock Alert</label><input className="w-full px-3.5 py-2.5 border border-[#eaeaea] rounded-lg text-sm focus:border-[#10b981] focus:ring-[3px] focus:ring-[#10b981]/10 outline-none transition-all" id="p-low-stock" inputmode="numeric" min="1" placeholder="Alert at (e.g. 3)" type="number"/></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div><label className="block text-xs font-semibold text-[#525252] mb-1.5">Category <span className="text-red-500">*</span></label>
<select className="w-full px-3.5 py-2.5 border border-[#eaeaea] rounded-lg text-sm focus:border-[#10b981] focus:ring-[3px] focus:ring-[#10b981]/10 outline-none transition-all" id="p-category" required=""><option value="electronics">Electronics</option><option value="fashion">Fashion</option><option value="home">Home &amp; Kitchen</option><option value="phones">Phones &amp; Tablets</option><option value="beauty">Beauty &amp; Health</option><option value="sports">Sports</option><option value="dropship">Dropshipping</option></select>
</div>
<div><label className="block text-xs font-semibold text-[#525252] mb-1.5">Condition <span className="text-red-500">*</span></label>
<select className="w-full px-3.5 py-2.5 border border-[#eaeaea] rounded-lg text-sm focus:border-[#10b981] focus:ring-[3px] focus:ring-[#10b981]/10 outline-none transition-all" id="p-condition" required=""><option value="new">Brand New</option><option value="used-like-new">Used – Like New</option><option value="used-good">Used – Good</option></select>
</div>
</div>
<div><label className="block text-xs font-semibold text-[#525252] mb-1.5">Description <span className="text-red-500">*</span></label><textarea className="w-full px-3.5 py-2.5 border border-[#eaeaea] rounded-lg text-sm focus:border-[#10b981] focus:ring-[3px] focus:ring-[#10b981]/10 outline-none transition-all min-h-[100px] resize-y" id="p-desc" placeholder="Describe your product in detail…" required=""></textarea></div>
<div><label className="block text-xs font-semibold text-[#525252] mb-1.5">Location <span className="text-red-500">*</span></label><input className="w-full px-3.5 py-2.5 border border-[#eaeaea] rounded-lg text-sm focus:border-[#10b981] focus:ring-[3px] focus:ring-[#10b981]/10 outline-none transition-all" id="p-location" placeholder="e.g., Ikeja, Lagos" required="" type="text"/></div>
<div><label className="block text-xs font-semibold text-[#525252] mb-1.5">Product Image <span className="text-red-500">*</span></label><input accept="image/*" className="w-full px-3.5 py-2 border border-[#eaeaea] rounded-lg text-sm bg-[#fafafa] file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[#10b981]/10 file:text-[#10b981] hover:file:bg-[#10b981]/20 transition-all cursor-pointer" id="p-image" type="file"/></div>
<div><label className="block text-xs font-semibold text-[#525252] mb-1.5">Product Video <span className="font-normal text-[#a3a3a3]">(Recommended)</span></label><input accept="video/*" className="w-full px-3.5 py-2 border border-[#eaeaea] rounded-lg text-sm bg-[#fafafa] file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-purple-500/10 file:text-purple-500 hover:file:bg-purple-500/20 transition-all cursor-pointer" id="p-video" type="file"/><div className="text-[10px] text-[#737373] mt-1.5"><iconify-icon icon="solar:info-circle-linear"></iconify-icon> Max 50MB. Videos drastically increase conversion rates.</div></div>
<label className="flex items-center gap-2.5 cursor-pointer w-max"><input className="appearance-none w-4 h-4 border border-[#d4d4d4] rounded shadow-sm checked:bg-[#10b981] checked:border-[#10b981] relative after:content-[''] after:absolute after:hidden checked:after:block after:left-[4px] after:top-[1px] after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 transition-all" id="p-negotiable" type="checkbox"/><span className="text-sm text-[#171717]">Price is Negotiable</span></label>
<button className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#10b981] hover:bg-[#059669] text-white font-semibold text-sm rounded-lg transition-all shadow-[0_4px_14px_rgba(16,185,129,0.3)] disabled:opacity-70" id="pub-btn" type="submit"><span id="pub-btn-text">Publish Product</span><iconify-icon className="hidden animate-spin text-lg" icon="solar:refresh-linear" id="pub-spinner"></iconify-icon></button>
</form>
</div>
<div className="bg-white rounded-2xl border border-[#eaeaea] shadow-sm p-5 lg:p-8 max-w-3xl mt-6">
<h3 className="font-semibold text-base text-[#171717] mb-1 flex items-center gap-2"><iconify-icon className="text-[#10b981]" icon="solar:document-text-linear"></iconify-icon> Bulk Upload via CSV</h3>
<p className="text-xs text-[#737373] mb-4">Upload multiple products at once. <a className="text-[#10b981] font-medium hover:underline" href="#" onclick="downloadCsvTemplate()">Download template →</a></p>
<div className="border-2 border-dashed border-[#d4d4d4] rounded-xl p-8 text-center cursor-pointer transition-all hover:border-[#10b981] hover:bg-[#10b981]/5 [&amp;.has-file]:border-[#10b981] [&amp;.has-file]:bg-[#10b981]/5" id="csv-zone" onclick="document.getElementById('csv-file').click()">
<iconify-icon className="text-3xl text-[#a3a3a3] mb-2 block" icon="solar:cloud-upload-linear"></iconify-icon>
<div className="font-medium text-sm text-[#525252] mb-1 upload-label">Click to upload CSV file</div>
<div className="text-[10px] text-[#737373]">Max 500 rows</div>
</div>
<input accept=".csv" className="hidden" id="csv-file" onchange="handleCsvUpload(this)" type="file"/>
<div className="hidden mt-4" id="csv-preview"></div>
<button className="hidden w-full flex items-center justify-center gap-2 px-5 py-3 mt-4 bg-[#171717] hover:bg-[#262626] text-white font-medium text-sm rounded-lg transition-all" id="csv-import-btn" onclick="importCsvProducts()">
<iconify-icon icon="solar:upload-linear"></iconify-icon> Import Products
          </button>
</div>
</div>

<div className="dash-section hidden [&amp;.active]:animate-[fadeIn_0.3s_ease]" id="ds-orders">
<h1 className="font-['Syne'] font-semibold text-2xl tracking-tight text-[#171717] mb-1">Orders</h1>
<p className="text-sm text-[#737373] mb-6">Manage &amp; fulfil customer orders</p>
<div id="orders-skeleton"><div className="bg-[#eaeaea] rounded-xl h-32 animate-pulse mb-3"></div><div className="bg-[#eaeaea] rounded-xl h-32 animate-pulse mb-3"></div></div>
<div className="hidden flex flex-col gap-3" id="orders-list"></div>
<div className="hidden text-center py-16" id="orders-empty">
<iconify-icon className="text-5xl text-[#d4d4d4] mb-3" icon="solar:bill-list-linear"></iconify-icon>
<p className="text-[#737373] text-sm">No orders yet</p>
</div>
</div>

<div className="dash-section hidden [&amp;.active]:animate-[fadeIn_0.3s_ease]" id="ds-dropshipping">
<h1 className="font-['Syne'] font-semibold text-2xl tracking-tight text-[#171717] mb-1">Global Dropshipping</h1>
<p className="text-sm text-[#737373] mb-6">Import from AliExpress &amp; CJ Dropshipping – no inventory needed</p>
<div className="bg-white rounded-2xl border border-[#eaeaea] shadow-sm p-5 lg:p-6 mb-6">
<h3 className="font-semibold text-base text-[#171717] mb-4">Connect Suppliers</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="border border-[#eaeaea] hover:border-[#10b981] hover:shadow-sm rounded-xl p-5 cursor-pointer transition-all" onclick="connectSupplier('aliexpress')">
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon></div>
<div><div className="font-semibold text-sm">AliExpress</div><div className="text-[10px] text-[#737373]">Millions of products</div></div>
</div>
<button className="w-full py-2 bg-[#171717] hover:bg-[#262626] text-white text-xs font-medium rounded-md transition-all">Connect</button>
</div>
<div className="border border-[#eaeaea] hover:border-[#f59e0b] hover:shadow-sm rounded-xl p-5 cursor-pointer transition-all" onclick="connectSupplier('cj')">
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 text-[#f59e0b] flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:box-linear"></iconify-icon></div>
<div><div className="font-semibold text-sm">CJ Dropshipping</div><div className="text-[10px] text-[#737373]">Fast shipping &amp; QC</div></div>
</div>
<button className="w-full py-2 bg-[#171717] hover:bg-[#262626] text-white text-xs font-medium rounded-md transition-all">Connect</button>
</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-[#eaeaea] shadow-sm p-5 lg:p-6 mb-6">
<h3 className="font-semibold text-base text-[#171717] mb-4 flex items-center gap-2">🔥 Hot Items for Nigeria</h3>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
<div className="border border-[#eaeaea] hover:border-[#10b981] hover:-translate-y-1 rounded-xl p-3 cursor-pointer transition-all" onclick="importDropship('Mini Projector',45000,120000,'📽️')"></div></div></div></div></main></div></div><iframe allowtransparency="true" frameborder="0" id="RYO1q" name="paystack-checkout-background-RYO1q" style={{zIndex: '2147483647', background: 'rgba(0, 0, 0, 0.75)', border: '0px none transparent', overflow: 'hidden', margin: '0px', padding: '0px', WebkitTapHighlightColor: 'transparent', position: 'fixed', left: '0px', top: '0px', width: '100%', height: '100%', transition: 'opacity 0.3s', display: 'none'}}></iframe><iframe allowpaymentrequest="true" allowtransparency="true" frameborder="0" id="Weyof" name="paystack-checkout-Weyof" src="https://checkout.paystack.com/popup" style={{zIndex: '2147483647', background: 'transparent', border: '0px none transparent', overflow: 'hidden', margin: '0px', padding: '0px', WebkitTapHighlightColor: 'transparent', position: 'fixed', left: '0px', top: '0px', width: '100%', height: '100%', display: 'none'}}></iframe>
    </>
  );
}
