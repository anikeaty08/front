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

        // Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMenuBtn = document.getElementById('close-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
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
      

<header className="fixed top-0 w-full z-50 bg-[#0B1120]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-screen-2xl mx-auto px-6 py-5">
<nav className="flex items-center justify-between relative">

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium hover:text-[#9C6644] transition-colors" href="#">Shop All</a>
<a className="text-sm font-medium hover:text-[#9C6644] transition-colors" href="#">New Arrivals</a>
<a className="text-sm font-medium hover:text-[#9C6644] transition-colors" href="#">Collections</a>
</div>

<div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
<a className="text-2xl font-bold tracking-tighter uppercase text-white hover:opacity-90 transition-opacity" href="#">
                        POSTER STRUDEL
                    </a>
</div>

<div className="flex items-center space-x-4 md:space-x-6">
<button className="hover:text-[#9C6644] transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<button className="hover:text-[#9C6644] transition-colors relative">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 bg-[#9C6644] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
</button>

<button className="md:hidden group relative z-50" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>

<button className="hidden md:flex items-center gap-1 hover:text-[#9C6644] transition-colors">
<span className="text-sm font-medium">Menu</span>
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
</div>
</nav>
</div>

<div className="fixed inset-0 bg-[#0B1120] z-40 transform translate-x-full transition-transform duration-300 flex flex-col justify-center items-center space-y-8 md:hidden" id="mobile-menu">
<a className="text-2xl font-medium text-[#EAE5DC]" href="#">Shop Bundles</a>
<a className="text-2xl font-medium text-[#EAE5DC]" href="#">Best Sellers</a>
<a className="text-2xl font-medium text-[#EAE5DC]" href="#">About Us</a>
<a className="text-2xl font-medium text-[#EAE5DC]" href="#">Account</a>
<button className="absolute top-6 right-6 p-2" id="close-menu">
<i className="w-8 h-8" data-lucide="x"></i>
</button>
</div>
</header>

<main>
<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#9C6644] rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>
<div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#2E4057] rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>
</div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-[#9C6644]"></span>
<span className="text-xs font-medium tracking-wide uppercase text-[#EAE5DC]/80">The Dopamine Collection</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                        Curate Your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAE5DC] via-[#C9A688] to-[#9C6644]">Vibe Instantly.</span>
</h1>
<p className="text-lg md:text-xl text-[#EAE5DC]/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Say goodbye to empty walls. Shop thoughtfully curated art bundle sets designed to transform your space into a reflection of you.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#9C6644] hover:bg-[#855639] text-white rounded-full font-medium transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_-5px_rgba(156,102,68,0.5)]" href="#collection">
                            Shop Bundles
                        </a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-[#EAE5DC] rounded-full font-medium transition-all duration-300" href="#">
                            Take Style Quiz
                        </a>
</div>
<div className="flex items-center justify-center lg:justify-start gap-4 pt-6">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#0B1120]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#0B1120]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#0B1120]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="text-xs text-[#EAE5DC]/60">
<span className="block text-[#EAE5DC] font-semibold">12,000+</span>
                            Happy Decorators
                        </div>
</div>
</div>
<div className="relative">
<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 group">
<img alt="Gallery Wall Lifestyle" className="w-full h-[600px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center justify-between">
<div>
<p className="text-white font-medium">The 'Mid-Century' Set</p>
<p className="text-xs text-white/70">3 Prints • 18x24"</p>
</div>
<button className="w-10 h-10 bg-[#EAE5DC] text-[#0B1120] rounded-full flex items-center justify-center hover:bg-white transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="absolute -z-10 -top-6 -right-6 w-full h-full border-2 border-[#9C6644]/30 rounded-3xl"></div>
</div>
</div>
</section>

<section className="py-8 border-y border-white/5 bg-[#0B1120]/50 sticky top-[80px] z-30 backdrop-blur-lg" id="collection">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
<button className="px-5 py-2 rounded-full bg-[#EAE5DC] text-[#0B1120] text-sm font-semibold whitespace-nowrap">All Bundles</button>
<button className="px-5 py-2 rounded-full border border-white/10 hover:border-[#9C6644] text-[#EAE5DC] text-sm hover:text-[#9C6644] transition-colors whitespace-nowrap">Abstract</button>
<button className="px-5 py-2 rounded-full border border-white/10 hover:border-[#9C6644] text-[#EAE5DC] text-sm hover:text-[#9C6644] transition-colors whitespace-nowrap">Boho</button>
<button className="px-5 py-2 rounded-full border border-white/10 hover:border-[#9C6644] text-[#EAE5DC] text-sm hover:text-[#9C6644] transition-colors whitespace-nowrap">Retro</button>
<button className="px-5 py-2 rounded-full border border-white/10 hover:border-[#9C6644] text-[#EAE5DC] text-sm hover:text-[#9C6644] transition-colors whitespace-nowrap">Nature</button>
</div>
<div className="flex items-center gap-2 text-sm text-[#EAE5DC]/60">
<span>Sort by:</span>
<button className="flex items-center gap-1 text-[#EAE5DC] hover:text-[#9C6644]">
                        Trending <i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</section>

<section className="py-16 px-6 max-w-[1600px] mx-auto">
<div className="masonry-grid">

<div className="break-inside group">
<div className="relative overflow-hidden rounded-2xl bg-[#161F2E]">
<div className="absolute top-4 left-4 z-10 bg-[#EAE5DC] text-[#0B1120] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                            SET OF 3
                        </div>
<button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-[#9C6644] text-white backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<a href="#">
<img alt="Art Bundle" className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</a>
<div className="p-5">
<h3 className="text-lg font-medium text-white mb-1">Desert Solstice</h3>
<p className="text-sm text-[#EAE5DC]/60 mb-4 line-clamp-2">Warm terracottas and geometric sun patterns perfect for the living room.</p>
<div className="flex items-center justify-between">
<span className="text-lg font-semibold text-[#9C6644]">$89.00</span>
<button className="px-4 py-2 bg-[#EAE5DC] hover:bg-white text-[#0B1120] text-sm font-semibold rounded-lg transition-colors">
                                    Add to Cart
                                </button>
</div>
</div>
</div>
</div>

<div className="break-inside group">
<div className="relative overflow-hidden rounded-2xl bg-[#161F2E]">
<div className="absolute top-4 left-4 z-10 bg-[#EAE5DC] text-[#0B1120] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                            SET OF 3
                        </div>
<button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-[#9C6644] text-white backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<a href="#">
<img alt="Art Bundle" className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500" src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</a>
<div className="p-5">
<h3 className="text-lg font-medium text-white mb-1">Matcha Morning</h3>
<p className="text-sm text-[#EAE5DC]/60 mb-4">Calming greens and beige tones.</p>
<div className="flex items-center justify-between">
<span className="text-lg font-semibold text-[#9C6644]">$75.00</span>
<button className="px-4 py-2 bg-[#EAE5DC] hover:bg-white text-[#0B1120] text-sm font-semibold rounded-lg transition-colors">
                                    Add to Cart
                                </button>
</div>
</div>
</div>
</div>

<div className="break-inside group">
<div className="relative overflow-hidden rounded-2xl bg-[#161F2E]">
<div className="absolute top-4 left-4 z-10 bg-[#9C6644] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                            BEST SELLER
                        </div>
<button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-[#9C6644] text-white backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<a href="#">
<img alt="Art Bundle" className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500" src="https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</a>
<div className="p-5">
<h3 className="text-lg font-medium text-white mb-1">Electric Indigo</h3>
<p className="text-sm text-[#EAE5DC]/60 mb-4">Bold blues and electric shocks of orange.</p>
<div className="flex items-center justify-between">
<span className="text-lg font-semibold text-[#9C6644]">$95.00</span>
<button className="px-4 py-2 bg-[#EAE5DC] hover:bg-white text-[#0B1120] text-sm font-semibold rounded-lg transition-colors">
                                    Add to Cart
                                </button>
</div>
</div>
</div>
</div>

<div className="break-inside group">
<div className="relative overflow-hidden rounded-2xl bg-[#161F2E]">
<div className="absolute top-4 left-4 z-10 bg-[#EAE5DC] text-[#0B1120] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                            SET OF 3
                        </div>
<button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-[#9C6644] text-white backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<a href="#">
<img alt="Art Bundle" className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</a>
<div className="p-5">
<h3 className="text-lg font-medium text-white mb-1">Bauhaus Revival</h3>
<p className="text-sm text-[#EAE5DC]/60 mb-4">Geometric shapes for the modern thinker.</p>
<div className="flex items-center justify-between">
<span className="text-lg font-semibold text-[#9C6644]">$85.00</span>
<button className="px-4 py-2 bg-[#EAE5DC] hover:bg-white text-[#0B1120] text-sm font-semibold rounded-lg transition-colors">
                                    Add to Cart
                                </button>
</div>
</div>
</div>
</div>

<div className="break-inside group">
<div className="relative overflow-hidden rounded-2xl bg-[#161F2E]">
<div className="absolute top-4 left-4 z-10 bg-[#EAE5DC] text-[#0B1120] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                            SET OF 2
                        </div>
<button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-[#9C6644] text-white backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<a href="#">
<img alt="Art Bundle" className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500" src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</a>
<div className="p-5">
<h3 className="text-lg font-medium text-white mb-1">Abstract Fluidity</h3>
<p className="text-sm text-[#EAE5DC]/60 mb-4">Soft curves in neutral palettes.</p>
<div className="flex items-center justify-between">
<span className="text-lg font-semibold text-[#9C6644]">$65.00</span>
<button className="px-4 py-2 bg-[#EAE5DC] hover:bg-white text-[#0B1120] text-sm font-semibold rounded-lg transition-colors">
                                    Add to Cart
                                </button>
</div>
</div>
</div>
</div>

<div className="break-inside group">
<div className="relative overflow-hidden rounded-2xl bg-[#161F2E]">
<div className="absolute top-4 left-4 z-10 bg-[#EAE5DC] text-[#0B1120] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                            SET OF 3
                        </div>
<button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-[#9C6644] text-white backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<a href="#">
<img alt="Art Bundle" className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</a>
<div className="p-5">
<h3 className="text-lg font-medium text-white mb-1">Urban Jungle</h3>
<p className="text-sm text-[#EAE5DC]/60 mb-4">Botanical prints with a dark twist.</p>
<div className="flex items-center justify-between">
<span className="text-lg font-semibold text-[#9C6644]">$89.00</span>
<button className="px-4 py-2 bg-[#EAE5DC] hover:bg-white text-[#0B1120] text-sm font-semibold rounded-lg transition-colors">
                                    Add to Cart
                                </button>
</div>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="inline-flex items-center gap-2 px-8 py-3 border border-[#9C6644] text-[#9C6644] hover:bg-[#9C6644] hover:text-white rounded-full font-medium transition-all duration-300">
                    Load More Bundles
                    <i className="w-4 h-4" data-lucide="arrow-down"></i>
</button>
</div>
</section>

<section className="py-20 bg-[#080d19] border-t border-white/5 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#9C6644]/10 rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EAE5DC]/5 rounded-full blur-[100px]"></div>
<div className="max-w-xl mx-auto px-6 text-center relative z-10">
<i className="w-8 h-8 text-[#9C6644] mx-auto mb-6" data-lucide="sparkles"></i>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Get Your Daily Dose of Dopamine</h2>
<p className="text-[#EAE5DC]/60 mb-8">Join the inner circle for exclusive bundle drops, styling tips, and 10% off your first order.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#9C6644] transition-colors" placeholder="Enter your email" type="email"/>
<button className="px-8 py-3 bg-[#EAE5DC] hover:bg-white text-[#0B1120] font-semibold rounded-full transition-colors whitespace-nowrap" type="submit">
                        Subscribe
                    </button>
</form>
<p className="text-xs text-[#EAE5DC]/40 mt-4">We respect your inbox. Unsubscribe anytime.</p>
</div>
</section>

<footer className="bg-[#050911] border-t border-white/5 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div>
<h4 className="text-white font-semibold mb-6">Shop</h4>
<ul className="space-y-4 text-sm text-[#EAE5DC]/60">
<li><a className="hover:text-[#9C6644] transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-[#9C6644] transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-[#9C6644] transition-colors" href="#">Bundles</a></li>
<li><a className="hover:text-[#9C6644] transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">About</h4>
<ul className="space-y-4 text-sm text-[#EAE5DC]/60">
<li><a className="hover:text-[#9C6644] transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-[#9C6644] transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-[#9C6644] transition-colors" href="#">Artists</a></li>
<li><a className="hover:text-[#9C6644] transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Support</h4>
<ul className="space-y-4 text-sm text-[#EAE5DC]/60">
<li><a className="hover:text-[#9C6644] transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-[#9C6644] transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-[#9C6644] transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Social</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#9C6644] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#9C6644] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#9C6644] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="pin"></i>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
<p className="text-xs text-[#EAE5DC]/40">© 2024 Poster Strudel. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-xs text-[#EAE5DC]/40 hover:text-white" href="#">Privacy Policy</a>
<a className="text-xs text-[#EAE5DC]/40 hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
