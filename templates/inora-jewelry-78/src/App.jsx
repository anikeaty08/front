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
      

<div className="bg-[#222222] text-white py-2 text-center text-xs font-medium tracking-wide">
<span className="opacity-90">Free shipping on orders over PKR 5,000</span>
</div>

<nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center md:hidden">
<button className="text-[#222222] hover:text-[#C4A484] transition-colors">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>

<div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto absolute left-0 right-0 md:relative pointer-events-none md:pointer-events-auto">
<a className="text-3xl font-serif font-semibold tracking-tighter text-[#222222] pointer-events-auto" href="#">
                        INORA
                    </a>
</div>

<div className="hidden md:flex space-x-10 items-center">
<a className="text-sm font-medium text-[#222222] hover:text-[#C4A484] transition-colors" href="#">New Arrivals</a>
<a className="text-sm font-medium text-[#222222] hover:text-[#C4A484] transition-colors" href="#">Necklaces</a>
<a className="text-sm font-medium text-[#222222] hover:text-[#C4A484] transition-colors" href="#">Earrings</a>
<a className="text-sm font-medium text-[#222222] hover:text-[#C4A484] transition-colors" href="#">Rings</a>
<a className="text-sm font-medium text-red-500 hover:text-red-600 transition-colors" href="#">Sale</a>
</div>

<div className="flex items-center space-x-6">
<button className="text-[#222222] hover:text-[#C4A484] transition-colors hidden sm:block">
<span className="iconify" data-height="22" data-icon="lucide:search" data-width="22"></span>
</button>
<button className="text-[#222222] hover:text-[#C4A484] transition-colors hidden sm:block">
<span className="iconify" data-height="22" data-icon="lucide:user" data-width="22"></span>
</button>
<div className="relative">
<button className="text-[#222222] hover:text-[#C4A484] transition-colors">
<span className="iconify" data-height="22" data-icon="lucide:shopping-bag" data-width="22"></span>
</button>
<span className="absolute -top-1.5 -right-1.5 bg-[#C4A484] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">2</span>
</div>
</div>
</div>
</div>
</nav>

<section className="relative bg-[#F9F7F5] overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="relative z-10 pb-8 bg-[#F9F7F5] sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 flex flex-col justify-center h-full min-h-[500px] px-4 sm:px-6 lg:px-8">
<main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
<div className="sm:text-center lg:text-left">
<span className="inline-block py-1 px-3 rounded-full bg-[#F7D1D1] bg-opacity-30 text-[#C4A484] text-xs font-semibold tracking-wider mb-4 uppercase">
                            Spring Collection 2024
                        </span>
<h1 className="text-4xl tracking-tight font-serif font-medium text-[#222222] sm:text-5xl md:text-6xl">
<span className="block xl:inline">Elegance that</span>
<span className="block text-[#C4A484] xl:inline">speaks volumes.</span>
</h1>
<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-light">
                            Discover premium craftsmanship at everyday prices. Elevate your style with our curated selection of gold-plated essentials.
                        </p>
<div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
<div className="rounded-none shadow-sm">
<a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium text-[#222222] bg-[#F7D1D1] hover:bg-opacity-80 md:py-4 md:text-base md:px-10 transition-all duration-200" href="#">
                                    Shop Collection
                                </a>
</div>
<div className="mt-3 sm:mt-0">
<a className="w-full flex items-center justify-center px-8 py-3 border border-[#222222] text-sm font-medium text-[#222222] bg-transparent hover:bg-gray-50 md:py-4 md:text-base md:px-10 transition-all duration-200" href="#">
                                    View Lookbook
                                </a>
</div>
</div>
</div>
</main>
</div>
</div>
<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
<img alt="Woman wearing elegant gold jewelry" className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full grayscale-[10%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<h2 className="text-2xl font-serif font-medium text-[#222222] mb-10 tracking-tight text-center md:text-left">Shop by Category</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4]" href="#">
<img alt="Necklaces" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-white text-xl font-serif font-medium tracking-wide">Necklaces</h3>
<div className="flex items-center text-white/90 text-sm mt-2 group-hover:translate-x-2 transition-transform">
<span>Explore</span>
<span className="iconify ml-1" data-height="16" data-icon="lucide:arrow-right" data-width="16"></span>
</div>
</div>
</a>

<a className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4]" href="#">
<img alt="Earrings" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-white text-xl font-serif font-medium tracking-wide">Earrings</h3>
<div className="flex items-center text-white/90 text-sm mt-2 group-hover:translate-x-2 transition-transform">
<span>Explore</span>
<span className="iconify ml-1" data-height="16" data-icon="lucide:arrow-right" data-width="16"></span>
</div>
</div>
</a>

<a className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4]" href="#">
<img alt="Rings" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-white text-xl font-serif font-medium tracking-wide">Rings &amp; Bracelets</h3>
<div className="flex items-center text-white/90 text-sm mt-2 group-hover:translate-x-2 transition-transform">
<span>Explore</span>
<span className="iconify ml-1" data-height="16" data-icon="lucide:arrow-right" data-width="16"></span>
</div>
</div>
</a>
</div>
</section>

<section className="bg-gray-50 py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-3xl font-serif font-medium text-[#222222] tracking-tight">Trending Now</h2>
<p className="mt-2 text-gray-500 font-light text-sm">Pieces loved by our community.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-[#222222] hover:text-[#C4A484] transition-colors" href="#">
                    View all <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group relative">
<div className="aspect-[1/1.2] w-full overflow-hidden bg-gray-200 relative">
<span className="absolute top-3 left-3 bg-white text-[#222222] text-[10px] font-bold px-2 py-1 z-10 tracking-widest uppercase">New</span>
<img alt="Gold Chain Layered" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>

<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full bg-white/90 backdrop-blur text-[#222222] text-xs font-medium py-3 hover:bg-[#222222] hover:text-white transition-colors">
                                Add to Cart
                            </button>
</div>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm text-[#222222]">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Dainty Layered Chain
                                </a>
</h3>
<div className="flex items-center mt-1 space-x-1 text-[#C4A484]">
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-height="12" data-icon="lucide:star-half" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="text-xs text-gray-400 font-light ml-1">(24)</span>
</div>
</div>
<p className="text-sm font-medium text-[#222222]">PKR 2,450</p>
</div>
</div>

<div className="group relative">
<div className="aspect-[1/1.2] w-full overflow-hidden bg-gray-200 relative">
<span className="absolute top-3 left-3 bg-[#F7D1D1] text-[#222222] text-[10px] font-bold px-2 py-1 z-10 tracking-widest uppercase">-20%</span>
<img alt="Pearl Drop Earrings" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full bg-white/90 backdrop-blur text-[#222222] text-xs font-medium py-3 hover:bg-[#222222] hover:text-white transition-colors">
                                Add to Cart
                            </button>
</div>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm text-[#222222]">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Pearl Drop Hoops
                                </a>
</h3>
<div className="flex items-center mt-1 space-x-1 text-[#C4A484]">
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="text-xs text-gray-400 font-light ml-1">(42)</span>
</div>
</div>
<div className="text-right">
<p className="text-xs text-gray-400 line-through">PKR 1,800</p>
<p className="text-sm font-medium text-[#C4A484]">PKR 1,440</p>
</div>
</div>
</div>

<div className="group relative">
<div className="aspect-[1/1.2] w-full overflow-hidden bg-gray-200 relative">
<img alt="Signet Ring" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full bg-white/90 backdrop-blur text-[#222222] text-xs font-medium py-3 hover:bg-[#222222] hover:text-white transition-colors">
                                Add to Cart
                            </button>
</div>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm text-[#222222]">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Classic Signet Ring
                                </a>
</h3>
<div className="flex items-center mt-1 space-x-1 text-[#C4A484]">
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12" style={{fill: 'currentColor'}}></span>
</div>
</div>
<p className="text-sm font-medium text-[#222222]">PKR 1,200</p>
</div>
</div>

<div className="group relative">
<div className="aspect-[1/1.2] w-full overflow-hidden bg-gray-200 relative">
<img alt="Gold Bracelet" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full bg-white/90 backdrop-blur text-[#222222] text-xs font-medium py-3 hover:bg-[#222222] hover:text-white transition-colors">
                                Add to Cart
                            </button>
</div>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm text-[#222222]">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Link Bracelet
                                </a>
</h3>
<div className="flex items-center mt-1 space-x-1 text-[#C4A484]">
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-height="12" data-icon="lucide:star-half" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="text-xs text-gray-400 font-light ml-1">(18)</span>
</div>
</div>
<p className="text-sm font-medium text-[#222222]">PKR 2,100</p>
</div>
</div>
</div>
<div className="mt-10 md:hidden flex justify-center">
<a className="inline-flex items-center text-sm font-medium text-[#222222] border border-[#222222] px-6 py-3 hover:bg-[#222222] hover:text-white transition-colors" href="#">
                    View all products
                </a>
</div>
</div>
</section>

<section className="border-t border-b border-gray-100 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
<div className="px-4 py-4 md:py-0 flex flex-col items-center">
<div className="p-3 bg-[#F9F7F5] rounded-full mb-4 text-[#C4A484]">
<span className="iconify" data-height="24" data-icon="lucide:truck" data-width="24"></span>
</div>
<h3 className="text-sm font-semibold text-[#222222] uppercase tracking-wide">Nationwide Delivery</h3>
<p className="mt-2 text-xs text-gray-500 max-w-[200px]">Fast &amp; reliable shipping across Pakistan within 3-5 days.</p>
</div>
<div className="px-4 py-4 md:py-0 flex flex-col items-center">
<div className="p-3 bg-[#F9F7F5] rounded-full mb-4 text-[#C4A484]">
<span className="iconify" data-height="24" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<h3 className="text-sm font-semibold text-[#222222] uppercase tracking-wide">Quality Guarantee</h3>
<p className="mt-2 text-xs text-gray-500 max-w-[200px]">Anti-tarnish technology ensuring long-lasting shine.</p>
</div>
<div className="px-4 py-4 md:py-0 flex flex-col items-center">
<div className="p-3 bg-[#F9F7F5] rounded-full mb-4 text-[#C4A484]">
<span className="iconify" data-height="24" data-icon="lucide:gift" data-width="24"></span>
</div>
<h3 className="text-sm font-semibold text-[#222222] uppercase tracking-wide">Premium Packaging</h3>
<p className="mt-2 text-xs text-gray-500 max-w-[200px]">Every order comes in our signature gift-ready box.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#F7D1D1] py-16 px-4 sm:px-6 lg:px-8">
<div className="max-w-xl mx-auto text-center">
<h2 className="text-2xl font-serif font-medium text-[#222222] tracking-tight">Join the Inora Family</h2>
<p className="mt-4 text-sm text-[#222222]/80 font-light">Subscribe to receive updates, access to exclusive deals, and more.</p>
<form className="mt-8 flex flex-col sm:flex-row gap-3">
<input className="w-full px-4 py-3 placeholder-gray-500 bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-[#C4A484] focus:border-transparent text-sm" placeholder="Enter your email" required="" type="email"/>
<button className="w-full sm:w-auto px-8 py-3 bg-[#222222] text-white text-sm font-medium hover:bg-[#333333] transition-colors whitespace-nowrap" type="submit">
                    Sign Up
                </button>
</form>
</div>
</section>

<footer className="bg-[#222222] text-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

<div className="md:col-span-4">
<h3 className="text-2xl font-serif font-semibold tracking-tighter text-white">INORA</h3>
<p className="mt-4 text-sm text-gray-400 font-light max-w-xs leading-relaxed">
                        Redefining everyday luxury with affordable, high-quality fashion jewelry designed for the modern woman.
                    </p>
<div className="mt-6 flex space-x-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="20" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="20" data-icon="lucide:facebook" data-width="20"></span>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="20" data-icon="lucide:twitter" data-width="20"></span>
</a>
</div>
</div>

<div className="md:col-span-2 md:col-start-6">
<h4 className="text-sm font-semibold uppercase tracking-wider text-[#C4A484]">Shop</h4>
<ul className="mt-6 space-y-3">
<li><a className="text-sm text-gray-400 hover:text-white transition-colors font-light" href="#">New Arrivals</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors font-light" href="#">Bestsellers</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors font-light" href="#">Necklaces</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors font-light" href="#">Earrings</a></li>
</ul>
</div>

<div className="md:col-span-2">
<h4 className="text-sm font-semibold uppercase tracking-wider text-[#C4A484]">Help</h4>
<ul className="mt-6 space-y-3">
<li><a className="text-sm text-gray-400 hover:text-white transition-colors font-light" href="#">Track Order</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors font-light" href="#">Shipping &amp; Returns</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors font-light" href="#">FAQ</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors font-light" href="#">Contact Us</a></li>
</ul>
</div>

<div className="md:col-span-2">
<h4 className="text-sm font-semibold uppercase tracking-wider text-[#C4A484]">Contact</h4>
<ul className="mt-6 space-y-3">
<li className="text-sm text-gray-400 font-light flex items-start gap-2">
<span className="iconify mt-0.5 shrink-0" data-icon="lucide:mail" data-width="14"></span>
                            hello@inora.pk
                        </li>
<li className="text-sm text-gray-400 font-light flex items-start gap-2">
<span className="iconify mt-0.5 shrink-0" data-icon="lucide:phone" data-width="14"></span>
                            +92 300 1234567
                        </li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-500 font-light">© 2024 Inora Pakistan. All rights reserved.</p>
<div className="flex space-x-4">

<span className="text-gray-500 hover:text-gray-300 cursor-pointer"><span className="iconify" data-icon="lucide:credit-card" data-width="20"></span></span>
<span className="text-gray-500 hover:text-gray-300 cursor-pointer"><span className="iconify" data-icon="lucide:lock" data-width="20"></span></span>
</div>
</div>
</div>
</footer>

    </>
  );
}
